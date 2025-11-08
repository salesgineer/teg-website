# Interactive Inspection Dashboard Design

**Date:** 2025-11-08  
**Purpose:** Design specification for interactive parameter dashboard in hero section

## Design Goals

1. **Demonstrate Technical Expertise** - Show deep knowledge of inspection parameters
2. **Educate Users** - Help users understand what should be checked
3. **Engage Visitors** - Interactive element encourages exploration
4. **Build Trust** - Professional presentation of technical capabilities
5. **Convert** - Drive users to book inspection after seeing complexity

## Dashboard Concept

### Layout Options

#### Option A: Compact Grid (Recommended)
- **Layout:** 2x5 grid (2 columns, 5 rows) showing 10 parameters
- **Size:** Compact cards, each ~120px height
- **Position:** Below headline/subheadline, above CTAs
- **Mobile:** Stacks to 1 column

#### Option B: Carousel/Slider
- **Layout:** Horizontal scroll showing 3-4 parameters at a time
- **Size:** Larger cards, more detail visible
- **Position:** Separate section below hero
- **Mobile:** Touch swipe navigation

#### Option C: Expandable Panel
- **Layout:** Collapsed by default, expands on click/hover
- **Size:** Compact when closed, full detail when open
- **Position:** Below headline
- **Mobile:** Full screen overlay when expanded

### Recommended: Option A (Compact Grid)

**Why:**
- Doesn't overwhelm hero section
- Shows all parameters at once (impressive)
- Quick to scan and understand
- Works well on mobile
- Maintains visual hierarchy

## Component Structure

### Parameter Card Design

Each parameter card displays:
1. **Icon** - Visual identifier (left side)
2. **Parameter Name** - Short label (e.g., "Paint Thickness")
3. **Current Value** - Editable input field (center)
4. **Unit** - Measurement unit (e.g., "microns", "PSI")
5. **Status Indicator** - Color-coded bar/icon (right side)
6. **Range Display** - Visual min/max/ideal range (below)

### Visual Elements

**Status Colors:**
- **Green:** Excellent/Good (within normal range)
- **Yellow:** Warning (outside ideal but acceptable)
- **Red:** Critical (needs attention)

**Interactive Elements:**
- Input field (editable)
- Slider (alternative input method)
- Tooltip (hover for explanation)
- Info icon (click for details)

## User Interaction Flow

1. **Initial State:** Dashboard shows example/default values
2. **User Clicks Parameter:** Card highlights, input becomes active
3. **User Enters Value:** Real-time validation and status update
4. **Status Updates:** Color, icon, and progress bar change instantly
5. **Tooltip/Hover:** Shows explanation and ideal range
6. **Info Click:** Opens detailed explanation modal/sidebar

## Technical Specifications

### Component: `InspectionParametersDashboard`

**Props:**
```typescript
type Parameter = {
  id: string;
  name: string;
  unit: string;
  icon: ReactNode;
  defaultValue: number;
  idealRange: { min: number; max: number };
  warningRange?: { min: number; max: number };
  criticalRange?: { min: number; max: number };
  description: string;
  tooltip: string;
};

type DashboardProps = {
  parameters: Parameter[];
  editable?: boolean; // Allow user to change values
  showDetails?: boolean; // Show detailed info
  compact?: boolean; // Compact vs expanded view
};
```

### State Management

- **Local State:** Current values for each parameter
- **Validation:** Real-time checking against ranges
- **Status Calculation:** Determine green/yellow/red for each
- **Overall Score:** Optional - calculate overall vehicle health score

### Visual Design

**Card Style:**
- Background: Semi-transparent white/glass effect
- Border: Subtle border, colored based on status
- Padding: Comfortable spacing
- Typography: Clear, readable labels and values

**Status Indicators:**
- Progress bar showing value within range
- Color-coded background/border
- Icon (checkmark/warning/error)

**Input Fields:**
- Number input with unit label
- Slider alternative (for mobile)
- Real-time validation feedback

## Responsive Design

### Desktop (>768px)
- 2-column grid
- Larger cards with more detail
- Hover effects for interactivity
- Tooltips on hover

### Mobile (<768px)
- 1-column stack
- Compact cards
- Touch-friendly inputs
- Tap to expand details

## Performance Considerations

- **Lazy Loading:** Load dashboard after hero content
- **Debounce Inputs:** Prevent excessive re-renders
- **Memoization:** Cache calculations
- **Progressive Enhancement:** Works without JS (static display)

## Accessibility

- **Keyboard Navigation:** Tab through parameters
- **Screen Reader:** ARIA labels and descriptions
- **Color Contrast:** WCAG AA compliant
- **Focus Indicators:** Clear focus states

## Example Interaction

1. User sees dashboard with default values
2. User clicks "Paint Thickness" card
3. Input field becomes active, shows current value: "120 microns"
4. User changes to "250 microns"
5. Status changes from green to yellow
6. Tooltip shows: "Above normal range - possible repaint detected"
7. Progress bar updates to show value outside ideal range
8. User can click info icon for full explanation

## Integration with Hero Section

**Position:** Below headline/subheadline, above statistics/trust badges

**Styling:** 
- Matches hero color scheme (white text on dark overlay)
- Semi-transparent cards for glass effect
- Subtle animations on interaction

**Size:** 
- Max width: 1200px (container)
- Height: ~600px (10 parameters in 2x5 grid)
- Mobile: Full width, scrollable if needed

## Next Steps

1. Create component mockup/wireframe
2. Implement base component structure
3. Add interactivity and state management
4. Style to match hero section
5. Test responsive behavior
6. Add accessibility features

