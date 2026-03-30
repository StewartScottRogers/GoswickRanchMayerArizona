# Goswick Ranch HOA Website — Page Content Specs

Each section covers one page: URL, purpose, and the actual copy/content to use. Items marked **[BOARD]** require board input. Everything else is ready to write into HTML.

> **Path prefix:** All internal links must start with `/GoswickRanchMayerArizona/`. See BUILD.md. Never use bare root-relative paths.

> **Two audiences:** Current residents need documents, governance, emergency contacts. Prospective buyers and real estate agents need lifestyle, value, and community character. Design and tone should serve both without feeling split-personality.

---

## Home — `/`

**H1:** Goswick Ranch
**Tagline:** A Private Ranch Community in the Bradshaw Mountains · Mayer, Arizona

### Hero Section
Full-width landscape photo with dark gradient overlay. Overlay text: community name + tagline.

**[BOARD]** — Need a hero photo: aerial of community, Bradshaw Mountain vista, or gate entrance shot.
Placeholder until then: CSS gradient in `--color-primary` with text overlay.

Hero CTA — two buttons:
- `[I'm a Resident]` (outline style) → `/GoswickRanchMayerArizona/hoa/`
- `[Thinking of Buying Here?]` (filled rust) → `/GoswickRanchMayerArizona/buyers/`

### Stats Bar (dark band — immediately below hero)
Six numbers that tell the community story at a glance. Use the Stats Bar component from DESIGN.md.

| Stat | Value | Label |
|------|-------|-------|
| HOA fee | $216/yr | Annual assessment |
| Lot minimum | 9 acres | CC&R minimum |
| 5-yr appreciation | 57% | 2020–2026 |
| Property taxes | ~$476/yr | Median, Mayer ZIP |
| Elevation | 4,400–6,000 ft | Bradshaw foothills |
| To Prescott | 27 miles | ~35 min drive |

*Source note (small, muted): HOA fee from MLS disclosures; appreciation estimate Yavapai County 2020–2026; property taxes per county assessor.*

### Welcome Copy (use as-is)
> Goswick Ranch is a small, exclusive gated community nestled in the foothills of the Bradshaw Mountains near Mayer, Arizona. Set at elevations ranging from 4,400 to 6,000 feet, the community overlooks Big Bug Creek and offers sweeping views of one of central Arizona's most dramatic mountain ranges.
>
> With minimum 9-acre lots and site-built homes only, Goswick Ranch preserves the open, rural character that makes this corner of Yavapai County special — a true Arizona ranch lifestyle within reach of both Prescott and the Phoenix metro area.

### Dual Audience Cards (two large cards, side by side)

**Card 1 — Residents**
> **I'm a Resident**
> Find HOA documents, governing rules, board information, emergency contacts, utility providers, and community resources.
> Links: [HOA Documents] [Emergency Info] [Contact Board]

**Card 2 — Buyers & Agents**
> **Thinking of Buying Here?**
> Explore the lifestyle, understand the numbers, and get the information you need — whether you're a local agent or relocating from out of state.
> Link: [For Buyers →]

### Quick Links (3-column cards, below the dual cards)
- **HOA Documents** — CC&Rs, bylaws, and governing documents → `/GoswickRanchMayerArizona/hoa/documents.html`
- **Emergency Services** — Sheriff, fire, flood, and wildfire preparedness → `/GoswickRanchMayerArizona/resources/emergency.html`
- **Life Here** — Seasons, dark skies, wildlife, recreation, and nearby destinations → `/GoswickRanchMayerArizona/lifestyle/`

---

## About the Ranch — `/about/`

**H1:** About Goswick Ranch
**Intro:** The community's character, setting, and roots — from an 1860s cattle family to today's private ranch subdivision.

### Community Overview (use as-is)
> Goswick Ranch is a privately gated residential subdivision in Mayer, Arizona — a community of Arizona Urban Ranch Homes perched in the foothills of the Bradshaw Mountains, overlooking Big Bug Creek valley.
>
> The community's covenants set a 9-acre minimum lot size, ensuring the open, rural character of the land is preserved. Homes must be site-built and at least 1,500 square feet — no manufactured or mobile homes. The result is a neighborhood that genuinely feels like ranch country, not a subdivision.
>
> Residents enjoy dramatic mountain scenery, clean high-desert air at 4,400–6,000 feet, and a level of privacy that's increasingly rare in the greater Phoenix-Prescott corridor. The gate keeps through-traffic out and keeps the community quiet.

### The Goswick Family (use as-is)
> Goswick Ranch takes its name from a family that has been part of Yavapai County since the 1860s. The Goswicks were ranchers, mail carriers, and — in at least one famous case — a government lion hunter working the Bradshaw foothills in the early twentieth century.
>
> The original ranch homestead at 5905 S Goswick Ranch Rd dates to 1948–1949. The Goswick cattle operation worked these same hills for generations. Today, Mark Goswick Cattle Co. continues the family tradition nearby on Bloody Basin Road. The subdivision carved from the historic ranch takes the family name forward in a new form: a private residential community built on land the Goswicks once ranched.
>
> For the full family story, see [Community History →](/GoswickRanchMayerArizona/about/history/).

### The Bradshaw Mountains (use as-is)
> Goswick Ranch sits in the foothills of the Bradshaw Mountains, a rugged range running roughly 40 miles north–south through central Yavapai County. The Bradshaws rise to 7,979 feet at Mt. Union — their granite and gneiss formations are among the oldest exposed rock in Arizona, more than 1.7 billion years old.
>
> The range is blanketed in piñon-juniper woodland at lower elevations, transitioning to ponderosa pine higher up. The Walker Mining District to the north was one of Arizona's most productive gold and silver areas in the late 1800s. Today the Bradshaws are managed as Prescott National Forest, offering hundreds of miles of hiking, equestrian, and OHV trails.

### Big Bug Creek (use as-is)
> The community overlooks Big Bug Creek, a seasonal tributary of the Agua Fria River that drains a large Bradshaw watershed. The creek can run full and fast during monsoon season and spring snowmelt — and can rise alarmingly quickly when summer storms hit the mountains above.
>
> Residents should be aware of flash flood potential during monsoon events, particularly in the canyon below the community. See Emergency Services for flood safety information.

### Community Snapshot
| | |
|---|---|
| Official plat | Goswick Ranch, Book 56/Pages 8–12, Yavapai County Recorder |
| Total acreage | 850.63 acres (Sections 31 & 32, T13N, R1E, G&SRB&M) |
| Location | Mayer, AZ 86333 · Yavapai County |
| Access | Gated · S Goswick Ranch Rd |
| Elevation | ~4,400–6,000 ft |
| Lot minimum | 9 acres (CC&R requirement) |
| Home minimum | 1,500 sq ft · site-built only |
| Zoning | RCU-2A (Yavapai County Rural Conservation Use) |
| HOA | Self-managed · no management company |
| HOA fee | $216/year ($18/month) |

**[BOARD]** — Total number of lots, gate access procedure for guests/vendors.

---

## Community History — `/about/history/`

**H1:** The History of Goswick Ranch
**Intro:** From a pioneering Arizona cattle family to a private mountain community.

