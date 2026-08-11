'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const easeOut = [0.16, 1, 0.3, 1] as const

interface MotionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  clip?: boolean
}

/**
 * A small, once-only viewport reveal for editorial content and product evidence.
 * Children remain rendered in their final state if motion is reduced or unavailable.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  distance = 20,
  clip = false,
}: MotionRevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              transform: `translateY(${distance}px)`,
              ...(clip ? { clipPath: 'inset(0 0 14% 0 round 0.75rem)' } : {}),
            }
      }
      whileInView={{
        opacity: 1,
        transform: 'translateY(0px)',
        ...(clip ? { clipPath: 'inset(0 0 0 0 round 0.75rem)' } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
