# Database Schema

Complete Supabase PostgreSQL database design for TEG website.

---

## Overview

**Database:** Supabase PostgreSQL

**Scope:** MVP requires 3 tables for form submissions and bookings

**RLS Policy:** Public insert (forms), future admin read/update (deferred)

**Backup Strategy:** Supabase automatic daily backups (included free tier)

---

## Table 1: Appointments

**Purpose:** Store appointment booking requests for car inspections

```sql
CREATE TABLE appointments (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

  -- Customer Information
  customer_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,

  -- Appointment Details
  service_type TEXT NOT NULL
    CHECK (service_type IN ('inspection', 'search', 'mobile')),
  vehicle_info TEXT,
  requested_date TIMESTAMP NOT NULL,
  message TEXT,

  -- Localization
  locale TEXT DEFAULT 'lv'
    CHECK (locale IN ('lv', 'en', 'ru')),

  -- Status Tracking
  status TEXT DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),

  -- Calendar Integration
  google_calendar_event_id TEXT UNIQUE,

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  -- Constraints
  CONSTRAINT valid_email CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Indexes for common queries
CREATE INDEX idx_appointments_date ON appointments(requested_date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_email ON appointments(email);
CREATE INDEX idx_appointments_created ON appointments(created_at DESC);

-- Automatic updated_at trigger
CREATE OR REPLACE FUNCTION update_appointments_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER appointments_update_timestamp
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_appointments_timestamp();
```

### Appointments Table Reference

| Column | Type | Constraints | Purpose |
|--------|------|-----------|---------|
| id | BIGINT | PRIMARY KEY | Unique identifier |
| customer_name | TEXT | NOT NULL | Person making appointment |
| email | TEXT | NOT NULL | Contact email, validated |
| phone | TEXT | - | Optional phone number |
| service_type | TEXT | NOT NULL, CHECK | inspection/search/mobile |
| vehicle_info | TEXT | - | Car details (optional) |
| requested_date | TIMESTAMP | NOT NULL | When appointment wanted |
| message | TEXT | - | Additional notes |
| locale | TEXT | DEFAULT 'lv' | Language of submission |
| status | TEXT | DEFAULT 'pending' | pending/confirmed/completed/cancelled |
| google_calendar_event_id | TEXT | UNIQUE | Link to calendar event |
| created_at | TIMESTAMP | DEFAULT NOW() | When record created |
| updated_at | TIMESTAMP | DEFAULT NOW() | When last modified |

### Sample Data

```sql
INSERT INTO appointments (customer_name, email, phone, service_type, requested_date, locale)
VALUES (
  'John Smith',
  'john@example.com',
  '+371 25 555 555',
  'inspection',
  '2025-11-15 10:00:00',
  'en'
);
```

---

## Table 2: Contact Submissions

**Purpose:** Store general contact form submissions

```sql
CREATE TABLE contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,

  -- Message Content
  subject TEXT,
  message TEXT NOT NULL,

  -- Localization
  locale TEXT DEFAULT 'lv'
    CHECK (locale IN ('lv', 'en', 'ru')),

  -- Status Tracking
  status TEXT DEFAULT 'new'
    CHECK (status IN ('new', 'responded', 'archived')),

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),

  -- Constraints
  CONSTRAINT valid_email CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Indexes for common queries
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);

-- Automatically archive old submissions (post-MVP)
-- CREATE OR REPLACE FUNCTION archive_old_contact_submissions()
-- RETURNS void AS $$
-- BEGIN
--   UPDATE contact_submissions
--   SET status = 'archived'
--   WHERE created_at < NOW() - INTERVAL '90 days'
--   AND status = 'new';
-- END;
-- $$ LANGUAGE plpgsql;
```

### Contact Submissions Table Reference

