Fade Lounge Website — Product Requirements Document



TL;DR

A custom-built, mobile-first website for Fade Lounge (602 2nd St, STE B, Snohomish, WA 98290), designed to drive bookings and phone calls with a premium, trustworthy online presence. Conversion is powered by persistent “Book Now” CTAs, anchored by Booksy’s proven booking flow with a deep-link and tap-to-call fallback. Genuine trust is built through real reviews (4.9 avg, 180+ Booksy ratings), authentic gallery, and team profiles. The owner enjoys hassle-free self-management thanks to a lightweight CMS/admin. Phase 1 focuses on seamless booking and local SEO for “Snohomish barber.” Strong real content is enforced at launch—no “stock” presence, only the real Fade Lounge brand.



Goals

Business Goals





Drive a 25%+ booking conversion rate (book_now_click / unique visitors) within 3 months after launch.



Boost mobile-originated phone call volume by 20% month-over-month.



Achieve a top 3 Google local pack ranking for "Snohomish barber near me" (site responsibilities listed below).



Cut owner content management time to <10 minutes per routine update via CMS.



Cement a trustworthy, premium Fade Lounge brand presence online.

User Goals





Let new customers find, evaluate, and book in ≤3 clicks on mobile.



Enable repeat clients to rebook quickly, with minimal friction.



Surface walk-in details (hours, map, tap-to-call) instantly.



Empower the owner (Carlos) to update services, hours, team, gallery, and announcements without code.



Build trust through authentic galleries and testimonials reflecting real customer experiences.

Non-Goals





No product sales until Phase 3.



No loyalty/membership system before Phase 3.



No customer accounts/login portals in Phases 1 or 2.



No custom animations beyond simple transitions. Performance takes priority over visual flair — animation complexity is explicitly out of scope.



Personas & User Stories

1. New Mobile Customer





As a new customer, I want immediate clarity on pricing and services, so I can decide if Fade Lounge matches my needs.



As a new customer, I want to see real reviews (e.g., 4.9/180+) for trust.



As a new customer, I want to book an appointment in under three clicks, so the process is fast.



As a new customer, I want to view genuine client gallery photos, so I know what to expect.



As a new customer, I want to check open/closed status immediately.

2. Repeat Customer





As a repeat customer, I want to repeat my last booking with minimal steps.



As a repeat customer, I want to book my preferred barber easily.



As a repeat customer, I want updated prices and appointment durations, so I avoid surprises.



As a repeat customer, I want quick access to tap-to-call.

3. Walk-in / Quick Info





As a walk-in, I want instant access to today’s hours and address.



As a walk-in, I want "Get Directions" one-tap directions.



As a walk-in, I want to see if walk-ins are welcome.



As a walk-in, I want to know where to park.

4. Owner/Admin (Carlos)





As the shop owner, I want to log in and manage services, prices, durations with ease.



As the owner, I want to upload new gallery photos by category/style.



As the owner, I want to update shop hours and holiday closures.



As the owner, I want to feature my barbers with photos and bios.



As the owner, I want to schedule/unschedule announcements and promotions.



Functional Requirements

Booking (Phase 1)

Booking (Phase 1)





Persistent “Book Now” CTA in header and hero on every page.



Booksy embed on /book page (Fade Lounge’s Booksy page is canonical booking target).



Fallbacks:



If Booksy embed fails to load in 2–3 seconds: show "Call Us" (tap-to-call (425) 244-7901) and "Open Booksy" (deep-link).



Short error: “Having trouble loading? Book directly on Booksy or give us a call.”



Embed requirement: If Booksy cannot be embedded reliably due to CSP/iframe restrictions, default /book to a clean deep-link booking page with service + barber deep links, and retain the same fallback UI (Call Us + Open Booksy buttons + error message). This must be decided and tested before launch, not during.



Analytics:



book_now_click — any "Book Now" click (header/hero/services)



booksy_open — embed loads or Booksy deep-link clicked



