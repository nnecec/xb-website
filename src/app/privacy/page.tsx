import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { siteConfig } from '@/app/site'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '隐私政策',
  description: siteConfig.routes.privacyDescription,
  alternates: {
    canonical: siteConfig.routes.privacy,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'XB 隐私政策',
    description: siteConfig.routes.privacyDescription,
    url: `${siteConfig.url}${siteConfig.routes.privacy}`,
    siteName: siteConfig.name,
    type: 'article',
  },
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t py-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:py-10">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-muted-foreground [&_a]:text-foreground [&_a]:decoration-border [&_code]:bg-muted [&_code]:text-foreground [&_strong]:text-foreground space-y-4 text-sm leading-7 [&_a]:font-medium [&_a]:break-words [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:break-all [&_li]:my-1 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex min-h-full flex-col">
        <article className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Button variant="ghost" asChild className="mb-12 -ml-3">
            <Link href="/">
              <ArrowLeft className="size-4" />
              返回首页
            </Link>
          </Button>

          <header className="grid gap-8 pb-12 lg:grid-cols-12 lg:pb-16">
            <div className="lg:col-span-8">
              <p className="text-muted-foreground text-xs font-medium">隐私政策</p>
              <h1 className="mt-5 text-5xl leading-[0.98] font-semibold sm:text-6xl lg:text-7xl">
                XB 隐私政策：说明数据如何处理。
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <p className="text-muted-foreground text-sm leading-7">
                最后更新：2026 年 6 月
                <br />
                适用版本：XB 的 Chrome、Edge 和 Firefox 版本
              </p>
            </div>
          </header>

          <div className="bg-muted/40 mb-12 rounded-xl border p-5 sm:p-6">
            <p className="font-semibold">先说明适用范围</p>
            <p className="text-muted-foreground mt-2 max-w-4xl text-sm leading-7">
              以下承诺描述的是 XB 浏览器扩展。XB
              扩展本身没有广告、遥测或用户账号系统。为了了解官网访问情况，当前官网使用 Google
              Analytics，网站统计与扩展运行相互独立。
            </p>
          </div>

          <div className="border-b">
            <PolicySection title="核心承诺">
              <p>
                <strong>XB 扩展不收集、不上传、不出售用户数据。</strong>
                设置、主题与本地浏览历史都在浏览器内处理。扩展没有后端服务器、遥测或独立账号系统。
              </p>
            </PolicySection>

            <PolicySection title="我们不收集什么">
              <ul>
                <li>个人身份信息，例如姓名、邮箱、手机号与 IP</li>
                <li>微博账号凭证、Cookie 与会话信息</li>
                <li>浏览历史、点击流、关注列表等使用数据</li>
                <li>设备指纹与扩展内分析事件</li>
                <li>扩展崩溃报告与性能采样</li>
              </ul>
            </PolicySection>

            <PolicySection title="数据存储">
              <p>
                XB 使用浏览器本地存储，例如 <code>localStorage</code>、<code>chrome.storage</code>{' '}
                与 Firefox <code>browser.storage</code>，保存以下内容：
              </p>
              <ul>
                <li>主题、字体和界面偏好</li>
                <li>仅保存在当前设备的浏览历史</li>
                <li>关注分组筛选配置</li>
              </ul>
              <p>这些数据不会由 XB 上传。卸载扩展时，浏览器会一并移除对应的扩展存储。</p>
            </PolicySection>

            <PolicySection title="网络请求">
              <p>XB 会在以下场景通过 HTTPS 发起请求：</p>
              <ul>
                <li>
                  你主动访问 <code>weibo.com</code> 时，读取并重新呈现页面内容
                </li>
                <li>检查版本信息时，请求公开的 GitHub Releases API</li>
              </ul>
              <p>XB 不模拟登录，不代替用户发送自动化微博操作，也不把微博请求转发到 XB 的服务器。</p>
            </PolicySection>

            <PolicySection title="权限说明">
              <p>扩展商店会展示 XB 申请的权限。核心权限包括：</p>
              <ul>
                <li>
                  <code>weibo.com</code> 访问权，用于注入样式并重写页面
                </li>
                <li>
                  <code>storage</code>，用于保存设置与本地历史
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="第三方依赖">
              <p>XB 浏览器扩展不嵌入第三方分析、追踪或广告 SDK。</p>
            </PolicySection>

            <PolicySection title="开源与验证">
              <p>
                XB 以 GPL-3.0
                协议开源。任何人都可以审查源代码、构建自己的版本，并验证本页描述的行为。
              </p>
              <p>
                源代码：{' '}
                <a href={siteConfig.repoUrl} target="_blank" rel="noopener noreferrer">
                  github.com/nnecec/xb
                </a>
              </p>
            </PolicySection>

            <PolicySection title="政策变更">
              <p>
                如果本政策发生实质变化，我们会更新本页，并在 GitHub Releases
                中说明相关版本和行为变化。
              </p>
            </PolicySection>

            <PolicySection title="联系">
              <p>
                如对本政策有疑问或发现可疑行为，请通过{' '}
                <a href={`${siteConfig.repoUrl}/issues`} target="_blank" rel="noopener noreferrer">
                  GitHub Issues
                </a>{' '}
                公开反馈。
              </p>
            </PolicySection>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
