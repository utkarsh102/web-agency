import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Target, Clock, Users, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const exams = ['UPSC CSE', 'State PCS', 'CAPF / CDS', 'CUET PG']

const courses = {
  'UPSC CSE': [
    {
      name: 'Foundation Batch',
      subtitle: 'For fresh graduates & beginners',
      duration: '18 Months',
      subjects: 'GS I–IV + Optional + Essay + CSAT',
      seats: '60 seats',
      start: 'July 2025',
      price: '₹1,20,000',
      popular: true,
      features: ['Live + Recorded lectures', 'Full test series included', 'Mentorship sessions', 'Study material (8 books)', 'Interview guidance'],
    },
    {
      name: 'Mains Intensive',
      subtitle: 'For Prelims cleared students',
      duration: '8 Months',
      subjects: 'GS I–IV + Optional + Essay',
      seats: '40 seats',
      start: 'August 2025',
      price: '₹75,000',
      popular: false,
      features: ['Answer writing workshops', '200+ test series questions', '1-on-1 feedback sessions', 'Current affairs compilation', 'Mock interviews'],
    },
  ],
  'State PCS': [
    {
      name: 'UP PCS Complete',
      subtitle: 'Pre + Mains + Interview',
      duration: '12 Months',
      subjects: 'GS + CSAT + Optional',
      seats: '80 seats',
      start: 'June 2025',
      price: '₹65,000',
      popular: true,
      features: ['UP-specific current affairs', 'Previous year analysis', 'State GS specialisation', 'Mock tests', 'Hindi medium support'],
    },
    {
      name: 'Delhi DASS / HCS',
      subtitle: 'Haryana & Delhi services',
      duration: '10 Months',
      subjects: 'GS + Optional',
      seats: '50 seats',
      start: 'July 2025',
      price: '₹55,000',
      popular: false,
      features: ['State-specific syllabus', 'Local current affairs', 'Interview coaching', 'Study material', 'Weekly tests'],
    },
  ],
  'CAPF / CDS': [
    {
      name: 'CAPF AC Programme',
      subtitle: 'Central Armed Police Forces',
      duration: '6 Months',
      subjects: 'GS + Essay + Physical',
      seats: '100 seats',
      start: 'May 2025',
      price: '₹35,000',
      popular: false,
      features: ['Physical fitness guidance', 'Medical board prep', 'GD simulation', 'Essay workshops', 'Mock tests'],
    },
  ],
  'CUET PG': [
    {
      name: 'CUET PG Crash',
      subtitle: 'MA Political Science / History',
      duration: '3 Months',
      subjects: 'Subject-specific syllabus',
      seats: '60 seats',
      start: 'March 2025',
      price: '₹18,000',
      popular: true,
      features: ['JNU / DU / BHU focus', 'Subject expert faculty', 'Full mock series', 'Shortcut techniques', 'Study notes'],
    },
  ],
}

export default function Courses() {
  const sectionRef = useRef(null)
  const [activeExam, setActiveExam] = useState('UPSC CSE')

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="courses">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="pill mb-4">Choose Your Path</div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-frost leading-tight">
              Courses Built to<br />
              <span className="text-gradient">Win.</span>
            </h2>
          </div>
          <p className="text-frost/40 font-sans max-w-xs text-sm leading-relaxed">
            Structured programmes with proven pedagogy, not generic classes. Your success is our metric.
          </p>
        </div>

        {/* Exam tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {exams.map(exam => (
            <button
              key={exam}
              onClick={() => setActiveExam(exam)}
              className={`px-5 py-2.5 text-sm font-display font-semibold tracking-wide transition-all duration-200 ${
                activeExam === exam
                  ? 'bg-ember text-void'
                  : 'border border-border text-frost/50 hover:text-frost hover:border-ember/40'
              }`}
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
            >
              {exam}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {(courses[activeExam] || []).map((course, i) => (
            <div
              key={course.name}
              className={`reveal relative rounded-sm p-7 border transition-all duration-300 hover:border-ember/40 ${
                course.popular ? 'diagonal-badge' : ''
              }`}
              style={{
                background: course.popular ? 'rgba(255,107,43,0.04)' : 'rgba(13,13,20,0.8)',
                border: course.popular ? '1px solid rgba(255,107,43,0.25)' : '1px solid rgba(26,26,37,0.8)',
              }}
            >
              <div className="mb-5">
                <h3 className="font-display font-bold text-2xl text-frost">{course.name}</h3>
                <p className="text-sm text-frost/40 font-mono mt-1">{course.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Clock, label: course.duration },
                  { icon: Users, label: course.seats },
                  { icon: BookOpen, label: course.subjects },
                  { icon: Target, label: `Starts ${course.start}` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={13} className="text-ember flex-shrink-0" />
                    <span className="text-xs font-mono text-frost/50 truncate">{label}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {course.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-frost/60 font-sans">
                    <ChevronRight size={12} className="text-ember flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <div className="font-display font-bold text-2xl text-frost">{course.price}</div>
                  <div className="text-xs text-frost/30 font-mono">All inclusive</div>
                </div>
                <a href="#enroll" className="btn-primary text-sm">
                  <span>Enroll</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
