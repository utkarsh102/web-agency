import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Skin Analysis',
    subtitle: 'The foundation of everything',
    desc: 'We start with a comprehensive VISIA skin analysis — a clinical imaging system that reveals what the naked eye misses. Your doctor maps pigmentation, hydration, pores, and texture before recommending anything.',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
  },
  {
    number: '02',
    title: 'Custom Protocol',
    subtitle: 'Designed around your biology',
    desc: "No two skins are alike. Your treatment plan is assembled from our full menu of 18+ procedures, selecting only what you need — not what's most profitable for us.",
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    number: '03',
    title: 'Medical-Grade Treatment',
    subtitle: 'In the hands of a certified doctor',
    desc: 'Every treatment at AURA is performed or directly supervised by a registered dermatologist. We use only FDA-approved devices and formulations — nothing diluted, nothing compromised.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    number: '04',
    title: 'Aftercare & Follow-up',
    subtitle: "The treatment doesn't end at the door",
    desc: "You receive a written aftercare guide, prescription-grade home-care products, and a scheduled follow-up call at 7 and 30 days. Your results are tracked, not assumed.",
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
  },
]

export default function Treatments() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 80%' }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="pill mx-auto mb-5">Our Process</div>
          <h2 className="font-serif text-5xl md:text-6xl text-parchment font-light">
            How AURA works<span className="text-blush">.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={el => cardsRef.current[i] = el}
              className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center rounded-3xl p-8 group`}
              style={{ background: 'rgba(17,16,16,0.7)', border: '1px solid rgba(42,31,28,0.5)' }}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 rounded-2xl overflow-hidden aspect-video md:aspect-square flex-shrink-0">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="flex-1 py-4">
                <div className="font-mono text-6xl font-light text-blush/20 mb-3">{step.number}</div>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-2">{step.subtitle}</p>
                <h3 className="font-serif text-3xl md:text-4xl text-parchment font-light mb-4">{step.title}</h3>
                <p className="text-muted font-sans leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
