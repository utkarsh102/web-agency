# Design Patterns Reference

Supporting reference for `demo-page-generator` skill.

---

## Noise Texture Overlay

Adds a film-grain feel to dark sections — makes cards feel premium, not flat.

```html
<style>
  .noise::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    border-radius: inherit;
    z-index: 1;
  }
  .noise > * { position: relative; z-index: 2; }
</style>
```

---

## Gradient Mesh Background (Hero)

Replaces flat backgrounds with a soft blurred-blob effect.

```html
<style>
  .mesh-bg {
    background-color: #080808;
    background-image:
      radial-gradient(ellipse 60% 50% at 20% 40%, rgba(201,168,76,0.15) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 60%, rgba(201,168,76,0.08) 0%, transparent 70%);
  }
</style>
```

Replace rgba color with the chosen accent at low opacity (0.08–0.20).

---

## Bento Grid Layout

```html
<div class="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">
  <!-- Large feature card: spans 2 cols -->
  <div class="col-span-2 row-span-2 rounded-2xl bg-surface border border-white/10 p-8 noise relative overflow-hidden">
    <!-- Primary service -->
  </div>
  <!-- Small card -->
  <div class="rounded-2xl bg-surface border border-white/10 p-6 noise relative overflow-hidden">
    <!-- Secondary -->
  </div>
  <div class="rounded-2xl bg-accent/10 border border-accent/20 p-6 relative overflow-hidden">
    <!-- Accent card -->
  </div>
</div>
```

For mobile: collapse to `grid-cols-1` via `md:grid-cols-3`.

---

## Animated Underline on Links

```css
.link-hover {
  position: relative;
  text-decoration: none;
}
.link-hover::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 1.5px;
  background: currentColor;
  transition: width 0.3s ease;
}
.link-hover:hover::after { width: 100%; }
```

---

## Button Glow Effect

```css
.btn-primary {
  background: var(--accent);
  box-shadow: 0 0 0 rgba(var(--accent-rgb), 0);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}
.btn-primary:hover {
  box-shadow: 0 0 24px rgba(var(--accent-rgb), 0.45);
  transform: translateY(-2px);
}
.btn-primary:active { transform: translateY(0); }
```

---

## Headline Word-Split for GSAP

Split the headline into individual `<span>` tags so GSAP can stagger them:

```html
<h1 class="hero-headline">
  <span class="hero-word inline-block overflow-hidden">
    <span class="hero-word-inner block">Your</span>
  </span>
  <span class="hero-word inline-block overflow-hidden">
    <span class="hero-word-inner block">Health,</span>
  </span>
  ...
</h1>
```

```javascript
gsap.from(".hero-word-inner", {
  y: "110%", opacity: 0, duration: 0.9,
  stagger: 0.1, ease: "power4.out", delay: 0.2
});
```

---

## Parallax Hero Background

```javascript
gsap.to(".hero-bg", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
```

The `.hero-bg` image should be `scale(1.15)` by default so the parallax has room to move without gaps.

---

## Counter Animation (Vanilla — no GSAP required)

```javascript
function runCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 24);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); observer.unobserve(e.target); } });
}, { threshold: 0.5 });

document.querySelectorAll(".counter").forEach(el => observer.observe(el));
```

Usage: `<span class="counter" data-target="500" data-suffix="+">0+</span>`

---

## Floating Badge (Hero decoration)

A small "pill" that floats near the hero CTA — adds social proof feel.

```html
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent mb-8">
  <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
  Trusted by 500+ families in Mumbai
</div>
```

---

## Card Tilt (3D Hover)

```javascript
document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 16;
    card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
    card.style.transition = "transform 0.05s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.transition = "transform 0.4s ease";
  });
});
```

---

## Navbar Scroll Blur

```javascript
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
```

```css
nav { transition: background 0.3s ease, backdrop-filter 0.3s ease; }
nav.scrolled {
  background: rgba(8, 8, 8, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
```

---

## Section Reveal (ScrollTrigger batch)

```javascript
gsap.utils.toArray("[data-reveal]").forEach(el => {
  const dir = el.dataset.reveal || "up";
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
    y: dir === "up" ? 48 : dir === "down" ? -48 : 0,
    x: dir === "left" ? 48 : dir === "right" ? -48 : 0,
    opacity: 0, duration: 0.75, ease: "power2.out"
  });
});
```

Usage: `<div data-reveal="up">`, `<div data-reveal="left">`

---

## Testimonial Card Structure

```html
<div class="tilt-card rounded-2xl border border-white/10 bg-surface p-7 noise relative overflow-hidden">
  <div class="flex mb-4">
    <!-- Stars -->
    <svg ...>★★★★★</svg>
  </div>
  <p class="text-text/80 text-base leading-relaxed mb-6">"Specific, believable quote here."</p>
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
      A <!-- Initial -->
    </div>
    <div>
      <p class="font-semibold text-text text-sm">Anjali Mehta</p>
      <p class="text-muted text-xs">Mother of two, Andheri West</p>
    </div>
  </div>
</div>
```

---

## CTA Pulse Button

```css
@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.4); }
  70% { box-shadow: 0 0 0 16px rgba(var(--accent-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
}
.btn-pulse { animation: pulse-ring 2s infinite; }
```

---

## Grid Pattern Background

Subtle grid for CTA or footer sections:

```css
.grid-bg {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

## Screenshot After Generation

After writing `index.html`, take a screenshot using the Chrome DevTools MCP tool:

```
1. Open the file in Chrome: navigate_page to file:///[absolute-path]/index.html
2. Wait for full load: wait_for selector "body"
3. Capture: take_screenshot
4. Show screenshot to user
5. Ask: "Does this look good, or should I adjust the color palette / layout / copy?"
```

This creates an instant feedback loop — the user sees the result without leaving Claude.
