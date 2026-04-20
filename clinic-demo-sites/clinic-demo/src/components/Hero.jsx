import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 })

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(headlineRef.current.querySelectorAll('.word'),
      { opacity: 0, y: 60, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full orb-1 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,165,152,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full orb-2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,149,106,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full orb-3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,165,152,0.08) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-8">
          <div className="pill">
            <Star size={10} fill="currentColor" />
            Delhi NCR's Premier Aesthetic Clinic
          </div>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-parchment leading-[0.9] tracking-tight mb-6"
          style={{ overflow: 'hidden' }}
        >
          {['Skin', 'that', 'speaks'].map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="word inline-block mr-[0.2em]">{word}</span>
            </span>
          ))}
          <br />
          <span className="inline-block overflow-hidden">
            <em className="word inline-block text-gradient font-serif italic">for itself.</em>
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="font-sans text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed mt-6 mb-10"
        >
          Medical-grade aesthetic treatments tailored to your unique skin — delivered by certified dermatologists in Gurgaon & South Delhi.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="btn-primary">
            <span>Book Free Consultation</span>
            <ArrowRight size={16} />
          </a>
          <a href="#treatments" className="btn-ghost">
            Explore Treatments
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="font-serif text-3xl text-parchment font-light">2,400<span className="text-blush">+</span></div>
            <div className="text-xs text-muted font-mono tracking-widest mt-1">Happy Patients</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="font-serif text-3xl text-parchment font-light">98<span className="text-blush">%</span></div>
            <div className="text-xs text-muted font-mono tracking-widest mt-1">Satisfaction Rate</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="font-serif text-3xl text-parchment font-light">8<span className="text-blush">+</span></div>
            <div className="text-xs text-muted font-mono tracking-widest mt-1">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-blush/50 to-transparent" />
      </div>
    </section>
  )
}
