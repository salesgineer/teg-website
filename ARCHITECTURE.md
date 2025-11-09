# Architecture Overview

TEG website architecture guide and documentation index.

## Project Overview

The TEG website is a modern, multi-language automotive inspection and services platform built with Next.js 16+, TypeScript, and TailwindCSS. It serves customers across Europe with three core services: pre-purchase car inspections, car search & delivery, and mobile roadside assistance.

**Key Characteristics:**
- Production-grade, enterprise-quality codebase
- Type-safe with TypeScript strict mode
- Three-language support (Latvian, English, Russian)
- Real-time form handling with Supabase
- Email notifications via Resend
- Rate limiting and bot protection via Arcjet
- GDPR-compliant analytics with PostHog

## Architecture Philosophy

### Component-Based Design

The application uses React's component architecture with clear separation of concerns:

- **Server Components** by default (optimal performance)
- **Client Components** only where interactivity needed
- **Reusable UI components** in `src/components/ui/`
- **Feature-specific components** organized by domain

### Type Safety First

- **TypeScript strict mode** enforced throughout
- **Zod schemas** for runtime validation
- **Discriminated unions** for state management
- **Explicit types** over implicit `any`

### Multi-Language Architecture

URL-based locale routing with comprehensive i18n support:

```
/lv/*  → Latvian (primary language)
/en/*  → English (secondary language)
/ru/*  → Russian (tertiary language)
```

All content, forms, and messages support all three languages simultaneously.

### Security by Default

- Three-layer form validation (client, server, database)
- Arcjet rate limiting and bot detection
- CORS protection
- Input sanitization
- Environment variable isolation
- Row-level database security

## Key Architectural Decisions

### 1. Next.js App Router

**Decision:** Use Next.js App Router with Server Components

**Why:**
- Better performance through server-side rendering
- Simplified routing with file-based structure
- Built-in SEO optimization
- Native streaming and incremental updates

**Trade-offs:** Requires understanding of Server vs. Client Components

**Learn more:** `docs/architecture/01-framework-choice.md`

### 2. TypeScript Strict Mode

**Decision:** Enforce TypeScript strict mode with zero implicit `any`

**Why:**
- Catches type errors at compile time
- Improves code maintainability
- Prevents entire classes of runtime bugs
- Better IDE support and autocomplete

**Trade-offs:** Requires more explicit typing upfront

**Learn more:** `docs/architecture/02-type-system.md`

### 3. Direct Supabase Client (No ORM)

**Decision:** Use Supabase client directly instead of ORM

**Why:**
- Reduced boilerplate and complexity for MVP
- Direct control over SQL queries
- Smaller bundle size
- Faster database operations

**Trade-offs:** Developers must write validation and type definitions manually

**Learn more:** `docs/architecture/04-database-schema.md`

### 4. React Hook Form + Zod Validation

**Decision:** Three-layer validation architecture

Why:
- **Client-side:** UX and instant feedback
- **Server-side:** Security and data integrity
- **Database:** Final integrity constraints

**Trade-offs:** Requires validation logic duplication across layers

**Learn more:** `docs/architecture/05-form-validation.md`

### 5. TailwindCSS with shadcn/ui

**Decision:** Use Supabase theme for shadcn/ui components

**Why:**
- Consistent design system across the app
- Professional, modern aesthetic
- Rapid component development
- Dark mode support built-in

**Trade-offs:** Requires learning TailwindCSS class names

**Learn more:** See `docs/supabase-theme.md` for color palette

### 6. Resend + React Email for Notifications

**Decision:** Email templating with React components

**Why:**
- Type-safe email templates
- Multi-language support built-in
- Email preview in development
- Simplified testing

**Trade-offs:** Different mental model than HTML email templates

**Learn more:** `docs/architecture/08-email-system.md`

### 7. Arcjet for Security

**Decision:** Rate limiting and bot detection with Arcjet

**Why:**
- GDPR-compliant (no IP logging)
- Free tier covers MVP needs
- Simple integration
- Protects against abuse

