"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { contactFormAction, type FormState } from "@/app/actions/email";
import { CheckCircle2, BarChart3, Layers, Calendar, MessageSquare, Zap, ArrowRight } from "lucide-react";

export default function SaasPage() {
  const [state, action] = useFormState<FormState, FormData>(contactFormAction, { ok: false, message: "" });
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="niche">
      {/* Hero */}
      <section className="section hero">
        <div className="container-page hero-inner">
          <h1 className="reveal">High‑Ticket <span className="uc">SaaS</span> — Accelerate Deals</h1>
          <p className="sub small reveal" style={{ maxWidth: "76ch", margin: "8px auto 0" }}>
            Custom AI Integrations Across GTM, RevOps, And Product That Shorten Cycles, Prove Value Faster, And Reduce Sales Effort.
          </p>
          <div className="reveal" style={{ marginTop: 14 }}>
            <Link href="/contact#book" className="button-primary group">
              <span style={{display:'inline-flex',alignItems:'center',gap:8}}>Book A Free <span className="uc">AI</span> Integration Audit <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section section-tight">
        <div className="container-page">
          <h2 className="reveal">Problems We Solve</h2>
          <div className="grid-3" style={{ marginTop: 16, textAlign: "left" }}>
            <div className="problem-card reveal">
              <div className="problem-head"><div className="icon-badge"><Layers size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Slow Cycles & <span className="uc">POVs</span> That Don’t Convert</h3>
              <p className="small" style={{ marginTop: 6 }}>Info Sprawl; Misaligned Success; No Single Source Of Truth.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>Emails/Slack/Docs Scattered</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Success Criteria Not Clear</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>No Timeline Per Opp</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "60ms" }}>
              <div className="problem-head"><div className="icon-badge"><Calendar size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Broken Onboarding & Time‑To‑Value</h3>
              <p className="small" style={{ marginTop: 6 }}>Too Much Lift Before Customers See Wins.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Data Pulls & Integrations Lag</div>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Docs/Config Drafts Missing</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Milestones Not Tracked</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "120ms" }}>
              <div className="problem-head"><div className="icon-badge"><BarChart3 size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Scaling The Sales Engine</h3>
              <p className="small" style={{ marginTop: 6 }}><span className="uc">ICP</span> Routing, <span className="uc">SDR</span> Assist, Attribution.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Speed‑To‑Lead (&lt;5 Min)</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span><span className="uc">ICP</span> Score & Route</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span><span className="uc">SDR</span> Assist Drafts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Solutions */}
      <section className="section section-tight" id="solutions">
        <div className="container-page">
          <h2 className="reveal" style={{ textAlign: "center" }}><span className="uc">SaaS</span> Signature Solutions</h2>
          <div className="sol-grid" style={{ marginTop: 20 }}>
            <div className="sol-card card-gradient card-pad list-panel wm-arch">
              <span className="badge">Buyer Enablement & Deal Acceleration</span>
              <div className="sol-main">
                <h3><span className="uc">AI</span> Deal Room + <span className="uc">MAPs</span></h3>
                <p className="small sol-desc">Unified Timeline Per Opp; Auto Write‑Back To CRM; POV Success Criteria.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Sync Gmail/Outlook, Slack, Calendar, Docs</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span><span className="uc">AI</span> Generated <span className="uc">MAPs</span> & Briefs</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Auto Summaries → <span className="uc">CRM</span> Notes</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>Collaboration & Stakeholder Alignment</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Cycle Time ↓, <span className="uc">POV</span>→Close ↑, Win Rate ↑</p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-workflow">
              <span className="badge">Onboarding <span className="uc">OS</span> & Time‑To‑Value</span>
              <div className="sol-main">
                <h3>Guided, Personalized Onboarding</h3>
                <p className="small sol-desc">Data Pulls, Templates, And <span className="uc">AI</span> Drafts That Get Customers To Value Faster.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Calendar size={12} /></span>Milestones, Owners, Alerts</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span><span className="uc">SSO</span>, Data, And App Integrations</div>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>AI Drafts For Config/Docs</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Executive Summaries</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: <span className="uc">TTFV</span> ≤ 14D, Activation %, <span className="uc">CSAT</span> ↑</p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-funnel">
              <span className="badge">Growth & Attribution Engine</span>
              <div className="sol-main">
                <h3>Accelerate Pipeline With Less Effort</h3>
                <p className="small sol-desc"><span className="uc">ICP</span> Routing, <span className="uc">SDR</span> Assist, And Cross‑Source Attribution That Clarifies <span className="uc">ROI</span>.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Speed‑To‑Lead (&lt;5 Min)</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span><span className="uc">ICP</span> Scoring & Routing</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span><span className="uc">SDR</span> Assistance & Drafts</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span><span className="uc">CRM</span> + <span className="uc">MAP</span> Integrations</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Connect Rate ↑, Stage Velocity ↑, <span className="uc">CAC</span> ↓</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" id="case-studies">
        <div className="container-page">
          <h2 className="reveal">Case Studies</h2>
          <div className="grid-2" style={{ marginTop: 20, textAlign: "left" }}>
            <div className="card card-pad reveal benefit-card">
              <h3>Series A Security <span className="uc">SaaS</span></h3>
              <p className="small" style={{ marginTop: 6 }}>Buyer Enablement + <span className="uc">AI</span> Deal Room.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li>Cycle Time Down 28%</li>
                <li><span className="uc">POV</span>→Close Up 19%</li>
                <li>Unified Timeline; Write‑Back To <span className="uc">CRM</span></li>
              </ul>
            </div>
            <div className="card card-pad reveal benefit-card" style={{ animationDelay: "80ms" }}>
              <h3>Enterprise Productivity Platform</h3>
              <p className="small" style={{ marginTop: 6 }}>Onboarding <span className="uc">OS</span> + Time‑To‑Value.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li><span className="uc">TTFV</span> ≤ 14 Days</li>
                <li>Activation Rate Up 22%</li>
                <li><span className="uc">CSAT</span> + <span className="uc">NPS</span> Improved</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations + Process */}
      <section className="section section-tight">
        <div className="container-page">
          <h2 className="reveal">How We Work</h2>
          <div className="stack-logos reveal" style={{ justifyContent: "center", marginTop: 6 }}>
            <Image src="/tools-media/openai.png" alt="OpenAI" width={34} height={14} className="logo-invert" />
            <Image src="/tools-media/claude-ai.png" alt="Claude" width={34} height={14} />
            <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={34} height={14} />
            <Image src="/tools-media/make-color.png" alt="Make" width={34} height={14} />
            <Image src="/tools-media/n8n-color.png" alt="n8n" width={30} height={14} />
          </div>
          <div className="howwework-wrap" style={{ display:'grid', gridTemplateColumns:'1fr', gap:16, marginTop:18, textAlign:'left' }}>
            <div className="card card-pad reveal">
              <h3>Implementation Timeline</h3>
              <div className="process-steps" style={{ marginTop: 8 }}>
                <div className="step"><div className="step-index">1</div><div><h4>Free <span className="uc">AI</span> Integration Audit</h4><p>Map A High‑Impact Workflow; Identify Risks & Guardrails.</p></div></div>
                <div className="step"><div className="step-index">2</div><div><h4>Pilot Design & <span className="uc">KPIs</span></h4><p>Milestones, Owners, Success Criteria, Review Gates.</p></div></div>
                <div className="step"><div className="step-index">3</div><div><h4>Build: Agents + Automations</h4><p>Implement, Connect, Add Approvals.</p></div></div>
                <div className="step"><div className="step-index">4</div><div><h4>Launch & Optimize</h4><p>Ship Incrementally; Improve Weekly.</p></div></div>
              </div>
            </div>
            <div className="card card-pad reveal outcomes-card">
              <h3>Outcomes & Assurances</h3>
              <div className="stat-chips">
                <span className="stat-chip">Cycle Time ↓</span>
                <span className="stat-chip"><span className="uc">TTFV</span> ≤ 14D</span>
                <span className="stat-chip"><span className="uc">ROI</span> Clarity</span>
              </div>
              <ul className="small outcomes-grid" style={{ marginTop: 4, opacity: .9 }}>
                <li>Human‑In‑The‑Loop; Audit Logs; <span className="uc">ToS</span> Friendly</li>
                <li>Pay‑On‑Proof Pilot</li>
                <li>Templates & Playbooks Included</li>
                <li>Ownership Transfer Of Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="cta-block reveal" style={{ maxWidth: 840, margin: "0 auto" }}>
            <h2>Prove Value Faster—With Guardrails</h2>
            <p className="small" style={{ marginTop: 8 }}>Free AI Integration Audit: Workflow Map + Template Pack.</p>
            <div style={{ marginTop: 14 }}>
              <Link href="/contact#book" className="button-primary">Book A Free Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="section-compact">
        <div className="container-page">
          <div className="card card-pad reveal" style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2>Contact Us</h2>
            <p className="small">We&apos;ll Never Share Your Data. Audit Outputs Remain Yours.</p>
            <form action={action} className="grid" style={{ gap: 12, marginTop: 16 }} aria-live="polite">
              <input name="source" type="hidden" value="saas" />
              <input name="name" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Name" required />
              <input name="email" type="email" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Work Email" required />
              <textarea name="message" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="What Problem Should We Tackle First?" rows={4} required />
              <button className="button-primary" type="submit">Send</button>
              {state.message ? (
                <p className="small" style={{ marginTop: 8, color: state.ok ? "#86efac" : "#fca5a5" }}>{state.message}</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
