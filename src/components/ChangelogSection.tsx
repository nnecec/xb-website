import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { siteConfig } from '@/app/site'
import { ChangelogReleases } from '@/components/ChangelogReleases'
import { MotionReveal } from '@/components/MotionReveal'
import { SectionHeader } from '@/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { fetchRecentReleases } from '@/lib/github'

export async function ChangelogSection() {
  const releases = await fetchRecentReleases(5)

  return (
    <section id="changelog" className="py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div>
          <MotionReveal className="flex flex-wrap items-end justify-between gap-6" distance={16}>
            <SectionHeader label="版本历史" title="版本更新，都可查阅。" />
            <Button variant="outline" asChild>
              <Link href={siteConfig.routes.changelog}>
                查看全部版本
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </MotionReveal>
          <MotionReveal className="mt-2 max-w-5xl" delay={0.08} distance={20}>
            <ChangelogReleases releases={releases} />
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}

export default ChangelogSection
