import { Instagram, MapPin, Phone, Mail, Youtube, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 py-16" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-ember flex items-center justify-center flex-shrink-0"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <Zap size={16} fill="#060608" color="#060608" />
              </div>
              <span className="font-display font-bold text-xl text-frost">
                APEX<span className="text-ember">_</span>ACADEMY
              </span>
            </div>
            <p className="text-frost/40 text-sm font-sans leading-relaxed max-w-sm">
              Delhi NCR's highest success-rate UPSC coaching institute. 450+ IAS/IPS/IFS selections in 12 years.
            </p>
            <div className="flex items-center gap-1.5 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-mono text-frost/30 tracking-widest">Centre Open — Mon to Sat, 6AM–9PM</span>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-mono text-frost/30 tracking-widest uppercase mb-5">Programmes</h4>
            <ul className="space-y-3">
              {['UPSC Foundation', 'Mains Intensive', 'Interview Prep', 'UP PCS Complete', 'CAPF/CDS', 'CUET PG'].map(c => (
                <li key={c}>
                  <a href="#" className="text-sm text-frost/40 hover:text-frost transition-colors font-sans">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-frost/30 tracking-widest uppercase mb-5">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-ember mt-0.5 flex-shrink-0" />
                <span className="text-sm text-frost/40 font-sans">27, Bada Bazar Road, Mukherjee Nagar, Delhi 110009</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-ember flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-frost/40 hover:text-frost font-sans transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-ember flex-shrink-0" />
                <a href="mailto:info@apexacademy.in" className="text-sm text-frost/40 hover:text-frost font-sans transition-colors">info@apexacademy.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Youtube size={14} className="text-ember flex-shrink-0" />
                <a href="#" className="text-sm text-frost/40 hover:text-frost font-sans transition-colors">APEX Academy Official</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hr-gradient mb-8" />

        {/* CTA bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-2xl text-frost">
              Your 2025 attempt starts now.
            </p>
            <p className="text-frost/30 text-sm font-mono mt-1">Limited seats. First-come-first-served.</p>
          </div>
          <a href="#enroll" className="btn-primary flex-shrink-0">
            <span>Reserve Your Seat</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-frost/25 font-mono tracking-wide">
            © 2025 APEX Academy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Refund Policy', 'Terms'].map(link => (
              <a key={link} href="#" className="text-xs text-frost/25 hover:text-frost transition-colors font-mono">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
