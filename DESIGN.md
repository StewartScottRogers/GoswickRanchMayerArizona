# Goswick Ranch HOA Website — Design System

> **Path prefix rule:** All internal `href` and `src` values in HTML must start with `/GoswickRanchMayerArizona/`. See BUILD.md for details.

## Design Direction

Rural Arizona ranch living — gated, private, mountain. The site serves two distinct audiences:

1. **Residents** — need documents, governance, emergency contacts, utilities, board access
2. **Prospective buyers & real estate agents** — need lifestyle, value story, community character, financial facts

The palette and typography should feel like the Bradshaw Mountains: earthy, warm, unhurried. Not corporate. Not cookie-cutter suburban HOA. Not a Phoenix luxury development. Authentic.

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --color-bg:           #FAF8F4;   /* warm off-white — page background */
  --color-bg-alt:       #F0EDE6;   /* slightly darker — card/section backgrounds */
  --color-bg-dark:      #2A2016;   /* near-black brown — footer, hero overlay */

  /* Brand */
  --color-primary:      #5C3D1E;   /* dark saddle brown — nav, headings */
  --color-accent:       #C4602A;   /* adobe rust/terra cotta — buttons, links, highlights */
  --color-accent-dark:  #9E4A1E;   /* darker rust — hover states */

  /* Supporting */
  --color-sage:         #6B7C5C;   /* sage green — secondary accent, nature icons */
  --color-sand:         #B8A88A;   /* warm tan — borders, dividers */
  --color-sky:          #4A6FA5;   /* muted blue — link color on light bg (accessible) */

  /* Text */
  --color-text:         #1C1408;   /* near-black — body copy */
  --color-text-muted:   #6B5E4C;   /* medium brown — captions, metadata */
  --color-text-light:   #FAF8F4;   /* for text on dark backgrounds */

  /* Utility */
  --color-border:       #D4C9B8;
  --color-focus:        #C4602A;
  --color-warning:      #8B2500;   /* dark red — safety warnings (wildfire, arsenic) */
}
```

---

## Typography

```css
:root {
  --font-heading: 'Merriweather', Georgia, serif;          /* warm, traditional — headings */
  --font-body:    'Source Sans 3', 'Segoe UI', sans-serif; /* clean, readable — body copy */
  --font-mono:    'Courier New', monospace;                 /* legal/document references */
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

  --max-width:     1140px;  /* site container max width */
  --content-width: 780px;   /* prose/content column max width */
}
```

---

## Layout

### Page Shell

```
┌─────────────────────────────────────────────────────────┐
│  HEADER / NAV (sticky, dark brown)                       │
│  Logo left · Nav right (6–7 items, compact on mobile)   │
├─────────────────────────────────────────────────────────┤
│  HERO (home + Life Here + For Buyers)                    │
│  Full-width landscape photo                              │
│  Overlay: headline + tagline + CTA button(s)             │
├─────────────────────────────────────────────────────────┤
│  PAGE CONTENT                                            │
│  max-width: 1140px, centered, padded                     │
│  Interior pages: H1 + intro in a page-header band        │
├─────────────────────────────────────────────────────────┤
│  FOOTER (dark background)                                │
│  Col 1: logo + tagline                                   │
│  Col 2: quick links                                      │
│  Col 3: emergency numbers                                │
│  Bottom bar: copyright + legal notice                    │
└─────────────────────────────────────────────────────────┘
```

### Grid

```css
.page-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

.prose { max-width: var(--content-width); }

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}
@media (max-width: 720px) { .two-col { grid-template-columns: 1fr; } }
```

---

## Navigation

- Sticky header, `background: var(--color-primary)`, text `var(--color-text-light)`
- Logo/site name left, nav links right
- Active page link: rust accent underline
- Mobile: hamburger button, nav collapses to full-width dropdown
- "For Buyers" should visually stand out slightly (subtle rust border or weight) to catch agent eyes

```
Desktop:  [GOSWICK RANCH]  Home  About  Life Here  HOA Info  For Buyers  Resources  Contact
Mobile:   [GOSWICK RANCH]  ☰
          (dropdown — same 7 items)
```

---

## Components

### Hero (home, Life Here, For Buyers)
- Full-viewport-width image (Bradshaw Mountains / Big Bug Creek / aerial of community)
- Dark gradient overlay (bottom-to-top, ~70% at bottom → 20% at top)
- Centered or left-aligned text: H1 headline + one-line tagline
- Home CTA: two buttons side by side — "I'm a Resident" (outline) + "Thinking of Buying?" (filled)
- Life Here / For Buyers CTAs: single relevant CTA

```css
.hero {
  position: relative;
  height: min(75vh, 650px);
  background: url('/GoswickRanchMayerArizona/img/hero.jpg') center/cover no-repeat;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(42,32,22,0.88) 0%, rgba(42,32,22,0.18) 100%);
}
```

### Stats Bar (new — home + For Buyers page)
A horizontal strip of 4–6 key numbers, dark background, rust accent digits.

```
| $216/yr | 9-acre min | 57% | ~$476/yr | 4,400–6,000 ft | 27 mi |
  HOA fee   lot min    5-yr   property   elevation       to Prescott
                       apprec  taxes
