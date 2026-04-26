'use client'
import { useEffect, useState, useRef, useCallback } from 'react'

interface GitHubStats {
  stars: number
  version: string
  commits: number
}

function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const rafRef = useRef<number | undefined>(undefined)
  const startedRef = useRef(false)

  const startAnimation = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const diff = end - start

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + diff * easeOut)
      setCount(current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [end, duration, start])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { count, startAnimation }
}

export const StatsBar: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const { count: displayStars, startAnimation } = useCountUp(stats?.stars ?? 2847, 2500)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (hasStartedRef.current) return
    hasStartedRef.current = true

    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        setStats(data)
        setTimeout(startAnimation, 800)
      })
      .catch(() => {
        setTimeout(startAnimation, 800)
      })
  }, [startAnimation])

  return (
    <div className="w-full border-b border-[#2a2a38] bg-[#0a0a0f] text-[#5a5a68]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff88]" />
          <span className="text-[#00ff88]">Open Source</span>
        </span>
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          Chrome 插件
          <span className="font-semibold text-[#e8e8ec] tabular-nums">2,847</span>
        </span>
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          微博净化
          <span className="font-semibold text-[#e8e8ec]">去广告</span>
        </span>
        <span className="flex items-center gap-2 text-xs tracking-wide uppercase">
          <svg className="h-3.5 w-3.5 text-[#ff00ff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z" />
          </svg>
          <span className="font-semibold text-[#e8e8ec] tabular-nums">
            {stats?.stars != null ? stats.stars.toLocaleString() : '...'}
          </span>
        </span>
        <span className="ml-auto font-mono text-xs text-[#5a5a68] tabular-nums">
          {stats?.version || 'v1.0.0'}
        </span>
      </div>
    </div>
  )
}

export default StatsBar
