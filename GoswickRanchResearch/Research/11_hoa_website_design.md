# HOA Website Design & Content Strategy

*Last updated: 2026-04-01 (hero photo added)*
*Research compiled: 2026-03-28 to 2026-03-29*

---

## Overview

This file consolidates all research for designing, building, and maintaining the Goswick Ranch HOA website. It covers: reference HOA sites studied, core content best practices, design trends, technical features, SEO, legal compliance, and actionable recommendations tailored to a small self-managed rural Arizona gated community.

**Target outcome:** A static GitHub Pages site that is the best-in-class example for a small rural Arizona HOA — surpassing every existing comparable site in the Yavapai County corridor.

---

## Reference HOA Websites Studied

### What Separates Exceptional from Mediocre

| Dimension | Mediocre | Exceptional |
|---|---|---|
| Visual design | Stock photos, generic templates | Authentic community photography, distinctive identity |
| Navigation | Deep menus, hard to find things | One- or two-click access to everything that matters |
| Content | Legalese-heavy, board-centric | Resident-first, prospective-buyer friendly, community-forward |
| Features | Static PDFs, email contact only | Forms, calendar, searchable documents, emergency banners |
| Freshness | Updated once a year | News/announcements updated regularly |

### Windgate Ranch HOA — windgateranch.org

**Location:** North Scottsdale, Arizona

**Navigation:**
```
Home | Amenities (Tennis/Pickleball) | Residents (Gate Access, HOA 101, Document Library, Assessments) | Design Review | Facility Rental | Calendar | Real Estate Agents
```

