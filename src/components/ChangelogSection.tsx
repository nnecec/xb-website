import React from 'react'

import { siteConfig } from '@/app/site'
import { ChangelogReleases } from '@/components/ChangelogReleases'
import { SectionHeader } from '@/components/SectionHeader'
import { fetchRecentReleases } from '@/lib/github'

export async function ChangelogSection() {
  const releases = await fetchRecentReleases(5)
  const releasesListUrl = `${siteConfig.repoUrl}/releases`

  return (
    <section id="changelog" className="w-full bg-[#12121a] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// Changelog"
          title="更新记录"
          description="来自 GitHub Releases 的最近版本说明，便于快速了解插件迭代内容。"
          labelColor="#ff00ff"
          titleColors={['#ff00ff', '#00d4ff', '#00ff88', '#e8e8ec']}
        />

        <ChangelogReleases releases={releases} />

        <div className="mt-10 flex justify-center">
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
