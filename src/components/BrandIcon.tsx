import { siFirefoxbrowser, siGithub, siGooglechrome } from 'simple-icons'

import { cn } from '@/lib/utils'

type BrandName = 'chrome' | 'edge' | 'firefox' | 'github'

const simpleIconPaths = {
  chrome: siGooglechrome.path,
  firefox: siFirefoxbrowser.path,
  github: siGithub.path,
} as const

interface BrandIconProps {
  name: BrandName
  className?: string
}

export function BrandIcon({ name, className }: BrandIconProps) {
  if (name === 'edge') {
    return (
      <span
        aria-hidden="true"
        className={cn('size-5 shrink-0 bg-current', className)}
        style={{
          maskImage: 'url(/images/microsoft-edge.svg)',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
        }}
      />
    )
  }

  return (
    <svg
      className={cn('size-5 shrink-0', className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={simpleIconPaths[name]} />
    </svg>
  )
}
