import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { KineticText, Parallax } from './motion/MotionPrimitives'

export default function Hero({ dark, onToggleTheme }) {
  const reduced = useReducedMotion()
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <Motion.div className="profile-card surface" initial={reduced ? false : { opacity: 0, y: 22, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
      <div className="identity-row">
        <Parallax distance={9}><div className="monogram" aria-hidden="true">BR</div></Parallax>
        <div className="identity-copy">
          <p className="availability"><span /> Open to meaningful work</p>
          <h1 id="hero-title"><KineticText>Bhavya Rustagi</KineticText></h1>
          <div className="hero-meta"><span>AI Engineer</span><i /><span><MapPin size={13} /> India</span></div>
        </div>
        <ThemeToggle dark={dark} onToggle={onToggleTheme} />
      </div>
      <div className="hero-actions">
        <a href="#contact" className="button primary">Start a conversation <Sparkles size={15} /></a>
        <a href="#projects" className="button secondary">Explore work <ArrowDown size={15} /></a>
      </div>
    </Motion.div>
    <Motion.p className="intro" initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>I build thoughtful AI products and dependable software systems. Detailed experience, work, and credentials will be added in the next phases.</Motion.p>
  </section>
}
