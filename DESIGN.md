# Goswick Ranch HOA Website — Design System

## Design Direction

Rural Arizona ranch living. Gated, private, mountain setting. Not corporate. Not cookie-cutter suburban HOA. The palette and typography should feel like the Bradshaw Mountains — earthy, warm, calm.

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --color-bg:           #FAF8F4;   /* warm off-white — page background */
  --color-bg-alt:       #F0EDE6;   /* slightly darker — card/section backgrounds */
  --color-bg-dark:      #2A2016;   /* near-black brown — footer */

  /* Brand */
  --color-primary:      #5C3D1E;   /* dark saddle brown — nav, headings */
  --color-accent:       #C4602A;   /* adobe rust/terra cotta — buttons, links, highlights */
  --color-accent-dark:  #9E4A1E;   /* darker rust — hover states */

  /* Supporting */
  --color-sage:         #6B7C5C;   /* sage green — secondary accent, icons */
  --color-sand:         #B8A88A;   /* warm tan — borders, dividers */

  /* Text */
  --color-text:         #1C1408;   /* near-black — body copy */
  --color-text-muted:   #6B5E4C;   /* medium brown — captions, metadata */
  --color-text-light:   #FAF8F4;   /* for text on dark backgrounds */

  /* Utility */
  --color-border:       #D4C9B8;
  --color-focus:        #C4602A;
}
```

---

## Typography

```css
:root {
  --font-heading: 'Merriweather', Georgia, serif;   /* warm, traditional — headings */
  --font-body:    'Source Sans 3', 'Segoe UI', sans-serif;  /* clean — body copy */
  --font-mono:    'Courier New', monospace;          /* legal/document references */
}
```

Google Fonts import (add to `<head>`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

### Type Scale

```css
:root {
  --text-xs:   0.75rem;   /* 12px — legal fine print */
  --text-sm:   0.875rem;  /* 14px — captions, metadata */
  --text-base: 1rem;      /* 16px — body */
  --text-lg:   1.125rem;  /* 18px — lead paragraphs */
  --text-xl:   1.25rem;   /* 20px — section intros */
  --text-2xl:  1.5rem;    /* 24px — H3 */
  --text-3xl:  1.875rem;  /* 30px — H2 */
  --text-4xl:  2.25rem;   /* 36px — H1 on interior pages */
  --text-hero: clamp(2rem, 5vw, 3.5rem);  /* H1 on home hero */
}
```

---

## Spacing

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  --max-width: 1140px;    /* site container max width */
  --content-width: 780px; /* prose/content column max width */
}
```

---

## Layout

### Page Shell

```
┌─────────────────────────────────────────┐
│  HEADER / NAV (sticky, dark brown)       │
│  Logo left · Nav right (5 items)         │
├─────────────────────────────────────────┤
│  HERO (home only)                        │
│  Full-width landscape photo              │
│  Overlay: community name + tagline       │
├─────────────────────────────────────────┤
│  PAGE CONTENT                            │
│  max-width: 1140px, centered, padded     │
├─────────────────────────────────────────┤
│  FOOTER (dark background)                │
│  Col 1: logo + tagline                   │
│  Col 2: quick links                      │
│  Col 3: emergency numbers                │
│  Bottom bar: copyright + legal notice    │
└─────────────────────────────────────────┘
```

### Grid

Use CSS Grid for page layout, Flexbox for component-level alignment.

```css
.page-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

.prose {
  max-width: var(--content-width);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}
```

---

## Navigation

- Sticky header, `background: var(--color-primary)`, text `var(--color-text-light)`
- Logo/site name left, nav links right
- Active page link: rust accent underline or background
- Mobile: hamburger button at right, nav collapses to full-width dropdown

```
Desktop:  [GOSWICK RANCH HOA]  Home  About  HOA Info  Resources  Contact
Mobile:   [GOSWICK RANCH HOA]  ☰
          (dropdown)
          Home
          About
          HOA Info
          Resources
          Contact
```

---

## Components

### Hero (Home only)
- Full-viewport-width image (Bradshaw Mountains / Big Bug Creek / aerial of community)
- Dark gradient overlay (bottom-to-top, 60% opacity)
- Centered text: H1 community name + one-line tagline
- CTA button: "View HOA Documents" → `/hoa/documents/`

```css
.hero {
  position: relative;
  height: min(70vh, 600px);
  background: url('/img/hero.jpg') center/cover no-repeat;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(42,32,22,0.85) 0%, rgba(42,32,22,0.2) 100%);
}
```

### Cards (for resource/link lists)
- White background on `--color-bg-alt`
- `border-left: 4px solid var(--color-accent)`
- `border-radius: 4px`
- `padding: var(--space-6)`
- Hover: slight lift (`box-shadow`)

### Buttons

```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  border-radius: 3px;
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
}
.btn-primary:hover { background: var(--color-accent-dark); }

.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}
```

### Document/PDF Links

```html
<a class="doc-link" href="/docs/ccrrs.pdf">
  <span class="doc-icon">📄</span>
  CC&amp;Rs — Goswick Ranch HOA
  <span class="doc-meta">(PDF · awaiting board)</span>
</a>
```

Use a distinct style — larger click target, doc icon, file size if known.

---

## Images

- **Hero**: 1600×900px minimum, Bradshaw Mountains or aerial of subdivision (need from board or licensed stock)
- **Gallery**: 800×600px thumbnails, lightbox on click
- **All images**: include `alt` text, use `loading="lazy"` except hero
- **Placeholder**: use a CSS gradient or `https://placehold.co/1600x900/5C3D1E/FAF8F4?text=Goswick+Ranch` until real photos arrive

---

## Accessibility

- All color combinations must meet WCAG AA (4.5:1 contrast for body text)
- Nav must be keyboard-navigable
- Skip-to-content link at top of every page
- All form fields have `<label>` elements
- PDF links indicate file type and size

---

## Legal Notice (Footer)

Every page footer must include:

```
© [YEAR] Goswick Ranch Homeowners Association. All rights reserved.
This website is maintained by the Goswick Ranch HOA Board of Directors.
For questions or corrections, contact [board email].
```
