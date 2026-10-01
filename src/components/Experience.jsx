import { motion as Motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from './Section'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

export default function Experience() {
  return <Section id="experience" eyebrow="01 / Journey" title="Experience">
    <Stagger className="timeline">
      <Motion.article variants={staggerItem} className="timeline-item">
        <div className="item-top"><h3>Newgen Software Technologies Limited</h3><span className="meta-pill">June 2026 – September 2026</span></div>
        <div className="role-line"><strong>AI Engineer Intern</strong><span><MapPin size={12} /> India · Remote</span></div>
        <ul className="experience-points">
          <li>Built an enterprise semantic search platform enabling natural-language retrieval across PDF, DOCX, and TXT documents using dense vector embeddings and semantic similarity search.</li>
          <li>Engineered document ingestion, text extraction, semantic chunking, embedding generation, and MongoDB Atlas Vector Search pipelines for context-aware retrieval with source attribution.</li>
          <li>Implemented OCR asynchronous document processing, grounded AI answer generation, citation validation, and resilient fallback retrieval for reliable enterprise document search.</li>
        </ul>
      </Motion.article>
      <Motion.article variants={staggerItem} className="timeline-item">
        <div className="item-top"><h3>AirDawg Labs</h3><span className="meta-pill">April 2026 – May 2026</span></div>
        <div className="role-line"><strong>AI Systems Evaluation Intern</strong><span><MapPin size={12} /> India · Remote</span></div>
        <ul className="experience-points">
          <li>Designed Docker-based CLI benchmark tasks to evaluate AI coding agents across real-world software engineering workflows, ensuring reliable execution, reproducible testing, and consistent benchmark results.</li>
          <li>Built reference solutions, automated test suites, and evaluation pipelines using Docker, Cursor, and AI-assisted development workflows to validate correctness, scalability, and benchmark consistency.</li>
          <li>Improved benchmark reliability through structured testing, prompt engineering, and failure analysis of LLM agents, identifying edge cases, improving evaluation quality, and reducing inconsistent agent behavior.</li>
        </ul>
      </Motion.article>
    </Stagger>
  </Section>
}
