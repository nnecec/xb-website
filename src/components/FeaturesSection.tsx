import React from 'react'
import { FeatureCard } from './FeatureCard'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    { title: '广告清除', description: '智能移除信息流广告、侧栏推广、弹窗干扰，还原内容本质' },
    { title: 'X 风格布局', description: '重新设计的界面布局，致敬极简美学' },
    { title: '轻量高效', description: '极小的包体积，零性能损耗' },
    { title: '自定义配置', description: '功能模块独立控制，按你的习惯定制' },
    { title: '隐私优先', description: '不收集用户数据，代码开源' },
    { title: '开源免费', description: 'MIT 协议，永久免费，欢迎贡献' },
  ]

  return (
    <section className="w-full bg-[#0a0a0f] py-16 text-[#e0e0e0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="font-mono text-xs uppercase tracking-[3px] text-[#00d4ff]">CORE FEATURES</span>
        <h3 className="mt-2 text-3xl font-extrabold uppercase">强大功能矩阵</h3>
        <p className="text-sm text-[#6b7280] mt-2">每一个模块都经过精心打磨，只为给你最纯净的体验</p>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((f, idx) => (
          <FeatureCard key={idx} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
