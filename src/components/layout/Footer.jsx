import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },

  { label: 'Services', to: '/services' },
  { label: 'Patient Guidelines', to: '/patient-guidelines' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(160deg, #0f172a 0%, #1e293b 100%)",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96"
        style={{ background: "radial-gradient(circle, rgba(232,114,28,0.10) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80"
        style={{ background: "radial-gradient(circle, rgba(61,184,200,0.07) 0%, transparent 70%)" }} />

      {/* Top Line */}
      <div style={{
        height: "3px",
        background: "linear-gradient(90deg, transparent, #e8721c 30%, #3db8c8 70%, transparent)",
      }} />

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">

              <img
                src="/logo.png"
                alt="Patatram Logo"
                style={{
                  width: 44,
                  height: 44,
                  objectFit: "contain",
                  borderRadius: "8px"
                }}
              />

              <div>
                <div className="text-white font-bold text-lg">Patatram</div>
                <div className="text-xs text-orange-400 uppercase tracking-widest">
                  Rehabilitation
                </div>
              </div>

            </Link>

            <p className="text-white/60 text-sm leading-relaxed">
              Transforming lives through compassionate, evidence-based rehabilitation care.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 flex items-center justify-center border border-orange-400/40 rounded-lg text-white/50 hover:text-orange-400 hover:border-orange-400 transition"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-400 text-xs uppercase tracking-widest mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition"
                >
                  <ArrowRight size={12} className="text-orange-400" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cyan-400 text-xs uppercase tracking-widest mb-4">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-white/60 text-sm">

              <div className="flex gap-2">
                <MapPin size={14} className="text-orange-400 mt-1" />
                <span>
                  Near Gwari Railway Crossing,
                  Gomti Nagar Ext Phase-II,
                  Lucknow, UP – 226010
                </span>
              </div>

              <div className="flex gap-2">
                <Phone size={14} className="text-orange-400 mt-1" />
                <span>+91-9889156355</span>
              </div>

              <div className="flex gap-2">
                <Clock size={14} className="text-cyan-400 mt-1" />
                <span>
                  Mon – Sat: 8:00 AM – 7:00 PM <br />
                  Sunday: 9:00 AM – 2:00 PM
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mx-6" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

        <span className="text-xs text-white/40">
          © {new Date().getFullYear()} NeuroVita Rehabilitation Center. All rights reserved.
        </span>

        <div className="flex gap-6 text-xs text-white/40">
          {["Privacy Policy", "Terms of Service", "NABH Accredited"].map((item, i) => (
            <a key={i} href="#" className="hover:text-orange-400 transition">
              {item}
            </a>
          ))}
        </div>

      </div>

    </footer>
  )
}