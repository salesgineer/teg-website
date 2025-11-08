# Perplexity Research: Logging Best Practices & Industry Patterns
**Research Date:** 25.11.08_12:33
**Source:** Perplexity Deep Research MCP
**Researcher:** research-coordinator

---

## Executive Summary

Three comprehensive research reports generated via Perplexity covering:
1. **Next.js 16 + Supabase logging** for appointment booking systems
2. **LLM-friendly structured logging** with JSON schema for AI debugging
3. **Winston vs Pino** on Vercel serverless (file-based logging)

**Key Insights:**
- Structured logging reduces log volume by 70-80% vs unstructured
- LLM-friendly logs require: trace IDs, severity numbers, structured attributes
- Pino recommended for Vercel (5-10x faster, no `fs` dependency)
- File-based logging in Vercel serverless is **ephemeral** (use stdout → Logtail/Logflare)

---

## Report 1: Next.js 16 App Router + Supabase Logging

### Critical Findings

**Next.js 16 Native Logging:**
- Configuration via `next.config.js` for fetch logging
- Incoming request logging with timing breakdown
- Build phase logging shows compile vs render time

**Multi-Language Considerations (TEG App):**
- Log locale context for language-specific errors
- Capture i18n routing issues (missing translations)

### Appointment Booking Specific Patterns

**What to Log:**
```javascript
// ✅ ESSENTIAL: Booking workflow events
logger.info('Appointment booking started', {
  operation: 'start_booking',
  user_id: userId,
  service_type: 'inspection',
  requested_date: date,
  requested_time: time
});

// ✅ ESSENTIAL: Availability checks
logger.info('Availability check completed', {
  operation: 'check_availability',
  slots_available: availableSlots.length,
  query_duration_ms: duration
});

// ✅ ESSENTIAL: Booking failures
logger.warn('Booking failed - no availability', {
  operation: 'booking_failed',
  reason: 'no_slots',
  user_id: userId,
  requested_date: date
});

// ✅ ESSENTIAL: Database operations
logger.info('Appointment created', {
  operation: 'create_appointment',
  appointment_id: newAppointment.id,
  database_insert_duration_ms: dbDuration
});
```

**What NOT to Log (Avoid Bloat):**
```javascript
// ❌ DON'T LOG: Every form field change
// ❌ DON'T LOG: Health check requests
// ❌ DON'T LOG: Static asset requests
// ❌ DON'T LOG: Successful routine operations at INFO level (use DEBUG)
```

### Supabase-Specific Logging

**Authentication Events:**
```javascript
// ✅ Log auth attempts (not passwords!)
logger.info('User login attempt', {
  operation: 'auth_login',
  user_email_hash: hashEmail(email), // Hash PII
  auth_method: 'password',
  success: true,
  session_duration_hours: 24
});

// ✅ Log session issues
logger.warn('Session refresh failed', {
  operation: 'auth_refresh',
  user_id: userId,
  error_code: 'REFRESH_TOKEN_EXPIRED'
});
```

**Database Query Logging:**
```javascript
// ✅ Log critical queries only
logger.info('Database query executed', {
  operation: 'db_query',
  table: 'appointments',
  query_type: 'SELECT',
  duration_ms: queryDuration,
  rows_returned: data.length,
  cache_hit: false
});

// ❌ DON'T log full SQL queries (security risk)
// ❌ DON'T log every query (bloat)
```

### Log Volume Management

**Stratified Sampling Strategy:**
- **100% sampling:** Errors, warnings, booking failures
- **10% sampling:** Successful bookings (randomly sample)
- **5% sampling:** Routine operations (form renders, cache hits)
- **0% sampling:** Health checks, static assets

**Log Level Usage:**
- **ERROR:** Database failures, payment errors, API crashes
- **WARN:** Validation failures, no availability, rate limiting triggered
- **INFO:** Booking created, user logged in, email sent
- **DEBUG:** Form validation details, cache operations (dev only)
- **TRACE:** Never use in production (internal implementation details)

### Sensitive Data Protection

**PII Fields (from appointment booking):**
```javascript
// ❌ NEVER LOG: Full phone numbers, emails, addresses
// ✅ INSTEAD: Hash or mask

function maskEmail(email) {
  const [name, domain] = email.split('@');
  return `${name[0]}***@${domain}`;
}

function maskPhone(phone) {
  // +371 25 201 710 → +371 **-***-710
  return phone.replace(/(\d{3})\s\d{2}\s\d{3}\s(\d{3})/, '$1 **-***-$2');
}

logger.info('Contact form submitted', {
  user_email_masked: maskEmail(formData.email),
  user_phone_masked: maskPhone(formData.phone),
  message_length: formData.message.length // Don't log message content
});
```

