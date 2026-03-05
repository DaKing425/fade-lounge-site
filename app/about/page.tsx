/**
 * About Page - Phase 1
 * Tells the Fade Lounge story and builds trust
 * Emphasizes local "Snohomish" connection
 * Placeholder content - will be managed in CMS
 */

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">About Fade Lounge</h1>
          <p className="text-xl text-gray-300">
            Your trusted barber in Snohomish, WA
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Fade Lounge was founded with a simple mission: to bring premium
            barbershop services to Snohomish, WA. We believe that a great
            haircut is more than just a service—it's a confidence boost and a
            ritual of self-care.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our team of experienced barbers is dedicated to delivering precision
            cuts, clean line work, and a welcoming atmosphere for every client.
            Whether you're a longtime regular or visiting for the first time, we
            treat every guest with the respect and attention they deserve.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold text-orange-500">Precision</h3>
            <p className="text-gray-300">
              Every cut is executed with meticulous attention to detail using
              professional-grade techniques and premium tools.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold text-orange-500">Cleanliness</h3>
            <p className="text-gray-300">
              We maintain the highest standards of hygiene and sanitation,
              ensuring a safe and professional environment.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold text-orange-500">Community</h3>
            <p className="text-gray-300">
              We're proud to serve the Snohomish community and build lasting
              relationships with our clients.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold text-orange-500">Excellence</h3>
            <p className="text-gray-300">
              We continuously improve our craft and stay updated on the latest
              trends and techniques in barbering.
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-orange-900/30 to-slate-900 border border-orange-700 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Why Trust Fade Lounge?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-white">Highly Rated</p>
                <p className="text-gray-300 text-sm">
                  4.9 stars on Booksy from 180+ real customer reviews
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-white">Expert Barbers</p>
                <p className="text-gray-300 text-sm">
                  Years of professional experience and ongoing training
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-white">Premium Quality</p>
                <p className="text-gray-300 text-sm">
                  High-quality tools, products, and techniques
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-white">Local Pride</p>
                <p className="text-gray-300 text-sm">
                  Proud members of the Snohomish community
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-3">
            <h3 className="text-lg font-bold text-white">
              What are your hours?
            </h3>
            <p className="text-gray-400">
              We're open Monday-Friday 9 AM - 7 PM, Saturday 9 AM - 5 PM, and
              closed on Sundays. Check our contact page for more details.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-3">
            <h3 className="text-lg font-bold text-white">
              Do you take walk-ins?
            </h3>
            <p className="text-gray-400">
              Yes! Walk-ins are welcome based on availability. However, we
              recommend booking online via Booksy for faster service and to
              guarantee your spot.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-3">
            <h3 className="text-lg font-bold text-white">
              How experienced are the barbers?
            </h3>
            <p className="text-gray-400">
              All of our barbers have years of professional barbering
              experience. Check out our Team page to learn more about each one.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-600 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Visit Fade Lounge Today</h2>
          <p className="text-orange-100">
            Experience the difference of a premium Snohomish barber
          </p>
          <a
            href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors min-h-12 flex items-center justify-center"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
