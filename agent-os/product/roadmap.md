# Product Roadmap

## Phase 1: Foundation & Core Infrastructure (MVP)

1. [ ] **Next.js 15 Project Setup with TypeScript** — Initialize Next.js 15.5.4+ with App Router, TypeScript 5.9+ strict mode, TailwindCSS 3.4+, project structure (`src/app/[locale]/`, `components/`, `lib/`), ESLint/Prettier configuration, and Git repository setup `S`

2. [ ] **Multi-Language Routing Infrastructure** — Implement next-intl with locale-based routing (`/lv/`, `/en/`, `/ru/`), middleware for locale detection/redirection, language switcher component, and translation file structure for three languages `M`

3. [ ] **Sanity CMS Integration** — Set up Sanity Studio project, define schemas for services/pages/settings, implement GROQ queries, create preview components, configure image pipeline with Next.js Image optimization `M`

4. [ ] **Design System & Reusable Components** — Build Tailwind-based component library (buttons, cards, forms, navigation, footer), establish typography scale, color tokens matching TEG branding, responsive grid system, and accessibility (WCAG 2.1 AA) foundations `M`

5. [ ] **Homepage with Services Overview** — Create multi-language homepage featuring hero section with brand tagline, three service cards (Inspection, Car Search, Roadside) with pricing, CTAs to booking/contact, trust indicators (independence messaging), mobile-optimized layout `M`

6. [ ] **Service Detail Pages (All Three Services)** — Build dedicated pages for Pre-Purchase Inspection, Car Search & Delivery, Mobile Roadside Service with detailed service descriptions, transparent pricing, process explanations, booking CTAs, and multi-language content from Sanity CMS `L`

7. [ ] **Contact Information Pages** — Create contact page with phone (+371 25 201 710), hours (Mon-Sat 9AM-8PM), social media links (Instagram/TikTok @teg.auto, Facebook), embedded map/location info, and fix English placeholder text issues identified in research `S`

8. [ ] **Basic Contact Form with Validation** — Implement contact form using react-hook-form + Zod validation, CSRF protection, rate limiting middleware, SendGrid email integration for lead notifications, success/error states, and multi-language form labels/validation messages `M`

## Phase 2: Booking & Lead Generation

9. [ ] **Appointment Booking System (Frontend)** — Build multi-step booking form with service selection, date/time picker, vehicle details input, contact information, pricing calculation, form validation (Zod), and multi-language support `L`

10. [ ] **Appointment Booking System (Backend)** — Create Supabase database schema for appointments, API routes for booking submission, email confirmations via SendGrid (customer + admin), availability validation, rate limiting, and booking management dashboard `L`

11. [ ] **About Us / Company Information Page** — Design about page highlighting TEG's independence positioning ("neatkarīgi"), anti-fraud focus, team expertise, brand story ("kam auto ir sirdslieta"), trust-building content, and multi-language translations `S`

12. [ ] **SEO Foundation & Structured Data** — Implement Schema.org JSON-LD markup for AutomotiveBusiness, Service, FAQPage schemas, meta tags (title, description, og:tags) per page/language, sitemap.xml generation, robots.txt, canonical URLs `M`

## Phase 3: Content & Translation Completion

13. [ ] **Complete English Content Translation** — Audit all English content (currently ~40% complete), translate missing sections, fix placeholder text on contact page, ensure service descriptions match Latvian quality (target: 100% coverage, quality 4.5/5) `M`

14. [ ] **Expand Russian Language Coverage** — Extend Russian content beyond current 2 pages to cover all core pages (homepage, services, about, contact), maintain functional quality standard (target: 100% coverage, quality 4/5) `M`

15. [ ] **FAQ Section with Common Questions** — Create FAQ page addressing common buyer concerns (inspection process, coverage area, pricing, report contents, fraud protection), implement accordion UI, Schema.org FAQPage markup, multi-language content `M`

16. [ ] **Blog/Content Management System** — Set up blog infrastructure in Sanity CMS, create article template with SEO fields, implement blog listing/detail pages, add categorization/tagging, RSS feed for SEO content strategy `L`

## Phase 4: Performance & Quality Assurance

17. [ ] **Performance Optimization (Core Web Vitals)** — Optimize LCP (<2.5s) via image optimization, lazy loading, code splitting; minimize FID (<100ms) with reduced JavaScript; eliminate CLS (<0.1) with size hints, measure with Lighthouse/WebPageTest `M`

18. [ ] **Security Hardening** — Implement comprehensive security headers (CSP, HSTS, X-Frame-Options), OWASP compliance audit, additional rate limiting on all forms, input sanitization review, dependency vulnerability scanning `S`

19. [ ] **Accessibility Audit & Compliance** — Conduct WCAG 2.1 AA compliance testing, fix keyboard navigation issues, ensure screen reader compatibility, add ARIA labels, color contrast validation, semantic HTML review `M`

20. [ ] **Cross-Browser & Device Testing** — Test on Chrome, Firefox, Safari, Edge (desktop + mobile), iOS Safari, Android Chrome, validate responsive breakpoints (mobile/tablet/desktop), fix browser-specific issues `S`

## Phase 5: Analytics, Monitoring & Launch Preparation

21. [ ] **Google Analytics 4 Integration** — Set up GA4 property, implement event tracking (page views, form submissions, booking starts/completions, phone clicks, CTA interactions), conversion goals, user journey funnels `S`

22. [ ] **Sentry Error Tracking Setup** — Configure Sentry project, integrate SDK in Next.js app, set up source maps, define error alerting rules, create error dashboard, test error capture in staging environment `S`

23. [ ] **Customer Dashboard (Appointment Management)** — Build authenticated customer portal with Supabase Auth, view/manage appointments, edit booking details, cancellation functionality, booking history, email notifications for changes `L`

24. [ ] **Vercel Production Deployment & CI/CD** — Configure Vercel project, set up environment variables (Sanity, Supabase, SendGrid API keys), establish preview deployments for branches, production deployment pipeline, custom domain setup (teg.lv) `M`

## Phase 6: Enhancement & Growth Features

25. [ ] **Social Media Content Integration** — Embed Instagram/TikTok feeds on homepage, display recent posts from @teg.auto, add social sharing buttons on blog posts, og:image optimization for social sharing `S`

26. [ ] **Case Studies / Testimonials Section** — Create case study content type in Sanity, build case study detail pages showcasing successful inspections, highlight fraud detection stories, customer testimonials with photos/videos `M`

27. [ ] **Live Chat Functionality** — Integrate live chat solution (Tawk.to or Intercom), configure business hours availability, set up chat routing to team, mobile optimization, multi-language chat widget `M`

28. [ ] **Enhanced Service Reports Showcase** — Build interactive sample report viewer, showcase inspection methodology with photos, display VIN history check examples, demonstrate report detail level to build trust and set expectations `M`

> Notes
> - Order reflects technical dependencies (foundation → features → content → optimization → launch)
> - Phases 1-2 deliver MVP: functional multi-language site with booking capability
> - Phases 3-4 achieve production quality: complete translations, performance, security
> - Phases 5-6 enable growth: analytics-driven optimization, customer portal, enhanced engagement
> - Priority aligns with mission: migrate from deprecated Frontity ASAP while serving all language markets
