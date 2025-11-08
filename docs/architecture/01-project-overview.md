# TEG Project Overview

## Project Identity

**Official Name:** TEG (Transporta Ekspertu Grupa)

**English Translation:** Transport Experts Group

**Business Type:** Automotive inspection and vehicle services company

**Market:** Latvia (primary), Europe-wide service coverage

**Website:** https://www.teg.lv

**Established:** Professional automotive services firm with established brand and customer base

## The Problem We're Solving

### Current Situation
- Existing website built on **Frontity framework** (React-based WordPress frontend)
- Frontity is **officially discontinued** (not actively maintained)
- No security updates available
- Performance limitations from legacy architecture
- Difficult to extend with new features
- Deployment and hosting challenges

### Risk Assessment
- **Security Risk:** HIGH - No patch support for vulnerabilities
- **Performance Risk:** MEDIUM - Slower page loads than modern alternatives
- **Maintenance Risk:** HIGH - Institutional knowledge loss, no framework support
- **Scalability Risk:** MEDIUM - Architecture not optimized for growth

### Why Full Redesign (Not Migration)
This is a **ground-up redesign**, not a simple migration:
- Codebase architecture is fundamentally different (React + WordPress vs Next.js)
- No business logic to preserve (marketing site, not complex app)
- Opportunity to implement modern best practices
- Clean slate for SEO optimization
- Better alignment with business goals

## Project Goals

### Primary Objectives

1. **Eliminate Security Risk**
   - Replace discontinued framework with actively maintained Next.js
   - Implement security best practices
   - Regular dependency updates possible

2. **Improve Performance**
   - Target Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
   - Better SEO ranking potential
   - Improved user experience

3. **Enable Growth**
   - Easy to add new features (appointment booking, admin panel, blog)
   - Scalable architecture
   - Multi-language support from ground up

4. **Professional Presentation**
   - Modern, fast, responsive website
   - Consistent branding across all languages
   - Trust and credibility signals

### Secondary Objectives

- Implement analytics and monitoring
- Improve multi-language support (currently English incomplete)
- Add customer engagement features (forms, booking)
- Establish foundation for future CMS integration

## Business Context

### The Company

**TEG** is an independent group of automotive professionals serving customers across Europe. Core values:

- **Independence:** Not affiliated with dealers or manufacturers
- **Expertise:** Deep automotive knowledge and professional standards
- **Anti-Fraud:** Helping customers avoid dishonest dealers
- **Transparency:** Clear pricing, detailed reports, no hidden fees
- **Accessibility:** Remote inspections, nationwide service

**Tagline (Latvian):** "sava aroda profesionāļu grupa, kam auto ir sirdslieta"
*(Professional group for whom cars are a passion)*

**Key Message:** Independent experts you can trust for honest, professional automotive assessment

### Three Core Services

#### 1. Pre-Purchase Car Inspection (from €100)
- Engine diagnostics and mechanical assessment
- VIN history verification
- Body and paint condition inspection
- Detailed photographic report
- Coverage: All of Europe
- Typical duration: 1-2 hours onsite

**Who it's for:** Anyone buying a used vehicle wanting professional assessment before purchase

#### 2. Car Search & Delivery (from €350)
- Vehicle sourcing and selection assistance
- Full pre-purchase inspection
- Secure delivery to customer location
- Documentation and paperwork assistance
- Handling of logistics and transport

**Who it's for:** Customers unable to travel or lacking expertise to find suitable vehicle

#### 3. Mobile Roadside Service (from €30)
- On-location vehicle diagnostics
- Battery testing and jump start service
- Error code diagnostics and fixes
- ECU programming services
- Door lock and window repair
- Assistance during breakdown situations

**Who it's for:** Vehicle owners needing immediate roadside help or diagnostic service

### Contact Information

- **Phone:** +371 25 201 710
- **Email:** info@teg.lv
- **Business Hours:** Mon-Sat, 9:00 AM - 8:00 PM (Latvia time)
- **Website:** https://www.teg.lv

### Social Media Presence

- **Instagram:** @teg.auto
- **TikTok:** @teg.auto
- **Facebook:** Transportaekspertugrupa

## Multi-Language Requirements

### Language Support Strategy

| Language | Priority | Status | Target Quality | Use Case |
|----------|----------|--------|-----------------|----------|
| **Latvian (lv)** | PRIMARY | Complete | 4.8/5 stars | Main website, native audience |
| **English (en)** | SECONDARY | ~40% complete | 2/5 stars (needs work) | International customers, SEO |
| **Russian (ru)** | TERTIARY | Limited (2 pages) | 3/5 stars | Regional audience, expansion |

### Critical Language Issues

**English Translation Problems:**
- Contact page has placeholder text "Lorem ipsum"
- Inconsistent terminology between service descriptions
- Missing translation for some CTAs
- **Action:** Complete and review English before launch

**Russian Language:**
- Only 2 pages translated (homepage, one service)
- Needs expansion for full coverage
- Lower priority but should have parity with English

### URL Structure

```
https://teg.lv/lv/          # Latvian (default)
https://teg.lv/en/          # English
https://teg.lv/ru/          # Russian
```

**Redirect Strategy:**
- Root `/` redirects to `/lv/` (Latvian default)
- Language switcher on all pages
- Respects browser language preference on first visit
- Cookie persistence for user language choice

