import { Code2, LockKeyhole, UserRoundX } from 'lucide-react'
import Link from 'next/link'
import { siGithub } from 'simple-icons'

import { siteConfig } from '@/app/site'
import { MotionReveal } from '@/components/MotionReveal'
import { Button } from '@/components/ui/button'

const principles = [
  {
    icon: Code2,
    title: '代码公开',
    description: 'XB 以 GPL-3.0 协议开源。除安装包外，你还可查阅实现和版本变更。',
  },
  {
    icon: LockKeyhole,
    title: '数据留在本地',
    description: '主题、字体和浏览历史保存在浏览器本地，无需发送至 XB 服务器。',
  },
  {
    icon: UserRoundX,
    title: '无需额外账号',
    description: '使用 XB 无需注册新账号，也不会改变原有的微博登录和使用方式。',
  },
] as const

export function OpenSourceSection() {
  return (
    <section id="opensource" className="bg-muted/35 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <MotionReveal className="max-w-3xl" distance={18}>
          <div>
            <span className="text-muted-foreground text-xs font-medium">开源与隐私</span>
            <h2 className="mt-5 text-4xl leading-[1.04] font-semibold sm:text-5xl">
              代码公开，数据留在浏览器。
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild>
                <a href={siteConfig.repoUrl} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={siGithub.path} />
                  </svg>
                  查看 GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy">查看隐私说明</Link>
              </Button>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-16 lg:mt-24">
          {principles.map((principle, index) => (
            <MotionReveal
              key={principle.title}
              delay={index * 0.07}
              distance={18}
              className="group border-b"
            >
              <article className="grid gap-5 py-8 sm:grid-cols-[48px_minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-8 sm:py-10">
                <div className="bg-background/80 flex size-11 items-center justify-center rounded-lg transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)] motion-safe:group-hover:scale-[1.03]">
                  <principle.icon className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold sm:pt-2">{principle.title}</h3>
                <p className="text-muted-foreground max-w-xl text-sm leading-7 sm:pt-1">
                  {principle.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
