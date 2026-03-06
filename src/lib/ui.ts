/**
 * Design Tokens for Fade Lounge
 * Central source of truth for all UI styling
 * Uses Tailwind CSS classes - no additional dependencies
 */

export const ui = {
  // Layout & Containers
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-32",
  sectionTight: "py-16",

  // Cards & Boxes
  card: "bg-white border border-slate-200 rounded-lg shadow-sm",
  cardHeader: "p-6 space-y-3",

  // Typography
  h1: "text-6xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight",
  h2: "text-5xl font-bold text-slate-900",
  h3: "text-2xl font-bold text-slate-900",
  h4: "text-xl font-bold text-slate-900",

  p: "text-slate-700 leading-relaxed",
  pLarge: "text-lg text-slate-700 leading-relaxed",
  pSmall: "text-sm text-slate-600",
  muted: "text-slate-600",
  mutedSmall: "text-sm text-slate-600",

  // Buttons
  primaryBtn:
    "inline-flex items-center justify-center h-12 px-6 bg-[#9A3A4B] text-white font-semibold rounded-lg hover:bg-[#7d2e3c] transition-colors duration-200",
  primaryBtnLarge:
    "inline-flex items-center justify-center h-13 px-10 bg-[#9A3A4B] text-white font-semibold rounded-lg hover:bg-[#7d2e3c] transition-colors duration-200",
  secondaryBtn:
    "inline-flex items-center justify-center h-12 px-6 border-2 border-[#3C4973] text-[#3C4973] font-semibold rounded-lg hover:border-[#9A3A4B] hover:text-[#9A3A4B] transition-colors duration-200",
  secondaryBtnLarge:
    "inline-flex items-center justify-center h-13 px-10 border-2 border-[#3C4973] text-[#3C4973] font-semibold rounded-lg hover:border-[#9A3A4B] hover:text-[#9A3A4B] transition-colors duration-200",
  link: "text-[#3C4973] font-semibold hover:text-[#9A3A4B] transition-colors",
  linkSmall: "text-[#3C4973] font-medium hover:text-[#9A3A4B] transition-colors text-sm",

  // Chips & Tags
  chip: "bg-[#F8FAFC] text-[#3C4973] text-xs px-3 py-1 rounded",

  // Dividers
  divider: "border-slate-200",

  // Colors (for reference, use in className strings)
  brandBlue: "#3C4973",
  brandRed: "#9A3A4B",
  brandLight: "#F8FAFC",

  // Transitions
  transition: "transition-colors duration-200",
};
