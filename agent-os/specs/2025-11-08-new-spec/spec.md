# Specification: TEG Website Redesign & Migration

## Goal

Migrate TEG (Transporta Ekspertu Grupa) automotive services website from discontinued Frontity framework to modern Next.js 16 stack, eliminating security vulnerabilities while delivering professional multi-language marketing site with integrated booking system and email notifications.

## User Stories

- As a potential customer, I want to browse automotive services in my preferred language (Latvian/English/Russian) so that I can understand offerings clearly
- As a customer, I want to submit contact forms and book appointments online so that I can request services without phone calls
- As a business owner, I want all form submissions stored securely with email notifications so that I can respond to leads promptly

## Specific Requirements

**Multi-Language Support (lv/en/ru)**
- next-intl with locale-based routing (`/lv/`, `/en/`, `/ru/`)
- Latvian: Complete, production-ready (4.8/5 quality)
- English: MUST be 100% complete for MVP (blocking deployment) - upgrade from current 2/5 to 4+/5
- Russian: Basic functionality maintained (3/5), native speaker review after English completion
- Middleware auto-detects browser language, redirects root to `/lv/` (default)
- Language switcher component in header with cookie persistence
- All forms, emails, metadata translated per locale

**Design System - Supabase Theme**
- Install via: `pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/supabase.json`
- Typography: Outfit font (sans-serif) for all text with tracking-normal (0.025em letter-spacing)
- Full rebrand from existing lime green casual style to modern professional aesthetic
- TailwindCSS 4 with Supabase theme color palette (green primary: oklch(0.8348 0.1302 160.9080))
- Border radius: 0.5rem default, customizable shadow system included
- Mobile: Hamburger navigation menu, 2-column photo galleries, full-height preserved hero sections
- Error pages (404, 500) branded but no specific design constraints
- Cookie consent banner required for GDPR compliance, brand-aligned

**Dark Mode Support**
- next-themes integration required
- ThemeProvider wrapper in root layout
- Mode toggle component in header/footer
- Supabase theme includes light + dark CSS variables
- `suppressHydrationWarning` on html tag
- Default: system preference detection
- Persistent theme selection via cookies

**Component Configuration (components.json)**
- shadcn CLI initialization: `npx shadcn@latest init`
- Style: "new-york"
- RSC: true (React Server Components enabled)
- TSX: true (TypeScript components)
- Tailwind config: "" (v4, leave blank)
- CSS file: "app/globals.css"
- Base color: "zinc" (matches Supabase theme)
- CSS Variables: true (for theming)
- Aliases:
  - components: "@/components"
  - utils: "@/lib/utils"
  - ui: "@/components/ui"
  - lib: "@/lib"
  - hooks: "@/hooks"

**shadcn/ui Components Required**

*Form Components:*
- `button` - CTA buttons, form submits (primary, secondary, destructive variants)
- `input` - Text inputs (name, email, phone fields)
- `textarea` - Message field in contact forms
- `form` - react-hook-form integration wrapper
- `label` - Accessible form labels
- `select` - Service type selector (appointment booking)

*Navigation Components:*
- `navigation-menu` - Main site navigation
- `sheet` - Mobile hamburger menu (side drawer)
- `dropdown-menu` - Language switcher dropdown (LAT/ENG/RUS)

*Content Components:*
- `card` - Service cards, testimonial cards, pricing cards
- `dialog` - Lightbox for photo gallery expansion
- `separator` - Visual section dividers
- `badge` - Pricing callouts ("SĀKOT NO 30 EUR")

*Feedback Components:*
- `toast` - Form submission success/error notifications
- `alert` - Error page messaging (404, 500)
- `alert-dialog` - Cookie consent banner (GDPR required)

*Theme Components:*
- Mode toggle button (custom component using next-themes)

*Installation Command:*
```bash
npx shadcn@latest add button input textarea form label select navigation-menu sheet dropdown-menu card dialog separator badge toast alert alert-dialog
```

**Database Schema (Supabase PostgreSQL)**
- 3 tables: `appointments`, `contact_submissions`, `service_requests`
- Row Level Security: Public INSERT only (forms), future admin read/update deferred
- No ORM - direct Supabase client with manual TypeScript types for simplicity
- Automated daily backups via Supabase (included free tier)
- Email validation constraints, service type enums, status tracking columns
- Google Calendar event ID storage in appointments table for sync
- Indexes on created_at, status, email for common queries

**Contact Forms (Simple Structure)**
- Fields: Name, Email, Phone (optional), Message
- NO vehicle details, NO file uploads, NO service selectors
- Zod validation schemas with react-hook-form
- Arcjet rate limiting: 5 submissions per minute per IP
- Client-side validation, server-side re-validation in API routes
- Success/error states with translated messages
- Resend email confirmations in user's language within 5 seconds
- WhatsApp CTA integration prominently displayed

