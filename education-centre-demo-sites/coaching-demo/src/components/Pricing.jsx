import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'Prelims Booster',
    price: '₹18,000',
    desc: 'Focused 3-month crash programme',
    features: [
      'GS Paper I & II coverage',
      'CSAT technique workshops',
      '2000+ MCQ practice sets',
      'Previous year analysis sessions',
      '2 full-length mock tests',
      'Recorded lectures access',
    ],
    cta: 'Join Batch',
    popular: false,
  },
  {
    name: 'Foundation Complete',
    price: '₹1,20,000',
    desc: 'Full 18-month UPSC preparation',
    features: [
      'All GS papers (I–IV)',
      'Optional subject (2 choices)',
      'Essay & Ethics workshops',
      'Full test series (50+ tests)',
      'Interview preparation',
      '1-on-1 mentorship sessions',
      'Study material (8 books)',
      'Current affairs compilation',
    ],
    cta: 'Enroll Now',
    popular: true,
  },
  {
    name: 'Interview Mastery',
    price: '₹25,000',
    desc: 'For Mains cleared, final hurdle',
    features: [
      '20 mock interview boards',
      'Board expert panel feedback',
      'DAF analysis & strategy',
      'Current affairs deep dives',
      'Personality grooming sessions',
      'Success probability assessment',
    ],
    cta: 'Book Slot',
    popular: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.tier-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="enroll">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="pill mx-auto mb-5">Enrolment</div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-frost leading-tight">
            Invest in your<br />
            <span className="text-gradient">IAS dream.</span>
          </h2>
          <p className="text-frost/40 text-sm font-mono mt-4">EMI available. No-questions refund in first 7 days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`tier-card relative rounded-sm p-8 flex flex-col transition-all duration-300 group hover:-translate-y-1 ${
                tier.popular ? 'diagonal-badge' : ''
              }`}
              style={{
                background: tier.popular ? 'rgba(255,107,43,0.05)' : 'rgba(13,13,20,0.8)',
                border: tier.popular ? '1px solid rgba(255,107,43,0.3)' : '1px solid rgba(26,26,37,0.8)',
              }}
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-frost">{tier.name}</h3>
                <p className="text-xs text-frost/40 font-sans mt-1">{tier.desc}</p>
              </div>

              <div className="mb-8">
                <div className="font-display font-bold text-4xl text-frost">{tier.price}</div>
                <div className="text-xs text-frost/30 font-mono mt-1">All inclusive, no hidden fees</div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="text-ember mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-frost/60 font-sans">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={tier.popular ? 'btn-primary flex items-center justify-center gap-2' : 'btn-ghost flex items-center justify-center gap-2'}
              >
                <span>{tier.cta}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
