# Recommended Log Events for TEG App
**Research Date:** 25.11.08_12:33
**Application:** TEG Automotive Services (Next.js 16 + Supabase + Vercel)
**Focus:** Appointment booking, contact forms, service requests

---

## Overview

This document specifies **exactly what events to log** in the TEG application to enable debugging, monitoring, and LLM-assisted troubleshooting without bloating log volume.

**Principle:** Log state transitions, errors, and business events. Don't log routine operations or implementation details.

---

## 1. Appointment Booking Flow

### Event: Booking Form Viewed

**When:** User navigates to appointment booking page
**Level:** DEBUG (development only)
**Location:** Client Component

```javascript
logger.debug('Appointment booking form viewed', {
  operation: 'view_booking_form',
  locale: currentLocale, // 'lv', 'en', 'ru'
  referrer: document.referrer
});
```

---

### Event: Availability Check Requested

**When:** User selects date/time, system queries available slots
**Level:** INFO
**Location:** Server Action / API Route

```javascript
logger.info('Availability check requested', {
  operation: 'check_availability',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType, // 'inspection', 'delivery', 'roadside'
  requested_date: formData.date,
  requested_time_slot: formData.timeSlot,
  locale: locale
});
```

---

### Event: Availability Check Completed

**When:** Database query returns available slots
**Level:** INFO
**Location:** Server Action / API Route

```javascript
logger.info('Availability check completed', {
  operation: 'check_availability_complete',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType,
  requested_date: formData.date,
  slots_available: availableSlots.length,
  database_query_duration_ms: dbDuration,
  cache_hit: false
});
```

---

### Event: No Availability Found

**When:** Requested time slot has no availability
**Level:** WARN
**Location:** Server Action / API Route

```javascript
logger.warn('No availability for requested slot', {
  operation: 'availability_not_found',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType,
  requested_date: formData.date,
  requested_time_slot: formData.timeSlot,
  alternative_slots_suggested: alternativeSlots.length
});
```

---

### Event: Booking Validation Failed

**When:** Client or server-side validation fails
**Level:** WARN
**Location:** Client Component (client validation) or Server Action (server validation)

```javascript
// Client-side validation failure
logger.warn('Booking form validation failed (client)', {
  operation: 'booking_validation_failed_client',
  request_id: requestId,
  validation_errors: Object.keys(errors), // ['email', 'phone']
  locale: locale,
  field_count: Object.keys(formData).length
});

// Server-side validation failure
logger.warn('Booking form validation failed (server)', {
  operation: 'booking_validation_failed_server',
  request_id: requestId,
  user_id: userId || 'anonymous',
  validation_errors: validationErrors, // { email: 'INVALID_FORMAT', phone: 'REQUIRED' }
  locale: locale
});
```

**⚠️ PII Protection:** Don't log actual email/phone values, only field names that failed

---

### Event: Booking Submission Started

**When:** Valid form submitted to server
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Appointment booking submission started', {
  operation: 'submit_booking_start',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType,
  appointment_date: formData.date,
  appointment_time: formData.timeSlot,
  locale: locale,
  customer_email_masked: maskEmail(formData.email), // j***@domain.com
  customer_phone_masked: maskPhone(formData.phone)  // +371 **-***-710
});
```

---

### Event: Database Insert (Appointment Created)

**When:** Appointment record inserted into Supabase
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Appointment created in database', {
  operation: 'db_insert_appointment',
  request_id: requestId,
  user_id: userId || 'anonymous',
  appointment_id: newAppointment.id,
  service_type: formData.serviceType,
  appointment_date: formData.date,
  appointment_time: formData.timeSlot,
  appointment_status: 'confirmed',
  database_insert_duration_ms: dbDuration,
  locale: locale
});
```

---

### Event: Database Insert Failed

**When:** Supabase insert operation fails
**Level:** ERROR
**Location:** Server Action

```javascript
logger.error('Failed to create appointment in database', {
  operation: 'db_insert_appointment_failed',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType,
  error_code: error.code, // 'CONNECTION_TIMEOUT', 'UNIQUE_VIOLATION', etc.
  error_message: error.message,
  database_query_duration_ms: dbDuration,
  retry_attempt: retryCount
});
```

---

### Event: Confirmation Email Sent

