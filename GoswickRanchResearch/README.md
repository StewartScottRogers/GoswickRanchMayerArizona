# GoswickRanchResearch — Directory Overview

This directory is a **research repository** used by a parent solution (`GoswickRanchMayerArizona`) to build and maintain the Goswick Ranch HOA website.

**Live site:** https://stewartscottrogers.github.io/GoswickRanchMayerArizona/

---

## Purpose

This project contains all background research gathered to support the first-ever website for Goswick Ranch HOA, located in Mayer, Arizona (Yavapai County). Research was gathered via automated web search and page fetches in two waves: March 28, 2026 (Wave 1) and March 29, 2026 (Wave 2), then consolidated into the `Research/` directory on April 1, 2026.

When you see references to "the research" in this project, they point here.

---

## Directory Contents

### `research/` — Consolidated research library (PRIMARY — use this)

All research consolidated into 12 topic files on April 1, 2026. This is the authoritative research source.

| File | Topic |
|------|-------|
| `INDEX.md` | Master index with file summaries, critical blockers, and key findings |
| `HOW_TO_USE.md` | "When building X page → use these files" lookup table |
| `01_goswick_ranch_hoa.md` | Community identity, Goswick family, HOA structure, utilities, real estate data |
| `02_mayer_arizona.md` | Mayer town profile: history, demographics, climate, local businesses, events |
| `03_geography_environment.md` | Bradshaws, Big Bug Creek, native plants, wildlife, dark skies, arsenic risk |
| `04_history_mining.md` | Big Bug Mining District; Henrietta Mine profile; implications for residents |
| `05_outdoor_recreation.md` | Recreation within 60 miles; Lynx Lake status (drained 2024); equestrian |
| `06_utilities_services.md` | Water/wells, APS electric, propane, Starlink, schools, medical, property taxes |
| `07_emergency_preparedness.md` | Wildfire, evacuation, flood risk, Mayer Fire District, emergency contacts |
| `08_real_estate.md` | Market data, appreciation (+57% 5-year), buyer profiles, AZ tax advantages |
| `09_yavapai_county_resources.md` | County contacts: YCSO, fire, library, permits, GIS, hospital, flood control |
| `10_arizona_hoa_law.md` | Complete ARS §§33-1801–1818; 2025 legislative updates; board guidance; ARC |
| `11_hoa_website_design.md` | Design strategy, reference sites, technical stack, SEO, content checklist |
| `12_ranch_lifestyle_governance.md` | Ranch culture, livestock rules, open range law, Prescott, Verde Valley, day trips |

### `Documents/` — HOA governing documents (PDFs)

Legal documents provided by the HOA board. **Do not modify.**

- `CC&Rs Goswick HOA.pdf` — Covenants, Conditions & Restrictions
- `CCRs.pdf` — CC&Rs (alternate version)
- `Goswick ByLaws.pdf` — HOA Bylaws

### `Web/` — Wave 1 source files (March 28, 2026) — retained for provenance

Original research files. All content has been merged into `research/`. Do not add new content here.

### `scraped/` — Wave 2 source files (March 29, 2026) — retained for provenance

Deep research files from parallel 14-agent session. All content has been merged into `research/`. Do not add new content here.

### `Goswick_Ranch_HOA_Website_References.md`

Early reference document. Superseded by `research/` files. Retained for provenance.

---

## Project Structure (parent solution)

This research directory is part of the larger `GoswickRanchMayerArizona` Visual Studio solution. The website itself lives in a sibling project (`WebSite/wwwroot/`) and is deployed to GitHub Pages via a GitHub Actions workflow on every push to `master`.

---

## Research Reliability

| Category | Reliability |
|----------|------------|
| Arizona HOA law (ARS statutes) | High — verify current text at azleg.gov |
| Mayer, AZ history and geography | High — Wikipedia + USFS sources |
| Yavapai County contacts/phone numbers | High — verified via multiple sources; call to confirm before publishing |
| HOA reference site analysis | High — pages retrieved directly |
| Henrietta Mine / Big Bug Mining District | High — USGS MRDS data and ADEQ permit records |
| Goswick Ranch HOA specifics | Moderate — HOA fee ($216/yr) and wells confirmed; CC&Rs/board names still needed |
| Utilities and services | Moderate — wells/APS/propane/Starlink confirmed; trash hauler unconfirmed |
| Real estate/zoning data | Moderate — listing prices current as of March 2026; market changes |

---

## What Still Requires Board Input

The following items were not publicly findable and must come from the HOA board:

- ~~CC&Rs PDF~~ — **Received** (in `Documents/CC&Rs Goswick HOA.pdf` and `Documents/CCRs.pdf`)
- ~~Bylaws PDF~~ — **Received** (in `Documents/Goswick ByLaws.pdf`)
- Rules & Regulations PDF — **Still needed**
- Board member names, roles, and contact information
- Current operating budget and meeting minutes archive
- Community photos (gate, views, homes, landscape, annual meeting)
- Gate access procedures for new residents
- Trash collection provider confirmation
- Reserve fund status (for "For Buyers" page)

See `research/INDEX.md` → "Critical Blockers" for the full prioritized table.
