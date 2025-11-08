# HeroMediaCard Implementation Guide

## Quick Start

You now have **7 design options** documented and **3 implementations** ready to use.

## Available Implementations

### Option 1: 3D Tilt + Parallax Image
**File:** `src/components/hero/HeroMediaCard.option1.tsx`

**Best for:** Modern, premium feel with depth
- 3D tilt effect on mouse move
- Image parallax (moves opposite to tilt)
- Animated gradient border
- Smooth, professional interaction

**To use:**
```typescript
// In Hero.tsx, replace the import:
import { HeroMediaCard } from './HeroMediaCard.option1';
```

---

### Option 2: Magnetic Cursor + Shimmer Effect
**File:** `src/components/hero/HeroMediaCard.option2.tsx`

**Best for:** Elegant, subtle interaction
- Card gently follows cursor (magnetic effect)
- Shimmer sweep animation on hover
- Image zoom on hover
- Rotating gradient border
- Pulsing glow

**To use:**
```typescript
// In Hero.tsx, replace the import:
import { HeroMediaCard } from './HeroMediaCard.option2';
```

---

### Option 3: Scale & Glow + Image Zoom
**File:** `src/components/hero/HeroMediaCard.option3.tsx`

**Best for:** Bold, attention-grabbing
- Card scales up on hover (1.05x)
- Intense glow effect
- Image zooms independently (1.1x)
- Animated bright border
- Deep shadow on hover

**To use:**
```typescript
// In Hero.tsx, replace the import:
import { HeroMediaCard } from './HeroMediaCard.option3';
```

---

## How to Switch Between Options

1. **Open** `src/components/hero/Hero.tsx`
2. **Find** the import statement:
   ```typescript
   import { HeroMediaCard } from './HeroMediaCard';
   ```
3. **Replace** with your chosen option:
   ```typescript
   import { HeroMediaCard } from './HeroMediaCard.option1'; // or .option2, .option3
   ```
4. **Save** and test in your browser

---

## Making Your Choice Permanent

Once you've decided on an option:

1. **Backup** the original (optional):
   ```bash
   cp src/components/hero/HeroMediaCard.tsx src/components/hero/HeroMediaCard.original.tsx
   ```

2. **Replace** the original with your chosen option:
   ```bash
   cp src/components/hero/HeroMediaCard.option1.tsx src/components/hero/HeroMediaCard.tsx
   ```

3. **Update** the import in `Hero.tsx` back to:
   ```typescript
   import { HeroMediaCard } from './HeroMediaCard';
   ```

4. **Clean up** option files (optional):
   ```bash
   rm src/components/hero/HeroMediaCard.option*.tsx
   ```

---

## Customization Tips

### Adjusting Intensity

**Option 1 (3D Tilt):**
- Reduce tilt: Change `15` to `10` or `8` in the rotate calculations
- Reduce parallax: Change `-20` to `-10` in imageOffset calculations
- Reduce scale: Change `1.02` to `1.01`

**Option 2 (Magnetic):**
- Reduce magnetic pull: Change `0.3` to `0.2` or `0.15`
- Adjust shimmer speed: Change `3s` to `2s` or `4s`
- Reduce image zoom: Change `1.05` to `1.03`

**Option 3 (Scale & Glow):**
- Reduce card scale: Change `1.05` to `1.03`
- Reduce image zoom: Change `1.1` to `1.05`
- Reduce glow intensity: Lower opacity values in boxShadow

### Performance Optimization

All options use:
- `will-change-transform` for GPU acceleration
- CSS transforms (hardware accelerated)
- Smooth transitions with `ease-out`
- Minimal JavaScript (only for mouse tracking)

### Accessibility

All options respect:
- `prefers-reduced-motion` (you can add this check)
- Keyboard navigation (no focus traps)
- Screen readers (semantic HTML maintained)

To add reduced motion support:
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Then conditionally disable animations
```

---

## Testing Checklist

- [ ] Hover effect works smoothly
- [ ] Image remains unchanged (same src/alt)
- [ ] Performance is good (no jank)
- [ ] Works on mobile (touch events or reduced effects)
- [ ] Border animations are visible
- [ ] No console errors
- [ ] Works in all target browsers

---

## Need More Options?

See `hero-media-card-interactive-options.md` for:
- Option 4: Particle Sparkles + Hover Lift
- Option 5: Gradient Border Rotation + Image Pan
- Option 6: Glass Morphism + Depth Layers
- Option 7: Minimalist Hover + Subtle Animation

These can be implemented on request!

