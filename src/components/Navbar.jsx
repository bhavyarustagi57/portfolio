import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Folder, GraduationCap, House, Menu, MessageCircle, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { navigation } from '../data/content'
import { motionEase } from './motion/MotionPrimitives'

const icons = {
  home: House,
  experience: BriefcaseBusiness,
  skills: Sparkles,
  projects: Folder,
  education: GraduationCap,
  contact: MessageCircle,
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const nodes = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -60%', threshold: 0.05 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const visit = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
    setActive(id)
    setOpen(false)
  }

  const NavButton = ({ id, label, compact = false }) => {
    const Icon = icons[id]
    return <button className={active === id ? 'nav-icon active' : 'nav-icon'} onClick={() => visit(id)} aria-label={label} aria-current={active === id ? 'location' : undefined}><Icon size={17} />{compact ? <small>{label}</small> : <span>{label}</span>}</button>
  }

  return <>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => <NavButton key={item.id} {...item} />)}
    </nav>
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navigation.filter(({ id }) => ['home', 'projects', 'contact'].includes(id)).map((item) => <NavButton key={item.id} {...item} compact />)}
      <button className={open ? 'nav-icon active' : 'nav-icon'} onClick={() => setOpen(!open)} aria-label={`${open ? 'Close' : 'Open'} navigation menu`} aria-expanded={open} aria-controls="mobile-navigation-menu">{open ? <X size={18} /> : <Menu size={18} />}<small>Menu</small></button>
    </nav>
    <AnimatePresence>
      {open && <Motion.div id="mobile-navigation-menu" className="mobile-menu" aria-label="Mobile navigation menu" initial={reduced ? false : { opacity: 0, y: 8, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduced ? undefined : { opacity: 0, y: 5, scale: 0.99 }} transition={{ duration: reduced ? 0 : 0.18, ease: motionEase }}>{navigation.map(({ id, label }) => <button key={id} onClick={() => visit(id)} className={active === id ? 'active' : ''}>{label}</button>)}</Motion.div>}
    </AnimatePresence>
  </>
}
