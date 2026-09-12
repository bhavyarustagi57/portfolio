import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { Reveal } from './motion/MotionPrimitives'

export default function Education() {
  return <Section id="education" eyebrow="05 / Learning" title="Education"><Reveal><article className="education-card surface hover-lift" data-cursor="card"><div className="school-mark"><GraduationCap size={21} /></div><div><h3>Education details</h3><p>Institution, program, and dates will be added from verified information in Phase 2.</p></div><span className="meta-pill">Profile pending</span></article></Reveal></Section>
}
