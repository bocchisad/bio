import { useEffect, useRef } from 'react'

/** Soft thermal / entropy wash — not a spectrogram clone. */
export default function SignalField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let t = 0
    let w = 0
    let h = 0
    let dpr = 1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const g = ctx.createRadialGradient(
        w * 0.72,
        h * 0.18,
        0,
        w * 0.55,
        h * 0.4,
        Math.max(w, h) * 0.75,
      )
      g.addColorStop(0, 'rgba(61, 206, 176, 0.09)')
      g.addColorStop(0.45, 'rgba(40, 120, 110, 0.04)')
      g.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const cell = 28
      const cols = Math.ceil(w / cell) + 1
      const rows = Math.ceil(h / cell) + 1
      const phase = reduce ? 0 : t * 0.00035

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const n =
            Math.sin(x * 0.37 + phase) *
              Math.cos(y * 0.29 - phase * 0.7) *
              0.5 +
            0.5
          if (n < 0.62) continue
          const alpha = (n - 0.62) * 0.22
          ctx.fillStyle = `rgba(61, 206, 176, ${alpha})`
          ctx.fillRect(x * cell, y * cell, 2, 2)
        }
      }

      if (!reduce) {
        t += 16
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="signal-field" aria-hidden="true" />
}
