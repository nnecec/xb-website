'use client'

import {
  motion,
  useInView,
  useReducedMotion,
  type MotionProps,
  type TargetAndTransition,
  type UseInViewOptions,
} from 'motion/react'
import { useRef } from 'react'

type MarginType = UseInViewOptions['margin']

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: TargetAndTransition
    visible: TargetAndTransition
  }
  duration?: number
  delay?: number
  offset?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '-50px',
  blur = '0px',
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const reducedMotion = useReducedMotion()
  const isInView = !inView || inViewResult
  const defaultVariants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']:
        direction === 'right' || direction === 'down' ? -offset : offset,
      opacity: 0,
      ...(blur === '0px' ? {} : { filter: `blur(${blur})` }),
    },
    visible: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
      opacity: 1,
      ...(blur === '0px' ? {} : { filter: 'blur(0px)' }),
    },
  }
  const combinedVariants = variant ?? defaultVariants

  return (
    <motion.div
      ref={ref}
      inert={inView && !isInView && !reducedMotion ? true : undefined}
      initial={reducedMotion ? false : combinedVariants.hidden}
      animate={reducedMotion || isInView ? combinedVariants.visible : combinedVariants.hidden}
      transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
