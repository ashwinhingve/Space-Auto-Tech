"use client";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";
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
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=640&q=80",
    imageAlt: "PLC engineering team building automation controls",
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80",
    imageAlt: "IoT devices connected with cloud dashboards",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
    imageAlt: "SCADA control room with monitoring displays",
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
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80', alt: 'Industrial automation control systems' },
  { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80', alt: 'Solar power systems' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80', alt: 'Industrial robot arm automation' },
  { src: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=80', alt: 'Smart manufacturing infrastructure' },
];

const heroVisualCards = [
  {
    title: "Live Process Monitoring",
    subtitle: "SCADA + Analytics",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    alt: "Operator monitoring industrial process analytics",
  },
  {
    title: "Connected Energy Assets",
    subtitle: "Solar + IoT Control",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
    alt: "Solar assets connected with automation network",
  },
];

const impactShowcase = [
  {
    title: "Smart Manufacturing Cells",
    metric: "27% Faster Throughput",
    tag: "Manufacturing",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    alt: "Smart manufacturing cell automation",
  },
  {
    title: "Agriculture Control Systems",
    metric: "35% Water Savings",
    tag: "AgriTech",
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
    alt: "Automated irrigation control deployment",
  },
  {
    title: "Solar Farm Monitoring",
    metric: "99.5% Uptime Tracking",
    tag: "Energy",
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
    alt: "Solar farm dashboards and telemetry",
  },
  {
    title: "Railway Systems Reliability",
    metric: "24/7 Remote Diagnostics",
    tag: "Transport",
    src: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=600&q=80",
    alt: "Railway automation and monitoring systems",
  },
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
    // ── Hero entrance ────────────────────────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from("#hero-label",    { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from("#hero-headline", { y: 44, opacity: 0, duration: 1.0, ease: "power3.out" }, "-=0.3")
      .from("#hero-sub",      { y: 22, opacity: 0, duration: 0.75, ease: "power3.out" }, "-=0.55")
      .from("#hero-ctas",     { y: 18, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.45")
      .from("#hero-stats .stat-card", { y: 22, opacity: 0, stagger: 0.12, duration: 0.65, ease: "power3.out" }, "-=0.35")
      .from(".hero-vis-card", { y: 24, opacity: 0, stagger: 0.1, duration: 0.55, ease: "power2.out" }, "-=0.3")
      .from("#tech-marquee",  { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

    // ── Hero blob parallax ───────────────────────────────────────────────────
    gsap.to(".hero-blob-r", {
      y: -120, x: 20, ease: "none",
      scrollTrigger: { trigger: "#hero-section", start: "top top", end: "+=800", scrub: 1.5 },
    });
    gsap.to(".hero-blob-l", {
      y: -70, ease: "none",
      scrollTrigger: { trigger: "#hero-section", start: "top top", end: "+=800", scrub: 1.5 },
    });

    // ── Section intros ───────────────────────────────────────────────────────
    ["#services-section", "#impact-section", "#why-section", "#more-services"].forEach((sectionId) => {
      gsap.fromTo(`${sectionId} .section-intro`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: sectionId, start: "top 85%" },
          clearProps: "transform,opacity",
        }
      );
    });

    // ── Service cards ────────────────────────────────────────────────────────
    gsap.fromTo(".service-card-item",
      { y: 44, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.75, ease: "power2.out",
        scrollTrigger: { trigger: "#services-section", start: "top 80%" },
        clearProps: "transform,opacity",
      }
    );

    // ── Impact gallery ───────────────────────────────────────────────────────
    gsap.fromTo(".impact-card",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.11, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: "#impact-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );
    // Subtle parallax on images inside impact cards
    gsap.to(".impact-img", {
      yPercent: -10, ease: "none",
      scrollTrigger: { trigger: "#impact-section", start: "top bottom", end: "bottom top", scrub: true },
    });

    // ── Why Us / About ───────────────────────────────────────────────────────
    gsap.fromTo(".why-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: "#why-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );
    gsap.fromTo(".about-visual",
      { y: 22, scale: 0.97, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: "#why-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );

    // ── More services grid ───────────────────────────────────────────────────
    gsap.fromTo(".add-svc-card",
      { scale: 0.90, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.07, duration: 0.5, ease: "back.out(1.4)",
        scrollTrigger: { trigger: "#more-services", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );

    // ── Tech stack ───────────────────────────────────────────────────────────
    gsap.fromTo(".tech-row",
      { x: -28, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: "#tech-section", start: "top 80%" },
        clearProps: "transform,opacity",
      }
    );

    // ── Company Profile overview ─────────────────────────────────────────────
    gsap.fromTo(".profile-stat",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.09, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: ".profile-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );
    gsap.fromTo(".profile-text",
      { x: 32, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.75, ease: "power2.out",
        scrollTrigger: { trigger: ".profile-section", start: "top 82%" },
        clearProps: "transform,opacity",
      }
    );

    // ── CTA banner ───────────────────────────────────────────────────────────
    gsap.timeline({ scrollTrigger: { trigger: ".cta-section", start: "top 82%" } })
      .fromTo(".cta-badge",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", clearProps: "transform,opacity" }
      )
      .fromTo(".cta-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", clearProps: "transform,opacity" },
        "-=0.05"
      )
      .fromTo(".cta-body",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power2.out", clearProps: "transform,opacity" },
        "-=0.45"
      )
      .fromTo(".cta-btns",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", clearProps: "transform,opacity" },
        "-=0.35"
      );
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="pt-16">

      {/* ══════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section id="hero-section" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cloud">
        {/* Background geometry */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="hero-blob-r absolute -right-32 -top-20 w-[780px] h-[780px] rounded-full bg-gradient-to-bl from-sky/25 via-cerulean/10 to-transparent blur-3xl pointer-events-none" />
        <div className="hero-blob-l absolute -left-24 bottom-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-steel/12 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(14,116,144,0.08),transparent)] pointer-events-none" />

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
          <div className="relative">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-300/40">
              {carouselSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === i ? "opacity-100" : "opacity-0"}`}
                >
                  <div className={`w-full h-full ${activeSlide === i ? "animate-kenburns" : ""}`}>
                    <ImagePlaceholder src={slide.src} variant="primary" className="w-full h-full" alt={slide.alt} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
              ))}

              {/* Slide indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-10 bg-white shadow-[0_0_8px_rgba(15,23,42,0.3)]" : "w-1.5 bg-white/45 hover:bg-white/70"}`}
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

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {heroVisualCards.map((card) => (
                <div key={card.title} className="hero-vis-card relative h-36 sm:h-40 rounded-2xl overflow-hidden ring-1 ring-sky/20 shadow-card">
                  <ImagePlaceholder src={card.src} variant="primary" className="w-full h-full" alt={card.alt} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] font-mono tracking-[0.16em] uppercase text-sky/80 mb-1">{card.subtitle}</p>
                    <p className="text-sm font-semibold text-white leading-tight">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-indigo">Data-driven deployments</span>
              <span className="badge-sky">Real-world reliability</span>
              <span className="badge-violet">Fast commissioning</span>
            </div>

            {/* Floating stat pill */}
            <div className="absolute -right-6 top-16 stat-pill animate-float shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] hidden lg:flex">
              <span className="stat-pill-value">150+</span>
              <span className="stat-pill-label">Projects</span>
            </div>
            <div className="absolute -left-6 bottom-20 stat-pill animate-float shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] hidden lg:flex" style={{animationDelay:'2s'}}>
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
          <div className="section-intro flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-4">
                <span className="section-number">01</span> Core Solutions
              </div>
              <h2 className="section-heading-modern">
                Our Primary Services
              </h2>
            </div>
            <p className="section-copy-muted max-w-md md:text-right">
              Industrial automation solutions engineered for reliability and long-term performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {primaryServices.map((svc) => (
              <div
                key={svc.id}
                className="service-card-item modern-panel card-hover-lift group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-card overflow-hidden hover:shadow-card-hover hover:border-cerulean/35"
              >
                {/* Gradient top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-cerulean via-steel to-sky opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 z-20 px-2 py-1 rounded-md bg-white/80 backdrop-blur text-[10px] font-mono tracking-widest text-steel/80 border border-slate-200/80">
                  {svc.num}
                </div>

                <div className="relative h-44 overflow-hidden">
                  <ImagePlaceholder src={svc.image} variant="primary" className="w-full h-full" alt={svc.imageAlt} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent" />
                </div>

                <div className="relative z-10 p-6 lg:p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-wrap bg-cerulean/10 text-cerulean group-hover:bg-cerulean group-hover:text-white group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300">
                      {svc.icon}
                    </div>
                    <span className="font-mono text-3xl font-light text-sky/35 group-hover:text-cerulean/35 transition-colors duration-300">{svc.num}</span>
                  </div>

                  <span className="badge-indigo mb-3">{svc.tagline}</span>
                  <h3 className="font-display text-2xl tracking-[-0.01em] font-semibold text-ink mb-3 group-hover:text-cerulean transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-6 flex-grow">{svc.description}</p>

                  <ul className="space-y-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[0.92rem] text-ink/70">
                        <svg className="w-4 h-4 text-cerulean/70 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={svc.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cerulean group-hover:text-ink transition-all duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
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
          IMPACT GALLERY
      ══════════════════════════════════════════════════ */}
      <section id="impact-section" className="section bg-cloud">
        <div className="container-xl">
          <div className="section-intro flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label mb-4">
                <span className="section-number">02</span> Industry Impact
              </div>
              <h2 className="section-heading-modern">
                Visual Highlights from Deployments
              </h2>
            </div>
            <p className="section-copy-muted max-w-md">
              From manufacturing to solar and railway systems, our field deployments are engineered for measurable performance outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {impactShowcase.map((item) => (
              <article key={item.title} className="impact-card modern-panel card-hover-lift relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/35 shadow-card group hover:shadow-card-hover">
                <div className="impact-img absolute inset-[-12%] w-[124%] h-[124%]">
                  <ImagePlaceholder src={item.src} variant="primary" className="w-full h-full" alt={item.alt} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cerulean/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:translate-y-0.5">
                  <span className="badge-sky">{item.tag}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 transition-all duration-300 group-hover:translate-y-[-2px]">
                  <p className="text-[11px] font-mono tracking-[0.14em] uppercase text-sky/80 mb-2">{item.metric}</p>
                  <h3 className="font-display text-2xl text-white leading-tight">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════════════ */}
      <section id="why-section" className="section bg-cloud overflow-hidden">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            {/* Left text */}
            <div className="section-intro">
              <div className="section-label mb-6">
                <span className="section-number">03</span> About Us
              </div>
              <h2 className="section-heading-modern mb-6 text-balance">
                Why Space Auto Tech?
              </h2>
              <p className="section-copy-muted mb-5">
                Space Auto Tech stands at the forefront of industrial and digital automation, delivering intelligent systems that transcend conventional boundaries. We combine engineering precision with cutting-edge technology.
              </p>
              <p className="section-copy-muted mb-8">
                Our mission is to simplify complexity, enhance operational efficiency, and drive sustainable growth through intelligent automation — helping businesses thrive in the age of Industry 4.0.
              </p>

              {/* Why cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {whyUs.map((item) => (
                  <div key={item.title} className="why-card modern-panel card-hover-lift flex gap-3 items-start p-4 rounded-xl bg-white border border-slate-200/80 hover:border-cerulean/35 hover:shadow-card transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-lg bg-cerulean/10 flex items-center justify-center text-cerulean group-hover:bg-cerulean group-hover:text-white group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-[-0.01em] text-ink">{item.title}</p>
                      <p className="text-xs sm:text-[0.8rem] text-ink/55 mt-0.5 leading-relaxed">{item.desc}</p>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="about-visual relative col-span-2 h-52 rounded-3xl overflow-hidden ring-1 ring-sky/20 shadow-card">
                  <ImagePlaceholder src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80" variant="primary" className="w-full h-full" alt="Automation team collaborating on industrial solutions" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-mono tracking-[0.16em] uppercase text-sky/80 mb-1">Engineering Culture</p>
                    <p className="text-base font-semibold text-white">Built by field-tested automation specialists</p>
                  </div>
                </div>
                <div className="about-visual relative h-36 rounded-2xl overflow-hidden ring-1 ring-sky/20 shadow-card">
                  <ImagePlaceholder src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" variant="primary" className="w-full h-full" alt="Long-term vision for intelligent industrial ecosystems" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold text-white">Vision-led design</p>
                </div>
                <div className="about-visual relative h-36 rounded-2xl overflow-hidden ring-1 ring-sky/20 shadow-card">
                  <ImagePlaceholder src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" variant="primary" className="w-full h-full" alt="Mission driven deployment planning and execution" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold text-white">Execution focused</p>
                </div>
              </div>

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
          <div className="section-intro text-center mb-12">
            <div className="section-label mx-auto mb-4">
              <span className="section-number">04</span> More Solutions
            </div>
            <h2 className="section-heading-modern">Complete Service Portfolio</h2>
            <p className="section-copy-muted mt-3 max-w-md mx-auto">Across six key verticals, we engineer automation that works reliably in the real world.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {additionalServices.map((svc, idx) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="add-svc-card modern-panel card-hover-lift group relative bg-white border border-slate-200/85 rounded-2xl px-4 py-7 text-center shadow-card hover:shadow-card-hover hover:border-cerulean/35"
              >
                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase text-steel/65">0{idx + 1}</span>
                <div className="icon-wrap-primary mx-auto group-hover:bg-cerulean group-hover:text-white group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300">
                  <ServiceIcon type={svc.icon} />
                </div>
                <span className="text-sm font-semibold text-ink/75 group-hover:text-cerulean transition-colors leading-tight">{svc.title}</span>
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
                <span className="section-number">05</span> Technology
              </div>
              <h2 className="section-heading-modern mb-5">
                Platforms We Master
              </h2>
              <p className="section-copy-muted mb-8 max-w-md">
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
                <div key={row.category} className="tech-row modern-panel card-hover-lift group relative bg-white rounded-2xl border border-slate-200/85 shadow-card px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-cerulean/35 hover:shadow-card-hover">
                  <div className="sm:w-40 flex-shrink-0">
                    <p className="text-[10px] font-mono font-semibold text-steel/70 tracking-widest uppercase mb-1">{row.category}</p>
                    <p className="text-xs text-ink/45">Core stack</p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {row.items.map((item) => (
                      <span key={item} className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-ink/70 border border-slate-200/70">{item}</span>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-ink/5 text-ink/55 group-hover:bg-cerulean group-hover:text-white transition-all duration-300">
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Overview */}
      <section className="profile-section section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-5">Company Profile</div>
              <h2 className="section-heading-modern mb-6">Engineering Since 2024</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "Sep 2024", label: "Founded" },
                  { value: "Bhopal", label: "Headquarters" },
                  { value: "150+", label: "Projects Delivered" },
                  { value: "7", label: "Service Verticals" },
                ].map((stat) => (
                  <div key={stat.label} className="profile-stat card text-center">
                    <p className="font-display text-2xl font-semibold text-cerulean mb-1">{stat.value}</p>
                    <p className="text-xs text-ink/50 font-mono uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/components/profile" className="btn-primary">
                Read Full Profile
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="profile-text">
              <p className="text-lg text-ink/60 leading-relaxed mb-4">
                Space Auto Tech was founded in Bhopal, Madhya Pradesh with a mission to bring Industry 4.0 automation capabilities to businesses of all sizes across India.
              </p>
              <p className="text-ink/55 leading-relaxed mb-4">
                Starting with PLC programming and SCADA deployments, we have rapidly expanded into IoT development, solar installations, panel manufacturing, PCB design, and proprietary web platforms.
              </p>
              <p className="text-ink/55 leading-relaxed">
                Our team combines decades of field engineering experience with modern software development — delivering automation solutions that are reliable, maintainable, and built for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="cta-section relative overflow-hidden bg-cerulean">
        {/* layered BG */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-gradient-to-tr from-ink/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        {/* top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/50 to-transparent" />

        <div className="container-xl relative py-24 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white max-w-xl">
            <span className="cta-badge badge bg-white/15 text-white/80 border-white/20 mb-5 block w-fit">Ready to automate?</span>
            <h2 className="cta-heading font-display text-4xl md:text-5xl font-semibold mb-4 text-balance leading-[1.1]">
              Let&apos;s engineer your next industrial breakthrough.
            </h2>
            <p className="cta-body text-white/70 text-lg leading-relaxed">
              Our engineers analyse your process and design systems that deliver real, measurable results.
            </p>
          </div>
          <div className="cta-btns flex flex-col sm:flex-row gap-3 flex-shrink-0">
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
