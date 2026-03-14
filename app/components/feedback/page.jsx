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

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Requirement Form</div>
            <h1 className="section-heading-modern mb-5">Tell Us Your System Requirements</h1>
            <p className="section-copy-muted">Share your project details and our team will suggest a suitable solution architecture.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          <form onSubmit={handleSubmit} className="card space-y-5">
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
              <input name="address.street" className="form-input" placeholder="Street" value={formData.address.street} onChange={handleChange} required />
              <div className="grid sm:grid-cols-3 gap-4">
                <input name="address.city" className="form-input" placeholder="City" value={formData.address.city} onChange={handleChange} required />
                <input name="address.state" className="form-input" placeholder="State" value={formData.address.state} onChange={handleChange} required />
                <input name="address.postalCode" className="form-input" placeholder="Postal Code" value={formData.address.postalCode} onChange={handleChange} required />
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="form-label">Battery Type</legend>
              <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                {["On-grid", "Off-grid", "Hybrid"].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input type="radio" name="batteryType" value={option} checked={formData.batteryType === option} onChange={handleChange} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="form-label">Preferred Panel Type</legend>
              <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                {["Monocrystalline", "Polycrystalline", "Thin Film"].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input type="checkbox" name="panelType" value={option} checked={formData.panelType.includes(option)} onChange={handleChange} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="btn-primary w-full justify-center py-3.5" disabled={status === "sending"}>
              {status === "sending" ? "Submitting..." : "Submit Requirement"}
            </button>

            {status === "success" ? <p className="text-sm text-forest">Form submitted successfully.</p> : null}
            {status === "error" ? <p className="text-sm text-red-500">Unable to submit right now. Please try again.</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
}