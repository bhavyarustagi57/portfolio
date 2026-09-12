import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  const reduced = useReducedMotion()
  return (
    <Motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0 : 0.72, delay: reduced ? 0 : delay, ease }}
    >
      {children}
    </Motion.div>
  )
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease } },
}

export function Stagger({ children, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <Motion.div className={className} variants={reduced ? undefined : staggerContainer} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      {children}
    </Motion.div>
  )
}

export function Parallax({ children, className = '', distance = 20 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [distance, -distance])
  return <Motion.div ref={ref} className={className} style={{ y }}>{children}</Motion.div>
}

export function KineticText({ children, className = '' }) {
  const reduced = useReducedMotion()
  return <Motion.span className={className} initial={reduced ? false : { opacity: 0, letterSpacing: '0.08em' }} animate={{ opacity: 1, letterSpacing: '-0.04em' }} transition={{ duration: reduced ? 0 : 0.9, ease }}>{children}</Motion.span>
}
