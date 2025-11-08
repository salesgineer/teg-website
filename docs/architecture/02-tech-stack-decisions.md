# Technology Stack Decisions

## Boilerplate Analysis

**Source:** ixartz/Next-js-Boilerplate (Next.js starter template)

**Total Modules Analyzed:** 47

**Decision Breakdown:**
- **Keep:** 18 modules (38%)
- **Remove:** 15 modules (32%)
- **Configure:** 9 modules (19%)
- **Defer:** 5 modules (11%)

This strategic approach ensures we start with proven patterns while removing unnecessary complexity.

---

## Core Framework Stack (KEEP)

### Next.js 16 with App Router

**Decision:** KEEP

**Version:** 16.0+

**Rationale:**
- Latest stable version with all modern features
- App Router is production-ready and recommended
- Built by Vercel, actively maintained
- Best-in-class TypeScript support
- Seamless deployment to Vercel

**Key Features Used:**
- Server-side rendering (SSR) for dynamic pages
- Static generation (ISR) for performance
- API routes for form handling
- Middleware for authentication/i18n
- Edge Functions (optional, for rate limiting)

**Migration Notes:**
- Replaces deprecated Frontity framework
- No business logic to port - clean architecture opportunity

---

### React 19

**Decision:** KEEP

**Version:** 19.x

**Rationale:**
- Latest React version with latest features
- Server Components support (more efficient)
- Hooks-based architecture
- Excellent TypeScript integration
- Large ecosystem of compatible libraries

**Usage Pattern:**
- Server Components for static/dynamic pages
- Client Components for interactive forms
- Hooks for state management (useState, useEffect)
- Context API for theme/language (via next-intl)

---

### TypeScript 5.9+ (Strict Mode)

**Decision:** KEEP

**Version:** 5.9+

**Configuration:** Strict mode enabled

**Rationale:**
- Type safety prevents runtime errors
- Better IDE support and autocomplete
- Easier refactoring and maintenance
- Clear documentation through types
- Modern TypeScript with latest features