### OpenTelemetry Integration

**Trace Context Propagation:**
```javascript
import { trace } from '@opentelemetry/api';

export async function submitBooking(formData) {
  const span = trace.getTracer('teg-app').startSpan('submit_booking');
  const traceId = span.spanContext().traceId;

  logger.info('Booking submission started', {
    trace_id: traceId,
    span_id: span.spanContext().spanId,
    operation: 'submit_booking'
  });

  // All subsequent logs automatically include trace_id
  // Can correlate across services

  span.end();
}
```

---

## Report 2: LLM-Friendly Structured Logging

### Core Schema Requirements

**Top-Level Structure:**
```json
{
  "timestamp": "2025-11-08T12:33:00.123Z",
  "level": "INFO",
  "severity_number": 9,
  "message": "Appointment booking created",
  "trace_id": "abc123def456",
  "span_id": "span789",
  "service_name": "teg-appointment-service",
  "version": "1.0.0",
  "environment": "production",
  "attributes": { /* event-specific data */ },
  "exception": null,
  "resource": { /* service metadata */ }
}
```

**Why This Matters for Claude:**
- `trace_id`: Enables Claude to correlate events across logs
- `severity_number`: Machine-readable severity (INFO=9, ERROR=17)
- `attributes`: Structured key-value pairs Claude can query
- `exception`: Structured error data (not string stacktraces)

### Essential Metadata for AI Debugging

**Correlation Fields:**
```javascript
{
  "trace_id": "uuid-v4",           // Correlate request across services
  "span_id": "uuid-v4",            // Specific operation
  "user_id": "user-12345",         // Cohort analysis
  "session_id": "session-67890",   // Multi-step workflow tracking
  "request_id": "req-unique-id"    // HTTP request identifier
}
```

**Context Fields:**
```javascript
{
  "environment": "production",     // Dev vs staging vs prod
  "version": "2.1.0",              // Which code version
  "feature": "appointment_booking", // Component/feature
  "locale": "lv",                  // Language context (TEG)
  "deployment_id": "vercel-xyz"    // Vercel deployment
}
```

**Performance Fields:**
```javascript
{
  "duration_milliseconds": 523,           // Total operation time
  "database_query_duration_ms": 150,      // DB latency
  "external_api_duration_ms": 300,        // External service latency
  "cache_hit": false,                     // Cache performance
  "retry_count": 0                        // Resilience metrics
}
```

### Hierarchical Attribute Naming

**Good (Claude can parse):**
```javascript
{
  "http_method": "POST",
  "http_path": "/api/appointments",
  "http_status_code": 201,
  "http_user_agent": "Mozilla/5.0...",

  "db_table": "appointments",
  "db_query_type": "INSERT",
  "db_rows_affected": 1,

  "external_service_name": "google_calendar",
  "external_service_latency_ms": 450,
  "external_service_status": "success"
}
```

**Bad (ambiguous for AI):**
```javascript
{
  "method": "POST",        // What kind of method?
  "path": "/api/...",      // File path? URL path?
  "status": 201,           // What status? HTTP? Database?
  "latency": 450           // What latency? Total? Database?
}
```

### Structured Exception Format

**For AI Comprehension:**
```javascript
{
  "exception": {
    "type": "SupabaseDatabaseError",
    "message": "Connection timeout after 30 seconds",
    "stacktrace": [
      {
        "file": "lib/supabase/client.ts",
        "line": 127,
        "function": "executeQuery",
        "module": "@/lib/supabase"
      },
      {
        "file": "app/api/appointments/route.ts",
        "line": 45,
        "function": "POST"
      }
    ],
    "cause_chain": [
      {
        "type": "NetworkTimeoutError",
        "message": "Socket timeout"
      }
    ],
    "context": {
      "query_hash": "abc123",
      "connection_pool": "primary",
      "retry_attempt": 2
    }
  }
}
```

**What This Enables:**
- Claude sees error type hierarchy (DatabaseError → NetworkTimeout)
- Exact file + line location (no parsing stacktrace strings)
- Context about *what was being attempted* when error occurred

