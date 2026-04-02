# Page 09: Photo Gallery

*Priority: Phase 2 | Audience: Everyone*

---

## Page Purpose

Showcases authentic community photography organized by category. Builds emotional connection for prospective buyers and community pride for residents. All 23 MLS photos received are ready for use pending copyright clearance.

---

## Page Title

**H1:** Photo Gallery
**Meta description:** Photos of Goswick Ranch — Bradshaw Mountains, Big Bug Creek, the community gate, and life at nearly 6,000 feet in Mayer, Arizona.

---

## Photo Library

**Source:** 23 PAAR MLS photos (2022–2026) in `GoswickRanchResearch/PhotoGallery/`
**Full catalog:** `research/13_photo_gallery.md` — includes subject description, best-use notes, and cross-references for every photo.

**Copyright status:** MLS photos. Before publishing on the website, confirm rights with the listing agent or board (the photos were received from a board member, which suggests permission, but verify before launch).

---

## Gallery Categories and Photo Assignments

*(Based on catalog in `research/13_photo_gallery.md` — verify filenames against actual files)*

### Category 1: Landscape & Views
Bradshaw Mountain vistas, Big Bug Creek, monsoon sky, distant ridgelines. Hero-quality images.

**Use for:** Homepage hero (already selected), "About" section, "Living Here" page, any full-width photo breaks.

### Category 2: The Gate and Entry
The custom ornamental iron gate with cowboy and cowgirl silhouettes — the community's landmark.

**Key photo:** `1062124_P23` (from MLS listing 1062124) — full gate in context, rust/brown iron, hillside setting.
**Use for:** About page, homepage tile, favicon/logo source.

### Category 3: Cattle and Ranch Life
Black Angus cattle confirmed in multiple photos — visual evidence of working ranch heritage and open-range context.

**Use for:** About page (historic ranch origin), Living Here (open range section), For Buyers page.

### Category 4: The Creek and Water
Big Bug Creek with flowing water visible — seasonal creek scenes.

**Use for:** About page (geography section), Emergency Preparedness (flood section), Living Here.

### Category 5: Historic Stone Wall
Stone wall construction — confirms ranch-era construction and character.

**Use for:** About page (community history section).

### Category 6: The Land — Four Seasons
Evidence of snow, dry summer conditions, spring color.

**Use for:** Living Here (four seasons section), For Buyers page.

### Category 7: Mining Disturbance
Photos showing land disturbance consistent with mining activity in the area.

**Use note:** These should be used carefully — they document the Henrietta Mine context but may not be the most flattering. Useful for the FAQ or a transparent disclosure section rather than the homepage.

### Category 8: Ridgeline Home Siting
Photos showing how custom homes sit on the ridgeline — demonstrates scale, views, and privacy.

**Use for:** For Buyers page, About page.

---

## Technical Implementation — Lightbox2

**Library:** Lightbox2 (CDN-hosted, no installation)

Add to `<head>`:
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" rel="stylesheet">
```

Add before `</body>`:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
```

Each image link:
```html
<a href="img/gallery/full-size.jpg" data-lightbox="community" data-title="Caption text">
  <img src="img/gallery/thumb-300.jpg" alt="Descriptive alt text" loading="lazy">
</a>
```

All images in the same `data-lightbox="community"` group are navigable with arrows.

---

## Image Processing Requirements

Before publishing any gallery image:
1. Convert to WebP format
2. Create two versions: thumbnail (300–400px wide, ≤50KB) and full-size (1200px wide, ≤150KB)
3. Write descriptive alt text for every image (required for WCAG 2.1 AA)
4. Organize in `img/gallery/` folder with consistent naming: `goswick-ranch-[description]-[n].webp`

**Command to batch convert MLS photos:**
```bash
for f in PhotoGallery/*.jpg; do
  cwebp -q 80 "$f" -o "img/gallery/$(basename ${f%.jpg}).webp"
done
```

---

## Alt Text Examples

Good alt text describes what's in the photo for someone who can't see it:
- "Custom ornamental iron gate with cowboy and cowgirl silhouettes at the Goswick Ranch entrance"
- "Black Angus cattle grazing on a hillside property in Goswick Ranch, Bradshaw Mountains in background"
- "Big Bug Creek flowing through the Goswick Ranch valley with chaparral hillsides"
- "Panoramic view of the Bradshaw Mountains from Hawk Mountain Trail with monsoon clouds"

---

## Page Layout

```
[Page intro: 1-2 sentences]

[Category tabs or headings]
  [Thumbnail grid — 3 or 4 columns on desktop, 2 on mobile]
  [Click any photo to open full-size in Lightbox2]
```

**Intro copy:**
> Goswick Ranch spans nearly 6,000 feet in the Bradshaw Mountains above Mayer, Arizona. These photos show the community as it is — the gate, the cattle, the creek, the ridgeline homes, and the sky.

---

## Blockers

| Item | Status |
|---|---|
| Copyright clearance for MLS photos | Verify with board/agent before publishing |
| Board or resident photos (current interiors, events, wildlife) | Would significantly enhance; not required for launch |
| Drone aerial of community | High value; not currently available |

---

## Source Files

- `research/13_photo_gallery.md` — complete photo inventory with filenames, subjects, and best-use notes
- `research/11_hoa_website_design.md` — Lightbox2 implementation, gallery categories, image performance targets
