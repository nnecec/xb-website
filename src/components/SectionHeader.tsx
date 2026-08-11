import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 max-w-3xl sm:mb-16', align === 'center' && 'mx-auto text-center')}>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
      <h2 className="mt-4 text-4xl leading-[1.04] font-semibold sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-6 max-w-[65ch] text-base leading-8 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
