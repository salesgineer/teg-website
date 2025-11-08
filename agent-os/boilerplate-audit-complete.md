# TEG Project: Complete ixartz Boilerplate Audit
## All 47 Modules Assessment

**Date:** 2025-11-08
**Project:** TEG Automotive Services Website
**Context:** Small team (1-2 devs), no auth, simple 3-table DB, multi-language (lv/en/ru), marketing site

---

## Executive Summary

**Total Modules:** 47
- **KEEP:** 18 (38%)
- **REMOVE:** 15 (32%)
- **CONFIGURE:** 9 (19%)
- **DEFER:** 5 (11%)

**Estimated Work:**
- Removal time: 8-12 hours
- Configuration time: 12-16 hours
- Integration time (new additions): 16-20 hours
- **Total setup: 36-48 hours**

---

## Complete 47-Module Decision Matrix

| # | Module | Category | Free Tier | Setup (h) | Remove (h) | TEG Value | Decision | Rationale |
|---|--------|----------|-----------|-----------|------------|-----------|----------|-----------|
| **CORE (4)** |
| 1 | Next.js 16 App Router | KEEP | N/A | 0 | - | High | ✅ KEEP | Foundation framework, latest version |
| 2 | React 19 | KEEP | N/A | 0 | - | High | ✅ KEEP | Required by Next.js 16 |
| 3 | TypeScript (strict) | KEEP | N/A | 0 | - | High | ✅ KEEP | Essential for code quality |
| 4 | Tailwind CSS 4 | KEEP | N/A | 0 | - | High | ✅ KEEP | Efficient styling, matches plan |
| **AUTH & DATABASE (5)** |
| 5 | Clerk | REMOVE | - | - | 2 | None | ❌ REMOVE | No authentication needed |
| 6 | DrizzleORM | REMOVE | N/A | - | 3 | None | ❌ REMOVE | Using Supabase client directly |
| 7 | PGlite | REMOVE | N/A | - | 1 | None | ❌ REMOVE | Unnecessary with Supabase |
| 8 | Prisma Postgres | REMOVE | Free tier | - | 1 | None | ❌ REMOVE | Using Supabase PostgreSQL |
| 9 | T3 Env | CONFIGURE | N/A | 1 | 0.5 | Medium | ⚙️ CONFIG | Type-safe env vars, setup for Supabase/Resend |
| **I18N (3)** |
| 10 | next-intl | KEEP | N/A | 0 | - | High | ✅ KEEP | Essential for lv/en/ru languages |
| 11 | Crowdin integration | DEFER | Free: 1 project | 3 | 1 | Low | ⏸️ DEFER | Manual translations fine for MVP |
| 12 | i18n-check | CONFIGURE | N/A | 1 | 0.5 | Medium | ⚙️ CONFIG | Validate 3 language completeness |
| **FORMS (2)** |
| 13 | React Hook Form | KEEP | N/A | 0 | - | High | ✅ KEEP | Contact/appointment forms |
| 14 | Zod | KEEP | N/A | 0 | - | High | ✅ KEEP | Form validation + type safety |
| **CODE QUALITY (8)** |
| 15 | ESLint (Next.js + Tailwind + Antfu) | KEEP | N/A | 0 | - | High | ✅ KEEP | Code quality essential |
| 16 | Prettier | KEEP | N/A | 0 | - | High | ✅ KEEP | Code formatting standard |
| 17 | Lefthook | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Faster than Husky, already configured |
| 18 | Lint-staged | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Pre-commit efficiency |
| 19 | Commitlint | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Commit message standards |
| 20 | Commitizen | REMOVE | N/A | - | 0.5 | Low | ❌ REMOVE | Overhead for small team |
| 21 | Knip | DEFER | N/A | 2 | 0.5 | Low | ⏸️ DEFER | Useful but not MVP priority |
| 22 | Bundler Analyzer | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Performance optimization tool |
| **TESTING (5)** |
| 23 | Vitest (unit + browser) | KEEP | N/A | 0 | - | High | ✅ KEEP | Fast unit testing |
| 24 | Playwright (E2E) | KEEP | N/A | 0 | - | High | ✅ KEEP | Form testing critical |
| 25 | Storybook | REMOVE | N/A | - | 2 | Low | ❌ REMOVE | Overkill for small component library |
| 26 | Codecov | REMOVE | Free: 1 repo | - | 1 | Low | ❌ REMOVE | Coverage tracking not priority |
| 27 | Visual regression testing | REMOVE | Varies | - | 1 | Low | ❌ REMOVE | Marketing site, manual QA sufficient |
| **MONITORING & ANALYTICS (4)** |
| 28 | Sentry | KEEP | 5k errors/mo | 2 | - | High | ✅ KEEP | Error tracking critical (decided) |
| 29 | Sentry Spotlight | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Local dev debugging |
| 30 | PostHog | KEEP | 1M events/mo | 2 | - | High | ✅ KEEP | Analytics essential (decided) |
| 31 | Checkly | REMOVE | 3 checks | - | 1 | Low | ❌ REMOVE | Vercel monitoring sufficient |
| **LOGGING (1)** |
| 32 | LogTape + Better Stack | DEFER | BS: 1GB/mo | 3 | 1.5 | Medium | ⏸️ DEFER | Console.log + Sentry adequate for MVP |
| **SECURITY (1)** |
| 33 | Arcjet | CONFIGURE | 5k reqs/mo | 2 | 1 | High | ⚙️ CONFIG | Bot protection + rate limiting for forms |
| **AI/AUTOMATION (1)** |
| 34 | CodeRabbit | REMOVE | Limited free | - | 0.5 | Low | ❌ REMOVE | Small team, manual reviews fine |
| **DATABASE TOOLS (2)** |
| 35 | Drizzle Studio | REMOVE | N/A | - | 0.5 | None | ❌ REMOVE | Using Supabase dashboard |
| 36 | Drizzle Kit | REMOVE | N/A | - | 0.5 | None | ❌ REMOVE | No DrizzleORM |
| **CI/CD (3)** |
| 37 | GitHub Actions | KEEP | 2k min/mo | 0 | - | High | ✅ KEEP | CI/CD essential |
| 38 | Dependabot | KEEP | N/A | 0 | - | High | ✅ KEEP | Security updates automated |
| 39 | Semantic Release | REMOVE | N/A | - | 1 | Low | ❌ REMOVE | Manual versioning simpler |
| **SEO (5)** |
| 40 | SEO metadata | CONFIGURE | N/A | 2 | - | High | ⚙️ CONFIG | Add automotive Schema.org |
| 41 | JSON-LD structured data | CONFIGURE | N/A | 3 | - | High | ⚙️ CONFIG | LocalBusiness + Service markup |
| 42 | Open Graph tags | KEEP | N/A | 0 | - | High | ✅ KEEP | Social sharing essential |
| 43 | Sitemap.xml | CONFIGURE | N/A | 1 | - | High | ⚙️ CONFIG | Multi-language sitemaps |
| 44 | robots.txt | KEEP | N/A | 0 | - | Medium | ✅ KEEP | SEO control |
| **DEVELOPMENT (2)** |
| 45 | VSCode config | KEEP | N/A | 0 | - | Medium | ✅ KEEP | Team consistency |
| 46 | Absolute imports (@/) | KEEP | N/A | 0 | - | High | ✅ KEEP | Code organization |
| **THEME (1)** |
| 47 | Minimalist theme | CONFIGURE | N/A | 8 | - | High | ⚙️ CONFIG | Adapt to TEG branding |

