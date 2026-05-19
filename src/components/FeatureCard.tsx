'use client'

import React from 'react'

import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'

export interface FeatureCardProps {
  title: string
  description: string
  index?: number
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, index = 0 }) => {
  return (
    <BlurFade inView delay={index * 0.08} direction="up" offset={20} className="h-full">
      <MagicCard
        className="h-full rounded-xl border border-[#2a2a38] bg-[#12121a] p-6 transition-colors duration-300 hover:bg-[#1a1a24]"
        gradientFrom="#00ff88"
        gradientTo="#00d4ff"
        gradientColor="#00ff8815"
        gradientOpacity={0.35}
      >
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-[#00ff8830] bg-[#00ff8815]">
          <svg
            className="h-6 w-6 text-[#00ff88]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#e8e8ec]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#9898a4]">{description}</p>
      </MagicCard>
    </BlurFade>
  )
}

export default FeatureCard
