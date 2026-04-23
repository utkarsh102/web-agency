---
name: schema-markup
description: Add LocalBusiness + Dentist JSON-LD schema markup to a clinic website. Enables Google rich results (rating stars, hours, address, phone) and boosts local pack ranking. Use when launching a new client clinic site (Day 4 of delivery SOP) or upgrading an existing site as a retainer task.
allowed-tools: Read, Write, Edit, Glob, WebFetch
---

# Schema Markup — Local Business & Dentist JSON-LD

## Goal
Inject correct, validated JSON-LD schema into the clinic site's `<head>` so Google shows rich results (stars, hours, booking link, phone) in local search.

Why it matters: on mobile, a rich result with 4.6 stars and "Open now" wins over a plain blue link every time. For a 4-page clinic site, this is the single highest-leverage SEO change.

---

## Inputs
- **Clinic name** (legal business name)
- **Doctor name** + credentials (BDS, MDS, etc.)
- **Address** — street, city, state, pincode
- **Phone** — with +91 country code
- **Website URL**
- **Hours** — standard weekly hours (e.g., "Mon-Sat 9:00-20:00, closed Sunday")
- **Services list** — top 5-8 (General Dentistry, Root Canal, Invisalign, etc.)
- **Google rating + review count** (optional but recommended)
- **Geo coordinates** (latitude, longitude — pull from Google Maps URL)

Most of this should come from the intake form (`docs/client_intake_form.md`).

---

## Schema Template (JSON-LD)

Insert this inside `<head>` in `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://CLINIC_DOMAIN/#dentist",
  "name": "CLINIC_NAME",
  "image": "https://CLINIC_DOMAIN/clinic-photo.jpg",
  "logo": "https://CLINIC_DOMAIN/logo.png",
  "url": "https://CLINIC_DOMAIN/",
  "telephone": "+91XXXXXXXXXX",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "STREET, LANDMARK",
    "addressLocality": "AREA",
    "addressRegion": "STATE",
    "postalCode": "PINCODE",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "LAT",
    "longitude": "LNG"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/?q=place_id:GBP_PLACE_ID",
    "https://www.practo.com/...",
    "https://www.instagram.com/..."
  ],
  "medicalSpecialty": "Dentistry",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Root Canal Treatment" },
    { "@type": "MedicalProcedure", "name": "Dental Implants" },
    { "@type": "MedicalProcedure", "name": "Teeth Whitening" },
    { "@type": "MedicalProcedure", "name": "Invisalign / Clear Aligners" },
    { "@type": "MedicalProcedure", "name": "Pediatric Dentistry" }
  ],
  "employee": [
    {
      "@type": "Physician",
      "name": "Dr. DOCTOR_NAME",
      "jobTitle": "Chief Dentist",
      "medicalSpecialty": "Dentistry",
      "hasCredential": "BDS, MDS"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "127"
  }
}
</script>
```

---

## FAQ Schema (add if site has FAQ section)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept insurance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we accept [Star Health, HDFC ERGO, ...]. Call us with your policy number to confirm." }
    }
  ]
}
</script>
```

Only include FAQs that are actually on the page — don't fake them, Google will drop the rich result.

---

## Process

1. **Read intake form response** from client (or `docs/client_intake_form.md` for which fields to expect).
2. **Pull geo coords** from the clinic's Google Maps share URL.
3. **Fill template** — every CAPS placeholder must be replaced.
4. **Insert into `<head>`** of client's `index.html` (or Next.js `app/layout.tsx` via metadata/script tag).
5. **Validate** — have the user paste site URL into https://validator.schema.org or https://search.google.com/test/rich-results. Fix any errors.
6. **Check GBP sameAs link** — clinic's Google Business Profile "Share" → "Embed map" URL gives the place_id.
7. **Commit + deploy** to Vercel.

---

## Hard Rules

- **AggregateRating**: only include if `reviewCount >= 5` AND reviews are on THIS domain (via embedded widget or on-page testimonials with schema Review). Faking this gets the rich result suppressed AND risks a manual penalty. When unsure, omit.
- **Phone**: must be `+91XXXXXXXXXX` format, no spaces or dashes. Indian numbers only.
- **availableService**: pull from the client's actual service menu (intake form Q5). Don't copy-paste a generic list.
- **geo coordinates**: must match the physical clinic address within 50m. Google cross-checks.
- **@id**: use the canonical homepage URL + `#dentist`. Keep consistent across the site.
- **Do NOT add both `LocalBusiness` AND `Dentist`** — `Dentist` already extends `LocalBusiness`. Using both confuses validators.

---

## After Deploy Checklist
- [ ] Schema validates on schema.org/validator
- [ ] Rich Results Test shows "Dentist" eligible
- [ ] GBP and schema address are identical (same punctuation, same order)
- [ ] Phone in schema matches GBP matches Practo matches footer
- [ ] Submit sitemap in Google Search Console
- [ ] Re-verify rich results in 7-14 days

---

## First-Run Setup
- If client hasn't filled the intake form yet, do NOT run this skill. Tell user to get intake first.
- If Google Maps URL not provided, ask for clinic's GBP link specifically (not just address).
