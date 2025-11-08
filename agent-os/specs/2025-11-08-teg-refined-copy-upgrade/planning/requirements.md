# Spec Requirements: TEG Refined Copy Upgrade

## Initial Description

This specification covers a comprehensive redesign of ALL pages in the TEG website. The focus is on extracting exact copy from the original teg.lv website while redesigning components with modern, professional styling using the existing brand design system. Copy must remain identical to the original, while component types (hero, service cards, testimonials, etc.) should be reimagined with better design patterns using shadcn/ui components.

## Requirements Discussion

### First Round Questions

**Q1: Which pages need updating?**
**Answer:** ALL pages need updating (Homepage, Services detail pages, About, Contact, etc.). Priority doesn't matter - develop comprehensive plan for all pages.

**Q2: Should we analyze the previous spec for existing components?**
**Answer:** Yes, analyze previous spec (2025-11-07-nextjs-project-setup) to document:
- Already-implemented components
- Current color palette and typography system
- Existing design patterns to maintain/extend

**Q3: What's the copy and component strategy?**
**Answer:**
- Extract ALL copy from original teg.lv (copy must stay EXACTLY the same)
- Extract general component concepts/types from original
- DO NOT copy component design itself (outdated)
- Redesign same component types but better with our brand design
- All copy from original page must be on new page

**Q4: What sections should the homepage include?**
**Answer:**
- Hero (first)
- Price preview (second - critical placement)
- Trust/credentials section (add components as needed)
- Services overview
- CTA sections
- Testimonials: Skip for post-MVP (limited testimonials available)

**Q5: Are specific shadcn components mandated?**
**Answer:**
- No specific components mandated
- Follow best practices
- Use sequential-thinking MCP to determine what fits the design
- Customize with brand colors/typography

**Q6: What's the interactivity approach?**
**Answer:**
- Minimalistic and smooth
- Broadcast professionalism
- Modern and up-to-date feel
- Subtle, refined interactions (not flashy)

**Q7: How should we maintain brand consistency?**
**Answer:**
- Use existing color schema, typography from previous spec
- Can slightly improvise to make prettier
- ONLY use shadcn/ui component library
- Add appropriate professional elements from shadcn
- Everything must be on-brand

**Q8: What's the translation approach?**
**Answer:**
- Phase 1: Refine Latvian copy (primary focus)
- Phase 2: Translate to English
- Phase 3: Translate to Russian

**Q9: What tone and messaging should be maintained?**
**Answer:**
- Independence, anti-fraud, expertise
- Consistent across all pages
- Primary focus: Inspection service
- Secondary: Roadside service (downsell)

**Q10: Is there frontend access for additional info?**
**Answer:**
- Localhost dev on port 3000
- Can inspect for additional info/documentation
- Reference previous implementation in repo

### Existing Code to Reference

