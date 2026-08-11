'use client'

import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { siteConfig } from '@/app/site'
import { BrandIcon } from '@/components/BrandIcon'
import { NumberTicker } from '@/components/ui/number-ticker'

interface GitHubStats {
  stars: number | null
  version: string | null
}

type LoadState = 'loading' | 'success' | 'error'

export function StatsBar() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 8000)
    let active = true

    async function loadStats() {
      try {
        const response = await fetch('/api/github', { signal: controller.signal })
        if (!response.ok) throw new Error('GitHub stats request failed')

        const data = (await response.json()) as GitHubStats
        if (data.stars == null && !data.version) throw new Error('GitHub stats unavailable')

        if (active) {
          setStats(data)
          setLoadState('success')
        }
      } catch {
        if (active) setLoadState('error')
      } finally {
        window.clearTimeout(timeoutId)
      }
    }

    void loadStats()

    return () => {
      active = false
      window.clearTimeout(timeoutId)
      controller.abort()
    }
  }, [])

  const releasesUrl = `${siteConfig.repoUrl}/releases`

  const items = [
    {
      label: '开源',
      value: 'GPL-3.0',
      href: siteConfig.repoUrl,
    },
    {
      label: '浏览器',
      value: (
        <span className="flex items-center gap-2">
          <BrandIcon name="chrome" className="size-4" />
          <BrandIcon name="edge" className="size-4" />
          <BrandIcon name="firefox" className="size-4" />
          <span>支持三种浏览器</span>
        </span>
      ),
    },
    {
      label: 'GitHub Stars',
      value: (
        <span className="flex items-center gap-2" aria-live="polite">
          <Star className="size-4" />
          {loadState === 'loading' ? (
            <span>读取中</span>
          ) : stats?.stars != null ? (
            <NumberTicker
              value={stats.stars}
              className="text-foreground font-semibold tabular-nums"
            />
          ) : (
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-border underline underline-offset-4"
            >
              前往 GitHub
            </a>
          )}
        </span>
      ),
    },
    {
      label: '最新版本',
      value:
        loadState === 'loading' ? (
          <span>读取中</span>
        ) : stats?.version ? (
          <span className="font-mono break-all tabular-nums">{stats.version}</span>
        ) : (
          <a
            href={releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-border underline underline-offset-4"
          >
            查看发布记录
          </a>
        ),
    },
  ]

  return (
    <section aria-label="XB 项目状态" className="bg-muted/35">
      <p className="sr-only" aria-live="polite">
        {loadState === 'loading'
          ? '正在读取 GitHub 数据'
          : loadState === 'error'
            ? '暂时无法读取 GitHub 数据，可直接查看发布记录。'
            : 'GitHub 数据读取完成'}
      </p>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-8 gap-y-2 px-5 sm:px-8 lg:grid-cols-4 lg:gap-x-10">
        {items.map((item) => {
          const content = (
            <div className="flex min-h-24 min-w-0 flex-col justify-center gap-1.5 py-5 lg:px-6">
              <span className="text-muted-foreground text-xs">{item.label}</span>
              <span className="min-w-0 text-sm font-medium">{item.value}</span>
            </div>
          )

          return (
            <div key={item.label} className="min-w-0">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground block rounded-md transition-colors"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StatsBar
