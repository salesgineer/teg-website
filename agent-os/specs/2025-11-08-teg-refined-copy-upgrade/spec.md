# Specification: TEG Website Refined Copy Upgrade

## Goal
Redesign all TEG website pages with modern, professional styling using shadcn/ui components while preserving exact copy from the original teg.lv website. Focus on Latvian content extraction and component reimagination with minimalistic, smooth interactivity that broadcasts professionalism.

## User Stories
- As a potential customer, I want to quickly understand TEG's services and expertise so that I can decide if they're the right inspection provider for my car purchase
- As a site visitor, I want a modern, fast, and professional experience that reflects TEG's quality standards so that I trust them with my vehicle inspection needs

## Specific Requirements

### Homepage Sections (9 total sections)

**Hero Section with Dark Overlay**
- Full viewport height hero with background image showing mechanic inspecting wheel well
- Headline: "PĀRBAUDĪT PIRMS PĒRC!" (uppercase, bold, white text)
- Subheadline describing anti-fraud positioning
- Primary CTA: "Pasūtīt pārbaudi" (lime green button)
- Dark gradient overlay on background image for text readability
- Reuse existing Hero.tsx component with customization for darker overlay and uppercase styling

**Value Proposition Icon Grid (4-column)**
- Section headline and subheadline explaining service benefits
- Four illustrated icons with text explanations arranged in grid
- Icons represent: customer bringing car, professional inspection on lift, documentation with photos, recommendation decision
- Clean white background with even spacing
- Simple line illustrations in dark color matching brand
- Mobile responsive: 4 columns desktop, 2 tablet, 1 mobile
- Create new IconGridSection.tsx component

**Three Service Cards Overview**
- 3-column grid showcasing main services
- Each card includes: photo, service title, description, "Uzzināt vairāk" CTA
- Services: Pre-Purchase Inspection, Car Purchase Assistance, Europe-Wide Coverage
- White background cards with shadow effects
- Extend existing ServiceCard.tsx to support photo backgrounds instead of just icons
- Ensure consistent card heights and spacing

**Inspection Categories Grid - "KO MĒS PĀRBAUDĪSIM?"**
- Section headline: "KO MĒS PĀRBAUDĪSIM?" (What we will check?)
- 6-box grid layout (3 columns × 2 rows on desktop)
- Categories: Dzinējs (Engine), Šasijas numurs (Chassis), Virsbūve un salons (Body/Interior), Tehniskais stāvoklis (Technical), Balsošana (Braking), Elektrospēcības (Electrical)
- Each box: icon, category title, bullet list of inspection points
- White background boxes with equal sizing
- CTA button below grid: "Pasūtīt pārbaudi" (centered, lime green)
- Create new InspectionCategoriesGrid.tsx component
- Mobile responsive: 3×2 desktop, 2×3 tablet, 1 column mobile