| Column | Type | Constraints | Purpose |
|--------|------|-----------|---------|
| id | BIGINT | PRIMARY KEY | Unique identifier |
| name | TEXT | NOT NULL | Sender's name |
| email | TEXT | NOT NULL | Contact email, validated |
| phone | TEXT | - | Optional phone |
| subject | TEXT | - | Message subject |
| message | TEXT | NOT NULL | Main message content |
| locale | TEXT | DEFAULT 'lv' | Language of submission |
| status | TEXT | DEFAULT 'new' | new/responded/archived |
| created_at | TIMESTAMP | DEFAULT NOW() | When submitted |

### Sample Data

```sql
INSERT INTO contact_submissions (name, email, message, subject, locale)
VALUES (
  'Jane Doe',
  'jane@example.com',
  'I would like to inquire about your inspection services.',
  'Service Inquiry',
  'en'
);
```

---

## Table 3: Service Requests

**Purpose:** Quick callback requests (minimal information)

```sql
CREATE TABLE service_requests (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

  -- Contact Information
  name TEXT NOT NULL,
  phone TEXT NOT NULL,

  -- Service Details
  service_type TEXT NOT NULL
    CHECK (service_type IN ('inspection', 'search', 'mobile')),
  preferred_time TEXT
    CHECK (preferred_time IS NULL OR preferred_time IN ('morning', 'afternoon', 'evening')),
  urgent BOOLEAN DEFAULT FALSE,

  -- Localization
  locale TEXT DEFAULT 'lv'
    CHECK (locale IN ('lv', 'en', 'ru')),

  -- Status Tracking
  status TEXT DEFAULT 'pending'
    CHECK (status IN ('pending', 'contacted', 'completed')),

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),

  -- Constraints
  CONSTRAINT valid_phone CHECK (phone ~ '^\+?[0-9\s\-()]{7,}$')
);

-- Indexes for common queries
CREATE INDEX idx_service_requests_urgent ON service_requests(urgent, created_at DESC);
CREATE INDEX idx_service_requests_status ON service_requests(status);
CREATE INDEX idx_service_requests_created ON service_requests(created_at DESC);

-- Alert on urgent requests (post-MVP: webhook/email notification)
```

### Service Requests Table Reference

| Column | Type | Constraints | Purpose |
|--------|------|-----------|---------|
| id | BIGINT | PRIMARY KEY | Unique identifier |
| name | TEXT | NOT NULL | Person requesting service |
| phone | TEXT | NOT NULL | Contact phone, validated |
| service_type | TEXT | NOT NULL, CHECK | inspection/search/mobile |
| preferred_time | TEXT | CHECK | morning/afternoon/evening |
| urgent | BOOLEAN | DEFAULT FALSE | Priority flag |
| locale | TEXT | DEFAULT 'lv' | Language of submission |
| status | TEXT | DEFAULT 'pending' | pending/contacted/completed |
| created_at | TIMESTAMP | DEFAULT NOW() | When submitted |

### Sample Data

```sql
INSERT INTO service_requests (name, phone, service_type, preferred_time, urgent, locale)
VALUES (
  'Bob Johnson',
  '+371 25 123 456',
  'mobile',
  'evening',
  FALSE,
  'lv'
);
```

---

## Row Level Security (RLS) Policies

### Public Insert Policies (MVP)

```sql
-- Enable RLS on all tables
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Appointments: Public can insert
CREATE POLICY "allow_public_insert_appointments" ON appointments
  FOR INSERT
  WITH CHECK (true);

-- Contact Submissions: Public can insert
CREATE POLICY "allow_public_insert_contact" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Service Requests: Public can insert
CREATE POLICY "allow_public_insert_service_requests" ON service_requests
  FOR INSERT
  WITH CHECK (true);

-- Default: Deny all SELECT/UPDATE/DELETE (no public read access)
-- This will be configured in POST-MVP when admin panel is added
```

### Future Admin Policies (Post-MVP)

