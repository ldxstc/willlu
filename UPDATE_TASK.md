# Update Task v2

## 1. Replace essays with ONLY actually posted LinkedIn articles

Delete ALL existing MDX files in content/essays/. Create these 5 (all confirmed posted):

**vibe-coding-agent-builder.mdx**
- title: "Vibe Coding Will Kill the Agent Builder UI"
- description: "In 2024, we built drag-and-drop agent builders. In 2026, developers just describe what they want. The config UI era lasted 18 months."
- date: 2026-03-05
- readTime: "4 min"
- linkedin: true

**ai-maturity-framework.mdx**
- title: "Most Enterprises Are Stuck at Stage 2"
- description: "You have deployed AI. It works. But it does not compound. That is not Stage 3. That is Stage 2 — and most enterprises are stuck there."
- date: 2026-03-11
- readTime: "4 min"
- linkedin: true

**ai-agents-cost-economics.mdx**
- title: "AI Agents Are About to Cost More Than Offshore Labor"
- description: "The technology we built to replace offshore labor is about to cost more than offshore labor. A Gartner prediction that should worry every enterprise AI buyer."
- date: 2026-03-06
- readTime: "3 min"
- linkedin: true

**leadership-lesson.mdx**
- title: "One Lesson About Leadership"
- description: "One lesson about leadership has stayed with me throughout my career. Leadership is not about doing one thing. It is about making one team."
- date: 2026-02-28
- readTime: "3 min"
- linkedin: true

**anthropic-victory.mdx**
- title: "Total Anthropic Victory (For Now)"
- description: "Everything they have done in 2026: $20B revenue run rate, number one on iOS, the Pentagon. A breakdown of how Anthropic is winning — and the risks ahead."
- date: 2026-02-25
- readTime: "5 min"
- linkedin: true

## 2. Fix the Long Game section

Replace the current blockquote and paragraph. Remove ALL references to "$1B" or "billion dollars" or any specific financial target.

New blockquote:
"I want to build something that outlasts me. Not a product — a compounding system of ideas, trust, and leverage that keeps growing whether I am in the room or not."

New paragraph:
"I am forty. I have a proven exit, a decade of enterprise AI depth, a Stanford network, and trilingual access to the American, Chinese, and Korean markets. The next decade is about deploying all of that at once. I am writing to hold myself accountable."

## 3. Make sure it builds clean
Run npm run build and verify no errors.
