export default function ContactPage() {
  return (
    <div className="container-page section">
      <h1 className="h1 text-3xl mb-3">Contact Us</h1>
      <p className="opacity-80 max-w-2xl mb-8">We&apos;ll never share your data. Audit outputs remain yours.</p>

      <a id="book" />
      <div className="grid gap-6 md:grid-cols-2">
        <form className="card p-5 grid gap-4">
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
            <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2" name="problem" required />
          </label>
          <button className="btn-accent px-4 py-2 text-sm font-medium">Book a Free AI Integration Audit</button>
        </form>

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