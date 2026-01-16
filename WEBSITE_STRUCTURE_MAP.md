# 🎬 BORBÁLA NAGY FILMMAKER PORTFOLIO - PAGE STRUCTURE MAP

## 📁 PROJECT OVERVIEW
```
Borbála Nagy Filmmaker Website
├── Framework: Next.js 14+ with App Router
├── Styling: Custom CSS (globals.css) + Tailwind CSS
├── Language: TypeScript
└── Deployment: Ready for Vercel/Netlify
```

## 🗺️ WEBSITE STRUCTURE MAP

### 📄 MAIN PAGES
```
🏠 HOME PAGE (/)
├── Route: /src/app/page.tsx
├── Components: Header, ImageSlider
├── Features: Hero text, CTA button, Image gallery
├── CSS Classes: .home-container, .hero-content, .cta-button
└── Images: Slider images from ImageSlider component

📖 ABOUT PAGE (/about)
├── Route: /src/app/about/page.tsx
├── Components: Header
├── Features: Director biography, portrait photo
├── CSS Classes: .page-container, .main-content
└── Images: /images/about/ABOUT IMAGE.jpg

🎯 VISION PAGE (/vision)
├── Route: /src/app/vision/page.tsx
├── Components: Header
├── Features: Director's vision statement, portrait
├── CSS Classes: .page-container, .main-content
└── Images: /images/vision/VISION IMAGE.jpg

🎬 WORKS PAGE (/works)
├── Route: /src/app/works/page.tsx
├── Components: Header, FilmModal
├── Features: Film grid (3x3), Modal popups
├── CSS Classes: .works-container, .film-card, .works-top-grid, .works-bottom-grid
├── Modal: FilmModal component for film details
└── Images: Film thumbnails from content.ts

📞 CONTACT PAGE (/contact)
├── Route: /src/app/contact/page.tsx
├── Components: Header
├── Features: Contact information, professional details
├── CSS Classes: .page-container, .main-content
└── No images

🗞️ PRESS PAGE (/press)
├── Route: /src/app/press/page.tsx
├── Components: Header
├── Features: Press coverage, media mentions
├── CSS Classes: .page-container, .main-content
└── Status: Basic structure created

🎭 INDIVIDUAL FILM PAGES (/works/[slug])
├── Route: /src/app/works/[slug]/page.tsx
├── Components: Header
├── Features: Film details, gallery, credits
├── CSS Classes: .film-detail-page, .film-info-section
└── Status: Static route structure (replaced by modal)
```

## 🧩 COMPONENT STRUCTURE
```
📦 COMPONENTS (/src/app/components/)
├── 🎯 Header.tsx
│   ├── Navigation menu (desktop)
│   ├── Mobile hamburger menu
│   ├── Logo (SVG)
│   └── CSS: .header, .mobile-menu
│
├── 🖼️ ImageSlider.tsx
│   ├── Auto-sliding gallery
│   ├── Manual navigation dots
│   ├── Smooth transitions
│   └── CSS: .image-slider-container
│
└── 🎬 FilmModal.tsx
    ├── Full-screen film details
    ├── Image gallery with navigation
    ├── Cast, crew, awards display
    ├── Close/navigation buttons
    └── CSS: .film-modal-overlay
```

## 🎨 STYLING ARCHITECTURE
```
📝 CSS STRUCTURE (/src/app/globals.css)
├── 🎨 CSS Variables
│   ├── --page-top-spacing: 40px
│   └── --page-side-spacing: 80px
│
├── 🎯 Brand Colors
│   ├── Primary: #F1574D (coral/red)
│   ├── Secondary: #7DB4EC (light blue)
│   └── Background: #FDF4EC (cream)
│
├── 📱 Responsive Design
│   ├── Mobile: ≤768px (single column)
│   └── Desktop: >768px (grid layouts)
│
└── 🎬 Component Styles
    ├── Header & Navigation
    ├── Film Cards & Grid
    ├── Modal Components
    └── Page Layouts
```

