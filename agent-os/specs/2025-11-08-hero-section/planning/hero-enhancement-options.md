# Hero Section Enhancement Options

**Date:** 2025-11-08  
**Status:** Research Complete - Options Ready for Review

## Current State Analysis

### Existing Implementation
- **Component:** `src/components/hero/Hero.tsx`
- **Current Elements:**
  - Headline: "Pārbaudi, pirms pērc!" (Check Before You Buy!)
  - Subheadline: Service description
  - Single CTA: "Pasūtīt pārbaudi" (Book Inspection)
  - Background image with dark overlay (70% opacity)
  - Minimal content - feels sparse for service business

### Identified Gaps
1. **No Trust Indicators** - Missing statistics, certifications, or credibility signals
2. **No Social Proof** - No testimonials, reviews, or customer count
3. **Limited Contact Options** - Only one CTA, no phone number prominence
4. **No Value Props** - Missing quick differentiators (no travel needed, professional equipment, etc.)
5. **No Urgency/Scarcity** - Missing elements that encourage immediate action
6. **Single CTA** - Only primary action, no secondary options (WhatsApp, Contact)

### Business Context
- **Phone:** +371 25 201 710 (available in copy constants)
- **WhatsApp:** Available via `wa.me/37125201710`
- **Core Values:** Independence, Anti-fraud, Expertise, Transparency
- **Services:** Pre-purchase (€100+), Car Search (€350+), Mobile Service (€30+)
- **Coverage:** All of Europe
- **Multi-language:** LV (primary), EN, RU

## Enhancement Options

### Option A: Trust-Focused Hero

**Focus:** Build credibility through statistics and trust badges

**New Elements:**
- Statistics bar (3-4 metrics):
  - "500+ Inspections" (or actual number)
  - "All of Europe" (coverage)
  - "24h Reports" (turnaround time)
  - "Independent Experts" (differentiator)
- Trust badges (2-3 badges below stats):
  - "Neatkarīgi eksperti" (Independent Experts)
  - "Anti-Fraud Focus" 
  - "Profesionāls aprīkojums" (Professional Equipment)
- Phone number with click-to-call button
- Two CTAs: Primary (Book Inspection) + Secondary (Contact/WhatsApp)
- Quick value props (3-4 bullet points with icons):
  - No travel needed
  - Professional diagnostic equipment
  - Detailed photo reports
  - Expert assessment

**Layout:**
```
[Background Image + Dark Overlay]
  └─ Headline (large, centered)
  └─ Subheadline (centered)
  └─ Statistics Bar (horizontal, 4 items)
  └─ Trust Badges (horizontal, 3 badges)
  └─ Value Props (3-4 bullet points, icons)
  └─ Phone Number (prominent, clickable)
  └─ CTAs (Primary + Secondary, side by side)
```

**Pros:**
- Strong credibility building
- Clear value proposition
- Multiple trust signals
- Professional appearance

**Cons:**
- More content = potential clutter
- Requires accurate statistics
- May feel corporate

**Best For:** Building trust with skeptical customers, emphasizing expertise

---

### Option B: Social Proof Hero

**Focus:** Leverage customer testimonials and reviews

**New Elements:**
- **Google Business Reviews Widget** (embedded):
  - Option 1: Third-party widget (Elfsight, EmbedSocial, SPRYPT)
  - Option 2: Custom implementation using Google My Business API
  - Shows 3-5 recent reviews with ratings
  - Auto-updates from Google Business Profile
- Customer testimonial snippet (1-2 sentences, with name/rating)
- Review rating display:
  - 5-star visual rating
  - "4.8/5 from 200+ reviews" (or actual numbers from Google)
- Instagram feed preview (3 recent posts, small thumbnails)
- Service coverage badge ("Available across Europe")
- Two CTAs: Primary (Book) + Secondary (WhatsApp)
- Phone number with WhatsApp icon

**Layout:**
```
[Background Image + Dark Overlay]
  └─ Headline (large, centered)
  └─ Subheadline (centered)
  └─ Testimonial Quote (centered, highlighted)
  └─ Star Rating + Review Count
  └─ Instagram Preview (3 thumbnails, horizontal)
  └─ Coverage Badge
  └─ Phone Number + WhatsApp CTA
  └─ Primary CTA (Book Inspection)
```

**Pros:**
- Strong social proof
- Visual engagement (Instagram)
- Builds trust through others' experiences
- Modern, relatable

