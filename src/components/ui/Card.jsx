import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  border = false,
  ...props
}) {
  const base = `bg-white ${padding ? 'p-6 md:p-8' : ''} ${border ? 'border border-primary-100' : ''} shadow-sm`
  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${base} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
