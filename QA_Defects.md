# QA Defect Report — Goswick Ranch HOA Website
**Reviewed:** 2026-03-29
**Remediated:** 2026-03-29
**Scope:** All 18 HTML pages, style.css, main.js, docs/, img/
**Live URL:** https://stewartscottrogers.github.io/GoswickRanchMayerArizona/

---

## Priority Key
- **P1 — Critical:** Broken functionality or severe user-facing failure
- **P2 — High:** Significant UX impact or factual error
- **P3 — Medium:** Inaccuracy, inconsistency, or notable usability issue
- **P4 — Low:** Polish, cleanup, or minor technical issue

---

## Status Legend
- ✅ **Fixed** — resolved in code
- ⚠️ **Board action required** — cannot be resolved without content from the board

---

## Defects

### P1 — Critical

**1. Both contact forms are non-functional (placeholder Formspree IDs)** ⚠️ Board action required
**Files:** `contact/index.html`, `contact/arc.html`
Both form `action` attributes contain literal placeholder text (`YOUR_FORM_ID` / `YOUR_ARC_FORM_ID`). Submitting either form will fail silently.
**What was done:** Added a visible `notice-warn` banner above each form informing visitors the form is pending setup. The form HTML is otherwise correct and ready to activate.
**Remaining action:** The board must create a free Formspree account at formspree.io, create two forms, and replace `YOUR_FORM_ID` and `YOUR_ARC_FORM_ID` with the real IDs. Each ID is a short alphanumeric string (e.g. `xpzgdkqv`).

---

