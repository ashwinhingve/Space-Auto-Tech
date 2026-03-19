"use client";
import { useState } from "react";

export default function InquiryPage() {
  const [form, setForm] = useState({ name: "", companyName: "", email: "", phoneNumber: "", comment: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) { setStatus("error"); return; }
      setStatus("sent");
      setForm({ name: "", companyName: "", email: "", phoneNumber: "", comment: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Inquiry</div>
            <h1 className="section-heading-modern mb-5">We Are Happy to Serve You</h1>
            <p className="section-copy-muted">Share your request and our team will get back to you with the right guidance.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          {status === "sent" ? (
            <div className="card border-l-4 border-forest text-center py-14">
              <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-5 text-forest">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-ink text-xl mb-2">Inquiry Received!</h3>
              <p className="text-ink/55 text-sm mb-6">Thanks. Your inquiry has been noted. Our team will contact you shortly.</p>
              <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">Send Another</button>
            </div>
          ) : status === "error" ? (
            <div className="card border-l-4 border-red-400 text-center py-14">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5 text-red-400">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4m0 4h.01" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-ink text-xl mb-2">Submission Failed</h3>
              <p className="text-ink/55 text-sm mb-6">Something went wrong. Please try again or contact us directly.</p>
              <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">Try Again</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="companyName">Company Name *</label>
                  <input id="companyName" name="companyName" value={form.companyName} onChange={handleChange} className="form-input" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="phoneNumber">Phone *</label>
                  <input id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className="form-input" required />
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="comment">Message *</label>
                <textarea id="comment" name="comment" value={form.comment} onChange={handleChange} className="form-textarea" rows={5} required />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round"/>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
