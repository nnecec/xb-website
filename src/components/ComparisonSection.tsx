import React from 'react'

import { BeforeAfterSlider } from './BeforeAfterSlider'

export const ComparisonSection: React.FC = () => {
  return (
    <section id="compare" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#ff00ff] uppercase">
            Visual Comparison
          </span>
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            Before & After
          </h2>
          <p className="animate-fade-in-up mt-4 text-base text-[#9898a4] delay-200">
            同一个微博，两种完全不同的体验
          </p>
        </div>

        <div className="animate-fade-in-up mx-auto max-w-4xl delay-300">
          <div className="overflow-hidden rounded-xl border border-[#2a2a38] bg-[#12121a] p-4">
            <BeforeAfterSlider
              firstImage={{
                imageUrl: '/images/weibo-before.jpeg',
                alt: 'Before - Original Weibo',
              }}
              secondImage={{
                imageUrl: '/images/weibo-after.jpeg',
                alt: 'After - With Make Weibo',
              }}
              className="rounded-lg"
            />
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff00ff]" />
                <span className="text-sm text-[#9898a4]">Original Weibo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#9898a4]">With Make Weibo</span>
                <span className="h-2 w-2 rounded-full bg-[#00ff88]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
