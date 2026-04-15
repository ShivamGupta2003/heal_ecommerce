import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { PageWrapper, Section, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16"
      >
        <div className="w-20 h-20 bg-primary-100 flex items-center justify-center mb-6">
          <CheckCircle className="text-primary-600" size={36} />
        </div>
        <h3 className="font-display text-3xl text-primary-800 mb-3">Thank You!</h3>
        <p className="text-primary-500 max-w-sm">
          Your message has been received. A member of our team will contact you within 24 hours to schedule your appointment.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-primary-500 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-primary-200 bg-white px-4 py-3 text-primary-800 placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-primary-500 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-primary-200 bg-white px-4 py-3 text-primary-800 placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-primary-500 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full border border-primary-200 bg-white px-4 py-3 text-primary-800 placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-primary-500 mb-2">
            Service Needed
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-primary-200 bg-white px-4 py-3 text-primary-800 focus:outline-none focus:border-primary-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option>Neurological Rehabilitation</option>
            <option>Physical Therapy</option>
            <option>Occupational Therapy</option>
            <option>Speech & Language Therapy</option>
            <option>Cardiac Rehabilitation</option>
            <option>Pain Management</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-primary-500 mb-2">
          Your Message *
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Please briefly describe the patient's condition and what kind of help you are looking for..."
          className="w-full border border-primary-200 bg-white px-4 py-3 text-primary-800 placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        icon={loading ? null : <Send size={16} />}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['12 Healing Path, Sector 44', 'New Delhi – 110044, India'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 12345 67890', '+91 11 2345 6789'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['care@neurovita.in', 'admissions@neurovita.in'],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Mon – Sat: 8:00 AM – 7:00 PM', 'Sunday: 9:00 AM – 2:00 PM'],
  },
]

export default function Contact() {
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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
          >
            Begin Your Path to <em className="text-primary-300">Recovery Today</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 text-lg max-w-xl"
          >
            Reach out to our team to book an appointment, ask a question, or find out how we can help. We typically respond within 24 hours.
          </motion.p>
        </Container>
      </section>

      {/* Contact section */}
      <Section bg="cream" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 bg-white p-8 md:p-12 shadow-sm border border-primary-50"
            >
              <h2 className="font-display text-3xl text-primary-800 mb-2">Book an Appointment</h2>
              <p className="text-primary-500 text-sm mb-8">Fill in the form and we'll be in touch shortly.</p>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 border border-primary-50 shadow-sm flex gap-5"
                >
                  <div className="w-11 h-11 bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-primary-400 mb-1">{info.label}</div>
                    {info.lines.map((line, j) => (
                      <div key={j} className="text-primary-700 text-sm">{line}</div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Emergency */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-primary-700 p-6 border border-primary-600"
              >
                <div className="font-mono text-[10px] tracking-widest uppercase text-primary-300 mb-2">24/7 Emergency</div>
                <div className="font-display text-2xl text-white mb-1">+91 98765 43210</div>
                <p className="text-primary-300 text-xs">For urgent rehabilitation needs or post-discharge concerns.</p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map placeholder */}
      <Section bg="sand" className="py-0">
        <div className="w-full h-80 bg-primary-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'linear-gradient(#38937d 1px, transparent 1px), linear-gradient(90deg, #38937d 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="relative text-center">
            <MapPin className="text-primary-600 mx-auto mb-3" size={36} />
            <p className="font-display text-2xl text-primary-700 mb-1">NeuroVita Rehabilitation Center</p>
            <p className="text-primary-500 text-sm">12 Healing Path, Sector 44, New Delhi</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary-600 text-white px-6 py-2.5 text-sm hover:bg-primary-700 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
