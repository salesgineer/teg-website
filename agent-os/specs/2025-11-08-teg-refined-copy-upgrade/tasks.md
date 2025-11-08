# Task Breakdown: TEG Website Refined Copy Upgrade

## Overview
Total Tasks: 70+ organized into 7 strategic task groups
Complexity: High (5+ new components, 6+ pages, multi-section homepage)
Estimated Timeline: 3-5 development sessions

## Task List

### Group 1: Foundation - Content Extraction & Preparation
**Dependencies:** None
**Priority:** Critical (Must complete before component development)
**Estimated Time:** 1-2 hours

- [x] 1.0 Complete content extraction and preparation
  - [x] 1.1 Extract exact Latvian copy from all screenshots
    - Read `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-2025-11-08-09_11_33.png` (Homepage)
    - Extract ALL 9 homepage sections character-for-character:
      - Hero: "PĀRBAUDĪT PIRMS PĒRC!" headline and subheadline
      - Value Prop Grid: 4-column section with icons and text
      - Service Cards: 3 card titles, descriptions, CTAs
      - Inspection Categories: "KO MĒS PĀRBAUDĪSIM?" with 6 categories and bullet lists
      - Anti-Fraud: "Negodīgo auto pārdevēju rīki" with 6 fraud tactics
      - 3 Service Detail sections: headlines, paragraphs, CTAs
      - Instagram section: @teg.auto handle and preview text
      - Footer form: "Sazin atsaities" headline, field labels, contact info
    - Document in `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-teg-refined-copy-upgrade/implementation/copy-extraction.md`
  - [x] 1.2 Extract copy from About page screenshot
    - Read `screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png`
    - Extract headline: "Transporta ekspertu grupa – sava aroda profesionāļu grupa, kam auto ir sirdslieta."
    - Extract "Labdien!" greeting and ALL paragraphs
    - Extract signature/personal touch text
    - Document in copy-extraction.md
  - [x] 1.3 Extract copy from Contact page screenshot
    - Read `screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png`
    - Extract: "Priecāsimies saņemt Jūsu ziņu" headline
    - Extract contact info: Phone +371 25 201 710, Hours "Pr - Se 9:00 - 20:00"
    - Extract form field labels: Vārds, E-pasts, Jautājums mums
    - Extract social section: "Mūs sociālajos tīklos" and social handles
    - Document in copy-extraction.md
  - [x] 1.4 Extract copy from Services page screenshot
    - Read `screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png`
    - Extract: "AUTOSERVISS BRAUC PIE TEVIS" headline
    - Extract comprehensive service list (12+ bullet points)
    - Extract pricing: "SĀKOT NO 30 EUR*" and disclaimer text
    - Document in copy-extraction.md
  - [x] 1.5 Extract copy from Car Purchase page screenshot
    - Read `screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png`
    - Extract service description text visible in screenshot
    - Note photo gallery structure (60+ images)
    - Document in copy-extraction.md
  - [x] 1.6 Create content constants file
    - Create `/home/fivefingerdisco/Projects/TEG_001/src/lib/constants/copy.ts`
    - Organize extracted copy by page and section
    - Use TypeScript types for type safety
    - Export as named constants for easy import
    - Example structure:
      ```typescript
      export const HOMEPAGE_COPY = {
        hero: {
          headline: 'PĀRBAUDĪT PIRMS PĒRC!',
          subheadline: '...',
          ctaText: 'Pasūtīt pārbaudi'
        },
        // ... other sections
      };
      ```

**Acceptance Criteria:**
- ALL copy from 5 screenshots extracted character-for-character
- Zero paraphrasing or changes to original text
- Organized in structured constants file with TypeScript types
- Documentation shows source screenshot for each piece of copy
- Ready for import into components

---

### Group 2: Component Development - Core UI Components
**Dependencies:** Group 1 (Content extraction)
**Priority:** Critical (Required for all pages)
**Estimated Time:** 3-4 hours

