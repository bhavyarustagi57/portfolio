import { useEffect, useState } from 'react'
import { Award, BriefcaseBusiness, Folder, GraduationCap, House, Menu, MessageCircle, Sparkles, X } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { navigation } from '../data/content'

const icons = {
  home: House,
  experience: BriefcaseBusiness,
  skills: Sparkles,
  projects: Folder,
  achievements: Award,
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
      <button className={open ? 'nav-icon active' : 'nav-icon'} onClick={() => setOpen(!open)} aria-label={`${open ? 'Close' : 'Open'} navigation menu`} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}<small>Menu</small></button>
    </nav>
    {open && <div className="mobile-menu">{navigation.map(({ id, label }) => <button key={id} onClick={() => visit(id)} className={active === id ? 'active' : ''}>{label}</button>)}</div>}
  </>
}
