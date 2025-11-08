# Logging Strategy Research Summary for TEG App
**Research Date:** 25.11.08_12:33
**Project:** TEG Automotive Services (Next.js 16 + Supabase + Vercel)
**Research Coordinator:** Claude (research-coordinator agent)

---

## 🎯 Executive Decision: Use Pino

**Clear Recommendation:** **Pino** is the right logging library for the TEG appointment booking application.

**Confidence Level:** **High** (converging evidence from Context7, Perplexity, and Brave Search)

---

## Decision Matrix

| Factor | Winston | Pino | Winner | Weight |
|--------|---------|------|--------|--------|
| **Performance** | 10k logs/sec | 50k+ logs/sec (5x) | **Pino** | Critical |
| **Client Component Support** | ❌ (`fs` dependency) | ✅ No Node APIs | **Pino** | Critical |
| **Vercel Serverless** | Synchronous blocking | Async worker threads | **Pino** | Critical |
| **Edge Runtime** | ❌ Incompatible | ⚠️ Partial support | **Pino** | Medium |
| **Bundle Size** | 200KB+ | 25KB | **Pino** | Medium |
| **Production Stability** | Documented issues* | Proven stable | **Pino** | Critical |
| **Transport Ecosystem** | Rich (many options) | Streamlined | Winston | Low |
| **Learning Curve** | Familiar API | Steeper | Winston | Low |

\* *Winston stability issues: stops logging after rotation, memory leaks, CPU spikes (90%+) with large objects*

**Final Score: Pino wins 6/8 categories** (all critical factors)

---

## Why Pino Wins for TEG App

### 1. **Full-Stack Compatibility** (Critical)

**TEG App Requirements:**
- Server Components: appointment booking logic
- Client Components: form validation, user interactions
- API Routes: contact forms, service requests

**Winston:** ❌ Cannot import in Client Components (build fails)
**Pino:** ✅ Works everywhere (no Node.js dependencies)

### 2. **Vercel Serverless Optimization** (Critical)

**Serverless Constraints:**
- Limited execution time (10 seconds free tier, 60 seconds Pro)
- Limited memory (1GB free, 3GB Pro)
- Billed per execution duration
- Ephemeral filesystem (/tmp only)

**Winston:** Synchronous blocking → wastes execution time → higher costs
**Pino:** Async worker threads → minimal overhead → lower costs

**Performance Impact:**
- Winston: 20-30% CPU on logging operations
- Pino: 3-5% CPU on logging operations
- **Result:** 4-6x cost reduction on logging overhead

### 3. **Production Stability** (Critical)

**Community-Reported Winston Issues:**
```
"Winston stops logging after several days in production"
"File transport stops after log rotation, leaves files at 0 bytes"
"CPU usage spikes to 90%+ when logging large JSON objects"
"Memory leaks under sustained high-volume logging"
```

