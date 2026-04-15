import React from 'react'

import { FeatureCard } from './FeatureCard'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

const features: Feature[] = [
  { title: '广告清除', description: '智能移除信息流广告、侧栏推广，还原内容本质' },
  { title: 'X 风格布局', description: '重新设计的界面布局，致敬极简美学' },
  { title: '轻量高效', description: '极小的包体积，零性能损耗' },
  { title: '自定义配置', description: '功能模块独立控制，按你的习惯定制' },
  { title: '隐私优先', description: '不收集用户数据，完全本地化' },
  { title: '开源免费', description: '开源软件，欢迎贡献代码' },
]

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#00d4ff] uppercase">
            Features
          </span>
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            特性
          </h2>
          <p className="animate-fade-in-up mx-auto mt-4 max-w-lg text-base text-[#9898a4] delay-200">
            好用的不得鸟
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
