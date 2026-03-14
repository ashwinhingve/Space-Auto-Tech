"use client";
import { useState } from "react";

export default function InquiryPage() {
  const [form, setForm] = useState({ name: "", companyName: "", email: "", phoneNumber: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", companyName: "", email: "", phoneNumber: "", comment: "" });
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
            <button type="submit" className="btn-primary w-full justify-center py-3.5">Submit Inquiry</button>
            {submitted ? <p className="text-sm text-forest">Thanks. Your inquiry has been noted.</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
}