**Enforcement:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true
  }
}
```

---

### TailwindCSS 4

**Decision:** KEEP

**Version:** 4.x

**Rationale:**
- Rapid UI development without writing CSS
- Consistent design tokens (spacing, colors, typography)
- Small production bundle size
- Dark mode support built-in
- Excellent responsive design utilities

**Customization:**
- TEG brand colors (primary, secondary, accent)
- Custom font: Inter (for body), Sora (for headers)
- Responsive breakpoints: sm, md, lg, xl, 2xl
- Custom components: buttons, cards, forms

**File Structure:**
```
globals.css          # Tailwind directives
theme.config.ts      # Color, font, spacing customization
components/          # Reusable component library
```

---

## Design System

### shadcn/ui Theme: Supabase (tweakcn)

**Decision:** CONFIRMED (Final Choice)

**Theme Package:** Supabase (via tweakcn - community theme repository)

**Installation:**
```bash
pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/supabase.json
```

**Theme Characteristics:**
- Modern, clean aesthetic aligned with contemporary SaaS products
- Professional color palette optimized for technical interfaces
- Excellent contrast and accessibility (WCAG 2.1 AA compliant)
- Well-suited for automotive services platform

**Typography Configuration:**
- **Font Family:** Outfit (sans-serif)
- **Letter Spacing:** tracking-normal (default)
- **Font Sizes:** Scale from sm to 4xl for clear hierarchy
- **Line Height:** Consistent throughout for readability

**Color Palette:**
See [spec.md](../spec.md) for complete color scheme documentation including:
- Primary brand colors
- Secondary accents
- Semantic colors (success, warning, error, info)
- Neutral grays for backgrounds and borders

**Component Library:**
- Built on shadcn/ui (Radix UI + Tailwind CSS)
- Unstyled by default, fully customizable
- Supabase theme provides pre-configured styles
- All components accessible out-of-the-box

**Rationale:**
- Resolves conflict between CLAUDE.md (Northern Lights) and confirmed spec (Supabase)
- Supabase theme provides professional, modern design
- tweakcn community theme ensures quality and maintainability
- Perfect visual fit for automotive inspection/services business
- Reduces design-to-code time with pre-built component styles

---

## Multi-Language Support

### next-intl

**Decision:** KEEP + CONFIGURE

**Version:** Latest

**Purpose:** Manage Latvian, English, Russian translations

**Rationale:**
- Purpose-built for Next.js App Router
- File-based translation system (JSON files)
- Middleware integration for locale detection
- Type-safe translations with TypeScript
- Excellent developer experience

**Implementation:**
```
messages/
├── lv.json          # Latvian (complete)
├── en.json          # English (40% complete, needs work)
└── ru.json          # Russian (limited coverage)
```

**Middleware Flow:**
```
User visits / → Middleware detects locale → Redirect to /lv/
User clicks language switcher → URL changes to /en/ or /ru/
next-intl provides translations from JSON files
```

**URL Structure:**
```
https://teg.lv/lv/              # Latvian (default)
https://teg.lv/lv/services/     # Nested routes
https://teg.lv/en/              # English
https://teg.lv/ru/              # Russian
```

---

### i18n-check

**Decision:** KEEP + CONFIGURE

**Version:** Latest

**Purpose:** Validate translation completeness and consistency

**Rationale:**
- Catch missing translations before deployment
- Ensure all languages have parity
- CI/CD integration prevents incomplete translations going live
- Early warning for translation gaps

**CI/CD Integration:**
```bash
# Runs in GitHub Actions before deployment
npm run i18n:check    # Fails if English/Russian incomplete
```

---

### Crowdin Integration

**Decision:** REMOVE

**Rationale:**
- Translations already exist and available
- Small team (1-2 developers)
- Not cost-effective for MVP
- Can add post-MVP if team grows or customer base expands
- Manual translation management sufficient for 3 languages

**Migration Path:**
- Maintain translations in Git
- Manual updates as needed
- Add Crowdin post-MVP if scalability needed

---

## Forms & Validation

### react-hook-form

**Decision:** KEEP

**Version:** Latest (7.x)

**Purpose:** Efficient form state management

**Rationale:**
- Minimal re-renders (performance optimized)
- Excellent TypeScript support
- Small bundle size (~9KB)
- Integrates seamlessly with Zod
- Great developer experience

**Usage:**
```typescript
const form = useForm<ContactFormData>({
  resolver: zodResolver(contactFormSchema),
  defaultValues: { name: '', email: '', message: '' }
});
```

---

### Zod

**Decision:** KEEP

**Version:** Latest (3.x)

**Purpose:** Type-safe form validation and runtime schema validation

**Rationale:**
- Schema as code (no separate validation files)
- TypeScript inference from schemas
- Both client and server validation
- Clear error messages
- Perfect for API request validation

**Usage Pattern:**
```typescript
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000)
});

type ContactForm = z.infer<typeof schema>;
```

**Validation Layers:**
1. Client-side (React Hook Form + Zod)
2. Server-side (Zod + API route)
3. Database constraints (PostgreSQL)

---

## Database & Backend

### Supabase PostgreSQL

**Decision:** CHANGE (from Prisma/DrizzleORM)

**Instance Type:** Free tier for MVP

**Rationale:**
- PostgreSQL is industry standard
- Generous free tier (500MB storage, 50K rows)
- Row Level Security built-in (future admin panel)
- Real-time capabilities (future features)
- Excellent admin UI (Supabase Studio)
- Direct client connection (no ORM needed for MVP)

**Why Direct Client (No ORM)?**
- Only 3 simple tables (appointments, contact_submissions, service_requests)
- No complex relationships requiring ORM
- Manual TypeScript types sufficient
- Supabase client is lightweight (~50KB)
- Saves setup time (ORM takes 4+ hours)
- Can add Prisma post-MVP if complexity grows

**Tables Created:**
1. `appointments` - Booking system
2. `contact_submissions` - Contact form submissions
3. `service_requests` - Quick callback requests

**Row Level Security (RLS):**
```sql
-- Public can submit forms
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit" ON appointments
  FOR INSERT WITH CHECK (true);

