/**
 * About Page - Phase 1
 * Tells the Fade Lounge story and builds trust
 * Emphasizes local "Snohomish" connection
 * Placeholder content - will be managed in CMS
 */

import { ui } from "@/src/lib/ui";

export default function AboutPage() {
  return (
    <div className={ui.container + " py-12"}>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className={ui.h2}>About Fade Lounge</h1>
          <p className={ui.pLarge}>
            Your trusted barber in Snohomish, WA
          </p>
        </div>

        {/* Story Section */}
        <div className={ui.card + " p-8 space-y-4"}>
          <h2 className={ui.h3}>Our Story</h2>
          <p className={ui.p}>
            Fade Lounge was founded with a simple mission: to bring premium
            barbershop services to Snohomish, WA. We believe that a great
            haircut is more than just a service&mdash;it&apos;s a confidence boost and a
            ritual of self-care.
          </p>
          <p className={ui.p}>
            Our team of experienced barbers is dedicated to delivering precision
            cuts, clean line work, and a welcoming atmosphere for every client.
            Whether you&apos;re a longtime regular or visiting for the first time, we
            treat every guest with the respect and attention they deserve.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className="text-lg font-bold text-[#3C4973]">Precision</h3>
            <p className={ui.p}>
              Every cut is executed with meticulous attention to detail using
              professional-grade techniques and premium tools.
            </p>
          </div>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className="text-lg font-bold text-[#3C4973]">Cleanliness</h3>
            <p className={ui.p}>
              We maintain the highest standards of hygiene and sanitation,
              ensuring a safe and professional environment.
            </p>
          </div>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className="text-lg font-bold text-[#3C4973]">Community</h3>
            <p className={ui.p}>
              We&apos;re proud to serve the Snohomish community and build lasting
              relationships with our clients.
            </p>
          </div>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className="text-lg font-bold text-[#3C4973]">Excellence</h3>
            <p className={ui.p}>
              We continuously improve our craft and stay updated on the latest
              trends and techniques in barbering.
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className={ui.card + " p-8 space-y-4"}>
          <h2 className={ui.h3}>Why Trust Fade Lounge?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-slate-900">Highly Rated</p>
                <p className={ui.pSmall}>
                  4.9 stars on Booksy from 180+ real customer reviews
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-slate-900">Expert Barbers</p>
                <p className={ui.pSmall}>
                  Years of professional experience and ongoing training
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-slate-900">Premium Quality</p>
                <p className={ui.pSmall}>
                  High-quality tools, products, and techniques
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A3A4B] mr-3 font-bold text-lg">★</span>
              <div>
                <p className="font-semibold text-slate-900">Local Pride</p>
                <p className={ui.pSmall}>
                  Proud members of the Snohomish community
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className={ui.h3}>Frequently Asked Questions</h2>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className={ui.h4}>
              What are your hours?
            </h3>
            <p className={ui.p}>
              We&apos;re open Monday-Friday 9 AM - 7 PM, Saturday 9 AM - 5 PM, and
              closed on Sundays. Check our contact page for more details.
            </p>
          </div>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className={ui.h4}>
              Do you take walk-ins?
            </h3>
            <p className={ui.p}>
              Yes! Walk-ins are welcome based on availability. However, we
              recommend booking online via Booksy for faster service and to
              guarantee your spot.
            </p>
          </div>

          <div className={ui.card + " p-6 space-y-3"}>
            <h3 className={ui.h4}>
              How experienced are the barbers?
            </h3>
            <p className={ui.p}>
              All of our barbers have years of professional barbering
              experience. Check out our Team page to learn more about each one.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center space-y-4">
          <h2 className={ui.h3}>Visit Fade Lounge Today</h2>
          <p className={ui.pLarge}>
            Experience the difference of a premium Snohomish barber
          </p>
          <a
            href="https://booksy.com/en-us/1255820_fade-lounge_barber-shop_39418_snohomish"
            target="_blank"
            rel="noopener noreferrer"
            className={ui.primaryBtn}
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
