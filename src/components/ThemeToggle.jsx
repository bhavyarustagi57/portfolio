import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ dark, onToggle }) {
  return <button className="icon-button" type="button" onClick={onToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} aria-pressed={dark} data-cursor="button">{dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}</button>
}
