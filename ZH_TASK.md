# Chinese Version Task

Create a /zh route that mirrors the English site with all content in Chinese.

## What to Create

### 1. `src/app/zh/page.tsx`
A full Chinese version of the homepage. Copy the structure from `src/app/page.tsx` exactly — same components, same layout, same design. Translate ALL text to Chinese.

Key translations:
- "I study how compounding businesses get built" → "我研究复利型企业是如何建成的"
- "Path" → "经历"
- "Writing" → "文章"
- "Building now" → "正在构建"
- Hero intro: translate naturally, keep the same tone — sharp, confident, no fluff
- Google Cloud AI → Google Cloud AI (keep English for company names)
- Stanford GSB → 斯坦福商学院
- Credential line: keep company names in English, connect with Chinese
- "Co-Founder & CTO · Acquired by Uniphore" → "联合创始人兼CTO · 被Uniphore收购"
- Long Game blockquote: "我想构建一个比我更持久的东西。不是一个产品——而是一个由想法、信任和杠杆组成的复利系统，无论我在不在场，都能持续增长。"
- Project descriptions: translate all, keep product names in English (Rumin, PeiPei, Helix, etc.)
- "I publish on LinkedIn and update this site as I build." → "我在LinkedIn上发表文章，并在构建的过程中更新这个网站。"
- Footer: "加州·库比蒂诺"
- Navigation: 经历 · 文章 · 构建 · (keep nav structure)

### 2. Update Nav component
Add a language switcher — a small "EN | 中" toggle in the nav. On English pages, clicking 中 goes to /zh. On Chinese pages, clicking EN goes to /.

Keep it minimal — just two text links, small font, right side of nav.

### 3. Chinese Nav component
Create `src/components/NavZh.tsx` — same as Nav.tsx but with Chinese nav labels and the language switcher pointing back to /.

### 4. Essay list on /zh
Read the same essays from content/essays/ but display Chinese titles if available. For now, just show the English titles (we can add Chinese essay translations later). The essay links should still go to /essays/[slug] (English essays).

### 5. Chinese font
Add Noto Sans SC or Noto Serif SC from Google Fonts for Chinese text. Apply it alongside the existing Fraunces + Inter. The Chinese font should be the fallback for CJK characters.

In layout.tsx, add:
```
import { Noto_Sans_SC } from 'next/font/google'
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-noto-sc' })
```

Add the variable to the body className. In globals.css, add `var(--font-noto-sc)` to the font stacks.

### 6. Meta tags
Add proper Chinese meta tags for the /zh page:
- title: "陆东旭 — 企业AI构建者"
- description: "企业AI构建者。斯坦福商学院。Google Cloud AI。Orby AI联合创始人（被Uniphore收购）。构建复利型企业的框架。"
- og:locale: "zh_CN"

## Important
- Keep the EXACT same design, spacing, typography, and layout as the English version
- Company names and product names stay in English
- The tone should be the same as English — sharp, confident, no marketing fluff
- Chinese text should feel native, not translated
- Run npm run build to verify
