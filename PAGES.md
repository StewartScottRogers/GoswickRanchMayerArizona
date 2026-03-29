# Goswick Ranch HOA Website — Page Content Specs

Each section below covers one page: URL, H1, purpose, and the actual copy/content to use. Items marked **[BOARD]** cannot be written without input from the HOA board. Everything else is ready to use.

---

## Home — `/`

**H1:** Goswick Ranch
**Subhead / tagline:** A Private Ranch Community in the Bradshaw Mountains

### Hero Section
Full-width landscape photo with overlay text. Use the tagline as the overlay headline.
**[BOARD]** — Need a hero photo (aerial, mountain view, or community entrance gate shot).
Placeholder until then: CSS gradient in `--color-primary` with the text overlay.

CTA button: "View HOA Documents" → `/hoa/documents/`

### Welcome Copy (use as-is)
> Goswick Ranch is a small, exclusive gated community nestled in the foothills of the Bradshaw Mountains near Mayer, Arizona. Set at elevations ranging from 4,400 to 6,000 feet, the community overlooks Big Bug Creek and offers stunning views of one of central Arizona's most dramatic mountain ranges.
>
> With minimum 9-acre lots and site-built homes only, Goswick Ranch preserves the open, rural character that makes this corner of Yavapai County special — a true Arizona ranch lifestyle within reach of both Prescott and the Phoenix metro area.

### Quick Links Section (3-column cards)
- **HOA Documents** — "Access CC&Rs, bylaws, meeting minutes, and financial reports." → `/hoa/documents/`
- **Emergency Services** — "Sheriff, fire district, and emergency contact numbers." → `/resources/emergency/`
- **Contact the Board** — "Questions, concerns, or architectural review requests." → `/contact/`

### Community Snapshot (sidebar or strip)
| | |
|---|---|
| Location | Mayer, AZ 86333 · Yavapai County |
| Setting | Bradshaw Mountain foothills · Big Bug Creek overlook |
| Elevation | ~4,400–6,000 ft |
| Access | Gated · S Goswick Ranch Rd |
| Lot minimum | 9 acres |
| Home minimum | 1,500 sq ft · site-built only |
| Zoning | RCU-2A (Yavapai County) |

---

## About — `/about/`

**H1:** About Goswick Ranch
**Intro:** An overview of the community, its setting, and what makes it distinctive.

### Community Overview Copy (use as-is)
> Goswick Ranch is a privately gated residential subdivision in Mayer, Arizona — a small community of Arizona Urban Ranch Homes perched in the foothills of the Bradshaw Mountains, overlooking Big Bug Creek valley.
>
> The community's covenants set a 9-acre minimum lot size, ensuring that the open, rural character of the land is preserved. Homes must be site-built and at least 1,500 square feet — no manufactured or mobile homes. The result is a neighborhood that genuinely feels like ranch country, not a subdivision.
>
> Residents enjoy dramatic mountain scenery, clean high-desert air, and a level of privacy that's increasingly rare in the greater Phoenix-Prescott corridor. The gate keeps through-traffic out and keeps the community quiet.

### The Bradshaw Mountains
> Goswick Ranch sits in the foothills of the Bradshaw Mountains, a rugged range that runs roughly 40 miles north–south through central Yavapai County. The Bradshaws rise to over 7,600 feet at their highest and are blanketed in piñon-juniper woodland at lower elevations and ponderosa pine higher up.
>
> The range has a rich mining history — the Walker Mining District, just to the north, was one of Arizona's most productive gold and silver areas in the late 1800s. Today the Bradshaws are managed by Prescott National Forest and offer hiking, hunting, and dispersed camping.

### Big Bug Creek
> The community overlooks Big Bug Creek, a seasonal tributary of the Agua Fria River that flows through a dramatic canyon below. The creek drains a large watershed from the Bradshaw Mountains and can run full and fast during monsoon season and spring snowmelt. Residents should be aware of flood potential during heavy rain events — see Emergency Services for Yavapai County flood information.

### Location in Context
> Mayer, Arizona sits roughly equidistant between Prescott (about 25 miles northwest) and the Carefree/Cave Creek area at the edge of the Phoenix metro (about 40 miles south). Interstate 17 is accessible via Cordes Junction, about 15 miles east. The drive to downtown Prescott takes about 40 minutes; the north Phoenix suburbs are about an hour.