**Appointment Booking System**
- Service type selector: Pre-Purchase Inspection (€100), Car Search & Delivery (€350), Mobile Roadside Service (€30)
- Date/time picker with availability checking via Google Calendar API
- Vehicle info optional text field (500 char max)
- Message field for additional notes
- Google Calendar integration creates events on confirmation
- Email confirmation with calendar invite attachment
- Store google_calendar_event_id for future updates/cancellations

**Service Request Form (Quick Callback)**
- Minimal fields: Name, Phone, Service Type
- Preferred time selector: morning/afternoon/evening
- Urgent flag checkbox
- Instant notification email to TEG team
- Simple acknowledgment to customer

**Email System (Resend + React Email)**
- Multi-language templates: ContactConfirmation, AppointmentConfirmation, ServiceRequestConfirmation
- Server-side rendering with React Email components
- Consistent branding, professional footer with contact info
- Template translations in lv/en/ru matching form locale
- Rate limiting on email sends to prevent abuse
- Error tracking for failed deliveries via Sentry

**Social Media Integration**
- Instagram: Server-fetched active feed displays on Homepage + Contact page (NOT client-side widgets for performance)
- Facebook: Static links only in footer
- TikTok: Static links only in footer
- Social icons: Instagram @teg.auto, TikTok @teg.auto, Facebook Transportaekspertugrupa

**SEO & Performance Optimization**
- JSON-LD structured data: LocalBusiness, Service schemas for each offering
- Dynamic metadata generation per page and locale
- Open Graph tags for social sharing with og-image.jpg
- Sitemap.xml with hreflang alternates for all locales
- robots.txt allowing crawlers, disallowing /api/ routes
- Core Web Vitals targets: LCP <2.5s, FID <100ms, CLS <0.1
- Performance baseline established AFTER initial deployment
- Next.js Image component for all images with Supabase/Sanity CDN pipeline

**Security & Monitoring**
- Arcjet: Rate limiting (1M req/month free), bot detection, DDoS prevention
- Form-specific limits: Contact 5/min, Appointments 3/hour, Service requests 5/hour
- Sentry error tracking (5K events/month free) with session replay
- PostHog analytics (1M events/month free) for user behavior tracking
- CSRF protection on all form submissions
- Input sanitization via Zod schemas
- Environment variables validated via T3 Env with TypeScript

**Deployment & Infrastructure**
- Vercel Hobby plan (free tier) sufficient for MVP
- GitHub Actions CI/CD: ESLint, TypeScript check, Vitest, build on push
- Automatic HTTPS via Vercel with Let's Encrypt
- Edge Functions for locale detection middleware
- Manual backup strategy before deployment (Option C) - no automated rollback
- No load testing pre-deployment, rely on Vercel auto-scaling
- Domain: teg.lv with DNS pointing to Vercel nameservers

**Testing Strategy**
- Vitest for unit/integration tests (validation functions 90%+ coverage, API routes 80%+)
- Playwright for E2E testing (form submissions, email delivery, calendar sync)
- Manual cross-browser testing: Chrome, Firefox, Safari, Edge, Mobile Safari, Chrome Mobile
- Multi-language form testing: All 3 forms in lv/en/ru
- Email template rendering verification in actual email clients
- Google Calendar event creation verification

## Visual Design

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-2025-11-08-09_11_33.png` (Latvian Homepage)**
- Full-featured landing with hero section featuring dark overlay on automotive imagery
- Large white heading text in Comfortaa font with green CTA buttons
- Service illustrations in 3-column, 6-item icon-based grid layout
- Trust signals (reviews, social proof) alternating white/light gray backgrounds
- Instagram feed integration at bottom of page
- Contact form CTA with WhatsApp emphasis
- Sticky header with language switcher (LAT/ENG/RUS), phone number, business hours

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png` (About Us)**
- Company mission with brand logo "TEG.LV" text with car icon
- "TRANSPORTA EKSPERTU GRUPA" subtitle with decorative badge
- Text-heavy content layout using Inter body font (16-18px)
- Rounded, friendly, professional aesthetic with automotive focus

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png` (Car Purchase Service)**
- Extensive photo gallery grid (4-6 columns desktop, 2 columns mobile)
- Automotive inspection photos, document screenshots, diagnostic tool images
- Lightbox functionality for image expansion
- Process flow illustrations with hand-drawn style icons in 4-5 step horizontal layout

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png` (Services)**
- Detailed service list with icon + heading + bullet list cards
- Hero banner with full-width dark overlay
- Pricing callouts in bold colored text: "SĀKOT NO 30 EUR" (Starting from)
- White background cards with subtle shadows, consistent spacing

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png` (Contact)**
- WhatsApp CTA prominently displayed as primary contact method
- Simple contact form (name/email/phone/message)
- Social media integration showing Facebook, Instagram, TikTok icons
- Instagram server-fetched feed embedded
- Customer testimonials with Facebook branding
- Footer with dark background (charcoal/black), copyright, minimal links

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-home-1-2025-11-08-09_14_03.png` (English Homepage)**
- "CHECK BEFORE BUY!" hero messaging (direct language vs nuanced Latvian)
- Process flow illustration with connectors between steps
- Contact form for vehicle search requests
- CRITICAL: Missing complete content structure vs Latvian version - MUST complete for MVP

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-about-us-2025-11-08-09_14_26.png` (English About)**
- Company mission in English with minimal navigation (only Home, About us visible)
- Indicates incomplete English implementation requiring expansion

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-nachalo-2025-11-08-09_19_52.png` (Russian Homepage)**
- "СТРАНИЦА В РАЗРАБОТКЕ" (Page under development) notice visible
- Car purchase form present but minimal content
- Placeholder status confirms limited coverage requiring native speaker review

