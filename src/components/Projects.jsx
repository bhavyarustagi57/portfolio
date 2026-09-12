import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { Reveal } from './motion/MotionPrimitives'

const slots = [
  { number: '01', title: 'Featured case study', note: 'Story and outcomes arriving in Phase 3', tone: 'violet' },
  { number: '02', title: 'AI product work', note: 'Project details to be verified', tone: 'blue' },
  { number: '03', title: 'Engineering work', note: 'A reserved showcase slot', tone: 'graphite' },
]

export default function Projects() {
  return <Section id="projects" eyebrow="03 / Selected" title="Projects"><Reveal><div className="project-rail" tabIndex="0" aria-label="Project showcase; scroll horizontally">{slots.map((slot) => <article className={`project-card surface ${slot.tone}`} key={slot.number} data-cursor="card"><div className="project-visual" aria-hidden="true"><span>{slot.number}</span><div className="project-lines" /></div><div className="project-copy"><div><h3>{slot.title}</h3><p>{slot.note}</p></div><ArrowUpRight size={18} aria-hidden="true" /></div></article>)}</div><p className="rail-hint">Horizontal showcase foundation · scroll or swipe</p></Reveal></Section>
}