**Project Structure:**
- Path: `/home/fivefingerdisco/Projects/TEG_001/`
- Previous spec: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/`

**Implemented Components (Reusable):**
- `/src/components/hero/Hero.tsx` - Hero component with CTA buttons
- `/src/components/services/ServiceCard.tsx` - Service display cards
- `/src/components/navigation/Header.tsx` - Site header with navigation
- `/src/components/navigation/Footer.tsx` - Site footer with contact/social
- `/src/components/navigation/MobileNav.tsx` - Mobile navigation
- `/src/components/forms/ContactForm.tsx` - Contact form with validation
- `/src/components/forms/AppointmentForm.tsx` - Booking form
- `/src/components/forms/ServiceRequestForm.tsx` - Service request form
- `/src/components/LocaleSwitcher.tsx` - Language switcher
- `/src/components/ThemeToggle.tsx` - Dark/light mode toggle
- `/src/components/analytics/PostHogProvider.tsx` - Analytics integration
- `/src/components/providers/ThemeProvider.tsx` - Theme provider

**shadcn/ui Components Available:**
- alert-dialog.tsx
- alert.tsx
- badge.tsx
- button.tsx
- card.tsx
- dialog.tsx
- dropdown-menu.tsx
- form.tsx
- input.tsx
- label.tsx
- navigation-menu.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sonner.tsx (toast notifications)
- textarea.tsx

**Backend Patterns:**
- API routes: `/src/app/api/` (contact, bookings, webhooks)
- Form validation: Zod schemas in `/src/lib/validations/`
- Supabase integration: `/src/lib/supabase/`
- Email templates: `/src/lib/email/`

## Visual Assets

### Files Provided:

**Latvian Pages (Complete):**
- `screencapture-teg-lv-2025-11-08-09_11_33.png` - Latvian Homepage (FULL PAGE)
- `screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png` - Roadside Service Page
- `screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png` - About Page
- `screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png` - Contact Page
- `screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png` - Car Purchase Service Page

**English Pages (Incomplete - 40% coverage):**
- Available in `/TEMP -- TEG Screens/EN/`

**Russian Pages (Limited - 2 pages only):**
- Available in `/TEMP -- TEG Screens/RU/`

### COMPLETE HOMEPAGE SECTION BREAKDOWN (From Top to Bottom)

After thorough visual analysis of the Latvian homepage screenshot, here are ALL sections identified:

#### 1. **HEADER/NAVIGATION**
- **Layout:** Full-width lime green navigation bar
- **Elements:**
  - TEG.LV logo (left) with car icon
  - Navigation links: "Sākums" (Home), "Pakalpojumi" (Services), "Auto iegāde" (Car Purchase), "Par mums" (About), "Kontakti" (Contact)
  - Language switcher (top right): LAT, ENG, RUS
  - Phone number: "Pieejami 24/7 TEPT" (Available 24/7 TEPT)
- **Visual Style:** Bright lime green (#a4d65e approximate), bold typography, clean horizontal layout
- **Status:** Already implemented (Header.tsx exists)

#### 2. **HERO SECTION**
- **Copy:**
  - Headline: "PĀRBAUDĪT PIRMS PĒRC!" (Check before buying!)
  - Subheadline: "Nepērciet metālu automašīnu, mēs izpēlēs sliktiņam vai vislabāk uzķeršam visus krāpniekus, lai tu saglābā"
  - CTA Button: "Pasūtīt pārbaudi" (Order inspection)
- **Visual Details:**
  - Background: Dark photo of mechanic inspecting car wheel well
  - Text color: White, bold, uppercase headline
  - Overlay: Dark gradient overlay on image
  - Button: Lime green CTA button, prominent placement
  - Layout: Center-aligned text, full viewport height
- **Component Type:** Hero with background image + CTA

#### 3. **VALUE PROPOSITION ICON GRID**
- **Headline:** "Pārbaudīt auto vienkārši, patiesīgi savs laiks." (Check car simply, truthfully your time.)
- **Subheadline:** "Mēs piedāvājam šībrīža rīkus auto ārstniecību pārbaudi ar detalizētu fotoatskati un Eiropas teritoriju"
- **Layout:** 4-column grid of illustrated icons with text explanations
- **Four Icons/Sections:**
  1. **Icon:** Person with magnifying glass
     - **Text:** "Jūs atbraucat pie mums ar auto, kam interesējaties, un mēs visu lēsim pārbaudat"
  2. **Icon:** Car on lift with tools
     - **Text:** "Auto uzņemam uz lifta un ar profesionālas ierīces detalizēti pārbaudām, dokumentējam atradnes"
  3. **Icon:** Document with checkmarks and magnifying glass
     - **Text:** "Sagatavosim pilnīgu auto dokumentāciju ar ieteikumiem un foto pierādījumiem"
  4. **Icon:** Person with thumbs up/red X symbols
     - **Text:** "Pēc izvērtēšanas padomājam vai konkrēto auto vērts iegādāties"
- **Visual Style:** Simple line illustrations in dark color, clean white background, even spacing
- **Component Type:** Features grid with icon + text

#### 4. **THREE SERVICE CARDS SECTION**
- **Layout:** 3-column grid with photo cards
- **Card 1: Pre-Purchase Inspection**
  - **Title:** "Viens visspēcīgākais un ātākāis pēcpārks āres nodāļana"
  - **Image:** Photos of inspection process (lift, tools, diagnostics)
  - **Description:** Detailed text about inspection service
  - **CTA:** "Uzzināt vairāk" (Learn more) - lime green button
- **Card 2: Auto Purchase Assistance**
  - **Title:** "Uzņemsim auto iegādāties fotografias un virzīsim tīģiem"
  - **Image:** Photos showing car purchasing process
  - **Description:** Service description text
  - **CTA:** "Uzzināt vairāk" (Learn more) - lime green button
- **Card 3: Europe-Wide Inspection**
  - **Title:** "Brāksiem visa Eiropa palīdzības pilsētas klases ins Vīzām adrīttietums"
  - **Image:** Map or European coverage visual
  - **Description:** Service coverage details
  - **CTA:** "Uzzināt vairāk" (Learn more) - lime green button
- **Visual Style:** Photo cards with white backgrounds, consistent spacing, shadow effects
- **Component Type:** Service card grid

#### 5. **INSPECTION CATEGORIES SECTION - "KO MĒS PĀRBAUDĪSIM?"**
- **Headline:** "KO MĒS PĀRBAUDĪSIM?" (What we will check?)
- **Layout:** 6-box grid (2 rows × 3 columns)
- **Six Categories with Icons:**
  1. **Dzinējs** (Engine)
     - Icon: Engine symbol
     - Bullet list of inspection points
  2. **Šasijas numurs** (Chassis number)
     - Icon: Document/VIN symbol
     - Bullet list of checks
  3. **Virsbūve un salons** (Body and interior)
     - Icon: Car body symbol
     - Bullet list of items
  4. **Tehniskais stāvoklis** (Technical condition)
     - Icon: Wrench/tools
     - Bullet list
  5. **Balsošana** (Braking)
     - Icon: Brake disc
     - Bullet list
  6. **Elektrospēcības** (Electrical)
     - Icon: Battery/electrical symbol
     - Bullet list
- **Visual Style:** White background boxes with icons, organized bullet lists, equal sizing
- **CTA Button Below:** "Pasūtīt pārbaudi" (Order inspection) - lime green, centered
- **Component Type:** Categorized checklist grid

#### 6. **ANTI-FRAUD SECTION - "Negodīgo auto pārdevēju rīki"**
- **Headline:** "Negodīgo auto pārdevēju rīki." (Dishonest car sellers' tools)
- **Layout:** Grid of 6 items (3 rows × 2 columns)
- **Six Fraud Tactics with Icons/Images:**
  1. **Icon:** Odometer with arrow
     - **Title:** "Skaitītāja atbloķēšana"
     - **Description:** Text about odometer fraud
  2. **Icon:** Paint/spray can
     - **Title:** "Bāzes krāsa atlikumiem"
     - **Description:** Paint fraud explanation
  3. **Icon:** Warning symbol
     - **Title:** "Izvairīšana svešajiem attēliem"
     - **Description:** Hidden damage tactics
  4. **Icon:** Checkered flag/racing
     - **Title:** "Vairākas ārstēšanas vadību"
     - **Description:** Multiple ownership fraud
  5. **Icon:** Stars/rating
     - **Title:** Text about false advertising
     - **Description:** Marketing deception
  6. **Icon:** Contract/document
     - **Title:** "Piedziņš vairs ar nepareizību"
     - **Description:** Document fraud
- **Visual Style:** Alternating white/light gray backgrounds, icons + text blocks, educational tone
- **Component Type:** Educational content grid

#### 7. **DETAILED SERVICE SECTIONS (Three Service Breakdowns)**

**Section 7A: "Pakalpojumu izvēlosimsi" (Choose our services)**
- **Layout:** Image left, text right (two-column)
- **Image:** Photo of mechanic working on car engine
- **Text Content:**
  - Headline about inspection service value
  - Multiple paragraphs of detailed description
  - Benefits list
- **CTA Button:** "Pasūtīt pārbaudi" (Order inspection) - lime green
- **Background:** White

**Section 7B: "Auto meklēšana, pārbauāle, piegāde" (Car search, inspection, delivery)**
- **Layout:** Text left, image right (two-column, reversed)
- **Image:** Photo of car inspection/delivery
- **Text Content:**
  - Service description paragraphs
  - Process explanation
  - Coverage details
- **CTA Button:** "Uzzināt vairāk" (Learn more) - lime green
- **Background:** Light gray/off-white

**Section 7C: "Izsrakušana autoserviss pielietojies uz ceļa" (Mobile auto service arrives on the road)**
- **Layout:** Image left, text right (two-column)
- **Image:** Mobile service photo
- **Text Content:**
  - Bullet list of services (extensive list visible)
  - Emergency service details
  - Availability information
- **CTA Button:** "Uzzināt vairāk" (Learn more) - lime green
- **Background:** White

#### 8. **INSTAGRAM FEED INTEGRATION SECTION**
- **Layout:** Three-column grid showing Instagram posts
- **Each Column:**
  - Instagram icon/logo at top
  - "teg.lv/notrukti/username" link text below
  - White card container for each feed
- **Visual Style:** Clean white cards, Instagram branding, equal spacing
- **Component Type:** Social media feed embed/preview

#### 9. **FOOTER WITH CONTACT FORM**
- **Background:** Dark charcoal/black background
- **Layout:** Two-column (form left, illustration right)
- **Left Column - Contact Form:**
  - **Headline:** "Sazin atsaites" (Get in touch)
  - **Form Fields:**
    - E-pasts (Email) - text input
    - Vārds (Name) - text input
    - Jautājums vai vēlos (Question or desire) - textarea
  - **Submit Button:** "Nosūtīt" (Send) - lime green
- **Right Column:**
  - Illustration: Character with lime green circular element (brand mascot/illustration)
- **Bottom Section:**
  - **Contact Info:**
    - "Iekārts atsaites pie +371 23520710 - teg.lv"
    - "Mark esam SIA CertAll Testi"
    - "Priecājaties sērtas ar tiešiem testi."
- **Visual Style:** Dark background with white text, lime green accents, professional footer layout
- **Component Type:** Contact form + footer info

### CRITICAL CORRECTION: SERVICE PAGE STRUCTURE

**INCORRECT STATEMENT IN PREVIOUS REQUIREMENTS:**
The requirements incorrectly stated "3 service pages" or "Three service cards overview".

**CORRECTED STRUCTURE:**
There is **ONE Services Page** with **THREE detailed service sections**, not three separate pages.

**Correct Service Structure:**
1. **Single "Services" Navigation Item** leads to ONE page
2. **On that page, there are 3 detailed sections covering:**
   - Pre-Purchase Inspection Service (primary service)
   - Car Search & Delivery Service
   - Mobile Roadside Service

**Evidence from Screenshots:**
- Navigation shows: "Pakalpojumi" (single Services link)
- The Roadside Service screenshot shows the URL: `teg.lv/pakalpojumi` (NOT a separate service page, but likely the services overview or a specific service detail)
- Homepage shows three service cards that link to detailed sections on the same or related pages

### Visual Insights:

**Design Patterns Identified:**
1. **Hero Section:** Full-width background image with dark overlay, centered white text, prominent CTA button
2. **Icon Grid:** Four-column grid with illustrated icons and text explanations
3. **Service Cards:** Three-column layout with service photos, titles, descriptions, and CTAs
4. **Inspection Categories Grid:** 6-box grid (2×3) with icons and bullet lists
5. **Anti-Fraud Educational Grid:** 6-item grid with icons and descriptive text
6. **Alternating Image-Text Sections:** Two-column layouts alternating image/text positions
7. **Social Media Integration:** Three-column Instagram feed preview
8. **Dark Footer with Form:** Two-column layout, dark background, contact form + illustration

**Brand Color Scheme (from original site):**
- Primary: Lime/chartreuse green (`#a4d65e` approximate) - used for CTAs, navigation, brand elements
- Text: Dark gray/black for primary text, white for hero/footer text
- Backgrounds: White primary, light gray for alternating sections, dark charcoal for footer
- Accents: Lime green highlights throughout

