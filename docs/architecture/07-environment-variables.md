# Environment Variables Configuration

Complete reference for all required environment variables, configuration instructions, and security best practices.

---

## Overview

Environment variables are stored in `.env.local` (local development) and Vercel dashboard (production).

**Security Rule:** Never commit `.env.local` to Git. It's in `.gitignore`.

**Reference File:** Create `.env.example` with all variable names (no values).

---

## Quick Setup

### 1. Create `.env.local` File

```bash
# In project root
cp .env.example .env.local

# Then fill in actual values from services below
```

### 2. Add to `.env.example`

Commit this file to Git (no secrets):

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

# Monitoring (Sentry)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# Analytics (PostHog)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Security (Arcjet)
ARCJET_KEY=

# Application
NEXT_PUBLIC_APP_URL=https://teg.lv
NEXT_PUBLIC_DEFAULT_LOCALE=lv
NEXT_PUBLIC_LOCALES=lv,en,ru
```

### 3. Validate with TypeScript

Run build to validate all required variables present:

```bash
npm run build  # Fails if any REQUIRED variable missing
```

---

## Variable Reference

### Public Variables (Visible in Browser)

Variables prefixed with `NEXT_PUBLIC_` are compiled into client-side JavaScript. **Use only for non-sensitive data.**

#### Database (Supabase)

**Variable:** `NEXT_PUBLIC_SUPABASE_URL`

- **Type:** URL
- **Required:** Yes
- **Visibility:** Public (browser)
- **Example:** `https://xxxxx.supabase.co`
- **Where to Get:**
  1. Visit supabase.com → Your Project
  2. Go to Settings → API
  3. Copy "Project URL"

**Variable:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- **Type:** String (API Key)
- **Required:** Yes
- **Visibility:** Public (browser)
- **Example:** `eyJhbG...` (long string)
- **Where to Get:**
  1. Same location as above
  2. Copy "Anon key" (safe for client-side)
- **Security Note:** This key has minimal permissions (public insert only)

#### Email (Resend)

**Variable:** No public variables for Resend (API key is private)

#### Analytics (PostHog)

**Variable:** `NEXT_PUBLIC_POSTHOG_KEY`

- **Type:** String (API Key)
- **Required:** No (optional for MVP)
- **Visibility:** Public (browser)
- **Example:** `phc_abc123...`
- **Where to Get:**
  1. Visit posthog.com → Your Organization → Project
  2. Go to Settings → Project Settings
  3. Copy "Project API Key"

**Variable:** `NEXT_PUBLIC_POSTHOG_HOST`

- **Type:** URL
- **Required:** No (if using PostHog)
- **Visibility:** Public (browser)
- **Example:** `https://app.posthog.com`
- **Default:** Uses PostHog cloud

#### Monitoring (Sentry)

**Variable:** `NEXT_PUBLIC_SENTRY_DSN`

- **Type:** URL
- **Required:** No (optional for MVP)
- **Visibility:** Public (browser)
- **Example:** `https://examplePublicKey@o0.ingest.sentry.io/0`
- **Where to Get:**
  1. Visit sentry.io → Your Project
  2. Go to Settings → Client Keys (DSN)
  3. Copy DSN value
- **Security Note:** Safe to expose, Sentry restricts which domains can send data

#### Application Configuration

**Variable:** `NEXT_PUBLIC_APP_URL`

- **Type:** URL
- **Required:** Yes
- **Visibility:** Public
- **Development:** `http://localhost:3000`
- **Production:** `https://teg.lv`
- **Purpose:** Used for redirects, email links, social meta tags

**Variable:** `NEXT_PUBLIC_DEFAULT_LOCALE`

- **Type:** String
- **Required:** Yes
- **Visibility:** Public
- **Value:** `lv` (Latvian)
- **Options:** `lv` | `en` | `ru`
- **Purpose:** Default language when user visits root domain

**Variable:** `NEXT_PUBLIC_LOCALES`

- **Type:** Comma-separated string
- **Required:** Yes
- **Visibility:** Public
- **Value:** `lv,en,ru`
- **Purpose:** Which locales are supported

---

### Private Variables (Server-Only)

These variables are NOT exposed to the browser. Use for secrets and API keys.

#### Database (Supabase)

**Variable:** `SUPABASE_SERVICE_ROLE_KEY`

- **Type:** String (API Key)
- **Required:** Yes
- **Visibility:** Server-only
- **Sensitivity:** HIGH - Admin access to database
- **Where to Get:**
  1. Supabase dashboard → Settings → API
  2. Copy "Service role key" (has full database access)
- **Usage:** Never use in client components, API routes only

#### Email (Resend)

**Variable:** `RESEND_API_KEY`