**When:** Appointment confirmation email sent via Resend
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Appointment confirmation email sent', {
  operation: 'send_confirmation_email',
  request_id: requestId,
  user_id: userId || 'anonymous',
  appointment_id: appointmentId,
  email_recipient_masked: maskEmail(customerEmail),
  email_service: 'resend',
  email_send_duration_ms: emailDuration,
  email_id: emailResponse.id,
  locale: locale
});
```

---

### Event: Confirmation Email Failed

**When:** Email send fails
**Level:** ERROR
**Location:** Server Action

```javascript
logger.error('Failed to send appointment confirmation email', {
  operation: 'send_confirmation_email_failed',
  request_id: requestId,
  user_id: userId || 'anonymous',
  appointment_id: appointmentId,
  email_recipient_masked: maskEmail(customerEmail),
  email_service: 'resend',
  error_code: error.code,
  error_message: error.message,
  retry_attempt: retryCount
});
```

---

### Event: Google Calendar Event Created

**When:** Appointment synced to provider's Google Calendar
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Google Calendar event created', {
  operation: 'create_calendar_event',
  request_id: requestId,
  appointment_id: appointmentId,
  calendar_event_id: calendarEvent.id,
  external_api_service: 'google_calendar',
  external_api_duration_ms: apiDuration
});
```

---

### Event: Booking Submission Completed

**When:** All steps completed successfully
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Appointment booking submission completed', {
  operation: 'submit_booking_complete',
  request_id: requestId,
  user_id: userId || 'anonymous',
  appointment_id: appointmentId,
  total_duration_ms: totalDuration,
  steps_completed: ['validation', 'db_insert', 'email_send', 'calendar_sync'],
  locale: locale
});
```

---

## 2. Contact Form Submission

### Event: Contact Form Viewed

**When:** User navigates to contact page
**Level:** DEBUG (development only)
**Location:** Client Component

```javascript
logger.debug('Contact form viewed', {
  operation: 'view_contact_form',
  locale: currentLocale
});
```

---

### Event: Contact Form Validation Failed

**When:** Validation fails (client or server)
**Level:** WARN
**Location:** Client Component or Server Action

```javascript
logger.warn('Contact form validation failed', {
  operation: 'contact_validation_failed',
  request_id: requestId,
  validation_errors: Object.keys(errors), // ['email', 'message']
  locale: locale
});
```

---

### Event: Contact Form Submitted

**When:** Valid form submitted to server
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Contact form submitted', {
  operation: 'submit_contact_form',
  request_id: requestId,
  contact_email_masked: maskEmail(formData.email),
  contact_phone_masked: maskPhone(formData.phone),
  message_length: formData.message.length, // Don't log message content
  inquiry_type: formData.inquiryType || 'general',
  locale: locale
});
```

**⚠️ PII Protection:** Never log full message content (may contain sensitive info)

---

### Event: Contact Submission Saved to Database

**When:** Inserted into Supabase `contact_submissions` table
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Contact submission saved to database', {
  operation: 'db_insert_contact_submission',
  request_id: requestId,
  submission_id: newSubmission.id,
  database_insert_duration_ms: dbDuration
});
```

---

### Event: Contact Notification Email Sent

**When:** Internal notification sent to TEG team
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Contact form notification email sent', {
  operation: 'send_contact_notification',
  request_id: requestId,
  submission_id: submissionId,
  email_recipient: 'teg-team@teg.lv', // Internal email, ok to log
  email_service: 'resend',
  email_send_duration_ms: emailDuration
});
```

---

## 3. Service Request Flow

### Event: Service Request Form Submitted

