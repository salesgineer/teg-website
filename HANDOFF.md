# HANDOFF: TEG Website Redesign - Phase 1 Execution Ready

## Executive Summary
- **Project:** TEG website redesign & migration from Frontity to Next.js 16
- **Current Phase:** Phase 1 Boilerplate Cleanup ready to execute
- **Timeline:** 50.5 hours total, Phase 1 = 8 hours
- **Status:** Planning complete, theme confirmed, tasks.md ready

---

## What Has Been Completed

### 1. Strategic Planning ✅
- Architecture documents: `/docs/architecture/` (8 comprehensive docs)
- Tech stack finalized: Next.js 16 + React 19 + TypeScript + Supabase + Resend
- Design theme confirmed: Supabase (tweakcn) with Outfit font
- 50.5-hour implementation timeline established

### 2. Tactical Planning ✅
- Spec document: `/agent-os/specs/2025-11-08-new-spec/spec.md` (649 lines)
- Requirements: `/agent-os/specs/2025-11-08-new-spec/planning/requirements.md`
- Tasks breakdown: `/agent-os/specs/2025-11-08-new-spec/tasks.md` (91 tasks, 12 phases)
- Visual assets: `/agent-os/specs/2025-11-08-new-spec/planning/visuals/` (9 screenshots)
- Component specifications (dark mode + 18 shadcn components) ✅
- Theme integration finalized (Supabase via tweakcn + next-themes) ✅

### 3. Decision Resolution ✅
- Theme: Supabase (was conflicting - now resolved)
- Translation strategy: AI-generated placeholders acceptable for MVP (updated in tasks.md v1.1)
- Workflow: tasks.md as execution blueprint (unifies architecture + spec)

### 4. Codebase Analysis ✅
- Boilerplate cleanup targets identified (25 files, 14 packages, 9 scripts, 3 configs)
- Research-coordinator analysis complete

### 5. Documentation Updates ✅
- Architecture docs updated with theme decision
- tasks.md updated to v1.1 (translation requirements relaxed, 48.5h timeline)
- CLAUDE.md updated with Agent-OS workflow integration

---

## Current State

### Git Status
```
Current branch: main
Untracked files:
  agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/
  agent-os/specs/2025-11-08-new-spec/planning/requirements.md
  agent-os/specs/2025-11-08-new-spec/spec.md
```

### Todo List Status
1. ✅ Update architecture docs with Supabase theme decision
2. 🔄 Execute Task Group 1.1: Boilerplate Cleanup (8h) - READY TO START

### Key Files Ready
- `/agent-os/specs/2025-11-08-new-spec/tasks.md` - PRIMARY EXECUTION BLUEPRINT (91 tasks, 50.5 hours)
- `/docs/architecture/` - Complete strategic documentation
- `/agent-os/specs/2025-11-08-new-spec/spec.md` - Detailed feature specification

---

## Next Steps: Execute Phase 1

### Immediate Action Required

**Execute Task Group 1.1: Boilerplate Cleanup (8 hours)**

