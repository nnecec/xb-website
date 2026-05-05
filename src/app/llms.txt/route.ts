import { siteConfig } from '../site'

const llmsContent = `# ${siteConfig.name} - ${siteConfig.title.replace('XB - ', '')}

> ${siteConfig.description}

## Links

- [Homepage](${siteConfig.url})
- [Chrome Web Store](${siteConfig.installUrl})
- [GitHub](${siteConfig.repoUrl})

## Features

- **极简界面、没有广告** — 去除信息流广告、侧栏推广、热搜植入等干扰元素
- **深度定制微博页面** — CSS 注入级精细控制，打造个性化微博界面
- **一键导出图片** — 高清长图导出，支持深色/浅色主题切换

## Keywords

${siteConfig.keywords.join('、')}

## Technical

- Built with Next.js + TypeScript
- Licensed under GPL-3.0
- Privacy-first: no data collection
`

export async function GET(): Promise<Response> {
  return new Response(llmsContent, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

export const dynamic = 'force-static'
