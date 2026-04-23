---
name: lead-research
description: Research local businesses (dental clinics, salons, coaching centers) via Google Maps + web lookups to build a tiered leads CSV. Extracts name, phone, area, Google rating, website status, Practo presence — then classifies as PRIME (no website / weak site) / SECONDARY (decent site, AI upsell target) / NEEDS_LOOKUP (missing data). Use when expanding to a new city or enriching unclassified leads.
allowed-tools: WebFetch, WebSearch, Read, Write, Edit
---

# Lead Research — Local Business Scraper (via WebFetch)

## Goal
Given `<niche>` + `<city/area>`, produce a CSV of 40-80 tiered leads with enough data to feed the `whatsapp-outreach` skill.

No Go binary, no Apify, no paid API. Uses WebFetch + WebSearch. Slower than a CLI scraper but free and good enough for 15-20/day send rate.

---

## Inputs
- **Niche** — `dental`, `salon`, `coaching`, `gym`, etc. (Month 1: dental only)
- **City** — `Ghaziabad`, `Noida`, `Gurugram`
- **Areas** (optional) — specific localities (`Indirapuram`, `Raj Nagar`, `Kaushambi`). If omitted, picks top 5 by population/density.
- **Target count** — default 60 leads

---

## Process

### Step 1: Seed Search (WebSearch)
For each area, run: `<niche> clinic <area> <city> site:google.com/maps`
Also try: `best <niche> <area>` and `<niche> near <landmark>`

Collect 15-25 candidate clinics per area. Dedupe by name.

### Step 2: Google Maps Enrichment (WebFetch, one per clinic)
For each candidate, WebFetch:
`https://www.google.com/maps/search/<clinic-name>+<area>+<city>`

Extract:
- **Exact name** (sometimes differs from search result)
- **Phone number** (critical — skip lead if missing)
- **Address** (pull `<area>` landmark)
- **Google rating** (e.g., 4.3)
- **Review count** (e.g., 120)
- **Website URL** (if listed in GBP — this decides PRIME vs SECONDARY)
- **Hours** (optional)

### Step 3: Website Check (WebFetch, only if website URL found)
WebFetch the clinic's website. Classify:
- **None** — no website in GBP → PRIME tier
- **Weak** — site exists but: http only, no mobile viewport, last-updated > 2 years, no WhatsApp CTA, stock photos only → PRIME tier (still pitchable for rebuild)
- **Decent** — site is reasonable quality but no AI / no chatbot / no online booking → SECONDARY tier (AI upsell target)
- **Strong** — full-featured site, booking, AI-ish features → SKIP

### Step 4: Practo Check (optional, batched)
WebSearch: `<clinic-name> site:practo.com`
- If Practo URL found: note it. Used later in WhatsApp pitch ("you're leaking 15-30% to Practo forever").

### Step 5: Classify + Write CSV

Tier logic:
| Condition | Tier |
|---|---|
| No website + phone found + rating ≥ 3.5 | PRIME |
| Weak website + phone found | PRIME |
| Decent website + phone found | SECONDARY |
| Missing phone OR name unclear | NEEDS_LOOKUP |
| Strong website + AI already | SKIP (don't add to CSV) |

### Step 6: Output CSV

Write `leads/<niche>_<city>_<YYYY-MM-DD>.csv` with columns:

```csv
clinic_name,doctor_name,phone,area,city,google_rating,review_count,website_url,website_status,practo_url,tier,hook_candidate,notes
```

`hook_candidate` column: one phrase for the WhatsApp opener (e.g., "50+ 5-star reviews, no Google presence" or "Invisalign specialist, Practo only"). Filled from what stood out during research. This saves 2-3 min per lead later.

Also write a short summary file `leads/<niche>_<city>_<YYYY-MM-DD>_summary.md`:
- Total leads: N
- PRIME: N (X% of total)
- SECONDARY: N
- NEEDS_LOOKUP: N
- Top 5 "easiest wins" (highest rating, most reviews, no website) — these go out first

---

## Hard Rules

- **Phone number is mandatory**. No phone = NEEDS_LOOKUP, never PRIME. Don't waste pitch time.
- **Dedupe aggressively**. Clinics often have 3 GBP listings (old + new name + doctor-personal). Collapse by phone number match.
- **Skip chains**. Clove Dental, Apollo White, etc. — they have corporate marketing teams. Not our customer.
- **Respect WebFetch limits**. ~1 request per 2 seconds. Don't hammer Google. A 60-clinic run should take 20-30 minutes.
- **Don't invent data**. If rating not found, leave blank — don't guess. PRIME tier gate is "phone + name + area", not rating.
- **Absolute dates in filename** — `2026-04-23`, not `today` or `latest`.

---

## Output Quality Bar
- Every PRIME row has: name, doctor (if known), phone, area, rating, review_count, website_status=`none` or `weak`, hook_candidate filled
- NEEDS_LOOKUP rows have a `notes` column explaining what's missing (for later manual pass)
- Summary file flags the 5-10 hottest leads at the top

---

## Extending to Other Niches

Month 2+ niches share 80% of this process. Changes per niche:
- **Salons**: check Instagram instead of Practo. No GBP = bigger red flag (salons live on discovery).
- **Coaching**: check Justdial + local Facebook groups. Website quality matters less — WhatsApp presence matters more.
- **Gyms**: rating floor raises to 4.2 (lots of 3-star gyms — skip them).

Update the tier logic table above when adding a new niche.

---

## First-Run Setup
- If `leads/` folder doesn't exist, create it.
- Check `CLAUDE.md` for current niche + city focus — don't start a run for a niche that's marked "deferred".
