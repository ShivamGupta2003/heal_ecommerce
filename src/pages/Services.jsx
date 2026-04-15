import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'
import { services } from '../data'
import * as Icons from 'lucide-react'

function ServiceCard({ service, index, onSelect, selected }) {
  const Icon = Icons[service.icon] || Icons.Activity
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(service)}
      className={`cursor-pointer p-8 border-2 transition-all duration-300 ${
        selected?.id === service.id
          ? 'border-primary-500 bg-primary-50 shadow-xl'
          : 'border-primary-100 bg-white hover:border-primary-300 hover:shadow-lg'
      }`}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="font-display text-xl text-primary-800 mb-3">{service.title}</h3>
      <p className="text-primary-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
      <div className="flex items-center gap-2 text-primary-400 text-xs">
        <Clock size={12} />
        <span>{service.duration}</span>
      </div>
    </motion.div>
  )
}

function ServiceDetail({ service }) {
  const Icon = Icons[service.icon] || Icons.Activity
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-primary-800 p-8 md:p-12 sticky top-24"
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
        <Icon size={28} className="text-white" />
      </div>
      <h2 className="font-display text-3xl text-white mb-4">{service.title}</h2>
      <p className="text-primary-200 leading-relaxed mb-8">{service.fullDesc}</p>

      <div className="mb-8">
        <h3 className="font-mono text-xs tracking-widest uppercase text-primary-400 mb-4">Conditions Treated</h3>
        <div className="space-y-2">
          {service.conditions.map((c) => (
            <div key={c} className="flex items-center gap-3 text-primary-200 text-sm">
              <CheckCircle size={14} className="text-primary-400 flex-shrink-0" />
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-700 pt-6 mb-8">
        <div className="flex items-center gap-2 text-primary-300 text-sm">
          <Clock size={14} />
          <span>Typical duration: <strong className="text-white">{service.duration}</strong></span>
        </div>
      </div>

      <Button to="/contact" variant="white" icon={<ArrowRight size={16} />} className="w-full justify-center">
        Enquire About This Service
      </Button>
    </motion.div>
  )
}

export default function Services() {
  const [selected, setSelected] = useState(services[0])

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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
          >
            Comprehensive <em className="text-primary-300">Rehabilitation</em> Under One Roof
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 text-lg max-w-xl"
          >
            From neurological recovery to pain management — our multidisciplinary team offers expert care across a wide range of specialties.
          </motion.p>
        </Container>
      </section>

      {/* Services Grid + Detail */}
      <Section bg="cream" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={i}
                  onSelect={setSelected}
                  selected={selected}
                />
              ))}
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {selected && <ServiceDetail service={selected} />}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process section */}
      <Section bg="sand" className="py-20">
        <Container>
          <SectionHeader
            label="How It Works"
            title="Your Rehabilitation Journey"
            subtitle="A structured, personalized path from assessment to full recovery."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: 'Initial Assessment', desc: 'Comprehensive evaluation by our clinical team to understand your condition and goals.' },
              { step: '02', title: 'Personalised Plan', desc: 'A tailored rehabilitation programme designed around your specific needs and timeline.' },
              { step: '03', title: 'Intensive Therapy', desc: 'Daily sessions with expert therapists using evidence-based and technology-assisted techniques.' },
              { step: '04', title: 'Recovery & Follow-up', desc: 'Discharge planning, home exercise programme, and ongoing outpatient support.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white p-8 border-r border-primary-100 last:border-r-0"
              >
                <div className="font-display text-6xl text-primary-100 mb-4">{item.step}</div>
                <h3 className="font-display text-xl text-primary-800 mb-3">{item.title}</h3>
                <p className="text-primary-500 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-primary-200 hidden md:block" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  )
}
