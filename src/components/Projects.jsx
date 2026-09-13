import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import { Parallax, staggerContainer, staggerItem } from './motion/MotionPrimitives'

const projects = [
  {
    number: '01',
    label: 'Flagship system',
    title: 'GitHub Issue → PR Autonomous Coding Agent',
    summary: 'A production-oriented agent that turns bounded GitHub issues into reviewed pull requests with explicit human control.',
    workflow: ['Issue', 'Repository Analysis', 'Structured Plan', 'Sandboxed Implementation', 'Verification', 'Repair', 'Human Approval', 'Pull Request'],
    capabilities: [
      'Durable FastAPI orchestration with PostgreSQL, Redis, Dramatiq, and SSE',
      'Retries, cancellation, and immutable repository context',
      'GitHub App authorization with isolated Docker execution',
      'Human approval before every pull request',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Dramatiq', 'SSE', 'Docker', 'OpenAI'],
    live: 'https://github-issue-to-pr-agent-web.vercel.app/',
    tone: 'violet',
    featured: true,
  },
  {
    number: '02',
    label: 'Semantic retrieval',
    title: 'Contexta',
    summary: 'An enterprise semantic search system for resilient document ingestion, grounded answers, and verifiable citations.',
    workflow: ['Documents', 'Ingestion', 'OCR', 'Semantic Retrieval', 'Grounded Answer', 'Citation Validation'],
    capabilities: [
      'Asynchronous ingestion with OCR fallback',
      'Source-aware, multi-tier semantic retrieval',
      'MCP server with approval-gated filesystem tools',
      'Auditable agent interactions and citation validation',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB Atlas', 'Vector Search', 'MCP'],
    github: 'https://github.com/bhavyarustagi57/CONTEXTA',
    live: 'https://contexta-b30f.onrender.com/',
    tone: 'blue',
  },
]

export default function Projects() {
  const rail = useRef(null)
  const frame = useRef(null)
  const activeRef = useRef(0)
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  const updateActive = () => {
    if (!rail.current) return
    const cards = [...rail.current.children]
    const left = rail.current.scrollLeft
    const nearest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - left) < Math.abs(cards[best].offsetLeft - left) ? index : best, 0)
    if (activeRef.current !== nearest) {
      activeRef.current = nearest
      setActive(nearest)
    }
  }

  useEffect(() => () => window.cancelAnimationFrame(frame.current), [])

  const onScroll = () => {
    window.cancelAnimationFrame(frame.current)
    frame.current = window.requestAnimationFrame(updateActive)
  }

  const goTo = (index) => {
    const card = rail.current?.children[index]
    if (!card) return
    rail.current.scrollTo({ left: card.offsetLeft, behavior: reduced ? 'auto' : 'smooth' })
    activeRef.current = index
    setActive(index)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(Math.min(active + 1, projects.length - 1))
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(Math.max(active - 1, 0))
    }
  }

  return <Section id="projects" eyebrow="03 / Selected" title="Projects" className="projects-section">
    <div className="project-toolbar">
      <p>Two production-minded systems, mapped from input to verified outcome.</p>
      <div className="project-controls" aria-label="Project navigation">
        <span aria-live="polite"><strong>{String(active + 1).padStart(2, '0')}</strong> / 02</span>
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous project"><ArrowLeft size={15} /></button>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === projects.length - 1} aria-label="Next project"><ArrowRight size={15} /></button>
      </div>
    </div>
    <Motion.div
      className="project-rail"
      ref={rail}
      tabIndex="0"
      aria-label="Project showcase; scroll horizontally"
      data-cursor="drag"
      variants={reduced ? undefined : staggerContainer}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      onScroll={onScroll}
      onKeyDown={onKeyDown}
    >
      {projects.map((project) => <Motion.article className={`project-card surface ${project.tone}${project.featured ? ' featured' : ''}`} key={project.title} variants={reduced ? undefined : staggerItem} data-cursor="project">
        <Parallax className="project-visual" distance={project.featured ? 8 : 6}>
          <div className="project-visual-copy" aria-hidden="true">
            <span>{project.number}</span>
            <small>{project.label}</small>
          </div>
          <div className="project-system-map" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </Parallax>
        <div className="project-body">
          <div className="project-kicker"><span>{project.number}</span>{project.label}</div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <Motion.div className="workflow" role="list" aria-label={`${project.title} workflow`} variants={reduced ? undefined : staggerContainer} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
            {project.workflow.map((step, index) => <Motion.div className="workflow-step" role="listitem" variants={reduced ? undefined : staggerItem} key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></Motion.div>)}
          </Motion.div>
          <div className="project-details">
            <div>
              <h4>Key technology</h4>
              <div className="stack-list" aria-label={`${project.title} technology stack`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div>
              <h4>System capabilities</h4>
              <ul className="capability-list">{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="project-links">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>}
            <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live App</a>
          </div>
        </div>
      </Motion.article>)}
    </Motion.div>
    <div className="project-progress" aria-label="Choose a project">
      {projects.map((project, index) => <button type="button" key={project.title} className={index === active ? 'active' : ''} onClick={() => goTo(index)} aria-label={`Show ${project.title}`} aria-current={index === active ? 'true' : undefined} />)}
    </div>
    <p className="rail-hint">Scroll, swipe, or use the arrow controls</p>
  </Section>
}
