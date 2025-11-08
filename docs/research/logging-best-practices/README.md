# Logging Best Practices Research for TEG App
**Research Completed:** 25.11.08_12:33
**Coordinator:** research-coordinator subagent (Claude)
**Project:** TEG Automotive Services (Next.js 16 + Supabase + Vercel)

---

## 📋 Quick Navigation

### Start Here
- **[00-research-summary.md](./00-research-summary.md)** - Executive summary, decision matrix, recommendations

### Research Sources
- **[01-context7-findings.md](./01-context7-findings.md)** - Technical docs (Winston, Pino, Next.js 16)
- **[02-perplexity-findings.md](./02-perplexity-findings.md)** - Industry best practices (3 deep-dive reports)
- **[03-brave-search-findings.md](./03-brave-search-findings.md)** - Community experiences & real-world patterns

### Implementation Guides
- **[04-recommended-log-events.md](./04-recommended-log-events.md)** - Exactly what to log (appointment booking, forms, auth, DB)
- **[05-log-schema-example.json](./05-log-schema-example.json)** - LLM-friendly JSON schema with examples

---

## 🎯 Key Decision: Use Pino

**Recommendation:** Pino (not Winston) for TEG app

**Why:**
1. ✅ 5-10x faster than Winston (50k vs 10k logs/sec)
2. ✅ Works in Client Components (Winston has `fs` dependency → build fails)
3. ✅ Vercel serverless optimized (async worker threads)
4. ✅ Lightweight (25KB vs 200KB+)
5. ✅ Production-proven stability

**Confidence:** High (all 3 research sources converge)

---

## 📊 Research Summary

### Research Questions Answered

**Q1: Is Winston the right tool for Next.js 16 + Vercel?**
**A:** ❌ No. Winston has critical compatibility issues:
- Cannot import in Client Components (`fs` dependency)
- Synchronous blocking = poor serverless performance
- Documented production stability issues
- **Use Pino instead**

**Q2: What should we log in an appointment booking app?**
**A:** ✅ See [04-recommended-log-events.md](./04-recommended-log-events.md)
- Booking workflow (start, complete, fail)
- Form validation failures
- Database operations (Supabase)
- External APIs (Resend, Google Calendar)
- Authentication events
- **Don't log:** Routine operations, PII, health checks

**Q3: How to avoid log bloat?**
**A:** ✅ Three-pronged strategy:
1. **Log levels:** ERROR/WARN always, INFO sampled (10%), DEBUG never (production)
2. **Filtering:** Ignore health checks, static assets
3. **Masking:** Never log full emails/phones (use `j***@domain.com`)

**Q4: How to make logs LLM-friendly (Claude can debug)?**
**A:** ✅ See [05-log-schema-example.json](./05-log-schema-example.json)
- Structured JSON (not strings)
- Include `trace_id` for correlation
- Use `severity_number` (OpenTelemetry standard)
- Structured `exception` object (not string stacktraces)
- Hierarchical attribute naming (`http_method`, `db_table`, etc.)

---

## 🚀 Implementation Checklist

### Phase 1: Setup (Week 1)
- [ ] Install: `pnpm add pino pino-logflare pino-pretty`
- [ ] Create: `/src/lib/logger.ts` (Pino config)
- [ ] Setup: Logflare account (free tier)
- [ ] Configure: Environment variables (API keys)
- [ ] Test: Local logging (pino-pretty)

### Phase 2: Logging Events (Week 2)
- [ ] Implement: Appointment booking flow logs
- [ ] Implement: Contact form logs
- [ ] Implement: Service request logs
- [ ] Implement: Auth event logs
- [ ] Implement: Database operation logs
- [ ] Implement: External API logs

### Phase 3: PII Protection (Week 2-3)
- [ ] Create: Masking functions (`maskEmail`, `maskPhone`)
- [ ] Audit: All log events for PII exposure
- [ ] Test: Verify no sensitive data in logs

### Phase 4: Production Deploy (Week 3-4)
- [ ] Deploy: Staging environment with logging
- [ ] Verify: Logflare receiving logs
- [ ] Configure: Alerts (ERROR spike, slow queries)
- [ ] Monitor: Log volume (stay under free tier)
- [ ] Deploy: Production

---

## 📈 Expected Outcomes

### Observability Improvements
- ✅ Trace appointment bookings end-to-end
- ✅ Debug form validation failures
- ✅ Identify slow database queries
- ✅ Monitor external API latency
- ✅ Track authentication issues

### LLM Self-Debugging (Claude)
- ✅ Claude can correlate events via `trace_id`
- ✅ Claude understands structured attributes
- ✅ Claude can diagnose root causes from logs alone
- ✅ No source code access needed for debugging

### Performance Impact
- ✅ Minimal latency (<1ms per log)
- ✅ 3-5% CPU overhead (vs 20-30% with Winston)
- ✅ Lower Vercel function execution costs

### Cost Analysis
- ✅ ~11,000 logs/month (estimated)
- ✅ Logflare free tier: 100,000 events/month
- ✅ Plenty of headroom (9x buffer)

---

## 🔍 Research Methodology

### Three Data Sources

**1. Context7 (Technical Authority)**
- Official documentation for Winston, Pino, Next.js 16
- Performance benchmarks
- API compatibility analysis

**2. Perplexity (Industry Best Practices)**
- 3 comprehensive deep-dive reports
- 240+ citations from industry sources
- Real-world production experiences

**3. Brave Search (Community Consensus)**
- GitHub discussions (vercel/next.js)
- Reddit threads (r/nextjs, r/devops)
- Stack Overflow Q&A
- Production deployment war stories

### Converging Evidence
All three sources independently arrived at same conclusions:
- Pino > Winston for Next.js 16 + Vercel
- Structured JSON logging essential
- PII masking critical
- File-based logging doesn't work on Vercel

---

## 📚 Additional Resources

### Official Documentation
- [Pino Official Docs](https://getpino.io/)
- [Next.js 16 Logging](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)

### Centralized Logging Services
- [Logflare](https://logflare.app/) - Recommended for Vercel
- [Logtail (Better Stack)](https://betterstack.com/logtail)
- [Datadog](https://www.datadoghq.com/) - Enterprise option

### Related TEG Documentation
- [Supabase Integration](../../supabase/README.md)
- [Form Validation](../../validations/)
- [Project Constitution](../../../.claude/constitution.md)

---

## 🤝 Contributing

This research is complete but can be updated:

**To Update Research:**
1. Run new queries through research-coordinator
2. Update relevant findings document
3. Update `00-research-summary.md` with new insights
4. Increment `schema_version` if schema changes

**To Add Log Events:**
1. Add event to `04-recommended-log-events.md`
2. Update examples in `05-log-schema-example.json`
3. Implement in codebase

---

## 📞 Questions?

**For logging implementation questions:**
- See: `04-recommended-log-events.md`
- Reference: `05-log-schema-example.json`

**For tool selection questions:**
- See: `00-research-summary.md` (decision matrix)

**For technical deep-dives:**
- Context7: `01-context7-findings.md`
- Perplexity: `02-perplexity-findings.md`
- Community: `03-brave-search-findings.md`

---

**Research Status:** ✅ Complete
**Next Action:** Implement Pino logger in `/src/lib/logger.ts`
**Estimated Implementation Time:** 2-3 weeks (incremental rollout)
