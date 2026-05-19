export const siteConfig = {
  name: 'XB',
  title: 'XB - 更清爽的微博浏览器插件',
  description:
    'XB 是一款面向中文用户的微博浏览器插件，支持微博去广告、精简侧栏与推荐内容，帮助你获得更清爽、更专注的微博浏览体验，并可一键将微博导出为图片。同时支持发微博、自定义字体、关注分组筛选、浏览历史等深度定制功能。已上架 Chrome 和 Firefox 商店。',
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
      'XB 是一款微博浏览器插件，用来去除广告、精简页面布局、发微博、自定义字体，并让微博界面更清爽、更接近高效的信息流阅读体验，还可一键将微博导出为高清长图。',
  },
  {
    question: 'XB 能解决哪些微博界面问题？',
    answer:
      '它可以帮助你减少微博信息流广告、弱化干扰元素、精简侧栏和推荐内容，支持按关注分组筛选信息流、浏览历史回顾，还能直接在插件内发微博，让刷微博时更专注于真正想看的内容。',
  },
  {
    question: 'XB 支持哪些浏览器？',
    answer:
      'XB 已同时上架 Chrome Web Store 和 Firefox Add-ons，也兼容大多数基于 Chromium 的浏览器环境（如 Edge、Arc 等）。',
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