-- Future: Admin can read/update (deferred to post-MVP)
```

**Free Tier Limits:**
- 500 MB database space
- 50,000 rows
- Sufficient for MVP and scaling beyond

---

### Removed: Clerk Authentication

**Decision:** REMOVE

**Rationale:**
- No user authentication needed for MVP
- Public website only (no customer accounts)
- No subscription tiers or access control
- Reduces complexity by 8+ hours of work
- Can add Supabase Auth post-MVP if customer portal needed

**When to Add Auth Post-MVP:**
- Customer appointment history feature
- Admin dashboard for viewing submissions
- Personalized recommendations
- Estimated effort: 8 hours

---

### Removed: DrizzleORM

**Decision:** REMOVE

**Rationale:**
- Only 3 simple tables - direct queries sufficient
- Eliminates 4+ hours of ORM setup and learning
- Manual TypeScript types easy to maintain
- Supabase client provides safety
- Can add Prisma post-MVP if needs grow

**Migration Path to Prisma:**
- If adding 10+ tables
- If complex relationships needed
- If team prefers ORM pattern
- Estimated migration: 8 hours

---

### Removed: PGlite

**Decision:** REMOVE

**Rationale:**
- Supabase handles dev and production
- No need for local SQLite replica
- Development database queries can hit dev Supabase instance
- Simpler setup, fewer tools
- Can use Supabase local emulator post-MVP if offline dev needed

---

## Email Service

### Resend

**Decision:** ADD (new)

**Version:** Latest

**Purpose:** Transactional email for form confirmations and notifications

**Rationale:**
- Modern API with excellent DX
- React Email templates (type-safe, component-based)
- 3,000 emails/month free tier (sufficient for MVP)
- Built by Vercel team (Next.js optimized)
- GDPR compliant
- Reliable delivery (99.9% uptime)

**Email Templates:**
1. Contact form confirmation (multi-language)
2. Appointment booking confirmation
3. Service request acknowledgment

**Integration:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'info@teg.lv',
  to: customer_email,
  subject: subject_in_user_language,
  react: <EmailTemplate {...data} locale={locale} />,
});
```

**Free Tier Limits:**
- 3,000 emails/month
- Sufficient for MVP launch and early scaling
- Upgrade to Pro ($20+) when limits reached

---

### Removed: SendGrid

**Decision:** Did not select (Resend preferred)

**Rationale:**
- Resend has better React integration
- React Email templates are type-safe
- Better DX for Next.js developers
- Same free tier value
- Modern API vs legacy SendGrid

---

## Calendar Integration

### Google Calendar API

**Decision:** ADD (new)

**Purpose:** Sync appointment bookings with calendar, check availability

**Rationale:**
- Industry standard calendar API
- Instant appointment confirmation
- Team can see bookings in Google Calendar
- Free to use
- Prevents double-booking
- Professional workflow integration

**Implementation:**
1. OAuth 2.0 flow for authentication
2. Check calendar availability
3. Create event on booking confirmation
4. Send confirmation email with calendar link

**Setup Steps:**
1. Create Google Cloud project
2. Enable Google Calendar API
3. Create OAuth credentials
4. Store refresh token securely in env variables
5. Use credentials to create events programmatically

**User Flow:**
```
User fills appointment form →
  ↓
Check Google Calendar availability →
  ↓
Create event on calendar →
  ↓
Send confirmation email with calendar link →
  ↓
User sees appointment in their sent email
```

---

## Monitoring & Error Tracking

### Sentry

**Decision:** KEEP

**Version:** Latest

**Purpose:** Production error tracking and monitoring

**Rationale:**
- Captures all errors with full context
- Free tier: 5,000 errors/month
- Session replay (understand what user was doing)
- Alerts on critical errors
- Source maps for debugging
- GDPR compliant

