'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  download,
  className,
}: {
  children: ReactNode
  href: string
  variant?: 'primary' | 'accent' | 'ghost'
  download?: boolean
  className?: string
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const styles = {
    primary:
      'bg-primary text-primary-foreground shadow-[0_0_32px_-8px_var(--primary)] hover:shadow-[0_0_44px_-6px_var(--primary)]',
    accent:
      'bg-accent text-accent-foreground shadow-[0_0_32px_-8px_var(--accent)] hover:shadow-[0_0_44px_-6px_var(--accent)]',
    ghost: 'glass text-foreground hover:border-primary/40 hover:text-primary',
  }[variant]

  return (
    <motion.a
      href={href}
      download={download}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.25)
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.35)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-shadow duration-300',
        styles,
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
