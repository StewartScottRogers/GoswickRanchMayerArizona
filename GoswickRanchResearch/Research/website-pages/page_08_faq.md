# Page 08: FAQ

*Priority: Phase 2 | Audience: New residents, prospective buyers, general*

---

## Page Purpose

A single-page FAQ covering the 12–15 most common questions about the community. Strong SEO asset — questions match voice search and "People Also Ask" patterns. Helps residents self-serve without emailing the board for routine information.

---

## Page Title

**H1:** Frequently Asked Questions
**Meta description:** Common questions about Goswick Ranch HOA — HOA fees, horses, gate access, utilities, ARC process, and more.

---

## Implementation Note

Use an **accordion/collapsible FAQ format** — each question is a clickable header that expands to reveal the answer. This is compact, scannable, and good for SEO (Google shows individual Q&A in search results).

---

## Questions and Answers

### Community & HOA Basics

**Q: What is the annual HOA fee?**
A: The annual assessment is **$216 per year ($18/month)**, confirmed from MLS listing data. For official confirmation and details on what it covers, contact the board.

**Q: Is Goswick Ranch a gated community?**
A: Yes. The entrance gate is on E Poland Road, approximately 1.5 miles from the AZ Route 69 / Poland Road junction. Access is via a physical lockbox. Contact the board for resident access information.

**Q: Who manages the HOA?**
A: Goswick Ranch is **self-managed** by a volunteer board of property owners. There is no management company. Board members handle road maintenance, ARC review, communications, and all other HOA administration.

**Q: How many properties are in Goswick Ranch?**
A: Approximately 25–35 parcels, based on Yavapai County parcel map research. The board can confirm the exact number.

**Q: Where can I find the CC&Rs, Bylaws, and other governing documents?**
A: All available governing documents are on the [Documents page](/documents). The CC&Rs and Bylaws are downloadable PDFs. Additional documents will be added as they are made available.

---

### Property Use

**Q: Can I have horses at Goswick Ranch?**
A: Yes. The community is zoned RCU-2A (Rural Community Unincorporated), which explicitly allows horses and equestrian facilities. Prescott National Forest trails are accessible from the Poland Road corridor for trail riding.

**Q: Can I have chickens?**
A: Yes, up to **8 chickens per lot**. Roosters are prohibited in residential zones under Yavapai County ordinance.

**Q: What are the minimum lot and home sizes?**
A: The CC&Rs establish a **9-acre minimum lot size** (much larger than the county's 2-acre baseline) and a **1,500 square foot minimum home size**. All homes must be site-built — no manufactured or mobile homes.

**Q: Can I build an ADU (guest house / in-law suite)?**
A: Yavapai County adopted new ADU standards in November 2025 allowing one attached and one detached ADU per lot (maximum 1,000 sq ft). However, **the Goswick Ranch CC&Rs may impose additional restrictions** — contact the board before planning any ADU.

**Q: Can I run a short-term rental (Airbnb, VRBO)?**
A: Arizona state law allows STRs in unincorporated areas, but the Goswick Ranch CC&Rs may restrict them. Confirm with the board before listing your property.

**Q: Can I run a business from my property?**
A: The CC&Rs may restrict commercial activity on residential lots. Confirm with the board. Agricultural activities (equine operations, livestock raising) are generally permitted under RCU-2A zoning.

---

### Building and Modifications

**Q: Do I need approval before making changes to my property?**
A: Yes. Any exterior modification — new structures, fences, paint color changes, significant landscaping — requires Architectural Review Committee (ARC) approval before work begins. See the [ARC page](/arc) for the submission process. When in doubt, ask first.

**Q: How long does ARC approval take?**
A: Under Arizona law, the board has **60 days** to approve or deny a complete ARC application. If no response is given within 60 days, the modification is deemed approved by default (ARS §33-1817).

---

### Utilities

**Q: Is there city water or do I need a well?**
A: Each lot has an **individual private well** — there is no community water system or connection to the Mayer Domestic Water Improvement District.

**Q: Is there natural gas?**
A: No natural gas line serves the area. Residents use **propane**. Four providers serve the Mayer corridor: Ferrellgas (928-445-3940), AmeriGas (800-263-7442), John Graves Propane (928-567-2425), and Gilligan's Spring Valley 76 (928-632-4139).

**Q: What internet options are available?**
A: **Starlink** is confirmed available at ZIP 86333 (50–180 Mbps, 20–60ms latency). Cellular coverage (Verizon 77%, AT&T 76%, T-Mobile 73%) is present in Mayer but may vary at elevation on individual lots — test on-site before relying on it.

**Q: Should I test my well water for arsenic?**
A: Yes, this is strongly recommended. **43.6% of Yavapai County groundwater samples exceed the EPA's 10 ppb arsenic limit.** The Big Bug Mining District, which encompasses Goswick Ranch, has documented metal leaching risk from historic mining activity. Test for arsenic, lead, nitrates, and mining-related metals every 5 years. ADHR info: https://www.azdhs.gov/wellwater

---

### Safety and Emergency

**Q: What is the fire risk at Goswick Ranch?**
A: The community is in the Wildland-Urban Interface (WUI) in the Bradshaw Mountains. Wildfire is a real risk — maintain your defensible space (clear 0–100 feet around structures). Mayer Fire District offers **free home wildfire risk assessments**: call (928) 632-9534.

**Q: How do I sign up for emergency alerts?**
A: Sign up for **AlertYavapai** (Smart911/RAVE): text **alertYAVAPAI** to **78015**, or register at https://www.smart911.com/smart911/ref/reg.action?pa=yavapaiaz. Find your evacuation zone at https://protect.genasys.com.

---

### Neighborhood Context

**Q: Is there livestock grazing near the roads?**
A: Arizona is an **open range state** in unincorporated Yavapai County. Livestock from neighboring ranches may legally roam onto unfenced property and onto area roads including E Poland Rd and SR 69. If you hit livestock on the open range, **you (the driver) may be liable to the livestock owner** — not the reverse. Drive with awareness at dawn and dusk.

**Q: What is the Henrietta Mine?**
A: The Henrietta Mine (USGS MRDS #10027183) is located within or adjacent to Goswick Ranch property. It holds 18 active mining claims and received an ADEQ air quality permit in 2022. Reclamation proceedings began in 2023. Residents should be aware of this when testing well water and should monitor any air quality notices from ADEQ. See the board for more information.

---

## Design Notes

- Organize questions into collapsible sections by category (Community, Property Use, Building, Utilities, Safety)
- Use standard `<details>`/`<summary>` HTML or a lightweight JS accordion
- Add a "Didn't find your answer?" contact form link at the bottom
- This page is excellent for SEO — each Q&A may appear in Google's "People Also Ask"

---

## Source Files

- `research/01_goswick_ranch_hoa.md` — HOA fee, gate, utilities, lot data
- `research/10_arizona_hoa_law.md` — ARC process (§33-1817), record access, HOA obligations
- `research/12_ranch_lifestyle_governance.md` — livestock, ADUs, STRs, camping, open range law
- `research/07_emergency_preparedness.md` — wildfire, AlertYavapai
- `research/04_history_mining.md` — Henrietta Mine
- `research/06_utilities_services.md` — propane providers, Starlink, well water