Phase 1 booking success (proxy metric): User triggers booksy_open, then returns to the site within 10 minutes in the same session, tracked via session continuity + page_view event. This is a best-effort proxy — true booking completion is Booksy's system of record.



True booking completion is recorded and managed in Booksy.



Remove all references to Square or Fresha; Booksy is confirmed.

Calls & Directions

Calls & Directions





Tap-to-call button mobile.



Clear display of address: 602 2nd St, STE B, Snohomish, WA 98290



“Get Directions” → Google Maps



Prominently show: Current hours; “Open now / Closed” indicator (“nice-to-have”).



Hours displayed on site must be editable in CMS and must match the Google Business Profile at all times. Google Business Profile is the source of truth for public hours. If Booksy and Google Business Profile ever conflict, GBP takes precedence on-site.

Gallery





Owner/CMS can upload photos tagged by style (fade, beard, etc.).



Minimum 12 photos at launch (goal: 24+).



Images optimized and lazy-loaded (WebP/AVIF).



Optional IG feed integration.

Reviews

Reviews





Display Booksy reviews (curate 6–10 testimonials, highlight 4.9/180+ rating).



Manual testimonials option in CMS.



Include LocalBusiness schema site-wide. Add AggregateRating markup only if the implementation meets Google's rich-results eligibility guidelines for content displayed on-page. If eligibility is uncertain or unmet, omit AggregateRating from schema and display the 4.9/180 rating visually only. Incorrect AggregateRating markup risks SEO penalties — when in doubt, leave it out.

Admin/CMS

Editable by Owner:





Services: name, description, duration, price, category, active/inactive



Hours + holiday overrides (with end-date/auto-expiry)



Address + phone



Barbers/team: name, bio, specialties, photo, socials



Gallery photos + style tags



Announcement banner (text/link)



Testimonials

NOT Editable:





Section layout/order (prevents breaking UI)



Core CTAs and booking funnel



Design tokens (color/typography) unless explicitly requested



SEO: owner can edit only homepage title/meta/OG; other meta auto-generated

SEO & Analytics

SEO & Analytics





Local SEO best practices:



Strong “Snohomish, WA barber” copy; NAP (Name/Address/Phone) consistency site-wide (matches Google Business Profile)



LocalBusiness schema, sitemap.xml, robots.txt



Location references in hero, about, contact, and footer



Top 3 Local Pack Goal:



Website responsibilities above



Owner responsibilities:



Fully optimized Google Business Profile



Consistent directory listings



Ongoing review requests post-appointment



GA4 events: book_now_click call_click directions_click booksy_open book_page_view — user lands on /book page (enables click → book page conversion rate calculation).



Launch Content Requirements

(Must all be present before site goes live; otherwise show visible placeholder/“coming soon” states.)





Gallery: At least 12 real, labeled photos (goal=24+)



Reviews/Testimonials: At least 6 (curate from 180+ Booksy reviews)



Team: Minimum 3 barber profiles (photo + specialties + Booksy link)



Services: All require a price and duration



User Experience

Home Page





Sticky header & persistent “Book Now” CTA



Photo-forward hero: confident fade, local “Snohomish, WA” messaging



Reviews snippet (e.g., "4.9 stars – 180+ real bookings via Booksy")



Services strip (see menu below)



Gallery preview grid (4 photos, click to “See All”)



Team mini-cards (with booking links)



Hours/address/map, Open/Closed status, tap-to-call, tap-for-directions



Instagram preview (if available)

Services & Pricing Page





Service cards, categorized for Haircuts, Beard Services, Specialty/Luxury



Each card: Name, price, duration, Book Now CTA



Shop policies and FAQs



Fade Lounge Menu (mirror Booksy):







Service



Price



Duration





Skin Fade



$40



45 min





Classic/Gentleman Haircut



$35



45 min





Kids Regular Haircut



$30



45 min





Haircut & Beard



$60



1h 15m





Beard Line Up/Shaping



$30



30 min





Haircut with Design



$55