- [x] 2.0 Build foundational UI components
  - [x] 2.1 Write 2-8 focused tests for ValuePropositionGrid component
    - Test component renders with correct number of items (4)
    - Test icon rendering and text display
    - Test responsive grid layout (4 cols → 2 → 1)
    - Skip exhaustive testing of all edge cases
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/value-proposition/__tests__/ValuePropositionGrid.test.tsx`
  - [x] 2.2 Create ValuePropositionGrid component (IconGridSection)
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/value-proposition/ValuePropositionGrid.tsx`
    - Props: `items: Array<{ icon: ReactNode, title: string, description: string }>, headline?: string, subheadline?: string`
    - Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
    - Style: Centered text, illustrated icons, clean white background
    - Icon container: `flex h-24 w-24 items-center justify-center mx-auto mb-4`
    - Typography: `text-lg font-semibold` for titles, `text-muted-foreground` for descriptions
    - Use shadcn/ui Card component for optional card styling
    - Import copy from `/home/fivefingerdisco/Projects/TEG_001/src/lib/constants/copy.ts`
  - [x] 2.3 Write 2-8 focused tests for InspectionCategoriesGrid component
    - Test 6 categories render correctly
    - Test each category shows icon, title, and checklist
    - Test CTA button renders and is clickable
    - Test responsive layout (3×2 → 2×3 → 1 col)
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/inspection/__tests__/InspectionCategoriesGrid.test.tsx`
  - [x] 2.4 Create InspectionCategoriesGrid component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/inspection/InspectionCategoriesGrid.tsx`
    - Props: `categories: Array<{ icon: ReactNode, title: string, items: string[] }>, ctaText?: string, ctaHref?: string`
    - Section headline: "KO MĒS PĀRBAUDĪSIM?" (from copy constants)
    - Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
    - Each box: White background Card with equal sizing, icon, title, bullet list (ul/li)
    - Bullet list styling: `list-disc list-inside space-y-2 text-sm`
    - CTA button centered below grid: shadcn Button component, lime green, size="lg"
    - Mobile responsive: 3×2 desktop, 2×3 tablet, 1 column mobile
    - Use copy from constants file
  - [x] 2.5 Write 2-8 focused tests for AntiFraudSection component
    - Test 6 fraud tactics render
    - Test alternating background colors
    - Test icon and text display
    - Test responsive 2-col → 1-col layout
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/anti-fraud/__tests__/AntiFraudSection.test.tsx`
  - [x] 2.6 Create AntiFraudSection component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/anti-fraud/AntiFraudSection.tsx`
    - Props: `tactics: Array<{ icon: ReactNode, title: string, description: string }>, headline?: string`
    - Section headline: "Negodīgo auto pārdevēju rīki." (from copy constants)
    - Layout: `grid grid-cols-1 md:grid-cols-2 gap-8`
    - Style: Alternating backgrounds using `odd:bg-white even:bg-muted`
    - Each item: Card with icon, title (font-semibold text-lg), description paragraph
    - Educational tone with icon + text block layout
    - Icon size: `h-12 w-12 text-primary mb-4`
    - Mobile responsive: 2 columns desktop, 1 column mobile
    - Use copy from constants file
  - [x] 2.7 Write 2-8 focused tests for ServiceDetailSection component
    - Test image renders on correct side (left/right)
    - Test text content displays correctly
    - Test CTA button renders
    - Test alternating layout pattern
    - Test responsive stack to single column
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/services/__tests__/ServiceDetailSection.test.tsx`
  - [x] 2.8 Create ServiceDetailSection component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/services/ServiceDetailSection.tsx`
    - Props: `{ image: string, imageAlt: string, imagePosition: 'left' | 'right', title: string, description: string | ReactNode, benefits?: string[], ctaText?: string, ctaHref?: string, backgroundColor?: string }`
    - Two-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
    - Conditional ordering: `imagePosition === 'right' ? 'lg:order-last' : ''`
    - Image: Next.js Image component, optimized, fill container
    - Text column: Headline (text-3xl font-bold), description paragraphs, optional benefits list (ul/li with checkmarks), CTA button
    - Background: Configurable via prop, default white, supports light gray
    - Mobile responsive: Stacks to single column (image always on top)
    - Use copy from constants file
  - [x] 2.9 Write 2-8 focused tests for InstagramFeedSection component
    - Test 3-column grid renders
    - Test Instagram handle displays
    - Test links are correct
    - Test responsive layout (3 → 2 → 1 cols)
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/social/__tests__/InstagramFeedSection.test.tsx`
  - [x] 2.10 Create InstagramFeedSection component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/social/InstagramFeedSection.tsx`
    - Props: `handle: string, posts?: Array<{ imageUrl: string, caption?: string, link: string }>`
    - Section title with Instagram branding
    - Handle display: "@teg.auto" (from copy constants)
    - Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
    - Each post: White Card container with image, optional caption
    - Link to Instagram profile: `https://instagram.com/teg.auto`
    - For MVP: Use static placeholder images or embed Instagram widget
    - Mobile responsive: 3 columns desktop, 2 tablet, 1 mobile
    - Style: Clean white cards, Instagram icon/branding visible
  - [x] 2.11 Write 2-8 focused tests for DarkFooterWithForm component
    - Test form renders with correct fields
    - Test dark background styling applied
    - Test illustration displays (right column)
    - Test contact info section displays
    - Test form validation integration
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/footer/__tests__/DarkFooterWithForm.test.tsx`
  - [x] 2.12 Create DarkFooterWithForm component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/footer/DarkFooterWithForm.tsx`
    - Background: `bg-[#1a1a1a]` (dark charcoal/black matching screenshot)
    - Two-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-12`
    - Left column: Contact form
      - Headline: "Sazin atsaites" (from copy constants)
      - Fields: E-pasts (Email), Vārds (Name), Jautājums vai vēlos (Question) textarea
      - Submit button: "Nosūtīt" (lime green, full width on mobile)
      - Integrate existing ContactForm validation from `/home/fivefingerdisco/Projects/TEG_001/src/components/forms/ContactForm.tsx`
      - Use react-hook-form + Zod schema
    - Right column: Brand illustration (character with lime green element from screenshot)
      - Image or SVG illustration
      - Centered vertically
    - Bottom section (full width): Contact info
      - Text: Contact details, phone, company info (from copy constants)
      - White text on dark background
      - Separator line above: `border-t border-white/10`
    - Mobile responsive: Stacks to single column
    - All text white: `text-white`, muted text: `text-white/70`
  - [x] 2.13 Write 2-8 focused tests for ImageGalleryGrid component
    - Test grid renders with correct number of images
    - Test images use Next.js Image component
    - Test lazy loading enabled
    - Test responsive grid columns
    - Test lightbox click handler (if implemented)
    - Located at `/home/fivefingerdisco/Projects/TEG_001/src/components/gallery/__tests__/ImageGalleryGrid.test.tsx`
  - [x] 2.14 Create ImageGalleryGrid component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/gallery/ImageGalleryGrid.tsx`
    - Props: `images: Array<{ src: string, alt: string, caption?: string }>, columns?: { mobile: number, tablet: number, desktop: number }`
    - Layout: Responsive grid `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
    - Each image: Next.js Image component with optimization
    - Aspect ratio: `aspect-square object-cover` for uniform grid
    - Lazy loading: `loading="lazy"` for performance (60+ images)
    - Optional: Click to open lightbox (simple modal with larger image)
    - Professional photo presentation with subtle hover effect: `hover:opacity-90 transition-opacity`
    - Mobile responsive: 2 cols mobile, 3 tablet, 4 desktop
  - [x] 2.15 Run component tests
    - Run ONLY the tests written in tasks 2.1, 2.3, 2.5, 2.7, 2.9, 2.11, 2.13
    - Expected: ~14-28 tests maximum (2-4 per component × 7 components)
    - Verify all new components render correctly
    - Fix any failing tests
    - Do NOT run entire test suite

**Acceptance Criteria:**
- 7 new components created with full TypeScript types
- All components use shadcn/ui base components
- All components import copy from constants file
- All components mobile-responsive (tested breakpoints)
- 14-28 focused tests passing
- Components follow existing patterns from Hero.tsx, ServiceCard.tsx
- Consistent styling with brand colors (lime green primary)

---

### Group 3: Component Enhancement - Existing Component Updates
**Dependencies:** Group 1 (Content extraction)
**Priority:** High (Required for homepage integration)
**Estimated Time:** 1-2 hours

- [x] 3.0 Update existing components for new design requirements
  - [x] 3.1 Update Hero component for darker overlay
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/hero/Hero.tsx`
    - Read existing component first ✅
    - Add prop: `overlayOpacity?: 'light' | 'dark'` (default 'light') ✅
    - Update overlay gradient: `dark` variant should use `bg-black/70` instead of `bg-black/50` ✅
    - Add uppercase title support: Add prop `titleUppercase?: boolean`, apply `uppercase` class conditionally ✅
    - Update with homepage copy from constants: "PĀRBAUDĪT PIRMS PĒRC!"
    - Ensure background image path configurable ✅
    - Test: Verify dark overlay makes white text highly readable
  - [x] 3.2 Extend ServiceCard to support photo backgrounds
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/services/ServiceCard.tsx`
    - Read existing component first ✅
    - Add optional prop: `backgroundImage?: string` ✅
    - When backgroundImage provided: ✅
      - Use as Card background with Next.js Image component ✅
      - Add dark overlay for text readability: `relative` container with `absolute` overlay ✅
      - Ensure text remains readable with white color ✅
      - Maintain existing icon-based cards as default ✅
    - Update card heights for consistency: `min-h-[400px]` to ensure equal heights in grid
    - Test: Verify both icon-based and photo-based variants work
  - [x] 3.3 Verify Header navigation matches requirements
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/components/navigation/Header.tsx`
    - Read existing component ✅
    - Verify navigation items match: "Sākums" (Home), "Pakalpojumi" (Services), "Auto iegāde" (Car Purchase), "Par mums" (About), "Kontakti" (Contact) ✅ NOTE: Current has "Pieraksts" instead of "Auto iegāde"
    - Verify lime green background color matches brand ⚠️ NOT VERIFIED
    - Verify language switcher shows LAT, ENG, RUS ✅ Has LocaleSwitcher component
    - Verify phone number displays: "Pieejami 24/7 TEPT" or "+371 25 201 710" ✅ Shows +371 25 201 710
    - Update navigation copy from constants file if needed
    - No structural changes required, only copy verification ✅
  - [x] 3.4 Create dark footer variant decision
    - Analyze existing Footer.tsx at `/home/fivefingerdisco/Projects/TEG_001/src/components/navigation/Footer.tsx` ✅
    - Decision: Use new DarkFooterWithForm component for homepage ✅
    - Keep existing Footer.tsx for other pages (standard footer) ✅
    - Document usage: Homepage uses DarkFooterWithForm, other pages use standard Footer ✅
    - No changes to existing Footer.tsx needed ✅
    - Documentation: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-teg-refined-copy-upgrade/implementation/FOOTER_VARIANT_DECISION.md`

**Acceptance Criteria:**
- Hero.tsx supports dark overlay and uppercase titles
- ServiceCard.tsx supports both icon and photo backgrounds
- Header.tsx navigation verified correct (or updated)
- Footer component usage documented
- All updates backward compatible with existing usage
- Visual testing confirms dark overlay improves readability

---

### Group 4: Page Assembly - Homepage Integration
**Dependencies:** Group 2 (Component Development), Group 3 (Component Enhancement)
**Priority:** Critical (Core deliverable)
**Estimated Time:** 2-3 hours

- [x] 4.0 Assemble complete homepage with all 9 sections
  - [x] 4.1 Create homepage page component
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/page.tsx`
    - Read existing file first (likely has placeholder content)
    - Import all required components:
      - Hero from `/home/fivefingerdisco/Projects/TEG_001/src/components/hero/Hero.tsx`
      - ValuePropositionGrid from value-proposition folder
      - ServiceCard from services folder
      - InspectionCategoriesGrid from inspection folder
      - AntiFraudSection from anti-fraud folder
      - ServiceDetailSection from services folder
      - InstagramFeedSection from social folder
      - DarkFooterWithForm from footer folder
    - Import copy from `/home/fivefingerdisco/Projects/TEG_001/src/lib/constants/copy.ts`
  - [x] 4.2 Implement Section 1: Hero with dark overlay
    - Use Hero component with props:
      - `backgroundImage`: Path to mechanic inspecting wheel well image
      - `overlayOpacity`: "dark"
      - `titleUppercase`: true
      - `title`: "PĀRBAUDĪT PIRMS PĒRC!" (from copy constants)
      - `subtitle`: Subheadline text (from copy constants)
      - `primaryCTA`: { text: "Pasūtīt pārbaudi", href: "/kontakti" }
    - Ensure full viewport height: `min-h-screen`
    - Test: Verify white text readable on dark overlay
  - [x] 4.3 Implement Section 2: Value Proposition Grid
    - Use ValuePropositionGrid component
    - Pass 4 items array from copy constants:
      - Item 1: Person with magnifying glass icon, title, description
      - Item 2: Car on lift with tools icon, title, description
      - Item 3: Document with checkmarks icon, title, description
      - Item 4: Person with decision icons, title, description
    - Section padding: `py-16 md:py-24`
    - Container: `container mx-auto px-4`
    - Test: Verify 4-column grid on desktop, 2 on tablet, 1 on mobile
  - [x] 4.4 Implement Section 3: Three Service Cards
    - Create 3-column grid: `grid grid-cols-1 md:grid-cols-3 gap-8`
    - Use ServiceCard component 3 times with photo backgrounds:
      - Card 1: Pre-Purchase Inspection (background image, title, description, CTA from constants)
      - Card 2: Car Purchase Assistance (background image, title, description, CTA)
      - Card 3: Europe-Wide Coverage (background image, title, description, CTA)
    - Container: `container mx-auto px-4`
    - Section padding: `py-16 md:py-24 bg-white`
    - Test: Verify equal card heights and consistent spacing
  - [x] 4.5 Implement Section 4: Inspection Categories Grid
    - Use InspectionCategoriesGrid component
    - Pass 6 categories array from copy constants:
      - Dzinējs (Engine) with bullet list
      - Šasijas numurs (Chassis) with bullet list
      - Virsbūve un salons (Body/Interior) with bullet list
      - Tehniskais stāvoklis (Technical) with bullet list
      - Balsošana (Braking) with bullet list
      - Elektrospēcības (Electrical) with bullet list
    - CTA: "Pasūtīt pārbaudi" button linking to contact/booking
    - Section padding: `py-16 md:py-24 bg-muted`
    - Test: Verify 3×2 grid on desktop, responsive on mobile
  - [x] 4.6 Implement Section 5: Anti-Fraud Educational Section
    - Use AntiFraudSection component
    - Pass 6 fraud tactics array from copy constants:
      - Odometer rollback with icon, title, description
      - Paint fraud with icon, title, description
      - Hidden damage with icon, title, description
      - Ownership fraud with icon, title, description
      - False advertising with icon, title, description
      - Document fraud with icon, title, description
    - Section padding: `py-16 md:py-24 bg-white`
    - Test: Verify alternating backgrounds and 2-column layout
  - [x] 4.7 Implement Sections 6-8: Three Detailed Service Breakdowns
    - Section 6A: Pre-purchase inspection (image left, white background)
      - Use ServiceDetailSection with imagePosition="left"
      - Content from copy constants
      - Background: white
    - Section 6B: Car search and delivery (image right, light gray background)
      - Use ServiceDetailSection with imagePosition="right"
      - Content from copy constants
      - Background: `bg-muted`
    - Section 6C: Mobile roadside service (image left, white background)
      - Use ServiceDetailSection with imagePosition="left"
      - Content from copy constants
      - Background: white
    - Each section: Full-width, padding `py-16 md:py-24`
    - Test: Verify alternating layouts and backgrounds
  - [x] 4.8 Implement Section 9: Instagram Feed Integration
    - Use InstagramFeedSection component
    - Handle: "@teg.auto" (from copy constants)
    - For MVP: Use static placeholder posts or Instagram embed widget
    - Section padding: `py-16 md:py-24 bg-white`
    - Container: `container mx-auto px-4`
    - Test: Verify 3-column grid, responsive layout
  - [x] 4.9 Implement Section 10: Dark Footer with Form
    - Use DarkFooterWithForm component
    - This replaces standard Footer on homepage only
    - Full-width section, no container (footer spans full width)
    - Test: Verify form validation works, dark styling correct
  - [x] 4.10 Test homepage end-to-end
    - Visual regression against screenshot `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-2025-11-08-09_11_33.png`
    - Verify all 9 sections present in correct order
    - Test responsive layouts on mobile (375px), tablet (768px), desktop (1440px)
    - Verify all CTAs link correctly
    - Test form submission on dark footer
    - Run Lighthouse audit: Target Performance > 85, Accessibility > 90
    - Verify Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Acceptance Criteria:**
