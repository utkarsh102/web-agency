# Client Intake Form — Dental Clinic Website

> Build this in Google Forms: [forms.google.com](https://forms.google.com) → Blank form.
> **Before sharing:** Settings → Responses → toggle ON "Collect email addresses" + "File upload" (requires respondent's Google sign-in; required for logo/photos).

---

## Form settings

- **Title:** Clinic Website Intake — WebAI Agency
- **Description:**
  > Thanks for signing up as a founding client 🎉
  > Fill this out and I'll have your website live in 3 days.
  > Takes ~5 minutes. You can save and come back — Google auto-saves.
  >
  > Founding-client price: ₹3,999 one-time. Domain (~₹800/year) I'll buy in your name at cost. 50% (₹1,999) to start, 50% at launch.

- **Theme:** pick any clean color (teal or dental-white vibe)
- **Confirmation message** (Settings → Presentation → Confirmation message):
  > Got it! I'll review and send the first draft within 48 hours. For anything urgent, WhatsApp me directly.

---

## Questions (12 total — keep it this tight, more = abandon risk)

### Section 1 — Clinic basics

**Q1. Clinic name *** (Short answer, required)
Sub-text: *As you want it to appear on the website.*

**Q2. Primary WhatsApp number for bookings *** (Short answer, required)
Sub-text: *This is the number the "Book on WhatsApp" button will open.*
Response validation: Regex `^[0-9+\s-]{10,15}$` → error "Enter a valid phone number"

**Q3. Email *** (Short answer, required, email validation)
Sub-text: *For invoice + logins.*

**Q4. Full clinic address *** (Paragraph, required)
Sub-text: *Street, area, city, pincode. Will appear on Contact page.*

**Q5. Clinic timings *** (Paragraph, required)
Sub-text: *Example: Mon–Sat 10 AM – 8 PM, Sun closed. Or split AM/PM slots if needed.*

---

### Section 2 — What you offer

**Q6. Doctors + qualifications *** (Paragraph, required)
Sub-text: *One per line. Example: Dr. Rahul Rana — BDS, MDS (Prosthodontics), 12 yrs experience. Will appear on About page.*

**Q7. Services you offer *** (Checkboxes + "Other" option, required)
Options (tick all that apply):
- [ ] General check-up & cleaning
- [ ] Root canal treatment (RCT)
- [ ] Dental implants
- [ ] Braces / Aligners (orthodontics)
- [ ] Teeth whitening
- [ ] Crowns & bridges
- [ ] Dentures
- [ ] Pediatric dentistry (kids)
- [ ] Wisdom tooth extraction
- [ ] Cosmetic dentistry / veneers
- [ ] Gum treatment
- [ ] X-ray / diagnostics
- [ ] Other (specify)

**Q8. One-line tagline for the clinic** (Short answer, optional)
Sub-text: *Example: "Painless dentistry in the heart of Vaishali for 15+ years." If skipped, I'll write one.*

---

### Section 3 — Visuals

**Q9. Clinic logo *** (File upload, required)
File types: Image. Max size: 10 MB. Max files: 1.
Sub-text: *Any format — PNG/JPG/even a photo of printed material. I'll clean it up. If you don't have one, skip and I'll design a simple text logo.*
**Make this question NOT required** if skipping-is-allowed — easier: add a final file-upload question "anything else" for edge cases.
*(Recommendation: mark as required but tell them to upload a screenshot of their clinic sign if no digital logo.)*

**Q10. Clinic + team photos *** (File upload, required)
File types: Image. Max size: 10 MB. Max files: **5**.
Sub-text: *3–5 photos: clinic reception, operatory/chair, team photo, doctor headshot, any awards/certificates. Phone photos are fine — bright and clear is all I need.*

**Q11. Preferred domain name** (Short answer, optional)
Sub-text: *Example: yourclinicname.com or drsharmadentist.in. Pick 2 options in case first is taken. If skipped, I'll suggest one.*

---

### Section 4 — Final

**Q12. Testimonial agreement *** (Multiple choice, required)
Question: *Founding-client price (₹3,999) includes a commitment to record a 60-second video testimonial once your site is live and you're happy with it. Do you agree?*
Options:
- ( ) Yes, I agree
- ( ) I'd prefer to skip — happy to pay regular ₹11,999 price instead

*(This last option is your escape valve. If they pick it, they pay ₹11,999 and you still get the client. If they say yes, you get the founding-client deal. Either way you win.)*

---

## Optional: add to the end (not a form field)

**Next step message** (shown on confirmation page — already in settings above):

> Once you submit:
> 1. I'll send a payment link for ₹1,999 (50% advance) on WhatsApp within 1 hour.
> 2. First draft of your site in 48 hours.
> 3. 1 round of revisions → final launch in 3 days.
>
> Questions? WhatsApp me anytime: [your number]

---

## After creating the form

1. **Test it yourself** — submit a fake response to make sure file uploads work.
2. **Grab the short link** — Send → Link icon → Shorten URL → copy.
3. **Save the link in** [`docs/links.md`](links.md) — you'll reuse it every time someone says yes.
4. **Test-send to yourself on WhatsApp** — preview the link rendering. Google Forms links sometimes look spammy; if it does, use [bit.ly](https://bit.ly) with a custom alias like `bit.ly/aura-clinic-intake`.

---

## When to send the form link

- **Only after** they reply "yes" and you've sent the domain + payment terms message (from `docs/whatsapp_pitch_dental.md` — the "After they reply yes" section).
- **Don't** send it in the first message — adds friction, tanks response rate.
- **After payment advance (₹1,999) lands,** not before, for strangers. Optional: send form first for lower-friction feel and chase payment after. Your call.

---

## Red flags in responses (to watch for)

- **No photos uploaded** → clinic is either very small or unprofessional. Ask for them before starting. Do not start design without photos.
- **Vague doctor credentials** → could be unlicensed practice. Politely ask for BDS/MDS registration number before proceeding. Red-flag territory.
- **Asks for too many revisions in advance** ("can I change anything I want unlimited times") → will scope-creep you into hell. Reply: *"1 round of revisions included. Additional changes ₹500 each — but in practice the first draft usually hits the mark."*
- **Wants source code / full ownership transfer** → totally fine, but charge ₹1,000 extra for clean handover. Only matters if they plan to leave later.
