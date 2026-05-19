'use client'

import React from 'react'

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { AuroraText } from '@/components/ui/aurora-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { Marquee } from '@/components/ui/marquee'
import { MorphingText } from '@/components/ui/morphing-text'
import { TextAnimate } from '@/components/ui/text-animate'
import { InstallButtons } from '@/components/InstallButtons'

const heroTags = [
  '零广告',
  '发微博',
  '自定义字体',
  '视频下载',
  '分组筛选',
  '高清导图',
  '开源免费',
  'Firefox',
]

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-7rem)] w-full items-center justify-center pb-24 pt-8 text-[#e0e0e0]">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <BlurFade delay={0.05} inView={false} direction="down" offset={12}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00ff88]/15 bg-[#12121a]/40 px-4 py-1.5 backdrop-blur-md">
            <span className="flex size-2 animate-pulse rounded-full bg-[#00ff88]" />
            <AnimatedShinyText
              shimmerWidth={120}
              className="font-mono text-xs tracking-[0.2em] text-[#00ff88] uppercase dark:via-[#00ff88]/80"
            >
              浏览器插件 · Chrome & Firefox
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <h1 className="text-5xl leading-[1.1] font-black tracking-tight text-balance text-[#e8e8ec] md:text-7xl lg:text-8xl">
          <AuroraText
            className="text-5xl font-black lowercase md:text-7xl lg:text-8xl"
            colors={['#00ff88', '#00d4ff', '#ff00ff', '#00ff88']}
            speed={1.2}
          >
            xb
          </AuroraText>
          <span className="ml-3 text-[#e8e8ec]">极简微博</span>
        </h1>

        <MorphingText
          texts={['纯粹', '专注', '自由', '极简']}
          className="mx-auto mt-4 h-14 max-w-xl text-3xl font-black text-[#9898a4] md:h-20 md:text-5xl lg:text-6xl"
        />

        <BlurFade delay={0.25} inView={false} direction="up" offset={16}>
          <TextAnimate
            as="p"
            animation="blurInUp"
            by="word"
            startOnView={false}
            once
            delay={0.2}
            duration={0.7}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-[#9898a4] md:text-xl"
          >
            去广告、发微博、自定义字体、视频下载。你想要的，已经为你准备好。
          </TextAnimate>
        </BlurFade>

        <BlurFade delay={0.35} inView={false} className="mt-10">
          <Marquee pauseOnHover className="[--duration:28s] [--gap:0.75rem]" repeat={3}>
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="mx-1.5 rounded-full border border-[#2a2a38]/80 bg-[#12121a]/30 px-5 py-2 text-xs tracking-[0.16em] text-[#6f6f7b] uppercase backdrop-blur-sm transition-all duration-300 hover:border-[#00ff88]/40 hover:text-[#00ff88]"
              >
                {tag}
              </span>
            ))}
          </Marquee>
        </BlurFade>

        <BlurFade delay={0.45} inView={false} direction="up" offset={20}>
          <div className="mt-12 flex justify-center">
            <InstallButtons variant="hero" />
          </div>
        </BlurFade>

        <BlurFade delay={0.55} inView={false} className="mt-16 hidden justify-center md:flex">
          <div className="flex flex-col items-center gap-2 text-[#5a5a68]">
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="h-8 w-px overflow-hidden rounded-full bg-gradient-to-b from-[#2a2a38] to-transparent">
              <div className="animate-scroll-down h-full w-full bg-gradient-to-b from-[#00ff88] to-transparent" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default Hero