**Typography Observations:**
- Bold, uppercase headlines for hero sections
- Clean sans-serif font family (appears to be modern sans-serif)
- Clear hierarchy with different font weights
- Adequate spacing and readability
- Mix of ALL CAPS (headlines) and sentence case (body)

**Layout Patterns:**
- Full-width hero sections
- Contained content areas (max-width containers)
- Three-column grid for services and Instagram
- Two-column layouts for detailed service sections (image + text, alternating)
- Six-item grids (2×3) for inspection categories and anti-fraud
- Four-column icon grid for value propositions
- Mobile-responsive stack patterns (implied)

**Component Density:**
- Hero: Spacious, minimal text
- Icon grid: Moderate density, balanced
- Service cards: Medium density, photo-heavy
- Inspection categories: High density, list-heavy
- Service detail sections: Lower density, breathable
- Footer: Compact but organized

**Interactive Elements Identified:**
- CTA buttons: "Pasūtīt pārbaudi" (Order inspection) - appears 3+ times
- "Uzzināt vairāk" (Learn more) buttons on service cards
- Contact form with validation
- Social media links (Instagram feeds)
- Navigation menu items
- Language switcher (LAT/ENG/RUS)

**Fidelity Level:** High-fidelity screenshots from live production site (original teg.lv)

