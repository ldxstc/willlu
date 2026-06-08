import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";

import { getEssays, formatDate } from "@/lib/essays";

export default function Home() {
  const essays = getEssays().slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Will Lu",
    jobTitle: "VP Engineering & Head of AI Strategy at Uniphore",
    url: "https://willlu.com",
    image: "https://willlu.com/headshot.jpg",
    sameAs: ["https://linkedin.com/in/will-dongxu-lu-9b9b972b"],
    description:
      "Building the enterprise AI platform at Uniphore. Stanford GSB. Ex-Google Cloud AI (Founding Member). Co-Founded Orby AI (acquired by Uniphore).",
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <RevealSection className="hero">
        <div className="hero-orb" />
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-rule" />
            <h1>
              Building the AI platform that
              <br />
              transforms how enterprises work
            </h1>
            <p className="hero-intro">
              I spent years{" "}
              <strong>building enterprise AI at Google Cloud</strong>,
              then co-founded a company that was{" "}
              <strong>acquired for hundreds of millions</strong>. Now I&apos;m leading
              AI strategy at <strong>Uniphore</strong>, building the platform
              that turns enterprise intelligence into a compounding advantage.
              I write about what I learn along the way.
            </p>
            <div className="credential-line">
              UF · NVIDIA · Google Cloud AI · Stanford GSB · Orby AI · Uniphore
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <Image
                src="/headshot.jpg"
                alt="Will Lu"
                width={240}
                height={240}
                priority
              />
            </div>
            <p className="hero-location">
              Cupertino, CA · Building at the intersection of AI and enterprise
            </p>
          </div>
        </div>
      </RevealSection>

      <hr className="hero-divider" />

      <RevealSection className="path" id="path">
        <h2>Path</h2>

        <div className="path-items">
          <div className="path-item">
            <div className="path-year">2012</div>
            <div className="path-content">
              <h3>NVIDIA</h3>
              <div className="at">GPU Computing & AI</div>
              <p className="lesson">
                Early exposure to the hardware that would power the AI
                revolution. Learned to think at the intersection of silicon
                and software.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2013</div>
            <div className="path-content">
              <h3>Google</h3>
              <div className="at">Google Cloud AI</div>
              <p className="lesson">
                Built AI systems at scale. Learned how large organizations
                actually buy, deploy, and depend on AI. The pattern recognition
                that later became my unfair advantage started here.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2019</div>
            <div className="path-content">
              <h3>Stanford GSB</h3>
              <div className="at">Graduate School of Business</div>
              <p className="lesson">
                Where I learned to think in decades instead of quarters.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2022</div>
            <div className="path-content">
              <h3>Orby AI</h3>
              <div className="at">Co-Founder & CTO · Acquired by Uniphore</div>
              <p className="lesson">
                Left Google to build. Took the enterprise AI thesis and turned it
                into a product, a team, a company. The thesis worked.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2025</div>
            <div className="path-content">
              <h3>Uniphore</h3>
              <div className="at">VP Engineering · Head of AI Strategy</div>
              <p className="lesson">
                I&apos;ve never been more excited about what I&apos;m building.
                Open-weight models will capture 70–80% of the enterprise AI
                market — and Uniphore is positioned to own the stack that
                makes them production-ready. Stacked SLMs, autonomous agents,
                and a platform that lets enterprises build custom AI
                applications on their own data. This is the generational
                opportunity I&apos;ve been building toward for the last decade.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <h2>Writing</h2>
        <p>Frameworks and honest lessons from enterprise AI.</p>

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
        <a href="/essays" className="view-all">View all essays →</a>
      </RevealSection>

      <div className="section-breath" />

      <div className="now-band">
        <RevealSection className="now" id="now">
          <h2>Building at Uniphore</h2>

          <div className="now-grid">
            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-helix" />
                <div>
                  <h3>Helix</h3>
                  <div className="now-card-type">
                    Enterprise AI agent platform at Uniphore
                  </div>
                </div>
              </div>
              <p>
                The complete rethinking of how enterprises build and deploy AI
                agents. Stacked SLMs, a self-improving flywheel, and an
                architecture where every interaction makes the system smarter.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-slm" />
                <div>
                  <h3>Enterprise SLM</h3>
                  <div className="now-card-type">
                    Stacked small language models
                  </div>
                </div>
              </div>
              <p>
                Orchestrated small language models that beat frontier models at a
                fraction of the cost. The routing layer is the real product.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-helix" />
                <div>
                  <h3>Voice AI</h3>
                  <div className="now-card-type">
                    Conversational intelligence at Uniphore
                  </div>
                </div>
              </div>
              <p>
                Real-time conversation intelligence across every customer
                interaction. Emotion detection, agent guidance, and insights
                that turn conversations into competitive advantage.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-slm" />
                <div>
                  <h3>Marketing AI</h3>
                  <div className="now-card-type">
                    AI-native customer engagement at Uniphore
                  </div>
                </div>
              </div>
              <p>
                AI agents that activate customer data to drive personalized
                engagement, orchestrate campaigns, and maximize ROI across
                every channel. Built on an AI-first customer data platform.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-telos" />
                <div>
                  <h3>Business AI Platform</h3>
                  <div className="now-card-type">
                    The full enterprise AI stack at Uniphore
                  </div>
                </div>
              </div>
              <p>
                One platform connecting knowledge, SLMs, agents, and trust
                infrastructure. Where the SLM Flywheel, agent architecture,
                and enterprise governance come together as a single system.
              </p>
            </div>

          </div>
        </RevealSection>
      </div>

      <div className="long-game-band">
        <RevealSection className="long-game">
          <div className="long-game-accent" />
          <blockquote>
            The enterprise software market is about to be rebuilt. Platforms
            that let companies create custom AI applications — not just use
            pre-built ones — will dominate. Uniphore is where I&apos;m putting
            everything I&apos;ve learned into building that platform.
          </blockquote>
          <p>
            I believe open-weight models will own 70–80% of the enterprise
            market. The winners won&apos;t be the companies with the best
            foundation model — they&apos;ll be the platforms that make those
            models deployable, governable, and compounding. A proven exit,
            deep enterprise AI experience, a Stanford network, and trilingual
            access to the American, Chinese, and Korean markets — all of it
            is deployed at Uniphore. I write about enterprise AI because
            I&apos;m building it every day.
          </p>
        </RevealSection>
      </div>

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
