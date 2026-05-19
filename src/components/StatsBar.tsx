'use client'

import { useEffect, useState, useRef } from 'react'
import { siGooglechrome, siFirefoxbrowser } from 'simple-icons'

import { siteConfig } from '@/app/site'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { HyperText } from '@/components/ui/hyper-text'
import { NumberTicker } from '@/components/ui/number-ticker'

const Icon: React.FC<{ path: string; className?: string }> = ({
  path,
  className = 'h-3.5 w-3.5',
}) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
)

interface GitHubStats {
  stars: number
  version: string
  commits: number
}

export const StatsBar: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  console.log('🚀 ~ StatsBar ~ stats:', stats)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (hasStartedRef.current) return
    hasStartedRef.current = true

    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {})
  }, [])

  return (
    <div className="w-full border-b border-[#00ff88]/[0.06] bg-[#0a0a0f]/15 text-[#bcbcc9] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-[#00ff88]" />
          <AnimatedShinyText
            shimmerWidth={80}
            className="text-xs tracking-wide text-[#00ff88] uppercase dark:via-[#00ff88]/70"
          >
            开源
          </AnimatedShinyText>
        </span>
        <a
          href={siteConfig.installUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs tracking-wide uppercase transition-colors hover:text-[#e8e8ec]"
        >
          <Icon path={siGooglechrome.path} />
          Chrome
        </a>
        <a
          href={siteConfig.firefoxInstallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs tracking-wide uppercase transition-colors hover:text-[#e8e8ec]"
        >
          <Icon path={siFirefoxbrowser.path} />
          Firefox
        </a>
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          微博净化
          <span className="font-semibold text-[#e8e8ec]">去广告</span>
        </span>
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          <svg className="size-3.5 text-[#ff00ff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z" />
          </svg>
          {stats?.stars != null ? (
            <NumberTicker
              value={stats.stars}
              className="font-semibold text-[#e8e8ec] tabular-nums"
            />
          ) : (
            <span className="font-semibold text-[#e8e8ec] tabular-nums">...</span>
          )}
        </span>
        <span className="ml-auto font-mono text-xs text-[#e8e8ec] tabular-nums">
          {stats?.version || 'v1.0.0'}
        </span>
      </div>
    </div>
  )
}

export default StatsBar
