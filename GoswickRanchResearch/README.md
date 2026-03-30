# GoswickRanchResearch — Directory Overview

This directory is a **research repository** used by a parent solution (`GoswickRanchMayerArizona`) to build and maintain the Goswick Ranch HOA website.

**Live site:** https://stewartscottrogers.github.io/GoswickRanchMayerArizona/

---

## Purpose

This project contains all background research gathered to support the first-ever website for Goswick Ranch HOA, located in Mayer, Arizona (Yavapai County). Research was gathered via automated web search and page fetches on 2026-03-28.

When you see references to "the research" in this project, they point here.

---

## Directory Contents

### `Web/` — Scraped web research (primary content)

The core research used to build website content. Nine topic files plus a usage guide and master index:

| File | Topic |
|------|-------|
| `HOW_TO_USE_THIS_RESEARCH.md` | How to apply each file during site development |
| `INDEX.md` | Master summary of all findings, critical blockers, and build status |
| `01_goswick_ranch_hoa.md` | Direct community/HOA facts |
| `02_mayer_arizona.md` | Town history, demographics, geography |
| `03_yavapai_county_resources.md` | County services, contacts, links |
| `04_arizona_hoa_law.md` | AZ statutes and HOA legal requirements |
| `05_reference_hoa_websites.md` | Competitor/reference HOA site analysis |
| `06_hoa_best_practices.md` | Design and feature recommendations |
| `07_local_geography.md` | Bradshaw Mountains, Big Bug Creek, environment |
| `08_utilities_services.md` | Water, electric, schools, local services |
| `09_real_estate_context.md` | Property listings, zoning, tax info |

### `Documents/` — HOA governing documents (PDFs)

Legal documents provided by the HOA board:

- `CC&Rs Goswick HOA.pdf` — Covenants, Conditions & Restrictions
- `CCRs.pdf` — CC&Rs (alternate version)
- `Goswick ByLaws.pdf` — HOA Bylaws

### `Goswick_Ranch_HOA_Website_References.md`

Additional reference links and notes used during site development.

---

## Project Structure (parent solution)

This research directory is part of the larger `GoswickRanchMayerArizona` Visual Studio solution. The website itself lives in a sibling project (`WebSite/wwwroot/`) and is deployed to GitHub Pages via a GitHub Actions workflow on every push to `master`.

---

## Research Reliability

| Category | Reliability |
|----------|------------|
| Arizona HOA law (ARS statutes) | High — use azleg.gov to verify current text |
| Mayer, AZ history and geography | High — Wikipedia + USFS sources |
| Yavapai County contacts/phone numbers | High — verified via multiple sources |
| HOA reference site analysis | High — pages retrieved directly |
| Goswick Ranch HOA specifics | Moderate — limited public data; some from real estate listings |
| Utilities and services | Moderate — gaps noted; some items need board confirmation |
| Real estate/zoning data | Moderate — listing prices change; zoning ordinance confirmed July 2025 |

---

## What Still Requires Board Input

The following items were not publicly findable and must come from the HOA board:

- Board member names, roles, and contact information
- HOA assessment/dues amount
- Current operating budget
- Meeting minutes (past 2–3 years)
- Community photos (gate, views, homes, landscape)
- Gate access procedures
- Confirmation of water source (well vs. Mayer Water District)
- Internet, trash hauler, and propane providers

See `Web/INDEX.md` → "Critical Blockers" for the full prioritized list.