### The Goswick Family in Yavapai County (use as-is)
> The Goswick name has been part of Yavapai County since the 1860s, when the American West was still being settled and the Bradshaw Mountains were known primarily for gold, silver, and cattle.
>
> **William Isaac Goswick (1836–1904)** was among the earliest Goswicks in the region, working as a mail carrier at Camp Verde — an important Arizona Army post — during the frontier era.
>
> **Giles Wesley Goswick (1888–1975)** left perhaps the most vivid mark. He worked as a government lion hunter in the Bradshaw foothills, tracking and removing mountain lions that threatened livestock — a respected and necessary role in ranching communities of the early twentieth century. Giles spent decades in the mountains that now surround the community bearing his family name.
>
> **George Allen Goswick (1919–1997)** appears in the 1930 U.S. Census in Mayer, Yavapai County — placing the family firmly in this exact community for at least a century.
>
> The family's cattle operation continued through the twentieth century and into the present day. **Mark Goswick Cattle Co.** operates today on Bloody Basin Road in Mayer — a living link to the ranching tradition that shaped this land.

### From Ranch to Community (use as-is)
> The original Goswick Ranch homestead, at 5905 S Goswick Ranch Rd, was built in 1948–1949. The 82-acre property served as the working ranch headquarters for the Goswick cattle operation for decades.
>
> The modern Goswick Ranch subdivision — all 850.63 acres of it, recorded as Plat Book 56, Pages 8–12 in the Yavapai County Recorder's office — was carved from this historic ranch. The minimum 9-acre lots were set to preserve the open, ranch-scale character of the original land.
>
> What was once a working cattle ranch became a private residential community. The name Goswick, earned through more than a century of family presence in these mountains, stayed with the land.

### The Land Itself (use as-is)
> The Bradshaw Mountains that frame Goswick Ranch are among the oldest geological formations in the American Southwest. The granite and gneiss beneath the community's feet are more than 1.7 billion years old — formed long before complex life existed on Earth, shaped by forces that built the core of the North American continent.
>
> Above the community, the mountains were worked for gold and silver in the 1860s through the early twentieth century. Below, Big Bug Creek carved its canyon through the same ancient rock. The land has seen cattle drives, mining operations, wildfires, and floods — and it has persisted through all of them.

---

## Location & Directions — `/about/location/`

**H1:** Location & Directions

### Address
S Goswick Ranch Rd, Mayer, AZ 86333

### Nearby Reference Points
| | Distance | Drive Time |
|---|---|---|
| Mayer town center | ~2 miles | ~5 min |
| Prescott, AZ | ~27 miles | ~35 min |
| Prescott Valley | ~20 miles | ~25 min |
| Prescott Airport (PRC) | ~30 miles | ~40 min |
| Cordes Junction (I-17) | ~15 miles | ~20 min |
| North Phoenix suburbs | ~60 miles | ~60 min |
| Sky Harbor Airport (PHX) | ~74 miles | ~70 min |
| Sedona, AZ | ~60 miles | ~65 min |
| Jerome, AZ | ~40 miles | ~50 min |

### Directions

**From Prescott / US-89:**
> Head south on US-89 toward Mayer. Turn left (east) onto Mayer Main Street / AZ-69 east. Continue through Mayer and follow signs toward Cordes Junction. Turn south on S Goswick Ranch Rd. The gated entrance will be on your right.

**From Phoenix / I-17:**
> Take I-17 north to Exit 262 (Cordes Junction / Mayer). Head west on Cordes Junction Road, then north on AZ-69 through Cordes Lakes toward Mayer. Turn onto S Goswick Ranch Rd and look for the gated entrance.

**[BOARD]** — Confirm exact turn-by-turn directions and mileage. Add gate access instructions for guests and vendors.

### Map Embed
Embed Google Maps centered on Mayer, AZ 86333 (not on the exact gate location — security consideration).

**[BOARD]** — Confirm whether to show the gate's approximate location.

### Street Names within Goswick Ranch
Internal subdivision roads (from recorded plat):
- S Hawk Mountain Trail
- S Miners Pick Rd
- E Vaca Bonita Trail
- Bullhorn Rd
- E Pearl Mountain Rd
- E Elizabeth Mine Rd

---

## Photo Gallery — `/about/gallery/`

**H1:** Community Gallery
**[BOARD]** — All photos must come from the board or residents. Cannot build this page until photos are received.

Suggested categories:
- Community entrance and gate
- Aerial or mountain panorama views
- Big Bug Creek canyon overlook
- Wildlife (mule deer, wild turkeys, raptors — common in area)
- Seasonal: wildflowers (April–May), monsoon clouds, light snow, fall color
- Night sky / Milky Way (Bortle Class 3 — a genuine selling point)

Technical note: Use pure CSS / vanilla-JS lightbox with `<dialog>` — no jQuery dependency.

---

## Life Here — `/lifestyle/`

**H1:** Life at Goswick Ranch
**Tagline:** Four seasons. Dark skies. Mountain trails. A ranch community unlike any other in Arizona.
**Hero:** Use a wildflower meadow or dark sky / Milky Way photo (or placeholder gradient in sage green if no photo yet)

### Intro (use as-is)
> Living at Goswick Ranch means waking up to mountain air at over 4,000 feet, watching mule deer cross the meadow, and seeing the Milky Way without driving anywhere. It means four genuine seasons — spring wildflowers, summer monsoons rolling over the Bradshaws, October fall color on the Senator Highway, and occasional winter snow that melts by afternoon.
>
> It means 27 miles to downtown Prescott, 40 miles to Jerome, 60 miles to Sedona — and the ability to come home to complete quiet every evening.

### Section Cards (4 — linking to sub-pages)
- **Seasons & Dark Skies** — climate, the monsoon, Bortle Class 3 night sky → `/GoswickRanchMayerArizona/lifestyle/seasons.html`
- **Wildlife & Nature** — mule deer, golden eagles, hummingbirds, wildflowers, native plants → inline section or `/GoswickRanchMayerArizona/lifestyle/seasons.html#wildlife`
- **Outdoor Recreation** — Prescott National Forest, equestrian trails, Agua Fria NM → `/GoswickRanchMayerArizona/lifestyle/outdoors.html`
- **Day Trips & Nearby** — Prescott, Jerome, Sedona, Verde Valley Wine Trail, Arcosanti → `/GoswickRanchMayerArizona/lifestyle/nearby.html`

### Ranch Living (inline section — use as-is)
> Goswick Ranch is an equestrian-friendly community. Livestock are permitted under Yavapai County's RCU-2A zoning and CC&Rs. Arizona's open range law applies to the surrounding area: property owners are responsible for fencing livestock *out*, not the other way around — a legal tradition that reflects the ranching heritage of this part of the state.
>
> Neighboring Mark Goswick Cattle Co. continues active cattle operations nearby — a reminder that this is genuine ranch country, not a themed community.
>
> **Equestrian services:** Los Caballos Veterinary provides large-animal care in the area (24-hour emergencies: 928-636-6644). Prescott National Forest's Groom Creek Horse Camp offers staging and overnight facilities.
>
> **Ranch supply:** Olsen's Grain in Dewey (~15 miles) and the Prescott Livestock Auction in Chino Valley serve the equestrian and agricultural community.
>
> **Agritourism:** Mortimer Farms in Dewey (~10–15 miles) operates a working farm with seasonal pick-your-own produce, corn maze, and community events.

