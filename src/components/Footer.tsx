import Link from 'next/link'
import { siGithub } from 'simple-icons'

import { siteConfig } from '@/app/site'

const footerLinks = [
  { label: '产品能力', href: '/#features' },
  { label: '更新记录', href: '/changelog' },
  { label: '隐私政策', href: '/privacy' },
] as const

export function Footer() {
  return (
    <footer className="bg-muted/20">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" lang="en" className="text-edge text-3xl font-bold lowercase">
            xb
          </Link>
          <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-7">
            为微博读者打造的开源浏览器扩展。
          </p>
          <p className="text-muted-foreground mt-5 text-xs">以 GPL-3.0 协议开源，由 nnecec 维护</p>
        </div>
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground inline-flex min-h-10 items-center transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex min-h-10 items-center gap-2 transition-colors"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={siGithub.path} />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
