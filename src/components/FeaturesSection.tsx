import Image from 'next/image'

import { MotionReveal } from './MotionReveal'
import { SectionHeader } from './SectionHeader'

const features = {
  timeline: {
    label: '时间线重写',
    title: '减少干扰，留下内容。',
    description: 'XB 减少广告、推广和冗余侧栏，重新梳理时间线、热搜和媒体播放的阅读层级。',
    evidence: '减少广告与推广、梳理信息层级、保留原有操作路径',
    image: '/images/xb_timeline.jpeg',
    alt: 'XB 重新设计后的微博时间线、热搜与视频播放界面',
  },
  appearance: {
    label: '阅读外观',
    title: '界面按你的习惯设置。',
    description: '字体、字号、字重、行高和主题都能按你的阅读习惯调整。',
    evidence: '字体、行高、字重、浅色与深色主题',
    image: '/images/xb_setting_fonts.jpeg',
    alt: 'XB 深色长文阅读与字体设置界面',
  },
  history: {
    label: '本地历史',
    title: '看过的内容，随时找回。',
    description: '浏览记录仅保存在当前设备，无需另建 XB 账号。',
    evidence: '本地保存、随时清除、无需额外账号',
    image: '/images/xb_history.jpeg',
    alt: 'XB 本地微博浏览历史界面',
  },
  export: {
    label: '内容导出',
    title: '把微博整理成一张长图。',
    description: '微博、对话串和合集可导出为高清长图，并按内容结构排版。',
    evidence: '高清长图、多种卡片外观、适配长内容',
    image: '/images/xb_exporter.jpeg',
    alt: 'XB 高清长图导出面板与导出预览',
  },
} as const

export function FeaturesSection() {
  const { timeline, appearance, history, export: exportFeature } = features

  return (
    <section id="features" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <MotionReveal distance={16}>
          <SectionHeader label="产品能力" title="重新梳理微博的阅读方式。" />
        </MotionReveal>

        <MotionReveal className="mt-12 lg:mt-16" distance={28} clip>
          <article>
            <div className="max-w-2xl">
              <p className="text-muted-foreground text-sm font-medium">{timeline.label}</p>
              <h3 className="mt-4 text-3xl leading-[1.08] font-semibold sm:text-4xl">
                {timeline.title}
              </h3>
              <p className="text-muted-foreground mt-5 text-base leading-8">
                {timeline.description}
              </p>
              <p className="mt-6 text-sm leading-7 font-medium">{timeline.evidence}</p>
            </div>
            <figure className="bg-card product-shadow mt-10 overflow-hidden rounded-xl border lg:mt-14">
              <div className="bg-muted aspect-[16/9] overflow-hidden">
                <Image
                  src={timeline.image}
                  alt={timeline.alt}
                  width={2048}
                  height={1536}
                  sizes="(min-width: 1200px) 1200px, 100vw"
                  className="size-full object-cover"
                />
              </div>
              <figcaption className="text-muted-foreground px-4 py-3 text-xs leading-6 sm:px-5">
                时间线、热搜和视频播放采用一致、清晰的阅读层级。
              </figcaption>
            </figure>
          </article>
        </MotionReveal>

        <div className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <MotionReveal distance={24} clip>
            <article>
              <div className="max-w-xl">
                <p className="text-muted-foreground text-sm font-medium">{appearance.label}</p>
                <h3 className="mt-3 text-3xl leading-[1.08] font-semibold">{appearance.title}</h3>
                <p className="text-muted-foreground mt-4 text-sm leading-7">
                  {appearance.description}
                </p>
              </div>
              <figure className="bg-card mt-7 overflow-hidden rounded-xl border">
                <div className="bg-muted aspect-[4/3] overflow-hidden">
                  <Image
                    src={appearance.image}
                    alt={appearance.alt}
                    width={2048}
                    height={1536}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
              </figure>
              <p className="text-muted-foreground mt-4 text-xs leading-6">{appearance.evidence}</p>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.1} distance={24} clip className="lg:mt-24">
            <article>
              <div className="max-w-lg">
                <p className="text-muted-foreground text-sm font-medium">{history.label}</p>
                <h3 className="mt-3 text-3xl leading-[1.08] font-semibold">{history.title}</h3>
                <p className="text-muted-foreground mt-4 text-sm leading-7">
                  {history.description}
                </p>
              </div>
              <figure className="bg-card mt-7 overflow-hidden rounded-xl border">
                <div className="bg-muted aspect-[4/3] overflow-hidden">
                  <Image
                    src={history.image}
                    alt={history.alt}
                    width={2048}
                    height={1536}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
              </figure>
              <p className="text-muted-foreground mt-4 text-xs leading-6">{history.evidence}</p>
            </article>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-20 lg:mt-28" distance={28} clip>
          <article className="bg-muted/45 overflow-hidden rounded-xl">
            <figure className="bg-card">
              <div className="bg-muted aspect-[16/9] overflow-hidden">
                <Image
                  src={exportFeature.image}
                  alt={exportFeature.alt}
                  width={2048}
                  height={1536}
                  sizes="(min-width: 1200px) 1200px, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </figure>
            <div className="grid gap-6 p-7 sm:p-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:p-12">
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-sm font-medium">{exportFeature.label}</p>
                <h3 className="mt-4 text-3xl leading-[1.08] font-semibold sm:text-4xl">
                  {exportFeature.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-muted-foreground text-base leading-8">
                  {exportFeature.description}
                </p>
                <p className="mt-6 text-sm leading-7 font-medium">{exportFeature.evidence}</p>
              </div>
            </div>
          </article>
        </MotionReveal>
      </div>
    </section>
  )
}

export default FeaturesSection