---

## Seasons & Dark Skies — `/lifestyle/seasons.html`

**H1:** Seasons, Climate & Dark Skies

### Climate Overview
> At 4,400–6,000 feet, Goswick Ranch escapes the brutal summer heat that defines the Phoenix experience. Annual temperatures range from roughly 31°F in the coldest winter nights to 92°F on the hottest summer days. The average growing season runs approximately 235 days (late March through mid-November).
>
> Annual precipitation is around 10 inches of rain and 19 inches of snow — the snow typically arrives as light dustings that melt quickly, though higher elevations above the community see more accumulation.

### Four Seasons

**Spring (March–May)**
> Spring at elevation means crisp mornings, warm afternoons, and the gradual emergence of the Bradshaw wildflower bloom. April and May bring penstemon, lupine, and globe mallow across the hillsides. It is one of the most visually spectacular times of year — and one of the quietest.

**Summer / Monsoon (June–September)**
> The Arizona monsoon arrives around July 7 and runs through mid-September. This is desert summer transformed: afternoon thunderstorms build over the Bradshaws, often triggering between 2:00–4:00 PM when the mountains heat rapidly. Lightning is dramatic and frequent — Arizona sees over 500,000 lightning strikes per monsoon season.
>
> For residents, this means beautiful storm-watching from a high vantage point. It also means awareness: Big Bug Creek can rise 0–6 feet within 5–10 minutes of a major storm upstream. Never attempt to cross flooded roads or washes.
>
> Summer temperatures at Goswick Ranch are pleasant by Arizona standards — highs in the upper 80s to low 90s rather than the 110°F+ that Phoenix endures.

**Fall (October–November)**
> Fall brings the best driving season. The Senator Highway south toward Crown King — accessible from nearby — is a premier fall-color route through the Bradshaws. Oak and sycamore in the creek drainages turn amber and rust. Temperatures drop into ideal hiking range.

**Winter (December–February)**
> Light snow falls on average about 16 days per year. It rarely accumulates more than a few inches and typically melts within a day or two. Cold nights and bright, crisp days make winter at Goswick Ranch genuinely beautiful — and very different from the warm-but-gray winters of coastal California.

### Dark Skies — Bortle Class 3
> Goswick Ranch sits in a Bortle Class 3 dark sky zone — among the darkest designations achievable within driving distance of any major Arizona city. On a clear night from October through June (outside monsoon season), the Milky Way is not just visible — it is brilliant, arcing from horizon to horizon with the naked eye.
>
> This level of darkness is increasingly rare. It results from the combination of elevation, distance from Prescott and Phoenix light domes, and the natural terrain blocking ambient glow from lower valleys. For residents interested in amateur astronomy, astrophotography, or simply sitting outside at night, Goswick Ranch offers conditions that photographers and astronomers specifically seek out.
>
> *Note: Monsoon season (July–September) brings cloud cover that reduces stargazing opportunities. The best months are October through early June.*

### Wildlife

> The Bradshaw Mountains and Big Bug Creek drainage support a diverse community of wildlife that regularly visits and crosses through Goswick Ranch.

**Commonly observed:**
- Mule deer (frequent throughout the year)
- Wild turkeys (flocks common in fall and winter)
- Coyotes (heard nightly; active at dawn and dusk)
- Jackrabbits and cottontails
- A wide variety of raptors, including Golden Eagle and Northern Goshawk
- Eleven species of hummingbirds migrate through or reside seasonally

**Less frequently seen:**
- Mountain lions (present in the Bradshaws; rarely encountered directly)
- Black bears (occasional sightings at higher elevations)
- Javelina (collared peccary — common lower in the valley, occasional at this elevation)
- Coatimundi (rare but documented in central Arizona highlands)

**Note on venomous species:** Western diamondback and Arizona black rattlesnakes are native to the area. Gila monsters are rare above 5,000 feet. Standard rural Arizona precautions apply: watch where you step, keep dogs leashed around brush, and leave all snakes alone.

**Native plants:**
> The plant community transitions from high-desert chaparral (manzanita, scrub oak, desert broom) at lower elevations to piñon-juniper woodland and ponderosa pine toward the higher Bradshaws. Soils are predominantly Precambrian granite 1.7–1.8 billion years old — shallow and rocky, which shapes both what grows here and the character of the landscape.

---

## Outdoor Recreation — `/lifestyle/outdoors.html`

**H1:** Outdoor Recreation

### Intro (use as-is)
> Goswick Ranch is surrounded by some of Arizona's best outdoor recreation land — Prescott National Forest to the north and west, BLM land throughout the Bradshaw foothills, and the Agua Fria National Monument to the south. From the gate, the wilderness begins almost immediately.

### Prescott National Forest
> **450+ miles of trail** accessible from the Prescott area. Hikers, mountain bikers, equestrian riders, and OHV enthusiasts all find dedicated routes. The Bradshaw Ranger District covers the mountains immediately surrounding Goswick Ranch.
>
> **Groom Creek Horse Camp** — Prescott National Forest equestrian staging and overnight facility with corrals, hitching posts, and water.
>
> **Crown King** — A historic mining and ranching town at the top of the Bradshaws, accessible via the scenic Senator Highway (best as a day trip). Dramatic views, a historic saloon, and a genuine sense of the old Arizona.

### Equestrian Access
> The community's minimum 9-acre lots and equestrian-friendly CC&Rs make Goswick Ranch well-suited for horse owners. Direct access to Prescott National Forest trails from the surrounding area means riders can leave property and be in wilderness within minutes.

### Agua Fria National Monument
> Located approximately 25–30 miles south, the Agua Fria National Monument preserves 71,000 acres of high desert plateau with prehistoric ruins, riparian canyons, and excellent wildlife habitat. BLM manages the monument; access is via the I-17 corridor. No facilities — pack in everything you need.

### Lynx Lake Recreation Area
> A Prescott National Forest lake and recreation area approximately 25 miles northwest. Fishing, non-motorized boating, and shoreline hiking.
> **Note:** Lynx Lake was drained in late 2024 for dam repairs. Status should be verified before planning visits — contact the Bradshaw Ranger District.

### Dark Sky Observing
> With a Bortle Class 3 rating, the community's ridgelines and open meadows are outstanding sites for amateur astronomy and astrophotography. See [Seasons & Dark Skies](/GoswickRanchMayerArizona/lifestyle/seasons.html#dark-skies) for details.

---

## Nearby Destinations — `/lifestyle/nearby.html`

**H1:** Day Trips & Nearby Destinations

### Intro (use as-is)
> One of Goswick Ranch's most underappreciated assets is its position: close enough to Arizona's best small cities and outdoor destinations to enjoy them regularly, far enough away to feel like genuine country living.

