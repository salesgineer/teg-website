# Pending Tasks - TEG Website Implementation

**Project:** TEG (Transporta Ekspertu Grupa) Website
**Spec Version:** 2025-11-08
**Status:** MVP Phase - In Progress (39 remaining task groups)
**Last Updated:** 2025-11-08 13:58
**Total Remaining Effort:** 32 hours to production-ready deployment

---

## Overview

**Progress Summary:**
- **Completed:** Day 1 (16 hours) - All foundation & setup tasks ✅
- **In Progress:** Day 2-5 remaining tasks
- **Blocked:** 0 tasks
- **At Risk:** English translation completion (spec blocker)

**Critical Path:** English translations → API routes → Forms → Pages → Testing → Deployment

---

## Priority 1: Deployment Blockers (CRITICAL - 4 hours)

### P1.1: Complete English Translations
**Status:** ⚠️ BLOCKED (Spec requirement line 18)
**Duration:** 2 hours
**Blocks:** Full deployment to production
**Dependencies:** None
**Assigned to:** text-writer coordinator

**Objective:** Upgrade English translation quality from 2/5 to 4+/5 (MVP minimum)

**Checklist:**
- [ ] Review all 147 keys in `src/locales/en.json` (1h)
  - [ ] Home page content (hero, services, CTAs)
  - [ ] Navigation and UI components
  - [ ] Form labels and placeholder text
  - [ ] Error messages and validation feedback
  - [ ] Email template subject lines and body text
  - [ ] Page meta descriptions and Open Graph tags

- [ ] Replace placeholder text with production English (0.5h)
  - [ ] Remove boilerplate/template text
  - [ ] Ensure consistent terminology across all pages
  - [ ] Validate against Latvian source for accuracy
  - [ ] Check brand tone consistency (professional, accessible)

- [ ] Quality assurance and testing (0.5h)
  - [ ] Render all 3 forms in English mode - verify text clarity
  - [ ] Check email templates in Resend dashboard - proper formatting
  - [ ] Test navigation flow in English locale
  - [ ] Screenshot comparison: English vs Latvian pages

**Acceptance Criteria:**
- [ ] Zero placeholder text or "Lorem ipsum" remaining
- [ ] All 147 translation keys properly filled
- [ ] English quality upgraded from 2/5 to 4+/5
- [ ] No untranslated UI elements on any page
- [ ] Spec requirement met: "English MUST be 100% complete for MVP"

**Files to Update:**
- `/home/fivefingerdisco/Projects/TEG_001/src/locales/en.json` (147 keys)

**Blocking Issue:** Cannot deploy MVP with incomplete English translations

---

### P1.2: Create Visual Assets
**Status:** ⏳ PENDING
**Duration:** 0.5 hours
**Blocks:** SEO, social sharing, Open Graph previews
**Dependencies:** None
**Assigned to:** web-dev-worker coordinator

**Objective:** Generate og-image.jpg for social media sharing and SEO

**Checklist:**
- [ ] Create og-image.jpg (1200×630 pixels) (0.25h)
  - [ ] Use Supabase theme green as accent color
  - [ ] Include TEG logo/branding
  - [ ] Add text: "TEG - Automotive Expertise"
  - [ ] Professional, clean design matching brand
  - [ ] Save to `public/og-image.jpg`

- [ ] Configure Open Graph metadata (0.25h)
  - [ ] Update global metadata with og:image reference
  - [ ] Set og:title, og:description per page
  - [ ] Add og:url, og:locale for multi-language support
  - [ ] Test with Facebook Share Debugger

**Acceptance Criteria:**
- [ ] og-image.jpg exists and loads correctly
- [ ] Open Graph tags render in meta tags (inspect with `og:`)
- [ ] Social preview shows image and description
- [ ] File optimized (< 500KB)

**Files to Create:**
- `/home/fivefingerdisco/Projects/TEG_001/public/og-image.jpg`

**Files to Modify:**
- `src/app/layout.tsx` (add og:image metadata)

---

### P1.3: Manual Service Setup
**Status:** ⏳ PENDING (Requires manual verification)
**Duration:** 1 hour
**Blocks:** Email delivery, appointment booking, form submissions
**Dependencies:** None (external services)
**Assigned to:** text-writer coordinator (documentation)

**Objective:** Configure external services required for MVP functionality

