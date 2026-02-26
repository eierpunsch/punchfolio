import { useState, useEffect, useRef } from 'react'

let idCounter = 0

const PawSVG = () => (
  <svg viewBox="0 0 40 44" width="26" height="26" fill="rgba(51,51,51,0.18)">
    <ellipse cx="20" cy="30" rx="9" ry="8" />
    <ellipse cx="9"  cy="19" rx="4.5" ry="3.8" transform="rotate(-20 9 19)" />
    <ellipse cx="17" cy="14" rx="4.5" ry="3.8" transform="rotate(-5 17 14)" />
    <ellipse cx="25" cy="14" rx="4.5" ry="3.8" transform="rotate(5 25 14)" />
    <ellipse cx="32" cy="19" rx="4.5" ry="3.8" transform="rotate(20 32 19)" />
  </svg>
)

export default function PawPrints() {
  const [paws, setPaws] = useState([])
  const lastPx = useRef(null)
  const stepCount = useRef(0)
  const MIN_DIST = 55

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = e.clientX
      const cy = e.clientY

      if (!lastPx.current) {
        lastPx.current = { cx, cy }
        return
      }

      const dx = cx - lastPx.current.cx
      const dy = cy - lastPx.current.cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < MIN_DIST) return

      const angle = Math.atan2(dy, dx)
      const angleDeg = angle * (180 / Math.PI)
      const perpAngle = angle + Math.PI / 2
      const side = stepCount.current % 2 === 0 ? 1 : -1
      const offsetPx = 14

      const paw = {
        id: ++idCounter,
        x: cx + side * offsetPx * Math.cos(perpAngle),
        y: cy + side * offsetPx * Math.sin(perpAngle),
        rotation: angleDeg + side * 12,
      }

      stepCount.current++
      lastPx.current = { cx, cy }

      setPaws(prev => [...prev, paw])
      setTimeout(() => {
        setPaws(prev => prev.filter(p => p.id !== paw.id))
      }, 2800)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {paws.map(paw => (
        <div
          key={paw.id}
          style={{
            position: 'absolute',
            left: paw.x,
            top: paw.y,
            transform: `translate(-50%, -50%) rotate(${paw.rotation}deg)`,
          }}
        >
          <div className="paw-print">
            <PawSVG />
          </div>
        </div>
      ))}
    </div>
  )
}
