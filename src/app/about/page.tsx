"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section hero">
        <div className="container-page hero-inner">
          <h1>About NeuralEdge</h1>
          <p className="sub small" style={{ maxWidth: "72ch", margin: "8px auto 0" }}>
            Integrated <span className="uc">AI</span> Agents That Do The Robot Work So Your Team Can Do The Human Work.
          </p>
          <div className="tools-row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src="/tools-media/openai.png" alt="OpenAI" width={60} height={18} className="logo-invert" />
            <Image src="/tools-media/claude-ai.png" alt="Claude" width={60} height={18} />
            <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={52} height={16} />
            <Image src="/tools-media/make-color.png" alt="Make" width={60} height={18} />
            <Image src="/tools-media/n8n-color.png" alt="n8n" width={52} height={18} />
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section section-tight">
        <div className="container-page">
          <div className="grid-2" style={{ marginTop: 8, textAlign: "left" }}>
            <div className="card card-pad">
              <h2>Positioning</h2>
              <p className="small" style={{ marginTop: 8 }}>
                NeuralEdge Integrates <span className="uc">AI</span> Into Your Workflows—Safely And Seamlessly—So Leaders Eliminate Repetitive Ops,
                Shorten Time‑To‑Value, And Scale With Fewer People Doing More Meaningful Work.
              </p>
            </div>
            <div className="card card-pad">
              <h2>Promise</h2>
              <ul className="small" style={{ marginTop: 8, opacity: .9, listStyle: "disc", paddingLeft: 18 }}>
                <li>Time‑Saved + Cost‑Saved Guarantee On Pilots</li>
                <li>Pay‑On‑Proof: If Agreed Pilot <span className="uc">KPIs</span> Aren’t Met, We Keep Working—Or You Don’t Pay</li>
                <li>Limited Onboardings/Month To Preserve Quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section-tight">
        <div className="container-page">
          <h2>Approach</h2>
          <div className="grid-2" style={{ marginTop: 16, textAlign: "left" }}>
            <div className="card card-pad">
              <h3>Principles</h3>
              <ul className="small" style={{ marginTop: 8, opacity: .9, listStyle: "disc", paddingLeft: 18 }}>
                <li>Outcome‑First; Workflow‑Led Design</li>
                <li>Human‑In‑The‑Loop Approvals</li>
                <li>Audit Logs; Observability; Error Handling</li>
                <li><span className="uc">ToS</span>‑Friendly, Least‑Privilege Access</li>
              </ul>
            </div>
            <div className="card card-pad">
              <h3>Implementation Timeline</h3>
              <ol className="small" style={{ marginTop: 8, opacity: .9, listStyle: "decimal", paddingLeft: 18 }}>
                <li>Free <span className="uc">AI</span> Integration Audit</li>
                <li>Pilot Design, Guardrails, <span className="uc">KPIs</span></li>
                <li>Build: Agents + Automations</li>
                <li>Launch & Optimize</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section section-tight">
        <div className="container-page">
          <h2>Where We Help</h2>
          <div className="grid-3" style={{ marginTop: 16, textAlign: "left" }}>
            <div className="card card-pad">
              <h3>SMMC (Social Media & Content)</h3>
              <p className="small" style={{ marginTop: 6 }}>Platform‑Native Content And Conversation Systems That Turn Attention Into <span className="uc">DMs</span>.</p>
              <div style={{ marginTop: 10 }}><Link href="/smmc" className="link-tiny">Explore SMMC →</Link></div>
            </div>
            <div className="card card-pad">
              <h3>High‑Ticket <span className="uc">SaaS</span></h3>
              <p className="small" style={{ marginTop: 6 }}>Custom Integrations Across <span className="uc">GTM</span>, RevOps, And Product That Accelerate Deals.</p>
              <div style={{ marginTop: 10 }}><Link href="/saas" className="link-tiny">Explore SaaS →</Link></div>
            </div>
            <div className="card card-pad">
              <h3>Real Estate</h3>
              <p className="small" style={{ marginTop: 6 }}><span className="uc">AI</span>‑Assisted Speed‑To‑Lead, Deal Rooms, And Demand Efficiency So Agents Connect Faster, Close Cleaner, And Spend Less.</p>
              <div style={{ marginTop: 10 }}><Link href="/real-estate" className="link-tiny">Explore Real Estate →</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="cta-block" style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2>Let <span className="uc">AI</span> Do The Work So You Can Scale Faster</h2>
            <p className="small" style={{ marginTop: 8 }}>Book A Free <span className="uc">AI</span> Integration Audit — Get Your Workflow Map And Template Pack.</p>
            <div style={{ marginTop: 14 }}>
              <Link href="/contact#book" className="button-primary">Book A Free Call</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
