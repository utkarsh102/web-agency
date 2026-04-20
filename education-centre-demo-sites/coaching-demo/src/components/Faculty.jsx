import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, BookOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faculty = [
  {
    name: 'IAS (Retd.) R.K. Verma',
    role: 'Academic Director & GS Faculty',
    experience: '28 years in IAS, Ex-Secretary GoI',
    subjects: ['General Studies', 'Ethics & Integrity', 'Essay'],
    alumni: '47 UPSC toppers personally mentored',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Dr. Meera Joshi',
    role: 'History & Culture Expert',
    experience: 'PhD JNU, 15 years teaching UPSC',
    subjects: ['Ancient India', 'Medieval History', 'Modern History', 'World History'],
    alumni: 'Trained 30+ toppers under rank 100',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b50c?w=400&q=80',
  },
  {
    name: 'Prof. Anand Sharma',
    role: 'Geography & Environment',
    experience: 'M.Sc Geography, Ex-NCERT author',
    subjects: ['Physical Geography', 'Human Geography', 'Environment & Ecology'],
    alumni: 'Known for 100% accurate PYQ analysis',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Kavita Singh IPS (Retd.)',
    role: 'Polity & Governance Faculty',
    experience: 'Ex-IPS, Political Science MA',
    subjects: ['Indian Polity', 'Governance', 'Social Justice', 'International Relations'],
    alumni: 'Authored the bestselling Polity quick-ref',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

export default function Faculty() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.faculty-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="faculty">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="pill mx-auto mb-4">The Team</div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-frost">
            Taught by those<br />
            <span className="text-gradient">who've been there.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {faculty.map((f) => (
            <div
              key={f.name}
              className="faculty-card group rounded-sm overflow-hidden border border-border hover:border-ember/30 transition-all duration-300"
              style={{ background: 'rgba(13,13,20,0.8)' }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-frost text-base">{f.name}</h3>
                <p className="text-xs text-ember font-mono mt-0.5 mb-3">{f.role}</p>
                <p className="text-xs text-frost/40 font-sans mb-4 leading-relaxed">{f.experience}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {f.subjects.slice(0, 2).map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{ background: 'rgba(255,107,43,0.08)', color: 'rgba(255,107,43,0.7)', border: '1px solid rgba(255,107,43,0.15)' }}>
                      {s}
                    </span>
                  ))}
                  {f.subjects.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded font-mono text-frost/30"
                      style={{ background: 'rgba(26,26,37,0.8)' }}>
                      +{f.subjects.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2 pt-3 border-t border-border">
                  <Award size={12} className="text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-frost/40 font-sans leading-relaxed">{f.alumni}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