## Project Timeline

### Duration

**Total Estimated Time:** 51 hours of development

**Realistic Calendar Duration:** 6-7 days of intensive work

**Work Schedule:** ~8 hours per day

### Phase Breakdown

| Phase | Hours | Duration | Focus |
|-------|-------|----------|-------|
| 1. Boilerplate Cleanup | 8h | 1 day | Setup foundation |
| 2. Environment & Config | 6h | 1 day | Configure services |
| 3. Database & Backend | 10h | 1.5 days | API infrastructure |
| 4. Forms Implementation | 12h | 1.5 days | User interactions |
| 5. SEO & Content | 10h | 1.5 days | Discovery optimization |
| 6. Testing & QA | 5h | 1 day | Quality assurance |
| **TOTAL** | **51h** | **6-7 days** | **MVP Ready** |

### Milestones

1. **Day 1 End:** Foundation ready, environment configured
2. **Day 2 End:** Database and APIs operational
3. **Day 3 End:** Core forms working across all languages
4. **Day 4 End:** SEO and content optimized
5. **Day 5 End:** Testing complete, bugs fixed
6. **Day 6-7:** Polish, final QA, deployment ready

## Stakeholders

### Key Decision Makers
- **Client Lead:** TEG business representative
- **Technical Lead:** Development team
- **Project Manager:** Timeline and deliverables oversight

### Stakeholders
- **End Users:** Potential customers using website (Latvian, English, Russian speakers)
- **Business:** TEG company leadership
- **Support Team:** Handling inquiries from forms

## Success Criteria

### Must Have (MVP Requirements)

✓ Website accessible from https://teg.lv
✓ All three services documented with accurate pricing
✓ Multi-language support working (Latvian, English, Russian)
✓ Contact form functional with email notifications
✓ Appointment booking functional with Google Calendar sync
✓ No broken links or 404 errors on main pages
✓ Mobile responsive design
✓ English translation complete (no placeholder text)
✓ SEO metadata for all pages
✓ Google Analytics or equivalent tracking

### Should Have (Quality Requirements)

✓ Core Web Vitals passing (LCP <2.5s, FID <100ms, CLS <0.1)
✓ 95+ Lighthouse score
✓ SSL certificate (HTTPS)
✓ Error tracking (Sentry) operational
✓ Rate limiting on forms (prevent spam)
✓ Bot protection active
✓ GDPR compliance (privacy policy, consent)
✓ All forms have proper validation
✓ Email templates multi-language support

### Nice to Have (Future Enhancement)

- Admin dashboard for appointment management
- Blog/news section with Sanity CMS
- Customer appointment history portal
- Live chat widget
- FAQ section with search
- Testimonials/case studies
- Social media feed integration

## Success Metrics

### Technical Metrics
- **Page Load Time:** <2.5s (90th percentile)
- **Mobile Friendliness:** 100/100
- **SEO Score:** 90+/100
- **Core Web Vitals:** All green
- **Uptime:** 99.9%+

### Business Metrics
- **Form Submission Rate:** Track contact and booking forms
- **Language Distribution:** Monitor usage by language
- **Bounce Rate:** Goal <40%
- **Conversion:** New leads generated
- **User Satisfaction:** Analytics based on session duration, return visits

### Operational Metrics
- **Error Rate:** <0.1% of requests
- **Response Time:** API <200ms, Page render <500ms
- **Security:** 0 vulnerabilities on deployment

## Deployment & Hosting

### Platform: Vercel

**Why Vercel?**
- Built by Next.js creators
- Optimized for Next.js deployment
- Edge Functions for API routes
- Automatic HTTPS and CDN
- Built-in monitoring and analytics
- One-click deployment from GitHub
- Free tier suitable for MVP

**Plan Options:**
- **Hobby Plan:** Free, sufficient for MVP
- **Pro Plan:** $20/month, additional capacity if needed

### Domain Management
- **Primary Domain:** teg.lv (maintain existing domain)
- **DNS:** Update to point to Vercel nameservers
- **SSL:** Automatic Let's Encrypt via Vercel

### CI/CD Pipeline
- **Source:** GitHub repository
- **Trigger:** Push to main branch
- **Tests:** Run before deployment
- **Deployment:** Automatic to Vercel production
- **Rollback:** Available if issues detected

## Risk Assessment & Mitigation

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Google Calendar API integration delays | Medium | Medium | Start API setup early, test thoroughly |
| Supabase connection issues | Low | High | Keep Supabase documentation handy |
| Multi-language bugs | Medium | Medium | Comprehensive testing in all 3 languages |
| Performance degradation | Low | High | Core Web Vitals monitoring from day 1 |

### Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Scope creep during development | High | High | Stick to MVP scope, defer features |
| Translation quality issues | Medium | Medium | Review English before launch |
| Customer confusion during migration | Low | Medium | 301 redirects from old site |

## Next Steps

1. **Approval:** Get stakeholder sign-off on this plan
2. **Environment Setup:** Create Supabase project, Vercel app, API keys
3. **Team Alignment:** Review architecture and tech stack decisions
4. **Development Kickoff:** Start Phase 1 (Boilerplate Cleanup)
5. **Daily Standups:** Brief sync on progress and blockers

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Status:** Planning phase complete, ready for implementation
