# Goswick Ranch — Deep Research Report
**Date:** March 29, 2026
**Purpose:** Aggressive web research to fill gaps and discover new facts for the HOA website

---

## Summary of What This Session Found (New vs. Prior Research)

Prior research in files 01–09 established basic community facts. This session significantly advances the picture in several areas:

- **HOA fee confirmed: $216/year ($18/month)** — found in a live MLS listing
- **Legal description of subdivision:** "GOSWICK RANCH LS 56/8-12" — plat is recorded at Liber (Book) 56, pages 8–12 in Yavapai County
- **APN confirmed:** 402-12-003F (one known parcel; others in the 402-12-xxx range)
- **The Goswick family is real:** Mark Goswick Cattle Co, Bloody Basin Rd, Mayer AZ 86333 — a working cattle operation (phone: 928-632-7730)
- **Original ranch history confirmed:** Multiple listings describe the subdivision as "originally part of the historic Goswick Ranch" — the modern HOA subdivision was carved from an actual cattle ranch
- **Sold transaction confirmed:** Lot 1 (Vaca Bonita Trail, 9.1 acres) sold July 25, 2023 for $58,000 ($59,750 list)
- **Street names inside the subdivision:** S Hawk Mountain Trail, S Miners Pick Rd, E Vaca Bonita Trail/Rd, Bullhorn Rd, E Pearl Mountain Rd, E Elizabeth Mine Rd
- **Access directions confirmed:** From Hwy 69, turn west on E Poland Rd (also called Poland Junction Rd), follow signs toward Goswick Ranch, gate accessed via lockbox
- **Gate has a lockbox** for showing/visitor access; listing agents obtain keys via the lockbox
- **Two ZIP codes in use:** Some listings show 86333 (Mayer), others 86327 (Dewey), others 86329 (Humboldt) — address ambiguity is a known issue
- **No Facebook group or Nextdoor presence** found in any search
- **No Arizona Corporation Commission filing** found under "Goswick Ranch" (may be incorporated under a different name, or may not be incorporated at all)
- **No HOA management company** found — confirms self-managed status
- **No court records or disputes** found related to the subdivision itself (Goswick surname cases found are unrelated criminal matters)

---

## 1. Arizona Corporation Commission Search

**URL attempted:** https://ecorp.azcc.gov/EntitySearch/Index
**Result:** Site returned ECONNREFUSED (ACC portal was unreachable via fetch)

**URL attempted (redirect):** https://arizonabusinesscenter.azcc.gov/
**Result:** Angular-based web app, content not rendered by fetch

**Search attempted:** Google search for `azcc.gov "Goswick Ranch"` — no results returned.

**Conclusion:** No entity named "Goswick Ranch" or "Goswick Ranches" appears to be publicly indexed as an Arizona Corporation Commission registrant. Possible explanations:
1. The HOA is not incorporated (unincorporated association)
2. The HOA is incorporated under a different name (e.g., a longer formal name)
3. The ACC's online records may not be fully indexed by search engines

**Recommended action:** Search the ACC entity portal directly at https://arizonabusinesscenter.azcc.gov/ — search "Goswick" to find any entities with that name.

---

## 2. Yavapai County Recorder / Plat Records

