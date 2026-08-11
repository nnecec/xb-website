import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

import { MotionProvider } from '@/components/MotionProvider'

import { siteConfig } from './site'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | XB',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator, url: siteConfig.repoUrl }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: 'browser extension',
  alternates: {
    canonical: '/',
  },
  other: {
    'og:image:width': String(siteConfig.ogImageWidth),
    'og:image:height': String(siteConfig.ogImageHeight),
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'XB 微博浏览器扩展界面预览',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: 'XB 微博浏览器扩展界面预览',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(){try{var t=localStorage.getItem('xb-theme');` +
              `var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;` +
              `document.documentElement.classList.toggle('dark',d);` +
              `document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()`,
          }}
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="XB 项目摘要" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="XB 完整内容" />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground fixed start-3 top-3 z-[100] -translate-y-[200%] rounded-lg px-4 py-2 text-sm font-medium focus:translate-y-0"
        >
          跳到主要内容
        </a>
        <MotionProvider>{children}</MotionProvider>
        <GoogleAnalytics gaId="G-M7NWJPSRZK" />
      </body>
    </html>
  )
}
