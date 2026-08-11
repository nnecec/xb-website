import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { siteConfig } from '@/app/site'
import { ChangelogReleases, type ChangelogRelease } from '@/components/ChangelogReleases'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { fetchRecentReleases } from '@/lib/github'

export const metadata: Metadata = {
  title: '更新记录',
  description: siteConfig.routes.changelogDescription,
  alternates: {
    canonical: siteConfig.routes.changelog,
  },
  openGraph: {
    title: 'XB 更新记录',
    description: siteConfig.routes.changelogDescription,
    url: `${siteConfig.url}${siteConfig.routes.changelog}`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'XB 微博浏览器扩展更新记录',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XB 更新记录',
    description: siteConfig.routes.changelogDescription,
    images: [siteConfig.ogImage],
  },
}

export const revalidate = 3600

export default async function ChangelogPage() {
  const releases = (await fetchRecentReleases(20)) as ChangelogRelease[]

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'XB 更新记录',
    description: siteConfig.routes.changelogDescription,
    itemListElement: releases.slice(0, 10).map((release, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: release.html_url,
      name: release.name?.trim() || release.tag_name,
    })),
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <article className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Button variant="ghost" asChild className="mb-12 -ml-3">
            <Link href="/">
              <ArrowLeft className="size-4" />
              返回首页
            </Link>
          </Button>

          <header className="grid gap-8 border-b pb-12 lg:grid-cols-12 lg:pb-16">
            <div className="lg:col-span-8">
              <p className="text-muted-foreground text-xs font-medium">版本历史</p>
              <h1 className="mt-5 text-5xl leading-[0.98] font-semibold sm:text-6xl lg:text-7xl">
                XB 更新记录：每次发布都有记录。
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <p className="text-muted-foreground text-base leading-8">
                来自 GitHub Releases 的完整版本记录，包括功能变化、问题修复与可验证的构建产物。
              </p>
              <a
                href={`${siteConfig.repoUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-border hover:decoration-foreground mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
              >
                GitHub Releases
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </header>

          <div className="mt-12 lg:mt-16">
            <ChangelogReleases releases={releases} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
