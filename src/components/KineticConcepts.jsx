import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { motionDuration, motionEase } from './motion/MotionPrimitives'

const concepts = ['AI Systems', 'Agentic Engineering', 'Semantic Search', 'Full-Stack AI']

export default function KineticConcepts() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return undefined
    const interval = window.setInterval(() => setActive((current) => (current + 1) % concepts.length), 3200)
    return () => window.clearInterval(interval)
  }, [reduced])

  return (
    <span className="kinetic-concepts">
      <span className="sr-only">AI Systems, Agentic Engineering, Semantic Search, and Full-Stack AI</span>
      <AnimatePresence initial={false} mode="wait">
        <Motion.span
          aria-hidden="true"
          className="kinetic-concept"
          key={reduced ? concepts[0] : concepts[active]}
          initial={reduced ? false : { opacity: 0, y: 6, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={reduced ? undefined : { opacity: 0, y: -6, filter: 'blur(3px)' }}
          transition={{ duration: reduced ? 0 : motionDuration.hover, ease: motionEase }}
        >
          {reduced ? concepts[0] : concepts[active]}
        </Motion.span>
      </AnimatePresence>
    </span>
  )
}
