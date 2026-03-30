# Goswick Ranch HOA Website — Build Guide

## ⚠️ GitHub Pages Path Requirement — Read Before Writing Any HTML

The site is hosted at a subdirectory URL:
**https://stewartscottrogers.github.io/GoswickRanchMayerArizona/**

Every internal `href` and `src` in every HTML file **must** be prefixed with `/GoswickRanchMayerArizona/`. Never use bare root-relative paths like `/about/` or `/css/style.css` — they will resolve to the wrong origin and break navigation and styling.

**Correct:**
```html
<link rel="stylesheet" href="/GoswickRanchMayerArizona/css/style.css">
<script src="/GoswickRanchMayerArizona/js/main.js"></script>
<a href="/GoswickRanchMayerArizona/about/">About</a>
<a href="/GoswickRanchMayerArizona/buyers/">For Buyers</a>
```

**Wrong (breaks on GitHub Pages):**
```html
<link rel="stylesheet" href="/css/style.css">
<a href="/about/">About</a>
```

Do **not** add a `<base href>` tag. The `<base>` tag only affects relative paths (no leading `/`), not root-relative paths, so it does not fix this problem.

---

## How the Server Works

`Program.cs` is already configured: an ASP.NET Core minimal host that calls `UseDefaultFiles()` + `UseStaticFiles()`. It serves everything from `wwwroot/`. Do not modify `Program.cs`.

Run locally:
```
cd WebSite
dotnet run
```
Site: http://localhost:5000

---

## wwwroot File Structure

```
wwwroot/
├── index.html                     Home (redesigned — stats bar + dual CTA)
│
├── about/
│   ├── index.html                 About the Ranch (community overview + Goswick family history)
│   ├── history.html               Community History (Goswick family deep dive)
│   ├── location.html              Location & Directions
│   └── gallery.html               Photo Gallery [BOARD BLOCKED]
│
├── lifestyle/
│   ├── index.html                 Life Here (hub — seasons, wildlife, recreation, nearby)
│   ├── seasons.html               Climate & Seasons (4 seasons, monsoon, dark skies)
│   ├── outdoors.html              Outdoor Recreation (trails, Prescott NF, equestrian)
│   └── nearby.html                Nearby Destinations (Prescott, Jerome, Sedona, wine trail)
│
├── buyers/
│   ├── index.html                 For Buyers (hub — value story, stats, AZ advantage)
│   └── faq.html                   Buyer FAQ (20 key questions + answers)
│
├── hoa/
│   ├── index.html                 HOA Information (hub)
│   ├── board/
│   │   └── index.html             Board of Directors [BOARD BLOCKED]
│   ├── documents.html             CC&Rs & Bylaws (PDFs live; budget/financials blocked)
│   ├── rules/
│   │   └── index.html             Rules & Regulations [BOARD BLOCKED]
│   └── minutes/
│       └── index.html             Meeting Minutes [BOARD BLOCKED]
│
├── news/
│   ├── index.html                 News & Announcements [BOARD BLOCKED]
│   └── calendar.html              Community Calendar [BOARD BLOCKED]
│
├── resources/
│   ├── index.html                 Resident Resources (hub)
│   ├── emergency.html             Emergency Services (expanded — wildfire, Genasys, medevac)
│   ├── utilities.html             Utilities (updated — Starlink, arsenic warning, propane, solar)
│   ├── county.html                Yavapai County Links
│   ├── services.html              Local Services
│   └── recreation.html            Recreation (updated — wine trail, Jerome, Arcosanti)
│
├── contact/
│   ├── index.html                 Contact the Board
│   └── arc.html                   Architectural Review Request
│
├── css/
│   └── style.css                  All styles (from DESIGN.md)
│
├── js/
│   └── main.js                    Nav toggle + lightweight interactions
│
├── img/
│   ├── survey-map.png             Goswick Ranch survey plat (from GoswickRanchResearch/Documents/)
│   └── .gitkeep
│
└── docs/
    ├── ccrrs.pdf                  CC&Rs — from GoswickRanchResearch/Documents/CCRs.pdf ✓
    ├── bylaws.pdf                 Bylaws — from GoswickRanchResearch/Documents/Goswick ByLaws.pdf ✓
    ├── survey.pdf                 Survey — from GoswickRanchResearch/Documents/ ✓
    └── .gitkeep                   (Budget, Financials, Minutes go here when received from board)
```

`UseDefaultFiles()` means `lifestyle/` automatically serves `lifestyle/index.html`. Use clean paths in all links.

---

## Navigation (7 items)

