#!/usr/bin/env node

/**
 * Generate gallery metadata by pairing full-size images with thumbnails.
 */

const fs = require('fs/promises');
const path = require('path');

const ROOT = __dirname;
const GALLERY_DIR = path.join(ROOT, 'gallery');
const FULL_DIR = path.join(GALLERY_DIR, 'full');
const THUMBS_DIR = path.join(GALLERY_DIR, 'thumbs');
const OUTPUT_FILE = path.join(GALLERY_DIR, 'gallery.json');

async function safeReadDir(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
  } catch (err) {
    console.error(`Failed to read directory ${dir}:`, err.message);
    return [];
  }
}

function getBaseName(filename) {
  const lower = filename.toLowerCase();
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  for (const ext of extensions) {
    const idx = lower.indexOf(ext);
    if (idx !== -1) {
      return filename.slice(0, idx);
    }
  }
  return path.parse(filename).name;
}

function extractCategory(filename) {
  const [possibleCategory] = filename.split(' - ');
  return possibleCategory && possibleCategory.trim().length > 0
    ? possibleCategory.trim()
    : 'General';
}

function buildTitle(filename, category) {
  const withoutCategory = filename.startsWith(`${category} - `)
    ? filename.slice(category.length + 3)
    : filename;

  // Remove extensions (even double ones like .jpg_web.jpg)
  const withoutExtension = withoutCategory.replace(/\.[^.]+$/g, '').replace(/\.[^.]+$/g, '');

  // Replace separators with spaces and tidy up whitespace
  const cleaned = withoutExtension
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned.length > 0 ? cleaned : category;
}

async function generateGallery() {
  const [fullFiles, thumbFiles] = await Promise.all([safeReadDir(FULL_DIR), safeReadDir(THUMBS_DIR)]);

  const thumbsByBase = new Map();
  thumbFiles.forEach((filename) => {
    thumbsByBase.set(getBaseName(filename), filename);
  });

  const entries = [];
  const missingThumbs = [];

  for (const fullFile of fullFiles) {
    const base = getBaseName(fullFile);
    const thumbFile = thumbsByBase.get(base);

    if (!thumbFile) {
      missingThumbs.push(fullFile);
      continue;
    }

    const category = extractCategory(fullFile);
    const title = buildTitle(fullFile, category);

    entries.push({
      type: 'image',
      category,
      full: `gallery/full/${fullFile}`,
      thumb: `gallery/thumbs/${thumbFile}`,
      title,
      desc: `MIC 2025 — ${category}`,
    });
  }

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(entries, null, 2), 'utf8');
  console.log(`Generated ${entries.length} gallery items → ${OUTPUT_FILE}`);

  if (missingThumbs.length) {
    console.warn('Missing thumbnails for:', missingThumbs);
  }
}

generateGallery().catch((err) => {
  console.error('Failed to generate gallery metadata:', err);
  process.exit(1);
});

