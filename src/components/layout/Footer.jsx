import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Director', to: '/director' },
  { label: 'Services', to: '/services' },
  { label: 'Patient Guidelines', to: '/patient-guidelines' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 flex items-center justify-center">
                <span className="text-cream font-display font-bold text-lg">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">NeuroVita</div>
                <div className="font-mono text-[10px] text-primary-300 tracking-widest uppercase">Rehabilitation</div>
              </div>
            </Link>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              Transforming lives through evidence-based, compassionate rehabilitation medicine. Our expert team is dedicated to your complete recovery.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-primary-600 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-300 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-300">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>12 Healing Path, Sector 44<br />New Delhi – 110044, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:care@neurovita.in" className="hover:text-white transition-colors">care@neurovita.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM<br />Sunday: 9:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-white text-lg mb-6">Health Newsletter</h3>
            <p className="text-primary-300 text-sm mb-4">
              Get rehabilitation tips, patient success stories, and health insights delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-primary-800 border border-primary-600 text-white placeholder-primary-400 px-4 py-3 text-sm focus:outline-none focus:border-primary-400"
              />
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-400 text-white py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-400">
          <span>© {new Date().getFullYear()} NeuroVita Rehabilitation Center. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-200 transition-colors">NABH Accredited</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
