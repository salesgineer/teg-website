# TEG Tech Stack Re-evaluation Analysis
Generated: 2025-11-08

## Executive Summary

After comprehensive analysis of ixartz boilerplate technologies vs original TEG requirements, **significant changes recommended**. Key findings: (1) Clerk + Supabase can work together for enhanced auth, (2) DrizzleORM provides superior type safety over Supabase client alone, (3) Several "must remove" items actually provide substantial value. Recommended approach: **Keep more from boilerplate**, add less, save ~15-20 hours integration time.

---

## Detailed Analysis

### 1. Authentication (Clerk)

**Original Plan:** Remove (replace with Supabase Auth)
**Boilerplate Status:** Included and configured
**Research Findings:**
- Clerk specializes in authentication-as-a-service with superior DX
- Supabase Auth is part of broader platform, good but not specialized
- **They work together**: Clerk for auth UI/flows, Supabase for database
- Official integration: Clerk has documented Supabase integration patterns
- Clerk offers: user profiles, session management, fine-grained permissions, webhooks
- Better admin dashboard, org/team management out-of-box

**Pros of Keeping Clerk:**
- Already integrated in boilerplate (zero setup time)
- Superior authentication UI components (sign-in, sign-up, profile)
- Better developer experience for auth flows
- Excellent session management and JWT handling
- Admin panel for customer accounts
- Works WITH Supabase (not either/or decision)
- Free tier: 10K MAU (Monthly Active Users)
- Perfect for future customer dashboard (appointment history, etc.)

**Cons of Keeping Clerk:**
- Additional vendor dependency
- Free tier limits (though 10K MAU generous for small business)
- Slight learning curve if team unfamiliar

**Recommendation:** **KEEP CLERK**

**Rationale:** TEG will likely need customer accounts (view appointment history, manage bookings, download reports). Admin panel for managing customers/bookings is valuable. Clerk provides this with zero additional work. Clerk + Supabase Auth work together - use Clerk for frontend auth, Supabase for database/RLS. Integration already documented and proven.

---

### 2. Database/ORM (DrizzleORM + PGlite)

**Original Plan:** Remove (use Supabase client only)
**Boilerplate Status:** Included (DrizzleORM + PGlite for dev)
**Research Findings:**
- **DrizzleORM provides superior type safety vs Supabase client**
- Can use DrizzleORM WITH Supabase Postgres (not either/or)
- PGlite = zero-config local Postgres for development (no Docker needed)
- DrizzleORM offers: compile-time type checking, better autocomplete, cleaner query syntax
- Native Supabase integration: Foreign keys to `auth.users`, RLS policy definitions in schema
- Zod schema generation from Drizzle models (perfect for form validation)

**Pros of Keeping DrizzleORM:**
- **Best-in-class type safety** (InferSelectModel, InferInsertModel)
- Use with Supabase Postgres (not replacement, enhancement)
- Automatic Zod schema generation for forms
- PGlite = instant local dev (no Docker/Postgres setup)
- Migration system integrated with schema
- SQL-like syntax (easier for developers with SQL background)
- Native Supabase RLS policy support in schema definitions

**Cons of Keeping DrizzleORM:**
- Additional abstraction layer
- Team needs to learn DrizzleORM syntax
- Slightly more complex setup (though already done in boilerplate)

**Recommendation:** **KEEP DRIZZLEORM + Use with Supabase Postgres**

**Rationale:** DrizzleORM + Supabase Postgres is objectively better than Supabase client alone for type safety and DX. Context7 docs show excellent integration patterns. Can define foreign keys to Supabase auth tables, RLS policies directly in Drizzle schema. PGlite for local dev means zero Postgres/Docker setup. Already integrated in boilerplate - removing would waste configured value.

---

### 3. Error Monitoring (Sentry)

**Original Plan:** Remove (replace with Highlight.io)
**Boilerplate Status:** Included and configured
**Research Findings:**
- Sentry: Industry standard, 5K errors/month free, mature platform
- Highlight.io: Newer, 500 sessions/month free, includes session replay
- Sentry more robust for error tracking specifically
- Highlight.io simpler, more opinionated, frontend-focused
- Sentry has broader language/framework support