**Trade-offs:** External dependency for security

**Learn more:** `docs/architecture/09-security.md`

### 8. Agent-OS Spec-Driven Development

**Decision:** Use structured planning for complex features

**Why:**
- Clear requirements before implementation
- Dependency-ordered task lists
- Better team coordination
- Easy to verify completion

**Trade-offs:** Takes more time for simple bug fixes

**Learn more:** `CONTRIBUTING.md` and `CLAUDE.md`

## Technology Stack at a Glance

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | Next.js 16+ | Application framework |
| **Language** | TypeScript 5.9+ | Type safety |
| **Styling** | TailwindCSS 4+ | Utility CSS framework |
| **Components** | shadcn/ui + Supabase theme | UI component library |
| **Form Handling** | React Hook Form + Zod | Validation and state |
| **Database** | Supabase (PostgreSQL) | Data persistence |
| **i18n** | next-intl | Multi-language support |
| **Email** | Resend + React Email | Transactional emails |
| **APIs** | Google Calendar | Event scheduling |
| **Security** | Arcjet | Rate limiting, bot protection |
| **Analytics** | PostHog | GDPR-compliant analytics |
| **Error Tracking** | Sentry | Production error monitoring |
| **Testing** | Vitest + Playwright | Unit and E2E testing |
| **Deployment** | Vercel | Hosting and CDN |

## Directory Structure Explained

