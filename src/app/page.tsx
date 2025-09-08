"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Lock, ScrollText, Shield, Zap, MessageSquare, Clock3, DollarSign, BarChart3, Layers, ArrowRight, Calendar, Mail, Link2, BellIcon, AlertTriangleIcon } from "lucide-react";
import { contactFormAction, type FormState } from "@/app/actions/email";
import { useFormState } from "react-dom";

export default function Home() {
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

  const initialState = { ok: false, message: "" } as FormState;
  const [formState, formAction] = useFormState(contactFormAction, initialState);

  return (
    <div>
      {/* Hero */}
      <section className="section hero">
        <div className="container-page hero-inner">
          <h1 className="reveal" style={{animationDelay:'40ms'}}><span className="uc">AI</span> does the robot work.<br/>Your team does the real work.</h1>
          <p className="sub small reveal" style={{animationDelay:'100ms'}}>Outcome-first <span className="uc">AI</span> integration to remove the boring work, speed up the important work, and scale with less effort.</p>
          <div className="reveal" style={{animationDelay:'140ms', display:'flex', gap:12, justifyContent:'center'}}>
            <Link href="#contact" className="button-primary group" title="Fast 15–20 min call. We map one workflow and share templates.">
              <span style={{display:'inline-flex',alignItems:'center',gap:8}}>Book a Free <span className="uc">AI</span> Integration Audit <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} /></span>
            </Link>
          </div>
          <div className="reveal" style={{animationDelay:'180ms', marginTop:18, display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap'}}>
            <span className="pill" style={{opacity:.9}}><CheckCircle2 size={14}/> Limited onboardings/month</span>
            <span className="pill" style={{opacity:.9}}><Shield size={14}/> Human-in-the-loop</span>
            <span className="pill" style={{opacity:.9}}><Lock size={14}/> <span className="uc">ToS</span>-compliant</span>
            <span className="pill" style={{opacity:.9}}><ScrollText size={14}/> Audit logs</span>
          </div>

          {/* Tools row */}
          <div className="reveal tools-row" style={{animationDelay:'230ms', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
            <Image src="/tools-media/openai.png" alt="OpenAI" width={60} height={18} className="logo-invert" />
            <Image src="/tools-media/claude-ai.png" alt="Claude" width={60} height={18} />
            <Image src="/tools-media/make-color.png" alt="Make" width={60} height={18} />
            <Image src="/tools-media/n8n-color.png" alt="n8n" width={52} height={18} />
            <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={52} height={16} />
            <Image src="/tools-media/supabase-logo-png_seeklogo-435677.png" alt="Supabase" width={84} height={18} />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section" id="who">
        <div className="container-page">
          <h2 className="reveal">Who We Help</h2>
          <div className="grid-3" style={{marginTop:24}}>
            {/* SMMC */}
            <div className="card-gradient card-pad reveal icon-corner">
              <div className="icon-wrap"><MessageSquare size={18}/></div>
              <h3 style={{marginTop:12}}>Social & Content</h3>
              <p className="small" style={{opacity:.85, marginTop:6}}>Turn attention into <span className="uc">DMs</span>.</p>
              <div className="mini-chips" style={{marginTop:8}}>
                <span className="mini-chip">Native shorts</span>
                <span className="mini-chip">Conversation desk</span>
                <span className="mini-chip">Brand voice</span>
              </div>
              <div className="stack-strip"><span className="uc">IG</span> • <span className="keep">TikTok</span> • <span className="uc">YT</span> • <span className="keep">LinkedIn</span> • <span className="keep">Notion</span></div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="/smmc">View SMMC Solutions →</a>
              </div>
            </div>

            {/* SaaS */}
            <div className="card-gradient card-pad reveal icon-corner" style={{animationDelay:'60ms'}}>
              <div className="icon-wrap"><Layers size={18}/></div>
              <h3 style={{marginTop:12}}>High-Ticket SaaS</h3>
              <p className="small" style={{opacity:.85, marginTop:6}}>Shorten cycles. Prove value faster.</p>
              <div className="mini-chips" style={{marginTop:8}}>
                <span className="mini-chip"><span className="uc">AI</span> Deal Room</span>
                <span className="mini-chip">Onboarding OS</span>
                <span className="mini-chip"><span className="uc">ICP</span>/<span className="uc">ABM</span></span>
              </div>
              <div className="stack-strip"><span className="keep">Salesforce</span> • <span className="keep">Gmail</span> • <span className="keep">Slack</span> • <span className="keep">Okta</span> • <span className="keep">Drive</span></div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="/saas">View SaaS Solutions →</a>
              </div>
            </div>

            {/* Real Estate */}
            <div className="card-gradient card-pad reveal icon-corner" style={{animationDelay:'120ms'}}>
              <div className="icon-wrap"><Zap size={18}/></div>
              <h3 style={{marginTop:12}}>Real Estate</h3>
              <p className="small" style={{opacity:.85, marginTop:6}}>More appointments. Cleaner closes.</p>
              <div className="mini-chips" style={{marginTop:8}}>
                <span className="mini-chip">Speed-to-Lead</span>
                <span className="mini-chip">Deal Room</span>
                <span className="mini-chip">Demand efficiency</span>
              </div>
              <div className="stack-strip"><span className="uc">FUB</span> • <span className="keep">CallRail</span> • <span className="keep">Meta Ads</span> • <span className="uc">GCal</span> • <span className="keep">DocuSign</span></div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="/real-estate">View RE Solutions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section section-tight" id="services">
        <div className="container-page">
          <h2 className="reveal" style={{textAlign:'center'}}><span className="uc">AI</span> Solutions That Take Your Business To The Next Level</h2>
          <p className="sub small reveal" style={{animationDelay:'60ms', textAlign:'center', maxWidth:'70ch', marginInline:'auto'}}>We Design, Develop, And Implement <span className="uc">AI</span> Agents & Automations That Remove Busywork And Unlock Growth.</p>

          <div className="sol-grid home-solutions" style={{marginTop:24}}>
            <div className="sol-card main-panel sol-main center">
              <span className="badge">Workflow Automation</span>
              <h3 style={{marginTop:6}}>Automate repetitive tasks</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Wire <span className="uc">AI</span> Into Workflows So Data Moves Itself And Approvals Land On Time.</p>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12}/></span>System Sync</div>
                <div className="icon-item"><span className="icon-box"><BellIcon size={12}/></span>Smart Reminders</div>
                <div className="icon-item"><span className="icon-box"><Link2 size={12}/></span>Sheets/Drive Automations</div>
                <div className="icon-item"><span className="icon-box"><Clock3 size={12}/></span>Time Tracking</div>
              </div>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Delegation</span>
              <h3 style={{marginTop:6}}>Delegate daily tasks</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Assistants draft, summarize, and schedule—your team reviews and sends.</p>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Mail size={12}/></span>Inbox Triage</div>
                <div className="icon-item"><span className="icon-box"><ArrowRight size={12}/></span>Follow‑Up & Scheduling</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>Notes → Actions</div>
                <div className="icon-item"><span className="icon-box"><Calendar size={12}/></span>Smart Holds</div>
              </div>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Growth</span>
              <h3 style={{marginTop:6}}>Accelerate sales</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Speed-to-lead, ICP routing, and tailored outreach that turns conversations into pipeline.</p>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Zap size={12}/></span>&lt;5‑Min Reply</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12}/></span><span className="uc">ICP</span> Routing</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12}/></span><span className="uc">SDR</span> Assist</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>Conv → <span className="uc">CRM</span></div>
              </div>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Custom Projects</span>
              <h3 style={{marginTop:6}}>Build Smarter Systems</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Durable integrations with observability and guardrails so you scale without breakage.</p>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span><span className="uc">SSOT</span> Model</div>
                <div className="icon-item"><span className="icon-box"><Link2 size={12}/></span><span className="uc">API</span>/Webhooks</div>
                <div className="icon-item"><span className="icon-box"><Shield size={12}/></span><span className="uc">RBAC</span> & Approvals</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>Audit & Retention</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="section" id="benefits">
        <div className="container-page">
          <h2 className="reveal">The Key Benefits Of <span className="uc">AI</span> For Your Business Growth</h2>
          <p className="sub small reveal" style={{animationDelay:'60ms'}}>Integrate once, multiply outcomes — without multiplying headcount.</p>
          <div className="grid-2" style={{marginTop:24}}>
            <div className="card benefit-card card-pad center reveal">
              <div className="icon-wrap"><Zap size={18}/></div>
              <h3 style={{marginTop:12}}>Increased Productivity</h3>
              <p>Focus on high-value work; agents handle the repetitive.</p>
            </div>
            <div className="card benefit-card card-pad center reveal" style={{animationDelay:'60ms'}}>
              <div className="icon-wrap"><Clock3 size={18}/></div>
              <h3 style={{marginTop:12}}>24/7 Availability</h3>
              <p>Systems Don&apos;t Sleep; <span className="uc">SLAs</span> Improve.</p>
            </div>
            <div className="card benefit-card card-pad center reveal" style={{animationDelay:'120ms'}}>
              <div className="icon-wrap"><DollarSign size={18}/></div>
              <h3 style={{marginTop:12}}>Cost Reduction</h3>
              <p>Fewer manual hours, fewer errors, clearer attribution.</p>
            </div>
            <div className="card benefit-card card-pad center reveal" style={{animationDelay:'180ms'}}>
              <div className="icon-wrap"><BarChart3 size={18}/></div>
              <h3 style={{marginTop:12}}>Scalability & Growth</h3>
              <p>Durable integrations; add workflows, not headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" id="faqs">
        <div className="container-page">
          <h2 className="reveal">We&apos;ve Got the Answers You&apos;re Looking For</h2>
          <p className="sub small reveal" style={{animationDelay:'60ms'}}>Quick Answers To Your <span className="uc">AI</span> Automation Questions.</p>
          <div style={{maxWidth:820, margin:"0 auto"}}>
            <div className="grid-1" style={{display:'grid', gap:16, marginTop:24}}>
              <details className="card faq-card card-pad reveal"><summary className="h3">What Exactly Do I Get In The Free <span className="uc">AI</span> Integration Audit?</summary><p className="small" style={{marginTop:8}}>A Workflow Map For One Process, Recommended Agents/Automations, Risk/<span className="uc">ToS</span> Notes, And A Template Pack.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">How fast can I see value?</summary><p className="small" style={{marginTop:8}}>First meaningful win within the pilot window (typically 14–30 days), then expand.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">Will <span className="uc">AI</span> Replace My Team?</summary><p className="small" style={{marginTop:8}}>No — Agents Automate The Robot Work; Your Team Does Judgment, Strategy, Relationships.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">How Do You Keep This Safe And Compliant?</summary><p className="small" style={{marginTop:8}}>Human-In-The-Loop Approvals, Audit Logs, Least-Privilege Access, <span className="uc">ToS</span>-Friendly Workflows.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">What happens if the pilot doesn&apos;t work?</summary><p className="small" style={{marginTop:8}}>Pay-on-Proof: we keep working free until the KPIs land — or you don&apos;t pay.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">What Tools Can You Integrate?</summary><p className="small" style={{marginTop:8}}><span className="uc">CRM</span>, Email, Calendar, Slack/Teams, Data Warehouses, <span className="uc">SSO</span>, Marketing Tools, Industry Systems (Varies By Niche).</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">Do you offer ongoing support?</summary><p className="small" style={{marginTop:8}}>Yes — monitoring, change requests, monthly optimization sprints.</p></details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container-page">
          <div style={{maxWidth:820, margin:"0 auto"}}>
            <div className="cta-block reveal">
              <h2>Let <span className="uc">AI</span> Do The Work So You Can Scale Faster</h2>
              <p className="small" style={{marginTop:8}}>Book A Free <span className="uc">AI</span> Integration Audit — Get Your Workflow Map And Templates.</p>
              <div style={{marginTop:16}}>
                <Link href="/contact#book" className="button-primary group"><span style={{display:'inline-flex',alignItems:'center',gap:8}}>Book a free call <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} /></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us simple section after CTA */}
      <section className="section-compact" id="contact">
        <div className="container-page">
          <div className="card card-pad reveal" style={{maxWidth:820, margin:"0 auto"}}>
            <h2>Contact Us</h2>
            <p className="small">We&apos;ll never share your data. Audit outputs remain yours.</p>
            <form action={formAction} className="grid" style={{gap:12, marginTop:16}} aria-live="polite">
              <input name="source" type="hidden" value="home" />
              <input name="name" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Name" required />
              <input name="email" type="email" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Work Email" required />
              <textarea name="message" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="What problem should we tackle first?" rows={4} required />
              <button className="button-primary" type="submit">Send</button>
              {formState.message ? (
                <p className="small" style={{ marginTop: 8, color: formState.ok ? "#86efac" : "#fca5a5" }}>
                  {formState.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
