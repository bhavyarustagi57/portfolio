import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return <footer><p>© {new Date().getFullYear()} Bhavya Rustagi</p><button onClick={backToTop} data-cursor="button">Back to top <ArrowUp size={14} /></button></footer>
}
