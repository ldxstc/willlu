import NavZh from "@/components/NavZh";
import RevealSection from "@/components/RevealSection";
import { getEssaysZh, formatDateZh } from "@/lib/essays-zh";

export const metadata = {
  title: "文章 — 卢东旭",
  description: "企业AI的框架与真实经验。",
};

export default function EssaysZhPage() {
  const essays = getEssaysZh();

  return (
    <>
      <NavZh />

      <section className="hero" style={{ minHeight: 'auto', paddingBottom: '3rem' }}>
        <div className="hero-rule" />
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>文章</h1>
        <p className="hero-intro">
          企业AI的框架与真实经验。
        </p>
      </section>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <div className="essay-list">
          {essays.map((essay) => (
            <a
              key={essay.slug}
              href={`/zh/essays/${essay.slug}`}
              className="essay"
            >
              <div className="essay-inner">
                <h3>{essay.title}</h3>
                <p>{essay.description}</p>
                <div className="essay-meta">
                  {essay.readTime} · {formatDateZh(essay.date)}
                </div>
              </div>
              <span className="essay-arrow">→</span>
            </a>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="closing" as="div">
        <p className="closing-line">
          我在<a href="https://linkedin.com/in/will-dongxu-lu-9b9b972b" target="_blank" rel="noopener noreferrer">LinkedIn</a>上发表文章，并在构建的过程中更新这个网站。
        </p>
      </RevealSection>

      <footer>
        <div>
          <span>© 2026 卢东旭</span>
          <span className="footer-tagline"> · 加州·库比蒂诺</span>
        </div>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/will-dongxu-lu-9b9b972b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
