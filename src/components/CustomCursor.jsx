import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const onMove = (event) => {
      dot.current?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0)`)
      ring.current?.animate({ transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)` }, { duration: 180, fill: 'forwards' })
    }
    const onOver = (event) => document.body.classList.toggle('cursor-active', Boolean(event.target.closest('a, button, [data-cursor]')))
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerover', onOver) }
  }, [])

  return <div className="cursor-layer" aria-hidden="true"><span ref={ring} className="cursor-ring" /><span ref={dot} className="cursor-dot" /></div>
}
