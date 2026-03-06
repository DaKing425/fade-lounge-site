/**
 * Book Now Page - Phase 1
 * Displays Booksy embed with fallback to call/deep-link
 * Fallback shows after 2-3 second timeout if embed doesn't load
 */

"use client";

import { useEffect, useState } from "react";
import {
  BOOKSY_URL,
  PHONE,
  BOOKSY_EMBED_TIMEOUT,
  BOOKSY_FALLBACK_ERROR_TEXT,
} from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";
import { ui } from "@/src/lib/ui";

export default function BookPage() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Track page view event as per PRD requirement
    trackEvent("book_page_view");

    // Show fallback UI after 2.5 seconds if Booksy hasn't loaded
    const timer = setTimeout(() => {
      // Check if Booksy widget has loaded by looking for iframe
      const booksyFrame = document.querySelector('iframe[src*="booksy"]');
      if (!booksyFrame) {
        setShowFallback(true);
      }
    }, BOOKSY_EMBED_TIMEOUT);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={ui.container + " py-12"}>
      <div className="space-y-8">
        <div>
          <h1 className={ui.h2 + " mb-4"}>Book Your Appointment</h1>
          <p className={ui.pLarge}>
            Quick and easy booking through our Booksy integration
          </p>
        </div>

        {/* Booksy Embed Container */}
        <div className={ui.card + " p-8 min-h-96"}>
          <div
            id="booksy-widget"
            className="booksy-widget"
            data-url={BOOKSY_URL}
          >
            {/* Booksy widget will load here */}
            <p className={ui.muted + " text-center"}>Loading booking system...</p>
          </div>
        </div>

        {/* Fallback UI - shows if embed doesn't load */}
        {showFallback && (
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-bold text-amber-900">
              Having trouble loading?
            </h2>
            <p className="text-amber-800">
              {BOOKSY_FALLBACK_ERROR_TEXT}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("booksy_open", {
                    source: "fallback_button",
                  });
                }}
                className={ui.primaryBtn}
              >
                Open Booksy
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                onClick={() => {
                  trackEvent("call_click", {
                    source: "fallback_button",
                  });
                }}
                className="flex-1 inline-flex items-center justify-center h-12 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors"
              >
                Call Us: {PHONE}
              </a>
            </div>
          </div>
        )}

        {/* FAQs Section - Placeholder */}
        <div className="space-y-6 mt-12">
          <h2 className={ui.h3}>Frequently Asked Questions</h2>
          
          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              What is Booksy?
            </h3>
            <p className={ui.p}>
              Booksy is a secure booking platform that makes it easy to schedule appointments. View availability, select your barber, and confirm in seconds.
            </p>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Can I reschedule or cancel?
            </h3>
            <p className={ui.p}>
              Yes! You can manage your appointment directly in Booksy. We ask for 24 hours notice for cancellations.
            </p>
          </div>

          <div className={ui.card + " p-6"}>
            <h3 className={ui.h4 + " mb-2"}>
              Do you accept walk-ins?
            </h3>
            <p className={ui.p}>
              Yes, walk-ins are welcome based on availability. We recommend booking ahead for faster service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
