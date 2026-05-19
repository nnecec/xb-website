'use client'

import { DiaTextReveal } from '@/components/ui/dia-text-reveal'
import { TextAnimate } from '@/components/ui/text-animate'
import { BlurFade } from '@/components/ui/blur-fade'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  labelColor?: string
  titleColors?: string[]
  titleColor?: string
}

export function SectionHeader({
  label,
  title,
  description,
  labelColor = '#00d4ff',
  titleColors = ['#00ff88', '#00d4ff', '#ff00ff', '#e8e8ec'],
  titleColor = '#e8e8ec',
}: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col items-center gap-3 text-center">
      <BlurFade inView delay={0} direction="up">
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      </BlurFade>
      <h2 className="text-4xl font-black tracking-tight text-balance uppercase md:text-5xl">
        <DiaTextReveal
          text={title}
          colors={titleColors}
          textColor={titleColor}
          duration={1.4}
          className="text-4xl font-black uppercase md:text-5xl"
        />
      </h2>
      {description ? (
        <BlurFade inView delay={0.15} direction="up">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            delay={0.1}
            className="mx-auto mt-2 max-w-2xl text-base text-pretty text-[#9898a4]"
          >
            {description}
          </TextAnimate>
        </BlurFade>
      ) : null}
    </div>
  )
}