**Pros of Keeping Sentry:**
- Already integrated (zero setup)
- Mature, battle-tested error tracking
- Better stack traces and error grouping
- 5K errors/month free (generous for small business)
- Superior debugging tools
- More integrations (Slack, email, etc.)
- Better for production monitoring

**Cons of Keeping Sentry:**
- No session replay in free tier (Highlight.io has this)
- More complex interface
- Overkill for very simple apps

**Recommendation:** **KEEP SENTRY**

**Rationale:** For production website, robust error tracking > session replay. Sentry's 5K errors/month free tier sufficient for TEG scale. Already configured. Highlight.io's session replay nice-to-have but not critical for automotive services website. Can always add Highlight.io later if session replay becomes priority. Removing Sentry wastes pre-configured monitoring.

---

### 4. Analytics (PostHog)

**Original Plan:** Remove (replace with GA4)
**Boilerplate Status:** Included
**Research Findings:**
- PostHog: 1M events/month free, session replay, A/B testing, feature flags
- GA4: Free but limited features, privacy concerns, complex interface
- PostHog = privacy-friendly, can self-host, GDPR compliant
- PostHog includes: event tracking, funnels, user paths, session recording
- PostHog has product analytics features GA4 lacks

**Pros of Keeping PostHog:**
- **1M events/month free** (extremely generous)
- Privacy-friendly (can self-host, GDPR compliant)
- Session replay included (understand user behavior)
- A/B testing built-in (test service page variations)
- Feature flags (gradual rollouts)
- Better UX than GA4
- Product analytics (user flows, conversion funnels)
- Already integrated

**Cons of Keeping PostHog:**
- Less familiar than GA4 for marketing teams
- Another vendor dependency
- Session replay increases data storage

**Recommendation:** **KEEP POSTHOG (add GA4 later if needed)**

**Rationale:** PostHog provides WAY more value than GA4 for free tier. 1M events/month is massive for small business. Session replay helps understand why users don't complete contact forms. A/B testing valuable for optimizing conversion rates on service pages. Privacy-friendly = better for EU/GDPR compliance (important for Latvian company). GA4 can be added later for marketing team familiarity, but PostHog superior for product decisions.

---

### 5. Translation Management (Crowdin)

**Original Plan:** Remove
**Boilerplate Status:** Included
**Research Findings:**
- Crowdin specializes in translation workflow management
- Supports multi-language websites with CMS integrations
- Free tier available for open source/small projects
- TEG has **incomplete translations**: English only 40% complete, Russian only 2 pages
- Managing 3 languages (lv/en/ru) manually = tedious and error-prone

**Pros of Keeping Crowdin:**
- **Solves real TEG problem**: English 40% complete, Russian 2 pages only
- Streamlines translation workflow (not doing manual find/replace)
- Context-aware translation (translators see where text appears)
- Translation memory (consistent terminology)
- Integration with Sanity CMS possible
- Free tier may cover TEG needs
- Professional translator workflow

**Cons of Keeping Crowdin:**
- Requires setup/configuration
- Team needs to learn Crowdin workflows
- May not need if doing manual translations
- Potential costs if exceeds free tier

