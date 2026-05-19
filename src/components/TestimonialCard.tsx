'use client'

import React from 'react'

import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'

export interface TestimonialCardProps {
  name: string
  role: string
  text: string
  index?: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  index = 0,
}) => {
  return (
    <BlurFade inView delay={index * 0.1} direction="up" offset={24}>
      <MagicCard
        className="flex h-full flex-col justify-between rounded-xl border border-[#2a2a38] bg-[#12121a] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00ff8805]"
        gradientFrom="#00ff88"
        gradientTo="#00d4ff"
        gradientColor="#00ff8810"
        gradientOpacity={0.4}
      >
        <div>
          <svg className="mb-4 h-6 w-6 text-[#00ff8840]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-sm leading-relaxed text-[#e8e8ec]">{text}</p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#00ff88] to-[#00d4ff] text-sm font-semibold text-[#09090c]">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#e8e8ec]">{name}</span>
            <span className="text-xs text-[#5a5a68]">{role}</span>
          </div>
        </div>
      </MagicCard>
    </BlurFade>
  )
}

export default TestimonialCard
