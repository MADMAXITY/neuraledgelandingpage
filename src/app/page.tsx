"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Lock, ScrollText, Shield, Zap, MessageSquare, Clock3, DollarSign, BarChart3, Layers } from "lucide-react";

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

  return (
    <div>
      {/* Hero */}
      <section className="section hero">
        <div className="container-page hero-inner">
          <h1 className="reveal" style={{animationDelay:'40ms'}}>AI does the robot work.<br/>Your team does the real work.</h1>
          <p className="sub small reveal" style={{animationDelay:'100ms'}}>Outcome-first AI integration to remove the boring work, speed up the important work, and scale with less effort.</p>
          <div className="reveal" style={{animationDelay:'140ms', display:'flex', gap:12, justifyContent:'center'}}>
            <Link href="/contact#book" className="button-primary" title="Fast 15–20 min call. We map one workflow and share templates.">Book a Free AI Integration Audit</Link>
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
            <div className="card card-pad reveal">
              <div className="icon-wrap"><MessageSquare size={18}/></div>
              <h3 style={{marginTop:12}}>SMMC (Social Media & Content)</h3>
              <p>Turn attention into conversations with platform-native content and conversation systems.</p>
            </div>
            <div className="card card-pad reveal" style={{animationDelay:'60ms'}}>
              <div className="icon-wrap"><Layers size={18}/></div>
              <h3 style={{marginTop:12}}>High-Ticket SaaS</h3>
              <p>Accelerate deals, prove value faster, and reduce sales effort across GTM and product.</p>
            </div>
            <div className="card card-pad reveal" style={{animationDelay:'120ms'}}>
              <div className="icon-wrap"><Zap size={18}/></div>
              <h3 style={{marginTop:12}}>Real Estate</h3>
              <p>Connect faster, close cleaner, and spend less via AI-assisted speed-to-lead and deal rooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section" id="services">
        <div className="container-page">
          <h2 className="reveal">AI Solutions That Take Your Business to the Next Level</h2>
          <p className="sub small reveal" style={{animationDelay:'60ms'}}>We design, develop, and implement automation tools that help you work smarter, not harder.</p>
          <div className="grid-3" style={{marginTop:24}}>
            <div className="card card-pad reveal">
              <div className="pill" style={{marginBottom:8}}>Workflow Automation</div>
              <h3>Automate repetitive tasks</h3>
              <ul style={{marginTop:8, textAlign:"left"}}>
                <li>Data entry, reporting, approvals</li>
                <li>Enrichment, file moves, status updates</li>
              </ul>
            </div>
            <div className="card card-pad reveal" style={{animationDelay:'60ms'}}>
              <div className="pill" style={{marginBottom:8}}>Delegation</div>
              <h3>Delegate daily tasks</h3>
              <ul style={{marginTop:8, textAlign:"left"}}>
                <li>Scheduling, follow-ups, summaries</li>
                <li>Triage, routing, draft replies</li>
              </ul>
            </div>
            <div className="card card-pad reveal" style={{animationDelay:'120ms'}}>
              <div className="pill" style={{marginBottom:8}}>Growth</div>
              <h3>Accelerate sales</h3>
              <ul style={{marginTop:8, textAlign:"left"}}>
                <li>Speed-to-lead, ICP scoring, SDR assistants</li>
                <li>Conversations + pipeline attribution</li>
              </ul>
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
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container-page">
          <div className="cta-block reveal">
            <h2>Let AI do the work so you can scale faster</h2>
            <p className="small" style={{marginTop:8}}>Book a Free AI Integration Audit — get your workflow map and templates.</p>
            <div style={{marginTop:16}}>
              <Link href="/contact#book" className="button-primary">Book a free call →</Link>
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
            <form className="grid" style={{gap:12, marginTop:16}}>
              <input className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Name" required />
              <input type="email" className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="Work Email" required />
              <textarea className="bg-black/30 border border-[var(--border)] rounded-md px-3 py-2" placeholder="What problem should we tackle first?" rows={4} required />
              <button className="button-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
