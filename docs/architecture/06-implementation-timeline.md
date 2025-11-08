# Implementation Timeline

Detailed phase-by-phase breakdown of MVP development with hour estimates and task breakdown.

---

## Overview

**Total Estimated Duration:** 51 hours

**Realistic Calendar Duration:** 6-7 days of focused work (~8 hours per day)

**Start Date:** Upon architecture approval

**Target Completion:** ~6-7 calendar days

**Buffer Built-In:** 5% contingency (already included in hour estimates)

---

## Phase Breakdown

```
PHASE 1: Boilerplate Cleanup (8 hours)
├─ Remove Clerk auth (2h)
├─ Remove DrizzleORM (1h)
├─ Remove unnecessary modules (2h)
├─ Update workflows (1h)
├─ Remove Crowdin (0.5h)
└─ Clean demo pages (1.5h)

PHASE 2: Environment & Configuration (6 hours)
├─ T3 Env setup (1h)
├─ i18n configuration (1h)
├─ Arcjet setup (2h)
└─ Theme branding (2h)

PHASE 3: Database & Backend (10 hours)
├─ Supabase project setup (0.5h)
├─ Database schema creation (1h)
├─ TypeScript types (1h)
├─ Resend integration (1h)
├─ Email templates (3h)
└─ Google Calendar API setup (3.5h)

PHASE 4: Forms Implementation (12 hours)
├─ Contact form (3h)
├─ Appointment booking (5h)
├─ Service request form (2h)
└─ Form styling (2h)

PHASE 5: SEO & Content (10 hours)
├─ SEO metadata (2h)
├─ JSON-LD structured data (3h)
├─ Sitemap generation (1h)
├─ Open Graph tags (1h)
├─ Privacy policy (2h)
└─ robots.txt (1h)

PHASE 6: Testing & QA (5 hours)
├─ Form testing (all langs) (2h)
├─ Email verification (1h)
├─ Calendar integration (1h)
└─ Cross-browser (1h)

TOTAL: 51 hours
```

---

## Phase 1: Boilerplate Cleanup (8 hours)

**Duration:** Day 1 Morning (8 hours)

**Objective:** Clean boilerplate of unnecessary features, establish clean foundation

### Task 1.1: Remove Clerk Authentication (2 hours)

**What to Remove:**
- Clerk configuration from environment
- Auth middleware from app
- Sign-in/Sign-up pages
- User context providers
- Protected route examples
- Auth-related dependencies

**Steps:**
```bash
1. Find all Clerk imports: grep -r "clerk" src/
2. Remove Clerk components and routes
3. Remove from package.json
4. Remove from .env.local
5. Remove middleware auth checks
6. Clean up app/layout.tsx
7. Test: npm run build succeeds
```

**Files to Modify:**
- `src/middleware.ts` - Remove Clerk middleware
- `src/app/layout.tsx` - Remove ClerkProvider
- `package.json` - Remove @clerk packages
- `.env.example` - Remove Clerk vars
- Delete: `src/app/(auth)/*` pages

**Verification:**
- `npm run build` completes without errors
- No Clerk-related console warnings
- App starts without auth errors

---

### Task 1.2: Remove DrizzleORM (1 hour)

**What to Remove:**
- Drizzle ORM configuration
- Migration files
- Drizzle Kit config
- ORM dependencies
- Database type definitions (will create manually)

**Steps:**
```bash
1. Remove from package.json: drizzle-orm, drizzle-kit, postgres
2. Delete: drizzle/ folder (migrations)
3. Delete: drizzle.config.ts
4. Remove from TypeScript config
5. Test: npm run build
```

**Rationale:**
- Will use Supabase client directly
- Manual TypeScript types for 3 tables only
- Simpler setup, faster for MVP

**Verification:**
- `npm run build` succeeds
- No "drizzle" references in codebase
- Project builds cleanly

---

### Task 1.3: Remove Unnecessary Modules (2 hours)

**Modules to Remove from Boilerplate:**

| Module | Reason | Time |
|--------|--------|------|
| Storybook | Overkill for marketing site | 0.5h |
| Codecov | Coverage tracking optional | 0.25h |
| Visual regression testing | Not needed for MVP | 0.25h |
| Stripe integration | No payments | 0.25h |
| Sendgrid setup | Using Resend | 0.25h |
| Docker config | Vercel handles deployment | 0.25h |
| E2E environment setup | Will configure Playwright separately | 0.25h |

