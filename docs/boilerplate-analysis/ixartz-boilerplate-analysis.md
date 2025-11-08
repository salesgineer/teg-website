# ixartz Next.js Boilerplate vs TEG Requirements Analysis

**Analysis Date:** 2025-11-08
**Boilerplate Version:** v6.0.0 (Next.js 16+)
**Analyst:** Research Coordinator

---

## Executive Summary

ixartz Next.js Boilerplate achieves **52% effective alignment** with TEG validated requirements. Core framework match is excellent (Next.js, React, TypeScript, Tailwind), but substantial service integration mismatches exist. Boilerplate includes authentication, database ORM, and monitoring services that TEG doesn't need, requiring 20+ hours of removal work. Missing integrations include Sanity CMS, Supabase, SendGrid, Highlight.io, GA4, and Google Calendar API.

**Critical Finding:** Migration effort (76-108 hours) exceeds fresh start effort (70-90 hours). Boilerplate provides no net time savings due to removal overhead.

**Recommendation:** **Start fresh with validated stack** rather than adapt this boilerplate.

---

## Alignment Score Breakdown

### Overall Score: 52%

| Category | Score | Weight | Contribution |
|----------|-------|--------|--------------|
| Core Framework/Tooling | 100% | 40% | 40 pts |
| Required Integrations | 0% | 30% | 0 pts |
| Development Tooling | 100% | 15% | 15 pts |
| Internationalization | 70% | 10% | 7 pts |
| Architecture/Patterns | 100% | 5% | 5 pts |
| **Base Score** | **67%** | **100%** | **67 pts** |
| **Conflict Penalty** | **-15%** | - | **-15 pts** |
| **Effective Alignment** | **52%** | - | **52 pts** |

### Conflict Penalties

- Clerk authentication removal: -5%
- DrizzleORM/PGlite replacement: -5%
- Sentry replacement: -3%
- PostHog replacement: -2%

---

## Detailed Comparison Matrix

### ✅ Perfect Alignment (Keep)

| Feature | Boilerplate | TEG Requirement | Status |
|---------|-------------|-----------------|--------|
| Next.js | v16+ | v15.5.4+ | ✅ Compatible (newer version) |
| React | v19 | v19 | ✅ Exact match |
| TypeScript | Strict mode | v5.9+ strict | ✅ Exact match |
| Tailwind CSS | v4 | v3.4+ | ✅ Compatible (newer version) |
| react-hook-form | ✅ | ✅ | ✅ Exact match |
| Zod validation | ✅ | ✅ | ✅ Exact match |
| Vitest | ✅ | ✅ | ✅ Match (unit testing) |
| Playwright | ✅ | ✅ | ✅ Match (E2E testing) |
| ESLint | ✅ | ✅ | ✅ Match |
| Prettier | ✅ | ✅ | ✅ Match |
| Commitlint | ✅ | ✅ | ✅ Match |
| SEO (JSON-LD) | ✅ | ✅ | ✅ Match |
| Sitemap/robots.txt | ✅ | ✅ | ✅ Match |
| Vercel deployment | ✅ | ✅ | ✅ Match |
| Storybook | ✅ | Not required but useful | ✅ Bonus |
| Absolute imports (@/) | ✅ | ✅ | ✅ Match |
| App Router | ✅ | ✅ | ✅ Match |

**Count:** 17 perfect alignment items

---

### ⚠️ Included But Not Needed (Remove)

| Feature | Removal Effort | Complexity | Notes |
|---------|----------------|------------|-------|
| Clerk authentication | 8-12 hours | 4/5 | Full auth system with routes, middleware, components |
| DrizzleORM | 4-6 hours | 3/5 | Database ORM with migrations |
| PGlite | 2-3 hours | 2/5 | Local development database |
| Sentry error monitoring | 2-3 hours | 2/5 | Error tracking (replace with Highlight.io) |
| PostHog analytics | 2-3 hours | 2/5 | Analytics platform (replace with GA4) |
| Crowdin integration | 1-2 hours | 1/5 | Translation management (have translations) |
| Codecov | 1 hour | 1/5 | Code coverage reporting |
| Better Stack logging | 1 hour | 1/5 | Log management service |
| Checkly monitoring | 1 hour | 1/5 | Monitoring as code |
| CodeRabbit | 1 hour | 1/5 | AI code reviews |
| LogTape | Optional | 1/5 | Can keep or replace |

**Total Removal Effort:** 23-34 hours

---

### ❌ Missing Required Features (Add)

