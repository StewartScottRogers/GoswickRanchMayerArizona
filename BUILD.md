# Goswick Ranch HOA Website — Build Guide

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
│   ├── board.html                Board of Directors
│   ├── documents.html            CC&Rs & Bylaws
│   ├── rules.html                Rules & Regulations
│   └── minutes.html              Meeting Minutes
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
    └── .gitkeep                  (CC&Rs, Bylaws, Minutes go here when received)
```

`UseDefaultFiles()` means `about/` automatically serves `about/index.html`. Use clean paths in all links (e.g., `/about/`, `/hoa/board/`).

---

## Navigation (5 items — fits one line on mobile)

| Label | Path |
|-------|------|
| Home | `/` |
| About | `/about/` |
| HOA Info | `/hoa/` |
| Resources | `/resources/` |
| Contact | `/contact/` |

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
Serve only the `wwwroot/` subdirectory from `master` or a `gh-pages` branch.

**Netlify** — drag-and-drop deploy or GitHub auto-deploy
Set publish directory to `WebSite/wwwroot`.

**Vercel** — GitHub integration, custom domain easy
Set output directory to `WebSite/wwwroot`, framework to "Other".

Custom domain suggestion: `goswickranchhoa.org` or `goswickranch.org` (~$12/year on Namecheap or Cloudflare).

---

## Build Checklist

### Phase 1 — Shell (can build now, no board content needed)
- [ ] `css/style.css` with design system from DESIGN.md
- [ ] Shared header/nav snippet (copy-paste into each page, or use a JS include)
- [ ] Shared footer snippet
- [ ] `index.html` (Home) — hero + intro copy from PAGES.md
- [ ] `about/index.html` — community overview from PAGES.md
- [ ] `about/location.html` — directions and map embed from PAGES.md
- [ ] `resources/emergency.html` — emergency services from PAGES.md
- [ ] `resources/utilities.html` — utilities from PAGES.md
- [ ] `resources/county.html` — county links from PAGES.md
- [ ] `contact/index.html` — board contact form (mailto: or Formspree)

### Phase 2 — Awaiting board content
- [ ] `hoa/board.html` — needs names, roles, email addresses
- [ ] `hoa/documents.html` — needs CC&Rs + Bylaws PDFs
- [ ] `hoa/rules.html` — needs Rules & Regulations text
- [ ] `hoa/minutes.html` — needs meeting minutes PDFs
- [ ] `about/gallery.html` — needs community photos
- [ ] `news/index.html` — needs first announcement
- [ ] `news/calendar.html` — needs meeting dates

### Phase 3 — Nice to have
- [ ] Print stylesheet for minutes/documents
- [ ] Search (simple: lunr.js)
- [ ] Resident-only password area (basic HTTP auth via Netlify)
- [ ] Google Analytics or Plausible
