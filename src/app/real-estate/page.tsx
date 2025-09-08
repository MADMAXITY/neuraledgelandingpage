"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { contactFormAction, type FormState } from "@/app/actions/email";
import { CheckCircle2, BarChart3, Layers, Calendar, MessageSquare, Zap, ArrowRight } from "lucide-react";

export default function RealEstatePage() {
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
          <h1 className="reveal">Real Estate — Connect Faster, Close Cleaner</h1>
          <p className="sub small reveal" style={{ maxWidth: "76ch", margin: "8px auto 0" }}>
            AI‑Assisted Speed‑To‑Lead, Deal Rooms, And Demand Efficiency So Agents Spend Less And Win More.
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
              <div className="problem-head"><div className="icon-badge"><Zap size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Slow Reach‑Outs & Follow‑Ups</h3>
              <p className="small" style={{ marginTop: 6 }}>Leads Go Cold Without Speed‑To‑Lead & Smart Routing.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>5‑Minute <span className="uc">SLA</span> Alerts</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>Draft Replies; Human Approve</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Fit/Intent Scoring & Route</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "60ms" }}>
              <div className="problem-head"><div className="icon-badge"><Layers size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Info Sprawl Across Tools</h3>
              <p className="small" style={{ marginTop: 6 }}>Email/SMS/<span className="uc">CRM</span>/<span className="uc">TC</span> Scattered; No Single Source Of Truth.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Deal Timeline + <span className="uc">SSOT</span></div>
                <div className="icon-item"><span className="icon-box"><Calendar size={12} /></span>Deadline Watchdogs & Alerts</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>Meeting/Email Summaries → Notes</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "120ms" }}>
              <div className="problem-head"><div className="icon-badge"><BarChart3 size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Skyrocketing Lead Costs</h3>
              <p className="small" style={{ marginTop: 6 }}>Demand Efficiency & Lead Quality To Lower <span className="uc">CAC</span>.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span><span className="uc">A/B</span> Loops; Suppression & Negatives</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span><span className="uc">AI</span> Scoring & Attribution</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Prioritize High‑Intent Buyers/Sellers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Solutions */}
      <section className="section section-tight" id="solutions">
        <div className="container-page">
          <h2 className="reveal" style={{ textAlign: "center" }}>Real Estate Signature Solutions</h2>
          <div className="sol-grid" style={{ marginTop: 20 }}>
            <div className="sol-card card-gradient card-pad list-panel wm-funnel">
              <span className="badge">Speed‑To‑Lead Command Center</span>
              <div className="sol-main">
                <h3>Unified Lead Inbox + 5‑Min Alerts</h3>
                <p className="small sol-desc">Instant Triage, Property‑Aware Draft Replies, Fit/Intent Scoring, Smart Routing.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Unified Inbox (Portal, Ads, Site, DMs)</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>5‑Minute <span className="uc">SLA</span> Alerts</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>AI Draft Replies; Human Approve</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Fit/Intent Scoring & Routing</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Connect Rate, Appt‑Set %, Lead→Client Conversion</p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-arch">
              <span className="badge">Deal Room & Transaction Automation</span>
              <div className="sol-main">
                <h3>One Timeline, No Missed Deadlines</h3>
                <p className="small sol-desc">Sync Messages/Docs/Dates; AI Summaries; E‑Sig Templates; Watchdogs & Escalations.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Deal Timeline + <span className="uc">SSOT</span></div>
                <div className="icon-item"><span className="icon-box"><Calendar size={12} /></span>Deadline Watchdogs & Alerts</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>AI Meeting/Email Summaries</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Write‑Back To CRM/TC</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Missed Deadlines ↓, Contract‑To‑Close Time, Admin Hours Saved</p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-workflow">
              <span className="badge">Demand Efficiency & Lead Quality</span>
              <div className="sol-main">
                <h3>Better Spend, Better Leads</h3>
                <p className="small sol-desc">A/B Loops, Suppression, Negative Keywords, Cross‑Source Attribution.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>A/B Testing Loops</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Suppression & Negatives</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>AI Scoring & Attribution</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Prioritize High‑Intent Buyers/Sellers</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: <span className="uc">CAC</span> ↓, Cost Per Appt ↓, <span className="uc">MQL</span>→Appt %</p>
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
              <h3>Midwest Brokerage Team</h3>
              <p className="small" style={{ marginTop: 6 }}>Speed‑To‑Lead Command Center + Draft Replies.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li>Connect Rate In &lt;5 Min Up 31%</li>
                <li>Appointment‑Set % Up 18%</li>
                <li>Lead→Client Conversion Up 12%</li>
              </ul>
            </div>
            <div className="card card-pad reveal benefit-card" style={{ animationDelay: "80ms" }}>
              <h3>Luxury Team — Contract‑To‑Close</h3>
              <p className="small" style={{ marginTop: 6 }}>Deal Room + Deadline Watchdogs.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li>Missed‑Deadline Incidents ↓ To Near‑Zero</li>
                <li>Time To Clear Contingencies Down 22%</li>
                <li>Admin Hours Saved ~15/Week</li>
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
                <span className="stat-chip">Connect Rate ↑</span>
                <span className="stat-chip">Contract‑To‑Close ↓</span>
                <span className="stat-chip"><span className="uc">CAC</span> ↓</span>
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
            <h2>Let’s Make Your Follow‑Ups Instant</h2>
            <p className="small" style={{ marginTop: 8 }}>Free AI Integration Audit—Workflow Map + Template Pack.</p>
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
              <input name="source" type="hidden" value="real-estate" />
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
