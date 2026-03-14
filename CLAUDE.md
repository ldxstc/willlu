# Will Lu Personal Website

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- MDX for blog essays
- Deployed to Vercel

## Design Philosophy — Jony Ive
"True simplicity is derived from so much more than just the absence of clutter. It's about bringing order to complexity."

This site follows Ive's principles:
- Material honesty: Light warm palette (#fafaf8), no dark-mode costume
- Two typefaces only: Newsreader (serif, headings/voice) + Inter (sans, body/utility)
- 680px content width — like a book
- Space is the only separator — no cards, no decorative borders
- Every element must pass the inevitability test: if you can remove it and nothing breaks, remove it
- 8px subtle reveal animations — felt, not seen
- No emoji, no badges, no tags, no section numbers

## Structure (5 sections, inevitable order)
1. **Hero** — "I study how compounding businesses get built" + one paragraph context
2. **Writing** — Essay list from MDX files. Title, description, read time. No cards, just clean list items with top borders.
3. **Path** — 4 career chapters (Stanford → Google → Orby AI $245M exit → Uniphore). Year on left, story on right.
4. **Now** — 3 current projects (Rumin, PeiPei, Helix). Name, type, one paragraph.
5. **Subscribe** — One email form. One sentence. Done. (Wire to placeholder, will add Buttondown/ConvertKit later)

Plus: minimal nav (Will Lu | Writing Path Now Subscribe), quiet footer (© 2026 + LinkedIn + Twitter)

## Content
Essays are MDX files in /content/essays/. Each has frontmatter:
```
title, description, date, readTime
```

## Key Details
- Nav auto-hides on scroll down, reappears on scroll up
- Smooth scroll for anchor links
- Mobile responsive: single column, nav collapses
- No JavaScript frameworks for animation — CSS transitions only + tiny IntersectionObserver

## Reference Design
The exact HTML/CSS reference is at: ~/.openclaw/workspace/will-site/index.html
Match that design EXACTLY in the Next.js implementation. Same fonts, same spacing, same colors, same feel.

## Bio Context (for content)
- Will Lu, Cupertino CA
- Stanford GSB → Google 9 years (enterprise AI) → Founded Orby AI → $245M acquisition by Uniphore → VP Eng & Head of AI Strategy at Uniphore
- Trilingual: English, Chinese, Korean
- Building: Rumin (ambient intelligence for small teams), PeiPei (AI running coach), Helix (agent platform at Uniphore)
- Goal: $1B by 50 (currently 40)