## Existing Design System Implementation

### Color Palette (from /src/styles/global.css)

**Light Mode:**
- Primary: `oklch(0.8348 0.1302 160.908)` - Green/teal primary color
- Primary Foreground: `oklch(0.2626 0.0147 166.4589)` - Dark text on primary
- Background: `oklch(0.9911 0 0)` - Near white
- Foreground: `oklch(0.2046 0 0)` - Near black text
- Muted: `oklch(0.9461 0 0)` - Light gray
- Muted Foreground: `oklch(0.2435 0 0)` - Medium gray text
- Border: `oklch(0.9037 0 0)` - Light border
- Destructive: `oklch(0.5523 0.1927 32.7272)` - Red for errors

**Dark Mode:**
- Primary: `oklch(0.4365 0.1044 156.7556)` - Darker green
- Background: `oklch(0.1822 0 0)` - Very dark background
- Foreground: `oklch(0.9288 0.0126 255.5078)` - Light text

### Typography System

**Font Families:**
- Sans: `Outfit, sans-serif` - Primary font
- Mono: `monospace` - Code/technical content
- Serif: `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif` - Optional accent

**Letter Spacing:**
- Normal: `0.025em`
- Tracking variants: tighter, tight, wide, wider, widest

### Spacing & Borders

**Border Radius:**
- Default: `0.5rem`
- Variants: sm (0.25rem), md (0.375rem), lg (0.5rem), xl (0.625rem)

