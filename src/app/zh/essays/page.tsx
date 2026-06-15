import NavZh from "@/components/NavZh";
import RevealSection from "@/components/RevealSection";
import { getLongEssaysZh, getShortPostsZh, formatDateZh } from "@/lib/essays-zh";

export const metadata = {
  title: "文章 — 卢东旭",
  description: "企业AI的框架与真实经验。",
};

export default function EssaysZhPage() {
  const longEssays = getLongEssaysZh();
  const shortPosts = getShortPostsZh();

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
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>长文</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            更完整的论点、 thesis 和系统性思考。
          </p>
          <div className="essay-list">
            {longEssays.map((essay) => (
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
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>短文</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            更短、更锋利，通常从 LinkedIn 开始。
          </p>
          <div className="essay-list">
            {shortPosts.map((essay) => (
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
        </div>
      </RevealSection>

      <RevealSection className="closing" as="div">
        <p className="closing-line">
          我在<a href="https://www.linkedin.com/in/will-lu-9b9b972b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>上发表文章，并在构建的过程中更新这个网站。
        </p>
      </RevealSection>

      <footer>
        <div>
          <span>© 2026 卢东旭</span>
          <span className="footer-tagline"> · 加州·库比蒂诺</span>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/will-lu-9b9b972b/"
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