**[BOARD]** — Exact gate code/access procedures, any community history from original developers, total number of homes/lots.

---

## Location & Directions — `/about/location/`

**H1:** Location & Directions

### Address
S Goswick Ranch Rd, Mayer, AZ 86333

### Directions Copy (use as-is)

**From Prescott / US-89:**
> Head south on US-89 toward Mayer. Turn left (east) onto Mayer Main Street / AZ-69 east. Continue through Mayer and follow signs toward Cordes Junction. Turn south on S Goswick Ranch Rd. The gated entrance will be on your right.

**From Phoenix / I-17:**
> Take I-17 north to Exit 262 (Cordes Junction / Mayer). Head west on Cordes Junction Road, then north on AZ-69 through Cordes Lakes toward Mayer. Turn onto S Goswick Ranch Rd and look for the gated entrance.

**[BOARD]** — Confirm exact turn-by-turn directions. Add gate access instructions for guests/vendors.

### Map Embed
Embed Google Maps centered on Mayer, AZ 86333. Do not pin the exact gate location publicly — center on the general area.

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...MAYER_AZ..."
  width="100%" height="450" style="border:0;" allowfullscreen loading="lazy">
</iframe>
```
**[BOARD]** — Confirm whether to show exact gate location or general community area only.

### Nearby Points of Reference
| | Distance |
|---|---|
| Mayer, AZ (town center) | ~2 miles |
| Prescott, AZ | ~25 miles |
| Cordes Junction (I-17) | ~15 miles |
| Prescott Valley | ~20 miles |
| North Phoenix suburbs | ~40 miles |
| Prescott Airport (PRC) | ~30 miles |

---

## Photo Gallery — `/about/gallery/`

**H1:** Community Gallery
**[BOARD]** — All photos must come from the board or residents. Cannot build this page until photos are received.

Suggested gallery categories:
- Community entrance / gate
- Aerial / mountain views
- Big Bug Creek overlook
- Wildlife (deer, javelinas, raptors common in the area)
- Seasonal shots (monsoon clouds, winter snow dusting, spring wildflowers)

Technical note: Use a CSS lightbox (no jQuery dependency). A pure CSS or vanilla-JS solution like `<dialog>` works well and keeps the page lightweight.

---

## HOA Information — `/hoa/`

**H1:** HOA Information
Hub page. Brief intro + links to sub-pages.

### Intro Copy (use as-is)
> The Goswick Ranch Homeowners Association is a self-managed HOA governed by a volunteer Board of Directors. The Association maintains the gated entrance, enforces the community's CC&Rs and rules, and manages common areas.
>
> Arizona law (A.R.S. § 33-1805) requires us to make governing documents, financial statements, and meeting minutes available to all members. You'll find them all on this page.

### Sub-page Link Cards
- **Board of Directors** — Meet the current board members → `/hoa/board/`
- **CC&Rs & Bylaws** — Governing documents → `/hoa/documents/`
- **Rules & Regulations** — Community rules → `/hoa/rules/`
- **Meeting Minutes** — Board and annual meeting records → `/hoa/minutes/`

---

## Board of Directors — `/hoa/board/`

**H1:** Board of Directors
**[BOARD]** — All content. Need: names, roles (President, VP, Secretary, Treasurer, Member-at-Large), email addresses or contact form preference, terms.

### Template for each board member:

```
[Name]
[Title]
Contact: [email or "Use the contact form"]
Term expires: [year]
```

### Boilerplate copy (use as-is, fill in blanks):
> The Goswick Ranch HOA is governed by a five-member volunteer Board of Directors elected by community residents. Board members serve [term length] terms and may serve consecutive terms.
>
> The board meets [frequency — e.g., "quarterly"] and holds an annual meeting each [month] open to all residents. See Meeting Minutes for records of past meetings.

---

## CC&Rs & Bylaws — `/hoa/documents/`

**H1:** Governing Documents
**Legal requirement** — A.R.S. § 33-1805. These must be publicly accessible.

### Intro Copy (use as-is)
> Arizona law requires the Goswick Ranch HOA to make its governing documents available to all members and prospective members. You can download them below.
>
> These documents control what residents may and may not do with their property, how the association is governed, and the rights and responsibilities of homeownership in Goswick Ranch.

### Document List (all [BOARD] — PDFs needed)

**[BOARD]** — Need PDFs for:
- CC&Rs (Covenants, Conditions & Restrictions) — recorded with Yavapai County
- Bylaws
- Annual Budget (most recent)
- Financial Statements (most recent fiscal year)
- Any amendments to CC&Rs

### Governing Document Hierarchy (use as-is)
> 1. **Arizona Revised Statutes** (state law — supersedes everything)
> 2. **CC&Rs** (recorded with Yavapai County — core property restrictions)
> 3. **Bylaws** (how the HOA is governed and how elections work)
> 4. **Rules & Regulations** (day-to-day community rules set by the board)

### Yavapai County Records Note
> The CC&Rs are recorded instruments with Yavapai County. You can also search for them at the [Yavapai County Recorder's Office](https://recorder.yavapai.gov/).

---

## Rules & Regulations — `/hoa/rules/`

**H1:** Rules & Regulations
**Legal requirement** — A.R.S. § 33-1805.
**[BOARD]** — Full content. Need the current Rules & Regulations document.

### Known Rules (from CC&Rs/zoning research — confirm with board before publishing)
These are likely covered but verify exact wording in the official documents:

- **Minimum lot size:** 9 acres (CC&R-imposed — stricter than RCU-2A zoning which requires 2 acres)
- **Minimum home size:** 1,500 sq ft living area
- **Construction type:** Site-built homes only. No manufactured, modular, or mobile homes.
- **Zoning classification:** RCU-2A (Yavapai County Rural Conservation Use)
- **Gate access:** Gated community — residents responsible for managing access for guests and vendors

**[BOARD]** — Need the complete Rules & Regulations text, plus anything specific to: animals/livestock, outbuildings/barns, RV/vehicle storage, fencing, landscaping, short-term rentals (Airbnb), commercial activity.

### Architectural Review Section
> Proposed improvements to your home or property that are visible from neighboring lots or common areas may require Architectural Review Committee (ARC) approval before work begins.
>
> [BOARD — confirm ARC process, timeline, submission requirements]
>
> To submit an ARC request, use the [Architectural Review Request form](/contact/arc/).

---

## Meeting Minutes — `/hoa/minutes/`

**H1:** Meeting Minutes
**Legal requirement** — A.R.S. § 33-1805. Must be publicly available (executive session minutes excluded).

### Intro Copy (use as-is)
> Minutes from Goswick Ranch HOA board meetings and annual homeowner meetings are posted below. Arizona law requires these records to be made available to all association members.
>
> Note: Minutes from executive sessions (typically covering legal matters, personnel, or collections) are not posted per A.R.S. § 33-1804.

**[BOARD]** — Need all available meeting minutes as PDFs or text. List chronologically, newest first.

### Template for each entry:
```
[Month Year] — [Board Meeting / Annual Meeting]
[Download PDF] or [View] link
```

---

## News & Announcements — `/news/`

**H1:** News & Announcements
**[BOARD]** — All content. This page starts empty and gets populated as announcements happen.

### Intro Copy (use as-is)
> Stay informed about what's happening at Goswick Ranch. Board announcements, road conditions, community alerts, and upcoming events are posted here.

### Suggested first announcement categories (fill in with real info):
- Annual meeting notice and agenda
- Gate maintenance schedule
- Road grading schedule
- Fire season preparedness reminders
- Monsoon season flood watch info

### News Item Template:
```html
<article class="news-item">
  <time datetime="YYYY-MM-DD">Month DD, YYYY</time>
  <h2>Announcement Title</h2>
  <p>Content here.</p>