| Feature | Addition Effort | Complexity | Priority |
|---------|----------------|------------|----------|
| Sanity CMS | 16-24 hours | 4/5 | High |
| Supabase database | 12-16 hours | 4/5 | High |
| SendGrid email | 8-10 hours | 3/5 | High |
| Highlight.io monitoring | 4-6 hours | 3/5 | High |
| Google Analytics 4 | 3-4 hours | 2/5 | High |
| Google Calendar API | 10-14 hours | 4/5 | High |
| Latvian (lv) locale | 3-4 hours | 2/5 | High |
| Russian (ru) locale | 3-4 hours | 2/5 | High |

**Total Addition Effort:** 59-82 hours

---

### 🔄 Requires Modification

| Feature | Modification Effort | Complexity | Notes |
|---------|---------------------|------------|-------|
| next-intl locales | 6-8 hours | 3/5 | Remove fr, add lv/ru, reconfigure routing |
| Environment variables | 2-3 hours | 2/5 | Update for new services |
| Folder structure | 2-3 hours | 2/5 | Adapt for TEG needs |
| GitHub Actions | 2-3 hours | 2/5 | Update for new services |
| Testing suite | 4-6 hours | 3/5 | Update after auth removal |

**Total Modification Effort:** 16-23 hours

---

## Migration Plan

### Phase 1: Removals (High Priority)

**Estimated Time:** 23-34 hours

1. **Remove Clerk Authentication** (8-12 hours, Complexity: 4/5)
   - Delete `/src/app/[locale]/(auth)` routes
   - Remove auth middleware from `middleware.ts`
   - Delete auth-related components
   - Remove Clerk dependencies from `package.json`
   - Update navigation (remove sign-in/sign-out links)
   - **Risks:** Deep integration in middleware, API routes
   - **Testing:** Verify all routes accessible, no auth checks

2. **Remove DrizzleORM + PGlite** (6-9 hours, Complexity: 3/5)
   - Delete `/src/models/Schema.ts`
   - Delete `/migrations` folder
   - Remove `drizzle.config.ts`
   - Delete database utilities
   - Remove Drizzle/PGlite dependencies
   - **Risks:** Database calls scattered throughout codebase
   - **Testing:** Ensure no remaining database references

3. **Remove Monitoring/Analytics Services** (5-7 hours, Complexity: 2/5)
   - Remove Sentry configuration
   - Remove PostHog components
   - Delete error boundaries using Sentry
   - Remove related dependencies
   - **Risks:** Error tracking gaps during transition
   - **Testing:** Verify app runs without monitoring

4. **Remove Crowdin + Optional Services** (4-6 hours, Complexity: 1/5)
   - Delete `crowdin.yml`
   - Remove Crowdin GitHub Actions
   - Remove Codecov, Better Stack, Checkly configs (optional)
   - **Risks:** Low risk
   - **Testing:** Verify CI/CD still works

---

### Phase 2: Core Additions (High Priority)

**Estimated Time:** 43-60 hours

5. **Add Sanity CMS Integration** (16-24 hours, Complexity: 4/5)
   - Install `@sanity/client`, `next-sanity`
   - Configure Sanity project connection
   - Create TypeScript schema types
   - Build content fetching utilities
   - Add image optimization via Sanity CDN
   - **Risks:** Learning curve, GROQ query complexity
   - **Testing:** Verify content fetching works

6. **Add Supabase Integration** (12-16 hours, Complexity: 4/5)
   - Install `@supabase/supabase-js`
   - Configure Supabase client
   - Design database schema (appointments, contacts)
   - Create migration scripts
   - Build database access layer
   - **Risks:** Schema design, migration patterns
   - **Testing:** Test CRUD operations

7. **Add SendGrid Email Service** (8-10 hours, Complexity: 3/5)
   - Install `@sendgrid/mail`
   - Configure API keys
   - Create email templates (appointment confirmations)
   - Build email sending utilities
   - Add error handling
   - **Risks:** Template design, deliverability
   - **Testing:** Send test emails

8. **Add Google Calendar API** (10-14 hours, Complexity: 4/5)
   - Install Google APIs client libraries
   - Configure OAuth (if needed) or service account
   - Build calendar integration utilities
   - Add appointment booking logic
   - **Risks:** OAuth complexity, API quotas
   - **Testing:** Create/read calendar events

9. **Add Highlight.io Monitoring** (4-6 hours, Complexity: 3/5)
   - Install `@highlight-run/next`
   - Configure error tracking
   - Add error boundaries
   - Set up session replay (optional)
   - **Risks:** Configuration complexity
   - **Testing:** Trigger errors, verify tracking

10. **Add Google Analytics 4** (3-4 hours, Complexity: 2/5)
    - Install `react-ga4` or use Next.js Script
    - Configure GA4 tracking ID
    - Add page view tracking
    - Add event tracking (form submissions, clicks)
    - **Risks:** Low, straightforward integration
    - **Testing:** Verify events in GA4 dashboard

---

