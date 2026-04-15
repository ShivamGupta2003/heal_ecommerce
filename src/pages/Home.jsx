import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { services, stats, testimonials, conditions } from '../data'
import * as Icons from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }} />
      </div>
      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-700/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-900 to-transparent" />

      {/* Decorative shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/20 blur-3xl pointer-events-none"
      />

      <Container className="relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-primary-300 border border-primary-600 px-3 py-1.5 mb-8"
          >
            NABH Accredited • Est. 2002
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Restoring Lives,
            <br />
            <em className="text-primary-300 not-italic">One Step</em>
            <br />
            at a Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-primary-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Delhi's leading neurological and physical rehabilitation centre. Expert multidisciplinary care for recovery from stroke, brain injury, orthopedic surgery, and complex conditions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button to="/contact" variant="white" size="lg" icon={<ArrowRight size={18} />}>
              Book Assessment
            </Button>
            <Button to="/services" variant="secondary" size="lg"
              className="border-primary-400 text-primary-200 hover:bg-primary-700 hover:text-white"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {['NABH Accredited Facility', '5,000+ Patients Recovered', 'ISO 9001:2015 Certified'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-primary-300 text-sm">
                <CheckCircle size={14} className="text-primary-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-400"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-primary-600 py-14">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
              <div className="font-mono text-xs tracking-widest uppercase text-primary-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ServicesPreview() {
  return (
    <Section bg="cream" className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="What We Treat"
          title={<>Comprehensive <em className="italic text-primary-500">Rehabilitation</em> Services</>}
          subtitle="Our multidisciplinary team provides evidence-based care across a wide spectrum of conditions and specialties."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Activity
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full group cursor-pointer" hover>
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl text-primary-800 mb-3">{service.title}</h3>
                  <p className="text-primary-500 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.conditions.slice(0, 3).map((c) => (
                      <span key={c} className="text-xs bg-primary-50 text-primary-600 px-2 py-1 border border-primary-100">
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium group-hover:text-primary-800 transition-colors"
                  >
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button to="/services" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function ConditionsSection() {
  return (
    <Section bg="sand" className="py-20">
      <Container>
        <SectionHeader
          label="Conditions We Treat"
          title="Expertise Across a Wide Range of Conditions"
          subtitle="From acute neurological emergencies to chronic rehabilitation needs — we have the expertise."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {conditions.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-primary-100 text-primary-700 px-4 py-2 text-sm font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <Section bg="primary" className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="Patient Stories"
          title={<>Lives <em className="italic">Transformed</em></>}
          subtitle="Real journeys of recovery and hope from our patients."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-800 p-8 relative"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-accent-400 fill-accent-400" />
                ))}
              </div>
              <p className="text-primary-200 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="border-t border-primary-700 pt-4">
                <div className="font-display text-white">{t.name}</div>
                <div className="font-mono text-[11px] text-primary-400 tracking-wider">{t.condition} · {t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function CTASection() {
  return (
    <Section bg="cream" className="py-20">
      <Container>
        <div className="bg-primary-700 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary-600/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                Begin Your Recovery Journey
              </h2>
              <p className="text-primary-200 max-w-lg">
                Schedule a comprehensive evaluation with our specialists. We'll design a personalized rehabilitation plan tailored to your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button to="/contact" variant="white" size="lg">
                Book Appointment
              </Button>
              <Button
                href="tel:+911234567890"
                variant="secondary"
                size="lg"
                className="border-primary-300 text-primary-100 hover:bg-primary-600"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ConditionsSection />
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  )
}