Reference: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/tasks.md` (lines 27-73)

### Execution Method: Agent-OS Implementer (RECOMMENDED)

**Primary Coordinator:** `implementer` agent

**Provide implementer with:**
- Spec location: `/agent-os/specs/2025-11-08-new-spec/`
- Execute: Task Group 1.1 (lines 27-73 in tasks.md)
- Use nested delegation: implementer → general-purpose sub-subagents

### Task Group 1.1 Breakdown (8 hours total)

#### 1.1.1: Remove Clerk Authentication (2h)
**Files to Delete:**
- `src/app/[locale]/(auth)/` - entire directory (sign-in, sign-up pages)

**Files to Modify:**
- `src/middleware.ts` - remove Clerk logic, keep i18n + Arcjet
- `src/utils/AppConfig.ts` - remove ClerkLocalizations references

**Packages to Uninstall:**
- `@clerk/nextjs`
- `@clerk/types`

**Verification:**
- Run `npm run build` - must succeed
- Search codebase: no "clerk" references remain

---

#### 1.1.2: Remove DrizzleORM (1h)
**Files to Delete:**
- `drizzle.config.ts`
- `src/migrations/` - entire directory
- `src/models/Schema.ts`
- `src/libs/DB.ts`

**Files to Modify:**
- `next.config.ts` - remove `serverComponentsExternalPackages: ['@libsql/client']`

**Packages to Uninstall:**
- `drizzle-orm`
- `drizzle-kit`
- `@libsql/client`
- `pg`

**Verification:**
- No "drizzle" references in codebase
- Build succeeds without database config

---

#### 1.1.3: Remove Unnecessary Modules (2h)
**Files to Delete:**
- `.storybook/` - entire directory
- `src/templates/BaseTemplate.stories.tsx`
- `src/components/**/*.stories.tsx` - all story files

**Packages to Uninstall (7 total):**
- `@storybook/addon-essentials`
- `@storybook/addon-interactions`
- `@storybook/addon-links`
- `@storybook/blocks`
- `@storybook/nextjs`
- `@storybook/react`
- `@storybook/test`

**Remove These References:**
- Codecov integration
- Visual regression testing config
- Stripe integration (if present)
- Docker configs (if unused)

**Scripts to Remove from package.json:**
- `storybook`
- `storybook:build`
- `db:generate`
- `db:migrate`
- `db:migrate:dev`
- `db:push`
- `db:pull`
- `db:seed`
- `db:studio`

---

#### 1.1.4: Update GitHub Actions Workflows (1h)
**File:** `.github/workflows/`

**Remove Steps:**
- Codecov upload steps
- Storybook build steps
- Database migration steps

**Keep Steps:**
- ESLint checks
- TypeScript type checking
- Vitest unit tests
- Next.js build verification

**Add:**
- Vercel auto-deploy configuration (if not present)

---

#### 1.1.5: Remove Crowdin Integration (0.5h)
**Files to Delete:**
- `crowdin.yml`
- Any Crowdin-related scripts

**Verify:**
- i18n works with local JSON files only
- No Crowdin API references in code

---

#### 1.1.6: Clean Demo Pages & Components (1.5h)
**Directories to Delete:**
- `src/app/[locale]/dashboard/` - demo dashboard
- Demo counter components (search for "counter" in codebase)
- Example API routes (keep structure, remove demos)

**Keep:**
- Base layouts (`src/app/[locale]/layout.tsx`)
- UI component library structure
- API route folder structure

**Verify:**
- Homepage still renders
- Layout structure intact
- No broken imports

---

### Acceptance Criteria (ALL MUST PASS)

```
✅ npm run build - succeeds without errors
✅ npm run dev - starts and runs without errors
✅ No Clerk references - rg -i "clerk" --type ts --type tsx returns no results
✅ No Drizzle references - rg -i "drizzle" --type ts --type tsx returns no results
✅ No Crowdin references - rg -i "crowdin" --type ts --type tsx returns no results
✅ Package.json cleaned - no unused packages in dependencies
✅ Locales setup - lv.json, en.json, ru.json exist in locales/
✅ Git status - ready to commit (no build artifacts)
```

---

## Critical References

### Documentation Hierarchy

#### 1. Project Instructions (SUPREME AUTHORITY)
**File:** `/home/fivefingerdisco/Projects/TEG_001/CLAUDE.md`

**Key Sections:**
- **Lines 1-100:** Nested delegation architecture (MANDATORY)
- **Lines 99-183:** Agent-OS workflow integration
- **Lines 185-250:** Tool directives (fd, rg, bat, lsd, etc.)
- **Lines 251-300:** Sherlock Holmes debugging method
- **Lines 301-600+:** Complete project context and TEG specifications

**Critical Rules:**
1. ALWAYS use nested delegation: Main → Coordinator → Executor
2. NEVER execute directly from Main agent (except 4 allowed tools)
3. Use correct tool binaries: `fd`, `rg`, `lsd`, `bat`, `just`, `sd`, `xh`, `uv`
4. Parallel execution: Use `& ... & wait` for independent commands
5. Verify before fixing: Sherlock Holmes debugging - test hypotheses first

---

#### 2. Strategic Planning
**Directory:** `/home/fivefingerdisco/Projects/TEG_001/docs/architecture/`

**Documents:**
- `README.md` - Navigation guide for architecture docs
- `01-project-overview.md` - Goals, timeline, stakeholders, services overview
- `02-tech-stack-decisions.md` - Tech choices with rationale (includes Supabase theme)
- `03-architecture-overview.md` - System diagrams, data flows, component hierarchy
- `04-database-schema.md` - Supabase PostgreSQL schema (3 tables: users, services, appointments)
- `04-implementation-timeline.md` - 6 phases, 50.5-hour breakdown
- `05-decision-rationale.md` - Why each tech choice (theme, languages, tools)
- `06-environment-variables.md` - Required env vars with explanations

---

#### 3. Tactical Execution
**Directory:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/`

