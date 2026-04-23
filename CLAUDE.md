# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project: WebAI Agency (India)

## Rules for Claude (read first, every session)
1. **Do not make any changes until 95% confident.** Ask follow-up questions until you reach that bar. No guessing, no "I'll just try this." Clarify scope, files, copy, pricing, tone — whatever is ambiguous — before editing. (Override: when the user explicitly says "figure it out" / "just do it", execute autonomously.)
2. **Keep this file under 200 lines.** It is the session handoff. If you add a section, trim or compress another. No logs, no chat history — only stable decisions, current state, and pointers to other docs.
3. Indian market context always: pricing in ₹, WhatsApp-first clients, mobile-first sites.
4. Lean over clever: no-code / low-code preferred, free tiers flagged when suggesting tools.
5. When a decision is made (pricing, niche, tool, process), write it here — not in a one-off doc.

---

## What I'm building
A website + AI automation agency for Indian SMBs. Sell cheap, fast, clean websites → land the client → upsell AI automation (chatbots, schedulers) on recurring retainers. Website is the wedge, AI is the moat.

- **Solo founder.** Based in Delhi NCR. Bootstrapped.
- **Competing on:** speed (3–5 day delivery), price (₹3,999–11,999), AI add-on that agencies don't offer.
- **Long-term moat:** recurring AI retainer revenue, not one-off builds.

---

## Current phase: Month 1 — Validate (started 2026-04-20)
Goal: 3 paid clinics + 3 video testimonials so I can raise price to ₹11,999 in Month 2.

**Locked-in niche:** Dental clinics in Delhi NCR — Ghaziabad + Noida + Raj Nagar. Other niches deferred until dental is proven.

