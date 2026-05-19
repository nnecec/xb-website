'use client'

import Image from 'next/image'
import React from 'react'

import { FeatureCard } from './FeatureCard'
import { SectionHeader } from './SectionHeader'
import { BlurFade } from '@/components/ui/blur-fade'

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
}

const featuresWithImage: FeatureWithImage[] = [
  {
    id: '✨',
    label: '无广告',
    title: '干净，如此而已。',
    description:
      '信息流广告、侧栏推广、热搜植入 — 统统消失。X 布局一键切换。转发链、话题页各有独立开关。你决定看到什么。',
    tags: ['零广告', 'X 布局', '转发链', '话题页'],
    imagePlaceholder: '/images/xb_timeline.jpeg',
  },
  {
    id: '🎨',
    label: '定制',
    title: '每个像素，听你的。',
    description:
      '浅色或深色背景、组件圆角、阴影层级、间距粗细 — 一切可调。它不只是插件，是你的微博。',
    tags: ['主题系统', '背景预设', '像素级控制', '深度重构'],
    imagePlaceholder: '/images/xb_settings.jpeg',
  },
  {
    id: '📷',
    label: '导图',
    title: '一条微博，一张好图。',
    description:
      '微博、合集、对话串 — 选中即出高清长图。深浅双主题，多种卡片样式，水印自动去除。分享，就该这么简单。',
    tags: ['高清长图', '多种模板', '深浅主题', '去水印'],
    imagePlaceholder: '/images/xb_exporter.jpeg',
  },
  {
    id: '🔤',
    label: '字体',
    title: '选一种你喜欢的字体。',
    description:
      '系统字体、开源字体自由选。黑体、宋体、思源 — 无论偏爱哪种风格，一键切换，即刻生效。阅读，本就该舒服。',
    tags: ['系统字体', '开源字体', '一键切换', '阅读舒适'],
    imagePlaceholder: '/images/xb_setting_fonts.jpeg',
  },
  {
    id: '🕐',
    label: '回顾',
    title: '看过，就不会丢。',
    description:
      '浏览历史自动记录。关注列表、粉丝列表随手可查。那一条刷过去的好内容，随时找回。',
    tags: ['浏览历史', '关注列表', '粉丝列表', '随时回顾'],
    imagePlaceholder: '/images/xb_history.jpeg',
  },
]

const moreFeatures: Feature[] = [
  {
    title: '视频增强',
    description:
      '行内全屏播放，离开画面自动暂停。也可以下载到本地，随时回看。',
  },
  {
    title: '关注分组筛选',
    description:
      '只显示你关心的圈子。分组筛选信息流，不被其他内容打扰。',
  },
  { title: '隐私优先', description: '所有处理都在你的浏览器本地完成。不收集、不上传。' },
  { title: '开源免费', description: '代码在 GitHub 完全公开。可审查，可参与，可长久信赖。' },
]

const FeatureWithImageCard: React.FC<{ feature: FeatureWithImage; index: number }> = ({
  feature,
  index,
}) => {
  const isEven = index % 2 === 0

  return (
    <BlurFade inView delay={index * 0.08} direction={isEven ? 'left' : 'right'} offset={32}>
      <div
        className={`mb-24 flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      >
        <div className="relative h-[280px] w-full shrink-0 sm:h-[360px] lg:w-[560px]">
          <div className="absolute top-0 left-0 z-10 size-5 border-t-2 border-l-2 border-[#2a2a3a]" />
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-sm border border-[#2a2a3a] bg-[#12121a]">
            <Image
              src={feature.imagePlaceholder || ''}
              alt={feature.title}
              width={560}
              height={360}
              className="relative z-10 object-cover"
            />
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
          <h3 className="font-sans text-[28px] leading-[1.15] font-black tracking-[-0.85px] text-[#e0e0e0] sm:text-[34px]">
            {feature.title}
          </h3>
          <p className="font-sans text-[15px] leading-[1.75] tracking-[0.375px] text-[#a0a0a0]">
            {feature.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {feature.tags.map((tag) => (
              <div
                key={tag}
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
    </BlurFade>
  )
}

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative flex flex-col items-center overflow-hidden bg-[#0a0a0f] px-6 py-[120px] text-[#e8e8ec] sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 flex flex-col bg-[linear-gradient(rgba(0,255,136,0.03)_0%,rgba(0,0,0,0)_100%),linear-gradient(90deg,rgba(0,255,136,0.03)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute top-[200px] left-[-200px] flex size-[600px] flex-col bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="absolute right-[-100px] bottom-[100px] flex size-[500px] flex-col bg-[radial-gradient(circle,rgba(255,0,255,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="relative w-full">
        <SectionHeader
          label="// 特性"
          title="为微博重新设计。"
          description="每一项，都是你真正需要的。"
        />
      </div>

      <div className="relative flex flex-col items-center">
        {featuresWithImage.map((feature, index) => (
          <FeatureWithImageCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      <div className="relative mt-8 w-full max-w-7xl">
        <BlurFade inView>
          <div className="relative mb-12 flex flex-col items-center gap-3">
            <span className="font-mono text-xs tracking-[3.6px] text-[#00d4ff] uppercase">
              // 还有更多
            </span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {moreFeatures.map((f, idx) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
