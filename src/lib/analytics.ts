/**
 * Analytics Module - Phase 1
 * Tracks user interactions with GA4 events
 * 
 * Event Names (must match PRD exactly):
 * - book_now_click: Any "Book Now" CTA clicked (header/hero/services)
 * - booksy_open: Booksy embed loads OR deep-link clicked
 * - call_click: Tap-to-call tel: link clicked
 * - directions_click: Google Maps link clicked
 * - gallery_filter_used: Gallery filter applied
 * - barber_profile_viewed: Barber profile viewed
 * - book_page_view: User lands on /book page
 */

/**
 * Track a user interaction event with GA4
 * @param name - Event name (must match PRD event names)
 * @param payload - Optional event data
 */
export function trackEvent(
  name: string,
  payload?: Record<string, unknown>
): void {
  // Placeholder implementation for Phase 1
  // In Phase 2, this will integrate with real GA4
  const w = window as unknown as Record<string, unknown>;
  if (typeof window !== "undefined" && w.gtag) {
    (w.gtag as (event: string, name: string, config: Record<string, unknown>) => void)("event", name, payload || {});
  }
}
