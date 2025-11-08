## 🎯 CORE DIRECTIVES

**SUPREME DIRECTIVE:** When reporting, be extremely concise. Sacrifice grammar for concision.

**ABSOLUTE RULES:**
1. **ALL operations MUST use nested subagents (Main → Coordinator → Executor) - NO EXCEPTIONS.**
2. **USE CLAUDE CODE'S TASK TOOL** for spawning sub-agents concurrently.
3. **NEVER perform direct operations.** ALWAYS delegate via 3-tier hierarchy.
4. **NEVER save working files to root.** Use appropriate subdirectories.
5. Do what has been asked; nothing more, nothing less.
6. ALWAYS prefer editing existing files over creating new ones.
7. Do not use websearch. Use context7, Firecrawl, Github MCP, gemini, perplexity MCP.
8. Do not restart dev-server unless specifically requested.
9. Use sequential-thinking MCP proactively for difficult problems.
10. **AUTO-LOAD CONTEXT:** At the start of EVERY new session, automatically load and read ALL files from `.claude/rules/` directory to understand developer context, preferences, and session-persistent rules.

---

## 📚 SESSION INITIALIZATION (AUTOMATIC)

**CRITICAL:** At the start of EVERY new conversation session, you MUST:

1. **Auto-load developer context files:**
   - Read ALL files in `/home/fivefingerdisco/Projects/TEG_001/.claude/rules/`
   - Currently includes: `me.md` (developer context, experience level, AI workflow)
   - These files contain session-persistent context about the developer

2. **Apply context immediately:**
   - Understand developer's experience level (beginner, vibe coding approach)
   - Apply communication style guidelines (educational, thorough, patient)
   - Follow collaboration patterns defined in rules files

3. **CLAUDE.md remains supreme:**
   - This file (CLAUDE.md) defines workflow and technical directives
   - `.claude/rules/*` files define WHO the developer is and HOW to work with them
   - Both are mandatory context for every session

**WHY:** These files ensure consistent LLM behavior across sessions, preserving developer preferences, experience level context, and collaboration guidelines without manual re-explanation.

---

## 🔍 SHERLOCK HOLMES DEBUGGING (CRITICAL)

**ANTI-PATTERN:** Fixing things that LOOK wrong but aren't the root cause = FALSE POSITIVES.

**THE METHOD:**
1. **GATHER EVIDENCE**: Reproduce issue, isolate symptoms, collect logs/errors
2. **GENERATE 3-5 HYPOTHESES**: Don't stop at first "likely" cause
3. **ELIMINATE IMPOSSIBILITIES**: Test each systematically. "If X, then we'd see Y" - do we?
4. **CORROBORATE ROOT CAUSE**: Confirm it explains ALL symptoms
5. **VERIFY BEFORE FIX**:
   - ✅ Can you reproduce it?
   - ✅ Does suspected cause explain ALL symptoms?
   - ✅ Test hypothesis - comment out code, does issue disappear?
   - ✅ Is it actually broken or just unusual?

**CRITICAL: Verify causation, not correlation. Unusual ≠ Broken.**

**MANDATORY:**
- List 3-5 hypotheses before fixing
- Use sequential-thinking MCP for complex cases
- Document deduction process briefly
- NEVER fix without confirming issue exists

---

## 🚀 NESTED DELEGATION ARCHITECTURE (MANDATORY)

**GOLDEN RULE:** Main → Coordinator Subagent → Executor Sub-subagent = 20x context savings

### Three-Tier Model

**TIER 1 - MAIN (Strategic):**
- Spawns coordinator subagents ONLY
- Synthesizes results, makes decisions
- NEVER touches tools directly (except AskUserQuestion, ExitPlanMode, TodoWrite, Sequential-Thinking MCP)

**TIER 2 - COORDINATOR SUBAGENTS (Tactical):**
- `research-coordinator`: Analysis, exploration
- `task-planner`: Strategy, planning
- `web-dev-worker`: Implementation
- `text-writer`: Documentation
- `parallel-bash-executor`: Testing
- **Agent-OS Coordinators (Spec-Driven Workflow):**
  - `spec-initializer`: Initialize spec folder with raw idea
  - `product-planner`: Create product documentation (mission, roadmap)
  - `spec-shaper`: Gather requirements through targeted questions
  - `spec-writer`: Create detailed specification documents
  - `task-list-creator`: Generate detailed tasks list from specs
  - `implementer`: Execute feature implementation from tasks.md
  - `implementation-verifier`: Verify end-to-end implementation
  - `spec-verifier`: Verify spec and tasks list
- Spawn executor sub-subagents, aggregate results
- Minimal direct execution

**TIER 3 - EXECUTOR SUB-SUBAGENTS (Operational):**
- `Explore`: File/pattern search
- `general-purpose`: File ops, MCP commands
- `parallel-bash-executor`: Bash operations
- Execute ALL actual work