**Shadows:**
- Multiple elevation levels: 2xs, xs, sm, md, lg, xl, 2xl
- Shadow color: `#000000` with 0.17 opacity

### Component Styling Patterns

**Buttons (from Hero.tsx):**
- Primary: Default shadcn button with brand colors
- Secondary: Outline variant with white border, semi-transparent background
- Sizes: Default, large (`size="lg"`)

**Cards (from ServiceCard.tsx):**
- Border with shadow
- Featured variant: `border-primary shadow-lg`
- Icon container: `rounded-lg bg-primary/10` with primary color icon
- Structured layout: Header, Content, Footer

**Navigation (from Header.tsx):**
- Sticky positioning: `sticky top-0 z-50`
- Backdrop blur: `backdrop-blur supports-[backdrop-filter]:bg-background/60`
- Container: `container mx-auto`
- Responsive breakpoints: Hidden on mobile (< md), visible on desktop

**Footer (from Footer.tsx):**
- Three-column grid on desktop, single column on mobile
- Social icons with hover states
- Separator line between sections
- Copyright and links at bottom

### Animation & Interactivity

**Interaction Principles (from components):**
- Smooth transitions: `transition-colors`
- Hover states: `hover:text-primary`, `hover:bg-white/20`
- Focus states: Handled by shadcn components
- No heavy animations - clean, professional feel

## Requirements Summary

### Functional Requirements

**Content Extraction & Preservation:**
- Extract ALL copy from original teg.lv website (Latvian primary)
- Preserve exact wording - no paraphrasing or changes
- Maintain brand messaging: independence, anti-fraud, expertise
- Keep all service descriptions, pricing, contact info identical

**Page Coverage - ALL Pages Must Be Updated:**

1. **Homepage (Priority: Critical) - COMPLETE SECTION LIST:**
   - Header/Navigation with language switcher
   - Hero section with "PĀRBAUDĪT PIRMS PĒRC!" headline and CTA
   - Value proposition icon grid (4 columns) explaining service benefits
   - Three service cards overview (Pre-Purchase, Car Search, Roadside)
   - Inspection categories section - "KO MĒS PĀRBAUDĪSIM?" (6-box grid)
   - Anti-fraud educational section - "Negodīgo auto pārdevēju rīki" (6 fraud tactics)
   - Three detailed service breakdown sections (alternating image-text layouts)
   - Instagram feed integration (3-column grid)
   - Dark footer with contact form and brand illustration

2. **Services Page (SINGLE PAGE with 3 service sections)**
   - **CORRECTED:** This is ONE page, not three separate pages
   - Section 1: Pre-Purchase Inspection Service details
   - Section 2: Car Search & Delivery Service details
   - Section 3: Mobile Roadside Service details
   - Each section includes: service description, pricing, process, CTAs

3. **Mobile Roadside Service Detail Page**
   - Page title: "AUTOSERVISS BRAUC PIE TEVIS"
   - Comprehensive service list (12+ bullet points from screenshot)
   - Pricing: "SĀKOT NO 30 EUR*"
   - Service area/availability details
   - CTA to booking

4. **Car Purchase Service Detail Page**
   - Image gallery grid showing inspection process photos (extensive photo grid visible)
   - Detailed service breakdown
   - Visual evidence of inspection thoroughness
   - Process explanation
   - CTA to booking

5. **About Page**
   - TEG brand story and tagline: "Transporta ekspertu grupa – sava aroda profesionāļu grupa, kam auto ir sirdslieta."
   - Independence and anti-fraud positioning
   - Team expertise description
   - Mission and values
   - Multiple paragraphs from screenshot
   - Signature/personal touch at bottom

6. **Contact Page**
   - WhatsApp CTA button (prominent)
   - Contact form with fields: Vārds (Name), E-pasts (Email), Jautājums mums (Message/Question)
   - Contact details sidebar: Phone +371 25 201 710, Hours Mon-Sat 9:00 AM - 8:00 PM
   - Social media links: Facebook, Instagram @teg.auto
   - Instagram feed preview
   - TikTok section with "Open TikTok" button
   - Customer testimonials section (Facebook reviews)

