---
name: whatsapp-outreach
description: Generate personalized WhatsApp outreach messages for Indian SMB prospects — dental clinics in Month 1, adaptable to salons/coaching later. Use when drafting cold pitches, 48h follow-ups, handling objections (Practo commission, portfolio, pricing, timeline), or post-"yes" handoff messages. Respects founding-price rules, send-window limits, and the stop-rule at 3 confirmed yeses.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# WhatsApp Outreach — Indian SMB Agency

## Goal
Take a lead row (clinic name, doctor, area, website status, Practo presence) and output a WhatsApp-ready message that matches the right template, tier, and pricing phase.

This is a **sales channel**, not an email channel. Rules are different:
- Opening message 100–130 words (proven range from shipped `leads/dental_noida_messages.md`)
- **Demo URLs ARE included in first message** — 2 URLs (aura-clinic + veda-smile) work fine on established WhatsApp numbers; they build credibility, not spam flags. Only remove links if sending from a brand-new number.
- `👋` in greeting line + `✓` checkmarks in feature list are the established voice. Don't strip them.
- Hinglish beats formal English for dental clinics in NCR
- First name only if confirmed; "Doctor" if not
- Close every opener with: `Worth a look?\n— Utkarsh`

---

## Inputs
- **Clinic name** (required)
- **Doctor name** (if known — check lead CSV)
- **Area/city** (required — Ghaziabad, Noida, etc.)
- **Website status** — `none` / `weak` / `decent` (PRIME / SECONDARY / skip)
- **Practo presence** — yes/no
- **Google rating** — if available
- **Message type** — `opener` / `followup` / `objection` / `post-yes`

---

## Canonical Opener Structure (match this exactly)

Shipped in `leads/dental_noida_messages.md` — works. Don't deviate:

```
Hi [Clinic Short Name] 👋

[Hook line: review count + sector + 1 specific observation]. [Pitch-angle sentence from table below — commission cut / Google visibility / high-ticket research].

I built these for NCR clinics — same thing I'd build for you:
→ https://aura-clinic-ten.vercel.app/
→ https://veda-smiles-demo-2zt5.vercel.app/

You get:
✓ 4 pages — Home, About, Services, Contact
✓ "Book on WhatsApp" button (direct to you, zero commission)
✓ Mobile + Google-search ready
✓ Live in 3 days

₹3,999 one-time. Only 3 founding-client slots at this price (regular ₹11,999) — in exchange for a short video testimonial.

Worth a look?
— Utkarsh
```

Vary only:
- Line 1: clinic short name
- Line 3: hook + pitch angle (per table below)
- "You get" line 2: personalize to specialty if relevant ("implants featured", "cosmetic work featured", "credentials prominent")

Everything else stays word-for-word. This is a proven template.

## Templates (source of truth: `docs/whatsapp_pitch_dental.md`)

For 48h follow-up, objection scripts, and post-"yes" handoff, always `Read` the latest templates from `docs/whatsapp_pitch_dental.md`. Do NOT invent new templates — only personalize existing ones.

### Opener variants
- **A (no-website PRIME)**: Leads with "zero Google presence" angle + ₹3,999 founding price + 3-day delivery
- **B (weak-website PRIME)**: "Your site loads slow on mobile / looks 2015" angle — same pricing
- **C (has-website SECONDARY)**: Pitches AI chatbot add-on, defer until PRIME window closes

### Follow-up (48h rule)
One follow-up only. If no reply after that, drop the lead. Don't send a third.

### Objection scripts (see `docs/whatsapp_pitch_dental.md`)
- **"We're on Practo"** — reframe: Practo takes 15-30% commission forever; your site is a one-time cost
- **"Show portfolio"** — send Aura Clinic demo URL + offer 1 tweak preview free
- **"Too expensive"** — explain founding price is first 3 only, price jumps to ₹11,999 after
- **"How long?"** — 3 days after intake + ₹1,999 advance. No earlier start date.
- **"Can we pay after launch?"** — No. 50/50 split is firm. Offer ₹500 discount for full upfront instead.

### Post-"yes" handoff
Send in this order (separate messages, 2-minute gaps):
1. Welcome + thank them
2. UPI ID + request ₹1,999 advance
3. After payment lands: intake form link + "I'll ping you tomorrow if anything missing"

