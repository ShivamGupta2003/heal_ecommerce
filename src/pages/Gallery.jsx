import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import { galleryImages } from '../data'

const categories = ['All', ...Array.from(new Set(galleryImages.map((i) => i.category)))]

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
    >
      {/* Placeholder visual */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-white/30 mb-4 flex items-center justify-center">
          <span className="font-display text-2xl text-white/60">{item.id}</span>
        </div>
        <span className="font-mono text-xs tracking-widest uppercase text-primary-700/60">{item.category}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6">
        <ZoomIn className="text-white" size={28} />
        <p className="text-white text-sm text-center font-medium leading-snug">{item.caption}</p>
        <span className="font-mono text-[10px] tracking-widest uppercase text-primary-300">{item.category}</span>
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
      className="fixed inset-0 z-50 bg-primary-950/95 flex items-center justify-center p-6"
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
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
        >
          <X size={28} />
        </button>
        <div className={`${item.color} w-full aspect-video flex items-center justify-center`}>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/30 mx-auto mb-4 flex items-center justify-center">
              <span className="font-display text-3xl text-white/60">{item.id}</span>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase text-primary-700/60">{item.category}</span>
          </div>
        </div>
        <div className="bg-primary-800 px-6 py-4">
          <p className="text-white font-display text-lg">{item.caption}</p>
          <span className="font-mono text-xs text-primary-400 tracking-wider uppercase">{item.category}</span>
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
    <PageWrapper>
      {/* Hero */}
      <section className="bg-primary-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <Container className="relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-primary-300 border border-primary-600 px-3 py-1.5 inline-block mb-6"
          >
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
          >
            A Glimpse Into <em className="text-primary-300">Our World</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 text-lg max-w-xl"
          >
            Tour our facility, meet our team, and see the technology and spaces where healing happens every day.
          </motion.p>
        </Container>
      </section>

      {/* Gallery */}
      <Section bg="cream" className="py-20 md:py-28">
        <Container>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-primary-600 border-primary-200 hover:border-primary-400 hover:bg-primary-50'
                }`}
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
            <p className="text-center text-primary-400 py-20">No images in this category.</p>
          )}
        </Container>
      </Section>

      {/* Virtual Tour CTA */}
      <Section bg="sand" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl text-primary-800 mb-4">
              Want to See More?
            </h2>
            <p className="text-primary-500 mb-8 max-w-lg mx-auto">
              Schedule a facility tour and meet our team in person. We'd love to show you around and answer all your questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-600 text-cream px-8 py-4 font-medium hover:bg-primary-700 transition-colors"
              >
                Request a Facility Tour
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border-2 border-primary-200 text-primary-700 px-8 py-4 font-medium hover:border-primary-400 transition-colors"
              >
                Watch Video Tour
              </motion.a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
