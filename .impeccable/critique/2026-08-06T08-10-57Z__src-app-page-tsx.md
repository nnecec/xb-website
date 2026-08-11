---
target: src/app/page.tsx
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-06T08-10-57Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Nielsen 启发式 | 分数 | 关键问题 |
|---|---|---:|---|
| 1 | 系统状态可见性 | 3/4 | Hero 预览有切换状态；GitHub 数据失败时可能长期停留在“读取中”。 |
| 2 | 与现实世界匹配 | 4/4 | 使用微博读者熟悉的时间线、导图、阅读设置等语言和真实截图。 |
| 3 | 用户控制与自由 | 3/4 | 提供多浏览器、源码和预览切换；但安装入口没有帮助用户判断渠道。 |
| 4 | 一致性与标准 | 4/4 | CTA、边框、圆角、按钮和产品窗口使用统一的 shadcn 语义系统。 |
| 5 | 错误预防 | 2/4 | 安装前没有浏览器识别或兼容性提示，Edge/Arc 路径需要用户自行推断。 |
| 6 | 识别而非回忆 | 3/4 | 导航、FAQ 和产品截图可帮助识别；首屏多个等权出口仍需用户理解差异。 |
| 7 | 灵活性与效率 | n/a | Persuade 页面，不是核心操作界面。 |
| 8 | 美观与极简 | 3/4 | 黑白、真实截图和留白有效；长页叙事与多次证明略显冗长。 |
| 9 | 错误识别与恢复 | 2/4 | 动态数据有失败文案，但缺少明确回退链接或恢复动作。 |
| 10 | 帮助与文档 | n/a | FAQ、隐私政策和 GitHub 已提供营销页所需的基本帮助。 |
| **总分** |  | **27/32** | **良好；安装决策、定制化证明和动态状态仍需加强。** |

## Design Specificity Verdict

**中上，但还没有达到“只有 XB 才能这样”的程度。**

设计已经通过真实 XB 截图、微博语境文案、本地处理与开源承诺脱离了泛 SaaS 模板。单色编辑感、细边界和产品窗口也与 `DESIGN.md` 高度一致。检测器扫描 `src/app` 与 `src/components` 返回空数组，说明没有发现当前规则集覆盖的明显视觉反模式。

但页面整体仍是可替换的营销页骨架：Hero、统计条、四段交替功能、宣言、开源信任区、更新记录、FAQ、CTA（`src/app/page.tsx:113-122`）。四段功能也重复使用文字加产品窗口的构图（`src/components/FeaturesSection.tsx:64-138`）。XB 真正的差异化是“顶级交互体验”和“深度定制界面”，目前更多停留在文案与第三个预览标签里，没有在首屏形成即时、可感知的证据。

浏览器运行时不可用，未取得桌面或移动截图，也未成功注入 overlay；以下视觉判断基于源码、服务端 HTML 和已有设计系统证据，不代表完成了真实渲染验证。

## Overall Impression

这是一个克制、可信、完成度不错的首页，但更像“高质量的开源扩展介绍页”，还不是“微博重度读者一眼就懂、立刻想安装的 XB”。最大机会不是继续增加视觉装饰，而是把首屏从“介绍很多能力”收束成一个可验证的阅读承诺，并直接展示它如何适应个人习惯。

## What's Working

1. **真实证据先于宣传。** Hero 和功能区都使用真实产品截图，避免了抽象插画和伪造界面，符合“可验证开源”的品牌承诺（`src/components/Hero.tsx:11-30,97-104`；`src/components/FeaturesSection.tsx:11-50,125-134`）。
2. **信任信息具体。** 开源、本地、无账号通过 GitHub 和隐私政策落地，而不是只写口号（`src/components/OpenSourceSection.tsx:11-53`）。
3. **视觉系统统一。** 语义色、细边界、产品框和留白与 shadcn 黑白编辑式设计保持一致（`src/app/globals.css:7-76,201-207`）。

## Priority Issues

### [P1] 首屏没有把“为什么现在装”压缩成一个清晰决策

**为什么重要：** 重度微博读者带着“微博太吵”的即时问题来到页面，却需要在 Chrome、Firefox、GitHub 三个出口之间先理解渠道差异。Chrome 是主按钮，但 Firefox、Edge/Arc 用户没有同等清晰的路径（`src/components/Hero.tsx:160-175`；`src/components/InstallButtons.tsx:12-65`；`src/app/site.ts:59-62`）。

**修复方向：** 将首屏主承诺压缩为“读微博，少噪音”一类单一价值；按浏览器提供明确安装路径，Firefox 紧邻主 CTA，源码移出安装决策组。

**建议命令：** `$impeccable clarify`、`$impeccable layout`

### [P1] “深度可调”没有在首屏被证明

**为什么重要：** 深度定制是 XB 的核心差异化，但现在只是 Hero 的第三个预览标签和功能区的一段描述（`src/components/Hero.tsx:24-29`；`src/components/FeaturesSection.tsx:33-40`）。用户在五秒内只能确认“它能去广告”，难以确认“它会适应我的阅读习惯”。