- **Type:** String (API Key)
- **Required:** Yes (for email functionality)
- **Visibility:** Server-only
- **Sensitivity:** HIGH
- **Where to Get:**
  1. Visit resend.com → Settings → API Keys
  2. Create new API key
  3. Copy value immediately (only shown once)
- **Usage:** `@/lib/email/send.ts` only
- **Rotation:** Recommended quarterly

#### Google Calendar

**Variable:** `GOOGLE_CALENDAR_CLIENT_ID`

- **Type:** String
- **Required:** Yes (for calendar integration)
- **Visibility:** Can be public (used in OAuth flow)
- **Example:** `xxx-yyy.apps.googleusercontent.com`
- **Where to Get:**
  1. Visit console.cloud.google.com
  2. Project → Credentials
  3. Copy "Client ID"

**Variable:** `GOOGLE_CALENDAR_CLIENT_SECRET`

- **Type:** String
- **Required:** Yes (for calendar integration)
- **Visibility:** Server-only
- **Sensitivity:** HIGH
- **Where to Get:**
  1. Same location as Client ID
  2. Copy "Client Secret"
- **Usage:** API routes only, never expose to browser

**Variable:** `GOOGLE_CALENDAR_REFRESH_TOKEN`

- **Type:** String
- **Required:** Yes (for calendar integration)
- **Visibility:** Server-only
- **Sensitivity:** HIGH
- **Where to Get:**
  1. Run OAuth flow (see 06-implementation-timeline.md)
  2. Exchange authorization code for refresh token
  3. Store refresh token securely
- **Rotation:** Can be refreshed via OAuth

**Variable:** `GOOGLE_CALENDAR_CALENDAR_ID`

- **Type:** String
- **Required:** Yes (for calendar integration)
- **Visibility:** Can be public
- **Common Value:** `primary` (default calendar)
- **Alternative:** Specific calendar email (e.g., `team@teg.lv`)
- **Where to Get:**
  1. Google Calendar settings
  2. Calendar ID shown in calendar settings
  3. Usually "primary" for default calendar

#### Monitoring (Sentry)

**Variable:** `SENTRY_AUTH_TOKEN`

- **Type:** String (API Token)
- **Required:** No (optional for MVP)
- **Visibility:** Server-only
- **Sensitivity:** HIGH
- **Where to Get:**
  1. Sentry.io → Settings → Organization → Auth Tokens
  2. Create new token with "Project:Release" scope
  3. Copy token
- **Usage:** Uploading source maps, not needed for basic setup

#### Security (Arcjet)

**Variable:** `ARCJET_KEY`

- **Type:** String (API Key)
- **Required:** Yes (for rate limiting, bot protection)
- **Visibility:** Server-only
- **Sensitivity:** MEDIUM
- **Where to Get:**
  1. Visit arcjet.com → Dashboard
  2. Your Project → Settings → API Key
  3. Copy key
- **Usage:** Middleware and API routes

#### Application Secrets

**Variable:** `NEXTAUTH_SECRET` (if adding authentication post-MVP)

- **Type:** String
- **Required:** No (not needed for MVP)
- **Visibility:** Server-only
- **Sensitivity:** HIGH
- **Generate:** `openssl rand -base64 32`
- **Purpose:** JWT token signing for NextAuth.js

---

## Development Setup

### Step 1: Get Database Credentials

**Supabase Setup:**

```bash
# 1. Create Supabase account at supabase.com
# 2. Create new project
# 3. Wait for database initialization (2-3 minutes)
# 4. Go to Settings → API
# 5. Copy these values:

NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### Step 2: Get Email Service Credentials

**Resend Setup:**

```bash
# 1. Create account at resend.com
# 2. Go to Settings → API Keys
# 3. Create new API key
# 4. Copy immediately (shown only once):

RESEND_API_KEY=re_abc123...
```

### Step 3: Get Calendar API Credentials

**Google Cloud Console Setup:**

```bash
# 1. Go to console.cloud.google.com
# 2. Create new project (name: teg-website)
# 3. Enable Google Calendar API
# 4. Create OAuth 2.0 credentials (Web application)
# 5. Add redirect URIs:
#    - http://localhost:3000/api/auth/google/callback
#    - https://teg.lv/api/auth/google/callback
# 6. Copy credentials:

GOOGLE_CALENDAR_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CALENDAR_CLIENT_SECRET=GOCSP...

# 7. Run OAuth flow to get refresh token:
# npm run get-google-token
# This will prompt you to authorize in browser
# Then copy the refresh token returned:

