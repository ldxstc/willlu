import Image from "next/image";
import NavZh from "@/components/NavZh";
import RevealSection from "@/components/RevealSection";

import { getLongEssaysZh, getShortPostsZh, formatDateZh } from "@/lib/essays-zh";

export default function HomeZh() {
  const essays = getLongEssaysZh().slice(0, 3);
  const posts = getShortPostsZh().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "卢东旭 (Will Lu)",
    jobTitle: "VP Engineering & Head of AI Strategy at Uniphore",
    url: "https://willlu.com/zh",
    image: "https://willlu.com/headshot.jpg",
    sameAs: ["https://www.linkedin.com/in/will-lu-9b9b972b/"],
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
              在 Uniphore 构建
              <br />
              企业 AI
            </h1>
            <p className="hero-intro">
              我曾在<strong>Google Cloud 构建企业AI</strong>，
              之后联合创立了一家公司，并最终被<strong>Uniphore 收购</strong>。
              现在我在 <strong>Uniphore</strong> 负责 AI 战略，构建把企业智能
              变成复利优势的平台。我写下沿途学到的判断与框架。
            </p>
            <div className="credential-line">
              UF · NVIDIA · Google Cloud AI · 斯坦福商学院 · Orby AI · Uniphore
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <Image
                src="/headshot.jpg"
                alt="卢东旭"
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
            <div className="path-year">2012</div>
            <div className="path-content">
              <h3>NVIDIA</h3>
              <div className="at">GPU计算与AI</div>
              <p className="lesson">
                早期接触了将驱动AI革命的硬件。学会了在芯片与软件的交汇处思考。
              </p>
            </div>
          </div>

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
                这是我至今最兴奋的一段。开源权重模型将拿下企业 AI 市场的大部分，
                而 Uniphore 正在构建让它们真正落地的那一层：堆叠式 SLM、智能体，
                以及让企业能在自有数据上构建定制 AI 应用的平台。
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <hr className="divider" />

      <RevealSection className="writing" id="writing">
        <h2>写作</h2>
        <p>长文讲更深的 thesis，短文记录更锋利的判断。</p>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>长文</h3>
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
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>短文</h3>
          <div className="essay-list">
            {posts.map((essay) => (
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
        <a href="/zh/essays" className="view-all">查看全部 →</a>
      </RevealSection>

      <div className="section-breath" />

      <div className="now-band">
        <RevealSection className="now" id="now">
          <h2>在 Uniphore 构建</h2>

          <div className="now-grid">
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
                <div className="now-card-icon icon-helix" />
                <div>
                  <h3>Voice AI</h3>
                  <div className="now-card-type">
                    Uniphore对话智能
                  </div>
                </div>
              </div>
              <p>
                覆盖每一次客户互动的实时对话智能。情感检测、实时座席指导、
                将对话转化为竞争优势的洞察。
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-slm" />
                <div>
                  <h3>Marketing AI</h3>
                  <div className="now-card-type">
                    Uniphore AI原生客户互动
                  </div>
                </div>
              </div>
              <p>
                AI代理激活客户数据驱动个性化互动、编排营销活动、在每个渠道
                最大化ROI。构建在AI原生的客户数据平台之上。
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-header">
                <div className="now-card-icon icon-telos" />
                <div>
                  <h3>Business AI Platform</h3>
                  <div className="now-card-type">
                    Uniphore完整企业AI技术栈
                  </div>
                </div>
              </div>
              <p>
                将知识层、SLM、AI代理和信任基础设施连接为一个平台。SLM飞轮、
                代理架构和企业治理在此汇聚为一个完整系统。
              </p>
            </div>

          </div>
        </RevealSection>
      </div>

      <div className="long-game-band">
        <RevealSection className="long-game">
          <div className="long-game-accent" />
          <blockquote>
            企业软件市场将被重新搭建。未来的赢家，不是预装了几个 AI 功能的公司，
            而是那些让企业能够构建定制 AI 应用的平台。
          </blockquote>
          <p>
            我相信开源权重模型会拿下企业市场的大部分份额。真正的赢家，
            不是基础模型本身，而是让这些模型变得可部署、可治理、能持续复利的平台。
            我写企业 AI，不是因为它热门，而是因为我每天都在 Uniphore 亲手构建它。
          </p>
        </RevealSection>
      </div>

      <RevealSection className="closing" as="div">
        <p className="closing-line">
          我在{" "}
          <a
            href="https://www.linkedin.com/in/will-lu-9b9b972b/"
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
