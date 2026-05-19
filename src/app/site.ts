export const siteConfig = {
  name: 'XB',
  title: 'XB - 更清爽的微博浏览器插件',
  description:
    'XB 为微博重新设计。去广告、发微博、自定义字体、高清导图。Chrome 与 Firefox 均已上架。简洁，专注，免费。',
  url: 'https://xb-extension.vercel.app',
  locale: 'zh_CN',
  installUrl:
    'https://chromewebstore.google.com/detail/xb/ffhppkcianllofhhjohbfbobjfppbeao',
  firefoxInstallUrl: 'https://addons.mozilla.org/en-US/firefox/addon/xb/',
  repoUrl: 'https://github.com/nnecec/xb',
  ogImage: 'https://xb-extension.vercel.app/images/weibo-after.jpeg',
  creator: 'nnecec',
  keywords: [
    '微博插件',
    '微博浏览器插件',
    '微博 Chrome 插件',
    '微博 Firefox 插件',
    '微博去广告',
    '精简微博',
    '微博净化',
    '微博美化',
    '微博扩展',
    '微博工具',
    '微博一键下载',
    '微博下载插件',
    '微博下载',
    '发微博',
    '自定义字体',
    '关注分组',
    '浏览历史',
    '视频下载',
  ],
} as const

export const faqItems = [
  {
    question: 'XB 是什么？',
    answer:
      '为微博重新设计的浏览器插件。去广告，发微博，自定义字体，高清导图 — 把微博变得更干净、更好用。',
  },
  {
    question: 'XB 能解决什么？',
    answer:
      '告别广告和杂乱推荐。按关注分组筛选信息流，浏览历史随时找回。让你只看见想看的。',
  },
  {
    question: '支持哪些浏览器？',
    answer: 'Chrome、Edge、Arc，以及 Firefox。都已上架商店，即装即用。',
  },
  {
    question: '开源吗？',
    answer: '完全开源。代码在 GitHub 上公开，可审查可贡献。',
  },
  {
    question: '会收集我的数据吗？',
    answer: '不会。一切处理都在你的浏览器本地完成。',
  },
] as const
