"use client";

import { REVIEW_RATING, REVIEW_COUNT, BOOKSY_URL } from "@/src/lib/site";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                Premium Barbershop in{" "}
                <span className="text-[#3C4973]">Snohomish, WA</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Expert fades, precision cuts, and premium beard services. Trusted by locals with a{" "}
                <span className="font-semibold text-slate-900">
                  {REVIEW_RATING}★ rating ({REVIEW_COUNT}+ reviews)
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    const w = window as unknown as Record<string, unknown>;
                    if (typeof window !== "undefined" && w.gtag) {
                      (w.gtag as (event: string, name: string, config: Record<string, unknown>) => void)("event", "book_now_click", {
                        location: "hero",
                      });
                    }
                  }}
                  className="inline-flex items-center justify-center h-13 px-10 bg-[#9A3A4B] text-white font-semibold rounded-lg hover:bg-[#7d2e3c] transition-colors duration-200"
                >
                  Book Now
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center h-13 px-10 border-2 border-[#3C4973] text-[#3C4973] font-semibold rounded-lg hover:border-[#9A3A4B] hover:text-[#9A3A4B] transition-colors duration-200"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 flex items-center justify-center border border-slate-200">
                <div className="text-center">
                  <div className="text-8xl mb-4">✂️</div>
                  <p className="text-slate-600 font-semibold">Premium Fade Lounge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="bg-white border-y border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Rating</p>
              <p className="text-5xl font-bold text-[#9A3A4B]">{REVIEW_RATING}★</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Reviews</p>
              <p className="text-5xl font-bold text-slate-900">{REVIEW_COUNT}+</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Trusted Since</p>
              <p className="text-5xl font-bold text-[#3C4973]">15+Y</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold text-slate-900">Popular Services</h2>
              <p className="text-lg text-slate-600">Expert cuts, premium grooming, and custom styles</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Skin Fade", price: "$40", time: "45 min" },
                { name: "Haircut & Beard", price: "$60", time: "1h 15m" },
                { name: "Luxury Hair Service", price: "$100", time: "1h 45m" },
                { name: "Kids Haircut", price: "$30", time: "45 min" },
                { name: "Design Line-Up", price: "$35", time: "30 min" },
                { name: "Beard Shaping", price: "$25", time: "20 min" },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-8 hover:border-[#3C4973] transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.time}</p>
                  <p className="text-2xl font-bold text-[#9A3A4B]">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <a
                href="/services"
                className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B] transition-colors text-lg"
              >
                View All Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <h2 className="text-5xl font-bold text-slate-900">Our Work</h2>
            <p className="text-lg text-slate-600">Real cuts from real Fade Lounge clients</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-lg aspect-square flex items-center justify-center hover:border-[#3C4973] transition-colors duration-200 cursor-pointer"
              >
                <div className="text-5xl">📷</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center h-13 px-10 bg-[#9A3A4B] hover:bg-[#7d2e3c] text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold text-slate-900">Meet Our Barbers</h2>
              <p className="text-lg text-slate-600">Expert barbers dedicated to your style</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Carlos", "Marco", "Jose"].map((name) => (
                <div
                  key={name}
                  className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:border-[#3C4973] transition-colors duration-200"
                >
                  <div className="bg-gradient-to-br from-slate-200 to-slate-300 aspect-square flex items-center justify-center">
                    <div className="text-6xl font-bold text-slate-600">{name.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{name}</h3>
                    <a
                      href="/team"
                      className="text-[#3C4973] font-medium hover:text-[#9A3A4B] transition-colors text-sm"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <a
                href="/team"
                className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B] transition-colors text-lg"
              >
                Meet the Full Team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Block */}
      <section className="bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-5xl font-bold text-slate-900">
                  Premium Barbershop in Snohomish, WA
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fade Lounge is your trusted barber in Snohomish, dedicated to precision cuts, expert beard services, and a welcoming atmosphere. Every client receives the same level of attention and care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#9A3A4B] font-bold text-2xl flex-shrink-0">✓</span>
                  <p className="text-slate-700">Expert barbers with 15+ years experience</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9A3A4B] font-bold text-2xl flex-shrink-0">✓</span>
                  <p className="text-slate-700">Premium tools and high-quality products</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9A3A4B] font-bold text-2xl flex-shrink-0">✓</span>
                  <p className="text-slate-700">Clean, professional environment</p>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B] transition-colors text-lg"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg aspect-square flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <div className="text-8xl mb-4">🏪</div>
                <p className="text-slate-600 font-semibold">Fade Lounge Snohomish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#9A3A4B] py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">Ready for Your Next Cut?</h2>
          <p className="text-xl text-red-50">
            Book your appointment now on Booksy - fast, easy, and secure
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              const w = window as unknown as Record<string, unknown>;
              if (typeof window !== "undefined" && w.gtag) {
                (w.gtag as (event: string, name: string, config: Record<string, unknown>) => void)("event", "book_now_click", {
                  location: "cta_footer",
                });
              }
            }}
            className="inline-flex items-center justify-center h-13 px-12 bg-white text-[#9A3A4B] font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200 text-lg"
          >
            Book on Booksy Now
          </a>
        </div>
      </section>
    </div>
  );
}
