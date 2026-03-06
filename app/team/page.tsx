/**
 * Team/Barbers Page - Phase 1
 * Displays barber profiles with photos, bios, specialties
 * Links to individual Booksy booking for each barber
 */

"use client";

import { BOOKSY_URL } from "@/src/lib/site";
import { trackEvent } from "@/src/lib/analytics";
import { ui } from "@/src/lib/ui";

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
    <div className={ui.container + " py-12"}>
      <div className="space-y-12">
        <div>
          <h1 className={ui.h2 + " mb-4"}>Our Barbers</h1>
          <p className={ui.pLarge}>
            Meet the talented team behind Fade Lounge
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className={ui.card + " overflow-hidden hover:border-[#3C4973] transition-colors"}
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
              <div className={ui.cardHeader}>
                <h3 className={ui.h3}>{barber.name}</h3>
                <p className={ui.pSmall}>{barber.bio}</p>

                {/* Specialties */}
                <div>
                  <p className={ui.pSmall + " font-semibold mb-2"}>
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className={ui.chip}
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
                  className={ui.primaryBtn + " w-full justify-center"}
                >
                  Book with {barber.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section - Placeholder */}
        <div className={ui.card + " p-8"}>
          <h2 className={ui.h3 + " mb-4"}>
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
