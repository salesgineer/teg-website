# Spec Requirements: TEG Site Architecture Documentation

## Initial Description

Create comprehensive architecture documentation for the TEG (Transporta Ekspertu Grupa) website redesign project, including visual diagrams for component hierarchy, data flow, and deployment architecture. This documentation will guide the ground-up redesign from the discontinued Frontity framework to a modern Next.js 15+ stack.

## Requirements Discussion

### First Round Questions

**Q1: English language completion - is this REQUIRED for MVP, NICE-TO-HAVE for later phases, or BLOCKING deployment?**
**Answer:** REQUIRED for MVP (blocking deployment)

**Q2: Architecture documentation - should we follow existing patterns in `/docs/architecture` folder, or create new structure?**
**Answer:** Follow architecture in `/docs/architecture` folder

**Q3: Performance baseline - should we establish metrics BEFORE migration, or AFTER initial deployment?**
**Answer:** Performance baseline AFTER deployment

**Q4: Rollback strategy - manual backup sufficient (Option C), version-controlled backups with automated rollback (Option A), or staged deployment with instant rollback capability (Option B)?**
**Answer:** Manual backup sufficient (Option C)

**Q5: Load testing - simulate expected traffic patterns before go-live, or rely on Vercel's auto-scaling and monitor post-deployment?**
**Answer:** Standard Vercel, no load testing needed

**Q6: Russian language - native speaker review REQUIRED before deployment, or launch with current limited coverage and improve iteratively?**
**Answer:** Native speaker review required, but prioritize English+Latvian first, then review

**Q7: Architecture diagrams - should we create proper diagrams (component hierarchy, data flow, deployment) or text-based documentation only?**
**Answer:** YES - create proper diagrams (component hierarchy, data flow, deployment)

**Q8: Backup strategy - automated Supabase + Sanity backups sufficient, or need custom backup scripts?**
**Answer:** Supabase + Sanity automated backups sufficient

### Second Round Questions

**Q1: Design modernization approach - OPTION A (faithful recreation with modern stack), OPTION B (subtle modernization), or OPTION C (full rebrand with Northern Lights theme)?**
**Answer:** OPTION C - Full rebrand with Northern Lights theme (shadcn)
- Theme: Northern Lights from tweakcn
- Installation command: `pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/northern-lights.json`
- Typography: Comfortaa (headings 48-64px semibold, tight spacing), Inter (body 16-18px)

**Q2: Mobile navigation - hamburger menu, bottom tab bar, or slide-out drawer?**
**Answer:** Hamburger menu

**Q3: Mobile photo galleries - single column, 2 columns, or swipeable carousel?**
**Answer:** 2 columns on mobile

**Q4: Mobile hero sections - reduce height for mobile, or preserve full-height sections?**
**Answer:** Full-height preserved

**Q5: Form fields - simple (name/email/phone/message), standard (+ vehicle details), or comprehensive (+ file uploads/service selectors)?**
**Answer:** Simple - Name, Email, Phone, Message only (no vehicle details, no file uploads, no service selectors)

**Q6: Social media integration - where to display Instagram feed?**
**Answer:** Homepage + Contact page
- Instagram: Active feed displays (server-fetched, not client-side widgets)
- Facebook/TikTok: Static links only

**Q7: Additional components needed - error pages, loading states, cookie consent banner, print stylesheets?**
**Answer:**
- Error pages (404, 500): Brand-aligned, no specific design requirements
- Loading states: Defer to post-MVP
- Cookie consent banner: REQUIRED (GDPR), brand-aligned
- Print stylesheets: Not required

### Existing Code to Reference

**Similar Features Identified:**
- Path: `/home/fivefingerdisco/Projects/TEG_001/docs/architecture/`
- Existing architecture documentation pattern to follow
- Documentation files: 01-project-overview.md, 02-tech-stack-decisions.md, 03-architecture-overview.md, 04-database-schema.md, 05-decision-rationale.md, 06-implementation-timeline.md, 07-environment-variables.md, README.md

