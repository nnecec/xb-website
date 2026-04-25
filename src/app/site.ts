export const siteConfig = {
  name: 'XB',
  title: 'XB - 更清爽的微博 Chrome 插件',
  description:
    'XB 是一款面向中文用户的微博 Chrome 插件，支持微博去广告、精简侧栏与推荐内容，帮助你获得更清爽、更专注的微博浏览体验，并可一键将微博导出为图片。每一项功能都为简洁与效率而生。',
  url: 'https://xb-extension.vercel.app',
  locale: 'zh_CN',
  installUrl:
    'https://chromewebstore.google.com/detail/xb/ffhppkcianllofhhjohbfbobjfppbeao',
  repoUrl: 'https://github.com/nnecec/xb',
  ogImage: 'https://xb-extension.vercel.app/images/weibo-after.jpeg',
  creator: 'nnecec',
  keywords: [
    '微博插件',
    '微博 Chrome 插件',
    '微博浏览器插件',
    '微博去广告',
    '精简微博',
    '微博净化',
    '微博美化',
    '微博扩展',
    '微博工具',
  ],
} as const

export const faqItems = [
  {
    question: 'XB 是什么？',
    answer:
      'XB 是一款微博 Chrome 插件，用来去除广告、精简页面布局，并让微博界面更清爽、更接近高效的信息流阅读体验，并可一键将微博导出为图片。',
  },
  {
    question: 'XB 能解决哪些微博界面问题？',
    answer:
      '它可以帮助你减少微博信息流广告、弱化干扰元素、精简侧栏和推荐内容，让刷微博时更专注于真正想看的内容。',
  },
  {
    question: 'XB 支持哪些浏览器？',
    answer:
      'XB 目前主要面向 Chrome 使用，也适合大多数兼容 Chrome 扩展的 Chromium 浏览器环境。',
  },
  {
    question: 'XB 是否开源？',
    answer:
      '是。项目代码已公开在 GitHub，你可以查看实现细节、提交 issue，也可以参与贡献。',
  },
  {
    question: 'XB 会收集用户数据吗？',
    answer: 'XB 以本地体验优化为主，强调隐私优先，不以收集用户数据为产品价值。',
  },
] as const