**Configuration:**
```typescript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

**Free Tier:**
- 5,000 errors/month
- Sufficient for MVP (expect <100 errors/month)
- Simple pricing: $29/month to expand

---

### PostHog (Analytics)

**Decision:** KEEP

**Version:** Latest

**Purpose:** Product analytics, user behavior tracking, session replay

**Rationale:**
- 1M events/month free (vs GA4 limited)
- Session replay (see exactly what users do)
- Feature flags (A/B testing ready)
- GDPR compliant (important for EU/Latvia)
- Better privacy story than Google Analytics
- Heatmaps and conversion funnels

**Comparison: PostHog vs Google Analytics**

| Feature | PostHog | GA4 |
|---------|---------|-----|
| Events/month free | 1,000,000 | Limited |
| Session replay | Yes | No |
| Feature flags | Yes | No |
| GDPR friendly | Yes | Limited |
| API access | Yes | Limited |
| Cost | Free/generous | Freemium |

**Configuration:**
```typescript
import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});
```

**Metrics to Track:**
- Page views
- Form submissions
- Language selection
- Service page engagement
- Conversion funnel (view → contact → follow-up)

---

### Removed: Sentry Spotlight

**Decision:** REMOVE

**Rationale:**
- Local development debugging only
- Not essential for MVP
- Console logging and browser DevTools sufficient
- Can add post-MVP for advanced debugging

---

## Security & Rate Limiting

### Arcjet

**Decision:** KEEP

**Version:** Latest

**Purpose:** Rate limiting, bot protection, DDoS prevention

**Rationale:**
- 1M requests/month free tier
- Protects forms from spam and abuse
- Bot detection (scrapers, malicious traffic)
- Simple Next.js integration
- No credit card required for free tier
- GDPR compliant

**Protection Rules:**
```typescript
import arcjet, { createMiddleware } from '@arcjet/next';

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Rate limit: 10 requests per 10 seconds per IP
    rateLimit({ max: 10, window: '10s', mode: 'LIVE' }),

    // Detect bots: block known bad bots
    detectBot({ mode: 'LIVE' }),
  ],
});

// Apply to /api/forms/* routes
export default createMiddleware(aj);
```

**Form Protection:**
- Contact form: 5 submissions per minute per IP
- Appointment booking: 3 bookings per hour per IP
- Service request: 5 requests per hour per IP

**Free Tier:**
- 1,000,000 requests/month
- Sufficient for MVP and early scaling
- Simple upgrade when needed

---

## Code Quality & Development

### ESLint

**Decision:** KEEP

**Configuration:** Next.js + Tailwind CSS + Antfu preset

**Purpose:** Catch code errors and enforce style conventions

**Rules:**
- No unused variables
- No console.log in production
- TypeScript strict rules
- React best practices
- Tailwind CSS class ordering

---

### Prettier

**Decision:** KEEP

**Purpose:** Code formatting (consistent indentation, quotes, line length)

**Rationale:**
- Team consistency (no style debates)
- Automatic formatting on save
- Reduces diff noise (easier code review)
- Configuration: 2-space indentation, single quotes, 80 char line length

---

### Lefthook

**Decision:** KEEP

**Purpose:** Git hooks for enforcing quality before commits

**Rationale:**
- Run tests before commit
- Run linting before commit
- Prevent broken code reaching repository
- Faster than CI/CD feedback loop

**Hooks Configured:**
- `pre-commit`: ESLint, Prettier, TypeScript check
- `pre-push`: Run test suite

---

### Lint-staged

**Decision:** KEEP

**Purpose:** Run linters only on staged files

**Rationale:**
- Faster than linting entire codebase
- Reduce commit friction
- Ensure only clean code is committed

---

### Commitlint

**Decision:** KEEP

**Purpose:** Enforce conventional commit messages

**Format:**
```
feat: Add appointment booking form
fix: Correct email template rendering
docs: Update API documentation
refactor: Simplify form validation
```

---

### Knip

**Decision:** KEEP

**Purpose:** Detect unused dependencies and exports

**Rationale:**
- Keep package.json clean
- Identify dead code early
- Reduce bundle size by removing unused packages

---

## Testing Framework

### Vitest

**Decision:** KEEP

**Version:** Latest

**Purpose:** Unit and integration testing

**Rationale:**
- Built for Vite (fast)
- Jest-compatible API (easy migration)
- TypeScript support out of box
- Extremely fast test execution
- Great for testing hooks, utilities, components

**Test Coverage Targets:**
- Validation functions: 90%+ coverage
- API routes: 80%+ coverage
- Utility functions: 95%+ coverage
- Components: 60%+ coverage

**Example:**
```typescript
import { describe, expect, it } from 'vitest';
import { validateEmail } from '@/lib/validations';

