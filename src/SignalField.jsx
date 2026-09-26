import { useEffect, useRef } from 'react'

/** Soft thermal wash + slow signal pulse — not a spectrogram. */
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

    // Fixed "emitters" — pulse from these points like sensor pings
    const nodes = [
      { x: 0.78, y: 0.16, phase: 0, period: 4200 },
      { x: 0.18, y: 0.62, phase: 1.7, period: 5600 },
      { x: 0.62, y: 0.72, phase: 3.1, period: 6800 },
    ]

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
      const time = reduce ? 0 : t
      const breath = reduce ? 0.55 : 0.5 + 0.5 * Math.sin(time * 0.00055)

      // Primary thermal blob — slow breathe
      const r0 = Math.max(w, h) * (0.55 + breath * 0.12)
      const g0 = ctx.createRadialGradient(
        w * 0.72,
        h * 0.18,
        0,
        w * 0.58,
        h * 0.38,
        r0,
      )
      g0.addColorStop(0, `rgba(61, 206, 176, ${0.07 + breath * 0.06})`)
      g0.addColorStop(0.4, `rgba(40, 120, 110, ${0.03 + breath * 0.025})`)
      g0.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = g0
      ctx.fillRect(0, 0, w, h)

      // Secondary cooler pocket — opposite phase
      const breath2 = reduce ? 0.4 : 0.5 + 0.5 * Math.sin(time * 0.0004 + 2.2)
      const g1 = ctx.createRadialGradient(
        w * 0.12,
        h * 0.85,
        0,
        w * 0.28,
        h * 0.7,
        Math.max(w, h) * (0.35 + breath2 * 0.08),
      )
      g1.addColorStop(0, `rgba(45, 160, 150, ${0.04 + breath2 * 0.04})`)
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      // Expanding ping rings from emitters
      if (!reduce) {
        for (const node of nodes) {
          const nx = node.x * w
          const ny = node.y * h
          const cycle = ((time + node.phase * 1000) % node.period) / node.period
          // Soft core blink
          const core = Math.max(0, 1 - Math.abs(cycle - 0.08) / 0.08)
          if (core > 0) {
            ctx.beginPath()
            ctx.arc(nx, ny, 2.5 + core * 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(61, 206, 176, ${0.35 * core})`
            ctx.fill()
          }
          // Two staggered rings per cycle
          for (let i = 0; i < 2; i += 1) {
            const local = (cycle + i * 0.35) % 1
            if (local < 0.05) continue
            const radius = local * Math.min(w, h) * 0.28
            const alpha = (1 - local) * 0.18
            ctx.beginPath()
            ctx.arc(nx, ny, radius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(61, 206, 176, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Entropy grid — brightness rides the same breath
      const cell = 28
      const cols = Math.ceil(w / cell) + 1
      const rows = Math.ceil(h / cell) + 1
      const phase = reduce ? 0 : time * 0.00035
      const pulseBoost = 0.85 + breath * 0.35

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const n =
            Math.sin(x * 0.37 + phase) *
              Math.cos(y * 0.29 - phase * 0.7) *
              0.5 +
            0.5
          // Local ripple from nearest node
          let ripple = 0
          if (!reduce) {
            for (const node of nodes) {
              const dx = x * cell - node.x * w
              const dy = y * cell - node.y * h
              const dist = Math.hypot(dx, dy)
              const cycle =
                ((time + node.phase * 1000) % node.period) / node.period
              const ring = cycle * Math.min(w, h) * 0.28
              const band = 1 - Math.min(1, Math.abs(dist - ring) / 36)
              ripple = Math.max(ripple, band * (1 - cycle) * 0.45)
            }
          }
          const level = n * pulseBoost + ripple
          if (level < 0.62) continue
          const alpha = Math.min(0.45, (level - 0.62) * 0.28)
          ctx.fillStyle = `rgba(61, 206, 176, ${alpha})`
          const size = ripple > 0.2 ? 2.5 : 2
          ctx.fillRect(x * cell, y * cell, size, size)
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
