# Project: WebAI Agency (India)

## Rules for Claude (read first, every session)
1. **Do not make any changes until 95% confident.** Ask follow-up questions until you reach that bar. No guessing, no "I'll just try this." Clarify scope, files, copy, pricing, tone — whatever is ambiguous — before editing.
2. **Keep this file under 200 lines.** It is the session handoff. If you add a section, trim or compress another. No logs, no chat history — only stable decisions, current state, and pointers to other docs.
3. Indian market context always: pricing in ₹, WhatsApp-first clients, mobile-first sites.
4. Lean over clever: no-code / low-code preferred, free tiers flagged when suggesting tools.
5. When a decision is made (pricing, niche, tool, process), write it here — not in a one-off doc.

---

## What I'm building
A website + AI automation agency for Indian SMBs. Sell cheap, fast, clean websites → land the client → upsell AI automation (chatbots, schedulers) on recurring retainers. Website is the wedge, AI is the moat.

- **Solo founder.** Based in Gurugram. Bootstrapped.
- **Competing on:** speed (3–5 day delivery), price (₹3,999–11,999), AI add-on that agencies don't offer.
- **Long-term moat:** recurring AI retainer revenue, not one-off builds.

---

## Current phase: Month 1 — Validate (started 2026-04-20)
Goal: 3 paid clinics + 3 video testimonials so I can raise price to ₹11,999 in Month 2.

**Locked-in niche:** Dental clinics in Ghaziabad (Delhi NCR). Not salons, not coaching, not real estate — all deferred until dental is proven.

**Status as of 2026-04-20:**
- 61 dental leads scraped → `leads/dental_ghaziabad_2026-04-20.csv` (20 PRIME / 21 SECONDARY / 20 NEEDS_LOOKUP).
- Clinic demo live: https://aura-clinic-ten.vercel.app/
- Education demo live (for later coaching outreach): https://apex-academy-iota.vercel.app/
- 20 personalized WhatsApp messages sent to PRIME tier. Awaiting replies.
- Intake form spec ready at `docs/client_intake_form.md` — needs to be built in Google Forms.

---

## Pricing (locked for Month 1)

| Tier              | What                                                | Price       | Timeline |
|-------------------|-----------------------------------------------------|-------------|----------|
| Founding (1st 3)  | 4-page site + WhatsApp CTA + mobile + basic SEO     | ₹3,999      | 3 days   |
| Regular           | Same as above (after first 3 founding slots filled) | ₹11,999     | 5 days   |
| AI Pack           | Regular + AI chatbot or scheduler                   | ₹18,999     | 7 days   |
| Retainer          | Maintenance + AI monthly                            | ₹3–8k/mo    | Ongoing  |

**Founding price rules:**
- ₹3,999 is the public headline. Only valid for first 3 paying clinics.
- Requires: 60-sec video testimonial + case-study rights + logo-on-my-site permission.
- Escape valve (in intake form Q12): if client refuses testimonial, they pay ₹11,999 regular.
- **Stop rule:** after 3 "yes" responses, remaining unsent outreach switches to ₹11,999.

**Payment:**
- 50/50 split. ₹1,999 advance, ₹2,000 at launch. UPI fine.
- Domain (~₹800/yr) bought in client's name at cost. **Not disclosed in first message** — revealed post-"yes" in follow-up template.
- Hosting: free (Vercel).

---

## Tech stack (decisions made)
- **Site build:** Next.js + Tailwind, deployed on Vercel. Demos already on this stack.
- **Niche template:** `aura-clinic` (the live demo) — reskin per client: logo, colors, services, doctors, photos.
- **Invoicing / payments:** UPI + manual invoice for Month 1. Zoho Invoice deferred to Month 2.
- **CRM:** plain CSV + spreadsheet for now. No tool until >10 active leads.
- **AI chatbot:** TBD — decide when first SECONDARY client says yes. Shortlist: Voiceflow, Tidio, custom (Claude API + simple widget).
- **Automations:** n8n self-hosted, deferred until there's a workflow worth automating.

---

## Delivery SOP
1. **Day 0:** client replies "yes" → send "After they reply yes" template (in `docs/whatsapp_pitch_dental.md`) → send intake form link after ₹1,999 advance lands.
2. **Day 1:** intake form submitted → review photos, logo, content. Ping client if anything missing.
3. **Day 2–3:** reskin `aura-clinic` template with client's content. Deploy to Vercel preview URL.
4. **Day 4:** send preview → 1 round of revisions only.
5. **Day 5:** revisions done → ₹2,000 final payment → point custom domain → launch → record testimonial.

**Red flags to refuse/renegotiate** (detail in `docs/client_intake_form.md`):
- No photos → delay until provided.
- Vague doctor credentials → ask for BDS/MDS reg number.
- Asks for unlimited revisions → "1 round included, ₹500 per extra change."
- Wants full source / ownership handover → fine, +₹1,000.

---

## Outreach SOP
- **15–20 WhatsApp sends/day max** per number (anti-spam flagging).
- **Send windows:** 10 AM–1 PM or 5 PM–8 PM.
- **Personalize every message** — templates in `docs/whatsapp_pitch_dental.md`, pre-personalized sends in `leads/dental_ghaziabad_messages.md`.
- **One follow-up at 48h**, then drop.
- **Objection scripts:** see `docs/whatsapp_pitch_dental.md` (Practo commission, portfolio, pricing, timeline).

---

## Month 1 targets
- 2–3 paid clinics (₹8k–12k revenue at founding price).
- 2–3 video testimonials captured.
- 1 SECONDARY-tier AI chatbot conversation started.

---

## Key files (source of truth for each)
- `CLAUDE.md` — this file. Stable decisions only.
- `docs/whatsapp_pitch_dental.md` — outreach templates A/B/C, objection scripts, pricing rationale.
- `docs/client_intake_form.md` — Google Forms spec (12 questions, settings, red flags).
- `leads/dental_ghaziabad_2026-04-20.csv` — 61 leads, tiered.
- `leads/dental_ghaziabad_messages.md` — 20 personalized PRIME messages + send schedule.
- `clinic-demo-sites/aura-clinic/` — live demo template (reskin base).

---

## Deferred / not started (do not start without my say-so)
- SECONDARY tier (21 clinics with existing sites) — AI chatbot pitch. Hold until PRIME window closes.
- NEEDS_LOOKUP tier (20 Indirapuram clinics) — need to open gmaps URL, grab phone, classify. Hold.
- Coaching / education niche outreach — demo ready, niche not validated yet.
- Zoho Invoice, n8n workflows, CRM tool — premature.
- Second WhatsApp number (only if primary gets flagged).
