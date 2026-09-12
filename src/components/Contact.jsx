import { ArrowUpRight, Mail } from 'lucide-react'
import Section from './Section'
import { Reveal } from './motion/MotionPrimitives'

export default function Contact() {
  return <Section id="contact" eyebrow="06 / Connect" title="Let’s talk"><Reveal><div className="contact-card surface"><div className="contact-icon"><Mail size={21} /></div><div><h3>Have something thoughtful in mind?</h3><p>Bhavya’s verified contact links will be connected in a later phase.</p></div><span className="contact-status">Contact details soon <ArrowUpRight size={15} /></span></div></Reveal></Section>
}
