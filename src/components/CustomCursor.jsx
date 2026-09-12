import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const onMove = (event) => {
      dot.current?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0)`)
      ring.current?.animate({ transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)` }, { duration: 180, fill: 'forwards' })
    }
    const setCursorState = (target, pressed = false) => {
      const interactive = target?.closest('a, button, [data-cursor]')
      const state = pressed && target?.closest('[data-cursor="drag"]')
        ? 'dragging'
        : interactive?.dataset.cursor || (interactive ? 'action' : 'default')
      document.body.dataset.cursorState = state
      if (label.current) label.current.textContent = state === 'project' ? 'View' : state === 'drag' || state === 'dragging' ? 'Scroll' : ''
    }
    const onOver = (event) => setCursorState(event.target)
    const onDown = (event) => setCursorState(event.target, true)
    const onUp = (event) => setCursorState(event.target)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      delete document.body.dataset.cursorState
    }
  }, [])

  return <div className="cursor-layer" aria-hidden="true"><span ref={ring} className="cursor-ring"><span ref={label} className="cursor-label" /></span><span ref={dot} className="cursor-dot" /></div>
}
