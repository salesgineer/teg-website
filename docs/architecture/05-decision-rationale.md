# Decision Rationale

Detailed explanation of WHY each major architecture decision was made, including trade-offs and alternatives considered.

---

## Core Framework Decisions

### Decision: Next.js 16 (Not Gatsby, Astro, or Remix)

**Choice:** Next.js 16 with App Router

**Rationale:**
- **Production-Ready:** Latest stable release with all modern features
- **Optimal for Marketing Sites:** Server Components reduce JavaScript sent to browser
- **Vercel Native:** Built by creators, deployment is seamless
- **TypeScript Support:** First-class, strict mode out of the box
- **No Learning Curve:** Team already familiar with Next.js ecosystem
- **SEO Excellence:** Built-in optimizations for search engines
- **Multi-Language Ready:** next-intl designed specifically for Next.js

**Alternatives Considered:**

| Framework | Pros | Cons | Decision |
|-----------|------|------|----------|
| **Astro** | Excellent for static sites | Limited interactivity, smaller ecosystem | Not chosen |
| **Gatsby** | Good for blogs | Heavier build process, more opinionated | Not chosen |
| **Remix** | Great DX | Overkill for marketing site | Not chosen |
| **Next.js** | Best all-around | **CHOSEN** | ✓ Selected |

**Trade-offs:**
- More JavaScript framework than pure static HTML
- Mitigation: Use Server Components to minimize client JS
- SEO/Performance: Excellent, no trade-off

**Decision Quality:** HIGH - Clear winner for this project type

---

### Decision: React 19 (Latest Version)

**Choice:** React 19.x

**Rationale:**
- **Server Components:** Build more with less JavaScript
- **Latest Features:** Actions, useFormStatus hook for forms
- **TypeScript:** Better type inference for props
- **Performance:** Automatic batching, better scheduling
- **Ecosystem:** All libraries support React 19 now

**Why Latest vs Stable (v18)?**
- No production issues reported in v19
- Performance improvements are meaningful
- Form handling benefits from useFormStatus
- Development experience is superior

**Trade-offs:**
- No trade-offs for MVP (v19 is stable, well-tested)
- Migration path clear if issues found

**Decision Quality:** HIGH - React 19 is mature enough and future-proof

---

### Decision: TypeScript Strict Mode (Not Loose)

**Choice:** TypeScript 5.9+ with strict mode enabled

**Configuration:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

**Rationale:**
- **Catch Errors Early:** Type errors found at compile-time, not runtime
- **Self-Documenting:** Code is its own documentation
- **Refactoring Safety:** IDE can confidently rename/move code
- **Performance:** No runtime type-checking needed
- **Team Consistency:** Clear contracts between modules

**Why Strict Over Loose?**
- Strict mode only adds 5-10% development time
- Saves 100+ hours in bug hunting during development
- Makes code review easier (types validate intent)
- Better long-term maintainability

**Trade-offs:**
- Initial learning curve for junior developers
- Slightly longer to write first version
- Benefit: Much faster to extend/maintain afterward

**Decision Quality:** HIGH - Strict TypeScript is industry best practice

---

## Database Decisions

### Decision: Supabase Direct Client (Not Prisma/DrizzleORM)

**Choice:** Supabase client + manual TypeScript types

**Rationale for MVP:**
- **3 Simple Tables Only:** No complex relationships requiring ORM
- **Fast Setup:** 15 minutes vs 2+ hours for ORM setup
- **No Over-Engineering:** ORM adds layers not needed for MVP
- **Direct Control:** Raw SQL when needed for performance
- **Type Safety:** Manual types simple for 3 tables
- **Cost:** Zero additional cost vs ORM dependency

**When ORM Would Be Better:**
- 10+ tables with complex relationships
- Advanced query features (nested loads, pagination)
- Team preference for ORM pattern
- **Time to add Prisma:** ~8 hours post-MVP

**Alternatives Considered:**

| Solution | Setup Time | Tables | Learning | Decision |
|----------|-----------|--------|----------|----------|
| **DrizzleORM** | 4h | Good for <20 | High | Not now |
| **Prisma** | 3h | Best for <100 | High | Not now |
| **Supabase Client** | 0.5h | Adequate for <5 | Low | **CHOSEN** ✓ |

