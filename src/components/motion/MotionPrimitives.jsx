import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const motionEase = [0.22, 1, 0.36, 1]

export const motionDuration = {
  fast: 0.16,
  hover: 0.22,
  reveal: 0.56,
}

export function Reveal({ children, className = '', delay = 0, amount = 0.12 }) {
  const reduced = useReducedMotion()
  return (
    <Motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0 : motionDuration.reveal, delay: reduced ? 0 : delay, ease: motionEase }}
    >
      {children}
    </Motion.div>
  )
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065, delayChildren: 0.04 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.46, ease: motionEase } },
}

export function Stagger({ children, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <Motion.div className={className} variants={reduced ? undefined : staggerContainer} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      {children}
    </Motion.div>
  )
}

export function Parallax({ children, className = '', distance = 12 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [distance, -distance])
  return <Motion.div ref={ref} className={className} style={{ y }}>{children}</Motion.div>
}

export function KineticText({ children, className = '' }) {
  const reduced = useReducedMotion()
  return <Motion.span className={className} initial={reduced ? false : { opacity: 0, y: 6, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: reduced ? 0 : 0.58, ease: motionEase }}>{children}</Motion.span>
}
