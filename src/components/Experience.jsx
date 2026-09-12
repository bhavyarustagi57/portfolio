import { motion as Motion } from 'framer-motion'
import Section from './Section'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

export default function Experience() {
  return <Section id="experience" eyebrow="01 / Journey" title="Experience">
    <Stagger className="timeline">
      <Motion.article variants={staggerItem} className="timeline-item"><div className="item-top"><h3>Experience profile</h3><span className="meta-pill">Phase 2</span></div><p className="muted">Roles, responsibilities, and impact will be populated from verified resume details.</p></Motion.article>
      <Motion.article variants={staggerItem} className="timeline-item subdued"><div className="item-top"><h3>Earlier work</h3><span className="meta-pill">To be added</span></div><p className="muted">Reserved for Bhavya’s additional professional history.</p></Motion.article>
    </Stagger>
  </Section>
}
