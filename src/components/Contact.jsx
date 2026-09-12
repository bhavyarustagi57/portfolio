import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Section from './Section'
import { links } from '../data/content'
import { Reveal } from './motion/MotionPrimitives'

const contacts = [
  { label: 'Email', value: 'bhavyarustagi57@gmail.com', href: links.email, icon: Mail },
  { label: 'Phone', value: '+91 96436 00208', href: links.phone, icon: Phone },
  { label: 'GitHub', value: 'bhavyarustagi57', href: links.github, icon: Github, external: true },
  { label: 'LinkedIn', value: 'bhavya-rustagi', href: links.linkedin, icon: Linkedin, external: true },
]

export default function Contact() {
  return <Section id="contact" eyebrow="06 / Connect" title="Let’s talk">
    <Reveal>
      <div className="contact-card surface">
        <div className="contact-intro"><div className="contact-icon"><Mail size={21} /></div><div><h3>Building something with AI?</h3><p>Reach out about AI systems, semantic search, agentic workflows, or full-stack engineering.</p></div></div>
        <div className="contact-grid">{contacts.map(({ label, value, href, icon: Icon, external }) => <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="contact-link"><Icon size={16} /><span><small>{label}</small>{value}</span><ArrowUpRight size={14} /></a>)}</div>
      </div>
    </Reveal>
  </Section>
}
