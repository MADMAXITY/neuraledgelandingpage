"use client";

import Link from "next/link";
import Image from "next/image";
import { useFormState } from "react-dom";
import { subscribeFormAction, type FormState } from "@/app/actions/email";

export default function Footer() {
  const [state, action] = useFormState<FormState, FormData>(subscribeFormAction, { ok: false, message: "" });
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-page py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="space-y-3 md:col-span-2">
          <Link href="/" className="inline-flex items-center" aria-label="NeuralEdge Home">
            <Image src="/logo.png" alt="NeuralEdge" width={112} height={112} className="h-8 w-auto" />
          </Link>
          <p className="opacity-80">Integrated AI agents for meaningful work.</p>
          <form action={action} className="flex gap-2" aria-live="polite">
            <input
              name="email"
              className="flex-1 bg-black/30 border border-white/10 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Email for templates & playbooks"
              aria-label="Email for newsletter"
              type="email"
              required
            />
            <button type="submit" className="subscribe-btn text-sm">Subscribe</button>
          </form>
          {state.message ? (
            <p className="small" style={{ color: state.ok ? "#86efac" : "#fca5a5" }}>{state.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Links</div>
          <ul className="grid gap-1 opacity-80">
            <li><Link href="/smmc">SMMC</Link></li>
            <li><Link href="/saas">SaaS</Link></li>
            <li><Link href="/real-estate">Real Estate</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Pages</div>
          <ul className="grid gap-1 opacity-80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>
              <a href="https://neuraledge.blog" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/legal">Legal/Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page pb-10 text-xs opacity-60">© {new Date().getFullYear()} NeuralEdge</div>
    </footer>
  );
} 
