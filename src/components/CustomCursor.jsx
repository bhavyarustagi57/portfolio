import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const position = { x: -100, y: -100, ringX: -100, ringY: -100 }
    let frame = null

    const renderRing = () => {
      position.ringX += (position.x - position.ringX) * 0.3
      position.ringY += (position.y - position.ringY) * 0.3
      ring.current?.style.setProperty('transform', `translate3d(${position.ringX}px, ${position.ringY}px, 0)`)
      const settled = Math.abs(position.x - position.ringX) < 0.1 && Math.abs(position.y - position.ringY) < 0.1
      frame = settled ? null : window.requestAnimationFrame(renderRing)
    }

    const onMove = (event) => {
      position.x = event.clientX
      position.y = event.clientY
      dot.current?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0)`)
      document.body.dataset.cursorVisible = 'true'
      if (frame === null) frame = window.requestAnimationFrame(renderRing)
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
    const resetCursor = () => {
      document.body.dataset.cursorState = 'default'
      if (label.current) label.current.textContent = ''
    }
    const hideCursor = () => {
      resetCursor()
      document.body.dataset.cursorVisible = 'false'
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointerup', onUp)
    document.addEventListener('pointercancel', resetCursor)
    document.documentElement.addEventListener('pointerleave', hideCursor)
    window.addEventListener('blur', hideCursor)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', resetCursor)
      document.documentElement.removeEventListener('pointerleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
      if (frame !== null) window.cancelAnimationFrame(frame)
      delete document.body.dataset.cursorState
      delete document.body.dataset.cursorVisible
    }
  }, [])

  return <div className="cursor-layer" aria-hidden="true"><span ref={ring} className="cursor-ring"><span ref={label} className="cursor-label" /></span><span ref={dot} className="cursor-dot" /></div>
}
