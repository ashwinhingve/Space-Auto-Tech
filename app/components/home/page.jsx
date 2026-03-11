"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const stats = [
  { value: "150", suffix: "+", label: "Projects Delivered" },
  { value: "12",  suffix: "+", label: "Years Experience" },
  { value: "98",  suffix: "%", label: "Client Satisfaction" },
  { value: "40",  suffix: "+", label: "Industry Partners" },
];

const primaryServices = [
  {
    id: "plc", num: "01",
    title: "PLC Development",
    tagline: "Industrial-grade automation",
    description: "Custom PLC programs for Siemens, Allen-Bradley, Mitsubishi and more. From single-station control to full plant-wide automation.",
    href: "/services/plc",
    features: ["Ladder Logic & Structured Text", "Multi-platform Support", "Safety System Integration"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 9h2m2 0h2M7 13h1m3 0h3"/>
        <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none"/>
        <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "iot", num: "02",
    title: "IoT Development",
    tagline: "Connected ecosystems",
    description: "End-to-end IoT solutions — sensor selection, firmware development, edge computing, and cloud dashboards for real-time visibility.",
    href: "/services/iot",
    features: ["Embedded Firmware", "Edge & Cloud Processing", "Sensor & Gateway Integration"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>
        <path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17"/>
      </svg>
    ),
  },
  {
    id: "scada", num: "03",
    title: "SCADA Solutions",
    tagline: "Real-time visibility",
    description: "Robust SCADA platforms that give operators full visibility and control — built for uptime, security, and scalability.",
    href: "/services/scada",
    features: ["Custom HMI Design", "Historian & Reporting", "Remote Access & Alarms"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M7 21h10M12 17v4M6 8l3 3 3-3 3 3"/>
      </svg>
    ),
  },
];

const additionalServices = [
  { title: "Solar Energy Systems",   href: "/components/servi/2", icon: "solar" },
  { title: "Irrigation Automation",  href: "/components/servi/1", icon: "water" },
  { title: "Smart Home Automation",  href: "/components/servi/7", icon: "home"  },
  { title: "Power Sector Solutions", href: "/components/servi/3", icon: "power" },
  { title: "Railway Technology",     href: "/components/servi/5", icon: "rail"  },
  { title: "Web Development",        href: "/components/servi/6", icon: "web"   },
];

const techStack = [
  { category: "PLC Platforms",  items: ["Siemens S7", "Allen-Bradley", "Mitsubishi", "Schneider Electric"] },
  { category: "IoT Protocols",  items: ["MQTT", "Modbus TCP", "OPC-UA", "BACnet"] },
  { category: "SCADA Software", items: ["WinCC", "Ignition", "iFix", "Custom Web SCADA"] },
  { category: "Communication",  items: ["PROFIBUS", "PROFINET", "EtherNet/IP", "RS-485/232"] },
];

const carouselSlides = [
  { src: '/images/image1.jpg',  alt: 'Industrial automation' },
  { src: '/assets/solar.png',   alt: 'Solar power systems' },
  { src: '/images/image3.jpg',  alt: 'Control systems' },
  { src: '/images/image4.jpg',  alt: 'Smart infrastructure' },
];

/* Marquee tags — duplicated so the scroll looks infinite */
const techTags = [
  "PLC Programming", "SCADA", "IoT Integration", "Siemens S7",
  "Allen-Bradley", "HMI Design", "Modbus TCP", "MQTT", "OPC-UA",
  "Edge Computing", "Sensor Fusion", "Industrial Wi-Fi", "BACnet",
  "Energy Metering", "Process Automation", "Control Panels",
];

const whyUs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Industry 4.0 Ready",
    desc: "Modern protocols & smart connectivity for next-gen factories.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Custom Engineering",
    desc: "Every system tailored precisely to your process requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Remote Monitoring",
    desc: "24/7 visibility and control over all deployed systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Secure by Design",
    desc: "Hardened industrial cybersecurity at every layer.",
  },
];

