import { motion } from 'framer-motion'
import { Quote, BookOpen, Award, Globe, Mail } from 'lucide-react'
import { PageWrapper, Section, Container } from '../components/ui/Section'
import Button from '../components/ui/Button'
import { team } from '../data'

const director = team[0]

const publications = [
  'Neuroplasticity and Functional Recovery Post-Stroke — Indian Journal of Neurology, 2021',
  'Outcomes of Robotic-Assisted Gait Training in TBI Patients — Neurorehabilitation & Neural Repair, 2019',
  'Multidisciplinary Rehabilitation in Parkinson\'s Disease — Movement Disorders Clinical Practice, 2018',
  'Quality of Life Outcomes in Spinal Cord Injury Rehabilitation — Spinal Cord Series and Cases, 2017',
]

const timeline = [
  { year: '2002', event: 'Founded NeuroVita Rehabilitation Center in New Delhi' },
  { year: '1999', event: 'Fellowship in Neurorehabilitation, Royal London Hospital, UK' },
  { year: '1997', event: 'DNB Neurology, National Board of Examinations, India' },
  { year: '1994', event: 'MD, All India Institute of Medical Sciences (AIIMS), New Delhi' },
  { year: '1990', event: 'MBBS, Maulana Azad Medical College, New Delhi' },
]

export default function Director() {
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
            Our Director
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-4"
          >
            {director.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary-300 tracking-wider"
          >
            {director.role} · {director.specialty}
          </motion.p>
        </Container>
      </section>

      {/* Profile */}
      <Section bg="cream" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left - portrait + info */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full aspect-square bg-gradient-to-br from-primary-300 to-primary-700 flex items-center justify-center mb-8"
              >
                <span className="font-display text-[120px] text-white/40">{director.name[0]}</span>
              </motion.div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary-400 pl-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary-400 mb-1">Experience</div>
                  <div className="font-display text-2xl text-primary-800">{director.experience}</div>
                </div>
                <div className="border-l-2 border-primary-400 pl-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary-400 mb-2">Qualifications</div>
                  {director.qualifications.map((q) => (
                    <div key={q} className="text-sm text-primary-600">• {q}</div>
                  ))}
                </div>
                <Button href="mailto:dr.mehta@neurovita.in" variant="primary" className="w-full justify-center" icon={<Mail size={16} />}>
                  Contact Dr. Mehta
                </Button>
              </div>
            </div>

            {/* Right - content */}
            <div className="lg:col-span-2">
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-700 p-8 mb-10 relative"
              >
                <Quote className="text-primary-400 mb-4" size={32} />
                <p className="font-display text-xl text-white leading-relaxed italic">
                  "Rehabilitation is not merely about recovering function — it is about reclaiming a life worth living. Every patient deserves our full attention, our best science, and our deepest compassion."
                </p>
                <div className="mt-4 font-mono text-xs text-primary-300 tracking-wider">— Dr. Priya Mehta</div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-3xl text-primary-800 mb-6"
              >
                Biography
              </motion.h2>
              <div className="space-y-4 text-primary-600 leading-relaxed">
                <p>Dr. Priya Mehta is a pioneer in neurorehabilitation medicine in India, with over 22 years of clinical experience treating patients with complex neurological conditions. After completing her MD from AIIMS New Delhi and DNB Neurology, she pursued advanced fellowship training at the Royal London Hospital, where she specialised in neuroplasticity-based rehabilitation protocols.</p>
                <p>On returning to India, Dr. Mehta recognised the critical gap in quality rehabilitation services and founded NeuroVita in 2002 — a centre where international standards would meet the specific needs of the Indian patient population. Under her leadership, NeuroVita has grown into a 50-bed comprehensive rehabilitation facility accredited by NABH and ISO 9001:2015.</p>
                <p>Dr. Mehta is an active researcher and has published extensively in peer-reviewed journals on topics ranging from stroke recovery to robotic rehabilitation. She has been invited to speak at conferences across India, the UK, and the USA, and serves on the editorial board of the Indian Journal of Physical Medicine and Rehabilitation.</p>
                <p>She is passionate about training the next generation of rehabilitation professionals and serves as a visiting faculty member at AIIMS Delhi and the Indian Spinal Injuries Centre.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section bg="sand" className="py-20">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl text-primary-800 mb-12 text-center">
            Academic & Professional Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0 text-right">
                  <span className="font-mono text-primary-500 font-medium">{item.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-500 mt-1" />
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-primary-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Publications */}
      <Section bg="white" className="py-20">
        <Container>
          <h2 className="font-display text-3xl text-primary-800 mb-10 flex items-center gap-3">
            <BookOpen className="text-primary-500" size={28} />
            Selected Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-primary-300 pl-6 py-3 hover:border-primary-500 transition-colors"
              >
                <p className="text-primary-600 text-sm">{pub}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  )
}