```sql
-- When authentication is added, admin can read/update submissions

-- Admin users (after Supabase Auth setup)
-- CREATE POLICY "admin_read_appointments" ON appointments
--   FOR SELECT
--   USING (
--     auth.jwt() ->> 'user_id' IN (
--       SELECT id FROM admin_users
--     )
--   );

-- CREATE POLICY "admin_update_appointments" ON appointments
--   FOR UPDATE
--   USING (
--     auth.jwt() ->> 'user_id' IN (
--       SELECT id FROM admin_users
--     )
--   )
--   WITH CHECK (true);
```

---

## TypeScript Type Definitions

**File:** `/lib/database/types.ts`

```typescript
// Appointments type
export type Appointment = {
  id: number;
  customer_name: string;
  email: string;
  phone?: string;
  service_type: 'inspection' | 'search' | 'mobile';
  vehicle_info?: string;
  requested_date: string; // ISO timestamp
  message?: string;
  locale: 'lv' | 'en' | 'ru';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  google_calendar_event_id?: string;
  created_at: string;
  updated_at: string;
};

export type AppointmentInsert = Omit<
  Appointment,
  'id' | 'created_at' | 'updated_at'
>;

export type AppointmentUpdate = Partial<AppointmentInsert>;

// Contact Submission type
export type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  locale: 'lv' | 'en' | 'ru';
  status: 'new' | 'responded' | 'archived';
  created_at: string;
};

export type ContactSubmissionInsert = Omit<
  ContactSubmission,
  'id' | 'created_at'
>;

// Service Request type
export type ServiceRequest = {
  id: number;
  name: string;
  phone: string;
  service_type: 'inspection' | 'search' | 'mobile';
  preferred_time?: 'morning' | 'afternoon' | 'evening';
  urgent: boolean;
  locale: 'lv' | 'en' | 'ru';
  status: 'pending' | 'contacted' | 'completed';
  created_at: string;
};

export type ServiceRequestInsert = Omit<
  ServiceRequest,
  'id' | 'created_at'
>;
```

---

## Database Queries Reference

### Insert Appointment

```typescript
import type { AppointmentInsert } from '@/lib/database/types';
import { supabase } from '@/lib/supabase/client';

async function createAppointment(data: AppointmentInsert) {
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
```

### Insert Contact Submission

```typescript
import type { ContactSubmissionInsert } from '@/lib/database/types';
import { supabase } from '@/lib/supabase/client';

async function createContactSubmission(data: ContactSubmissionInsert) {
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
```

### Insert Service Request

```typescript
import type { ServiceRequestInsert } from '@/lib/database/types';
import { supabase } from '@/lib/supabase/client';

async function createServiceRequest(data: ServiceRequestInsert) {
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

### Get Urgent Service Requests

```typescript
async function getUrgentRequests() {
  const { data, error } = await supabase
    .from('service_requests')
    .select('*')
    .eq('urgent', true)
    .eq('status', 'pending')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}