describe('validateEmail', () => {
  it('should validate correct email', () => {
    expect(validateEmail('test@teg.lv')).toBe(true);
  });

  it('should reject invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
  });
});
```

---

### Playwright

**Decision:** KEEP

**Version:** Latest

**Purpose:** End-to-end testing (entire user workflows)

**Rationale:**
- Test complete user journeys
- Cross-browser testing (Chrome, Firefox, Safari)
- Excellent debugging tools
- Screenshots and video recording on failures

**Test Scenarios:**
1. User fills contact form → receives email
2. User books appointment → calendar event created
3. User switches language → content updates
4. Form validation → errors display correctly
5. Mobile responsiveness → layout adjusts

---

### Removed: Storybook

**Decision:** REMOVE

**Rationale:**
- Small team, not building component library
- Marketing site, not design system
- Vitest + Playwright sufficient for component testing
- Saves 4-6 hours setup/maintenance
- Can add post-MVP if component library grows

**When to Add Storybook Post-MVP:**
- If building design system
- If team expands and needs component documentation
- If multiple teams need shared components

---

### Removed: Codecov

**Decision:** REMOVE

**Rationale:**
- Vitest built-in coverage reports sufficient
- MVP doesn't need external coverage tracking
- Can add post-MVP if coverage becomes critical
- Reduces external dependencies

---

## SEO & Content

### SEO Metadata

**Decision:** KEEP + CONFIGURE

**Implementation:**
- Static metadata for marketing pages
- Dynamic metadata for service pages
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

**Structure:**
```typescript
export const metadata = {
  title: 'Pre-Purchase Car Inspection | TEG',
  description: 'Professional car inspection from €100. Complete diagnostic report in 24 hours.',
  keywords: 'car inspection, pre-purchase inspection, vehicle diagnostics',
  openGraph: {
    title: 'Car Inspection Services | TEG',
    description: 'Professional inspection for peace of mind',
    images: [{ url: '/og-image.jpg' }],
  },
};
```

---

### JSON-LD Structured Data

**Decision:** ADD (new configuration)

**Purpose:** Help search engines understand business and services

**Schema Types:**
1. **LocalBusiness** - Company information, contact, hours
2. **Service** - Each service offering (pricing, description)
3. **AggregateRating** - Customer reviews (post-MVP)
4. **FAQPage** - FAQ content (deferred)

**Example LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TEG - Transporta Ekspertu Grupa",
  "image": "https://teg.lv/logo.png",
  "description": "Automotive inspection and services",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LV"
  },
  "telephone": "+371 25 201 710",
  "priceRange": "€30-€350",
  "openingHoursSpecification": {
    "dayOfWeek": ["Monday", "Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  }
}
```

---

### Sitemap Generation

**Decision:** KEEP + CONFIGURE

**Implementation:** Dynamic sitemap.xml generation

**Routes Included:**
```
- /lv/ (Latvian homepage)
- /lv/services/* (all service pages)
- /lv/about, /lv/contact, /lv/privacy
- /en/ (English homepage)
- /en/services/*
- /ru/ (Russian homepage)
```

**Multi-Language Sitemap:**
```xml
<url>
  <loc>https://teg.lv/lv/services/inspection</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://teg.lv/en/services/inspection" />
  <xhtml:link rel="alternate" hreflang="ru" href="https://teg.lv/ru/services/inspection" />
</url>
```

---

### Robots.txt

**Decision:** KEEP + CONFIGURE

**Configuration:**
```
User-agent: *
Allow: /

Sitemap: https://teg.lv/sitemap.xml
```