**Verification:**
- `npm run build` completes
- No unused dependency warnings
- Project structure clean

---

### Task 1.4: Update GitHub Actions Workflows (1 hour)

**Remove from CI/CD:**
- Codecov upload steps
- Storybook build steps
- Stripe/SendGrid deployment steps

**Update Workflows:**
```yaml
# .github/workflows/test.yml
name: Test & Build

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run lint # ESLint
      - run: npm run type-check # TypeScript
      - run: npm run test # Vitest
      - run: npm run build # Next.js build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    # Vercel handles auto-deploy from GitHub
```

**Verification:**
- GitHub Actions run successfully on next push
- No failures in CI pipeline
- Build artifacts generated

---

### Task 1.5: Remove Crowdin Internationalization (0.5 hour)

**What to Remove:**
- Crowdin configuration files
- Crowdin API keys from env
- Crowdin pull/push scripts
- Any Crowdin-related dependencies

**Reasoning:**
- Translations exist locally
- Team can manage translations directly
- Can add Crowdin post-MVP if needed

**Verification:**
- i18n still works with local JSON files
- npm run build succeeds

---

### Task 1.6: Clean Demo Pages & Components (1.5 hours)

**Remove Example Content:**
- Example dashboard pages
- Demo API routes
- Sample data components
- Placeholder forms
- Tutorial pages

**Keep:**
- Base layouts
- Component library (UI components)
- API route structure
- Middleware pattern

**Steps:**
```bash
1. Delete: src/app/(dashboard)/* or equivalent demo routes
2. Delete: src/app/examples/*
3. Delete: demo components from components/
4. Keep: component library (Button, Card, Form, etc)
5. Simplify: app/layout.tsx to base structure
6. Test: npm run dev starts cleanly
```

**Verification:**
- `npm run dev` starts without errors
- No 404s from removed pages
- Clean directory structure

---

## Phase 2: Environment & Configuration (6 hours)

**Duration:** Day 1 Afternoon (6 hours)

**Objective:** Configure all external services, environment variables, theming

### Task 2.1: T3 Env Setup (1 hour)

**Purpose:** Type-safe environment variables

**Create File:** `src/env.ts`

```typescript
import { z } from 'zod';

export const env = z.object({
  // Database
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),

  // Email
  RESEND_API_KEY: z.string(),

  // Calendar
  GOOGLE_CALENDAR_CLIENT_ID: z.string(),
  GOOGLE_CALENDAR_CLIENT_SECRET: z.string(),
  GOOGLE_CALENDAR_REFRESH_TOKEN: z.string(),
  GOOGLE_CALENDAR_CALENDAR_ID: z.string(),

  // Monitoring
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),

  // Security
  ARCJET_KEY: z.string(),

  // App
  NEXT_PUBLIC_APP_URL: z.string().url().default('https://teg.lv'),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.enum(['lv', 'en', 'ru']).default('lv'),
  NEXT_PUBLIC_LOCALES: z.string().default('lv,en,ru'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
}).parse(process.env);
```

**Create `.env.example`:**
```bash
# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (Resend)
RESEND_API_KEY=

# Calendar (Google)
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
GOOGLE_CALENDAR_REFRESH_TOKEN=
GOOGLE_CALENDAR_CALENDAR_ID=

# Monitoring
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Security (Arcjet)
ARCJET_KEY=

# Application
NEXT_PUBLIC_APP_URL=https://teg.lv
NEXT_PUBLIC_DEFAULT_LOCALE=lv
NEXT_PUBLIC_LOCALES=lv,en,ru
```

**Test:**
- Import env in a component
- TypeScript should provide autocomplete
- Missing variables should cause build error

---

### Task 2.2: next-intl Configuration (1 hour)

**Setup Folder Structure:**
```
src/
├── i18n/
│   └── config.ts          # i18n configuration
├── messages/              # Translation files
│   ├── lv.json           # Latvian (complete)
│   ├── en.json           # English (to complete)
│   └── ru.json           # Russian (limited)
└── middleware.ts         # Locale detection
```

**Create `src/i18n/config.ts`:**
```typescript
import type { Config } from 'next-intl';

export const defaultLocale = 'lv';
export const locales = ['lv', 'en', 'ru'] as const;

export const config = {
  locales,
  defaultLocale,
} satisfies Config;
```

