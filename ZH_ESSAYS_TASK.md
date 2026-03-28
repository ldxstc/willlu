# Chinese Essay Translation Task

## 1. Create content/essays-zh/ directory
Mirror the English essays directory with Chinese translations. Same filenames.

## 2. Translate ALL 12 essays
For each essay in content/essays/:
- Create the corresponding file in content/essays-zh/ with same slug
- Translate the frontmatter: title, description (keep date, readTime, linkedin as-is)
- Translate the body text naturally — not word-for-word. The Chinese should feel like it was written in Chinese by a native speaker.
- Keep company names, product names, and technical terms in English (GPT-4, Claude, NVIDIA, Checkr, Kimi K2.5, etc.)
- Keep the same tone: sharp, confident, no fluff

## 3. Create src/lib/essays-zh.ts
Copy essays.ts but read from content/essays-zh/ instead.

## 4. Update src/app/zh/page.tsx
Import from essays-zh.ts instead of essays.ts. The essay links should go to /zh/essays/[slug].

## 5. Create src/app/zh/essays/[slug]/page.tsx
Chinese essay detail page — same design as the English one but reads from essays-zh. Back link goes to /zh. "Originally published on LinkedIn" → "最初发表于LinkedIn".

## 6. The 12 essays to translate:

1. agent-definition-leverage — "职场最不公平的优势" (Grove × agents leverage)
2. ai-agents-cost-economics — "AI代理即将比外包人工更贵"
3. ai-maturity-framework — "大多数企业卡在了第二阶段"
4. anthropic-victory — "Anthropic的全面胜利（暂时的）"
5. cursor-kimi-strategy-guide — "Cursor被抓了。我把它当作战略指南来读。"
6. knuth-claude-cycles — "Knuth说了一声「震惊！」——如果你了解Knuth，你就知道这意味着什么"
7. leadership-lesson — "关于领导力，有一个教训一直伴随着我"
8. mcp-vs-cli-wrong-debate — "MCP vs CLI是一场错误的辩论"
9. nvidia-gtc-openclaw-linux — "Jensen把OpenClaw比作Linux。没人在谈论这意味着什么。"
10. slm-flywheel-own-your-ai — "你的AI账单在增长。你的AI护城河没有。"
11. vibe-coding-agent-builder — "Vibe Coding将杀死Agent Builder UI"
12. you-are-the-director-now — "你不再是工程师了。你是导演。"

## Important
- Chinese text must feel NATIVE, not translated
- Same Jony Ive minimal design
- Run npm run build to verify
