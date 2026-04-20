import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Phone, ChevronDown } from 'lucide-react'

const links = ['Treatments', 'About', 'Results', 'FAQ']

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    )

    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blush to-gold flex items-center justify-center">
            <span className="text-void font-serif font-medium text-sm">A</span>
          </div>
          <span className="font-serif text-xl tracking-widest text-parchment">
            AURA<span className="text-blush">.</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-sans text-muted hover:text-parchment transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 text-xs text-muted hover:text-blush transition-colors font-mono tracking-wide">
            <Phone size={12} />
            +91 98765 43210
          </a>
          <a href="#contact" className="btn-primary">
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-parchment"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 bg-parchment transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-parchment transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-parchment transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 glass rounded-2xl p-6 space-y-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-parchment font-sans py-2 border-b border-border"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-primary block text-center mt-4">
            <span>Book Consultation</span>
          </a>
        </div>
      )}
    </nav>
  )
}