**Why Not Django, Rails, Laravel?**
- Would require backend language change
- Next.js + Node.js ecosystem is team's strength
- Too much overkill for marketing site
- Deployment complexity increases

**Trade-offs:**
- Manual TypeScript types (5 minutes to write)
- No query builder (write SQL or use client methods)
- Not scalable beyond 10-15 tables
- Benefit: Simple, fast, no abstraction overhead

**Migration Path:**
```
MVP (3 tables) →
  If >10 tables needed → Add Prisma (8h) →
  Migrate types → Continue development
```

**Decision Quality:** HIGH - Pragmatic for MVP, clear upgrade path

---

### Decision: Remove Clerk Authentication

**Choice:** No authentication in MVP

**Rationale:**
- **No Customer Accounts Needed:** Public website only
- **No Access Control:** No premium tiers or gated content
- **MVP Scope:** Not in initial feature set
- **Time Savings:** Removes 8+ hours of setup/configuration
- **Reduced Complexity:** No JWT tokens, session management
- **Privacy Simpler:** No customer data to store long-term

**When to Add Auth Post-MVP:**
- Customer appointment history feature
- Admin dashboard for managing submissions
- Personalized recommendations
- **Estimated effort:** 8 hours with Supabase Auth

**Why Not Clerk (Would Add):**
- Great product, but unnecessary for MVP
- Adds complexity without user benefit
- Can always add later (Supabase Auth even simpler)
- Cost: Free tier to $20+/month when scaled

**Trade-offs:**
- Can't build customer portal in MVP
- No user accounts/profiles initially
- Benefit: Ship faster, simpler codebase

**Future Integration:**
```
MVP (public) →
  Post-MVP (add Supabase Auth) →
  Customer portal feature →
  Admin dashboard
```

**Decision Quality:** HIGH - Correct MVP scope decision

---

### Decision: PostgreSQL Constraints vs Application Validation

**Choice:** Both - Database constraints AND Zod validation

**Implementation:**
```sql
-- Database constraint example
CREATE TABLE appointments (
  locale TEXT DEFAULT 'lv'
    CHECK (locale IN ('lv', 'en', 'ru'))
);
```

```typescript
// Application validation (Zod)
const schema = z.object({
  locale: z.enum(['lv', 'en', 'ru']),
});
```

**Rationale:**
- **Defense in Depth:** Multiple validation layers
- **Data Integrity:** Database prevents invalid data even if app bypassed
- **User Feedback:** Zod provides friendly error messages
- **Performance:** Client-side validation catches errors before server
- **Security:** Server-side validation prevents malicious data

**Validation Layers:**
1. **Client-side (Browser):** React Hook Form + Zod (UX)
2. **Server-side (API):** Zod validation again (security)
3. **Database:** CHECK constraints (data integrity)

**Why Three Layers?**
- Layer 1: Good UX (instant feedback)
- Layer 2: Security (prevent attack vectors)
- Layer 3: Integrity (prevent broken data)

**Trade-offs:**
- Slightly more code to maintain
- Benefit: Bulletproof validation
- No performance penalty (validation is fast)

**Decision Quality:** HIGH - Industry best practice for data integrity

---

## Email & Communication Decisions

### Decision: Resend (Not SendGrid, AWS SES, Mailgun)

**Choice:** Resend for transactional email

**Rationale:**
- **React Email Templates:** Type-safe, component-based, versioned
- **Modern API:** Excellent developer experience
- **Free Tier:** 3,000 emails/month (MVP sufficient)
- **Reliable:** 99.99% uptime SLA
- **Built by Vercel:** Optimized for Next.js
- **Cost-Effective:** Same as competitors, better DX

**Alternatives Compared:**

| Service | Free/Month | React Templates | Cost | Decision |
|---------|-----------|-----------------|------|----------|
| **Resend** | 3,000 | Yes ✓ | $20+ | **CHOSEN** ✓ |
| **SendGrid** | 100 | No | $20+ | Considered |
| **AWS SES** | 62,000 | No | $0.10/1000 | Too complex |
| **Mailgun** | 5,000 | No | $19+ | Good backup |

**Why React Email Templates?**
- Write emails as React components (type-safe)
- Version control (emails in Git)
- Easy multi-language support (props)
- No HTML/CSS template nightmares
- Better maintenance over time

