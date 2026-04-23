---
name: competitor-profiling
description: Research 3-5 dental clinics competing with a prospect in the same area. Maps what competitors are doing online — website, Google rating, Practo, booking flow, AI features, pricing signals — so WhatsApp pitches can cite specific gaps ("Dr X down the road is booking 40 patients/week via their site, you're still phone-only"). Use before sending a pitch to a high-value PRIME lead or during an objection-heavy conversation.
allowed-tools: WebFetch, WebSearch, Read, Write
---

# Competitor Profiling — Local Dental Clinic Intel

## Goal
Turn "you should get a website" into "Dr Sharma Dental 800m from you has a site, 4.8 stars, Invisalign landing page, and ranks #1 for 'dentist Indirapuram'. You don't show up at all."

Specificity closes. Generic pitches die.

---

## Inputs
- **Target clinic name + area** (required — the prospect you're pitching)
- **Radius** — default 2km (use `1km` for dense markets, `3km` for tier-2 cities)
- **Focus angle** (optional) — `seo` / `booking` / `pricing` / `brand` — if user specifies, emphasize that dimension

---

## Process

### Step 1: Find Competitors
WebSearch: `dentist near <area> <city>` and `best dental clinic <area>`
Also: `google.com/maps/search/dentist+<area>+<city>`

Pick 3-5 competitors by:
- Proximity (within radius)
- Google rating ≥ 4.3 (these are the real threats)
- Recency of reviews (active clinics only)

Skip:
- Chains (Clove, Apollo) — different customer
- Clinics with < 20 reviews (not a real competitor yet)

### Step 2: Profile Each Competitor

For each, WebFetch their GBP + site. Gather:

| Dimension | What to capture |
|---|---|
| **Digital Presence** | Own website? Domain age? Mobile-friendly? |
| **Google Rating** | Stars + review count + recent-review cadence |
| **Practo Presence** | Listed? Rank on Practo for area? |
| **Services Edge** | Any premium service they're pushing (Invisalign, implants, cosmetic)? |
| **Booking Flow** | Phone only? WhatsApp? Calendly? In-site form? Practo booking? |
| **Pricing Signals** | Any price list on site? Offers? |
| **Brand Quality** | Site looks professional? Doctor photo? Credentials visible? |
| **AI / Tech** | Chatbot? Online consult? SMS reminders? (rare — flag if present) |

### Step 3: Rank by Threat Level
For each competitor, score 1-5:
- **5 = serious threat**: new site, ranks well, active reviews, WhatsApp CTA, Practo featured
- **3 = moderate**: decent site but missing 1-2 key things
- **1 = not really competing digitally**: same position as the prospect

### Step 4: Extract Pitch Ammo
For each top-3-threat competitor, write 1 pitch line the user can drop in WhatsApp:

Example: *"Dr Arora Dental (800m from you, 4.7★, 200+ reviews) just launched a new site last month with WhatsApp booking. They're booking the patients who search 'dentist Indirapuram' — you're not showing up in that search at all."*

Rules for pitch lines:
- Name the competitor (use Google Business Profile exact name)
- Cite specific numbers (rating, reviews, distance)
- State the gap (what they have, prospect doesn't)
- Imply the cost (patients lost, not a lecture about SEO)

---

## Output Format

Write to `leads/<prospect-slug>_competitors.md`:

```markdown
# Competitor Intel — [Prospect Clinic Name]
*[area], [city] • [date] • [radius] radius*

## Top 3 Threats

### 1. [Competitor Name] — Threat 5/5
- **Distance**: 800m northeast
- **Rating**: 4.7★ (247 reviews, last one 3 days ago)
- **Website**: yes — [url], mobile-friendly, launched ~2024
- **Practo**: yes, featured listing
- **Booking**: WhatsApp CTA + online form
- **Premium push**: Invisalign landing page
- **Gap exploited**: ranks #1 for "dentist [area]" — prospect doesn't rank at all

**Pitch line**: "[ready-to-paste sentence for the WhatsApp message]"

### 2. [Competitor 2] — Threat 4/5
[...]

### 3. [Competitor 3] — Threat 3/5
[...]

## Lower Threats (for context)
- [Competitor 4]: [one line]
- [Competitor 5]: [one line]

## Opportunity Summary
Of the top 3 threats, the prospect can close most of the gap by:
1. [Specific action 1 — e.g., "launch own-domain site with WhatsApp + booking CTA"]
2. [Action 2 — e.g., "add Invisalign landing page"]
3. [Action 3 — e.g., "claim + optimize GBP"]

These 3 actions = exactly what the ₹3,999 founding package delivers. Cite in the WhatsApp pitch.

## Pitch-Ready Lines
Use any ONE of these in a WhatsApp opener or objection response:
- "[line 1]"
- "[line 2]"
- "[line 3]"
```

---

## Hard Rules

- **Cite only what's verifiable**. Every stat needs a source — if you can't see it on their site/GBP, don't claim it.
- **Never shame the prospect**. "You don't rank" is fine. "You're behind the times" is not — kills the sale.
- **Competitor names must be exact**. Don't paraphrase — the prospect will Google-check.
- **Max 1 hour of research**. If you haven't found 3 solid threats in an hour, note that the market is uncompetitive and use a different pitch angle.
- **Don't use this in first message**. Too aggressive. Save for follow-ups or objection handling.

---

## When NOT to Use This Skill
- Prospect is in a rural area with < 5 dental clinics in 5km — no meaningful competition angle
- Prospect's clinic rating is already higher than every competitor in radius — pivot pitch to "protect your lead"
- User is sending mass outreach (15-20/day) — this skill is per-lead intensive, reserve for top PRIME leads only

---

## First-Run Setup
- Check if `leads/<niche>_<city>_*.csv` has a row for the prospect already — pull known data first before WebFetch-ing again.
- If user hasn't specified focus angle, default to `seo` + `booking` (highest-leverage for dental).
