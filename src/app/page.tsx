import { faqItems, siteConfig } from '@/app/site'
import ChangelogSection from '@/components/ChangelogSection'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import FeaturesSection from '@/components/FeaturesSection'
import { FirstScreen } from '@/components/FirstScreen'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ManifestoSection } from '@/components/ManifestoSection'
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
    browserRequirements: 'Chrome、Edge、Arc 或 Firefox',
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
    sameAs: [siteConfig.repoUrl, siteConfig.installUrl, siteConfig.firefoxInstallUrl],
    author: {
      '@type': 'Person',
      name: siteConfig.creator,
      url: siteConfig.repoUrl,
    },
    featureList: [
      '微博去广告',
      'X 风格布局',
      '自定义字体',
      '高清长图导出',
      '应用内发微博',
      '关注分组筛选',
      '浏览历史',
      '视频下载与全屏播放',
      '开源免费',
      '隐私优先',
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
      <FirstScreen>
        <StatsBar />
        <Hero />
      </FirstScreen>
      <ComparisonSection />
      <FeaturesSection />
      <ManifestoSection />
      <TestimonialsSection />
      <ChangelogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
