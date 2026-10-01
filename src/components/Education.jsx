import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { Reveal } from './motion/MotionPrimitives'

export default function Education() {
  return <Section id="education" eyebrow="04 / Learning" title="Education"><Reveal><article className="education-card surface hover-lift" data-cursor="card"><div className="school-mark"><GraduationCap size={21} /></div><div><h3>Maharaja Surajmal Institute of Technology</h3><p>B.Tech in Information Technology · CGPA 7.94</p><p className="education-location">Delhi, India</p></div><span className="meta-pill">2023 – Present</span></article></Reveal></Section>
}
