# Architecture Overview

## High-Level System Architecture

```
TEG Website Architecture (MVP)
================================

┌─────────────────────────────────────────────────────────────┐
│                    PUBLIC WEBSITE                            │
│              (Next.js 16 + React 19)                         │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ Latvian  │  │ English  │  │ Russian  │                  │
│  │  /lv/*   │  │  /en/*   │  │  /ru/*   │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                              │
│  Language Selection → next-intl Middleware → Routing       │
│                                                              │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
    ┌────────┐  ┌────────┐  ┌──────────┐
    │ Pages  │  │ Forms  │  │  Static  │
    │        │  │        │  │  Content │
    │ -Home  │  │-Contact│  │          │
    │ -About │  │-Appt   │  │ SEO Data │
    │ -Svcs  │  │-Service│  │ JSON-LD  │
    │ -etc   │  │        │  │          │
    └──┬─────┘  └───┬────┘  └──────────┘
       │            │
       │  ┌─────────┼─────────┐
       │  │         │         │
       ▼  ▼         ▼         ▼
    ┌─────────────────────────────────────┐
    │       BACKEND SERVICES              │
    │                                     │
    │  ┌──────────────────────────────┐  │
    │  │ API Routes (Next.js /api/*)  │  │
    │  │                              │  │
    │  │ - /api/forms/contact         │  │
    │  │ - /api/forms/appointment     │  │
    │  │ - /api/forms/service-request │  │
    │  │ - /api/calendar/availability │  │
    │  └──────────────────────────────┘  │
    │                                     │
    │  Middleware (Arcjet):               │
    │  - Rate Limiting                    │
    │  - Bot Detection                    │
    │  - DDoS Protection                  │
    │                                     │
    └──┬──┬──────────────────┬────────┬──┘
       │  │                  │        │
       ▼  ▼                  ▼        ▼
    ┌──────┐  ┌──────────┐  ┌────┐  ┌─────┐
    │Supa- │  │ Resend   │  │Goog│  │Sentry│
    │base  │  │ Email    │  │Cal │  │Errors│
    │Data  │  │ Service  │  │API │  │Track │
    │base  │  │          │  │    │  │      │
    └──┬───┘  └────┬─────┘  └──┬─┘  └──┬──┘
       │            │           │      │
       ▼            ▼           ▼      ▼
    ┌─────────────────────────────────────┐
    │     MONITORING & ANALYTICS          │
    │                                     │
    │  PostHog Analytics:                 │
    │  - Event tracking                   │
    │  - Session replay                   │
    │  - Conversion funnels               │
    │  - Feature flags (future)           │
    │                                     │
    │  Sentry Error Tracking:             │
    │  - Exception monitoring             │
    │  - Performance metrics              │
    │  - User session context             │
    │                                     │
    └─────────────────────────────────────┘
```

---

## Frontend Architecture

### Page Structure & Routing

```
Next.js App Router (src/app/)
├── [locale]/                    # Dynamic locale parameter
│   ├── layout.tsx              # Root layout (meta, fonts, theme)
│   │
│   ├── page.tsx                # Homepage
│   │
│   ├── services/               # Service pages
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Services overview
│   │   ├── inspection/
│   │   │   └── page.tsx
│   │   ├── search-delivery/
│   │   │   └── page.tsx
│   │   └── mobile-service/
│   │       └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── [other routes]
│
├── api/                        # API routes
│   ├── forms/
│   │   ├── contact/
│   │   │   └── route.ts        # POST /api/forms/contact
│   │   ├── appointment/
│   │   │   └── route.ts        # POST /api/forms/appointment
│   │   └── service-request/
│   │       └── route.ts        # POST /api/forms/service-request
│   │
│   └── calendar/
│       └── availability/
│           └── route.ts        # GET /api/calendar/availability
│
├── middleware.ts               # i18n routing, security headers
└── layout.tsx                  # Root layout (outside [locale])
```

### Component Hierarchy

