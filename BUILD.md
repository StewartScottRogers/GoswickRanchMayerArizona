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
<a href="/GoswickRanchMayerArizona/hoa/documents.html">Documents</a>
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

Create this layout under `WebSite/wwwroot/`:

```
wwwroot/
├── index.html                    Home
│
├── about/
│   ├── index.html                Community Overview
│   ├── location.html             Location & Directions
│   └── gallery.html              Photo Gallery
│
├── hoa/
│   ├── index.html                HOA Information (hub)
│   ├── board/
│   │   └── index.html            Board of Directors
│   ├── documents.html            CC&Rs & Bylaws
│   ├── rules/
│   │   └── index.html            Rules & Regulations
│   └── minutes/
│       └── index.html            Meeting Minutes
│
├── news/
│   ├── index.html                News & Announcements
│   └── calendar.html             Community Calendar
│
├── resources/
│   ├── index.html                Resident Resources (hub)
│   ├── emergency.html            Emergency Services
│   ├── utilities.html            Utilities
│   ├── county.html               Yavapai County Links
│   └── services.html             Local Services
│
├── contact/
│   ├── index.html                Contact the Board
│   └── arc.html                  Architectural Review Request
│
├── css/
│   └── style.css                 All styles
│
├── js/
│   └── main.js                   Nav toggle + lightweight interactions
│
├── img/                          Photos (none yet — see PAGES.md placeholders)
│   └── .gitkeep
│
└── docs/                         PDFs served directly
    ├── ccrrs.pdf                 CC&Rs — copied from GoswickRanchResearch/Documents/CCRs.pdf
    ├── bylaws.pdf                Bylaws — copied from GoswickRanchResearch/Documents/Goswick ByLaws.pdf
    └── .gitkeep                  (Budget, Financials, Minutes go here when received from board)
```

`UseDefaultFiles()` means `about/` automatically serves `about/index.html`. Use clean paths in all links (e.g., `/about/`, `/hoa/board/`).

---

## Navigation (5 items — fits one line on mobile)

| Label | Path (use these exact hrefs in HTML) |
|-------|------|
| Home | `/GoswickRanchMayerArizona/` |
| About | `/GoswickRanchMayerArizona/about/` |
| HOA Info | `/GoswickRanchMayerArizona/hoa/` |
| Resources | `/GoswickRanchMayerArizona/resources/` |
| Contact | `/GoswickRanchMayerArizona/contact/` |

News & Events links live inside the Home page and About hub. If the board asks for a News nav item, bump Contact to the footer and add News.

---

## Arizona Legal Compliance — A.R.S. § 33-1805

These must be publicly accessible on the site (not behind a login):

| Document | Where to Put It |
|----------|----------------|
| CC&Rs | `/docs/ccrrs.pdf` + linked from `/hoa/documents/` |
| Bylaws | `/docs/bylaws.pdf` + linked from `/hoa/documents/` |
| Rules & Regulations | `/hoa/rules/` (HTML page is fine, PDF preferred) |
| Annual Budget / Financial Statements | `/hoa/documents/` |
| Meeting Minutes | `/hoa/minutes/` |
| Board member names & contact info | `/hoa/board/` |

All of the above are blocked on board-supplied content. See PAGES.md for placeholder copy.

---

## Hosting Options (all free)

**GitHub Pages** — simplest if repo is on GitHub
A workflow at `.github/workflows/deploy.yml` deploys `WebSite/wwwroot/` on every push to `master`.
One-time setup: repo **Settings → Pages → Source → GitHub Actions**
Live URL: https://stewartscottrogers.github.io/GoswickRanchMayerArizona/

**Netlify** — drag-and-drop deploy or GitHub auto-deploy
Set publish directory to `WebSite/wwwroot`.

**Vercel** — GitHub integration, custom domain easy
Set output directory to `WebSite/wwwroot`, framework to "Other".

Custom domain suggestion: `goswickranchhoa.org` or `goswickranch.org` (~$12/year on Namecheap or Cloudflare).

---

## Build Checklist

### Phase 1 — Shell (can build now, no board content needed)
- [x] `css/style.css` with design system from DESIGN.md
- [x] Shared header/nav snippet (copy-paste into each page, or use a JS include)
- [x] Shared footer snippet
- [x] `index.html` (Home) — hero + intro copy from PAGES.md
- [x] `about/index.html` — community overview from PAGES.md
- [x] `about/location.html` — directions and map embed from PAGES.md
- [x] `resources/emergency.html` — emergency services from PAGES.md
- [x] `resources/utilities.html` — utilities from PAGES.md
- [x] `resources/county.html` — county links from PAGES.md
- [x] `contact/index.html` — board contact form (mailto: or Formspree)

### Phase 2 — Awaiting board content
- [x] `hoa/board/index.html` — stub page created; needs names, roles, email addresses from board
- [x] `hoa/documents.html` — CC&Rs and Bylaws PDFs now in docs/; needs Budget + Financial Statements
- [x] `hoa/rules/index.html` — stub page created with known CC&R rules; needs full Rules & Regulations text from board
- [x] `hoa/minutes/index.html` — stub page created; needs meeting minutes PDFs from board
- [ ] `about/gallery.html` — needs community photos from board
- [ ] `news/index.html` — needs first announcement from board
- [ ] `news/calendar.html` — needs meeting dates from board

### Phase 3 — Nice to have
- [ ] Print stylesheet for minutes/documents
- [ ] Search (simple: lunr.js)
- [ ] Resident-only password area (basic HTTP auth via Netlify)
- [ ] Google Analytics or Plausible
