import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownComponents: Components = {
  a: ({ href, children, ...props }) => (
    <a
      {...props}
      href={href ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#00d4ff] underline-offset-2 hover:underline"
    >
      {children}
    </a>
  ),
}

const markdownClassName =
  'changelog-md mt-3 max-w-none text-sm leading-relaxed text-[#b8b8c4] ' +
  '[&_h1]:mb-2 [&_h1]:text-lg [&_h1]:font-bold [&_h1]:text-[#e8e8ec] ' +
  '[&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-[#e8e8ec] [&_h2]:first:mt-0 ' +
  '[&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-[#d0d0d8] [&_h3]:first:mt-0 ' +
  '[&_p]:my-2 [&_p]:first:mt-0 [&_p]:last:mb-0 ' +
  '[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 ' +
  '[&_li]:my-0.5 [&_li]:marker:text-[#5a5a68] ' +
  '[&_strong]:font-semibold [&_strong]:text-[#e8e8ec] ' +
  '[&_code]:rounded [&_code]:bg-[#1a1a24] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-[#00ff88] ' +
  '[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-[#2a2a38] [&_pre]:bg-[#0d0d12] [&_pre]:p-3 ' +
  '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[#b8b8c4] ' +
  '[&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-[#ff00ff]/50 [&_blockquote]:pl-3 [&_blockquote]:text-[#9898a4] ' +
  '[&_hr]:my-4 [&_hr]:border-[#2a2a38] ' +
  '[&_table]:my-3 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-[13px] ' +
  '[&_th]:border [&_th]:border-[#2a2a38] [&_th]:bg-[#1a1a24] [&_th]:px-2 [&_th]:py-1.5 [&_th]:text-[#e8e8ec] ' +
  '[&_td]:border [&_td]:border-[#2a2a38] [&_td]:px-2 [&_td]:py-1.5'

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
