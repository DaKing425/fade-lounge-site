/**
 * Contact Page - Phase 1
 * Displays contact info, map, hours, and call/directions CTAs
 * Tap-to-call and Google Maps integration
 */

"use client";

import { PHONE, ADDRESS, GOOGLE_MAPS_URL, HOURS } from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";
import { ui } from "@/src/lib/ui";

export default function ContactPage() {
  return (
    <div className={ui.container + " py-12"}>
      <div className="space-y-12">
        <div>
          <h1 className={ui.h2 + " mb-4"}>Contact Us</h1>
          <p className={ui.pLarge}>Get in touch with Fade Lounge</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className={ui.card + " p-6 space-y-3"}>
              <h3 className="text-lg font-bold text-[#3C4973]">Phone</h3>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                onClick={() => {
                  trackEvent("call_click", {
                    source: "contact_page",
                  });
                }}
                className="inline-block text-2xl font-bold text-slate-900 hover:text-[#9A3A4B] transition-colors min-h-12 flex items-center"
              >
                {PHONE}
              </a>
              <p className={ui.pSmall}>
                Tap to call or book your appointment
              </p>
            </div>

            {/* Address */}
            <div className={ui.card + " p-6 space-y-3"}>
              <h3 className="text-lg font-bold text-[#3C4973]">Location</h3>
              <p className="text-slate-900 font-semibold">{ADDRESS}</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("directions_click", {
                    source: "contact_page",
                  });
                }}
                className={ui.primaryBtn}
              >
                Get Directions
              </a>
            </div>

            {/* Parking */}
            <div className={ui.card + " p-6 space-y-3"}>
              <h3 className="text-lg font-bold text-[#3C4973]">Parking</h3>
              <p className={ui.muted}>
                Convenient parking available in front and side lot.
              </p>
            </div>

            {/* Hours */}
            <div className={ui.card + " p-6 space-y-3"}>
              <h3 className="text-lg font-bold text-[#3C4973]">Hours</h3>
              <div className="space-y-2">
                {Object.entries(HOURS).map(([day, time]: [string, unknown]) => (
                  <div key={day} className="flex justify-between text-slate-700">
                    <span className="font-semibold">{day}</span>
                    <span>{String(time)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            {/* Google Maps Embed */}
            <div className={ui.card + " overflow-hidden h-96"}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}&q=Fade+Lounge+Snohomish+WA`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Booking CTA */}
            <div className={ui.card + " p-8 text-center space-y-4"}>
              <h3 className={ui.h3}>Ready to book?</h3>
              <p className={ui.pLarge}>
                Quick and easy online booking via Booksy
              </p>
              <a
                href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  const w = window as unknown as Record<string, unknown>;
                  if (typeof window !== "undefined" && w.gtag) {
                    (w.gtag as (event: string, name: string, config: Record<string, unknown>) => void)("event", "book_now_click", {
                      source: "contact_page",
                    });
                  }
                }}
                className={ui.primaryBtn}
              >
                Book on Booksy
              </a>
            </div>
          </div>
        </div>

        {/* Walk-ins Section */}
        <div className={ui.card + " p-8"}>
          <h2 className={ui.h3 + " mb-4"}>Walk-ins Welcome</h2>
          <p className={ui.p + " mb-4"}>
            While we recommend booking online for guaranteed seating, we welcome
            walk-ins based on availability. No wait if you book ahead!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition-colors min-h-12 flex items-center justify-center"
            >
              Call to Check Availability
            </a>
            <a
              href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
              target="_blank"
              rel="noopener noreferrer"
              className={ui.primaryBtn}
            >
              Book Online Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
