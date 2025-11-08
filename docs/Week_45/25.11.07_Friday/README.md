# Week 45, Friday November 7, 2025 - TEG Next.js Documentation

This folder contains comprehensive documentation for the TEG website redesign Next.js folder structure research and planning.

## Documents in This Series (3 Files, 1,951 Lines Total)

### 1. Main Planning Document (1,116 lines)
**File:** `25.11.07_21:47_nextjs-folder-structure-planning.md`

The comprehensive reference document covering:
- Complete Next.js 15 + React 19 folder structure
- Dynamic locale routing for 3 languages (lv, en, ru)
- Sanity CMS integration patterns with GROQ queries
- Supabase database and authentication setup
- API route organization with validation patterns
- 7-phase implementation roadmap (13 weeks)
- Performance optimization targets and strategies
- Security best practices and OWASP guidelines
- Development workflow and deployment checklist

**Use This For:** Detailed implementation guidance, folder structure reference, code patterns, and long-term planning.

---

### 2. Implementation Summary (Quick Reference)
**File:** `25.11.07_21:48_implementation-summary.md`

Quick reference guide with:
- Folder structure at a glance
- Three key architectural concepts
- 7-phase implementation checklist
- Critical file locations table
- Environment variables needed
- Technology stack summary
- Performance targets (Core Web Vitals)
- Language support status
- Key integration points
- Common code patterns with examples

**Use This For:** Daily reference, quick lookups, team briefings, and status tracking.

---

### 3. Architecture Diagrams
**File:** `25.11.07_21:49_architecture-diagrams.md`

Visual diagrams and flow charts for:
1. Multi-language routing architecture (middleware flow)
2. Data flow from frontend to backend
3. CMS to page rendering pipeline
4. Component hierarchy tree
5. Supabase database schema
6. Build & deployment pipeline
7. Language fallback strategy
8. SEO & structured data implementation
9. Performance optimization flow
10. Error handling & recovery
11. Real-time monitoring dashboard

**Use This For:** Visual understanding, architecture discussions, presentations, and onboarding new developers.

---

## Quick Navigation

### For Project Leads
1. Start with: `25.11.07_21:48_implementation-summary.md`
2. Review: 7-phase checklist and timeline
3. Reference: `25.11.07_21:47_nextjs-folder-structure-planning.md` for details

### For Developers
1. Start with: `25.11.07_21:47_nextjs-folder-structure-planning.md`
2. Keep handy: `25.11.07_21:48_implementation-summary.md` (bookmarked)
3. Refer to: `25.11.07_21:49_architecture-diagrams.md` when designing components

### For Architecture Review
1. Review: `25.11.07_21:49_architecture-diagrams.md`
2. Check: Database schema and data flow diagrams
3. Validate: Against research findings in obsidian_notes

---

## Key Information at a Glance

### Project Timeline
- **Total Duration:** 13 weeks
- **Phase 1 (Foundation):** Weeks 1-2
- **Phase 2 (Core Pages):** Weeks 3-4
- **Phase 3 (Booking):** Weeks 5-6
- **Phase 4 (Content & Language):** Weeks 7-8
- **Phase 5 (SEO/Performance):** Weeks 9-10
- **Phase 6 (Testing):** Weeks 11-12
- **Phase 7 (Launch):** Week 13

### Technology Stack
```
Frontend:  Next.js 15 + React 19 + TypeScript + TailwindCSS
Backend:   Sanity CMS + Supabase + SendGrid
Deploy:    Vercel
Monitor:   Sentry + Google Analytics 4
```

### Multi-Language Status
- **Latvian (lv):** 100% Complete ✅ (Production-ready)
- **English (en):** 40% Complete 🔴 (Needs Phase 4)
- **Russian (ru):** Limited (2 pages) 🟡 (Phase 4 task)