**Cons:**
- Requires real testimonials/reviews
- Instagram API integration needed
- Google Reviews widget setup required (third-party or API)
- May feel less professional
- Testimonials need to be authentic
- Third-party widgets may have costs (some free tiers available)

**Best For:** Converting visitors who value peer recommendations

---

### Option C: Value Proposition Hero

**Focus:** Highlight unique selling points and service benefits

**New Elements:**
- Three service quick links (cards or badges):
  - Pre-Purchase Inspection (€100+)
  - Car Search & Delivery (€350+)
  - Mobile Service (€30+)
- "Why Choose TEG" section (3-4 key differentiators):
  - Independent (not dealer-affiliated)
  - Anti-fraud expertise
  - No travel required
  - Professional equipment
- Trust indicators:
  - Years in business (if available)
  - Certifications (if applicable)
- Phone number with WhatsApp CTA
- Primary CTA + Secondary "Learn More" link

**Layout:**
```
[Background Image + Dark Overlay]
  └─ Headline (large, centered)
  └─ Subheadline (centered)
  └─ Service Quick Links (3 cards, horizontal)
  └─ "Why Choose TEG" (3-4 items, icons)
  └─ Trust Indicators (badges)
  └─ Phone Number + WhatsApp
  └─ CTAs (Primary + Secondary)
```

**Pros:**
- Clear service overview
- Emphasizes unique benefits
- Helps users understand offerings quickly
- Good for first-time visitors

**Cons:**
- May duplicate service cards section below
- Could feel redundant
- Less focused on conversion

**Best For:** Educating visitors about services, first-time visitors

---

### Option D: Comprehensive Hero (RECOMMENDED)

**Focus:** Combines best elements from all options - balanced approach

**New Elements:**
- Headline + Subheadline (existing, keep)
- Statistics/metrics bar (3-4 key numbers):
  - "500+ Inspections" (or actual)
  - "All of Europe" (coverage)
  - "24h Reports" (turnaround)
  - "Independent Experts" (differentiator)
- Trust badges (2-3 badges):
  - "Neatkarīgi eksperti" (Independent Experts)
  - "Anti-Fraud Focus"
  - "Profesionāls aprīkojums" (Professional Equipment)
- Quick value props (3-4 bullet points with icons):
  - No travel needed (icon: Home/MapPin)
  - Professional equipment (icon: Wrench/Tool)
  - Detailed reports (icon: FileText/Clipboard)
  - Expert assessment (icon: CheckCircle/Star)
- Phone number with click-to-call (prominent)
- Two CTAs: Primary (Book) + Secondary (Contact/WhatsApp)
- Optional: Single testimonial quote or review rating (if available)

**Layout:**
```
[Background Image + Dark Overlay]
  └─ Headline (large, centered, uppercase)
  └─ Subheadline (centered, max-w-2xl)
  └─ Statistics Bar (4 items, horizontal, responsive grid)
  └─ Trust Badges (3 badges, horizontal, below stats)
  └─ Value Props (4 items, 2x2 grid on desktop, vertical on mobile)
  └─ Phone Number (large, clickable, with Phone icon)
  └─ CTAs (Primary + Secondary, side by side on desktop, stacked on mobile)
  └─ [Optional] Testimonial Quote (small, below CTAs)
```

**Visual Hierarchy:**
1. Headline (largest, most prominent)
2. Subheadline (supporting context)
3. Statistics (quick credibility)
4. Trust badges (reinforce expertise)
5. Value props (benefits)
6. Phone number (easy contact)
7. CTAs (primary action)
8. Testimonial (optional social proof)

**Pros:**
- Balanced approach - trust + value + action
- Multiple conversion paths
- Comprehensive information
- Professional yet approachable
- Works for various visitor types

**Cons:**
- More content to manage
- Requires accurate statistics
- May need responsive design refinement
- More complex implementation

**Best For:** Maximum conversion potential, diverse visitor types

---

## Component Requirements

### Google Business Reviews Integration

**Embedding Options:**

1. **Third-Party Widgets (Easiest):**
   - **Elfsight** - Google Reviews widget with customization
   - **EmbedSocial** - Multiple layout options
   - **SPRYPT** - Healthcare-focused, HIPAA-conscious
   - Pros: Easy setup, auto-syncs, customizable
   - Cons: May have costs, external dependency

2. **Google Maps Embed (Basic):**
   - Shows location + overall rating
   - Doesn't show individual reviews
   - Pros: Official, free, simple
   - Cons: Limited functionality

3. **Google My Business API (Advanced):**
   - Custom implementation
   - Full control over display
   - Pros: No third-party dependency, fully customizable
   - Cons: Requires API setup, more development time