**Checklist:**
- [ ] Supabase Project Creation (0.25h)
  - [ ] Create new Supabase project at https://supabase.com
  - [ ] Project name: "teg-website-production"
  - [ ] Region: EU (Ireland or closest to Latvia)
  - [ ] Save project URL: `https://<project-id>.supabase.co`
  - [ ] Generate anon key and service role key
  - [ ] Document in `.env` file

- [ ] Resend Domain Verification (0.25h)
  - [ ] Sign up at https://resend.com (or use existing account)
  - [ ] Add domain: teg.lv
  - [ ] Configure DNS records (SPF, DKIM, DMARC)
  - [ ] Wait for verification (usually 5-10 minutes)
  - [ ] Get Resend API key from dashboard
  - [ ] Test email send via Resend API

- [ ] Google Calendar API Setup (0.25h)
  - [ ] Create Google Cloud project at https://console.cloud.google.com
  - [ ] Enable Calendar API
  - [ ] Create Service Account credentials (JSON key)
  - [ ] Share TEG calendar with service account email
  - [ ] Save API key to `GOOGLE_CALENDAR_API_KEY` in .env
  - [ ] Save calendar ID to `GOOGLE_CALENDAR_ID` in .env
  - [ ] Test calendar event creation

- [ ] Arcjet Configuration Verification (0.25h)
  - [ ] Verify Arcjet key in `.env` (already configured)
  - [ ] Log in to Arcjet dashboard
  - [ ] Configure rate limit rules:
    - Contact form: 5/minute per IP
    - Appointments: 3/hour per IP
    - Service requests: 5/hour per IP
  - [ ] Enable bot detection (already enabled)

**Acceptance Criteria:**
- [ ] Supabase project created and accessible
- [ ] Resend domain verified (green checkmark in dashboard)
- [ ] Test email successfully sends to customer
- [ ] Google Calendar event can be created programmatically
- [ ] Arcjet rate limiting active on form endpoints
- [ ] No service errors during form submission

**Documentation:**
- Create file: `docs/service-setup-checklist.md` with step-by-step verification

---

### P1.4: Fix Unit Test Failures
**Status:** ⚠️ IN PROGRESS
**Duration:** 0.5 hours
**Blocks:** Build pipeline, deployment
**Dependencies:** None
**Assigned to:** parallel-bash-executor coordinator

**Objective:** Resolve 2 failing Vitest unit tests (whitespace trimming)

**Checklist:**
- [ ] Identify failing tests (0.1h)
  - [ ] Run `pnpm test` to get failure logs
  - [ ] Document exact test names and error messages
  - [ ] Determine root cause (assertion mismatch, setup issue, etc.)

- [ ] Fix whitespace trimming tests (0.3h)
  - [ ] Review test expectations vs actual output
  - [ ] Adjust test assertions or implementation as needed
  - [ ] Ensure both tests pass consistently
  - [ ] Verify no regression in other tests

- [ ] Verify build succeeds (0.1h)
  - [ ] Run `pnpm build` - must complete without errors
  - [ ] Run `pnpm check:types` - no TypeScript errors
  - [ ] Commit fixes to git

**Acceptance Criteria:**
- [ ] All unit tests pass: `pnpm test` → PASS
- [ ] Build completes successfully: `pnpm build` → success
- [ ] No TypeScript errors: `pnpm check:types` → success
- [ ] Test files committed with passing status

**Test Files:**
- Identify via `pnpm test` output

---

## Priority 2: MVP Completion (4 hours)

### P2.1: Database Schema & Supabase Setup
**Status:** ⏳ PENDING
**Duration:** 2 hours
**Blocks:** Form submissions, API routes, data storage
**Dependencies:** P1.3 (Supabase project creation)
**Assigned to:** web-dev-worker coordinator

**Objective:** Create production database schema with proper security and indexing

**Checklist:**
- [ ] Supabase Client Installation (0.5h)
  - [ ] Install `@supabase/supabase-js`: `pnpm add @supabase/supabase-js`
  - [ ] Create `src/lib/supabase/client.ts` (browser client)
  - [ ] Create `src/lib/supabase/server.ts` (server-side client)
  - [ ] Test connection to Supabase project

