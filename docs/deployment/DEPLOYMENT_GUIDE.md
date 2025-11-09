# TEG Website Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables Setup

All required environment variables must be configured in Vercel dashboard:

#### **Supabase Configuration**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Setup Steps:**
1. Create Supabase project at https://supabase.com
2. Select **EU region** (Frankfurt - closest to Latvia)
3. Navigate to Settings > API
4. Copy Project URL and anon/service keys

#### **Resend Email Configuration**
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@teg.lv
```

**Setup Steps:**
1. Sign up at https://resend.com
2. Verify domain `teg.lv` with DNS records:
   - SPF: `v=spf1 include:_spf.resend.com ~all`
   - DKIM: (provided by Resend dashboard)
   - DMARC: `v=DMARC1; p=none; rua=mailto:dmarc@teg.lv`
3. Create API key in Resend dashboard
4. **CRITICAL:** Do NOT deploy until domain is verified (emails will fail)

#### **Google Calendar API**
```bash
GOOGLE_CALENDAR_API_KEY=your-google-api-key
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
```

**Setup Steps:**
1. Go to Google Cloud Console: https://console.cloud.google.com
2. Create new project: "TEG Website"
3. Enable Google Calendar API
4. Create service account credentials
5. Share TEG calendar with service account email (Editor permissions)

#### **Arcjet Rate Limiting**
```bash
ARCJET_KEY=ajkey_xxxxxxxxxxxxx
```

**Setup Steps:**
1. Sign up at https://arcjet.com
2. Create new project: "TEG Website"
3. Copy API key from dashboard
4. Rate limits already configured in code:
   - Contact form: 5/minute per IP
   - Appointments: 3/hour per IP
   - Service requests: 5/hour per IP

#### **Instagram API Configuration**
```bash
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your-long-lived-access-token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your-business-account-id
```

**Prerequisites:**
1. **Business Instagram Account** - Separate account linked to Facebook Page (not personal)
2. **Facebook Page** - Required to generate Instagram API credentials
3. **Meta Developer Account** - Create at https://developers.facebook.com

**Setup Steps:**

1. **Create Meta Developer App**
   - Go to https://developers.facebook.com/apps
   - Click "Create App" → "Business" type
   - Name: "TEG Website"
   - Complete business setup

2. **Configure Instagram Graph API**
   - In app dashboard, add product: "Instagram Graph API"
   - Go to Settings > Basic > Copy App ID and App Secret
   - Add Platform: Website (URL: `https://teg.lv`)

3. **Generate Long-Lived Access Token**
   - Go to Tools > Graph API Explorer
   - Select app from dropdown
   - Select "Get User Access Token" (need Instagram business account as admin)
   - Scopes needed: `instagram_business_profile`, `instagram_business_manage_messages`
   - Generate short-lived token
   - Exchange for long-lived token:
   ```bash
   curl -X GET "https://graph.instagram.com/v18.0/oauth/access_token?grant_type=ig_refresh_token&access_token=SHORT_LIVED_TOKEN&client_secret=YOUR_APP_SECRET" \
     -H "Content-Type: application/json"
   ```
   - Long-lived tokens valid for ~60 days (must refresh periodically)

4. **Get Business Account ID**
   - Go to Instagram app Settings > Basic
   - Business Account ID visible under "Connected Instagram Accounts"
   - Also retrievable via API:
   ```bash
   curl -X GET "https://graph.instagram.com/v18.0/me/instagram_business_accounts?access_token=YOUR_ACCESS_TOKEN"
   ```

5. **Add to Vercel Environment Variables**
   - Go to Vercel project Settings > Environment Variables
   - Add `NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN` (Production, Preview, Development)
   - Add `INSTAGRAM_BUSINESS_ACCOUNT_ID` (Production, Preview, Development)
   - Deploy

**Token Refresh Strategy (Critical for 60-Day Expiry):**

Tokens expire after 60 days. Implement automated refresh:

```bash
# Create refresh job (add to cron or CI/CD)
# Every 50 days, run refresh script:

INSTAGRAM_API_VERSION="v18.0"
OLD_TOKEN="your-current-token"
APP_SECRET="your-app-secret"

curl -X GET "https://graph.instagram.com/${INSTAGRAM_API_VERSION}/oauth/access_token" \
  -G \
  -d "grant_type=ig_refresh_token" \
  -d "access_token=${OLD_TOKEN}" \
  -d "client_secret=${APP_SECRET}" | jq '.access_token'

# Output new token → update NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN in Vercel
```

**Testing Verification:**

