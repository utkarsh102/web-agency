import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 py-16" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blush to-gold flex items-center justify-center">
                <span className="text-void font-serif font-medium text-sm">A</span>
              </div>
              <span className="font-serif text-xl tracking-widest text-parchment">
                AURA<span className="text-blush">.</span>
              </span>
            </div>
            <p className="text-muted text-sm font-sans leading-relaxed max-w-xs">
              Delhi NCR's premier aesthetic dermatology clinic. Where science meets skin care.
            </p>
            <div className="flex items-center gap-1.5 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-mono text-muted tracking-widest">Clinic Open — Mon to Sat, 10AM–7PM</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-5">Treatments</h4>
            <ul className="space-y-3">
              {['Hydrafacial', 'Botox & Fillers', 'Laser Therapy', 'PRP Treatment', 'Chemical Peels', 'Anti-Ageing'].map(t => (
                <li key={t}>
                  <a href="#" className="text-sm text-muted hover:text-parchment transition-colors font-sans">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-5">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-blush mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted font-sans">B-47, Sector 26, DLF Phase 1, Gurgaon, Haryana 122002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-blush flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted hover:text-parchment font-sans transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-blush flex-shrink-0" />
                <a href="mailto:hello@auraclinic.in" className="text-sm text-muted hover:text-parchment font-sans transition-colors">hello@auraclinic.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={14} className="text-blush flex-shrink-0" />
                <a href="#" className="text-sm text-muted hover:text-parchment font-sans transition-colors">@auraclinic.delhi</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hr-gradient mb-8" />

        {/* Book CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-parchment font-light">
              Ready to begin your skin journey?
            </p>
            <p className="text-muted text-sm font-sans mt-1">Free consultation. No commitment required.</p>
          </div>
          <a href="#" className="btn-primary flex-shrink-0">
            <span>Book Free Consultation</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono tracking-wide">
            © 2025 AURA Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(link => (
              <a key={link} href="#" className="text-xs text-muted hover:text-parchment transition-colors font-mono">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