### Follow-up Questions

None required - user provided comprehensive answers and visual assets.

## Visual Assets

### Files Provided:

**Location:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens/`

**Latvian (LV) - 5 files (Primary, complete):**
- `screencapture-teg-lv-2025-11-08-09_11_33.png`: Homepage - Full-featured landing page with hero section, service illustrations, trust signals, Instagram feed integration, contact form
- `screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png`: About Us page - Company mission, brand logo, text-heavy content layout
- `screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png`: Car Purchase service page - Extensive photo gallery grid showing inspection process and documentation
- `screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png`: Services page - Detailed service list, hero banner, pricing callout (30 EUR starting)
- `screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png`: Contact page - WhatsApp CTA, contact form, social media integration (Facebook, Instagram, TikTok), embedded social feeds, customer testimonials

**English (EN) - 2 files (Secondary, ~40% complete with issues):**
- `screencapture-teg-lv-home-1-2025-11-08-09_14_03.png`: Homepage - "CHECK BEFORE BUY!" hero, process flow illustration, contact form for vehicle search
- `screencapture-teg-lv-about-us-2025-11-08-09_14_26.png`: About Us page - Company mission in English, minimal navigation (Home, About us only)

**Russian (RU) - 2 files (Tertiary, limited coverage):**
- `screencapture-teg-lv-nachalo-2025-11-08-09_19_52.png`: Homepage - "СТРАНИЦА В РАЗРАБОТКЕ" (Page under development), car purchase form
- `screencapture-teg-lv-nasha-rabota-2025-11-08-09_20_02.png`: Our Work page - "как это выглядит" (what it looks like), photo gallery grid

### Visual Insights:

**Purpose:** Content extraction ONLY - design will be fully rebranded with Northern Lights theme

**Brand Identity (Current - For Content Reference):**
- **Primary Color:** Lime/chartreuse green (#A4C639 or similar) - used for navigation, CTAs, accents
- **Logo:** "TEG.LV" text with car icon, "TRANSPORTA EKSPERTU GRUPA" subtitle with decorative badge
- **Typography:** Comfortaa font for headings (confirmed by user: 48-64px, semibold, tight spacing), Inter for body text (16-18px)
- **Design Aesthetic:** Rounded, friendly, professional with automotive focus

**Layout Patterns:**

1. **Navigation Structure:**
   - Top bar: Language switcher (LAT/ENG/RUS), phone number, hours
   - Main nav: Horizontal tabs (Sākums/Home, Par mums/About us, Auto iegāde, Serviss, Kontakti)
   - Sticky/fixed positioning
   - Green background for active state
   - **Mobile:** Hamburger menu (confirmed)

2. **Hero Sections:**
   - Full-width dark overlay on automotive imagery
   - Large white heading text (Comfortaa)
   - Green CTA buttons
   - Centered content layout
   - **Mobile:** Full-height preserved (confirmed)

3. **Content Sections:**
   - Alternating white/light gray backgrounds
   - Icon-based feature grids (3-column, 6-item layouts common)
   - Illustrated process flows with hand-drawn style icons
   - Trust signals (reviews, social proof)

4. **Forms:**
   - **CONFIRMED SIMPLE STRUCTURE:** Name, Email, Phone, Message only
   - No vehicle details, no file uploads, no service selectors
   - Light gray input fields
   - Required field indicators (*)
   - Green submit buttons
   - WhatsApp integration CTA

5. **Social Media Integration:**
   - **Instagram feed:** Homepage + Contact page (server-fetched, not client-side widgets)
   - **TikTok:** Static links only
   - **Facebook:** Static links only
   - Social icons in footer

6. **Footer:**
   - Dark background (charcoal/black)
   - Contact form option
   - Copyright notice
   - Minimal links (Sīkdatnes/Cookies)
   - Social media icon (Facebook)

**Component Patterns Identified:**

1. **Service Cards:**
   - Icon + heading + bullet list
   - White background with subtle shadows
   - Consistent spacing and alignment

2. **Process Flow Illustrations:**
   - Hand-drawn/sketch style icons
   - 4-5 step horizontal flow
   - Icons above descriptive text
   - Arrows/connectors between steps

3. **Photo Galleries:**
   - Grid layout (4-6 columns desktop)
   - **Mobile:** 2 columns (confirmed)
   - Automotive inspection photos
   - Document screenshots
   - Diagnostic tool images

4. **Pricing Callouts:**
   - Bold colored text (green or yellow)
   - "SĀKOT NO" (Starting from) prefix
   - Large price display
   - EUR currency

5. **Trust Signals:**
   - Customer testimonials with Facebook branding
   - Social media follower counts
   - Real inspection photo examples

**User Flow Observations:**

1. **Primary CTAs:**
   - "Pieteikt pārbaudi" (Order inspection)
   - "Rakstiet mums Whatsapp" (Write us on WhatsApp)
   - "Nosūtīt" (Submit) - forms
   - "Dial an inspection" (English version)

2. **Contact Hierarchy:**
   - Phone number prominently displayed in header
   - WhatsApp emphasized as primary contact method
   - Email form as secondary option
   - Social media as tertiary engagement

3. **Content Depth:**
   - Latvian: Fully fleshed out across all pages
   - English: Homepage and About Us only, missing Services, Contact detail
   - Russian: Placeholder content, minimal implementation

**Fidelity Level:** High-fidelity production screenshots (existing live site)

**Design Issues Noted:**

1. **English Incompleteness:**
   - Only 2 pages vs 5 in Latvian
   - Missing: Services detail, Car Purchase page, full Contact page
   - Confirms user's statement about ~40% completion

2. **Russian Development Status:**
   - "Page under development" notice visible
   - Minimal page count (2 pages)
   - Confirms limited coverage

3. **Translation Quality Indicators:**
   - English uses direct language ("CHECK BEFORE BUY!")
   - Latvian more nuanced ("Pārbaudī pirms pērc!")
   - Content structure differs between languages (not just translations)

4. **Social Media Integration Depth:**
   - Instagram feed only visible on Latvian contact page
   - TikTok button present but no embedded content
   - Facebook reviews only on Latvian version

**Technical Observations:**

1. **URL Structure:**
   - Language in subdirectory: `/home`, `/par-mums`, `/kontakti` (LV)
   - English follows similar pattern: `/home`, `/about-us` (EN)
   - Russian: `/nachalo`, `/nasha-rabota` (RU)
   - Inconsistent: Should be `/lv/`, `/en/`, `/ru/` with next-intl

2. **Responsive Design:**
   - Desktop screenshots show full-width layouts
   - No mobile views provided (gap in visual analysis)

3. **Performance Concerns:**
   - Large photo galleries (many high-res images)
   - Embedded social feeds (external API calls)
   - No lazy loading visible in screenshots

## Requirements Summary

### Functional Requirements

**Architecture Documentation Must Include:**

1. **Component Hierarchy Diagrams:**
   - Visual representation of React component tree
   - Layout components (Header, Footer, Navigation with hamburger menu)
   - Page components (Homepage, Services, Contact, About, Car Purchase)
   - Feature components (Hero with full-height mobile, ServiceCard, ProcessFlow, PhotoGallery with 2-col mobile, ContactForm simple, SocialFeed)
   - UI components (Button, Input, Card, IconGrid) - Northern Lights theme
   - Reusable patterns from visual analysis
   - Error page components (404, 500 brand-aligned)
   - Cookie consent banner component (GDPR required)

2. **Data Flow Diagrams:**
   - Content flow: Sanity CMS → Next.js → Client
   - Form submissions: Client → API Routes → Supabase → SendGrid (simple fields only)
   - i18n flow: next-intl → locale detection → content rendering
   - Media flow: Uploaded images → Sanity → CDN → optimized delivery
   - Social media integration: Instagram server-fetch → Homepage/Contact pages

3. **Deployment Architecture:**
   - Next.js app on Vercel (Edge Runtime where applicable)
   - Sanity CMS (headless content management)
   - Supabase (PostgreSQL database, real-time subscriptions)
   - SendGrid (transactional email)
   - CDN for static assets and images
   - Sentry for error monitoring
   - Google Analytics 4 for tracking

4. **Multi-Language Architecture:**
   - next-intl routing strategy: `/[locale]/` pattern
   - Content structure in Sanity for 3 languages (lv, en, ru)
   - Translation completeness tracking
   - Language switcher component pattern
   - RTL support considerations (not needed for lv/en/ru)

5. **Page Templates Required:**
   - Homepage template (hero, services overview, trust signals, CTA, Instagram feed)
   - About Us template (mission, brand story, team if applicable)
   - Services listing template (service cards, pricing callouts)
   - Service detail template (Car Purchase page with 2-col mobile photo gallery)
   - Contact template (simple form, WhatsApp CTA, Instagram feed, testimonials)
   - Error templates (404, 500 brand-aligned)

6. **Component Specifications:**
   - Hero component (dark overlay, large heading, CTA button, full-height mobile)
   - ServiceCard (icon, heading, bullet list, optional pricing)
   - ProcessFlow (illustrated steps with connectors)
   - PhotoGallery (grid layout 4-6 col desktop, 2 col mobile, lightbox functionality)
   - ContactForm (simple: name/email/phone/message, validation with Zod, CSRF protection, rate limiting)
   - SocialFeed (Instagram server-fetch for Homepage + Contact)
   - TestimonialCard (Facebook reviews integration)
   - LanguageSwitcher (LAT/ENG/RUS)
   - WhatsAppButton (prominent CTA)
   - Navigation (hamburger menu mobile)
   - CookieConsent (GDPR required, brand-aligned)
   - ErrorPage (404, 500 brand-aligned)

7. **Design System Documentation:**
   - **Theme:** Northern Lights (shadcn) - `pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/northern-lights.json`
   - **Typography:** Comfortaa headings (48-64px semibold, tight spacing), Inter body (16-18px)
   - **Spacing system:** Grid layouts, section padding
   - **Component variants:** Button styles, card layouts (Northern Lights theme)
   - **Icon system:** Hand-drawn style illustrations, service icons
   - **Mobile patterns:** Hamburger menu, 2-col galleries, full-height heroes

### Reusability Opportunities

**From Existing Architecture Docs:**
- Documentation structure and format from `/docs/architecture/` folder
- Markdown template patterns for technical documentation
- Decision rationale framework
- Implementation timeline structure

**From Visual Analysis:**
- Hero section pattern (reusable across Service pages, full-height mobile)
- Service card grid (3-column, 6-item layout)
- Process flow illustration pattern (4-5 step horizontal)
- Contact form structure (SIMPLE: name/email/phone/message)
- Social media integration pattern (Instagram server-fetch)
- Photo gallery grid (4-6 column desktop, 2 column mobile)
- Navigation structure (hamburger mobile)
- Footer layout (minimal, dark background)

**Component Library to Build (Northern Lights Theme):**
- Button (Northern Lights theme variants)
- Input/Textarea (validation states)
- Card (service cards, testimonial cards)
- IconGrid (feature showcases)
- ImageGallery (lightbox-enabled, 2-col mobile)
- SocialEmbed (Instagram server-fetch)
- LanguageSwitcher (dropdown or inline tabs)
- Navigation (hamburger mobile)
- CookieConsent (GDPR)
- ErrorPage (404, 500)

### Scope Boundaries

**In Scope:**

1. **Architecture Documentation:**
   - Component hierarchy diagrams (visual, not just text)
   - Data flow diagrams showing all integrations
   - Deployment architecture with all services mapped
   - Multi-language routing and content strategy
   - Page templates and component specifications
   - Design system documentation (Northern Lights theme, typography, spacing)
   - Database schema reference from existing docs
   - Environment variables documentation from existing docs

2. **Language Implementation Priority:**
   - Latvian (lv): Complete, production-ready (4.8/5 quality)
   - English (en): REQUIRED for MVP - complete missing pages and fix placeholders (upgrade from 2/5 to 4+/5) - BLOCKING DEPLOYMENT
   - Russian (ru): Basic functionality, native speaker review AFTER English completion (maintain 3/5, improve in phase 2)

3. **MVP Features (Blocking Deployment):**
   - All 5 pages in Latvian and English (Homepage, About, Services, Car Purchase, Contact)
   - Working contact forms with validation (SIMPLE: name/email/phone/message)
   - WhatsApp integration
   - Language switcher functional
   - Social media: Instagram server-fetch on Homepage + Contact, Facebook/TikTok static links
   - Photo galleries for Car Purchase showcase (2-col mobile)
   - Responsive design (desktop + mobile with hamburger nav, full-height heroes)
   - SEO with structured data (JSON-LD for automotive services)
   - Error pages (404, 500 brand-aligned)
   - Cookie consent banner (GDPR required)
   - Northern Lights theme implementation

4. **Performance Optimization:**
   - Next.js Image component for all images
   - Lazy loading for photo galleries
   - Incremental Static Regeneration (ISR) for content pages
   - Edge Runtime where applicable
   - Core Web Vitals targets: LCP <2.5s, FID <100ms, CLS <0.1
   - Baseline metrics AFTER initial deployment

5. **Deployment Strategy:**
   - Vercel deployment with auto-scaling
   - Manual backup before deployment (Option C)
   - No load testing pre-deployment (rely on Vercel infrastructure)
   - Standard monitoring with Sentry + GA4

**Out of Scope:**

1. **Pre-Deployment:**
   - Load testing and traffic simulation
   - Performance baseline metrics (done AFTER deployment)
   - Automated rollback mechanisms
   - Custom backup scripts (using Supabase/Sanity automated backups)

2. **Phase 2 Features:**
   - Russian language completion (expand from 2 pages to 5)
   - Native speaker review for Russian content
   - Blog/content strategy for SEO
   - Customer dashboard for appointment management
   - Advanced social media integrations beyond Instagram server-fetch
   - Loading states (deferred to post-MVP)
   - Print stylesheets (not required)

3. **Phase 3 Features:**
   - Live chat functionality
   - Enhanced FAQ section
   - Detailed case studies/testimonials management
   - Multi-currency support (currently EUR only)

4. **Not Required:**
   - Modification of existing Frontity codebase (ground-up redesign)
   - Data migration from old site (new content in Sanity)
   - RTL language support (not needed for lv/en/ru)
   - Client-side social media widgets (using server-fetch for Instagram)
   - File uploads in contact forms
   - Vehicle details in contact forms
   - Service selectors in contact forms

### Technical Considerations

**Integration Points:**

1. **Sanity CMS:**
   - Content structure for 3 languages
   - Document schemas for pages, services, testimonials
   - Image asset management with CDN
   - Preview functionality for editors
   - Webhooks for ISR invalidation

2. **Supabase:**
   - Contact form submissions storage (simple fields: name/email/phone/message)
   - Appointment/booking data (if applicable)
   - User preferences (language selection persistence)
   - Real-time subscriptions for admin dashboard (future)
   - Row-level security policies

3. **SendGrid:**
   - Transactional emails for contact form submissions
   - Notification emails to TEG team
   - Email templates with branding
   - Rate limiting integration

4. **Social Media APIs:**
   - Instagram: Server-fetch for Homepage + Contact pages (NOT client-side widgets)
   - TikTok: Static links only
   - Facebook: Static links only
   - Client-side loading avoided for performance

5. **Vercel:**
   - Environment variables for API keys
   - Edge Functions for locale detection/routing
   - Analytics integration
   - Preview deployments for testing

**Existing System Constraints:**

1. **From `/docs/architecture/`:**
   - Follow established tech stack decisions
   - Align with database schema already defined
   - Use environment variable naming conventions
   - Match implementation timeline expectations

2. **From Visual Analysis:**
   - Maintain brand identity (will be rebranded with Northern Lights theme)
   - Preserve UX patterns users are familiar with
   - Keep WhatsApp as primary contact method
   - Social media integration prominent (Instagram server-fetch)

3. **From TEG Business Requirements:**
   - Phone: +371 25 201 710 (must be clickable on mobile)
   - Hours: Mon-Sat, 9:00 AM - 8:00 PM
   - Pricing transparency (display "from €X" clearly)
   - Independence and anti-fraud messaging prominent

**Technology Preferences:**

1. **Frontend:**
   - Next.js 15.5.4+ with App Router (confirmed)
   - React 19 (confirmed)
   - TypeScript 5.9+ strict mode (confirmed)
   - TailwindCSS 3.4+ (confirmed)
   - shadcn/ui with Northern Lights theme (confirmed)
   - next-intl for i18n (confirmed)
   - react-hook-form + Zod for forms (confirmed)
   - Framer Motion for animations (optional, deferred to post-MVP)

2. **Backend/Services:**
   - Sanity CMS (confirmed)
   - Supabase (confirmed)
   - SendGrid (confirmed)

3. **Monitoring:**
   - Sentry (confirmed)
   - Google Analytics 4 (confirmed)

4. **Deployment:**
   - Vercel (confirmed)

**Similar Code Patterns to Reference:**

1. **Documentation Format:**
   - Follow markdown structure from `/docs/architecture/README.md`
   - Use numbered file naming (01-, 02-, 03-...)
   - Include decision rationale sections
   - Cross-reference related docs

2. **Architecture Diagrams:**
   - Use Mermaid.js or similar for text-based diagrams in markdown
   - Export visual diagrams as PNG/SVG for embedding
   - Include both high-level and detailed views
   - Component hierarchy: tree structure
   - Data flow: sequence diagrams
   - Deployment: architecture diagrams

## Typography Specifications

**Provided by User:**

- **Headings:** Comfortaa font, 48-64px, semibold weight, tight letter spacing
- **Subheadings:** 24-28px (assumed Comfortaa based on visual analysis)
- **Body text:** Inter font, 16-18px
- **Design aesthetic:** Rounded fonts (friendly, approachable feel)

**Additional Typography Details from Visual Analysis:**

- **Hero Headlines:** White text on dark overlay, all caps or sentence case
- **Section Headings:** Black text on white/light backgrounds
- **CTA Buttons:** White text on green background (Northern Lights theme), likely medium weight
- **Navigation:** Medium weight, uppercase for language switcher
- **Form Labels:** Regular weight, smaller than body text
- **Pricing:** Bold/semibold, larger size (24-32px), green or yellow color

## Design System

**Theme:** Northern Lights (shadcn)
- **Installation:** `pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/northern-lights.json`
- **Typography:** Comfortaa (headings 48-64px semibold, tight spacing), Inter (body 16-18px)
- **Approach:** FULL REBRAND (Option C selected)

**Mobile Responsive:**
- **Navigation:** Hamburger menu
- **Photo galleries:** 2 columns
- **Hero sections:** Full-height preserved

**Form Fields:**
- **Structure:** SIMPLE - Name, Email, Phone, Message only
- **NOT INCLUDED:** Vehicle details, file uploads, service selectors

**Social Media Integration:**
- **Instagram:** Active feed displays on Homepage + Contact page (server-fetched, NOT client-side widgets)
- **Facebook:** Static links only
- **TikTok:** Static links only

**Additional Components:**
- **Error pages (404, 500):** Brand-aligned, no specific design requirements
- **Loading states:** Defer to post-MVP
- **Cookie consent banner:** REQUIRED (GDPR), brand-aligned
- **Print stylesheets:** Not required

## Content Completeness Status

**Latvian (lv) - Quality: 4.8/5:**
- Homepage: Complete ✓
- About Us: Complete ✓
- Services: Complete ✓
- Car Purchase: Complete ✓
- Contact: Complete ✓

**English (en) - Quality: 2/5 → Target: 4+/5 (BLOCKING DEPLOYMENT):**
- Homepage: Partial (needs content expansion) ⚠️
- About Us: Exists but minimal ⚠️
- Services: MISSING (needs creation) ✗
- Car Purchase: MISSING (needs creation) ✗
- Contact: CRITICAL - Has placeholder text issues ✗
- **REQUIREMENT:** 100% complete for MVP - BLOCKS deployment until all 5 pages at 4+/5 quality

**Russian (ru) - Quality: 3/5 → Target: Maintain, improve in Phase 2:**
- Homepage: Under development placeholder ⚠️
- "Our Work" page: Basic photo gallery ⚠️
- Other pages: Not implemented ✗
- **APPROACH:** Native speaker review required, but prioritize English+Latvian first, then review Russian

**Content Migration Notes:**
- Extract content from screenshots where possible
- Reference `/obsidian_notes/Projects/TEG/research/page-copy/` folders for detailed content
- English contact page needs immediate attention (placeholder text issue)
- Russian native speaker review scheduled AFTER English completion
- Visual assets located at: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens/`

