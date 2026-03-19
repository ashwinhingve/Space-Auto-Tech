"use client";
import { useState } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: { street: "", city: "", state: "", postalCode: "" },
    systemSize: "",
    batteryType: "",
    panelType: [],
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        panelType: checked ? [...prev.panelType, value] : prev.panelType.filter((item) => item !== value),
      }));
      return;
    }

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        address: { street: "", city: "", state: "", postalCode: "" },
        systemSize: "",
        batteryType: "",
        panelType: [],
      });
    } catch {
      setStatus("error");
    }
  };

  const nextSteps = [
    { step: "01", title: "Requirement Review",  desc: "Our solar team reviews your submission within 1 business day." },
    { step: "02", title: "Site Survey",          desc: "We schedule a free site visit to assess your roof space and consumption." },
    { step: "03", title: "Custom Proposal",      desc: "Receive a detailed system design with costs, savings, and ROI projections." },
  ];

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky/20 via-cerulean/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Solar Requirements</div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-5 text-balance">
              Tell Us Your System Requirements
            </h1>
            <p className="text-lg text-ink/55 leading-relaxed">
              Share your project details and our solar team will design a custom system and send you a detailed proposal — completely free.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="card border-l-4 border-forest text-center py-14">
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-5 text-forest">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-ink text-xl mb-2">Requirements Submitted!</h3>
                  <p className="text-ink/55 text-sm mb-6">Our solar team will review your details and reach out within 1 business day.</p>
                  <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">Submit Another</button>
                </div>
              ) : (
                <div className="card space-y-5">
                  <div className="mb-2">
                    <h2 className="font-display text-2xl font-semibold text-ink mb-1">Your Details</h2>
                    <p className="text-sm text-ink/45">All fields marked * are required.</p>
                  </div>

                  {status === "error" && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v4m0 4h.01" strokeLinecap="round"/>
                      </svg>
                      <p className="text-sm text-red-700">Submission failed. Please check your connection and try again.</p>
                      <button onClick={() => setStatus("idle")} className="ml-auto text-red-400 hover:text-red-600 text-xs underline">Retry</button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="fullName">Full Name *</label>
                        <input id="fullName" name="fullName" className="form-input" value={formData.fullName} onChange={handleChange} required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="email">Email *</label>
                        <input id="email" type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="contactNumber">Contact Number *</label>
                        <input id="contactNumber" name="contactNumber" className="form-input" value={formData.contactNumber} onChange={handleChange} required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="systemSize">Desired System Size (KW) *</label>
                        <input id="systemSize" name="systemSize" className="form-input" value={formData.systemSize} onChange={handleChange} required />
                      </div>
                    </div>

                    <fieldset className="space-y-4">
                      <legend className="form-label">Address *</legend>
                      <input name="address.street" className="form-input" placeholder="Street Address" value={formData.address.street} onChange={handleChange} required />
                      <div className="grid sm:grid-cols-3 gap-4">
                        <input name="address.city" className="form-input" placeholder="City" value={formData.address.city} onChange={handleChange} required />
                        <input name="address.state" className="form-input" placeholder="State" value={formData.address.state} onChange={handleChange} required />
                        <input name="address.postalCode" className="form-input" placeholder="Postal Code" value={formData.address.postalCode} onChange={handleChange} required />
                      </div>
                    </fieldset>

                    {/* Battery Type — styled radios */}
                    <fieldset className="space-y-3">
                      <legend className="form-label">System Type</legend>
                      <div className="flex flex-wrap gap-3">
                        {["On-grid", "Off-grid", "Hybrid"].map((option) => (
                          <label key={option} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name="batteryType"
                              value={option}
                              checked={formData.batteryType === option}
                              onChange={handleChange}
                              className="peer sr-only"
                            />
                            <span className="inline-flex items-center px-4 py-2 rounded-xl border border-sky/25 bg-white text-sm font-medium text-ink/60 transition-all duration-150 peer-checked:border-cerulean peer-checked:bg-cerulean/8 peer-checked:text-cerulean cursor-pointer hover:border-cerulean/40">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Panel Type — styled checkboxes */}
                    <fieldset className="space-y-3">
                      <legend className="form-label">Preferred Panel Type</legend>
                      <div className="flex flex-wrap gap-3">
                        {["Monocrystalline", "Polycrystalline", "Thin Film"].map((option) => (
                          <label key={option} className="relative cursor-pointer">
                            <input
                              type="checkbox"
                              name="panelType"
                              value={option}
                              checked={formData.panelType.includes(option)}
                              onChange={handleChange}
                              className="peer sr-only"
                            />
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-sky/25 bg-white text-sm font-medium text-ink/60 transition-all duration-150 peer-checked:border-cerulean peer-checked:bg-cerulean/8 peer-checked:text-cerulean cursor-pointer hover:border-cerulean/40">
                              <span className="w-4 h-4 rounded border border-current flex items-center justify-center flex-shrink-0 peer-checked:bg-cerulean">
                                {formData.panelType.includes(option) && (
                                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                              </span>
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

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
                          Submit Requirements
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

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card">
                <h3 className="font-display text-lg font-semibold text-ink mb-5">What Happens Next</h3>
                <div className="space-y-5">
                  {nextSteps.map((step, i) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-cerulean text-white flex items-center justify-center font-mono text-xs font-semibold flex-shrink-0">
                          {step.step}
                        </div>
                        {i < nextSteps.length - 1 && (
                          <div className="w-px flex-grow bg-sky/20 my-2" />
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="font-medium text-ink text-sm mb-1">{step.title}</p>
                        <p className="text-xs text-ink/50 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h4 className="text-xs font-mono text-ink/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse-ring" />
                  Contact Us Directly
                </h4>
                <div className="space-y-3">
                  <a href="mailto:spaceautomation29@gmail.com" className="flex items-center gap-3 text-sm text-ink/60 hover:text-cerulean transition-colors">
                    <svg className="w-4 h-4 text-cerulean/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                    </svg>
                    spaceautomation29@gmail.com
                  </a>
                  <a href="tel:+919938457420" className="flex items-center gap-3 text-sm text-ink/60 hover:text-cerulean transition-colors">
                    <svg className="w-4 h-4 text-cerulean/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +91 9938457420
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