**Status as of 2026-04-23:**
- **Ghaziabad**: 61 leads in `leads/dental_ghaziabad_2026-04-20.csv` (20 PRIME / 21 SECONDARY / 20 NEEDS_LOOKUP). 20 PRIME openers sent + 48h follow-ups sent — non-responders now dropped per SOP.
- **Raj Nagar**: leads in `leads/dental_rajnagar_2026-04-20.csv`. PRIME openers sent + 48h follow-ups sent (`leads/dental_rajnagar_messages.md`) — non-responders dropped.
- **Noida**: 25 PRIME leads staged in `leads/dental_noida_messages.md` — **not yet sent**. Ready to go per schedule (Day 1: #1–10, Day 2: #11–25). This is the active outreach batch.
- **Demos live**: https://aura-clinic-ten.vercel.app/ + https://veda-smiles-demo-2zt5.vercel.app/ (clinic) • https://apex-academy-iota.vercel.app/ (education, deferred niche).
- Intake form spec: `docs/client_intake_form.md` — still needs Google Forms build.
- Open item: #6 Noida (S. M. Dental Centre) has landline `0120 413 3922` — find mobile before WhatsApp send.

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
- **Stop rule:** after 3 "yes" responses **across all cities combined** (Ghaziabad + Noida + Raj Nagar), remaining outreach switches to ₹11,999.

**Payment:**
- 50/50 split. ₹1,999 advance, ₹2,000 at launch. UPI fine.
- Domain (~₹800/yr) bought in client's name at cost. **Not disclosed in first message** — revealed post-"yes" in follow-up template.
- Hosting: free (Vercel).

---

## Tech stack (decisions made)
- **Site build:** Vite + React 19 + Tailwind 3.4 + GSAP 3.12. Deployed to Vercel. Both clinic demo templates share this stack.
- **Niche templates:**
  - `clinic-demo-sites/clinic-demo/` — "aura-clinic" (editorial dark, warm gold accent) — primary reskin base.
  - `clinic-demo-sites/veda-smile/` — second clinic template (alternate aesthetic for variety in pitches).
  - `education-centre-demo-sites/coaching-demo/` — "apex-academy" (education niche, deferred).
- **Invoicing / payments:** UPI + manual invoice for Month 1. Zoho Invoice deferred to Month 2.
- **CRM:** plain CSV + spreadsheet for now. No tool until >10 active leads.
- **AI chatbot:** TBD — decide when first SECONDARY client says yes. Shortlist: Voiceflow, Tidio, custom (Claude API + simple widget).
- **Automations:** n8n self-hosted, deferred until there's a workflow worth automating.

---

## Commands (run inside any demo folder)
```bash
cd clinic-demo-sites/clinic-demo     # or veda-smile, or coaching-demo
npm install
npm run dev        # vite dev server (localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve built dist/ locally
```
Deploy: push to Vercel (auto on git push to the branch linked to each project).

---

## Skills (in `skills/` — invoke via `/<skill-name>`)

| Skill | Purpose |
|---|---|
| `demo-page-generator` | Build a single-file landing page for a prospect/client — aesthetic rules, fonts, bento grid, GSAP, Indian context. |
| `whatsapp-outreach` | Generate personalized WhatsApp messages (opener / 48h follow-up / objection / post-yes handoff). Respects send limits + combined stop-rule. |
| `seo-audit` | 1-page "Digital Health Report" for a prospect (sales weapon) or post-launch client site (delivery checklist). |
| `lead-research` | Google Maps lookup via WebFetch → tiered CSV for a new city/niche. No Go binary needed. |
| `schema-markup` | LocalBusiness + Dentist JSON-LD for clinic sites. Day 4 of delivery SOP. |
| `competitor-profiling` | Research 3–5 nearby clinics → pitch-ready lines for high-value PRIME leads. |
| `create-proposal` | PandaDoc proposal generation (needs API key — paused, UPI invoices for now). |
| `cold-email-campaigns` | Instantly-based cold email (NOT active — WhatsApp-first market). |
| `literature-research` | PubMed academic search — orphan from skills-starter pack. Remove when convenient. |

---

## Delivery SOP
1. **Day 0:** client replies "yes" → send "After they reply yes" template (in `docs/whatsapp_pitch_dental.md`) → send intake form link after ₹1,999 advance lands.
2. **Day 1:** intake form submitted → review photos, logo, content. Ping client if anything missing.
3. **Day 2–3:** reskin `clinic-demo` (or `veda-smile`) template with client's content. Deploy to Vercel preview URL.
4. **Day 4:** send preview → 1 round of revisions only. Run `/schema-markup` before launch.
5. **Day 5:** revisions done → ₹2,000 final payment → point custom domain → launch → record testimonial.

**Red flags to refuse/renegotiate** (detail in `docs/client_intake_form.md`):
- No photos → delay until provided.
- Vague doctor credentials → ask for BDS/MDS reg number.
- Asks for unlimited revisions → "1 round included, ₹500 per extra change."
- Wants full source / ownership handover → fine, +₹1,000.

---

## Outreach SOP
- **15–20 WhatsApp sends/day max** per number (anti-spam flagging).
- **Send windows:** 10 AM–1 PM or 5 PM–8 PM IST.
- **Personalize every message** — templates in `docs/whatsapp_pitch_dental.md`, pre-personalized sends in `leads/dental_{ghaziabad,noida,rajnagar}_messages.md`.
- **One follow-up at 48h**, then drop.
- **Objection scripts:** see `docs/whatsapp_pitch_dental.md` (Practo commission, portfolio, pricing, timeline).
- **Scale with skills**: use `/whatsapp-outreach` to draft, `/seo-audit` to enrich follow-ups, `/competitor-profiling` for high-value leads.

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
- `leads/dental_ghaziabad_2026-04-20.csv` + `leads/dental_ghaziabad_messages.md` — Ghaziabad tier (61 leads).
- `leads/dental_noida_messages.md` — Noida tier (25 PRIME, staged).
- `leads/dental_rajnagar_2026-04-20.csv` + `leads/dental_rajnagar_messages.md` — Raj Nagar tier.
- `clinic-demo-sites/clinic-demo/` + `clinic-demo-sites/veda-smile/` — clinic reskin bases.
- `skills/` — Claude Code skills for outreach, audits, site building, delivery (see table above).

---

## Deferred / not started (do not start without my say-so)
- SECONDARY tier (Ghaziabad 21 clinics with existing sites) — AI chatbot pitch. Hold until PRIME window closes.
- NEEDS_LOOKUP tier (Ghaziabad 20 Indirapuram clinics) — need to open gmaps URL, grab phone, classify. Hold.
- Coaching / education niche outreach — demo ready, niche not validated yet.
- Zoho Invoice, n8n workflows, CRM tool — premature.
- Second WhatsApp number (only if primary gets flagged).
- Remove `skills/literature-research/` — orphan from starter pack, not agency-related.
