import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Heart, BookOpen, Brain, MessageCircle, Activity, Footprints, Dumbbell, School, Handshake } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  { icon: School, title: 'Special Education', desc: "Structured, individualized academic programs tailored to each child's learning style and pace." },
  { icon: Brain, title: 'Behavioral Therapy', desc: 'Evidence-based strategies to help children understand, manage, and regulate their behavior.' },
  { icon: MessageCircle, title: 'Language Development', desc: 'Targeted interventions to build vocabulary, comprehension, and expressive communication skills.' },
  { icon: Activity, title: 'Speech Therapy', desc: 'Professional support for articulation, fluency, and functional communication development.' },
  { icon: Handshake, title: 'Occupational Therapy', desc: 'Developing fine motor skills, sensory regulation, and independence in daily activities.' },
  { icon: Footprints, title: 'Physiotherapy', desc: 'Improving gross motor function, strength, coordination, and physical confidence.' },
  { icon: Users, title: 'Social Skills Training', desc: 'Guided group and individual sessions to build meaningful peer relationships and interaction.' },
  { icon: Dumbbell, title: 'Sports & Physical Activities', desc: 'Fun, structured physical play that supports teamwork, body awareness, and self-esteem.' },
  { icon: BookOpen, title: 'School-like Learning', desc: 'A nurturing classroom setting that bridges therapy and academics for a confident school transition.' },
]

const approachPillars = [
  { title: 'Communication', desc: 'Building expressive and receptive language to help every child voice their world.' },
  { title: 'Learning Ability', desc: 'Strengthening cognitive foundations through conceptual and activity-based methods.' },
  { title: 'Focus & Attention', desc: 'Structured routines and behavioral strategies to improve sustained concentration.' },
  { title: 'Sensory Regulation', desc: 'Sensory integration techniques that help children feel calm, safe, and ready to learn.' },
  { title: 'Physical Coordination', desc: 'Motor skill programs that build body confidence and functional independence.' },
  { title: 'Social Interaction', desc: 'Peer-guided play and group therapy to nurture meaningful social connections.' },
]

const highlights = [
  { value: '500+', label: 'Children Supported' },
  { value: '9', label: 'Therapy Disciplines' },
  { value: 'RCI', label: 'Registered Educator' },
  { value: '100%', label: 'Personalised Care' },
]

const whoWeAreFeatures = [
  { icon: Award, title: 'RCI Registered', desc: 'Led by a Rehabilitation Council of India certified Special Educator.' },
  { icon: Users, title: 'Multidisciplinary', desc: 'Speech, OT, physio, behavioural, and special education specialists together.' },
  { icon: Heart, title: 'Child-Centred', desc: 'Every care plan is personalised to the unique strengths and goals of each child.' },
  { icon: BookOpen, title: 'Evidence-Based', desc: 'Therapies grounded in the latest developmental research and best practice guidelines.' },
]

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const font = { serif: "'Georgia','Times New Roman',serif", mono: "'Courier New',monospace" }
const col = { bg: '#fdf6ee', bg2: '#f5ede0', dark: '#2d1a0e', mid: '#7a5c44', accent: '#c47b3c', accentBright: '#e8721c' }

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
      <span style={{ display: 'block', width: 32, height: '1px', background: col.accent }} />
      <p style={{ fontFamily: font.mono, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: col.accent, margin: 0, fontWeight: 700 }}>
        {children}
      </p>
      <span style={{ display: 'block', width: 32, height: '1px', background: col.accent }} />
    </div>
  )
}

function SectionHeader({ label, title, italic, subtitle, light }) {
  const titleColor = light ? '#fff' : col.dark
  const subtitleColor = light ? 'rgba(255,255,255,0.62)' : col.mid
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <SectionLabel>{label}</SectionLabel>
      <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.85rem,4vw,3rem)', fontWeight: 700, color: titleColor, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
        {title}{' '}
        {italic && <em style={{ color: col.accentBright, fontStyle: 'italic', fontWeight: 400 }}>{italic}</em>}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: font.serif, fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto', color: subtitleColor }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function PageHero() {
  return (
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
        padding: '88px 24px 80px', width: '100%', maxWidth: 1000,
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: font.serif,
            fontSize: 'clamp(2rem,5vw,3.6rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 18,
          }}
        >
          Every Child Deserves a{' '}
          <em style={{ color: col.accentBright, fontStyle: 'italic', fontWeight: 400 }}>Confident Future</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.82 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#fff', fontSize: 17, maxWidth: '70%', lineHeight: 1.85, fontFamily: font.serif }}
        >
          Patatram is a dedicated child development and rehabilitation centre committed to supporting
          children with autism, ADHD, learning difficulties, speech delays, and other developmental challenges.
        </motion.p>
      </div>
    </section>
  )
}

