import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const before = [
  'One teacher for 200 students',
  'Outdated printed notes',
  'No performance tracking',
  'Rote learning, no analysis',
  'Zero interview preparation',
]

const after = [
  'Max 60 students per batch',
  'Updated weekly study material',
  'Individual performance analytics',
  'Concept-first, critical thinking',
  'Dedicated interview board prep',
]

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1800&q=70)` }}
      />
      <div className="absolute inset-0 bg-void/90" />

      {/* Orange accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: 'linear-gradient(180deg, transparent, #FF6B2B, transparent)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="pill mx-auto mb-5">Why APEX?</div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-frost leading-tight">
            Coaching that treats you<br />
            <span className="text-gradient">like a topper.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="reveal rounded-sm p-7" style={{ background: 'rgba(13,13,20,0.9)', border: '1px solid rgba(26,26,37,0.6)' }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="text-xs font-mono text-frost/30 tracking-widest uppercase">Generic Coaching</span>
            </div>
            <ul className="space-y-4">
              {before.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <X size={16} className="text-red-500/50 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-frost/30 font-sans line-through decoration-red-500/30">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal rounded-sm p-7"
            style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.2)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-ember" />
              <span className="text-xs font-mono text-ember tracking-widest uppercase">APEX Academy</span>
            </div>
            <ul className="space-y-4">
              {after.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-ember mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-frost font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="reveal text-center mt-16 max-w-2xl mx-auto">
          <p className="font-display text-2xl md:text-3xl text-frost/60 font-medium leading-relaxed">
            "We don't teach you to pass an exam. We build the kind of thinker this country needs to govern itself."
          </p>
          <footer className="mt-4 text-xs font-mono text-frost/30 tracking-widest uppercase">
            — IAS (Retd.) R.K. Verma, Academic Director
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
