# Page 01: Homepage

*Priority: MVP | Audience: Everyone (first impression)*

---

## Page Purpose

The homepage establishes community identity, provides four quick-access tiles to the most-visited content, and gives prospective buyers and current residents an immediate sense of place. It is the only page most visitors see before deciding whether to dig deeper.

---

## Hero Section

**Image:** `img/hero-panorama.png` (panoramic Bradshaw Mountains shot from Hawk Mountain Trail)
- Source file: `Documents/GoswickRanch2HawkMountainTrlMayerAZ86333.png`
- Compress to WebP ≤200KB before launch (current file is 1.29MB PNG — convert with `cwebp -q 80`)
- CSS: `background: url('/img/hero-panorama.png') center 40%/cover no-repeat` — the `40%` vertical keeps the ridgeline prominent
- Dark overlay: `rgba(0,0,0,0.35)` for text legibility

**Headline:** Goswick Ranch
**Subheadline:** Mayer, Arizona — Bradshaw Mountains
**Tagline:** Gated. Private. Elevated.

**Primary CTA button:** "View Community Documents" (links to /documents)
**Secondary CTA:** "Learn About Living Here" (links to /living-here)

---

## Quick-Access Tiles (below hero)

Four cards in a 2×2 or 4-column grid:

| Tile | Icon | Destination |
|---|---|---|
| Governing Documents | Document icon | /documents |
| ARC Request | Blueprint/pencil | /arc |
| Emergency Info | Warning triangle | /emergency |
| Contact the Board | Envelope | /contact |

---

## Community Introduction Block

**Draft copy:**

> Goswick Ranch is a private gated community on Poland Road in the foothills of Arizona's Bradshaw Mountains — at nearly 6,000 feet elevation, overlooking Big Bug Creek, with Prescott National Forest as a back door.
>
> Nine-acre minimum lots ensure genuine privacy. Site-built homes only. Mayer, the nearest town, is one mile down the road. Prescott is 27 miles north. Phoenix is 75 miles south.

---

## Highlights Strip (3-column, icon + short copy)

| Icon | Heading | Body |
|---|---|---|
| Mountain | 9-Acre Minimums | Genuine privacy — no cramped lots, no shared walls. Every property is a working parcel of the Bradshaw Mountain foothills. |
| Lock | Gated Community | Physical lockbox entry on E Poland Rd. Private, maintained internal roads. |
| Star | Bortle Class 3–4 Dark Skies | No light pollution. The Milky Way is visible on a clear night. |

---

## Latest Announcements Teaser

Show the 3 most recent news items from `/news`. Each shows date, title, and a one-line excerpt. Link to full News archive.

**Placeholder content for launch:**
```
[Date] — Welcome to the new Goswick Ranch HOA website. Use the navigation above to find governing documents, the ARC process, and contact information.
```

---

## Footer

- HOA name: Goswick Ranch Homeowners Association
- Location: Mayer, AZ 86333
- Contact: [Contact form link or board email — pending board input]
- Links: Privacy Policy | Disclaimer | CC&Rs | Bylaws

---

## Design Notes

- Color palette: warm sandy beige base (#f5ede0), terracotta/rust accent (#b5541c), dusty teal secondary (#4a8c8c)
- Headings: Playfair Display or Lora (serif)
- Body: Inter or Open Sans, 18px minimum
- No sidebar; full-width sections
- Sticky header with logo left, nav right
- Skip-to-main-content link at top of page (WCAG)
- Hero: `loading="eager"` (do NOT lazy-load — it's the LCP element)

**Schema markup (add to `<head>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "HomeownersAssociation",
  "name": "Goswick Ranch Homeowners Association",
  "url": "https://stewartscottrogers.github.io/GoswickRanchMayerArizona/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mayer",
    "addressRegion": "AZ",
    "postalCode": "86333",
    "addressCountry": "US"
  },
  "description": "Self-managed gated ranch community on Poland Road in the Bradshaw Mountains, Mayer, Arizona. Minimum 9-acre lots."
}
```

---

## Blockers

| Item | Status |
|---|---|
| Board contact email (for footer) | Needs board |
| Current fire restriction status (for alert banner) | Check seasonally |

---

## Source Files

- `research/11_hoa_website_design.md` — hero specs, design system, tech stack
- `research/01_goswick_ranch_hoa.md` — community description, USPs, tagline
- `research/13_photo_gallery.md` — hero photo details
