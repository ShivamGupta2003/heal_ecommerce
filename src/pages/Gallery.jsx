// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X, ZoomIn } from 'lucide-react'
// import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
// import { galleryImages } from '../data'

// const categories = ['All', ...Array.from(new Set(galleryImages.map((i) => i.category)))]

// function GalleryCard({ item, onClick }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.3 }}
//       onClick={() => onClick(item)}
//       className={`${item.color} relative cursor-zoom-in group overflow-hidden aspect-square`}
//     >
//       {/* Placeholder visual */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
//         <div className="w-16 h-16 bg-white/30 mb-4 flex items-center justify-center">
//           <span className="font-display text-2xl text-white/60">{item.id}</span>
//         </div>
//         <span className="font-mono text-xs tracking-widest uppercase text-primary-700/60">{item.category}</span>
//       </div>

//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6">
//         <ZoomIn className="text-white" size={28} />
//         <p className="text-white text-sm text-center font-medium leading-snug">{item.caption}</p>
//         <span className="font-mono text-[10px] tracking-widest uppercase text-primary-300">{item.category}</span>
//       </div>
//     </motion.div>
//   )
// }

// function Lightbox({ item, onClose }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-primary-950/95 flex items-center justify-center p-6"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         onClick={(e) => e.stopPropagation()}
//         className="relative max-w-2xl w-full"
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
//         >
//           <X size={28} />
//         </button>
//         <div className={`${item.color} w-full aspect-video flex items-center justify-center`}>
//           <div className="text-center">
//             <div className="w-20 h-20 bg-white/30 mx-auto mb-4 flex items-center justify-center">
//               <span className="font-display text-3xl text-white/60">{item.id}</span>
//             </div>
//             <span className="font-mono text-xs tracking-widest uppercase text-primary-700/60">{item.category}</span>
//           </div>
//         </div>
//         <div className="bg-primary-800 px-6 py-4">
//           <p className="text-white font-display text-lg">{item.caption}</p>
//           <span className="font-mono text-xs text-primary-400 tracking-wider uppercase">{item.category}</span>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [lightbox, setLightbox] = useState(null)

//   const filtered = activeCategory === 'All'
//     ? galleryImages
//     : galleryImages.filter((img) => img.category === activeCategory)

//   return (
//     <PageWrapper>
//       {/* Hero */}
//       <section className="bg-primary-800 py-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5" style={{
//           backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//           backgroundSize: '40px 40px',
//         }} />
//         <Container className="relative z-10">
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="font-mono text-xs tracking-[0.2em] uppercase text-primary-300 border border-primary-600 px-3 py-1.5 inline-block mb-6"
//           >
//             Gallery
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
//           >
//             A Glimpse Into <em className="text-primary-300">Our World</em>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-primary-200 text-lg max-w-xl"
//           >
//             Tour our facility, meet our team, and see the technology and spaces where healing happens every day.
//           </motion.p>
//         </Container>
//       </section>

//       {/* Gallery */}
//       <Section bg="cream" className="py-20 md:py-28">
//         <Container>
//           {/* Filter tabs */}
//           <div className="flex flex-wrap gap-2 justify-center mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-5 py-2 text-sm font-medium transition-all border ${activeCategory === cat
//                     ? 'bg-primary-600 text-white border-primary-600'
//                     : 'bg-white text-primary-600 border-primary-200 hover:border-primary-400 hover:bg-primary-50'
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             <AnimatePresence>
//               {filtered.map((item) => (
//                 <GalleryCard key={item.id} item={item} onClick={setLightbox} />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {filtered.length === 0 && (
//             <p className="text-center text-primary-400 py-20">No images in this category.</p>
//           )}
//         </Container>
//       </Section>

//       {/* Virtual Tour CTA */}
//       <Section bg="sand" className="py-16">
//         <Container>
//           <div className="text-center">
//             <h2 className="font-display text-3xl text-primary-800 mb-4">
//               Want to See More?
//             </h2>
//             <p className="text-primary-500 mb-8 max-w-lg mx-auto">
//               Schedule a facility tour and meet our team in person. We'd love to show you around and answer all your questions.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-primary-600 text-cream px-8 py-4 font-medium hover:bg-primary-700 transition-colors"
//               >
//                 Request a Facility Tour
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-white border-2 border-primary-200 text-primary-700 px-8 py-4 font-medium hover:border-primary-400 transition-colors"
//               >
//                 Watch Video Tour
//               </motion.a>
//             </div>
//           </div>
//         </Container>
//       </Section>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {lightbox && (
//           <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
//         )}
//       </AnimatePresence>
//     </PageWrapper>
//   )
// }


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import { galleryImages } from '../data'

const categories = ['All', ...Array.from(new Set(galleryImages.map((i) => i.category)))]

/* ── Theme (matching Contact) ── */
const T = {
  dark: '#2d1a0e',
  mid: '#7a5c44',
  accent: '#c47b3c',
  accentHot: '#e8721c',
  accentSub: '#b86830',
  border: 'rgba(196,123,60,0.25)',
}

/* ── Dot divider ── */
function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 900, margin: '0 auto', padding: '4px 24px' }}>
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, opacity: 0.5 }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
    </div>
  )
}

