import { createFileRoute } from "@tanstack/react-router";
import type { MouseEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Include Tech — IA, Dados & Produto, do desenho à entrega" },
      { name: "description", content: "Estúdio de IA generativa, dados e produto digital. Desenvolvimento end-to-end, do desenho à entrega, com palestras e participações em eventos." },
      { property: "og:title", content: "Include Tech — IA, Dados & Produto" },
      { property: "og:description", content: "Do desenho à entrega: IA generativa, agentes, dados e produto digital com impacto real." },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

const MARQUEE = [
  "IA Generativa", "Orquestração de Agentes", "Engenharia de Dados", "LLMs",
  "Produto Digital", "SENAI · Google", "Indústria Brasileira", "Brasília · DF",
  "Farmácia · Saúde", "E-commerce", "Inovação em IA", "Data Analytics",
];

const SERVICES = [
  { k: "01", t: "Discovery & Estratégia", d: "Mapeamento de problema, oportunidade e jornada. Definimos o produto antes de uma linha de código." },
  { k: "02", t: "Design de Produto", d: "Arquitetura de informação, fluxos e interface. Protótipos navegáveis para validar com gente real." },
  { k: "03", t: "Engenharia de Software", d: "Frontend, backend, APIs e integrações. Stack moderna, código sustentável e entregas iterativas." },
  { k: "04", t: "Arquitetura de Agentes de IA", d: "Pipelines com LLMs, orquestração, RAG, avaliação e governança responsável." },
  { k: "05", t: "Engenharia de Dados", d: "Pipelines, modelagem dimensional, analytics e data storytelling para decisões baseadas em evidência." },
  { k: "06", t: "Entrega & Operação", d: "Deploy, observabilidade, métricas de produto e evolução contínua junto ao seu time." },
];

const PRODUCTS = [
  { tag: "Farmacêutico · IA", name: "Azuen", desc: "Plataforma de IA para o setor farmacêutico. Agentes com foco em segurança, confiabilidade e conformidade regulatória.", grad: "grad-a" },
  { tag: "Em desenvolvimento", name: "Ibelo", desc: "Nova solução digital aplicando recursos avançados de dados e IA generativa para impacto real.", grad: "grad-b" },
  { tag: "Saúde · IA", name: "Care", desc: "IA voltada à saúde, com foco em experiência do usuário, segurança e impacto no cuidado ao paciente.", grad: "grad-c" },
];

const EXPERTISE = [
  { n: "01", t: "Indústria & Manufatura", d: "IA aplicada à otimização de processos, em parceria com SENAI em escala nacional." },
  { n: "02", t: "Educação Profissional", d: "Ferramentas generativas que transformam a experiência de docentes e aprendizes." },
  { n: "03", t: "Saúde & Farmácia", d: "Soluções de IA com rigor regulatório e foco no profissional e no paciente." },
  { n: "04", t: "E-commerce & Varejo", d: "Performance, dados e experiência do usuário para impulsionar o negócio." },
];

const EVENTS = [
  { year: "2025", name: "SENAI + Google · IA Generativa na Educação", role: "Execução técnica nacional", place: "Brasil" },
  { year: "2024", name: "MIT · Programa Executivo em IA", role: "Participação executiva", place: "Cambridge, EUA" },
  { year: "2024", name: "Insper · AI for Business", role: "Painel sobre Agentes de IA", place: "São Paulo" },
  { year: "2023", name: "Web Summit Rio", role: "Mesa de IA Generativa na Indústria", place: "Rio de Janeiro" },
  { year: "2023", name: "Meetup Mulheres em IA · DF", role: "Keynote — LLMs aplicadas", place: "Brasília" },
];

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
  const whatsappUrl = "https://wa.me/5567992066021?text=Ol%C3%A1!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar.";

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
            {NAV.slice(0, -1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#contato" className="text-sm font-medium px-4 py-2 rounded-full text-primary-foreground"
                 style={{ background: "var(--violet)" }}>
                Fale conosco
              </a>
            </li>
          </ul>
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
            Include Tech · Estúdio de IA & Produto · desde 2015
          </div>

          <h1 className="font-serif-display rise mt-6 text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] text-balance max-w-[16ch]">
            Inteligência que vira <em className="italic" style={{ color: "var(--violet)" }}>produto</em>,
            do <em className="italic" style={{ color: "var(--coral)" }}>desenho</em> à entrega.
          </h1>

          <p className="rise mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Há <strong className="text-foreground font-medium">11 anos</strong> a Include Tech
            transforma dados, IA e produto em soluções com impacto real para indústria, saúde e educação.
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3">
            <a href="#servicos" className="px-6 py-3 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5"
               style={{ background: "var(--violet)" }}>
              Ver serviços
            </a>
            <a href="#eventos" className="px-6 py-3 rounded-full font-medium text-sm border border-border bg-card/60 backdrop-blur hover:border-foreground/40 transition-colors">
              Palestras & eventos
            </a>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 overflow-hidden py-4">
        <div className="marquee gap-12 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--violet)" }} />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mt-12">
        {[
          ["11+", "Anos como Include Tech"],
          ["20+", "Anos de expertise em tecnologia"],
          ["3", "Produtos de IA em desenvolvimento"],
          ["∞", "Possibilidades com IA generativa"],
        ].map(([n, l]) => (
          <div key={l} className="bg-background p-8 text-center">
            <div className="font-serif-display text-5xl md:text-6xl" style={{ color: "var(--violet)" }}>{n}</div>
            <div className="mt-2 text-xs text-muted-foreground font-mono-ui uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
        <SectionLabel>Quem somos</SectionLabel>
        <SectionTitle>
          Tecnologia com <em className="italic" style={{ color: "var(--violet)" }}>propósito</em> e profundidade.
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-14">
          <div className="space-y-5 text-muted-foreground leading-[1.85]">
            <p>A <strong className="text-foreground font-medium">Include Tech</strong> nasceu em 2015 como casa de desenvolvimento de software e evoluiu de forma consistente para dados, analytics e Inteligência Artificial — acompanhando cada onda da transformação digital.</p>
            <p>Hoje lideramos projetos de <strong className="text-foreground font-medium">IA generativa e orquestração de agentes</strong> para indústria e educação profissional, com atuação em convênios nacionais de grande impacto — como o projeto SENAI + Google.</p>
            <p>Nossa filosofia é simples: <strong className="text-foreground font-medium">transformar IA em soluções reais, acessíveis e aplicáveis</strong>, gerando valor mensurável para quem importa.</p>
          </div>
          <div className="relative rounded-3xl border border-border bg-card p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full grad-a opacity-30 blur-2xl float-slow" />
            <div className="relative">
              <div className="font-serif-display text-3xl">Include Tech</div>
              <div className="mt-1 font-mono-ui text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--violet)" }}>
                IA · Dados · Produto
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-[1.8]">
                Estúdio especializado em IA Generativa, LLMs e Orquestração de Agentes.
                Conectamos inteligência artificial à indústria brasileira, educação profissional e saúde
                com soluções end-to-end, do desenho à entrega.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["IA Generativa","LLMs","Agentes de IA","Product Management","Data & Analytics","Indústria · Saúde · Educação"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-border bg-background/60"
                        style={{ color: "var(--violet)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative border-y border-border" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
          <SectionLabel>O que entregamos</SectionLabel>
          <SectionTitle>
            Do <em className="italic" style={{ color: "var(--violet)" }}>desenho</em> à <em className="italic" style={{ color: "var(--coral)" }}>entrega</em>, sem furos no caminho.
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {SERVICES.map((s) => (
              <article key={s.k} className="group relative p-7 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all hover:-translate-y-1">
                <div className="font-mono-ui text-xs text-muted-foreground">{s.k}</div>
                <h3 className="font-serif-display text-2xl mt-3">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.75]">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
        <SectionLabel>Laboratório</SectionLabel>
        <SectionTitle>
          <em className="italic" style={{ color: "var(--violet)" }}>Criações</em> que moldam o que vem.
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {PRODUCTS.map((p) => (
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
                  Saiba mais <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-y border-border" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
          <SectionLabel>Setores</SectionLabel>
          <SectionTitle>Onde geramos <em className="italic" style={{ color: "var(--violet)" }}>impacto real</em>.</SectionTitle>
          <div className="grid md:grid-cols-2 mt-14 rounded-2xl border border-border overflow-hidden bg-card">
            {EXPERTISE.map((e, i) => (
              <div key={e.n} className={`p-8 ${i % 2 === 0 ? "md:border-r border-border" : ""} ${i < EXPERTISE.length - 2 ? "border-b border-border" : ""}`}>
                <div className="font-serif-display text-sm" style={{ color: "var(--violet)" }}>{e.n}</div>
                <div className="font-serif-display text-2xl mt-2">{e.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.75]">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="max-w-[1120px] mx-auto px-6 md:px-10 py-28">
        <SectionLabel>Palestras & participações</SectionLabel>
        <SectionTitle>
          Compartilhando o que aprendo <em className="italic" style={{ color: "var(--coral)" }}>em alto e bom som</em>.
        </SectionTitle>
        <ol className="mt-14 divide-y divide-border border-y border-border">
          {EVENTS.map((e) => (
            <li key={e.name} className="grid grid-cols-12 gap-4 py-6 items-baseline group hover:bg-card/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md">
              <div className="col-span-3 md:col-span-2 font-mono-ui text-sm text-muted-foreground">{e.year}</div>
              <div className="col-span-9 md:col-span-6 font-serif-display text-2xl">{e.name}</div>
              <div className="col-span-12 md:col-span-3 text-sm text-muted-foreground">{e.role}</div>
              <div className="col-span-12 md:col-span-1 text-xs font-mono-ui uppercase tracking-wider text-right" style={{ color: "var(--violet)" }}>{e.place}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 grad-hero opacity-70 pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-28 text-center">
          <SectionLabel center>Vamos conversar</SectionLabel>
          <h2 className="font-serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-balance mt-4">
            Tem um <em className="italic" style={{ color: "var(--violet)" }}>desafio</em> que vale a pena resolver?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Conta pra mim. Da primeira conversa à entrega final, caminho com você.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            {[
              ["Localização", "Brasília, DF — Brasil"],
              ["WhatsApp", "(67) 99206-6021"],
              ["E-mail", "giselialmeida@outlook.com"],
              ["LinkedIn", "/in/giselialmeidadearaujo"],
            ].map(([l, v]) => (
              <div key={l} className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--violet)" }}>{l}</div>
                <div className="mt-1 text-sm">{v}</div>
              </div>
            ))}
          </div>

          <a href="mailto:giselialmeida@outlook.com"
             className="inline-block mt-10 px-8 py-4 rounded-full text-primary-foreground font-medium text-sm transition-transform hover:-translate-y-0.5"
             style={{ background: "var(--violet)" }}>
            Enviar uma mensagem
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
        aria-label="Fale no WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-sm font-medium">WhatsApp</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
          <Logo className="text-lg" />
          <p className="text-xs text-muted-foreground">© 2015–2026 Include Tech. Todos os direitos reservados.</p>
          <ul className="flex gap-5">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-xs text-muted-foreground hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
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
