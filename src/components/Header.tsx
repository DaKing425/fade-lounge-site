"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, BOOKSY_URL } from "../lib/site";

/**
 * Header Component
 * - Sticky header with navigation links
 * - Persistent "Book Now" CTA
 * - Mobile menu toggle
 * - Dark theme with accessible tap targets (48px+)
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-bold text-xl md:text-2xl text-orange-500"
          >
            Fade Lounge
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // GA4 event tracking
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "book_now_click", {
                    location: "header",
                  });
                }
              }}
              className="inline-flex items-center justify-center h-12 px-6 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors min-w-max"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center h-12 w-12 rounded hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-base font-medium hover:text-orange-500 transition-colors min-h-12 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 mt-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors text-center min-h-12 flex items-center justify-center"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "book_now_click", {
                    location: "mobile_menu",
                  });
                }
              }}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
