import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { services } from '../data'
import * as Icons from 'lucide-react'

// function ServiceCard({ service, index, onSelect }) {
//   const Icon = Icons[service.icon] || Icons.Activity
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       onClick={() => onSelect(service)}
//       whileHover={{ boxShadow: '0 6px 24px rgba(196,123,60,0.13)', borderColor: 'rgba(196,123,60,0.5)' }}
//       style={{
//         cursor: 'pointer',
//         padding: '32px',
//         border: '1.5px solid rgba(196,123,60,0.22)',
//         borderRadius: 12,
//         background: '#fff',
//         transition: 'box-shadow 0.2s, border-color 0.2s',
//       }}
//     >
//       <div style={{
//         width: 52, height: 52, borderRadius: 8,
//         border: '1.5px solid rgba(196,123,60,0.3)',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         marginBottom: 20,
//         background: 'linear-gradient(135deg,#f9ede0,#fff)',
//       }}>
//         <Icon size={22} color="#c47b3c" />
//       </div>
//       <h3 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: '1.15rem', fontWeight: 700, color: '#2d1a0e', marginBottom: 10 }}>
//         {service.title}
//       </h3>
//       <p style={{ fontFamily: "'Georgia','Times New Roman',serif", color: '#7a5c44', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 16 }}>
//         {service.shortDesc}
//       </p>
//       <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#b86830', fontSize: '0.75rem', fontFamily: "'Courier New',monospace" }}>
//         <Clock size={12} />
//         <span>{service.duration}</span>
//       </div>
//     </motion.div>
//   )
// }

function ServiceCard({ service, index, onSelect }) {
  const Icon = Icons[service.icon] || Icons.Activity
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(service)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        border: '1.5px solid rgba(196,123,60,0.22)',
      }}
    >
      {/* Background image from data */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${service.image || "/hero.png"}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.4s ease',
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(20,8,2,0.92) 40%, rgba(20,8,2,0.15) 100%)',
      }} />

      {/* Hover glow border */}
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          position: 'absolute', inset: 0,
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 2px rgba(196,123,60,0.6)',
          transition: 'opacity 0.2s',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '24px 28px 28px' }}>
        \

        <h3 style={{
          fontFamily: "'Georgia','Times New Roman',serif",
          fontSize: '1.1rem', fontWeight: 700,
          color: '#fff', marginBottom: 8,
        }}>
          {service.title}
        </h3>

        <p style={{
          fontFamily: "'Georgia','Times New Roman',serif",
          color: 'rgba(255,255,255,0.68)',
          fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 16,
        }}>
          {service.shortDesc}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          color: '#c47b3c', fontSize: '0.72rem',
          fontFamily: "'Courier New',monospace",
        }}>
          <Clock size={11} />
          <span>{service.duration}</span>
        </div>
      </div>
    </motion.div>
  )
}