### Performance Targets
```
LCP:  < 2.5s  (Largest Contentful Paint)
FID:  < 100ms (First Input Delay)
CLS:  < 0.1   (Cumulative Layout Shift)
FCP:  < 1.8s  (First Contentful Paint)
```

### Folder Structure (Top Level)
```
src/
├── app/[locale]/         # Multi-language routing
├── components/           # Reusable UI & features
├── lib/                  # Utilities, hooks, clients
├── styles/               # Global CSS
└── content/              # Static content (fallback)
```

---

## Cross-References

### Related Research Documentation
- **Page Structure:** `/obsidian_notes/Projects/TEG/research/analysis/current-page-structure.md`
- **Technical Analysis:** `/obsidian_notes/Projects/TEG/research/technical-analysis/comprehensive-tech-stack-analysis.md`
- **Page Copy (All Languages):** `/obsidian_notes/Projects/TEG/research/page-copy/`
- **Research Summary:** `/obsidian_notes/Projects/TEG/research/RESEARCH-SUMMARY.md`

### Project Files
- **Project Guidelines:** `/home/fivefingerdisco/Projects/TEG_001/CLAUDE.md`
- **Docs Index:** `/home/fivefingerdisco/Projects/TEG_001/docs/README.md`

---

## Implementing from These Docs

### Step 1: Setup (Phase 1)
1. Read: Implementation Summary (checklist section)
2. Reference: Main Planning Doc (configuration files)
3. Create: Next.js project, configure TypeScript, setup Tailwind

### Step 2: Build (Phases 2-4)
1. Reference: Folder structure from Main Planning Doc
2. Use: Code examples and patterns from summary
3. Verify: Architecture diagrams match your design

### Step 3: Integrate (Phase 3+)
1. Check: Data flow diagrams for API integration
2. Follow: Database schema from architecture diagrams
3. Implement: Sanity queries from examples

### Step 4: Deploy (Phase 7)
1. Review: Build & deployment pipeline diagram
2. Use: Environment variables checklist
3. Monitor: Real-time monitoring dashboard setup

---

## Common Questions Answered

**Q: Where should I put components?**
A: See folder structure in Main Doc. UI components in `src/components/ui/`, feature-specific in `src/components/features/`.

**Q: How does i18n routing work?**
A: See diagram #1 in Architecture Doc. Middleware detects locale and routes to `[locale]` dynamic segment.

**Q: How do I fetch content from Sanity?**
A: See diagram #3 in Architecture Doc and code examples in Main Doc (`lib/sanity/queries/`).

**Q: What's the approval workflow for new pages?**
A: Create in Sanity, query with GROQ, render in Next.js, validate with types. See data flow diagram.

**Q: How should forms be handled?**
A: React Hook Form + Zod validation client-side, API route validation server-side. See data flow diagram.

**Q: Where are API endpoints documented?**
A: Main Planning Doc section "API Route Patterns" with examples for appointments, contact, auth.

---

## Maintenance & Updates

**Document Version:** 1.0
**Created:** 2025-11-07
**Last Updated:** 2025-11-07 21:49 (Riga Time)
**Status:** Complete & Production-Ready

### Future Updates
- Phase 1 completion → Update implementation status
- Phase 2-7 completions → Add lessons learned
- Performance metrics → Update with actual data
- Language progress → Track Latvian/English/Russian completion

---

## Document Statistics

| Document | Lines | Size | Focus |
|----------|-------|------|-------|
| Main Planning | 1,116 | 36 KB | Comprehensive reference |
| Quick Summary | 317 | 7.0 KB | Daily reference |
| Architecture | 518 | 27 KB | Visual & conceptual |
| **Total** | **1,951** | **70 KB** | Complete coverage |

---

**Created by:** Claude Code
**Timestamp:** 2025-11-07 21:49 (Riga Time, UTC+2)
**Project:** TEG (Transporta Ekspertu Grupa) - Website Redesign
**Phase:** Research Complete → Planning & Development Prep
