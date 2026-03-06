"use client";

import { REVIEW_RATING, REVIEW_COUNT, BOOKSY_URL } from "@/src/lib/site";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Premium Barbershop in{" "}
                <span className="text-[#3C4973]">Snohomish, WA</span>
              </h1>
              <p className="text-xl text-slate-700">
                Expert fades, precision cuts, and beard services. Trusted by locals with{" "}
                <span className="font-bold text-[#9A3A4B]">
                  {REVIEW_RATING}★ rating ({REVIEW_COUNT}+ reviews)
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                  className="inline-flex items-center justify-center h-12 px-8 bg-[#9A3A4B] text-white font-bold rounded hover:bg-[#7d2e3c] transition-colors"
                >
                  Book Now
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center h-12 px-8 border-2 border-[#3C4973] text-[#3C4973] font-bold rounded hover:bg-[#F8FAFC] transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-[#3C4973] to-[#9A3A4B] rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">✂️</div>
                  <p className="text-white font-bold">Premium Fade Lounge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Services</h2>
            <p className="text-slate-600">From classic cuts to luxury experiences</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Skin Fade", price: "$40", time: "45 min" },
              { name: "Haircut & Beard", price: "$60", time: "1h 15m" },
              { name: "Luxury Hair Service", price: "$100", time: "1h 45m" },
              { name: "Kids Haircut", price: "$30", time: "45 min" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 mb-2">{service.name}</h3>
                <div className="flex justify-between text-sm text-slate-600">
                  <span className="text-[#9A3A4B] font-bold">{service.price}</span>
                  <span>{service.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="/services"
              className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B]"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Work</h2>
            <p className="text-slate-600">Real cuts from real Fade Lounge clients</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-lg h-48 flex items-center justify-center hover:border-[#3C4973] transition-colors cursor-pointer shadow-sm"
              >
                <div className="text-4xl">📷</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="/gallery"
              className="inline-block bg-[#9A3A4B] hover:bg-[#7d2e3c] text-white font-semibold py-2 px-6 rounded transition-colors min-h-12 flex items-center justify-center"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Meet Our Barbers</h2>
            <p className="text-slate-600">Expert barbers dedicated to your style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Carlos", "Marco", "Jose"].map((name) => (
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-[#3C4973] transition-colors shadow-sm"
              >
                <div className="bg-gradient-to-br from-[#3C4973] to-[#9A3A4B] h-40 flex items-center justify-center">
                  <div className="text-6xl text-white">{name.charAt(0)}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
                  <a
                    href="/team"
                    className="text-[#3C4973] text-sm hover:text-[#9A3A4B]"
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
              className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B]"
            >
              Meet the Full Team →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews/Rating */}
      <section className="bg-[#F8FAFC] border-t border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Trusted by the Community</h2>
            <div className="text-5xl font-bold text-[#9A3A4B]">
              {REVIEW_RATING}★
            </div>
            <p className="text-xl text-slate-700">
              Based on {REVIEW_COUNT}+ reviews on Booksy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { label: "Customers", value: "180+" },
              { label: "Average Rating", value: "4.9★" },
              { label: "Experience", value: "15+ Years" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Premium Barbershop in Snohomish, WA
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Fade Lounge is your trusted barber in Snohomish, dedicated to precision cuts, expert beard services, and a welcoming atmosphere. Every client receives the same level of attention and care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#9A3A4B] mr-3 font-bold text-xl">✓</span>
                <p className="text-slate-700">Expert barbers with 15+ years experience</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#9A3A4B] mr-3 font-bold text-xl">✓</span>
                <p className="text-slate-700">Premium tools and high-quality products</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#9A3A4B] mr-3 font-bold text-xl">✓</span>
                <p className="text-slate-700">Clean, professional environment</p>
              </div>
            </div>
            <a
              href="/about"
              className="inline-block text-[#3C4973] font-semibold hover:text-[#9A3A4B]"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#3C4973] to-[#9A3A4B] rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🏪</div>
              <p className="text-white font-bold">Fade Lounge Snohomish</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#9A3A4B] to-[#7d2e3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Ready for Your Next Cut?</h2>
          <p className="text-xl text-red-100">
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
            className="inline-block bg-white text-[#9A3A4B] font-bold py-4 px-10 rounded-lg hover:bg-slate-100 transition-colors text-lg min-h-12 flex items-center justify-center"
          >
            Book on Booksy Now
          </a>
        </div>
      </section>
    </div>
  );
}
