import { ArrowUpRight } from 'lucide-react'

import { siteConfig } from '@/app/site'
import { BrandIcon } from '@/components/BrandIcon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface InstallButtonsProps {
  className?: string
  variant?: 'buttons' | 'icons'
  includeGithub?: boolean
}

export function InstallButtons({
  className,
  variant = 'buttons',
  includeGithub = false,
}: InstallButtonsProps) {
  const browserLinks = [
    { name: 'chrome', href: siteConfig.installUrl, label: '安装 XB（Chrome）' },
    { name: 'edge', href: siteConfig.edgeInstallUrl, label: '安装 XB（Edge）' },
    { name: 'firefox', href: siteConfig.firefoxInstallUrl, label: '安装 XB（Firefox）' },
  ] as const

  if (variant === 'icons') {
    return (
      <div
        role="group"
        aria-label="选择浏览器安装 XB"
        className={cn('flex flex-wrap items-center gap-2', className)}
      >
        {browserLinks.map((browser) => (
          <Button key={browser.name} size="icon-lg" variant="outline" asChild>
            <a
              href={browser.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={browser.label}
              title={browser.label}
            >
              <BrandIcon name={browser.name} />
            </a>
          </Button>
        ))}
        {includeGithub ? (
          <Button size="icon-lg" variant="ghost" asChild>
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="在 GitHub 查看 XB 源码"
              title="在 GitHub 查看 XB 源码"
            >
              <BrandIcon name="github" />
            </a>
          </Button>
        ) : null}
      </div>
    )
  }

  return (
    <div
      role="group"
      aria-label="选择浏览器安装 XB"
      className={cn('flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap', className)}
    >
      <Button size="lg" asChild className="min-w-48 justify-between">
        <a href={siteConfig.installUrl} target="_blank" rel="noopener noreferrer">
          <BrandIcon name="chrome" className="size-4" />
          安装 XB（Chrome）
          <ArrowUpRight className="size-4 opacity-60" />
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild className="min-w-48 justify-between">
        <a href={siteConfig.edgeInstallUrl} target="_blank" rel="noopener noreferrer">
          <BrandIcon name="edge" className="size-4" />
          安装 XB（Edge）
          <ArrowUpRight className="size-4 opacity-60" />
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild className="min-w-48 justify-between">
        <a href={siteConfig.firefoxInstallUrl} target="_blank" rel="noopener noreferrer">
          <BrandIcon name="firefox" className="size-4" />
          安装 XB（Firefox）
          <ArrowUpRight className="size-4 opacity-60" />
        </a>
      </Button>
    </div>
  )
}

export default InstallButtons
