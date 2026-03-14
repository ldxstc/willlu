# Essay Pages Task

## 1. Create dynamic essay route

Create `src/app/essays/[slug]/page.tsx` that:
- Reads the MDX file matching the slug from content/essays/
- Renders the full article content with proper typography
- Has a back link to home (← Back)
- Uses the same Newsreader + Inter fonts, same warm palette
- Article width: 680px max, same as homepage
- Proper heading hierarchy, paragraph spacing, blockquotes

## 2. Update essay links on homepage

In `src/app/page.tsx`, change essay links from `href="#"` to `href={/essays/${essay.slug}}`.

## 3. Fill MDX files with REAL full article content

Replace the stub content in each MDX file with the actual articles below. Keep the existing frontmatter, just replace the body.

### vibe-coding-agent-builder.mdx body:

In 2024, we built drag-and-drop agent builders. In 2026, developers just describe what they want. The config UI era lasted 18 months.

Look at what shipped in just the last few weeks:

Salesforce launched the new Agentforce Builder (Canvas view, open beta). Microsoft keeps expanding Copilot Studio. Google shipped Agent Engine GA with ADK. Every major platform invested heavily in visual agent configuration UIs.

And every developer I talk to bypasses them.

They open a terminal. They describe what they need. The agent gets built.

Here is what I think is happening:

*Config UIs are not going away. Config-ONLY UIs are going extinct.*

The visual builder still has a role: reviewing what was generated, fine-tuning edge cases, governance review, compliance sign-off. It is the inspection layer, not the creation layer.

But creation? That is moving to natural language. Fast.

Three reasons config-only builders lose:

**1. Speed.** A visual builder takes hours to configure a complex agent. Natural language takes minutes. When your competitor deploys agents 10x faster, the config UI becomes a tax.

**2. Skill ceiling.** Drag-and-drop builders cap at what the UI designer anticipated. NL input has no ceiling — describe any workflow, any edge case, any integration. The agent figures out the implementation.

**3. The vibe coding generation.** Junior developers entering the workforce in 2026 have never hand-configured anything. They describe intent, AI generates implementation. Asking them to use a visual agent builder is like asking them to write assembly.

But config UIs do not die — they evolve.

The winning pattern: NL-first creation, visual review, human approval, deploy.

The platforms that figure this out — NL creation with visual governance — win the next wave. The ones still betting on config-only UIs are building for a user that has already moved on.

### ai-agents-cost-economics.mdx body:

The technology we built to replace offshore labor is about to cost more than offshore labor.

Gartner just dropped a prediction that should make every CX leader uncomfortable: by 2030, the cost per resolution for generative AI in customer service will exceed $3 — more than many offshore human agents.

I have spent 12+ years building enterprise AI — first at Google, now leading AI strategy at Uniphore. Here is what I think is actually happening:

**The cost stack nobody talks about**

Everyone quotes inference cost per token. That is like quoting the price of gas and ignoring the car, insurance, maintenance, and parking.

Real enterprise AI agent cost includes: orchestration layers (routing, fallback, retry logic), RAG pipelines and continuous knowledge maintenance, governance, guardrails, and audit trails, monitoring and observability, human fallback for edge cases, and error remediation when agents silently get it wrong.

Token costs get all the attention. But orchestration, governance, and human fallback are where budgets actually blow up.

**Why costs are going UP, not down**

Three forces: AI vendors are shifting from subsidized pricing to profitability. Use cases are getting harder (FAQ chatbot to multi-step reasoning with tool use). Governance requirements are exploding (EU AI Act enforcement: August 2026).

**But here is where Gartner is asking the wrong question**

"Is AI cheaper than humans?" is the wrong frame. The right question: "What can AI do that humans cannot at any price?"

Instant response at scale, 24/7, zero wait time. High consistency across 20+ languages simultaneously. Real-time upsell and retention decisions based on full customer history. The ability to improve continuously from interaction data.

An AI agent that improves customer retention by 5% is worth 10x an offshore agent that does not — even if it costs more per resolution.

Cost per resolution is an efficiency metric. Value per resolution is a business metric. Enterprises that optimize for the wrong one will lose to those who do not.

**The real unlock: stop renting, start owning**

