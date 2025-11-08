# Footer Variant Decision

## Overview
The TEG website uses two footer variants depending on the page context:

## Footer Variants

### 1. DarkFooterWithForm (Homepage & Services)
**Usage:**
- Homepage (`/`)
- Services page (`/pakalpojumi`)

**Features:**
- Dark charcoal/black background (#1a1a1a)
- Two-column layout (desktop):
  - Left: Contact form ("Sazin atsaities")
  - Right: Brand illustration with lime green element
- Mobile: Single column stack
- Form fields: Email, Name, Question textarea
- Submit button: "Nosūtīt" (lime green)
- Bottom section: Contact info, phone, company details

**Component:** `/src/components/navigation/DarkFooterWithForm.tsx`

### 2. Standard Footer (All Other Pages)
**Usage:**
- About page (`/par-mums`)
- Contact page (`/kontakti`)
- Car purchase page (`/auto-iegade`)
- Other pages

**Features:**
- Standard footer styling (lighter background)
- Contact information
- Social media links
- Navigation links
- Business hours

**Component:** `/src/components/navigation/Footer.tsx`

## Implementation Notes

### Backward Compatibility
- Both footer components maintain existing functionality
- Standard Footer remains unchanged for existing pages
- DarkFooterWithForm is new addition for homepage/services

### Form Integration
- DarkFooterWithForm reuses ContactForm.tsx validation logic
- Zod schemas for email, name, message validation
- react-hook-form integration
- Toast notifications via sonner

### Responsive Design
- Desktop: Two-column layout for DarkFooterWithForm
- Mobile: Single column stack
- Maintains accessibility standards (WCAG 2.1 AA)

## Decision Rationale

**Why Two Variants?**
1. Homepage/Services need stronger CTA with integrated contact form
2. Dark variant provides visual contrast and prominence
3. Other pages need cleaner, informational footer
4. Prevents form duplication on Contact page

**Page-Specific Logic:**
```tsx
// In layout or page component
const isDarkFooterPage = pathname === '/' || pathname.startsWith('/pakalpojumi');

{ isDarkFooterPage ? <DarkFooterWithForm /> : <Footer />; }
```
