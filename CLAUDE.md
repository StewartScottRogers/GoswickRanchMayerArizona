# Goswick Ranch HOA Website — Project Guide for Claude Code

## What This Project Is

Building the first-ever website for the **Goswick Ranch HOA**, a small exclusive gated community in Mayer, Arizona (Yavapai County). The community has zero existing online presence. Stewart Rogers (Stewart.Rogers@pobox.com) is the developer and HOA website volunteer.

## Key Research Files

All research from the planning phase lives in `GoswickRanchResearch/`:

| File | Purpose |
|------|---------|
| `CLAUDE_CODE_PROMPT.md` | Full project brief — community facts, AZ legal requirements, sitemap, resources, assets checklist. **Start here.** |
| `Goswick_Ranch_HOA_Website_References.md` | Reference HOA websites, platform options, AZ statutes, community profile, Yavapai County resource links |

## Community Quick Facts

- **Location:** S Goswick Ranch Rd, Mayer, AZ 86333 (Yavapai County)
- **Setting:** Foothills of Bradshaw Mountains, overlooking Big Bug Creek, ~4,400–6,000 ft elevation
- **Size:** 9-acre minimum lots, 1,500 sq ft minimum homes, site-built only, RCU-2A zoning
- **Character:** Gated, rural ranch living, privacy-focused. "Arizona Urban Ranch Homes."
- **Nearest towns:** Between Prescott and Phoenix metro

## Planned Site Structure

```
Home
├── About Goswick Ranch
│   ├── Community Overview
│   ├── Location & Directions
│   └── Photo Gallery
├── HOA Information
│   ├── Board of Directors
│   ├── CC&Rs & Bylaws
│   ├── Rules & Regulations
│   └── Meeting Minutes
├── News & Events
│   ├── Announcements
│   └── Community Calendar
├── Resident Resources
│   ├── Yavapai County Links
│   ├── Emergency Services
│   ├── Utilities
│   └── Local Services
└── Contact Us
    ├── Board Contact Form
    └── Architectural Review Request
```

## Technical Direction

- Static site (HTML/CSS/JS) — GitHub Pages, Netlify, or Vercel (free hosting)
- Mobile-responsive, clean layout, 5–7 top nav items
- No backend required initially; resident portal can be added later if needed
- Lean into community identity: rural privacy, mountain ranch living, gated exclusivity, natural beauty

## Arizona HOA Legal Requirements

The website **must** make these publicly available (A.R.S. § 33-1805):
- CC&Rs, Bylaws, Rules & Regulations
- Financial statements / annual budget
- Meeting minutes (excluding executive sessions)
- Board member contact info

## What Still Needs to Come from the Board

See the assets checklist in `GoswickRanchResearch/CLAUDE_CODE_PROMPT.md` — key blockers are the CC&Rs PDF, board member names, and community photos.

## Working Directory

All website source files should go in `Z:\repos\GoswickRanchMayerArizona\` (this repo root). Research lives in `GoswickRanchResearch\`.
