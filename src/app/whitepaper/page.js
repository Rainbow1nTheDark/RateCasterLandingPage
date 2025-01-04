"use client"
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Whitepaper() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="whitepaper-container">
      <Head>
        <title>RateCaster Whitepaper</title>
        <meta name="description" content="RateCaster: Official Whitepaper" />
      </Head>

      <main className="whitepaper-content">
        <div className="content-wrapper">
          <h1>RateCaster White Paper</h1>
          
          <section id="executive-summary">
            <h2>Executive Summary</h2>
            <p>
              RateCaster is a decentralized application (dApp) designed to provide a transparent, 
              immutable, and community-driven rating and review system for decentralized applications 
              (dApps) across multiple blockchain ecosystems.
            </p>
            <p>
              Initially launched on Warpcaster, RateCaster has demonstrated its effectiveness with 
              over 800 Daily Active Accounts (DAAs) and 24,000 total transactions in two months on 
              Polygon PoS. This success serves as a foundation for its expansion to other ecosystems.
            </p>
            <hr />
          </section>

          <section id="problem-statement">
            <h2>Problem Statement</h2>
            <p>
              Blockchain ecosystems often list projects without mechanisms for transparent user 
              feedback or reviews. This lack of insight:
            </p>
            <ul>
              <li>Hinders users from identifying trustworthy and high-quality projects.</li>
              <li>Limits developers' ability to gather actionable feedback to improve their dApps.</li>
              <li>Impacts ecosystem growth by reducing user confidence and engagement.</li>
            </ul>
            <p>
              As blockchain ecosystems like Polygon, Base and others evolve, the absence of a unified, 
              decentralized rating system becomes increasingly apparent. A multi-ecosystem API for 
              rating and reviews is critical to addressing this gap.
            </p>
            <hr />
          </section>

          <section id="vision-goals">
            <h2>Vision and Goals</h2>
            <p>RateCaster aims to:</p>
            <ul>
              <li>Provide Transparency: Establish a decentralized, immutable review system tied to users' wallets.</li>
              <li>Foster Community Trust: Enable users to discover "community trusted" dApps.</li>
              <li>Offer Interoperable Solutions: Deliver an open API for integration into ecosystem websites and project dashboards.</li>
              <li>Expand Ecosystem Engagement: Enhance user interaction and network activity through incentivized participation.</li>
              <li>Achieve Multi-Ecosystem Adoption: Deploy RateCaster across multiple blockchains, enabling each to showcase reviews natively.</li>
            </ul>
            <hr />
          </section>

          <section id="key-features">
            <h2>Key Features</h2>
            <div className="feature-group">
              <h3>Decentralized Rating System</h3>
              <ul>
                <li>Immutable, wallet-tied reviews stored on-chain.</li>
                <li>Transparency and security through blockchain technology.</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Open API for Ecosystem Integration</h3>
              <ul>
                <li>A global API allowing dApps and ecosystems to embed RateCaster reviews.</li>
                <li>Customizable widgets to display ratings directly on project websites.</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Multi-Ecosystem Support</h3>
              <ul>
                <li>Implementation tailored for multiple chains.</li>
                <li>Scalable architecture to support future blockchain integrations.</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Incentivization Mechanisms</h3>
              <ul>
                <li>Points system for user engagement (e.g., ratings, feedback).</li>
              </ul>
            </div>
            <hr />
          </section>

          <section id="business-model">
            <h2>Business and Sustainability Model</h2>
            <div className="subsection">
              <h3>Revenue Streams</h3>
              <ul>
                <li>Partnerships: Collaborations with blockchain ecosystems to drive mutual growth.</li>
                <li>Marketplace Commissions: Percentage of transactions within integrated dApps.</li>
              </ul>
            </div>
            <div className="subsection">
              <h3>Sustainability Plan</h3>
              <ul>
                <li>Grant Support: Initial funding from ecosystem-specific grants (Polygon).</li>
                <li>User-Driven Growth: Proven metrics from Polygon to drive adoption.</li>
                <li>Integration Utility: Alignment with ecosystem goals to ensure long-term relevance.</li>
              </ul>
            </div>
            <hr />
          </section>

          <section id="community">
            <h2>Community Engagement Strategy</h2>
            <div className="subsection">
              <h3>Key Channels</h3>
              <ul>
                <li>Twitter: Updates, interactive polls, and AMAs.</li>
                <li>Partnerships: Co-hosted events with ecosystems.</li>
                <li>Referral Campaigns: Rewards for user referrals.</li>
                <li>Points System: Rewarding activities like ratings and feedback.</li>
              </ul>
            </div>
            <div className="subsection">
              <h3>Objectives</h3>
              <ul>
                <li>Drive user participation with incentives.</li>
                <li>Foster a loyal and active user base.</li>
                <li>Build trust and credibility through community-driven insights.</li>
              </ul>
            </div>
            <hr />
          </section>

          <section id="api">
            <h2>API Functionality</h2>
            <p>The RateCaster API will offer:</p>
            <ul>
              <li>Retrieve Ratings: Query aggregated ratings for a specific dApp.</li>
              <li>Submit Reviews: Securely add new reviews tied to user wallets.</li>
              <li>Embed Widgets: Generate customizable components for websites.</li>
              <li>Chain-Specific Data: Enable ecosystems to host reviews natively.</li>
            </ul>
            <hr />
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              RateCaster bridges the trust gap in blockchain ecosystems by delivering a transparent, 
              decentralized, and community-driven rating system. With its open API and multi-ecosystem 
              support, RateCaster empowers users and developers while enhancing the utility and 
              credibility of blockchain ecosystems.
            </p>
            <p>
              By partnering with ecosystems like Polygon and Base, RateCaster aims to become the 
              standard for dApp reviews, driving growth and fostering trust across Web3.
            </p>
          </section>
        </div>

        <aside className="table-of-contents">
          <div className="toc-wrapper">
            <h3>ON THIS PAGE</h3>
            <nav>
              <ul>
                <li className={activeSection === 'executive-summary' ? 'active' : ''}>
                  <a href="#executive-summary">Executive Summary</a>
                </li>
                <li className={activeSection === 'problem-statement' ? 'active' : ''}>
                  <a href="#problem-statement">Problem Statement</a>
                </li>
                <li className={activeSection === 'vision-goals' ? 'active' : ''}>
                  <a href="#vision-goals">Vision and Goals</a>
                </li>
                <li className={activeSection === 'key-features' ? 'active' : ''}>
                  <a href="#key-features">Key Features</a>
                </li>
                <li className={activeSection === 'business-model' ? 'active' : ''}>
                  <a href="#business-model">Business Model</a>
                </li>
                <li className={activeSection === 'community' ? 'active' : ''}>
                  <a href="#community">Community Engagement</a>
                </li>
                <li className={activeSection === 'api' ? 'active' : ''}>
                  <a href="#api">API Functionality</a>
                </li>
                <li className={activeSection === 'conclusion' ? 'active' : ''}>
                  <a href="#conclusion">Conclusion</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </main>

      <style jsx>{`
        .whitepaper-container {
          min-height: 100vh;
          background: var(--background);
          color: var(--foreground);
        }

        .whitepaper-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }

        .content-wrapper {
          padding-right: 2rem;
        }

        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        section {
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          color: var(--color-purple);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        p {
          margin-bottom: 1.2rem;
          line-height: 1.7;
        }

        ul {
          margin: 1rem 0 1.5rem 2rem;
          line-height: 1.6;
        }

        li {
          margin-bottom: 0.5rem;
        }

        hr {
          margin: 2rem 0;
          border: none;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(126, 91, 194, 0.2),
            transparent
          );
        }

        .table-of-contents {
          position: sticky;
          top: 2rem;
          height: fit-content;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .toc-wrapper {
          position: sticky;
          top: 2rem;
        }

        .table-of-contents h3 {
          font-size: 0.9rem;
          color: var(--color-purple);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .table-of-contents ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .table-of-contents li {
          margin-bottom: 0.8rem;
        }

        .table-of-contents a {
          color: var(--foreground);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          opacity: 0.8;
        }

        .table-of-contents li.active a {
          color: var(--color-purple);
          font-weight: 600;
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .whitepaper-content {
            grid-template-columns: 1fr;
          }

          .content-wrapper {
            padding-right: 0;
          }

          .table-of-contents {
            display: none;
          }
        }

        .feature-group, .subsection {
          margin-bottom: 2rem;
        }

        .feature-group:last-child, .subsection:last-child {
          margin-bottom: 1rem;
        }

        h3 {
          color: var(--color-purple);
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }

        .feature-group ul, .subsection ul {
          margin-left: 1.5rem;
        }
      `}</style>
    </div>
  )
} 