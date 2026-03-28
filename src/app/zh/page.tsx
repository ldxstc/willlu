import Image from "next/image";
import NavZh from "@/components/NavZh";
import RevealSection from "@/components/RevealSection";

import { getEssays, formatDate } from "@/lib/essays";

export default function HomeZh() {
  const essays = getEssays();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "陆东旭 (Will Lu)",
    jobTitle: "VP Engineering & Head of AI Strategy at Uniphore",
    url: "https://willlu.com/zh",
    image: "https://willlu.com/headshot.jpg",
    sameAs: ["https://linkedin.com/in/will-dongxu-lu-9b9b972b"],
    description:
      "企业AI构建者。斯坦福商学院。Google Cloud AI。Orby AI联合创始人（被Uniphore收购）。",
  };

  return (
    <>
      <NavZh />
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
              我研究复利型企业
              <br />
              是如何建成的
            </h1>
            <p className="hero-intro">
              我曾在<strong>Google Cloud从事企业AI建设</strong>，
              之后联合创立了一家公司，最终以<strong>数亿美元被收购</strong>。
              现在我写下我观察到的规律——那些经验丰富的操盘手如何用AI构建
              能够跨越数十年持续复利增长的事业，而非昙花一现。
            </p>
            <div className="credential-line">
              UF · NVIDIA · Google Cloud AI · 斯坦福商学院 · Orby AI · Uniphore
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <Image
                src="/headshot.jpg"
                alt="陆东旭"
                width={240}
                height={240}
                priority
              />
            </div>
            <p className="hero-location">
              加州·库比蒂诺 · 在AI与企业的交汇处构建
            </p>
          </div>
        </div>
      </RevealSection>

      <hr className="hero-divider" />

      <RevealSection className="path" id="path">
        <h2>经历</h2>

        <div className="path-items">
          <div className="path-item">
            <div className="path-year">2013</div>
            <div className="path-content">
              <h3>Google</h3>
              <div className="at">Google Cloud AI</div>
              <p className="lesson">
                大规模构建AI系统。学会了大型企业如何真正地购买、部署和依赖AI。
                后来成为我的核心竞争力的模式识别能力，从这里开始。
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2019</div>
            <div className="path-content">
              <h3>斯坦福商学院</h3>
              <div className="at">Graduate School of Business</div>
              <p className="lesson">
                在这里，我学会了以十年为单位思考，而不是以季度。
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2022</div>
            <div className="path-content">
              <h3>Orby AI</h3>
              <div className="at">联合创始人兼CTO · 被Uniphore收购</div>
              <p className="lesson">
                离开Google去创业。把企业AI的判断转化为产品、团队和公司。
                这个判断被证明是对的。
              </p>
            </div>
          </div>

          <div className="path-item">
            <div className="path-year">2025</div>
            <div className="path-content">
              <h3>Uniphore</h3>
              <div className="at">VP Engineering · Head of AI Strategy</div>
              <p className="lesson">
                主导AI战略，构建下一代智能体平台。
                用这一章节为下一章做准备。
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <h2>文章</h2>
        <p>来自企业AI一线的框架和真实经验。</p>

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

      <div className="section-breath" />

      <div className="now-band">
        <RevealSection className="now" id="now">
          <h2>正在构建</h2>

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
                    小团队的环境智能
                  </div>
                </div>
              </div>
              <p>
                一个随时间推移变得不可替代的判断模型。永久记忆、自主执行、
                伙伴智能。不是一个应用——是一种存在。
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
                  <div className="now-card-type">AI跑步教练</div>
                </div>
              </div>
              <p>
                Garmin同步、自适应训练、体重追踪。接近MVP阶段。
                这个小赌注让我学习消费端的产品市场契合。
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-helix" />
                <div>
                  <h3>Helix</h3>
                  <div className="now-card-type">
                    Uniphore企业AI智能体平台
                  </div>
                </div>
              </div>
              <p>
                彻底重新思考企业如何构建和部署AI智能体。堆叠式SLM、
                自我改进飞轮、以及一个让每次交互都让系统变得更智能的架构。
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-slm" />
                <div>
                  <h3>Enterprise SLM</h3>
                  <div className="now-card-type">
                    堆叠式小语言模型
                  </div>
                </div>
              </div>
              <p>
                编排小语言模型，以极低成本超越前沿模型的表现。
                路由层才是真正的产品。
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
                    无需部落的部落知识
                  </div>
                </div>
              </div>
              <p>
                每个工程团队都有口传心授的经验——那些不成文的规则和有效的模式。
                Lore从AI编程会话中自动捕获这些知识，将其变成一个活的共享大脑。
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-telos" />
                <div>
                  <h3>Telos</h3>
                  <div className="now-card-type">
                    AI产品管理引擎
                  </div>
                </div>
              </div>
              <p>
                基于角色的AI智能体，天生了解PM。对话优先的界面。
                你跟系统说话，系统自动更新自己。
              </p>
            </div>
          </div>
        </RevealSection>
      </div>

      <div className="long-game-band">
        <RevealSection className="long-game">
          <div className="long-game-accent" />
          <blockquote>
            我想构建一个比我更持久的东西。不是一个产品——而是一个由想法、
            信任和杠杆组成的复利系统，无论我在不在场，都能持续增长。
          </blockquote>
          <p>
            我有成功的退出经验、深厚的企业AI积累、斯坦福的人脉网络，
            以及通达美国、中国和韩国市场的三语能力。未来十年，
            我要把这一切同时投入。我写作，是为了让自己保持自律。
          </p>
        </RevealSection>
      </div>

      <RevealSection className="closing" as="div">
        <p className="closing-line">
          我在{" "}
          <a
            href="https://linkedin.com/in/will-dongxu-lu-9b9b972b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          上发表文章，并在构建的过程中更新这个网站。
        </p>
      </RevealSection>

      <footer>
        <div>
          <span>© 2026 陆东旭</span>
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
