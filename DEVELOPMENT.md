# Development Guide

Complete guide to setting up your local development environment and working on the TEG website.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Development Server](#development-server)
- [Common Development Tasks](#common-development-tasks)
- [Testing](#testing)
- [Debugging](#debugging)
- [Troubleshooting](#troubleshooting)
- [Quick Reference](#quick-reference)

## Prerequisites

### System Requirements

- **Node.js:** 20.0.0 or higher
- **pnpm:** 9.0.0 or higher (package manager)
- **Git:** 2.35.0 or higher
- **RAM:** 4GB minimum (8GB recommended)
- **Disk Space:** 2GB for dependencies and build artifacts

### How to Install

**Node.js + pnpm:**

1. Install Node.js from https://nodejs.org/ (LTS version recommended)
2. Install pnpm:
   ```bash
   npm install -g pnpm@latest
   ```
3. Verify installations:
   ```bash
   node --version    # Should be v20+
   pnpm --version    # Should be 9.0.0+
   ```

**Git:**
- macOS: `brew install git`
- Ubuntu/Debian: `sudo apt-get install git`
- Windows: Download from https://git-scm.com/download/win

## Initial Setup

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd teg-website
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This installs all required packages defined in `package.json`.

**What this does:**
- Installs npm packages
- Creates `.pnpm` directory (lock file cache)
- Generates `node_modules/`

### Step 3: Create Environment File

Copy the example environment file:

```bash
cp .env.example .env.local
```

### Step 4: Configure Environment Variables

Edit `.env.local` and add your credentials (see [Environment Variables](#environment-variables) section).

### Step 5: Verify Setup

```bash
pnpm dev
```

Open http://localhost:3000 in your browser. You should see the TEG website home page.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

### Application Settings

```env
# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# For Production
# NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Database (Supabase)

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**How to get Supabase credentials:**
1. Sign up at https://supabase.com
2. Create a project
3. Go to Settings → API Keys
4. Copy `Project URL` and `Anon Key`
5. Use Service Role Key for sensitive operations

### Email Service (Resend)

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**How to get Resend API key:**
1. Sign up at https://resend.com
2. Go to API Keys section
3. Create new API key
4. Copy and paste into `.env.local`

**For Development:** Emails will show as successful but may not actually send with free tier.

### Google Calendar Integration

```env
GOOGLE_CALENDAR_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CALENDAR_CLIENT_SECRET=GOCSPX-xxxxx
GOOGLE_CALENDAR_REFRESH_TOKEN=1//0xxxxx
```

**How to set up:**
1. Go to https://console.cloud.google.com
2. Create OAuth 2.0 credentials (Desktop application)
3. Set up OAuth consent screen for your project
4. Get refresh token via OAuth flow
5. Add to `.env.local`

### Security & Analytics

```env
# Arcjet (Rate Limiting & Bot Protection)
ARCJET_KEY=ajkey_xxxxx

# PostHog (Analytics - GDPR Compliant)
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.posthog.com

# Sentry (Error Tracking)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_ORGANIZATION=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=sntrys_xxxxx
```

### Optional for Development

You can leave analytics/monitoring keys empty for local development:

```env
# These can be empty during development
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_SENTRY_DSN=
ARCJET_KEY=
```

## Database Setup

### Local Supabase Setup (Optional)

For advanced development, you can run Supabase locally:

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Initialize local Supabase
supabase init
supabase start
```

This runs PostgreSQL locally without needing a Supabase account.

### Database Schema

The database includes three tables:

**1. appointments**
- Customer booking information
- Service type, vehicle details
- Status tracking with Google Calendar integration

**2. contact_submissions**
- Contact form inquiries
- Tracking and follow-up status

**3. service_requests**
- Quick service requests with preferred time
- Priority sorting for urgent requests

For complete schema details, see `docs/architecture/04-database-schema.md`.

### Running Migrations

If you set up local Supabase:

```bash
supabase migration new create_tables
# Edit migration file in supabase/migrations/
supabase migration up
```

For cloud Supabase, migrations run automatically via Vercel.

## Development Server

### Start Development Server

```bash
pnpm dev
```

The server will:
- Start on http://localhost:3000
- Enable hot reload (changes appear instantly)
- Show TypeScript errors in console
- Enable React DevTools

### Access Different Languages

The website supports three locales via URL routing:

- **Latvian:** http://localhost:3000/lv
- **English:** http://localhost:3000/en
- **Russian:** http://localhost:3000/ru

Test your changes in all three languages!

### Available Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server (after build)
pnpm start

# Run linting (ESLint)
pnpm lint

# Format code (Prettier)
pnpm format

# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run tests in watch mode
pnpm test:watch

# Check test coverage
pnpm test:coverage

# Type check entire project
pnpm type-check

# Check for security vulnerabilities
pnpm audit
```

## Common Development Tasks

### Adding a New Page

1. **Create the page component:**
   ```typescript
   // src/app/[locale]/my-page/page.tsx
   export default function MyPage() {
     return <div>My new page</div>;
   }
   ```

2. **Add translations (all three locales):**
   ```json
   // src/locales/lv.json
   { "pages.myPage.title": "Mana lapa" }

   // src/locales/en.json
   { "pages.myPage.title": "My Page" }

   // src/locales/ru.json
   { "pages.myPage.title": "Моя страница" }
   ```

3. **Test in all locales:**
   - Visit `/lv/my-page`, `/en/my-page`, `/ru/my-page`
   - Verify content displays correctly

### Creating a New Component

```typescript
// src/components/features/MyComponent.tsx

interface MyComponentProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

export function MyComponent({ title, disabled, onClick }: MyComponentProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {title}
    </button>
  );
}
```

**Add TypeScript interface for all props** - no implicit `any` allowed.

### Adding Translations

1. **Update all three locale files:**
   ```bash
   # src/locales/lv.json
   "form.email.label": "E-pasts"

   # src/locales/en.json
   "form.email.label": "Email"

   # src/locales/ru.json
   "form.email.label": "Электронная почта"
   ```

2. **Use in components:**
   ```typescript
   import { useTranslations } from 'next-intl';

   export function EmailInput() {
     const t = useTranslations();
     return <label>{t('form.email.label')}</label>;
   }
   ```

3. **Test in all three languages** before submitting PR.

### Working with Forms

TEG uses **React Hook Form** + **Zod** for validation:

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

type FormData = z.infer<typeof schema>;

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <textarea {...register('message')} />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
}
```

### Accessing the Database

Use Supabase client for database queries:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// In a Server Component
export default async function Page() {
  const { data: appointments } = await supabase
    .from('appointments')
    .select('*')
    .limit(10);

  return <div>{/* Render appointments */}</div>;
}
```

## Testing

### Unit Tests (Vitest)

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for specific file
pnpm test src/lib/validations/email.test.ts

# Check coverage
pnpm test:coverage
```

**Example unit test:**

```typescript
// src/lib/validations/__tests__/email.test.ts
import { describe, it, expect } from 'vitest';
import { validateEmail } from '../email';

describe('validateEmail', () => {
  it('accepts valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('rejects invalid emails', () => {
    expect(validateEmail('not-an-email')).toBe(false);
  });
});
```

### E2E Tests (Playwright)

```bash
# Run E2E tests
pnpm test:e2e

# Run specific test
pnpm test:e2e appointment-booking.spec.ts

# Run in debug mode
pnpm test:e2e --debug

# Run in headed mode (see browser)
pnpm test:e2e --headed
```

**Example E2E test:**

```typescript
// e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test('submit contact form', async ({ page }) => {
  await page.goto('/lv/contact');

  await page.fill('input[name="name"]', 'Jānis');
  await page.fill('input[name="email"]', 'janis@example.com');
  await page.fill('textarea[name="message"]', 'Test message');

  await page.click('button[type="submit"]');

  // Verify success message appears
  await expect(page.locator('text=Thank you')).toBeVisible();
});
```

### Test Coverage Targets

- **Validation functions:** 90%+
- **Utility functions:** 95%+
- **API routes:** 80%+
- **Components:** 60%+ (focus on logic, not snapshot tests)

## Debugging

### Console Logging

```typescript
// In Server Components
export default function Page() {
  console.log('Server-side log');
  return <div>Page</div>;
}

// In Client Components
'use client';

export function MyComponent() {
  console.log('Client-side log');
  return <div>Component</div>;
}
```

Open browser DevTools (F12) to see client-side logs.

### Next.js DevTools

Next.js includes built-in debugging:

1. Add `debugger` statement in code
2. Open Chrome DevTools (F12)
3. Run with inspection enabled

```bash
node --inspect-brk ./node_modules/next/dist/bin/next dev
```

### TypeScript Errors

Check TypeScript compilation:

```bash
pnpm type-check
```

This catches type errors without running the full build.

### React DevTools

Install React DevTools browser extension for debugging component props and state:
- Chrome: https://chrome.google.com/webstore (search "React DevTools")
- Firefox: https://addons.mozilla.org (search "React DevTools")

### Debugging Forms

```typescript
'use client';

import { useForm, useFormState } from 'react-hook-form';

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Log all form errors
  console.log('Form errors:', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form fields */}
    </form>
  );
}
```

### Debugging Database Queries

```typescript
const { data, error } = await supabase
  .from('appointments')
  .select('*');

if (error) {
  console.error('Database error:', error.message);
  console.error('Details:', error);
}
```

## Troubleshooting

### Common Issues

#### Issue: `pnpm install` fails

**Solution:**
```bash
# Clear pnpm cache
pnpm store prune

# Remove lock file and reinstall
rm pnpm-lock.yaml
pnpm install
```

#### Issue: Development server won't start

**Solution:**
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill the process using port 3000
kill -9 <PID>

# Try starting again
pnpm dev
```

#### Issue: TypeScript errors in editor but code works

**Solution:**
```bash
# Restart TypeScript server in your editor
# VS Code: Ctrl+Shift+P → "TypeScript: Restart TS Server"

# Or rebuild
pnpm build
```

#### Issue: Form submission fails silently

**Solution:**
1. Check browser console (F12) for errors
2. Check Supabase rate limits (Arcjet configured?)
3. Verify environment variables are loaded
4. Check network tab for API response errors

#### Issue: Changes not showing in browser

**Solution:**
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

# Clear Next.js cache
rm -rf .next

# Restart dev server
pnpm dev
```

#### Issue: Email not sending

**Solution:**
1. Check RESEND_API_KEY is set in `.env.local`
2. Verify email validation is passing
3. Check Resend dashboard for delivery status
4. For testing, emails may not send with free tier

#### Issue: Multi-language routing not working

**Solution:**
1. Verify `src/middleware.ts` exists and configures i18n
2. Check locale routing in `src/app/[locale]/`
3. Clear browser cache and cookies
4. Restart dev server

### Getting Help

1. **Check documentation:**
   - CONTRIBUTING.md - Contribution guidelines
   - ARCHITECTURE.md - System design and patterns
   - README.md - Project overview

2. **Search for similar issues:**
   - GitHub Issues - Known problems and solutions
   - GitHub Discussions - Questions from other developers

3. **Check error logs:**
   - Browser console (F12)
   - Terminal where `pnpm dev` is running
   - Supabase dashboard logs

4. **Enable verbose logging:**
   ```bash
   DEBUG=* pnpm dev
   ```

## Quick Reference

### Essential Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm lint             # Check code style
pnpm test             # Run unit tests
pnpm test:e2e         # Run E2E tests
pnpm type-check       # Check TypeScript types
```

### File Locations

```
src/
├── app/[locale]/        # Pages and routes
├── components/          # React components
├── lib/                 # Utilities and helpers
├── locales/            # Translation files (lv, en, ru)
└── types/              # TypeScript type definitions

docs/                    # Documentation
e2e/                     # E2E tests
src/**/__tests__/       # Unit tests
```

### Important Patterns

- **Client Components:** Add `'use client'` at top of file
- **Server Components:** Default for pages and layouts
- **Translations:** Use `useTranslations()` hook in components
- **Forms:** React Hook Form + Zod validation
- **Database:** Supabase client with TypeScript types
- **Styling:** TailwindCSS classes in `className`

### Useful Links

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Supabase Docs:** https://supabase.com/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/

---

**Need more help?** See [CONTRIBUTING.md](./CONTRIBUTING.md) or open a GitHub discussion.