- [ ] Create Database Tables (1h)
  - [ ] Create `contact_submissions` table with schema from tasks.md line 304-316
  - [ ] Create `appointments` table with schema from tasks.md line 321-341
  - [ ] Create `service_requests` table with schema from tasks.md line 344-359
  - [ ] Add email validation constraints on all tables
  - [ ] Create indexes for performance (created_at, status, email)

- [ ] Configure Row Level Security (0.5h)
  - [ ] Enable RLS on all 3 tables
  - [ ] Create INSERT policy for anonymous users (public forms)
  - [ ] Test: Unauthenticated POST to forms works
  - [ ] Defer admin SELECT/UPDATE policies to Phase 2

**Acceptance Criteria:**
- [ ] All 3 tables exist in Supabase dashboard
- [ ] Email validation constraints working (reject invalid emails)
- [ ] Indexes created for performance optimization
- [ ] RLS policies allow public form submissions
- [ ] TypeScript types generated: `pnpm supabase gen types`

**Generated Files:**
- `src/types/database.types.ts` (auto-generated from schema)

**Verification:**
- [ ] Test INSERT via API route succeeds
- [ ] Test invalid email rejected by constraint
- [ ] Test indexes help query performance

---

### P2.2: Form Validation & API Routes
**Status:** ⏳ PENDING
**Duration:** 1.5 hours
**Blocks:** Form submissions
**Dependencies:** P2.1
**Assigned to:** web-dev-worker coordinator

**Objective:** Implement form validation schemas and API endpoints for all 3 submission types

**Checklist:**
- [ ] Create Zod Validation Schemas (0.5h)
  - [ ] Contact form schema: `src/validations/contactForm.ts`
    - [ ] Name: string, max 100 chars, required
    - [ ] Email: valid email format, required
    - [ ] Phone: optional, max 20 chars
    - [ ] Message: string, max 1000 chars, required
    - [ ] Locale: enum ('lv', 'en', 'ru')
    - [ ] Multi-language error messages

  - [ ] Appointment form schema: `src/validations/appointmentForm.ts`
    - [ ] Name, email, phone: same as contact
    - [ ] Service type: enum ('pre-purchase', 'car-search', 'mobile-service')
    - [ ] Preferred date: future dates only, business days (Mon-Sat)
    - [ ] Preferred time: 09:00-20:00 range
    - [ ] Vehicle info: optional, max 500 chars
    - [ ] Message: optional, max 1000 chars

  - [ ] Service request schema: `src/validations/serviceRequestForm.ts`
    - [ ] Name, phone: required
    - [ ] Service type: enum validation
    - [ ] Preferred time: enum ('morning', 'afternoon', 'evening')
    - [ ] Is urgent: boolean flag

- [ ] Create API Routes (1h)
  - [ ] Contact form endpoint: `src/app/api/contact/route.ts`
    - [ ] POST request handler
    - [ ] Validate with Zod schema
    - [ ] Insert to `contact_submissions` table
    - [ ] Send confirmation email via Resend
    - [ ] Return 200 on success, 400 on validation error, 429 on rate limit

  - [ ] Appointment endpoint: `src/app/api/appointments/route.ts`
    - [ ] POST request handler
    - [ ] Google Calendar integration (create event)
    - [ ] Store `google_calendar_event_id` in database
    - [ ] Send email with .ics attachment

  - [ ] Service request endpoint: `src/app/api/service-requests/route.ts`
    - [ ] POST request handler
    - [ ] Send notification to TEG team
    - [ ] Mark urgent requests with priority

**Acceptance Criteria:**
- [ ] POST /api/contact succeeds with valid data
- [ ] POST /api/appointments creates Google Calendar event
- [ ] POST /api/service-requests sends notifications
- [ ] All endpoints return proper error responses
- [ ] Validation blocks invalid submissions (400 errors)
- [ ] Rate limiting triggers 429 responses
- [ ] Email confirmations send to customer

**Files to Create:**
- `src/validations/contactForm.ts`
- `src/validations/appointmentForm.ts`
- `src/validations/serviceRequestForm.ts`
- `src/app/api/contact/route.ts`
- `src/app/api/appointments/route.ts`
- `src/app/api/service-requests/route.ts`

---

### P2.3: Email Templates & Confirmation Emails
**Status:** ⏳ PENDING
**Duration:** 1.5 hours
**Blocks:** Customer notifications
**Dependencies:** P1.3 (Resend setup)
**Assigned to:** text-writer coordinator