```
src/components/
├── ui/                         # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   └── [etc]
│
├── forms/                      # Form components
│   ├── ContactForm.tsx
│   ├── AppointmentForm.tsx
│   ├── ServiceRequestForm.tsx
│   └── FormField.tsx
│
├── layout/                     # Page structure
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── LanguageSwitcher.tsx
│
├── sections/                   # Large page sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── CTASection.tsx
│   └── [etc]
│
└── features/                   # Feature-specific components
    ├── PricingCard.tsx
    ├── ServiceCard.tsx
    └── [etc]
```

### Multi-Language Routing

**Flow:**

```
User visits https://teg.lv/
           │
           ▼
Middleware detects locale
(Browser language, cookie, URL)
           │
           ▼
Redirect to default locale: /lv/
           │
           ▼
next-intl provides translations
from messages/lv.json
           │
           ▼
Render page in Latvian
```

**Language Switcher:**

```
User clicks "EN" button
           │
           ▼
Navigate to /en/[current-page]
           │
           ▼
Middleware routes to English version
           │
           ▼
next-intl loads messages/en.json
           │
           ▼
Page rerenders in English
           │
           ▼
Cookie set: NEXT_INTL_LOCALE=en
(Remember choice on next visit)
```

### Form Component Pattern

```typescript
// Pattern: react-hook-form + Zod validation

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // 1. Client-side validation (Zod)
    // 2. POST to /api/forms/contact
    // 3. Server-side validation (Zod again)
    // 4. Insert to Supabase
    // 5. Send email via Resend
    // 6. Return confirmation to user
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields from FormField.tsx */}
      {/* Submit button */}
    </form>
  );
}
```

---

## Backend Services Architecture

### API Routes Pattern

**All API routes follow this pattern:**

```typescript
// /app/api/forms/contact/route.ts

import { sendEmail } from '@/lib/email/send-contact-confirmation';
import { createSupabaseClient } from '@/lib/supabase';
import { contactFormSchema } from '@/lib/validations/contact-form';

export async function POST(req: Request) {
  // 1. PARSE & VALIDATE
  const body = await req.json();
  const validatedData = contactFormSchema.parse(body); // Zod validation

  // 2. INSERT TO DATABASE
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
      locale: validatedData.locale,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // 3. SEND EMAIL
  await sendEmail({
    to: validatedData.email,
    locale: validatedData.locale,
    template: 'contact-confirmation',
    data: validatedData,
  });

  // 4. RETURN SUCCESS
  return NextResponse.json({ success: true }, { status: 201 });
}
```

### Database Integration (Supabase)

**Client Setup:**

```typescript
// /lib/supabase/client.ts

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// TypeScript types for tables
export type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  message: string;
  locale: 'lv' | 'en' | 'ru';
  created_at: string;
};
```

**Real World Query:**

```typescript
// Fetch recent contact submissions (with RLS: only unauthenticated public insert)
const { data, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(10);
```

### Email Service (Resend)

**Multi-Language Email Flow:**

```
Form Submission
       │
       ├─ Determine user locale (from form)
       │
       ├─ Load email template for locale
       │   (e.g., ContactConfirmation_lv.tsx)
       │
       ├─ Render React component to HTML
       │
       └─ Send via Resend API
            │
            ├─ From: info@teg.lv
            ├─ To: customer email
            └─ Subject: In customer's language
```

**Email Templates Structure:**

```
src/lib/email/
├── templates/
│   ├── ContactConfirmation.tsx      # Generic template
│   │   └─ Renders content in locale
│   ├── AppointmentConfirmation.tsx
│   └── ServiceRequestConfirmation.tsx
│
└── send-*.ts                        # Send functions
    ├── send-contact-confirmation.ts
    ├── send-appointment-confirmation.ts
    └── send-service-request-confirmation.ts
```

### Google Calendar Integration

**Appointment Booking Flow:**

```
User submits appointment form
           │
           ▼
POST /api/forms/appointment
           │
           ▼
Validate with Zod schema
           │
           ▼
Insert appointment record to Supabase
           │
           ▼
Check Google Calendar availability
(GET /api/calendar/availability)
           │
           ▼
Create event on Google Calendar
(using OAuth credentials)
           │
           ▼
Send confirmation email
(with calendar link)
           │
           ▼
Return success to user
```

**Calendar Event Details:**

