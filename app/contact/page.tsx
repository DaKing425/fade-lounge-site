/**
 * Contact Page - Phase 1
 * Displays contact info, map, hours, and call/directions CTAs
 * Tap-to-call and Google Maps integration
 */

"use client";

import { PHONE, ADDRESS, GOOGLE_MAPS_URL, HOURS } from "@/src/lib/site";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">Get in touch with Fade Lounge</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-500">Phone</h3>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "call_click", {
                      source: "contact_page",
                    });
                  }
                }}
                className="inline-block text-2xl font-bold text-white hover:text-orange-500 transition-colors min-h-12 flex items-center"
              >
                {PHONE}
              </a>
              <p className="text-gray-400 text-sm">
                Tap to call or book your appointment
              </p>
            </div>

            {/* Address */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-500">Location</h3>
              <p className="text-white font-semibold">{ADDRESS}</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "directions_click", {
                      source: "contact_page",
                    });
                  }
                }}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors min-h-12 flex items-center justify-center"
              >
                Get Directions
              </a>
            </div>

            {/* Parking */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-500">Parking</h3>
              <p className="text-gray-400">
                Convenient parking available in front and side lot.
              </p>
            </div>

            {/* Hours */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-500">Hours</h3>
              <div className="space-y-2">
                {Object.entries(HOURS).map(([day, time]: [string, unknown]) => (
                  <div key={day} className="flex justify-between text-gray-300">
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
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden h-96">
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
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Ready to book?</h3>
              <p className="text-orange-100">
                Quick and easy online booking via Booksy
              </p>
              <a
                href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "book_now_click", {
                      source: "contact_page",
                    });
                  }
                }}
                className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors min-h-12 flex items-center justify-center"
              >
                Book on Booksy
              </a>
            </div>
          </div>
        </div>

        {/* Walk-ins Section */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Walk-ins Welcome</h2>
          <p className="text-gray-300 mb-4">
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
              className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition-colors min-h-12 flex items-center justify-center"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
