import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import { Reveal } from './motion/MotionPrimitives'

const projects = [
  {
    number: '01',
    title: 'GitHub Issue → PR Autonomous Coding Agent',
    summary: 'Turns bounded GitHub issues into reviewed pull requests through repository analysis, structured planning, sandboxed implementation, verification, repair, and human approval.',
    detail: 'FastAPI, PostgreSQL, Redis, Dramatiq, SSE, and Docker provide durable orchestration, retries, cancellation, immutable repository context, GitHub App authorization, and secure execution.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'OpenAI'],
    live: 'https://github-issue-to-pr-agent-web.vercel.app/',
    tone: 'violet',
  },
  {
    number: '02',
    title: 'Contexta',
    summary: 'Enterprise semantic search with source-aware retrieval, OCR fallback, asynchronous ingestion, grounded AI answers, citation validation, and resilient multi-tier retrieval.',
    detail: 'Includes an MCP server and approval workflow with controlled filesystem tools, policy evaluation, and backend APIs for secure, auditable agent interactions.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB Atlas', 'Vector Search'],
    github: 'https://github.com/bhavyarustagi57/CONTEXTA',
    live: 'https://contexta-b30f.onrender.com/',
    tone: 'blue',
  },
]

export default function Projects() {
  return <Section id="projects" eyebrow="03 / Selected" title="Projects">
    <Reveal>
      <div className="project-rail" tabIndex="0" aria-label="Project showcase; scroll horizontally">
        {projects.map((project) => <article className={`project-card surface ${project.tone}`} key={project.title} data-cursor="card">
          <div className="project-visual" aria-hidden="true"><span>{project.number}</span><div className="project-lines" /></div>
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="project-detail">{project.detail}</p>
            <div className="stack-list" aria-label={`${project.title} technology stack`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>}<a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live</a></div>
          </div>
        </article>)}
      </div>
      <p className="rail-hint">Scroll or swipe to explore both projects</p>
    </Reveal>
  </Section>
}
