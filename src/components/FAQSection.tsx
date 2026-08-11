import { Plus } from 'lucide-react'

import { faqItems } from '@/app/site'
import { SectionHeader } from '@/components/SectionHeader'

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionHeader label="常见问题" title="安装前，你可能会问。" />
        </div>
        <div className="max-w-5xl space-y-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group group-open:bg-muted/35 rounded-xl transition-colors"
            >
              <summary className="hover:bg-muted/50 -mx-3 flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 rounded-lg px-3 py-5 text-left text-base font-medium transition-colors marker:hidden">
                {item.question}
                <Plus className="text-muted-foreground size-5 shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <div className="faq-answer-grid grid">
                <div className="faq-answer text-muted-foreground max-w-2xl pr-10 pb-6 text-sm leading-7">
                  <p>{item.answer}</p>
                  {item.links ? (
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2" aria-label="浏览器商店">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground decoration-border hover:decoration-foreground font-medium underline underline-offset-4"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
