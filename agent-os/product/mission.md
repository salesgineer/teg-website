# Product Mission

## Pitch
TEG (Transporta Ekspertu Grupa) Website is a multi-language automotive inspection services platform that helps car buyers in Latvia and across Europe make informed purchasing decisions by providing transparent, professional vehicle inspection services, remote diagnostics, and complete car sourcing solutions through a modern, secure, and high-performance web experience.

## Users

### Primary Customers
- **Latvian Car Buyers**: Local market seeking pre-purchase inspections, roadside assistance, and car sourcing services
- **International Buyers**: English-speaking customers purchasing vehicles in Europe requiring remote inspection services
- **Russian-Speaking Market**: Secondary diaspora market in Latvia and neighboring countries

### User Personas

**Cautious Car Buyer** (25-45 years)
- **Role:** Individual purchasing used vehicle
- **Context:** Shopping for car online/remotely, concerned about fraud and hidden defects
- **Pain Points:** Cannot physically inspect vehicle, distrust of dealers, fear of expensive post-purchase repairs, language barriers when buying internationally
- **Goals:** Receive independent professional assessment, avoid fraudulent sellers, make confident purchase decision, understand true vehicle condition

**Busy Professional** (30-55 years)
- **Role:** Working professional needing vehicle services
- **Context:** Limited time for car shopping or dealing with vehicle issues, values convenience
- **Pain Points:** Cannot travel to inspect cars, needs roadside assistance quickly, wants turnkey car purchase solution
- **Goals:** Delegate car search/inspection to experts, get mobile service at location, receive detailed reports without travel

**International Car Importer** (25-50 years)
- **Role:** Buyer sourcing vehicles from European market
- **Context:** Shopping across borders, needs local expertise and logistics
- **Pain Points:** Distance from vehicle location, unfamiliar market, documentation complexity, delivery logistics
- **Goals:** Reliable local inspection partner, complete sourcing and delivery service, documentation assistance

## The Problem

### Deprecated Technology Creating Security & Performance Risk
Current website runs on discontinued Frontity framework with no active maintenance or security updates. This creates critical vulnerabilities and performance limitations that threaten business credibility and user trust. Customers expect fast, secure, mobile-optimized experiences when booking €100-€350 services.

**Our Solution:** Complete ground-up redesign using modern Next.js 15 stack with enterprise-grade security, sub-2.5s load times, and mobile-first responsive design.

### Incomplete Multi-Language Experience Limiting Market Reach
English content is only 40% complete with placeholder text issues, Russian coverage limited to 2 pages. This prevents TEG from serving international market effectively despite offering all-Europe coverage.

**Our Solution:** Comprehensive internationalization (i18n) infrastructure using next-intl with complete, production-quality content across Latvian (primary), English (secondary), and Russian (tertiary) languages.

### Missing Modern Booking & Lead Capture System
Current site lacks integrated appointment scheduling and secure form handling, forcing manual coordination and losing potential customers to friction.

**Our Solution:** Integrated booking system with Zod validation, CSRF protection, rate limiting, and SendGrid email automation for seamless customer acquisition.

## Differentiators

### Independent Anti-Fraud Positioning
Unlike dealer-affiliated inspection services, TEG positions as "neatkarīgi" (independent experts) actively exposing dishonest sellers. This builds trust through transparency and advocacy for buyers.

This results in stronger customer loyalty and word-of-mouth referrals in market where fraud concerns are primary barrier to purchase.

### All-Europe Remote Inspection Coverage
Unlike local-only competitors, TEG offers remote professional inspections anywhere in Europe with detailed photo reports, eliminating travel requirements for buyers.

This results in expanded addressable market beyond Latvia and enables international customer acquisition through English-language site.

### Multi-Service Ecosystem
Unlike single-service competitors, TEG offers complete automotive lifecycle support: pre-purchase inspection, vehicle sourcing and delivery, and ongoing roadside mobile services.

This results in higher customer lifetime value and multiple revenue streams from single customer relationship.

## Key Features

### Core Features
- **Multi-Language Content System:** Complete Latvian/English/Russian content with locale-based routing (`/lv/`, `/en/`, `/ru/`) enabling market expansion and international customer acquisition
- **Service Presentation Pages:** Clear information architecture for three core services (Inspection, Car Search, Roadside) with transparent pricing, service details, and booking CTAs
- **Mobile-Responsive Design:** Optimized mobile experience essential for on-the-go car buyers researching during vehicle viewings
- **Performance Optimization:** Core Web Vitals targets (LCP <2.5s, FID <100ms, CLS <0.1) ensuring fast load times and professional user experience
- **SEO with Structured Data:** Schema.org JSON-LD markup for automotive services enabling rich search results and improved discoverability

### Engagement Features
- **Appointment Booking System:** Integrated scheduling for inspections and services with email confirmations reducing manual coordination overhead
- **Contact Forms with Validation:** Secure forms using Zod validation, CSRF protection, and rate limiting preventing spam while capturing quality leads
- **Phone & Social Integration:** Prominent display of +371 25 201 710, Instagram/TikTok @teg.auto, Facebook links enabling multi-channel customer contact
- **Detailed Service Reports:** Presentation of inspection methodology and sample reports building credibility and setting expectations

### Technical Features
- **Sanity CMS Integration:** Headless CMS enabling non-technical staff to update service information, pricing, and content across languages
- **Secure Form Handling:** OWASP-compliant security with rate limiting and validation protecting customer data and business reputation
- **Error Tracking & Monitoring:** Sentry integration enabling proactive issue detection and rapid resolution maintaining service quality
- **Analytics Integration:** Google Analytics 4 tracking user journeys, conversion funnels, and content performance for data-driven optimization
