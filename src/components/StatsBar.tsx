import React from 'react'

// Lightweight top stats bar inspired by the original design
export const StatsBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0f] text-[#6b7280] border-b border-[#2a2a3a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-4 py-2">
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-[#00ff88]">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] inline-block" /> Live
        </span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          Chrome 用户
          <span className="font-semibold text-[#00ff88]">2,847</span>
        </span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-wide">
          <svg
            className="w-3 h-3 text-[#ff00ff]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 3l9 4-9 4-9-4 9-4z" />
            <path d="M3 11l9 4 9-4" />
          </svg>
          GitHub Stars
          <span className="font-semibold text-[#ff00ff]">156</span>
        </span>
        <span className="text-xs uppercase tracking-wide ml-auto">v3.2.1</span>
        <span className="text-xs uppercase tracking-wide ml-2">Commits 342</span>
        <span className="hidden sm:inline whitespace-nowrap ml-4 text-xs">via GitHub API + Chrome Web Store</span>
      </div>
    </div>
  )
}

export default StatsBar
