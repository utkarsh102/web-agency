---
name: seo-audit
description: Generate a 1-page "Digital Health Report" for a prospect clinic (sales weapon) or a post-launch client site (delivery checklist). Scrapes Google Business Profile, the clinic's website (if any), Practo listing, reviews, and local search ranking — then outputs specific gaps costing patients. Use before pitching a PRIME lead to justify price, or right before client handoff to show ROI.
allowed-tools: WebFetch, WebSearch, Read, Write, Bash
---

# SEO Audit — Dental Clinic Digital Health Report

## Goal
A 1-page report that a clinic owner reads in 60 seconds and thinks "oh shit, we're leaking patients." Used in two modes:

- **Pre-pitch (sales)**: attach to WhatsApp follow-up. Turns "want a website?" into "you're losing 40 patients/month — here's the proof."
- **Post-launch (delivery)**: show client what you fixed + what's still TODO in month 2 retainer.

---

## Inputs
- **Clinic name** (required)
- **Location** — city + area (required — "Dr Sharma Dental, Indirapuram, Ghaziabad")
- **Website URL** (optional — if they have one)
- **Mode** — `pre-pitch` or `post-launch`

---

## Audit Checklist (10 checks, scored)

Each check gets a grade: ✅ Pass / ⚠️ Weak / ❌ Fail. Final score out of 10.

### 1. Google Business Profile
WebFetch `https://www.google.com/maps/search/<clinic name>+<area>`
- Has GBP listing? (if no — ❌ critical)
- Photos uploaded? (< 5 = ⚠️)
- Hours set? (if no — ⚠️)
- Posts in last 30 days? (0 = ⚠️)
- Booking link in GBP? (none = ⚠️ — this is money left on table)

### 2. Review Profile
- Rating (< 4.5 = ⚠️, < 4.0 = ❌)
- Review count (< 20 = ⚠️, < 50 for 5+ year clinics = ❌)
- Owner replies to reviews? (no replies = ⚠️)
- Recent reviews (< 30 days old = ✅)

### 3. Website Presence
- Own domain site exists? (no = ❌ — this is THE pitch)
- HTTPS? (http-only = ❌)
- Mobile-friendly? (WebFetch, check viewport meta + responsive design)
- Page load feel (if > 5s load perception = ⚠️)

### 4. Website Content Quality (if site exists)
- Doctor credentials visible? (no BDS/MDS mention = ⚠️)
- Services page with specifics? (vague "dental services" = ⚠️)
- Contact + address prominent? (buried = ⚠️)
- Booking mechanism? (no WhatsApp/phone CTA above fold = ❌)

### 5. Local SEO
- Appears on page 1 for "dentist in <area>"? Use WebSearch to check
- Appears on page 1 for "<specific service> <area>" (e.g., "root canal Indirapuram")?
- Schema markup present? (check HTML for `LocalBusiness` / `Dentist`)
- NAP (Name/Address/Phone) consistent across GBP + site + Practo?

### 6. Practo Presence
WebFetch `https://www.practo.com/<city>/dentist/<clinic-slug>`
- Listed? (no = ⚠️ — cheap distribution they're missing)
- Profile completeness (photos, services, credentials)
- Patient stories count
- Response rate visible

### 7. WhatsApp Integration
- "Click to WhatsApp" button on site? (most clinic sites miss this — huge gap)
- WhatsApp number prominent on GBP?
- Any WhatsApp Business catalog?

### 8. Social Proof on Site
- Testimonials with names + photos? (none = ⚠️)
- Before/after photos? (cosmetic clinics without these = ❌)
- Video testimonials? (rare = ✅ if present)

### 9. Competitor Gap (quick scan)
- Pick the #1 ranking dental clinic in the same area (via `seo-audit` search above)
- What do they have that this clinic doesn't?
- One-line summary: "Top competitor has XYZ, you don't."

### 10. Conversion Basics
- If they have a site: does it have ANY way to book besides a phone number?
- Appointment form, WhatsApp click, Calendly link — any?
- "Call now" mailto/tel link working?

---

## Output Format

Write to `leads/<clinic-slug>_audit.md`:

```markdown
# Digital Health Report — [Clinic Name]
*Generated [date] • [area], [city]*

## The Bottom Line
**Score: X/10** — [one sentence: "You're losing ~N patients/month to clinics with better Google presence"]

## Critical Gaps (fix this month)
- [ ] ❌ [specific issue + estimated patient loss]
- [ ] ❌ [...]

## Important Gaps (fix quarter 2)
- [ ] ⚠️ [...]

## What You're Doing Right
- ✅ [...]

## Competitor Benchmark
**[Top competitor clinic name]** ranks #1 for "dentist in [area]". They have [1-2 specific things].

## Recommended Next Step
[One sentence — for pre-pitch: "A 4-page site + Google booking CTA fixes 6 of the 8 issues above. ₹3,999 founding price, 3-day delivery."]
[For post-launch: "You're now at X/10. Month 2 retainer fixes Y and Z."]

---
*Prepared by Utkarsh, WebAI Agency. Questions? WhatsApp 9xxxxxxxxx.*
```

---

## Hard Rules

- **Every gap must cite evidence**. Don't write "your SEO is bad" — write "you don't appear on page 1 for 'dentist Indirapuram' (verified via Google, [date])". Specifics sell.
- **Patient-loss estimates must be conservative**. If you say "losing 40/month" be ready to justify with GBP views or local search volume.
- **Never badmouth the clinic directly**. Frame gaps as "opportunities" not "failures". The owner's ego matters.
- **Pre-pitch mode**: 1 page max. Post-launch: can be 2 pages.
- **No generic SEO lecture**. Every line must be about THIS clinic, in THIS area.

---

## First-Run Setup
- If mode is `pre-pitch`, check `leads/<niche>_<city>_*.csv` for the clinic row first — pull any known data (rating, reviews, Practo URL) to save API calls.
- If mode is `post-launch`, ask for the live site URL if not provided.