**Objective:** Create professional multi-language email templates for all form types

**Checklist:**
- [ ] ContactConfirmation Email Template (0.5h)
  - [ ] Create `src/emails/ContactConfirmation.tsx`
  - [ ] Accept `{ name, email, message, locale }` props
  - [ ] Design with Supabase theme (green accents, Outfit font)
  - [ ] Include: greeting, copy of message, TEG contact info
  - [ ] Subject line translations (lv/en/ru)
  - [ ] Footer with TEG branding
  - [ ] Test rendering: `pnpm email dev`

- [ ] AppointmentConfirmation Email Template (0.5h)
  - [ ] Create `src/emails/AppointmentConfirmation.tsx`
  - [ ] Accept `{ name, service_type, date, time, locale }` props
  - [ ] Include: appointment details, calendar invite (.ics)
  - [ ] Add cancellation/rescheduling instructions
  - [ ] Translate service types (pre-purchase → "Pirms pirkuma checks" in LV)
  - [ ] Professional, branded design
  - [ ] Subject line translations

- [ ] ServiceRequestConfirmation Email Template (0.5h)
  - [ ] Create `src/emails/ServiceRequestConfirmation.tsx`
  - [ ] Accept `{ name, service_type, preferred_time, is_urgent, locale }` props
  - [ ] Simple acknowledgment: "We received your request"
  - [ ] Include: service details, contact info, expected response time
  - [ ] Emphasize urgency if applicable
  - [ ] Subject line translations

**Acceptance Criteria:**
- [ ] All 3 templates render without errors
- [ ] Email preview looks professional in light and dark modes
- [ ] Translations present for lv/en/ru
- [ ] Calendar invite (.ics) attaches correctly to appointment email
- [ ] Responsive layout on mobile email clients
- [ ] Test send succeeds: Resend dashboard shows delivery

**Files to Create:**
- `src/emails/ContactConfirmation.tsx`
- `src/emails/AppointmentConfirmation.tsx`
- `src/emails/ServiceRequestConfirmation.tsx`

---

### P2.4: E2E Testing Implementation
**Status:** ⏳ PENDING
**Duration:** 2 hours
**Blocks:** Deployment
**Dependencies:** P2.2 (API routes complete)
**Assigned to:** parallel-bash-executor coordinator

**Objective:** Implement end-to-end tests for all form flows and email delivery

**Checklist:**
- [ ] Contact Form E2E Test (0.5h)
  - [ ] Write Playwright test: `tests/contact-form.spec.ts`
  - [ ] Navigate to `/en/contact` page
  - [ ] Fill form: name, email, phone, message
  - [ ] Submit form
  - [ ] Verify success toast appears
  - [ ] Check Supabase: entry saved to `contact_submissions`
  - [ ] Verify email delivered (Resend API check or mailbox simulation)

- [ ] Appointment Booking E2E Test (0.5h)
  - [ ] Write Playwright test: `tests/appointment-booking.spec.ts`
  - [ ] Navigate to `/lv/services` (or dedicated booking page)
  - [ ] Select service type, date, time
  - [ ] Fill form (name, email, phone)
  - [ ] Submit form
  - [ ] Verify booking confirmation email received
  - [ ] Check Google Calendar: event created with customer details

- [ ] Service Request E2E Test (0.5h)
  - [ ] Write Playwright test: `tests/service-request.spec.ts`
  - [ ] Fill quick callback form (name, phone, service, preferred time)
  - [ ] Test urgent flag
  - [ ] Submit and verify success message
  - [ ] Check email notifications sent

- [ ] Error Handling Tests (0.5h)
  - [ ] Test invalid email rejection (API returns 400)
  - [ ] Test rate limiting (API returns 429 after limit)
  - [ ] Test missing required fields (form validation prevents submit)
  - [ ] Test server errors (500 handling, Sentry logging)

**Acceptance Criteria:**
- [ ] All E2E tests pass: `pnpm playwright test` → PASS
- [ ] Contact form test validates form → API → database → email flow
- [ ] Appointment test validates Google Calendar integration
- [ ] Service request test validates team notifications
- [ ] Error cases handled gracefully
- [ ] Tests run in CI/CD pipeline (GitHub Actions)