**Create `src/middleware.ts`:**
```typescript
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    // Match all pathnames except those starting with:
    // - _next
    // - api
    // - images
    // - favicon.ico
    '/((?!_next|api|images|favicon.ico).*)',
  ],
};
```

**Create Message Files:**
```json
// src/messages/lv.json
{
  "nav": {
    "home": "Sākums",
    "services": "Pakalpojumi",
    "about": "Par mums",
    "contact": "Kontakts"
  }
}
```

**Setup Root Layout:**
```typescript
// src/app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n/config';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Test:**
- Visit http://localhost:3000/lv/ → Latvian page
- Visit http://localhost:3000/en/ → English page
- useTranslations() hook works in components
- i18n-check passes validation

---

### Task 2.3: Arcjet Security Setup (2 hours)

**Create Arcjet Rules Middleware:**

```typescript
// src/lib/arcjet/rules.ts
import arcjet, {
  detectBot,
  rateLimit,
} from '@arcjet/next';

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Global rate limit
    rateLimit({
      mode: 'LIVE',
      characteristics: ['ip.src'],
      requests: 100,
      window: '1h',
    }),

    // Bot detection
    detectBot({
      mode: 'LIVE',
      block: ['CATEGORY:SCRAPER', 'CATEGORY:AUTOMATED'],
    }),
  ],
});
```

**Per-Route Rate Limits:**

```typescript
// src/app/api/forms/contact/route.ts
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    rateLimit({
      mode: 'LIVE',
      characteristics: ['ip.src'],
      requests: 5, // 5 per minute
      window: '1m',
    }),
  ],
});

export async function POST(req: Request) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return new Response('Too many requests', { status: 429 });
  }
  // Handle request...
}
```

**Arcjet Console Setup:**
1. Create account at arcjet.com
2. Create project (next-app)
3. Get API key
4. Add to .env.local
5. Configure rules in console (optional)

**Test:**
- Simulate requests: curl http://localhost:3000/api/forms/contact multiple times
- 5th request should get 429 rate limit response
- Bot detection logs in console

---

### Task 2.4: TEG Brand Theme Configuration (2 hours)

**Update Tailwind Config:**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // TEG Brand Colors
        primary: {
          50: '#f0f9ff',
          500: '#0066cc', // TEG blue
          600: '#0052a3',
          700: '#003d7a',
          900: '#001f3f',
        },
        secondary: {
          500: '#00a86b', // Green (inspection/trust)
          600: '#008855',
        },
        accent: {
          500: '#ff6600', // Orange (CTA emphasis)
          600: '#cc5200',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-sora)'],
      },
      spacing: {
        // Add any custom spacing if needed
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
```

**Setup Fonts:**

```typescript
// src/app/layout.tsx
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Create Global Styles:**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-900;
  }

  h1 {
    @apply font-serif text-4xl font-bold;
  }

  h2 {
    @apply font-serif text-3xl font-bold;
  }

  h3 {
    @apply font-serif text-2xl font-bold;
  }
}

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary-600 text-white rounded-lg
      hover:bg-primary-700 transition-colors;
  }

  .btn-secondary {
    @apply px-6 py-3 bg-secondary-500 text-white rounded-lg
      hover:bg-secondary-600 transition-colors;
  }
}
```

**Test:**
- Colors display correctly in components
- Fonts load correctly (check DevTools Network)
- Tailwind classes work as expected

---

## Phase 3: Database & Backend Services (10 hours)

**Duration:** Day 2 Full (10 hours)

**Objective:** Setup all backend infrastructure (DB, email, calendar)

### Task 3.1: Supabase Project Setup (0.5 hour)

**Steps:**
1. Visit supabase.com
2. Create new project (name: teg-website)
3. Choose region: Amsterdam (closest to Latvia)
4. Wait for project to initialize (2-3 minutes)
5. Get API credentials:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (from Settings → API)
6. Add to `.env.local`

**Test:**
```bash
npm install @supabase/supabase-js
```

