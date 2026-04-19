

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'

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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: {
            background: 'transparent',
            borderBottomColor: 'transparent',
            backdropFilter: 'blur(0px)',
          },
          scrolled: {
            background: 'rgba(255,253,249,0.97)',
            borderBottomColor: 'rgba(11,61,46,0.10)',
            backdropFilter: 'blur(20px)',
          },
        }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 w-full z-50 border-b"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[80px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="max-h-[60px] w-auto object-contain"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className={`text-sm font-medium ${scrolled ? 'text-green-900' : 'text-white'}`}>
                  HealthCare
                </span>
                <span className={`text-[10px] ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                  Excellence in care
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-[13px] px-3 py-1.5 rounded-md ${isActive
                      ? scrolled
                        ? 'text-green-900 bg-green-900/10'
                        : 'text-white bg-white/20'
                      : scrolled
                        ? 'text-gray-500 hover:text-green-900'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">

              {/* ✅ FIXED PHONE */}
              <a
                href="tel:+911234567890"
                className={`flex items-center gap-2 text-sm ${scrolled ? 'text-gray-600' : 'text-white'
                  }`}
              >
                <Phone size={14} />
                +91 12345 67890
              </a>

              <Link
                to="/contact"
                className="bg-green-900 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1"
              >
                Book Assessment <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              ☰
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg p-5 z-50"
          >
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className="block py-2">
                {link.label}
              </NavLink>
            ))}

            {/* ✅ FIXED PHONE */}
            <a
              href="tel:+911234567890"
              className="block mt-4 text-green-900"
            >
              <Phone size={14} /> +91 12345 67890
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}