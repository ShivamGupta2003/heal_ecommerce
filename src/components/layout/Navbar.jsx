import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Director', to: '/director' },
  { label: 'Services', to: '/services' },
  { label: 'Patient Guidelines', to: '/patient-guidelines' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-800 text-primary-100 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-mono text-xs tracking-wider">Transforming Lives Through Expert Rehabilitation</span>
          <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={13} />
            <span>+91 12345 67890</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-cream border-b border-primary-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary-600 flex items-center justify-center">
                <span className="text-cream font-display font-bold text-lg">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-primary-800 text-lg leading-none">NeuroVita</div>
                <div className="font-mono text-[10px] text-primary-500 tracking-widest uppercase">Rehabilitation</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-body font-medium transition-all duration-200 relative group ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-primary-700 hover:text-primary-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 transition-transform duration-200 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-600 text-cream px-5 py-2.5 text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-primary-700 hover:text-primary-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[104px] left-0 right-0 z-40 bg-white shadow-xl border-t border-primary-100 overflow-hidden"
          >
            <nav className="py-4 px-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-3 px-4 text-base font-medium border-l-2 transition-all ${
                        isActive
                          ? 'border-primary-500 text-primary-600 bg-primary-50'
                          : 'border-transparent text-primary-700 hover:border-primary-300 hover:bg-primary-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 pt-4 border-t border-primary-100"
              >
                <Link
                  to="/contact"
                  className="block text-center bg-primary-600 text-cream py-3 font-medium hover:bg-primary-700 transition-colors"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
