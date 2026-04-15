import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'
import { guidelines, faqs } from '../data'
import * as Icons from 'lucide-react'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-primary-100"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus:outline-none group"
      >
        <span className="font-display text-lg text-primary-800 group-hover:text-primary-600 transition-colors">
          {faq.q}
        </span>
        <span className="flex-shrink-0 text-primary-500">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-primary-600 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PatientGuidelines() {
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
            Patient Information
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl"
          >
            Everything You Need to Know Before You <em className="text-primary-300">Arrive</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 text-lg max-w-xl"
          >
            We want your experience at NeuroVita to be as smooth and stress-free as possible. Here is all the information you need from admission to discharge.
          </motion.p>
        </Container>
      </section>

      {/* Guidelines */}
      <Section bg="cream" className="py-20 md:py-28">
        <Container>
          <SectionHeader
            label="Patient Guidelines"
            title="Your Step-by-Step Guide"
            subtitle="From your first call to your final discharge, here is what to expect at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((g, i) => {
              const Icon = Icons[g.icon] || Icons.ClipboardList
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 border border-primary-50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-primary-600" />
                    </div>
                    <h3 className="font-display text-2xl text-primary-800">{g.category}</h3>
                  </div>
                  <ol className="space-y-3">
                    {g.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white text-xs font-mono flex items-center justify-center mt-0.5">
                          {j + 1}
                        </span>
                        <span className="text-primary-600 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Visiting Hours & Policies */}
      <Section bg="sand" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl text-primary-800 mb-8">Visiting Hours & Policies</h2>
              <div className="space-y-4">
                {[
                  { label: 'General Visiting Hours', value: '10:00 AM – 7:00 PM (Daily)' },
                  { label: 'ICU / High Dependency', value: '11:00 AM – 1:00 PM & 5:00 PM – 7:00 PM' },
                  { label: 'Paediatric Ward', value: 'One parent may stay 24/7' },
                  { label: 'Maximum Visitors', value: '2 visitors at a time per patient' },
                  { label: 'Children Under 12', value: 'Not permitted in clinical areas' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex justify-between items-start border-b border-primary-100 pb-4"
                  >
                    <span className="text-primary-600 text-sm">{item.label}</span>
                    <span className="text-primary-800 text-sm font-medium text-right max-w-[55%]">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-primary-800 mb-8">Patient Rights & Responsibilities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg text-primary-700 mb-3">Your Rights</h3>
                  <ul className="space-y-2">
                    {[
                      'To be treated with dignity and respect',
                      'To receive complete information about your diagnosis and treatment',
                      'To participate in decisions about your care',
                      'To privacy and confidentiality of your medical records',
                      'To refuse treatment and understand the consequences',
                    ].map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-primary-600">
                        <span className="text-primary-400 mt-1">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg text-primary-700 mb-3">Your Responsibilities</h3>
                  <ul className="space-y-2">
                    {[
                      'Provide accurate and complete health information',
                      'Follow the agreed treatment plan and attend all sessions',
                      'Treat staff and fellow patients with respect',
                      'Notify staff immediately if your condition changes',
                      'Settle financial obligations in a timely manner',
                    ].map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-primary-600">
                        <span className="text-primary-400 mt-1">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="white" className="py-20">
        <Container>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the questions we hear most often from patients and families."
          />
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-primary-500 mb-4">Still have questions? We're here to help.</p>
            <Button to="/contact" variant="primary">Contact Our Team</Button>
          </div>
        </Container>
      </Section>

      {/* Insurance */}
      <Section bg="primary" className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl text-white mb-3">Insurance & Payment Options</h2>
              <p className="text-primary-200 max-w-lg">
                We work with all major insurance providers and offer flexible payment plans. Our billing team is available to guide you through the process.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Religare', 'Star Health', 'Max Bupa', 'HDFC Ergo', 'Bajaj Allianz', 'CGHS'].map((ins) => (
                <span key={ins} className="bg-primary-700 border border-primary-600 text-primary-200 px-4 py-2 text-sm">
                  {ins}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  )
}