**Key features:**
- **HOA 101 section** — educational resource explaining HOA concepts to new residents
- **Document Library** — centralized document access
- **Design Review page** — guidelines for landscape, hardscape, and architectural modifications
- **Gate Access page** — dedicated information for residents
- **Real Estate Agents section** — adapted for property professionals
- **Color:** Teal/green accent (#15655A); clean sans-serif typography

**Applicability for Goswick Ranch:**
- HOA 101 educates first-time HOA members — excellent model for a new website
- "Real Estate Agents" page can be adapted to "Prospective Buyers"
- Document Library + Assessments is the core structure Goswick Ranch needs
- Design Review maps directly to ARC

### Johnson Ranch HOA — johnsonranch.com

**Location:** San Tan Valley / Queen Creek, Arizona

**Navigation:**
```
Home | About (Association Info, Amenities, New Homeowner Information) | Calendar | Forms | Homeowner Portal | Contact | Resources (Assessments, Home Modifications, Documents, Important Contacts, Get Our Emails) | Election Results
```

**Key features:**
- **"New Homeowner Information"** page — essential for communities with new residents
- **Email subscription** list for community communications
- **Election Results** — transparency best practice (easy to replicate with static HTML)
- **"Home and Landscape Modifications"** = Goswick Ranch's Architectural Review process
- **Colors:** Green (#A3BCA7) and muted red (#C25755) — ranch/agricultural palette

### Canyon Gate at Cinco Ranch — canyongateatcincoranch.com

**Location:** Katy, Texas (suburban Houston)

**Navigation:**
```
Home | About (Board of Directors, HOA Forms, Meeting Minutes, Newsletter, I'm New Here) | Community (Security, Taxes, General Information, Amenities) | Schools | Events | Contacts
```

**Key features:**
- **"I'm New Here"** section — onboarding for new residents with gate access, trash, ARB process
- **Community > Taxes page** — explains property tax context; directly relevant to Goswick Ranch's low-tax story
- **Board of Directors** listed prominently
- **Meeting Minutes** archived on site
- **Fonts:** Montserrat + Archivo Black — modern, readable

### Comparable Small Rural Arizona Sites

**Estates at Cherry Ridge** (Dewey, AZ — same Yavapai County corridor — most geographically comparable)
- **Strengths:** Full-width hero with landscape photography, clear community identity, wildlife information, firewise resources, road update notices, ARC section exists
- **Weaknesses:** No online ARC form (PDF only), no event calendar, no payment portal, no searchable document library, no FAQ, no prospective buyer section, minimal mobile optimization
- **Lesson:** This is the standard to beat. Goswick Ranch can surpass it substantially with modest effort.

**Vactor Ranch** (Tucson, AZ — 126 homes, gated, small scale)
- **Strengths:** Warm Southwestern palette (tan #f6c590, rust #ad4800, dark brown #68462f), lot map page, official documents, ARC form download, paint color chart, photo gallery, password-protected resident area
- **Weaknesses:** Limited interactivity, no news/calendar, minimal mobile optimization
- **Lesson:** The lot map and paint color chart are specific features worth replicating.

**The Ranch Community** (Pagosa Springs, CO — rural POA — best model found)
- **Strengths:** Full-width photo carousel hero with aerial and wildlife photos, balanced lifestyle/governance content, financials and minutes easily accessible, contact form, board members listed
- **Weaknesses:** No FAQ, no prospective buyer section, no interactive map
- **Lesson:** Best model for rural ranch POA balance of lifestyle and governance content.

**Elk Springs Ranch HOA** (Four Corners, CO — 13 parcels of 35+ acres)
- **Strengths:** Document repository, fire safety resources, wildlife information, community character description
- **Weaknesses:** Google Sites with no photography, no interactive features, no mobile optimization
- **Lesson:** Shows what "functional but uninspiring" looks like for a community of 13 parcels.

### Cross-Site Feature Comparison

| Feature | Windgate Ranch | Johnson Ranch | Canyon Gate | Cherry Ridge |
|---|:-:|:-:|:-:|:-:|
| Document library | Yes | Yes | Yes | Yes |
| Board of Directors page | — | Yes | Yes | — |
| Meeting minutes | Yes | Yes | Yes | — |
| Calendar | Yes | Yes | Yes | — |
| Contact/forms | Yes | Yes | Yes | Yes |
| New resident section | — | Yes | Yes | — |
| Architectural/design review | Yes | Yes | — | Yes |
| Resident portal (login) | Yes | Yes | — | — |
| Payment/assessments | Yes | Yes | — | — |
| Newsletter | — | Email signup | Yes | — |
| Election results | — | Yes | — | — |
| Schools info | — | — | Yes | — |
| Tax info page | — | — | Yes | — |
| Gate access info | Yes | — | Yes | — |
| Lot map | — | — | — | — |

**Assessment:** No small rural Arizona HOA website fully delivers on all five dimensions. The standard to beat is low; the bar for "exceptional" is achievable with a static GitHub Pages site.

---

## Content Best Practices

### Recommended Navigation for Goswick Ranch

```
Home | About | Living Here | Documents | ARC | News | Contact
```

Or with a prospective buyer emphasis:

```
Home | About | For Buyers | Documents | ARC | News | Contact
```

Documents and ARC should always be top-level — they are the most-visited pages on HOA sites. Never bury them inside a "Resources" dropdown.

### Public-Facing Pages (No Login Required)

**Homepage:**
- Hero with authentic photography, one-sentence community description
- Four to six quick-access tiles (Documents, ARC, Calendar, Contact minimum)
- Latest announcement/news teaser
- Contact CTA

**About Goswick Ranch:**
- Community history and character, geography and setting
- Wildlife and landscape overview
- Gate access overview
- Community values and what makes it unique

**Living Here:**
- Overview for prospective buyers and new owners
- Lifestyle description, lot sizes, road maintenance, utilities, gates, wildlife, fire safety culture

**Governing Documents:**
- Publicly downloadable: CC&Rs, Bylaws, Articles of Incorporation, Plat Map
- (All are already public record in Yavapai County)

**ARC (Architectural Review):**
- Guidelines summary, what requires approval
- Online submission form or downloadable form
- Timeline expectations
- Paint color chart or standards summary

**Board & Contact:**
- Board member names and roles
- Contact form (not plain email addresses — use a form to avoid spam)
- Response time expectation, meeting schedule

**FAQ:**
- 10–15 questions covering what new residents and prospective buyers most ask

**Photo Gallery:**
- Authentic community, landscape, and wildlife photography

**News & Announcements:**
- Dated entries: road conditions, gate maintenance, fire restrictions, meeting reminders
- Emergency alert banner for urgent notices

### Password-Protected / Members-Only Content

- Meeting minutes (best practice — accessible to members, not public)
- Financial statements and annual budget
- Vendor/contractor contact list
- Member directory (optional, consent-based)

### What Prospective Buyers Check Before Purchasing

Research identifies these as the top items buyers check:

1. **CC&Rs and use restrictions** — Can they have horses, chickens, RVs, additional structures?
2. **HOA fee amount and what it covers** — Annual dues, what is included, history of increases
3. **Financial health** — Is there a reserve fund? Is the association solvent?
4. **Meeting minutes** — Recurring problems? Is the board responsive?
5. **Photos of the community** — Actual conditions, not idealized marketing shots
6. **Board transparency** — Contact information, evidence of active management
7. **Lifestyle fit** — What is day-to-day life like? What do neighbors value?

**Recommendation:** Create a dedicated "Prospective Buyers" or "Thinking of Buying Here?" page that proactively answers all seven questions. Almost no small HOA sites do this well — it is a major differentiator.

### Recommended "For Prospective Buyers" Page Structure

1. What Is Goswick Ranch? (location, setting, community character, lot sizes, what makes it distinctive)
2. Fees and What They Cover (current annual assessment, what it funds, special assessment history)
3. What You Can Do with Your Property (plain-English CC&R summary: animals, structures, agriculture, STRs, commercial use)
4. What to Expect from the HOA (self-managed, board composition, ARC process, dispute handling)
5. Key Documents (downloadable CC&Rs, Bylaws, Plat Map)
6. Questions? (Formspree contact form)

**Framing note:** Lead with what IS allowed (horses, agriculture, custom homes, privacy, wildlife) rather than leading with restrictions. The CC&Rs protect the character buyers are buying into — frame them as a feature.

### How to Present CC&Rs Attractively

1. Create a "Key Rules Summary" page in plain English — one-page human-readable summary of most common questions
2. Use an accordion/collapsible FAQ format for the summary
3. Include the full CC&Rs as a downloadable PDF alongside the plain-English summary
4. "Estimated time-to-read disclosure" reduces intimidation: "The full CC&Rs are X pages. Here's what most people need to know in 2 minutes."

### What Current Residents Most Need

1. Quick access to CC&Rs and rules (without logging in)
2. ARC form submission
3. Board meeting dates and agendas
4. Contact for road issues, gate problems, emergencies
5. Current fire restriction status (critical in Arizona)
6. News about common area maintenance / road work
7. Meeting minutes archive

---

## Design: Visual Direction

### Color Palette — Arizona Desert/Ranch Communities

The 70/20/10 rule applied to Sonoran desert palette:

| Role | Color Options | Hex Examples |
|---|---|---|
| **70% neutral base** | Warm sandy beige, off-white | #f5ede0, #faf7f2 |
| **20% earth anchor** | Terracotta/rust, deep adobe | #b5541c, #a0522d |
| **10% accent** | Dusty teal or sage green | #4a8c8c, #65cfd0 |

**Avoid:** Bright blues (feels coastal, not desert); pure white (harsh against landscape photography); generic real-estate navy/gold (too corporate for rural community).

**Reference palettes:** Vactor Ranch (tan/rust/brown); Windgate Ranch (#15655A teal); Johnson Ranch (green #A3BCA7 + red #C25755).

### Typography

- **Headings:** Playfair Display, Lora, or Cormorant Garamond — serif communicates permanence, land, heritage
- **Body:** Inter, Open Sans, or Source Sans 3 — clean, highly readable
- **Body text minimum:** 16px; **preferred:** 18px (older audiences are common in HOA communities)
- Avoid all-caps body text; all-caps acceptable for section labels and short navigation items
- Both Trebuchet MS (Windgate Ranch, Johnson Ranch) and Montserrat (Canyon Gate) work for this niche

### Hero Sections

- Full-width, **1920×1080px baseline**, 16:9 ratio
- Subject centered within middle 50% of frame (sides will crop on different screen sizes)
- **Dark overlay at 30–40% opacity** to ensure text legibility over landscape photography (`rgba(0,0,0,0.35)` is a reliable starting point)
- Hero text: bold headline 48–72px desktop, short tagline (one line max), one primary CTA button
- CTA button: rust or teal on darkened landscape photo works well
- **Do NOT lazy-load the hero image** — must load eagerly (it is the Largest Contentful Paint element)
- Image format: **WebP with JPEG fallback**; compress to **under 200KB**
- Mobile: reduce hero height, scale typography to 40–50px, minimum 44×44px tap target on CTA

### Current Hero Photo — Implementation Record

**File:** `GoswickRanch2HawkMountainTrlMayerAZ86333.png`
**Source location:** `GoswickRanchResearch/Documents/GoswickRanch2HawkMountainTrlMayerAZ86333.png`
**Deployed as:** `WebSite/public/img/hero-panorama.png` (Astro) and `WebSite/wwwroot/img/hero-panorama.png` (wwwroot)
**Description:** Panoramic landscape shot from Hawk Mountain Trail, 2 Hawk Mountain Trl, Mayer AZ 86333 — Bradshaw Mountains chaparral in foreground, rolling peaks and dramatic monsoon cloud sky. MLS-sourced listing photo.
**CSS implementation:**
```css
.hero {
  height: min(75vh, 680px);
  background: url('/GoswickRanchMayerArizona/img/hero-panorama.png') center 40%/cover no-repeat,
              linear-gradient(135deg, var(--color-primary) 0%, #3d2810 100%);
}
```
The `center 40%` vertical position keeps the mountain ridgeline prominent without overweighting the sky.

**⚠ Known issue — file size:** Current PNG is **1.29 MB**, well above the 200KB target. Should be converted to WebP and compressed before the site is considered production-optimized. Suggested command:
```
cwebp -q 80 hero-panorama.png -o hero-panorama.webp
```
After conversion, update the CSS `url()` reference and add a JPEG fallback `<picture>` element if the hero is ever changed to an `<img>` tag.

### Layout Patterns

- Clean card grid on homepage (4 tiles for quick access: Documents, ARC, Calendar, Contact)
- Full-width section breaks with landscape photography between content sections
- Sidebar-free design (simpler, cleaner, more mobile-friendly)
- Generous white/off-white space — ranch communities should feel unhurried
- Sticky header with logo and minimal navigation
- Section anchors for bookmarking/direct linking

### Navigation Architecture

- **Five to seven top-level items maximum**, never more
- Documents and ARC always at top level — never buried in a dropdown

### Accessibility (WCAG 2.1 AA)

Arizona HOAs are not currently legally mandated to meet web accessibility standards. However, WCAG 2.1 AA is strongly recommended:
- ADA Title II rule (effective 2026–2027) may create obligations as case law evolves
- Significantly expands usability for older residents
- Straightforwardly achievable on a static GitHub Pages site

**WCAG 2.1 AA checklist for static HOA site:**
- All images have descriptive alt text
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text (18px+ bold)
- All functionality reachable by keyboard
- Focus indicator visible on all interactive elements
- Skip-to-main-content link at top of every page
- Form fields have explicit `<label>` elements (not placeholder-only)
- Page language declared: `<html lang="en">`
- Heading hierarchy logical (H1 → H2 → H3, no skips)
- No content depends solely on color to convey meaning

---

## Technical Features

### Forms — Formspree (Recommended)

**Formspree** is the clear recommendation for a static GitHub Pages HOA site:
- Free tier: up to **50 submissions/month** (sufficient for a 9-lot-minimum community)
- No server-side code required — pure HTML `<form>` with `action="https://formspree.io/f/YOUR_ID"` and `method="POST"`
- Submissions forwarded to any email address
- Supports file uploads on paid plans (useful for ARC photo submissions)
- Spam protection built in
- Multiple forms (contact, ARC request, general inquiry) under one free account

**Four forms to create for Goswick Ranch:**

1. **General Contact** — Name, email, address/lot number, message
2. **ARC Request Form** — Name, lot/address, project type (checkbox: structure / fence / painting / landscaping / other), project description, proposed start date, contractor name, checkbox confirming reviewed design guidelines, file upload for photos/plans, acknowledgment of approval timeline
3. **Road/Gate Issue Report** — Name, lot/address, issue type (checkbox), description, urgency level
4. **New Resident Welcome Form** — Name, address, move-in date, contact email/phone, contact preference

### Maps

**Leaflet.js + OpenStreetMap** — recommended for interactive maps:
- No API key required (unlike Google Maps)
- Free, open-source, BSD license
- Supports GeoJSON for drawing property/lot boundaries as polygons
- Supports custom markers for gate, roads, amenities
- Mobile-friendly, ~42KB minified
- Embeds in HTML with a `<div>` and a few lines of JavaScript

**No-code alternative:** uMap (umap.openstreetmap.fr) — create the map in a browser UI, draw polygons/markers manually, embed via iframe. No coding required. Good for board member maintenance.

**What to show on the Goswick Ranch map:**
- Community boundary polygon
- Individual lot outlines with lot numbers (labeled on hover/click)
- Gate location with icon
- Road network overlay
- Well locations if known

**Simplest option:** Google Maps embed (no API key for a basic location pin) — appropriate if property boundaries are not needed.

### Calendar — Embedded Google Calendar

- Create a community Google Calendar (board uses a shared Google account)
- Set calendar to "public" visibility
- Use Google's "Embed code" option to get an iframe; paste directly into Events/Calendar page
- Board members update from any device; website reflects changes automatically
- No third-party service fees

**Better-looking alternative:** Tockify — free embeddable widget, cleaner design than native Google Calendar, syncs with Google Calendar, embed via a simple script tag.

### Document Library

**File organization structure:**
```
/documents/
  governance/
    CC&Rs.pdf
    Bylaws.pdf
    Articles-of-Incorporation.pdf
    Plat-Map.pdf
  arc/
    ARC-Guidelines.pdf
    Paint-Color-Standards.pdf
    ARC-Request-Form.pdf
  meetings/
    2024/
      2024-01-15-Minutes.pdf
    2025/
      ...
  financial/  (members-only or distribute by email)
    2024-Annual-Budget.pdf
    2024-Annual-Report.pdf
  notices/
    ...
```

**On the website:**
- Organize links in collapsible sections by category
- Include file size next to each link (e.g., "CC&Rs (PDF, 1.2 MB)")
- Date-stamp all meeting minutes links
- Keep filenames consistent: `YYYY-MM-DD-Meeting-Minutes.pdf`

**Important:** GitHub Pages does NOT support server-side password protection. Options for sensitive documents:
- Use Netlify with password protection for members-only content
- Use a private Google Drive with shared link distributed to confirmed members
- Accept that all linked documents are publicly accessible and redact sensitive personal information before posting

### Photo Gallery — Lightbox2

**Lightbox2** (lokeshdhakar.com/projects/lightbox2):
- Add `data-lightbox="community"` attribute to any image link
- Click opens a full-screen overlay with navigation arrows
- Zero dependencies; CDN-hosted via one `<link>` and one `<script>` tag
- Built-in keyboard navigation and ARIA accessibility support

**Gallery categories for Goswick Ranch:**
- Community landscapes (mountains, desert, sunsets)
- Wildlife (deer, bear, coyote, raptors)
- Gate and road infrastructure
- Community events (annual meeting, work parties)
- Seasons (monsoon, snow, spring wildflowers)

**Performance:** Compress gallery images to ≤150KB each (WebP format). Use thumbnail grids (300–400px wide) that open full-size (1200px) in lightbox. Never load full-size images in the grid.

### News / Announcements

- Reverse-chronological order (newest first)
- Date every entry prominently
- Visual "alert" or "banner" component for urgent notices
- Limit homepage to three most recent items; link to full archive
- Sticky top banner for site-wide emergencies:

```html
<div class="site-alert" role="alert">
  <strong>Fire Restriction:</strong> Stage 2 in effect as of June 1.
  <a href="/documents/notices/fire-restrictions.pdf">Read the notice</a>
</div>
```

### Performance Targets (GitHub Pages)

| Target | Value |
|---|---|
| Hero image | WebP, ≤200KB, eager loading |
| Other images | WebP, ≤150KB, lazy loading |
| Total homepage weight | ≤1MB |
| LCP (Largest Contentful Paint) | ≤2.5 seconds |
| CLS (Cumulative Layout Shift) | <0.1 |

Use `font-display: swap` on any Google Fonts to avoid render-blocking. Minify CSS and JavaScript.

### Technical Stack Summary — All Free, Static-Compatible

| Need | Tool | Cost |
|---|---|---|
| Hosting | GitHub Pages | Free |
| Forms | Formspree | Free (≤50/month) |
| Calendar | Embedded Google Calendar | Free |
| Interactive map | Leaflet.js + OpenStreetMap | Free |
| Map creation (no-code) | uMap | Free |
| Photo lightbox | Lightbox2 | Free |
| Fonts | Google Fonts (e.g., Inter + Lora) | Free |
| Schema markup | Handwritten JSON-LD | Free |
| Performance monitoring | PageSpeed Insights | Free |
| Accessibility check | WAVE (wave.webaim.org) | Free |
| Privacy policy generator | Termly.io basic | Free |

---

## Hosting Platform Options

### Free / Low-Cost Static Hosting (Recommended for Goswick Ranch)

- **GitHub Pages** — Free, excellent for static sites, version-controlled
- **Netlify** — Free tier; deploy from Git; supports forms and basic password protection
- **Vercel** — Free tier; fast CDN

### Paid HOA-Specific Platforms (If More Features Needed)

- **Neighborhood.Online** — Purpose-built, includes resident portal, payments
- **HOA Sites** (hoa-sites.com) — Dedicated HOA hosting
- **WildApricot** — Membership management + website
- **PayHOA** — Payments + basic website
- **Buildium** — Full property management suite

---

## SEO

### Target Keywords

**Informational (current/prospective residents):**
- "Goswick Ranch HOA Mayer AZ"
- "Goswick Ranch Mayer Arizona"
- "HOA rules Goswick Ranch"

**Discovery (prospective buyers):**
- "gated ranch community Mayer AZ"
- "rural ranch lots Mayer Arizona HOA"
- "horse property HOA Mayer Arizona"
- "Prescott area rural gated community"

**Local context:**
- "Mayer AZ community"
- "Antelope Creek Yavapai County ranch"

### On-Page SEO Checklist

Every page should have:
- Unique, descriptive `<title>` tag (e.g., "Governing Documents — Goswick Ranch HOA, Mayer AZ")
- Unique meta description (150–160 characters)
- H1 that matches/reinforces the page topic
- Consistent NAP: Name (Goswick Ranch Homeowners Association), Address (Mayer, AZ 86333)

### Schema Markup (JSON-LD)

Add an `Organization` schema block to the `<head>` of every page:

```json
{
  "@context": "https://schema.org",
  "@type": "HomeownersAssociation",
  "name": "Goswick Ranch Homeowners Association",
  "url": "https://[your-domain]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mayer",
    "addressRegion": "AZ",
    "postalCode": "86333",
    "addressCountry": "US"
  },
  "description": "Self-managed gated ranch community in Mayer, Arizona. Minimum 9-acre lots."
}
```

`HomeownersAssociation` is a recognized schema.org type (subtype of `Organization`).

### Local SEO

- Create a **Google Business Profile** for Goswick Ranch HOA — gets the community appearing in Google Maps and local search
- Add to HOA-USA.com and Arizona HOA registries
- The FAQ page is a strong SEO asset — questions match voice search and "People Also Ask" patterns

---

## Legal and Compliance

### Website Requirement — Arizona Status

**Arizona does NOT mandate that HOAs maintain a public website** (contrast: Florida requires 100+ parcel HOAs; Texas requires 60+ lot POAs; Nevada requires 150+ unit communities). Arizona's Planned Communities Act (§§33-1801 et seq.) focuses on record access upon request.

Key obligations relevant to the website:
- CC&Rs and governing documents must be made available to members within **10 business days** of request
- Meeting minutes must be kept permanently and made available to members
- Meeting recordings (if a board records open meetings) must be kept for at least **6 months** and provided to any member on request (2025)

**What this means for the website:**
- Posting CC&Rs, Bylaws, and the Plat Map publicly is encouraged and legally safe (they are public county records)
- Posting meeting minutes publicly is optional — can be password-protected or members-only
- Financial records should be accessible to members but need not be public

### Privacy Policy

Recommended content for a simple one-page privacy policy:
1. What information is collected (name, email, address from contact/ARC forms)
2. How it is used (only for HOA administration; not shared or sold)
3. Third-party services used (Formspree, Google Analytics if used)
4. Data retention (form submissions retained per HOA record-keeping practices)
5. How to request data deletion or correction
6. Contact for privacy questions
7. "This site is not intended for children under 13"

Services like Termly.io or Iubenda can auto-generate a starter template.

### Standard Disclaimers

1. **Legal disclaimer:** "The information on this website is provided for informational purposes only and does not constitute legal advice. In the event of any conflict between website content and the official governing documents, the official documents control."

2. **Document currency disclaimer:** "Documents posted on this site may not reflect the most current amendments. Always request the current official version from the board."

### Photo/Privacy

- Do not post photos of minors without parental consent
- If posting photos of residents, get their consent
- Aerial drone photos of the community are generally acceptable and highly effective

---

## Content Checklist for Launch

### Minimum Viable Site (Static, No Backend)

- [ ] Homepage with hero photo, community tagline, quick-access tiles
- [ ] About page — community history, setting, what makes it special
- [ ] Board of Directors page — names, roles, contact form
- [ ] CC&Rs PDF (downloadable)
- [ ] Bylaws PDF (downloadable)
- [ ] Rules & Regulations PDF (downloadable)
- [ ] Meeting minutes (PDFs organized by year)
- [ ] Announcements/News section (HTML with dates)
- [ ] Contact form (Formspree or mailto:)
- [ ] Architectural Review Request form/instructions
- [ ] Resident Resources page (county services, utilities, emergency contacts)
- [ ] Location/Directions page with embedded map

### Phase 2 Enhancements

- [ ] Community calendar (Google Calendar embed)
- [ ] Photo gallery (Lightbox2)
- [ ] "Prospective Buyers" dedicated page
- [ ] "Key Rules Summary" plain-English CC&R page
- [ ] Interactive lot map (Leaflet.js or uMap)
- [ ] FAQ page (10–15 questions)
- [ ] Password-protected resident section (Netlify Identity or separate Google Drive)
- [ ] Online payment info (HOA Payments, Zelle info, or Stripe)
- [ ] Email list signup
- [ ] Schema markup on all pages
- [ ] Google Business Profile

---

## Priority Action Plan for Goswick Ranch

### Priority 1: Foundation

1. **Choose and lock in a domain:** `goswickranchhoa.org` or `goswickranch.community`
2. **Photography sprint before launch:** Get 8–12 genuine photographs: landscape hero shot, gate, road, wildlife, and community meeting. Authentic photography is irreplaceable — stock photos undermine credibility immediately.
3. **Create the hero section:** Full-width Arizona landscape photo, dark overlay (~35% opacity), headline "Goswick Ranch — Mayer, Arizona", one CTA button
4. **Build the five core pages:** Home, About/Living Here, Documents, ARC, Contact
5. **Set up Formspree:** Contact form and ARC request form at minimum

### Priority 2: Differentiation

6. **Prospective Buyers page** — as described; almost no small HOA sites have this done well
7. **Key Rules Summary** — plain-English CC&R summary alongside full document download
8. **Lot map** (Leaflet/uMap) — practical resource and transparency signal
9. **Wildlife and landscape section** — community identity asset and buyer draw
10. **Embedded Google Calendar** for board meetings and community events

### Priority 3: Sustaining Excellence

11. **News/Announcements section** with emergency alert banner capability
12. **Photo gallery** organized by category, updated annually
13. **FAQ page** addressing 10–15 most common questions
14. **Schema markup** (HomeownersAssociation JSON-LD) on every page
15. **Google Business Profile** for local SEO
16. **Annual content review** — update all dates, check all PDF links, refresh news section

---

## Sources

- `Web/05_reference_hoa_websites.md` — Wave 1 research (March 28, 2026) — Windgate Ranch, Johnson Ranch, Canyon Gate analysis; cross-site feature comparison; recommended navigation structure; design inspiration notes
- `Web/06_hoa_best_practices.md` — Wave 1 research (March 28, 2026) — 11 core features from hoamanagement.com; platform options; content checklist; specific recommendations for small private rural community
- `Web/10_hoa_website_design_strategy_2025.md` — Wave 2 research (March 2026) — best HOA sites (Bay Harbor, Lake Linganore, Windgate, Vactor Ranch, Cherry Ridge, The Ranch Community); content best practices and master checklist; design trends 2025 (typography, color palette, hero sections, layout, WCAG 2.1 AA); technical features (Formspree, Leaflet.js, Google Calendar, document library, Lightbox2, performance targets); SEO strategy; legal compliance; comparable small rural Arizona sites; content that converts prospective buyers; 9-section actionable recommendation plan