**When:** User submits service request (car search/delivery, roadside assistance)
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Service request submitted', {
  operation: 'submit_service_request',
  request_id: requestId,
  user_id: userId || 'anonymous',
  service_type: formData.serviceType, // 'car_search', 'roadside_assistance'
  request_urgency: formData.urgency || 'normal',
  location_masked: maskLocation(formData.location), // City only, not full address
  customer_email_masked: maskEmail(formData.email),
  customer_phone_masked: maskPhone(formData.phone),
  locale: locale
});
```

---

### Event: Service Request Assigned to Provider

**When:** Request assigned to specific technician/provider
**Level:** INFO
**Location:** Admin action or automated assignment

```javascript
logger.info('Service request assigned', {
  operation: 'assign_service_request',
  request_id: requestId,
  service_request_id: requestId,
  assigned_provider_id: providerId,
  assignment_method: 'manual' // or 'automatic'
});
```

---

### Event: Service Request Status Updated

**When:** Status changes (pending → in_progress → completed → cancelled)
**Level:** INFO
**Location:** Server Action

```javascript
logger.info('Service request status updated', {
  operation: 'update_service_request_status',
  request_id: requestId,
  service_request_id: serviceRequestId,
  previous_status: 'pending',
  new_status: 'in_progress',
  updated_by_user_id: userId
});
```

---

## 4. Authentication & Session Management

### Event: User Login Attempt

**When:** User attempts to log in (Supabase Auth)
**Level:** INFO
**Location:** Auth callback or Server Action

```javascript
logger.info('User login attempt', {
  operation: 'auth_login_attempt',
  request_id: requestId,
  auth_method: 'email_password', // or 'oauth_google', etc.
  user_email_masked: maskEmail(email), // j***@domain.com
  locale: locale
});
```

**⚠️ Security:** NEVER log passwords or auth tokens

---

### Event: User Login Success

**When:** Supabase Auth successful
**Level:** INFO
**Location:** Auth callback

```javascript
logger.info('User login successful', {
  operation: 'auth_login_success',
  request_id: requestId,
  user_id: user.id,
  auth_method: 'email_password',
  session_duration_hours: 24,
  locale: locale
});
```

---

### Event: User Login Failed

**When:** Invalid credentials or auth error
**Level:** WARN
**Location:** Auth callback

```javascript
logger.warn('User login failed', {
  operation: 'auth_login_failed',
  request_id: requestId,
  user_email_masked: maskEmail(email),
  auth_method: 'email_password',
  failure_reason: 'INVALID_CREDENTIALS', // or 'ACCOUNT_LOCKED', 'SERVICE_UNAVAILABLE'
  locale: locale
});
```

---

### Event: Session Refresh Failed

**When:** Supabase session refresh fails
**Level:** WARN
**Location:** Middleware or auth check

```javascript
logger.warn('Session refresh failed', {
  operation: 'auth_session_refresh_failed',
  request_id: requestId,
  user_id: userId,
  error_code: 'REFRESH_TOKEN_EXPIRED',
  locale: locale
});
```

---

## 5. Database Operations (Supabase)

### Event: Slow Query Detected

**When:** Database query exceeds threshold (e.g., 500ms)
**Level:** WARN
**Location:** Database wrapper or query logger

```javascript
logger.warn('Slow database query detected', {
  operation: 'db_query_slow',
  request_id: requestId,
  table_name: 'appointments',
  query_type: 'SELECT',
  query_duration_ms: 1250, // Exceeds threshold
  query_hash: hashQuery(query), // Hash, don't log full query
  rows_returned: rowCount,
  threshold_ms: 500
});
```

---

### Event: Database Connection Error

**When:** Cannot connect to Supabase
**Level:** ERROR
**Location:** Database client

```javascript
logger.error('Database connection failed', {
  operation: 'db_connection_failed',
  request_id: requestId,
  error_code: 'CONNECTION_TIMEOUT',
  error_message: error.message,
  connection_pool: 'primary',
  retry_attempt: retryCount
});
```

---

### Event: Database Constraint Violation

**When:** Unique constraint, foreign key violation, etc.
**Level:** WARN (expected validation failure)
**Location:** Database operation

```javascript
logger.warn('Database constraint violation', {
  operation: 'db_constraint_violation',
  request_id: requestId,
  table_name: 'appointments',
  constraint_type: 'UNIQUE_VIOLATION',
  constraint_name: 'appointments_timeslot_unique',
  error_message: error.message
});
```

---

## 6. External API Calls

### Event: External API Call (General)

**When:** Calling any external service (Google Calendar, Resend, payment gateway)
**Level:** INFO
**Location:** API client wrapper

```javascript
logger.info('External API call started', {
  operation: 'external_api_call_start',
  request_id: requestId,
  external_service_name: 'resend',
  external_service_endpoint: '/emails',
  external_service_method: 'POST'
});
```

---

### Event: External API Call Completed

**When:** External API responds successfully
**Level:** INFO
**Location:** API client wrapper

```javascript
logger.info('External API call completed', {
  operation: 'external_api_call_complete',
  request_id: requestId,
  external_service_name: 'resend',
  external_service_endpoint: '/emails',
  external_service_status_code: 200,
  external_api_duration_ms: apiDuration
});
```

---

### Event: External API Call Failed

**When:** External API error (timeout, 4xx, 5xx)
**Level:** ERROR
**Location:** API client wrapper

```javascript
logger.error('External API call failed', {
  operation: 'external_api_call_failed',
  request_id: requestId,
  external_service_name: 'google_calendar',
  external_service_endpoint: '/calendar/v3/events',
  external_service_status_code: 503,
  external_service_error_message: error.message,
  external_api_duration_ms: apiDuration,
  retry_attempt: retryCount,
  retryable: true
});
```

---

## 7. Middleware & Rate Limiting

### Event: Rate Limit Triggered

**When:** User exceeds rate limit
**Level:** WARN
**Location:** Middleware

```javascript
logger.warn('Rate limit exceeded', {
  operation: 'rate_limit_exceeded',
  request_id: requestId,
  user_id: userId || 'anonymous',
  client_ip: clientIp,
  endpoint: request.pathname,
  rate_limit_window_seconds: 60,
  rate_limit_max_requests: 10,
  current_request_count: 15
});
```

---

### Event: i18n Locale Detection

**When:** Locale detected or changed
**Level:** DEBUG (development only)
**Location:** i18n middleware

```javascript
logger.debug('Locale detected', {
  operation: 'i18n_locale_detected',
  request_id: requestId,
  detected_locale: detectedLocale, // 'lv', 'en', 'ru'
  detection_method: 'cookie', // or 'header', 'path', 'default'
  available_locales: ['lv', 'en', 'ru']
});
```

---

### Event: Translation Missing

**When:** i18n key not found for locale
**Level:** WARN
**Location:** Translation utility

```javascript
logger.warn('Translation missing', {
  operation: 'i18n_translation_missing',
  request_id: requestId,
  locale: currentLocale,
  translation_key: 'services.inspection.description',
  fallback_locale_used: 'lv',
  fallback_translation_found: true
});
```

---

## 8. Error Boundary / Global Error Handler

### Event: Unhandled Error Caught

**When:** Error boundary catches React error or global error handler
**Level:** ERROR
**Location:** Error boundary component or global handler

```javascript
logger.error('Unhandled error caught', {
  operation: 'unhandled_error',
  request_id: requestId,
  user_id: userId || 'anonymous',
  error_type: error.name, // 'TypeError', 'ReferenceError', etc.
  error_message: error.message,
  error_stack: error.stack,
  component_stack: errorInfo.componentStack, // React Error Boundary
  locale: locale,
  page_url: window.location.href
});
```

---

## Summary: Log Event Priority

### Priority 1: ALWAYS LOG (100% Sampling)

- ❌ **ERROR** level events (all errors)
- ⚠️ **WARN** level events (validation failures, rate limits, no availability)
- ✅ **Appointment bookings** (all states: start, complete, fail)
- ✅ **Contact form submissions** (all)
- ✅ **Service requests** (all)
- ✅ **Authentication events** (login attempts, failures)
- ✅ **Database errors** (connection failures, constraint violations)
- ✅ **External API failures**

### Priority 2: SAMPLE 10-50% (Reduce Volume)

- ℹ️ **INFO** level events (successful operations)
- ✅ **External API successes** (10% sample)
- ✅ **Database query completions** (10% sample)

### Priority 3: DEVELOPMENT ONLY (0% in Production)

- 🐛 **DEBUG** level events (form views, routine operations)
- 🔍 **TRACE** level (never use)

---

## Helper Functions for PII Masking

```javascript
// src/lib/logger-utils.ts

export function maskEmail(email: string): string {
  if (!email || !email.includes('@')) return 'invalid-email';
  const [name, domain] = email.split('@');
  return `${name[0]}***@${domain}`;
}

export function maskPhone(phone: string): string {
  // +371 25 201 710 → +371 **-***-710
  return phone.replace(/(\+?\d{1,3})\s*\d{2}\s*\d{3}\s*(\d{3})/, '$1 **-***-$2');
}

export function hashEmail(email: string): string {
  // Use crypto hash for correlation without exposing PII
  return crypto.createHash('sha256').update(email).digest('hex').substring(0, 16);
}

export function maskLocation(location: string): string {
  // Full address → city only
  // "Brivibas iela 123, Riga, LV-1001" → "Riga"
  return location.split(',')[1]?.trim() || 'unknown';
}

export function hashQuery(query: string): string {
  // Hash SQL query for correlation without exposing structure
  return crypto.createHash('sha256').update(query).digest('hex').substring(0, 12);
}
```

---

**Next:** See `05-log-schema-example.json` for full JSON schema structure.