```json
{
  "summary": "Car Inspection - BMW 320d",
  "description": "Pre-purchase inspection appointment",
  "startTime": "2025-11-15T10:00:00Z",
  "endTime": "2025-11-15T11:30:00Z",
  "attendees": [
    {
      "email": "customer@example.com",
      "displayName": "John Doe"
    }
  ],
  "conferenceData": {
    "entryPoints": [
      {
        "entryPointType": "PHONE",
        "label": "+371 25 201 710"
      }
    ]
  }
}
```

---

## Data Flow Diagrams

### Contact Form Submission Flow

```
┌─────────────────────────────────────────────────────────────┐
│  FRONTEND (Browser)                                         │
│                                                             │
│  User visits /en/contact                                   │
│        │                                                    │
│        └─ Renders ContactForm component                    │
│               │                                             │
│               └─ User fills fields (name, email, msg)      │
│                      │                                      │
│                      └─ Clicks "Send Message"              │
│                             │                               │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              │ POST /api/forms/contact
                              │ Content-Type: application/json
                              │ {name, email, message, locale}
                              │
┌─────────────────────────────▼───────────────────────────────┐
│  BACKEND (API Route)                                        │
│                                                             │
│  1. Parse request body                                      │
│  2. Validate with Zod (contactFormSchema)                  │
│  3. Check rate limiting (Arcjet: 5 req/min)               │
│  4. Check if bot detected (Arcjet)                         │
│     │                                                       │
│     ├─ If validation fails → Return 400 error              │
│     ├─ If rate limited → Return 429 error                  │
│     ├─ If bot detected → Return 403 error                  │
│     │                                                       │
│     └─ If valid → Continue                                 │
│            │                                                │
│            └─ Insert record to Supabase                    │
│                   │                                         │
│                   ├─ Table: contact_submissions            │
│                   ├─ Fields: name, email, message, locale  │
│                   └─ created_at: auto-timestamp            │
│                          │                                  │
│                          └─ Get record ID for ref          │
│                                 │                           │
│                                 └─ Send email              │
│                                    (Resend API)            │
│                                       │                     │
└───────────────────────────────────────┼─────────────────────┘
                                        │
┌───────────────────────────────────────▼─────────────────────┐
│  EMAIL SERVICE (Resend)                                     │
│                                                             │
│  1. Load ContactConfirmation.tsx template                  │
│  2. Pass locale to template (renders in user's language)   │
│  3. Render React component to HTML                         │
│  4. Send via SMTP                                          │
│     │                                                       │
│     └─ From: info@teg.lv                                   │
│        To: {user.email}                                    │
│        Subject: "Thank you for contacting TEG" (in locale) │
│                    │                                        │
│                    └─ User receives confirmation email     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Return response to frontend:
{success: true, message: "Thank you for your message"}
```

### Appointment Booking Flow

```
┌──────────────────────────────────────────────────────────┐
│  FRONTEND (Browser)                                      │
│                                                          │
│  User visits /lv/services/inspection                    │
│        │                                                 │
│        └─ Renders AppointmentForm                       │
│               │                                          │
│               └─ User selects date/time                 │
│                      │                                   │
│                      └─ Form validates locally          │
│                             │                            │
└─────────────────────────────┼────────────────────────────┘
                              │
                              │ POST /api/forms/appointment
                              │ {name, email, date, time, locale}
                              │
┌─────────────────────────────▼────────────────────────────┐
│  BACKEND (API Route)                                     │
│                                                          │
│  1. Validate with Zod schema                           │
│  2. Rate limit check (Arcjet: 3 bookings/hour)         │
│  3. Query Google Calendar availability                 │
│     │                                                    │
│     ├─ GET /api/calendar/availability                  │
│     └─ Check if slot is free                           │
│            │                                             │
│            ├─ If not available → Return error          │
│            └─ If available → Continue                  │
│                   │                                      │
│                   └─ Insert to Supabase                │
│                      (appointments table)               │
│                             │                           │
│                             └─ Create Google Calendar  │
│                                 event with OAuth token  │
│                                    │                    │
└────────────────────────────────────┼────────────────────┘
                                     │
        ┌────────────────────────────┼─────────────────────┐
        │                            │                     │
        ▼                            ▼                     ▼
┌──────────────┐  ┌────────────────────────┐  ┌─────────────┐
│  Supabase    │  │  Google Calendar       │  │  Resend     │
│              │  │                        │  │  Email      │
│ INSERT       │  │  CREATE EVENT          │  │             │
│ ├─ ID        │  │  ├─ Title              │  │ SEND EMAIL  │
│ ├─ name      │  │  ├─ Date/Time          │  │             │
│ ├─ email     │  │  ├─ Attendees          │  │ Template:   │
│ ├─ date      │  │  ├─ Description        │  │ Appt        │
│ ├─ time      │  │  └─ Calendar link      │  │ Confirmation│
│ ├─ status    │  │     │                  │  │             │
│ └─ created   │  │     └─ Stored in DB    │  │ Locale:     │
│              │  │        (cal event ID)  │  │ user's lang │
│              │  │                        │  │             │
└──────────────┘  └────────────────────────┘  └─────────────┘

Return response with confirmation:
{
  success: true,
  appointmentId: "xyz123",
  calendarLink: "https://calendar.google.com/...",
  confirmationEmail: "sent to user@example.com"
}
```

