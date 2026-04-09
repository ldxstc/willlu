# Blog Page Task

## 1. Homepage: Show only latest 5 essays

In src/app/page.tsx:
- Change `const essays = getEssays()` to `const essays = getEssays().slice(0, 5)`
- After the essay-list div, add a "View all" link:
  ```
  <a href="/essays" className="view-all">View all essays →</a>
  ```

## 2. Create /essays page

Create src/app/essays/page.tsx — a dedicated archive page with ALL essays.

Design: same Ive minimal aesthetic as homepage.
- Title: "Writing"
- Subtitle: "Frameworks and honest lessons from enterprise AI."
- Full essay list (same component style as homepage)
- Nav at top (reuse Nav component)
- Footer at bottom

## 3. Create /zh/essays page

Create src/app/zh/essays/page.tsx — Chinese version of the archive.
- Title: "文章"
- Subtitle: "企业AI的框架与真实经验。"
- Full Chinese essay list from essays-zh
- NavZh at top

## 4. CSS for "view-all" link

Add to globals.css:
```css
.view-all {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.88rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.25s;
}
.view-all:hover {
  opacity: 0.7;
}
```

## 5. Update Chinese homepage too

In src/app/zh/page.tsx: same change — show only 5, add "查看全部 →" linking to /zh/essays

## Important
- Same design, same fonts, same spacing
- Essays page is just the full list — no extra decoration
- Run npm run build to verify