**2. Hero image is missing — no hero.jpg file exists** ⚠️ Board action required
**File:** `WebSite/wwwroot/img/` (only `survey-map.png` and `.gitkeep` are present)
The homepage hero section is designed for a full-bleed landscape photo. No photo file exists. The homepage currently shows a plain dark brown gradient.
**What was done:** Fixed the CSS path (see defect #3). The gradient fallback is intentional and acceptable until a photo is provided.
**Remaining action:** The board must supply a landscape photo of the community (gate, mountain view, ranch scenery). Save it as `WebSite/wwwroot/img/hero.jpg` and commit. Recommended minimum size: 1400×900 px.

---

**3. Hero CSS background path uses wrong base URL for GitHub Pages** ✅ Fixed
**File:** `css/style.css` line 228
Changed `url('/img/hero.jpg')` → `url('/GoswickRanchMayerArizona/img/hero.jpg')`.

---

### P2 — High

**4. News & Announcements section not in navigation** ✅ Fixed
**Files:** All 19 HTML pages
Added `<li><a href="/GoswickRanchMayerArizona/news/">News</a></li>` to every page's main nav, between Resources and Contact.

---

**5. Directions from Prescott referenced the wrong road (US-89 instead of SR-69)** ✅ Fixed
**File:** `about/location.html`
Rewrote the Prescott directions block. Changed heading from "From Prescott / US-89" to "From Prescott via SR-69". Instructions now correctly direct via AZ-69 / State Route 69 eastbound from Prescott.

---

**6. Gate directions omitted the required Poland Rd / Poland Junction Rd turn** ✅ Fixed
**File:** `about/location.html`
Both direction blocks (from Prescott and from Phoenix) now include the turn onto E Poland Rd (Poland Junction Rd) from SR-69, and the subsequent turn onto S Goswick Ranch Rd.

---

### P3 — Medium

**7. Google Maps embed used deprecated format** ✅ Fixed
**File:** `about/location.html`
Replaced the legacy `maps.google.com/maps?...&output=embed` iframe with an OpenStreetMap embed (`openstreetmap.org/export/embed.html`) centered on Mayer with a location marker. No API key required. Added OSM attribution as required by the ODbL license.

---

**8. Prescott Airport distance inconsistency (30 mi vs 27–28 mi)** ✅ Fixed
**File:** `about/location.html`
Changed distances table entry from `~30 miles` to `~28 miles` to match research and `recreation.html`.

---

**9. "via US-89" in About page Location in Context section** ✅ Fixed
**File:** `about/index.html`
Changed "about 27 miles northwest via US-89" → "about 27 miles northwest via SR-69".

---

**10. Phone required on ARC form but optional on Contact form** ✅ Fixed
**File:** `contact/arc.html`
Removed `required` attribute and asterisk from the phone field. Changed label to show `(optional)` to match the Contact form.

---

**11. `notice-danger` CSS class used but not defined** ✅ Fixed
**File:** `css/style.css`, `resources/utilities.html`
Added `.notice.notice-danger { border-left-color: #c0392b; background: #fdf0ef; }` to style.css after `.notice.notice-warn`. Removed the duplicate inline styles from the arsenic warning div in utilities.html.

---

**12. Agua Fria National Monument section misplaced on County page** ✅ Fixed
**File:** `resources/county.html`
Removed the standalone Agua Fria section (BLM, not a county resource; duplicated recreation.html). Replaced with a single-sentence cross-reference to the Recreation & Lifestyle page.

---

### P4 — Low

**13. Home nav item never highlighted as active** ✅ Fixed
**File:** `js/main.js`
Rewrote the active-link logic. Old code checked `href === '/'` which never matched the `/GoswickRanchMayerArizona/` base path. New logic uses exact path matching for the home link and length-gated `startsWith` for section links, preventing the home link from matching all pages.

---

**14. CSS: redundant `border-bottom: none` declaration** ✅ Fixed
**File:** `css/style.css` (mobile nav section)
Removed the dead `border-bottom: none` line that was immediately overridden by `border-bottom: 1px solid rgba(255,255,255,0.07)` on the next line.

---

**15. Tuzigoot/Montezuma Castle admission wording was ambiguous** ✅ Fixed
**File:** `resources/recreation.html`
Changed "One National Park Service pass covers admission to both sites for 7 days" → "A single $10 entrance fee covers admission to both monuments for 7 consecutive days."

---

**16. ARC auto-approval incorrectly listed as a 2025 law change** ✅ Fixed
**File:** `hoa/index.html`
Moved ARC auto-approval out of the "2025 Arizona HOA Law Updates" bullet list into a separate "Architectural Review — Existing Law" subsection with a note that it is pre-existing law under A.R.S. §33-1817.

---

**17. GIS links known to return 403 errors** ✅ Fixed
**File:** `resources/county.html`
Added a note below each GIS link: "Note: if the link returns an error, navigate directly to gis.yavapaiaz.gov."

---

**18. Survey map `<img>` had wrong width/height aspect ratio** ✅ Fixed
**File:** `index.html`
Changed `width="900" height="600"` (3:2 ratio) to `width="1545" height="912"` (actual image pixel dimensions), giving browsers the correct aspect ratio for layout reservation.

---

## Summary

| # | Priority | Status | Fix summary |
|---|----------|--------|-------------|
| 1 | P1 | ⚠️ Board action | Visible notice added; Formspree ID needed |
| 2 | P1 | ⚠️ Board action | CSS path fixed; hero.jpg photo needed |
| 3 | P1 | ✅ Fixed | CSS hero path corrected for GitHub Pages |
| 4 | P2 | ✅ Fixed | News added to nav on all 19 pages |
| 5 | P2 | ✅ Fixed | Directions rewritten: US-89 → SR-69 |
| 6 | P2 | ✅ Fixed | Poland Rd / Poland Junction Rd turn added |
| 7 | P3 | ✅ Fixed | Replaced Google Maps embed with OpenStreetMap |
| 8 | P3 | ✅ Fixed | Airport distance corrected: 30 → 28 miles |
| 9 | P3 | ✅ Fixed | "via US-89" → "via SR-69" in about/index.html |
| 10 | P3 | ✅ Fixed | Phone made optional on ARC form |
| 11 | P3 | ✅ Fixed | notice-danger added to CSS; inline styles removed |
| 12 | P3 | ✅ Fixed | Agua Fria removed from county.html; cross-ref added |
| 13 | P4 | ✅ Fixed | Home nav active state logic corrected in JS |
| 14 | P4 | ✅ Fixed | Dead CSS line removed |
| 15 | P4 | ✅ Fixed | "$10 entrance fee / 7 days" wording clarified |
| 16 | P4 | ✅ Fixed | ARC auto-approval moved to pre-existing law section |
| 17 | P4 | ✅ Fixed | GIS error note added to county.html |
| 18 | P4 | ✅ Fixed | Survey map img dimensions corrected to 1545×912 |

**16 of 18 fixed in code. 2 require board-supplied content (hero photo, Formspree IDs).**
