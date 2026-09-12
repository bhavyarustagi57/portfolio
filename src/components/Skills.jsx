import { BrainCircuit, Braces, Database, GitBranch, Orbit, Workflow } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import Section from './Section'
import { skillGroups } from '../data/content'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

const icons = [Braces, BrainCircuit, Database, Orbit, Workflow, GitBranch]

export default function Skills() {
  let iconIndex = 0
  return <Section id="skills" eyebrow="02 / Toolkit" title="Skills">
    <Stagger className="skill-surface surface">
      <p className="micro-note">Built to expand in Phase 2</p>
      {skillGroups.map((group) => <Motion.div variants={staggerItem} className="skill-group" key={group.label}><span className="skill-label">{group.label}</span><div className="chips">{group.values.map((skill) => { const Icon = icons[iconIndex++ % icons.length]; return <span className="chip hover-lift" key={skill} data-cursor="card"><Icon size={15} />{skill}</span> })}</div></Motion.div>)}
    </Stagger>
  </Section>
}