**Example Template:**
```typescript
interface ContactConfirmationEmailProps {
  name: string;
  locale: 'lv' | 'en' | 'ru';
}

export function ContactConfirmationEmail(
  props: ContactConfirmationEmailProps
) {
  const text = {
    lv: { subject: 'Paldies jūsu vēstulei', body: '...' },
    en: { subject: 'Thank you for your message', body: '...' },
    ru: { subject: 'Спасибо за ваше сообщение', body: '...' },
  };

  return (
    <Html>
      <Body>{text[props.locale].body}</Body>
    </Html>
  );
}
```

**Trade-offs:**
- 3,000 email/month limit (upgrade for more)
- Depends on Resend service (fallback: Mailgun)
- Benefit: Superior DX, easier maintenance

**Backup Plan:**
If Resend has issues → Switch to Mailgun (1 hour migration)

**Decision Quality:** HIGH - Best balance of DX and functionality

---

### Decision: Google Calendar API (Not Calendly, external service)

**Choice:** Direct Google Calendar API integration

**Rationale:**
- **Direct Control:** No third-party widget overhead
- **Free to Use:** Google Calendar API is free
- **Team Visibility:** Events appear in team's Google Calendar
- **Availability Checking:** Can check free/busy slots
- **Professional:** Calendar link sent in confirmation email

**Alternatives Considered:**

| Solution | Cost | Setup | Control | Decision |
|----------|------|-------|---------|----------|
| **Calendly** | $12/mo | 10min | Limited | Not chosen |
| **Acuity** | $15/mo | 20min | Good | Not chosen |
| **Google API** | Free | 1h | Full | **CHOSEN** ✓ |

**Why Not Calendly?**
- $12+/month cost (Google API free)
- Limited customization
- Extra service to manage
- Overkill for simple appointment booking

**Why Not Third-Party Widget?**
- Want to keep data in house (Supabase)
- Full control over user experience
- Can add custom business logic
- Reduces external dependencies

**Setup Effort:** ~1 hour one-time for OAuth credentials

**Trade-offs:**
- More implementation work upfront (1h vs 10min)
- Need to handle OAuth 2.0
- Benefit: Full control, no recurring cost, direct data flow

**Decision Quality:** HIGH - Right balance of DIY vs outsourced

---

## Monitoring & Analytics Decisions

### Decision: PostHog Over Google Analytics

**Choice:** PostHog for analytics

**Rationale:**
- **1M Events/Month Free:** vs GA4 limited
- **Session Replay:** See exactly what users do (debugging)
- **GDPR Compliant:** Important for Latvia/EU
- **Privacy-First:** No creepy Google tracking
- **Feature Flags:** A/B testing ready for future
- **API Access:** Can export data, automate

**Comparison Table:**

| Feature | PostHog | GA4 |
|---------|---------|-----|
| **Free events/month** | 1,000,000 | Limited (~10K) |
| **Session replay** | Yes | No |
| **Feature flags** | Yes | No |
| **GDPR friendly** | Yes | Questionable |
| **API access** | Full | Limited |
| **Cost** | Generous free tier | Free/limited |

**Why PostHog Better for EU?**
- GDPR compliant (data privacy)
- No third-party tracking concerns
- Data residency options (Europe)
- Can self-host if needed (post-MVP)

**What We'll Track:**
1. Page views and flow
2. Form submissions (contact, appointment)
3. Language selection distribution
4. Device types and browsers
5. Bounce rates and session duration
6. Conversion funnels (view → contact → follow-up)

**Trade-offs:**
- Slightly less mature than GA4
- Smaller ecosystem of integrations
- Benefit: Better privacy, more features, future-proof

**Future Migration:**
If ever need GA4 → Can run both in parallel (easy to migrate)

**Decision Quality:** HIGH - Better for privacy-conscious European company

---

### Decision: Sentry for Error Tracking

**Choice:** Sentry (keep from boilerplate)

**Rationale:**
- **5,000 Errors/Month Free:** Sufficient for MVP
- **Session Replay:** Context for understanding errors
- **Source Maps:** Debug minified production code
- **Alerts:** Notifications for critical errors
- **Integrations:** Works with everything