### Prescott — 27 miles
> Arizona's "mile-high city" at 5,368 feet. Prescott offers a walkable historic downtown, Courthouse Plaza, Whiskey Row (a legendary strip of historic saloons), a thriving arts and gallery scene, excellent restaurants, and one of Arizona's most active outdoor recreation communities.
>
> **World's Oldest Rodeo:** Held annually in late June/early July (Prescott Frontier Days). One of the most authentic Western events in the country.
>
> **Prescott Airport (PRC):** United Express service to Denver and Los Angeles, with connections to major hubs. Approximately 30–35 miles from Goswick Ranch — dramatically more convenient than Sky Harbor for travel purposes.
>
> **Shopping:** The SR-69 corridor in Prescott Valley has full-service retail — grocery, home improvement, medical, and more.

### Jerome — 40 miles
> A National Historic Landmark perched on the side of Cleopatra Hill above the Verde Valley. Once a booming copper-mining town of 15,000; now a community of galleries, restaurants, wine tasting rooms, and artists. The views of the Verde Valley and distant red rocks are exceptional. A reliable half-day destination.

### Verde Valley Wine Trail — 35–50 miles
> The Verde Valley has become one of Arizona's most celebrated wine regions. The trail includes a dozen-plus wineries, several with nationally recognized wines.
>
> **Caduceus Cellars** (Cornville) — Founded by Maynard James Keenan (of Tool). Produces highly regarded estate wines from AZ-grown grapes. Tasting room in Jerome.
>
> **Pillsbury Wine Company, Javelina Leap, Page Springs Cellars** — among the other established producers on the trail.

