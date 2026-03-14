# Jobs Iteration — From 7.5 to 9.5+

## Available Assets
- /public/headshot.jpg — Will's LinkedIn headshot (800x800)
- /public/logo-lore.png — Lore karyotype logo (purple DNA bars, dark bg)
- /public/logo-peipei.png — PeiPei PP monogram (coral gradient)
- /public/logo-rumin.png — Rumin concentric circles (dark bg, amber glow)

## The Jobs Critique
"Show me the WORK. Don't tell me — show me."
"Where's the emotional hit in the first 3 seconds?"
"Why would I come back?"

## 30 Iterations

### THE FACE (1-5)
1. Add headshot to hero section. On desktop: right-aligned, circular, 200px diameter, with a subtle warm shadow. On mobile: centered above the headline, 140px.
2. The photo gets a subtle ring — 2px solid rgba(180,83,9,0.15) — warm terracotta whisper
3. Below the photo on desktop (or below hero on mobile), add a one-liner in small text: "Cupertino, CA · Building at the intersection of AI and enterprise"
4. The photo should have a subtle parallax-like float — CSS animation, 6s, translateY(0) to translateY(-4px) and back. Breathing, like the orb.
5. On hover, the photo ring intensifies to rgba(180,83,9,0.3). Subtle acknowledgment.

### THE WORK — Project Cards (6-15)
6. Transform "Building now" from a flat list into a VISUAL GRID. 2 columns on desktop, 1 on mobile.
7. Each project card gets: project logo/icon (48px, top-left), name, one-line type, description.
8. For Rumin: use /public/logo-rumin.png
9. For PeiPei: use /public/logo-peipei.png
10. For Lore: use /public/logo-lore.png
11. For Helix, Enterprise SLM, and Telos: create CSS-only abstract icons. Helix = a double helix made from 2 intertwined gradient lines. Enterprise SLM = 3 stacked horizontal bars (like layers). Telos = a compass/target circle.
12. Cards get a warm cream background (#F5F4F0) with 1px warm border, 16px border-radius.
13. On hover: card lifts (translateY(-3px)), shadow appears (0 8px 32px rgba(28,25,23,0.06)), border shifts to terracotta tint.
14. The card transition should be 0.4s with the Apple spring curve.
15. Project names in cards: Fraunces 1.15rem. Type line: terracotta color, 0.8rem.

### VISUAL RHYTHM (16-20)
16. Add a full-width warm band behind the "Building now" section — background #F5F4F0 (slightly different from page cream). This creates visual layers. Like how Apple alternates white/gray sections.
17. The Long Game section: also gets a distinct background — slightly warmer (#F3F1EC). The monument feel comes from differentiation, not just size.
18. Between Path and Building Now: instead of a simple divider, use 64px of empty space. Let sections breathe without a line.
19. The hero orb: make it more subtle. Reduce opacity to 0.15 on desktop, 0.1 on mobile. The headshot is now the visual anchor — the orb supports, it doesn't compete.
20. Essay items: add a tiny right-arrow (→) that appears on hover, right-aligned. Signals clickability without being aggressive.

### THE CONFIDENCE (21-25)
21. Below the hero intro text, add a credential line (subtle, small): "Stanford GSB · Google Cloud AI · $245M Exit · Uniphore". Use Inter 0.78rem, stone-400 color, with · separators. This is the Dorie Clark "social proof woven into prose" approach.
22. In the Path section, add small company logos/marks next to each entry. For Google: just the word "Google" in their font weight. For Stanford: italic serif "Stanford". For Uniphore: regular weight. For Orby: regular weight. All in stone-400, small (0.75rem). These are hints, not logos.
23. The subscribe section: add a single line of social proof below the form. "Read by founders and operators at Google, Uniphore, and startups building in AI." In stone-400, 0.72rem. Not fake — aspirational but honest.
24. Add Open Graph meta tags: title "Will Lu — Enterprise AI Builder", description, and set the headshot as og:image. This is how the site looks when shared on LinkedIn/Twitter.
25. Add a favicon that's not the default Next.js one. Generate a simple "W" in Fraunces as a 32x32 favicon. Or use a warm amber square.

### THE INVISIBLE 10% (26-30)
26. All images: use next/image with proper width/height/alt for performance and SEO.
27. Add structured data (JSON-LD) for Person schema — name, jobTitle, url, image, sameAs (LinkedIn). This is how Google shows rich results.
28. Smooth reveal stagger: the project cards should reveal in a wave — first card, then 80ms later the second, etc.
29. The scroll progress bar: make it slightly thicker (3px) and add a subtle glow (box-shadow: 0 0 8px rgba(180,83,9,0.3)).
30. Final polish: ensure every single hover state has a transition. No instant state changes anywhere. Everything moves with intention.

## Key Design Rules
- Headshot and project logos must use next/image for optimization
- Keep the Ive restraint — logos are small (48px), headshot is modest (200px), nothing screams
- The overall feel should be: "This person builds real things. Here's the proof."
- Mobile: single column, cards stack, headshot moves to center-top
- Run npm run build to verify