### Multi-Language Content Flow

```
User Request: GET /en/services/inspection
           │
           ▼
Middleware detects locale = "en"
           │
           ▼
next-intl loads messages/en.json
           │
           ▼
Component renders:
├─ Page title from messages
├─ Service description from messages
├─ CTA button text from messages
└─ Meta tags (SEO) from messages
           │
           ▼
useTranslations hook provides:
{
  t: (key) => string (translated value)
  locale: "en"
  formatNumber: (num) => string
  formatDate: (date) => string
}
           │
           ▼
Component uses t() to access translations:
{t('services.inspection.title')}
{t('services.inspection.description')}
{t('common.bookNow')}
           │
           ▼
HTML rendered in English, sent to browser
```

---

## State Management

### No Redux/Complex State (Simple Approach)

**Why?**
- Public marketing site (no complex state)
- Forms manage their own state (react-hook-form)
- Language state in URL + middleware
- Theme preference in localStorage

**Architecture:**

```typescript
// Theme state (localStorage)
const [theme, setTheme] = useState<'light' | 'dark'>('light');

// Save to localStorage
useEffect(() => {
  localStorage.setItem('theme-preference', theme);
}, [theme]);

// Language state (URL + next-intl)
// Managed by: next-intl middleware + useLocale()

// Form state (react-hook-form)
// Managed by: useForm hook in each component
```

**Context API (Only if needed):**

```typescript
// ThemeContext.tsx
export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}>({
  theme: 'light',
  setTheme: () => {},
});

// Use in components:
const { theme, setTheme } = use(ThemeContext);
```

---

## Error Handling

### Frontend Error Boundaries

```typescript
export class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to Sentry
    Sentry.captureException(error);

    // Show user-friendly message
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### API Error Response Pattern

```typescript
// Success response
{
  success: true,
  data: { /* response data */ }
}

// Error response
{
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "Invalid email address",
    field: "email"
  }
}
```

### Sentry Error Tracking

```typescript
// Automatic capturing:
- Uncaught exceptions
- Promise rejections
- Performance issues

// Manual capturing:
Sentry.captureException(error);
Sentry.captureMessage('Warning message');

// Context:
Sentry.setUser({ id: '123', email: 'user@example.com' });
Sentry.setContext('request', { method: 'POST', url: '/api/...' });
```

---

## Security Architecture

### CORS Configuration

```typescript
// Only allow requests from teg.lv domain
const allowedOrigins = [
  'https://teg.lv',
  'https://www.teg.lv',
  process.env.NEXT_PUBLIC_APP_URL,
];

// Set in API route headers
res.setHeader('Access-Control-Allow-Origin', origin);
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```

### Rate Limiting (Arcjet)

```typescript
// Global middleware rule
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    rateLimit({
      mode: 'LIVE',
      characteristics: ['ip.src'],
      requests: 100,
      window: '1h',
    }),
  ],
});

