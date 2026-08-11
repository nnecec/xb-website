import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-[1200px] flex-1 items-center px-5 py-20 sm:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-muted-foreground font-mono text-sm tabular-nums">404</p>
          <h1 className="mt-5 text-6xl leading-[0.95] font-semibold sm:text-7xl lg:text-8xl">
            这里没有内容，也没有这个页面。
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-8">
            链接可能已变更。返回首页，或前往 GitHub 查看项目状态。
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <ArrowLeft className="size-4" />
              返回首页
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