function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(item)}
      className={`${item.color} relative cursor-zoom-in group overflow-hidden aspect-square`}
      style={{ border: `1.5px solid ${T.border}`, borderRadius: 8 }}
    >
      {/* Placeholder visual */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-white/30 mb-4 flex items-center justify-center">
          <span style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '1.5rem', color: 'rgba(45,26,14,0.5)' }}>{item.id}</span>
        </div>
        <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accentSub }}>{item.category}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6"
        style={{ background: 'rgba(45,26,14,0.78)' }}>
        <ZoomIn color={T.accentHot} size={28} />
        <p style={{ color: '#f5e6d5', fontSize: '0.88rem', textAlign: 'center', fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.55 }}>{item.caption}</p>
        <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accent }}>{item.category}</span>
      </div>
    </motion.div>
  )
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full"
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '-48px', right: 0, color: 'rgba(196,123,60,0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = T.accentHot}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(196,123,60,0.6)'}
        >
          <X size={28} />
        </button>
        <div className={`${item.color} w-full aspect-video flex items-center justify-center`}
          style={{ borderRadius: '8px 8px 0 0', border: `1.5px solid rgba(196,123,60,0.3)`, borderBottom: 'none' }}>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/30 mx-auto mb-4 flex items-center justify-center">
              <span style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '1.75rem', color: 'rgba(45,26,14,0.5)' }}>{item.id}</span>
            </div>
            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accentSub }}>{item.category}</span>
          </div>
        </div>
        <div style={{ background: '#1a0f07', border: `1.5px solid rgba(196,123,60,0.3)`, borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '20px 28px' }}>
          <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '1.1rem', color: '#f5e6d5', fontWeight: 600, marginBottom: 6 }}>{item.caption}</p>
          <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: T.accent }}>{item.category}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        .filter-btn { transition: all 0.2s; }
        .filter-btn:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; }
        .filter-btn.active { background: #c47b3c !important; color: #fff !important; border-color: #c47b3c !important; }

        .tour-btn-primary:hover { background: #0ea5e9 !important; transform: translateY(-1px) scale(1.03); box-shadow: 0 6px 22px rgba(56,189,248,0.38) !important; }
        .tour-btn-secondary:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; }
      `}</style>

      {/* ══ HERO — matches Contact exactly ══ */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* Blurred background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px)', transform: 'scale(1.1)' }} />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '88px 24px 80px', maxWidth: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 18, textAlign: 'center' }}
          >
            A Glimpse Into{' '}
            <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Our World</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.82 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#fff', fontSize: 17, maxWidth: 500, lineHeight: 1.85, fontFamily: "'Georgia', 'Times New Roman', serif", marginBottom: 32, textAlign: 'center' }}
          >
            Tour our facility, meet our team, and see the technology and spaces
            where healing happens every day.
          </motion.p>


        </div>
      </section>

      {/* ══ GALLERY GRID ══ */}
      <section id="gallery-grid" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section header — matches Contact "Book an Appointment" header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
              <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: T.accent, margin: 0, fontWeight: 700 }}>
                Our Facility
              </p>
              <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
            </div>
            <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.85rem, 4vw, 3rem)', fontWeight: 700, color: T.dark, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Spaces Built for{' '}
              <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>Healing</span>
            </h2>
            <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto', color: T.mid }}>
              Every corner of our centre is designed with care, comfort, and recovery in mind.
            </p>
          </div>

          {/* Filter tabs — styled like Contact info cards */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 48 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                style={{
                  padding: '8px 20px',
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  border: `1.5px solid rgba(196,123,60,0.28)`,
                  borderRadius: '999px',
                  background: 'transparent',
                  color: activeCategory === cat ? '#fff' : T.accentSub,
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <GalleryCard key={item.id} item={item} onClick={setLightbox} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: T.mid, padding: '80px 0', fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              No images in this category.
            </p>
          )}
        </div>
      </section>

      <Divider />

      {/* ══ VIRTUAL TOUR CTA — matches Contact "Book Appointment" CTA style ══ */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
              <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: T.accent, margin: 0, fontWeight: 700 }}>
                Visit Us
              </p>
              <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
            </div>

            <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: T.dark, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Want to{' '}
              <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>See More?</span>
            </h2>

            <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '0.95rem', color: T.mid, lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 2rem' }}>
              Schedule a facility tour and meet our team in person. We'd love to
              show you around and answer all your questions.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>

              {/* Primary sky pill — same as Contact "Book Appointment" */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="tour-btn-primary"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '13px 32px',
                  borderRadius: '999px',
                  background: '#38bdf8',
                  color: '#fff',
                  border: '2px solid #38bdf8',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 18px rgba(56,189,248,0.32)',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                }}
              >
                Request a Facility Tour
              </motion.a>

              {/* Secondary warm outline pill */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="tour-btn-secondary"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '13px 32px',
                  borderRadius: '999px',
                  background: 'transparent',
                  color: T.accentSub,
                  border: `2px solid rgba(196,123,60,0.45)`,
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
                }}
              >
                Watch Video Tour
              </motion.a>

            </div>
          </div>
        </div>
      </section>

      {/* ══ LIGHTBOX ══ */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

    </div>
  )
}
