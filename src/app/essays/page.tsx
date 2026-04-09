import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import { getEssays, formatDate } from "@/lib/essays";

export const metadata = {
  title: "Writing — Will Lu",
  description: "Frameworks and honest lessons from enterprise AI.",
};

export default function EssaysPage() {
  const essays = getEssays();

  return (
    <>
      <Nav />

      <section className="hero" style={{ minHeight: 'auto', paddingBottom: '3rem' }}>
        <div className="hero-rule" />
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Writing</h1>
        <p className="hero-intro">
          Frameworks and honest lessons from enterprise AI.
        </p>
      </section>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <div className="essay-list">
          {essays.map((essay) => (
            <a
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="essay"
            >
              <div className="essay-inner">
                <h3>{essay.title}</h3>
                <p>{essay.description}</p>
                <div className="essay-meta">
                  {essay.readTime} · {formatDate(essay.date)}
                </div>
              </div>
              <span className="essay-arrow">→</span>
            </a>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="closing" as="div">
        <p className="closing-line">
          I publish on{" "}
          <a
            href="https://linkedin.com/in/will-dongxu-lu-9b9b972b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and update this site as I build.
        </p>
      </RevealSection>

      <footer>
        <div>
          <span>© 2026 Will Lu</span>
          <span className="footer-tagline"> · Cupertino, California</span>
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