Checkr replaced GPT-4 with a fine-tuned 8B model: 5x cheaper, 30x faster, 90%+ accuracy. That is not a marginal improvement. That is a different economic model.

The companies that specialize their models on their own data will own their cost curve. Everyone else will keep feeding the frontier LLM meter and wondering why the bill keeps growing.

The future is not AI vs. humans. It is knowing which tasks deserve $0.03 of compute and which deserve $30 of human judgment.

### ai-maturity-framework.mdx body:

You have deployed AI. It works. But it does not compound. That is not Stage 3. That is Stage 2 — and most enterprises are stuck there.

**4 stages. Most stuck at Stage 2 thinking they are at Stage 3.**

Stage 1: Pilot Purgatory. Stage 2: Point Solutions. Stage 3: Platform Layer. Stage 4: AI-Native Operations.

McKinsey 2025: 88% of organizations use AI. Only 39% report enterprise-level impact. The gap lives entirely in Stage 2.

**Stage 2: Why it feels like success**

The chatbot works. The classifier is live. The summarizer saves the team 2 hours a week. Leadership says: "We are doing AI."

What is actually happening: 5 AI tools. 5 vendors. 5 data silos. Each tool gets smarter in isolation. The company gets dumber as a whole. This is the Stage 2 trap.

**The data silo problem**

Every point solution learns alone. Your customer service AI knows what customers complain about. Your sales AI knows what deals close. Your ops AI knows where the process breaks.

None of them talk to each other. The intelligence is trapped in silos.

**Stage 3: The platform layer**

This is where compounding starts. A shared data layer. Shared context. Shared memory. One interaction with a customer informs the sales model, the service model, and the operations model simultaneously.

The company gets smarter as a system, not just as individual tools. That is the Stage 2 to Stage 3 transition, and it is the hardest one.

**Stage 4: AI-native operations**

The org does not use AI. The org runs on AI. Every process, every decision, every workflow has an AI layer. Not as an add-on — as infrastructure.

Very few companies are here. But the ones that get here will be nearly impossible to compete with.

### leadership-lesson.mdx body:

One lesson about leadership has stayed with me throughout my career.

Leadership is not about doing one thing. It is about making one team.

After years at Google, building Orby AI, and now leading AI strategy at Uniphore, the pattern is always the same: the best outcomes come from aligned teams, not brilliant individuals.

Alignment is not consensus. It is commitment. Once the direction is set, you execute as one. Internal politics, competing agendas, territorial behavior — these are luxuries that ambitious teams cannot afford.

The hardest part is not setting the direction. It is getting everyone to genuinely commit to it, even when they would have chosen differently.

One team, or nothing else matters.

### anthropic-victory.mdx body:

Total Anthropic victory. For now.

Everything they have done in 2026: $20B revenue run rate. Number one on iOS. Pentagon contracts. Claude becoming the default for an entire generation of developers.

Look at the positioning: they built the safety narrative so effectively that enterprises trust them by default. While OpenAI fought public battles over governance and Google struggled with product focus, Anthropic quietly became the enterprise AI company.

The developer adoption is particularly striking. Claude Code is not just a product — it is a wedge. Every developer who builds with Claude Code becomes an advocate inside their company. Bottom-up adoption at its finest.

But here is the risk nobody is talking about: single-vendor dependency.

The same enterprise buyers who learned painful lessons from Oracle lock-in and Salesforce dependency are now going all-in on a single AI provider. The arguments for diversification that every CTO makes about cloud infrastructure somehow disappear when it comes to AI.

Anthropic is winning because they deserve to win right now. The product is genuinely good. The safety positioning is smart. The enterprise motion is working.

But "for now" is doing a lot of work in that sentence.

## 4. Update essays.ts to export getEssayBySlug function

Add a function that takes a slug and returns the essay content + frontmatter.

## 5. Install remark/rehype if needed for MDX rendering

Use next-mdx-remote (already installed) to render MDX content on essay pages.

## 6. Style the essay page

Add CSS for the essay detail page in globals.css:
- Same 680px max width
- Proper paragraph spacing (1.5rem between paragraphs)
- Blockquote styling (left border, italic)
- Bold text styling
- Back link at top
- Title, date, read time header
- "Originally published on LinkedIn" note with linkedin frontmatter flag

Build clean. Run npm run build to verify.