**Test Files to Create:**
- `tests/contact-form.spec.ts`
- `tests/appointment-booking.spec.ts`
- `tests/service-request.spec.ts`
- `tests/error-handling.spec.ts`

---

### P2.5: Russian Translation Expansion
**Status:** ⏳ PENDING
**Duration:** 1 hour
**Blocks:** Full multi-language MVP
**Dependencies:** P1.1 (English translations complete)
**Assigned to:** text-writer coordinator

**Objective:** Expand Russian translation coverage to match Latvian/English versions

**Checklist:**
- [ ] Review Current Russian Coverage (0.2h)
  - [ ] Identify gaps in `src/locales/ru.json`
  - [ ] Current status: 2 pages only (homepage, our-work)
  - [ ] Missing: services, contact, about, forms, emails

- [ ] Complete Russian Translations (0.6h)
  - [ ] Translate all 147 keys in `src/locales/ru.json`
  - [ ] Match English/Latvian structure exactly
  - [ ] Use appropriate Russian terminology for automotive services
  - [ ] Service names (pre-purchase → "Предпродажная проверка")
  - [ ] Form labels and validation messages
  - [ ] Email templates

- [ ] Native Speaker Review (0.2h)
  - [ ] Schedule with native Russian speaker (if available)
  - [ ] Review tone, terminology, accuracy
  - [ ] Make requested corrections

**Acceptance Criteria:**
- [ ] All 147 keys translated to Russian
- [ ] Grammar and terminology correct
- [ ] Renders properly on all pages (no encoding issues)
- [ ] Email templates send in Russian when locale='ru'
- [ ] Quality minimum: 3.5+/5

**Files to Update:**
- `src/locales/ru.json`

---

### P2.6: Vercel Deployment Setup
**Status:** ⏳ PENDING
**Duration:** 1 hour
**Blocks:** Production access
**Dependencies:** P2.1 (Supabase ready)
**Assigned to:** web-dev-worker coordinator

**Objective:** Configure Vercel for production deployment with proper DNS and CI/CD

**Checklist:**
- [ ] Create Vercel Project (0.25h)
  - [ ] Log in to vercel.com
  - [ ] Import GitHub repo: `fivefingerdisco/TEG_001`
  - [ ] Set project name: "teg-website"
  - [ ] Framework: Next.js (auto-detected)
  - [ ] Build command: `pnpm build` (verified)
  - [ ] Output directory: `.next` (default)

- [ ] Environment Variables Setup (0.25h)
  - [ ] Add all production environment variables to Vercel dashboard:
    - Supabase (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY)
    - Resend (RESEND_API_KEY, RESEND_FROM_EMAIL)
    - Google Calendar (GOOGLE_CALENDAR_API_KEY, GOOGLE_CALENDAR_ID)
    - Sentry (SENTRY_DSN, SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT)
    - Arcjet (ARCJET_KEY)
    - PostHog (NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST)
  - [ ] Use `.env.example` as reference

- [ ] Domain Configuration (0.25h)
  - [ ] Add custom domain: teg.lv
  - [ ] Configure nameservers (Vercel will provide)
  - [ ] Update domain registrar DNS to point to Vercel
  - [ ] Wait for DNS propagation (5-30 minutes)
  - [ ] Verify HTTPS certificate auto-generated by Let's Encrypt