---

## Category Breakdowns

### ✅ KEEP (18 modules) - Use as-is

**Core Stack:**
- Next.js 16, React 19, TypeScript, Tailwind CSS 4

**Code Quality:**
- ESLint, Prettier, Lefthook, Lint-staged, Commitlint, Bundler Analyzer

**Testing:**
- Vitest, Playwright

**Forms & i18n:**
- React Hook Form, Zod, next-intl

**Monitoring:**
- Sentry, Sentry Spotlight, PostHog

**SEO & Dev:**
- Open Graph, robots.txt, VSCode config, Absolute imports

**Rationale:** These are either essential for project requirements, already configured, or have no overhead.

---

### ❌ REMOVE (15 modules) - Strip out

**Auth & Database (6):**
- Clerk, DrizzleORM, PGlite, Prisma Postgres, Drizzle Studio, Drizzle Kit
- **Why:** No authentication needed, using Supabase directly

**Testing & Automation (5):**
- Storybook, Codecov, Visual regression, CodeRabbit, Semantic Release
- **Why:** Overkill for small team, marketing site doesn't need these

**Tools (3):**
- Commitizen, Checkly
- **Why:** Unnecessary complexity for project scale

**Logging (1):**
- Better Stack (deferred to post-MVP)

**Removal Time:** 8-12 hours total