## 📁 CONTENT STRUCTURE
```
📄 CONTENT DATA (/src/app/content.ts)
├── 🎭 Vision Statement
│   ├── Title, statement, quote
│   └── Used by: Vision page
│
└── 🎬 Films Array (9 films)
    ├── Nothing to See Here (Development)
    ├── Mambo Maternica (Post-production)
    ├── Land of Glory (2020)
    ├── Everything Alright (2019)
    ├── Asphalt Flowers (2018)
    ├── Cross-Country Drive (2016)
    ├── Somewhere Else (2015)
    ├── About Me and You (2015)
    └── Hannah (2013)
```

## 🖼️ IMAGE STRUCTURE
```
📁 IMAGES (/public/images/)
├── 🎬 Film Images (PNG format)
│   ├── /nothing-to-see-here/image1.png
│   ├── /mambo-maternica/image1-3.png
│   ├── /land-of-glory/image1.png
│   ├── /everything-alright/image1.png
│   ├── /asphalt-flowers/image1.png
│   ├── /cross-country-drive/image1.png
│   ├── /somewhere-else/image1.png
│   ├── /about-me-and-you/image1.png
│   └── /hannah/image1.png
│
└── 📷 Page Images (JPG format)
    ├── /about/ABOUT IMAGE.jpg
    └── /vision/VISION IMAGE.jpg
```

## 🔄 NAVIGATION FLOW
```
🏠 HOME
├── 📖 About → Biography
├── 🎯 Vision → Director's vision
├── 🎬 Works → Film portfolio
│   └── 🎭 Film Modal → Individual film details
├── 🗞️ Press → Media coverage
└── 📞 Contact → Contact info

📱 MOBILE MENU
├── Hamburger toggle
├── Slide-out menu
├── Same navigation structure
└── Single-column layouts
```

## 🎯 KEY FEATURES
```
✅ COMPLETED FEATURES
├── 📱 Responsive design (mobile + desktop)
├── 🎬 Film portfolio with modal system
├── 🖼️ Auto-sliding image gallery
├── 🎨 Brand-consistent styling
├── 📝 Comprehensive film data
├── 🧭 Smooth navigation
└── 💻 Professional presentation

🔄 MODAL SYSTEM
├── Full-screen film details
├── Previous/Next navigation
├── Keyboard shortcuts (ESC, arrows)
├── Image gallery with thumbnails
└── Detailed cast/crew/awards info

🎨 DESIGN SYSTEM
├── Consistent spacing (CSS variables)
├── Brand color integration
├── Typography hierarchy
├── Hover effects and transitions
└── Professional film industry aesthetic
```

## 🚀 DEPLOYMENT READY
```
✅ PRODUCTION READY
├── 📦 All dependencies installed
├── 🏗️ Build-ready Next.js structure
├── 🎨 Optimized CSS architecture
├── 🖼️ Image structure organized
├── 📱 Mobile responsive
├── 🔍 SEO metadata configured
└── 🌐 Ready for Vercel deployment
```

## 📐 DESIGN RULES & RESTRICTIONS

### 🏠 HOME PAGE LAYOUT REQUIREMENTS
```
✅ MANDATORY RULES
├── Landing page MUST fit in one screen (no vertical scroll)
├── Hero section should be visible without scrolling
├── Header stays at top (80px fixed height)
└── Copyright footer must be visible at bottom

📱 MOBILE RESPONSIVENESS (≤768px)
├── Page must fit in viewport on all mobile screen sizes
├── NO horizontal scrolling allowed
├── Copyright footer pushes content up (not the header)
└── Maintain optical centering of hero content

🎯 ELEMENT PRIORITY ON SMALL SCREENS
├── 1. Header - Fixed at 80px (never shrinks)
├── 2. Gallery - Maintain visibility (38-45vh height)
├── 3. Hero Text - SHRINKS FIRST (aggressive compression)
├── 4. CTA Button - Shrinks proportionally
└── 5. Copyright Footer - Always visible at bottom

📏 TEXT COMPRESSION RULES
├── Desktop: 16-20px font size
├── Mobile (≤768px): 11-16px → starts shrinking
├── Short screens (≤700px height): 10-13px
├── Ultra-small (≤600px height): 9-11px
└── Text should shrink before gallery gets covered

🖼️ GALLERY RULES
├── Desktop: max-height 60vh
├── Mobile: max-height 38vh (fixed, doesn't shrink)
├── Gallery must remain fully visible (not covered)
├── Gallery has flex-shrink: 0 (does not compress)
└── Overflow: visible (nothing gets cut off)

📐 VERTICAL SPACE DISTRIBUTION
├── Use flexbox with justify-content: space-between
├── Hero content: flex-shrink: 2 (shrinks twice as fast)
├── Gallery: flex-shrink: 0 (maintains size)
├── Footer: flex-shrink: 0 (always visible)
└── Dynamic gaps using clamp() for fluid spacing
```