```bash
# Test API access
curl -X GET "https://graph.instagram.com/v18.0/BUSINESS_ACCOUNT_ID/media?fields=id,caption,media_type,media_url,timestamp&access_token=YOUR_ACCESS_TOKEN"

# Expected response: Array of recent Instagram posts
# If 401: Token expired or invalid
# If 403: Insufficient permissions (check scopes)
```

---

#### **Sentry Error Tracking**
```bash
SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_AUTH_TOKEN=your-sentry-auth-token
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=teg-website
```

**Setup Steps:**
1. Create Sentry project at https://sentry.io
2. Select Next.js platform
3. Copy DSN from project settings
4. Create auth token: Settings > Auth Tokens > Create New Token
   - Scopes: `project:releases`, `org:read`

#### **PostHog Analytics**
```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

**Setup Steps:**
1. Sign up at https://posthog.com
2. Create project: "TEG Website"
3. Copy Project API Key from Settings

---

### 2. Database Schema Deployment

**Execute SQL migrations in Supabase SQL Editor:**

```sql
-- 1. Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone TEXT,
  message TEXT NOT NULL,
  locale TEXT NOT NULL CHECK (locale IN ('lv', 'en', 'ru')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_status ON contact_submissions(status);

-- 2. Create appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('pre-purchase', 'car-search', 'mobile-service')),
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  vehicle_info TEXT,
  message TEXT,
  locale TEXT NOT NULL CHECK (locale IN ('lv', 'en', 'ru')),
  google_calendar_event_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_appointments_date ON appointments(preferred_date DESC);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_email ON appointments(email);

