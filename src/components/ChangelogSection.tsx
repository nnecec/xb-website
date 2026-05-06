import React from 'react'

import { siteConfig } from '@/app/site'
import { ChangelogReleaseBody } from '@/components/ChangelogReleaseBody'
import { fetchRecentReleases } from '@/lib/github'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export async function ChangelogSection() {
  const releases = await fetchRecentReleases(5)
  const releasesListUrl = `${siteConfig.repoUrl}/releases`

  return (
    <section id="changelog" className="w-full bg-[#12121a] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#ff00ff] uppercase">
            // Changelog
          </span>
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight text-balance uppercase delay-100 md:text-5xl">
            更新记录
          </h2>
          <p className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-base text-pretty text-[#9898a4] delay-200">
            来自 GitHub Releases 的最近版本说明，便于快速了解插件迭代内容。
          </p>
        </div>

        {releases.length === 0 ? (
          <p className="animate-fade-in-up text-center text-sm text-[#9898a4] delay-300">
            暂时无法拉取发布记录，可直接在 GitHub 上查看版本历史。
          </p>
        ) : (
          <ul className="space-y-4">
            {releases.map((item, index) => {
              const title = item.name?.trim() || item.tag_name
              return (
                <li
                  key={`${item.tag_name}-${item.published_at}`}
                  className="animate-fade-in-up rounded-xl border border-[#2a2a38] bg-[#0a0a0f] p-6 transition-colors hover:border-[#3a3a4a]"
                  style={{ animationDelay: `${(index + 3) * 80}ms` }}
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
                </li>
              )
            })}
          </ul>
        )}

        <div className="animate-fade-in-up mt-10 flex justify-center delay-500">
          <a
            href={releasesListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2a2a38] bg-[#0a0a0f] px-6 py-2.5 text-sm font-semibold text-[#00d4ff] transition-colors hover:border-[#00d4ff]/40 hover:bg-[#12121a]"
          >
            查看更多
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ChangelogSection
