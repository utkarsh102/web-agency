import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Phone, Zap } from 'lucide-react'

const links = ['Courses', 'Results', 'Faculty', 'Batches']

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    )

    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'glass shadow-xl shadow-black/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 bg-ember flex items-center justify-center"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <Zap size={16} fill="#060608" color="#060608" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-frost">
              APEX<span className="text-ember">_</span>ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-display font-medium text-frost/50 hover:text-frost transition-colors duration-200 tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 text-xs text-frost/40 hover:text-ember transition-colors font-mono">
            <Phone size={12} />
            +91 98765 43210
          </a>
          <a href="#enroll" className="btn-primary">
            <span>Enroll Now</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-frost" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 bg-frost transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-frost transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-frost transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 glass rounded-lg p-6 space-y-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-frost font-display uppercase py-2 border-b border-border"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#enroll" className="btn-primary block text-center mt-4">
            <span>Enroll Now</span>
          </a>
        </div>
      )}
    </nav>
  )
}
