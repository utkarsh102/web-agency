import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const batches = [
  {
    id: 1,
    name: 'UPSC Foundation — July 2025',
    mode: 'Offline + Online',
    location: 'Mukherjee Nagar, Delhi',
    time: 'Mon–Sat, 7:00 AM – 10:00 AM',
    seats: '12 seats left',
    urgent: true,
    start: 'July 1, 2025',
    fee: '₹1,20,000',
  },
  {
    id: 2,
    name: 'UPSC Mains Intensive — Aug 2025',
    mode: 'Offline',
    location: 'Karol Bagh, Delhi',
    time: 'Mon–Sat, 2:00 PM – 5:00 PM',
    seats: '22 seats left',
    urgent: false,
    start: 'August 5, 2025',
    fee: '₹75,000',
  },
  {
    id: 3,
    name: 'UP PCS Complete — June 2025',
    mode: 'Online + Weekend Offline',
    location: 'Noida Sector 62 / Online',
    time: 'Daily, 6:00 PM – 9:00 PM',
    seats: '35 seats left',
    urgent: false,
    start: 'June 15, 2025',
    fee: '₹65,000',
  },
  {
    id: 4,
    name: 'UPSC Weekend Batch — June 2025',
    mode: 'Offline',
    location: 'Rajinder Nagar, Delhi',
    time: 'Sat–Sun, 8:00 AM – 4:00 PM',
    seats: '18 seats left',
    urgent: true,
    start: 'June 22, 2025',
    fee: '₹90,000',
  },
]

export default function BatchSchedule() {
  const sectionRef = useRef(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.batch-row'),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" id="batches">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="pill mb-4">Upcoming Batches</div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-frost leading-tight">
              Find your<br />
              <span className="text-gradient">batch.</span>
            </h2>
          </div>
          <p className="text-frost/40 text-sm font-mono max-w-xs">
            Seats are limited. Each batch is capped for quality of instruction.
          </p>
        </div>

        <div className="space-y-3">
          {batches.map((batch, i) => (
            <div
              key={batch.id}
              className="batch-row rounded-sm border transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                border: selected === batch.id
                  ? '1px solid rgba(255,107,43,0.4)'
                  : '1px solid rgba(26,26,37,0.8)',
                background: selected === batch.id ? 'rgba(255,107,43,0.04)' : 'rgba(13,13,20,0.7)',
              }}
              onClick={() => setSelected(selected === batch.id ? null : batch.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: batch.urgent ? 'rgba(255,107,43,0.15)' : 'rgba(26,26,37,0.8)' }}>
                    <Calendar size={16} className={batch.urgent ? 'text-ember' : 'text-frost/30'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-display font-semibold text-frost">{batch.name}</span>
                      {batch.urgent && (
                        <span className="text-xs px-2 py-0.5 rounded font-mono"
                          style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B' }}>
                          Filling Fast
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono text-frost/30">{batch.mode}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  <div className="flex items-center gap-1.5">
                    <Users size={13} className="text-frost/30" />
                    <span className={`text-xs font-mono ${batch.urgent ? 'text-ember' : 'text-frost/40'}`}>
                      {batch.seats}
                    </span>
                  </div>
                  <span className="font-display font-bold text-frost">{batch.fee}</span>
                  <a
                    href="#enroll"
                    className="btn-primary text-xs py-2 px-5"
                    onClick={e => e.stopPropagation()}
                  >
                    <span>Book Seat</span>
                  </a>
                </div>
              </div>

              {selected === batch.id && (
                <div className="border-t border-border px-5 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: MapPin, label: 'Location', value: batch.location },
                    { icon: Clock, label: 'Timings', value: batch.time },
                    { icon: Calendar, label: 'Start Date', value: batch.start },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon size={14} className="text-ember mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-mono text-frost/30 mb-0.5">{label}</div>
                        <div className="text-sm font-sans text-frost/70">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