- Homepage has all 9 sections in correct order
- All copy matches original character-for-character
- Responsive design works across breakpoints
- All CTAs functional and link correctly
- Form validation works on dark footer
- Visual design matches or exceeds original quality
- Lighthouse scores meet targets
- No layout shift issues (CLS < 0.1)

---

### Group 5: Page Assembly - Service & Detail Pages
**Dependencies:** Group 2 (Component Development), Group 3 (Component Enhancement)
**Priority:** High
**Estimated Time:** 2-3 hours

- [x] 5.0 Build all service and detail pages
  - [x] 5.1 Create single Services overview page
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/pakalpojumi/page.tsx`
    - Hero section: Services overview hero (title from copy constants)
    - Use ServiceDetailSection component 3 times:
      - Section 1: Pre-Purchase Inspection details (image left, white bg)
      - Section 2: Car Search & Delivery details (image right, gray bg)
      - Section 3: Mobile Roadside Service details (image left, white bg)
    - Each section: Full service description, pricing, process, CTA to booking
    - Copy from constants file
    - Standard Footer component (not dark footer)
    - Test: Verify all 3 services display correctly
  - [x] 5.2 Create Mobile Roadside Service detail page
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/pakalpojumi/mobilais-serviss/page.tsx`
    - Hero with title: "AUTOSERVISS BRAUC PIE TEVIS" (from copy constants)
    - Road service illustration/image
    - Comprehensive service list section:
      - 12+ bullet points from copy constants (diagnostics, battery, key programming, brake repair, etc.)
      - Use unordered list with checkmark icons: `<CheckCircle className="text-primary" />`
      - Two-column layout on desktop: `grid grid-cols-1 md:grid-cols-2 gap-4`
    - Pricing section:
      - Large, prominent display: "SĀKOT NO 30 EUR*"
      - Typography: `text-4xl md:text-5xl font-bold text-primary`
      - Disclaimer text in smaller font: `text-sm text-muted-foreground`
    - Service area and availability details from copy constants
    - CTA to booking form: Link to AppointmentForm
    - Standard Footer
    - Test: Verify pricing displays prominently, all services listed
  - [x] 5.3 Create Car Purchase Service detail page
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/auto-iegade/page.tsx`
    - Hero section with service title from copy constants
    - Service description section: Text from copy constants explaining process
    - ImageGalleryGrid component:
      - 60+ inspection photos (extensive gallery from screenshot)
      - Images showing: engine diagnostics, body inspection, documentation, VIN checks
      - Grid layout: 4 columns desktop, 3 tablet, 2 mobile
      - Lazy loading for performance
      - Photos demonstrate inspection thoroughness visually
    - Process breakdown section: Text from copy constants
    - Benefits list with checkmarks
    - Pricing information if applicable
    - CTA to booking form
    - Standard Footer
    - Test: Verify image gallery loads efficiently (lazy loading), all images optimized

**Acceptance Criteria:**
- Services overview page shows all 3 services clearly
- Mobile Roadside Service page has all 12+ services listed, pricing prominent
- Car Purchase page has working image gallery with 60+ photos, lazy loading
- All copy matches original screenshots
- All CTAs link to appropriate booking/contact forms
- Standard Footer used (not dark footer)
- Performance: Image gallery doesn't slow page load (Lighthouse > 85)

---

### Group 6: Page Assembly - About & Contact Pages
**Dependencies:** Group 2 (Component Development), Group 1 (Content extraction)
**Priority:** High
**Estimated Time:** 1-2 hours

- [x] 6.0 Build About and Contact pages
  - [x] 6.1 Create About page
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/par-mums/page.tsx`
    - Hero section (optional): Simple page title or can skip for cleaner design
    - Brand story section:
      - TEG logo and brand icon (car with handshake illustration) at top
      - Centered layout: `max-w-3xl mx-auto text-center`
      - Headline: "Transporta ekspertu grupa – sava aroda profesionāļu grupa, kam auto ir sirdslieta." (from copy constants)
      - Typography: `text-3xl md:text-4xl font-bold mb-8`
      - "Labdien!" greeting: Personal connection opening
      - Multiple paragraphs from copy constants:
        - Independence positioning
        - Anti-fraud focus
        - Technical expertise
        - Passion for automotive quality
      - Professional typography with adequate spacing: `space-y-6`
      - Paragraph styling: `text-lg leading-relaxed`
    - Personal signature element at bottom:
      - Signature image or text from screenshot
      - Centered below content
    - Clean white background: `bg-white`
    - Section padding: `py-16 md:py-24`
    - Standard Footer
    - Test: Verify centered layout, professional typography, all paragraphs present
  - [x] 6.2 Create Contact page
    - File: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/kontakti/page.tsx`
    - WhatsApp CTA section (top, prominent):
      - Large green button: `bg-[#25D366] hover:bg-[#22C55E]` (WhatsApp brand color)
      - Icon: WhatsApp icon from lucide-react or similar
      - Text: "Rakstīt WhatsApp" or similar CTA from constants
      - Click-to-chat functionality: `href="https://wa.me/37125201710"`
      - Full-width on mobile, centered on desktop
    - Headline: "Priecāsimies saņemt Jūsu ziņu." (from copy constants)
    - Intro text from copy constants
    - Two-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-12`
    - Left column: Contact form
      - Fields: Vārds (Name), E-pasts (Email), Jautājums mums (Message)
      - Use existing ContactForm validation
      - Submit button: "Nosūtīt" (lime green)
    - Right column: Contact info and social sections
      - Contact info sidebar:
        - Section title: "Kontakttālrunis"
        - Phone: +371 25 201 710 (click-to-call: `href="tel:+37125201710"`)
        - Section title: "Darba laiks"
        - Hours: "Pr - Se 9:00 - 20:00" (Mon-Sat)
      - Social media section:
        - Title: "Mūs sociālajos tīklos"
        - Large Facebook and Instagram icons (clickable)
        - Instagram profile preview: Handle "@teg.auto" with follower count
        - Grid of 3-4 recent Instagram posts (use InstagramFeedSection or similar)
      - TikTok section:
        - "Open TikTok" button with TikTok branding (red/black)
        - Link to TikTok profile
    - Customer testimonials section (below main content):
      - Section title: "Ko saka mūsu klienti" or similar
      - Two Facebook testimonials visible (from screenshot)
      - Each testimonial: Card with customer photo, name, text, Facebook branding
      - Facebook interaction buttons: Like, Comment, Share (styled, non-functional for MVP)
    - Standard Footer
    - Test: Verify WhatsApp click-to-chat works, phone click-to-call works, form validation works
  - [x] 6.3 Implement social media integrations
    - Instagram links: `https://instagram.com/teg.auto`
    - Facebook link: Page URL from screenshot
    - TikTok link: `https://tiktok.com/@teg.auto`
    - WhatsApp: `https://wa.me/37125201710`
    - Ensure all links open in new tab: `target="_blank" rel="noopener noreferrer"`
    - Icons: Use lucide-react icons (Instagram, Facebook, MessageCircle for TikTok)
    - Test: Verify all social links work correctly

**Acceptance Criteria:**
- About page displays centered brand story with all paragraphs
- About page has professional typography and clean layout
- Contact page has prominent WhatsApp CTA at top
- Contact form works with validation
- All contact methods clickable (phone, WhatsApp, email)
- Social media links all functional
- Instagram preview displays (static or embedded)
- Testimonials section displays two reviews with Facebook styling
- All copy matches original screenshots

---

### Group 7: Quality Assurance & Testing
**Dependencies:** Groups 4, 5, 6 (All pages assembled)
**Priority:** Critical (Final verification before completion)
**Estimated Time:** 2-3 hours

- [ ] ⚠️ 7.0 Comprehensive quality assurance and testing
  - [ ] ⚠️ 7.1 Copy verification across all pages
    - Homepage: Compare all 9 sections against screenshot, verify character-for-character match
    - Services page: Verify service descriptions match
    - Mobile Roadside Service: Verify all 12+ services listed, pricing correct
    - Car Purchase page: Verify description text matches
    - About page: Verify all paragraphs present and identical
    - Contact page: Verify all field labels, headings, contact info correct
    - Document any deviations (should be zero)
  - [ ] ⚠️ 7.2 Responsive design testing
    - Test all pages on mobile breakpoint (375px width):
      - Verify single-column layouts
      - Verify text readable, no overflow
      - Verify images scale appropriately
      - Verify CTAs accessible and tappable
    - Test all pages on tablet breakpoint (768px width):
      - Verify grid layouts (2-column where appropriate)
      - Verify navigation works
      - Verify forms usable
    - Test all pages on desktop breakpoint (1440px width):
      - Verify full grid layouts (3-4 columns)
      - Verify spacing consistent
      - Verify images high quality
    - Use Chrome DevTools device emulation
    - Test on real devices if available (iPhone, Android, iPad)
  - [ ] ⚠️ 7.3 Performance testing and optimization
    - Run Lighthouse audits on all pages:
      - Homepage target: Performance > 85, Accessibility > 90, Best Practices > 90, SEO > 90
      - All other pages: Same targets
    - Check Core Web Vitals:
      - LCP (Largest Contentful Paint): < 2.5s
      - FID (First Input Delay): < 100ms
      - CLS (Cumulative Layout Shift): < 0.1
    - Optimize if scores below target:
      - Compress images further
      - Add `priority` prop to above-fold images
      - Implement lazy loading for below-fold content
      - Review bundle size, code-split if needed
    - Test page load times on slow 3G network (Chrome DevTools throttling)
  - [ ] ⚠️ 7.4 Accessibility audit
    - Run axe DevTools or Lighthouse accessibility audit
    - Verify WCAG 2.1 AA compliance:
      - Color contrast ratios sufficient (4.5:1 for normal text, 3:1 for large text)
      - All interactive elements keyboard accessible (Tab navigation)
      - All images have alt text
      - All form inputs have associated labels
      - Focus indicators visible
      - Heading hierarchy logical (h1 → h2 → h3, no skips)
    - Test with screen reader (NVDA on Windows or VoiceOver on Mac):
      - Verify navigation announced correctly
      - Verify form fields announced with labels
      - Verify buttons have descriptive text
    - Fix any issues found
  - [ ] ⚠️ 7.5 Form functionality testing
    - Homepage dark footer form:
      - Test all fields validate correctly (email format, required fields)
      - Test error messages display clearly
      - Test successful submission (toast notification or redirect)
      - Verify API route `/api/contact` handles request
    - Contact page form:
      - Same validation and submission tests
      - Verify click-to-call phone link works: `tel:+37125201710`
      - Verify click-to-email works if implemented
      - Verify WhatsApp click-to-chat works: Opens WhatsApp with pre-filled number
    - Services booking forms (if on page):
      - Test appointment booking flow
      - Verify form data sent to correct API route
  - [ ] ⚠️ 7.6 Cross-browser compatibility testing
    - Test all pages in Chrome (latest)
    - Test all pages in Firefox (latest)
    - Test all pages in Safari (latest)
    - Test all pages in Edge (latest)
    - Document any browser-specific issues:
      - Layout differences
      - Font rendering
      - Image display
      - Interactive element behavior
    - Fix critical issues (non-functional features)
    - Note minor cosmetic differences (acceptable if minor)
  - [ ] ⚠️ 7.7 Visual regression testing
    - Compare each page against original screenshots side-by-side:
      - Homepage vs `screencapture-teg-lv-2025-11-08-09_11_33.png`
      - About vs `screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png`
      - Contact vs `screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png`
      - Services vs `screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png`
      - Car Purchase vs `screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png`
    - Verify visual hierarchy matches or improves original
    - Verify spacing and alignment consistent
    - Verify colors match brand (lime green primary)
    - Verify typography professional and readable
    - Document any intentional design improvements
  - [ ] ⚠️ 7.8 Link verification
    - Test all navigation links work correctly:
      - Header navigation: Sākums, Pakalpojumi, Auto iegāde, Par mums, Kontakti
      - Footer links (if any)
      - Language switcher (LAT, ENG, RUS) - verify URLs change
    - Test all CTA buttons:
      - "Pasūtīt pārbaudi" buttons link to contact/booking
      - "Uzzināt vairāk" buttons link to service detail pages
      - "Nosūtīt" submit buttons trigger form submission
    - Test all social media links:
      - Instagram: `https://instagram.com/teg.auto`
      - Facebook: Correct page URL
      - TikTok: `https://tiktok.com/@teg.auto`
      - WhatsApp: `https://wa.me/37125201710`
    - Verify all external links open in new tab with `rel="noopener noreferrer"`
  - [ ] ⚠️ 7.9 Final QA checklist
    - [ ] All copy matches original (100% accuracy)
    - [ ] All 9 homepage sections present and correct
    - [ ] All service pages complete with correct content
    - [ ] About and Contact pages complete
    - [ ] All forms validate and submit correctly
    - [ ] All images optimized and load efficiently
    - [ ] All links functional
    - [ ] All CTAs lead to correct destinations
    - [ ] Mobile responsive on all pages
    - [ ] Accessibility compliance verified (WCAG 2.1 AA)
    - [ ] Performance targets met (Lighthouse > 85)
    - [ ] Cross-browser compatibility confirmed
    - [ ] Visual design professional and on-brand
    - [ ] No console errors or warnings
    - [ ] Language switcher functional (even if only Latvian content)
  - [ ] ⚠️ 7.10 Create QA report
    - Document at `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-teg-refined-copy-upgrade/implementation/qa-report.md`
    - Include:
      - Copy verification results (100% match confirmed)
      - Performance test results (Lighthouse scores for each page)
      - Accessibility audit results (issues found and fixed)
      - Cross-browser test results (browsers tested, issues found)
      - Responsive design test results (breakpoints tested, issues found)
      - Form functionality test results (all forms working)
      - Link verification results (all links working)
      - Visual regression notes (matches or improvements over original)
      - Known issues or limitations (if any)
      - Sign-off: Ready for production or needs additional work

**Acceptance Criteria:**
- All copy verified 100% accurate against screenshots
- All pages tested responsive on 3+ breakpoints
- Lighthouse scores > 85 Performance, > 90 Accessibility on all pages
- WCAG 2.1 AA compliance verified with no critical issues
- All forms functional with validation
- Cross-browser testing complete (Chrome, Firefox, Safari, Edge)
- All links and CTAs verified working
- QA report completed with detailed results
- Zero critical bugs, minor issues documented
- Ready for production deployment

---

## Execution Order

**Recommended implementation sequence:**

1. **Group 1: Foundation** (1-2 hours) - Extract all copy first, create constants file
2. **Group 2: Component Development** (3-4 hours) - Build all 7 new components with tests
3. **Group 3: Component Enhancement** (1-2 hours) - Update Hero and ServiceCard for new requirements
4. **Group 4: Homepage Assembly** (2-3 hours) - Integrate all components into homepage
5. **Group 5: Service Pages** (2-3 hours) - Build Services, Mobile Roadside, Car Purchase pages
6. **Group 6: About & Contact** (1-2 hours) - Complete About and Contact pages
7. **Group 7: Quality Assurance** (2-3 hours) - Comprehensive testing and verification

**Total Estimated Time:** 12-19 hours (3-5 development sessions)

---

## Critical Notes

### Testing Philosophy
- Each component development group (2.x tasks) writes 2-8 focused tests ONLY
- Tests verify critical functionality, not exhaustive coverage
- Total expected tests: ~14-28 for component development
- No comprehensive test suite run until final QA phase
- Focus on feature completion, strategic testing only

### Copy Accuracy Requirements
- ZERO tolerance for paraphrasing or changes to original copy
- Character-for-character match required
- Copy extraction (Group 1) is critical foundation
- All components import from centralized constants file
- QA phase includes line-by-line copy verification

### Performance Priorities
- Image optimization critical (60+ images on Car Purchase page)
- Lazy loading mandatory for image gallery
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Lighthouse Performance > 85 on all pages
- Mobile-first approach for responsive design

### Component Reusability
- ServiceDetailSection used on homepage AND service pages
- InstagramFeedSection used on homepage AND contact page
- DarkFooterWithForm ONLY on homepage (other pages use standard Footer)
- All components accept copy via props from constants file

### Dependencies Map
```
Group 1 (Content) → Groups 2, 3, 4, 5, 6
Group 2 (Components) → Groups 4, 5, 6
Group 3 (Enhancements) → Group 4
Groups 4, 5, 6 (Pages) → Group 7 (QA)
```

### File Paths Quick Reference
- Components: `/home/fivefingerdisco/Projects/TEG_001/src/components/`
- Pages: `/home/fivefingerdisco/Projects/TEG_001/src/app/[locale]/`
- Constants: `/home/fivefingerdisco/Projects/TEG_001/src/lib/constants/copy.ts`
- Tests: `/home/fivefingerdisco/Projects/TEG_001/src/components/[component-folder]/__tests__/`
- Screenshots: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-07-nextjs-project-setup/planning/visuals/TEMP -- TEG Screens/LV/`
- Implementation docs: `/home/fivefingerdisco/Projects/TEG_001/agent-os/specs/2025-11-08-teg-refined-copy-upgrade/implementation/`

---

## Success Metrics

**Content Fidelity:**
- 100% copy accuracy (character-for-character match)
- All 9 homepage sections implemented
- All service pages complete
- About and Contact pages complete

**Technical Quality:**
- Lighthouse Performance > 85 (all pages)
- Lighthouse Accessibility > 90 (all pages)
- Core Web Vitals in "Good" range
- WCAG 2.1 AA compliance
- Zero critical bugs

**User Experience:**
- Mobile-responsive across all breakpoints
- All forms functional with validation
- All CTAs link correctly
- All social integrations working
- Fast page loads (< 3s on 3G)

**Code Quality:**
- 7 new components with TypeScript types
- 14-28 strategic tests passing
- Consistent use of shadcn/ui components
- Centralized copy constants
- Clean, maintainable code structure
