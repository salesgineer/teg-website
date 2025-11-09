# Vercel Preview Troubleshooting Guide
## Components Not Displaying on Preview

**Last Updated:** 2025-11-08
**Issue:** Components display on localhost but not on Vercel preview

---

## 🔍 Quick Diagnostic Checklist

### Step 1: Check Build Logs

1. **Go to Vercel Dashboard** → Your Project → Deployments
2. **Click on the latest preview deployment**
3. **Check Build Logs** for errors:
   - ❌ `Invalid environment variables: NEXT_PUBLIC_SUPABASE_URL Required`
   - ❌ `TypeError: Cannot read property 'url' of undefined`
   - ❌ `Error: Missing required environment variable`

**If you see these errors:** Environment variables are missing or incorrect.

### Step 2: Verify Environment Variables in Vercel

1. **Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables
2. **Check these CRITICAL variables exist for Preview environment:**

```bash
✅ NEXT_PUBLIC_SUPABASE_URL (must be set for Preview)
✅ NEXT_PUBLIC_SUPABASE_ANON_KEY (must be set for Preview)
```

**How to verify:**
- Click on each variable
- Ensure "Preview" checkbox is ✅ checked
- Ensure value is not empty
- Ensure no extra spaces or newlines

### Step 3: Check Browser Console

1. **Open preview URL** in browser
2. **Open DevTools** (F12)
3. **Go to Console tab**
4. **Look for errors:**
   - `Invalid environment variables`
   - `NEXT_PUBLIC_SUPABASE_URL is required`
   - `TypeError: Cannot read property...`
   - `Hydration failed`

**Common errors:**
- ❌ `Env validation failed` → Missing required env vars
- ❌ `Hydration mismatch` → Client/server rendering difference
- ❌ `Failed to fetch` → API/network issues

### Step 4: Check Network Tab

1. **Open DevTools** → Network tab
2. **Reload page**
3. **Look for failed requests:**
   - Red status codes (4xx, 5xx)
   - Failed Supabase API calls
   - Missing static assets

---

## 🚨 Most Common Issues & Fixes

### Issue 1: Missing Required Environment Variables

**Symptoms:**
- Build succeeds but components don't render
- Console shows: `Invalid environment variables`
- Blank page or partial page rendering

**Root Cause:**
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are **required** but missing in Vercel Preview environment.

**Fix:**

1. **Get Supabase credentials:**
   - Go to https://supabase.com/dashboard
   - Select your project
   - Go to Settings → API
   - Copy:
     - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
     - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Add to Vercel:**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Click "Add New"
   - Add each variable:
     - **Key:** `NEXT_PUBLIC_SUPABASE_URL`
     - **Value:** `https://your-project.supabase.co`
     - **Environments:** ✅ Preview ✅ Production (✅ Development optional)
   - Repeat for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

**Verification:**
- Build should succeed
- Components should render
- No console errors

---

### Issue 2: Environment Variables Not Applied to Preview

**Symptoms:**
- Variables exist in Vercel but components still fail
- Build logs show missing variables

**Root Cause:**
Variables added but "Preview" checkbox not checked.

**Fix:**

1. **Check environment targeting:**
   - Vercel Dashboard → Settings → Environment Variables
   - For each variable, ensure:
     - ✅ **Preview** is checked
     - ✅ **Production** is checked (if needed)
     - ⬜ **Development** (optional, uses `.env.local` locally)

2. **Bulk update:**
   - Select multiple variables
   - Use "Edit" → Check "Preview" for all
   - Save

3. **Redeploy** preview deployment

---

### Issue 3: Client-Side Hydration Errors

**Symptoms:**
- Components render but look broken
- Console shows: `Hydration failed` or `Text content does not match`
- Layout shifts or missing content

**Root Cause:**
Server-rendered HTML doesn't match client-rendered HTML. Common causes:
- Environment variables differ between server and client
- Date/time formatting differences
- Random values or IDs generated differently

**Fix:**

1. **Check for client-only code in server components:**
   ```typescript
   // ❌ BAD: Using window in server component
   const url = window.location.href;
   
   // ✅ GOOD: Use client component
   'use client';
   const url = window.location.href;
   ```

2. **Ensure consistent environment variables:**
   - Server and client must have same `NEXT_PUBLIC_*` vars
   - Check Vercel env vars match local `.env.local`

3. **Use Suspense boundaries:**
   ```typescript
   import { Suspense } from 'react';
   
   <Suspense fallback={<Loading />}>
     <ClientComponent />
   </Suspense>
   ```

---

### Issue 4: Build-Time vs Runtime Environment Variable Access

**Symptoms:**
- Build succeeds
- Runtime errors in browser console
- Components fail to initialize

**Root Cause:**
`@t3-oss/env-nextjs` validates env vars at build time. If missing, build fails OR runtime errors occur.

**Fix:**

