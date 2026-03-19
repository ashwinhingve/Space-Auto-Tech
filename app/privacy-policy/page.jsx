"use client";
import Link from "next/link";

const sections = [
  {
    num: "01",
    title: "Data We Collect",
    content: `When you use our website or submit forms, we may collect: your name, email address, phone number, company name, and message content. We also collect standard server logs (IP address, browser type, pages visited) for security and analytics purposes. We do not collect payment information directly — payments are processed by third-party providers.`,
  },
  {
    num: "02",
    title: "How We Use Your Data",
    content: `We use collected data to: respond to your enquiries and form submissions; send you information you have requested; improve our website and services; maintain system security; and comply with legal obligations. We do not sell, rent, or trade your personal data to third parties for marketing purposes.`,
  },
  {
    num: "03",
    title: "Storage & Security",
    content: `Your data is stored securely on servers located in India and processed by our service providers listed below. We implement appropriate technical measures including HTTPS encryption, access controls, and regular security reviews. However, no internet transmission is 100% secure — we cannot guarantee absolute security.`,
  },
  {
    num: "04",
    title: "Third-Party Services",
    content: `We use the following third-party services that may process your data:\n\n• Resend (resend.com) — email delivery for form submissions\n• Google Maps — embedded map on the Contact page\n• Google Fonts — typography served via Google's CDN\n• Vercel — web hosting and infrastructure\n\nEach service has its own privacy policy governing their data use.`,
  },
  {
    num: "05",
    title: "Your Rights",
    content: `You have the right to: request access to the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal obligations); withdraw consent where processing is based on consent; and lodge a complaint with a supervisory authority. To exercise these rights, contact us at spaceautomation29@gmail.com.`,
  },
  {
    num: "06",
    title: "Cookies",
    content: `Our website uses minimal cookies required for basic functionality. We do not use tracking or advertising cookies. Essential cookies include session management and security tokens. You may disable cookies in your browser settings, though this may affect site functionality.`,
  },
  {
    num: "07",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    num: "08",
    title: "Contact",
    content: `For privacy-related questions or to exercise your data rights, contact us at:\n\nSpace Auto Tech\nDeshmukh Farm House, Saikheda Athner Road, Gaula, Multai, Madhya Pradesh 460057\nEmail: spaceautomation29@gmail.com\nPhone: +91 9938457420`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 bg-cloud min-h-screen">

      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Legal</div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-4">Privacy Policy</h1>
            <p className="text-ink/50 text-sm">Effective date: 1 January 2025 — Last updated: March 2026</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl max-w-3xl space-y-5">
          {sections.map((s) => (
            <div key={s.num} className="card">
              <div className="flex items-start gap-4">
                <span className="font-mono text-2xl font-light text-sky/35 flex-shrink-0">{s.num}</span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink mb-3">{s.title}</h2>
                  <div className="text-sm text-ink/60 leading-relaxed whitespace-pre-line">{s.content}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Link href="/terms" className="text-sm text-cerulean hover:underline">
              Read our Terms of Service →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