**Component Redesign Requirements:**
- Use existing shadcn/ui components from project
- Customize with brand colors from global.css
- Maintain existing typography system (Outfit font)
- Follow minimalistic, professional interaction patterns
- Ensure mobile-responsive layouts
- Implement smooth, subtle transitions (not flashy)
- Match or improve visual hierarchy from original

**Multi-Language Support:**
- Phase 1: Complete Latvian copy (primary focus - this spec)
- Phase 2: English translation (future)
- Phase 3: Russian translation (future)
- Use existing i18n infrastructure (next-intl)

**Forms & Interactions:**
- Contact form with validation (existing ContactForm.tsx)
- Appointment booking forms (existing AppointmentForm.tsx)
- WhatsApp integration button (click-to-chat)
- Social media click-throughs (Instagram, TikTok, Facebook)
- Phone number click-to-call functionality
- Email click-to-compose
- CTA buttons throughout ("Pasūtīt pārbaudi", "Uzzināt vairāk")

### Reusability Opportunities

**Components to Reuse (Minimal or No Modification):**
- Hero.tsx - Basic structure works, update content
- Header.tsx - Already implemented, verify navigation matches
- Footer.tsx - Has contact info and social links, may need dark background variant
- LocaleSwitcher.tsx - Language switching (LAT/ENG/RUS)
- ThemeToggle.tsx - Dark mode toggle
- All shadcn/ui base components (Button, Card, Badge, Form, Input, Textarea, etc.)

**Components to Extend/Customize:**
- ServiceCard.tsx - Ensure supports photo backgrounds from homepage
- ContactForm.tsx - Needs dark background variant for footer
- AppointmentForm.tsx - Ensure matches booking needs for each service

**New Components Needed:**

1. **IconGridSection.tsx** - Four-column icon grid for value propositions
   - Props: items array (icon, title, description)
   - Layout: 4 columns desktop, 2 tablet, 1 mobile
   - Style: Illustrated icons, centered text

2. **InspectionCategoriesGrid.tsx** - "KO MĒS PĀRBAUDĪSIM?" section
   - Props: categories array (icon, title, checklist items)
   - Layout: 3×2 grid desktop, 2×3 tablet, 1 column mobile
   - Style: White boxes with icons, bullet lists

3. **AntiFraudSection.tsx** - "Negodīgo auto pārdevēju rīki" educational grid
   - Props: fraud tactics array (icon, title, description)
   - Layout: 2 columns desktop, 1 column mobile
   - Style: Alternating backgrounds, icon + text blocks

4. **ServiceDetailSection.tsx** - Alternating image-text layouts
   - Props: image, title, description, CTA, imagePosition (left/right)
   - Layout: Two-column, responsive
   - Variants: Image left, image right

5. **ImageGalleryGrid.tsx** - Inspection photo grid (Car Purchase page)
   - Props: images array
   - Layout: Responsive grid, masonry or uniform
   - Style: Professional photo showcase

6. **InstagramFeedSection.tsx** - Social media feed preview
   - Props: feed URLs or embed codes
   - Layout: 3-column grid
   - Style: Instagram branding, white cards

7. **DarkFooterWithForm.tsx** - Contact form + illustration footer variant
   - Props: form fields, illustration, contact info
   - Layout: Two-column (form left, illustration right)
   - Style: Dark background, lime green accents

**Backend Patterns to Reference:**
- Form validation: `/src/lib/validations/` - Zod schemas
- API routes: `/src/app/api/contact/`, `/src/app/api/bookings/`
- Email sending: `/src/lib/email/` - Resend integration

### Scope Boundaries

**In Scope:**
- ALL page copy extraction from original teg.lv (Latvian) - comprehensive and complete
- Homepage complete redesign with all 9 identified sections
- Single Services page with 3 service detail sections
- Mobile Roadside Service detail page
- Car Purchase Service detail page (with extensive photo gallery)
- About page redesign
- Contact page redesign with all elements (WhatsApp, form, testimonials, social)
- Component library extension (7+ new components needed)
- Responsive mobile layouts for all sections
- Form integrations (contact, booking, service request)
- Social media link integration (Instagram, TikTok, Facebook)
- WhatsApp click-to-chat integration

**Out of Scope:**
- English translation (Phase 2 - separate spec)
- Russian translation (Phase 3 - separate spec)
- Instagram/TikTok API integration (use static embeds or links for now)
- Live Instagram feed updates (static preview acceptable)
- Testimonials advanced features (basic display only - limited content available)
- Blog/content pages (not in original site)
- Customer dashboard (future feature)
- Payment processing (handled separately)
- Booking system backend logic changes (already implemented, just integrate forms)

