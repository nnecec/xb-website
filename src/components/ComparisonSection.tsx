import React from 'react'

import { BeforeAfterSlider } from './BeforeAfterSlider'

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#ff00ff] uppercase">
            Before And After
          </span>
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            安装前后对比
          </h2>
          <p className="animate-fade-in-up mt-4 text-base text-[#9898a4] delay-200">
            同一个微博页面，安装 XB 之后可以更直观地看到去广告与精简布局的效果。
          </p>
        </div>

        <div className="animate-fade-in-up mx-auto max-w-4xl delay-300">
          <div className="overflow-hidden rounded-xl border border-[#2a2a38] bg-[#12121a] p-4">
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
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00ff88]" />
                <span className="text-sm text-[#9898a4]">安装后：更清爽的微博界面</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff00ff]" />
                <span className="text-sm text-[#9898a4]">安装前：原始微博界面</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
