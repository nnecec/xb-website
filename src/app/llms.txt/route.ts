import { siteConfig } from '../site'

const llmsContent = `# ${siteConfig.name} - ${siteConfig.shortDescription}

> ${siteConfig.description}

## Links

- [Homepage](${siteConfig.url})
- [Chrome Web Store](${siteConfig.installUrl})
- [Microsoft Edge Add-ons](${siteConfig.edgeInstallUrl})
- [Firefox Add-ons](${siteConfig.firefoxInstallUrl})
- [GitHub](${siteConfig.repoUrl})

## Features

- **减少页面干扰** — 减少信息流广告、侧栏推广和热搜植入等元素
- **调整微博外观** — 可设置字体、行高、主题和内容密度
- **导出高清长图** — 支持深色和浅色主题

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