**Recommendation:** **EVALUATE CROWDIN (don't remove yet)**

**Rationale:** TEG has **massive translation problem**: English 40% complete with placeholder text, Russian only 2 pages. Crowdin could significantly streamline completing these translations professionally. However, depends on translation strategy: (1) If hiring professional translators → Crowdin valuable, (2) If doing machine translation → less value. **Decision point**: Evaluate after determining translation completion strategy. Don't remove preemptively - may solve real pain point.

---

### 6. CMS (Sanity - planned addition)

**Original Plan:** Add Sanity CMS
**Boilerplate Status:** Not included
**Research Findings:**
- Headless CMS useful for content-heavy sites, non-technical editors
- TEG content mostly static (services, pricing, contact info)
- Changes infrequent (not blog, news site)
- next-intl can handle static translations without CMS

**Pros of Adding Sanity:**
- Non-technical staff can update content
- Multi-language content management
- Structured content with schema validation
- Real-time collaboration
- Asset management for images

**Cons of Adding Sanity:**
- **Significant setup time** (~8-12 hours: schema design, integration, migration)
- Additional vendor dependency
- Learning curve for content team
- Potentially overkill for mostly static site
- Cost at scale (free tier: 10K docs, 100K API requests/month)

**Recommendation:** **DEFER SANITY (start without, add later if needed)**

**Rationale:** TEG content is mostly static (services descriptions, pricing, contact info). Changes infrequent. Don't need blog/news functionality. Can use next-intl + JSON/Markdown for translations initially. **If** client later needs content team to update without developer, THEN add Sanity. Starting without = save 8-12 hours integration, reduce complexity. Sanity easy to add later if requirements change. Focus initial effort on core functionality (booking forms, service pages, SEO).

---

### 7. Email Service (SendGrid - planned addition)

**Original Plan:** Add SendGrid
**Boilerplate Status:** Not included (but may have Resend or nodemailer)
**Research Findings:**
- **Resend**: Modern, React Email integration, 3K emails/month free, built by Vercel team
- SendGrid: Enterprise-grade, 100B+ emails/month capacity, 100 emails/day free
- Resend has better DX, designed for Next.js developers
- SendGrid more complex, enterprise-focused

**Pros of Using Resend (instead of SendGrid):**
- **Better DX** - designed for React/Next.js developers
- React Email integration (design emails in React)
- 3K emails/month free (vs SendGrid 100/day = 3K/month)
- Simpler API, modern design
- Built by Vercel team (excellent Next.js integration)
- Excellent documentation

**Cons of Using Resend:**
- Less mature than SendGrid
- Fewer enterprise features
- Smaller free tier absolute limit

**Recommendation:** **ADD RESEND (instead of SendGrid)**

**Rationale:** Resend superior choice for Next.js project. Same free tier volume (3K/month). React Email integration means designing transactional emails in React components (contact form confirmations, appointment notifications). Better DX, simpler API. SendGrid overkill for small business needs. Resend perfect fit for TEG scale and technical stack.

---

## Comparison Matrix

| Technology | Original Plan | Recommendation | Effort Impact | Business Value | Priority |
|------------|---------------|----------------|---------------|----------------|----------|
| **Clerk** | Remove | **KEEP** | +0h (already done) | High (customer accounts) | High |
| **DrizzleORM** | Remove | **KEEP** | +0h (already done) | Very High (type safety) | Critical |
| **Sentry** | Remove | **KEEP** | +0h (already done) | High (error tracking) | High |
| **PostHog** | Remove | **KEEP** | +0h (already done) | Very High (analytics) | High |
| **Crowdin** | Remove | **EVALUATE** | TBD | Medium (translations) | Medium |
| **Sanity CMS** | Add | **DEFER** | -10h (saved) | Low (static content) | Low |
| **SendGrid** | Add | **Use Resend** | +2h (setup) | High (transactional emails) | High |
| **Supabase** | Add | **ADD (with Drizzle)** | +4h (setup) | Very High (database) | Critical |

---

## Final Stack Recommendation

### ✅ KEEP FROM BOILERPLATE (Huge Time Savings)

1. **Clerk** - Authentication UI, customer accounts, admin panel
2. **DrizzleORM** - Type-safe database access, use WITH Supabase Postgres
3. **PGlite** - Zero-config local dev environment
4. **Sentry** - Production error monitoring
5. **PostHog** - Analytics, session replay, A/B testing
6. **Crowdin** - Evaluate for translation management (defer decision)

**Time Saved: ~15-20 hours** (auth setup, ORM configuration, monitoring integration)

---

### ❌ REMOVE FROM BOILERPLATE (Minimal)

Nothing critical needs removal. Unused features can stay dormant.

**Time Required: 0 hours**

---

### ➕ ADD TO STACK

1. **Supabase Postgres** - Database (use with DrizzleORM, not instead of)
   - Effort: 4 hours (setup project, connect DrizzleORM, configure RLS)

2. **Resend** - Email service (instead of SendGrid)
   - Effort: 2 hours (API setup, React Email templates)

3. **Google Calendar API** - Appointment booking integration
   - Effort: 6 hours (OAuth setup, calendar sync logic)

**Total Addition Time: ~12 hours**

---

### ⏸️ DEFER/EVALUATE

1. **Sanity CMS** - Only if client needs content team to self-edit (unlikely initially)
2. **Highlight.io** - Only if session replay becomes critical priority
3. **GA4** - Only if marketing team demands (PostHog likely sufficient)

---

## Architecture Pattern

```
TEG Stack Architecture:
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                            │
│  Next.js 15 + React 19 + TypeScript + TailwindCSS      │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┴──────────┬──────────────┐
         │                      │              │
    ┌────▼────┐          ┌─────▼─────┐   ┌───▼────┐
    │  Clerk  │          │ DrizzleORM│   │ Resend │
    │  (Auth) │          │  + Zod    │   │(Email) │
    └────┬────┘          └─────┬─────┘   └────────┘
         │                      │
         │              ┌───────▼────────┐
         │              │    Supabase    │
         └─────────────►│    Postgres    │
                        │   + Storage    │
                        └────────────────┘

         ┌──────────────────────────────┐
         │      MONITORING & ANALYTICS   │
         │  Sentry + PostHog + Crowdin  │
         └──────────────────────────────┘
```

**Key Integrations:**
- Clerk auth → Supabase user foreign keys
- DrizzleORM → Supabase Postgres (type-safe queries)
- Zod schemas → Form validation (auto-generated from Drizzle)
- Resend → Contact forms, appointment confirmations
- PostHog → User behavior, conversion tracking

---

## Time Estimates Summary

| Activity | Original Plan | Optimized Plan | Time Saved |
|----------|---------------|----------------|------------|
| Remove Clerk | 2h | 0h (keep) | +2h |
| Remove DrizzleORM | 1h | 0h (keep) | +1h |
| Remove Sentry | 1h | 0h (keep) | +1h |
| Remove PostHog | 1h | 0h (keep) | +1h |
| Setup Supabase Auth | 4h | 0h (use Clerk) | +4h |
| Setup Highlight.io | 3h | 0h (keep Sentry) | +3h |
| Setup GA4 | 2h | 0h (keep PostHog) | +2h |
| Setup Sanity CMS | 10h | 0h (defer) | +10h |
| Setup SendGrid | 2h | 2h (use Resend) | 0h |
| Setup Supabase DB | 0h | 4h | -4h |
| Setup Google Cal API | 0h | 6h | -6h |
| **TOTALS** | **26h** | **12h** | **+14 hours saved** |

**Net Result: 54% time reduction** on infrastructure setup, with superior technical outcomes.

---

## Critical Success Factors

### Type Safety Chain (Why DrizzleORM Matters)
```
Database Schema (Drizzle)
    ↓ (InferSelectModel/InferInsertModel)
TypeScript Types
    ↓ (createInsertSchema)
Zod Validation Schemas
    ↓ (react-hook-form)
Form Validation
```

This chain ensures **compile-time safety from database to UI** - critical for reducing bugs.

---

### Authentication Strategy (Why Clerk + Supabase)
```
Clerk: Frontend auth UI, session management, user profiles
    ↓ (user_id in JWT)
Supabase: Database with RLS policies
    ↓ (auth.uid() in policies)
Row-Level Security based on authenticated user
```

Best of both: Clerk's superior auth UX + Supabase's database RLS.

---

## Recommendations Priority Order

**Phase 1 - Foundation (Week 1):**
1. Setup Supabase Postgres project
2. Connect DrizzleORM to Supabase
3. Define database schema (services, appointments, contacts)
4. Configure Clerk <-> Supabase integration
5. Setup Resend for transactional emails

**Phase 2 - Core Features (Week 2-3):**
1. Build booking form with Zod validation
2. Implement contact form with email notifications
3. Setup PostHog event tracking
4. Configure Sentry error boundaries

**Phase 3 - Advanced (Week 4+):**
1. Google Calendar API integration
2. Evaluate Crowdin for completing EN/RU translations
3. Consider Sanity CMS if client requests content editing

---

## Key Takeaways

1. **Don't remove what works** - Boilerplate has excellent, pre-configured tools
2. **Type safety matters** - DrizzleORM + Zod = fewer bugs, better DX
3. **Specialized tools win** - Clerk (auth), PostHog (analytics), Resend (email)
4. **Defer premature optimization** - Start without CMS, add if needed
5. **Free tiers are generous** - Clerk (10K MAU), PostHog (1M events), Resend (3K emails)

**Bottom line:** Keep 80% of boilerplate, add only critical missing pieces (Supabase DB, Resend, Calendar API). Save 14+ hours, get better tech stack.