---

### ⚙️ CONFIGURE (9 modules) - Need setup

**Environment:**
- T3 Env (1h) - Configure for Supabase, Resend, Google Calendar keys

**i18n:**
- i18n-check (1h) - Set up validation for lv/en/ru completeness

**Security:**
- Arcjet (2h) - Configure rate limiting for contact/appointment forms

**SEO (3 modules, 6h total):**
- SEO metadata (2h) - Add automotive service keywords
- JSON-LD structured data (3h) - LocalBusiness + Service + Review markup
- Sitemap.xml (1h) - Multi-language sitemap generation

**Design:**
- Minimalist theme (8h) - Customize colors, fonts, components for TEG brand

**Configuration Time:** 12-16 hours total

---

### ⏸️ DEFER (5 modules) - Post-MVP

**Low Priority:**
- Crowdin integration (3h) - Manual translations adequate initially
- Knip (2h) - Useful but not critical for small codebase
- LogTape + Better Stack (3h) - Console + Sentry sufficient for launch

**Why Defer:** These add value but don't block MVP. Can add after launch based on actual needs.

---

## Cost Analysis

### Free Tier Limits

**Services We're Using:**

| Service | Free Tier | When Billing Starts | Monthly Cost |
|---------|-----------|---------------------|--------------|
| **Sentry** | 5,000 errors/mo | 5,001+ errors | $26/mo (Dev) |
| **PostHog** | 1M events/mo | 1M+ events | $0 (pay-as-go) |
| **Arcjet** | 5,000 requests/mo | 5,001+ reqs | $10/mo (Startup) |
| **Vercel** | 100GB bandwidth | 100GB+ | $20/mo (Pro) |
| **Supabase** | 500MB DB, 1GB storage | Limits exceeded | $25/mo (Pro) |
| **Resend** | 3,000 emails/mo | 3,001+ emails | $20/mo |

**Estimated Traffic (Month 1-3):**
- ~5,000 unique visitors/mo
- ~500 form submissions/mo
- ~50 appointments/mo
- ~100 errors/mo

**Expected Costs (First 3 months):** $0
**Expected Costs (Months 4-12):** $0-20/mo (likely Vercel only)

### Hidden Costs to Watch

1. **Sentry:** Can hit 5k errors quickly if bugs exist
2. **Resend:** Marketing emails count toward limit
3. **Vercel:** Image optimization bandwidth
4. **Supabase:** Database size grows with appointments

---

## Detailed Research Findings

### T3 Env (@t3-oss/env-nextjs)

**Purpose:** Type-safe environment variable validation with runtime checks

**Key Features:**
- Compile-time type checking for env vars
- Runtime validation with Zod schemas
- Client/server separation enforced
- Automatic TypeScript types generation

**Setup Complexity:** Low (1 hour)
- Create `src/env.mjs` with schemas
- Import in `next.config.js`
- Replace `process.env` calls

**TEG Value:** Medium
- Prevents misconfiguration of Supabase, Resend, Google Calendar APIs
- Type safety for 8+ environment variables
- Catches missing env vars at build time

**Recommendation:** ⚙️ CONFIGURE
- Small investment, high safety return
- Essential with multiple API integrations