Create test file:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Test connection
const { data, error } = await supabase.from('information_schema.tables').select('*');
console.log(error ? 'Failed' : 'Connected');
```

---

### Task 3.2: Database Schema Creation (1 hour)

**Create Tables in Supabase Studio:**

1. Open Supabase Dashboard → SQL Editor
2. Create three tables (copy SQL from 04-database-schema.md)
3. Run each creation script

**SQL Scripts to Execute:**

```sql
-- Execute all SQL from 04-database-schema.md
-- Tables: appointments, contact_submissions, service_requests
-- Indexes: For common queries
-- Triggers: For updated_at timestamps
```

**Verification:**
- All 3 tables appear in Supabase Studio
- All indexes created
- Triggers functional

---

### Task 3.3: TypeScript Database Types (1 hour)

**Create File:** `src/lib/database/types.ts`

(Copy types from 04-database-schema.md)

**Create Queries File:** `src/lib/database/queries.ts`

```typescript
import type {
  Appointment,
  ContactSubmission,
  ServiceRequest,
} from './types';
import { supabase } from '@/lib/supabase/client';

// Appointment queries
export async function createAppointment(data: AppointmentInsert) {
  const { data: appointment, error } = await supabase
    .from('appointments')
    .insert([data])
    .select()
    .single();
  if (error) {
    throw error;
  }
  return appointment;
}

// Contact queries
export async function createContactSubmission(
  data: ContactSubmissionInsert
) {
  const { data: submission, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single();
  if (error) {
    throw error;
  }
  return submission;
}

// Service request queries
export async function createServiceRequest(data: ServiceRequestInsert) {
  const { data: request, error } = await supabase
    .from('service_requests')
    .insert([data])
    .select()
    .single();
  if (error) {
    throw error;
  }
  return request;
}
```

**Test:**
- TypeScript autocomplete works in components
- No type errors when using queries

---

### Task 3.4: Resend Email Setup (1 hour)

**Setup:**
1. Visit resend.com
2. Sign up (free account)
3. Create API key
4. Add to `.env.local`: `RESEND_API_KEY=...`

**Create Email Templates:**

```typescript
// src/lib/email/templates/ContactConfirmation.tsx
import { Html, Body, Container, Text } from '@react-email/components';

interface ContactConfirmationProps {
  name: string;
  locale: 'lv' | 'en' | 'ru';
}

const templates = {
  lv: {
    subject: 'Paldies jūsu vēstulei',
    greeting: 'Sveiki',
    message:
      'Mēs saņēmām jūsu vēstuli un jums drīz atbildēsim.',
  },
  en: {
    subject: 'Thank you for your message',
    greeting: 'Hello',
    message:
      "We received your message and will respond soon.",
  },
  ru: {
    subject: 'Спасибо за ваше сообщение',
    greeting: 'Привет',
    message:
      'Мы получили ваше сообщение и скоро ответим.',
  },
};

export function ContactConfirmation({
  name,
  locale,
}: ContactConfirmationProps) {
  const content = templates[locale];

  return (
    <Html>
      <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <Container style={{ maxWidth: '600px' }}>
          <Text>{content.greeting} {name},</Text>
          <Text>{content.message}</Text>
          <Text>
            {locale === 'lv' ? 'Ar cieņu,' : 'Sincerely,'} TEG komanda
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
```

**Create Email Sender Function:**

```typescript
// src/lib/email/send.ts
import { Resend } from 'resend';
import { ContactConfirmation } from './templates/ContactConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactConfirmation({
  to,
  name,
  locale,
}: {
  to: string;
  name: string;
  locale: 'lv' | 'en' | 'ru';
}) {
  const subjectLine = {
    lv: 'Paldies jūsu vēstulei',
    en: 'Thank you for your message',
    ru: 'Спасибо за ваше сообщение',
  };

  return resend.emails.send({
    from: 'info@teg.lv',
    to,
    subject: subjectLine[locale],
    react: <ContactConfirmation name={name} locale={locale} />,
  });
}
```

**Test:**
- Install @react-email/components: `npm install @react-email/components`
- Test email sending with test form

---

### Task 3.5: Email Templates Multi-Language (3 hours)

**Create Templates for Each Language:**

1. **ContactConfirmation.tsx** - Contact form confirmation
2. **AppointmentConfirmation.tsx** - Appointment booking confirmation
3. **ServiceRequestConfirmation.tsx** - Service request acknowledgment

**Each template needs:**
- English version
- Latvian version
- Russian version
- Consistent branding
- Clear CTA (if applicable)
- Professional footer

**Example Template Structure:**

```typescript
// Latvian
const lv = {
  subject: 'Jūsu appointment apstiprinājums',
  greeting: 'Sveiki',
  appointmentDate: date => `Jūsu pieņemšana: ${date}`,
  footer: 'TEG - Transporta Ekspertu Grupa',
};

// English
const en = {
  subject: 'Your appointment confirmation',
  greeting: 'Hello',
  appointmentDate: date => `Your appointment: ${date}`,
  footer: 'TEG - Transport Experts Group',
};

// Russian
const ru = {
  subject: 'Подтверждение вашего назначения',
  greeting: 'Привет',
  appointmentDate: date => `Ваше назначение: ${date}`,
  footer: 'TEG - Группа экспертов по транспорту',
};
```

**Time Breakdown:**
- ContactConfirmation: 1 hour (write once, translate)
- AppointmentConfirmation: 1.5 hours (more complex)
- ServiceRequestConfirmation: 0.5 hours (simple)

**Testing:**
- Send test emails to all three language versions
- Verify formatting in email client
- Check links are correct

---

### Task 3.6: Google Calendar API Setup (3.5 hours)

**Step 1: Create Google Cloud Project (0.5 hour)**

1. Visit console.cloud.google.com
2. Create new project (name: teg-website)
3. Enable Google Calendar API:
   - Search "Google Calendar API"
   - Click "Enable"

**Step 2: Create OAuth Credentials (1 hour)**

1. Go to "Credentials"
2. Create "OAuth 2.0 Client IDs"
3. Application type: "Web application"
4. Authorized redirect URIs:
   - http://localhost:3000/api/auth/google/callback
   - https://teg.lv/api/auth/google/callback (production)
5. Copy Client ID and Secret

**Step 3: Get Refresh Token (1 hour)**

Create a setup script to get refresh token:

```typescript
// scripts/get-google-refresh-token.ts
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CALENDAR_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
  'http://localhost:3000/api/auth/google/callback'
);

