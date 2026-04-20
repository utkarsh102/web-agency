import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 450, suffix: '+', label: 'UPSC Selections', desc: 'IAS, IPS, IFS, IRS, IPoS & more' },
  { value: 35, suffix: '%', label: 'Success Rate', desc: '10x the national average' },
  { value: 12, suffix: '+', label: 'Years of Legacy', desc: 'Established 2012, Delhi NCR' },
  { value: 3000, suffix: '+', label: 'Active Students', desc: 'Across all batches and courses' },
]

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(value / 50)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="font-display font-bold text-5xl md:text-6xl text-frost">
      {count.toLocaleString('en-IN')}<span className="text-ember">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => setInView(true),
    })

    gsap.fromTo(sectionRef.current.querySelectorAll('.stat-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card p-6 rounded-sm border border-border hover:border-ember/30 transition-all duration-300 group"
              style={{ background: 'rgba(13,13,20,0.6)' }}
            >
              <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              <div className="font-display font-semibold text-frost mt-3 text-sm tracking-wide">{stat.label}</div>
              <div className="text-frost/35 text-xs mt-1 font-mono leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
