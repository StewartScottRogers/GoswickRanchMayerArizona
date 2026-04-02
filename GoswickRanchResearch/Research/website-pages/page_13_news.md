# Page 13: News & Announcements

*Priority: MVP | Audience: Residents (primarily) and interested community members*

---

## Page Purpose

Provides a dated record of community announcements: fire restrictions, road conditions, gate maintenance, meeting reminders, and urgent notices. This is the primary communication channel between the board and residents on the website.

---

## Page Title

**H1:** News & Announcements
**Meta description:** Goswick Ranch HOA news and community announcements — Mayer, AZ.

---

## Structure

- **Reverse chronological order** (newest first)
- Each entry: date + title + short body text + optional link
- **Limit homepage to 3 most recent items** with a "View all announcements →" link to this page
- **Emergency banner** for time-sensitive issues (displayed site-wide from `<header>` or above the nav)

---

## Emergency Alert Banner (Template)

Add to the top of every page during active emergencies or Stage 2 fire restrictions:

```html
<div class="site-alert" role="alert" aria-live="assertive">
  <strong>⚠ Stage 2 Fire Restriction</strong> in effect as of June 1, 2026.
  No campfires, no open burning, no fireworks.
  <a href="https://www.yavapaiready.gov/FireBan">Full details →</a>
</div>
```

Remove the banner promptly when the condition ends.

---

## Announcement Entry Template

```html
<article class="announcement">
  <time datetime="2026-04-01">April 1, 2026</time>
  <h2>Welcome to the New Goswick Ranch HOA Website</h2>
  <p>The board has launched this website to provide a central resource for 
     governing documents, ARC information, and community news. Use the 
     navigation above to find what you need. Questions? 
     <a href="/contact">Contact the board.</a></p>
</article>
```

---

## Inaugural Announcement (for Launch)

**Date:** April 2026 (use actual launch date)
**Title:** Welcome to the New Goswick Ranch HOA Website
**Body:**

> The Goswick Ranch HOA board has launched this website to provide a central, public resource for our community. You'll find governing documents, the ARC process, emergency preparedness information, and a way to contact the board — all in one place.
>
> Residents: bookmark this page for future announcements including road maintenance schedules, gate notices, and fire restriction updates.
>
> Prospective buyers: see the [For Buyers](/for-buyers) page for community facts and available documents.
>
> Questions or corrections? Use the [contact form](/contact).

---

## Recurring Announcement Types

The board should plan to post updates for:

| Type | Frequency | Example |
|---|---|---|
| Fire restrictions | Seasonally (typically May–October) | "Stage 1 fire restrictions in effect as of [date]" |
| Road conditions | After major weather events | "E Goswick Ranch Rd: surface repairs complete" |
| Gate maintenance | As needed | "Gate keypad maintenance [date] — [alternate access details]" |
| Board meeting reminders | Before each meeting | "[Date]: Board meeting at [location] — all owners welcome" |
| Meeting minutes posted | After each meeting | "Minutes from [date] meeting now available" |
| Annual assessment reminder | Annually | "2026 HOA assessments due [date] — [payment instructions]" |
| Emergency alerts | As needed | "Brady Fire: Goswick Ranch not under evacuation — monitor [link]" |

---

## Content Guidelines

- **Always date entries prominently** — date is the most important field
- **Keep entries short** — 2–4 sentences for routine announcements; longer only for complex situations
- **Link to source material** when relevant (ADOT road conditions, DFFM fire restrictions, USGS gauge)
- **Archive, don't delete** — keep all past announcements on the page; older entries may be collapsed after 1 year
- **No personal information** — do not post individual resident names or contact information in announcements

---

## Design Notes

- The homepage shows the 3 most recent entries; this page shows the full archive
- Consider a "Year" filter or simple navigation by year if the archive grows long
- The site-alert banner for emergencies should be visually distinct from regular content (red or amber background, white text, full-width)
- Use `role="alert"` and `aria-live="assertive"` on emergency banners (WCAG requirement)

---

## Blockers

| Item | Status |
|---|---|
| Board email to receive contact form submissions | Needs board |
| Board's preferred announcement cadence | Discuss with board |

---

## Source Files

- `research/11_hoa_website_design.md` — news/announcements section design, emergency banner HTML
- `research/07_emergency_preparedness.md` — fire restriction stage descriptions, monitoring links
