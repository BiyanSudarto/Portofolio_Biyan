'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect } from 'react'

export function MouseSpotlight() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  const background = useTransform(
    [springX, springY],
    ([cx, cy]: number[]) =>
      `radial-gradient(520px circle at ${cx}px ${cy}px, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)`,
  )

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      style={{ background }}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  )
}
