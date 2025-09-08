"use client";

import { useFormState } from "react-dom";
import { contactFormAction, type FormState } from "@/app/actions/email";

export default function ContactForm() {
  const initialState: FormState = { ok: false, message: "" };
  const [state, action] = useFormState(contactFormAction, initialState);

  return (
    <form action={action} className="card p-5 grid gap-4" aria-live="polite">
      <input name="source" type="hidden" value="contact" />
      <label className="grid gap-1">
        <span className="text-sm opacity-80">Name</span>
        <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2" name="name" required />
      </label>
      <label className="grid gap-1">
        <span className="text-sm opacity-80">Work Email</span>
        <input type="email" className="bg-black/30 border border-white/10 rounded-md px-3 py-2" name="email" required />
      </label>
      <label className="grid gap-1">
        <span className="text-sm opacity-80">What problem should we tackle first?</span>
        <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2" name="message" required />
      </label>
      <button className="btn-accent px-4 py-2 text-sm font-medium" type="submit">Book a Free AI Integration Audit</button>
      {state.message ? (
        <p className="small" style={{ marginTop: 4, color: state.ok ? "#86efac" : "#fca5a5" }}>{state.message}</p>
      ) : null}
    </form>
  );
}

