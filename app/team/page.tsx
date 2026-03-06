/**
 * Team/Barbers Page - Phase 1
 * Displays barber profiles with photos, bios, specialties
 * Links to individual Booksy booking for each barber
 */

"use client";

import { BOOKSY_URL } from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";

export default function TeamPage() {
  // Placeholder barber data - will be managed in CMS
  const barbers = [
    {
      id: 1,
      name: "Carlos",
      specialties: ["Skin Fades", "Line Work", "Beard Shaping"],
      bio: "Owner and master barber with 15+ years of experience. Specializes in precision fades and custom designs.",
    },
    {
      id: 2,
      name: "Marco",
      specialties: ["Classic Cuts", "Beard Services", "Kids Haircuts"],
      bio: "Friendly barber dedicated to customer satisfaction. Expert in all classic barbershop services.",
    },
    {
      id: 3,
      name: "Jose",
      specialties: ["Modern Styles", "Luxury Services", "Hot Towel Shaves"],
      bio: "Detail-oriented barber passionate about premium grooming experiences.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Barbers</h1>
          <p className="text-slate-600 text-lg">
            Meet the talented team behind Fade Lounge
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-[#3C4973] transition-colors shadow-sm"
              onClick={() => {
                trackEvent("barber_profile_viewed", {
                  barber_name: barber.name,
                  barber_id: barber.id,
                });
              }}
            >
              {/* Placeholder Photo */}
              <div className="w-full h-64 bg-gradient-to-br from-[#3C4973] to-[#9A3A4B] flex items-center justify-center">
                <div className="text-6xl text-white">
                  {barber.name.charAt(0)}
                </div>
              </div>

              {/* Barber Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">{barber.name}</h3>
                <p className="text-slate-600 text-sm">{barber.bio}</p>

                {/* Specialties */}
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F8FAFC] text-[#3C4973] text-xs px-3 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("book_now_click", {
                      location: "team_page",
                      barber_name: barber.name,
                    });
                  }}
                  className="block w-full text-center bg-[#9A3A4B] hover:bg-[#7d2e3c] text-white font-semibold py-3 rounded transition-colors min-h-12 flex items-center justify-center"
                >
                  Book with {barber.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section - Placeholder */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why Choose Fade Lounge?
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold">✓</span>
              <span>Expert barbers with years of experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold">✓</span>
              <span>Professional, clean, and welcoming atmosphere</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold">✓</span>
              <span>Premium products and techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold">✓</span>
              <span>Easy online booking via Booksy</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold">✓</span>
              <span>Trusted by locals - 4.9 rating on Booksy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
