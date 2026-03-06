/**
 * Services Page - Phase 1
 * Displays all barber services with pricing and durations
 * Will be connected to CMS in later phases
 */

"use client";

import { BOOKSY_URL } from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";
import { ui } from "@/src/lib/ui";

export default function ServicesPage() {
  return (
    <div className={ui.container + " py-12"}>
      <div className="space-y-8">
        <div>
          <h1 className={ui.h2 + " mb-4"}>Our Services</h1>
          <p className={ui.pLarge}>
            Premium barbershop services in Snohomish, WA
          </p>
        </div>

        {/* Services Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>Skin Fade</h3>
            <p className={ui.pSmall + " mb-4"}>
              Classic skin fade with clean line work
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$40</span>
              <span className="text-slate-500 text-sm">45 min</span>
            </div>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Classic/Gentleman Haircut
            </h3>
            <p className={ui.pSmall + " mb-4"}>
              Timeless cut with professional styling
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$35</span>
              <span className="text-slate-500 text-sm">45 min</span>
            </div>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Kids Regular Haircut
            </h3>
            <p className={ui.pSmall + " mb-4"}>
              Friendly service for young clients
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$30</span>
              <span className="text-slate-500 text-sm">45 min</span>
            </div>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Haircut & Beard
            </h3>
            <p className={ui.pSmall + " mb-4"}>
              Complete grooming package
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$60</span>
              <span className="text-slate-500 text-sm">1h 15m</span>
            </div>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Beard Line Up/Shaping
            </h3>
            <p className={ui.pSmall + " mb-4"}>
              Precision beard grooming
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$30</span>
              <span className="text-slate-500 text-sm">30 min</span>
            </div>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Haircut with Design
            </h3>
            <p className={ui.pSmall + " mb-4"}>
              Custom designs and patterns
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#9A3A4B] font-bold text-lg">$55</span>
              <span className="text-slate-500 text-sm">1h</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg p-8 border border-slate-200 text-center">
          <h2 className={ui.h3 + " mb-4"}>Ready to book?</h2>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("book_now_click", {
                location: "services_page",
              });
            }}
            className={ui.primaryBtn}
          >
            Book on Booksy
          </a>
        </div>
      </div>
    </div>
  );
}
