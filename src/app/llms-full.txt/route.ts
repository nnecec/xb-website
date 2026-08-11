import { siteConfig } from '../site'
import { faqItems } from '../site'

const llmsFullContent = `# ${siteConfig.name} - 微博浏览器扩展

> ${siteConfig.description}

## 项目概述

${siteConfig.name}（读作 “X-B”）是一款为微博（weibo.com）设计的开源浏览器扩展，可减少广告和页面干扰，并提供阅读外观、内容导出和本地历史等调整。

- 类别：浏览器扩展（Browser Extension）
- 平台：Chrome、Edge、Firefox
- 协议：GPL-3.0
- 仓库：${siteConfig.repoUrl}
- 商店：
  - Chrome：${siteConfig.installUrl}
  - Edge：${siteConfig.edgeInstallUrl}
  - Firefox：${siteConfig.firefoxInstallUrl}
- 官方网站：${siteConfig.url}

## 核心功能

1. **减少页面干扰**
   - 减少信息流广告、侧栏推广和热搜植入
   - 梳理微博页面布局，减少视觉干扰
   - 不收集扩展使用数据

2. **时间线调整**
   - 在浏览器本地调整微博时间线
   - 保留原有数据与操作路径
   - 使用更清晰的阅读层级

3. **X 风格布局**
   - 评论、转发、点赞、收藏、分享以更轻的操作条呈现
   - 可一键关闭回到原微博样式

4. **分层转发链**
   - 将长转发链拆为层级结构
   - 让连续转发内容更易阅读

5. **话题页重写**
   - 热搜、话题链接进入 XB 话题页
   - 调整话题页的阅读层级

6. **关注分组筛选**
   - 按分组筛选时间线：特别关注、好友圈、自定义分组
   - 快速切换查看关心的圈子

7. **微博生图（高清长图导出）**
   - 单条微博、对话串、合集导出为高清长图
   - 支持深色/浅色主题与多种卡片样式

8. **字体与主题**
   - 自定义字体、字号、字重、行高
   - 深色/浅色背景预设

9. **本地浏览历史**
   - 本地记录浏览过的微博（不上传）
   - 保留关注、粉丝等常用入口

10. **视频增强**
    - 行内全屏播放，离开画面自动暂停
    - 支持下载到本地

11. **应用内发微博**
    - 在 XB 界面直接发微博

12. **本地处理**
    - 所有处理在浏览器本地完成
    - 不收集、不上传、不追踪

## 关键词

${siteConfig.keywords.join('、')}

## 常见问题

${faqItems
  .map(
    (item) => `### ${item.question}

${item.answer}
`,
  )
  .join('\n')}

## 适用用户

XB 适合以下使用场景：

- 希望摆脱信息流广告的重度微博用户
- 寻找 X（Twitter）风格阅读体验的用户
- 需要下载微博视频或导出长图的内容创作者
- 重视隐私、偏好开源工具的开发者
- 关注分组较多的资深微博用户

## 隐私政策摘要

- 不收集任何用户数据
- 不调用微博开放 API
- 不模拟登录、不发送自动化请求
- 仅在用户主动打开微博时重写页面
- 本地偏好存储，卸载即清除

完整政策：${siteConfig.url}/privacy

## 开发者信息

- 作者：${siteConfig.creator}
- GitHub：${siteConfig.repoUrl}
- 反馈渠道：GitHub Issues 公开反馈

## 技术实现

- 前端：TypeScript + React 19
- 网站：Next.js 16 (App Router) + Tailwind CSS
- 扩展本身：TypeScript，CSS 注入级精细控制
- 协议：GPL-3.0
- 部署：Vercel CDN

## 更新与版本

查看最新版本：${siteConfig.url}/changelog
完整发布历史：${siteConfig.repoUrl}/releases

## 适用人群与使用场景

- **重度微博用户**：信息流每日浏览 1 小时以上
- **内容创作者**：需要导出长图、下载视频
- **多账号 / 分组用户**：需要更细粒度的关注管理
- **隐私敏感用户**：拒绝追踪、拒绝数据收集
- **偏好简洁界面的用户**：希望减少阅读干扰

## 与其他微博插件的区别

- **代码公开**：可查阅、验证和参与贡献
- **本地处理**：不依赖扩展自建的后端服务
- **多浏览器支持**：支持 Chrome、Edge 和 Firefox
- **阅读工具**：覆盖页面干扰、外观、导出和本地历史
- **发布记录公开**：可在 GitHub Releases 查看更新

## 联系与支持

- 反馈问题：${siteConfig.repoUrl}/issues
- 贡献代码：${siteConfig.repoUrl}/pulls
- 主页：${siteConfig.url}
`

export async function GET(): Promise<Response> {
  return new Response(llmsFullContent, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

export const dynamic = 'force-static'