**Primary Files:**
- **`tasks.md`** - PRIMARY EXECUTION BLUEPRINT (91 tasks across 12 phases, 50.5 hours)
  - Task Group 1.1: Boilerplate Cleanup (8h) - CURRENT
  - Task Group 2.1: Environment & Configuration (6h)
  - Task Group 2.2: shadcn/ui Setup (2h)
  - Task Group 3.1-3.3: Layout & Navigation (10h)
  - ...continuing through Phase 12

- `spec.md` - Complete feature specification (649 lines)
  - Features breakdown
  - User flows
  - Content requirements
  - Technical constraints

- `planning/requirements.md` - Detailed requirements with Q&A
  - Feature-by-feature breakdown
  - Questions and resolutions
  - Design decisions

- `planning/visuals/theme.md` - Supabase theme CSS variables
  - Color palette
  - Typography (Outfit font)
  - Component styling

- `planning/visuals/TEMP -- TEG Screens/` - 9 screenshots from existing site
  - Homepage layout
  - Services pages
  - Contact forms
  - Mobile views

---

#### 4. Component Architecture
**Directory:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/`

**Key Files:**
- `spec.md` (lines 34-91) - Component specifications and dark mode configuration
- `planning/visuals/theme.md` - Supabase CSS variables and theme integration
- `tasks.md` (lines 97-166, Task Group 2.2) - shadcn/ui setup installation tasks

---

#### 5. Research Context
**Directory:** `/home/fivefingerdisco/Projects/TEG_001/obsidian_notes/Projects/TEG/research/`

**Key Documents:**
- `README.md` - Research navigation guide
- `RESEARCH-SUMMARY.md` - Executive summary of all findings
- `page-copy/latvian/` - Extracted Latvian content (complete, 4.8/5 quality)
- `page-copy/english/` - Partial English content (2/5 quality, needs work)
- `page-copy/russian/` - Limited Russian content (3/5 quality, 2 pages)
- `technical-analysis/comprehensive-tech-stack-analysis.md` - Detailed tech recommendations

---

## Technology Stack (CONFIRMED)

### Frontend Layer
- **Framework:** Next.js 16.0.1 (App Router)
- **Runtime:** React 19.2.0
- **Language:** TypeScript 5.9.3 (strict mode)
- **Styling:** TailwindCSS 4.x
- **UI Components:** Supabase theme (tweakcn)
- **Typography:** Outfit font (0.025em letter-spacing)
- **Internationalization:** next-intl (lv/en/ru)

### Backend & Services
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth (Phase 2)
- **Email:** Resend + React Email
- **Calendar API:** Google Calendar (appointment booking)
- **Security:** Arcjet (rate limiting, bot protection)

### Development Tools
- **Package Manager:** pnpm
- **Forms:** react-hook-form + Zod (validation)
- **Testing:** Vitest + React Testing Library
- **Error Tracking:** Sentry
- **Analytics:** PostHog
- **Deployment:** Vercel (recommended)

### Removed Stack
- ❌ Clerk (authentication) - Using Supabase instead
- ❌ DrizzleORM (ORM) - Direct Supabase client
- ❌ Storybook (component docs)
- ❌ Crowdin (translation service) - Local JSON files

---

## Component Architecture

### shadcn/ui Configuration

**Installation:** Phase 2, Task Group 2.2 (2 hours)

**Configuration File:** `components.json`
```json
{
  "style": "new-york",
  "baseColor": "zinc",
  "cssVariables": true,
  "rsc": true,
  "typescript": true
}
```

**Theme:** Supabase (via tweakcn)
```bash
pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/supabase.json
```

**Dark Mode:** next-themes integration
- ThemeProvider wrapper in root layout
- Mode toggle component in navigation
- System preference detection
- Cookie-based persistence

### Component Inventory (18 Total)

**Form Components (6):**
- `button` - CTA buttons, form submits
- `input` - Text fields (name, email, phone)
- `textarea` - Message field
- `form` - react-hook-form wrapper
- `label` - Accessible labels
- `select` - Service type selector

**Navigation (3):**
- `navigation-menu` - Main navigation
- `sheet` - Mobile hamburger menu
- `dropdown-menu` - Language switcher

**Content (4):**
- `card` - Service/testimonial cards
- `dialog` - Photo gallery lightbox
- `separator` - Section dividers
- `badge` - Pricing callouts

**Feedback (3):**
- `toast` - Form notifications
- `alert` - Error pages
- `alert-dialog` - Cookie consent (GDPR)

**Installation Command:**
```bash
npx shadcn@latest add button input textarea form label select \
  navigation-menu sheet dropdown-menu card dialog separator badge \
  toast alert alert-dialog
