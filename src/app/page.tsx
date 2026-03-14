import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import SubscribeForm from "@/components/SubscribeForm";
import { getEssays, formatDate } from "@/lib/essays";

export default function Home() {
  const essays = getEssays();

  return (
    <>
      <Nav />

      <RevealSection className="hero">
        <h1>
          I study how compounding
          <br />
          businesses get built
        </h1>
        <p className="hero-intro">
          I spent <strong>9 years building enterprise AI at Google</strong>, then
          founded a company that was{" "}
          <strong>acquired for $245 million</strong>. Now I write about the
          patterns I see — how experienced operators are using AI to build things
          that compound over decades, not months.
        </p>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <h2>Writing</h2>
        <p>Frameworks and honest lessons from 13 years in enterprise AI.</p>

        <div className="essay-list">
          {essays.map((essay) => (
            <a key={essay.slug} href={`#`} className="essay">
              <h3>{essay.title}</h3>
              <p>{essay.description}</p>
              <div className="essay-meta">
                {essay.readTime} · {formatDate(essay.date)}
              </div>
            </a>
          ))}
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="path" id="path">
        <h2>Path</h2>

        <div className="path-items">
          <div className="path-item">
            <div className="path-year">2008</div>
            <div className="path-content">
              <h3>Stanford GSB</h3>
              <div className="at">Graduate School of Business</div>
              <p className="lesson">
                Where I learned to think in decades instead of quarters.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2012</div>
            <div className="path-content">
              <h3>Google</h3>
              <div className="at">Enterprise AI · 9 years</div>
              <p className="lesson">
                Built AI systems at scale. Learned how large organizations
                actually buy, deploy, and depend on AI. The pattern recognition
                that later became my unfair advantage started here.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2021</div>
            <div className="path-content">
              <h3>Orby AI</h3>
              <div className="at">Founder & CEO · Acquired for $245M</div>
              <p className="lesson">
                Left Google to build. Took the enterprise AI thesis and turned it
                into a product, a team, a company. Acquired by Uniphore within
                18 months. The thesis worked.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2022</div>
            <div className="path-content">
              <h3>Uniphore</h3>
              <div className="at">VP Engineering · Head of AI Strategy</div>
              <p className="lesson">
                Post-acquisition, leading AI strategy and building
                next-generation agent platforms. Using this chapter to prepare
                for the next one.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="now" id="now">
        <h2>Building now</h2>

        <div className="now-items">
          <div className="now-item">
            <h3>Rumin</h3>
            <div className="type">Ambient intelligence for small teams</div>
            <p>
              A judgment model that becomes unmigratable over time. Permanent
              memory, autonomous execution, partnership intelligence. Not an
              app — a presence.
            </p>
          </div>

          <div className="now-item">
            <h3>PeiPei</h3>
            <div className="type">AI running coach</div>
            <p>
              Garmin sync, adaptive training, weight tracking. Near MVP. The
              small bet that teaches me consumer product-market fit.
            </p>
          </div>

          <div className="now-item">
            <h3>Helix</h3>
            <div className="type">
              Next-generation agent platform at Uniphore
            </div>
            <p>
              Redefining how enterprises deploy conversational AI at scale. The
              internal bet that keeps my enterprise credibility sharp.
            </p>
          </div>

          <div className="now-item">
            <h3>Enterprise SLM Pipeline</h3>
            <div className="type">
              Stacked small language models for enterprise AI
            </div>
            <p>
              Orchestrated small language models that beat frontier models at a
              fraction of the cost. Fine-tuned per task, running on-prem. The
              routing layer is the real product — if the specialist is not
              confident, it escalates. Most requests never need the expensive
              model.
            </p>
          </div>

          <div className="now-item">
            <h3>Lore</h3>
            <div className="type">
              Developer analytics for AI coding agents
            </div>
            <p>
              Visualizes how developers actually use AI coding agents — session
              patterns, cost, model usage, code quality. 257 sessions analyzed.
              Built to understand the human-AI collaboration patterns that will
              define the next decade of software.
            </p>
          </div>

          <div className="now-item">
            <h3>Telos</h3>
            <div className="type">AI product management engine</div>
            <p>
              Role-based AI agents that already know the PM — their taste,
              domain, standards. Chat-first interface. No forms, no
              configuration pages. You talk to the system; the system updates
              itself. Built on the insight that PMs cannot brain-dump their
              tribal knowledge into a tool.
            </p>
          </div>
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="long-game">
        <blockquote>
          The target is a billion dollars by fifty. Not from a single
          moonshot — from ten years of compounding in skills, equity, and trust.
        </blockquote>
        <p>
          I&apos;m forty. I have a proven exit, a decade of enterprise AI depth,
          a Stanford network, and trilingual access to the American, Chinese, and
          Korean markets. The question isn&apos;t whether the pieces are there.
          It&apos;s whether I can compound them fast enough. I&apos;m writing to
          find out.
        </p>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="subscribe" id="subscribe">
        <h2>Subscribe</h2>
        <p>
          A weekly essay on building compounding businesses in the AI era.
          Frameworks from 13 years of enterprise AI. No spam, unsubscribe
          anytime.
        </p>
        <SubscribeForm />
      </RevealSection>

      <footer>
        <span>© 2026 Will Lu</span>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/will-dongxu-lu-9b9b972b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/willlu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </footer>
    </>
  );
}
