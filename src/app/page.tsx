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
          <h1 className="reveal" style={{animationDelay:'40ms'}}>AI does the robot work.<br/>Your team does the real work.</h1>
          <p className="sub small reveal" style={{animationDelay:'100ms'}}>Outcome-first AI integration to remove the boring work, speed up the important work, and scale with less effort.</p>
          <div className="reveal" style={{animationDelay:'140ms', display:'flex', gap:12, justifyContent:'center'}}>
            <Link href="/contact#book" className="button-primary group" title="Fast 15–20 min call. We map one workflow and share templates.">
              <span style={{display:'inline-flex',alignItems:'center',gap:8}}>Book a Free AI Integration Audit <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} /></span>
            </Link>
          </div>
          <div className="reveal" style={{animationDelay:'180ms', marginTop:18, display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap'}}>
            <span className="pill" style={{opacity:.9}}><CheckCircle2 size={14}/> Limited onboardings/month</span>
            <span className="pill" style={{opacity:.9}}><Shield size={14}/> Human-in-the-loop</span>
            <span className="pill" style={{opacity:.9}}><Lock size={14}/> ToS-compliant</span>
            <span className="pill" style={{opacity:.9}}><ScrollText size={14}/> Audit logs</span>
          </div>

          {/* Tools row */}
          <div className="reveal tools-row" style={{animationDelay:'230ms', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
            <Image src="/tools-media/openai.png" alt="OpenAI" width={60} height={18} />
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
              <p className="small" style={{opacity:.85, marginTop:6}}>Turn attention into DMs.</p>
              <div className="mini-chips" style={{marginTop:8}}>
                <span className="mini-chip">Native shorts</span>
                <span className="mini-chip">Conversation desk</span>
                <span className="mini-chip">Brand voice</span>
              </div>
              <div className="stack-strip">IG • TikTok • YT • LinkedIn • Notion</div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="#">View SMMC Solutions →</a>
              </div>
            </div>

            {/* SaaS */}
            <div className="card-gradient card-pad reveal icon-corner" style={{animationDelay:'60ms'}}>
              <div className="icon-wrap"><Layers size={18}/></div>
              <h3 style={{marginTop:12}}>High-Ticket SaaS</h3>
              <p className="small" style={{opacity:.85, marginTop:6}}>Shorten cycles. Prove value faster.</p>
              <div className="mini-chips" style={{marginTop:8}}>
                <span className="mini-chip">AI Deal Room</span>
                <span className="mini-chip">Onboarding OS</span>
                <span className="mini-chip">ICP/ABM</span>
              </div>
              <div className="stack-strip">Salesforce • Gmail • Slack • Okta • Drive</div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="#">View SaaS Solutions →</a>
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
              <div className="stack-strip">FUB • CallRail • Meta Ads • GCal • DocuSign</div>
              <div style={{marginTop:14}}>
                <a className="link-tiny" href="#">View RE Solutions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section section-tight" id="services">
        <div className="container-page">
          <h2 className="reveal" style={{textAlign:'center'}}>AI Solutions That Take Your Business to the Next Level</h2>
          <p className="sub small reveal" style={{animationDelay:'60ms', textAlign:'center', maxWidth:'70ch', marginInline:'auto'}}>We design, develop, and implement AI agents & automations that remove busywork and unlock growth.</p>

          <div className="sol-grid" style={{marginTop:24}}>
            <div className="sol-card main-panel sol-main center">
              <span className="badge">Workflow Automation</span>
              <h3 style={{marginTop:6}}>Automate repetitive tasks</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Wire AI into workflows so data moves itself and approvals land on time.</p>
              <div className="outcome-chips outcome-center">
                <span className="outcome-chip">Time saved</span>
                <span className="outcome-chip">Fewer errors</span>
                <span className="outcome-chip">On-time approvals</span>
              </div>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12}/></span>Social media</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>Lead enrich</div>
                <div className="icon-item"><span className="icon-box"><Clock3 size={12}/></span>Time tracking</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>System sync</div>
                <div className="icon-item"><span className="icon-box"><BellIcon size={12}/></span>Reminders</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12}/></span>Weekly rolls</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>File rules</div>
                <div className="icon-item"><span className="icon-box"><Link2 size={12}/></span>Sheets/Drive</div>
              </div>
              <div className="stack-logos" style={{justifyContent:'center'}}>
                <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={26} height={12} />
                <Image src="/tools-media/make-color.png" alt="Make" width={26} height={12} />
              </div>
              <p className="small" style={{opacity:.65, marginTop:8}}>Target: Ops hours ↓, error rate ↓</p>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Delegation</span>
              <h3 style={{marginTop:6}}>Delegate daily tasks</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Assistants draft, summarize, and schedule—your team reviews and sends.</p>
              <div className="outcome-chips outcome-center">
                <span className="outcome-chip">Inbox calm</span>
                <span className="outcome-chip">Faster follow-ups</span>
                <span className="outcome-chip">Better notes</span>
              </div>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Calendar size={12}/></span>Smart holds</div>
                <div className="icon-item"><span className="icon-box"><ArrowRight size={12}/></span>Follow-up</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>Notes → actions</div>
                <div className="icon-item"><span className="icon-box"><Mail size={12}/></span>Inbox triage</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>Task routing</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12}/></span>Knowledge</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12}/></span>Summaries</div>
                <div className="icon-item"><span className="icon-box"><Link2 size={12}/></span>Vendors</div>
              </div>
              <div className="stack-logos" style={{justifyContent:'center'}}>
                <Image src="/tools-media/openai.png" alt="OpenAI" width={24} height={12} />
                <Image src="/tools-media/claude-ai.png" alt="Claude" width={24} height={12} />
                <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={24} height={12} />
              </div>
              <p className="small" style={{opacity:.65, marginTop:8}}>Target: Reply time ↓, meeting quality ↑</p>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Growth</span>
              <h3 style={{marginTop:6}}>Accelerate sales</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Speed-to-lead, ICP routing, and tailored outreach that turns conversations into pipeline.</p>
              <div className="outcome-chips outcome-center">
                <span className="outcome-chip">Cycle time ↓</span>
                <span className="outcome-chip">POV→Close ↑</span>
                <span className="outcome-chip">TTFV ≤ 14d</span>
              </div>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Zap size={12}/></span>&lt;5-min reply</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12}/></span>ICP route</div>
                <div className="icon-item"><span className="icon-box"><MessageSquare size={12}/></span>SDR assist</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>Conv → CRM</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>Prep briefs</div>
                <div className="icon-item"><span className="icon-box"><BarChart3 size={12}/></span>Attribution</div>
                <div className="icon-item"><span className="icon-box"><AlertTriangleIcon size={12}/></span>Renewal alerts</div>
                <div className="icon-item"><span className="icon-box"><CheckCircle2 size={12}/></span>MAPs</div>
              </div>
              <div className="stack-logos" style={{justifyContent:'center'}}>
                <Image src="/tools-media/zapier-logo.png" alt="Zapier" width={24} height={12} />
                <Image src="/tools-media/make-color.png" alt="Make" width={24} height={12} />
                <Image src="/tools-media/n8n-color.png" alt="n8n" width={22} height={12} />
              </div>
              <p className="small" style={{opacity:.65, marginTop:8}}>Target: Connect rate ↑, stage velocity ↑</p>
            </div>

            <div className="sol-card main-panel sol-main center">
              <span className="badge">Custom Projects</span>
              <h3 style={{marginTop:6}}>Build Smarter Systems</h3>
              <p className="small sol-desc" style={{marginInline:'auto'}}>Durable integrations with observability and guardrails so you scale without breakage.</p>
              <div className="outcome-chips outcome-center">
                <span className="outcome-chip">Single source of truth</span>
                <span className="outcome-chip">Observability</span>
                <span className="outcome-chip">Compliance</span>
              </div>
              <div className="list-grid list-center" style={{marginTop:14}}>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>SSOT model</div>
                <div className="icon-item"><span className="icon-box"><Link2 size={12}/></span>API/webhooks</div>
                <div className="icon-item"><span className="icon-box"><Shield size={12}/></span>RBAC & approvals</div>
                <div className="icon-item"><span className="icon-box"><ScrollText size={12}/></span>Audit & retention</div>
                <div className="icon-item"><span className="icon-box"><AlertTriangleIcon size={12}/></span>Error handling</div>
                <div className="icon-item"><span className="icon-box"><BellIcon size={12}/></span>Monitoring & SLOs</div>
                <div className="icon-item"><span className="icon-box"><Layers size={12}/></span>Backups/promo</div>
                <div className="icon-item"><span className="icon-box"><Shield size={12}/></span>PII/DLP</div>
              </div>
              <div className="stack-logos" style={{justifyContent:'center'}}>
                <Image src="/tools-media/supabase-logo-png_seeklogo-435677.png" alt="Supabase" width={34} height={12} />
                <Image src="/tools-media/openai.png" alt="OpenAI" width={26} height={12} />
              </div>
              <p className="small" style={{opacity:.65, marginTop:8}}>Target: Breakage ↓, visibility ↑</p>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="section" id="benefits">
        <div className="container-page">
          <h2 className="reveal">The Key Benefits of AI for Your Business Growth</h2>
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
              <p>Systems don&apos;t sleep; SLAs improve.</p>
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
          <p className="sub small reveal" style={{animationDelay:'60ms'}}>Quick answers to your AI automation questions.</p>
          <div style={{maxWidth:820, margin:"0 auto"}}>
            <div className="grid-1" style={{display:'grid', gap:16, marginTop:24}}>
              <details className="card faq-card card-pad reveal"><summary className="h3">What exactly do I get in the Free AI Integration Audit?</summary><p className="small" style={{marginTop:8}}>A workflow map for one process, recommended agents/automations, risk/ToS notes, and a template pack.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">How fast can I see value?</summary><p className="small" style={{marginTop:8}}>First meaningful win within the pilot window (typically 14–30 days), then expand.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">Will AI replace my team?</summary><p className="small" style={{marginTop:8}}>No — agents automate the robot work; your team does judgment, strategy, relationships.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">How do you keep this safe and compliant?</summary><p className="small" style={{marginTop:8}}>Human-in-the-loop approvals, audit logs, least-privilege access, ToS-friendly workflows.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">What happens if the pilot doesn&apos;t work?</summary><p className="small" style={{marginTop:8}}>Pay-on-Proof: we keep working free until the KPIs land — or you don&apos;t pay.</p></details>
              <details className="card faq-card card-pad reveal"><summary className="h3">What tools can you integrate?</summary><p className="small" style={{marginTop:8}}>CRM, email, calendar, Slack/Teams, data warehouses, SSO, marketing tools, industry systems (varies by niche).</p></details>
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
              <h2>Let AI do the work so you can scale faster</h2>
              <p className="small" style={{marginTop:8}}>Book a Free AI Integration Audit — get your workflow map and templates.</p>
              <div style={{marginTop:16}}>
                <Link href="/contact#book" className="button-primary group"><span style={{display:'inline-flex',alignItems:'center',gap:8}}>Book a free call <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} /></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us simple section after CTA */}
      <section className="section-compact">
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