```
teg-website/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                 # i18n dynamic route
│   │   │   ├── (marketing)/          # Marketing pages
│   │   │   │   ├── page.tsx          # Homepage
│   │   │   │   ├── services/         # Services pages
│   │   │   │   ├── about/            # About page
│   │   │   │   ├── contact/          # Contact page
│   │   │   │   └── appointments/     # Booking system
│   │   │   └── api/                  # API routes
│   │   │       ├── appointments/     # Appointment API
│   │   │       ├── contact/          # Contact form API
│   │   │       └── service-requests/ # Service request API
│   │   ├── layout.tsx                # Root layout
│   │   └── middleware.ts             # i18n middleware
│   │
│   ├── components/                   # React components
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   └── ...
│   │   ├── forms/                    # Custom form components
│   │   │   ├── AppointmentForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── ServiceRequestForm.tsx
│   │   ├── navigation/               # Navigation components
│   │   │   └── Header.tsx
│   │   ├── hero/                     # Hero section components
│   │   │   ├── Hero.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ReviewRating.tsx
│   │   ├── services/                 # Services section components
│   │   │   └── ServiceCard.tsx
│   │   └── anti-fraud/               # Anti-fraud section
│   │       └── AntiFraudSection.tsx
│   │
│   ├── lib/                          # Utilities and helpers
│   │   ├── supabase/                 # Database client
│   │   │   ├── client.ts             # Client-side Supabase
│   │   │   ├── server.ts             # Server-side Supabase
│   │   │   └── types.ts              # Database types
│   │   ├── validations/              # Zod schemas
│   │   │   ├── appointment.ts
│   │   │   ├── contact.ts
│   │   │   └── service-request.ts
│   │   ├── constants/                # Constants and config
│   │   │   └── copy.ts               # Copy text by component
│   │   └── utils/                    # Helper functions
│   │       └── format.ts
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── database.types.ts         # Database types
│   │   └── api.types.ts              # API response types
│   │
│   ├── locales/                      # Translation files
│   │   ├── lv.json                   # Latvian
│   │   ├── en.json                   # English
│   │   ├── ru.json                   # Russian
│   │   └── schema.ts                 # i18n schema
│   │
│   ├── emails/                       # Email templates (React Email)
│   │   ├── AppointmentConfirmation.tsx
│   │   ├── ContactConfirmation.tsx
│   │   └── ServiceRequestConfirmation.tsx
│   │
│   ├── styles/                       # Global styles
│   │   └── global.css                # Tailwind + globals
│   │
│   └── middleware.ts                 # Next.js middleware (i18n)
│
├── docs/                             # Documentation
│   ├── architecture/                 # Architecture details
│   │   ├── 01-framework-choice.md
│   │   ├── 02-type-system.md
│   │   ├── 03-routing.md
│   │   ├── 04-database-schema.md
│   │   ├── 05-form-validation.md
│   │   ├── 06-authentication.md
│   │   ├── 07-environment-variables.md
│   │   ├── 08-email-system.md
│   │   └── 09-security.md
│   ├── research/                     # Research documents
│   │   ├── client-context/
│   │   ├── current-implementation/
│   │   └── inspection-parameters/
│   └── design-options/               # Design decisions
│
├── e2e/                              # E2E tests (Playwright)
│   └── *.spec.ts
│
├── public/                           # Static assets
│   ├── images/
│   └── manifest.json
│
├── agent-os/                         # Agent-OS spec-driven workflow
│   └── specs/
│       └── {YYYY-MM-DD-feature}/
│           ├── spec.md
│           ├── planning/
│           │   ├── requirements.md
│           │   ├── tasks.md
│           │   └── product-docs.md
│           └── implementation/
│               ├── progress.md
│               └── results.md
│
├── .claude/                          # Claude AI configuration
│   ├── rules/
│   │   └── me.md                     # Developer context
│   └── agents/                       # Subagent prompts
│
├── .github/                          # GitHub configuration
│   └── workflows/                    # CI/CD workflows
│
├── package.json                      # Dependencies
├── pnpm-lock.yaml                    # Lock file
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js config
├── tailwind.config.ts                # TailwindCSS config
├── eslint.config.js                  # ESLint config
├── prettier.config.js                # Prettier config
├── vitest.config.ts                  # Vitest config
├── playwright.config.ts              # Playwright config
│
├── CLAUDE.md                         # AI development workflow
├── CONTRIBUTING.md                   # Contribution guide
├── DEVELOPMENT.md                    # Development setup
├── ARCHITECTURE.md                   # This file
└── README.md                         # Project overview
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER BROWSER                                │
│  [Locale Router /lv | /en | /ru]                                 │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│                     NEXT.JS APP ROUTER                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Server Components (Pages, Layouts)                     │   │
│  │  - Render on server, stream HTML to browser            │   │
│  │  - Database queries (no network latency)               │   │
│  │  - Environment variable access                          │   │
│  └────────────────────────┬────────────────────────────────┘   │
│                           │                                      │
│  ┌────────────────────────▼────────────────────────────────┐   │
│  │  Client Components (Interactive Elements)               │   │
│  │  - Forms with React Hook Form                          │   │
│  │  - Client-side validation with Zod                     │   │
│  │  - Event handlers and state                            │   │
│  └────────────────────────┬────────────────────────────────┘   │
└─────────────────────────────┼────────────────────────────────────┘
                              │
┌─────────────────────────────▼────────────────────────────────────┐
│                        API ROUTES                                │
│  (src/app/[locale]/api/*)                                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 1. Validate request (Zod schema)                         │  │
│  │ 2. Check Arcjet rate limits & bot detection             │  │
│  │ 3. Process data (Supabase INSERT/UPDATE)                │  │
│  │ 4. Send email notifications (Resend)                    │  │
│  │ 5. Return JSON response                                 │  │
│  └─────────────────────────┬──────────────────────────────┘  │
└──────────────────────────────┼────────────────────────────────────┘
                               │
┌──────────────────────────────▼────────────────────────────────────┐
│                       SERVICES LAYER                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Database (Supabase PostgreSQL)                           │   │
│  │  - appointments table                                    │   │
│  │  - contact_submissions table                             │   │
│  │  - service_requests table                                │   │
│  │  - Row-level security enabled                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Email Service (Resend + React Email)                     │   │
│  │  - AppointmentConfirmation.tsx (3 languages)            │   │
│  │  - ContactConfirmation.tsx (3 languages)                │   │
│  │  - ServiceRequestConfirmation.tsx (3 languages)         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ External APIs                                            │   │
│  │  - Google Calendar (appointment scheduling)              │   │
│  │  - Arcjet (rate limiting, bot detection)                 │   │
│  │  - PostHog (analytics)                                   │   │
│  │  - Sentry (error tracking)                               │   │
│  └─────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘
```

