"use client"
import { useEffect, useState } from 'react'

interface GitHubStats {
  stars: number
  version: string
  commits: number
}

export const StatsBar: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
  }, [])

  return (
    <div className="w-full bg-[#0a0a0f] text-[#5a5a68] border-b border-[#2a2a38]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-x-6 gap-y-2 py-2.5">
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-[#00ff88]">Open Source</span>
        </span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          Chrome 插件
          <span className="font-semibold text-[#e8e8ec]">2,847</span>
        </span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          微博净化
          <span className="font-semibold text-[#e8e8ec]">去广告</span>
        </span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          <svg className="w-3.5 h-3.5 text-[#ff00ff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z" />
          </svg>
          <span className="font-semibold text-[#e8e8ec] tabular-nums">
            {stats?.stars != null ? stats.stars.toLocaleString() : '...'}
          </span>
        </span>
        <span className="ml-auto text-xs font-mono text-[#5a5a68] tabular-nums">
          {stats?.version || 'v1.0.0'}
        </span>
      </div>
    </div>
  )
}

export default StatsBar
