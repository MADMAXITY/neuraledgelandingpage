import { Resend } from "resend";

const defaultTo = process.env.RESEND_TO_EMAIL;
const defaultFrom = process.env.RESEND_FROM_EMAIL;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY missing");
  return new Resend(apiKey);
}

export type SendMailInput = {
  subject: string;
  html?: string;
  text?: string;
  to?: string | string[];
  from?: string;
};

export async function sendMail({ subject, html, text, to, from }: SendMailInput) {
  const toEmail = to ?? defaultTo;
  const fromEmail = from ?? defaultFrom;

  if (!fromEmail) throw new Error("RESEND_FROM_EMAIL missing");
  if (!toEmail) throw new Error("RESEND_TO_EMAIL missing");

  return getResend().emails.send({
    from: fromEmail,
    to: toEmail,
    subject,
    html,
    text: text ?? "",
  });
}