-- 3. Create service_requests table
CREATE TABLE service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('pre-purchase', 'car-search', 'mobile-service')),
  preferred_time TEXT NOT NULL CHECK (preferred_time IN ('morning', 'afternoon', 'evening')),
  is_urgent BOOLEAN DEFAULT FALSE,
  locale TEXT NOT NULL CHECK (locale IN ('lv', 'en', 'ru')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_service_requests_created_at ON service_requests(created_at DESC);
CREATE INDEX idx_service_requests_urgent ON service_requests(is_urgent);

-- 4. Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- 5. Create public insert policies
CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON appointments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON service_requests FOR INSERT TO anon WITH CHECK (true);
```

**Verify Schema:**
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
-- Should show: contact_submissions, appointments, service_requests
```

---

### 3. Manual Backup Strategy

**Before deployment, create SQL backup:**

```bash
# Export full schema
cd backups/
pg_dump -h db.your-project.supabase.co -U postgres -d postgres --schema-only > schema_$(date +%Y%m%d).sql

# Commit backup to git
git add backups/schema_*.sql
git commit -m "chore: database schema backup before deployment"
```

**Enable Supabase Automated Backups:**
1. Navigate to Supabase Dashboard > Settings > Database
2. Enable "Daily automated backups" (free tier)
3. Set retention: 7 days
4. Verify backup schedule in logs

---

### 4. Vercel Project Setup

**Link GitHub Repository:**
1. Go to Vercel dashboard: https://vercel.com
2. Click "Add New Project"
3. Import Git Repository: `https://github.com/yourusername/teg-website`
4. Framework Preset: **Next.js** (auto-detected)
5. Root Directory: `.` (leave default)
6. Build Command: `pnpm build` (already configured in `vercel.json`)
7. Install Command: `pnpm install`

**Add Environment Variables:**
1. Click "Environment Variables"
2. Add **all** variables from section 1 above
3. Select environments: **Production**, **Preview**, **Development**
4. Click "Deploy"

**Domain Configuration:**
1. After first deployment, go to Settings > Domains
2. Add custom domain: `teg.lv` and `www.teg.lv`
3. Update DNS records at your registrar:
   ```
   A Record:    teg.lv → 76.76.21.21
   CNAME:       www   → cname.vercel-dns.com
   ```
4. Wait for SSL certificate provisioning (~5 minutes)

---

## Deployment Steps

### Initial Production Deployment

```bash
# 1. Verify build locally
pnpm clean
pnpm install --frozen-lockfile
pnpm check:types
pnpm lint
pnpm test
pnpm build

# 2. Push to main branch (triggers auto-deploy)
git add .
git commit -m "chore: production deployment"
git push origin main

# 3. Monitor deployment in Vercel dashboard
# https://vercel.com/dashboard > Deployments
```

### Post-Deployment Verification

**1. Health Checks:**
```bash
# Test homepage loads
curl -I https://teg.lv/lv/

# Test API routes
curl -X POST https://teg.lv/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test","locale":"lv"}'

# Expected: 201 Created or 429 Too Many Requests (rate limit works!)
```

**2. SEO Validation:**
- **Sitemap:** https://teg.lv/sitemap.xml
- **Robots.txt:** https://teg.lv/robots.txt
- **Google Rich Results Test:** https://search.google.com/test/rich-results
  - Enter URL: https://teg.lv/lv/
  - Verify JSON-LD structured data appears

**3. Performance Audit:**
```bash
# Lighthouse CI (install globally: npm i -g @lhci/cli)
lhci autorun --collect.url=https://teg.lv/lv/ --collect.url=https://teg.lv/en/ --collect.url=https://teg.lv/ru/

# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 100
# - SEO: 100
```

**4. Email Testing:**
- Submit contact form at https://teg.lv/lv/contact
- Verify confirmation email arrives (check spam folder)
- Check Resend dashboard for delivery logs

**5. Error Monitoring:**
- Visit Sentry dashboard: https://sentry.io
- Verify no errors logged during deployment
- Trigger test error: https://teg.lv/api/test-sentry (if created)

**6. Analytics Verification:**
- Visit PostHog dashboard: https://posthog.com
- Check live activity feed for pageviews
- Verify event tracking works

---

## Continuous Deployment

**Automatic Deployments:**
- **Production:** Every push to `main` branch
- **Preview:** Every pull request creates preview URL

**Rollback Procedure:**
1. Go to Vercel Dashboard > Deployments
2. Find last stable deployment
3. Click "..." menu > "Promote to Production"
4. Confirm rollback

---

## Environment-Specific Configurations

### Production
- Domain: https://teg.lv
- Analytics: Enabled
- Sentry: Full error tracking
- Rate limiting: Strict (5 req/min)

### Preview (Staging)
- Domain: https://teg-website-git-branch-name.vercel.app
- Analytics: Enabled (separate project)
- Sentry: Enabled (tagged as "preview")
- Rate limiting: Relaxed (10 req/min)

### Development
- Domain: http://localhost:3000
- Analytics: Disabled
- Sentry: Disabled (via `NEXT_PUBLIC_SENTRY_DISABLED=true`)
- Rate limiting: Disabled in dev mode

---

## Troubleshooting

### Build Failures

**"Module not found" errors:**
```bash
# Clear pnpm cache
pnpm store prune
pnpm install --frozen-lockfile
```

**Type errors in production:**
```bash
# Run type check locally
pnpm check:types --noEmit

# Fix all errors before deploying
```

### Database Connection Issues

**"Supabase client error":**
1. Verify environment variables in Vercel
2. Check Supabase project status (not paused)
3. Test connection:
   ```bash
   curl -X POST https://your-project.supabase.co/rest/v1/contact_submissions \
     -H "apikey: your-anon-key" \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"Test","locale":"lv"}'
   ```

### Email Delivery Failures

**"Resend API error 403":**
- Domain not verified → Complete DNS verification
- API key invalid → Regenerate key in Resend dashboard
- Rate limit exceeded → Check Resend usage limits

**Emails not arriving:**
1. Check spam/junk folder
2. Verify SPF/DKIM/DMARC records:
   ```bash
   dig TXT teg.lv +short
   dig TXT _dmarc.teg.lv +short
   ```
3. Test with Gmail/Outlook (different providers)

---

## Production Checklist

- [ ] All environment variables configured in Vercel
- [ ] Supabase database schema deployed
- [ ] Resend domain verified (DNS records added)
- [ ] Google Calendar shared with service account
- [ ] Instagram API access token generated and verified
- [ ] Instagram Business Account ID configured
- [ ] Sentry project created and DSN configured
- [ ] PostHog project created and key added
- [ ] Arcjet rate limiting enabled
- [ ] Manual database backup created
- [ ] Automated Supabase backups enabled
- [ ] Build succeeds locally (`pnpm build`)
- [ ] All tests pass (`pnpm test`)
- [ ] TypeScript checks pass (`pnpm check:types`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] Custom domain `teg.lv` configured in Vercel
- [ ] SSL certificate active (https://)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Contact form submission tested
- [ ] Appointment booking tested
- [ ] Email confirmation received
- [ ] Google Calendar event created
- [ ] Instagram feed loads on hero section
- [ ] Sentry error logging verified
- [ ] PostHog analytics tracking verified
- [ ] Core Web Vitals meet targets (LCP <2.5s, FID <100ms, CLS <0.1)

---

## Support Contacts

- **Vercel Support:** https://vercel.com/support
- **Supabase Support:** https://supabase.com/support
- **Resend Support:** support@resend.com
- **Sentry Support:** https://sentry.io/support

---

**Last Updated:** 2025-11-09
**Deployment Version:** 1.1.0 (Instagram API Integration)
