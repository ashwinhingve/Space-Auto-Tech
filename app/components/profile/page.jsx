"use client";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";
import Image from "next/image";
import Link from 'next/link';

import ScrollReveal from '@/app/component/ScrollReveal';

const values = [
  {
    title: "Innovation",
    desc: "We continuously explore emerging technologies to deliver future-ready automation solutions.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    color: "cerulean",
  },
  {
    title: "Sustainability",
    desc: "Designs built with energy efficiency and environmental responsibility in mind.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z"/>
      </svg>
    ),
    color: "forest",
  },
  {
    title: "Precision",
    desc: "Every system we engineer is rigorously tested to meet the highest reliability standards.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round"/>
      </svg>
    ),
    color: "steel",
  },
  {
    title: "Integrity",
    desc: "Honest communication, transparent pricing, and a genuine commitment to client success.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "cerulean",
  },
];

const milestones = [
  { year: "Sep 2024", title: "Company Founded",      desc: "Space Auto Tech established in Bhopal, M.P." },
  { year: "Oct 2024", title: "First PLC Deployment", desc: "Successfully automated an agricultural irrigation system." },
  { year: "Dec 2024", title: "IoT Platform Launch",  desc: "Launched cloud-connected sensor monitoring for industrial clients." },
  { year: "2025",     title: "SCADA Division",       desc: "Dedicated SCADA development team formed for utility sector projects." },
  { year: "2026",     title: "Expanding Nationally", desc: "Growing presence across Madhya Pradesh and neighbouring states." },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+",  label: "Years of Expertise" },
  { value: "40+",  label: "Industry Partners" },
  { value: "7",    label: "Service Verticals" },
];

