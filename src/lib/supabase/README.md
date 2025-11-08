# Supabase Integration - TEG Website

## Overview

This directory contains Supabase client configurations and database schema files for the TEG (Transporta Ekspertu Grupa) website.

## Database Setup

### Prerequisites

1. **Create Supabase Project:**
   - Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Create new project: `teg-website-production`
   - Select EU region (closest to Latvia for optimal latency)
   - Save project URL and anon key

2. **Configure Environment Variables:**
   ```bash
   # .env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

3. **Execute Schema Files:**
   - Navigate to Supabase Dashboard → SQL Editor
   - Run schemas in this order:
     1. `schema/contact_submissions.sql`
     2. `schema/appointments.sql`
     3. `schema/service_requests.sql`

### Tables

#### 1. `contact_submissions`
Simple contact form submissions with multi-language support.

**Fields:**
- `id` (UUID): Primary key
- `name` (TEXT): Customer name
- `email` (TEXT): Email with validation constraint
- `phone` (TEXT): Optional phone number
- `message` (TEXT): Contact message
- `locale` (TEXT): Language code (lv, en, ru)
- `status` (TEXT): Processing status (new, contacted, completed)
- `created_at` (TIMESTAMPTZ): Submission timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Indexes:**
- `idx_contact_created_at`: Performance for recent submissions queries
- `idx_contact_status`: Performance for status filtering

**Rate Limit:** 5 submissions per minute per IP (enforced by Arcjet)

#### 2. `appointments`
Service appointment bookings with Google Calendar integration.

**Fields:**
- `id` (UUID): Primary key
- `name` (TEXT): Customer name
- `email` (TEXT): Email with validation constraint
- `phone` (TEXT): Required phone number
- `service_type` (TEXT): Service selector (pre-purchase, car-search, mobile-service)
- `preferred_date` (DATE): Requested appointment date
- `preferred_time` (TIME): Requested appointment time
- `vehicle_info` (TEXT): Optional vehicle details (max 500 chars)
- `message` (TEXT): Optional additional notes
- `locale` (TEXT): Language code (lv, en, ru)
- `google_calendar_event_id` (TEXT): Google Calendar event ID for sync
- `status` (TEXT): Booking status (pending, confirmed, completed, cancelled)
- `created_at` (TIMESTAMPTZ): Booking timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Indexes:**
- `idx_appointments_date`: Performance for date-based queries
- `idx_appointments_status`: Performance for status filtering
- `idx_appointments_email`: Performance for customer lookup
- `idx_appointments_calendar_event`: Performance for calendar sync operations

**Business Hours Validation:** Mon-Sat, 9:00 AM - 8:00 PM (enforced in API route)

**Rate Limit:** 3 submissions per hour per IP (enforced by Arcjet)

#### 3. `service_requests`
Quick callback requests with urgency flagging.

**Fields:**
- `id` (UUID): Primary key
- `name` (TEXT): Customer name
- `phone` (TEXT): Required phone number
- `service_type` (TEXT): Service selector (pre-purchase, car-search, mobile-service)
- `preferred_time` (TEXT): Time preference (morning, afternoon, evening)
- `is_urgent` (BOOLEAN): Urgency flag for prioritization
- `locale` (TEXT): Language code (lv, en, ru)
- `status` (TEXT): Processing status (new, contacted, completed)
- `created_at` (TIMESTAMPTZ): Request timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Indexes:**
- `idx_service_requests_created_at`: Performance for recent requests queries
- `idx_service_requests_urgent`: Performance for urgent requests filtering
- `idx_service_requests_status`: Performance for status filtering

**Rate Limit:** 5 submissions per hour per IP (enforced by Arcjet)

## Security

### Row Level Security (RLS)

All tables have RLS enabled with public INSERT policies for form submissions:

```sql
-- Allows anonymous users to submit forms
CREATE POLICY "Allow public insert" ON {table_name}
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Future (Phase 2):** Admin SELECT/UPDATE policies will be added when authentication is implemented.

### Data Validation

- **Email Validation:** Regex constraint enforced at database level
- **Service Type Enums:** CHECK constraints prevent invalid values
- **Locale Enums:** CHECK constraints ensure only lv/en/ru
- **Status Enums:** CHECK constraints enforce valid status values

### Rate Limiting

Implemented via Arcjet in API routes (see `src/lib/arcjet/rules.ts`):
- Contact form: 5 requests/minute per IP
- Appointments: 3 requests/hour per IP
- Service requests: 5 requests/hour per IP

## Usage

### Browser Client (Client Components)

```typescript
import { createClient } from '@/lib/supabase/client';

export default function MyComponent() {
  const supabase = createClient();

  // Use for client-side operations
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*');
}
```

### Server Client (Server Components, Server Actions, Route Handlers)

```typescript
import { createClient } from '@/lib/supabase/server';

export default async function MyPage() {
  const supabase = await createClient();

  // Use for server-side operations
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*');
}
```

### Admin Client (Privileged Operations)

```typescript
import { createAdminClient } from '@/lib/supabase/server';

export async function adminFunction() {
  const supabase = createAdminClient();

  // Bypasses RLS - use with caution
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*');
}
```

## Backup Strategy

### Automated Backups

Supabase provides automated daily backups on all plans:
- **Free Tier:** 7 days of backups
- **Pro Tier:** 30 days of backups
- **Retention:** Configurable in Supabase Dashboard

### Manual Backups

Before deployment, create manual backup:

```bash
# Export schema
pg_dump -h db.your-project.supabase.co \
  -U postgres \
  -d postgres \
  --schema-only \
  > backups/schema-$(date +%Y%m%d).sql

# Export data
pg_dump -h db.your-project.supabase.co \
  -U postgres \
  -d postgres \
  --data-only \
  > backups/data-$(date +%Y%m%d).sql
```

### Restoration

```bash
# Restore schema
psql -h db.your-project.supabase.co \
  -U postgres \
  -d postgres \
  < backups/schema-20250108.sql

# Restore data
psql -h db.your-project.supabase.co \
  -U postgres \
  -d postgres \
  < backups/data-20250108.sql
```

## Type Generation

Generate TypeScript types from database schema:

```bash
# Install Supabase CLI
pnpm add -D supabase

# Login to Supabase
pnpm supabase login

# Generate types
pnpm supabase gen types typescript \
  --project-id your-project-id \
  > src/types/database.types.ts
```

## Monitoring

- **Supabase Dashboard:** Monitor database metrics, query performance
- **Sentry:** Track database errors in API routes
- **PostHog:** Track form submission success rates

## References

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth Helpers - Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Database Functions](https://supabase.com/docs/guides/database/functions)
