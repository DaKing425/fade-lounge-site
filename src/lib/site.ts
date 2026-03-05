/**
 * Site configuration and constants
 * These values are hardcoded for Phase 1 and will be moved to CMS in later phases
 */

export const BOOKSY_URL =
  "https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish";

export const PHONE = "(425) 244-7901";

export const ADDRESS = "602 2nd St, STE B, Snohomish, WA 98290";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=602+2nd+St+STE+B+Snohomish+WA+98290";

/**
 * Business information for schema markup
 */
export const BUSINESS_NAME = "Fade Lounge";
export const BUSINESS_TYPE = "Barber";
export const CITY = "Snohomish";
export const STATE = "WA";
export const ZIP = "98290";

/**
 * Review information (from Booksy)
 */
export const REVIEW_RATING = 4.9;
export const REVIEW_COUNT = 180;

/**
 * Navigation links (in header/footer)
 */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Footer quick links
 */
export const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];

/**
 * Hours of operation (hardcoded for Phase 1, will be in CMS later)
 */
export const HOURS = {
  Monday: "9:00 AM - 7:00 PM",
  Tuesday: "9:00 AM - 7:00 PM",
  Wednesday: "9:00 AM - 7:00 PM",
  Thursday: "9:00 AM - 7:00 PM",
  Friday: "9:00 AM - 7:00 PM",
  Saturday: "9:00 AM - 5:00 PM",
  Sunday: "Closed",
};