// Generate auth URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/calendar'],
});

console.log('Visit this URL:', authUrl);

// After user authorizes, exchange code for tokens:
// const { tokens } = await oauth2Client.getToken(code);
// Save: tokens.refresh_token
```

**Step 4: Create Calendar Integration Module (1 hour)**

```typescript
// src/lib/google-calendar/index.ts
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CALENDAR_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET
);

// Set credentials
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN,
});

const calendar = google.calendar({
  version: 'v3',
  auth: oauth2Client,
});

// Check availability
export async function checkAvailability(
  date: Date,
  duration: number = 120
) {
  const startTime = new Date(date);
  const endTime = new Date(startTime.getTime() + duration * 60000);

  try {
    const events = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_CALENDAR_ID!,
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
    });

    return !events.data.items?.length;
  } catch (error) {
    console.error('Calendar check error:', error);
    return false;
  }
}

// Create event
export async function createEvent(data: {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  attendeeEmail: string;
}) {
  try {
    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_CALENDAR_ID!,
      requestBody: {
        summary: data.title,
        description: data.description,
        start: { dateTime: data.startTime.toISOString() },
        end: { dateTime: data.endTime.toISOString() },
        attendees: [{ email: data.attendeeEmail }],
        conferenceData: {
          conferenceType: 'hangoutsMeet',
        },
      },
      conferenceDataVersion: 1,
    });

    return event.data;
  } catch (error) {
    console.error('Calendar event creation error:', error);
    throw error;
  }
}
```

**Environment Variables to Add:**
```
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
GOOGLE_CALENDAR_REFRESH_TOKEN=
GOOGLE_CALENDAR_CALENDAR_ID=primary
```

**Test:**
- Call checkAvailability() → Should return true/false
- Create test event → Should appear in Google Calendar
- Error handling → Graceful degradation

---

## Phase 4: Forms Implementation (12 hours)

**Duration:** Day 3 (12 hours)

**Objective:** Implement and test all three user forms

### Task 4.1: Contact Form (3 hours)

**Zod Schema:**

```typescript
// src/lib/validations/contact-form.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().max(200).optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000),
  locale: z.enum(['lv', 'en', 'ru']),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

**React Component:**

