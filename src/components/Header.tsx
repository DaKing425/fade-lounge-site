"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BOOKSY_URL } from "../lib/site";
import { trackEvent } from "../lib/analytics";
import { ui } from "../lib/ui";

/**
 * Header Component
 * - Sticky header with navigation links
 * - Logo with brand colors (blue/red)
 * - Persistent "Book Now" CTA
 * - Mobile menu toggle
 * - Clean white background with subtle border
 * - Accessible tap targets (48px+)
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className={ui.container}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3 font-bold text-xl text-[#3C4973] hover:text-[#9A3A4B] transition-colors"
          >
            <Image
              src="/logo.png"
              alt="Fade Lounge"
              width={44}
              height={44}
              className="h-11 w-auto"
              priority
            />
            <span className="hidden sm:inline">Fade Lounge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-[#9A3A4B] font-semibold"
                    : "text-slate-700 hover:text-[#3C4973]"
                }`}
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
                trackEvent("book_now_click", {
                  location: "header",
                });
              }}
              className="inline-flex items-center justify-center h-11 px-7 bg-[#9A3A4B] text-white font-semibold rounded-lg hover:bg-[#7d2e3c] transition-colors duration-200 text-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3C4973]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-slate-900"
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
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors min-h-11 flex items-center ${
                  isActive(link.href)
                    ? "text-white bg-[#9A3A4B] font-semibold"
                    : "text-slate-700 hover:text-[#3C4973]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 mt-4 bg-[#9A3A4B] text-white font-semibold rounded-lg hover:bg-[#7d2e3c] transition-colors duration-200 text-center min-h-11 flex items-center justify-center"
              onClick={() => {
                trackEvent("book_now_click", {
                  location: "mobile_menu",
                });
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