**Why Not Datadog, New Relic, etc?**
- Overkill for MVP (cost >$50/month)
- Sentry covers 90% of needs
- Can upgrade if complexity grows
- **Cost:** Free tier for 5K errors/mo

**What We'll Monitor:**
1. Unhandled exceptions
2. API errors (500s)
3. Form validation errors (client-side)
4. Performance issues
5. Third-party service failures

**Setup Time:** 30 minutes (already in boilerplate)

**Trade-offs:**
- Limited to 5K errors/month (upgrade if exceeded)
- Simpler than enterprise solutions
- Benefit: Perfect for MVP, easy to expand

**Decision Quality:** HIGH - Right-sized tool for current needs

---

## Security Decisions

### Decision: Arcjet Rate Limiting + Bot Detection

**Choice:** Arcjet for all security layers

**Rationale:**
- **1M Requests/Month Free:** More than enough for MVP
- **Multiple Rules:** Rate limiting, bot detection, DDoS protection
- **Easy Setup:** Works with Next.js middleware
- **Simple:** No complex configuration needed
- **Cost:** Free tier generous (upgrade to paid if needed)

**Rate Limits Configured:**
- Contact form: 5 submissions per minute per IP
- Appointment booking: 3 per hour per IP
- Service request: 5 per hour per IP

**Bot Detection Rules:**
- Block known bad bots (scrapers, malware)
- Block automated traffic
- Alert on suspicious patterns

**Why Arcjet vs WAF (Web Application Firewall)?**
- WAF: Enterprise solution, >$50/month
- Arcjet: Designed for developers, free tier
- Arcjet: Already handles 99% of our needs
- Upgrade path: Can add WAF later if needed

**Setup Time:** 2 hours (includes testing)

**Trade-offs:**
- Some legitimate traffic might be blocked (false positives)
- Mitigation: Whitelist trusted IPs
- Benefit: Spam prevention, bot protection, free

**Decision Quality:** HIGH - Right security tool for developer-focused MVP

---

## Testing Strategy Decision

### Decision: Vitest + Playwright (Not Jest + Cypress)

**Choice:** Vitest for unit tests, Playwright for E2E

**Rationale:**

**Vitest Benefits:**
- **Jest Compatible:** Team knows Jest syntax
- **Vite-Based:** Much faster test execution
- **ESM Native:** Better for modern JavaScript
- **React Testing Library:** Works identically

**Playwright Benefits:**
- **Multi-Browser:** Test Chrome, Firefox, Safari
- **Modern:** Better API than Cypress
- **Reliable:** Waits are handled automatically
- **Debugging:** Built-in UI for stepping through tests
- **Screenshots/Videos:** Record test failures

**Alternatives Compared:**

| Tool | Speed | Debuggability | Cost | Decision |
|------|-------|---------------|------|----------|
| **Jest + Cypress** | Slow | OK | Free | Previous choice |
| **Vitest + Playwright** | Fast | Excellent | Free | **CHOSEN** ✓ |
| **Mocha + Puppeteer** | OK | Poor | Free | Outdated |

**Performance Difference:**
- Jest: Full test suite ~60 seconds
- Vitest: Full test suite ~10 seconds
- 5x faster feedback loop = 5x more productive

**Trade-offs:**
- Slightly smaller ecosystem than Jest/Cypress
- Less StackOverflow answers available
- Benefit: Much faster, better DX, modern tools

**Decision Quality:** HIGH - Clear upgrade from Jest/Cypress

---

## Code Quality Decisions

### Decision: Keep ESLint + Prettier (Industry Standard)

**Choice:** ESLint (linting) + Prettier (formatting)

**Rationale:**
- **ESLint:** Catch errors and bad practices
- **Prettier:** Consistent code style (no debates)
- **Lefthook:** Prevent broken code reaching repo
- **Commitlint:** Enforce conventional commits

**Why Both Tools?**
- ESLint: Catches logical errors (unused vars, etc)
- Prettier: Formats code (indentation, quotes, etc)
- Not competing - complementary tools

**Configuration:**
- ESLint: Next.js rules + Tailwind + Antfu preset
- Prettier: 2-space indentation, single quotes, 80 char line

**Trade-offs:**
- Initial setup time (already done in boilerplate)
- Might disagree with formatting initially
- Benefit: Consistent code quality, team alignment

