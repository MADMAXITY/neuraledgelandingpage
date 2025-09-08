import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="container-page section">
      <h1 className="h1 text-3xl mb-3">Contact Us</h1>
      <p className="opacity-80 max-w-2xl mb-8">We&apos;ll never share your data. Audit outputs remain yours.</p>

      <a id="book" />
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />

        <div className="card p-5">
          <div className="font-semibold mb-1">What you get</div>
          <ul className="opacity-80 list-disc pl-5 space-y-1 text-sm">
            <li>AI workflow map for one process</li>
            <li>Recommended agents/automations</li>
            <li>Risk/ToS notes</li>
            <li>Template pack</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