### Context Budget

| Pattern | Main Context Used | Efficiency |
|---------|------------------|------------|
| Direct execution | 10,000 tokens (100%) | ❌ FORBIDDEN |
| Single-tier delegation | 2,000 tokens (20%) | ⚠️ SUBOPTIMAL |
| **Nested delegation** | **500 tokens (5%)** | **✅ OPTIMAL** |

### Standard Pattern
```
Main → coordinator subagent (objective)
  ├─ Executor sub-subagent 1 (specific task) &
  ├─ Executor sub-subagent 2 (specific task) &
  ├─ Executor sub-subagent 3 (specific task) &
  wait
  → Coordinator aggregates → Returns to Main
```

### MCP Operations (MANDATORY NESTED)

**ALL MCP MUST GO:** Main → Coordinator → Executor

- **Chrome DevTools**: Main → `research-coordinator` → `general-purpose` (mcp__chrome-devtools__*)
- **Context7**: Main → `research-coordinator` → `general-purpose` (mcp__context7__*)
- **Implementer MCP**: Main → `implementer` → `general-purpose` (all MCP tools available for feature implementation)

---

## 🏗️ AGENT-OS WORKFLOW (SPEC-DRIVEN DEVELOPMENT)

**WHEN TO USE:** Complex features, new products, uncertain requirements, multi-phase development.

**GOLDEN RULE:** Idea → Spec → Tasks → Implement → Verify (Main → Agent-OS Coordinator → general-purpose executors)

### Standard Spec-Driven Workflow

**Phase 1: SPECIFICATION (Gather & Document)**
```
Main → spec-initializer subagent
  ├─ general-purpose (create spec folder structure) &
  └─ Coordinator spawns next phase

Main → product-planner subagent
  ├─ general-purpose (write mission, goals, roadmap) &
  └─ Returns product docs

Main → spec-shaper subagent
  ├─ Uses AskUserQuestion for targeted clarification (max 5 questions) &
  ├─ general-purpose (document findings) &
  └─ Returns gathered requirements

Main → spec-writer subagent
  ├─ general-purpose (create spec.md with detailed specifications) &
  └─ Returns full specification document

Main → spec-verifier subagent
  ├─ general-purpose (review spec and requirements) &
  └─ Returns verification report
```

**Phase 2: PLANNING (Convert to Tasks)**
```
Main → task-list-creator subagent
  ├─ general-purpose (read spec.md and create tasks.md) &
  └─ Returns dependency-ordered task list
```

**Phase 3: IMPLEMENTATION (Execute Tasks)**
```
Main → implementer subagent
  ├─ general-purpose (execute tasks from tasks.md, use all MCP tools) &
  ├─ general-purpose (file operations, code generation) &
  ├─ general-purpose (MCP operations: Context7, etc.) &
  └─ Returns implementation results

Main → implementation-verifier subagent
  ├─ general-purpose (verify all tasks completed, test features) &
  └─ Returns verification report
```

### File Structure Created

```
agent-os/specs/{YYYY-MM-DD-feature-name}/
├── spec.md                          # Detailed specification
├── planning/
│   ├── requirements.md              # Gathered requirements
│   ├── product-docs.md              # Mission, goals, roadmap
│   ├── tasks.md                     # Dependency-ordered task list
│   └── visuals/                     # Diagrams, mockups, etc.
└── implementation/
    ├── progress.md                  # Implementation tracking
    └── results.md                   # Verification & completion
```

### When to Use Spec-Driven vs Direct Implementation

**USE SPEC-DRIVEN (Agent-OS) WHEN:**
- New feature is complex or uncertain scope
- Requirements need clarification (use spec-shaper)
- Multiple phases or dependencies involved
- Team coordination needed
- Product needs documentation
- High-risk or high-impact features

**USE DIRECT IMPLEMENTATION WHEN:**
- Bug fix with clear root cause
- Simple feature with obvious requirements
- Urgent fix needed immediately
- Adding to existing, well-documented codebase
- Single file or localized change

---

## 🔄 COMMAND PROCESSING WORKFLOW

**THREE-STAGE NESTED PROCESS:**

### 1. EXPLORATION (Research-Coordinator)
```
Main → research-coordinator subagent
  ├─ Explore sub-subagents (parallel file/pattern search)
  ├─ general-purpose sub-subagents (configs, dependencies)
  wait → Returns findings to Main
```

### 2. PLANNING (Task-Planner)
```
Main → task-planner subagent
  ├─ Explore sub-subagents (analyze patterns)
  ├─ general-purpose sub-subagents (components, specs)
  wait → Returns execution strategy to Main
```

