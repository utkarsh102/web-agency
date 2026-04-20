---
name: demo-page-generator
description: Generate a stunning, production-grade single-file demo index.html for any client type (clinic, school, society, restaurant, gym, law firm, salon, NGO, etc.). Outputs godly.website-tier landing pages — never AI-slop. Use when creating demo sites, client mockups, prospect presentations, or sales collateral.
argument-hint: "[client name] [client type] [brief]"
allowed-tools: Read, Write, Bash, Glob
---

# Demo Page Generator

Single-file `index.html` that looks like it came from a $5,000 design agency. Reference quality bar: [godly.website](https://godly.website), Stripe, Linear, Vercel, Framer Sites, awwwards SOTD winners.

This is a **sales tool**. Every page must stop the prospect mid-scroll. Average is failure.

---

## STEP 0 — Aesthetic Direction (do this BEFORE writing any code)

Pick **one** aesthetic tone from this list. Commit fully. Do not blend.

| Tone | Best For |
|---|---|
| **Editorial/Magazine** | Clinics, law firms, schools, premium services |
| **Brutalist/Raw** | Creative agencies, ed-tech, gyms, indie studios |
| **Luxury/Refined** | Salons, spas, fine dining, wellness, jewelry |
| **Retro-futuristic** | Tech, coaching apps, modern startups |
| **Organic/Natural** | Yoga, organic food, NGOs, family services |
| **Maximalist Chaos** | Music studios, art classes, kids' brands |
| **Industrial/Utilitarian** | Auto, construction, logistics, B2B |
| **Soft/Pastel** | Pediatric clinics, preschools, lifestyle |

Then ask yourself: **"What is the ONE thing a visitor will remember?"** Build the page around that answer.

---

## ABSOLUTE BANS (these mark a page as AI-generated slop)

### Banned Fonts — NEVER USE
- ❌ Inter
- ❌ Roboto
- ❌ Arial / Helvetica / system fonts
- ❌ Space Grotesk (overused to death)
- ❌ Poppins
- ❌ Montserrat
- ❌ Open Sans

If you reach for one of these, STOP. Pick from the approved list below.

### Banned Visual Patterns
- ❌ Purple-to-pink gradients on white backgrounds
- ❌ Three identical equal-width feature cards in a row
- ❌ Bootstrap-style cards with generic drop shadows
- ❌ Stock "team smiling at laptop" hero images
- ❌ Carousels (under 1% engagement past slide 1 — render testimonials in a grid)
- ❌ Lorem ipsum or "Your tagline here" placeholders
- ❌ "Lorem ipsum dolor sit amet" — ALL copy must be real and contextual
- ❌ Pure black `#000000` (use `#080808` / `#0A0A0A` — pure black looks flat)
- ❌ Tame, evenly-distributed pastel palettes with no dominant accent

---

## APPROVED Font Pairings (Google Fonts — all free, all distinctive)

Pair **one display** with **one body**. Mix-and-match within rows; never cross to a banned font.

| Display (headlines) | Body (paragraphs / UI) |
|---|---|
| **Fraunces** (variable serif, expressive) | **Geist** (Vercel's modern sans) |
| **Instrument Serif** (editorial, italic gorgeous) | **Bricolage Grotesque** (variable, characterful) |
| **Cormorant Garamond** (luxury serif) | **DM Sans** (clean, neutral) |
| **Newsreader** (warm serif, variable) | **Funnel Display** (geometric, friendly) |
| **Syne** (geometric display, distinctive) | **Outfit** (modern, rounded) |
| **Bricolage Grotesque** (display weight) | **Manrope** (UI-friendly) |
| **Playfair Display** (high-contrast serif) | **Familjen Grotesk** (Swedish-clean) |
| **Tenor Sans** (refined, airy) | **Geist Mono** (mono accents) |

When in doubt: **Fraunces + Geist** is the safest distinctive pair.

---

## Visual Personalities (color + font preset)

Pick one based on tone + client type. All values use CSS variables for easy iteration.

| Personality | bg | surface | accent | text | muted | Font Pair |
|---|---|---|---|---|---|---|
| **Editorial Dark** | `#0A0A0A` | `#141414` | `#D4B86A` (warm gold) | `#F2EFE8` | `#8A8478` | Fraunces + Geist |
| **Editorial Light** | `#F7F4EE` | `#FFFFFF` | `#1C1C1C` (ink black) | `#1C1C1C` | `#6B665D` | Instrument Serif + Bricolage Grotesque |
| **Clinical Sharp** | `#FAFAFA` | `#FFFFFF` | `#1E40AF` (deep blue) | `#0F172A` | `#64748B` | Newsreader + Funnel Display |
| **Brutalist Volt** | `#0F0F0F` | `#1A1A1A` | `#D4FF00` (acid lime) | `#EFEFEF` | `#7A7A7A` | Bricolage Grotesque + Manrope |
| **Warm Sanctuary** | `#F4EFE6` | `#FFFFFF` | `#C2410C` (terracotta) | `#1C1410` | `#6F665B` | Fraunces + Outfit |
| **Sage Wellness** | `#EDE8DD` | `#F7F2E8` | `#3B6B47` (forest) | `#1A1F1B` | `#6B7268` | Cormorant + DM Sans |
| **Neon Studio** | `#050505` | `#101010` | `#7C3AED` (violet) | `#F0F0F0` | `#7A7A7A` | Syne + Geist Mono |
| **Soft Pediatric** | `#FFF7F0` | `#FFFFFF` | `#E26D5C` (peach-coral) | `#2D1F1A` | `#7A6F66` | Playfair Display + Familjen Grotesk |

---

## Tech Stack (single-file, no build)

```html
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis for smooth scroll (optional, premium feel) -->
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>

<!-- Google Fonts variable fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

No React. No Vue. Vanilla HTML + Tailwind utilities + GSAP. One file.

---

## Page Structure — Build ALL these sections

### 1. Navbar (fixed, blurs on scroll)
- Logo (left, in display font), nav links (center/right, body font), CTA pill (right)
- Initially transparent; on `scroll > 40px`: backdrop-blur, hairline bottom border, slight bg tint
- CTA has accent fill + glow on hover

### 2. Hero (min-height: 100vh)
- **Headline**: 5–8 words, split into 2 lines for visual rhythm. Display font, font-size `clamp(3.5rem, 9vw, 7.5rem)`, leading-none.
- **Sub-headline**: One sentence, body font, max-width 36ch
- **Two CTAs**: primary (filled accent) + secondary (ghost with arrow)
- **Floating badge** above headline: pill with pulsing dot ("Trusted by 500+ families in Pune")
- **Decoration**: gradient mesh blob OR a corner SVG OR a stat card floating bottom-right
- **Animation**: GSAP word-by-word stagger reveal on load, sub-headline fade-up, CTAs slide-up

### 3. Marquee Logo Strip (optional but premium)
- Horizontal scrolling row of 6–8 logos (insurance partners / accreditations / school boards / etc.)
- CSS `@keyframes` infinite scroll, 30s duration
- Grayscale by default, color on hover

### 4. Stats Bar
- 4 animated counters separated by thin vertical dividers
- Numbers count up via IntersectionObserver
- Examples: "500+ Patients", "12 Years", "98% Satisfaction", "24/7 Support"

### 5. Bento Services Grid
Follow the bento spec strictly:
- **Desktop**: 3 or 4 column grid, mixed tile sizes (`2x2` hero tile, `2x1` mid tiles, `1x1` small)
- **Tablet**: 2 columns, some tiles stack
- **Mobile**: 1 column, ordered by importance (NOT by desktop position)
- **Gutter**: 16–24px (uniform, no exceptions)
- **Tile internals**: visual 60–70% of card height, headline 20–30%, body text 10–20%
- **Padding**: `1x1` = 20px, `2x1` = 24px, `2x2+` = 32px
- **Hover**: 6px translateY lift + 1.02 scale + shadow grow, 250ms ease
- **One** large tile gets the most visually striking content (the "hero feature")
- Cards have hairline borders (`border-white/10` on dark, `border-black/8` on light)

### 6. Philosophy / Why Us
- Full-bleed background image (Unsplash, blurred or with grain overlay)
- Massive overlaid statement (display font, italic if Fraunces/Instrument Serif)
- One short paragraph below
- GSAP parallax on bg image (`yPercent: 30, scrub: true`)

### 7. Process / How It Works
- 3–4 numbered steps. Numbers are HUGE (display font, 8rem+, accent color, low opacity)
- Alternating left/right layout OR vertical timeline with connecting line
- Each step: number + title + 1-line description
- Steps reveal sequentially on scroll (`stagger: 0.15`)

### 8. Testimonials Grid (NOT a carousel)
- 3 cards in a row (desktop), stacking on mobile
- Each card: 5-star row, quote, avatar circle (initial in accent color), name + context
- Quotes must be **specific** — name a service, mention a result, include a location detail
- Realistic Indian names if India context (Anjali Mehta, Rohan Iyer, Priya Sharma)

### 9. CTA Banner
- Full-width section, accent-colored OR dark-with-grid-pattern background
- One bold statement headline, one supporting line
- Pulse-animated CTA button
- Optional: floating blurred orb decoration

### 10. Footer
- Dark bg regardless of overall palette
- 4 columns: brand+tagline | Services | Contact | Social
- Bottom bar: copyright + tiny credit
- Animated underline on link hover

---

## Required CSS Foundation (paste in `<style>` block)

```css
:root {
  --bg: VAR_BG; --surface: VAR_SURFACE; --accent: VAR_ACCENT;
  --text: VAR_TEXT; --muted: VAR_MUTED;
  --accent-rgb: VAR_ACCENT_RGB;
}
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
body { background: var(--bg); color: var(--text); font-family: 'BodyFont', sans-serif; }
.font-display { font-family: 'DisplayFont', serif; }

/* Noise overlay for premium dark sections */
.noise { position: relative; }
.noise::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  border-radius: inherit; z-index: 1;
}
.noise > * { position: relative; z-index: 2; }

/* Animated link underline */
.link-hover { position: relative; }
.link-hover::after {
  content: ''; position: absolute; left: 0; bottom: -3px; width: 0; height: 1.5px;
  background: currentColor; transition: width 0.3s ease;
}
.link-hover:hover::after { width: 100%; }

/* CTA glow */
.btn-primary {
  background: var(--accent); transition: all 0.3s ease;
}
.btn-primary:hover {
  box-shadow: 0 0 32px rgba(var(--accent-rgb), 0.4);
  transform: translateY(-2px);
}

/* Pulse ring */
@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.4); }
  70% { box-shadow: 0 0 0 18px rgba(var(--accent-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
}
.btn-pulse { animation: pulse-ring 2s infinite; }

/* Marquee */
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-track { display: flex; gap: 4rem; animation: marquee 30s linear infinite; width: fit-content; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Required GSAP Block

```javascript
gsap.registerPlugin(ScrollTrigger);

// 1. Hero word stagger
gsap.from(".hero-word-inner", {
  y: "110%", opacity: 0, duration: 0.9, stagger: 0.08, ease: "power4.out", delay: 0.2
});
gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 0.8, delay: 0.9, ease: "power2.out" });
gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.7, delay: 1.1, stagger: 0.1 });

// 2. Section reveal on scroll
gsap.utils.toArray("[data-reveal]").forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
    y: 50, opacity: 0, duration: 0.75, ease: "power2.out"
  });
});

// 3. Hero parallax
gsap.to(".hero-bg", {
  yPercent: 25, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

// 4. Counter animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    let current = 0; const step = Math.max(1, Math.ceil(target / 60));
    const t = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(t);
    }, 24);
    observer.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll(".counter").forEach(el => observer.observe(el));

// 5. Bento card 3D tilt
document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
    card.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-6px) scale(1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// 6. Navbar scroll blur
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});
```

---

## Tailwind Config Block

Place after Tailwind CDN script:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          bg: 'VAR_BG', surface: 'VAR_SURFACE', accent: 'VAR_ACCENT',
          text: 'VAR_TEXT', muted: 'VAR_MUTED',
        },
        fontFamily: { display: ['DisplayFont', 'serif'], body: ['BodyFont', 'sans-serif'] },
        borderRadius: { '2xl': '1rem', '3xl': '1.5rem' }
      }
    }
  }
