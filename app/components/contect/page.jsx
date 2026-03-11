'use client';
import { useState } from 'react';
import ScrollReveal from '@/app/component/ScrollReveal';

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve manufacturing, energy, agriculture, railway, water treatment, and smart building sectors — any environment requiring industrial-grade automation.",
  },
  {
    q: "Do you offer remote system monitoring?",
    a: "Yes. All our SCADA and IoT deployments include remote access capabilities so you can monitor and manage systems from anywhere in the world.",
  },
  {
    q: "How long does a typical PLC project take?",
    a: "Project timelines vary by scope. A straightforward single-station PLC program may take 2–3 weeks; full plant-wide automation can span several months. We provide detailed estimates after an initial consultation.",
  },
  {
    q: "What PLC brands do you support?",
    a: "We work with Siemens (S7-300, S7-400, S7-1200, S7-1500), Allen-Bradley, Mitsubishi, Schneider Electric, and more — both legacy retrofits and new installations.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-cerulean/40 bg-cerulean/4 shadow-card"
          : "border-sky/20 bg-white hover:border-cerulean/25"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="text-sm font-medium text-ink">{question}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-cerulean text-white rotate-180" : "bg-sky/15 text-ink/50"}`}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 4l4 4 4-4"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-sm text-ink/60 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-16 bg-cloud min-h-screen">

      {/* ── Page hero ── */}
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky/20 via-cerulean/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Contact</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mb-5 text-balance">
              Let&apos;s Build <em className="not-italic text-gradient">Something</em> Together
            </h1>
            <p className="text-lg text-ink/55 leading-relaxed">
              Reach out to our engineering team. We&apos;ll analyse your requirements and craft a custom automation solution for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ─ Contact form ─ */}
            <div className="lg:col-span-3">

              {status === "sent" ? (
                <div className="card border-l-4 border-forest text-center py-14">
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-5 text-forest">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-ink text-xl mb-2">Message Sent!</h3>
                  <p className="text-ink/55 text-sm mb-6">Our team will respond within 1 business day.</p>
                  <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">Send Another</button>
                </div>
              ) : (
                <div className="card space-y-5">
                  <div className="mb-2">
                    <h2 className="font-display text-2xl font-semibold text-ink mb-1">Send a Message</h2>
                    <p className="text-sm text-ink/45">All fields marked * are required.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="name" className="form-label">Full Name <span className="text-red-400">*</span></label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                          placeholder="Your full name" className="form-input" />
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="form-label">Email Address <span className="text-red-400">*</span></label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="you@company.com" className="form-input" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210" className="form-input" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="form-label">Service Interest</label>
                        <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="form-input">
                          <option value="">Select a service...</option>
                          <option value="plc">PLC Development</option>
                          <option value="iot">IoT Development</option>
                          <option value="scada">SCADA Solutions</option>
                          <option value="solar">Solar Energy</option>
                          <option value="irrigation">Irrigation Automation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="form-label">Message <span className="text-red-400">*</span></label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        placeholder="Describe your project, system requirements, or questions..."
                        className="form-textarea" />
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
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

            {/* ─ Info sidebar ─ */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Contact Information</h2>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "spaceautomation29@gmail.com",
                  href: "mailto:spaceautomation29@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 9938457420",
                  href: "tel:+919938457420",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: "Office",
                  value: "Deshmukh Farm House, Saikheda Athner Road, Gaula, Multai, M.P. 460057",
                  href: "https://maps.google.com",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group card hover:border-cerulean/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cerulean/8 flex items-center justify-center text-cerulean group-hover:bg-cerulean group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink/40 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-ink group-hover:text-cerulean transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="card">
                <h4 className="text-xs font-mono text-ink/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse-ring" />
                  Business Hours
                </h4>
                <div className="space-y-2.5">
                  {[
                    { day: "Mon – Fri", hours: "9:00 AM – 6:00 PM", active: true },
                    { day: "Saturday",  hours: "10:00 AM – 2:00 PM", active: true },
                    { day: "Sunday",    hours: "Closed", active: false },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between text-sm items-center">
                      <span className="text-ink/55">{row.day}</span>
                      <span className={`font-medium px-2.5 py-0.5 rounded-full text-xs ${row.active ? "bg-cerulean/8 text-cerulean" : "text-ink/30"}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="container-xl pb-0">
        <div className="rounded-3xl overflow-hidden ring-1 ring-sky/20 shadow-card-hover relative">
          <div className="absolute top-4 left-4 z-10 card-glass px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cerulean" />
              <span className="text-xs font-mono font-medium text-ink">Space Auto Tech — Multai, M.P.</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4324.459431611455!2d78.03340729309899!3d21.698203813592443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5db9eabbb8bbb%3A0x3daef5ab40813c30!2sTapti%20Food%20%26%20Spices!5e0!3m2!1sen!2sin!4v1773248046675!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            title="Space Auto Tech location"
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-label mx-auto mb-4">FAQ</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <FaqItem question={faq.q} answer={faq.a} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
