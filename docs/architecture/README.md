# TEG Architecture Documentation

Complete planning and architecture documentation for TEG (Transporta Ekspertu Grupa) website redesign.

## Overview

This directory contains comprehensive documentation of all architectural decisions, technology selections, and implementation strategies for the TEG website migration from deprecated Frontity framework to modern Next.js stack.

**Project Status:** Planning phase complete, theme finalized, ready for implementation

## Quick Navigation

| Document | Purpose |
|----------|---------|
| **[01-project-overview.md](./01-project-overview.md)** | Project scope, goals, timeline, and success criteria |
| **[02-tech-stack-decisions.md](./02-tech-stack-decisions.md)** | Complete technology stack with rationale for each choice |
| **[03-architecture-overview.md](./03-architecture-overview.md)** | System architecture, data flows, and component structure |
| **[04-database-schema.md](./04-database-schema.md)** | Database tables, relationships, and security policies |
| **[05-decision-rationale.md](./05-decision-rationale.md)** | Detailed explanation of why major decisions were made |
| **[06-implementation-timeline.md](./06-implementation-timeline.md)** | Phase-by-phase implementation schedule and hour estimates |
| **[07-environment-variables.md](./07-environment-variables.md)** | All required environment variables and configuration |

## Key Facts at a Glance

**Project Name:** TEG (Transporta Ekspertu Grupa)

**Business:** Automotive inspection and services company in Latvia

**Current Challenge:** Website uses discontinued Frontity framework - security risk, performance issues, no longer maintained

**Solution:** Ground-up redesign using modern Next.js 16 stack

**Timeline:** 51 hours estimated = 6-7 days intensive development

**MVP Scope:**
- Multi-language public website (Latvian, English, Russian)
- Three service offerings with dedicated pages
- Contact forms, appointment booking, service requests
- Email notifications, Google Calendar integration
- SEO optimization, error tracking, analytics

**Deployment:** Vercel

## Technology Stack (Executive Summary)

| Layer | Technology | Decision |
|-------|-----------|----------|
| **Frontend Framework** | Next.js 16 (App Router) + React 19 | KEEP |
| **Language** | TypeScript 5.9+ (strict mode) | KEEP |
| **Styling** | TailwindCSS 4 | KEEP |
| **Design System** | shadcn/ui + Supabase Theme (tweakcn) | CONFIRMED |
| **Internationalization** | next-intl (lv, en, ru) | KEEP + CONFIGURE |
| **Form Management** | react-hook-form + Zod | KEEP |
| **Database** | Supabase PostgreSQL | CHANGE |
| **Email Service** | Resend (React Email) | ADD |
| **Calendar API** | Google Calendar API | ADD |
| **Error Tracking** | Sentry | KEEP |
| **Analytics** | PostHog | KEEP |
| **Security** | Arcjet (rate limiting, bot protection) | KEEP |
| **Testing** | Vitest + Playwright | KEEP |
| **Code Quality** | ESLint, Prettier, Lefthook | KEEP |
| **Deployment** | Vercel | KEEP |

**Modules Analysis:** 47 modules from boilerplate analyzed
- Keep: 18 modules (38%)
- Remove: 15 modules (32%)
- Configure: 9 modules (19%)
- Defer: 5 modules (11%)

## Architecture Highlights

### Multi-Language Support
- **Default locale:** Latvian (`/lv/`)
- **URL structure:** `/lv/`, `/en/`, `/ru/`
- **Powered by:** next-intl with i18n-check validation
- **Translation status:** Latvian 100%, English 40%, Russian limited

### Data Persistence
- **Primary:** Supabase PostgreSQL (3 tables)
  - `appointments` - booking system
  - `contact_submissions` - contact forms
  - `service_requests` - quick callbacks
- **Row Level Security:** Public insert, future auth for admin panel

### Communication Channels
- **Email:** Resend with multi-language React Email templates
- **Calendar:** Google Calendar API for instant booking sync
- **Forms:** react-hook-form with Zod validation

### Monitoring & Security
- **Errors:** Sentry (5K events/month free)
- **Analytics:** PostHog (1M events/month free + session replay)
- **Security:** Arcjet (rate limiting, bot detection, 1M req/mo free)

## Implementation Phases

1. **Boilerplate Cleanup** (8h) - Remove unnecessary modules
2. **Environment & Configuration** (6h) - Setup secrets, i18n, theme
3. **Database & Backend** (10h) - Supabase, Resend, Google Calendar
4. **Forms Implementation** (12h) - All user-facing forms
5. **SEO & Content** (10h) - Metadata, structured data, privacy
6. **Testing & QA** (5h) - Comprehensive testing all languages

**Total: 51 hours (6-7 days)**

## Success Criteria

✓ All three services properly documented with pricing
✓ Multi-language support working flawlessly (lv, en, ru)
✓ Forms functional with validation and email confirmations
✓ Google Calendar integration working
✓ SEO optimized with structured data
✓ Error tracking and analytics operational
✓ Zero security vulnerabilities
✓ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

## Post-MVP Roadmap (Deferred)

- Sanity CMS integration for blog
- Admin dashboard for appointment management
- Advanced logging and observability
- Enhanced Russian language coverage
- Customer portal with appointment history
- Live chat functionality
- FAQ section with AI chatbot

## Contact & Resources

**Client:** TEG (Transporta Ekspertu Grupa)
- **Website:** https://www.teg.lv
- **Phone:** +371 25 201 710
- **Email:** info@teg.lv
- **Hours:** Mon-Sat, 9:00 AM - 8:00 PM

**Project Repository:** /home/fivefingerdisco/Projects/TEG_001/

**Obsidian Vault Context:** /home/fivefingerdisco/Projects/TEG_001/obsidian_notes/Projects/TEG/research/

---

**Documentation Version:** 1.0
**Last Updated:** 2025-11-08
**Next Review:** Upon project completion
