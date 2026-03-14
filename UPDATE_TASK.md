# Update Task

## 1. Add 3 new projects to "Building now" section in page.tsx

After the existing 3 (Rumin, PeiPei, Helix), add:

**Enterprise SLM Pipeline** (at Uniphore)
- Type: "Stacked small language models for enterprise AI"
- Description: "Orchestrated small language models that beat frontier models at a fraction of the cost. Fine-tuned per task, running on-prem. The routing layer is the real product — if the specialist is not confident, it escalates. Most requests never need the expensive model."

**Lore**
- Type: "Developer analytics for AI coding agents"
- Description: "Visualizes how developers actually use AI coding agents — session patterns, cost, model usage, code quality. 257 sessions analyzed. Built to understand the human-AI collaboration patterns that will define the next decade of software."

**Telos**
- Type: "AI product management engine"
- Description: "Role-based AI agents that already know the PM — their taste, domain, standards. Chat-first interface. No forms, no configuration pages. You talk to the system; the system updates itself. Built on the insight that PMs cannot brain-dump their tribal knowledge into a tool."

## 2. Replace the 4 sample essays with REAL LinkedIn posts

Delete old MDX files. Create new ones in content/essays/:

**Essay 1: vibe-coding-agent-builder.mdx**
- title: "Vibe Coding Will Kill the Agent Builder UI"
- description: "In 2024, we built drag-and-drop agent builders. In 2026, developers just describe what they want. The config UI era lasted 18 months."
- date: 2026-03-10
- readTime: "4 min"

**Essay 2: anthropic-supply-chain-risk.mdx**
- title: "The Pentagon Designated Anthropic a Supply-Chain Risk"
- description: "First American AI company to receive that designation. A label historically reserved for Huawei and Kaspersky. Your AI vendor risk profile just became as critical as your cloud provider risk profile."
- date: 2026-03-12
- readTime: "3 min"

**Essay 3: stacked-slms.mdx**
- title: "You Dont Need One Giant AI Model. You Need a Team of Small Ones."
- description: "Orchestrated small language models beat frontier models at a fraction of the cost. Harvard and Georgia Tech proved it. We are building it at Uniphore."
- date: 2026-02-24
- readTime: "5 min"

**Essay 4: ai-agent-social-structures.mdx**
- title: "When AI Agents Start Forming Their Own Social Structures"
- description: "Multi-agent systems are documenting something we did not anticipate: emergent social behaviors. Cooperation. Negotiation. Resource allocation. And yes — deception."
- date: 2026-03-14
- readTime: "3 min"

**Essay 5: agent-team-competition.mdx**
- title: "Agent Team Competition"
- description: "What happens when you pit AI agent teams against each other on real enterprise tasks. The results surprised everyone — including the agents."
- date: 2026-02-22
- readTime: "6 min"

Each MDX file should have frontmatter with: title, description, date, readTime, linkedin (set to true).
Add a "linkedin" field to the Essay type in src/lib/essays.ts.

Keep exact same design. Same Ive aesthetic. Just updated content.
