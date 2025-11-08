# TEG Website

Official website for TEG (Transporta Ekspertu Grupa) - Automotive inspection and services company in Latvia.

## Project Overview

**TEG** (Transport Experts Group) is an independent group of automotive professionals serving customers across Europe. This website provides information about our services, allows customers to book appointments, and request vehicle inspections.

**Website:** https://www.teg.lv

## Technology Stack

- **Framework:** Next.js 16+ with App Router
- **Language:** TypeScript 5.9+ (strict mode)
- **Styling:** TailwindCSS 4+
- **Design System:** shadcn/ui with Supabase theme (via tweakcn)
- **Internationalization:** next-intl (Latvian, English, Russian)
- **Database:** Supabase (PostgreSQL) - Direct client, no ORM for MVP
- **Email:** Resend with React Email templates
- **Authentication:** Not required for MVP (public website only)
- **Calendar Integration:** Google Calendar API
- **Security:** Arcjet (rate limiting, bot detection)
- **Analytics:** PostHog (GDPR compliant)
- **Error Monitoring:** Sentry
- **Testing:** Vitest + Playwright
- **Deployment:** Vercel

## Design System

TEG uses shadcn/ui components with the Supabase theme for modern, professional aesthetics.

### Installation

Install the Supabase theme:
```bash
pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/supabase.json
```

### Typography
- **Font:** Outfit (sans-serif)
- **Letter Spacing:** tracking-normal (0.025em)
- **Scale:** sm to 4xl for clear hierarchy

### Components
Core UI components from shadcn/ui:
- Forms: button, input, textarea, form, label, select
- Navigation: navigation-menu, sheet, dropdown-menu
- Content: card, dialog, separator, badge
- Feedback: toast, alert, alert-dialog

### Dark Mode
- next-themes integration
- System preference detection
- Persistent theme selection via cookies

See `docs/supabase-theme.md` for complete color palette and configuration.

## Core Services

1. **Pre-Purchase Car Inspection** (from €100)
   - Engine diagnostics, VIN history, body/paint inspection
   - Coverage: All of Europe
   - Detailed photo reports

2. **Car Search & Delivery** (from €350)
   - Vehicle sourcing, inspection, delivery
   - Documentation assistance

3. **Mobile Roadside Service** (from €30)
   - Error diagnostics, battery testing, jump starts
   - ECU programming, lock/window repair

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url> teg-website
cd teg-website

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend (Email Service)
RESEND_API_KEY=your_resend_key

# Google Calendar API
GOOGLE_CALENDAR_CLIENT_ID=your_client_id
GOOGLE_CALENDAR_CLIENT_SECRET=your_client_secret
GOOGLE_CALENDAR_REFRESH_TOKEN=your_refresh_token

# Arcjet (Security)
ARCJET_KEY=your_arcjet_key

# PostHog (Analytics)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host

# Sentry (Error Tracking)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORGANIZATION=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_auth_token
```

See `docs/architecture/07-environment-variables.md` for complete environment variable documentation.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # i18n routing (lv, en, ru)
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── appointments/      # Booking system
│   └── api/                   # API routes
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── forms/                 # Form components
│   └── features/              # Feature-specific components
├── lib/
│   ├── sanity/                # CMS integration
│   ├── supabase/              # Database client
│   └── validations/           # Form schemas (Zod)
└── middleware.ts              # i18n & auth
```

## Database Architecture

### Supabase PostgreSQL

TEG uses Supabase with direct client access (no ORM for MVP simplicity).

#### Tables

**1. appointments**
- Customer name, email, phone, service type, vehicle info
- Requested date/time, message, locale
- Status tracking, Google Calendar event ID
- Triggers: Auto-update `updated_at` timestamp

**2. contact_submissions**
- Name, email, phone, subject, message
- Locale, status, creation timestamp
- Indexes on status, email, created_at for queries

**3. service_requests**
- Name, phone, service type, preferred time (morning/afternoon/evening)
- Urgent flag, locale, status
- Indexes on urgent + created_at for priority sorting

#### Row Level Security

For MVP:
- **Public INSERT only** - Forms can submit data
- **Admin read/update** - Deferred to post-MVP with authentication

#### TypeScript Types

Manual types defined in `src/types/database.types.ts` for type safety without ORM overhead.

**Sample Type Definition:**
```typescript
export interface Appointment {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  service_type: 'inspection' | 'search' | 'mobile';
  vehicle_info?: string;
  requested_date: string;
  message?: string;
  locale: 'lv' | 'en' | 'ru';
  status: 'pending' | 'confirmed' | 'completed';
  google_calendar_event_id?: string;
  created_at: string;
  updated_at: string;
}
```

See `docs/architecture/04-database-schema.md` for complete schema with constraints and indexes.

## Multi-Language Support

The website supports three languages:
- **Latvian (lv)** - Primary language (Quality: 4.8/5 ✅ Complete)
- **English (en)** - Secondary language (Quality: 2/5 ⚠️ MUST UPGRADE to 4+/5)
- **Russian (ru)** - Tertiary language (Quality: 3/5 - Basic coverage)

