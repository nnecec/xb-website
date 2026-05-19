'use client'

import { AnimatedList } from '@/components/ui/animated-list'
import { ChangelogReleaseBody } from '@/components/ChangelogReleaseBody'

export interface ChangelogRelease {
  tag_name: string
  name: string | null
  published_at: string
  html_url: string
  prerelease: boolean
  body: string | null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function ChangelogReleases({ releases }: { releases: ChangelogRelease[] }) {
  if (releases.length === 0) {
    return (
      <p className="text-center text-sm text-[#9898a4]">
        暂时无法拉取发布记录，可直接在 GitHub 上查看版本历史。
      </p>
    )
  }

  return (
    <AnimatedList className="items-stretch gap-4" delay={1200}>
      {[...releases].reverse().map((item) => {
        const title = item.name?.trim() || item.tag_name
        return (
          <div
            key={`${item.tag_name}-${item.published_at}`}
            className="w-full rounded-xl border border-[#2a2a38] bg-[#0a0a0f] p-6 transition-colors hover:border-[#3a3a4a]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[#e8e8ec] underline-offset-4 hover:text-[#00d4ff] hover:underline"
                  >
                    {title}
                  </a>
                  {item.prerelease ? (
                    <span className="rounded-md border border-[#5a5a68] px-2 py-0.5 font-mono text-[10px] tracking-wide text-[#9898a4] uppercase">
                      Pre-release
                    </span>
                  ) : null}
                </div>
                {item.body ? <ChangelogReleaseBody markdown={item.body} /> : null}
              </div>
              <time
                dateTime={item.published_at}
                className="shrink-0 font-mono text-xs text-[#5a5a68] tabular-nums"
              >
                {formatDate(item.published_at)}
              </time>
            </div>
          </div>
        )
      })}
    </AnimatedList>
  )
}