```typescript
// src/components/forms/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact-form';
import { useState } from 'react';

export function ContactForm({ locale }: { locale: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      locale: locale as 'lv' | 'en' | 'ru',
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send form');
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }

  if (submitted) {
    return <div className="text-green-600">Thank you for contacting us!</div>;
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <input {...form.register('name')} placeholder="Your name" />
      {form.formState.errors.name && (
        <span className="text-red-600">{form.formState.errors.name.message}</span>
      )}

      <input {...form.register('email')} placeholder="Your email" />
      {form.formState.errors.email && (
        <span className="text-red-600">{form.formState.errors.email.message}</span>
      )}

      <textarea {...form.register('message')} placeholder="Your message" />
      {form.formState.errors.message && (
        <span className="text-red-600">{form.formState.errors.message.message}</span>
      )}

      <button type="submit" disabled={form.formState.isSubmitting}>
        Send Message
      </button>

      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
}
```

**API Route:**

```typescript
import arcjet, { rateLimit } from '@arcjet/next';
import { NextResponse } from 'next/server';
import { createContactSubmission } from '@/lib/database/queries';
import { sendContactConfirmation } from '@/lib/email/send';
// src/app/api/forms/contact/route.ts
import { contactFormSchema } from '@/lib/validations/contact-form';

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    rateLimit({
      mode: 'LIVE',
      characteristics: ['ip.src'],
      requests: 5,
      window: '1m',
    }),
  ],
});

export async function POST(req: Request) {
  // Check rate limit and bots
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  // Parse and validate
  const body = await req.json();
  const validatedData = contactFormSchema.parse(body);

  // Insert to database
  const submission = await createContactSubmission({
    name: validatedData.name,
    email: validatedData.email,
    phone: validatedData.phone,
    subject: validatedData.subject,
    message: validatedData.message,
    locale: validatedData.locale,
    status: 'new',
  });

  // Send confirmation email
  await sendContactConfirmation({
    to: validatedData.email,
    name: validatedData.name,
    locale: validatedData.locale,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
```

**Time Breakdown:**
- Schema: 30 min
- Component: 60 min
- API route: 60 min
- Testing: 30 min

---

### Task 4.2: Appointment Booking Form (5 hours)

**Zod Schema + Component + API Route**

(Similar pattern to ContactForm, but with:
- Date/time picker
- Service type selection
- Vehicle info field
- Calendar integration
- More complex validation)

**Time Breakdown:**
- Schema: 1 hour
- Component + date picker: 2 hours
- API route + Calendar: 1.5 hours
- Testing: 0.5 hours

---

### Task 4.3: Service Request Form (2 hours)

**Quick callback form (minimal fields)**

**Time Breakdown:**
- Schema: 20 min
- Component: 40 min
- API route: 40 min
- Testing: 20 min

---

### Task 4.4: Form Styling (2 hours)

**Apply Tailwind CSS styling:**
- Consistent button styles
- Form field styling
- Error message styling
- Loading states
- Success/error animations
- Responsive layout

---

## Phase 5: SEO & Content (10 hours)

**Duration:** Day 4 Morning-Afternoon (10 hours)

**Objective:** Optimize for search engines, add structured data

### Task 5.1: SEO Metadata Configuration (2 hours)

**Homepage Metadata:**

```typescript
// src/app/[locale]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata(props: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = props.params.locale;

  const metadata = {
    lv: {
      title: 'TEG - Auto Ekspertīze un Tehniskais Serviss',
      description: 'Profesionāla automašīnu pārbaude no €100. Pilnīgs diagnostikas ziņojums 24 stundās.',
      keywords: 'auto pārbaude, pre-pārdošanas ekspertīze, diagnostika',
    },
    en: {
      title: 'TEG - Professional Car Inspection & Roadside Service',
      description: 'Expert car inspection from €100. Complete diagnostic report in 24 hours.',
      keywords: 'car inspection, pre-purchase inspection, vehicle diagnostics',
    },
    ru: {
      title: 'TEG - Профессиальная проверка автомобилей',
      description: 'Профессиональная проверка автомобилей с €100.',
      keywords: 'проверка автомобилей, диагностика, техническое обслуживание',
    },
  };

  const current = metadata[locale as keyof typeof metadata] || metadata.en;

  return {
    title: current.title,
    description: current.description,
    keywords: current.keywords,
    openGraph: {
      title: current.title,
      description: current.description,
      url: `https://teg.lv/${locale}`,
      images: [
        {
          url: 'https://teg.lv/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: current.title,
      description: current.description,
      images: ['https://teg.lv/og-image.jpg'],
    },
    alternates: {
      languages: {
        lv: 'https://teg.lv/lv',
        en: 'https://teg.lv/en',
        ru: 'https://teg.lv/ru',
      },
    },
  };
}
```

**Repeat for Service Pages:**
- /services
- /services/inspection
- /services/search-delivery
- /services/mobile-service
- /about
- /contact

**Time Breakdown:**
- Homepage: 30 min
- 6 Service pages: 90 min

---

### Task 5.2: JSON-LD Structured Data (3 hours)

**Create Schema Components:**

```typescript
// src/lib/schema/types.ts
export type LocalBusinessSchema = {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  'name': string;
  'image': string;
  'description': string;
  'address': PostalAddress;
  'telephone': string;
  'url': string;
  'priceRange': string;
  'openingHoursSpecification': OpeningHours[];
};

