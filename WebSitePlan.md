# Claude Code Project Prompt — Goswick Ranch HOA Website

## Project Overview

I am building a website for the Goswick Ranch HOA located in Mayer, Arizona. This is a brand new website — the community has no existing online presence (no website, no Facebook group, nothing). All work should be saved to:

```
Z:\repos\GoswickRanchMayerArizona\WebSite
```

This directory is a git repository. Research lives in `WebSite\GoswickRanchResearch\`.

---

## About Goswick Ranch

- **Type:** Exclusive gated community / newer subdivision
- **Location:** Mayer, Arizona (Yavapai County), ZIP code 86333
- **Setting:** Foothills of the Bradshaw Mountains, overlooking Big Bug Creek
- **Elevation:** Approximately 4,400–6,000 feet
- **Geographic Position:** Centrally located between Prescott and the Phoenix metro area
- **Lot Minimum:** 9 acres per parcel
- **Home Minimum:** 1,500 sq ft, site-built only
- **Zoning:** RCU-2A (rural, low-density residential)
- **Community Character:** Rural ranch living, privacy-focused, gated entry. The HOA is dedicated to preserving the rural ranch feel. Marketing describes it as "Arizona Urban Ranch Homes" for people who enjoy ranch living. Properties range from 9 acres up to 36+ acres. Sweeping mountain views, pristine prairie landscape.
- **Road:** Properties are on S Goswick Ranch Rd, Mayer, AZ

### Mayer, AZ Context

- Unincorporated census-designated place in central Yavapai County
- Population: ~1,558 (2020 Census)
- Area: ~20 square miles
- Elevation averages ~4,415 feet
- Founded in the 1880s as a mining camp and ranching outpost by Joseph Mayer (German immigrant who operated a trading post and stage station)
- Historic gold and silver mining area (Tip Top Mine, smelters)
- Surrounded by Bradshaw Mountains, along Big Bug Creek

---

## Arizona HOA Legal Requirements

### Document Disclosure (A.R.S. § 33-1805)

- HOAs must make association records reasonably available to all homeowners
- Associations have 10 business days to fulfill a member's records request
- No fees can be charged for production of records
- Disclosure packet for property sales capped at $400 (A.R.S. § 33-1806(C))

### Documents That Should Be on the Website

- CC&Rs (Covenants, Conditions & Restrictions)
- Bylaws
- Rules and regulations
- Financial statements / annual budget
- Meeting minutes (excluding executive sessions)
- Board member contact information

### Documents That May Be Withheld

- Pending litigation materials
- Personal information of individual homeowners
- Executive session minutes
- Attorney-client privileged communications

### Key Statutes

- A.R.S. § 33-1805 — Association financial and other records
- A.R.S. § 33-1806 — Disclosure requirements and fee caps
- A.R.S. § 33-1258 — Additional disclosure requirements
- Full text: https://www.azleg.gov/ars/33/01805.htm

---

## Yavapai County Resources (for Resident Resources page)

### Government & Services

| Resource | URL | Description |
|----------|-----|-------------|
| Yavapai County Government | https://www.yavapaiaz.gov | Main county portal |
| Yavapai County GIS / Parcel Maps | https://gis.yavapaiaz.gov | Interactive property maps, parcel search |
| Yavapai County Assessor | https://www.yavapaiaz.gov/Mapping-and-Properties/Assessors-Office | Property tax and valuation |
| Yavapai County Sheriff | https://www.ycsoaz.gov | Law enforcement for unincorporated areas |
| Mayer Public Library | https://ycfld.gov/mayer | Part of Yavapai County Free Library District |
| Yavapai County Development Services | Phone: (928) 771-3214 | Zoning questions, building permits |

### Emergency & Safety

| Resource | Details |
|----------|---------|
| Mayer Fire District | Part of Yavapai County Fire Consortium; covers ~302 sq miles, ~10,000 residents |
| Mayer Fire Station 22 | (928) 910-9575 |
| Fire Consortium Website | https://www.yavcofire.org/mayer-fire-district |
| Yavapai County Sheriff | https://www.ycsoaz.gov/Contact-Information |
| Mayer Justice Precinct | Covers ~1,600 sq miles including Mayer, Dewey, Humboldt, Spring Valley |

### Utilities

| Service | Notes |
|---------|-------|
| Mayer Water District | Local water utility |
| Arizona Public Service (APS) | Electric provider |

---

## HOA Website Best Practices (from research)

### Essential Pages

1. **Homepage** — Community introduction, key announcements, welcoming photos, easy navigation
2. **About / Community Info** — History, location, what makes the community unique
3. **Board of Directors** — Names, roles, contact info
4. **Governing Documents** — CC&Rs, bylaws, rules (downloadable PDFs)
5. **Meeting Minutes & Agendas** — Archive of past meetings plus upcoming agenda
6. **News & Announcements** — Updates, maintenance notices, safety alerts
7. **Community Calendar** — Events, meetings, deadlines
8. **Contact / Request Form** — How residents reach the board or submit requests
9. **Photo Gallery** — Community views, gate, common areas
10. **Resident Resources** — Local service links, emergency contacts, utility info

### Design Principles

- Mobile-responsive (62%+ of web traffic is mobile)
- Clean, scannable layout with short sections
- Easy document downloads
- Clear navigation — 5-7 top-level items max
- Optional password-protected resident portal for sensitive docs


## Reference HOA Websites to Study for Inspiration

| Site | Why | URL |
|------|-----|-----|
| Windgate Ranch (Scottsdale, AZ) | Polished gated AZ community, amenities page, resident section | https://www.windgateranch.org |
| Johnson Ranch (AZ) | Good association info and amenities pages | https://www.johnsonranch.com/association/ |
| Canyon Gate at Cinco Ranch | Gated community, clear privacy/lifestyle messaging | https://canyongateatcincoranch.com |
| HOA Express examples | Best HOA websites of 2026 roundup | https://blog.hoa-express.com/best-hoa-and-condo-websites-of-2026/ |
| Wild Apricot examples | 15+ best HOA websites with analysis | https://www.wildapricot.com/blog/hoa-websites |
| HOA Management features guide | 11 important design elements | https://www.hoamanagement.com/hoa-website-features-elements/ |

---

## Assets Checklist — What Needs to Be Gathered from the Board

### Must-Have Before Building

- [ ] HOA logo (or decision to create one)
- [ ] CC&Rs document (PDF)
- [ ] Bylaws document (PDF)
- [ ] Community rules & regulations
- [ ] Board member names, titles, and contact preferences
- [ ] Community photos (gate, mountain views, common areas, signage)
- [ ] Meeting minutes (at least recent 6–12 months)
- [ ] Annual budget or financial summary (if publicly shared)
- [ ] Approved community color palette or branding (if any)

### Nice-to-Have

- [ ] Community map or plat map
- [ ] Architectural review guidelines and submission form
- [ ] Welcome packet for new residents
- [ ] Emergency preparedness info specific to the community
- [ ] History of the community / developer info
- [ ] Drone or aerial photography of the property

---

## Technical Notes

- The site should lean into the community identity: rural privacy, mountain ranch living, gated exclusivity, natural beauty of the Bradshaw Mountains and Big Bug Creek
- Given the small community size, a static site (HTML/CSS/JS) hosted on something like GitHub Pages, Netlify, or Vercel would work well and be free
- If dynamic features are needed later (resident portal, payments), those can be added incrementally
- The owner (Stewart Rogers, Stewart.Rogers@pobox.com) is the developer and HOA website volunteer
