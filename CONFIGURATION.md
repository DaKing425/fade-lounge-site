# Fade Lounge Website Configuration

## Constants & Configuration (src/lib/site.ts)

All business information and configuration is centralized in `src/lib/site.ts` for easy management.

### Business Information

```typescript
// Business name and type
BUSINESS_NAME = "Fade Lounge"
BUSINESS_TYPE = "Barber"

// Location
ADDRESS = "602 2nd St, STE B, Snohomish, WA 98290"
CITY = "Snohomish"
STATE = "WA"
ZIP = "98290"
```

### Booking Integration

```typescript
// Booksy
BOOKSY_URL = "https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
PHONE = "(425) 244-7901"
GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=602+2nd+St+STE+B+Snohomish+WA+98290"
```

### Review Information

```typescript
REVIEW_RATING = 4.9
REVIEW_COUNT = 180
```

### Hours of Operation

```typescript
HOURS = {
  Monday: "9:00 AM - 7:00 PM",
  Tuesday: "9:00 AM - 7:00 PM",
  Wednesday: "9:00 AM - 7:00 PM",
  Thursday: "9:00 AM - 7:00 PM",
  Friday: "9:00 AM - 7:00 PM",
  Saturday: "9:00 AM - 5:00 PM",
  Sunday: "Closed",
};
```

### Navigation Structure

```typescript
NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];
```

## How to Update Configuration

### For Phase 1 (Current)
1. Edit `src/lib/site.ts` directly
2. Restart dev server: `npm run dev`
3. Changes will apply instantly

### For Phase 2+ (With CMS)
1. Move all content to Sanity CMS
2. Keep site.ts with CMS connection code
3. Export types from Sanity for type safety

## Environment Variables (Phase 2+)

Create `.env.local`:

```env
# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Analytics
NEXT_PUBLIC_GA_ID=G-your_ga_id

# Sanity CMS (when integrated)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

## Services Data Structure

Currently hardcoded on `/services` page. In Phase 2, this will come from CMS:

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: "haircuts" | "beard" | "specialty" | "kids";
  active: boolean;
}
```

## Team Data Structure

Currently hardcoded on `/team` page. In Phase 2, this will come from CMS:

```typescript
interface Barber {
  id: string;
  name: string;
  bio: string;
  specialties: string[];
  photo_url: string;
  socials?: {
    instagram?: string;
    facebook?: string;
  };
  active: boolean;
}
```

## Gallery Data Structure

Currently hardcoded on `/gallery` page. In Phase 2, this will come from CMS:

```typescript
interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  tags: ("fade" | "beard" | "design" | "kids")[];
  barber_id?: string;
  created_at: Date;
}
```

## Analytics Events Structure

All events tracked via gtag.js. When GA4 is configured, these will be recorded:

```typescript
// Book Now Click
gtag("event", "book_now_click", {
  location: "header" | "hero" | "mobile_menu" | "cta_footer" | "contact_page" | etc,
});

// Call Click
gtag("event", "call_click", {
  source: "header" | "footer" | "contact_page" | "fallback_button" | etc,
});

// Directions Click
gtag("event", "directions_click", {
  source: "footer" | "contact_page" | etc,
});

// Booksy Open
gtag("event", "booksy_open", {
  source: "embed" | "fallback_button" | "deep_link",
});

// Book Page View
gtag("event", "page_view", {
  page_path: "/book",
});

// Gallery Filter
gtag("event", "gallery_filter_used", {
  filter: "all" | "fade" | "beard" | "design" | "kids",
});
```

## Color Scheme

### Primary Colors
- **Dark Background**: `#0f172a` (slate-950)
- **Card Background**: `#1e293b` (slate-800)
- **Accent**: `#f97316` (orange-500)
- **Text Primary**: `#f1f5f9` (gray-100)
- **Text Secondary**: `#cbd5e1` (gray-300)

### Tailwind Classes Used
- Background: `bg-slate-950`, `bg-slate-900`, `bg-slate-800`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Accents: `text-orange-500`, `bg-orange-500`, `border-orange-500`
- Borders: `border-slate-700`

## Typography

- **Font Family**: Geist Sans (headings and body)
- **Fallback**: System fonts via next/font/google
- **Heading Hierarchy**: h1 (page title), h2 (sections), h3 (subsections)

## Responsive Breakpoints

Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Component Sizes

- **Min Tap Target**: 48px (height)
- **Header Height**: 64px (h-16)
- **Card Spacing**: p-4, p-6, p-8
- **Section Padding**: py-8, py-12, py-16

## File Structure & Imports

### Importing from site.ts

```typescript
import { 
  BOOKSY_URL, 
  PHONE, 
  ADDRESS,
  GOOGLE_MAPS_URL,
  NAV_LINKS,
  FOOTER_LINKS,
  HOURS
} from "@/src/lib/site";
```

Note: All files use relative imports (`../lib/site`) from src folder due to tsconfig path alias configuration.

## Migration Path to CMS (Phase 2)

1. **Sanity Schema** - Create GROQ queries for each content type
2. **API Routes** - Add Next.js API routes for content fetching
3. **Component Updates** - Modify components to fetch from CMS instead of hardcoded data
4. **ISR** - Implement Incremental Static Regeneration for content updates
5. **Preview Mode** - Setup preview for draft content

---

For detailed PRD requirements, see `docs/prd.md`
