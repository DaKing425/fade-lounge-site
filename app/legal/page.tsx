/**
 * Legal Page - Phase 1
 * Contains privacy policy, terms, and cancellation policy
 * Placeholder content - will be updated with final legal docs
 */

export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Legal</h1>
          <p className="text-slate-600">Privacy Policy, Terms, and Policies</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200">
          <button className="px-4 py-2 border-b-2 border-[#3C4973] text-[#3C4973] font-semibold">
            Privacy Policy
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent text-slate-600 hover:text-slate-900 font-semibold">
            Terms of Service
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent text-slate-600 hover:text-slate-900 font-semibold">
            Cancellation Policy
          </button>
        </div>

        {/* Privacy Policy Section */}
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>

            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  1. Information We Collect
                </h3>
                <p>
                  We collect information you provide directly to us, such as when
                  you make a booking through Booksy, contact us, or visit our
                  website. This may include your name, phone number, email
                  address, and appointment details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  2. How We Use Your Information
                </h3>
                <p>
                  We use your information to process bookings, send appointment
                  reminders, respond to inquiries, and improve our services. We
                  do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  3. Booking and Payment Information
                </h3>
                <p>
                  Bookings and payments are processed through Booksy, which is
                  a third-party service. Your payment information is handled
                  securely by Booksy and is not stored on our servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  4. Security
                </h3>
                <p>
                  We take reasonable steps to protect your personal information
                  from unauthorized access and misuse. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  5. Contact Us
                </h3>
                <p>
                  If you have questions about this privacy policy, please contact
                  us at (425) 244-7901 or visit us in person at 602 2nd St, STE B,
                  Snohomish, WA 98290.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-slate-200"></div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>

            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Appointment Booking
                </h3>
                <p>
                  All appointments are subject to availability. Bookings are
                  confirmed through Booksy. By booking, you agree to arrive on
                  time for your appointment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Cancellations & Rescheduling
                </h3>
                <p>
                  Cancellations must be made at least 24 hours in advance through
                  Booksy. Late cancellations may incur a fee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Code of Conduct
                </h3>
                <p>
                  All guests are expected to treat our staff and fellow clients
                  with respect. We reserve the right to refuse service to anyone
                  who violates our policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Limitation of Liability
                </h3>
                <p>
                  Fade Lounge is not liable for any indirect, incidental, special,
                  or consequential damages resulting from your use of our services
                  or website.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-slate-200"></div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Cancellation Policy
            </h2>

            <div className="space-y-4 text-slate-700">
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-[#3C4973] mb-2">
                  24-Hour Cancellation Policy
                </h3>
                <p className="mb-2">
                  We require a minimum of 24 hours notice for cancellations or
                  rescheduling. Cancellations made with less than 24 hours notice
                  may be subject to a cancellation fee equal to the service price.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Late Arrivals
                </h3>
                <p>
                  If you arrive more than 10 minutes late, your appointment may
                  be canceled, and the full service fee may apply. We recommend
                  arriving 5 minutes early.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Rescheduling
                </h3>
                <p>
                  Rescheduling counts as a cancellation for the original appointment.
                  Changes must be made through Booksy at least 24 hours in advance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  No-Shows
                </h3>
                <p>
                  No-shows (missing your appointment without cancellation) are
                  subject to the full service fee and may result in booking
                  restrictions on future appointments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Exceptions
                </h3>
                <p>
                  Exceptions to the cancellation policy may be made at the
                  discretion of management for legitimate emergencies. Please
                  contact us directly if you have an emergency.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-slate-200"></div>

          <section>
            <p className="text-slate-600 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-slate-600 text-sm">
              These policies are subject to change at any time. Please review
              regularly for updates.
            </p>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Questions?</h2>
          <p className="text-slate-600 mb-4">
            Contact us at (425) 244-7901 or visit us in person
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#9A3A4B] hover:bg-[#7d2e3c] text-white font-semibold py-2 px-6 rounded transition-colors min-h-12 flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
