import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const concerns = ['Acne & Breakouts', 'Pigmentation', 'Dull Skin', 'Wrinkles', 'Dark Circles', 'Uneven Texture', 'Hair Loss', 'Sun Damage']

const recommendations = {
  'Acne & Breakouts': {
    treatment: 'Salicylic Acid Peel + LED Therapy',
    duration: '6-session protocol',
    price: '₹18,000',
    note: 'Most effective for grade II–III acne. Combined approach targets both bacteria and inflammation.',
  },
  'Pigmentation': {
    treatment: 'Q-Switch Laser + Vitamin C Infusion',
    duration: '4-session protocol',
    price: '₹22,000',
    note: 'Breaks down melanin deposits while brightening overall complexion. Visible improvement from session 2.',
  },
  'Dull Skin': {
    treatment: 'Hydrafacial MD + Brightening Peel',
    duration: 'Single session + maintenance',
    price: '₹5,999',
    note: 'Instant luminosity. Vortex-Fusion removes dead cells and infuses brightening serums simultaneously.',
  },
  'Wrinkles': {
    treatment: 'Botox + Hyaluronic Acid Fillers',
    duration: 'One-time, lasts 8-12 months',
    price: '₹15,000',
    note: 'FDA-approved formulations. Natural results in 48–72 hours. Administered only by our dermatologists.',
  },
  'Dark Circles': {
    treatment: 'PRP Under-Eye + Tear Trough Filler',
    duration: '2-session protocol',
    price: '₹12,000',
    note: 'Dual approach: PRP for volume loss, filler for hollowing. The most effective combination available.',
  },
  'Uneven Texture': {
    treatment: 'Microneedling RF + Chemical Peel',
    duration: '3-session protocol',
    price: '₹24,000',
    note: 'Stimulates collagen from inside while resurfacing the outer layer. Long-lasting texture improvement.',
  },
  'Hair Loss': {
    treatment: 'PRP Hair Therapy + Mesotherapy',
    duration: '4-session protocol',
    price: '₹20,000',
    note: 'Growth factors from your own blood reactivate dormant follicles. Best for androgenetic alopecia.',
  },
  'Sun Damage': {
    treatment: 'Nd:YAG Laser + Vitamin C IV Drip',
    duration: '3-session protocol',
    price: '₹19,500',
    note: 'Targets tan, freckles, and sun spots. IV drip amplifies results from inside out.',
  },
}

export default function Diagnostic() {
  const sectionRef = useRef(null)
  const [selected, setSelected] = useState(null)
  const [typing, setTyping] = useState('')
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  const handleSelect = (concern) => {
    setSelected(concern)
    setShowResult(false)
    setTyping('')

    const rec = recommendations[concern]
    const fullText = `Analysing ${concern.toLowerCase()}...\n> Matching treatment protocol...\n> Recommendation ready.`
    let i = 0
    const timer = setInterval(() => {
      setTyping(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
        setTimeout(() => setShowResult(true), 300)
      }
    }, 18)
  }

  const rec = selected ? recommendations[selected] : null

  return (
    <section ref={sectionRef} className="py-28 px-6" style={{ background: 'rgba(17,16,16,0.5)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="pill mx-auto mb-5">Skin Concern Tool</div>
          <h2 className="font-serif text-5xl md:text-6xl text-parchment font-light">
            What's your<br />
            <em className="text-gradient italic">skin concern?</em>
          </h2>
          <p className="text-muted text-sm mt-4 font-sans">
            Select your primary concern and we'll recommend the right protocol.
          </p>
        </div>

        {/* Concern selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {concerns.map(concern => (
            <button
              key={concern}
              onClick={() => handleSelect(concern)}
              className={`px-4 py-2.5 rounded-full text-sm font-sans transition-all duration-200 ${
                selected === concern
                  ? 'bg-blush text-void font-medium'
                  : 'border border-border text-muted hover:border-blush/50 hover:text-parchment'
              }`}
            >
              {concern}
            </button>
          ))}
        </div>

        {/* Terminal output */}
        {selected && (
          <div className="rounded-2xl overflow-hidden border border-border">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs font-mono text-muted">aura-skin-diagnostic — v2.1</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 bg-void min-h-32">
              <pre className="text-sm font-mono text-blush/70 whitespace-pre-wrap leading-relaxed">
                {typing}<span className="cursor text-blush">█</span>
              </pre>

              {showResult && rec && (
                <div className="mt-6 pt-6 border-t border-border grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs font-mono text-muted tracking-widest mb-3">RECOMMENDED PROTOCOL</div>
                    <div className="font-serif text-2xl text-parchment font-medium mb-2">{rec.treatment}</div>
                    <div className="text-sm text-muted font-mono mb-3">{rec.duration}</div>
                    <p className="text-sm text-muted/80 font-sans leading-relaxed">{rec.note}</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-muted tracking-widest mb-2">PROTOCOL INVESTMENT</div>
                      <div className="font-serif text-4xl text-gradient font-light">{rec.price}</div>
                    </div>
                    <a href="#contact" className="btn-primary mt-6 self-start">
                      <span>Book This Treatment</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