// ─── WHO WE ARE ───────────────────────────────────────────────────────────────

function WhoWeAreSection() {
  return (
    <section style={{ padding: '80px 24px', background: col.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'start' }}>

          {/* Left — text */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <SectionLabel>Who We Are</SectionLabel>
            </div>
            <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.85rem,4vw,2.8rem)', fontWeight: 700, color: col.dark, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Helping Every Child Discover Their{' '}
              <em style={{ color: col.accentBright, fontStyle: 'italic', fontWeight: 400 }}>Strengths</em>
            </h2>
            <p style={{ fontFamily: font.serif, color: col.mid, lineHeight: 1.85, marginBottom: 18, fontSize: '0.95rem' }}>
              We are a dedicated child development and rehabilitation centre committed to supporting children
              with autism, ADHD, learning difficulties, speech delays, and other developmental challenges.
            </p>
            <p style={{ fontFamily: font.serif, color: col.mid, lineHeight: 1.85, marginBottom: 18, fontSize: '0.95rem' }}>
              Our aim is to help every child discover their strengths, improve daily skills, and move toward
              a more confident and independent future.
            </p>
            <p style={{ fontFamily: font.serif, color: col.mid, lineHeight: 1.85, marginBottom: 32, fontSize: '0.95rem' }}>
              We believe that every child learns differently, which is why we provide personalised care through
              structured therapies, conceptual learning, and compassionate guidance.
            </p>

          </div>

          {/* Right — feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {whoWeAreFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(196,123,60,0.22)',
                  borderRadius: 12,
                  padding: '24px 20px',
                }}
              >
                <item.icon size={22} color={col.accent} style={{ marginBottom: 14 }} />
                <h3 style={{ fontFamily: font.serif, fontSize: '1rem', fontWeight: 700, color: col.dark, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontFamily: font.serif, color: col.mid, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── STATS ───────────────────────────────────────────────────────────────────


// ─── SERVICES ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section style={{ padding: '80px 24px', background: col.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader label="What We Do" title="Therapies That" italic="Transform" subtitle="We focus on improving a child's overall development through a comprehensive range of specialist therapies." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: '#fff',
                border: '1.5px solid rgba(196,123,60,0.22)',
                borderRadius: 12,
                padding: '28px 24px',
              }}
            >
              <item.icon size={22} color={col.accent} style={{ marginBottom: 14 }} />
              <h3 style={{ fontFamily: font.serif, fontSize: '1.05rem', fontWeight: 700, color: col.dark, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontFamily: font.serif, color: col.mid, fontSize: '0.85rem', lineHeight: 1.75 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




// ─── COMMITMENT ───────────────────────────────────────────────────────────────

function CommitmentSection() {
  return (
    <section style={{ padding: '80px 24px', background: col.bg2 }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel>Our Commitment</SectionLabel>
        <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.85rem,4vw,3rem)', fontWeight: 700, color: col.dark, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 24 }}>
          Growing Together,{' '}
          <em style={{ color: col.accentBright, fontStyle: 'italic', fontWeight: 400 }}>Every Step of the Way</em>
        </h2>
        <p style={{ fontFamily: font.serif, color: col.mid, fontSize: '1rem', lineHeight: 1.85, marginBottom: 40 }}>
          We work closely with families to ensure that every child receives the care, understanding, and support
          they need to grow with confidence. Our partnership with parents is at the heart of everything we do —
          because lasting progress happens when the centre and home work as one.
        </p>
        <a
          href="/contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 32px',
            background: col.accent, color: '#fff',
            borderRadius: 999,
            fontFamily: font.mono, fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Get in Touch <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: font.serif }}>
      <PageHero />
      <WhoWeAreSection />

      <ServicesSection />


      <CommitmentSection />
    </div>
  )
}