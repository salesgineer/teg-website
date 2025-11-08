# TEG Boilerplate Audit - Quick Reference

## Decision Summary

```
Total Modules: 47

✅ KEEP:      18 (38%)  - Use as-is
❌ REMOVE:    15 (32%)  - Strip out
⚙️ CONFIGURE:  9 (19%)  - Need setup
⏸️ DEFER:      5 (11%)  - Post-MVP
```

## Work Estimates

- **Removal:** 8-12h
- **Configuration:** 12-16h
- **Integration (new):** 16-20h
- **TOTAL:** 36-48h (5-6 days)

## Cost Projections

**Months 1-3:** $0
**Months 4-12:** $0-20/mo (Vercel Pro if needed)
**Year 1 Expected:** $240 (Vercel Pro only)

## Quick Decisions

### ✅ KEEP (18)
Core: Next.js 16, React 19, TypeScript, Tailwind
Quality: ESLint, Prettier, Lefthook, Lint-staged, Commitlint, Bundler Analyzer
Testing: Vitest, Playwright
Forms: React Hook Form, Zod
i18n: next-intl
Monitoring: Sentry, Sentry Spotlight, PostHog
SEO: Open Graph, robots.txt
Dev: VSCode config, Absolute imports

### ❌ REMOVE (15)
Auth: Clerk
Database: DrizzleORM, PGlite, Prisma Postgres, Drizzle Studio, Drizzle Kit
Testing: Storybook, Codecov, Visual regression
Tools: Commitizen, Checkly, CodeRabbit, Semantic Release

### ⚙️ CONFIGURE (9)
- T3 Env (1h) - Supabase/Resend/Google Calendar
- i18n-check (1h) - lv/en/ru validation
- Arcjet (2h) - Rate limiting + bot protection
- SEO metadata (2h) - Automotive keywords
- JSON-LD (3h) - LocalBusiness + Service schema
- Sitemap (1h) - Multi-language
- Theme (8h) - TEG branding

### ⏸️ DEFER (5)
- Crowdin (3h)
- Knip (2h)
- LogTape + Better Stack (3h)

## Must Do First (17h)

1. Remove Clerk, DrizzleORM (4h)
2. Configure T3 Env (1h)
3. Configure i18n-check (1h)
4. Configure SEO + JSON-LD (5h)
5. Integrate Supabase (6h)

## Files

- **Full audit:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/boilerplate-audit-complete.md`
- **Summary:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/boilerplate-audit-summary.md`
