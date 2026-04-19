import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import ValuesSection from '../components/homec/ValuesSection'
import VisionMission from "../components/homec/VisionMission"
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { services, stats, testimonials, conditions } from '../data'
import * as Icons from 'lucide-react'


function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold leading-tight"
          >
            <span className="block text-white text-4xl md:text-6xl">
              Stronger Every Day,
            </span>
            <span className="block text-orange-400 text-5xl md:text-7xl mt-2">
              Together
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white text-lg md:text-xl"
          >
            Empowering recovery with expert support
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-white italic text-sm md:text-base"
          >
            Together in Your Journey to Wellness, Across the World
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 px-8 py-4 bg-sky-400 text-white font-semibold rounded-full text-lg hover:bg-sky-500 transition transform hover:scale-105"
          >
            START YOUR RECOVERY
          </motion.button>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
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





function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(160deg, #fdf8f2 0%, #fef3e8 40%, #fff9f5 100%)",
      }}
    >
      {/* Decorative blobs — same as VisionMission */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(234,166,112,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-24 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,130,80,0.09) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, #470e26, #44073b)",
            border: "1.5px solid rgba(232,114,28,0.45)",
            borderRadius: "20px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner glow top-right */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(49, 10, 73, 0.18) 0%, transparent 70%)" }}
          />
          {/* Inner glow bottom-left */}
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(54, 65, 66, 0.1) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left — text */}
            <div className="flex-1 min-w-[260px]">

              {/* Label pill */}
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-7 h-px" style={{ background: "#e8721c" }} />
                <p
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#e8721c",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  Get Started
                </p>
                <span className="block w-7 h-px" style={{ background: "#e8721c" }} />
              </div>

              <h2
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#f5f0ea",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.85rem",
                }}
              >
                Begin Your{" "}
                <span style={{ color: "#e8721c", fontStyle: "italic", fontWeight: 400 }}>
                  Recovery Journey
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "0.92rem",
                  color: "rgba(245,240,234,0.68)",
                  lineHeight: 1.75,
                  maxWidth: "420px",
                  margin: 0,
                }}
              >
                Schedule a comprehensive evaluation with our specialists. We'll
                design a personalized rehabilitation plan tailored to your goals.
              </p>
            </div>

            {/* Right — buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">

              {/* Primary — orange */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  background: "#e8721c",
                  color: "#fff",
                  border: "2px solid #e8721c",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Book Appointment
              </motion.a>

              {/* Secondary — teal outline */}
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.04, background: "rgba(61,184,200,0.12)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  background: "transparent",
                  color: "#3db8c8",
                  border: "2px solid rgba(61,184,200,0.6)",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Call Now
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <ValuesSection />


      <ServicesPreview />
      <VisionMission />


    </PageWrapper>
  )
}
