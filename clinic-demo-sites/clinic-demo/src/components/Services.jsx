import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Zap, Droplets, Sun, Shield, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Droplets,
    name: 'Hydrafacial',
    tagline: 'Deep cleanse, exfoliate & hydrate',
    desc: 'Multi-step treatment using patented Vortex-Fusion technology to cleanse and nourish your skin simultaneously.',
    price: '₹4,999',
    duration: '60 min',
    badge: 'Best Seller',
  },
  {
    icon: Sparkles,
    name: 'Botox & Fillers',
    tagline: 'Smooth lines, restore volume',
    desc: 'FDA-approved neurotoxin treatments administered by certified dermatologists for natural, refreshed results.',
    price: '₹12,000',
    duration: '30 min',
    badge: 'Premium',
  },
  {
    icon: Sun,
    name: 'Laser Treatments',
    tagline: 'Advanced light therapy',
    desc: 'Q-switch & Nd:YAG laser for pigmentation, tan removal, and permanent hair reduction with zero downtime.',
    price: '₹6,500',
    duration: '45 min',
    badge: null,
  },
  {
    icon: Heart,
    name: 'PRP Therapy',
    tagline: 'Your own plasma, amplified',
    desc: 'Platelet-Rich Plasma treatment for hair regrowth, under-eye rejuvenation, and skin texture improvement.',
    price: '₹9,999',
    duration: '75 min',
    badge: 'Trending',
  },
  {
    icon: Shield,
    name: 'Chemical Peels',
    tagline: 'Reveal your glow',
    desc: 'Customised acid peel protocols for acne scars, hyperpigmentation, dullness, and uneven texture.',
    price: '₹3,500',
    duration: '40 min',
    badge: null,
  },
  {
    icon: Zap,
    name: 'Anti-Ageing Program',
    tagline: 'Turn back the clock',
    desc: 'Comprehensive multi-treatment protocol combining RF, ultrasound, and topical therapies for age reversal.',
    price: '₹24,999',
    duration: 'Program',
    badge: 'New',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="treatments">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="pill mb-4">Our Expertise</div>
            <h2 className="font-serif text-5xl md:text-6xl text-parchment font-light leading-tight">
              Treatments<br />
              <em className="text-gradient italic">crafted for you</em>
            </h2>
          </div>
          <p className="text-muted font-sans max-w-xs leading-relaxed text-sm">
            Every treatment is customised to your skin type, concerns, and goals — never one-size-fits-all.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.name}
                className="service-card tilt-card relative rounded-2xl p-6 cursor-pointer group"
                style={{
                  background: activeCard === i
                    ? 'linear-gradient(135deg, rgba(232,165,152,0.1), rgba(196,149,106,0.06))'
                    : 'rgba(17,16,16,0.8)',
                  border: activeCard === i
                    ? '1px solid rgba(232,165,152,0.3)'
                    : '1px solid rgba(42,31,28,0.6)',
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {svc.badge && (
                  <span className="absolute top-4 right-4 text-xs font-mono tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(232,165,152,0.15)', color: '#E8A598', border: '1px solid rgba(232,165,152,0.2)' }}>
                    {svc.badge}
                  </span>
                )}

                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(232,165,152,0.1)' }}>
                  <Icon size={18} className="text-blush" />
                </div>

                <h3 className="font-serif text-2xl text-parchment font-medium mb-1">{svc.name}</h3>
                <p className="text-xs text-muted font-mono tracking-wide mb-3">{svc.tagline}</p>
                <p className="text-sm text-muted/70 font-sans leading-relaxed mb-6">{svc.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-serif text-xl text-parchment font-medium">{svc.price}</div>
                    <div className="text-xs text-muted font-mono">{svc.duration}</div>
                  </div>
                  <button className="text-xs font-sans text-blush hover:text-parchment transition-colors flex items-center gap-1">
                    Book Now →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
