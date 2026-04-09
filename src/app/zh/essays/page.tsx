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

      <RevealSection className="writing" id="writing">
        <h2>文章</h2>
        <p>企业AI的框架与真实经验。</p>

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