/* ─── Service Icon ──────────────────────────────────────────────────────────── */
function ServiceIcon({ type, className = "w-5 h-5" }) {
  const icons = {
    solar: <path d="M12 3v1m0 16v1M3 12H2m20 0h-1m-2.05-6.95-.71.71M4.76 19.24l-.71.71M19.24 19.24l.71.71M4.76 4.76l-.71-.71M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"/>,
    water: <><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></>,
    home:  <><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></>,
    power: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>,
    rail:  <><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M8 19l4-3 4 3M12 16v3"/></>,
    web:   <><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.web}
    </svg>
  );
}

/* ─── Animated Counter ─────────────────────────────────────────────────────── */
function AnimatedCounter({ value, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const numRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !numRef.current) return;
    const target = parseInt(value, 10);
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      if (numRef.current) numRef.current.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), delay);
  }, [visible, value, suffix, delay]);

  return (
    <div
      ref={ref}
      className={`stat-card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span ref={numRef} className="stat-value">0{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef  = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setActiveSlide(i => (i + 1) % carouselSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  useGSAP(() => {
    // Hero entrance — these are inside heroRef so scope is fine
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from("#hero-label",    { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from("#hero-headline", { y: 36, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
      .from("#hero-sub",      { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from("#hero-ctas",     { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from("#hero-stats .stat-card", { y: 20, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .from("#tech-marquee",  { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

    // Use fromTo so items always end up VISIBLE (opacity 1) even if trigger misfires
    gsap.fromTo(".service-card-item",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: "#services-section", start: "top 80%" },
        clearProps: "transform,opacity",
      }
    );
    gsap.fromTo(".tech-row",
      { x: -24, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: "#tech-section", start: "top 80%" },
        clearProps: "transform,opacity",
      }
    );
    gsap.fromTo(".why-card",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: "#why-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );
    gsap.fromTo(".add-svc-card",
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.07, duration: 0.5, ease: "back.out(1.2)",
        scrollTrigger: { trigger: "#more-services", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="pt-16">

      {/* ══════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cloud">
        {/* Background geometry */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute -right-32 -top-20 w-[780px] h-[780px] rounded-full bg-gradient-to-bl from-sky/25 via-cerulean/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-steel/12 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(204,204,255,0.10),transparent)] pointer-events-none" />

        <div className="container-xl relative z-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div className="max-w-xl">
            <div id="hero-label" className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cerulean animate-pulse-ring" />
              Industrial Automation
            </div>

            <h1 id="hero-headline" className="font-display text-5xl md:text-6xl lg:text-[4.2rem] font-semibold text-ink leading-[1.1] mb-6 text-balance">
              Engineering the Future of{" "}
              <em className="not-italic text-gradient">Industrial Control</em>
            </h1>

            <p id="hero-sub" className="text-lg text-ink/60 leading-relaxed mb-8 max-w-md">
              Space Auto Tech delivers smart PLC systems, IoT connectivity, and SCADA solutions — built for reliability, precision, and scale.
            </p>

            <div id="hero-ctas" className="flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Explore Solutions
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/components/contect" className="btn-secondary">
                Talk to an Engineer
              </Link>
            </div>

            {/* Stats row */}
            <div id="hero-stats" className="mt-12 pt-8 border-t border-sky/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <AnimatedCounter key={s.label} {...s} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Carousel column */}
          <div className="relative hidden lg:block">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(41,41,102,0.18)] ring-1 ring-sky/25">
              {carouselSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === i ? "opacity-100" : "opacity-0"}`}
                >
                  <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
              ))}

              {/* Slide indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-10 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "w-1.5 bg-white/35 hover:bg-white/60"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute top-5 left-5 card-glass px-3 py-2 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forest animate-pulse-ring" />
                  <span className="text-xs font-mono font-medium text-ink">Systems Online</span>
                </div>
              </div>

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="glass-dark px-4 py-3">
                  <p className="text-xs font-mono text-sky/70 uppercase tracking-widest mb-1">Currently Showcasing</p>
                  <p className="text-sm font-medium text-white">{carouselSlides[activeSlide].alt}</p>
                </div>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="absolute -right-6 top-16 stat-pill animate-float shadow-[0_4px_24px_rgba(92,92,153,0.2)]">
              <span className="stat-pill-value">150+</span>
              <span className="stat-pill-label">Projects</span>
            </div>
            <div className="absolute -left-6 bottom-20 stat-pill animate-float shadow-[0_4px_24px_rgba(92,92,153,0.2)]" style={{animationDelay:'2s'}}>
              <span className="stat-pill-value">98%</span>
              <span className="stat-pill-label">Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/30 animate-fade-in" style={{animationDelay:'1.4s'}}>
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-6 animate-bounce" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7"/>
            <path d="M8 5v5" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TECH MARQUEE STRIP
      ══════════════════════════════════════════════════ */}
      <div id="tech-marquee" className="bg-white/80 border-y border-sky/15 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...techTags, ...techTags].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-4 text-xs font-mono text-ink/50 whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-cerulean/40 flex-shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          PRIMARY SERVICES
      ══════════════════════════════════════════════════ */}
      <section id="services-section" className="section bg-white">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-4">
                <span className="section-number">01</span> Core Solutions
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
                Our Primary Services
              </h2>
            </div>
            <p className="text-ink/55 text-base max-w-sm md:text-right">
              Industrial automation solutions engineered for reliability and long-term performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {primaryServices.map((svc) => (
              <div
                key={svc.id}
                className="service-card-item group flex flex-col bg-white rounded-2xl border border-sky/20 shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-cerulean/30"
              >
                {/* Gradient top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-cerulean via-steel to-sky opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-wrap bg-cerulean/8 text-cerulean group-hover:bg-cerulean group-hover:text-white transition-all duration-300">
                      {svc.icon}
                    </div>
                    <span className="font-mono text-3xl font-light text-sky/30 group-hover:text-cerulean/30 transition-colors duration-300">{svc.num}</span>
                  </div>

                  <span className="badge-indigo mb-3">{svc.tagline}</span>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-3 group-hover:text-cerulean transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed mb-6 flex-grow">{svc.description}</p>

                  <ul className="space-y-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-ink/65">
                        <svg className="w-4 h-4 text-cerulean/70 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={svc.href}
                    className="mt-auto flex items-center gap-2 text-sm font-medium text-cerulean group-hover:gap-3 transition-all duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════════════ */}
      <section id="why-section" className="section bg-cloud overflow-hidden">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="section-label mb-6">
                <span className="section-number">02</span> About Us
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6 text-balance">
                Why Space Auto Tech?
              </h2>
              <p className="text-ink/60 leading-relaxed mb-5">
                Space Auto Tech stands at the forefront of industrial and digital automation, delivering intelligent systems that transcend conventional boundaries. We combine engineering precision with cutting-edge technology.
              </p>
              <p className="text-ink/60 leading-relaxed mb-8">
                Our mission is to simplify complexity, enhance operational efficiency, and drive sustainable growth through intelligent automation — helping businesses thrive in the age of Industry 4.0.
              </p>

              {/* Why cards */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {whyUs.map((item) => (
                  <div key={item.title} className="why-card flex gap-3 items-start p-4 rounded-xl bg-white border border-sky/15 hover:border-cerulean/30 hover:shadow-card transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-lg bg-cerulean/8 flex items-center justify-center text-cerulean group-hover:bg-cerulean group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-ink/50 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href="/components/profile" className="btn-primary">Company Profile</Link>
                <Link href="/components/contect" className="btn-secondary">Contact Us</Link>
              </div>
            </div>

            {/* Right: quote card */}
            <div className="space-y-4">
              <div className="bg-ink rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cerulean/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-sky/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <svg className="w-8 h-8 text-sky/30 mb-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.3 7.3c-2.7 1.2-4.5 3.9-4.5 6.7 0 2.1 1.2 3.5 2.8 3.5 1.4 0 2.4-1.1 2.4-2.6 0-1.3-.9-2.4-2.2-2.4-.3 0-.5 0-.7.1.4-1.9 1.8-3.4 3.4-4.1l-.2-1.2zm6.2 0c-2.7 1.2-4.5 3.9-4.5 6.7 0 2.1 1.2 3.5 2.8 3.5 1.4 0 2.4-1.1 2.4-2.6 0-1.3-.9-2.4-2.2-2.4-.3 0-.5 0-.7.1.4-1.9 1.8-3.4 3.4-4.1l-.2-1.2z"/>
                  </svg>
                  <p className="text-base text-white/80 leading-relaxed mb-7">
                    Space Auto Tech is a pioneering force in industrial and digital automation. We design and implement advanced solutions that optimize processes, enhance productivity, and reduce operational costs across manufacturing, agriculture, energy, and smart infrastructure sectors.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cerulean to-sky flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-sm font-semibold text-white">GD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Ganesh Deshmukh</p>
                      <p className="text-sky/70 text-xs font-mono tracking-wide">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card border-l-4 border-cerulean">
                  <p className="font-mono text-xs text-cerulean/60 uppercase tracking-widest mb-1">Established</p>
                  <p className="font-display text-2xl font-semibold text-ink">2024</p>
                  <p className="text-xs text-ink/45 mt-1">Bhopal, Madhya Pradesh</p>
                </div>
                <div className="card border-l-4 border-forest">
                  <p className="font-mono text-xs text-forest/60 uppercase tracking-widest mb-1">Focus</p>
                  <p className="font-display text-2xl font-semibold text-ink">Industry</p>
                  <p className="text-xs text-ink/45 mt-1">4.0 & IoT Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MORE SERVICES GRID
      ══════════════════════════════════════════════════ */}
      <section id="more-services" className="section bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">
              <span className="section-number">03</span> More Solutions
            </div>
            <h2 className="font-display text-4xl font-semibold text-ink">Complete Service Portfolio</h2>
            <p className="text-ink/50 mt-3 max-w-md mx-auto text-sm">Across six key verticals, we engineer automation that works reliably in the real world.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="add-svc-card group card-outlined flex flex-col items-center gap-3 py-7 text-center"
              >
                <div className="icon-wrap-primary group-hover:bg-cerulean group-hover:text-white transition-all duration-300">
                  <ServiceIcon type={svc.icon} />
                </div>
                <span className="text-sm font-medium text-ink/70 group-hover:text-cerulean transition-colors leading-tight">{svc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TECHNOLOGY STACK
      ══════════════════════════════════════════════════ */}
      <section id="tech-section" className="section bg-cloud">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">04</span> Technology
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-5">
                Platforms We Master
              </h2>
              <p className="text-ink/55 leading-relaxed mb-8 max-w-md">
                We work across the full spectrum of industrial automation technology — from field devices to cloud dashboards.
              </p>
              <Link href="/services" className="btn-primary">
                View All Services
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {techStack.map((row) => (
                <div key={row.category} className="tech-row card flex flex-col sm:flex-row sm:items-center gap-4 hover:border-cerulean/30 transition-colors duration-200">
                  <div className="sm:w-36 flex-shrink-0">
                    <p className="text-[10px] font-mono font-semibold text-sky/55 tracking-widest uppercase mb-1">{row.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span key={item} className="tag-light text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cerulean">
        {/* layered BG */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-gradient-to-tr from-ink/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        {/* top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/50 to-transparent" />

        <div className="container-xl relative py-24 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white max-w-xl">
            <span className="badge bg-white/15 text-white/80 border-white/20 mb-5 block w-fit">Ready to automate?</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-balance leading-[1.1]">
              Let&apos;s engineer your next industrial breakthrough.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Our engineers analyse your process and design systems that deliver real, measurable results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/components/contect" className="btn-white">
              Start a Project
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/components/profile" className="btn-outline-white">
              About Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