**Decision Quality:** HIGH - Industry best practice

---

## Removed Components Decisions

### Decision: Remove Clerk Authentication

**Already Covered Above** - MVP doesn't need auth

---

### Decision: Remove DrizzleORM

**Already Covered Above** - Supabase client sufficient for 3 tables

---

### Decision: Remove Storybook

**Choice:** Not needed for MVP

**Rationale:**
- **Not Building Component Library:** Marketing site, not design system
- **Overkill:** Vitest + Playwright sufficient for testing
- **Maintenance Burden:** Extra tool to keep updated
- **Time Saving:** 4-6 hours of setup/config

**When to Add Post-MVP:**
- Building reusable component library
- Team grows and needs shared components
- Need visual regression testing
- Design system documentation

**Alternative:** Living Styleguide (simpler, post-MVP)

**Decision Quality:** HIGH - Correct MVP scope

---

### Decision: Remove Codecov

**Choice:** Not needed for MVP

**Rationale:**
- **Vitest Built-in Coverage:** `npm run test:coverage`
- **Can Export to Codecov:** Later if needed
- **Reduces Dependencies:** One less external service
- **No Premium Required:** Coverage tracking optional

**When to Add:**
- Coverage goals enforced in CI/CD
- Team needs metrics dashboard
- Enterprise requirements

**Setup Time if Needed:** 15 minutes

**Decision Quality:** HIGH - Coverage tracking optional for MVP

---

## Deployment Decision

### Decision: Vercel (Not AWS, Netlify, etc.)

**Choice:** Vercel for deployment

**Rationale:**
- **Next.js Native:** Built by Next.js creators
- **One-Click Deployment:** Push to GitHub → Live
- **Edge Functions:** API routes at edge for low latency
- **Built-in Analytics:** Monitoring included
- **Free Tier:** Sufficient for MVP
- **Automatic HTTPS:** No certificate management
- **CDN:** Global distribution included

**Alternatives Compared:**

| Platform | Setup | Free Tier | Next.js | Decision |
|----------|-------|----------|---------|----------|
| **Vercel** | 5min | Good | Native | **CHOSEN** ✓ |
| **AWS** | 30min | Complex | Possible | Too complex |
| **Netlify** | 10min | OK | Possible | Good alternative |
| **Self-hosted** | 2h | Free | Yes | DevOps overhead |

**Why Vercel Over Netlify?**
- Better Next.js optimization
- Edge Functions included (vs premium)
- Monitoring better integrated
- Same free tier

**Why Not Self-Hosted?**
- DevOps overhead for 1-2 person team
- Security management responsibility
- Scaling complexity
- Vercel handles all that

**Cost:**
- **Hobby Plan:** Free (sufficient for MVP)
- **Pro Plan:** $20/month (if traffic exceeds limits)

**Upgrade Trigger:** If bandwidth exceeds 100GB/month

**Decision Quality:** HIGH - Perfect balance of simplicity and power

---

## Summary of Decision-Making Process

### Decision Framework Used:

1. **MVP-First:** Focus on shipping quickly
2. **Team Strengths:** Leverage existing knowledge (Next.js, React)
3. **Pragmatism:** Choose right tools, not trendy ones
4. **Clear Upgrade Paths:** Can always add complexity later
5. **Cost-Conscious:** Free tiers for all tools where possible

### Scorecard of Decisions:

| Decision | Confidence | Reversibility | Trade-off Ratio |
|----------|-----------|---------------|-----------------|
| Next.js 16 | HIGH | Easy | Excellent |
| Supabase Direct | HIGH | 8h to add ORM | Good |
| No Auth MVP | HIGH | Easy (8h post-MVP) | Good |
| Resend Email | HIGH | 1h to switch | Good |
| PostHog Analytics | HIGH | Easy (run both) | Good |
| Vercel Deploy | HIGH | 2h to AWS | Excellent |
| Vitest+Playwright | MEDIUM | 4h to switch | Good |
| Arcjet Security | HIGH | 3h to WAF | Good |

### Overall Assessment:

**85% HIGH confidence decisions**
**Clear upgrade paths for all trade-offs**
**Estimated 51 hours to MVP delivery**
**Future-proof architecture**

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** All major decisions justified and documented
