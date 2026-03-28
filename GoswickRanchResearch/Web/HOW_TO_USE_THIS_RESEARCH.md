# How to Use This Research — Goswick Ranch HOA Website

This directory contains web research gathered on 2026-03-28 to support building the first website for Goswick Ranch HOA in Mayer, Arizona. This file tells you what's here, how it's organized, and how to apply it at each stage of the project.

---

## What "Research" Means in This Project

Throughout this project, **"research"** refers to this `scraped/` directory and all files within it. When the user says "check the research" or "use the research," look here first before searching the web again.

---

## Directory Structure

```
scraped/
├── HOW_TO_USE_THIS_RESEARCH.md   ← You are here
├── INDEX.md                       ← Master summary of all findings + gaps + blockers
├── 01_goswick_ranch_hoa.md        ← Direct community/HOA facts
├── 02_mayer_arizona.md            ← Town history, demographics, geography
├── 03_yavapai_county_resources.md ← County services, contacts, links
├── 04_arizona_hoa_law.md          ← AZ statutes, legal requirements
├── 05_reference_hoa_websites.md   ← Competitor/reference site analysis
├── 06_hoa_best_practices.md       ← Design + feature recommendations
├── 07_local_geography.md          ← Bradshaw Mountains, Big Bug Creek, environment
├── 08_utilities_services.md       ← Water, electric, schools, services
└── 09_real_estate_context.md      ← Property listings, zoning, tax info
```

---

## How to Use Each File

### When building the **Homepage**
- `01_goswick_ranch_hoa.md` — community identity, tagline, character
- `07_local_geography.md` — hero image concepts, landscape copy
- `06_hoa_best_practices.md` — hero section design, CTA patterns

### When writing **About Goswick Ranch** content
- `01_goswick_ranch_hoa.md` — community facts (lots, zoning, character)
- `02_mayer_arizona.md` — town history and context for "About the Area"
- `07_local_geography.md` — mountain/creek setting descriptions
- `09_real_estate_context.md` — property value context, tax advantages

### When building the **HOA Information** section
- `04_arizona_hoa_law.md` — what documents are legally required; statute citations
- `01_goswick_ranch_hoa.md` — what's confirmed vs. still blocked
- `INDEX.md` → "Critical Blockers" table — what still needs board input

### When building **Resident Resources**
- `03_yavapai_county_resources.md` — all county links and contact numbers
- `08_utilities_services.md` — APS, Mayer Water District, schools
- `07_local_geography.md` — emergency preparedness context (flood risk, fire history)

### When making **design decisions**
- `05_reference_hoa_websites.md` — navigation, page structure, UI patterns from reference sites
- `06_hoa_best_practices.md` — color, typography, layout recommendations

### When writing **Contact / Legal** pages
- `04_arizona_hoa_law.md` — disclosure obligations, statute citations to include

### When writing the **Location & Directions** page
- `02_mayer_arizona.md` — distance from Phoenix/Prescott, elevation, general setting
- `07_local_geography.md` — landmarks, Big Bug Creek, Bradshaw Mountains
- `03_yavapai_county_resources.md` — GIS/parcel map link

---

## Reliability Guide

Not all research is equally reliable. Use this to calibrate:

| File | Reliability | Notes |
|------|------------|-------|
| `01_goswick_ranch_hoa.md` | Moderate | Limited public data; some from real estate listings (may be outdated) |
| `02_mayer_arizona.md` | High | Wikipedia + historical sources |
| `03_yavapai_county_resources.md` | High | Phone numbers verified via multiple sources; some URLs returned 403 |
| `04_arizona_hoa_law.md` | High | Statutes are authoritative; confirm with azleg.gov for current text |
| `05_reference_hoa_websites.md` | High | Pages retrieved directly |
| `06_hoa_best_practices.md` | High | From multiple HOA industry sources |
| `07_local_geography.md` | High | Wikipedia + USFS sources |
| `08_utilities_services.md` | Moderate | Utility contact info verified; well vs. district water unconfirmed |
| `09_real_estate_context.md` | Moderate | Listing prices change; zoning ordinance URL confirmed |

---

## What This Research Cannot Replace

The following **must come from the HOA board** — they are not publicly findable:

- CC&Rs (Declaration) PDF
- Bylaws PDF
- Rules & Regulations PDF
- Board member names, roles, and contact preferences
- HOA assessment/dues amount
- Current operating budget
- Meeting minutes (past 2–3 years)
- Community photos (gate, views, homes, landscape)
- Gate access procedures
- Confirmation of well water vs. Mayer Water District
- Internet service provider and trash hauler

See `INDEX.md` → "Critical Blockers" for the full prioritized list.

---

## When to Re-Run Research

Re-run web research (or update specific files) when:

- More than 6 months have passed since last scrape (data may be stale)
- A specific page returned a 403 error before but the content is now needed
- New Arizona HOA legislation is enacted (check annually — AZ legislative session ends April/May)
- New real estate listings or community changes are expected
- The board provides information that contradicts something found here

To update a file: add a new dated section at the bottom rather than overwriting, so the research history is preserved.

---

## How This Research Was Gathered

- **Method:** Automated web search + page fetches via Claude Code
- **Date:** 2026-03-28
- **Tools:** WebSearch + WebFetch (78 tool calls)
- **Coverage:** ~77 KB of structured findings across 9 topic files
- **Gaps documented in:** `INDEX.md` → "Dead Links / Access Issues"
