import { Reveal } from './motion/MotionPrimitives'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <Reveal><div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2 id={`${id}-title`}>{title}</h2></div></Reveal>
      {children}
    </section>
  )
}
