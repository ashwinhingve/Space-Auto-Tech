"use client";
import { useState } from "react";

export default function VendorRegistrationPage() {
  const [form, setForm] = useState({
    companyName: "", contactPerson: "", email: "", phone: "",
    address: "", gstNumber: "", panNumber: "",
    businessType: "", productsServices: "", yearsInBusiness: "", website: "", message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) { setStatus("error"); return; }
      setStatus("sent");
      setForm({ companyName: "", contactPerson: "", email: "", phone: "", address: "", gstNumber: "", panNumber: "", businessType: "", productsServices: "", yearsInBusiness: "", website: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16 bg-cloud min-h-screen">

      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky/20 via-cerulean/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Vendor Registration</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mb-5 text-balance">
              Register as a <em className="not-italic text-gradient">Vendor</em>
            </h1>
            <p className="text-lg text-ink/55 leading-relaxed">
              Partner with Space Auto Tech. Register your company to supply components, services, or materials for our projects across automation, solar, and manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl max-w-3xl">
          {status === "sent" ? (
            <div className="card border-l-4 border-forest text-center py-14">
              <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-5 text-forest">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-ink text-xl mb-2">Registration Submitted!</h3>
              <p className="text-ink/55 text-sm mb-6">Our procurement team will review your details and contact you within 3 business days.</p>
              <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">Register Another</button>
            </div>
          ) : (
            <div className="card space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink mb-1">Company Details</h2>
                <p className="text-sm text-ink/45">Fields marked * are required.</p>
              </div>

              {status === "error" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4m0 4h.01" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-red-700">Submission failed</p>
                    <p className="text-xs text-red-600 mt-0.5">Please check your details and try again.</p>
                  </div>
                  <button onClick={() => setStatus("idle")} className="ml-auto text-red-400 hover:text-red-600">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l8 8M12 4l-8 8"/></svg>
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="companyName">Company Name *</label>
                    <input id="companyName" name="companyName" required value={form.companyName} onChange={handleChange} className="form-input" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contactPerson">Contact Person *</label>
                    <input id="contactPerson" name="contactPerson" required value={form.contactPerson} onChange={handleChange} className="form-input" placeholder="Full name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="contact@company.com" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="address">Address</label>
                  <input id="address" name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="Street, City, State, Pincode" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="gstNumber">GST Number</label>
                    <input id="gstNumber" name="gstNumber" value={form.gstNumber} onChange={handleChange} className="form-input" placeholder="22AAAAA0000A1Z5" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="panNumber">PAN Number</label>
                    <input id="panNumber" name="panNumber" value={form.panNumber} onChange={handleChange} className="form-input" placeholder="AAAAA0000A" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="businessType">Business Type</label>
                    <select id="businessType" name="businessType" value={form.businessType} onChange={handleChange} className="form-input">
                      <option value="">Select type...</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="trader">Trader / Distributor</option>
                      <option value="service">Service Provider</option>
                      <option value="importer">Importer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="yearsInBusiness">Years in Business</label>
                    <select id="yearsInBusiness" name="yearsInBusiness" value={form.yearsInBusiness} onChange={handleChange} className="form-input">
                      <option value="">Select...</option>
                      <option value="less-1">Less than 1 year</option>
                      <option value="1-3">1–3 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="5-10">5–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="website">Website</label>
                  <input id="website" name="website" type="url" value={form.website} onChange={handleChange} className="form-input" placeholder="https://yourcompany.com" />
                </div>
                <div>
                  <label className="form-label" htmlFor="productsServices">Products / Services Offered *</label>
                  <textarea id="productsServices" name="productsServices" required rows={3} value={form.productsServices} onChange={handleChange} className="form-textarea" placeholder="Describe what your company supplies or manufactures..." />
                </div>
                <div>
                  <label className="form-label" htmlFor="message">Additional Information</label>
                  <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange} className="form-textarea" placeholder="Certifications, capacity, references, or any other relevant details..." />
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
                  ) : (
                    <>
                      Submit Registration
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
