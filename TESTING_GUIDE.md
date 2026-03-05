# Phase 1 Testing Guide - Fade Lounge Website

## Quick Start

### 1. Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### 2. Test All Routes

#### Homepage (`/`)
- ✅ Hero section with Snohomish barber messaging
- ✅ Services preview strip
- ✅ Gallery preview grid
- ✅ Team preview cards
- ✅ Reviews section (4.9★, 180+ reviews)
- ✅ CTA buttons link to Booksy (currently external)

#### Services (`/services`)
- ✅ All 12 services listed with pricing and duration
- ✅ Service cards with proper styling
- ✅ "Book on Booksy" CTA

#### Book Now (`/book`)
- ✅ Booksy embed container (empty until configured)
- ✅ After 2.5 seconds, fallback UI appears
- ✅ Fallback shows: "Call Us" button + "Open Booksy" button + error message
- ✅ Both fallback buttons are functional (call/link)

#### Team (`/team`)
- ✅ 3 barber cards (Carlos, Marco, Jose)
- ✅ Each with bio and specialties
- ✅ Direct booking links to Booksy

#### Gallery (`/gallery`)
- ✅ 12 placeholder gallery items
- ✅ Filter buttons: All, Fades, Beard Services, Designs, Kids Cuts
- ✅ Click filters to see filtered results
- ✅ Responsive grid layout

#### About (`/about`)
- ✅ Fade Lounge story and philosophy
- ✅ Shop values messaging

#### Contact (`/contact`)
- ✅ Phone number - tap to call (tel: link)
- ✅ Address - tap for directions (Google Maps link)
- ✅ Hours table
- ✅ Parking information
- ✅ Google Maps embed (will be empty until API key configured)
- ✅ Walk-in information

#### Legal (`/legal`)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Cancellation Policy

### 3. Component Testing

#### Header
- ✅ Sticky at top of all pages
- ✅ Logo links to home
- ✅ Navigation links work
- ✅ "Book Now" button in desktop nav
- ✅ Mobile hamburger menu (toggle on small screens)
- ✅ Mobile "Book Now" button in menu

#### Footer
- ✅ Address and phone on all pages
- ✅ Quick links navigation
- ✅ Business hours
- ✅ Tap-to-call phone link
- ✅ Directions link works

### 4. Responsive Design

Test on multiple screen sizes:
- ✅ Mobile (375px)
- ✅ Tablet (768px)
- ✅ Desktop (1024px+)
- ✅ All tap targets should be 48px+ minimum

### 5. Accessibility

- ✅ Use keyboard to navigate (Tab through all links/buttons)
- ✅ Links are clearly focused
- ✅ Color contrast is sufficient
- ✅ Headings are properly hierarchical

### 6. Analytics Events (Setup Required)

Once GA4 is configured, these events should fire:

- `book_now_click` - When "Book Now" button clicked (location: header, hero, mobile_menu, cta_footer, etc.)
- `call_click` - When phone number tapped
- `directions_click` - When "Get Directions" tapped
- `booksy_open` - When Booksy embed loads or fallback button clicked
- `gallery_filter_used` - When gallery filters clicked

### 7. Known Placeholder Items

These will be connected to CMS in Phase 2:

- Gallery images (currently emoji placeholders)
- Team member photos (currently letter placeholders)
- Barber bios (placeholder text)
- Services description (placeholder text)
- Hours (hardcoded in `src/lib/site.ts`)
- Google Maps embed (needs API key in env)
- Booksy embed on /book (needs iframe configuration)

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type check
npx tsc --noEmit
```

## Environment Setup (Phase 2+)

Create `.env.local`:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

## Architecture

- **Styling**: Tailwind CSS (configured in tailwind.config.ts)
- **Font**: Geist Sans/Mono from next/font/google
- **Components**: Modular React components
- **State**: Client-side React state (gallery filters, mobile menu)
- **Routing**: Next.js 16 App Router

## Files Structure

```
src/
├── lib/site.ts                    # Constants (BOOKSY_URL, PHONE, ADDRESS, etc.)
├── components/
│   ├── Header.tsx                # Sticky nav header
│   └── Footer.tsx                # Footer with hours/contact

app/
├── page.tsx                       # Home
├── services/page.tsx              # Services listing
├── book/page.tsx                  # Booksy integration page
├── team/page.tsx                  # Team/barbers
├── gallery/page.tsx               # Gallery with filters
├── about/page.tsx                 # About page
├── contact/page.tsx               # Contact page
├── legal/page.tsx                 # Legal pages
├── layout.tsx                     # Root layout (Header + Footer)
└── globals.css                    # Global styles

public/                            # Static assets
docs/prd.md                        # Product requirements (source of truth)
```

## Testing Checklist

- [ ] All routes load without errors
- [ ] Header and footer appear on all pages
- [ ] Mobile hamburger menu works
- [ ] All links are clickable and navigate correctly
- [ ] Tap-to-call links work on mobile
- [ ] Gallery filters function correctly
- [ ] Responsive design looks good on all breakpoints
- [ ] No console errors in browser DevTools
- [ ] Dark theme loads properly
- [ ] Orange accent colors display correctly
- [ ] Booksy fallback UI appears after 2.5 seconds on /book
- [ ] All GA4 event names are in place (ready for analytics setup)

## Next Steps for Integration

1. **Sanity CMS Setup** - Configure headless CMS for content management
2. **GA4 Tracking ID** - Add to layout.tsx for analytics
3. **Google Maps API Key** - Configure in env for embed
4. **Booksy Integration** - Test embed or implement deep-link UI
5. **Image Optimization** - Replace emoji placeholders with real images
6. **SEO** - Add schema markup, sitemap, robots.txt
7. **Performance** - Run Lighthouse audit

---

**Ready to test Phase 1!** 🚀