---

### Lefthook vs Husky

**Why Boilerplate Uses Lefthook:**
- **Performance:** 5-10x faster (Go binary vs Node.js)
- **Parallel execution:** Built-in
- **Configuration:** YAML vs JavaScript
- **No npm postinstall issues**

**TEG Decision:** ✅ KEEP
- Already configured
- Works with lint-staged
- Small team won't notice complexity difference

---

### Knip

**Purpose:** Detect unused files, dependencies, exports, types

**Value Proposition:**
- Finds dead code and unused dependencies
- Reduces bundle size
- Improves maintenance

**False Positive Rate:** Medium (10-20% depending on config)

**TEG Assessment:** ⏸️ DEFER
- Useful for codebase health
- Not MVP priority
- Add after initial launch (2 hours setup)

---

### i18n-check

**Purpose:** Validate translation completeness across locales

**Value for 3 Languages:** High
- Detects missing lv/en/ru translations
- Prevents broken English/Russian pages
- CLI integration with CI/CD

**Setup:** 1 hour
- Configure for lv (base), en, ru
- Add to pre-commit or CI

**TEG Decision:** ⚙️ CONFIGURE
- Critical for multi-language quality
- Prevents incomplete English content (known issue)

---

### Checkly

**Free Tier:** 3 checks, 1 location, 5min frequency

**Assessment:** Insufficient for TEG
- Need monitoring for: homepage, contact form, appointment booking
- 3 checks barely covers basics
- Vercel built-in monitoring better

**TEG Decision:** ❌ REMOVE
- Use Vercel Analytics + Sentry for monitoring
- PostHog for user behavior
- Save 1 hour removal time

---

### Better Stack (Logtail)

**Free Tier:** 1GB logs/month, 3-day retention

**Value Proposition:**
- Structured logging
- Search and filtering
- Alerts and dashboards

**TEG Assessment:** ⏸️ DEFER
- Console.log + Sentry adequate for MVP
- 1GB sufficient if needed later
- 3h setup + LogTape learning curve

**When to Add:**
- After launch if debugging becomes complex
- If compliance requires log retention

---

### CodeRabbit

**Free Tier:** Limited (unclear, changes frequently)
**Paid:** $12/user/month

**TEG Assessment:** ❌ REMOVE
- 1-2 person team
- Manual code reviews sufficient
- AI reviews add overhead
- GitHub Copilot already provides AI assistance

---

### Codecov

**Free Tier:** 1 repo, unlimited users, 250 uploads/mo

**TEG Assessment:** ❌ REMOVE
- Coverage tracking nice-to-have
- Vitest generates coverage locally
- Not critical for marketing site
- Save 1 hour removal

---

### Semantic Release

**Purpose:** Automated versioning and changelog generation

**Requirements:**
- Conventional commits (enforced by Commitlint)
- GitHub releases
- Semantic versioning

**TEG Assessment:** ❌ REMOVE
- Small team, simple versioning
- Manual releases more transparent
- Conventional commits sufficient
- 1h removal time

---

### Visual Regression Testing

**Options:**
- Percy: Free tier 5k screenshots/mo
- Chromatic: Free for open source
- Playwright screenshots: Free

**TEG Assessment:** ❌ REMOVE
- Marketing site, not app with complex UI states
- Manual QA sufficient
- Playwright screenshots available if needed
- Save setup time

---

### Storybook

**Storybook 8 Features:**
- Component documentation
- Isolated development
- Visual testing
- Interaction testing

**Overhead:**
- Build time +30-60s
- Maintenance: stories for each component
- Learning curve for team

**TEG Assessment:** ❌ REMOVE
- Small component library (~20 components)
- Direct development faster
- Vitest component testing sufficient
- 2h removal time

---

### LogTape

**Purpose:** Modern logging library for TypeScript/JavaScript

**vs Winston/Pino:**
- TypeScript-first design
- Better type inference
- Structured logging
- Multiple outputs

**Learning Curve:** Medium (different API paradigm)

