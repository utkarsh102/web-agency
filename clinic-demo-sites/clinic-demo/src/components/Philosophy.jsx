import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const before = [
  'Generic treatment protocols',
  'Untrained beauticians',
  'Off-the-shelf skincare',
  'No follow-up care',
  'Hidden costs, extra charges',
]

const after = [
  'Personalised skin analysis first',
  'Certified dermatologists only',
  'Medical-grade formulations',
  'Dedicated aftercare program',
  'Transparent pricing, always',
]

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(232,165,152,0.03) 50%, transparent)',
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=70)` }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="pill mx-auto mb-5">Our Philosophy</div>
          <h2 className="font-serif text-5xl md:text-6xl text-parchment font-light leading-tight">
            Not just a clinic.<br />
            <em className="text-gradient italic">A commitment.</em>
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Before */}
          <div className="reveal rounded-2xl p-7" style={{ background: 'rgba(17,16,16,0.9)', border: '1px solid rgba(42,31,28,0.4)' }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="text-xs font-mono text-muted tracking-widest uppercase">Other Clinics</span>
            </div>
            <ul className="space-y-4">
              {before.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <X size={16} className="text-red-500/50 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted font-sans line-through decoration-red-500/30">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="reveal rounded-2xl p-7"
            style={{
              background: 'linear-gradient(135deg, rgba(232,165,152,0.08), rgba(196,149,106,0.04))',
              border: '1px solid rgba(232,165,152,0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blush" />
              <span className="text-xs font-mono text-blush tracking-widest uppercase">AURA Clinic</span>
            </div>
            <ul className="space-y-4">
              {after.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-blush mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-parchment font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="reveal text-center mt-16 max-w-2xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl text-parchment/70 italic font-light leading-relaxed">
            "Beautiful skin is not a luxury. It's the result of the right care, administered by the right hands."
          </p>
          <footer className="mt-4 text-xs font-mono text-muted tracking-widest">
            — DR. PRIYA SHARMA, FOUNDER & CHIEF DERMATOLOGIST
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
