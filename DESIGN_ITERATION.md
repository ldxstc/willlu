# Design Iteration Task — 30 Rounds of Ive

## Philosophy
"Plain" and "simple" are not the same thing. Plain is lazy. Simple is the hardest thing to achieve. The difference is CRAFT. Every detail must feel inevitable, considered, and cared for.

Ive: "It's sad and frustrating that we are surrounded by products that seem to testify to a complete lack of care."

This site must testify to EXTREME care.

## The 30 Iterations (grouped by theme)

### Typography Craft (1-6)
1. Switch to a more distinctive serif — Fraunces (optical size axis, soft, warm, characterful) for display headlines. Keep Inter for body but tighten tracking.
2. Modular type scale: 0.75 / 0.875 / 1 / 1.125 / 1.5 / 2 / 2.75 / 3.5rem — every size intentional
3. Hero headline should be LARGE — 4rem+ on desktop. It's the statement. Give it room to breathe.
4. Body text: 17px, line-height 1.75. Slightly larger than default. Reading comfort is luxury.
5. Smart quotes, proper em dashes, no straight quotes anywhere in content
6. Letter-spacing micro-adjustments: headlines slightly tighter (-0.02em), small text slightly wider (0.01em)

### Color & Material (7-12)
7. Background: not flat white. Warm cream #FAF9F6 with a VERY subtle warm gradient from top to bottom (barely perceptible, like aged paper)
8. Text: not black. Deep warm ink #1C1917 (stone-900). Secondary: #57534E (stone-600). Tertiary: #A8A29E (stone-400)
9. One accent color only: a warm terracotta/clay #B45309 (amber-700) — used SPARINGLY. Only for the most important interactive elements.
10. Borders: not gray lines. Warm stone borders rgba(28,25,23,0.08) that feel like pencil marks
11. Selection color: warm amber highlight, like highlighting with a warm marker
12. Hover states: elements shift to slightly warmer tone, not just opacity. Color temperature change.

### Spatial Design (13-18)
13. 8px base grid. All spacing is multiples: 8, 16, 24, 32, 48, 64, 96, 128px
14. Hero section: 200px top padding. Breathe. The space IS the luxury.
15. Between sections: 96px (6rem). Between items within sections: 0 (borders create rhythm)
16. Content width: 720px for body text (45-75 char line length optimal). NOT wider.
17. Essay list items: taller padding (28px vertical). More breathing room between entries.
18. The "long game" blockquote section: 128px vertical padding. Monument status.

### Motion & Feel (19-22)
19. Reveal animation: 12px translate, 0.7s duration, cubic-bezier(0.16, 1, 0.3, 1) — an Apple-like spring
20. Stagger reveals within sections: each child delays 60ms after parent
21. Essay hover: translate-x 3px to the right + color warm shift. Like a book spine sliding out.
22. Nav: 0.3s blur transition on scroll. Smooth, never jerky.

### Detail Craft (23-27)
23. Dividers: not full-width hr. A 48px centered line that looks hand-drawn (slightly tapered ends via gradient)
24. Essay meta text: use a bullet separator (·) not a dash, with proper spacing
25. The "now" items: add a thin left border accent on hover (2px terracotta), slides in from 0 to full height
26. Footer: add a subtle tagline. "Cupertino, California" feels like a signature.
27. Back arrow on essay pages: use a proper left arrow (←) with hover animation that nudges left 2px

### The Monumental Touches (28-30)
28. The Long Game blockquote: render in a larger size (1.5rem), with the serif font, with generous line-height (1.7). It should feel like it's carved in stone.
29. Hero section: add a single, thin horizontal rule ABOVE the headline (32px wide, centered). Like the start of a chapter in a fine book.
30. Final inevitability test: remove anything that fails. If every element feels like it HAS to be there, we're done.

## Implementation

Rewrite globals.css completely with all the above refinements. Update layout.tsx to use Fraunces + Inter from Google Fonts. Update page.tsx and essay page for any structural changes. Keep content identical — this is purely a design elevation.

The font imports should be:
- Fraunces (variable, opsz, wght 300-700, ital) — for all headings, blockquotes, the nav name
- Inter (wght 300-500) — for body text, meta, small text

Build must pass clean. Run npm run build.
