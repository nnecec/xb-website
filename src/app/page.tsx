import { faqItems, siteConfig } from '@/app/site'
import ChangelogSection from '@/components/ChangelogSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import FeaturesSection from '@/components/FeaturesSection'
import { FirstScreen } from '@/components/FirstScreen'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ManifestoSection } from '@/components/ManifestoSection'
import { OpenSourceSection } from '@/components/OpenSourceSection'
import StatsBar from '@/components/StatsBar'

export default function Home() {
  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    alternateName: 'XB 微博插件',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Chrome、Edge 或 Firefox 浏览器',
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
    sameAs: [
      siteConfig.repoUrl,
      siteConfig.installUrl,
      siteConfig.edgeInstallUrl,
      siteConfig.firefoxInstallUrl,
    ],
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
      '开源',
      '本地处理',
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

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.creator,
    url: siteConfig.repoUrl,
    sameAs: [siteConfig.repoUrl],
    knowsAbout: ['Browser Extensions', 'Weibo', 'Web Development', 'Open Source'],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteConfig.url,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: siteConfig.name,
        item: siteConfig.url,
      },
    ],
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <FirstScreen>
          <Hero />
        </FirstScreen>
        <FeaturesSection />
        <ManifestoSection />
        <OpenSourceSection />
        <StatsBar />
        <ChangelogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
