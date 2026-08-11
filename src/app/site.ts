export const siteConfig = {
  name: 'XB',
  title: 'XB：为微博重新设计阅读体验',
  description:
    'XB 是一款开源微博浏览器扩展，可减少广告和页面噪音，并提供时间线、阅读外观、内容导出和本地历史等调整。支持 Chrome、Edge 和 Firefox。',
  shortDescription: '为微博读者整理时间线、阅读外观和内容工具。',
  url: 'https://xb-extension.vercel.app',
  locale: 'zh_CN',
  installUrl: 'https://chromewebstore.google.com/detail/xb/ffhppkcianllofhhjohbfbobjfppbeao',
  edgeInstallUrl:
    'https://microsoftedge.microsoft.com/addons/detail/xb/mojlbnkiahdmnfaffmelfcefohpfjjla',
  firefoxInstallUrl: 'https://addons.mozilla.org/en-US/firefox/addon/xb/',
  repoUrl: 'https://github.com/nnecec/xb',
  ogImage: 'https://xb-extension.vercel.app/images/og-image.jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
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
    '微博视频下载',
    '微博下载',
    '发微博',
    '自定义字体',
    '关注分组',
    '浏览历史',
    '视频下载',
    'X 风格微博',
  ],
  routes: {
    changelog: '/changelog',
    privacy: '/privacy',
    changelogDescription: '查看 XB 的版本更新记录。',
    privacyDescription: 'XB 隐私政策：扩展在浏览器本地处理设置和历史，不收集或上传用户数据。',
  },
} as const

export type FaqItem = {
  question: string
  answer: string
  links?: readonly {
    href: string
    label: string
  }[]
}

export const faqItems: readonly FaqItem[] = [
  {
    question: 'XB 是什么？',
    answer:
      'XB 是一款为微博读者设计的开源浏览器扩展，可减少广告和页面噪音，并提供时间线、高清长图导出、视频增强和自定义字体等调整。',
  },
  {
    question: 'XB 能解决什么？',
    answer:
      '可减少信息流广告、侧栏推广和热搜植入等干扰，并支持按关注分组筛选时间线、在本地保存浏览历史。',
  },
  {
    question: '安装后会被微博封号吗？',
    answer:
      'XB 主要在浏览器本地调整页面展示，不模拟登录，也不发送自动化操作。任何第三方扩展都无法承诺平台账号的绝对零风险，你可以通过公开源码检查它的行为边界。',
  },
  {
    question: '支持哪些浏览器？',
    answer: '请选择对应浏览器商店安装 XB。',
    links: [
      {
        href: siteConfig.installUrl,
        label: '安装 XB（Chrome）',
      },
      {
        href: siteConfig.edgeInstallUrl,
        label: '安装 XB（Edge）',
      },
      {
        href: siteConfig.firefoxInstallUrl,
        label: '安装 XB（Firefox）',
      },
    ],
  },
  {
    question: '会收集我的数据吗？',
    answer:
      '不会。XB 扩展的功能处理、设置与浏览历史都留在你的浏览器本地，不收集、不上传用户数据。官网访问统计与扩展运行相互独立。',
  },
  {
    question: '开源吗？',
    answer: '代码已在 GitHub 公开，可查阅并参与贡献。',
  },
  {
    question: '和其他微博插件冲突吗？',
    answer: '可与部分同类扩展同时使用；如页面布局异常，请先关闭其他同类扩展排查。',
  },
] as const
