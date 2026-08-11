'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/app/site'
import { InstallButtons } from '@/components/InstallButtons'
import { MotionReveal } from '@/components/MotionReveal'

function ProductStage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.figure
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              transform: 'perspective(1200px) translateY(28px) rotateX(1.5deg) scale(0.985)',
              clipPath: 'inset(4% 3% 7% 3% round 0.75rem)',
            }
      }
      animate={{
        opacity: 1,
        transform: 'perspective(1200px) translateY(0px) rotateX(0deg) scale(1)',
        clipPath: 'inset(0 0 0 0 round 0.75rem)',
      }}
      transition={{ delay: 0.22, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      className="product-shadow group bg-card overflow-hidden rounded-xl border"
    >
      <div className="bg-muted relative aspect-[4/3] overflow-hidden">
        <Image
          src="/images/xb_settings.jpeg"
          alt="XB 在微博页面中提供字体、内容和主题设置"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] motion-safe:group-hover:scale-[1.012]"
        />
      </div>
      <figcaption className="grid gap-1 px-4 py-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-5 sm:px-5">
        <span className="text-sm font-medium">阅读设置</span>
        <span className="text-muted-foreground text-xs leading-6 sm:text-right">
          可在当前页面调整字体、字号、主题和内容密度。
        </span>
      </figcaption>
    </motion.figure>
  )
}

const proofItems = [
  {
    title: '本地处理',
    description: '设置与浏览历史保存在当前浏览器。',
    href: '/privacy',
  },
  {
    title: '不接管账号',
    description: '不模拟登录，也不代替你操作微博。',
  },
  {
    title: '开源可审查',
    description: '以 GPL-3.0 协议发布，代码和版本变化均可查阅。',
    href: siteConfig.repoUrl,
  },
] as const

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section
        className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden py-10 sm:py-12 lg:py-16"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="relative z-10">
            <h1
              id="hero-title"
              className="text-[clamp(2.85rem,5.2vw,4.6rem)] leading-[0.98] font-bold text-balance"
            >
              <motion.span
                className="block"
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                微博浏览器扩展，
              </motion.span>
              <motion.span
                className="block"
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                按你的习惯读。
              </motion.span>
            </h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground mt-6 max-w-xl text-base leading-8 sm:text-lg"
            >
              在浏览器本地调整微博时间线，字体、行高、主题和内容工具都可按你的习惯设置。
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <InstallButtons variant="icons" includeGithub className="mt-8" />
            </motion.div>
          </div>

          <ProductStage />
        </div>
      </section>

      <section aria-label="XB 的开源与隐私说明" className="bg-muted/30">
        <div className="mx-auto grid max-w-[1200px] px-5 sm:px-8 md:grid-cols-3">
          {proofItems.map((item, index) => {
            const content = (
              <div className="py-5 md:px-6 md:py-6">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-muted-foreground mt-1 text-xs leading-6">{item.description}</p>
              </div>
            )

            return (
              <MotionReveal
                key={item.title}
                delay={0.38 + index * 0.06}
                distance={12}
                className="md:px-6"
              >
                {'href' in item ? (
                  item.href.startsWith('/') ? (
                    <Link href={item.href} className="hover:bg-muted/50 block transition-colors">
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted/50 block transition-colors"
                    >
                      {content}
                    </a>
                  )
                ) : (
                  content
                )}
              </MotionReveal>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
