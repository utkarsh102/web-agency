import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'Starter',
    price: '₹4,999',
    desc: 'For first-time patients exploring skin care',
    features: [
      'Comprehensive skin analysis',
      '1 treatment session (choice of 3)',
      'Personalised home-care routine',
      '7-day follow-up call',
      'Digital skin report',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Signature',
    price: '₹18,999',
    period: 'per month',
    desc: 'The complete skin transformation programme',
    features: [
      'Everything in Starter',
      '3 premium treatments/month',
      'Monthly VISIA skin analysis',
      'Prescription-grade home kit',
      'Priority booking',
      'WhatsApp doctor access',
      '30-day follow-up',
    ],
    cta: 'Book Signature',
    popular: true,
  },
  {
    name: 'Elite',
    price: 'Custom',
    desc: 'For long-term skin health & advanced aesthetic goals',
    features: [
      'Everything in Signature',
      'Unlimited sessions/month',
      'Dedicated case manager',
      'Annual skin roadmap',
      'Concierge home visits',
      'Priority emergency slots',
    ],
    cta: 'Consult Us',
    popular: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.tier-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="faq">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="pill mx-auto mb-5">Investment in Your Skin</div>
          <h2 className="font-serif text-5xl md:text-6xl text-parchment font-light">
            Transparent pricing<span className="text-blush">.</span><br />
            <em className="italic text-gradient">No surprises.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`tier-card relative rounded-3xl p-8 flex flex-col transition-all duration-300 group hover:-translate-y-1 ${
                tier.popular
                  ? 'border border-blush/40'
                  : 'border border-border'
              }`}
              style={{
                background: tier.popular
                  ? 'linear-gradient(135deg, rgba(232,165,152,0.08), rgba(196,149,106,0.04))'
                  : 'rgba(17,16,16,0.8)',
              }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono tracking-widest"
                  style={{ background: 'linear-gradient(135deg, #E8A598, #C4956A)', color: '#080808' }}>
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-parchment font-medium">{tier.name}</h3>
                <p className="text-xs text-muted font-sans mt-1">{tier.desc}</p>
              </div>

              <div className="mb-8">
                <div className="font-serif text-4xl text-parchment font-light">{tier.price}</div>
                {tier.period && <div className="text-xs text-muted font-mono mt-1">{tier.period}</div>}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="text-blush mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted font-sans">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={tier.popular ? 'btn-primary text-center justify-center' : 'btn-ghost text-center justify-center'}
              >
                <span>{tier.cta}</span>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted font-mono mt-8 tracking-wide">
          All prices are inclusive of consultation. No hidden charges. GST as applicable.
        </p>
      </div>
    </section>
  )
}