### 3. EXECUTION (Multiple Coordinators in Parallel)
```
Main spawns parallel coordinators:
├─ web-dev-worker (UI) → general-purpose sub-subagents &
├─ web-dev-worker (API) → general-purpose sub-subagents &
├─ text-writer (docs) → general-purpose sub-subagents &
└─ parallel-bash-executor (tests) → executor sub-subagents &
wait → Main synthesizes results (500 tokens total)
```

---

## ⚡ AI TOOL DIRECTIVES (MANDATORY REPLACEMENTS)

**CRITICAL:** Execution shell is non-interactive. Use real binary names.

### File Operations
| Old (BANNED) | New (REQUIRED) | Notes |
|--------------|----------------|-------|
| `find . -name "*.js"` | `fd -e js` | File search by name |
| `grep -r "pattern"` | `rg "pattern"` | Content search |
| `ls -la` | `lsd -la` | Directory listing |
| `cat file.js` | `bat --paging=never file.js` | View file (use `-n` for line numbers) |
| `tree` | `lsd --tree` or `fd . -t f` | Tree view |

### Tasks & Data
| Old (BANNED) | New (REQUIRED) | Notes |
|--------------|----------------|-------|
| `npm run <script>` | `just <script>` | If justfile exists |
| `sed 's/old/new/g'` | `sd 'old' 'new'` | Text replacement |
| `curl -X POST ...` | `xh POST url key=value` | HTTP requests |
| Manual JSON parsing | `jq '.key.value'` | JSON query |
| Manual YAML parsing | `yq '.key.value' file.yml` | YAML query |

### System & Code
| Old (BANNED) | New (REQUIRED) | Notes |
|--------------|----------------|-------|
| `du -sh` | `dust` | Disk usage |
| `top` / `ps aux` | `btm` / `procs` | Process monitoring |
| `rg "myFunc\(.*\)"` | `ast-grep -p 'myFunc($A)'` | Structural code search |

### Python (uv only)
| Old (BANNED) | New (REQUIRED) |
|--------------|----------------|
| `python -m venv .venv` | `uv venv` |
| `pip install package` | `uv pip install package` |
| `pip-compile` | `uv pip compile requirements.in` |
| `pipx run tool` | `uvx run tool` |

### Parallel Execution (MANDATORY)
```bash
# ✅ REQUIRED: Run independent commands in parallel
cmd1 & cmd2 & cmd3 & wait

# For cargo tools in parallel, export PATH:
export PATH="$HOME/.cargo/bin:$PATH" && dust . & btm --version & procs -V & wait
```

---

## 📖 DOCUMENTATION RULES

1. **NEVER create docs** unless explicitly requested or via `/newmd` or `/updatemd`
2. **PLACEMENT:** `/docs/Week_##/YY.MM.DD_DayOfWeek/YY.MM.DD_HH:MM_description.md`
3. **TIMESTAMP:** Use `$(pwd)/scripts/get-riga-timestamp.sh` (never hardcode)
4. **UPDATES:** Always `Read` before `Edit` (NEVER `Write`). Preserve ALL content, append timestamped subsections
5. **WORKFLOW:** Use agents in `/.claude/agents` proactively

---

## 🧠 OBSIDIAN VAULT INTEGRATION

**PATHS:**
- Symlink: `/home/fivefingerdisco/Projects/TEG_001/obsidian_notes` → `/home/fivefingerdisco/Projects/Obsidian_Vault_GIT`
- Display: `/obsidian_notes` (abstracted)

**FLAGS:** `--obs`, `--o`, `--obsidian`

**AUTO-TRIGGER:** User mentions "obsidian", "knowledge vault", "vault" → include vault context

**INTEGRATION:**
- Link tasks to vault notes
- Pull vault context for complex tasks
- Save research findings to vault
- Reference vault in implementation planning

**TEG PROJECT VAULT STRUCTURE:**
```
/obsidian_notes/Projects/TEG/research/
├── README.md                    # Start here - Navigation guide
├── RESEARCH-SUMMARY.md          # Executive summary of all findings
├── analysis/
│   └── current-page-structure.md
├── page-copy/                   # Extracted content by language
│   ├── latvian/                 # Primary language (complete)
│   ├── english/                 # Secondary (incomplete)
│   └── russian/                 # Tertiary (limited)
├── scraped-content/             # Detailed page analyses
└── technical-analysis/
    └── comprehensive-tech-stack-analysis.md
```

---

## 🚀 TEG PROJECT OVERVIEW

### Project Information

**Client:** TEG (Transporta Ekspertu Grupa) - Automotive inspection and services company in Latvia
- **Website:** https://www.teg.lv
- **Current Phase:** Research complete, moving to planning and development
- **Project Type:** Multi-language website redesign and migration

### Migration Context

**CRITICAL URGENCY:**
- Current site uses Frontity framework (discontinued, unmaintained)
- Security risk from lack of updates
- Performance limitations from legacy stack
- This is a **ground-up redesign**, not modification of existing code

