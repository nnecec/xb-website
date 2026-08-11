import Link from 'next/link'

import { siteConfig } from '@/app/site'
import { InstallButtons } from '@/components/InstallButtons'
import { MotionReveal } from '@/components/MotionReveal'

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <MotionReveal className="max-w-4xl" distance={24}>
          <div>
            <h2 className="text-4xl leading-[1.04] font-semibold sm:text-5xl lg:text-6xl">
              把微博调成适合长期阅读的样子。
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              安装后刷新微博，即可按习惯调整时间线、字体、行高、主题和内容工具。
            </p>
          </div>
        </MotionReveal>

        <MotionReveal className="mt-12 lg:mt-16" delay={0.1} distance={18}>
          <InstallButtons />
          <p className="text-muted-foreground mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground decoration-border underline underline-offset-4 transition-colors"
            >
              查看 XB 源码
            </a>
            <Link
              href="/privacy"
              className="hover:text-foreground decoration-border underline underline-offset-4 transition-colors"
            >
              查看隐私说明
            </Link>
          </p>
        </MotionReveal>
      </div>
    </section>
  )
}

export default CTASection