### Phase 3: Modifications (High Priority)

**Estimated Time:** 16-23 hours

11. **Update i18n Configuration** (6-8 hours, Complexity: 3/5)
    - Remove French (fr) locale from config
    - Add Latvian (lv) locale
    - Add Russian (ru) locale
    - Update locale routing in `middleware.ts`
    - Create translation files (`/public/locales/lv`, `/public/locales/ru`)
    - Configure default locale (lv)
    - **Risks:** URL structure changes affect SEO
    - **Testing:** Test all three locales

12. **Update Environment Variables** (2-3 hours, Complexity: 2/5)
    - Remove Clerk variables
    - Remove Drizzle variables
    - Add Sanity variables
    - Add Supabase variables
    - Add SendGrid API key
    - Add Highlight.io token
    - Add GA4 tracking ID
    - Add Google Calendar credentials
    - Update `.env.example`
    - **Risks:** Missing variables break services
    - **Testing:** Verify all services connect

13. **Adapt Folder Structure** (2-3 hours, Complexity: 2/5)
    - Create `/src/lib/sanity` for CMS utilities
    - Create `/src/lib/supabase` for database
    - Create `/src/lib/email` for SendGrid
    - Restructure for TEG-specific features
    - **Risks:** Low, organizational only
    - **Testing:** Verify imports work

14. **Update CI/CD Pipelines** (2-3 hours, Complexity: 2/5)
    - Remove Clerk-related checks
    - Add Sanity/Supabase connection tests
    - Update environment variables in GitHub Actions
    - **Risks:** CI/CD failures block deployment
    - **Testing:** Run full CI/CD pipeline

15. **Update Testing Suite** (4-6 hours, Complexity: 3/5)
    - Rewrite tests removing auth assumptions
    - Add tests for new services
    - Mock Sanity/Supabase in tests
    - **Risks:** Test coverage gaps
    - **Testing:** Run full test suite

---

### Phase 4: Cleanup & Optimization (Medium Priority)

**Estimated Time:** 6-10 hours

16. **Remove Demo Pages** (2-3 hours, Complexity: 1/5)
    - Delete boilerplate demo routes
    - Remove example components
    - Clean up unused assets

17. **Update Documentation** (2-3 hours, Complexity: 1/5)
    - Update README with TEG-specific info
    - Document environment setup
    - Document deployment process

18. **Security Audit** (2-4 hours, Complexity: 2/5)
    - Review exposed API endpoints
    - Validate rate limiting (keep Arcjet or add alternative)
    - Check CORS configuration
    - Review environment variable handling

---

## Total Migration Effort

| Phase | Time (hours) | Complexity |
|-------|-------------|------------|
| Phase 1: Removals | 23-34 | High |
| Phase 2: Core Additions | 43-60 | High |
| Phase 3: Modifications | 16-23 | Medium |
| Phase 4: Cleanup | 6-10 | Low |
| **TOTAL** | **88-127** | **High** |

**Realistic Estimate:** 100-120 hours (2.5-3 weeks full-time)

---

## Risk Analysis

### High Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Clerk removal breaks routing | High | High | Audit all middleware, test thoroughly |
| DrizzleORM patterns don't map to Supabase | High | Medium | Map patterns early, test migrations |
| Dependency conflicts during replacements | Medium | Medium | Incremental updates, test each change |
| Testing suite requires extensive rewrites | Medium | High | Update tests alongside removals |

### Medium Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| i18n routing changes affect SEO | Medium | Low-Medium | Plan URL structure, use redirects |
| Integration complexity (6+ services) | Medium | Medium | Add services incrementally |
| Learning curve for new services | Medium | Medium | Allocate time for documentation review |

### Low Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Loss of PostHog/Sentry history | Low | Low | Starting fresh, not critical |
| Storybook configuration needs updates | Low | Low | Update as needed |

---

## Alternative: Fresh Start Analysis

### Fresh Start Effort Estimate

| Task | Effort (hours) | Notes |
|------|----------------|-------|
| Initialize Next.js 15 project | 1-2 | `npx create-next-app@latest` |
| Configure TypeScript (strict) | 1-2 | tsconfig setup |
| Install & configure Tailwind CSS 3.4+ | 2-3 | PostCSS, theme setup |
| Install & configure next-intl (lv/en/ru) | 6-8 | Locale routing, translations |
| Set up ESLint + Prettier + Commitlint | 2-3 | Copy from boilerplate |
| Set up Vitest + Playwright | 3-4 | Testing infrastructure |
| Configure Sanity CMS | 16-24 | Same as migration |
| Configure Supabase | 12-16 | Same as migration |
| Configure SendGrid | 8-10 | Same as migration |
| Configure Highlight.io | 4-6 | Same as migration |
| Configure GA4 | 3-4 | Same as migration |
| Configure Google Calendar API | 10-14 | Same as migration |
| Set up SEO (JSON-LD, sitemap) | 3-4 | Implement from scratch |
| Set up GitHub Actions CI/CD | 2-3 | Copy from boilerplate |
| Create folder structure | 2-3 | From scratch |
| **TOTAL** | **75-106** | **~2-2.5 weeks full-time** |