GOOGLE_CALENDAR_REFRESH_TOKEN=1//0gxxx...
GOOGLE_CALENDAR_CALENDAR_ID=primary
```

### Step 4: Get Monitoring Credentials (Optional)

**Sentry Setup (Optional):**

```bash
# 1. Go to sentry.io
# 2. Create account and project
# 3. Project → Settings → Client Keys (DSN)
# 4. Copy DSN:

NEXT_PUBLIC_SENTRY_DSN=https://key@org.ingest.sentry.io/123456
```

**PostHog Setup (Optional):**

```bash
# 1. Go to posthog.com
# 2. Create account
# 3. Project → Settings → Project Settings
# 4. Copy API key and host:

NEXT_PUBLIC_POSTHOG_KEY=phc_abc...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Step 5: Get Security Credentials

**Arcjet Setup:**

```bash
# 1. Go to arcjet.com
# 2. Create account
# 3. Dashboard → Settings → API Key
# 4. Copy key:

ARCJET_KEY=ajk_...
```

### Step 6: Create `.env.local` File

```bash
# In project root, create .env.local with all values from above
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
RESEND_API_KEY=re_abc123...
GOOGLE_CALENDAR_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CALENDAR_CLIENT_SECRET=GOCSP...
GOOGLE_CALENDAR_REFRESH_TOKEN=1//0gxxx...
GOOGLE_CALENDAR_CALENDAR_ID=primary
NEXT_PUBLIC_SENTRY_DSN=https://key@org.ingest.sentry.io/123456
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_POSTHOG_KEY=phc_abc...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
ARCJET_KEY=ajk_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=lv
NEXT_PUBLIC_LOCALES=lv,en,ru
NODE_ENV=development
EOF
```

### Step 7: Test Variables Load

```bash
npm run build  # Should complete successfully
npm run dev    # Should start without errors
```

---

## Production Setup (Vercel)

### Deploy to Vercel

```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to vercel.com
# 3. Import project from GitHub
# 4. Choose framework: Next.js
# 5. Environment Variables → Add variables

# Production variables (Vercel Dashboard):
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
RESEND_API_KEY=re_abc123...
GOOGLE_CALENDAR_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CALENDAR_CLIENT_SECRET=GOCSP...
GOOGLE_CALENDAR_REFRESH_TOKEN=1//0gxxx...
GOOGLE_CALENDAR_CALENDAR_ID=primary
NEXT_PUBLIC_SENTRY_DSN=https://key@org.ingest.sentry.io/123456
SENTRY_AUTH_TOKEN=sentry_token...
NEXT_PUBLIC_POSTHOG_KEY=phc_abc...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
ARCJET_KEY=ajk_...
NEXT_PUBLIC_APP_URL=https://teg.lv
NEXT_PUBLIC_DEFAULT_LOCALE=lv
NEXT_PUBLIC_LOCALES=lv,en,ru
NODE_ENV=production

# 6. Deploy
```

### Update Google Calendar Redirect URI

After deploying to Vercel:

1. Go to Google Cloud Console
2. Credentials → OAuth 2.0 Client IDs
3. Edit web application
4. Add redirect URI: `https://teg.lv/api/auth/google/callback`
5. Save

---

## Security Best Practices

### 1. Never Commit Secrets

```bash
# .env.local is in .gitignore
# Never commit this file

# DO commit:
.env.example  # Template only, no values

# DON'T commit:
.env.local    # Contains actual secrets
```

### 2. Rotate Secrets Regularly

**Quarterly Rotation Schedule:**

| Service | Rotation Frequency | Steps |
|---------|------------------|-------|
| Resend API Key | Quarterly | Create new key, update Vercel, delete old |
| Sentry Auth Token | Annually | Create new token in Sentry, update Vercel |
| Google Refresh Token | As needed | Re-run OAuth flow if expired |
| Arcjet Key | Annually | Create new key at arcjet.com |

### 3. Principle of Least Privilege

**Use Different Keys for Staging/Production:**

```bash
# Development (.env.local)
RESEND_API_KEY=re_dev_...      # Dev Resend account
GOOGLE_CALENDAR_ID=dev_calendar # Dev calendar

# Production (Vercel)
RESEND_API_KEY=re_prod_...     # Production Resend
GOOGLE_CALENDAR_ID=primary     # Production calendar
```

### 4. Monitor for Leaks

```bash
# Scan code for accidentally committed secrets:
npm install -D git-secrets

# Before committing:
git secrets --scan
```

### 5. Access Control

**Vercel Dashboard:**
- Only grant access to team members who need it
- Use Vercel's Team permissions
- Audit access logs regularly

**Google Cloud Console:**
- Restrict project access to necessary users
- Use service accounts for CI/CD
- Audit OAuth approvals monthly

---

## Troubleshooting

### Variable Not Found Error

```
Error: NEXT_PUBLIC_SUPABASE_URL is not defined
```

