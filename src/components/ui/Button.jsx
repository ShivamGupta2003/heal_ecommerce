import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const base = 'inline-flex items-center gap-2 font-body font-500 rounded-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-primary-600 text-cream hover:bg-primary-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-cream',
    ghost: 'bg-transparent text-primary-600 hover:text-primary-800 hover:bg-primary-50',
    white: 'bg-cream text-primary-700 hover:bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
    accent: 'bg-accent-400 text-primary-900 hover:bg-accent-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={classes} {...props}>{content}</Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} className={classes} {...props}>{content}</a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  )
}
