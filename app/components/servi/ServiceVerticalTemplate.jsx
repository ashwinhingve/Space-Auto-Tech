"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceVerticalTemplate({
  sectionLabel,
  title,
  description,
  highlight,
  heroImage,
  heroAlt,
  aboutTitle,
  bullets = [],
  cards = [],
  inquiryHref = "/components/inquiry",
  TabsComponent = null,
  projectShowcase = [],
}) {
  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-sky/25 via-cerulean/12 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-5">{sectionLabel}</div>
              <h1 className="section-heading-modern mb-5">{title}</h1>
              <p className="section-copy-muted mb-5">{description}</p>
              {highlight ? (
                <p className="text-sm sm:text-base text-ink/70 bg-cerulean/8 border border-cerulean/20 rounded-xl px-4 py-3 max-w-xl">
                  {highlight}
                </p>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={inquiryHref} className="btn-primary">
                  Inquiry
                </Link>
                <Link href="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/45 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)]">
                <Image src={heroImage} alt={heroAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
              <div className="mt-4 card">
                <h2 className="font-display text-xl font-semibold text-ink mb-3">{aboutTitle}</h2>
                <ul className="space-y-2">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink/65">
                      <svg className="w-4 h-4 mt-0.5 text-cerulean/70 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="section-label mb-6">
            <span className="section-number">01</span> Highlights
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {cards.map((card, index) => (
              <article
                key={card.title}
                className="modern-panel card-hover-lift bg-white border border-slate-200/85 rounded-2xl shadow-card overflow-hidden"
              >
                <div className="relative h-44">
                  <Image src={card.imageSrc} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/80 border border-slate-200/80 text-[10px] font-mono tracking-widest text-steel/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink mb-2 tracking-[-0.01em]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-3">{card.description}</p>
                  {Array.isArray(card.listItems) && card.listItems.length > 0 ? (
                    <ul className="space-y-1.5">
                      {card.listItems.map((item) => (
                        <li key={item} className="text-xs text-ink/55 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cerulean/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {projectShowcase.length > 0 ? (
        <section className="section bg-white">
          <div className="container-xl">
            <div className="section-label mb-6">
              <span className="section-number">02</span> End-to-End Projects
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {projectShowcase.map((item) => (
                <article key={item.title} className="modern-panel card-hover-lift relative h-72 rounded-2xl overflow-hidden ring-1 ring-slate-300/40 shadow-card group">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-mono tracking-[0.14em] uppercase text-sky/75 mb-1">{item.tag}</p>
                    <h3 className="text-white font-display text-xl">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {TabsComponent ? (
        <section className="section bg-white pt-0">
          <div className="container-xl">
            <TabsComponent />
          </div>
        </section>
      ) : null}
    </div>
  );
}
