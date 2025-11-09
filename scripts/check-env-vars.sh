#!/usr/bin/env bash
# Quick diagnostic script to check environment variables
# Usage: ./scripts/check-env-vars.sh

set -e

echo "🔍 Environment Variables Diagnostic"
echo "===================================="
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
  echo "✅ .env.local file exists"
else
  echo "⚠️  .env.local file not found (this is OK if using Vercel env vars)"
fi

echo ""
echo "Required Environment Variables:"
echo "-------------------------------"

# Check required variables
REQUIRED_VARS=(
  "NEXT_PUBLIC_SUPABASE_URL"
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
)

for var in "${REQUIRED_VARS[@]}"; do
  if [ -n "${!var}" ]; then
    # Mask sensitive values
    value="${!var}"
    if [ ${#value} -gt 20 ]; then
      masked="${value:0:10}...${value: -10}"
    else
      masked="${value:0:5}..."
    fi
    echo "✅ $var = $masked"
  else
    echo "❌ $var = MISSING"
  fi
done

echo ""
echo "Optional Environment Variables:"
echo "-------------------------------"

OPTIONAL_VARS=(
  "ARCJET_KEY"
  "RESEND_API_KEY"
  "NEXT_PUBLIC_POSTHOG_KEY"
  "SENTRY_DSN"
)

for var in "${OPTIONAL_VARS[@]}"; do
  if [ -n "${!var}" ]; then
    echo "✅ $var = SET"
  else
    echo "⚪ $var = NOT SET (optional)"
  fi
done

echo ""
echo "===================================="
echo "Next Steps:"
echo "1. If any required vars are missing, add them to Vercel:"
echo "   Dashboard → Project → Settings → Environment Variables"
echo "2. Ensure 'Preview' checkbox is checked for each variable"
echo "3. Redeploy your preview deployment"
echo ""
echo "For detailed troubleshooting, see:"
echo "docs/deployment/VERCEL_PREVIEW_TROUBLESHOOTING.md"

