# Contributing to TEG Website

Welcome to the TEG website project! This guide helps you understand how to contribute effectively, whether you're fixing bugs, adding features, or improving documentation.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing Requirements](#testing-requirements)
- [Multi-Language Considerations](#multi-language-considerations)
- [Pull Request Process](#pull-request-process)
- [Getting Help](#getting-help)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

- Be respectful and constructive in all interactions
- Support other contributors and embrace collaborative problem-solving
- Report any instances of abusive, harassing, or unacceptable behavior
- Focus on code quality and user impact

## Getting Started

### Prerequisites

- Node.js 20+ (required for development)
- pnpm (package manager)
- Git
- A basic understanding of TypeScript and React

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd teg-website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env.local` and populate with your development credentials.

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

For detailed setup instructions, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## How to Contribute

### Reporting Bugs

When reporting bugs, please include:

- **Clear description** - What should happen vs. what actually happens
- **Steps to reproduce** - Specific, minimal steps to trigger the issue
- **Environment details** - Browser, OS, Node version
- **Screenshots/logs** - Error messages, console output, or screenshots
- **Language/locale** - Which language version (lv/en/ru) was affected

**Bug Report Template:**
```
## Bug Title
[Clear, concise description]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Steps to Reproduce
1. Step one
2. Step two
3. ...

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14.2]
- Language: [lv/en/ru]
```

### Requesting Features

Feature requests should include:

- **Use case** - Why this feature is needed
- **User benefit** - How it helps customers or team
- **Example implementation** - Rough idea of how it might work
- **Affected languages** - Which language(s) it impacts

**Feature Request Template:**
```
## Feature Title
[Clear, concise title]

## Motivation
[Why is this feature needed? What problem does it solve?]

## Proposed Implementation
[Rough idea of how it could work]

## Affected Languages
- [ ] Latvian (lv)
- [ ] English (en)
- [ ] Russian (ru)
```

### Submitting Code Changes

1. **Create a feature branch** (see [Branch Naming](#branch-naming-conventions))
2. **Make your changes** following [Code Standards](#code-standards)
3. **Write tests** for your changes
4. **Update documentation** if needed
5. **Submit a pull request** (see [Pull Request Process](#pull-request-process))

## Development Workflow

### Branch Naming Conventions

Use descriptive branch names following this format:

```
type/short-description
```

**Valid types:**
- `feature/` - New functionality (e.g., `feature/appointment-scheduling`)
- `fix/` - Bug fixes (e.g., `fix/form-validation-error`)
- `docs/` - Documentation updates (e.g., `docs/api-guide`)
- `refactor/` - Code improvements without changing behavior (e.g., `refactor/button-component`)
- `test/` - Test additions or improvements (e.g., `test/form-validation`)
- `chore/` - Build, dependencies, tooling (e.g., `chore/update-dependencies`)

**Examples:**
- `feature/multi-language-routing`
- `fix/email-template-rendering`
- `docs/component-library`
- `refactor/form-validation-logic`

### Commit Message Format

Follow **Conventional Commits** format for clear, scannable history:

```
type(scope): brief description

[optional body with details]

[optional footer with references]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `refactor` - Code refactoring (no feature change)
- `test` - Adding/updating tests
- `chore` - Dependencies, build, tooling
- `perf` - Performance improvements

**Examples:**

```
feat(forms): add appointment form validation

Implements client and server-side validation for appointment
booking form with Zod schema. Includes three-layer validation:
client (UX), server (security), database (integrity).

Relates to #42
```

```
fix(hero): correct mobile layout spacing

Adjusts hero section padding on small screens to prevent
content overlap on devices with viewport width < 640px.

Fixes #89
```

```
docs(api): document appointment endpoints

Add comprehensive documentation for the appointments API
including request/response examples and error codes.
```

```
refactor(email): extract template logic

Extract email template rendering logic into reusable functions
to reduce duplication across confirmation emails.
```

### Multi-Language Workflow

**Critical:** Always update all three language versions together.

When modifying content, forms, or messages that appear to users:

1. **Update all three locale files:**
   - `src/locales/lv.json` - Latvian (primary)
   - `src/locales/en.json` - English (secondary)
   - `src/locales/ru.json` - Russian (tertiary)

2. **Update email templates:**
   - Email templates in `src/emails/` must support all three languages
   - Test confirmation emails in all locales before submitting PR

3. **Test in all languages:**
   - Forms in `/lv/`, `/en/`, `/ru/` routes
   - Validation messages in all three languages
   - Email confirmations (check inbox/spam)

4. **Commit as single change:**
   ```
   feat(forms): add phone number validation for all locales

   - Add validation rules to lv, en, ru locale files
   - Update AppointmentForm component to display localized errors
   - Test form in all three language versions
   ```

## Code Standards

### TypeScript

- **Strict mode required** - All implicit `any` types must be resolved
- **Explicit types** - Prefer explicit type annotations
- **No `@ts-ignore`** - Use proper types instead
- **Discriminated unions** - Use for type-safe state management

**Example:**
```typescript
// ✅ GOOD
interface SuccessResponse {
  status: 'success';
  data: AppointmentData;
}

interface ErrorResponse {
  status: 'error';
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

// ❌ BAD
const response: any = await fetch(...);
```

### Code Style

- **Prettier** auto-formats on save (2-space indentation, single quotes)
- **ESLint** enforces Next.js + Tailwind rules
- **Case conventions:**
  - Files: kebab-case (e.g., `button-component.tsx`)
  - Components: PascalCase (e.g., `ButtonComponent`)
  - Functions/variables: camelCase (e.g., `handleSubmit`)
  - Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)

### Component Best Practices

```typescript
// Use Server Components by default
export default function Page() {
  return <div>Server content</div>;
}

// Client Components when needed (use 'use client' at top)
'use client';

export function InteractiveButton() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)} />;
}

// Props should be typed explicitly
interface ButtonProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

export function Button({ variant, disabled, onClick }: ButtonProps) {
  return <button className={`btn-${variant}`} disabled={disabled} onClick={onClick} />;
}
```

### File Organization

```
src/
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── forms/             # Form components
│   │   ├── AppointmentForm.tsx
│   │   └── ContactForm.tsx
│   └── features/          # Feature-specific components
│       ├── hero/
│       └── services/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx       # Homepage
│   │   ├── services/      # Services pages
│   │   └── contact/       # Contact page
│   └── api/               # API routes
├── lib/
│   ├── supabase/          # Database
│   ├── validations/       # Zod schemas
│   └── utils/             # Helper functions
└── locales/               # Translation files
    ├── lv.json
    ├── en.json
    └── ru.json
```

### Form Validation

Use **Zod** for schema-based validation:

```typescript
import { z } from 'zod';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[0-9\s-]{9,}$/, 'Invalid phone number'),
  serviceType: z.enum(['inspection', 'search', 'mobile']),
  date: z.date().min(new Date(), 'Date must be in the future'),
});

type Appointment = z.infer<typeof appointmentSchema>;
```

Implement **three-layer validation:**
1. **Client-side** - React Hook Form + Zod (UX)
2. **Server-side** - Zod re-validation (security)
3. **Database** - CHECK constraints (integrity)

### Error Handling

- Use explicit error handling (try/catch)
- Provide user-friendly error messages
- Log errors for debugging
- Use Sentry for production error tracking

```typescript
try {
  const response = await submitForm(data);
  return { success: true, data: response };
} catch (error) {
  const message = error instanceof ValidationError
    ? 'Please check your input'
    : 'Something went wrong. Please try again.';

  logger.error('Form submission failed', { error, data });
  return { success: false, message };
}
```

## Testing Requirements

### Unit Tests (Vitest)

Test validation functions, utilities, and logic:

```typescript
// src/lib/validations/__tests__/phone.test.ts
import { describe, it, expect } from 'vitest';
import { validatePhone } from '../phone';

describe('validatePhone', () => {
  it('accepts valid Latvian numbers', () => {
    expect(validatePhone('+371 25 201 710')).toBe(true);
  });

  it('rejects invalid formats', () => {
    expect(validatePhone('123')).toBe(false);
  });
});
```

**Coverage targets:**
- Validation functions: 90%+
- Utility functions: 95%+
- API routes: 80%+
- Components: 60%+

### E2E Tests (Playwright)

Test critical user flows:

```typescript
// e2e/appointment-booking.spec.ts
import { test, expect } from '@playwright/test';

test('user can book appointment', async ({ page }) => {
  await page.goto('/lv/appointments');

  await page.fill('input[name="name"]', 'Jānis Bērziņš');
  await page.fill('input[name="email"]', 'janis@example.com');
  await page.fill('input[name="phone"]', '+371 25 201 710');

  await page.selectOption('select[name="service"]', 'inspection');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*\/confirmation/);
});
```

**Test critical paths:**
- Appointment booking flow
- Contact form submission
- Multi-language navigation
- Form validation errors
- Email notifications (manual testing)

### Running Tests

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Test coverage
pnpm test:coverage
```

## Multi-Language Considerations

### Language Coverage

- **Latvian (lv)** - Primary language, quality 4.8/5 ✅ Complete
- **English (en)** - Secondary, quality 2/5 ⚠️ Needs upgrade
- **Russian (ru)** - Tertiary, quality 3/5 - Basic coverage

### Testing Checklist

Before submitting a PR, test all three language versions:

- [ ] Form labels and placeholders display correctly
- [ ] Validation messages appear in correct language
- [ ] Email confirmations send in correct language
- [ ] Error messages are localized
- [ ] Content flows properly without text overflow
- [ ] Special characters (ā, č, š, ž) render correctly
- [ ] Right-to-left text (if applicable) displays properly

### Translation Updates

1. Identify all user-visible strings
2. Add to all three locale files simultaneously
3. Use consistent keys: `service.inspection.title`, `form.email.label`
4. Test in all three language versions

## Pull Request Process

### Before Submitting

1. **Ensure tests pass:**
   ```bash
   pnpm test
   pnpm test:e2e
   ```

2. **Check code style:**
   ```bash
   pnpm lint
   ```

3. **Update documentation:**
   - Component README if adding new components
   - Architecture docs if major changes
   - DEVELOPMENT.md if workflow changes

4. **Self-review:**
   - Does this follow code standards?
   - Are all three languages updated?
   - Are tests comprehensive?
   - Is the commit message clear?

### PR Requirements

**Title format:** Follow Conventional Commits (e.g., `feat: add appointment notifications`)

**Description template:**

```markdown
## Description
[Clear, concise description of changes]

## Type of Change
- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #[issue number]

## Testing Done
- [ ] Unit tests added
- [ ] E2E tests added
- [ ] Manual testing in all locales (lv/en/ru)
- [ ] Tested on mobile
- [ ] Tested form validation (if applicable)

## Checklist
- [ ] Code follows project style guide
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] All three languages updated (if content change)
- [ ] No new warnings or errors
- [ ] Tests pass locally
```

### Review Process

1. **Automated checks:**
   - ESLint + Prettier validation
   - Test suite must pass
   - Type checking with TypeScript

2. **Code review:**
   - At least one approval required
   - Reviewer checks for code quality, security, accessibility
   - Discussion of trade-offs and alternatives if needed

3. **Deployment:**
   - Approved PRs merge to main
   - Automatic deployment to Vercel
   - Staging environment for preview testing

## Getting Help

### Questions or Unclear Requirements

- **Use Discussions** - Ask questions in GitHub Discussions
- **Check Documentation** - Review DEVELOPMENT.md and ARCHITECTURE.md first
- **Review Examples** - Look at existing components and patterns
- **Ask in PR** - Comment on PR if you need clarification

### Documentation Resources

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Local setup, development commands, common tasks
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System design, tech stack, patterns
- **[README.md](./README.md)** - Project overview and quick start
- **[CLAUDE.md](./CLAUDE.md)** - AI-assisted development workflow
- **[docs/](./docs/)** - Detailed architecture and research documentation

### Useful Links

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **TypeScript Docs:** https://www.typescriptlang.org/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Zod Validation:** https://zod.dev
- **Supabase Docs:** https://supabase.com/docs

---

**Thank you for contributing to TEG!** Your improvements make the website better for automotive professionals and customers across Europe.

For questions about this guide, please open an issue or discussion.