### 🎨 STYLING ARCHITECTURE RULES
```
✅ STYLE ORGANIZATION
├── ALL styles go in /src/app/globals.css
├── NO inline styles in TSX/JSX files
├── NO style-related code in component files
├── Use CSS classes exclusively
└── Maintain separation of concerns

📱 RESPONSIVE BREAKPOINTS
├── Desktop: min-width 768px
├── Mobile: max-width 768px
├── Short screens: max-height 700px
├── Ultra-small: max-height 600px
└── Combine width + height for precise control

🎯 MOBILE-FIRST APPROACH
├── Base styles for mobile
├── Progressive enhancement for desktop
├── Aggressive text compression on small screens
├── Maintain visual hierarchy at all sizes
└── Prioritize content visibility over aesthetics
```

### 🔒 BRAND & DESIGN CONSTRAINTS
```
🎨 BRAND COLORS (STRICT)
├── Primary: #F1574D (coral/red) - CTA buttons, accents
├── Secondary: #7DB4EC (light blue) - Minimal use
├── Background: #FDF4EC (cream) - All pages
├── Text: #333333 (dark gray) - Body text
└── White: #FFFFFF - Buttons, overlays

✨ BRAND VALUES (GUIDE DESIGN)
├── Trustworthy - Clean, professional layouts
├── Courageous - Bold typography, confident spacing
├── Sincere - Authentic content presentation
├── Mature - Sophisticated color palette, refined UI
└── Professional - Film industry standards

🎯 OPTICAL CENTERING
├── Hero content should appear optically centered
├── Not mathematically centered (feels too low)
├── Account for visual weight of elements
├── Use space-between for natural distribution
└── Gallery provides visual anchor at bottom

🚫 RESTRICTIONS
├── NO horizontal scroll on any device
├── NO content overflow (all must be visible)
├── NO covering gallery with footer
├── NO adding styles to TSX files
├── NO fixed heights that break responsive design
└── NO removing copyright footer to save space
```

### 🔧 TECHNICAL IMPLEMENTATION NOTES
```
📐 FLEXBOX LAYOUT
├── .page-container: height 100vh, overflow hidden
├── .home-main: flex column, justify-content space-between
├── .hero-content: flex-shrink 2, min-height 0
├── .hero-gallery: flex-shrink 0 (maintains size)
└── .copyright-footer: flex-shrink 0, always visible

📏 RESPONSIVE UNITS
├── Use clamp() for fluid typography
├── vh units for height constraints
├── vw units for width-based scaling
├── Combine min/max for precise control
└── box-sizing: border-box everywhere

🎯 Z-INDEX LAYERS
├── Mobile menu: 1002
├── Mobile overlay: 1001
├── Header logo: 1001
├── Copyright footer: 10
└── Modals: Higher as needed

⚡ PERFORMANCE
├── Avoid deep nesting in CSS
├── Use CSS variables for consistency
├── Minimize layout shifts
├── Optimize for mobile devices
└── Test on real devices when possible
```

---
*This map represents the complete structure of Borbála Nagy's filmmaker portfolio website as of January 2026.*