## Development Workflow Reference

### For Bug Fixes and Simple Changes

1. **Create feature branch:** `fix/issue-name`
2. **Make changes** following code standards
3. **Test locally** in all three languages
4. **Submit PR** with clear description

**Example:** Fixing a form validation error
```bash
git checkout -b fix/email-validation
# Edit src/lib/validations/email.ts
pnpm test
git commit -m "fix(validation): improve email validation regex"
git push origin fix/email-validation
```

### For Complex Features

Use **Agent-OS spec-driven workflow** for features with:
- Uncertain scope or requirements
- Multiple components/files affected
- New database tables
- Multi-language content needs

**Steps:**
1. Create spec folder: `agent-os/specs/2025-11-09-feature-name/`
2. Document requirements in `planning/requirements.md`
3. Write detailed spec in `spec.md`
4. Generate tasks in `planning/tasks.md`
5. Execute tasks from tasks list
6. Verify implementation in `implementation/verification.md`

**Learn more:** See `CLAUDE.md` for detailed Agent-OS workflow

## Core Patterns and Conventions

### Server Component Pattern

```typescript
// ✅ GOOD: Server Component (default)
export default async function Page() {
  const data = await db.fetch(...);  // Safe to query DB
  return <Component data={data} />;
}
```

### Client Component Pattern

```typescript
// ✅ GOOD: Client Component with interactivity
'use client';

import { useState } from 'react';

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

### Form Validation Pattern

```typescript
// Step 1: Define Zod schema
const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

// Step 2: Client-side validation (UX)
const form = useForm({ resolver: zodResolver(schema) });

// Step 3: Server-side re-validation (security)
const validated = schema.parse(formData);