**Anti-Fraud Educational Section - "Negodīgo auto pārdevēju rīki"**
- Section headline: "Negodīgo auto pārdevēju rīki." (Dishonest car sellers' tools)
- Grid of 6 fraud tactics (2 columns desktop)
- Each item: icon/image, title, descriptive text
- Fraud tactics: odometer rollback, paint fraud, hidden damage, ownership fraud, false advertising, document fraud
- Alternating white/light gray backgrounds for visual interest
- Educational tone with icons and text blocks
- Create new AntiFraudSection.tsx component
- Mobile responsive: 2 columns desktop, 1 column mobile

**Three Detailed Service Breakdown Sections**
- Alternating two-column layouts (image left/text right, then reversed)
- Section 7A: Pre-purchase inspection details (image left)
- Section 7B: Car search and delivery service (image right)
- Section 7C: Mobile roadside service (image left)
- Each section: service photo, headline, detailed paragraphs, benefits list, CTA button
- Background alternates: white, light gray, white
- Create new ServiceDetailSection.tsx component with imagePosition prop
- Mobile responsive: stacks to single column

**Instagram Feed Integration**
- Three-column grid showing Instagram posts preview
- Instagram branding with @teg.auto handle
- Clean white card containers for each feed column
- Links to Instagram profile
- Create new InstagramFeedSection.tsx component
- Use static embeds or placeholder for MVP (live API integration out of scope)
- Mobile responsive: 3 columns desktop, 2 tablet, 1 mobile

**Dark Footer with Contact Form**
- Dark charcoal/black background (#1a1a1a approximate)
- Two-column layout: contact form left, brand illustration right
- Form headline: "Sazin atsaites" (Get in touch)
- Form fields: E-pasts (Email), Vārds (Name), Jautājums vai vēlos (Question) textarea
- Submit button: "Nosūtīt" (lime green)
- Brand illustration: character with lime green circular element
- Bottom section: contact info, phone number, company details
- Create new DarkFooterWithForm.tsx component
- Integrate with existing ContactForm.tsx validation logic
- Mobile responsive: stacks to single column

### Services Page (Single Page with 3 Service Sections)

**Page Structure**
- Single "/pakalpojumi" route with three detailed service sections
- Hero section specific to services overview
- Three service detail sections matching homepage pattern
- Each section: Pre-Purchase Inspection, Car Search & Delivery, Mobile Roadside Service
- Use ServiceDetailSection.tsx component consistently
- Ensure smooth navigation between sections with anchor links

**Mobile Roadside Service Detail Section**
- Hero with title: "AUTOSERVISS BRAUC PIE TEVIS"
- Illustration showing road service concept
- Comprehensive bullet list (12+ services from screenshot)
- Services include: diagnostics, battery testing, key programming, brake repair, etc.
- Prominent pricing: "SĀKOT NO 30 EUR*"
- Service area and availability details
- CTA to booking form
- Disclaimer text about pricing and PVN

### Car Purchase Service Page

**Photo Gallery Grid**
- Extensive inspection photo gallery (60+ images from screenshot)
- Masonry or uniform grid layout showcasing inspection thoroughness
- Images show: engine diagnostics, body inspection, documentation, VIN checks, detailed photos
- Professional photo presentation with lightbox capability
- Create new ImageGalleryGrid.tsx component
- Optimized with Next.js Image component for performance
- Lazy loading for large image sets
- Mobile responsive: 4 columns desktop, 3 tablet, 2 mobile

**Service Description Section**
- Detailed explanation of car purchase inspection process
- Visual evidence of thoroughness through photo grid
- Process breakdown and benefits
- Pricing information
- CTA to booking form

### About Page

**Brand Story Section**
- TEG logo and brand icon (car with handshake illustration)
- Headline: "Transporta ekspertu grupa – sava aroda profesionāļu grupa, kam auto ir sirdslieta."
- "Labdien!" greeting establishing personal connection
- Multiple paragraphs explaining independence, anti-fraud positioning, expertise
- Content highlights: independent experts, technical expertise, fraud detection focus
- Personal signature element at bottom
- Clean white background with centered text layout
- Professional typography with adequate spacing

### Contact Page

**Contact Methods Section**
- WhatsApp CTA button prominent at top (green, click-to-chat functionality)
- Headline: "Priecāsimies saņemt Jūsu ziņu."
- Intro text explaining availability and response approach

**Contact Information Sidebar**
- Section title: "Kontakttālrunis"
- Phone: +371 25 201 710 (click-to-call)
- Section title: "Darba laiks"
- Hours: Pr - Se 9:00 - 20:00 (Mon-Sat)

**Social Media Integration Section**
- Title: "Mūs sociālajos tīklos"
- Facebook and Instagram icons (large, clickable)
- Instagram profile preview showing @teg.auto with follower count
- Grid of recent Instagram posts (3-4 posts visible)
- TikTok section with "Open TikTok" button (red branding)

**Customer Testimonials**
- Facebook reviews section
- Two visible testimonials with customer photos
- Facebook branding and interaction buttons (Like, Comment, Share)
- Clean card layout for each testimonial

**Contact Form**
- Fields: Vārds (Name), E-pasts (Email), Jautājums mums (Message)
- Submit button: "Nosūtīt" (lime green)
- Integrate with existing ContactForm.tsx validation
- Left column placement with social content on right

## Visual Design

**planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-2025-11-08-09_11_33.png**
- Full homepage showing all 9 sections in production layout
- Lime green (#a4d65e approximate) primary color throughout navigation and CTAs
- Dark hero overlay with white uppercase text
- Four-column icon grid with illustrated icons
- Three service cards with photos and descriptions
- Six-box inspection categories grid with icons and checklists
- Six-item anti-fraud grid with educational content
- Three alternating image-text service detail sections
- Instagram feed preview with three columns
- Dark footer with contact form and brand illustration

**planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-par-mums-2025-11-08-09_12_04.png**
- About page with centered brand logo and car illustration
- Multi-paragraph brand story with professional typography
- Personal signature element at bottom
- Clean white background with adequate spacing
- Navigation highlighting "Par mums" active state

**planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-kontakti-2025-11-08-09_13_06.png**
- Contact page with WhatsApp CTA at top (green button)
- Two-column layout: contact form left, social/info right
- Contact info sidebar with phone and hours
- Large social media icons (Facebook, Instagram)
- Instagram profile preview with recent posts grid
- TikTok section with "Open TikTok" CTA
- Customer testimonials with Facebook branding
- Clean card layouts throughout

**planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-pakalpojumi-2025-11-08-09_12_47.png**
- Services page with hero title "AUTOSERVISS BRAUC PIE TEVIS"
- Road service illustration with tools and car parts
- Comprehensive bullet list of 12+ services
- Prominent pricing display "SĀKOT NO 30 EUR*"
- Disclaimer text in smaller font
- Clean layout with white background

**planning/visuals/TEMP -- TEG Screens/LV/screencapture-teg-lv-auto-iegade-2025-11-08-09_12_27.png**
- Extensive photo gallery grid (60+ inspection photos)
- Visual proof of inspection thoroughness
- Mixed content: engine photos, documents, VIN checks, body inspection
- Organized grid layout showcasing professionalism
- Demonstrates comprehensive inspection process visually

## Existing Code to Leverage

**Hero.tsx - Hero Section Component**
- Already implements background image with overlay
- Supports title, subtitle, primary/secondary CTAs
- Responsive layout with container
- Needs customization: darker overlay, uppercase title styling, exact copy from original
- Located at `/src/components/hero/Hero.tsx`

**ServiceCard.tsx - Service Display Cards**
- Card structure with icon, title, description, features, price, CTA
- Currently icon-based, needs extension to support photo backgrounds
- Variant support (default, featured)
- Located at `/src/components/services/ServiceCard.tsx`
- Extend to accept optional image prop for photo-based cards

**Header.tsx and Footer.tsx - Navigation Components**
- Complete navigation implementation with locale switcher
- Footer has contact info and social links
- Need to create dark footer variant for homepage
- Navigation items must match: Sākums, Pakalpojumi, Auto iegāde, Par mums, Kontakti
- Located at `/src/components/navigation/`

**ContactForm.tsx - Form with Validation**
- Zod validation schemas
- react-hook-form integration
- Toast notifications with sonner
- Located at `/src/components/forms/ContactForm.tsx`
- Reuse validation logic in new DarkFooterWithForm component

**shadcn/ui Components - Base UI Library**
- Button, Card, Badge, Form, Input, Textarea, Separator, Dialog, Alert
- All styled with brand colors from globals.css
- Consistent across all new components
- Located at `/src/components/ui/`

## Out of Scope
- English translation (Phase 2 - separate spec)
- Russian translation (Phase 3 - separate spec)
- Live Instagram API integration (use static embeds for MVP)
- Advanced testimonials features (basic display only)
- Blog or content management system
- Customer dashboard functionality
- Payment processing integration
- Live chat functionality
- FAQ section (not in original site)
- Video content integration
- Backend changes to booking system (forms already work, just integrate UI)
- Real-time Instagram feed updates (static preview acceptable for launch)
