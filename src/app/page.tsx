import { faqItems, siteConfig } from '@/app/site'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    alternateName: 'XB 微博插件',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Any',
    browserRequirements: '需要支持 Chrome 扩展的浏览器',
    inLanguage: 'zh-CN',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    description: siteConfig.description,
    url: siteConfig.url,
    installUrl: siteConfig.installUrl,
    screenshot: [siteConfig.ogImage],
    sameAs: [siteConfig.repoUrl, siteConfig.installUrl],
    author: {
      '@type': 'Person',
      name: siteConfig.creator,
      url: siteConfig.repoUrl,
    },
    featureList: [
      '微博去广告',
      '精简微博侧栏与推荐内容',
      '极致清爽的微博阅读体验',
      '开源免费，隐私优先',
      '深度定制微博页面',
      '个性化设置',
      '一键导出高清长图',
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <main className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <StatsBar />
      <Hero />
      <ComparisonSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