export type ServiceSchema = {
  '@context': 'https://schema.org';
  '@type': 'Service';
  'name': string;
  'description': string;
  'provider': LocalBusiness;
  'price': string;
  'priceCurrency': string;
};
```

**Create Schema Generator:**

```typescript
// src/lib/schema/generate.ts
export function generateLocalBusinessSchema(locale: string) {
  const data = {
    lv: {
      name: 'TEG - Transporta Ekspertu Grupa',
      description: 'Profesionāla auto pārbaude un tehniskais serviss',
    },
    // ... other locales
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': data[locale].name,
    'description': data[locale].description,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'LV',
    },
    'telephone': '+371 25 201 710',
    'priceRange': '€30-€350',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00',
      },
    ],
  };
}
```

**Add to Page Layouts:**

```typescript
// In layout.tsx or page.tsx
import { generateLocalBusinessSchema } from '@/lib/schema/generate';

export function LocalBusinessSchema({ locale }: { locale: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateLocalBusinessSchema(locale)),
      }}
    />
  );
}
```

**Schemas to Create:**
1. LocalBusiness (company info)
2. Service (each service type)
3. BreadcrumbList (navigation)
4. FAQPage (if we add FAQ)

**Time Breakdown:**
- LocalBusiness: 1 hour
- Service schemas: 1 hour
- BreadcrumbList: 0.5 hours
- Testing in Schema Validator: 0.5 hours

---

### Task 5.3: Dynamic Sitemap Generation (1 hour)

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

const locales = ['lv', 'en', 'ru'] as const;
const baseUrl = 'https://teg.lv';

const routes = ['', '/services', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return entries;
}
```

---

### Task 5.4: Open Graph & Twitter Cards (1 hour)

**Already included in generateMetadata()** from Task 5.1

**Verification:**
- Test with Meta debugger: facebook.com/developers/tools/debug/
- Check Twitter card: twitter.com/intent/tweet?url=...

---

### Task 5.5: Privacy Policy Page (2 hours)

**Create Page:**

```typescript
// src/app/[locale]/privacy/page.tsx
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <main className="container mx-auto py-12">
      <h1>{t('title')}</h1>
      <section>{t('introduction')}</section>
      <section>{t('dataCollection')}</section>
      <section>{t('dataUsage')}</section>
      <section>{t('userRights')}</section>
      <section>{t('contact')}</section>
    </main>
  );
}
```

**GDPR Sections:**
- Introduction
- Data We Collect
- How We Use Data
- Your Rights
- Contact Information
- Cookie Policy
- Third-party Services (Sentry, PostHog, etc.)

**Translations:**
- Latvian (primary)
- English (must complete)
- Russian (basic)

---