Do NOT mention domain cost (~₹800/yr) until after advance lands. It goes in a separate post-advance message.

---

## Hard Rules

- **15–20 sends/day max** per WhatsApp number. Track count in output so user doesn't exceed.
- **Send windows**: 10 AM–1 PM or 5 PM–8 PM IST. Never outside.
- **No bulk-looking openings**. Every message must have 1 clinic-specific hook in the first 2 lines (review count, specialty, sector, landmark).
- **Established emoji set only**: `👋` in greeting + `✓` in feature bullets. No other emojis (no 🦷🔥💪 — looks like a template blast).
- **No "Hope you're doing well"**. Dead on arrival in Indian WhatsApp sales.
- **Stop-rule**: after 3 confirmed "yes" responses at ₹3,999 **across all cities combined** (Ghaziabad + Noida + Raj Nagar), remaining outreach switches to ₹11,999. Check `CLAUDE.md` current yes-count before generating.
- **Landline detection**: if phone number starts with `0120`, `011`, `022` etc. (landline area codes), flag as "call-only, find mobile first" — do NOT generate a WhatsApp message.
- **One clinic per message**. Never "mass personalize" — each one goes through the hook-pick step.

---

## Pitch-Angle Rules (production logic, from `leads/dental_noida_messages.md`)

Pick the angle by **review count** + **specialty**. Don't mix angles — commit to one per message:

| Signal | Angle | Example opening line |
|---|---|---|
| **100+ reviews** | Commission cut — they're almost certainly on Practo/JustDial | "382+ reviews, 5★ in Sector 71. But every booking through Practo/JustDial pays them a commission that should stay with you." |
| **<100 reviews** | Google visibility — new patients search and find competitors | "68+ reviews, 4.9★ in Sector 119 — solid trust signals. But anyone searching 'dentist Sector 119' on Google is landing on competitors with websites, not on you." |
| **Implant / orthodontics / cosmetic** (any review count) | High-ticket research — patients Google credentials before booking | "104+ reviews, 4.9★ — and implants are high-ticket work. Patients researching implants in Sector 110 Google before they book. Without a website, they see a competitor first." |

**Why these rules**: clinics with 100+ reviews are clearly listed on Practo — calling out commission is concrete and safe. Clinics with <100 reviews may not be on Practo yet — don't assume, use the visibility angle. Specialty clinics (implant/ortho/cosmetic) always have high-ticket research behavior regardless of review count.

If no hook found after 3 min of research, SKIP this lead. Don't send a generic message.

---

## Process

1. **Load context**:
   - Read `CLAUDE.md` → check current phase, yes-count, pricing tier
   - Read `docs/whatsapp_pitch_dental.md` → get latest templates
   - Read `leads/dental_ghaziabad_2026-04-20.csv` (or whatever CSV is active) → find lead row
2. **Research hook** (WebFetch the clinic's Google Maps page or website if URL in CSV)
3. **Pick template** based on inputs (website status + Practo + message type)
4. **Draft** with hook in line 1–2, template body, clear CTA
5. **Check** against Hard Rules above (length, emoji, send window, stop-rule)
6. **Output** in this format:

```
TO: [clinic name] — [phone from CSV]
TIER: PRIME/SECONDARY
PRICE: ₹3,999 founding / ₹11,999 regular
SEND WINDOW: 10 AM–1 PM IST today
MESSAGE:
[ready-to-paste text]

FOLLOW-UP SCHEDULED: [date + 48h]
OBJECTION PREP: [most likely 1-2 objections for this lead]
```

7. **Append** to `leads/<niche>_<city>_messages.md` with timestamp for tracking.

---

## Output Quality Bar

A good WhatsApp pitch for this context:
- First line is specific to THIS clinic (not swappable with another)
- States the offer clearly in 1 sentence
- Names the price (never vague "affordable")
- Has 1 CTA, not 3
- Reads like a human typed it in WhatsApp, not like a marketing email
- Total length 60–110 words

If your draft fails any of these, rewrite. Don't ship average — the whole outreach ROI depends on reply rate.

---

## First-Run Setup

Before first use, confirm these exist:
- `CLAUDE.md` with current phase + yes-count
- `docs/whatsapp_pitch_dental.md` with templates
- `leads/*.csv` with at least name + phone + area

If any missing, tell the user and stop. Don't generate messages from thin air.