1h





Hot Towel Shave



$30



30 min





Eyebrow Line Up



$10



5 min





Head Shave



$40



30 min





Head Shave & Beard Line Up



$60



1h





Undercut/Design



$40



30 min





Luxury Hair Service



$100



1h 45min

Book Now Page





Booksy embed loads inline



If embed does not load in 2–3 seconds:





Show two buttons: "Call Us" (tap-to-call), "Open Booksy" (deep-link)



Error: “Having trouble loading? Book directly on Booksy or give us a call.”



FAQs and shop policies below booking UI

Barbers/Team





Card for each barber (photo, bio, specialties, direct Booksy booking link)



Minimum 3 barber profiles pre-launch

Gallery





Grid or masonry (tag filters: fade, beard, kids, etc.)



At least 12 real cuts at launch



Lightbox modal expands on click; lazy load for all photos

About





Fade Lounge story, philosophy, hygiene & quality pledge



“Snohomish, WA barber” localization in story



FAQs

Contact





Tap-to-call: (425) 244-7901



Map block (address: 602 2nd St, STE B, Snohomish, WA 98290)



Hours table (Mon-Fri 9-7, Sat 9-5, Sun closed)



Parking details

Legal





Privacy policy, terms, and cancellation policy

Advanced





Holiday/temporary hours handled in CMS, with status auto-expire



Booking skeleton/skeleton loader for perceived performance



Full accessibility: WCAG 2.1 AA, large tap targets (48px+), alt text, keyboard navigation



Narrative

For Customers:
Marcus, 28, is searching for a new Snohomish barber for his weekend cut. He finds Fade Lounge’s site, instantly greeted by a high-impact fade photo, bold branding, and a "Book Now" button. He sees the shop’s “4.9 average from 180+ reviews” and a transparent price list—no guesswork. Marcus taps once for booking, twice to lock a spot via Booksy, confident the process is quick and professional.

For the Owner:
Carlos, running Fade Lounge, gets an alert a price change is needed before the weekend rush. He logs into his tailored CMS, updates haircut prices in two minutes, and pushes a new before/after photo to the gallery. No code, no tech stress. Every day, the site delivers fresh bookings and keeps regulars coming back—validated by analytics on booking, calls, and Google local pack placement.



Success Metrics

Success Metrics

User Metrics





Booking conversion rate (book_now_click / unique site visitors)



Tap-to-call usage rate (call_click)



Gallery engagement



Bounce rate < 50%



Booking journeys completed (booksy_open + return-from-Booksy proxy)

Business Metrics





Monthly bookings via Booksy (tracked through booksy_open)



Booksy reviews displayed and updated (sampling 6–10 of 180+)



“Snohomish barber” ranking in Google Top 3 local pack



Owner content update time <10 min

Technical Metrics





Lighthouse Performance & SEO: all pages ≥ 90



LCP under 2.5s mobile



Uptime 99.9%

Tracking/Analytics





book_now_click



booksy_open (see Booking for definition)



call_click



directions_click



gallery_filter_used



barber_profile_viewed



book_page_view — user lands on /book page (enables click → book page conversion rate calculation).



tics

Tracking/Analytics





book_now_click



booksy_open (see Booking for definition)



call_click



directions_click



gallery_filter_used



barber_profile_viewed



book_page_view — user lands on /book page (enables click → book page conversion rate calculation).



Technical Plan

Stack





Frontend: Next.js (SSR/SSG)



Styling: Tailwind CSS



CMS: Sanity (headless, visual editing, optimized for non-technical owner)



Hosting: Vercel (global deploy, instant rollback, HTTPS)



Image: Optimized via Vercel/Image CDN, WebP/AVIF



Analytics: Google Analytics 4



Email/SMS: Resend (email, Phase 3+), Twilio (future, Phase 3+)



Supabase only considered for e-commerce or internal booking in Phase 3+

Integrations

Integrations





Booksy embed (primary booking)



Google Maps



Instagram Basic Display API (optional, Phase 2+)