| Label | Path (exact hrefs for HTML) |
|-------|-----------------------------|
| Home | `/GoswickRanchMayerArizona/` |
| About | `/GoswickRanchMayerArizona/about/` |
| Life Here | `/GoswickRanchMayerArizona/lifestyle/` |
| HOA Info | `/GoswickRanchMayerArizona/hoa/` |
| For Buyers | `/GoswickRanchMayerArizona/buyers/` |
| Resources | `/GoswickRanchMayerArizona/resources/` |
| Contact | `/GoswickRanchMayerArizona/contact/` |

On mobile, all 7 items appear in the hamburger dropdown. "For Buyers" may have a subtle visual distinction (slightly bolder or rust-colored) to signal it's for a different audience.

---

## Arizona Legal Compliance — A.R.S. § 33-1805

These must be publicly accessible on the site (not behind a login):

| Document | Where to Put It |
|----------|----------------|
| CC&Rs | `/docs/ccrrs.pdf` + linked from `/hoa/documents.html` |
| Bylaws | `/docs/bylaws.pdf` + linked from `/hoa/documents.html` |
| Rules & Regulations | `/hoa/rules/` (HTML is fine; PDF preferred) |
| Annual Budget / Financial Statements | `/hoa/documents.html` + `/docs/budget.pdf` |
| Meeting Minutes | `/hoa/minutes/` |
| Board member names & contact info | `/hoa/board/` |

Resale disclosure (A.R.S. § 33-1806): HOA may charge up to $400 for resale disclosure packet. Prospective buyers have a right to cancel within 5 days of receiving it.

---

## Hosting

**GitHub Pages** (current)
Workflow at `.github/workflows/deploy.yml` deploys `WebSite/wwwroot/` on every push to `master`.
One-time setup: repo **Settings → Pages → Source → GitHub Actions**
Live URL: https://stewartscottrogers.github.io/GoswickRanchMayerArizona/

**Custom domain suggestion:** `goswickranchhoa.org` or `goswickranch.org` (~$12/year on Namecheap or Cloudflare). A custom domain would make the site more credible to real estate agents — worth doing before marketing to outside agents.

---

## Build Checklist

### Phase 1 — Shell (complete)
- [x] `css/style.css` with design system from DESIGN.md
- [x] Shared header/nav snippet
- [x] Shared footer snippet
- [x] `index.html` (Home)
- [x] `about/index.html`
- [x] `about/location.html`
- [x] `resources/emergency.html`
- [x] `resources/utilities.html`
- [x] `resources/county.html`
- [x] `resources/services.html`
- [x] `resources/recreation.html`
- [x] `contact/index.html`
- [x] `contact/arc.html`
- [x] `hoa/index.html`
- [x] `hoa/documents.html`

### Phase 2 — New pages (build from PAGES.md spec)
- [ ] `index.html` — **Redesign:** add stats bar + dual audience CTA section
- [ ] `about/index.html` — **Update:** add Goswick family history intro
- [ ] `about/history.html` — **New:** full Goswick family story
- [ ] `lifestyle/index.html` — **New:** Life Here hub page
- [ ] `lifestyle/seasons.html` — **New:** Climate, seasons, dark skies
- [ ] `lifestyle/outdoors.html` — **New:** Recreation, equestrian, trails
- [ ] `lifestyle/nearby.html` — **New:** Day trips, Prescott, Jerome, wine trail
- [ ] `buyers/index.html` — **New:** For Buyers hub (value prop, stats, AZ advantage)
- [ ] `buyers/faq.html` — **New:** 20-question Buyer FAQ
- [ ] `resources/emergency.html` — **Update:** Brady Fire, Genasys, Firewise, medevac
- [ ] `resources/utilities.html` — **Update:** Starlink, arsenic warning, propane, solar
- [ ] `resources/recreation.html` — **Update:** Wine trail, Jerome, Arcosanti, Lynx Lake status
- [ ] **Nav update** — all pages get 7-item nav (add Life Here + For Buyers)

### Phase 3 — Awaiting board content
- [ ] `hoa/board/index.html` — needs names, roles, contact info
- [ ] `hoa/rules/index.html` — needs full R&R document
- [ ] `hoa/minutes/index.html` — needs meeting minutes PDFs
- [ ] `about/gallery.html` — needs community photos
- [ ] `news/index.html` — needs first announcement
- [ ] `news/calendar.html` — needs meeting dates

### Phase 4 — Nice to have
- [ ] Print stylesheet for minutes/documents
- [ ] Google Analytics or Plausible (privacy-first)
- [ ] Custom domain (goswickranchhoa.org)
- [ ] Email signup (Formspree or Buttondown — free tier)
- [ ] Resident-only password area (basic HTTP auth via Netlify)
