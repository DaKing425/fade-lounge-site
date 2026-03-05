/**
 * Book Now Page - Phase 1
 * Displays Booksy embed with fallback to call/deep-link
 * Fallback shows after 2-3 second timeout if embed doesn't load
 */

"use client";

import { useEffect, useState } from "react";
import { BOOKSY_URL, PHONE } from "@/src/lib/site";

export default function BookPage() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Show fallback UI after 2.5 seconds if Booksy hasn't loaded
    const timer = setTimeout(() => {
      // Check if Booksy widget has loaded by looking for iframe
      const booksyFrame = document.querySelector('iframe[src*="booksy"]');
      if (!booksyFrame) {
        setShowFallback(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Appointment</h1>
          <p className="text-gray-400 text-lg">
            Quick and easy booking through our Booksy integration
          </p>
        </div>

        {/* Booksy Embed Container */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 min-h-96">
          <div
            id="booksy-widget"
            className="booksy-widget"
            data-url={BOOKSY_URL}
          >
            {/* Booksy widget will load here */}
            <p className="text-gray-400 text-center">Loading booking system...</p>
          </div>
        </div>

        {/* Fallback UI - shows if embed doesn't load */}
        {showFallback && (
          <div className="bg-yellow-900 border border-yellow-600 rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-bold text-yellow-100">
              Having trouble loading?
            </h2>
            <p className="text-yellow-100">
              Book directly on Booksy or give us a call to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "booksy_open", {
                      source: "fallback_button",
                    });
                  }
                }}
                className="flex-1 inline-flex items-center justify-center h-12 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-colors"
              >
                Open Booksy
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "call_click", {
                      source: "fallback_button",
                    });
                  }
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
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2">
              What is Booksy?
            </h3>
            <p className="text-gray-400">
              Booksy is a secure booking platform that makes it easy to schedule appointments. View availability, select your barber, and confirm in seconds.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2">
              Can I reschedule or cancel?
            </h3>
            <p className="text-gray-400">
              Yes! You can manage your appointment directly in Booksy. We ask for 24 hours notice for cancellations.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2">
              Do you accept walk-ins?
            </h3>
            <p className="text-gray-400">
              Yes, walk-ins are welcome based on availability. We recommend booking ahead for faster service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