Google Rich Results validator for schema

Data Model

Data Model





Service: id, name, description, price, duration, category, active



Barber: id, name, bio, specialties[], photo_url, socials, active



GalleryPhoto: id, url, tags[], barber_id (optional), created_at



SiteSettings: hours, address, phone, announcement, socials



Testimonial: id, name, content, rating, source



Booking: (Booksy, not website in Phase 1/2)

Non-Functional

Non-Functional





Core Web Vitals: LCP < 2.5s mobile



Accessibility: WCAG 2.1 AA



HTTPS, secure admin authentication



99.9% uptime target

Engineering Standards





301 redirects: www → non-www (or vice versa, pick one), HTTP → HTTPS, and any legacy/old URLs if applicable. Configure before launch.



Security headers: CSP, HSTS, X-Frame-Options, and X-Content-Type-Options configured at the Vercel/hosting layer.



Image uploads via CMS: enforce max file size (recommend 5MB), auto-compress to WebP/AVIF on upload, and require alt text before publish.



CMS backups/versioning: Sanity's built-in content history is enabled. Define restore expectation: owner or developer can roll back any content change within 30 days.



Staging environment: a staging URL (e.g., staging.fadelounge.com or preview on Vercel) must be live for owner review and QA before every production deploy.



Milestones & Sequencing

Phase 1: MVP (3–4 weeks)





Responsive website (Home, Services, Gallery, Team, About, Contact, Legal, Book Now)



Booksy embed with deep-link/call fallback



Admin CMS for content (with boundaries as above)



LocalBusiness schema, SEO, GA4, Lighthouse ≥90



Testing: mobile, fallbacks, content minimums enforced

Phase 2: Conversion Optimization (2–3 weeks post-launch)





Improved “rebook” UX: deep link to Booksy service + barber



Stronger analytics/referral tracking (booksy_open)



Automated review request workflow for owner



Google Business Profile optimization guidance

Phase 3: Growth Features (6–8 weeks, future)





Loyalty/membership system



Gift cards



Product e-commerce



Customer marketing (email/SMS)



Go-Live Checklist





Domain connected + HTTPS active



GA4 installed; tracking: book_now_click, call_click, directions_click, booksy_open



Sitemap.xml and robots.txt present and submitted



LocalBusiness schema validates in Google testing tool



404 page + error states present



Contact form (if used) with spam protection (Turnstile or reCAPTCHA)



Image optimization and lazy loading confirmed (WebP/AVIF)



Mobile tap targets all 48px+ (tested)



All pages Lighthouse ≥90 (Perf + SEO)



Booksy embed/call/deep-link fallback tested on iOS + Android



Launch content minimums: 12+ photos, 6+ testimonials, 3+ barbers, all services populated



Owner trained and content updated via CMS



Exact match on NAP (Fade Lounge, 602 2nd St, STE B, Snohomish, WA 98290, (425) 244-7901) site-wide



Acceptance Criteria (Final Checklist)





Users book in ≤3 clicks from Home (Booksy embed or fallback).



Tap-to-call confirmed (iOS & Android).



Lighthouse ≥90 for Performance and SEO.



CMS-driven changes reflect instantly.



Gallery is optimized, loads quickly, lazy-loads.



SEO: valid sitemap.xml, robots.txt, schema.



“Open Now”/Closed status is accurate.



Booksy embed fallback (call + deep-link + error) tested and clear.



All tap targets ≥48px, accessible color/contrast (WCAG 2.1 AA), keyboard nav.



Fully responsive: works across mobile, tablet, desktop; LCP <2.5s.



All GA4 events working: book_now_click, booksy_open, call_click, directions_click.



Admin can edit all content within CMS boundaries; breaking layout is impossible.



Launch content minimums met (see above).



NAP consistency matches Google Business Profile.



This PRD is implementation-ready to deliver a premium, high-conversion, and owner-friendly web presence for Fade Lounge, the top-rated Snohomish barber.

