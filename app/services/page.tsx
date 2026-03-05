/**
 * Services Page - Phase 1
 * Displays all barber services with pricing and durations
 * Will be connected to CMS in later phases
 */

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg">
            Premium barbershop services in Snohomish, WA
          </p>
        </div>

        {/* Services Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Skin Fade</h3>
            <p className="text-gray-400 text-sm mb-4">
              Classic skin fade with clean line work
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$40</span>
              <span className="text-gray-500 text-sm">45 min</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Classic/Gentleman Haircut
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Timeless cut with professional styling
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$35</span>
              <span className="text-gray-500 text-sm">45 min</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Kids Regular Haircut
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Friendly service for young clients
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$30</span>
              <span className="text-gray-500 text-sm">45 min</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Haircut & Beard
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Complete grooming package
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$60</span>
              <span className="text-gray-500 text-sm">1h 15m</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Beard Line Up/Shaping
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Precision beard grooming
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$30</span>
              <span className="text-gray-500 text-sm">30 min</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Haircut with Design
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Custom designs and patterns
            </p>
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold text-lg">$55</span>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to book?</h2>
          <a
            href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors min-h-12 flex items-center justify-center"
          >
            Book on Booksy
          </a>
        </div>
      </div>
    </div>
  );
}
