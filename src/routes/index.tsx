import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState, type MouseEvent } from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_LABELS,
  isLocale,
  t as translate,
  type Locale,
} from "../lib/i18n";
import { detectLocale, setLocale as persistLocale } from "../lib/i18n.functions";

export const Route = createFileRoute("/")({
  loader: async () => ({ locale: await detectLocale() }),
  head: () => ({
    meta: [
      { title: "Include Tech — AI, Data & Product, from design to delivery" },
      { name: "description", content: "AI, generative AI, data and digital product studio. End-to-end development, from design to delivery." },
      { property: "og:title", content: "Include Tech — AI, Data & Product" },
      { property: "og:description", content: "From design to delivery: generative AI, agents, data and digital product with real impact." },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Include Tech">
      <span className="font-sans font-extrabold leading-[0.95] text-[1rem]" style={{ color: "var(--violet)" }}>
        Include<br />Tech
      </span>
      <span
        className="inline-flex items-center justify-center rounded-[6px] font-sans font-extrabold text-[0.85rem] w-8 h-8"
        style={{ background: "var(--violet)", color: "#ffffff" }}
      >
        IT
      </span>
    </span>
  );
}

function Index() {
  const { locale: initialLocale } = Route.useLoaderData();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const persistLocaleFn = useServerFn(persistLocale);

  // Sync with localStorage on the client so the picker remembers across reloads
  // even before the cookie round-trips.
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("include_locale") : null;
    if (stored && isLocale(stored) && stored !== locale) {
      setLocaleState(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPickLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") window.localStorage.setItem("include_locale", next);
    void persistLocaleFn({ data: { locale: next } });
  };

  const tr = translate(locale);

  const whatsappUrl =
    "https://web.whatsapp.com/send?phone=5567992066021&text=" +
    encodeURIComponent(tr.whatsapp.text);

  const handleWhatsAppClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#top"><Logo /></a>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{tr.nav.about}</a></li>
            <li><a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{tr.nav.services}</a></li>
            <li><a href="#produtos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{tr.nav.products}</a></li>
            <li>
              <LocalePicker value={locale} onChange={onPickLocale} label={tr.languagePicker} />
            </li>
            <li>
              <a href="#contato" className="text-sm font-medium px-4 py-2 rounded-full text-primary-foreground"
                 style={{ background: "var(--violet)" }}>
                {tr.nav.cta}
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <LocalePicker value={locale} onChange={onPickLocale} label={tr.languagePicker} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-40">
        <div className="absolute inset-0 grad-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full grad-a opacity-25 blur-3xl float-slow" />
        <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full grad-b opacity-25 blur-3xl float-slower" />

        <div className="relative max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rise font-mono-ui text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-border bg-card/70">
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "var(--violet)" }} />
            {tr.hero.badge}
          </div>

          <h1 className="font-serif-display rise mt-6 text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] text-balance max-w-[16ch]">
            {tr.hero.headlinePre}<em className="italic" style={{ color: "var(--violet)" }}>{tr.hero.headlineEmphasis1}</em>{tr.hero.headlineMid}<em className="italic" style={{ color: "var(--coral)" }}>{tr.hero.headlineEmphasis2}</em>{tr.hero.headlinePost}
          </h1>

          <p className="rise mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {tr.hero.lead.yearsLabel}<strong className="text-foreground font-medium">{tr.hero.lead.years}</strong>{tr.hero.lead.rest}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3">
            <a href="#servicos" className="px-6 py-3 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5"
               style={{ background: "var(--violet)" }}>
              {tr.hero.ctaPrimary}
            </a>
            <a href="#contato" className="px-6 py-3 rounded-full font-medium text-sm border border-border bg-card/60 backdrop-blur hover:border-foreground/40 transition-colors">
              {tr.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 overflow-hidden py-4">
        <div className="marquee gap-12 whitespace-nowrap">
          {[...tr.marquee, ...tr.marquee].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--violet)" }} />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mt-12">
        {tr.stats.map(([n, l]) => (
          <div key={l} className="bg-background p-8 text-center">
            <div className="font-serif-display text-5xl md:text-6xl" style={{ color: "var(--violet)" }}>{n}</div>
            <div className="mt-2 text-xs text-muted-foreground font-mono-ui uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
        <SectionLabel>{tr.about.label}</SectionLabel>
        <SectionTitle>
          {tr.about.titlePre}<em className="italic" style={{ color: "var(--violet)" }}>{tr.about.titleEm}</em>{tr.about.titlePost}
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-14">
          <div className="space-y-5 text-muted-foreground leading-[1.85]">
            <p>{tr.about.p1}</p>
            <p>{tr.about.p2}</p>
            <p>{tr.about.p3}</p>
          </div>
          <div className="relative rounded-3xl border border-border bg-card p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full grad-a opacity-30 blur-2xl float-slow" />
            <div className="relative">
              <div className="font-serif-display text-3xl">{tr.about.cardName}</div>
              <div className="mt-1 font-mono-ui text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--violet)" }}>
                {tr.about.cardTag}
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-[1.8]">{tr.about.cardText}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {tr.about.cardChips.map((chip) => (
                  <span key={chip} className="text-xs px-3 py-1 rounded-full border border-border bg-background/60"
                        style={{ color: "var(--violet)" }}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative border-y border-border" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
          <SectionLabel>{tr.services.label}</SectionLabel>
          <SectionTitle>
            {tr.services.titlePre}<em className="italic" style={{ color: "var(--violet)" }}>{tr.services.titleEm1}</em>{tr.services.titleMid}<em className="italic" style={{ color: "var(--coral)" }}>{tr.services.titleEm2}</em>{tr.services.titlePost}
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {tr.services.items.map((s) => (
              <article key={s.k} className="group relative p-7 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all hover:-translate-y-1">
                <div className="font-mono-ui text-xs text-muted-foreground">{s.k}</div>
                <h3 className="font-serif-display text-2xl mt-3">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.75]">{s.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <SectionLabel>{tr.services.sectorsLabel}</SectionLabel>
            <SectionTitle>{tr.services.sectorsTitlePre}<em className="italic" style={{ color: "var(--violet)" }}>{tr.services.sectorsTitleEm}</em>{tr.services.sectorsTitlePost}</SectionTitle>
            <div className="grid md:grid-cols-2 mt-10 rounded-2xl border border-border overflow-hidden bg-card">
              {tr.services.sectors.map((e, i) => (
                <div key={e.n} className={`p-8 ${i % 2 === 0 ? "md:border-r border-border" : ""} ${i < tr.services.sectors.length - 2 ? "border-b border-border" : ""}`}>
                  <div className="font-serif-display text-sm" style={{ color: "var(--violet)" }}>{e.n}</div>
                  <div className="font-serif-display text-2xl mt-2">{e.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-[1.75]">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
        <SectionLabel>{tr.products.label}</SectionLabel>
        <SectionTitle>
          <em className="italic" style={{ color: "var(--violet)" }}>{tr.products.titleEm}</em>{tr.products.titlePost}
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {tr.products.items.map((p) => (
            <article key={p.name} className="relative rounded-3xl overflow-hidden border border-border bg-card group">
              <div className={`relative h-48 ${p.grad}`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay grid-bg" />
                <div className="absolute bottom-4 left-5 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-white/90 px-2 py-1 rounded-full bg-black/20 backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif-display text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.75]">{p.desc}</p>
                <a href="#contato" className="inline-flex items-center gap-1 mt-5 text-sm font-medium group-hover:gap-3 transition-all"
                   style={{ color: "var(--violet)" }}>
                  {tr.products.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 grad-hero opacity-70 pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-28 text-center">
          <SectionLabel center>{tr.contact.label}</SectionLabel>
          <h2 className="font-serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-balance mt-4">
            {tr.contact.titlePre}<em className="italic" style={{ color: "var(--violet)" }}>{tr.contact.titleEm}</em>{tr.contact.titlePost}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">{tr.contact.lead}</p>

          <a href="mailto:giselialmeida@outlook.com"
             className="inline-block mt-10 px-8 py-4 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5"
             style={{ background: "var(--violet)" }}>
            {tr.contact.cta}
          </a>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-lg backdrop-blur-md bg-[#25D366]/90 text-white hover:bg-[#25D366] transition-all hover:scale-105 animate-fade-in"
        aria-label={tr.whatsapp.label}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-sm font-medium">{tr.whatsapp.label}</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-10 grid gap-6 md:grid-cols-3 md:items-center">
          <div className="flex flex-col gap-2">
            <Logo className="text-lg" />
            <p className="text-xs text-muted-foreground">{tr.footer.city}</p>
            <a href={whatsappUrl} onClick={handleWhatsAppClick} className="text-xs text-muted-foreground hover:text-foreground">
              (67) 99206-6021
            </a>
          </div>
          <ul className="flex gap-4 md:justify-center">
            <li>
              <a href="https://www.instagram.com/include.tech?igsh=cDhzODF4czM3cnYw&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/14f3mvebebg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/giselialmeidadearaujo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground md:text-right">{tr.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function LocalePicker({
  value,
  onChange,
  label,
}: {
  value: Locale;
  onChange: (next: Locale) => void;
  label: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      <span className="sr-only">{label}</span>
      <span aria-hidden className="text-base leading-none">{LOCALE_LABELS[value].flag}</span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => {
          const next = e.target.value;
          if (isLocale(next)) onChange(next);
        }}
        className="bg-transparent border border-border rounded-full pl-2 pr-6 py-1.5 text-xs hover:border-foreground/40 transition-colors focus:outline-none focus:border-foreground/60 cursor-pointer"
      >
        {LOCALES.map((loc) => (
          <option key={loc} value={loc} className="bg-background text-foreground">
            {LOCALE_LABELS[loc].flag} {LOCALE_LABELS[loc].label}
          </option>
        ))}
      </select>
    </label>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`font-mono-ui text-[11px] uppercase tracking-[0.22em] ${center ? "text-center" : ""}`}
         style={{ color: "var(--violet)" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-balance max-w-[18ch]">
      {children}
    </h2>
  );
}