```

### Component Specifications Cross-References

- **Detailed specs:** `/agent-os/specs/2025-11-08-new-spec/spec.md` (lines 34-91)
- **Installation tasks:** `/agent-os/specs/2025-11-08-new-spec/tasks.md` (lines 97-166, Task Group 2.2)
- **Theme variables:** `/agent-os/specs/2025-11-08-new-spec/planning/visuals/theme.md`

---

## Multi-Language Requirements

### Three Languages
| Language | Code | Status | Quality | URL |
|----------|------|--------|---------|-----|
| **Latvian** | `lv` | Primary, complete | 4.8/5 | `/lv/` |
| **English** | `en` | Secondary, MVP | 2/5 → upgrade Phase 2 | `/en/` |
| **Russian** | `ru` | Tertiary, basic | 3/5 → expand Phase 2 | `/ru/` |

### URL Structure
- Locale-based routing: `/lv/`, `/en/`, `/ru/`
- Default locale: `/lv/` (Latvian)
- Content structure mirrors across all three languages

### Translation Strategy (Updated v1.1)
- **AI-generated translations acceptable** for MVP deployment
- **No deployment blocker** on translation quality
- **Native speaker review** deferred to post-MVP Phase 2
- **Locales structure:** `locales/lv.json`, `locales/en.json`, `locales/ru.json`

---

## Agent-OS Workflow Instructions

### Nested Delegation Architecture (MANDATORY)

**GOLDEN RULE:** Main → Coordinator → Executor = **20x context savings**

#### Three-Tier Model
```
TIER 1 - MAIN (Strategic)
├─ Spawns coordinators ONLY
├─ Synthesizes results
└─ Makes decisions

TIER 2 - COORDINATOR (Tactical)
├─ example: implementer, research-coordinator, task-planner
├─ Spawns executor sub-subagents
├─ Aggregates results
└─ Returns to Main

TIER 3 - EXECUTOR (Operational)
├─ example: general-purpose, parallel-bash-executor
├─ Executes ALL actual work
└─ Reports back to Coordinator
```

#### For This Task (Phase 1)
```
Main (you)
  → implementer coordinator
    ├─ general-purpose (remove packages) &
    ├─ general-purpose (delete files) &
    ├─ general-purpose (update configs) &
    ├─ general-purpose (update workflows) &
    └─ parallel-bash-executor (verify build) &
    wait → Implementer aggregates → Returns to Main