// Per-route overrides
// Contact form: 5 requests per minute per IP
// Appointment booking: 3 per hour per IP
// Service request: 5 per hour per IP
```

### Bot Detection (Arcjet)

```typescript
const aj = arcjet({
  rules: [
    detectBot({
      mode: 'LIVE',
      block: [
        'CATEGORY:SCRAPER', // Block scrapers
        'CATEGORY:AUTOMATED', // Block bots
      ],
    }),
  ],
});
```

### Validation on Server

```typescript
// All API routes validate on server (not just client)
export async function POST(req: Request) {
  const body = await req.json();

  // Server-side Zod validation
  try {
    const validated = contactFormSchema.parse(body);
  } catch (error) {
    // Validation failed
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  // Proceed with validated data
}
```

### Environment Variable Protection

```typescript
// .env.local (never committed)
NEXT_PUBLIC_SUPABASE_URL=...  # Public, visible in browser
SUPABASE_SERVICE_ROLE_KEY=... # Private, server-only

// Usage:
// Client-side: process.env.NEXT_PUBLIC_SUPABASE_URL (available)
// Client-side: process.env.SUPABASE_SERVICE_ROLE_KEY (NOT available, undefined)
// Server-side: both available via env variables
```

---

## Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/services/inspection.jpg"
  alt="Car inspection"
  width={800}
  height={600}
  priority                    // LCP images
  loading="lazy"              // Below-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Code Splitting

```typescript
// Lazy load heavy components
const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm'),
  { loading: () => <FormSkeleton /> }
);
```

### Font Optimization

```typescript
// next/font automatic optimization
import { Inter, Sora } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const sora = Sora({ subsets: ['latin'] });

// Only required glyphs loaded
// WOFF2 format
// Preload=true for above-fold fonts
```

### SEO Meta Tags

```typescript
// Dynamic metadata
export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  return {
    title: 'Car Inspection Services | TEG',
    description: 'Professional inspection from €100...',
    keywords: 'car inspection, diagnostics...',
    openGraph: {
      title: '...',
      description: '...',
      images: [{ url: '/og-image.jpg' }],
    },
    alternates: {
      languages: {
        lv: 'https://teg.lv/lv/...',
        en: 'https://teg.lv/en/...',
        ru: 'https://teg.lv/ru/...',
      },
    },
  };
}
```

---

## Deployment & Hosting

### Vercel Deployment Flow

```
Git Push to main
        │
        ▼
GitHub Actions Workflow
├─ Run: npm run lint
├─ Run: npm run test
├─ Run: npm run build
        │
        ├─ If any fail → Deployment stops
        │
        └─ If all pass → Build artifacts ready
                │
                ▼
Vercel receives build
├─ Upload assets to CDN
├─ Deploy to Edge Network
├─ Update DNS to point to new deployment
        │
        ▼
Automatic HTTPS
├─ SSL cert provisioning
├─ Redirect HTTP → HTTPS
        │
        ▼
Live at: https://teg.lv
```

### Environment Variables per Stage

```bash
# Development (.env.local)
NEXT_PUBLIC_SUPABASE_URL=https://dev-project.supabase.co
NEXT_PUBLIC_POSTHOG_KEY=dev-key
NODE_ENV=development

# Production (Vercel dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://prod-project.supabase.co
NEXT_PUBLIC_POSTHOG_KEY=prod-key
NODE_ENV=production
```

---

## Monitoring & Observability

### Error Tracking (Sentry)

```
User encounters error
        │
        ▼
Error captured automatically
├─ Stack trace
├─ Browser version
├─ User session
├─ Previous actions
├─ Environment (dev/prod)
        │
        ▼
Sent to Sentry
        │
        ▼
Alert to developers
├─ Email notification
├─ Sentry dashboard
        │
        ▼
Issue tracking
├─ Grouped similar errors
├─ Replay functionality
├─ Source maps for debugging
```

### Analytics (PostHog)

```
User action (page view, form submit, etc.)
        │
        ▼
PostHog tracks event
├─ Event name
├─ User ID (anonymous)
├─ Session info
├─ Device/browser
├─ Page location
        │
        ▼
PostHog server receives
        │
        ▼
Available in dashboard
├─ Event streams
├─ Funnels
├─ Retention charts
├─ Session replay
```

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** Complete architecture documented