### Sedona — 60 miles
> Arizona's most famous destination: red rock formations, upscale restaurants, spas, galleries, and some of the state's best hiking (Cathedral Rock, Devil's Bridge, Bell Rock). An excellent day trip — better to visit on weekdays. About 65 minutes from Goswick Ranch.

### Arcosanti — 11–15 miles
> Paolo Soleri's iconic experimental city and architectural project in the Sonoran Desert near Mayer. An ongoing construction project and urban laboratory since 1970, Arcosanti offers tours, a bakery/café, and an unusual window into visionary architecture. One of the most distinctive sites in Arizona — and almost in the backyard.

### Mortimer Farms — 10–15 miles (Dewey)
> A working farm with seasonal agritourism: u-pick vegetables and fruit, corn maze, pumpkin patch, farm store. A local institution in Dewey-Humboldt.

### Tuzigoot & Montezuma Castle National Monuments — 27–30 miles
> Two of Arizona's most well-preserved prehistoric Sinagua ruins. Tuzigoot (Clarkdale) sits on a hilltop above the Verde River. Montezuma Castle (Camp Verde) is a five-story cliff dwelling built into a limestone alcove. Both are NPS-managed day sites, about 30 minutes from Goswick Ranch.

### Phoenix Metro — 74 miles
> Full metropolitan services, Sky Harbor International Airport, major medical centers, sports, and culture. About 70–75 minutes. Close enough for periodic visits; far enough to truly feel rural in between.

---

## For Buyers — `/buyers/`

**H1:** Thinking of Buying at Goswick Ranch?
**Tagline:** Here's what you need to know — the lifestyle, the numbers, and why buyers from California to Connecticut are looking at Mayer, Arizona.
**Hero:** Community gate or mountain view with overlay text. CTA: "Download the CC&Rs" → `/GoswickRanchMayerArizona/docs/ccrrs.pdf`

### Intro (use as-is)
> Goswick Ranch is not a typical HOA community. With 9-acre minimum lots, gated access, and an equestrian-friendly culture set at 4,000+ feet in the Bradshaw Mountains, it offers something increasingly hard to find: genuine rural privacy within an hour of two major cities.
>
> This page is designed for prospective buyers and real estate agents who want a clear picture of the community before visiting. We've tried to answer the questions we hear most often.

### Stats Bar
Same six-stat bar as the home page (HOA fee · lot minimum · 5-yr appreciation · property taxes · elevation · distance to Prescott).

### Why Buyers Are Looking at Goswick Ranch

Use as a three-column card layout:

**The Arizona Financial Advantage**
> For buyers coming from high-cost, high-tax states, Arizona's numbers are striking. A 2.5% flat state income tax. Social Security benefits not taxed at the state level. No Arizona estate or inheritance tax. And property taxes that are a fraction of what the same land would cost in California, Colorado, or the Pacific Northwest.

**The Community**
> Minimum 9-acre lots mean real separation between neighbors. The gate means no through-traffic. Site-built homes only means the community maintains its character. Horses and livestock are permitted. You're buying genuine ranch land, not a quarter-acre in a suburban HOA.

**The Setting**
> Four seasons. Clean air at 4,000–6,000 feet. Bortle Class 3 dark skies. Mule deer in the meadows. Twenty-seven miles from Prescott, sixty from Sedona, seventy-four from Sky Harbor. Remote enough to feel it; connected enough to live it.

### Arizona vs. The Alternative (Comparison Table)

| | Arizona | California | National Avg |
|--|--|--|--|
| State income tax | 2.5% flat | Up to 13.3% | ~5% avg |
| Social Security taxed? | No | No | Varies (12 states tax it) |
| Estate / inheritance tax | None | None | Varies by state |
| Effective property tax rate | ~0.44% | ~0.73% | ~1.1% |
| Annual property tax (Mayer area) | ~$476/yr | (Same property: ~$3,000–$6,000+) | ~$2,400 |
| HOA fee (Goswick Ranch) | $216/yr | N/A | N/A |

*State tax rates as of early 2026. Consult a tax advisor for your specific situation.*

### The Numbers

**HOA Fee:** $216 per year ($18 per month)
One of the lowest HOA fee structures you will find in any gated Arizona community. The community is self-managed by a volunteer board of directors with no management company overhead.

**Property Taxes:**
Median annual property tax in the Mayer ZIP code is approximately $476 per year — well below the national median of ~$2,400. Look up any parcel at assessor.yavapai.gov using APN numbers in the 402-12-xxx range.

**Five-Year Appreciation:**
Yavapai County property values appreciated approximately 57% between 2020 and 2026, driven by in-migration from California and other high-cost states. The county is growing at roughly five times the national population growth rate.

**Active Listings (as of March 2026):**
Multiple active listings ranging from raw land parcels to improved properties with homes. Contact local brokers for current inventory — eXp Realty, Coldwell Banker, and Compass all have active agents in the Mayer/Prescott area.

### What the CC&Rs Require

Key CC&R provisions (download full document for binding text):

- **Minimum lot size:** 9 acres (stricter than county baseline of 2 acres)
- **Minimum home size:** 1,500 sq ft living area
- **Construction type:** Site-built homes only. No manufactured, modular, or mobile homes.
- **Architectural review:** Proposed exterior improvements visible from neighboring properties require ARC approval before work begins
- **Use:** Residential and agricultural; livestock and horses permitted consistent with RCU-2A zoning
- **Gate:** Gated community; residents responsible for guest and vendor access

[Download CC&Rs (PDF) →](/GoswickRanchMayerArizona/docs/ccrrs.pdf)
[Download Bylaws (PDF) →](/GoswickRanchMayerArizona/docs/bylaws.pdf)
[View Survey Map →](/GoswickRanchMayerArizona/img/survey-map.png)

### For Real Estate Agents

**Plat information:**
- Official name: Goswick Ranch (also listed as "Goswick Ranches" in some MLS systems)
- Recorded plat: Book 56, Pages 8–12, Yavapai County Recorder
- APN range: 402-12-xxx series
- Zoning: RCU-2A (Yavapai County Rural Conservation Use)

**HOA disclosure (A.R.S. § 33-1806):**
The HOA may charge up to $400 for a resale disclosure packet. Buyers have a right to cancel within 5 business days of receiving the disclosure. Contact the board via the [Contact page](/GoswickRanchMayerArizona/contact/) for disclosure requests.

**Governing documents** (available on this site for due diligence):
- CC&Rs — [Download PDF](/GoswickRanchMayerArizona/docs/ccrrs.pdf)
- Bylaws — [Download PDF](/GoswickRanchMayerArizona/docs/bylaws.pdf)
- Survey (plat map) — [Download PDF](/GoswickRanchMayerArizona/docs/survey.pdf)

**[BOARD]** — Annual budget and financial statements needed here. Per A.R.S. § 33-1805, these must be available to members and prospective members.

---

## Buyer FAQ — `/buyers/faq.html`

**H1:** Frequently Asked Questions — For Buyers

*Answers based on research and publicly recorded documents. Always verify current details with the board and your own legal/financial advisors.*

**Can I have horses?**
Yes. Goswick Ranch CC&Rs and Yavapai County RCU-2A zoning permit livestock and equestrian use on private lots. Horses are common in the community.

**Can I have livestock?**
Yes. The RCU-2A zoning designation permits livestock subject to county animal density rules (Section 501E of Yavapai County zoning). The CC&Rs are consistent with agricultural use. Verify specific restrictions with the board.

**What is the HOA fee?**
$216 per year ($18/month), based on MLS disclosure data. This is among the lowest HOA fees for a gated Arizona community. Confirm with the board before close of escrow.

**What are my property taxes?**
The median annual property tax in the Mayer ZIP code is approximately $476 per year. Look up any specific parcel at assessor.yavapai.gov. The effective rate is approximately 0.44% — well below the national average of ~1.1%.

**What internet options are available?**
Starlink satellite internet is confirmed available in ZIP code 86333 (Mayer). Equipment runs approximately $349; monthly service $80–$120/month with speeds of 50–180 Mbps and latency of 30–50ms — entirely adequate for remote work and streaming. DSL and other satellite options also exist. Confirm provider availability for your specific parcel with the board.

**What about water — is there a municipal supply?**
The Mayer Domestic Water Improvement District (MDWID) serves the Mayer townsite and some surrounding areas. Some Goswick Ranch lots may use private wells. **[BOARD]** — confirm which parcels are served by MDWID and which use wells.

**Important water quality note:** Yavapai County has elevated naturally-occurring arsenic in groundwater. Approximately 43.6% of county groundwater samples exceed the EPA action level of 10 parts per billion. If your lot uses a private well, arsenic testing is strongly recommended before drinking well water. Point-of-use filtration systems that remove arsenic are widely available.

**What is the gate access like?**
Goswick Ranch uses a gated entrance off S Goswick Ranch Rd. Access for residents uses a lockbox system. **[BOARD]** — specific gate access instructions and procedure for managing guest/vendor access.

**Can I build an ADU (accessory dwelling unit) or guest house?**
Arizona allows up to one attached and one detached ADU under state law (effective 2023). However, HOA CC&Rs may impose additional restrictions. Yavapai County building permits are required. Verify with the board and county before planning any secondary structure.

**What does the ARC (Architectural Review Committee) process look like?**
Exterior improvements visible from neighboring lots or common areas require ARC approval before work begins. Under 2025 Arizona law, if the HOA does not respond to an ARC request within 30 days, the request is deemed approved. **[BOARD]** — confirm ARC process, timeline, and submission requirements. [Submit an ARC request →](/GoswickRanchMayerArizona/contact/arc.html)

**How far is the nearest hospital?**
Yavapai Regional Medical Center West Campus in Prescott — approximately 27 miles (~35 minutes). YRMC West is a Level IV Trauma Center. Level I trauma (major accidents, complex surgery) requires transport to Phoenix, approximately 73 miles / 71 minutes. Native Air 4 helicopter medevac (First Responder Status since December 2024) serves the area.

**What is the wildfire risk?**
The Bradshaw Mountains are in an elevated wildfire risk zone. Recent notable fires: the 2022 Crooks Fire (9,402 acres near Mt. Union), the 2017 Goodwin Fire (28,516 acres — caused a catastrophic subsequent flood on Big Bug Creek in July 2017), and the February 2025 Brady Fire (400 acres, with evacuation orders). Property insurance in Arizona has risen significantly (48% statewide between 2021–2024) due in part to wildfire risk. Prospective buyers should obtain insurance quotes early in the process. See [Emergency Services](/GoswickRanchMayerArizona/resources/emergency.html) for wildfire preparedness resources.

**Is short-term rental (Airbnb, VRBO) allowed?**
**[BOARD]** — The CC&Rs should address this. Arizona law generally protects short-term rental rights, but HOA CC&Rs recorded before certain 2016 state law provisions may restrict them. Verify directly with the board.

**How close is an airport?**
Prescott Airport (PRC) is approximately 30 miles / 40 minutes and offers United Express service to Denver and Los Angeles with connections to major hubs. Phoenix Sky Harbor (PHX) is approximately 74 miles / 70 minutes.

**What is the Arizona income tax situation for retirees?**
Arizona's 2.5% flat state income tax (effective 2023) is among the lowest in the country. Arizona does **not** tax Social Security benefits. There is no Arizona estate or inheritance tax. These factors make Arizona particularly attractive for retirement relocation from California (up to 13.3%), Oregon (up to 9.9%), Colorado (4.4%), and other states with higher rates. *Consult a CPA for your individual situation.*

**Can I have solar panels?**
Yes. Note that the federal Investment Tax Credit (ITC) for residential solar was eliminated on January 1, 2026. Arizona's 25% state income tax credit (capped at $1,000) remains available. APS (the area's electric utility) locks in an export rate of approximately $0.062/kWh for 10 years when you go solar. Yavapai County building permits required.

**What about rainwater harvesting?**
Legal in Arizona. The Arizona Department of Water Resources (ADWR) offers reimbursements of up to $2,000 for rainwater storage tanks of 800 gallons or larger (for outdoor/non-potable use — no permit required). Larger or potable systems require permits. A practical option for supplementing well water or reducing irrigation costs.

---

## HOA Information — `/hoa/`

**H1:** HOA Information
Hub page. Brief intro + links to sub-pages.

### Intro Copy (use as-is)
> The Goswick Ranch Homeowners Association is a self-managed HOA governed by a volunteer Board of Directors. The Association maintains the gated entrance, enforces the community's CC&Rs and rules, and manages common areas.
>
> Arizona law (A.R.S. § 33-1805) requires the HOA to make governing documents, financial statements, and meeting minutes available to all members. You'll find them on the pages below.

