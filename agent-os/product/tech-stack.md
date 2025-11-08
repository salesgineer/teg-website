# Technology Stack

## Overview

This document defines the complete technology stack for the TEG automotive inspection website redesign. All choices prioritize modern, maintainable, secure solutions that address the critical need to migrate from the deprecated Frontity framework while supporting multi-language content, booking functionality, and high performance.

---

## Frontend Framework

### Next.js 15.5.4+ (App Router)
- **Rationale:** Industry-standard React framework with App Router providing file-based routing, server components, streaming SSR, and built-in optimization
- **Key Features Used:**
  - App Router for internationalized routing (`/[locale]/`)
  - Server Components for reduced JavaScript bundle
  - Image optimization with `next/image`
  - API Routes for backend endpoints
  - Middleware for locale detection/auth
- **Migration Benefit:** Modern replacement for deprecated Frontity framework with active development and security updates

### React 19
- **Rationale:** Latest stable React version with improved performance, concurrent features, and Next.js 15 compatibility
- **Key Features Used:**
  - Server Components
  - Concurrent rendering
  - Automatic batching
  - Improved hydration

---

## Language & Type Safety

### TypeScript 5.9+ (Strict Mode)
- **Rationale:** Type safety critical for multi-language CMS integration, form validation, API contracts
- **Configuration:** Strict mode enabled (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`)
- **Usage:** All `.ts`/`.tsx` files, typed Sanity schemas, typed API responses, typed form schemas

---

## Styling & UI

### TailwindCSS 3.4+
- **Rationale:** Utility-first CSS framework enabling rapid UI development, consistent design system, small production bundle
- **Configuration:**
  - Custom color palette matching TEG branding
  - Responsive breakpoints (mobile-first)
  - Typography plugin for content pages
  - Forms plugin for input styling
- **Benefits:** JIT compilation for fast builds, purge unused CSS, dark mode support if needed

### Design System Components
- **Custom Component Library:** Built on Tailwind utilities
  - Buttons, Cards, Forms, Navigation, Footer
  - Reusable, accessible, mobile-responsive
  - Documented in Storybook (optional)

---

## Internationalization (i18n)

### next-intl
- **Rationale:** Purpose-built i18n solution for Next.js App Router with type-safe translations
- **Languages Supported:**
  - **Latvian (lv):** Primary language, complete content (Quality: 4.8/5)
  - **English (en):** Secondary, requires completion (~40% → 100%) (Target: 4.5/5)
  - **Russian (ru):** Tertiary, limited coverage (2 pages → all pages) (Target: 4/5)
- **URL Structure:** Locale-based routing (`/lv/`, `/en/`, `/ru/`)
- **Features:**
  - Middleware for automatic locale detection
  - Type-safe translation keys
  - Namespace-based organization
  - Locale switching component

---

## Content Management

### Sanity CMS (Headless)
- **Rationale:** Modern headless CMS with excellent Next.js integration, image pipeline, multi-language content support
- **Content Models:**
  - Services (inspection, car search, roadside)
  - Pages (homepage, about, contact, FAQ)
  - Blog posts
  - Global settings (contact info, hours, social links)
  - Multi-language fields per content type
- **Features:**
  - Sanity Studio for non-technical content editing
  - GROQ queries for flexible content fetching
  - Image CDN with automatic optimization
  - Preview mode for draft content
  - Version history and rollback

---

## Database & Authentication

### Supabase
- **Rationale:** Open-source Firebase alternative with PostgreSQL, real-time capabilities, and built-in auth
- **Usage:**
  - **Database:** Appointment bookings, customer accounts, form submissions
  - **Authentication:** Customer dashboard login (Phase 5)
  - **Row-Level Security:** Secure multi-tenant data access
  - **Real-time:** Optional real-time booking availability updates
- **Schema:**
  - `appointments` table (service_type, date, time, vehicle_details, customer_info, status)
  - `customers` table (auth integration, booking history)
  - `form_submissions` table (contact form leads with timestamps)

---

## Form Handling & Validation

### react-hook-form + Zod
- **Rationale:** Industry-standard form library with type-safe validation schemas
- **react-hook-form:**
  - Minimal re-renders for performance
  - Built-in validation hooks
  - Error handling and form state management
- **Zod:**
  - Type-safe schema validation
  - Reusable validation schemas
  - Custom error messages per language
  - API request/response validation
- **Security:**
  - CSRF token validation
  - Rate limiting on submission endpoints
  - Input sanitization
  - Server-side validation mirroring client-side

---

## Email Notifications

### SendGrid
- **Rationale:** Reliable transactional email service with template support and delivery tracking
- **Email Types:**
  - Contact form submissions → admin notification
  - Appointment bookings → customer confirmation + admin notification
  - Appointment reminders (optional future feature)
  - Multi-language email templates (Latvian, English, Russian)
- **Templates:**
  - HTML + plain text versions
  - Branded header/footer
  - Localized content per recipient language

---

## Calendar Integration

### Google Calendar Appointment Scheduling (Native)
- **Rationale:** FREE with Google Workspace, native integration for instant booking without third-party dependencies
- **Features:**
  - 3 separate booking pages (inspection, car search, mobile services)
  - Europe/Riga timezone support
  - Automatic email notifications to customers and staff
  - Real-time availability checking
  - No SMS notifications needed (email-only workflow)
  - No payment processing required (payments handled separately)
- **Implementation:**
  - **Google Calendar API:**
    - `Freebusy` queries for availability checking
    - `Events.insert` for creating appointments
    - Incremental sync for real-time updates
  - Integration via Next.js API routes
  - Secure OAuth 2.0 authentication
- **Benefits:**
  - Zero cost for core booking functionality
  - Familiar interface for staff (Google Calendar)
  - Automatic calendar blocking prevents double-bookings
  - Multi-language email templates via Google

---

## Monitoring & Analytics

### Highlight.io (Error Tracking)
- **Rationale:** Modern error monitoring with AI-powered error grouping, session replay, and Next.js 15 native support
- **Free Tier:** 500 sessions/month with AI error grouping
- **Features:**
  - Session replay for debugging user issues
  - AI-powered error grouping reduces noise
  - Next.js 15 native integration
  - Full stack traces with source maps
  - Performance monitoring
  - User session tracking
- **Upgrade Path:** $50/month when exceeding free tier
- **Benefits:** More cost-effective than Sentry for early-stage deployment, modern debugging tools

### Google Analytics 4
- **Rationale:** Industry-standard web analytics for traffic, user behavior, conversion tracking
- **Event Tracking:**
  - Page views (per language)
  - Form submissions (contact, booking)
  - CTA clicks (service booking buttons, phone clicks)
  - User journeys (homepage → service page → booking)
  - Conversion goals (completed bookings, contact submissions)
- **Custom Dimensions:**
  - User language preference
  - Service type selected
  - Booking funnel drop-off points

---

## Performance & Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** <2.5s
  - Next.js Image optimization with WebP/AVIF formats
  - Sanity image CDN with automatic resizing
  - Critical CSS inlining
  - Lazy loading below-the-fold images
- **FID (First Input Delay):** <100ms
  - Minimal client-side JavaScript
  - Code splitting per route
  - Server Components for static content
- **CLS (Cumulative Layout Shift):** <0.1
  - Image dimension attributes
  - Font loading strategy (font-display: swap)
  - Reserved space for dynamic content

### Additional Optimizations
- **Bundle Analysis:** @next/bundle-analyzer
- **Compression:** Brotli/Gzip via Vercel CDN
- **Caching:** Static page generation, ISR for CMS content
- **CDN:** Vercel Edge Network for global performance

---

## Security

### OWASP Compliance
- **Input Validation:** Zod schemas on client + server
- **CSRF Protection:** Token-based validation on forms
- **Rate Limiting:** API route middleware (10 req/min per IP)
- **SQL Injection Prevention:** Supabase parameterized queries
- **XSS Prevention:** React auto-escaping, CSP headers
- **Secrets Management:** Environment variables, never committed

### Security Headers
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' *.sanity.io *.google-analytics.com
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Deployment & CI/CD

### Vercel (Primary Hosting)
- **Rationale:** Seamless Next.js integration, global CDN, automatic SSL, preview deployments
- **Configuration:**
  - Production domain: `teg.lv` (custom domain)
  - Preview deployments per Git branch
  - Environment variables per environment (dev, staging, prod)
  - Build cache for faster deployments
- **CI/CD Pipeline:**
  1. Push to Git → Vercel webhook
  2. Run build (`npm run build`)
  3. Run tests (unit, integration)
  4. Deploy to preview URL (non-main branches)
  5. Deploy to production (main branch merges)
  6. Invalidate CDN cache

---

## Development Tools

### Package Management
- **uv:** Fast Python package manager for any Python tooling scripts
- **npm/pnpm:** Node.js package management (pnpm preferred for speed)

### Code Quality
- **ESLint:** Next.js recommended config + custom rules
- **Prettier:** Code formatting with Tailwind plugin
- **Husky:** Pre-commit hooks for linting/formatting
- **TypeScript:** Strict type checking

### Testing (Future Consideration)
- **Vitest:** Unit testing for utilities, hooks
- **Playwright:** E2E testing for critical flows (booking, contact forms)
- **Testing Library:** Component testing

---

## Architecture Pattern

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── page.tsx           # Homepage (multi-language)
│   │   ├── services/          # Service detail pages
│   │   │   ├── inspection/
│   │   │   ├── car-search/
│   │   │   └── roadside/
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   ├── blog/              # Blog listing + detail
│   │   └── appointments/      # Booking system
│   ├── api/                   # API routes
│   │   ├── contact/           # Contact form submission
│   │   ├── bookings/          # Appointment booking
│   │   └── webhooks/          # Sanity/Supabase webhooks
│   └── layout.tsx             # Root layout
├── components/
│   ├── ui/                    # Reusable UI (Button, Card, Input)
│   ├── forms/                 # Form components (ContactForm, BookingForm)
│   ├── layout/                # Layout components (Header, Footer, Nav)
│   └── features/              # Feature-specific (ServiceCard, LanguageSwitcher)
├── lib/
│   ├── sanity/                # Sanity client, queries, schemas
│   ├── supabase/              # Supabase client, queries
│   ├── validations/           # Zod schemas
│   ├── email/                 # SendGrid templates, utilities
│   └── utils/                 # Shared utilities
├── middleware.ts              # next-intl locale detection, auth
└── i18n/
    ├── locales/               # Translation files (lv.json, en.json, ru.json)
    └── config.ts              # next-intl configuration
```

---

## Environment Variables

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# SendGrid
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=noreply@teg.lv

# Google Calendar
GOOGLE_CALENDAR_API_KEY=
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
GOOGLE_CALENDAR_REDIRECT_URI=

# Highlight.io
NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID=

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Security
CSRF_SECRET=
RATE_LIMIT_WINDOW=60000  # 1 minute
RATE_LIMIT_MAX=10        # 10 requests per window

# Business Info (for fallback if not in CMS)
NEXT_PUBLIC_PHONE=+37125201710
NEXT_PUBLIC_EMAIL=info@teg.lv
```

---

## Migration Strategy from Frontity

1. **Content Extraction:** Export existing Frontity content, map to Sanity schemas
2. **Parallel Development:** Build new Next.js site without affecting current site
3. **Staging Testing:** Deploy to Vercel preview URL, test all languages/features
4. **SEO Preservation:** 301 redirects for URL changes, maintain URL structure where possible
5. **Gradual Cutover:** Update DNS from Frontity host to Vercel, monitor errors with Sentry
6. **Post-Launch Monitoring:** Track Core Web Vitals, error rates, conversion metrics first 48 hours

---

## Summary

This tech stack prioritizes:
- **Security:** Migrating from unmaintained Frontity to actively supported Next.js 15
- **Performance:** Core Web Vitals optimization for professional user experience
- **Multi-Language:** Complete i18n infrastructure supporting Latvian, English, Russian
- **Maintainability:** Modern TypeScript + headless CMS for long-term sustainability
- **Scalability:** Sanity CMS + Supabase enabling feature expansion without rewrites
- **Business Value:** Integrated booking system, lead capture, analytics for growth

All choices align with TEG's mission: professional, trustworthy, convenient automotive inspection services accessible across languages and geographies.
