'use client'

import { motion, useReducedMotion } from 'motion/react'

export function ManifestoSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-title"
      className="bg-foreground text-background flex min-h-[100dvh] items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <motion.p
          id="manifesto-title"
          className="max-w-6xl text-[clamp(3.4rem,8.4vw,7.6rem)] leading-[0.94] font-semibold text-balance"
        >
          <motion.span
            className="block"
            initial={reducedMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            微博属于读者，
          </motion.span>
          <motion.span
            className="block"
            initial={reducedMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            界面也应该如此。
          </motion.span>
        </motion.p>
      </div>
    </section>
  )
}