### Core Services

The website needs to support three main services:

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

### Multi-Language Support

**Three Languages Required:**
- **Latvian (lv):** Primary language, complete and production-ready (Quality: 4.8/5)
- **English (en):** Secondary, currently ~40% complete with placeholder text issues (Quality: 2/5 - Needs significant work)
- **Russian (ru):** Tertiary, limited coverage (2 pages only) (Quality: 3/5 - Basic functionality)

**URL Structure:** Use locale-based routing (`/lv/`, `/en/`, `/ru/`)

**CRITICAL ISSUE:** English contact page has placeholder text - needs immediate attention when implementing.

### Brand Messaging

**Key Themes:**
- Independence: "neatkarīgi" (independent experts)
- Anti-fraud focus: Exposing dishonest dealers
- Convenience: Remote inspections, no travel required
- Transparency: Clear pricing, detailed reports
- Expertise: Professional automotive specialists

**Tagline:** "sava aroda profesionāļu grupa, kam auto ir sirdslieta"
(Professional group for whom cars are a passion)

**Key Business Info:**
- Phone: +371 25 201 710
- Hours: Mon-Sat, 9:00 AM - 8:00 PM
- Social: Instagram @teg.auto, TikTok @teg.auto, Facebook: Transportaekspertugrupa

---

## 🛠️ RECOMMENDED TECHNOLOGY STACK

**Frontend:**
- Next.js 15.5.4+ (App Router)
- React 19
- TypeScript 5.9+ (strict mode)
- TailwindCSS 3.4+

**Backend/Services:**
- Supabase (database & authentication)
- Resend (email notifications)

**Additional:**
- next-intl (i18n/localization)
- react-hook-form + Zod (form validation)
- Framer Motion (animations, optional)

**Monitoring:**
- Sentry (error tracking)
- Google Analytics 4

**Deploy:**
- Vercel (recommended)

### Architecture Pattern

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
│   ├── supabase/              # Database client
│   └── validations/           # Form schemas (Zod)
└── middleware.ts              # i18n & auth
```

---

## 📋 IMPLEMENTATION PRIORITIES

### High Priority (Phase 1)
- Fix English translation completeness
- Implement proper SEO with structured data (Schema.org JSON-LD for automotive services)
- Secure form handling with validation (Zod + CSRF protection)
- Core Web Vitals optimization (Target: LCP <2.5s, FID <100ms, CLS <0.1)

### Medium Priority (Phase 2)
- Complete Russian language coverage
- Blog/content strategy for SEO
- Customer dashboard for appointment management

### Low Priority (Phase 3)
- Enhanced social media integration
- Live chat functionality
- FAQ section
- Detailed case studies/testimonials

---

## 🔧 DEVELOPMENT GUIDELINES

### Before Starting Development

1. Review technical analysis document (`/obsidian_notes/Projects/TEG/research/technical-analysis/comprehensive-tech-stack-analysis.md`)
2. Check page copy files for content requirements (`/obsidian_notes/Projects/TEG/research/page-copy/`)
3. Verify current page structure analysis for site hierarchy
4. Ensure all three language versions are considered in design

### Technical Standards

- **Forms:** Use Zod for validation, implement proper CSRF protection, rate limiting
- **Images:** Leverage Next.js Image component for optimized images
- **SEO:** Implement structured data for automotive services (JSON-LD)
- **Performance:** Target Core Web Vitals - LCP <2.5s, FID <100ms, CLS <0.1
- **Security:** Follow OWASP guidelines, implement rate limiting on forms
- **Accessibility:** Ensure WCAG 2.1 AA compliance

### Navigation Reference

When working on this project, always reference:
1. **Research Summary** - Overall project context
2. **Technical Analysis** - Recommended tech stack and architecture
3. **Page Copy** folders - Actual website content for each language

**Important:** The `obsidian_notes` symlink is excluded from git via `.gitignore` - do not attempt to commit its contents.

---

## 🎯 CRITICAL REMINDERS

1. **AUTO-LOAD context files:** Read ALL files from `.claude/rules/` at session start (contains developer context)
2. **ALWAYS use 3-tier nested delegation:** Main → Coordinator → Executor
3. **NEVER execute directly** from Main agent (except 4 allowed tools)
4. **VERIFY before fixing:** Reproduce issue, test hypotheses, avoid false positives
5. **Use correct tool binaries:** `fd`, `rg`, `lsd`, `bat`, `just`, `sd`, `xh`, `uv`
6. **Parallel execution:** Use `& ... & wait` for independent commands
7. **MCP operations:** MUST go through nested delegation (Main → Coordinator → Executor)
8. **Context preservation is paramount:** 20x efficiency gain with nested delegation
9. **TEG-specific:** This is a complete redesign from legacy Frontity stack - plan accordingly
