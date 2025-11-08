# Google Business Profile Setup for Reviews Widget

**Date:** 2025-11-08  
**Purpose:** Guide for finding TEG's Google Business Profile information for reviews integration

## Finding Your Google Business Profile

### Step 1: Locate Your Business Profile

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "Transporta ekspertu grupa" or "TEG Latvia"
3. Click on your business listing
4. You should see:
   - Overall star rating (e.g., ⭐ 4.8)
   - Total number of reviews (e.g., "200+ reviews")
   - Individual reviews below

### Step 2: Get Your Business Profile URL

Your Google Business Profile URL will look like:
```
https://www.google.com/maps/place/TEG+Transporta+Ekspertu+Grupa/@XX.XXXX,XX.XXXX,XXz
```

Or you can find it by:
1. Clicking "Share" on your business profile
2. Copying the link

### Step 3: Find Your Place ID (for API integration)

If you want to use Google My Business API:

1. Open your business profile on Google Maps
2. Look at the URL - it contains a Place ID
3. Or use Google's Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id

## Information Needed for Hero Section

### For Third-Party Widgets (Elfsight, EmbedSocial):

**Required:**
- Google Business Profile URL
- Business name: "Transporta ekspertu grupa" or "TEG"
- Location: Latvia

**Nice to Have:**
- Current rating (e.g., 4.8/5)
- Total review count (e.g., 200+ reviews)
- Sample reviews (to verify widget displays correctly)

### For Custom API Implementation:

**Required:**
- Google Place ID
- Google My Business API credentials
- OAuth 2.0 setup

## Widget Setup Instructions

### Option 1: Elfsight Google Reviews Widget

1. **Sign up:** https://elfsight.com/google-reviews-widget/
2. **Connect Google Business:**
   - Enter your Google Business Profile URL
   - Authorize Elfsight to access reviews
3. **Customize:**
   - Choose layout (carousel, grid, list)
   - Select number of reviews to show (3-5 recommended)
   - Match colors to TEG branding
4. **Get Embed Code:**
   - Copy the widget code
   - We'll integrate it into `GoogleReviewsWidget.tsx`

**Free Tier:** Usually includes basic features, may have branding

### Option 2: EmbedSocial Google Reviews Widget

1. **Sign up:** https://embedsocial.com/google-reviews-widget/
2. **Connect Google Business:**
   - Add your Google Business Profile
   - Sync reviews
3. **Customize:**
   - Layout options
   - Review count
   - Styling
4. **Get Embed Code:**
   - Copy widget code
   - Integrate into component

**Free Tier:** Check current offerings

### Option 3: Custom Google My Business API

**More complex but full control:**

1. **Set up Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create new project
   - Enable "Google My Business API"

2. **Get API Credentials:**
   - Create OAuth 2.0 credentials
   - Set up service account (if needed)

3. **Find Place ID:**
   - Use Place ID Finder tool
   - Or extract from Google Maps URL

4. **Implement API Calls:**
   - Fetch reviews using Places API
   - Display in custom component
   - Cache results (reviews don't change frequently)

**Pros:** No third-party dependency, full control  
**Cons:** More setup time, requires API management

## Recommended Approach for TEG

**MVP (Recommended):** Start with **Elfsight** or **EmbedSocial**
- Fastest setup (15-30 minutes)
- Auto-updates from Google
- Customizable to match design
- Can migrate to custom API later if needed

**Post-MVP:** Consider custom API if:
- Need more control over display
- Want to avoid third-party costs
- Need advanced filtering/sorting

## Next Steps

1. **Find Google Business Profile:**
   - Search on Google Maps
   - Note current rating and review count
   - Copy business profile URL

2. **Choose Widget Provider:**
   - Elfsight (recommended for ease)
   - EmbedSocial (alternative)
   - Custom API (if preferred)

3. **Set Up Widget:**
   - Create account
   - Connect Google Business Profile
   - Customize appearance
   - Get embed code/widget ID

4. **Share Information:**
   - Current rating: _____ / 5
   - Total reviews: _____
   - Widget provider chosen: _____
   - Widget ID/embed code: _____

## Component Integration

Once we have the widget setup, we'll create:

```typescript
// src/components/hero/GoogleReviewsWidget.tsx
export function GoogleReviewsWidget() {
  // Third-party widget embed
  // Or custom API implementation
}
```

This component will be integrated into:
- **Option B:** Social Proof Hero (prominent display)
- **Option D:** Comprehensive Hero (optional, below main content)

## Notes

- Reviews update automatically (usually within 24 hours)
- Widgets typically cache reviews for performance
- Ensure GDPR compliance (reviews are public data)
- Test on mobile devices (reviews should be responsive)