**Future Enhancements (Post-MVP):**
- Live Instagram feed API integration
- Advanced testimonials section with filtering/carousel
- Case studies with detailed inspection examples
- Video content integration
- Enhanced service report previews/samples
- Live chat functionality
- FAQ section expansion
- Customer review aggregation system

### Technical Considerations

**Integration Points:**
- Next.js 15 App Router with i18n routing (`/[locale]/`)
- Existing navigation structure in Header.tsx - verify against "Sākums, Pakalpojumi, Auto iegāde, Par mums, Kontakti"
- Contact form API route: `/api/contact`
- Appointment booking API route: `/api/bookings`
- PostHog analytics tracking
- Theme system (light/dark mode support)
- Responsive breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

**Existing System Constraints:**
- Must use shadcn/ui component library only
- Must maintain existing color palette from global.css (lime green primary matches original)
- Must use Outfit font family
- Must follow existing component patterns (Hero, ServiceCard, etc.)
- Must integrate with existing form validation (Zod)
- Must support i18n structure (even if only Latvian content initially)

**Technology Stack (Already Implemented):**
- Next.js 15.5.4+ with App Router
- React 19
- TypeScript 5.9+ strict mode
- TailwindCSS v4 (via @tailwindcss/postcss)
- shadcn/ui components
- next-intl for i18n
- react-hook-form + Zod for validation
- PostHog for analytics

**Performance Requirements:**
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Optimized images using Next.js Image component (critical for photo-heavy pages)
- Code splitting per route
- Mobile-first responsive design
- Lazy loading for Instagram feed embeds

**Accessibility Requirements:**
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (lime green on dark/white backgrounds)
- Form labels and error messages

### Similar Code Patterns to Follow

**Component Structure Pattern:**
```typescript
// Type-safe props with TypeScript
type ComponentProps = {
  title: string;
  description?: string;
  className?: string;
};

// Flexible className prop for customization
export function Component({ title, description, className = '' }: ComponentProps) {
  return (
    <section className={`base-classes ${className}`}>
      {/* Content */}
    </section>
  );
}
```

**Responsive Layout Pattern:**
```typescript
// Mobile-first responsive grid
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
  {/* Content */}
</div>

// Container wrapper
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

**CTA Button Pattern:**
```typescript
<Button asChild size="lg" className="w-full sm:w-auto">
  <Link href={ctaHref}>{ctaText}</Link>
</Button>
```

**Icon Container Pattern:**
```typescript
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
  <Icon className="h-6 w-6 text-primary" />