1. **Ensure all required vars are set BEFORE building:**
   - Add env vars to Vercel
   - Trigger new deployment (don't use cached build)

2. **Check build logs for validation errors:**
   ```
   ❌ Invalid environment variables:
   - NEXT_PUBLIC_SUPABASE_URL: Required
   ```

3. **Verify in `src/libs/Env.ts`:**
   - Required vars are marked as `.optional()` if they can be missing
   - Or ensure they're always provided

---

### Issue 5: Arcjet Middleware Blocking Requests

**Symptoms:**
- Components don't load
- 403 Forbidden errors
- Network tab shows blocked requests

**Root Cause:**
Arcjet middleware blocking requests if `ARCJET_KEY` is invalid or missing.

**Fix:**

1. **Check middleware:**
   - File: `src/middleware.ts`
   - Arcjet only runs if `ARCJET_KEY` exists
   - If key is invalid, requests may be blocked

2. **Temporarily disable Arcjet for testing:**
   ```typescript
   // In src/middleware.ts
   if (process.env.ARCJET_KEY && process.env.NODE_ENV !== 'development') {
     const decision = await aj.protect(request);
     // ...
   }
   ```

3. **Or ensure valid `ARCJET_KEY` in Vercel:**
   - Get key from https://arcjet.com
   - Add to Vercel env vars
   - Ensure "Preview" is checked

---

## 🔧 Step-by-Step Debugging Process

### 1. Verify Environment Variables

**Checklist:**
- [ ] `NEXT_PUBLIC_SUPABASE_URL` exists and is valid URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` exists and is non-empty
- [ ] Both have "Preview" checkbox checked
- [ ] Values match Supabase dashboard (no typos)
- [ ] No extra spaces or newlines in values

**How to test:**
```bash
# In Vercel build logs, you should see:
# ✅ Environment variables validated successfully
```

### 2. Check Build Output

**Look for:**
- ✅ `✓ Compiled successfully`
- ✅ `✓ Linting and checking validity of types`
- ❌ `✗ Invalid environment variables`
- ❌ `✗ Type errors`

### 3. Test Preview URL

**Steps:**
1. Open preview URL in incognito window (avoid cache)
2. Open DevTools Console
3. Check for errors:
   - Red errors = critical issues
   - Yellow warnings = non-critical

**Expected:**
- ✅ No red errors
- ✅ Components render
- ✅ No hydration warnings

### 4. Check Network Requests

**In DevTools Network tab:**
- ✅ Supabase API calls succeed (200 status)
- ✅ Static assets load (images, fonts)
- ❌ 4xx/5xx errors = investigate

---

## 🛠️ Quick Fixes

### Fix 1: Add Missing Environment Variables

```bash
# Minimum required for preview:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**In Vercel:**
1. Settings → Environment Variables
2. Add each variable
3. Check "Preview" ✅
4. Redeploy

### Fix 2: Make Environment Variables Optional (Temporary)

**⚠️ WARNING:** Only for testing. Production should have all required vars.

**File:** `src/libs/Env.ts`

```typescript
client: {
  // Make optional temporarily for debugging
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
}
```

**Then add null checks in components:**
```typescript
if (!Env.NEXT_PUBLIC_SUPABASE_URL) {
  return <div>Configuration error: Missing Supabase URL</div>;
}
```

**⚠️ Revert this after fixing env vars!**

### Fix 3: Add Error Boundaries

**File:** `src/app/[locale]/error.tsx`

```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## 📋 Verification Checklist

After applying fixes, verify:

- [ ] **Build succeeds** (check Vercel build logs)
- [ ] **Preview URL loads** (no blank page)
- [ ] **No console errors** (DevTools Console)
- [ ] **Components render** (Hero, Services, Footer visible)
- [ ] **Forms work** (can submit contact form)
- [ ] **Navigation works** (can click menu items)
- [ ] **Images load** (no broken image icons)
- [ ] **No hydration warnings** (Console should be clean)

---

## 🆘 Still Not Working?

### Get More Information

1. **Check Vercel Function Logs:**
   - Vercel Dashboard → Project → Functions
   - Look for runtime errors

2. **Enable Debug Mode:**
   ```typescript
   // In src/libs/Env.ts, temporarily add:
   console.log('Env check:', {
     supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
     supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'MISSING',
   });
   ```

3. **Check Sentry (if configured):**
   - Sentry Dashboard → Issues
   - Look for errors from preview deployment

4. **Compare Local vs Preview:**
   - Local: `pnpm dev` → Works?
   - Preview: Same code → Doesn't work?
   - Difference = Environment variables or build config

---

## 📚 Related Documentation

- [Vercel Preview Setup Guide](./VERCEL_PREVIEW_SETUP.md)
- [Environment Variables Reference](../architecture/07-environment-variables.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

---

**Last Updated:** 2025-11-08
**Document Version:** 1.0.0

