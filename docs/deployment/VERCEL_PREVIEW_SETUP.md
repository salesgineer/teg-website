# Vercel Preview Deployment Setup Guide
## TEG Automotive Website - Next.js 15

**Last Updated:** 2025-11-08
**Target:** Preview environment first, production later
**Estimated Setup Time:** 45-60 minutes

---

## 📋 Table of Contents

1. [Preview vs Production Overview](#preview-vs-production-overview)
2. [Environment Variables Checklist](#environment-variables-checklist)
3. [Service Setup Instructions](#service-setup-instructions)
4. [Vercel Setup (Step-by-Step)](#vercel-setup-step-by-step)
5. [GitHub Secrets (for CI/CD)](#github-secrets-for-cicd)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Quick Reference](#quick-reference)

---

## 🎯 Preview vs Production Overview

### What is a Preview Deployment?

Preview deployments are **temporary test environments** automatically created for:
- Every pull request
- Every push to non-main branches
- Testing features before production

**Preview URL format:**
```
https://teg-001-<branch-name>-<your-vercel-username>.vercel.app
```

### Service Priority Matrix

| Service | Preview Status | Production Status | Consequences if Missing |
|---------|---------------|-------------------|------------------------|
| **Supabase** | 🔴 CRITICAL | 🔴 CRITICAL | Database operations fail, forms break |
| **Arcjet** | 🔴 CRITICAL | 🔴 CRITICAL | No rate limiting = spam/DDoS vulnerability |
| **Resend** | 🟡 RECOMMENDED | 🔴 CRITICAL | Email notifications fail (testable) |
| **Sentry** | 🟡 RECOMMENDED | 🔴 CRITICAL | No error tracking, harder debugging |
| **PostHog** | 🟢 OPTIONAL | 🟡 RECOMMENDED | No analytics, no user tracking |
| **Google Calendar** | 🟢 OPTIONAL | 🟡 RECOMMENDED | Appointment bookings won't sync to calendar |

**Preview Strategy:**
- ✅ **Start with:** Supabase + Arcjet only (basic functionality)
- ✅ **Add next:** Resend + Sentry (testing completeness)
- ⏳ **Defer to production:** PostHog + Google Calendar

### Risk Assessment

**CRITICAL Services (Setup First):**
1. **Supabase** - All forms, data storage
2. **Arcjet** - Prevents abuse, protects from bots

**Missing these = Site appears to work but breaks on user interaction**

**RECOMMENDED Services (Setup for Testing):**
3. **Resend** - Email confirmations (use preview mode if domain unverified)
4. **Sentry** - Catch errors before production

**OPTIONAL Services (Can Wait):**
5. **PostHog** - Analytics don't matter for preview testing
6. **Google Calendar** - Appointment sync not critical for UI testing

---

## ✅ Environment Variables Checklist

### Complete List (17 Variables)

| Variable | Priority | Default/Placeholder | What Breaks Without It |
|----------|----------|-------------------|----------------------|
| `NEXT_PUBLIC_SITE_URL` | 🔴 CRITICAL | `https://teg.lv` | Canonical URLs, SEO metadata |
| `NEXT_PUBLIC_APP_URL` | 🟡 RECOMMENDED | Leave empty for preview | API base URL, redirects |
| `NEXT_PUBLIC_SUPABASE_URL` | 🔴 CRITICAL | *(from Supabase)* | All database operations |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 🔴 CRITICAL | *(from Supabase)* | Client-side database access |
| `SUPABASE_SERVICE_ROLE_KEY` | 🔴 CRITICAL | *(from Supabase)* | Server-side admin operations |
| `ARCJET_KEY` | 🔴 CRITICAL | *(from Arcjet)* | Rate limiting, bot protection |
| `RESEND_API_KEY` | 🟡 RECOMMENDED | *(from Resend)* | Email sending |
| `RESEND_FROM_EMAIL` | 🟡 RECOMMENDED | `noreply@teg.lv` | Email sender address |
| `GOOGLE_CALENDAR_API_KEY` | 🟢 OPTIONAL | *(skip for preview)* | Calendar event creation |
| `GOOGLE_CALENDAR_ID` | 🟢 OPTIONAL | *(skip for preview)* | Calendar destination |
| `SENTRY_DSN` | 🟡 RECOMMENDED | *(from Sentry)* | Server-side error tracking |
| `NEXT_PUBLIC_SENTRY_DSN` | 🟡 RECOMMENDED | *(from Sentry)* | Client-side error tracking |
| `SENTRY_AUTH_TOKEN` | 🟡 RECOMMENDED | *(from Sentry)* | Source map uploads |
| `SENTRY_ORG` | 🟡 RECOMMENDED | Your org slug | Sentry project linking |
| `SENTRY_PROJECT` | 🟡 RECOMMENDED | `teg-website` | Sentry project name |
| `NEXT_PUBLIC_POSTHOG_KEY` | 🟢 OPTIONAL | *(skip for preview)* | Analytics tracking |
| `NEXT_PUBLIC_POSTHOG_HOST` | 🟢 OPTIONAL | `https://app.posthog.com` | Analytics endpoint |

### Minimum Viable Preview (4 Variables)

Start with these to get a working preview:

```bash
NEXT_PUBLIC_SITE_URL=https://teg.lv
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxx
```

### Full Preview Setup (11 Variables)

Add these for complete testing:

```bash
# Basic Configuration
NEXT_PUBLIC_SITE_URL=https://teg.lv
NEXT_PUBLIC_APP_URL=  # Leave empty, Vercel auto-populates

# Supabase (CRITICAL)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Security (CRITICAL)
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxx

# Email (RECOMMENDED)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@teg.lv

# Error Tracking (RECOMMENDED)
SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxx
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=teg-website
```

---

## 🔧 Service Setup Instructions

### 1️⃣ Supabase (CRITICAL) - 10 minutes

**Why needed:** Database for forms, appointments, contact submissions

#### Sign Up & Create Project

1. **Go to:** https://supabase.com/dashboard
2. **Click:** "New Project"
3. **Settings:**
   - **Name:** `teg-website-preview` (separate from production later)
   - **Database Password:** Use strong password (save in password manager!)
   - **Region:** `Europe (Frankfurt)` - closest to Latvia
   - **Pricing Plan:** Free tier (sufficient for testing)
4. **Click:** "Create new project"
5. **Wait:** ~2 minutes for database provisioning

#### Get API Keys

1. **Navigate to:** Settings → API (left sidebar)
2. **Copy these three values:**
   - **Project URL** → Save as `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Save as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → Save as `SUPABASE_SERVICE_ROLE_KEY`

⚠️ **WARNING:** Never commit `service_role` key to git!

#### Create Database Schema

1. **Navigate to:** SQL Editor (left sidebar)
2. **Click:** "New query"
3. **Copy-paste:** Full SQL from `/docs/deployment/DEPLOYMENT_GUIDE.md` (lines 98-162)
4. **Click:** "Run" (bottom right)
5. **Verify success:** Should see "Success. No rows returned"

**Quick verification query:**
```sql
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';
```

Expected result: `contact_submissions`, `appointments`, `service_requests`

#### Test Connection

```bash
# Replace with your actual values
curl -X POST https://YOUR-PROJECT.supabase.co/rest/v1/contact_submissions \
  -H "apikey: YOUR-ANON-KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test","locale":"lv"}'
```

Expected: `201 Created` response

---

### 2️⃣ Arcjet (CRITICAL) - 5 minutes

**Why needed:** Rate limiting to prevent spam/abuse on forms

#### Sign Up

1. **Go to:** https://arcjet.com
2. **Click:** "Get Started" or "Sign Up"
3. **Sign in with:** GitHub (recommended for easy Vercel integration)
4. **Verify email** if prompted

#### Create Project

1. **Click:** "New Project"
2. **Settings:**
   - **Name:** `teg-website`
   - **Framework:** Next.js
3. **Click:** "Create Project"

#### Get API Key

1. **Dashboard shows API key immediately** after project creation
2. **Format:** Starts with `ajkey_`
3. **Copy:** Full key → Save as `ARCJET_KEY`

**Rate limits already configured in code:**
- Contact form: 5 submissions/minute per IP
- Appointments: 3 submissions/hour per IP
- Service requests: 5 submissions/hour per IP

No additional Arcjet configuration needed!

---

### 3️⃣ Resend (RECOMMENDED) - 15 minutes

**Why needed:** Email confirmations for form submissions

⚠️ **For Preview:** Email will work BUT sender will be `onboarding@resend.dev` until domain verified

#### Sign Up

1. **Go to:** https://resend.com
2. **Click:** "Get Started"
3. **Sign up with:** Email or GitHub
4. **Verify email**

#### Get API Key

1. **Navigate to:** API Keys (left sidebar)
2. **Click:** "Create API Key"
3. **Settings:**
   - **Name:** `teg-preview`
   - **Permission:** Full Access (for now)
4. **Copy key immediately** (only shown once!) → Save as `RESEND_API_KEY`

#### Domain Verification (OPTIONAL for Preview)

**For preview:** Skip this, emails send from `onboarding@resend.dev`
**For production:** Must verify `teg.lv` domain

<details>
<summary>Click to expand domain verification steps (defer to production)</summary>

1. **Navigate to:** Domains → Add Domain
2. **Enter:** `teg.lv`
3. **Add DNS records** at your domain registrar:

```dns
# SPF Record
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

# DKIM Record (Resend provides specific values)
Type: TXT
Name: resend._domainkey
Value: [Provided by Resend dashboard]

# DMARC Record
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@teg.lv
```

4. **Wait:** 24-48 hours for DNS propagation
5. **Verify in Resend dashboard**

</details>

#### Set From Email

For now, use:
```bash
RESEND_FROM_EMAIL=noreply@teg.lv
```

Resend will automatically override to `onboarding@resend.dev` until domain verified.

---

### 4️⃣ Sentry (RECOMMENDED) - 10 minutes

**Why needed:** Error tracking and debugging

#### Sign Up

1. **Go to:** https://sentry.io
2. **Click:** "Get Started"
3. **Sign up with:** GitHub (easiest)
4. **Create organization:** Use your name or company

#### Create Project

1. **Click:** "Create Project"
2. **Platform:** Select "Next.js"
3. **Settings:**
   - **Alert Frequency:** Alert on every new issue (preview)
   - **Project Name:** `teg-website-preview`
4. **Click:** "Create Project"

#### Get DSN

1. **After project creation,** DSN shown immediately
2. **Format:** `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`
3. **Copy DSN** → Save as both:
   - `SENTRY_DSN` (server-side)
   - `NEXT_PUBLIC_SENTRY_DSN` (client-side)

#### Create Auth Token

1. **Navigate to:** Settings → Auth Tokens
2. **Click:** "Create New Token"
3. **Settings:**
   - **Name:** `teg-vercel-preview`
   - **Scopes:** Check `project:releases` and `org:read`
4. **Copy token** → Save as `SENTRY_AUTH_TOKEN`

#### Get Organization Info

1. **Navigate to:** Settings → General Settings
2. **Copy values:**
   - **Organization Slug** → Save as `SENTRY_ORG`
   - **Project Name** → Save as `SENTRY_PROJECT` (should be `teg-website-preview`)

---

### 5️⃣ PostHog (OPTIONAL) - 5 minutes

**Why defer for preview:** Analytics not needed for testing functionality

<details>
<summary>Click to expand PostHog setup (optional)</summary>

#### Sign Up

1. **Go to:** https://posthog.com
2. **Click:** "Get Started - Free"
3. **Sign up with:** Email or GitHub

#### Create Project

1. **After signup,** prompted to create first project
2. **Name:** `TEG Website Preview`
3. **Type:** Website

#### Get API Key

1. **Navigate to:** Project Settings → Project API Key
2. **Copy values:**
   - **Project API Key** → Save as `NEXT_PUBLIC_POSTHOG_KEY` (starts with `phc_`)
   - **Host** → Save as `NEXT_PUBLIC_POSTHOG_HOST` (usually `https://app.posthog.com`)

</details>

---

### 6️⃣ Google Calendar (OPTIONAL) - 20 minutes

**Why defer for preview:** Appointment sync not critical for UI testing

<details>
<summary>Click to expand Google Calendar setup (optional)</summary>

#### Create Service Account

1. **Go to:** https://console.cloud.google.com
2. **Create Project:**
   - Click project dropdown → "New Project"
   - Name: `TEG Website`
   - Click "Create"
3. **Enable Calendar API:**
   - Navigate to "APIs & Services" → "Library"
   - Search "Google Calendar API"
   - Click "Enable"
4. **Create Service Account:**
   - Navigate to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: `teg-calendar-service`
   - Click "Create and Continue"
   - Role: "Editor" → Click "Done"

#### Get API Key

1. **Click on created service account**
2. **Navigate to:** "Keys" tab
3. **Click:** "Add Key" → "Create new key"
4. **Type:** JSON
5. **Download JSON file**
6. **Copy `private_key` value** → Save as `GOOGLE_CALENDAR_API_KEY`

⚠️ **WARNING:** Never commit this JSON file to git!

#### Create & Share Calendar

1. **Go to:** https://calendar.google.com
2. **Create calendar:**
   - Left sidebar → "+" next to "Other calendars"
   - Name: "TEG Appointments"
3. **Share with service account:**
   - Calendar settings → "Share with specific people"
   - Add service account email (from JSON: `client_email`)
   - Permission: "Make changes to events"
4. **Get Calendar ID:**
   - Calendar settings → "Integrate calendar"
   - Copy "Calendar ID" → Save as `GOOGLE_CALENDAR_ID`
   - Format: `xxxxx@group.calendar.google.com`

</details>

---

## 🚀 Vercel Setup (Step-by-Step)

### Prerequisites

- [ ] GitHub repository exists with TEG project code
- [ ] At minimum: Supabase credentials ready
- [ ] Ideally: Arcjet, Resend, Sentry credentials ready

### Create Vercel Account

1. **Go to:** https://vercel.com
2. **Click:** "Sign Up"
3. **Sign up with:** GitHub (REQUIRED for auto-deployment)
4. **Authorize Vercel** to access your GitHub repositories

### Import GitHub Repository

1. **Vercel Dashboard:** Click "Add New..." → "Project"
2. **Import Git Repository:**
   - Find your repository: `TEG_001` or similar
   - Click "Import"
3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `.` (leave default)
   - **Build Command:** `pnpm build` (auto-detected from `vercel.json`)
   - **Install Command:** `pnpm install` (auto-detected)
   - **Output Directory:** `.next` (leave default)

⚠️ **STOP! Don't click Deploy yet!** Add environment variables first.

### Add Environment Variables (UI Walkthrough)

1. **On import screen,** expand "Environment Variables" section
2. **For each variable:**

   **Method A: Add one-by-one (tedious but clear)**
   - Click "Add" for each variable
   - Paste key name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - Paste value
   - Select environments: ✅ **Production**, ✅ **Preview**, ⬜ Development

   **Method B: Bulk add (faster)**
   - Click "Bulk Import .env"
   - Paste all variables in format: `KEY=value`
   - Click "Import"

3. **CRITICAL Variables to add FIRST:**

```bash
NEXT_PUBLIC_SITE_URL=https://teg.lv
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
ARCJET_KEY=ajkey_xxx...
```

4. **Select target environments for each variable:**

| Variable | Production | Preview | Development |
|----------|-----------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | ✅ | ✅ | ⬜ |
| `NEXT_PUBLIC_APP_URL` | ⬜ | ⬜ | ⬜ (Vercel auto-sets) |
| All Supabase vars | ✅ | ✅ | ⬜ |
| `ARCJET_KEY` | ✅ | ✅ | ⬜ |
| `RESEND_API_KEY` | ✅ | ✅ | ⬜ |
| `RESEND_FROM_EMAIL` | ✅ | ✅ | ⬜ |
| All Sentry vars | ✅ | ✅ | ⬜ |
| PostHog vars | ✅ | ⬜ | ⬜ (skip preview) |
| Google Calendar vars | ✅ | ⬜ | ⬜ (skip preview) |

**Why skip Development checkbox?** Local dev uses `.env.local` file, not Vercel env vars.

### Deploy

1. **After adding variables,** click "Deploy"
2. **Wait:** Build takes ~2-3 minutes
3. **Watch build logs** for errors

**Common build errors:**

❌ **"Missing environment variable"**
→ Go to Project Settings → Environment Variables → Add missing var → Redeploy

❌ **"Type error in src/..."**
→ Code issue, not env var. Check build logs, fix code, push to GitHub

### Access Preview Deployment

1. **After successful build:**
   - Vercel shows "Congratulations!" screen
   - Preview URL: `https://teg-001-xxxxx.vercel.app`
2. **Click "Visit"** to open preview site

### Configure Deployment Settings

1. **Navigate to:** Project Settings → Git (left sidebar)
2. **Production Branch:** Set to `main`
3. **Ignored Build Step:** Leave disabled (build everything)
4. **Deploy Hooks:** Skip for now (manual deploys via GitHub)

### Preview Deployment Triggers

After initial setup, **automatic preview deployments** occur on:

✅ **Every pull request** → Creates new preview URL
✅ **Every push to PR branch** → Updates existing preview
✅ **Every push to non-main branch** → Creates preview if no PR exists

**Manual deployment trigger:**
- Project → Deployments → "..." menu → "Redeploy"

---

## 🔐 GitHub Secrets (for CI/CD)

**When needed:** If you add GitHub Actions workflows (e.g., automated tests before deploy)

**Not required for basic Vercel deployment** (Vercel handles this automatically).

<details>
<summary>Click to expand GitHub Secrets setup (optional)</summary>

### Add Secrets

1. **Go to:** GitHub repository → Settings → Secrets and variables → Actions
2. **Click:** "New repository secret"
3. **Add these secrets:**

```bash
VERCEL_TOKEN              # From Vercel → Account Settings → Tokens
VERCEL_ORG_ID             # From Vercel project .vercel/project.json
VERCEL_PROJECT_ID         # From Vercel project .vercel/project.json
```

### Get Vercel Token

1. **Vercel Dashboard:** Click profile → Settings → Tokens
2. **Create Token:** Name: `github-actions`, Scope: Full Account
3. **Copy token** → Add as `VERCEL_TOKEN` secret in GitHub

### Get Project IDs

Run locally after linking Vercel:
```bash
vercel link
cat .vercel/project.json
```

Copy `orgId` → `VERCEL_ORG_ID`
Copy `projectId` → `VERCEL_PROJECT_ID`

</details>

---

## ✅ Post-Deployment Verification

### Automated Checks

After preview deployment, Vercel automatically runs:
- ✅ Build succeeds
- ✅ TypeScript compiles
- ✅ ESLint passes (if configured)

### Manual Testing Checklist

#### 1. Homepage Loads

- [ ] Visit preview URL: `https://your-preview.vercel.app/lv/`
- [ ] Page renders without errors
- [ ] Images load correctly
- [ ] Navigation works (click menu items)

#### 2. Test All Locales

- [ ] Latvian: `/lv/` loads
- [ ] English: `/en/` loads
- [ ] Russian: `/ru/` loads
- [ ] Language switcher works

#### 3. Contact Form Submission

**Test basic form:**
1. Navigate to `/lv/contact` (or `/en/`, `/ru/`)
2. Fill in all required fields:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+371 12345678" (optional)
   - Message: "This is a test submission"
3. Submit form
4. **Expected results:**
   - ✅ Success message appears
   - ✅ Form resets
   - ✅ No console errors

**Verify in Supabase:**
1. Go to Supabase Dashboard → Table Editor
2. Open `contact_submissions` table
3. **Should see:** New row with your test data
4. **Delete test row** after verification

**If email configured (Resend):**
- [ ] Check inbox for confirmation email
- [ ] If domain unverified: Sender is `onboarding@resend.dev`
- [ ] If domain verified: Sender is `noreply@teg.lv`

#### 4. Test Rate Limiting (Arcjet)

**Spam the contact form:**
1. Submit contact form 6 times rapidly (within 1 minute)
2. **Expected on 6th submission:**
   - ❌ Error message: "Mēģiniet vēlāk" (Latvian) / "Try again later"
   - ❌ HTTP 429 Too Many Requests
3. **Wait 1 minute,** try again → Should work

**If rate limiting DOESN'T work:**
- Check Arcjet dashboard for errors
- Verify `ARCJET_KEY` in Vercel env vars
- Check browser console for Arcjet errors

#### 5. Appointment Booking

1. Navigate to `/lv/appointments` (or use booking form in services pages)
2. Fill in all fields:
   - Name, email, phone
   - Service type: "Pre-purchase inspection"
   - Preferred date: Tomorrow's date
   - Preferred time: "10:00"
   - Vehicle info: "2015 VW Golf"
3. Submit form
4. **Verify in Supabase:** Check `appointments` table

**If Google Calendar configured:**
- [ ] Open Google Calendar
- [ ] Should see new event created for appointment

#### 6. Error Tracking (Sentry)

**Trigger a test error:**

Option A: Use browser console
```javascript
// Open browser DevTools (F12)
throw new Error('Test error from preview deployment');
```

Option B: Visit non-existent page
```
https://your-preview.vercel.app/this-page-does-not-exist
```

**Verify in Sentry:**
1. Go to Sentry Dashboard → Issues
2. **Should see:** New error logged within 1-2 minutes
3. Click error to see full stack trace, user context

**If errors NOT appearing:**
- Check Sentry DSN in Vercel env vars (both client + server)
- Verify `SENTRY_PROJECT` and `SENTRY_ORG` are correct
- Check browser console for Sentry init errors

#### 7. Performance Check (Optional)

**Quick Lighthouse test:**
1. Open preview URL in Chrome
2. F12 → Lighthouse tab
3. Run audit for:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO

**Target scores for preview:**
- Performance: 70+ (lower is OK for preview, optimize for prod)
- Accessibility: 90+
- Best Practices: 90+
- SEO: 80+

#### 8. Console Error Check

**Open DevTools Console:**
- [ ] No red errors on homepage load
- [ ] No red errors on form submission
- [ ] Yellow warnings are OK (often from third-party scripts)

---

## 🚨 Common Issues and Fixes

### Build Fails with "Missing environment variable"

**Error message:**
```
Error: Invalid environment variables: NEXT_PUBLIC_SUPABASE_URL Required
```

**Fix:**
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add missing variable
3. Make sure "Preview" environment is checked
4. Click "Save"
5. Redeploy: Deployments → "..." → "Redeploy"

---

### Forms Submit But No Data in Supabase

**Possible causes:**

1. **Wrong Supabase URL/keys**
   - Verify in Vercel env vars match Supabase dashboard
   - Check for trailing spaces in keys

2. **Database schema not created**
   - Run SQL migrations in Supabase SQL Editor
   - Verify tables exist: `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';`

3. **Row Level Security blocking inserts**
   - Check RLS policies allow anonymous inserts
   - SQL: `CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT TO anon WITH CHECK (true);`

**Debug:**
```javascript
// Add to browser console on form page
localStorage.setItem('supabase.debug', 'true');
// Submit form again, check Network tab for Supabase API calls
```

---

### Rate Limiting Not Working

**Symptoms:** Can submit form unlimited times without blocking

**Fix:**
1. Check `ARCJET_KEY` exists in Vercel env vars
2. Verify key starts with `ajkey_`
3. Check Arcjet dashboard for project status
4. **Wait 1 minute** between tests (rate limit windows)

---

### Emails Not Sending

**Symptoms:** Form submits successfully but no email received

**Troubleshooting:**

1. **Check Resend API key:**
   - Verify `RESEND_API_KEY` in Vercel env vars
   - Key should start with `re_`

2. **Check spam folder** (if domain unverified, often marked as spam)

3. **Check Resend dashboard:**
   - Navigate to Logs
   - Should see API requests from your preview deployment
   - Check for errors (red status)

4. **Domain not verified (EXPECTED for preview):**
   - Emails send from `onboarding@resend.dev` instead of `noreply@teg.lv`
   - This is normal for preview deployments

5. **Test with Resend API directly:**
```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer YOUR_RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "your-email@example.com",
    "subject": "Test from Resend",
    "html": "<p>This is a test</p>"
  }'
```

---

### Sentry Not Logging Errors

**Check:**
1. Both DSN values set in Vercel:
   - `SENTRY_DSN` (server-side)
   - `NEXT_PUBLIC_SENTRY_DSN` (client-side)
2. Values match (should be identical)
3. `SENTRY_ORG` and `SENTRY_PROJECT` are correct

**Test manually:**
```bash
# From terminal
curl https://YOUR_SENTRY_DSN/api/1/envelope/ \
  -X POST \
  -H "Content-Type: application/x-sentry-envelope" \
  -d '{"event_id":"test123","sent_at":"2023-01-01T00:00:00.000Z"}
{"type":"event"}
{"message":"Test error"}'
```

---

### Preview URL Shows 404 or Blank Page

**Possible causes:**

1. **Build succeeded but deployment failed**
   - Check Vercel Deployments tab for actual status
   - Look for "Ready" status, not just "Building"

2. **Wrong URL**
   - Vercel preview URL format: `https://project-name-git-branch-username.vercel.app`
   - Click "Visit" button in Vercel dashboard (don't type manually)

3. **Routing issue**
   - Try visiting specific locale: `/lv/`, `/en/`, `/ru/`
   - Home route `/` might redirect

---

## 📚 Quick Reference

### Copy-Paste Environment Variables Template

**Minimum viable preview (5 vars):**
```bash
NEXT_PUBLIC_SITE_URL=https://teg.lv
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxx
```

**Recommended preview (14 vars):**
```bash
# Basic
NEXT_PUBLIC_SITE_URL=https://teg.lv
NEXT_PUBLIC_APP_URL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Security
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxx

# Email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@teg.lv

# Error Tracking
SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxx
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=teg-website-preview
```

**Full production (17 vars) - defer these to production setup:**
```bash
# Add to above:
GOOGLE_CALENDAR_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_CALENDAR_ID=xxxxxxxxxxxxx@group.calendar.google.com
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

---

### Service Quick Links

| Service | Dashboard URL | Documentation |
|---------|--------------|---------------|
| **Vercel** | https://vercel.com/dashboard | https://vercel.com/docs |
| **Supabase** | https://app.supabase.com | https://supabase.com/docs |
| **Arcjet** | https://app.arcjet.com | https://docs.arcjet.com |
| **Resend** | https://resend.com/dashboard | https://resend.com/docs |
| **Sentry** | https://sentry.io | https://docs.sentry.io |
| **PostHog** | https://app.posthog.com | https://posthog.com/docs |
| **Google Cloud** | https://console.cloud.google.com | https://cloud.google.com/docs |

---

### Verification Checklist

**Before marking preview as "ready":**

- [ ] Preview URL loads without errors
- [ ] All three locales work (`/lv/`, `/en/`, `/ru/`)
- [ ] Contact form submits successfully
- [ ] Form data appears in Supabase database
- [ ] Rate limiting blocks after 5 rapid submissions
- [ ] Appointment booking works
- [ ] Test error appears in Sentry dashboard (if configured)
- [ ] No red console errors on homepage
- [ ] Navigation works (click through pages)
- [ ] Mobile view looks correct (test in DevTools)

**Optional (recommended):**
- [ ] Email confirmation received (if Resend configured)
- [ ] Lighthouse score >70 for Performance
- [ ] Lighthouse score >90 for Accessibility

---

### Time-Saving Tips

1. **Use Vercel's bulk import** for environment variables
   - Faster than adding one-by-one
   - Format: `KEY=value` (one per line)

2. **Test locally FIRST** before deploying
   ```bash
   cp .env.example .env.local
   # Fill in values
   pnpm dev
   # Test at http://localhost:3000
   ```

3. **Use separate Supabase projects** for preview vs production
   - Prevents test data polluting production
   - Free tier allows multiple projects

4. **Save credentials in password manager** immediately
   - Don't try to copy-paste 17 values from scattered tabs
   - Use 1Password, Bitwarden, or similar

5. **Deploy incrementally:**
   - Day 1: Supabase + Arcjet only (core functionality)
   - Day 2: Add Resend + Sentry (complete testing)
   - Day 3+: Add PostHog + Google Calendar (nice-to-haves)

---

### Next Steps

After successful preview deployment:

1. **Share preview URL** with stakeholders for feedback
2. **Test on real devices** (not just desktop)
3. **Fix any bugs** found during preview testing
4. **Complete domain verification** for Resend (if using email)
5. **Set up production environment** (see `/docs/deployment/DEPLOYMENT_GUIDE.md`)
6. **Configure custom domain** `teg.lv` in Vercel production
7. **Enable PostHog + Google Calendar** for production
8. **Run full performance audit** before production launch

---

## 🆘 Getting Help

**Vercel Issues:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

**Service-Specific Support:**
- Supabase: https://supabase.com/support
- Arcjet: https://docs.arcjet.com (Discord link in docs)
- Resend: support@resend.com
- Sentry: https://sentry.io/support

**TEG Project Issues:**
- GitHub Issues: (link to your repository issues page)
- Email: (your contact email)

---

**🎉 You're all set!** Your preview deployment should now be live and testable.

**Preview URL format:** `https://teg-001-<branch>-<username>.vercel.app`

**Recommended workflow:**
1. Create feature branch: `git checkout -b feature/new-thing`
2. Push to GitHub: `git push origin feature/new-thing`
3. Vercel auto-creates preview deployment
4. Test preview URL
5. Create pull request when ready
6. Merge to `main` → Deploys to production

---

**Last Updated:** 2025-11-08
**Document Version:** 1.0.0
