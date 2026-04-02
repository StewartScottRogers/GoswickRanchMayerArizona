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

Photos are organized into subfolders in `PhotoGallery/`. Full catalog with subjects and website-use notes is in `research/13_photo_gallery.md`.

### landscapes/ — Ground-Level Views (5 photos)

| File | Subject | Best Use |
|---|---|---|
| `boulder-outcrop-canyon-view.jpg` | Dark boulders framing deep canyon view | About page, section divider |
| `valley-panorama-mayer-corridor.jpg` | Wide panorama down to Mayer and Big Bug corridor | About page, For Buyers |
| `ridgeline-boulder-valley-overlook.jpg` | Granite boulder + dead oak, valley far below | Hero candidate, About |
| `granite-boulder-bradshaw-ridges.jpg` | Layered boulder in dry summer grass, ridges behind | Living Here (geology) |
| `dirt-road-descending-valley.jpg` | Dirt road descending toward Mayer valley | About, Living Here |

### seasons/ — All Four Seasons (10 photos)

| File | Subject | Best Use |
|---|---|---|
| `spring-brittlebush-wildflowers-meadow.jpg` | Yellow wildflowers blanket meadow, peaks behind | **Top pick** — hero, Living Here |
| `spring-wildflowers-desert-scrub.jpg` | Wildflowers in desert scrub | Gallery, Living Here |
| `monsoon-clouds-bradshaw-ridgelines.jpg` | Monsoon clouds over ridgelines | Gallery, Living Here |
| `monsoon-green-hillsides-sunlight.jpg` | Emerald green monsoon hillsides | Gallery, Living Here |
| `monsoon-rainbow-mayer-valley.jpg` | Rainbow over Mayer valley with cactus | **Top pick** — Gallery |
| `monsoon-rainbow-bradshaw-ridges-evening.jpg` | Rainbow over ridges, golden evening light | Gallery |
| `monsoon-thunderhead-golden-sunset.jpg` | Towering thunderhead lit gold/orange | **Top pick** — hero candidate |
| `fall-cottonwood-golden-color.jpg` | Cottonwood peak fall gold | Gallery, Living Here |
| `winter-sunset-snow-peaks-crimson-sky.jpg` | Crimson winter sunset, snow on peaks | **Top pick** — hero candidate |
| `winter-snow-cactus-mountain-peaks.jpg` | Snow on cactus and valley floor, peaks | **Top pick** — Gallery |

### ranch-life/ — Working Ranch Heritage (2 photos)

| File | Subject | Best Use |
|---|---|---|
| `black-angus-cattle-grazing-chaparral.jpg` | Three Angus cattle grazing in chaparral | About (heritage), Living Here (open range) |
| `historic-stone-wall-juniper-meadow.jpg` | Old dry-stone wall in juniper meadow | About (history section) |

### creek/ — Big Bug Creek (1 photo)

| File | Subject | Best Use |
|---|---|---|
| `big-bug-creek-rocks-cottonwood.jpg` | Big Bug Creek over sandstone rocks, winter cottonwoods | Outdoors page, About geography |

### aerial/ — Drone and Aerial Views (3 photos)

| File | Subject | Best Use |
|---|---|---|
| `aerial-home-ridgeline-winding-driveway.jpg` | Home on ridgeline, winding private drive, Bradshaws | **Top pick** — For Buyers, About |
| `aerial-forested-ridge-private-road.jpg` | Forested oak/juniper ridge, private road, outbuildings | For Buyers (privacy) |
| `aerial-mining-disturbed-hillside.jpg` | Mining tailings hillside from air | **Do not use for hero/homepage** — contextual only |

**Missing — locate and add:**
- Gate photo (`1062124_P23`) — the cowboy/cowgirl iron gate; most important missing image for the About page

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