### 2025 Arizona HOA Law Updates (use as-is)
> Recent Arizona legislation has updated several HOA rules that affect Goswick Ranch residents:
>
> - **ARC auto-approval:** If the HOA does not respond to an architectural review request within 30 days, the request is deemed approved (effective 2025).
> - **Foreclosure threshold:** HOAs may not foreclose for amounts under $10,000 or less than 18 months of assessments (SB 1494, 2025).
> - **Electronic violation responses:** Homeowners may respond to violation notices electronically (SB 1337, 2025).
> - **Assessment cap:** Annual assessment increases exceeding 20% require a majority member vote.
> - **Annual financial review:** Required within 180 days of fiscal year-end.

### Sub-page Link Cards
- **Board of Directors** → `/GoswickRanchMayerArizona/hoa/board/`
- **CC&Rs & Bylaws** → `/GoswickRanchMayerArizona/hoa/documents.html`
- **Rules & Regulations** → `/GoswickRanchMayerArizona/hoa/rules/`
- **Meeting Minutes** → `/GoswickRanchMayerArizona/hoa/minutes/`

---

## Board of Directors — `/hoa/board/`

**H1:** Board of Directors
**[BOARD]** — All content. Need: names, roles (President, VP, Secretary, Treasurer, Member-at-Large), email addresses or contact form preference, term lengths.

### Boilerplate (use as-is, fill in blanks):
> The Goswick Ranch HOA is governed by a volunteer Board of Directors elected by community residents. Board members serve [BOARD — term length] terms and may serve consecutive terms.
>
> The board meets [BOARD — frequency] and holds an annual meeting each [BOARD — month] open to all residents.

---

## CC&Rs & Bylaws — `/hoa/documents.html`

**H1:** Governing Documents

### Intro (use as-is)
> Arizona law (A.R.S. § 33-1805) requires the Goswick Ranch HOA to make its governing documents available to all members and prospective members. Download them below.

### Available Documents (PDFs live)
- CC&Rs — `/GoswickRanchMayerArizona/docs/ccrrs.pdf` ✓
- Bylaws — `/GoswickRanchMayerArizona/docs/bylaws.pdf` ✓
- Survey (plat map) — `/GoswickRanchMayerArizona/docs/survey.pdf` ✓

**[BOARD]** — Still needed: Annual Budget (most recent), Financial Statements (most recent fiscal year), any CC&R amendments.

### Governing Document Hierarchy (use as-is)
> 1. **Arizona Revised Statutes** — State law; supersedes everything
> 2. **CC&Rs** — Recorded with Yavapai County; core property restrictions
> 3. **Bylaws** — How the HOA is governed and how elections work
> 4. **Rules & Regulations** — Day-to-day community rules set by the board