```

```css
.stats-bar {
  background: var(--color-bg-dark);
  color: var(--color-text-light);
  display: flex; justify-content: space-around; flex-wrap: wrap;
  padding: var(--space-8) var(--space-6);
}
.stat-value {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  color: var(--color-accent);
}
.stat-label { font-size: var(--text-sm); opacity: 0.75; }
```

### Dual Audience CTA (home page)
Two side-by-side cards, each linking to the relevant hub:

```
┌──────────────────┐  ┌──────────────────┐
│  I'm a Resident  │  │ Thinking of      │
│                  │  │ Buying Here?     │
│  Docs · HOA ·   │  │ For Buyers ·     │
│  Emergency ·    │  │ Lifestyle ·      │
│  Resources       │  │ Value Story      │
│  [Go to HOA]     │  │  [Explore]       │
└──────────────────┘  └──────────────────┘
```

### Cards (for resource/link lists)
- Background: `var(--color-bg-alt)` or white
- `border-left: 4px solid var(--color-accent)`
- `border-radius: 4px`
- `padding: var(--space-6)`
- Hover: slight lift (`box-shadow: 0 4px 16px rgba(92,61,30,0.12)`)

### Comparison Table (For Buyers page)
Styled table comparing Arizona vs. California/national averages:
- `th` background: `var(--color-primary)`, white text
- Alternating rows: `var(--color-bg)` / `var(--color-bg-alt)`
- Arizona column highlighted with sage green or rust accent

### Warning / Safety Callout
```css
.callout-warning {
  border-left: 4px solid var(--color-warning);
  background: #FFF3F0;
  padding: var(--space-4) var(--space-6);
  border-radius: 4px;
}
```
Use for: arsenic water testing warning, wildfire/evacuation info, PSPS power shutoff notice.

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

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 3px;
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
}
.btn-outline:hover { background: rgba(255,255,255,0.12); }

.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}
```

### Document/PDF Links

```html
<a class="doc-link" href="/GoswickRanchMayerArizona/docs/ccrrs.pdf">
  <span class="doc-icon">📄</span>
  CC&amp;Rs — Goswick Ranch HOA
  <span class="doc-meta">(PDF)</span>
</a>
```

Use a distinct style: larger click target, doc icon, file size if known.

### Section Divider (nature-inspired)
A thin horizontal rule using the sand color, or a small sage icon between major page sections.

```css
.section-divider {
  border: none;
  border-top: 2px solid var(--color-sand);
  margin: var(--space-12) 0;
}
```

---

## Images

- **Hero (home):** 1600×900px minimum — Bradshaw Mountains vista, aerial of community, or Big Bug Creek canyon. Placeholder: CSS gradient in `--color-primary` until real photos arrive.
- **Life Here page hero:** wildflower meadow, wildlife, or dark sky photo
- **For Buyers page:** community entrance gate, or mountain view with homes visible
- **Gallery thumbnails:** 800×600px, lightbox on click (pure CSS `<dialog>` — no jQuery)
- **All images:** `alt` text required; `loading="lazy"` on all except hero
- **Placeholder:** `https://placehold.co/1600x900/5C3D1E/FAF8F4?text=Goswick+Ranch`

---

## Page-Header Band (interior pages)
Interior pages use a narrow header band instead of a full hero:

```css
.page-header {
  background: var(--color-primary);
  color: var(--color-text-light);
  padding: var(--space-12) var(--space-6);
  text-align: center;
}
.page-header h1 { font-size: var(--text-4xl); margin-bottom: var(--space-2); }
.page-header p  { opacity: 0.8; font-size: var(--text-lg); }
```

---

## Accessibility

- All color combinations must meet WCAG AA (4.5:1 contrast for body text)
- Nav must be keyboard-navigable; focus ring matches `--color-focus`
- Skip-to-content link at top of every page
- All form fields have `<label>` elements
- PDF links indicate file type
- Minimum touch target size: 44×44px on mobile

---

## Legal Notice (Footer)

Every page footer must include:

```
© [YEAR] Goswick Ranch Homeowners Association. All rights reserved.
This website is maintained by the Goswick Ranch HOA Board of Directors.
For questions or corrections, contact [board email].
Information on this site is provided as a community resource and may not reflect the most current
governing documents. Always refer to recorded CC&Rs for binding restrictions.
```