</script>
```

---

## Copy Rules (THE CONTENT MAKES THE PAGE, NOT THE GRAPHICS)

- **Headline**: Benefit-forward. "Care that listens." NOT "We provide medical services."
- **Sub-headline**: One sentence — who it's for + what they get + a hint of how
- **Service names**: 2–3 words, evocative. "Whole-Body Diagnostics" beats "Health Check-Up"
- **Stat labels**: Specific. "Patients in care" beats "Happy Customers"
- **Testimonial quotes**: Mention a service, a result, a place. "Dr. Rao caught my pre-diabetes in one visit — saved me years of damage. — Sneha K., Pune"
- **CTA verbs**: Active. "Book Your Consultation" / "Reserve a Tour" / "Start Your Trial" — never "Click Here" or "Submit"
- **Footer tagline**: A short manifesto, not a slogan

---

## Unsplash Images (1600w, q=80)

URL pattern: `https://images.unsplash.com/photo-{ID}?w=1600&q=80&fit=crop`

| Niche | Photo IDs |
|---|---|
| Clinic / Medical | `1576091160399-112ba8d25d1d`, `1559757148-5c350d0d3c56`, `1666214280557-f1b5022eb634` |
| School / Education | `1580582932707-520aed937b7b`, `1427504494785-3a9ca7044f45`, `1503676260728-1c00da094a0b` |
| Coaching / Tutoring | `1503676260728-1c00da094a0b`, `1456513080510-7bf3a84b82f8` |
| Gym / Sports | `1534438327276-14e5300c3a48`, `1517836357463-d25dfeac3438` |
| Yoga / Wellness | `1544367567-0f2fcb009e0b`, `1506126613408-eca07ce68773` |
| Restaurant / Cafe | `1414235077428-338989a2e8c0`, `1504674900247-0877df9cc836` |
| Society / Residential | `1486325212027-8081e485255e`, `1560448204-603b3fc33ddc` |
| Law Firm | `1589829545856-d10d557cf95f`, `1521791136064-7986c2920216` |
| Salon / Beauty | `1560066984-138dadb4c035`, `1522337360788-8b13dee7a37e` |
| NGO / Community | `1488521787991-ed7bbaae773c`, `1469571486292-0ba58a3f068b` |