**修复方向：** 保留真实时间线为默认主画面，同时在首屏附近用真实设置片段、字体/行高/深浅色状态或一段克制的交互演示，直接证明“按你习惯读”。不引入概念图和虚构截图。

**建议命令：** `$impeccable shape`、`$impeccable animate`

### [P2] 高风险隐私承诺离安装动作太远

**为什么重要：** “本地处理、无 XB 账号、无数据收集”是扩展安装前的条件，而不是用户滚动到开源区后才看到的品牌故事（`src/components/Hero.tsx:170-175`；`src/components/OpenSourceSection.tsx:29-74`）。

**修复方向：** 在主 CTA 下放置一条紧凑的证明链，直接关联隐私页与 GitHub 源码；把扩展本地处理与官网统计的边界说清楚。

**建议命令：** `$impeccable clarify`

### [P2] 末尾 CTA 与首屏信息增量不足

**为什么重要：** 末尾 CTA 基本重复首屏的三条入口和相同保证，用户读完整页后没有获得新的触发点，峰终体验变成重复确认（`src/components/Hero.tsx:166-175`；`src/components/CTASection.tsx:25-35`）。

**修复方向：** 让末尾 CTA 根据用户一路阅读过的内容收束到一个具体入口，例如从时间线、导图或阅读外观开始；也可用当前版本的真实更新作为新的行动理由。

**建议命令：** `$impeccable distill`、`$impeccable clarify`

### [P3] GitHub 动态数据失败时会留下悬空状态

**为什么重要：** `StatsBar` 的请求失败后没有更新状态，Stars 可能永久显示“读取中”；版本区虽有“暂不可用”，却缺少回退链接（`src/components/StatsBar.tsx:28-35,55-73`；`src/components/ChangelogReleases.tsx:27-32`）。网络不稳时，动态信任标志反而会损害可信度。

**修复方向：** 添加明确 error state、GitHub 仓库或 Releases 回退链接，并确保“读取中”不会无限存在。

**建议命令：** `$impeccable harden`

## Persona Red Flags

### Jordan（首次使用扩展）

首屏能快速看到“添加至 Chrome”，但不知道 Edge/Arc 是否可以直接使用；Firefox 按钮缺少同样明确的安装动词。GitHub 与安装按钮并列，削弱了“现在该点什么”的单义性（`src/components/InstallButtons.tsx:12-23,42-65`）。

### Riley（压力测试者）

断网刷新后可能看到 Stars 长期“读取中”；还会追问“重写页面但不改变微博数据”具体如何验证。当前浮卡没有把该承诺直接连接到隐私政策或源码依据（`src/components/StatsBar.tsx:28-35,55-73`；`src/components/Hero.tsx:181-189`）。

### Casey（分心的移动用户）

移动端需要先读较长 Hero 文案，再处理纵向三枚安装按钮；顶部安装入口在小屏隐藏，重要操作主要位于页面上半部，不利于单手拇指触达。首屏产品图与动效在弱网下也可能增加首次决策等待（`src/components/Header.tsx:97-132`；`src/components/Hero.tsx:126-168`; `src/components/InstallButtons.tsx:42-66`）。

### 阿澈（微博重度读者）

能识别“去广告”，但首屏没有直接显示时间线前后体验，也没有证明字体、行高、主题等偏好会如何立即生效。必须继续浏览较长的功能段，才能确认 XB 是否适合自己的阅读节奏（`src/components/Hero.tsx:11-30,160-163`；`src/components/FeaturesSection.tsx:33-40`）。

## Minor Observations

- 下滚自动隐藏 Header，在长营销页中会让返回导航和安装入口依赖反向滚动；移动用户尤其容易失去位置（`src/components/Header.tsx:31-33,53-67`）。
- 首屏后的 StatsBar 先强调 GitHub Stars 与版本号，可能把开源指标置于“少噪音阅读”结果之前（`src/components/StatsBar.tsx:38-73`）。
- FAQ 使用原生 `<details>` 是正确选择；但“会被微博封号吗”排在第六项，风险敏感用户不一定自然发现（`src/components/FAQSection.tsx:23-31`）。
- 检测器结果为空并不等于完成了真实布局、动态状态或移动可用性验证；本轮浏览器运行时不可用。

## Questions to Consider

1. 如果 Hero 只能证明一件事，应该证明“少广告”，还是证明“微博终于按我的阅读习惯工作”？当前两者都说了，但都没有被视觉化到不可误解。
2. 为什么 GitHub 指标要比“你每天读微博会少看到什么、会多掌控什么”更早出现？这是给代码审查者的节奏，还是给高频读者的节奏？
3. 如果用户安装后只记得一句话，是否应是“微博属于读者”？现在的首屏和 CTA 是否真的把这句话转化成了一个具体、可验证的行动？