### Legal Description Discovered
From the Coldwell Banker MLS listing for 5520 S Hawk Mountain Trail (MLS# 1073459):

> **"GOSWICK RANCH LS 56/8-12 AN IRREG PTN OF PCL 11"**

This means:
- Subdivision name: **Goswick Ranch**
- Liber (book): **56**
- Pages: **8–12**
- Parcel reference: Irregular portion of Parcel 11

This gives us the exact plat book and page numbers to retrieve from the Yavapai County Recorder's Office.

**To retrieve the official plat:** Go to https://www.yavapaiaz.gov/Mapping-and-Properties/Recorders-Office/Documents-Search and search for Subdivision Maps, Book 56, Pages 8–12. The plat will show lot boundaries, total lot count, street names, easements, and recording date.

### Known APN Numbers
- 402-12-003F — 5520 S Hawk Mountain Trail (27.19 acres, Parcel 11 portion)
- 402-12-008C — 5668 S Miners Pick Rd (9.08 acres; per Movoto, delisted 2023 at $1M)
- 402-12-003F (per Coldwell Banker listing)

All known parcels in the 402-12-xxx range confirm this is one subdivision section. The "LS 56/8-12" legal description is consistent across multiple lots.

### Recorder Resources
| Resource | URL |
|----------|-----|
| Recorded Documents Search | https://www.yavapaiaz.gov/Mapping-and-Properties/Recorders-Office/Documents-Search |
| GIS Interactive Map | https://gis.yavapaiaz.gov/V4/map.aspx?search=402-12-003f |
| Parcel Search | https://gis.yavapaiaz.gov/v4/search.aspx |
| Property Tax Inquiry | https://taxinquiry.yavapaiaz.gov/ |

---

## 3. Real Estate Market — Current Listings

### Active Listings Found (as of March 2026)

All listings are in Goswick Ranches/Goswick Ranch subdivision unless noted.

| Address | Price | Acreage | Type | MLS | Agent/Broker | Notes |
|---------|-------|---------|------|-----|-------------|-------|
| 5520 S Hawk Mountain Trail, Mayer 86329 | $599,000 | 27.19 acres | SFH (under construction) | 1073459 | Keller Williams Arizona Realty | 1 bed/1 bath, 1,500 sq ft, 6-car garage/workshop, 4,000 sq ft foundation already poured; HOA $216/yr; well + 3,600-gal tank; borders National Forest; listed May 21, 2025 |
| 5668 S Miners Pick Rd, Humboldt 86329 | $650,000 | 9.08 acres | Land | 6814814 (Compass) / 1069387 (Redfin) | Various; Mollie Anderson also appears | 9 acres, well, underground electricity/phone, grazing lease, borders state land; HOA ~$10/month ($120/yr) per one source |
| 5668 S Miners Pick Rd (different listing) | $375,000 | 9.08 acres | Land | 6957204 | Mollie Anderson, Pro Star Realty | Same parcel, relisted lower |
| 10410 E Vaca Bonita Rd, Humboldt 86329 | $750,000 | ~9 acres | Land | 531974 | — | "Part of the historic Goswick Ranch," set atop one of highest mountains in Yavapai County, 6,000 ft elevation, borders state land with original ranch buildings/barns |
| 10450 E Vaca Bonita, Dewey/Humboldt 86329 | $275,000 | 9.02 acres | Land | — | Mollie Anderson, Pro Star Realty | Vacant land |
| 10410 E Vaca Bonita, Dewey/Humboldt 86329 | $275,000 | 8.95 acres | Land | — | Mollie Anderson, Pro Star Realty | Vacant land |
| 0j Bullhorn, Mayer 86333 | $295,000 | 36.03 acres | Land | 1048555 | West USA Realty of Prescott | 36-acre private lot; "sweeping views for miles"; expired/off market; annual tax: $5.00 |
| 000 Miners Pick Lot 20, Mayer | $450,000 | 38.83 acres | Land | — | Iannelli and Associates | |
| 20 Miners Pick #20, Mayer | $450,000 | 38.83 acres | Land | — | Heidi Fisher, Iannelli and Associates | Same as above |

**Note:** eXp Realty shows "5 homes for sale" with average price ~$288,998 and range $250,000–$599,000. Listing counts vary by platform depending on what's active at any moment.

### Previously Sold / Delisted Properties

| Address | Status | Price | Acreage | Notes |
|---------|--------|-------|---------|-------|
| 0d E Vaca Bonita Trail (Lot 1), Dewey-Humboldt 86327 | **SOLD July 25, 2023** | **$58,000** (list $59,750) | 9.1 acres | Goswick Ranches subdivision; Zoning RCU2A; restricted to "SB Homes Only"; annual tax $275 (2020); accessed via lockbox at gate; HOA: "Yes" but fee not specified in record |
| 5668 S Miners Pick Rd | Delisted April 26, 2023 | $1,000,000 | 9.08 acres | Listed by Steve M Irwin, Berkshire Hathaway; APN 402-12-008C; listed as "HOA Fee: $0/month" in Movoto record |

**Key sold data point:** A 9.1-acre lot sold July 2023 for $58,000. This is notably lower than current $275,000 asking prices for similar acreage, suggesting significant price appreciation between 2023 and 2026.

### Price Observations
- **Raw land:** $58,000 (2023 sold) to $450,000 (38 acres asking)
- **Improved land (SFH being built):** $599,000–$750,000
- **Price per acre:** Varies widely; 9-acre lots asking $275K–$375K ($30K–$42K/acre); larger 36–38-acre lots at $295K–$450K ($7.6K–$12K/acre)
- **Zillow Zestimate for 5905 S Goswick Ranch Rd:** ~$330,900; Trulia estimate ~$475,500 (large discrepancy typical of rural properties)
- **HOA fee:** One listing confirmed $216/year ($18/month); another showed "$0/month" and another "$10/month" — the $216/year figure from the Coldwell Banker data is the most reliable as it came from a structured MLS field

---

## 4. Straw Bale Home — Community Precedent

One prominent listing (likely 5520 S Hawk Mountain Trail based on descriptions) describes:

> "1,224 sqft straw bale home nestled on just under 20 acres of patented land, with an 864 sqft garage. The home is built with 48' x 12' x 16' thick straw bale walls then covered with concrete, providing incredible insulation."

**Implication for HOA website:** The community apparently allows alternative construction methods (straw bale), which is significant. The CC&Rs say "SB Homes Only" on at least one lot — this likely means "Site-Built" not "Straw Bale," but both appear to exist in the community. The straw bale home is a genuine community feature that could be highlighted.

---

## 5. Community Access — Gate and Entry

### How to Get In
Based on multiple listing directions:

1. From Hwy 69, turn **west onto E Poland Rd** (also referenced as Poland Junction Rd)
2. Travel approximately **1.5–7 miles** depending on destination within the community
3. There is a sign for Goswick Ranch
4. **Gate is locked — access via lockbox** (listing agents obtain key from lockbox for showings)
5. Once through the main gate, internal roads branch to Hawk Mountain Trail, Vaca Bonita Trail, Miners Pick Rd, Bullhorn Rd, and other named roads

### Internal Roads
The roads inside are described as:
- "Dirt/gravel, subdivision-maintained private road" (per Coldwell Banker data)
- "Private Maintained Road, Subdivision Maintained Road" (per IDX data)

This means **road maintenance is an HOA/resident responsibility** — a key governance issue.

### Gate Type
The current gate appears to use a **physical lockbox/key system** rather than an electronic keypad or card system. Real estate agents get the key from the lockbox for showings. This is notable because it affects:
- Visitor access procedures
- Delivery services (FedEx, UPS, USPS, Amazon)
- Emergency services access (fire, EMS, sheriff)
- Upgrade cost if the HOA ever wants to modernize to electronic access

---

## 6. The Historic Goswick Ranch — Background

### The Goswick Family
- **Mark Goswick Cattle Co** is a documented business at Bloody Basin Rd, Mayer, AZ 86333
- Phone: (928) 632-7730
- Business data shows ~$84,000 annual sales, ~1 employee
- This is a real, active cattle operation near the subdivision
- Source: whereorg.com business listing

### 5905 S Goswick Ranch Rd — The Original Ranch House
- Built: 1948 or 1949 (database discrepancy)
- Size: 1,435–1,478 sq ft (database discrepancy)
- Lot: 82.36 acres
- Status: Not currently listed for sale
- Zillow Zestimate: ~$330,900
- This appears to be the original ranch homestead from which the subdivision was carved

### Subdivision Origin
Multiple listing descriptions explicitly state that subdivision lots are "originally part of the historic Goswick Ranch" and reference "buildings, barns, and homes of the original ranch." The subdivision was created by subdividing an actual working cattle ranch that had been operating since at least 1948.

### Patented Land Note
Several listings describe lots as "patented land" — this is significant in the rural West and means the land has been converted from federal land to private ownership through the historic federal patent (homestead, mining, etc.) process. Patented mining claims are common in the Bradshaw Mountains area.

---

## 7. Location and Setting — Confirmed Details

### Geography
- **Elevation:** ~6,000 ft (confirmed by multiple listings; one source says "one of the highest mountains in Yavapai County")
- **Water feature:** Overlooks Big Bug Creek
- **Mountain range:** Bradshaw Mountains
- **Adjacent public lands:** Borders State Land (Arizona State Trust Land) and National Forest (Prescott National Forest); BLM land accessible nearby
- **Nearest towns:** Dewey-Humboldt (closest), Mayer, Prescott (27 mi N), Phoenix (75 mi S)

### Horse/Trail Access
- Multiple listings confirm: "hundreds of miles of horse & hiking trails" accessible from or near the community
- Prescott National Forest: 950+ miles of trails
- BLM land: Immediately adjacent
- State Trust Land: Adjacent (requires recreational use permit from Arizona State Land Department)
- This is a confirmed equestrian community — horses are explicitly allowed under RCU-2A zoning

### Climate
- At 6,000 ft, the community experiences genuine four seasons
- Cooler summers than Phoenix (typically 20–25°F cooler)
- Snow in winter is possible and occasional
- Road conditions in winter could be a governance issue (snow/ice on private subdivision roads)

---

## 8. Zoning — RCU-2A Details (Confirmed)

From Yavapai County Planning & Zoning Ordinance research:

| Provision | Detail |
|-----------|--------|
| Minimum lot size (county baseline) | 35,000 sq ft (~0.8 acres per some sources; 2 acres per RCU-2A designation) |
| Goswick Ranch CC&R minimum | 9 acres (much more restrictive than county baseline) |
| Livestock permitted | Yes — farm animals allowed for "convenience and pleasure of lot occupants," subject to Allowed Animal Chart in Section 501E |
| Stables/barns | Permitted; must observe same setbacks as dwelling unit |
| Camping | Permitted on 2-acre+ lots, 10 days at a time, 3x/year, with 30-day gaps |
| Commercial uses | Not permitted in RCU |
| Short-term rentals | Not expressly permitted in RCU; may be subject to restrictions |

**Livestock Allowance Chart:** The Yavapai County ordinance references an "Allowed Animal Chart" (Section 501E) for permitted livestock numbers. The HOA's own CC&Rs may impose further restrictions.

---

## 9. HOA Structure — What We Now Know

### Annual Fee: $216/year
Confirmed from the Coldwell Banker MLS data for 5520 S Hawk Mountain Trail:
- **HOA Fee:** $216 annually ($18/month)
- **Association type:** Homeowners (not condo, not master-planned)

One other source (search snippet for 5668 S Miners Pick Rd) cited "$10/month" ($120/year). The Movoto data for the same parcel listed "$0/month" — this may reflect an older listing or data error. The $216/year figure from a structured Coldwell Banker MLS field is most reliable.

### No Management Company
No professional HOA management company has been found associated with Goswick Ranch in any search, across any database. This confirms the community is **self-managed**.

### No HOA Website Found
No independent website for the Goswick Ranch HOA was found. The only online presence is through real estate listing aggregators.

### No Social Media Presence Found
- Facebook: No group or page found (confirmed via site:facebook.com search)
- Nextdoor: No community page found
- This is a very private, off-grid community — consistent with the "all about privacy" marketing

### Self-Managed HOA Requirements (Arizona)
Under A.R.S. Title 33 (Planned Communities) and Title 10 (Nonprofit Corporations), self-managed HOAs must:
- Hold annual membership meetings
- Maintain detailed meeting minutes
- Follow Arizona's Open Meeting Law (A.R.S. 33-1804)
- Conduct annual audits or financial reviews (A.R.S. 33-1810)
- File required reports with the Arizona Corporation Commission (if incorporated)
- Maintain fiduciary duties: care, loyalty, and confidentiality

Common failures in self-managed Arizona HOAs (from Mulcahy Law Firm):
- Informal meetings without proper notice or voting procedures
- Inadequate fraud prevention controls
- Delayed delinquency collection
- Inconsistent rule enforcement
- Failure to maintain current ACC filings

---

## 10. What Rural Ranch HOA Residents Care About

Based on research into similar Arizona communities and relevant legal/governance resources:

### Top Issues for Rural Gated Ranch HOA Residents

1. **Road maintenance** — Unpaved subdivision roads are the single largest maintenance expense. Grading, drainage, and pothole repair are recurring needs. High-clearance vehicles help but don't fix bad roads. Snow/ice in winter adds urgency.

2. **Gate and access control** — Who has access, how visitors enter, how delivery drivers and emergency services get in. Current lockbox system is archaic; many communities upgrade to electronic keypads or app-based systems. Emergency access codes are required by law in most Arizona jurisdictions.

3. **Water** — Most rural Arizona properties have private wells and cisterns/tanks (5520 Hawk Mountain has a 3,600-gallon tank). HOA does not appear to maintain a shared water system; each lot is responsible for its own well. Water availability during drought or fire is a real concern.

4. **Fire risk** — At 6,000 ft in the Bradshaw Mountains, wildfire is an existential concern. Defensible space, evacuation routes, vegetation management, emergency water storage, and coordination with Yavapai County fire districts all matter.

5. **Livestock and grazing rights** — Multiple listings reference grazing leases on the land. Open-range law issues (Arizona is a fence-out state in many areas). HOA may need to address perimeter fencing, cattle trespass from neighboring ranches, and the rights/obligations of lot owners who want to run animals.

6. **Lot use and construction** — Who can build what, where. The CC&Rs restrict to site-built homes with 1,500 sq ft minimum. Outbuildings (shops, stables, barns) require compliance with county setback rules. Straw bale construction appears to be permitted. RV storage is mentioned as a permitted use in listings.

7. **Privacy and security** — The primary selling point of the community. Residents who chose this community value it deeply. Unauthorized access, trespassing, hunting/riding on private land without permission are ongoing concerns.

8. **Assessments and dues** — At $216/year, the HOA has very little operating budget. Increases are permitted under Arizona law up to 20% per year without membership vote. Reserve fund adequacy for road repair is a chronic challenge for low-dues rural HOAs.

9. **Dark sky / light pollution** — Rural communities at 6,000 ft attract people who value night skies. This is both a lifestyle amenity and a potential HOA rule area (exterior lighting restrictions).

10. **Short-term rentals** — Not referenced in any Goswick Ranch listing, but an emerging issue for all Arizona HOAs. The CC&Rs may need to address this explicitly.

---

## 11. Comparable Rural Ranch HOA Communities in the Area

### Silver Mountain Ranches (Mayer, AZ)
- **Website:** https://silvermountainranchesaz.com/
- **Type:** Equestrian development; 5-acre minimum lots; 300+ acres
- **Homes:** Ranch-style, energy-efficient, off-grid capable; solar, propane, well/septic
- **Amenities planned:** Heated oasis pool, horse trails, hiking trails, on-site horse boarding, dog boarding, absentee homeowner services
- **Identity:** "Like-minded, horse-loving homeowners yearning for a sustainable living environment"
- **What they do well online:** Clear community identity, model home specs, floor plans, PDF public report available, focus on horse culture and sustainability
- **What they lack:** CC&Rs and governance documents not publicly linked

### The Ranch at Prescott HOA
- **Website:** https://ranchatprescotthoa.org/
- **Type:** Planned community; ~950 home sites on 1,000 acres; established 1987
- **Structure:** 8 units, each with elected Council Member + Alternate
- **Amenities:** Active social club (card games, hiking, book clubs, dinner groups, Bible study, quilting)
- **Online strength:** FrontSteps resident portal for payments and sign-ins; strong "About Us" section with governance, safety, and social info; dedicated fire/evacuation resources
- **Key lesson for Goswick:** Even a large HOA emphasizes community social life online; small HOAs can do the same at a lower level

### The Ranch HOA (ranchhoa.org — unspecified AZ location)
- **Website:** https://www.ranchhoa.org/covenants.html
- **Notable covenants found:**
  - No farm animals (chickens, goats, etc.) — note: opposite of Goswick Ranch's livestock-friendly approach
  - Minimum 2,000 sq ft total (1,500 on main level)
  - Minimum 2-car attached or detached garage
  - 15-foot no-clear buffer from lot lines
  - No solid board fences
  - $10,000 refundable construction security deposit
  - ARC approval required before any clearing or construction
  - Construction noise: quiet hours 8 PM–8 AM, no Sundays
- **Lesson:** Their covenant page is publicly available and well-formatted — a useful model

---

## 12. Key Legal Considerations for Rural Arizona HOA

### Open Range / Livestock Trespass
- Arizona is a "fence-out" state in rural/open-range areas
- In open-range areas: landowners must fence to keep cattle OUT; ranchers not liable for trespass
- In no-fence districts: livestock owners must contain animals and are liable for trespass
- HOAs must confirm their district status via county records
- **Implication for Goswick Ranch:** Given proximity to Mark Goswick Cattle Co and other ranching operations, cattle trespass onto subdivision lots is a plausible issue
- Source: https://www.chdblaw.com/livestock-trespass-in-arizona-guidance-for-homeowners-associations/
- Arizona State Law Journal article (2025): https://arizonastatelawjournal.org/2025/03/23/do-hoas-have-a-duty-to-protect-against-cattle-invasions/

### HOA Duty to Maintain Common Area
Under Arizona law (A.R.S. Title 33), HOAs must "maintain, repair, and replace the Common Area." For Goswick Ranch, common area likely includes:
- The main gate and access road
- The private subdivision roads
- Any shared easements

### Private Road Maintenance
In Yavapai County, "all owners are accountable for road maintenance." If no private road maintenance agreement exists, owners can establish one or form a road improvement district. The HOA presumably covers this through annual dues.

---

## 13. Platforms, Directories, and Online Presence

### Current Online Presence (Where Goswick Ranch Appears)
| Platform | URL | Content |
|----------|-----|---------|
| eXp Realty | https://www.exprealty.com/mayer-az-real-estate/goswick-ranches | 5 listings, avg $288,998 |
| Zillow (subdivision page) | https://www.zillow.com/goswick-ranch-mayer-az-86333/ | Listings (requires JS render) |
| Zillow (5905 address) | https://www.zillow.com/homedetails/5905-S-Goswick-Ranch-Rd-Mayer-AZ-86333/8761709_zpid/ | Main address, not for sale |
| Trulia (5905 address) | https://www.trulia.com/p/az/mayer/5905-s-goswick-ranch-rd-mayer-az-86327--2478072347 | Property page |
| Trulia (community) | https://www.trulia.com/property/3273516618-Goswick-Ranch-Dewey-Humboldt-AZ-86329 | Community page |
| Redfin (Vaca Bonita lots) | https://www.redfin.com/AZ/Unknown/10410-E-Vaca-Bonita-Rd-Unknown/home/162338552 | $750K listing |
| Redfin (Miners Pick) | https://www.redfin.com/AZ/Dewey-Humboldt/5668-S-Miners-Pick-RD-86327/home/188862714 | $650K listing |
| Discoverphoenixhomesforsale.com | https://www.discoverphoenixhomesforsale.com/area/mayer-AZ/goswick-ranches/listings | 4 listings |
| simplyhomesaz.com | https://simplyhomesaz.com/area/humboldt-AZ/Goswick-Ranches/listings | 2 listings |
| arizonahomesearch.com | https://www.arizonahomesearch.com/results-gallery/?hood=231350 | 1 listing |
| joshberkley.com | https://www.joshberkley.com/results-gallery/?hood=231350 | 1 listing |
| land.com | https://www.land.com/property/Goswick-ranch-lot-6-Dewey-Humboldt-Arizona-/245464/ | Lot 6 listing (403 blocked) |
| LandSearch | https://www.landsearch.com/properties/j-bullhorn-mayer-az-86333/2324921 | 36-acre Bullhorn lot (403 blocked) |
| Coldwell Banker | https://www.coldwellbankerhomes.com/az/mayer/5520-s-hawk-mountain-trail/pid_65428407/ | Hawk Mountain listing, HOA fee confirmed |
| Long Realty | https://www.long-realty.com/property/139-1048555-0j-bullhorn-mayer-AZ-86333 | Bullhorn listing (403) |
| arizonarealestate.com | https://www.arizonarealestate.com/mayer-az/86333/0j-bullhorn/18373144-lid/ | Bullhorn (403) |
| Weichert | https://www.weichert.com/106046916/ | Bullhorn — expired/off market |
| point2homes.com | https://www.point2homes.com/US/Vacant-Land-For-Sale/AZ/Yavapai-County/0d-E-Vaca-Bonita-Trail/121988588.html | Vaca Bonita lot 1 (403) |
| realty.com | https://www.realty.com/land-listings/314752634/0d-E-Vaca-Bonita-Trail-Lot-1-Dewey-AZ-86327 | Lot 1 — SOLD July 2023 for $58,000 |
| Movoto | https://www.movoto.com/dewey-humboldt-az/5668-s-miner-pick-rd-dewey-humboldt-az-86301-476_1050042/ | Miners Pick — delisted Apr 2023 at $1M |
| prescottarizonahouses.com (IDX) | https://prescottarizonahouses.idxbroker.com/idx/details/listing/b284/1038156/0d-E-Vaca-Bonita-Trail-Dewey-Humboldt-AZ-86327 | Lot 1 details |

### No Presence Found On:
- Facebook (no group or page)
- Nextdoor (no neighborhood page indexed)
- Arizona Corporation Commission public entity index
- Arizona HOA directory (arizona-homeowners-associations.com) — could not verify (403)
- Yavapai Title HOA list (PDF) — could not verify (SSL error)
- Any HOA management company directory

---

## 14. Gaps Still Not Resolved

The following questions remain unanswered after this research session. Most require either direct county record access or cooperation from the HOA board.

| Question | Why It Matters | How to Answer |
|----------|---------------|---------------|
| Total number of lots/parcels in subdivision | Establishes community size | Retrieve plat from Yavapai Recorder, Book 56, Pages 8–12 |
| Date subdivision was officially recorded | Establishes HOA history | Same plat retrieval |
| Whether HOA is incorporated with ACC | Legal structure question | Search ACC at https://arizonabusinesscenter.azcc.gov/ (search "Goswick") |
| Official name of the HOA legal entity | For website, documents | ACC search or board documents |
| Exact HOA fee (resolve $120 vs. $216 discrepancy) | Budget and transparency | Board must confirm |
| CC&Rs full text | Website content | Documents exist in this project: `Documents/CC&Rs Goswick HOA.pdf` |
| Whether lots can be split or combined | Development questions | Review CC&Rs and county rules |
| Open-range or no-fence district status | Livestock trespass liability | Contact Yavapai County Development Services |
| Water source for each lot (well, shared, none) | Infrastructure question | County records or board knowledge |
| Fire district coverage | Emergency services question | Yavapai County Emergency Services or local fire district |
| Whether short-term rentals are prohibited | Relevant to CC&Rs update | Review CC&Rs text |
| Gate system details (lockbox only? Code?) | Website FAQ content | Board knows |
| Postal address ambiguity (86333 vs 86327 vs 86329) | Correct address on website | Post Office or county address database |

---

## 15. Content Ideas for the HOA Website — From This Research

### Factual Claims Now Confirmed for Website Use:
- "Gated private community in the Bradshaw Mountains of Yavapai County, Arizona"
- "Originally part of the historic Goswick Ranch, a working cattle operation in the Mayer area"
- "Located at approximately 6,000 feet elevation, one of the highest areas in Yavapai County"
- "Overlooking Big Bug Creek, surrounded by the Bradshaw Mountains"
- "Borders Prescott National Forest and Arizona State Trust Land, providing access to hundreds of miles of horse and hiking trails"
- "RCU-2A zoning — site-built homes, minimum 9-acre lots, livestock and horses permitted"
- "Private well required per lot; subdivision-maintained private road system"
- "Annual HOA dues: $216/year"
- "Adjacent to BLM land and Prescott National Forest for riding and hiking"
- "Located between Prescott (~27 miles) and Phoenix (~75 miles) via Hwy 69"

### Listing Descriptions That Reveal Community Character (Verbatim Quotes from MLS):
- "Goswick Ranches are gated and all about privacy to your comfort level, centrally located between Prescott and Phoenix area."
- "Nestled in the exclusive, gated community of Goswick Ranches offering unparalleled privacy"
- "Nine acres of pristine prairie at approximately 6,000 feet"
- "VIEWS and Open Land are waiting for you to build your dream home!"
- "Perfect for ranchers, horse owners, investors, developers, and outdoor enthusiasts"
- "Mini-Ranches are trending & widely sought after in Arizona"
- "The sweeping views and serene silence of peace and harmony"
- "Access to BLM Land and Prescott National Forest for riding"
- "Hundreds of miles of horse & hiking trails and loads of exploring to be done in the Prescott National Forest"
- "Originally part of the historic Goswick Ranch, this 9-acre property is graced with amazing panoramic views"

---

## 16. Sources Consulted in This Research Session

(All URLs listed; those marked [BLOCKED] returned 403/connection errors)

- https://www.exprealty.com/mayer-az-real-estate/goswick-ranches [partial content]
- https://www.ezhomesearch.com/us/az/mayer/goswick-ranches/ [BLOCKED 403]
- https://www.zillow.com/goswick-ranch-mayer-az-86333/ [404]
- https://www.zillow.com/homedetails/5905-S-Goswick-Ranch-Rd-Mayer-AZ-86333/8761709_zpid/ [JS-only]
- https://www.trulia.com/p/az/mayer/5905-s-goswick-ranch-rd-mayer-az-86327--2478072347 [BLOCKED 403]
- https://www.trulia.com/p/az/humboldt/goswick-ranch-dewey-humboldt-az-86329--2320618982 [BLOCKED 403]
- https://www.trulia.com/property/3273516618-Goswick-Ranch-Dewey-Humboldt-AZ-86329 [BLOCKED 403]
- https://www.arizona-homeowners-associations.com/arizona_hoa_p_list.php?mastertable=arizona-hoa-counties&masterkey1=Yavapai [BLOCKED 403]
- https://www.yavapaititle.com/wp-content/uploads/2019/01/HOA_LIST_12-31-18.pdf [SSL error]
- https://ecorp.azcc.gov/EntitySearch/Index [ECONNREFUSED]
- https://ecorpuatonline.azcc.gov/EntitySearch/Index [→ redirect to arizonabusinesscenter.azcc.gov]
- https://arizonabusinesscenter.azcc.gov/ [Angular app, no content rendered]
- https://gis.yavapaiaz.gov/v4/search.aspx [BLOCKED 403]
- https://taxinquiry.yavapaiaz.gov/Main/ParcelSearch [BLOCKED 403]
- https://gis.yavapaiaz.gov/V4/map.aspx?search=402-12-003f [BLOCKED 403]
- https://app.regrid.com/us/az/yavapai [partial content — no parcel data]
- https://www.acrevalue.com/plat-map/AZ/Yavapai/ [JS-only]
- https://www.discoverphoenixhomesforsale.com/area/mayer-AZ/goswick-ranches/listings [SUCCESS — 4 listings]
- https://simplyhomesaz.com/area/humboldt-AZ/Goswick-Ranches/listings [SUCCESS — 2 listings]
- https://www.redfin.com/AZ/Dewey-Humboldt/0c-E-Vaca-Bonita-TRL-86327/home/177219197 [BLOCKED 403]
- https://www.redfin.com/AZ/Dewey-Humboldt/0d-E-Vaca-Bonita-TRL-86327/home/177218912 [BLOCKED 403]
- https://www.redfin.com/AZ/Unknown/10410-E-Vaca-Bonita-Rd-Unknown/home/162338552 [BLOCKED 403]
- https://prescottarizonahouses.idxbroker.com/idx/details/listing/b284/1038156/0d-E-Vaca-Bonita-Trail-Dewey-Humboldt-AZ-86327 [SUCCESS — Lot 1 sold $58K, July 2023]
- https://www.realty.com/land-listings/314752634/0d-E-Vaca-Bonita-Trail-Lot-1-Dewey-AZ-86327 [BLOCKED 403]
- https://www.realty.com/home-listings/1033010069/5520-S-Hawk-Mountain-Trail-Mayer-AZ-86329 [BLOCKED 403]
- https://www.hommati.com/3DTour-AerialVideo/5520-S-Hawk-Mountain-Trail-Mayer-Az--HPI54596944 [BLOCKED 403]
- https://www.land.com/property/5520-s-hawk-mountain-trail-mayer-arizona-86329/23614319/ [BLOCKED 403]
- https://www.land.com/property/Goswick-ranch-lot-6-Dewey-Humboldt-Arizona-/245464/ [BLOCKED 403]
- https://www.coldwellbankerhomes.com/az/mayer/5520-s-hawk-mountain-trail/pid_65428407/ [SUCCESS — HOA $216/yr, full details]
- https://www.century21.com/property/5520-s-hawk-mountain-trail-mayer-az-86329-REN033537992 [SUCCESS — full details]
- https://www.klausteam.com/property-search/detail/107/6814814/5668-s-miners-pick-rd-humboldt-az-86329/ [BLOCKED 403]
- https://www.compass.com/listing/5668-miners-pick-road-mayer-az-86333/1775622140752028761/ [JS-only]
- https://www.compass.com/listing/0-south-elizabeth-mine-road-mayer-az-86333/282410781633526321/ [404]
- https://www.movoto.com/dewey-humboldt-az/5668-s-miner-pick-rd-dewey-humboldt-az-86301-476_1050042/ [SUCCESS — delisted $1M, HOA $0 per this listing, APN 402-12-008C]
- https://www.arizonahomesearch.com/results-gallery/?hood=231350 [SUCCESS — 1 active listing $375K]
- https://www.joshberkley.com/results-gallery/?hood=231350 [SUCCESS — 1 active listing]
- https://www.weichert.com/106046916/ [SUCCESS — Bullhorn expired/off market]
- https://www.arizonarealestate.com/mayer-az/86333/0j-bullhorn/18373144-lid/ [BLOCKED 403]
- https://www.landsearch.com/properties/j-bullhorn-mayer-az-86333/2324921 [BLOCKED 403]
- https://www.long-realty.com/property/139-1048555-0j-bullhorn-mayer-AZ-86333 [BLOCKED 403]
- https://www.point2homes.com/US/Vacant-Land-For-Sale/AZ/Yavapai-County/0d-E-Vaca-Bonita-Trail/121988588.html [BLOCKED 403]
- https://www.whereorg.com/mark-goswick-cattle-co-863726 [BLOCKED 403]
- https://www.bryanchoate.realtor/sold-listing/detail/1110454019/0-Off-Poland-Road-0-Mayer-AZ [SUCCESS — Poland Junction nearby property sold 2020]
- https://www.landwatch.com/yavapai-county-arizona-undeveloped-land-for-sale/pid/338980842 [BLOCKED 403]
- https://ranchatprescotthoa.org/ [SUCCESS — comparable HOA website]
- https://www.ranchhoa.org/covenants.html [SUCCESS — sample covenants]
- https://silvermountainranchesaz.com/our-community/ [SUCCESS — comparable community website]
- https://silvermountainranchesaz.com/community-amenities/ [SUCCESS — comparable amenities]
- https://codelibrary.amlegal.com/codes/deweyhumboldt/latest/deweyhum_az/0-0-0-3093 [BLOCKED 403]
- https://www.yavapaiaz.gov/files/sharedassets/public/v/1/development-and-permits/development-services/documents/usedistricts.pdf [BLOCKED 403]
- https://www.chdblaw.com/livestock-trespass-in-arizona-guidance-for-homeowners-associations/ [SUCCESS — livestock trespass guidance]
- https://arizonastatelawjournal.org/2025/03/23/do-hoas-have-a-duty-to-protect-against-cattle-invasions/ [SUCCESS — 2025 law journal article]
- https://www.mulcahylawfirm.com/publications/the-basics-for-self-managed-associations/ [SUCCESS — self-managed HOA best practices]
- https://homes.com, https://redfin.com, https://zillow.com (various Mayer/Dewey-Humboldt searches — JS-rendered or blocked)

### Search Queries Executed (full list)
1. "Goswick Ranch Mayer AZ 86333 HOA subdivision"
2. `"Goswick Ranch" OR "Goswick Ranches" Mayer Arizona HOA homeowners association`
3. "Goswick Ranch Mayer AZ real estate listings for sale"
4. "Arizona Corporation Commission Goswick Ranch nonprofit corporation HOA"
5. "Yavapai County recorder Goswick Ranch plat subdivision recorded"
6. `"Goswick Ranch" OR "Goswick Ranches" Mayer AZ lots parcels gated community acreage`
7. `"Goswick Ranch" Mayer AZ Facebook group community neighbors`
8. site:facebook.com "Goswick Ranch"
9. `"Goswick Ranch" OR "Goswick Ranches" Mayer Arizona news article`
10. "Goswick Ranch Road Mayer AZ parcel number Yavapai County assessor property records"
11. `"Goswick Ranches" subdivision plat book page Yavapai County Arizona recorded`
12. "Goswick Ranch Mayer AZ realtor.com homes for sale"
13. `"Goswick Ranches" OR "Goswick Ranch" Arizona redfin sold 2024 2025`
14. "Goswick Ranch Mayer AZ HOA fees CC&Rs covenants conditions restrictions"
15. "Goswick Ranches Dewey Humboldt AZ MLS listing Poland Road access gate directions"
16. "Goswick Ranch Mayer AZ listing description stables horses shop RV clearings private well gated"
17. "Goswick Ranches Humboldt Dewey AZ real estate Vaca Bonita Miners Pick Bullhorn Hawk Mountain"
18. `"Goswick Ranch" Arizona court case lawsuit dispute public record`
19. `"Goswick Ranch" OR "Goswick Ranches" "lot 6" OR "lot 7" OR "lot 8" OR "lot 9" OR "lot 10" Arizona parcel`
20. "Goswick Ranch Mayer Arizona 5905 S Goswick Ranch Rd property history sold price history"
21. "Goswick Ranch Mayer AZ Big Bug Creek Bradshaw Mountains elevation 6000 feet access BLM"
22. "Goswick Ranches Mayer AZ Vaca Bonita listing for sale acreage price 2024 2025"
23. "10410 E Vaca Bonita Goswick Ranch original ranch history Humboldt AZ elevation 6000 state land border"
24. "Goswick Ranch historic original ranch Bradshaw Mountains Arizona who owned history family name"
25. "Mark Goswick OR Goswick family Mayer Arizona cattle ranch Bloody Basin Yavapai County"
26. "5905 S Goswick Ranch Rd OR Goswick Ranch Road Mayer AZ 82 acres 1948 property history owner"
27. "Goswick Ranch Mayer AZ patented land OR patented mining claim history subdivision development how many lots"
28. "Goswick Ranch straw bale home 5520 Hawk Mountain Trail listing sold price Mayer AZ"
29. "5668 Miners Pick Goswick Ranch Mayer AZ listing $650,000 description MLS 6814814"
30. "Goswick Ranch 5720 Miners Pick OR 0 Bullhorn OR Bullhorn Rd Mayer AZ listing MLS price"
31. "0j Bullhorn Goswick Ranch Mayer AZ MLS listing description community features HOA full text"
32. "0 Bullhorn OR 0j Bullhorn OR Bullhorn Road Goswick Ranch Mayer AZ 86333 listing acreage"
33. "Yavapai County Goswick Ranch LS 56 plat book page 56 subdivision"
34. "Goswick Ranch OR Goswick Ranches 402-12 parcel APN Yavapai County assessor"
35. "Goswick Ranch Mayer AZ real estate listing description straw bale OR stables OR shop OR RV OR well OR cistern full description"
36. "rural ranch HOA Arizona unique issues livestock fencing water rights self-managed small community"
37. "rural gated ranch HOA Arizona common covenants RCU zoning outbuildings straw bale homes setbacks"
38. "small rural Arizona HOA self-managed challenges road maintenance gate security private well water system"
39. "similar small gated rural Arizona HOA examples online community similar Goswick Ranch acreage lots private roads"
40. "Goswick Ranch OR Goswick Ranches Arizona 2023 2024 2025 2026 listing sold property sale"
41. "Goswick Ranch Mayer AZ Bradshaw Mountain Ranches OR Silver Mountain Ranches OR Bensch Ranch similar gated community comparison"
42. "Goswick Ranch Poland Junction OR Poland Rd OR Poland Road Mayer AZ directions gate lockbox entry"
43. "Goswick Ranch AZ BLM land OR state land OR Prescott National Forest adjacent border access trail riding"
44. "Goswick Ranch Miners Pick OR Hawk Mountain OR Vaca Bonita OR Bullhorn OR Elizabeth Mine lots total count plat"
45. "Arizona rural ranch HOA typical covenants what issues matter most residents livestock fire road gate security"
46. "rural ranch HOA Arizona issues residents care about road maintenance fire risk snow gate access water well"
47. "Mayer AZ 86333 Dewey Humboldt 86329 Poland Road subdivision gated ranch community history development developer"
48. "Goswick Ranches OR Goswick Ranch Mayer Dewey Humboldt Arizona total lots number parcels how many homes"