For hero: prefer landscape, leave room on left or center for text overlay (apply gradient scrim).

---

## Performance & Accessibility (NON-NEGOTIABLE)

- **Page weight target**: under 500KB total (excluding Unsplash images)
- **LCP target**: under 2.5s
- All images have `loading="lazy"` (except hero)
- All `<img>` tags have descriptive `alt` text
- All interactive elements keyboard-accessible (`tab` should work)
- `prefers-reduced-motion` respected (already in CSS block above)
- Color contrast minimum 4.5:1 (verify accent on bg)
- Use semantic HTML: `<nav>`, `<section>`, `<article>`, `<footer>`

---

## Output Process

1. **Confirm inputs** — if any of (client name, type, services, tone) missing, ask in one batch.
2. **Pick aesthetic + personality** — state your choice and one-sentence reason.
3. **Create directory** — default `./[client-slug]/` (e.g., `./sunrise-clinic/`).
4. **Write `index.html`** — single file, complete, all sections, real copy.
5. **Take a screenshot** using Chrome DevTools MCP:
   ```
   a. mcp__chrome-devtools__navigate_page → file:///[absolute-path]/index.html
   b. mcp__chrome-devtools__wait_for      → selector: "footer", timeout: 5000
   c. mcp__chrome-devtools__take_screenshot
   ```
   Show the screenshot inline so the user sees the result without leaving Claude.
6. **Self-critique** — look at the screenshot and call out anything that looks weak (cramped spacing, wrong contrast, weak hero copy).
7. **Ask for feedback** — "Want me to adjust the palette / a section / the copy?"
8. **Iterate** — re-screenshot after each change. Don't claim done until the screenshot looks right.

---

## What "Done" Looks Like

A screenshot where:
- The hero makes you stop and read
- No section looks like Bootstrap
- No font is on the banned list
- The bento grid has clear visual hierarchy (one tile dominates)
- Animations are visible in the screenshot's motion blur (or evident from layered elements)
- A non-designer would call it "expensive"

---

## Detailed Pattern Reference

For deeper code snippets (gradient meshes, kinetic typography, magnetic cursors, scrolltrigger pinning):
→ [design-patterns.md](design-patterns.md)
