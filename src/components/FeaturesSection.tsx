import Image from 'next/image'
import React from 'react'

import { FeatureCard } from './FeatureCard'

interface FeatureWithImage {
  id: string
  label: string
  title: string
  description: string
  tags: string[]
  imagePlaceholder?: string
}

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

const featuresWithImage: FeatureWithImage[] = [
  {
    id: '✨',
    label: 'CLEANEST',
    title: '极简界面、没有广告',
    description:
      '彻底剥离所有商业化元素 — 信息流广告、侧栏推广、热搜植入、VIP 横幅，全部清零。重新构建符合现代审美的纯净界面，让你只为内容停留。',
    tags: ['零广告', '超简洁', 'X-Liked 布局'],
    imagePlaceholder: '/images/xb_timeline.jpeg',
  },
  {
    id: '🎨',
    label: 'PERSONALIZE',
    title: '深度定制微博页面',
    description:
      '不止于"隐藏"，而是真正的页面级重构。CSS 注入级别的精细控制 — 字体、间距、配色、组件圆角、阴影层级，是所有细节的重新定制。',
    tags: ['深度重构', '像素级定制', '主题系统'],
    imagePlaceholder: '/images/xb_settings.jpeg',
  },
  {
    id: '📷',
    label: 'TAKE A SHOT',
    title: '支持微博一键导出图片',
    description:
      '将任意微博、微博合集、对话串一键转换为高清长图，支持深色 / 浅色双主题、自动适配水印移除。分享思考再无障碍，告别截图拼接的繁琐流程。',
    tags: ['长图导出', '高清渲染', '水印控制'],
    imagePlaceholder: '/images/xb_exporter.jpeg',
  },
]

const moreFeatures: Feature[] = [
  {
    title: 'Chrome 安装即用',
    description: '通过 Chrome 插件方式快速生效，不需要复杂配置即可开始使用。',
  },
  { title: '隐私优先', description: '以本地体验优化为主，不把收集用户数据作为产品价值。' },
  { title: '开源免费', description: '代码公开在 GitHub，适合希望长期使用和自行审查实现的用户。' },
]

const FeatureWithImageCard: React.FC<{ feature: FeatureWithImage; index: number }> = ({
  feature,
  index,
}) => {
  const isEven = index % 2 === 0

  return (
    <div
      className={`mb-24 flex w-full max-w-[1200px] items-center gap-16 ${isEven ? '' : 'flex-row-reverse'}`}
    >
      <div className="relative h-[360px] w-[560px] shrink-0">
        <div className="absolute top-0 left-0 z-10 size-5 border-t-2 border-l-2 border-[#2a2a3a]" />
        <div className="relative flex size-full items-center justify-center overflow-hidden border border-[#2a2a3a] bg-[#12121a]">
          <div className="relative z-10 flex flex-col items-center gap-3">
            <Image
              src={feature.imagePlaceholder || ''}
              alt={feature.title}
              width={560}
              height={360}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex items-center gap-3 text-[#00d4ff]">
          <span className="font-mono text-xs tracking-[3px]">// {feature.id}</span>
          <div className="h-px w-12 bg-[#00d4ff]" />
          <span className="font-mono text-[10px] font-bold tracking-[2.5px] uppercase">
            &gt; {feature.label}
          </span>
        </div>
        <h3 className="font-sans text-[34px] leading-[1.15] font-black tracking-[-0.85px] text-[#e0e0e0] uppercase">
          {feature.title}
        </h3>
        <p className="font-sans text-[15px] leading-[1.75] tracking-[0.375px] text-[#a0a0a0]">
          {feature.description}
        </p>
        <div className="mt-3 flex gap-3">
          {feature.tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center border border-[#2a2a3a] bg-[#12121a] px-3 py-1.5"
            >
              <span className="font-mono text-[10px] tracking-[1.5px] text-[#6b7280] uppercase">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative flex flex-col items-center overflow-hidden bg-[#0a0a0f] px-20 py-[120px] text-[#e8e8ec]"
    >
      <div className="absolute inset-0 flex flex-col bg-[linear-gradient(rgba(0,255,136,0.03)_0%,rgba(0,0,0,0)_100%),linear-gradient(90deg,rgba(0,255,136,0.03)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute top-[200px] left-[-200px] flex size-[600px] flex-col bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="absolute right-[-100px] bottom-[100px] flex size-[500px] flex-col bg-[radial-gradient(circle,rgba(255,0,255,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="relative mb-20 flex flex-col items-center gap-3">
        <span className="font-mono text-xs tracking-[3.6px] text-[#00d4ff] uppercase">
          // CORE FEATURES
        </span>
        <h2 className="tracking-px font-sans text-[40px] font-black text-[#e0e0e0] uppercase">
          特性详解
        </h2>
        <p className="font-mono text-sm tracking-[0.7px] text-[#6b7280]">
          每一项功能都为简洁与效率而生
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {featuresWithImage.map((feature, index) => (
          <FeatureWithImageCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      <div className="relative mt-8 w-full max-w-7xl">
        <div className="relative mb-20 flex flex-col items-center gap-3">
          <span className="font-mono text-xs tracking-[3.6px] text-[#00d4ff] uppercase">
            // AND MORE
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreFeatures.map((f, idx) => (
            <FeatureCard key={idx} title={f.title} description={f.description} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