## Final Confirmed Requirements

### Design Decisions (Finalized)

1. **Design Modernization: FULL REBRAND (Option C)**
   - Brand theme: Northern Lights (shadcn)
   - Installation: `pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/northern-lights.json`
   - Typography: Comfortaa (headings 48-64px semibold, tight spacing), Inter (body 16-18px)

2. **Mobile Responsive:**
   - Navigation: Hamburger menu
   - Photo galleries: 2 columns on mobile
   - Hero sections: Full-height preserved

3. **Form Fields (Simple):**
   - Name, Email, Phone, Message only
   - No vehicle details, no file uploads, no service selectors

4. **Social Media Integration:**
   - Display on: Homepage + Contact page
   - Active Instagram feed displays (server-fetched, not client-side widgets)
   - Facebook/TikTok: Static links

5. **Additional Components:**
   - Error pages (404, 500): Brand-aligned, no specific design
   - Loading states: Defer to post-MVP
   - Cookie consent banner: Required (GDPR), brand-aligned
   - Print stylesheets: Not required

### Confirmed Requirements From Earlier

- English translation: 100% complete for MVP (blocking deployment)
- Follow `/docs/architecture` folder guidance
- Performance baseline: After deployment
- Rollback: Manual backup sufficient
- Load testing: Standard Vercel, none needed
- Russian: Native speaker review, but English+Latvian first
- Architecture diagrams: YES - create proper diagrams
- Backup: Supabase + Sanity automated sufficient

### Visual Assets

- **Location:** `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens`
- **Count:** 9 screenshots from existing site (3 languages: 5 LV, 2 EN, 2 RU)
- **Purpose:** Content extraction only, design to be fully rebranded with Northern Lights theme

## Next Steps

1. **Spec Writer** to create comprehensive architecture documentation at `/docs/architecture/` following existing patterns
2. Include all visual diagrams (component hierarchy, data flow, deployment)
3. Document Northern Lights theme implementation details
4. Detail mobile responsive patterns (hamburger nav, 2-col galleries, full-height heroes)
5. Specify simple contact form structure (4 fields only)
6. Document Instagram server-fetch implementation for Homepage + Contact
7. Include error page and cookie consent banner specifications
8. Reference visual assets for content extraction
9. Align with existing architecture documentation structure
10. Ensure English language completion is marked as blocking requirement
