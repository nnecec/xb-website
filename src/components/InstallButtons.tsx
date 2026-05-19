'use client'

import { siGooglechrome, siFirefoxbrowser, siGithub } from 'simple-icons'

import { siteConfig } from '@/app/site'
import { cn } from '@/lib/utils'

type InstallButtonsVariant = 'hero' | 'section'
type InstallButtonKind = 'chrome' | 'firefox' | 'github'

const labels: Record<InstallButtonsVariant, Record<InstallButtonKind, string>> = {
  hero: {
    chrome: '添加至 Chrome',
    firefox: '添加至 Firefox',
    github: '查看源码',
  },
  section: {
    chrome: '在 Chrome 上安装',
    firefox: '在 Firefox 上安装',
    github: '在 GitHub 上查看',
  },
}

const buttonConfig: Record<
  InstallButtonKind,
  { href: string; icon: string; accent: string; hover: string; featured?: boolean }
> = {
  chrome: {
    href: siteConfig.installUrl,
    icon: siGooglechrome.path,
    accent: 'text-[#00ff88]',
    hover: 'hover:border-[#00ff88]/40 hover:bg-[#00ff88]/10 hover:shadow-[0_0_24px_rgba(0,255,136,0.12)]',
    featured: true,
  },
  firefox: {
    href: siteConfig.firefoxInstallUrl,
    icon: siFirefoxbrowser.path,
    accent: 'text-[#ff8a4c]',
    hover: 'hover:border-[#ff8a4c]/35 hover:bg-[#ff8a4c]/8',
  },
  github: {
    href: siteConfig.repoUrl,
    icon: siGithub.path,
    accent: 'text-[#9898a4]',
    hover: 'hover:border-[#9898a4]/35 hover:bg-white/[0.04]',
  },
}

function BrowserIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={cn('size-[18px] shrink-0', className)} role="img" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  )
}

function InstallButton({ kind, label }: { kind: InstallButtonKind; label: string }) {
  const config = buttonConfig[kind]

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-1 items-center justify-center gap-2.5 rounded-xl border px-5 py-3.5 text-sm font-medium text-[#e8e8ec] transition-all duration-300 active:scale-[0.98]',
        config.featured
          ? 'border-[#00ff88]/25 bg-[#00ff88]/[0.07]'
          : 'border-[#2a2a38]/70 bg-[#0a0a0f]/40',
        config.hover
      )}
    >
      <BrowserIcon
        path={config.icon}
        className={cn(config.accent, 'transition-transform duration-300 group-hover:scale-110')}
      />
      <span className="whitespace-nowrap">{label}</span>
    </a>
  )
}

interface InstallButtonsProps {
  variant?: InstallButtonsVariant
  className?: string
}

export function InstallButtons({ variant = 'hero', className }: InstallButtonsProps) {
  const copy = labels[variant]

  return (
    <div
      role="group"
      aria-label="安装与源码"
      className={cn(
        'inline-flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-[#2a2a38]/60 bg-[#12121a]/50 p-2 backdrop-blur-md sm:flex-row sm:items-stretch',
        className
      )}
    >
      <InstallButton kind="chrome" label={copy.chrome} />
      <InstallButton kind="firefox" label={copy.firefox} />
      <InstallButton kind="github" label={copy.github} />
    </div>
  )
}

export default InstallButtons
