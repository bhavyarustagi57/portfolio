import { Award, Code2, Gauge, Trophy } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import Section from './Section'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

export default function Achievements() {
  const items = [
    { icon: Trophy, title: 'Global Rank 294', text: 'CodeChef Starters 225 · Rated' },
    { icon: Code2, title: '1000+ problems', text: 'LeetCode, Codeforces, AtCoder, and CSES' },
    { icon: Gauge, title: '1760+ rating', text: 'LeetCode competitive programming rating' },
    { icon: Award, title: '2★ CodeChef', text: 'CodeChef competitive programming rating' },
  ]
  return <Section id="achievements" eyebrow="04 / Highlights" title="Achievements"><Stagger className="achievement-grid">{items.map(({ icon: Icon, title, text }) => <Motion.article variants={staggerItem} className="mini-card surface hover-lift" key={title} data-cursor="card"><Icon size={18} /><h3>{title}</h3><p>{text}</p></Motion.article>)}</Stagger></Section>
}