### Log Schema Versioning

```javascript
{
  "schema_version": "1.2",
  "schema_namespace": "com.teg.appointment-service",
  "message": "..."
}
```

When schema evolves, Claude can handle migration logic.

---

## Report 3: Winston vs Pino on Vercel Serverless

### Performance Comparison

| Metric | Winston | Pino | Winner |
|--------|---------|------|--------|
| Throughput | ~10k logs/sec | ~50k+ logs/sec | **Pino (5x)** |
| Processing | Synchronous (blocking) | Async (worker threads) | **Pino** |
| Memory | Higher overhead | Minimal overhead | **Pino** |
| Client Support | ❌ (`fs` dependency) | ✅ (no Node APIs) | **Pino** |
| Edge Runtime | ❌ Limited | ⚠️ Partial | **Pino** |
| Bundle Size | ~200KB+ | ~25KB | **Pino** |

### Vercel-Specific Constraints

**Ephemeral Filesystem:**
- `/tmp` directory available but *cleared between invocations*
- File-based logging **does not persist**
- Must use stdout → Vercel Log Drains

**Recommended Architecture:**
```
Application (Pino)
  → stdout (JSON logs)
    → Vercel captures automatically
      → Vercel Log Drain integration
        → Logtail/Logflare (persistent storage)
```

**Why Winston Struggles:**
1. Synchronous file writes block serverless function
2. File transport expects persistent filesystem
3. Higher memory usage in memory-constrained functions (2GB max)
4. Documented production issues (logging stops after rotation)

### Production Readiness Issues

**Winston Stability Problems (documented):**
- Stops logging after several days in long-running processes
- File transport halts after log rotation
- CPU spikes to 90%+ with large JSON objects
- Memory leaks under sustained load

**Pino Stability:**
- Worker thread architecture prevents blocking
- Proven stable in high-volume production
- Lower resource usage = better for serverless

### Integration Recommendations

**For Vercel + Next.js 16:**

```javascript
// ✅ RECOMMENDED: Pino + Logflare
import pino from 'pino';

const transport = pino.transport({
  target: 'pino-logflare',
  options: {
    apiKey: process.env.LOGFLARE_API_KEY,
    sourceToken: process.env.LOGFLARE_SOURCE_TOKEN,
  }
});

const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    base: {
      env: process.env.VERCEL_ENV,
      service: 'teg-app',
      version: process.env.VERCEL_GIT_COMMIT_SHA
    }
  },
  transport
);

export default logger;
```

**Alternative: Winston (if required)**
```javascript
// ⚠️ Server-side only, higher overhead
import winston from 'winston';
import { Logtail } from '@logtail/winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new Logtail({ sourceToken: process.env.LOGTAIL_TOKEN })
  ]
});

export default logger;
```

---

## Synthesis: Recommendations for TEG App

### Decision Matrix

**Choose Pino:**
- ✅ Next.js 16 App Router (Server + Client Components)
- ✅ Vercel deployment (serverless optimization)
- ✅ High traffic expected (performance critical)
- ✅ Form-heavy app (client-side validation logging)
- ✅ Multi-language (lower overhead for i18n logging)

**Choose Winston:**
- ✅ Server-only app (no Client Components)
- ✅ Complex multi-destination routing required
- ✅ Legacy codebase already using Winston
- ✅ Specific third-party transport dependency

**For TEG:** **Pino** wins decisively.

### Implementation Checklist

- [ ] Install: `pnpm add pino pino-logflare`
- [ ] Create: `/src/lib/logger.ts` with Pino config
- [ ] Configure: Logflare account + API keys
- [ ] Define: Log schema (see 05-log-schema-example.json)
- [ ] Implement: Logging in critical paths (see 04-recommended-log-events.md)
- [ ] Test: Performance impact in dev
- [ ] Deploy: Verify Logflare receiving logs
- [ ] Monitor: Set up alerts for ERROR level logs

### Avoid Log Bloat Strategy

1. **Use log levels correctly** (ERROR/WARN/INFO only in prod)
2. **Sample routine operations** (10% of successful bookings)
3. **Filter health checks** (Next.js config: ignore patterns)
4. **Mask PII** (never log full emails/phones)
5. **Structured attributes** (avoid logging entire objects)

---

**Sources:**
- Perplexity Deep Research (3 comprehensive reports)
- 240+ citations from industry sources
- Real-world production experiences documented