**Solution:**
1. Check `.env.local` file exists in project root
2. Verify variable name spelled correctly (case-sensitive)
3. Restart dev server: `npm run dev`
4. Check variable is in `src/env.ts` schema

### Public vs Private Confusion

**Remember:**
- `NEXT_PUBLIC_*` = Visible in browser (use for non-secrets)
- No prefix = Server-only (use for secrets)

**When in doubt:**
- API keys from third-party services = Private (no NEXT_PUBLIC_)
- Application configuration = Public (add NEXT_PUBLIC_)

### Build Fails with Validation Error

```
Error: Invalid value for RESEND_API_KEY
```

**Solution:**
1. Check value doesn't have extra spaces
2. For URLs, ensure they start with http:// or https://
3. For API keys, ensure full key is copied (not truncated)
4. Check Zod schema in `src/env.ts` for requirements

### Email Not Sending

**Check:**
1. `RESEND_API_KEY` is valid and non-empty
2. Domain verified in Resend dashboard (resend.com)
3. API route actually calls `resend.emails.send()`
4. Check Resend logs at resend.com for errors

### Google Calendar Events Not Creating

**Check:**
1. All 4 Google Calendar vars present
2. Redirect URI registered in Google Cloud Console
3. Calendar ID accessible by OAuth credentials
4. Refresh token valid (hasn't been revoked)
5. Check logs for actual error message

---

## Variable Validation Schema

**File:** `src/env.ts`

```typescript
import { z } from 'zod';

const envSchema = z.object({
  // Database - Required
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),

  // Email - Required
  RESEND_API_KEY: z.string().min(1),

  // Calendar - Required
  GOOGLE_CALENDAR_CLIENT_ID: z.string().min(1),
  GOOGLE_CALENDAR_CLIENT_SECRET: z.string().min(1),
  GOOGLE_CALENDAR_REFRESH_TOKEN: z.string().min(1),
  GOOGLE_CALENDAR_CALENDAR_ID: z.string().default('primary'),

  // Monitoring - Optional
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),

  // Security - Required
  ARCJET_KEY: z.string().min(1),

  // Application - Required
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.enum(['lv', 'en', 'ru']).default('lv'),
  NEXT_PUBLIC_LOCALES: z.string().default('lv,en,ru'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

export const env = envSchema.parse(process.env);
```

---

## Quick Reference Table

| Variable | Public? | Required? | Service | Development Value |
|----------|---------|-----------|---------|-------------------|
| NEXT_PUBLIC_SUPABASE_URL | Yes | Yes | Supabase | https://xxx.supabase.co |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Yes | Yes | Supabase | (long string) |
| SUPABASE_SERVICE_ROLE_KEY | No | Yes | Supabase | (long string) |
| RESEND_API_KEY | No | Yes | Resend | re_xxx |
| GOOGLE_CALENDAR_CLIENT_ID | Yes | Yes | Google | xxx.apps.googleusercontent.com |
| GOOGLE_CALENDAR_CLIENT_SECRET | No | Yes | Google | GOCSP... |
| GOOGLE_CALENDAR_REFRESH_TOKEN | No | Yes | Google | 1//0gxxx... |
| GOOGLE_CALENDAR_CALENDAR_ID | Yes | Yes | Google | primary |
| NEXT_PUBLIC_SENTRY_DSN | Yes | No | Sentry | https://key@org.ingest.sentry.io/123 |
| SENTRY_AUTH_TOKEN | No | No | Sentry | (optional) |
| NEXT_PUBLIC_POSTHOG_KEY | Yes | No | PostHog | phc_xxx |
| NEXT_PUBLIC_POSTHOG_HOST | Yes | No | PostHog | https://app.posthog.com |
| ARCJET_KEY | No | Yes | Arcjet | ajk_xxx |
| NEXT_PUBLIC_APP_URL | Yes | Yes | App | http://localhost:3000 |
| NEXT_PUBLIC_DEFAULT_LOCALE | Yes | Yes | App | lv |
| NEXT_PUBLIC_LOCALES | Yes | Yes | App | lv,en,ru |
| NODE_ENV | No | Yes | App | development |

---

## Deployment Checklist

- [ ] All required variables added to Vercel
- [ ] No required variables are empty/missing
- [ ] Secrets are NOT exposed in logs
- [ ] Production URLs used (not localhost)
- [ ] Google Calendar redirect URI updated
- [ ] Resend domain verified
- [ ] Sentry project created (if using)
- [ ] PostHog project created (if using)
- [ ] Arcjet project created
- [ ] Test: Deploy succeeds without errors
- [ ] Test: Forms work in production
- [ ] Test: Emails send successfully
- [ ] Test: Calendar events create

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** Complete configuration reference ready