// Step 4: Database constraint (integrity)
// CHECK constraints in Supabase schema
```

### API Route Pattern

```typescript
// 1. POST handler
export async function POST(request: Request) {
  try {
    // 2. Parse request
    const body = await request.json();

    // 3. Validate (Zod)
    const data = appointmentSchema.parse(body);

    // 4. Check rate limits (Arcjet)
    const decision = await arcjet.protect(request);
    if (decision.isDenied()) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }

    // 5. Insert to database (Supabase)
    const { data: result, error } = await supabase
      .from('appointments')
      .insert([data])
      .select();

    // 6. Send email (Resend)
    await resend.emails.send({
      from: 'hello@teg.lv',
      to: data.email,
      subject: 'Appointment Confirmation',
      react: <AppointmentConfirmation appointment={data} />,
    });

    // 7. Return response
    return Response.json({ success: true, data: result });
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
```

## Performance Optimization Strategy

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Optimization Techniques

1. **Image optimization** - Use Next.js `<Image>` component
2. **Code splitting** - Dynamic imports for large components
3. **Font optimization** - next/font with Outfit
4. **Server rendering** - Render static content on server
5. **Edge functions** - API routes as Edge Functions
6. **Caching strategy** - Static generation where possible

**Learn more:** See performance section in `docs/architecture/`

## Security Architecture

### Three-Layer Defense

**Layer 1: Client-Side**
- Input validation with Zod
- Form error messages
- XSS prevention with React escaping

**Layer 2: Server-Side**
- Re-validate all input (don't trust client)
- Rate limiting with Arcjet
- Bot detection with Arcjet
- CORS protection

**Layer 3: Database**
- Row-level security (RLS) policies
- CHECK constraints for data integrity
- Parameterized queries (prevent SQL injection)

**Learn more:** See `docs/architecture/09-security.md`

## Testing Architecture

### Unit Tests (Vitest)

- Validation functions
- Utility helpers
- Component logic
- API response handlers

### E2E Tests (Playwright)

- Critical user flows (appointment booking)
- Form submissions and validation
- Multi-language navigation
- Email notifications (manual)

### Testing Strategy

```
User Story → Page Component → API Route → Database
    │             │             │           │
  Playwright    Jest/RTL     Vitest      Manual
   (E2E)       (Component)  (Unit)      (Database)
```

**Coverage targets:**
- Validation: 90%+
- Utils: 95%+
- API routes: 80%+
- Components: 60%+

## Deployment Pipeline

### Development → Staging → Production

1. **Push to feature branch**
   - Automated tests run
   - ESLint checks code style
   - TypeScript checks types

2. **Pull Request Review**
   - Code review for quality
   - Approval required to merge

3. **Merge to Main**
   - Automatic build and tests
   - Deploy to Vercel preview URL
   - Staging environment ready

4. **Production Deployment**
   - Manual trigger or scheduled
   - Deploy to vercel.com CDN
   - Database migrations (if needed)

## Detailed Documentation Index

### Architecture Details
- **[01-framework-choice.md](./docs/architecture/01-framework-choice.md)** - Why Next.js and App Router
- **[02-type-system.md](./docs/architecture/02-type-system.md)** - TypeScript strict mode implementation
- **[03-routing.md](./docs/architecture/03-routing.md)** - i18n routing and middleware
- **[04-database-schema.md](./docs/architecture/04-database-schema.md)** - Supabase tables and types
- **[05-form-validation.md](./docs/architecture/05-form-validation.md)** - Three-layer validation pattern
- **[06-authentication.md](./docs/architecture/06-authentication.md)** - Auth strategy (deferred to Phase 2)
- **[07-environment-variables.md](./docs/architecture/07-environment-variables.md)** - Env config and secrets
- **[08-email-system.md](./docs/architecture/08-email-system.md)** - Resend + React Email templates
- **[09-security.md](./docs/architecture/09-security.md)** - Security measures and OWASP compliance

### Research & Context
- **[Research Summary](./obsidian_notes/Projects/TEG/research/README.md)** - Client context and market analysis
- **[Page Copy](./obsidian_notes/Projects/TEG/research/page-copy/)** - Content by language and page
- **[Technical Analysis](./obsidian_notes/Projects/TEG/research/technical-analysis/)** - Tech stack recommendations

### Development Guides
- **[README.md](./README.md)** - Project overview and quick start
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution workflow and standards
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Local setup and development tasks
- **[CLAUDE.md](./CLAUDE.md)** - AI-assisted development workflow

## Key Technologies Explained

### Next.js 16+

Modern React framework with:
- App Router for file-based routing
- Server Components by default
- Automatic code splitting
- Built-in SEO optimization
- Edge deployment ready

### TypeScript 5.9+

Strict type system preventing runtime errors:
- Explicit types for all functions
- Discriminated unions for state
- Type inference where safe
- Zero tolerance for implicit `any`

### Supabase

Open-source Firebase alternative:
- PostgreSQL database
- Built-in authentication (deferred)
- Real-time subscriptions
- Row-level security
- Easy local development

### React Hook Form + Zod

Modern form handling:
- Minimal re-renders
- Type-safe validation
- Flexible field registration
- Integration with UI components

### TailwindCSS

Utility-first CSS framework:
- Responsive design primitives
- Dark mode support
- JIT compilation
- Small bundle size

## Getting Started as a Developer

1. **Clone and setup** (see DEVELOPMENT.md)
2. **Review this document** for architecture overview
3. **Read code examples** in components and pages
4. **Check CONTRIBUTING.md** before submitting code
5. **Use CLAUDE.md** for AI-assisted development

## Questions?

- **Architecture decisions:** See relevant doc file
- **Development setup:** See DEVELOPMENT.md
- **Contribution process:** See CONTRIBUTING.md
- **Code examples:** Review existing components in `src/components/`
- **AI assistance:** Reference CLAUDE.md for LLM workflow

---

**Last Updated:** 2025-11-09
**Maintainer:** TEG Development Team
