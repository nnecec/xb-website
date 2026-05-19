'use client'

import React from 'react'

import { BeforeAfterSlider } from './BeforeAfterSlider'
import { SectionHeader } from './SectionHeader'
import { BlurFade } from '@/components/ui/blur-fade'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// 前后对比"
          title="一眼看见差别。"
          description="左滑查看。同一个页面，XB 让它焕然一新。"
          labelColor="#ff00ff"
          titleColors={['#ff00ff', '#00d4ff', '#00ff88', '#e8e8ec']}
        />

        <BlurFade inView delay={0.2} direction="up" offset={24}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#2a2a38] bg-[#12121a] p-4">
            <BeforeAfterSlider
              firstImage={{
                imageUrl: '/images/weibo-before.jpeg',
                alt: '安装 XB 之前的微博页面',
              }}
              secondImage={{
                imageUrl: '/images/weibo-after.jpeg',
                alt: '安装 XB 之后更清爽的微博页面',
              }}
              className="rounded-lg"
            />
            <ProgressiveBlur position="bottom" height="28%" className="rounded-b-lg" />
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#00ff88]" />
                <span className="text-sm text-[#9898a4]">安装后</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#ff00ff]" />
                <span className="text-sm text-[#9898a4]">安装前</span>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default ComparisonSection
