/**
 * Gallery Page - Phase 1
 * Displays haircut gallery with style filters
 * Lazy loads images, expandable lightbox
 * Placeholder data - will be managed via CMS
 */

"use client";

import { useState } from "react";
import { BOOKSY_URL } from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";
import { ui } from "@/src/lib/ui";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Placeholder gallery data - will be managed in CMS
  const galleries = [
    { id: 1, tag: "fade", title: "Skin Fade", category: "Fades" },
    { id: 2, tag: "fade", title: "Low Fade", category: "Fades" },
    { id: 3, tag: "beard", title: "Beard Shape", category: "Beard Services" },
    { id: 4, tag: "beard", title: "Full Beard Trim", category: "Beard Services" },
    { id: 5, tag: "kids", title: "Kids Cut", category: "Kids" },
    { id: 6, tag: "design", title: "Line Design", category: "Designs" },
    { id: 7, tag: "fade", title: "High Fade", category: "Fades" },
    { id: 8, tag: "design", title: "Custom Design", category: "Designs" },
    { id: 9, tag: "kids", title: "Kids Fade", category: "Kids" },
    { id: 10, tag: "beard", title: "Beard Lineup", category: "Beard Services" },
    { id: 11, tag: "fade", title: "Mid Fade", category: "Fades" },
    { id: 12, tag: "design", title: "Wave Pattern", category: "Designs" },
  ];

  const filters = [
    { value: null, label: "All" },
    { value: "fade", label: "Fades" },
    { value: "beard", label: "Beard Services" },
    { value: "design", label: "Designs" },
    { value: "kids", label: "Kids Cuts" },
  ];

  const filteredGalleries = activeFilter
    ? galleries.filter((g) => g.tag === activeFilter)
    : galleries;

  return (
    <div className={ui.container + " py-12"}>
      <div className="space-y-8">
        <div>
          <h1 className={ui.h2 + " mb-4"}>Gallery</h1>
          <p className={ui.pLarge}>
            See our work - real cuts from real Fade Lounge clients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value || "all"}
              onClick={() => {
                setActiveFilter(filter.value);
                trackEvent("gallery_filter_used", {
                  filter: filter.value || "all",
                });
              }}
              className={`px-4 py-2 rounded font-semibold transition-colors min-h-12 flex items-center ${
                activeFilter === filter.value
                  ? "bg-[#9A3A4B] text-white"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.map((item) => (
            <div
              key={item.id}
              className={ui.card + " overflow-hidden hover:border-[#3C4973] transition-all cursor-pointer group"}
            >
              {/* Placeholder Image */}
              <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:from-slate-300 group-hover:to-slate-400 transition-colors relative">
                <div className="text-center">
                  <div className="text-6xl text-slate-500 mb-2">📷</div>
                  <p className="text-slate-600 text-sm">{item.category}</p>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">View</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <h3 className={ui.h4}>{item.title}</h3>
                <p className="text-sm text-[#9A3A4B]">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGalleries.length === 0 && (
          <div className="text-center py-12">
            <p className={ui.pLarge}>No images found in this category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className={ui.card + " p-8 text-center"}>
          <h2 className={ui.h3 + " mb-4"}>
            Ready to get your cut?
          </h2>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("book_now_click", {
                location: "gallery_page",
              });
            }}
            className={ui.primaryBtn}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
