"use client";

import Link from "next/link";
import {
  PHONE,
  ADDRESS,
  GOOGLE_MAPS_URL,
  FOOTER_LINKS,
  BUSINESS_NAME,
  HOURS,
} from "../lib/site";
import { trackEvent } from "../lib/analytics";

/**
 * Footer Component
 * - Address and phone information
 * - Quick navigation links
 * - Hours of operation
 * - White background with brand colors
 * - Accessible tap targets (48px+)
 * - Tracking for call_click and directions_click events
 */
export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact Info */}
          <div className="space-y-4">
            <h3 className="text-[#3C4973] font-bold text-lg">{BUSINESS_NAME}</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-600">Address</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("directions_click", {
                      source: "footer",
                    });
                  }}
                  className="text-slate-700 hover:text-[#3C4973] transition-colors min-h-12 flex items-center text-sm"
                >
                  {ADDRESS}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Phone</p>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  onClick={() => {
                    trackEvent("call_click", {
                      source: "footer",
                    });
                  }}
                  className="text-slate-700 hover:text-[#3C4973] transition-colors min-h-12 flex items-center font-semibold"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#3C4973] font-bold text-lg">Quick Links</h3>
            <nav className="space-y-2 flex flex-col">
              {FOOTER_LINKS.map((link: { href: string; label: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-[#3C4973] transition-colors min-h-12 flex items-center text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-[#3C4973] font-bold text-lg">Hours</h3>
            <div className="space-y-1 text-sm">
              {Object.entries(HOURS).map(([day, time]: [string, unknown]) => (
                <div key={day} className="flex justify-between">
                  <span className="text-slate-600">{day}</span>
                  <span className="text-slate-700">{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
