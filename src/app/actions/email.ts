"use server";

import { sendMail } from "@/lib/email";

export type FormState = { ok: boolean; message: string };

export async function sendContactMessage(formData: FormData): Promise<void> {
  try {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const source = String(formData.get("source") || "contact");

    if (!name || !email || !message) return;

    const subject = `New ${source === "home" ? "Home" : "Contact"} Form Submission — ${name}`;
    const text = `Source: ${source}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5;color:#111">
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:12px 0 4px"><strong>Message</strong></p>
        <pre style="white-space:pre-wrap;background:#f7f7f8;border:1px solid #eee;border-radius:8px;padding:12px">${escapeHtml(message)}</pre>
      </div>
    `;

    await sendMail({ subject, text, html });
  } catch (err) {
    console.error("[sendContactMessage]", err);
  }
}

export async function subscribeNewsletter(formData: FormData): Promise<void> {
  try {
    const email = String(formData.get("email") || "").trim();
    if (!email) return;

    const subject = `New newsletter subscriber — ${email}`;
    const text = `A new user subscribed to templates & playbooks.\nEmail: ${email}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5;color:#111">
        <p>New newsletter subscriber</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      </div>
    `;

    await sendMail({ subject, text, html });
  } catch (err) {
    console.error("[subscribeNewsletter]", err);
  }
}

export async function contactFormAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const source = String(formData.get("source") || "contact");

    if (!name || !email || !message) {
      return { ok: false, message: "Please complete all fields." };
    }

    const subject = `New ${source === "home" ? "Home" : "Contact"} Form Submission — ${name}`;
    const text = `Source: ${source}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5;color:#111">
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style=\"margin:12px 0 4px\"><strong>Message</strong></p>
        <pre style=\"white-space:pre-wrap;background:#f7f7f8;border:1px solid #eee;border-radius:8px;padding:12px\">${escapeHtml(message)}</pre>
      </div>
    `;

    await sendMail({ subject, text, html });
    return { ok: true, message: "Thanks — we’ll be in touch shortly." };
  } catch (err) {
    console.error("[contactFormAction]", err);
    return { ok: false, message: "Could not send your message. Please try again." };
  }
}

export async function subscribeFormAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const email = String(formData.get("email") || "").trim();
    if (!email) return { ok: false, message: "Enter an email address." };

    const subject = `New newsletter subscriber — ${email}`;
    const text = `A new user subscribed to templates & playbooks.\nEmail: ${email}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5;color:#111">
        <p>New newsletter subscriber</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      </div>
    `;

    await sendMail({ subject, text, html });
    return { ok: true, message: "Subscribed. Check your inbox soon!" };
  } catch (err) {
    console.error("[subscribeFormAction]", err);
    return { ok: false, message: "Could not subscribe right now." };
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
