import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Heart, Microscope } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { stats, team } from '../data'

function PageHero() {
  return (
    <section className="bg-primary-800 py-20 md:py-28 relative overflow-hidden">
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
          About NeuroVita
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
        >
          Two Decades of <em className="text-primary-300">Healing Excellence</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-200 text-lg max-w-xl"
        >
          Since 2002, NeuroVita Rehabilitation Center has been transforming the lives of patients with complex neurological and physical conditions across India.
        </motion.p>
      </Container>
    </section>
  )
}

function MissionSection() {
  return (
    <Section bg="cream" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary-500 inline-block mb-4">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-6 leading-tight">
              Founded on the Belief That <em className="text-primary-500">Every Patient</em> Deserves to Recover
            </h2>
            <p className="text-primary-600 leading-relaxed mb-5">
              NeuroVita was founded in 2002 by Dr. Priya Mehta after she witnessed the profound gap in quality rehabilitation services available to patients in India. Drawing on her training at AIIMS and a fellowship in London, she established a centre that would combine global standards of care with deep local understanding.
            </p>
            <p className="text-primary-600 leading-relaxed mb-8">
              Today, NeuroVita is recognized as one of North India's premier rehabilitation facilities, with a multidisciplinary team of over 35 specialists, state-of-the-art technology, and a track record of over 5,000 successful patient recoveries.
            </p>
            <Button to="/director" variant="primary" icon={<ArrowRight size={18} />}>
              Meet Our Director
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: 'NABH Accredited', desc: 'Meeting the highest national standards for hospital quality and patient safety.' },
              { icon: Users, title: 'Multidisciplinary', desc: 'Physicians, therapists, psychologists, and dietitians working together.' },
              { icon: Heart, title: 'Patient-Centred', desc: 'Every care plan is personalized to the unique goals and values of each patient.' },
              { icon: Microscope, title: 'Evidence-Based', desc: 'Therapies grounded in the latest clinical research and best practice guidelines.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 border border-primary-50 shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="text-primary-600 mb-3" size={24} />
                <h3 className="font-display text-primary-800 text-lg mb-2">{item.title}</h3>
                <p className="text-primary-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function StatsSection() {
  return (
    <Section bg="sand" className="py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl text-primary-700 mb-2">{s.value}</div>
              <div className="font-mono text-xs tracking-widest uppercase text-primary-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function TeamSection() {
  return (
    <Section bg="white" className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="Our Team"
          title="Expert Clinicians, Compassionate Care"
          subtitle="Our specialists bring decades of combined experience from leading institutions worldwide."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Card key={i} hover>
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-700 mb-5 flex items-center justify-center">
                <span className="font-display text-3xl text-white">{member.name[0]}</span>
              </div>
              <h3 className="font-display text-xl text-primary-800 mb-1">{member.name}</h3>
              <p className="text-primary-500 text-sm mb-1">{member.role}</p>
              <p className="font-mono text-xs text-primary-400 tracking-wider mb-4">{member.specialty}</p>
              <p className="text-primary-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="border-t border-primary-50 pt-4">
                {member.qualifications.map((q) => (
                  <span key={q} className="block text-xs text-primary-500 py-0.5">• {q}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ValuesSection() {
  const values = [
    { title: 'Excellence', desc: 'We hold ourselves to the highest clinical and ethical standards in everything we do.' },
    { title: 'Compassion', desc: 'We treat every patient with empathy, dignity, and genuine care.' },
    { title: 'Innovation', desc: 'We continuously adopt the latest rehabilitation technologies and evidence-based practices.' },
    { title: 'Integrity', desc: 'We are transparent, honest, and committed to doing what is right for our patients.' },
  ]
  return (
    <Section bg="primary" className="py-20">
      <Container>
        <SectionHeader label="Our Values" title="Principles That Guide Everything We Do" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-primary-600 p-8 hover:border-primary-400 transition-colors"
            >
              <div className="font-display text-5xl text-primary-600 mb-4">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-display text-xl text-white mb-3">{v.title}</h3>
              <p className="text-primary-300 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default function About() {
  return (
    <PageWrapper>
      <PageHero />
      <MissionSection />
      <StatsSection />
      <TeamSection />
      <ValuesSection />
    </PageWrapper>
  )
}
