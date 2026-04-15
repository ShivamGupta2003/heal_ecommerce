import { motion } from 'framer-motion'

export function Section({ children, className = '', id, bg = 'cream' }) {
  const bgs = {
    cream: 'bg-cream',
    white: 'bg-white',
    sand: 'bg-sand',
    primary: 'bg-primary-700',
    dark: 'bg-primary-900',
  }

  return (
    <section id={id} className={`${bgs[bg]} ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({ label, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-4 px-3 py-1 border ${
            light
              ? 'text-primary-200 border-primary-400'
              : 'text-primary-600 border-primary-200 bg-primary-50'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? 'text-cream' : 'text-primary-900'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
