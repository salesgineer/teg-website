# /design-review Slash Command

Trigger on-demand design reviews for the current branch or specific URLs.

## Command Syntax

```
/design-review [options]
```

## Options

- `--url <url>`: Specific URL to review (defaults to localhost:7777)
- `--depth <level>`: Review depth: quick | standard | comprehensive (default: standard)
- `--compare`: Compare with main branch
- `--focus <area>`: Focus area: accessibility | performance | visual | all (default: all)

## Workflow

### 1. Analyze Current Changes

```bash
# Get current branch
git branch --show-current

# Get modified files
git diff --name-only HEAD~1

# Filter UI-related files
git diff --name-only HEAD~1 | grep -E '\.(tsx?|jsx?|css|scss|svg)$'

# Get detailed diff for UI files
git diff HEAD~1 -- '*.tsx' '*.ts' '*.css' '*.scss'
```

### 2. Start Development Server

```bash
# Check if server is running
curl -s -o /dev/null -w "%{http_code}" http://localhost:7777 || npm run dev &

# Wait for server
npx wait-on http://localhost:7777 -t 60000
```

### 3. Run Design Review

```javascript
// Initialize Playwright
await mcp__playwright__browser_navigate({ url: 'http://localhost:7777' });

// Perform multi-phase review
const review = {
  visual: await checkVisualConsistency(),
  accessibility: await checkAccessibility(),
  responsive: await checkResponsiveness(),
  performance: await checkPerformance(),
  interactions: await checkInteractions(),
  content: await checkContent(),
};

// Generate report
const report = generateReport(review);
```

### 4. Generate Report

#### Quick Review Output

```markdown
## 🎨 Quick Design Review

**Branch**: feature/new-component
**Files Changed**: 5
**Review Time**: 2025-01-17 10:30

### ✅ Passed Checks (8/10)

- Visual consistency maintained
- Color contrast meets WCAG AA
- Responsive breakpoints work
- No console errors

### ⚠️ Issues Found (2)

1. **[High]** Missing alt text on hero image
2. **[Medium]** Button focus state needs improvement

### 📸 Screenshots

[Attached: desktop.png, mobile.png]
```

#### Comprehensive Review Output

```markdown
## 🎨 Comprehensive Design Review Report

**Review ID**: DR-2025-01-17-001
**Environment**: Development
**Browser**: Chrome 120
**Viewport**: 1440x900

### 📊 Summary Score: 85/100

#### Visual Design (18/20)

- ✅ Typography hierarchy
- ✅ Color consistency
- ✅ Spacing alignment
- ⚠️ Shadow inconsistency on cards
- ❌ Missing hover states

#### Accessibility (22/25)

- ✅ Keyboard navigation
- ✅ Screen reader labels
- ✅ Color contrast (4.5:1)
- ⚠️ Missing skip links
- ❌ Form validation not announced

#### Responsive Design (19/20)

- ✅ Mobile layout (375px)
- ✅ Tablet layout (768px)
- ✅ Desktop layout (1440px)
- ✅ Touch targets (>44px)
- ⚠️ Horizontal scroll at 360px

#### Performance (15/20)

- ✅ First Paint: 1.2s
- ⚠️ Time to Interactive: 3.8s
- ❌ Bundle size: 450KB (target: 300KB)
- ✅ Image optimization
- ✅ Code splitting

#### Content Quality (11/15)

- ✅ Clear headings
- ✅ Descriptive CTAs
- ⚠️ Lorem ipsum detected
- ⚠️ Missing error messages
- ❌ Inconsistent capitalization

### 🚨 Critical Issues

1. **Accessibility**: Form inputs missing labels
   - Location: /components/ContactForm.tsx:45
   - Fix: Add aria-label or label element

2. **Performance**: Large unoptimized image
   - Location: /public/hero-bg.jpg (2.5MB)
   - Fix: Convert to WebP, resize to 1920px max

### 📝 Recommendations

1. Implement consistent shadow system
2. Add loading skeletons for async content
3. Improve error message clarity
4. Add breadcrumb navigation
5. Optimize bundle with tree-shaking

### 📸 Visual Evidence

- [Full page screenshot](./screenshots/full-page.png)
- [Responsive views](./screenshots/responsive-grid.png)
- [Accessibility audit](./screenshots/a11y-audit.png)
- [Performance metrics](./screenshots/performance.png)

### 🔗 References

- [Design Principles](/context/design-principles.md)
- [Style Guide](/context/style-guide.md)
- [Component Library](http://localhost:6006)
```

## Integration with Git Workflow

### Pre-commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run quick design review on staged files
if git diff --cached --name-only | grep -qE '\.(tsx?|jsx?|css|scss)$'; then
  echo "Running design review on staged UI changes..."
  npm run design:review:quick
fi
```

### PR Template Addition

```markdown
## Design Review Checklist

- [ ] Run `/design-review` command
- [ ] Address all [Blocker] issues
- [ ] Review [High-Priority] items
- [ ] Screenshots attached
- [ ] Accessibility tested
```

## Automation Triggers

### On PR Creation

```yaml
on:
  pull_request:
    types: [opened]
```

### On UI File Changes

```yaml
paths:
  - 'src/**/*.tsx'
  - 'styles/**/*.css'
  - 'components/**/*'
```

### Manual Trigger

```yaml
workflow_dispatch:
  inputs:
    review_type:
      type: choice
      options:
        - quick
        - standard
        - comprehensive
```

## Error Handling

### Server Not Running

```javascript
if (!serverRunning) {
  console.log('Starting development server...');
  spawn('npm', ['run', 'dev'], { detached: true });
  await waitFor('http://localhost:7777', { timeout: 60000 });
}
```

### Review Failures

```javascript
try {
  const review = await runDesignReview();
  return formatReport(review);
} catch (error) {
  return {
    status: "error",
    message: "Design review failed",
    error: error.message,
    fallback: "Please run manual review",
  };
}
```

## Best Practices

1. **Run before PR creation** to catch issues early
2. **Use comprehensive mode** for major features
3. **Focus on changed components** to save time
4. **Document design decisions** in PR description
5. **Link to design mockups** for comparison
6. **Include screenshots** in PR comments
7. **Address blockers first** before other issues

## Example Usage

```bash
# Quick review of current changes
/design-review

# Comprehensive review with focus
/design-review --depth comprehensive --focus accessibility

# Review specific URL
/design-review --url https://preview.example.com

# Compare with main branch
/design-review --compare

# Review with all options
/design-review --url http://localhost:3000 --depth comprehensive --focus all --compare
```