### Yavapai County Records Note
> CC&Rs are recorded instruments. Search for them at the [Yavapai County Recorder's Office](https://recorder.yavapai.gov/). Recorded plat: Book 56, Pages 8–12.

---

## Rules & Regulations — `/hoa/rules/`

**H1:** Rules & Regulations
**[BOARD]** — Full content. Need the current Rules & Regulations document.

### Known Rules (from CC&Rs research — verify exact wording before publishing)
- **Minimum lot size:** 9 acres
- **Minimum home size:** 1,500 sq ft living area
- **Construction type:** Site-built homes only
- **Zoning:** RCU-2A (Yavapai County)
- **Gate:** Gated community; residents manage guest/vendor access
- **Livestock/horses:** Permitted consistent with RCU-2A zoning

**[BOARD]** — Need complete Rules & Regulations text, plus specific rules on: animals, outbuildings/barns, RV/vehicle storage, fencing, landscaping, short-term rentals, commercial activity.

### Architectural Review
> Proposed exterior improvements visible from neighboring lots or common areas may require ARC approval before work begins. Under 2025 Arizona law, the ARC must respond within 30 days or the request is deemed approved.
>
> [Submit an ARC Request →](/GoswickRanchMayerArizona/contact/arc.html)

---

## Meeting Minutes — `/hoa/minutes/`

**H1:** Meeting Minutes
**[BOARD]** — Need all available minutes as PDFs or text.

### Intro (use as-is)
> Minutes from Goswick Ranch HOA board meetings and annual homeowner meetings are posted below. Arizona law (A.R.S. § 33-1805) requires these to be made available to all association members. Minutes from executive sessions are excluded per A.R.S. § 33-1804.

---

## News & Announcements — `/news/`

**H1:** News & Announcements
**[BOARD]** — All content. Page starts empty; populated as announcements happen.

### Intro (use as-is)
> Board announcements, road conditions, community alerts, and upcoming events are posted here.

### Suggested first announcement categories:
- Annual meeting notice and agenda
- Gate maintenance schedule
- Road grading schedule
- Fire season preparedness reminder (link to Emergency page)
- Monsoon season flood watch reminder
- Water quality notice if relevant

---

## Community Calendar — `/news/calendar.html`

**H1:** Community Calendar
**[BOARD]** — Need annual meeting date, board meeting schedule, recurring community events.

### Intro (use as-is)
> Upcoming HOA meetings and community events. All homeowners are welcome at board meetings unless designated as executive sessions.

---

## Resident Resources — `/resources/`

**H1:** Resident Resources

### Intro (use as-is)
> Useful contacts and information for Goswick Ranch residents — emergency services, utilities, county offices, and local service providers.

### Card Links
- **Emergency Services** — Wildfire, flood, evacuation, sheriff, fire, medical → `/GoswickRanchMayerArizona/resources/emergency.html`
- **Utilities** — Water, electric, internet, propane, solar → `/GoswickRanchMayerArizona/resources/utilities.html`
- **Yavapai County** — County links, property taxes, permits, zoning → `/GoswickRanchMayerArizona/resources/county.html`
- **Local Services** — Schools, library, grocery, medical, equestrian → `/GoswickRanchMayerArizona/resources/services.html`

---

## Emergency Services — `/resources/emergency.html`

**H1:** Emergency Services
**Build note:** High-priority page. Make it fast-loading and easy to read on a mobile phone in low-light conditions.

### Emergency Numbers (large, prominent — top of page)

| Service | Number |
|---------|--------|
| **Emergency** | **911** |
| Yavapai County Sheriff (non-emergency) | (928) 771-3260 |
| Mayer Fire District | (928) 632-7737 |
| Poison Control | (800) 222-1222 |
| APS Power Outages | (800) 253-9405 |
| Native Air 4 Medevac | (via 911 dispatch) |

### Emergency Alert Registration
> **Sign up for emergency alerts now — before you need them.**
>
> **AlertYavapai / Smart911:** Register at [smart911.com](https://www.smart911.com) or text **alertYAVAPAI** to **78015**. This system sends reverse-911 calls, texts, and emails for evacuation orders and emergency notices.
>
> **Genasys Protect:** Yavapai County launched a new evacuation zone system in April 2024. Look up your property's evacuation zone at [protect.genasys.com](https://protect.genasys.com). Know your zone before an emergency — zones are used to issue staged evacuation orders.

### Mayer Fire District
> The Mayer Fire District serves Goswick Ranch for fire, medical, and rescue emergencies. The district operates out of Station 41 in Mayer and covers 302 square miles.
>
> Address: 12700 Central Ave, Mayer, AZ 86333
>
> **Clearly mark your address** at the property entrance. In an emergency, responders following a GPS address into a gated community need a visible address marker to find you quickly.

### Nearest Medical

> **Yavapai Regional Medical Center West Campus (YRMC West)**
> 1003 Willow Creek Rd, Prescott, AZ 86301
> (928) 445-2700 · ~27 miles / ~35 minutes
> *Level IV Trauma Center; ALS/medical transport via Mayer Fire District*
>
> **Level I Trauma:** Major trauma requiring surgery or advanced neurology requires Phoenix (~73 miles / ~71 minutes by ground). Native Air 4 helicopter (YRMC-operated, First Responder Status since December 2024) serves the region for critical transport.

### Wildfire Preparedness

> ⚠️ The Bradshaw Mountains and surrounding area are in an elevated wildfire risk zone. Residents should prepare before fire season (May through July, with continued risk through monsoon season).

**Recent wildfire history near Goswick Ranch:**
- **February 2025 — Brady Fire:** Approximately 400 acres, with evacuation orders issued in the area. Very recent; residents should review their defensible space and evacuation plans.
- **April 2022 — Crooks Fire:** 9,402 acres near Mt. Union; 8 structures lost.
- **June 2017 — Goodwin Fire:** 28,516 acres; 109 homes damaged or destroyed. The subsequent 2017 monsoon season caused a catastrophic flash flood on Big Bug Creek when fire-scarred soil became hydrophobic and shed rainfall instead of absorbing it.

**Wildfire preparation checklist:**
- Maintain 30 feet of defensible space around all structures (clear vegetation, remove dead wood, prune trees)
- Create 100-foot "ember-resistant zone" where practical
- Keep roof and gutters clear of dead leaves and debris
- Know your evacuation route before you need it
- Consider enrolling your property in the [Firewise USA program](https://www.nfpa.org/firewise) (NFPA). USAA offers up to 5% insurance discount for Firewise designation; Arizona HB2384 requires insurers to factor the designation into rates

**[BOARD]** — Confirm whether any parcels in Goswick Ranch have already completed Firewise designation.

### Flash Flooding

> Big Bug Creek can rise 0–6 feet within 5–10 minutes of a major storm upstream. Do not attempt to cross flooded roadways or washes. Turn around, don't drown.
>
> **Post-fire flooding risk is elevated** following any wildfire in the watershed. Burned soil becomes hydrophobic — water runs off instead of soaking in, dramatically increasing flood volume and speed. After the 2017 Goodwin Fire, a normal monsoon storm produced a Big Bug Creek flood that caused significant damage. This risk can persist for several years after a fire.

### PSPS (Public Safety Power Shutoffs)
> APS may cut power during extreme fire danger conditions (high wind + low humidity + high temperature). This is known as a Public Safety Power Shutoff (PSPS).
>
> **If your property uses a well pump:** Your water supply depends on electricity. Consider a generator as backup. Confirm your well pump's electrical requirements before purchasing a generator.

### Insurance
> Arizona homeowner insurance premiums rose approximately 48% between 2021 and 2024 — the third-highest increase in the country — primarily due to wildfire and weather risk. Arizona has no FAIR plan (insurer of last resort). ISO fire insurance ratings in much of Yavapai County run Class 9–10 (lower quality) due to rural locations.
>
> Obtain insurance quotes early in any purchase process. Ask specifically about wildfire exclusions, debris removal coverage, and extended replacement cost provisions.

### Emergency Resources
- [Yavapai County Emergency Management](https://www.yavapaiaz.gov/emergency)
- [Genasys Protect — evacuation zones](https://protect.genasys.com)
- [AlertYavapai / Smart911 registration](https://www.smart911.com)
- [Arizona Emergency Information Network](https://ein.az.gov)
- [National Weather Service — Flagstaff](https://www.weather.gov/fgz) *(covers Yavapai County)*
- [APS Outage Center](https://www.aps.com) *(verify current URL with APS)*
- [Firewise USA Program (NFPA)](https://www.nfpa.org/firewise)

---

## Utilities — `/resources/utilities.html`

**H1:** Utilities & Services

### Water

> **Mayer Domestic Water Improvement District (MDWID)**
> Provides municipal water service to Mayer and portions of surrounding areas.
> Phone: (928) 632-4041 · P.O. Box 567, Mayer, AZ 86333
>
> **[BOARD]** — Confirm which Goswick Ranch parcels are served by MDWID and which use private wells. This is a critical question for new residents.

> ⚠️ **Water Quality — Arsenic Testing Strongly Recommended**
> If your lot uses a private well, have the water tested for arsenic before drinking it. Approximately 43.6% of Yavapai County groundwater samples exceed the EPA action level of 10 parts per billion for naturally-occurring arsenic. This is a geologic characteristic of the Bradshaw Mountains granite and does not indicate contamination — but it does require treatment. Point-of-use reverse osmosis and activated alumina filters are effective and widely available.
>
> Contact ADWR or a licensed water testing lab for testing. This is not an emergency — it is a standard rural Arizona precaution.

### Electricity
> **Arizona Public Service (APS)**
> Customer service: (602) 371-7171
> Outages: (800) 253-9405
> [aps.com](https://www.aps.com)
>
> APS serves the Mayer and Goswick Ranch area. Note: APS may implement Public Safety Power Shutoffs (PSPS) during extreme fire weather. Residents who rely on well pumps should have generator backup.

### Internet
> Rural internet options have improved significantly. The following are confirmed for the Mayer area (ZIP 86333):
>
> **Starlink (SpaceX satellite)** — Confirmed available in ZIP 86333.
> - Equipment: ~$349 upfront
> - Monthly service: $80–$120/month
> - Speeds: 50–180 Mbps down, adequate for video calls and streaming
> - Latency: 30–50ms (much lower than older satellite services)
> - A practical option for remote workers and retirees equally
>
> **DSL (CenturyLink / Lumen)** — Available in some areas; speeds vary significantly by location.
>
> **Other satellite options** — HughesNet and Viasat are available but generally slower and more expensive than Starlink.
>
> **[BOARD]** — Confirm what providers individual Goswick Ranch residents are currently using.

### Propane
> Most rural homes in the Mayer area use propane for heating, cooking, and water heating. Confirmed providers serving Mayer:
>
> - **Ferrellgas** — Chino Valley; (928) 445-3940
> - **John Graves Propane** — Explicitly serves Mayer area
>
> **[BOARD]** — Confirm preferred local provider and any community bulk rate arrangements.

### Solar
> Solar installations are popular in Arizona due to high sun exposure. Current status of incentives:
>
> - **Federal Investment Tax Credit (ITC):** The 30% federal residential solar tax credit was **eliminated on January 1, 2026**. It is no longer available for new installations.
> - **Arizona State Tax Credit:** A 25% state income tax credit (maximum $1,000) remains available.
> - **APS Export Rate:** APS locks in a solar export rate of approximately $0.062/kWh for 10 years at time of installation.
>
> Yavapai County building permits are required. Consult with a licensed solar installer for current economics.

### Rainwater Harvesting
> Rainwater collection is legal in Arizona and a practical supplement to well water for outdoor/irrigation use.
>
> **ADWR Reimbursement:** The Arizona Department of Water Resources (ADWR) offers reimbursements of up to **$2,000** for rainwater harvesting tanks of 800 gallons or larger used for outdoor/non-potable purposes. No permit required for outdoor use. Larger systems or potable use require permits. See [azwater.gov](https://www.azwater.gov) for current program details.

### HAM / GMRS Radio (Emergency Communications)
> In emergencies where cell and power infrastructure may be down, amateur radio and GMRS provide local communication capability.
>
> - **Mt. Union HAM repeater:** 147.260 MHz (PL 100.0) — high-elevation repeater covering the Bradshaw area
> - **Mt. Union GMRS repeater:** 462.600 MHz — GMRS license required (FCC, $35 for 10 years, no test)
>
> Especially relevant during wildfire evacuations when cell towers may be overloaded.

### Post Office
> **Mayer Post Office**
> 12680 Central Ave, Mayer, AZ 86333
> (928) 632-7558

### Natural Gas
> Mayer and surrounding rural areas do not have natural gas pipeline service. Propane is the standard alternative for heating and cooking.

---

## Yavapai County — `/resources/county.html`

**H1:** Yavapai County Resources

### Key Links

| Resource | Link |
|----------|------|
| County main site | [yavapaiaz.gov](https://www.yavapaiaz.gov) |
| Assessor (property records) | [assessor.yavapai.gov](https://assessor.yavapai.gov) |
| Recorder (CC&Rs, deeds) | [recorder.yavapai.gov](https://recorder.yavapai.gov) |
| Planning & Zoning | [yavapaiaz.gov/planning](https://www.yavapaiaz.gov/planning) |
| Building permits | [yavapaiaz.gov/building](https://www.yavapaiaz.gov/building) |
| Sheriff's Office | [yavapaisheriff.org](https://www.yavapaisheriff.org) |
| Emergency Management | [yavapaiaz.gov/emergency](https://www.yavapaiaz.gov/emergency) |
| GIS Mapping | [yavapaiaz.gov/gis](https://www.yavapaiaz.gov) |

### Property Taxes
> Property taxes in the Mayer area are low by national standards. The median annual property tax in the Mayer ZIP code is approximately $476 — well below the national median of ~$2,400. The effective rate is approximately 0.44%.
>
> Look up your property's assessed value and tax history at [assessor.yavapai.gov](https://assessor.yavapai.gov). Goswick Ranch APNs are in the 402-12-xxx series.

### Building Permits & Zoning
> Goswick Ranch is in Yavapai County's unincorporated area, zoned RCU-2A. Any new construction, additions, or outbuildings require county permits from Yavapai County Development Services.
>
> Yavapai County Development Services: (928) 771-3214

### Mayer Public Library
> 12740 Central Ave, Mayer, AZ 86333 · (928) 632-4732
> Part of the Yavapai County Free Library District. Hours: confirm current hours with library.

---

## Local Services — `/resources/services.html`

**H1:** Local Services

### Water & Well Services
> For parcels with private wells, regular testing and maintenance is important. Contact Yavapai County for licensed well contractors. Arsenic testing (see Utilities page) is especially recommended before using well water for drinking.

### Schools
> **Mayer Unified School District #43**
> 12568 E Main St, Mayer, AZ 86333 · (928) 642-1100
> 12:1 student-teacher ratio · 526 students total
>
> - Mayer Elementary School (Pre-K through 8th grade) — Spring Valley area
> - Mayer High School (9th–12th grade) — Spring Valley area

### Medical — Prescott
> Full-service medical is in Prescott (~27 miles). Prescott has multiple urgent care clinics, specialists, and YRMC West (the regional hospital). For non-emergency medical care, Prescott is the practical hub.

### Equestrian Services
> - **Los Caballos Veterinary** — Large-animal veterinary care; 24-hour emergency line: (928) 636-6644
> - **Groom Creek Horse Camp** — Prescott National Forest equestrian staging facility with corrals and water
> - **Olsen's Grain** — Dewey (~15 miles); feed, supplies, hay
> - **Prescott Livestock Auction** — Chino Valley; community auction for livestock and agricultural goods

### Groceries & Essentials
> Mayer has a small market for basics. Full-service grocery stores are in Prescott Valley (~20 miles). The SR-69 corridor in Prescott Valley has Walmart, Safeway, and full retail.

### Library
> Mayer Public Library · 12740 Central Ave, Mayer · (928) 632-4732
> Tue–Sat 9am–5pm (confirm current hours). Part of Yavapai County Free Library District.

### Community Events
> **Mayer Daze** — Annual community festival in Mayer; local businesses, food, community gathering.
>
> **Mortimer Farms** (Dewey, ~15 mi) — Seasonal agritourism events: pick-your-own, corn maze, pumpkin patch, farm stand.

**[BOARD]** — Add recommended local contractors, well drillers, excavators, propane suppliers, and other service providers as the board sees fit. A note that "listing here is not an endorsement" is appropriate.

---

## Contact — `/contact/`

**H1:** Contact the Board

### Intro (use as-is)
> Use the form below to reach the Goswick Ranch HOA Board of Directors. We typically respond within **[BOARD — fill in timeframe]** business days.
>
> For urgent matters or emergencies, call 911 or the Yavapai County Sheriff non-emergency line at (928) 771-3260.

### Contact Form Fields
```
Name (required)
Email (required)
Phone (optional)
Subject: General Question | HOA Documents Request | ARC / Building | Dues Inquiry | Rule Concern | Other
Message (required)
```

Implementation: Formspree.io (free tier: 50 submissions/month — adequate for a small HOA).

**[BOARD]** — Need board email to wire up Formspree. A PO Box for the mailing address (not a personal home address) is recommended.

---

## Architectural Review Request — `/contact/arc.html`

**H1:** Architectural Review Committee Request

### Intro (use as-is)
> Before beginning any exterior improvement, addition, new structure, or landscaping change visible from neighboring properties or common areas, submit an ARC request.
>
> Under 2025 Arizona law (A.R.S. § 33-1817), if the HOA does not respond within **30 days**, the request is deemed approved. You will receive written notice of the board's decision.
>
> **Do not begin work until you receive written approval or the 30-day period expires without a response.**

### ARC Request Form Fields
```
Homeowner Name (required)
Property Address (required)
Email (required)
Phone (required)
Description of proposed work (required, textarea)
Estimated start date
Estimated completion date
Site plan / drawings / photos (file upload or email attachment instructions)
Acknowledgment checkbox: "I understand that work may not begin until written approval
  is received from the ARC, or 30 days have passed without a response."
```

**[BOARD]** — Confirm who receives ARC submissions and whether a dedicated email address should be created.