</article>
```

---

## Community Calendar — `/news/calendar/`

**H1:** Community Calendar
**[BOARD]** — All content. Need annual meeting date, board meeting schedule, any recurring community events.

### Intro Copy (use as-is)
> Upcoming HOA meetings and community events. All homeowners are welcome at board meetings unless they are designated executive sessions.

Note: A simple static HTML table is fine. No need for a calendar widget unless the board wants one.

---

## Resident Resources — `/resources/`

**H1:** Resident Resources
Hub page linking to the four sub-pages below.

### Intro Copy (use as-is)
> Useful links and contact information for Goswick Ranch residents — emergency services, utilities, county offices, and local service providers.

### Card Links
- **Emergency Services** → `/resources/emergency/`
- **Utilities** → `/resources/utilities/`
- **Yavapai County** → `/resources/county/`
- **Local Services** → `/resources/services/`

---

## Emergency Services — `/resources/emergency/`

**H1:** Emergency Services
This page is high-priority — build it early and make it easy to read on a mobile phone.

### Emergency Numbers

| Service | Number |
|---------|--------|
| **Emergency** | **911** |
| Yavapai County Sheriff (non-emergency) | (928) 771-3260 |
| Mayer Fire District | (928) 632-7737 |
| Arizona DPS (highway patrol) | *347 from cell or (602) 223-2000 |
| Poison Control | (800) 222-1222 |
| APS Power Outages | (855) 910-2337 |

### Mayer Fire District (use as-is)
> The Mayer Fire District serves Goswick Ranch for fire, medical, and rescue emergencies. The district operates out of Station 41 in Mayer. Response times vary based on terrain and road conditions — residents are encouraged to clearly mark their address at the property entrance to assist emergency responders.
>
> Fire District address: 12700 Central Ave, Mayer, AZ 86333

### Sheriff's Office (use as-is)
> Yavapai County Sheriff's Office (YCSO) provides law enforcement for unincorporated Yavapai County, including Goswick Ranch. For non-emergency matters, call the main YCSO line. For emergencies, always call 911.
>
> YCSO website: [yavapaisheriff.org](https://www.yavapaisheriff.org)

### Nearest Hospital
> **Yavapai Regional Medical Center — Prescott**
> 1003 Willow Creek Rd, Prescott, AZ 86301
> (928) 445-2700
> ~30–40 minutes from Goswick Ranch

### Fire & Flood Preparedness (use as-is)
> **Wildfire:** The Bradshaw Mountains and surrounding area are at elevated wildfire risk, particularly from May through monsoon season. The 2017 Goodwin Fire burned thousands of acres in this region. Maintain defensible space around your home. Sign up for Yavapai County emergency alerts at [yavapaiaz.gov/alerts](https://www.yavapaiaz.gov).
>
> **Flash Flooding:** Big Bug Creek can rise rapidly during monsoon storms. Do not attempt to cross flooded roadways. "Turn Around, Don't Drown."
>
> **Post-fire flooding:** Following wildfires, soil in burned areas becomes hydrophobic and runoff increases dramatically. Be especially alert during the first monsoon season after any nearby fire.

### Emergency Resources
- [Yavapai County Emergency Management](https://www.yavapaiaz.gov/emergency)
- [Arizona Emergency Information Network](https://ein.az.gov)
- [National Weather Service — Flagstaff (covers this area)](https://www.weather.gov/fgz)
- [APS Outage Map](https://www.aps.com/en/residential/accountservices/servicerequests/pages/outagecenter.aspx)

---

## Utilities — `/resources/utilities/`

**H1:** Utilities

### Water
> **Mayer Domestic Water Improvement District (MDWID)**
> Provides water service to the Mayer area.
> Phone: (928) 632-4041
> Mailing: P.O. Box 567, Mayer, AZ 86333
>
> **[BOARD]** — Confirm whether Goswick Ranch lots are served by MDWID, private wells, or individual lot wells. This is a critical data point for new residents.

### Electricity
> **Arizona Public Service (APS)**
> Serves the Mayer / Goswick Ranch area.
> Customer service: (602) 371-7171
> New service / outages: (855) 910-2337
> Website: [aps.com](https://www.aps.com)

### Natural Gas
**[BOARD]** — Confirm gas provider or whether homes use propane. No utility provider was identified in research.

### Internet & Phone
**[BOARD]** — Confirm available providers. Rural areas near Mayer may have limited options. Common services in rural Yavapai County include:
- CenturyLink / Lumen (DSL)
- HughesNet / Viasat (satellite)
- Starlink (satellite — good option for rural)
- Some areas have local wireless ISPs

### Trash & Recycling
**[BOARD]** — Confirm hauler name and pickup schedule. Not researched.

### Post Office
> **Mayer Post Office**
> 12680 Central Ave, Mayer, AZ 86333
> (928) 632-7558

---

## Yavapai County — `/resources/county/`

**H1:** Yavapai County Resources

### Key County Links (use as-is)

| Resource | Link |
|----------|------|
| County main site | [yavapaiaz.gov](https://www.yavapaiaz.gov) |
| Assessor (property records) | [assessor.yavapai.gov](https://assessor.yavapai.gov) |
| Recorder (CC&Rs, deeds) | [recorder.yavapai.gov](https://recorder.yavapai.gov) |
| Planning & Zoning | [yavapaiaz.gov/planning](https://www.yavapaiaz.gov/planning) |
| Building permits | [yavapaiaz.gov/building](https://www.yavapaiaz.gov/building) |
| Sheriff's Office | [yavapaisheriff.org](https://www.yavapaisheriff.org) |
| Emergency Management | [yavapaiaz.gov/emergency](https://www.yavapaiaz.gov/emergency) |
| Mayer Public Library | 12740 Central Ave, Mayer · (928) 632-4732 |

### Property Taxes (use as-is)
> Property taxes in the Mayer area are notably low by national standards. The median annual property tax in the Mayer ZIP code area is approximately $476 — well below the national median of roughly $2,400. Taxes are paid to Yavapai County.
>
> Look up your property's assessed value and tax history: [assessor.yavapai.gov](https://assessor.yavapai.gov)

### Building Permits & Zoning
> Goswick Ranch is in Yavapai County's unincorporated area, zoned RCU-2A (Rural Conservation Use). Any new construction, additions, or outbuildings require permits from Yavapai County Development Services. Contact the county before starting any project.
>
> Yavapai County Development Services: (928) 771-3214

### Agua Fria National Monument
> Located about 20–30 miles south of Goswick Ranch, the Agua Fria National Monument (managed by BLM) offers hiking, wildlife viewing, and prehistoric ruins exploration. [blm.gov/az/agfria](https://www.blm.gov/office/arizona-state-office)

---

## Local Services — `/resources/services/`

**H1:** Local Services
**[BOARD]** — This page is mostly a community-curated list. Seed it with what's known; ask residents to submit additions.

### Seed Content (use as-is)

**Groceries / Essentials**
> The nearest full-service grocery stores are in Prescott Valley or Mayer/Dewey area. Mayer has a small market for basics.

**Schools**
> **Mayer Unified School District #43**
> Serves Mayer and surrounding communities.
> Superintendent's office: (928) 632-4263
> Website: [mayerusd.org](https://www.mayerusd.org) (verify URL with district)
>
> - Mayer Elementary School (K–8)
> - Mayer High School (9–12)

**Library**
> **Mayer Public Library**
> 12740 Central Ave, Mayer, AZ 86333
> (928) 632-4732
> Hours: Mon–Fri (confirm current hours with library)
> Part of the Yavapai County Free Library District.

**[BOARD]** — Add recommended contractors, landscapers, well drillers, propane suppliers, etc. as the board sees fit. Consider a note that "listing here is not an endorsement."

---

## Contact — `/contact/`

**H1:** Contact the Board
**[BOARD]** — Need board email address(es) to wire up the contact form.

### Intro Copy (use as-is)
> Use the form below to reach the Goswick Ranch HOA Board of Directors. We typically respond within [BOARD — fill in timeframe] business days.
>
> For **urgent matters or emergencies**, call 911 or the Yavapai County Sheriff non-emergency line at (928) 771-3260.

### Contact Form Fields
```
Name (required)
Email (required)
Phone (optional)
Subject (select: General Question | Dues Inquiry | Rule Concern | Other)
Message (required)
```

Implementation options:
- **Formspree.io** (free tier: 50 submissions/month) — no backend needed, just set the `action` on the form
- **Netlify Forms** (if hosting on Netlify) — built in, no code needed
- **mailto: link** — simplest, but exposes board email to spam

### Mailing Address
**[BOARD]** — Provide an HOA mailing address (PO Box recommended, not a personal home address).

---

## Architectural Review Request — `/contact/arc/`

**H1:** Architectural Review Committee Request
**[BOARD]** — Confirm ARC process, timeline, and who reviews submissions before publishing this form.

### Intro Copy (use as-is — fill blanks)
> Before beginning any exterior improvement, addition, new structure, or landscaping change that may be visible from neighboring properties or common areas, submit an ARC request for board review.
>
> Approval typically takes [BOARD — how many days?]. Do not begin work until you receive written approval.

### ARC Request Form Fields
```
Homeowner Name (required)
Property Address (required)
Email (required)
Phone (required)

Description of proposed work (required, textarea)
Estimated start date
Estimated completion date

Attachments: site plan / drawings / photos (file upload, if hosting supports it)

Signature / acknowledgment checkbox:
"I understand that work may not begin until written approval is received from the ARC."
```

**[BOARD]** — Confirm who receives ARC submissions and whether they should go to a dedicated email or a board member directly.
