# MIC2025 - Montessori International Convention 2025 Digital Program

A production-ready, mobile-first website built with vanilla HTML/CSS/JS that replaces printed schedules via QR code access.

## Features

### ✅ Core Functionality
- **Single-page app** with hash routing (#program, #agenda, #speakers, #venue, #about, #sponsors)
- **Mobile-first responsive design** with clean, minimalist UI
- **Sticky search** with real-time filtering by title, presenter, room
- **Session bookmarking** with localStorage persistence
- **Modal session details** with backdrop scroll lock
- **Speaker directory** with flag emojis and search
- **Venue information** with embedded map and external links

### ✅ Branding & Design
- **Brand colors**: Gold (#F1B33A), Purple (#9F34FA), Blue (#4C4CF1)
- **Clean typography** using system font stack (Inter/Apple system fonts)
- **Smooth transitions** and subtle animations
- **High contrast** accessible focus states
- **Card-based layout** with soft shadows and rounded corners

### ✅ Accessibility
- **Semantic HTML** with proper ARIA roles and landmarks
- **Keyboard navigation** with tab order and focus management
- **Screen reader support** with proper labels and descriptions
- **Color contrast** meeting AA+ standards
- **Modal focus trapping** and ESC key support

### ✅ Performance
- **No build step required** - runs directly from index.html
- **Optimized CSS** with custom properties and efficient selectors
- **Lazy loading** for iframe content
- **Minimal JavaScript** with efficient DOM manipulation
- **LocalStorage** for state persistence

## File Structure

### Single-File Version
```
/
├── index.html          # Complete single-file implementation
```

### Split-File Version
```
/
├── index-split.html    # HTML structure
├── style.css          # All CSS styles
└── app.js             # All JavaScript functionality
```

## Usage

1. **Single-file**: Open `index.html` in any modern browser
2. **Split-file**: Open `index-split.html` in any modern browser

Both versions provide identical functionality and can be served from any web server or opened locally.

## Data Model

### Sessions
- **15 seed sessions** across Friday, Saturday, Sunday
- **5 themes**: Early Childhood, Elementary, Adolescent, Leadership, Research
- **5 rooms**: Grand Ballroom, Conference Room A/B, Workshop Room 1/2
- **International presenters** with flag emoji indicators

### Storage
- **Bookmarks**: `mic2025_bookmarks` - Array of session IDs
- **Last View**: `mic2025_view` - Last visited section

## Key Features

### Program View
- Sticky search input with backdrop blur
- Day/Theme/Room filters with instant results
- Day tabs that sync with filters
- Session cards with bookmark stars
- Expandable session descriptions

### My Agenda
- Shows only bookmarked sessions
- Empty state with guidance
- Same card layout as program view

### Speakers
- Grid layout with flag emojis
- Search by speaker name
- Clean card design

### Venue
- Brighton Hotel Sydney information
- Embedded Google Maps
- External links for directions, cafes, transport, parking
- Nearby options list
- Floorplan placeholder

### Session Modal
- Detailed session information
- Add/Remove bookmark functionality
- Keyboard accessible (ESC to close)
- Focus management

## Browser Support

- **Modern browsers** with ES6+ support
- **Mobile Safari** (iOS 12+)
- **Chrome** (70+)
- **Firefox** (65+)
- **Edge** (79+)

## Performance Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse Accessibility**: 95+

## TODO Items

- [ ] Replace floorplan placeholder with actual image
- [ ] Add sponsor content (Platinum/Gold/Silver/Exhibitors)
- [ ] Consider PWA enhancements (service worker, manifest)

## Development Notes

- **No frameworks** - Pure vanilla HTML/CSS/JS
- **Modular JavaScript** with clear function separation
- **CSS custom properties** for consistent theming
- **Responsive design** with mobile-first approach
- **Accessibility-first** development approach

## Testing Checklist

- [x] Hash routing works correctly
- [x] Search and filters combine properly
- [x] Bookmarks persist across page refreshes
- [x] Modal opens/closes with all methods
- [x] Keyboard navigation functions
- [x] Mobile responsive design
- [x] External links open in new tabs
- [x] Map iframe loads correctly
- [x] Flag emojis display properly
- [x] Empty states show appropriate messages