- [ ] Test Deployment (0.25h)
  - [ ] Trigger manual deployment via Vercel dashboard
  - [ ] Verify deployment succeeds (build logs show "✓ Success")
  - [ ] Check production URL (https://teg.lv) loads homepage
  - [ ] Test all 3 locales work: /lv/, /en/, /ru/
  - [ ] Test contact form submission works on production
  - [ ] Verify email delivers from production
  - [ ] Check Sentry receives errors from production

**Acceptance Criteria:**
- [ ] Vercel project created and linked to GitHub
- [ ] All environment variables configured
- [ ] Domain teg.lv resolves to Vercel infrastructure
- [ ] HTTPS certificate active
- [ ] Production deployment successful and tested
- [ ] GitHub Actions CI/CD pipeline runs on push

**Verification Checklist:**
- [ ] Navigate to https://teg.lv → See homepage
- [ ] /lv/, /en/, /ru/ routes accessible
- [ ] Contact form submits successfully
- [ ] Confirmation email arrives
- [ ] Sentry dashboard shows no critical errors
- [ ] Core Web Vitals measured (baseline for post-MVP optimization)

---

## Priority 3: Post-MVP (Deferred - 12 hours)

### P3.1: Instagram Feed Integration
**Status:** ⏳ DEFERRED
**Duration:** 2 hours
**Blocks:** None (social proof enhancement)
**Dependencies:** P2.6 (deployment)
**Assigned to:** web-dev-worker coordinator

**Objective:** Display live Instagram feed on homepage and contact page

**Checklist:**
- [ ] Instagram API Setup (0.5h)
  - [ ] Create Instagram Business Account (if not exists)
  - [ ] Generate Access Token via Meta developers
  - [ ] Test API call to fetch recent posts

- [ ] Server-Side Feed Fetching (0.5h)
  - [ ] Create `src/lib/instagram/client.ts`
  - [ ] Implement ISR (Incremental Static Regeneration) - revalidate every 6 hours
  - [ ] Cache responses for performance
  - [ ] Handle API rate limits gracefully

- [ ] Feed Display Component (1h)
  - [ ] Create `src/components/InstagramFeed.tsx`
  - [ ] 2-column grid layout (mobile), 4-column (desktop)
  - [ ] Click to expand image modal (lightbox)
  - [ ] Links to Instagram profile

**Acceptance Criteria:**
- [ ] Homepage shows latest 8 Instagram posts
- [ ] Contact page shows latest 6 Instagram posts
- [ ] Images load from Instagram CDN
- [ ] Lightbox modal opens on click
- [ ] Revalidates every 6 hours automatically

---

### P3.2: Admin Dashboard
**Status:** ⏳ DEFERRED
**Duration:** 8 hours
**Blocks:** None (team productivity)
**Dependencies:** P2.1 (database)
**Assigned to:** web-dev-worker coordinator

**Objective:** Create authenticated admin interface for managing form submissions and appointments

**Features:**
- [ ] Admin authentication (Supabase Auth or Clerk)
- [ ] Dashboard home: Recent submissions, pending appointments, stats
- [ ] Contact submissions viewer: Filter by status, search by email
- [ ] Appointment management: View, reschedule, cancel, send reminders
- [ ] Service requests tracker: Urgent flag highlighting
- [ ] Export reports (CSV)
- [ ] Settings page: Update business hours, manage team members

---

### P3.3: Customer Portal
**Status:** ⏳ DEFERRED
**Duration:** 6 hours
**Blocks:** None (customer convenience)
**Dependencies:** P3.2 (auth system)
**Assigned to:** web-dev-worker coordinator

**Objective:** Allow customers to view and manage their appointments

**Features:**
- [ ] Customer login/registration
- [ ] View appointment history
- [ ] Reschedule appointments
- [ ] Cancel with reason
- [ ] Download inspection reports
- [ ] Email preferences

---

## Risk Assessment

| Risk | Impact | Mitigation | Status |
|------|--------|-----------|--------|
| English translation incomplete | CRITICAL | P1.1 assigned, 2h estimate | ⚠️ High |
| External service setup (Supabase, Resend, Google) | HIGH | P1.3 manual checklist, clear steps | ⏳ Pending |
| Google Calendar API integration | MEDIUM | Tested pre-deployment, fallback: manual confirmation | ⏳ Pending |
| Email delivery reliability | MEDIUM | Resend SLA 99.5%, test sends before deployment | ⏳ Pending |
| Database schema correctness | MEDIUM | Schema review, type-safe operations, backups | ⏳ Pending |

---

## Task Dependencies Graph

```
P1.1 (English translations)
  ↓ BLOCKS
P2.6 (Vercel deployment)

P1.3 (Service setup)
  ├─ ENABLES P2.1 (Database)
  │   ├─ ENABLES P2.2 (API routes)
  │   │   ├─ ENABLES P2.3 (Email)
  │   │   └─ ENABLES P2.4 (E2E tests)
  │   └─ ENABLES P3.2 (Admin dashboard)
  │
  └─ ENABLES P2.3 (Email templates)
      └─ ENABLES P2.4 (E2E tests)

P1.4 (Unit tests)
  └─ BLOCKS P2.6 (Deployment)

P2.6 (Vercel deployment) - FINAL GATE
  ├─ REQUIRES P1.1 ✓
  ├─ REQUIRES P1.3 ✓
  ├─ REQUIRES P1.4 ✓
  ├─ REQUIRES P2.2 ✓
  ├─ REQUIRES P2.3 ✓
  └─ REQUIRES P2.4 ✓
```

---

## Files Not Yet Created/Modified

**Critical Path Files:**
- `src/locales/en.json` - UPDATE (all 147 keys)
- `src/locales/ru.json` - UPDATE (expand)
- `public/og-image.jpg` - CREATE
- `src/lib/supabase/client.ts` - CREATE
- `src/lib/supabase/server.ts` - CREATE
- `src/validations/contactForm.ts` - CREATE
- `src/validations/appointmentForm.ts` - CREATE
- `src/validations/serviceRequestForm.ts` - CREATE
- `src/app/api/contact/route.ts` - CREATE
- `src/app/api/appointments/route.ts` - CREATE
- `src/app/api/service-requests/route.ts` - CREATE
- `src/emails/ContactConfirmation.tsx` - CREATE
- `src/emails/AppointmentConfirmation.tsx` - CREATE
- `src/emails/ServiceRequestConfirmation.tsx` - CREATE
- `tests/contact-form.spec.ts` - CREATE
- `tests/appointment-booking.spec.ts` - CREATE
- `tests/service-request.spec.ts` - CREATE
- `tests/error-handling.spec.ts` - CREATE

**Configuration Files:**
- `.env` - UPDATE (service credentials)
- `src/lib/Env.ts` - VERIFY (already done ✅)

---

## Execution Strategy

### Phase 1: Unblock Deployment (4 hours)
1. **Parallel execution (2h):**
   - P1.1: Complete English translations (text-writer)
   - P1.3: Service setup & verification (implementer)
   - P1.4: Fix unit tests (parallel-bash-executor)

2. **Sequential (2h):**
   - P1.2: Create visual assets (web-dev-worker)

### Phase 2: MVP Completion (4 hours)
3. **Parallel execution (2h):**
   - P2.1: Database & Supabase (web-dev-worker)
   - P2.5: Russian translations (text-writer)

4. **Sequential (2h):**
   - P2.2: Form validation & API routes (web-dev-worker)
   - P2.3: Email templates (text-writer)
   - P2.4: E2E testing (parallel-bash-executor)
   - P2.6: Vercel deployment (web-dev-worker)

### Phase 3: Verification (2 hours)
5. **Smoke testing:**
   - Navigate all pages in 3 languages
   - Submit all 3 form types
   - Verify emails arrive
   - Check Google Calendar events
   - Verify Sentry error tracking

---

## Definition of Done - MVP Deployment

**All tasks complete when:**
- [ ] All 39 remaining task groups marked DONE
- [ ] All 4 Priority 1 items complete and blocking issues resolved
- [ ] All 6 Priority 2 items complete
- [ ] `pnpm build` succeeds with no errors
- [ ] `pnpm test` passes (90%+ validation coverage)
- [ ] `pnpm playwright test` passes (all E2E tests)
- [ ] Vercel deployment: https://teg.lv loads and functions correctly
- [ ] All 3 locales (lv/en/ru) accessible and functional
- [ ] Contact form → Email → Database working end-to-end
- [ ] Appointment booking → Google Calendar → Email working
- [ ] Service request → Email notification → Database working
- [ ] No critical errors in Sentry from production
- [ ] Core Web Vitals baseline established
- [ ] Domain teg.lv resolves to Vercel with HTTPS

---

## Monitoring & Escalation

**Daily standup checklist:**
- [ ] P1.1 progress: English translations % complete
- [ ] P1.3 progress: Services configured and tested
- [ ] P1.4 progress: Unit tests passing
- [ ] Any blockers or dependencies delayed?
- [ ] Estimated time to MVP completion

**Escalation triggers:**
- English translations incomplete by deadline → Engage professional translator
- Supabase issues → Contact Supabase support
- Email delivery failures → Test with Resend support
- Google Calendar API rate limits → Implement caching
- Deployment issues → Check Vercel status page

---

**Last Updated:** 2025-11-08 13:58
**Next Review:** 2025-11-09 (daily standup)
**Estimated MVP Completion:** 2025-11-10 (2 days remaining at current pace)