export default function ProfilePage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* ── Page hero ── */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky/20 via-cerulean/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-5">Company Profile</div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mb-6 text-balance">
                About <em className="not-italic text-gradient">Space Auto Tech</em>
              </h1>
              <p className="text-lg text-ink/55 leading-relaxed mb-8 max-w-lg">
                A Bhopal-based industrial automation company delivering intelligent control systems, IoT solutions, and SCADA platforms to clients across sectors.
              </p>
              <div className="flex gap-3">
                <Link href="/components/contect" className="btn-primary">Contact Us</Link>
                <Link href="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 80}>
                  <div className="card border-l-4 border-cerulean hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                    <p className="font-display text-4xl font-semibold text-cerulean mb-1 group-hover:scale-105 transition-transform duration-300 inline-block">{s.value}</p>
                    <p className="text-sm text-ink/55">{s.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-6">

            <ScrollReveal>
              <div className="bg-cerulean rounded-3xl p-10 text-white relative overflow-hidden h-full group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-sky/25 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-ink/15 to-transparent rounded-full blur-xl pointer-events-none" />
                {/* top shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/40 to-transparent" />
                <div className="relative">
                  <span className="badge bg-white/15 text-white/80 border-white/20 mb-5 block w-fit">Our Mission</span>
                  <h2 className="font-display text-3xl font-semibold mb-5">
                    Simplifying Industrial Complexity
                  </h2>
                  <p className="text-white/75 leading-relaxed text-base">
                    To revolutionize industries by leveraging automation and smart technology — delivering solutions that optimize processes, reduce costs, and promote sustainable operations for clients worldwide.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-ink rounded-3xl p-10 text-white relative overflow-hidden h-full group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cerulean/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-forest/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <span className="badge bg-sky/15 text-sky/80 border-sky/20 mb-5 block w-fit">Our Vision</span>
                  <h2 className="font-display text-3xl font-semibold mb-5">
                    A Global Leader in Automation
                  </h2>
                  <p className="text-white/65 leading-relaxed text-base">
                    To be recognized worldwide for engineering intelligent automation systems that create harmony between advanced technology and sustainable industrial practice — powering the factories, farms, and cities of tomorrow.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── About narrative ── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">01</span> Our Story
              </div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">
                Engineering Automation Since 2024
              </h2>
              <div className="space-y-4 text-ink/60 leading-relaxed">
                <p>
                  Founded in September 2024, Space Auto Tech was born from a vision to bring enterprise-grade automation to mid-market industrial clients — organisations that need sophisticated control systems without the enterprise overhead.
                </p>
                <p>
                  Our founding team brings decades of hands-on PLC programming, SCADA engineering, and IoT development experience from diverse industrial environments.
                </p>
                <p>
                  Based in Bhopal, Madhya Pradesh, we serve clients across manufacturing, agriculture, energy, railway, and smart infrastructure.
                </p>
              </div>
            </div>

            {/* Company logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-sky/20 via-cerulean/10 to-forest/10 rounded-3xl animate-float" />
                <div className="absolute inset-4 rounded-2xl overflow-hidden ring-1 ring-sky/20 bg-white flex items-center justify-center shadow-card">
                  <ImagePlaceholder src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" variant="neutral" className="w-full h-full" alt="Space Auto Tech engineering team" />
                </div>
                <div className="absolute -right-4 top-8 card-glass px-3 py-2 shadow-card">
                  <span className="text-xs font-mono font-medium text-cerulean">Est. Sep 2024</span>
                </div>
                <div className="absolute -left-4 bottom-8 card-glass px-3 py-2 shadow-card">
                  <span className="text-xs font-mono font-medium text-forest">Bhopal, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">
              <span className="section-number">02</span> Core Values
            </div>
            <h2 className="font-display text-4xl font-semibold text-ink">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card-hover group h-full">
                  <div className="w-10 h-10 rounded-xl bg-cerulean/8 flex items-center justify-center text-cerulean mb-5 group-hover:bg-cerulean group-hover:text-white transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{v.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-12">
            <div className="section-label mb-4">
              <span className="section-number">03</span> Milestones
            </div>
            <h2 className="font-display text-4xl font-semibold text-ink">Our Journey</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-cerulean via-steel/60 to-sky/20 md:left-1/2 md:-ml-px" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 100}>
                  <div className={`relative flex gap-6 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-6 h-6 md:absolute md:left-1/2 md:-ml-3 md:top-1">
                      <div className="w-5 h-5 rounded-full bg-cerulean ring-4 ring-cloud shadow-[0_0_12px_rgba(92,92,153,0.4)]" />
                    </div>

                    <div className={`md:w-[calc(50%-32px)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} pl-4 md:pl-0`}>
                      <div className="card group hover:border-cerulean/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                        <span className="badge-indigo mb-3 block w-fit">{m.year}</span>
                        <h4 className="font-semibold text-ink text-base mb-2">{m.title}</h4>
                        <p className="text-sm text-ink/55">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid SCADA Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">04</span> SCADA Expertise
          </div>
          <h2 className="section-heading-modern mb-12">Hybrid SCADA Development</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Local SCADA Expertise",
                desc: "We implement and configure on-premises SCADA systems using WinCC, Ignition, and custom Node-RED stacks — delivering reliable local control for air-gapped and private-network facilities.",
                color: "cerulean",
              },
              {
                title: "Web SCADA Development",
                desc: "Our proprietary React + Node-RED + InfluxDB + Grafana Web SCADA platform delivers real-time browser-based monitoring accessible from anywhere in the world — no client software required.",
                color: "forest",
              },
              {
                title: "Hybrid Integration",
                desc: "Many facilities need both — local HMI for operators and remote web access for management. We architect hybrid SCADA solutions that deliver both without compromising on security or reliability.",
                color: "cerulean",
              },
            ].map((card) => (
              <div key={card.title} className={`modern-panel card-hover-lift group card border-t-2 ${card.color === "forest" ? "border-forest" : "border-cerulean"}`}>
                <div className={`w-8 h-0.5 mb-4 rounded-full transition-all duration-300 group-hover:w-12 ${card.color === "forest" ? "bg-forest/40 group-hover:bg-forest" : "bg-cerulean/40 group-hover:bg-cerulean"}`} />
                <h3 className={`font-semibold text-ink text-base mb-3 group-hover:transition-colors ${card.color === "forest" ? "group-hover:text-forest" : "group-hover:text-cerulean"}`}>{card.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">
              <span className="section-number">05</span> Leadership
            </div>
            <h2 className="font-display text-4xl font-semibold text-ink">Our Founders</h2>
          </div>
          <div className="flex justify-center">
            <div className="card-hover max-w-sm w-full text-center group">
              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-20 h-20">
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-cerulean/30 group-hover:ring-cerulean/60 group-hover:shadow-[0_0_24px_rgba(14,116,144,0.35)] transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80"
                    alt="Ganesh Deshmukh"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="badge-indigo mb-3">Managing Director</span>
              <h3 className="font-display text-xl font-semibold text-ink mb-1 mt-2">Ganesh Deshmukh</h3>
              <p className="text-sm text-ink/55 leading-relaxed mt-3">
                Industrial automation veteran with expertise in PLC systems, process control, and large-scale SCADA implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-sky/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/40 to-transparent" />
        <div className="container-xl relative text-center">
          <span className="badge bg-white/15 text-white/80 border-white/20 mb-5 inline-flex">Partner with us</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-5 mt-2">
            Partner with Space Auto Tech
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Join 150+ clients who trust us to engineer automation solutions that perform, scale, and endure.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/components/contect" className="btn-white">Start a Project</Link>
            <Link href="/services" className="btn-outline-white">View Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
