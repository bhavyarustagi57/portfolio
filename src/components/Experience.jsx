import { motion as Motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from './Section'
import { Stagger, staggerItem } from './motion/MotionPrimitives'

export default function Experience() {
  return <Section id="experience" eyebrow="01 / Journey" title="Experience">
    <Stagger className="timeline">
      <Motion.article variants={staggerItem} className="timeline-item">
        <div className="item-top"><h3>AirDawg Labs</h3><span className="meta-pill">Apr 2026 – May 2026</span></div>
        <div className="role-line"><strong>AI Systems Evaluation Intern</strong><span><MapPin size={12} /> India · Remote</span></div>
        <ul className="experience-points">
          <li>Designed Docker-based CLI benchmark tasks for AI coding agents across real-world software engineering workflows.</li>
          <li>Built reference solutions, automated test suites, and evaluation pipelines for reproducible correctness checks.</li>
          <li>Used structured testing, prompt engineering, failure analysis, and edge-case evaluation to improve benchmark reliability.</li>
        </ul>
      </Motion.article>
      <Motion.article variants={staggerItem} className="timeline-item">
        <div className="item-top"><h3>Newgen Software Technologies Limited</h3><span className="meta-pill">Jun 2026 – Present</span></div>
        <div className="role-line"><strong>AI Engineer Intern</strong><span><MapPin size={12} /> India · Remote</span></div>
        <ul className="experience-points">
          <li>Built enterprise semantic search across PDF, DOCX, and TXT documents using dense embeddings and MongoDB Atlas Vector Search.</li>
          <li>Engineered ingestion, extraction, semantic chunking, embedding generation, and source-aware retrieval pipelines.</li>
          <li>Implemented OCR, asynchronous processing, grounded answer generation, citation validation, and resilient fallback retrieval.</li>
        </ul>
      </Motion.article>
    </Stagger>
  </Section>
}
