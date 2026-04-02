# Page 03: Governing Documents

*Priority: MVP | Audience: Residents and prospective buyers*

---

## Page Purpose

The most-visited page on most HOA sites. Provides downloadable access to all governing documents. Under Arizona law (ARS §33-1805), these must be made available to members within 10 business days of request — the website fulfills this proactively.

---

## Page Title

**H1:** Governing Documents
**Meta description:** Download Goswick Ranch HOA governing documents: CC&Rs, Bylaws, Plat Map, and meeting minutes. Mayer, AZ 86333.

---

## Document Library Structure

Organize links in collapsible sections by category. Include file size next to each link.

### Governance Documents

| Document | File | Notes |
|---|---|---|
| CC&Rs (Declaration) | `CC&Rs Goswick HOA.pdf` | **Available** — from `Documents/` folder |
| Bylaws | `Goswick ByLaws.pdf` | **Available** — from `Documents/` folder |
| Plat Map | Liber 56, Pages 8–12 | **Available** via county link (see below) or embed PDF |
| Rules & Regulations | — | **Pending board** |
| Articles of Incorporation | — | **Pending board** |

**Plat search URL:**
`https://yavapaicountyaz-web.tylerhost.net/web/web/integration/search?field_selfservice_documentTypes-holderInput=LandSurveys&field_BookPageID.Book=56&field_BookPageID.Page=8`

### Meeting Minutes

| Year | Files |
|---|---|
| 2024 | *Pending board* |
| 2025 | *Pending board* |

Name files consistently: `YYYY-MM-DD-Meeting-Minutes.pdf`

### Financial Documents

| Document | Notes |
|---|---|
| Annual Budget | *Pending board* |
| Annual Report | *Pending board* |

> **Accessibility note:** Financial documents need not be publicly posted — they may be distributed to confirmed members by email or via a private link. See `research/10_arizona_hoa_law.md` for record-retention obligations.

### ARC Documents

*(Linked from the ARC page; cross-link here.)*
- ARC Guidelines
- ARC Request Form (Formspree or PDF)

---

## Page Copy

**Intro paragraph:**

> All Goswick Ranch HOA governing documents are listed below. These documents establish the rights and responsibilities of all property owners in the community. In the event of any conflict between website content and the official governing documents, the official documents control.

**Disclaimer block (required):**

> **Document Currency:** Documents posted on this site may not reflect the most current amendments. For the most current official version, contact the board directly.

---

## What Arizona Law Requires (from §33-1805)

Board members should know:
- CC&Rs, Bylaws, Rules & Regs, and Articles of Incorporation must be available to members **within 10 business days** of written request
- Meeting minutes must be kept permanently and made available to members
- Meeting recordings (if taken) must be kept for at least **6 months** (2025 update)
- **The website satisfies these obligations proactively** — no need to respond to individual requests for documents already posted

---

## Design Notes

- Use collapsible accordion sections (one per document category)
- Every link should show file format and size: `CC&Rs (PDF, 1.4 MB)`
- Date-stamp meeting minutes links
- Add a "Last updated" timestamp at top of page
- No login required — CC&Rs and Bylaws are already public county records

---

## Blockers

| Item | Status |
|---|---|
| Rules & Regulations PDF | **Needs board** |
| Meeting minutes (2023–2025) | **Needs board** |
| Annual budget | **Needs board** |
| Articles of Incorporation | **Needs board** |

---

## Source Files

- `research/10_arizona_hoa_law.md` — §33-1805 record retention; what must be disclosed
- `research/01_goswick_ranch_hoa.md` — document status, plat record
- `research/11_hoa_website_design.md` — document library structure, file naming convention
