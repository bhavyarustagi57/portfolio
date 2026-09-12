import { Award, CircleDot, Trophy } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import Section from './Section'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

export default function Achievements() {
  const items = [{ icon: Trophy, title: 'Recognition', text: 'Verified achievements will appear here.' }, { icon: Award, title: 'Milestones', text: 'Reserved for meaningful professional milestones.' }, { icon: CircleDot, title: 'Practice', text: 'A place for validated learning progress.' }]
  return <Section id="achievements" eyebrow="04 / Highlights" title="Achievements"><Stagger className="achievement-grid">{items.map(({ icon: Icon, title, text }) => <Motion.article variants={staggerItem} className="mini-card surface hover-lift" key={title} data-cursor="card"><Icon size={18} /><h3>{title}</h3><p>{text}</p></Motion.article>)}</Stagger></Section>
}