URL structure uses locale-based routing: `/lv/`, `/en/`, `/ru/`

Translation files located in `src/locales/` with support for multi-language email templates and form confirmations.

## Documentation

- **Architecture:** See `docs/architecture/` for complete architecture documentation
- **Research:** See `obsidian_notes/Projects/TEG/research/` for research findings
- **Development Guidelines:** See `CLAUDE.md` for development directives
- **Spec-Driven Development:** See `agent-os/specs/` for feature specifications and planning

## Agent-OS Development Workflow

TEG follows a spec-driven development process for complex features using a three-tier coordination model.

### Workflow Stages

**1. Specification Phase**
- Create spec folder: `agent-os/specs/{YYYY-MM-DD-feature-name}/`
- Document requirements in `planning/requirements.md`
- Write detailed spec in `spec.md`

**2. Task Planning**
- Generate task list in `planning/tasks.md`
- Dependency-ordered implementation steps
- Verification criteria for each task

**3. Implementation**
- Execute tasks from tasks.md
- Track progress in `implementation/progress.md`
- Document results in `implementation/results.md`

**4. Verification**
- End-to-end feature testing
- Verification report in `implementation/verification.md`

### Directory Structure
```
agent-os/specs/{YYYY-MM-DD-feature-name}/
├── spec.md                    # Detailed specification
├── planning/
│   ├── requirements.md        # Gathered requirements
│   ├── tasks.md               # Implementation tasks
│   └── visuals/               # Design mockups, diagrams
└── implementation/
    ├── progress.md            # Tracking
    └── results.md             # Completion summary
```

For simple bug fixes and small changes, use direct implementation without spec creation.

## Email System

TEG uses Resend with React Email for multi-language transactional emails.

### Email Templates
All templates located in `src/emails/`:
- `ContactConfirmation.tsx` - Contact form acknowledgment
- `AppointmentConfirmation.tsx` - Booking confirmation with calendar link
- `ServiceRequestConfirmation.tsx` - Quick callback acknowledgment
- `TeamNotification.tsx` - Internal notifications

### Multi-Language Support
Templates render in user's selected language (lv/en/ru) based on form locale.

### Free Tier Limits
- 3,000 emails/month (sufficient for MVP)
- Upgrade to Pro ($20+) if limits exceeded

## Security

### Arcjet Protection
- **Rate Limiting:** 1M requests/month free
  - Contact form: 5 submissions/minute per IP
  - Appointments: 3 bookings/hour per IP
  - Service requests: 5 requests/hour per IP
- **Bot Detection:** Block scrapers and automated traffic
- **DDoS Prevention:** Edge-level protection

### Form Validation
Three-layer validation:
1. **Client-side:** react-hook-form + Zod (UX)
2. **Server-side:** Zod re-validation (security)
3. **Database:** CHECK constraints (integrity)

### Environment Protection
- Public variables: `NEXT_PUBLIC_*` (visible in browser)
- Private variables: Server-only access
- T3 Env validation: Type-safe, fail-fast on missing config

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Techniques
- Next.js Image optimization for all images
- Code splitting with dynamic imports
- Font optimization (next/font with Outfit)
- Server Components for static content
- Edge Functions for API routes

Performance baseline established AFTER initial deployment.

## Key Features

- Multi-language support (i18n)
- Responsive design
- SEO optimization
- Form handling with validation
- Appointment booking system
- Email notifications
- Google Calendar integration
- Error monitoring with Sentry
- Analytics integration

## Development Guidelines

### Code Quality
- **TypeScript:** Strict mode enforced - all implicit `any` types must be resolved
- **ESLint:** Next.js + Tailwind + Antfu preset
- **Prettier:** Auto-format on save (2-space, single quotes)
- **Git Hooks:** Lefthook runs linting and tests before commit/push

### Testing
- **Unit/Integration:** Vitest (`npm run test`)
- **E2E:** Playwright (`npm run test:e2e`)
- **Coverage Targets:**
  - Validation functions: 90%+
  - API routes: 80%+
  - Utility functions: 95%+
  - Components: 60%+

### Commit Messages
Follow conventional commits format:
```
feat: Add appointment booking form
fix: Correct email template rendering
docs: Update API documentation
refactor: Simplify form validation
```

### Multi-Language Testing
Test all forms in lv/en/ru:
- Form validation messages
- Email confirmations
- Error states and success responses

### Accessibility
- Follow WCAG 2.1 AA compliance
- Proper semantic HTML
- ARIA labels for dynamic content
- Keyboard navigation support

### Best Practices
- Follow Next.js App Router conventions
- Use Server Components where possible
- Implement proper error handling (try/catch, error boundaries)
- Keep components focused and reusable

## License

Proprietary - All rights reserved by TEG (Transporta Ekspertu Grupa)

## Contact

**TEG (Transporta Ekspertu Grupa)**
- Phone: +371 25 201 710
- Hours: Mon-Sat, 9:00 AM - 8:00 PM
- Website: https://www.teg.lv
- Instagram: @teg.auto
- TikTok: @teg.auto
- Facebook: Transportaekspertugrupa
