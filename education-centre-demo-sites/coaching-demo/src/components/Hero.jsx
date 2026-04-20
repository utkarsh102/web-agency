import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, TrendingUp } from 'lucide-react'

const scrollingResults = [
  'Priya Sharma — IAS 2024, Rank 23',
  'Arjun Mehta — IPS 2024, Rank 87',
  'Neha Gupta — IAS 2023, Rank 12',
  'Rahul Singh — IRS 2024, Rank 45',
  'Ananya Verma — IFS 2024, Rank 31',
]

export default function Hero() {
  const containerRef = useRef(null)
  const taglineRef = useRef(null)
  const h1Ref = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const [currentResult, setCurrentResult] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(taglineRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(h1Ref.current.querySelectorAll('.line'),
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'expo.out' },
      '-=0.2'
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )

    const interval = setInterval(() => {
      setCurrentResult(prev => (prev + 1) % scrollingResults.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/95 to-void/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80" />

      {/* Orange glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Live results badge */}
          <div ref={taglineRef} className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-ember ember-pulse" />
              <span className="text-xs font-mono text-frost/60 tracking-widest">LIVE RESULTS</span>
              <span className="text-xs font-mono text-ember truncate max-w-[200px]">
                {scrollingResults[currentResult]}
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            ref={h1Ref}
            className="font-display font-bold text-5xl md:text-7xl leading-[0.92] tracking-tight text-frost mb-6"
          >
            <div className="line overflow-hidden">
              <span className="block">Crack</span>
            </div>
            <div className="line overflow-hidden">
              <span className="block text-gradient">UPSC.</span>
            </div>
            <div className="line overflow-hidden">
              <span className="block">Own Delhi.</span>
            </div>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="font-sans text-lg text-frost/50 max-w-md leading-relaxed mb-10"
          >
            450+ IAS/IPS/IRS selections in 12 years. Delhi NCR's highest success rate coaching — because average was never the goal.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 items-center">
            <a href="#enroll" className="btn-primary">
              <span>Enroll for 2025 Batch</span>
              <ArrowRight size={16} />
            </a>
            <a href="#results" className="btn-ghost">
              View Selections
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-12 flex gap-8">
            {[
              { value: '450+', label: 'Selections' },
              { value: '35%', label: 'Success Rate' },
              { value: '#1', label: 'Delhi NCR Rank' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-frost">{stat.value}</div>
                <div className="text-xs text-frost/40 font-mono tracking-widest mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Results panel */}
        <div className="hidden md:block">
          <div className="glass rounded-sm p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-ember" />
              <span className="text-xs font-mono text-frost/50 tracking-widest">2024 SELECTIONS DASHBOARD</span>
            </div>
            {[
              { name: 'IAS', count: 47, color: '#FF6B2B' },
              { name: 'IPS', count: 31, color: '#FFD700' },
              { name: 'IFS', count: 18, color: '#4ADE80' },
              { name: 'IRS', count: 29, color: '#60A5FA' },
              { name: 'State PCS', count: 86, color: '#E879F9' },
            ].map((service, i) => (
              <div key={service.name} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mono text-frost/70">{service.name}</span>
                  <span className="text-sm font-display font-bold text-frost">{service.count}</span>
                </div>
                <div className="h-1 bg-dim rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(service.count / 86) * 100}%`,
                      background: service.color,
                      '--target-width': `${(service.count / 86) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-3 border-t border-border flex justify-between items-center">
              <span className="text-xs text-frost/40 font-mono">Total 2024</span>
              <span className="font-display font-bold text-xl text-gradient">211</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-frost/30">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-ember/50 to-transparent" />
      </div>
    </section>
  )
}
