import { FileDown, FolderOpen, Github, Linkedin, MapPin } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { KineticText, Parallax } from './motion/MotionPrimitives'
import { links } from '../data/content'

export default function Hero({ dark, onToggleTheme }) {
  const reduced = useReducedMotion()
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <Motion.div className="profile-card surface" initial={reduced ? false : { opacity: 0, y: 22, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
      <div className="identity-row">
        <Parallax distance={9}><div className="monogram" aria-hidden="true">BR</div></Parallax>
        <div className="identity-copy">
          <p className="availability"><span /> AI Systems · Agentic Engineering</p>
          <h1 id="hero-title"><KineticText>Bhavya Rustagi</KineticText></h1>
          <div className="hero-meta"><span>AI Engineer</span><i /><span><MapPin size={13} /> India</span></div>
        </div>
        <ThemeToggle dark={dark} onToggle={onToggleTheme} />
      </div>
      <div className="hero-actions">
        <a href="#projects" className="button primary">View projects <FolderOpen size={15} /></a>
        <a href={links.resume} className="button secondary" download>Resume <FileDown size={15} /></a>
        <a href={links.github} className="button icon-action" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
        <a href={links.linkedin} className="button icon-action" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
      </div>
    </Motion.div>
    <Motion.p className="intro" initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>I build production-oriented AI systems: agentic workflows, semantic retrieval, and full-stack products designed for reliable, grounded results.</Motion.p>
  </section>
}
