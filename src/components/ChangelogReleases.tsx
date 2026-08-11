import { ArrowUpRight } from 'lucide-react'

import { siteConfig } from '@/app/site'
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
    timeZone: 'UTC',
  })
}

export function ChangelogReleases({ releases }: { releases: ChangelogRelease[] }) {
  if (releases.length === 0) {
    return (
      <p className="text-muted-foreground border-y py-8 text-sm">
        暂时无法读取发布记录，请直接前往{' '}
        <a
          href={`${siteConfig.repoUrl}/releases`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground decoration-border underline underline-offset-4"
        >
          GitHub Releases
        </a>{' '}
        查看版本历史。
      </p>
    )
  }

  return (
    <div className="border-y">
      {releases.map((item) => {
        const title = item.name?.trim() || item.tag_name

        return (
          <article
            key={`${item.tag_name}-${item.published_at}`}
            className="grid gap-4 border-b py-7 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-8"
          >
            <div className="flex items-start justify-between gap-4 sm:block">
              <span className="min-w-0 font-mono text-sm font-medium break-all tabular-nums">
                {item.tag_name}
              </span>
              <time
                dateTime={item.published_at}
                className="text-muted-foreground mt-1 block font-mono text-xs tabular-nums"
              >
                {formatDate(item.published_at)}
              </time>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex max-w-full min-w-0 items-start gap-2 text-lg font-semibold underline-offset-4 hover:underline"
                >
                  <span className="min-w-0 break-words">{title}</span>
                  <ArrowUpRight className="text-muted-foreground mt-1 size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                {item.prerelease ? (
                  <span className="text-muted-foreground rounded-md border px-2 py-0.5 text-[10px] font-medium">
                    Pre-release
                  </span>
                ) : null}
              </div>
              {item.body ? <ChangelogReleaseBody markdown={item.body} /> : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