**TEG Assessment:** ⏸️ DEFER
- Console.log + Sentry adequate for MVP
- Can add if structured logging needed
- Better Stack integration requires LogTape

---

## Action Plan

### Phase 1: Removal (Week 1, 8-12h)

**Priority Order (minimize conflicts):**

1. **Auth removal (4h):**
   - Remove Clerk configuration
   - Delete auth middleware
   - Remove protected routes
   - Clean up imports

2. **Database removal (3h):**
   - Remove DrizzleORM config
   - Delete Drizzle Studio config
   - Remove migration files
   - Clean up database files

3. **Testing removal (2h):**
   - Remove Storybook config and stories
   - Remove Codecov config
   - Remove visual regression setup

4. **Tooling removal (2h):**
   - Remove Semantic Release config
   - Remove Checkly config
   - Remove CodeRabbit config
   - Remove Commitizen

5. **Cleanup (1h):**
   - Update package.json scripts
   - Remove unused dependencies
   - Update README
   - Test build

### Phase 2: Configuration (Week 1-2, 12-16h)

**Critical Path:**

1. **T3 Env (1h):**
   ```typescript
   // src/env.mjs
   import { createEnv } from '@t3-oss/env-nextjs';
   import { z } from 'zod';

   export const env = createEnv({
     server: {
       SUPABASE_URL: z.string().url(),
       SUPABASE_ANON_KEY: z.string(),
       SUPABASE_SERVICE_ROLE_KEY: z.string(),
       RESEND_API_KEY: z.string(),
       GOOGLE_CALENDAR_API_KEY: z.string(),
       GOOGLE_CALENDAR_ID: z.string(),
     },
     client: {
       NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
       NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
       NEXT_PUBLIC_POSTHOG_KEY: z.string(),
     },
     runtimeEnv: {
       SUPABASE_URL: process.env.SUPABASE_URL,
       // ... map all vars
     },
   });
   ```

2. **i18n-check (1h):**
   ```json
   // .i18ncheckrc
   {
     "locales": ["lv", "en", "ru"],
     "baseLocale": "lv",
     "translationDir": "messages",
     "ignoreKeys": []
   }
   ```

3. **Arcjet (2h):**
   - Install `@arcjet/next`
   - Configure rate limiting for forms
   - Add bot detection
   - Test protection

4. **SEO Metadata (2h):**
   - Update default metadata
   - Add automotive keywords
   - Configure per-page metadata
   - Test Open Graph

5. **JSON-LD Structured Data (3h):**
   ```typescript
   // lib/structured-data.ts
   export const localBusinessSchema = {
     '@context': 'https://schema.org',
     '@type': 'AutomotiveServices',
     'name': 'TEG - Transporta Ekspertu Grupa',
     'image': 'https://www.teg.lv/logo.png',
     'telephone': '+371 25 201 710',
     'address': {
       '@type': 'PostalAddress',
       'addressCountry': 'LV'
     },
     'openingHours': 'Mo-Sa 09:00-20:00',
     'priceRange': '€€'
   };
   ```

6. **Multi-language Sitemap (1h):**
   - Generate sitemaps for /lv, /en, /ru
   - Add alternate language links
   - Configure in robots.txt

7. **Theme Customization (8h):**
   - TEG color palette
   - Typography
   - Component styling
   - Responsive design

### Phase 3: Integration (Week 2-3, 16-20h)

**New Additions:**

1. **Supabase Setup (6h):**
   - Create project
   - Design schema (appointments, contacts, services)
   - Configure RLS policies
   - Set up client

2. **Resend Setup (2h):**
   - Configure API
   - Create email templates
   - Test sending

3. **Google Calendar Integration (8h):**
   - Set up API credentials
   - Implement booking logic
   - Sync appointments
   - Handle availability

### Phase 4: Testing & Verification (Week 3, 4h)

1. **Build verification:**
   - Test production build
   - Check bundle size
   - Verify all pages load

2. **i18n testing:**
   - Run i18n-check
   - Manual language switching
   - Missing translation detection