**`planning/visuals/TEMP -- TEG Screens/screencapture-teg-lv-nasha-rabota-2025-11-08-09_20_02.png` (Russian Our Work)**
- "как это выглядит" (what it looks like) heading
- Photo gallery grid with basic 2-page implementation
- Sufficient for post-MVP Russian expansion after English completion

## Existing Code to Leverage

**LocaleSwitcher Component (`src/components/LocaleSwitcher.tsx`)**
- Existing pattern for language switching in Next.js App Router with next-intl
- Cookie-based locale persistence already implemented
- Dropdown or inline tabs UI pattern to replicate
- Integrate with middleware locale detection for seamless UX
- Maintain URL structure consistency (`/[locale]/` prefix)

**BaseTemplate Layout (`src/templates/BaseTemplate.tsx`)**
- Header/Footer layout structure already established
- Reusable pattern for consistent page layouts across marketing pages
- Storybook tests indicate component-driven architecture
- Adapt for Northern Lights theme styling while preserving layout logic
- Navigation component integration point for hamburger menu (mobile)

**Form Validation Pattern (`src/validations/CounterValidation.ts`)**
- Existing Zod schema pattern to replicate for contact/appointment/service request forms
- Shows project convention for validation layer separation
- TypeScript type inference from schemas already demonstrated
- Extend pattern to multi-language error messages via next-intl

**API Route Structure (`src/app/[locale]/api/counter/route.ts`)**
- Established pattern for API routes within locale-aware structure
- Response format conventions to maintain consistency
- Error handling pattern to replicate across form submission endpoints
- Integration point for Arcjet rate limiting middleware

**Database Connection (`src/libs/DB.ts` and `src/utils/DBConnection.ts`)**
- Existing database abstraction layer (currently configured for Drizzle ORM)
- Replace with Supabase client while maintaining similar query interface
- Connection pooling pattern to preserve for production efficiency
- Environment variable management via `src/libs/Env.ts` T3 Env setup

## Out of Scope

- Modification of existing Frontity codebase (ground-up redesign, not migration of old code)
- Data migration from WordPress backend (new content in Sanity CMS, Supabase for forms)
- Sanity CMS integration for blog/content management (deferred to post-MVP Phase 2)
- Admin dashboard for appointment management (deferred to post-MVP with authentication)
- Customer portal with appointment history (deferred to Phase 2)
- Live chat functionality (deferred to Phase 3)
- FAQ section with AI chatbot (deferred to Phase 3)
- Multi-currency support (MVP uses EUR only)
- Advanced logging and observability beyond Sentry/PostHog (deferred)
- Automated rollback mechanisms (manual backup sufficient per requirements)
- Load testing and traffic simulation (rely on Vercel infrastructure)
- Custom backup scripts (Supabase/Sanity automated backups sufficient)
- RTL language support (not needed for lv/en/ru)
- Client-side social media widgets (using server-fetch for Instagram only)
- File uploads in contact forms (simple text fields only)
- Vehicle details capture in contact forms (deferred to appointment form optional field)
- Service selectors in simple contact form (only in appointment booking)
- Advanced loading state animations beyond shadcn defaults (deferred to post-MVP)
- Print stylesheets (not required)
- Storybook component documentation (small team, not needed for MVP)
- Codecov external coverage tracking (Vitest built-in sufficient)
- Visual regression testing (Playwright E2E sufficient for MVP)
- Crowdin integration for translations (manual Git-based management for 3 languages)
