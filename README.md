# Borbála Nagy - Filmmaker Portfolio

A modern, professional portfolio website for filmmaker Borbála Nagy, showcasing her works and directing vision.

## 🎬 About

This is a Next.js-based portfolio website featuring:

- **Landing Page**: Hero section with director introduction (fits in one screen, no scroll)
- **About Page**: Director biography and professional background
- **Vision Page**: Directorial vision and approach to filmmaking
- **Works Page**: Complete filmography with film details
- **Individual Film Pages**: Detailed pages for each film with stills and credits
- **Contact Page**: Professional contact information and inquiry form

## 🎨 Brand & Design

**Brand Values**: Trustworthy, Courageous, Sincere, Mature

**Brand Colors**:
- Primary: `#F1574D` (coral/red)
- Secondary: `#7DB4EC` (light blue)

The design maintains a professional, mature aesthetic with clean typography and visual hierarchy that reflects the director's brand values.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Outfit (Google Fonts)
- **Development**: Turbopack for fast development

## 📁 Project Structure

```
src/app/
├── components/
│   └── Navigation.tsx      # Main navigation component
├── about/
│   └── page.tsx           # Director biography
├── vision/
│   └── page.tsx           # Directorial vision
├── works/
│   ├── page.tsx           # Film portfolio grid
│   └── [slug]/
│       └── page.tsx       # Individual film pages
├── contact/
│   └── page.tsx           # Contact information
├── globals.css            # Global styles with brand colors
├── layout.tsx             # Root layout with navigation
└── page.tsx               # Landing page with hero section
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Development Notes

- Landing page designed to fit in viewport without scrolling
- Uses brand colors consistently throughout
- Responsive design for all screen sizes
- Focus on accessibility and professional presentation
- Image placeholders ready for actual film stills and photos

## 🎯 Features Implemented

- ✅ Responsive navigation bar
- ✅ Hero landing page that fits in one screen
- ✅ About page with director biography
- ✅ Works page showcasing all films
- ✅ Dynamic routing for individual film pages
- ✅ Contact page with form
- ✅ Brand color integration
- ✅ Professional typography and spacing
- ✅ Mobile-responsive design

## 📋 Content To Add

- Replace image placeholders with actual film stills
- Add director photography
- Complete film data for all works
- Add vision page content
- Configure contact form functionality
- Add film festival information and awards

## 🎨 Customization

Brand colors are defined in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS custom properties

To update colors, modify the values in both files.

---

**Created for**: Borbála Nagy, Filmmaker  
**Technology**: Next.js 14, TypeScript, Tailwind CSS  
**Status**: Development Ready
