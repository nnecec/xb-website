'use client'

import React from 'react'

import { InstallButtons } from '@/components/InstallButtons'
import { DiaTextReveal } from '@/components/ui/dia-text-reveal'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'

export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00ff8808] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight text-balance uppercase md:text-5xl">
          <DiaTextReveal
            text="换个方式刷微博。"
            colors={['#00ff88', '#00d4ff', '#ff00ff', '#e8e8ec']}
            textColor="#e8e8ec"
            duration={1.6}
            className="text-4xl font-black uppercase md:text-5xl"
          />
        </h2>
        <BlurFade inView delay={0.15}>
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mx-auto mt-4 max-w-lg text-base text-pretty text-[#9898a4]"
          >
            免费。无广告。开源的。选你喜欢的浏览器，现在就开始。
          </TextAnimate>
        </BlurFade>
        <BlurFade inView delay={0.25}>
          <div className="mt-10 flex justify-center">
            <InstallButtons variant="section" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default CTASection