**Recommendation:** Start with third-party widget (Elfsight or EmbedSocial) for MVP, migrate to custom API if needed post-MVP.

### New Components Needed

1. **StatisticsBar** (`src/components/hero/StatisticsBar.tsx`)
   - Displays 3-4 statistics horizontally
   - Responsive: stacks on mobile
   - Uses Badge or custom styling
   - Icons optional

2. **TrustBadges** (`src/components/hero/TrustBadges.tsx`)
   - Displays 2-3 trust badges
   - Uses Badge component from ShadCN
   - Horizontal layout, responsive

3. **ValueProps** (`src/components/hero/ValueProps.tsx`)
   - Displays 3-4 value propositions
   - Icons from lucide-react
   - Grid layout (2x2 on desktop, vertical on mobile)

4. **PhoneCTA** (`src/components/hero/PhoneCTA.tsx`)
   - Prominent phone number display
   - Click-to-call functionality
   - Optional WhatsApp link
   - Uses Phone icon from lucide-react

5. **TestimonialQuote** (`src/components/hero/TestimonialQuote.tsx`) - Optional
   - Single testimonial display
   - Name, rating, quote
   - Subtle styling

6. **GoogleReviewsWidget** (`src/components/hero/GoogleReviewsWidget.tsx`) - Optional (for Option B)
   - Embeds third-party widget or custom API implementation
   - Displays 3-5 recent Google reviews
   - Responsive layout
   - Auto-updates from Google Business Profile

### Modified Components

1. **Hero.tsx** - Enhanced to accept new props:
   - `statistics?: Array<{ label: string; value: string; icon?: ReactNode }>`
   - `trustBadges?: Array<{ text: string; icon?: ReactNode }>`
   - `valueProps?: Array<{ title: string; description: string; icon: ReactNode }>`
   - `phoneNumber?: { display: string; href: string; whatsapp?: string }`
   - `testimonial?: { quote: string; author: string; rating?: number }`
   - `googleReviews?: { enabled: boolean; widgetId?: string; apiKey?: string }` - Optional for Option B

## Implementation Considerations

### Content Requirements

**Statistics (verify with client):**
- Actual inspection count
- Actual coverage area
- Actual report turnaround time
- Years in business (if applicable)

**Trust Badges:**
- Text must be accurate
- Multi-language support needed
- Icons should be consistent

**Value Props:**
- Must align with actual service benefits
- Multi-language copy needed
- Icons should be meaningful

**Phone Number:**
- Format: +371 25 201 710 (consistent across site)
- WhatsApp: wa.me/37125201710
- Click-to-call: tel:+37125201710

### Technical Requirements

- **Responsive Design:** Mobile-first approach
- **Performance:** Optimize for LCP <2.5s
- **Accessibility:** WCAG 2.1 AA compliance
- **Multi-language:** Support LV, EN, RU
- **Dark Overlay:** Maintain readability (70% opacity)
- **Icons:** Use lucide-react for consistency

### Design Constraints

- Must work with existing background image
- Maintain visual hierarchy
- Don't overcrowd - balance content density
- Keep primary CTA prominent
- Ensure text readability with dark overlay
- Mobile: Stack elements vertically
- Desktop: Horizontal layouts where appropriate

## Recommended Next Steps

1. **User Selection:** Present options to user, get feedback
2. **Content Verification:** Confirm statistics and testimonials with client
3. **Design Refinement:** Create detailed mockups for chosen option
4. **Implementation:** Build components following chosen option
5. **Testing:** Test across devices, languages, and performance metrics
6. **Iteration:** Refine based on user feedback and analytics

## Files to Create/Modify

### New Files:
- `src/components/hero/StatisticsBar.tsx`
- `src/components/hero/TrustBadges.tsx`
- `src/components/hero/ValueProps.tsx`
- `src/components/hero/PhoneCTA.tsx`
- `src/components/hero/TestimonialQuote.tsx` (optional)

### Modified Files:
- `src/components/hero/Hero.tsx` - Enhanced with new props and sub-components
- `src/lib/constants/copy.ts` - Add hero section copy for new elements
- `src/app/[locale]/page.tsx` - Update Hero component usage with new props

### Copy Constants Needed:
- Statistics labels (LV, EN, RU)
- Trust badge text (LV, EN, RU)
- Value props titles/descriptions (LV, EN, RU)
- Phone CTA text (LV, EN, RU)
- Testimonial (if using Option D with testimonial)