```

### Agent-OS Spec-Driven Workflow

**Current Position in Workflow:** Phase 3 (Implementation)

**Completed Phases:**
- ✅ **Phase 1 (Planning):** Specification → spec.md created
- ✅ **Phase 2 (Planning):** Requirements → requirements.md created
- ✅ **Phase 3 (Tactical):** Task breakdown → tasks.md created (87 tasks)

**Current Execution Phase:**
- 🔄 **Phase 3 (Implementation):** Start Task Group 1.1
  - Use `implementer` coordinator agent
  - Reference: `/agent-os/specs/2025-11-08-new-spec/tasks.md`
  - Execute: Lines 27-73 (Task Group 1.1: Boilerplate Cleanup)

**After Phase 1 Completion:**
- Task Group 2.1 (Environment & Configuration) - 6 hours
- Task Group 3.1-3.3 (Layout & Navigation) - 10 hours
- Continue sequentially through Task Group 12.2

**Verification Step After Each Phase:**
- Use `implementation-verifier` agent to validate acceptance criteria
- Ensure all verification tests pass
- Commit changes to git before proceeding to next phase

---

## Execution Commands

### Spawn Implementer Agent (RECOMMENDED)

```bash
claude agent spawn implementer << 'EOF'
Objective: Execute Task Group 1.1 - Boilerplate Cleanup (8 hours)

Project Location: /home/fivefingerdisco/Projects/TEG_001/

Specification:
- Spec location: /home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/
- Reference: tasks.md (lines 27-73)
- Execute Task Group 1.1 completely

Subtasks to Execute (in order):
1. Remove Clerk authentication (2h)
   - Delete: src/app/[locale]/(auth)/
   - Modify: src/middleware.ts, src/utils/AppConfig.ts
   - Uninstall: @clerk/nextjs, @clerk/types

2. Remove DrizzleORM (1h)
   - Delete: drizzle.config.ts, src/migrations/, src/models/Schema.ts, src/libs/DB.ts
   - Modify: next.config.ts
   - Uninstall: drizzle-orm, drizzle-kit, @libsql/client, pg