</div>
```

**Form Integration Pattern:**
- Use react-hook-form for form state
- Zod schemas for validation
- shadcn Form, Input, Textarea components
- Server-side validation in API routes
- Toast notifications (sonner) for feedback

### Content Migration Strategy

**Copy Extraction Process:**
1. Read each screenshot section-by-section systematically
2. Extract ALL text content (headlines, body copy, CTAs, labels, bullet points)
3. Preserve exact Latvian wording character-for-character
4. Document structure (sections, hierarchy, content relationships)
5. Note any dynamic content (pricing, contact info, dates)
6. Cross-reference between pages for consistency

**Component Mapping Process:**
1. Identify component type in original (hero, card, grid, form, etc.)
2. Map to shadcn/ui equivalent or design custom component
3. Redesign with modern styling using brand colors (lime green primary)
4. Ensure responsive behavior matches or improves original
5. Test interactivity (hover states, subtle animations)
6. Validate accessibility compliance

**Quality Checklist Per Page:**
- [ ] All original copy present and identical (character-by-character match)
- [ ] Visual hierarchy maintained or improved
- [ ] Mobile-responsive layout tested on real devices
- [ ] CTAs functional and prominent (lime green buttons)
- [ ] Forms integrated with validation and API routes
- [ ] Social links working correctly (Instagram, Facebook, TikTok, WhatsApp)
- [ ] Images optimized with Next.js Image component
- [ ] Accessibility compliance verified (WCAG 2.1 AA)
- [ ] Performance targets met (Lighthouse audit > 90)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

### Design System Extensions

**New Color Usage:**
- Use existing `--primary` (lime green) for CTAs, brand elements, navigation
- Use `bg-primary/10` for subtle highlights and icon containers
- Use `hover:text-primary` for interactive elements
- Dark footer background: Very dark gray/charcoal (similar to footer screenshot)
- Maintain high contrast for readability (white text on dark, dark text on white)

**Typography Scale:**
- Hero headlines: `text-4xl md:text-6xl lg:text-7xl font-bold uppercase`
- Section titles: `text-2xl md:text-3xl font-semibold`
- Subsection titles: `text-xl md:text-2xl font-medium`
- Body text: `text-base md:text-lg`
- Small text: `text-sm text-muted-foreground`
- Button text: `font-semibold`

**Spacing Conventions:**
- Section padding: `py-12 md:py-16 lg:py-24`
- Content gaps: `space-y-8 md:space-y-12`
- Grid gaps: `gap-6 md:gap-8 lg:gap-12`
- Component internal spacing: `p-6 md:p-8`

**Animation Guidelines:**
- Transitions: `transition-colors duration-200`
- Hover states: Subtle color changes only (e.g., button hover to slightly darker lime)
- No entrance animations (too flashy)
- Smooth scroll behavior for anchor links
- Subtle scale on hover for cards: `hover:scale-[1.02]`

## Implementation Notes

**Development Approach:**
1. Start with homepage (most complex, sets pattern for other pages)
2. Extract all homepage copy section-by-section from screenshot
3. Build new required components in priority order:
   - DarkFooterWithForm.tsx (used on homepage and potentially other pages)
   - IconGridSection.tsx (homepage)
   - InspectionCategoriesGrid.tsx (homepage)
   - AntiFraudSection.tsx (homepage)
   - ServiceDetailSection.tsx (homepage and service pages)
   - InstagramFeedSection.tsx (homepage, contact page)
   - ImageGalleryGrid.tsx (Car Purchase page)
4. Implement homepage page section by section, testing as you go
5. Test responsive behavior on mobile, tablet, desktop
6. Move to Services page (similar patterns to homepage)
7. Complete service detail pages (Roadside, Car Purchase)
8. Complete About and Contact pages
9. Final QA pass on all pages against screenshots

**Component Development Priority:**
1. **DarkFooterWithForm.tsx** - Critical for homepage footer, used on multiple pages
2. **IconGridSection.tsx** - Homepage value proposition section
3. **InspectionCategoriesGrid.tsx** - Homepage inspection checklist
4. **ServiceDetailSection.tsx** - Reusable for multiple service breakdowns
5. **AntiFraudSection.tsx** - Homepage educational content
6. **InstagramFeedSection.tsx** - Homepage and Contact page
7. **ImageGalleryGrid.tsx** - Car Purchase service page

**Testing Requirements:**
- Visual regression testing against screenshots (pixel-perfect where possible)
- Mobile responsiveness on actual devices (iPhone, Android, tablets)
- Form submission end-to-end testing (contact, booking forms)
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Accessibility audit with Lighthouse (target AA compliance)
- Performance audit with Lighthouse (target > 90 scores)
- WhatsApp click-to-chat functionality verification
- Social media link verification (Instagram, TikTok, Facebook)

**Documentation Needed:**
- Component usage examples and props documentation
- Copy extraction log (which copy from which screenshot section)
- Component mapping document (original section → new component)
- QA checklist per page with sign-off
- Migration notes for any deviations from original

## Success Criteria

**Content Accuracy:**
- 100% of original copy preserved exactly (character-for-character)
- All services described identically to original
- All contact information correct (phone, hours, social handles)
- All pricing information accurate (30 EUR roadside, etc.)
- All bullet lists and checklists complete

**Design Quality:**
- Modern, professional appearance exceeding original
- On-brand with existing design system (lime green primary, Outfit font)
- Improved visual hierarchy over original where appropriate
- Minimalistic, smooth interactions (no flashy animations)
- Consistent spacing and alignment throughout
- Clean, organized layouts

**Technical Performance:**
- Lighthouse score > 90 across all metrics (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals all in "Good" range (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Mobile-responsive on all common devices and screen sizes
- Forms working with proper validation and error handling
- All links and CTAs functional (WhatsApp, social media, booking)

**User Experience:**
- Clear navigation between pages matching original structure
- Easy access to contact methods (phone, WhatsApp, form, social)
- Prominent service information with clear CTAs
- Intuitive booking flow with validation feedback
- Professional, trustworthy impression matching brand positioning
- Fast page loads with optimized images

**Completeness:**
- All 9 homepage sections implemented
- All identified pages complete (Homepage, Services, Roadside Service, Car Purchase, About, Contact)
- All forms functional (Contact, Booking, Service Request)
- All social integrations working (Instagram preview, WhatsApp, Facebook, TikTok)
- Language switcher functional (even if only Latvian content initially)