### Comparison

| Approach | Effort (hours) | Advantages | Disadvantages |
|----------|----------------|------------|---------------|
| **Use Boilerplate** | 88-127 | - Pre-configured tooling<br>- Existing CI/CD<br>- Testing setup | - 20+ hours removing unwanted features<br>- Higher complexity<br>- Breaking change risks<br>- Learning their patterns to change them |
| **Fresh Start** | 75-106 | - Exactly what we need<br>- No removal overhead<br>- Full control<br>- Lower risk<br>- Clean architecture | - Need to configure tooling<br>- No existing CI/CD patterns |

**Net Time Difference:** Fresh start saves 13-21 hours (11-20% faster)

---

## Final Recommendation

### ❌ DO NOT USE ixartz Boilerplate

**Rationale:**

1. **No Time Savings:** Fresh start is 11-20% faster than adapting the boilerplate
2. **Higher Risk:** Removal of deeply integrated features (auth, database) introduces breaking change risks
3. **Architectural Mismatch:** Boilerplate optimized for SaaS with authentication; TEG is public website
4. **Service Misalignment:** 0% match on required integrations (Sanity, Supabase, SendGrid, etc.)
5. **Wasted Effort:** 20+ hours spent removing features we don't need
6. **Complexity Overhead:** Learning boilerplate patterns just to change them

### ✅ RECOMMENDED: Fresh Start with Validated Stack

**Benefits:**
- **Faster delivery:** 75-106 hours vs 88-127 hours
- **Lower risk:** No removal/refactoring complications
- **Cleaner architecture:** Built for TEG's exact needs
- **Full control:** Every line of code serves a purpose
- **Better alignment:** 100% match on what we build

**What to Borrow from Boilerplate:**
- ESLint/Prettier/Commitlint configs (copy directly)
- GitHub Actions workflows (adapt for our stack)
- Testing patterns (Vitest + Playwright setup)
- SEO patterns (JSON-LD implementation)
- Folder structure inspiration

**Estimated Fresh Start Timeline:**
- Week 1: Core setup (Next.js, TypeScript, Tailwind, i18n, tooling)
- Week 2: Service integrations (Sanity, Supabase, SendGrid, Highlight.io, GA4)
- Week 3: Advanced features (Google Calendar, testing, SEO, CI/CD)
- **Total:** 2-3 weeks full-time development

---

## Implementation Strategy (If Fresh Start)

### 1. Initialize Project (Day 1)
```bash
npx create-next-app@latest teg-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"
```

### 2. Configure Core Tools (Days 1-2)
- TypeScript strict mode
- ESLint + Prettier (copy from boilerplate)
- Commitlint + Lefthook
- Absolute imports

### 3. Set Up i18n (Days 2-3)
- Install next-intl
- Configure lv/en/ru locales
- Set up locale routing middleware
- Create translation file structure

### 4. Integrate Services (Days 4-10)
- Sanity CMS (Days 4-6)
- Supabase (Days 6-8)
- SendGrid (Days 8-9)
- Highlight.io + GA4 (Day 9)
- Google Calendar (Days 9-10)

### 5. Testing & CI/CD (Days 11-12)
- Vitest setup
- Playwright setup
- GitHub Actions workflows

### 6. SEO & Optimization (Days 13-14)
- JSON-LD structured data
- Sitemap generation
- robots.txt
- Image optimization
- Core Web Vitals optimization

---

## Key Takeaways

1. **Alignment Score:** 52% effective (67% base - 15% conflict penalty)
2. **Migration Effort:** 88-127 hours (2.5-3 weeks)
3. **Fresh Start Effort:** 75-106 hours (2-2.5 weeks)
4. **Time Savings:** Fresh start is 13-21 hours faster
5. **Risk Profile:** Fresh start has significantly lower risk
6. **Recommendation:** **Start fresh with validated stack**

---

## Next Steps

1. **Approve fresh start approach** with stakeholders
2. **Set up project repository** with validated stack
3. **Copy configuration files** from ixartz boilerplate:
   - `.eslintrc` patterns
   - `prettier.config.js`
   - `commitlint.config.ts`
   - GitHub Actions workflows (adapt)
4. **Begin Phase 1** (Core setup: Next.js, TypeScript, Tailwind, i18n)
5. **Document decisions** in project wiki

---

**Analysis Complete**
