"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { contactFormAction, type FormState } from "@/app/actions/email";
import { CheckCircle2, MessageSquare, Zap, BarChart3, Layers, ArrowRight } from "lucide-react";

export default function SmmcPage() {
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
          <h1 className="reveal">Social & Content — Turn Attention Into <span className="uc">DMs</span></h1>
          <p className="sub small reveal" style={{ maxWidth: "76ch", margin: "8px auto 0" }}>
            Platform‑Native Content And Conversation Systems That Grow Your Audience Without Burnout. Agents Draft; You Approve And Send.
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
              <h3 style={{ marginTop: 10 }}>Content Burnout & Algorithm Chasing</h3>
              <p className="small" style={{ marginTop: 6 }}>Inconsistent Reach, Post Fatigue, &quot;Quick Hacks&quot; That Fade.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Watch Time Flat; Hook Drop‑Off</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Repurposing Feels Off‑Platform</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>No Clear Iterate‑On‑Winners Loop</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "60ms" }}>
              <div className="problem-head"><div className="icon-badge"><MessageSquare size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Authenticity & Brand Voice</h3>
              <p className="small" style={{ marginTop: 6 }}>Stay Genuine At Scale With Guardrails.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Voice Library & Story Pillars</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>No‑<span className="uc">BS</span> Cliche Filters</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Human‑In‑The‑Loop Gating</div>
              </div>
            </div>
            <div className="problem-card reveal" style={{ animationDelay: "120ms" }}>
              <div className="problem-head"><div className="icon-badge"><MessageSquare size={16} /></div>
              <h3 style={{ marginTop: 10 }}>Conversation &gt; Content</h3>
              <p className="small" style={{ marginTop: 6 }}>Turn Attention Into Conversations And Leads.</p></div>
              <div className="problem-list">
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>Reply Backlog & <span className="uc">DM</span> Triage</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Lead/Support/Collab Routing</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Leads & Handoffs Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Solutions */}
      <section className="section section-tight" id="solutions">
        <div className="container-page">
          <h2 className="reveal" style={{ textAlign: "center" }}>SMMC Signature Solutions</h2>
          <div className="sol-grid" style={{ marginTop: 20 }}>
            <div className="sol-card card-gradient card-pad list-panel wm-workflow">
              <span className="badge">Short‑Form Growth Engine</span>
              <div className="sol-main">
                <h3>Produce Once, Auto‑Adapt Everywhere</h3>
                <p className="small sol-desc">Platform Playbooks, Clip Pipelines, <span className="uc">A/B</span> Hooks, Human‑In‑The‑Loop Approvals.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Auto‑Adapt Ratios/Captions/Thumbs</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Clip Pipelines & <span className="uc">A/B</span> Hooks</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Human Approval Guardrails</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Weekly Iteration Loop</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Hook Retention, Watch %, Saves/Shares, Views→<span className="uc">DMs</span></p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-inbox">
              <span className="badge">Authenticity Engine</span>
              <div className="sol-main">
                <h3>Brand Voice + No‑<span className="uc">BS</span> Filters</h3>
                <p className="small sol-desc">Drafts Stay On‑Brand With A Voice Library, Redlines, And Human Gating.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12} /></span>Voice Library & Story Pillars</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span>No‑<span className="uc">BS</span> Cliche Filters</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Editorial Workflow</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Sentiment & Reply Rate</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Positive Sentiment, Replies/Post, Follower Quality</p>
            </div>

            <div className="sol-card card-gradient card-pad list-panel wm-funnel">
              <span className="badge">Conversation Desk</span>
              <div className="sol-main">
                <h3>Unified Inbox With Draft Replies</h3>
                <p className="small sol-desc">Smart, On‑Brand Replies For Comments/<span className="uc">DMs</span>; You One‑Tap Send.</p>
              </div>
              <div className="list-grid" style={{ marginTop: 10 }}>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12} /></span><span className="uc">DM</span>/Comment Inbox</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12} /></span>Lead/Support/Collab Routing</div>
                <div className="icon-item"><span className="icon-box"><Zap size={12} /></span>Daily Community Streaks</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12} /></span>Leads & Handoffs</div>
              </div>
              <p className="small sol-kpis" style={{ marginTop: 6 }}><span className="uc">KPIs</span>: Reply Rate, <span className="uc">DM</span> Starts/Day, Lead Handoffs</p>
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
              <h3>Creator Studio — <span className="keep">Instagram</span> + <span className="keep">TikTok</span></h3>
              <p className="small" style={{ marginTop: 6 }}>Short‑Form Engine With <span className="uc">A/B</span> Hooks And Auto‑Adapt Pipeline.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li>4M Monthly Views, 10+ <span className="uc">DMs</span>/Day</li>
                <li>Approval‑First Guardrails; On‑Brand Drafts</li>
                <li>Hook Retention At 3s/8s Up 23%</li>
              </ul>
            </div>
            <div className="card card-pad reveal benefit-card" style={{ animationDelay: "80ms" }}>
              <h3><span className="uc">B2B</span> Founder — <span className="keep">LinkedIn</span></h3>
              <p className="small" style={{ marginTop: 6 }}>Authenticity Engine + Conversation Desk.</p>
              <ul className="small" style={{ marginTop: 8, opacity: .8, listStyle: "disc", paddingLeft: 18 }}>
                <li>Replies/Post Up 2.1×</li>
                <li>Weekly <span className="uc">DM</span> Starts Up 3.4×</li>
                <li>Lead Handoffs Tracked In <span className="keep">Notion</span></li>
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
                <div className="step"><div className="step-index">1</div><div><h4>Free <span className="uc">AI</span> Integration Audit</h4><p>Map One High‑Impact Workflow; Identify Risks & Guardrails.</p></div></div>
                <div className="step"><div className="step-index">2</div><div><h4>Pilot Design & <span className="uc">KPIs</span></h4><p>Define Milestones, Owners, Success Criteria, And Review Gates.</p></div></div>
                <div className="step"><div className="step-index">3</div><div><h4>Build: Agents + Automations</h4><p>Implement, Connect, And Add Human‑In‑The‑Loop Approvals.</p></div></div>
                <div className="step"><div className="step-index">4</div><div><h4>Launch & Optimize</h4><p>Ship Incrementally; Improve Weekly With Data.</p></div></div>
              </div>
            </div>
            <div className="card card-pad reveal outcomes-card">
              <h3>Outcomes & Assurances</h3>
              <div className="stat-chips">
                <span className="stat-chip">Time Saved</span>
                <span className="stat-chip">Positive Sentiment</span>
                <span className="stat-chip">Views→<span className="uc">DM</span> Conversion</span>
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
            <h2>Let <span className="uc">AI</span> Handle The Robot Work</h2>
            <p className="small" style={{ marginTop: 8 }}>Book Your Free <span className="uc">AI</span> Integration Audit — Workflow Map + Template Pack.</p>
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
              <input name="source" type="hidden" value="smmc" />
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
