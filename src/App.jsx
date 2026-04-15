import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Director from './pages/Director'
import Services from './pages/Services'
import PatientGuidelines from './pages/PatientGuidelines'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/director" element={<Director />} />
          <Route path="/services" element={<Services />} />
          <Route path="/patient-guidelines" element={<PatientGuidelines />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
