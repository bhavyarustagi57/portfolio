import { useEffect, useState } from 'react'
import Achievements from './components/Achievements'
import Background from './components/Background'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const initialTheme = () => {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [dark, setDark] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#080a0f' : '#f5f5f2')
  }, [dark])

  return <>
    <a className="skip-link" href="#home">Skip to content</a>
    <Background />
    <CustomCursor />
    <Navbar />
    <main className="page-shell"><div className="content-panel">
      <Hero dark={dark} onToggleTheme={() => setDark((value) => !value)} />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div></main>
  </>
}