3. **Form testing:**
   - Contact form with Arcjet
   - Appointment booking
   - Rate limiting

4. **SEO verification:**
   - Structured data validation
   - Sitemap generation
   - robots.txt

---

## Timeline Summary

**Week 1:**
- Days 1-2: Removal (8-12h)
- Days 3-5: Configuration (12-16h)

**Week 2-3:**
- Integration of new services (16-20h)

**Week 3:**
- Testing and verification (4h)

**Total: 40-48 hours (5-6 working days)**

---

## Risk Assessment

### High Risk
- **Removal conflicts:** Auth/DB tightly integrated, removal may break builds
- **Mitigation:** Test builds frequently, use git branches

### Medium Risk
- **i18n-check false positives:** May flag intentional differences
- **Mitigation:** Configure ignore patterns

- **Arcjet rate limiting:** Too aggressive = bad UX
- **Mitigation:** Start permissive, tune based on analytics

### Low Risk
- **T3 Env migration:** Straightforward, clear errors if misconfigured
- **Theme customization:** Iterative, no breaking changes

---

## Cost Projections

### First 6 Months

| Month | Expected Costs | Reason |
|-------|---------------|--------|
| 1-3 | $0 | All free tiers sufficient |
| 4-6 | $0-20 | Possible Vercel Pro if traffic grows |

### Year 1

| Service | Likelihood | Monthly | Annual |
|---------|-----------|---------|--------|
| Vercel Pro | 60% | $20 | $240 |
| Sentry Dev | 20% | $26 | $312 |
| Supabase Pro | 10% | $25 | $300 |
| Resend Pro | 30% | $20 | $240 |

**Expected Year 1 Total:** $0-600 (likely $240 Vercel only)

---

## Recommendations Priority

### Must Do (Blocks MVP)
1. Remove Clerk, DrizzleORM (4h)
2. Configure T3 Env (1h)
3. Configure i18n-check (1h)
4. Configure SEO metadata + JSON-LD (5h)
5. Integrate Supabase (6h)

**Subtotal: 17h**

### Should Do (Quality/Security)
1. Configure Arcjet (2h)
2. Theme customization (8h)
3. Integrate Resend (2h)
4. Remove testing overhead (Storybook, etc.) (2h)

**Subtotal: 14h**

### Nice to Have (Optimization)
1. Integrate Google Calendar (8h)
2. Multi-language sitemap (1h)
3. Clean up remaining removed modules (2h)

**Subtotal: 11h**

---

## Key Insights

### What Worked Well in Boilerplate Selection
- Modern stack (Next.js 16, React 19, TypeScript, Tailwind)
- Quality tooling (ESLint, Prettier, Vitest, Playwright)
- Production monitoring (Sentry, PostHog)
- i18n support (next-intl)

### What Doesn't Fit TEG
- Over-engineered for small team (Storybook, Codecov, Semantic Release)
- Wrong database approach (DrizzleORM vs Supabase direct)
- Unnecessary auth complexity (Clerk)
- Too many monitoring services (Checkly + Vercel + Sentry redundant)

### Lessons Learned
- **Boilerplates are starting points, not final solutions**
- **Remove early:** Auth/DB removal gets harder with time
- **Free tiers matter:** Choose services with generous free tiers
- **Small team principle:** If it adds >2h maintenance/month, reconsider

---

## Conclusion

The ixartz boilerplate provides an excellent modern foundation but includes 15 modules (32%) that add unnecessary complexity for TEG project. By removing overhead and configuring essential modules, we achieve:

- **Simpler codebase:** -15 modules = less maintenance
- **Lower costs:** $0-20/mo instead of potential $100+/mo
- **Faster development:** No Storybook, Codecov overhead
- **Better fit:** Supabase integration vs DrizzleORM complexity
- **Professional quality:** Keep essential monitoring, testing, SEO

**Next Steps:**
1. Review this audit with stakeholders
2. Approve removal/configuration plan
3. Execute Phase 1 (Removal) in clean branch
4. Proceed with configuration and integration
