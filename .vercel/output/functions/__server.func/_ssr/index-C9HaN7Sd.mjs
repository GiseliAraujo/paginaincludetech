import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { i as isLocale, t, b as LOCALE_LABELS, L as LOCALES } from "./i18n-CqjV_u4K.mjs";
import { R as Route, s as setLocale } from "./router-BPwpHoBv.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-B-ItVJuf.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
function Logo({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-2 ${className}`, "aria-label": "Include Tech", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sans font-extrabold leading-[0.95] text-[1rem]", style: {
      color: "var(--violet)"
    }, children: [
      "Include",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Tech"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-[6px] font-sans font-extrabold text-[0.85rem] w-8 h-8", style: {
      background: "var(--violet)",
      color: "#ffffff"
    }, children: "IT" })
  ] });
}
function Index() {
  const {
    locale: initialLocale
  } = Route.useLoaderData();
  const [locale, setLocaleState] = reactExports.useState(initialLocale);
  const persistLocaleFn = useServerFn(setLocale);
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("include_locale") : null;
    if (stored && isLocale(stored) && stored !== locale) {
      setLocaleState(stored);
    }
  }, []);
  const onPickLocale = (next) => {
    setLocaleState(next);
    if (typeof window !== "undefined") window.localStorage.setItem("include_locale", next);
    void persistLocaleFn({
      data: {
        locale: next
      }
    });
  };
  const tr = t(locale);
  const whatsappUrl = "https://web.whatsapp.com/send?phone=5567992066021&text=" + encodeURIComponent(tr.whatsapp.text);
  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1240px] mx-auto flex items-center justify-between px-6 md:px-10 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: tr.nav.about }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: tr.nav.services }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#produtos", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: tr.nav.products }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalePicker, { value: locale, onChange: onPickLocale, label: tr.languagePicker }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "text-sm font-medium px-4 py-2 rounded-full text-primary-foreground", style: {
          background: "var(--violet)"
        }, children: tr.nav.cta }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalePicker, { value: locale, onChange: onPickLocale, label: tr.languagePicker }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { id: "top", className: "relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grad-hero pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full grad-a opacity-25 blur-3xl float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full grad-b opacity-25 blur-3xl float-slower" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1120px] mx-auto px-6 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rise font-mono-ui text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-border bg-card/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full pulse-dot", style: {
            background: "var(--violet)"
          } }),
          tr.hero.badge
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif-display rise mt-6 text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] text-balance max-w-[16ch]", children: [
          tr.hero.headlinePre,
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--violet)"
          }, children: tr.hero.headlineEmphasis1 }),
          tr.hero.headlineMid,
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--coral)"
          }, children: tr.hero.headlineEmphasis2 }),
          tr.hero.headlinePost
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "rise mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed", children: [
          tr.hero.lead.yearsLabel,
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: tr.hero.lead.years }),
          tr.hero.lead.rest
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rise mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "px-6 py-3 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5", style: {
            background: "var(--violet)"
          }, children: tr.hero.ctaPrimary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "px-6 py-3 rounded-full font-medium text-sm border border-border bg-card/60 backdrop-blur hover:border-foreground/40 transition-colors", children: tr.hero.ctaSecondary })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border bg-card/40 overflow-hidden py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee gap-12 whitespace-nowrap", children: [...tr.marquee, ...tr.marquee].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full", style: {
        background: "var(--violet)"
      } }),
      m
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1120px] mx-auto px-6 md:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mt-12", children: tr.stats.map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-display text-5xl md:text-6xl", style: {
        color: "var(--violet)"
      }, children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground font-mono-ui uppercase tracking-wider", children: l })
    ] }, l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "sobre", className: "max-w-[1120px] mx-auto px-6 md:px-10 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: tr.about.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        tr.about.titlePre,
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
          color: "var(--violet)"
        }, children: tr.about.titleEm }),
        tr.about.titlePost
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-20 mt-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-muted-foreground leading-[1.85]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tr.about.p1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tr.about.p2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tr.about.p3 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-8 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-56 h-56 rounded-full grad-a opacity-30 blur-2xl float-slow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-display text-3xl", children: tr.about.cardName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono-ui text-[11px] uppercase tracking-[0.18em]", style: {
              color: "var(--violet)"
            }, children: tr.about.cardTag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground leading-[1.8]", children: tr.about.cardText }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-6", children: tr.about.cardChips.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1 rounded-full border border-border bg-background/60", style: {
              color: "var(--violet)"
            }, children: chip }, chip)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "relative border-y border-border", style: {
      background: "var(--mist)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1120px] mx-auto px-6 md:px-10 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: tr.services.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        tr.services.titlePre,
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
          color: "var(--violet)"
        }, children: tr.services.titleEm1 }),
        tr.services.titleMid,
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
          color: "var(--coral)"
        }, children: tr.services.titleEm2 }),
        tr.services.titlePost
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14", children: tr.services.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative p-7 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-ui text-xs text-muted-foreground", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif-display text-2xl mt-3", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-[1.75]", children: s.d })
      ] }, s.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: tr.services.sectorsLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
          tr.services.sectorsTitlePre,
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--violet)"
          }, children: tr.services.sectorsTitleEm }),
          tr.services.sectorsTitlePost
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 mt-10 rounded-2xl border border-border overflow-hidden bg-card", children: tr.services.sectors.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 ${i % 2 === 0 ? "md:border-r border-border" : ""} ${i < tr.services.sectors.length - 2 ? "border-b border-border" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-display text-sm", style: {
            color: "var(--violet)"
          }, children: e.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-display text-2xl mt-2", children: e.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-[1.75]", children: e.d })
        ] }, e.n)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "produtos", className: "max-w-[1120px] mx-auto px-6 md:px-10 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: tr.products.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
          color: "var(--violet)"
        }, children: tr.products.titleEm }),
        tr.products.titlePost
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5 mt-14", children: tr.products.items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative rounded-3xl overflow-hidden border border-border bg-card group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-48 ${p.grad}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 mix-blend-overlay grid-bg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-5 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-white/90 px-2 py-1 rounded-full bg-black/20 backdrop-blur", children: p.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif-display text-3xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-[1.75]", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contato", className: "inline-flex items-center gap-1 mt-5 text-sm font-medium group-hover:gap-3 transition-all", style: {
            color: "var(--violet)"
          }, children: [
            tr.products.cta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
          ] })
        ] })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contato", className: "relative overflow-hidden border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grad-hero opacity-70 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[900px] mx-auto px-6 md:px-10 py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { center: true, children: tr.contact.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-balance mt-4", children: [
          tr.contact.titlePre,
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--violet)"
          }, children: tr.contact.titleEm }),
          tr.contact.titlePost
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-lg mx-auto", children: tr.contact.lead }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:giselialmeida@outlook.com", className: "inline-block mt-10 px-8 py-4 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5", style: {
          background: "var(--violet)"
        }, children: tr.contact.cta })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", onClick: handleWhatsAppClick, className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-lg backdrop-blur-md bg-[#25D366]/90 text-white hover:bg-[#25D366] transition-all hover:scale-105 animate-fade-in", "aria-label": tr.whatsapp.label, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: tr.whatsapp.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1240px] mx-auto px-6 md:px-10 py-10 grid gap-6 md:grid-cols-3 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "text-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: tr.footer.city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappUrl, onClick: handleWhatsAppClick, className: "text-xs text-muted-foreground hover:text-foreground", children: "(67) 99206-6021" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex gap-4 md:justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/include.tech?igsh=cDhzODF4czM3cnYw&utm_source=qr", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/share/14f3mvebebg/?mibextid=wwXIfr", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/giselialmeidadearaujo", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "2" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground md:text-right", children: tr.footer.rights })
    ] }) })
  ] });
}
function LocalePicker({
  value,
  onChange,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "text-base leading-none", children: LOCALE_LABELS[value].flag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": label, value, onChange: (e) => {
      const next = e.target.value;
      if (isLocale(next)) onChange(next);
    }, className: "bg-transparent border border-border rounded-full pl-2 pr-6 py-1.5 text-xs hover:border-foreground/40 transition-colors focus:outline-none focus:border-foreground/60 cursor-pointer", children: LOCALES.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: loc, className: "bg-background text-foreground", children: [
      LOCALE_LABELS[loc].flag,
      " ",
      LOCALE_LABELS[loc].label
    ] }, loc)) })
  ] });
}
function SectionLabel({
  children,
  center
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono-ui text-[11px] uppercase tracking-[0.22em] ${center ? "text-center" : ""}`, style: {
    color: "var(--violet)"
  }, children });
}
function SectionTitle({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-balance max-w-[18ch]", children });
}
export {
  Index as component
};
