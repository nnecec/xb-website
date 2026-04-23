import React from 'react'

import { FeatureCard } from './FeatureCard'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

const features: Feature[] = [
  { title: '微博去广告', description: '减少微博信息流广告和推广内容，让页面更接近纯内容阅读。' },
  { title: '精简侧栏与推荐', description: '弱化无关模块和噪音元素，让常用信息更靠前、更容易找到。' },
  { title: '更清爽的布局', description: '以更简洁的视觉层级重组微博页面，浏览时更轻松、更专注。' },
  { title: 'Chrome 安装即用', description: '通过 Chrome 插件方式快速生效，不需要复杂配置即可开始使用。' },
  { title: '隐私优先', description: '以本地体验优化为主，不把收集用户数据作为产品价值。' },
  { title: '开源免费', description: '代码公开在 GitHub，适合希望长期使用和自行审查实现的用户。' },
]

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#00d4ff] uppercase">
            Feature Highlights
          </span>
          <h2 className="animate-fade-in-up text-balance mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            为什么这款微博插件更值得装
          </h2>
          <p className="animate-fade-in-up text-pretty mx-auto mt-4 max-w-lg text-base text-[#9898a4] delay-200">
            围绕微博去广告、精简微博和更顺手的阅读体验设计，不靠噱头，直接解决刷微博时最常见的问题。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <FeatureCard key={idx} title={f.title} description={f.description} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