```

### Update Appointment Status

```typescript
async function updateAppointmentStatus(
  appointmentId: number,
  status: 'confirmed' | 'completed' | 'cancelled'
) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', appointmentId)
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}
```

### Get Recent Submissions (Admin)

```typescript
// Future admin query (post-MVP with authentication)
async function getRecentSubmissions(days: number = 7) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .gte('created_at', startDate.toISOString())
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}
```

---

## Data Validation Rules

### Appointments Table

| Field | Rules |
|-------|-------|
| customer_name | Required, 2-100 characters |
| email | Required, valid email format |
| phone | Optional, valid phone format (7+ digits) |
| service_type | Required, one of: inspection, search, mobile |
| vehicle_info | Optional, max 500 characters |
| requested_date | Required, must be future date |
| message | Optional, max 1000 characters |
| locale | Required, one of: lv, en, ru |

### Contact Submissions Table

| Field | Rules |
|-------|-------|
| name | Required, 2-100 characters |
| email | Required, valid email format |
| phone | Optional, valid phone format |
| subject | Optional, max 200 characters |
| message | Required, min 10 characters, max 5000 |
| locale | Required, one of: lv, en, ru |

### Service Requests Table

| Field | Rules |
|-------|-------|
| name | Required, 2-100 characters |
| phone | Required, valid phone format |
| service_type | Required, one of: inspection, search, mobile |
| preferred_time | Optional, one of: morning, afternoon, evening |
| urgent | Optional, boolean |
| locale | Required, one of: lv, en, ru |

---

## Free Tier Limits & Scaling

### Current Free Tier

- **Storage:** 500 MB
- **Rows:** 50,000
- **Bandwidth:** 2 GB/month
- **Connections:** 4

### Storage Estimate

Assuming:
- Average appointment record: 500 bytes
- Average contact submission: 400 bytes
- Average service request: 250 bytes

**Capacity:**
- ~1,000 appointments
- ~1,250 contact submissions
- ~2,000 service requests

This is **adequate for MVP and 6+ months of usage** (assumption: 20-30 new submissions/month)

### Scaling Beyond MVP

When approaching limits:
1. **Archive old submissions** - Move submissions >90 days old to archive table
2. **Upgrade plan** - Supabase Pro ($25/month) for more storage/bandwidth
3. **Implement backup strategy** - Regular exports to Cold storage (AWS S3)

---

## Database Maintenance

### Backup Strategy

**Automatic (Included):**
- Supabase performs daily backups automatically
- Retained for 7 days
- Accessible via Supabase dashboard

**Manual Backup (Post-MVP):**
```bash
# Export database via Supabase dashboard
# Settings → Backups → Download
# Or use pg_dump via command line

pg_dump \
  "postgresql://user:password@host/database" \
  > backup-2025-11-08.sql
```

### Monitoring

**Queries to Monitor:**

```sql
-- Check database size
SELECT pg_size_pretty(pg_database_size('postgres'));

-- Check table sizes
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Check row counts
SELECT
  schemaname,
  tablename,
  n_live_tup AS row_count
FROM pg_stat_user_tables
ORDER BY n_live_tup DESC;
```

---

## Entity Relationship Diagram

```
┌─────────────────────┐
│   Appointments      │
├─────────────────────┤
│ id (PK)             │
│ customer_name       │
│ email               │
│ phone               │
│ service_type        │
│ vehicle_info        │
│ requested_date      │
│ message             │
│ locale              │
│ status              │
│ google_event_id     │
│ created_at          │
│ updated_at          │
└─────────────────────┘

┌──────────────────────────┐
│ Contact_Submissions      │
├──────────────────────────┤
│ id (PK)                  │
│ name                     │
│ email                    │
│ phone                    │
│ subject                  │
│ message                  │
│ locale                   │
│ status                   │
│ created_at               │
└──────────────────────────┘

┌──────────────────────────┐
│ Service_Requests         │
├──────────────────────────┤
│ id (PK)                  │
│ name                     │
│ phone                    │
│ service_type             │
│ preferred_time           │
│ urgent                   │
│ locale                   │
│ status                   │
│ created_at               │
└──────────────────────────┘
```

**Relationships:**
- No foreign keys in MVP (independent tables)
- All tables can be queried independently
- Future: Link to admin_users table (post-MVP)

---

## Future Enhancements (Post-MVP)

### Email Logs Table
```sql
CREATE TABLE email_logs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  related_id BIGINT,
  related_type TEXT, -- 'appointment', 'contact', 'service_request'
  email_to TEXT,
  email_type TEXT,
  status TEXT,
  sent_at TIMESTAMP,
  opened_at TIMESTAMP,
  bounced BOOLEAN
);
```

### Admin Users Table (with Auth)
```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE,
  role TEXT, -- 'admin', 'viewer'
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Audit Log Table
```sql
CREATE TABLE audit_logs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  table_name TEXT,
  record_id BIGINT,
  action TEXT, -- 'INSERT', 'UPDATE', 'DELETE'
  old_values JSONB,
  new_values JSONB,
  changed_by UUID,
  changed_at TIMESTAMP DEFAULT NOW()
);
```

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** MVP schema complete and documented