**Rules:**
- Allow all crawlers to index public pages
- Disallow admin paths (when added post-MVP)
- Disallow /api/* endpoints
- Point to sitemap for efficient crawling

---

## Development Infrastructure

### Absolute Imports

**Decision:** KEEP

**Configuration:** `@/` prefix for all imports

**Benefits:**
- Cleaner imports: `@/components/Header` vs `../../../components/Header`
- Easier refactoring (move files without updating paths)
- Better IDE autocomplete

---

### T3 Env

**Decision:** KEEP + CONFIGURE

**Purpose:** Type-safe environment variables

**Setup:**
```typescript
import { z } from 'zod';

export const env = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),
  RESEND_API_KEY: z.string(),
  ARCJET_KEY: z.string(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string(),
}).parse(process.env);
```

**Benefits:**
- TypeScript errors if env vars missing
- Autocomplete for env variables
- Fail fast on deployment if config wrong

---

### Bundler Analyzer

**Decision:** DEFER

**Rationale:**
- MVP doesn't need bundle analysis
- Can analyze after initial launch
- Useful when optimizing for Core Web Vitals
- ~1 hour setup post-MVP

---

### VSCode Configuration

**Decision:** KEEP

**Includes:**
- ESLint extension configuration
- Prettier formatting on save
- Tailwind IntelliSense
- TypeScript strict mode hints
- Git lens for code history

---

## CI/CD Pipeline

### GitHub Actions

**Decision:** KEEP

**Workflows:**

1. **Test on Push**
   - Run ESLint
   - Run Prettier check
   - Run TypeScript check
   - Run test suite (Vitest + Playwright)
   - Report coverage

2. **Deploy on Main Push**
   - Run all tests
   - Build Next.js
   - Deploy to Vercel

**Configuration:**
```yaml
name: CI/CD
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

---

### Dependabot

**Decision:** KEEP

**Purpose:** Automatic dependency updates

**Configuration:**
- Daily version checks
- Auto-merge patch updates
- Manual review for minor/major
- Security-only mode for critical packages

---

### Removed: Semantic Release

**Decision:** REMOVE

**Rationale:**
- MVP doesn't need automated versioning
- Manual releases sufficient for 6-7 days launch
- Can add post-MVP when release cadence established

---

### Removed: CodeRabbit

**Decision:** REMOVE

**Rationale:**
- Using Claude Code for code review instead
- Reduces external dependencies
- Code review handled by development team
- Can add post-MVP if needed

---

## Deployment Platform

### Vercel

**Decision:** KEEP

**Why Vercel for Next.js?**
- Built by Next.js creators
- One-click deployment from GitHub
- Automatic HTTPS and CDN
- Edge Functions for API routes
- Built-in analytics and monitoring
- Free tier suitable for MVP

**Plan Selection:**
- **Hobby Plan (Free):** Suitable for MVP launch
  - 100GB bandwidth
  - Unlimited deployments
  - Built-in analytics
  - Need to upgrade if traffic exceeds limits

- **Pro Plan ($20/month):** Recommended if expecting high traffic
  - Unlimited bandwidth
  - Priority support
  - Advanced security features

**Deployment Flow:**
```
1. Push to main branch
2. GitHub Actions runs tests
3. If tests pass → Deploy to Vercel
4. Automatic DNS update via Vercel nameservers
5. SSL certificate automatic (Let's Encrypt)
```

---

## Technology Stack Summary Table

| Layer | Technology | Version | Decision | Effort |
|-------|-----------|---------|----------|--------|
| **Framework** | Next.js | 16 | KEEP | - |
| **Language** | TypeScript | 5.9+ | KEEP | - |
| **Styling** | TailwindCSS | 4 | KEEP | - |
| **i18n** | next-intl | Latest | KEEP | 2h |
| **Forms** | react-hook-form | 7 | KEEP | - |
| **Validation** | Zod | 3 | KEEP | - |
| **Database** | Supabase | - | CHANGE | 2h |
| **Email** | Resend | Latest | ADD | 1h |
| **Calendar** | Google API | - | ADD | 3.5h |
| **Error Tracking** | Sentry | Latest | KEEP | 0.5h |
| **Analytics** | PostHog | Latest | KEEP | 0.5h |
| **Security** | Arcjet | Latest | KEEP | 2h |
| **Testing** | Vitest + Playwright | Latest | KEEP | - |
| **Code Quality** | ESLint/Prettier | Latest | KEEP | - |
| **Deployment** | Vercel | - | KEEP | - |

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** All decisions finalized and documented