### Task 5.6: robots.txt Configuration (1 hour)

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://teg.lv/sitemap.xml',
  };
}
```

---

## Phase 6: Testing & QA (5 hours)

**Duration:** Day 5 (5 hours)

### Task 6.1: Form Testing (All Languages) (2 hours)

**Test Scenarios:**
1. Contact form in all 3 languages
2. Appointment booking with date/time
3. Service request form
4. Error handling (invalid inputs)
5. Success confirmations
6. Email delivery

**Test Steps:**
- Fill form with valid data → Submit → Check DB
- Fill form with invalid data → Check error messages
- Check email arrives in inbox
- Verify email is in correct language
- Test spam/bot detection (Arcjet)

---

### Task 6.2: Email Delivery Verification (1 hour)

**Verify Each Template:**
1. ContactConfirmation (all 3 languages)
2. AppointmentConfirmation (all 3 languages)
3. ServiceRequestConfirmation (all 3 languages)

**Check:**
- Email arrives within 5 seconds
- Formatting is correct
- Links work
- Language is correct
- From address is correct (info@teg.lv)

---

### Task 6.3: Google Calendar Integration Testing (1 hour)

**Test Scenarios:**
1. Create appointment → Check Google Calendar
2. Verify event details (date, time, attendee)
3. Test availability checking
4. Test edge cases (past dates, double-booking)

---

### Task 6.4: Cross-Browser Testing (1 hour)

**Test Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (if on Mac)
- Edge
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Test:**
- Forms look good on mobile
- Language switcher works
- No console errors
- All buttons/links clickable
- Responsive layout

---

## Daily Schedule Example

### Day 1
```
08:00-16:00 (8h) - Phase 1: Boilerplate Cleanup
├─ 08:00-10:00: Remove Clerk & DrizzleORM
├─ 10:00-12:00: Remove unused modules, update workflows
└─ 13:00-16:00: Clean demo pages

16:00-19:00 (3h) - Phase 2 Start: Environment Setup
├─ 16:00-17:00: T3 Env
├─ 17:00-18:00: next-intl
└─ 18:00-19:00: Arcjet
```

### Day 2
```
08:00-14:00 (6h) - Phase 2 Complete: Theme & Database
├─ 08:00-10:00: Tailwind theme
├─ 10:00-14:00: Supabase setup, database schema

14:00-21:00 (7h) - Phase 3: Email & Calendar
├─ 14:00-15:00: Resend setup
├─ 15:00-18:00: Email templates
└─ 18:00-21:00: Google Calendar API
```

### Day 3
```
08:00-20:00 (12h) - Phase 4: All Forms
├─ 08:00-11:00: Contact form
├─ 11:00-16:00: Appointment form
├─ 16:00-18:00: Service request form
└─ 18:00-20:00: Styling all forms
```

### Day 4
```
08:00-18:00 (10h) - Phase 5: SEO
├─ 08:00-10:00: Metadata
├─ 10:00-13:00: JSON-LD schemas
├─ 13:00-14:00: Sitemap & robots.txt
├─ 14:00-16:00: Privacy policy
└─ 16:00-18:00: OG tags, testing
```

### Day 5
```
08:00-13:00 (5h) - Phase 6: Testing & QA
├─ 08:00-10:00: Form testing
├─ 10:00-11:00: Email verification
├─ 11:00-12:00: Calendar testing
└─ 12:00-13:00: Cross-browser, launch checklist

13:00+ - Deploy to Vercel & Live!
```

---

## Quality Assurance Checklist

### Before Launch (Day 5 Afternoon)

- [ ] All 3 forms submit successfully
- [ ] Emails arrive in correct language
- [ ] Database has sample data
- [ ] Google Calendar creates events
- [ ] No console errors in DevTools
- [ ] Mobile layout responsive
- [ ] Language switcher works
- [ ] Rate limiting works (Arcjet)
- [ ] SEO metadata populated
- [ ] JSON-LD validates in schema.org validator
- [ ] Sitemap.xml accessible
- [ ] robots.txt correct
- [ ] HTTPS working
- [ ] All links work (no 404s)
- [ ] Contact info correct (phone, email, hours)
- [ ] English translation complete (no Lorem ipsum)
- [ ] PDF/screenshots for stakeholder approval

---

## Buffer & Contingencies

**Built-in Buffers:**
- 5% time buffer in each estimate
- Async tasks (email, calendar) don't block development
- Can parallelize some work

**If Behind Schedule:**
1. Defer cross-browser testing (MVP: Chrome only)
2. Defer complex email templates (use simpler versions)
3. Defer Russian language (just English + Latvian)
4. Defer calendar visualization (just store in DB)

**If Ahead of Schedule:**
1. Add more rigorous testing
2. Implement caching strategies
3. Optimize images
4. Add more email templates
5. Implement blog/content management

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** Detailed timeline and tasks documented