function ServiceModal({ service, onClose }) {
  const Icon = Icons[service.icon] || Icons.Activity
  if (!service) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.65)',
          zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#2d1a0e',
            borderRadius: 16,
            maxWidth: 560,
            width: '100%',
            padding: '44px 40px',
            position: 'relative',
            maxHeight: '85vh',
            overflowY: 'auto',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 18, right: 20,
              background: 'rgba(255,255,255,0.08)',
              border: 'none', color: '#fff',
              width: 34, height: 34, borderRadius: '50%',
              fontSize: '1.1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>


          <h2 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            {service.title}
          </h2>
          <p style={{ fontFamily: "'Georgia','Times New Roman',serif", color: 'rgba(255,255,255,0.72)', lineHeight: 1.82, marginBottom: 28, fontSize: '0.94rem' }}>
            {service.fullDesc}
          </p>

          {/* Conditions */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontFamily: "'Courier New',monospace", fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c47b3c', marginBottom: 14, fontWeight: 700 }}>
              Conditions Treated
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {service.conditions.map((c) => (
                <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={14} color="#c47b3c" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.65, fontFamily: "'Georgia','Times New Roman',serif" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div style={{
            borderTop: '1px solid rgba(196,123,60,0.22)',
            paddingTop: 20, marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem',
            fontFamily: "'Georgia','Times New Roman',serif",
          }}>
            <Clock size={14} color="#c47b3c" />
            <span>Typical duration: <strong style={{ color: '#fff' }}>{service.duration}</strong></span>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 30px',
              background: '#c47b3c', color: '#fff',
              borderRadius: 999,
              fontFamily: "'Courier New',monospace",
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Enquire About This Service <ArrowRight size={14} />
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Services() {
  const [selected, setSelected] = useState(null)
  const [showAll, setShowAll] = useState(false)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Georgia','Times New Roman',serif" }}>

      {/* Modal */}
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(8px)', transform: 'scale(1.1)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.62)' }} />
        <div style={{
          position: 'relative', zIndex: 10,
          padding: '88px 24px 80px',
          width: '100%', maxWidth: '1000px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
        }}>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Georgia','Times New Roman',serif",
              fontSize: 'clamp(2rem,5vw,3.6rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.2, marginBottom: 18,

            }}
          >
            Comprehensive{' '}
            <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Rehabilitation</em>{' '}
            Under One Roof
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.82 }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#fff', fontSize: 17,
              width: '70%', lineHeight: 1.85,
              fontFamily: "'Georgia','Times New Roman',serif",
            }}
          >
            From neurological recovery to pain management — our multidisciplinary team offers expert care across a wide range of specialties.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={{ padding: '72px 24px', background: '#fdf6ee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
              <p style={{ fontFamily: "'Courier New',monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c47b3c', margin: 0, fontWeight: 700 }}>
                What We Offer
              </p>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
            </div>
            <h2 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: 'clamp(1.85rem,4vw,3rem)', fontWeight: 700, color: '#2d1a0e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Our{' '}
              <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Specialties</em>
            </h2>
            <p style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 500, margin: '0 auto', color: '#7a5c44' }}>
              Click on any service to learn more about what we offer and how we can help.
            </p>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {(showAll ? services : services.slice(0, 6)).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} onSelect={setSelected} />
            ))}
          </div>
          {/* View More Button */}
          {services.length > 6 && !showAll && (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button
                onClick={() => setShowAll(true)}
                style={{
                  background: '#38bdf8', // sky blue
                  color: '#fff',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.08em'
                }}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section style={{ padding: '72px 24px', background: '#f5ede0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
              <p style={{ fontFamily: "'Courier New',monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c47b3c', margin: 0, fontWeight: 700 }}>
                How It Works
              </p>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
            </div>
            <h2 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: 'clamp(1.85rem,4vw,3rem)', fontWeight: 700, color: '#2d1a0e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Your Rehabilitation{' '}
              <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Journey</em>
            </h2>
            <p style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 500, margin: '0 auto', color: '#7a5c44' }}>
              A structured, personalized path from assessment to full recovery.
            </p>
          </div>

          {/* Step cards with image bg */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                desc: 'Comprehensive evaluation by our clinical team to understand your condition and goals.',
                img: '/initial.png',
              },
              {
                step: '02',
                title: 'Personalised Plan',
                desc: 'A tailored rehabilitation programme designed around your specific needs and timeline.',
                img: '/initial2.png',
              },
              {
                step: '03',
                title: 'Intensive Therapy',
                desc: 'Daily sessions with expert therapists using evidence-based and technology-assisted techniques.',
                img: '/image3.png',
              },
              {
                step: '04',
                title: 'Recovery & Follow-up',
                desc: 'Discharge planning, home exercise programme, and ongoing outpatient support.',
                img: '/final.png',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13 }}
                style={{
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  minHeight: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                {/* Background image */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url('${item.img}')`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }} />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(20,8,2,0.92) 40%, rgba(20,8,2,0.25) 100%)',
                }} />
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '28px 28px 32px' }}>
                  <div style={{
                    fontFamily: "'Georgia','Times New Roman',serif",
                    fontSize: '3.2rem', fontWeight: 700,
                    color: 'rgba(196,123,60,0.4)',
                    lineHeight: 1, marginBottom: 10,
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{
                    fontFamily: "'Georgia','Times New Roman',serif",
                    fontSize: '1.15rem', fontWeight: 700,
                    color: '#fff', marginBottom: 10,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Georgia','Times New Roman',serif",
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: '0.85rem', lineHeight: 1.7, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}