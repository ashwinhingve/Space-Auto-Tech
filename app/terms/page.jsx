"use client";
import Link from "next/link";

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    content: `By accessing or using the Space Auto Tech website (spaceautotech.com) or any of its subdomains, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. These terms apply to all visitors, users, and customers.`,
  },
  {
    num: "02",
    title: "Services Description",
    content: `Space Auto Tech provides industrial automation engineering services including PLC programming, IoT development, SCADA solutions, electrical panel manufacturing, solar installations, and related engineering consultancy. Specific terms of engagement for each project are governed by individual project agreements or purchase orders signed between the parties.`,
  },
  {
    num: "03",
    title: "Intellectual Property",
    content: `All content on this website — including text, graphics, logos, and code — is the property of Space Auto Tech and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.\n\nCustom software and systems developed under a project agreement remain the property of Space Auto Tech until full payment is received, after which ownership transfers to the client as specified in the project agreement.`,
  },
  {
    num: "04",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, Space Auto Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim. This website is provided on an "as is" basis without warranties of any kind.`,
  },
  {
    num: "05",
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless Space Auto Tech, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, your violation of these terms, or your violation of any third-party rights.`,
  },
  {
    num: "06",
    title: "User Conduct",
    content: `You agree not to use our website or services to: transmit unlawful, harmful, or offensive content; attempt to gain unauthorised access to our systems; disrupt or interfere with website functionality; collect user data without consent; or engage in any activity that violates applicable laws or regulations.`,
  },
  {
    num: "07",
    title: "Governing Law & Jurisdiction",
    content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Madhya Pradesh, India.`,
  },
  {
    num: "08",
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page. Your continued use of our website following the posting of changes constitutes acceptance of those changes.`,
  },
  {
    num: "09",
    title: "Contact",
    content: `For questions about these Terms of Service, contact us at:\n\nSpace Auto Tech\nDeshmukh Farm House, Saikheda Athner Road, Gaula, Multai, Madhya Pradesh 460057\nEmail: spaceautomation29@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-16 bg-cloud min-h-screen">

      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Legal</div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-4">Terms of Service</h1>
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
            <Link href="/privacy-policy" className="text-sm text-cerulean hover:underline">
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
