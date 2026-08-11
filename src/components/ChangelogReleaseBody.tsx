import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownComponents: Components = {
  a: ({ href, children, ...props }) => (
    <a
      {...props}
      href={href ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground decoration-border hover:decoration-foreground font-medium break-words underline underline-offset-4"
    >
      {children}
    </a>
  ),
}

const markdownClassName =
  'changelog-md mt-3 max-w-none text-sm leading-7 text-muted-foreground ' +
  '[&_h1]:mb-2 [&_h1]:text-lg [&_h1]:font-semibold [&_h1]:text-foreground ' +
  '[&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:first:mt-0 ' +
  '[&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:first:mt-0 ' +
  '[&_p]:my-2 [&_p]:first:mt-0 [&_p]:last:mb-0 ' +
  '[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 ' +
  '[&_li]:my-0.5 [&_li]:marker:text-muted-foreground ' +
  '[&_strong]:font-semibold [&_strong]:text-foreground ' +
  '[&_code]:break-all [&_code]:rounded-md [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-foreground ' +
  '[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-muted/60 [&_pre]:p-4 ' +
  '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-foreground ' +
  '[&_blockquote]:my-4 [&_blockquote]:border-y [&_blockquote]:py-3 [&_blockquote]:text-muted-foreground ' +
  '[&_hr]:my-4 [&_hr]:border-border ' +
  '[&_table]:my-3 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:text-left [&_table]:text-[13px] [&_table]:whitespace-nowrap ' +
  '[&_th]:border [&_th]:bg-muted [&_th]:px-2 [&_th]:py-1.5 [&_th]:text-foreground ' +
  '[&_td]:border [&_td]:px-2 [&_td]:py-1.5'

export function ChangelogReleaseBody({ markdown }: { markdown: string }) {
  const trimmed = markdown.trim()
  if (!trimmed) return null

  return (
    <div className={markdownClassName}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {trimmed}
      </ReactMarkdown>
    </div>
  )
}
