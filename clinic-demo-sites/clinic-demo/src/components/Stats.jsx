import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 2400, suffix: '+', label: 'Patients Treated', desc: 'Across all skin types and concerns' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', desc: 'Measured through post-treatment surveys' },
  { value: 8, suffix: '+', label: 'Years of Excellence', desc: 'Serving Delhi NCR since 2016' },
  { value: 18, suffix: '+', label: 'Treatments Offered', desc: 'Covering every skin and aesthetic need' },
]

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(value / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 25)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-parchment font-light">
      {count}<span className="text-blush">{suffix}</span>
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

    gsap.fromTo(sectionRef.current.querySelectorAll('.stat-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item text-center md:text-left group">
              <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              <div className="font-sans font-medium text-parchment mt-2 text-sm tracking-wide">{stat.label}</div>
              <div className="font-sans text-muted text-xs mt-1 leading-relaxed hidden md:block">{stat.desc}</div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