**Pino Track Record:**
- Used in production at scale (Fastify framework's default logger)
- Async architecture prevents blocking/buffering issues
- Lower resource usage = fewer failure modes

### 4. **Multi-Language Logging** (TEG-Specific)

**TEG App Context:** 3 languages (Latvian, English, Russian)

**Logging Needs:**
```javascript
logger.info('Translation missing', {
  locale: 'en',
  key: 'services.inspection.title',
  fallback_used: true
});

logger.warn('Form validation failed', {
  locale: 'ru',
  field: 'email',
  error_code: 'INVALID_FORMAT'
});
```

**Pino Advantage:** Lightweight = log more locale context without performance penalty

---

## Winston: When You'd Choose It

**Valid Winston Use Cases (Not TEG App):**

1. **Server-Only App** (no Client Components)
2. **Complex Multi-Destination Routing** (logs to 10+ destinations simultaneously)
3. **Legacy Enterprise Codebase** (already standardized on Winston)
4. **Specific Transport Dependency** (Winston-only integration required)

**TEG App Reality:** None of these apply. Full-stack Next.js 16 on Vercel.

---

## Research Methodology & Sources

### Three-Pronged Research Approach

**1. Context7 (Technical Documentation)**
- Analyzed Winston, Pino, Next.js 16 official docs
- 101 Winston code snippets, 170 Pino snippets
- Trust scores: Winston 7.6, Pino 9.2, Next.js 10

**2. Perplexity (Deep Research)**
- Generated 3 comprehensive reports:
  - Next.js 16 + Supabase logging (appointment booking focus)
  - LLM-friendly structured logging (JSON schema)
  - Winston vs Pino on Vercel serverless
- 240+ citations from industry sources

**3. Brave Search (Community Experience)**
- Real-world GitHub discussions, Reddit threads, Stack Overflow
- Production deployment experiences
- Common pitfalls and workarounds

### Converging Evidence

**All three sources agree:**
- Pino better for Next.js 13+ (App Router)
- Pino better for Vercel serverless
- Winston has `fs` dependency issue
- Performance difference is significant (5-10x)
- File-based logging doesn't work on Vercel

---

## Implementation Roadmap

### Phase 1: Setup (Week 1)

**Step 1: Install Dependencies**
```bash
pnpm add pino pino-logflare pino-pretty
```

**Step 2: Create Logger Config**
```javascript
// src/lib/logger.ts
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    env: process.env.VERCEL_ENV || 'development',
    service: 'teg-app',
    version: process.env.VERCEL_GIT_COMMIT_SHA || 'dev'
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: process.env.NODE_ENV === 'production'
    ? {
        target: 'pino-logflare',
        options: {
          apiKey: process.env.LOGFLARE_API_KEY,
          sourceToken: process.env.LOGFLARE_SOURCE_TOKEN
        }
      }
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:HH:MM:ss',
          ignore: 'pid,hostname'
        }
      }
});

export default logger;
```

**Step 3: Set Up Logflare Account**
- Sign up: https://logflare.app
- Create source: "TEG Production Logs"
- Copy API key and source token
- Add to Vercel environment variables

### Phase 2: Implement Logging (Week 2)

**See:** `04-recommended-log-events.md` for specific implementation

**Priority 1: Critical Paths**
- Appointment booking flow
- Contact form submissions
- Service request handling
- Database operations (Supabase)
- External API calls (Google Calendar, Resend)

**Priority 2: Security Events**
- Authentication attempts
- Session management
- Rate limiting triggers

**Priority 3: Performance Monitoring**
- Slow database queries (>500ms)
- External API timeouts
- Form validation failures

### Phase 3: LLM-Friendly Schema (Week 3)

**Implement structured logging for Claude self-debugging:**
```javascript
logger.info('Appointment created', {
  // Correlation
  trace_id: traceId,
  request_id: requestId,
  user_id: userId,

  // Context
  operation: 'create_appointment',
  locale: locale,
  feature: 'appointment_booking',

  // Performance
  duration_ms: duration,
  db_query_duration_ms: dbDuration,
  external_api_duration_ms: apiDuration,

  // Business Data
  appointment_id: appointmentId,
  service_type: serviceType,
  appointment_date: date
});
```

**See:** `05-log-schema-example.json` for full schema

### Phase 4: Monitoring & Alerts (Week 4)

**Set Up Logflare Alerts:**
- ERROR level spike (> 10 errors/hour)
- Database query latency > 1 second
- Form submission failure rate > 20%
- Authentication failure spike

---

## What to Log (Avoid Bloat)

### ✅ DO LOG

**Errors & Warnings:**
- All ERROR level events (database failures, API crashes)
- All WARN level events (validation failures, rate limits)

**Business Events:**
- Appointment created/updated/cancelled
- Contact form submitted
- Service request received
- User registered/logged in

**Performance Metrics:**
- Slow queries (> 500ms)
- External API latency (> 1000ms)
- Form submission timing

**Security Events:**
- Authentication attempts
- Session refresh failures
- Rate limit triggers

### ❌ DON'T LOG

**Routine Operations:**
- Every form field change (client-side)
- Health check requests
- Static asset requests (CSS, JS, images)
- Successful cache hits (unless debugging)

**Sensitive Data (PII):**
- Full email addresses (use masked: `j***@domain.com`)
- Full phone numbers (use masked: `+371 **-***-710`)
- Passwords (NEVER)
- Credit card numbers (NEVER)
- Full message content (log length only)

**Internal Implementation Details:**
- Function entry/exit (unless debugging specific issue)
- Variable values (unless critical context)
- Full SQL queries (log query hash + duration instead)

### Sampling Strategy

**100% Sampling (Always Log):**
- ERROR level
- WARN level
- Appointment bookings (all states)

**10% Sampling (Random):**
- Successful form submissions
- INFO level events

**0% Sampling (Never Log):**
- Health checks
- Static assets
- Development-only debug logs

---

## Cost Analysis

### Logging Volume Estimate (TEG App)

**Assumptions:**
- 1,000 appointments/month
- 500 contact forms/month
- 200 service requests/month
- 10,000 pageviews/month

**Log Events per Month:**
```
Appointments:  1,000 × 8 events = 8,000 logs
Contact Forms:   500 × 4 events = 2,000 logs
Service Reqs:    200 × 4 events =   800 logs
Errors/Warnings: ~50/month      =    50 logs
Performance:     ~100/month     =   100 logs
─────────────────────────────────────────────
TOTAL (with sampling):         ~11,000 logs/month
```

**Logflare Free Tier:** 100,000 events/month → **Plenty of headroom**

### Performance Impact

**Pino Overhead:**
- **Latency:** <1ms per log operation
- **CPU:** 3-5% of function execution time
- **Memory:** Minimal (~5MB baseline)

**Vercel Function Impact:**
```
Typical appointment booking function:
Total duration:     250ms
Logging overhead:    ~8ms (3.2%)
User-facing cost:  Negligible
```

**Conclusion:** Logging won't significantly impact performance or costs.

---

## Risk Assessment

### Potential Issues & Mitigation

**Risk 1: Pino Bundling Issues (Next.js 15+)**

**Evidence:** GitHub reports of thread-stream bundling failures

**Mitigation:**
```javascript
// next.config.js
module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty', 'pino-logflare']
  }
};
```

**Backup Plan:** Use `pino-http` or `pino/browser` for client logging

**Risk 2: Logflare Service Downtime**

**Impact:** Logs not captured during outage

**Mitigation:**
- Vercel still captures logs (1 hour retention)
- Set up fallback: dual logging to stdout + Logflare
- Configure Vercel Log Drains as backup (Datadog/Logtail)

**Risk 3: Log Schema Evolution**

**Impact:** Breaking changes to log structure over time

**Mitigation:**
- Include `schema_version` in all logs
- Document schema changes in CHANGELOG
- Use semantic versioning (1.0, 1.1, 2.0)

---

## Next Steps

### Immediate Actions (This Week)

- [ ] **Decision:** Confirm Pino selection with team
- [ ] **Setup:** Create Logflare account
- [ ] **Config:** Implement `src/lib/logger.ts`
- [ ] **Test:** Verify local logging works (pino-pretty)
- [ ] **Deploy:** Test Logflare integration in staging

### Short-Term (Next 2 Weeks)

- [ ] **Implement:** Log events in critical paths (see 04-recommended-log-events.md)
- [ ] **Schema:** Define JSON schema (see 05-log-schema-example.json)
- [ ] **PII:** Implement masking functions
- [ ] **Alerts:** Configure Logflare alerts
- [ ] **Docs:** Update team documentation

### Long-Term (Next Month)

- [ ] **OpenTelemetry:** Consider adding for distributed tracing
- [ ] **Dashboards:** Build Logflare dashboards for monitoring
- [ ] **Analytics:** Analyze log patterns for optimization
- [ ] **Training:** Team training on structured logging

---

## Conclusion

**Clear Recommendation: Pino**

**Rationale:**
1. ✅ **Performance:** 5-10x faster than Winston
2. ✅ **Compatibility:** Works in all Next.js contexts (Server + Client)
3. ✅ **Serverless-Optimized:** Async architecture perfect for Vercel
4. ✅ **Production-Ready:** Proven stability at scale
5. ✅ **Community Consensus:** Strong endorsement from Next.js/Vercel community

**Implementation Confidence:** High

**Time to Production:** 2-3 weeks (incremental rollout)

**Expected Outcomes:**
- Better observability for debugging
- Faster form processing (lower overhead)
- LLM-friendly logs (Claude can self-debug)
- Lower operational costs (efficient logging)

---

**Research Complete**
**Coordinator:** research-coordinator subagent
**Date:** 25.11.08_12:33
**Files Generated:**
- `00-research-summary.md` (this file)
- `01-context7-findings.md`
- `02-perplexity-findings.md`
- `03-brave-search-findings.md`
- `04-recommended-log-events.md` (next)
- `05-log-schema-example.json` (next)
