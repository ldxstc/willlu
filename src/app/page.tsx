import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";

import { getEssays, formatDate } from "@/lib/essays";

export default function Home() {
  const essays = getEssays();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Will Lu",
    jobTitle: "VP Engineering & Head of AI Strategy at Uniphore",
    url: "https://willlu.com",
    image: "https://willlu.com/headshot.jpg",
    sameAs: ["https://linkedin.com/in/will-dongxu-lu-9b9b972b"],
    description:
      "Enterprise AI builder. Stanford GSB. Google Cloud AI. Founded Orby AI ($245M exit).",
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
              I study how compounding
              <br />
              businesses get built
            </h1>
            <p className="hero-intro">
              I spent{" "}
              <strong>9 years building enterprise AI at Google Cloud</strong>,
              then co-founded a company that was{" "}
              <strong>acquired for $245 million</strong>. Now I write about the
              patterns I see — how experienced operators are using AI to build
              things that compound over decades, not months.
            </p>
            <div className="credential-line">
              UF · NVIDIA · Google Cloud AI · Stanford GSB · $245M Exit · Uniphore
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

      <RevealSection className="writing" id="writing">
        <h2>Writing</h2>
        <p>Frameworks and honest lessons from 13 years in enterprise AI.</p>

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

      <hr className="divider" />

      <RevealSection className="path" id="path">
        <h2>Path</h2>

        <div className="path-items">
          <div className="path-item">
            <div className="path-year">2010</div>
            <div className="path-content">
              <h3>University of Florida</h3>
              <div className="at">Computer Science</div>
              <p className="lesson">
                Where the foundation was laid. Engineering first, everything else second.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2012</div>
            <div className="path-content">
              <h3>NVIDIA</h3>
              <div className="at">GPU Computing & AI</div>
              <p className="lesson">
                Early exposure to the hardware that would power the AI revolution. Learned to think at the intersection of silicon and software.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2013</div>
            <div className="path-content">
              <h3>Google</h3>
              <div className="at">Google Cloud AI · 9 years</div>
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
              <div className="at">Co-Founder & CTO · Acquired for $245M</div>
              <p className="lesson">
                Left Google to build. Took the enterprise AI thesis and turned it
                into a product, a team, a company. Acquired by Uniphore within
                18 months. The thesis worked.
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2025</div>
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

      <div className="section-breath" />

      <div className="now-band">
        <RevealSection className="now" id="now">
          <h2>Building now</h2>

          <div className="now-grid">
            <div className="now-card">
              <div className="now-card-header">
                <div className="logo-dark-bg">
                  <Image
                    src="/logo-rumin.png"
                    alt="Rumin"
                    width={40}
                    height={40}
                    className="now-card-logo"
                  />
                </div>
                <div>
                  <h3>Rumin</h3>
                  <div className="now-card-type">
                    Ambient intelligence for small teams
                  </div>
                </div>
              </div>
              <p>
                A judgment model that becomes unmigratable over time. Permanent
                memory, autonomous execution, partnership intelligence. Not an
                app — a presence.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="logo-dark-bg">
                  <svg viewBox="0 0 512 512" width="56" height="56" aria-label="PeiPei logo" style={{borderRadius:'10px'}}>
                    <rect width="512" height="512" rx="112" fill="#1A1A2E"/>
                    <defs>
                      <radialGradient id="dawn-glow" cx="52%" cy="58%" r="42%">
                        <stop offset="0%" stopColor="#C4956A" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                    <path d="M 155 380 L 155 170 C 155 110, 195 78, 260 78 C 335 78, 355 128, 355 180 C 355 232, 330 264, 288 274 C 315 270, 348 268, 385 267 L 440 267" fill="none" stroke="#F2EDE4" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <ellipse cx="268" cy="182" rx="40" ry="52" fill="url(#dawn-glow)"/>
                  </svg>
                </div>
                <div>
                  <h3>PeiPei</h3>
                  <div className="now-card-type">AI running coach</div>
                </div>
              </div>
              <p>
                Garmin sync, adaptive training, weight tracking. Near MVP. The
                small bet that teaches me consumer product-market fit.
              </p>
            </div>

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
                <div className="logo-dark-bg">
                  <Image
                    src="/logo-lore.png"
                    alt="Lore"
                    width={40}
                    height={40}
                    className="now-card-logo"
                  />
                </div>
                <div>
                  <h3>Lore</h3>
                  <div className="now-card-type">
                    Tribal knowledge, without the tribe
                  </div>
                </div>
              </div>
              <p>
                Every engineering org has lore — the unwritten rules, the
                patterns that work. Lore captures it automatically from AI
                coding sessions and turns it into a living, shared brain.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-telos" />
                <div>
                  <h3>Telos</h3>
                  <div className="now-card-type">
                    AI product management engine
                  </div>
                </div>
              </div>
              <p>
                Role-based AI agents that already know the PM. Chat-first
                interface. You talk to the system; the system updates itself.
              </p>
            </div>
          </div>
        </RevealSection>
      </div>

      <div className="long-game-band">
        <RevealSection className="long-game">
          <div className="long-game-accent" />
          <blockquote>
            I want to build something that outlasts me. Not a product — a
            compounding system of ideas, trust, and leverage that keeps growing
            whether I am in the room or not.
          </blockquote>
          <p>
            I am forty. I have a proven exit, a decade of enterprise AI depth, a
            Stanford network, and trilingual access to the American, Chinese, and
            Korean markets. The next decade is about deploying all of that at
            once. I am writing to hold myself accountable.
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