3. Remove unnecessary modules (2h)
   - Delete: .storybook/, all *.stories.tsx files
   - Uninstall: 7 @storybook/* packages
   - Remove: codecov, visual regression, Stripe, Docker configs
   - Scripts to remove: storybook, storybook:build, db:* (9 total)

4. Update GitHub Actions workflows (1h)
   - File: .github/workflows/
   - Remove: codecov, storybook build steps
   - Keep: ESLint, TypeScript, Vitest, Next.js build
   - Add: Vercel auto-deploy

5. Remove Crowdin integration (0.5h)
   - Delete: crowdin.yml, Crowdin scripts
   - Verify: i18n works with local JSON

6. Clean demo pages (1.5h)
   - Delete: src/app/[locale]/dashboard/, counter demos
   - Keep: base layouts, UI components, API structure

Acceptance Criteria (ALL MUST PASS):
✅ npm run build - succeeds
✅ npm run dev - starts without errors
✅ No Clerk/Drizzle/Crowdin references in codebase
✅ package.json cleaned
✅ Locales setup: lv.json, en.json, ru.json exist
✅ GitHub workflows updated
✅ Ready to commit

Use nested delegation: implementer → general-purpose sub-subagents
Run pnpm install after package removals
Run verification commands: npm run build, rg -i "clerk|drizzle|crowdin"
EOF
```

### Alternative: Manual Coordination with web-dev-worker

```bash
claude agent spawn web-dev-worker << 'EOF'
Execute Task Group 1.1: Boilerplate Cleanup

[Use same details as implementer prompt above]

Coordination Strategy:
- Spawn general-purpose executors for each subtask
- Run parallel: package removals, file deletions, config updates
- Wait for all executors to complete
- Run verification steps
- Report back with acceptance criteria status
EOF
```

---

## Critical Reminders

### From CLAUDE.md (MANDATORY)

1. **ALWAYS use nested delegation** (Main → Coordinator → Executor)
   - Never execute directly from Main agent
   - Use coordinators to spawn sub-agents
   - Aggregate results before returning

2. **Use correct tool binaries:**
   - `fd` instead of `find`
   - `rg` instead of `grep`
   - `lsd` instead of `ls`
   - `bat` instead of `cat`
   - `sd` instead of `sed`
   - `just` instead of `npm run` (if justfile exists)

3. **Parallel execution pattern:**
   ```bash
   cmd1 & cmd2 & cmd3 & wait
   ```

4. **Verify before fixing:**
   - Apply Sherlock Holmes debugging method
   - Test hypotheses systematically
   - Confirm root cause explains ALL symptoms
   - Never fix without confirming issue exists

5. **MCP operations MUST be nested:**
   - Main → Coordinator → Executor (NEVER Main → Executor)

### TEG-Specific Reminders

1. **This is a COMPLETE redesign** from legacy Frontity stack
   - Not modifying existing code, building from scratch
   - All boilerplate must be removed first
   - Clean foundation required before TEG implementation

2. **Multi-language is CRITICAL:**
   - Latvian (lv) is primary language
   - English (en) and Russian (ru) required for MVP
   - AI translations acceptable for Phase 1

3. **No dev-server restart** unless explicitly requested
   - Only restart if needed for verification

4. **AI placeholders acceptable** for MVP translations
   - Upgrade translations in Phase 2 with native speakers

5. **Theme is confirmed:** Supabase (tweakcn) with Outfit font
   - Don't change theme selection
   - Use provided CSS variables

---

## After Phase 1 Completion

### Immediate Verification Steps

Execute these commands to verify Phase 1 completion:

```bash
# 1. Install dependencies (if not already done)
pnpm install

# 2. Build verification
npm run build

# 3. Dev server start (allow 30 seconds)
npm run dev &
sleep 30
pkill -f "next dev"

# 4. Search for removed packages
rg -i "clerk" --type ts --type tsx
rg -i "drizzle" --type ts --type tsx
rg -i "crowdin" --type ts --type tsx

# 5. Verify locale files exist
ls -la locales/lv.json locales/en.json locales/ru.json

# 6. Check git status
git status
```

### Checklist Before Next Phase

- [ ] All acceptance criteria passing
- [ ] No build errors
- [ ] Dev server starts successfully
- [ ] No references to Clerk, Drizzle, or Crowdin
- [ ] Locale files ready for configuration
- [ ] Package.json cleaned
- [ ] Ready to commit (or already committed)

---

### Next Phase: Task Group 2.1 - Environment & Configuration (6 hours)

**When Ready:** After Phase 1 acceptance criteria met

**Reference:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/tasks.md` (lines 76-115)

**Key Tasks:**
1. T3 Env type-safe environment setup
2. next-intl multi-language configuration (lv/en/ru)
3. Arcjet security and rate limiting
4. Install Supabase shadcn theme
5. Outfit font integration
6. PostHog analytics setup

**Time Estimate:** 6 hours

---

## Contact Points & Resources

### Client Information
- **Client:** TEG (Transporta Ekspertu Grupa)
- **Website:** https://www.teg.lv
- **Phone:** +371 25 201 710
- **Hours:** Mon-Sat, 9:00 AM - 8:00 PM

### Social Media
- **Instagram:** @teg.auto
- **TikTok:** @teg.auto
- **Facebook:** Transportaekspertugrupa

### Services Overview
1. **Pre-Purchase Car Inspection** (€100+)
   - Engine diagnostics, VIN history, body/paint inspection
   - Coverage: All of Europe
   - Detailed photo reports

2. **Car Search & Delivery** (€350+)
   - Vehicle sourcing, inspection, delivery
   - Documentation assistance

3. **Mobile Roadside Service** (€30+)
   - Error diagnostics, battery testing, jump starts
   - ECU programming, lock/window repair

---

## File Locations Quick Reference

```
/home/fivefingerdisco/Projects/TEG_001/

PROJECT INSTRUCTIONS & GUIDELINES
├── CLAUDE.md                              # Project instructions (SUPREME AUTHORITY)
└── HANDOFF.md                             # This document

STRATEGIC PLANNING (Architecture)
└── docs/architecture/
    ├── README.md                          # Navigation guide
    ├── 01-project-overview.md             # Goals, timeline, stakeholders
    ├── 02-tech-stack-decisions.md         # Tech choices + Supabase theme
    ├── 03-architecture-overview.md        # System diagrams, data flows
    ├── 04-database-schema.md              # Supabase PostgreSQL schema
    ├── 04-implementation-timeline.md      # 6 phases, 48.5-hour breakdown
    ├── 05-decision-rationale.md           # Why each tech choice
    └── 06-environment-variables.md        # Required env vars

TACTICAL EXECUTION (Agent-OS Spec-Driven)
└── agent-os/specs/2025-11-08-new-spec/
    ├── spec.md                            # Feature specification (649 lines)
    ├── tasks.md                           # 91-task execution blueprint ⭐ CURRENT
    └── planning/
        ├── requirements.md                # Detailed requirements + Q&A
        ├── tasks.md                       # (SAME - REFERENCE FILE)
        └── visuals/
            ├── theme.md                   # Supabase theme CSS variables
            └── TEMP -- TEG Screens/       # 9 existing site screenshots

RESEARCH CONTEXT (Content & Analysis)
└── obsidian_notes/Projects/TEG/research/
    ├── README.md                          # Research navigation
    ├── RESEARCH-SUMMARY.md                # Executive summary
    ├── page-copy/
    │   ├── latvian/                       # Primary content (4.8/5 quality)
    │   ├── english/                       # Secondary (2/5 quality)
    │   └── russian/                       # Tertiary (3/5 quality)
    └── technical-analysis/
        └── comprehensive-tech-stack-analysis.md

APPLICATION CODE
└── src/
    ├── app/
    │   ├── [locale]/                      # i18n routing (lv, en, ru)
    │   ├── api/                           # API routes
    │   └── layout.tsx                     # Root layout
    ├── components/                        # React components
    ├── lib/                               # Utilities and helpers
    ├── styles/                            # Global styles
    └── middleware.ts                      # i18n + security

CONFIGURATION
├── package.json                           # Dependencies (needs cleanup in Phase 1)
├── pnpm-lock.yaml                         # Lock file
├── next.config.ts                         # Next.js configuration
├── tsconfig.json                          # TypeScript configuration
├── tailwind.config.ts                     # Tailwind configuration
├── .env.example                           # Environment template
└── .github/workflows/                     # CI/CD workflows
```

---

## Summary & Next Actions

### You Are Starting At
**Phase 1 Execution:** Boilerplate Cleanup

### Your Immediate Task
Execute **Task Group 1.1** (8 hours total)
- Reference: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-new-spec/tasks.md` (lines 27-73)

### How to Proceed
1. **Read this handoff document completely** (you are here)
2. **Review tasks.md Task Group 1.1** for detailed task descriptions
3. **Spawn implementer agent** with spec reference (use command above)
4. **Monitor execution** and ensure all acceptance criteria pass
5. **Verify with:** `npm run build`, `npm run dev`, cleanup verification commands
6. **Proceed to Phase 2** (Task Group 2.1) after successful verification

### Key Principle
**ALWAYS use nested delegation:** Main → Coordinator → Executor

This provides 20x context savings and ensures efficient coordination.

### Questions?
- Reference **CLAUDE.md** for project instructions and guidelines
- Reference **docs/architecture/** for strategic decisions
- Reference **agent-os/specs/2025-11-08-new-spec/tasks.md** for execution details

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Handoff From:** Initial planning & setup phase
**Handoff To:** Phase 1 execution (Task Group 1.1)
**Status:** Ready for implementation

Last Updated: 2025-11-08 (Initial creation)
