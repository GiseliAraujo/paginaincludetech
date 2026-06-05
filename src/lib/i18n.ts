export const LOCALES = ["pt", "en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABELS: Record<Locale, { label: string; flag: string }> = {
  pt: { label: "Português", flag: "🇧🇷" },
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
  fr: { label: "Français", flag: "🇫🇷" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

// Map ISO-3166 country codes to a locale. Anything not listed → English.
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  // Portuguese
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", BO: "es", PY: "es", UY: "es", GT: "es", CU: "es", DO: "es",
  HN: "es", NI: "es", CR: "es", PA: "es", SV: "es", PR: "es",
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", CH: "fr", CA: "fr",
  SN: "fr", CI: "fr", ML: "fr", BF: "fr", NE: "fr", TG: "fr", BJ: "fr",
  CM: "fr", GA: "fr", CG: "fr", CD: "fr", MG: "fr", HT: "fr", DZ: "fr",
  MA: "fr", TN: "fr",
};

export function localeFromCountry(country: string | null | undefined): Locale | null {
  if (!country) return null;
  return COUNTRY_TO_LOCALE[country.toUpperCase()] ?? null;
}

export function localeFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) return null;
  const parts = header
    .split(",")
    .map((p) => p.trim().split(";")[0].toLowerCase())
    .filter(Boolean);
  for (const tag of parts) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return null;
}

type Dict = {
  nav: { about: string; services: string; products: string; contact: string; cta: string };
  hero: {
    badge: string;
    headlinePre: string;
    headlineEmphasis1: string;
    headlineMid: string;
    headlineEmphasis2: string;
    headlinePost: string;
    lead: { yearsLabel: string; years: string; rest: string };
    ctaPrimary: string;
    ctaSecondary: string;
  };
  marquee: string[];
  stats: Array<[string, string]>;
  about: {
    label: string;
    titlePre: string; titleEm: string; titlePost: string;
    p1: string; p2: string; p3: string;
    cardName: string; cardTag: string; cardText: string; cardChips: string[];
  };
  services: {
    label: string;
    titlePre: string; titleEm1: string; titleMid: string; titleEm2: string; titlePost: string;
    items: Array<{ k: string; t: string; d: string }>;
    sectorsLabel: string;
    sectorsTitlePre: string; sectorsTitleEm: string; sectorsTitlePost: string;
    sectors: Array<{ n: string; t: string; d: string }>;
  };
  products: {
    label: string;
    titleEm: string; titlePost: string;
    items: Array<{ tag: string; name: string; desc: string; grad: string }>;
    cta: string;
  };
  contact: {
    label: string;
    titlePre: string; titleEm: string; titlePost: string;
    lead: string;
    cta: string;
  };
  whatsapp: { label: string; text: string };
  footer: { city: string; rights: string };
  languagePicker: string;
};

const PT: Dict = {
  nav: { about: "Sobre", services: "Serviços", products: "Produtos", contact: "Contato", cta: "Fale conosco" },
  hero: {
    badge: "Include Tech · Estúdio de IA & Produto · desde 2015",
    headlinePre: "Inteligência que vira ",
    headlineEmphasis1: "produto",
    headlineMid: ", do ",
    headlineEmphasis2: "desenho",
    headlinePost: " à entrega.",
    lead: { yearsLabel: "Há ", years: "11 anos", rest: " a Include Tech transforma dados, IA e produto em soluções com impacto real para indústria, saúde e educação." },
    ctaPrimary: "Ver serviços",
    ctaSecondary: "Fale conosco",
  },
  marquee: [
    "IA Generativa", "Orquestração de Agentes", "Engenharia de Dados", "LLMs",
    "Produto Digital", "SENAI · Google", "Indústria Brasileira", "Brasília · DF",
    "Farmácia · Saúde", "E-commerce", "Inovação em IA", "Data Analytics",
  ],
  stats: [
    ["11+", "Anos como Include Tech"],
    ["20+", "Anos de expertise em tecnologia"],
    ["3", "Produtos de IA em desenvolvimento"],
    ["∞", "Possibilidades com IA generativa"],
  ],
  about: {
    label: "Quem somos",
    titlePre: "Tecnologia com ", titleEm: "propósito", titlePost: " e profundidade.",
    p1: "A Include Tech nasceu em 2015 como casa de desenvolvimento de software e evoluiu de forma consistente para dados, analytics e Inteligência Artificial — acompanhando cada onda da transformação digital.",
    p2: "Hoje lideramos projetos de IA generativa e orquestração de agentes para indústria e educação profissional, com atuação em convênios nacionais de grande impacto — como o projeto SENAI + Google.",
    p3: "Nossa filosofia é simples: transformar IA em soluções reais, acessíveis e aplicáveis, gerando valor mensurável para quem importa.",
    cardName: "Include Tech",
    cardTag: "IA · Dados · Produto",
    cardText: "Estúdio especializado em IA Generativa, LLMs e Orquestração de Agentes. Conectamos inteligência artificial à indústria brasileira, educação profissional e saúde com soluções end-to-end, do desenho à entrega.",
    cardChips: ["IA Generativa","LLMs","Agentes de IA","Product Management","Data & Analytics","Indústria · Saúde · Educação"],
  },
  services: {
    label: "O que entregamos",
    titlePre: "Do ", titleEm1: "desenho", titleMid: " à ", titleEm2: "entrega", titlePost: ", sem furos no caminho.",
    items: [
      { k: "01", t: "Discovery & Estratégia", d: "Mapeamento de problema, oportunidade e jornada. Definimos o produto antes de uma linha de código." },
      { k: "02", t: "Design de Produto", d: "Arquitetura de informação, fluxos e interface. Protótipos navegáveis para validar com gente real." },
      { k: "03", t: "Engenharia de Software", d: "Frontend, backend, APIs e integrações. Stack moderna, código sustentável e entregas iterativas." },
      { k: "04", t: "Arquitetura de Agentes de IA", d: "Pipelines com LLMs, orquestração, RAG, avaliação e governança responsável." },
      { k: "05", t: "Engenharia de Dados", d: "Pipelines, modelagem dimensional, analytics e data storytelling para decisões baseadas em evidência." },
      { k: "06", t: "Entrega & Operação", d: "Deploy, observabilidade, métricas de produto e evolução contínua junto ao seu time." },
    ],
    sectorsLabel: "Setores onde atuamos",
    sectorsTitlePre: "Onde geramos ", sectorsTitleEm: "impacto real", sectorsTitlePost: ".",
    sectors: [
      { n: "01", t: "Indústria & Manufatura", d: "IA aplicada à otimização de processos, em parceria com SENAI em escala nacional." },
      { n: "02", t: "Educação Profissional", d: "Ferramentas generativas que transformam a experiência de docentes e aprendizes." },
      { n: "03", t: "Saúde & Farmácia", d: "Soluções de IA com rigor regulatório e foco no profissional e no paciente." },
      { n: "04", t: "E-commerce & Varejo", d: "Performance, dados e experiência do usuário para impulsionar o negócio." },
    ],
  },
  products: {
    label: "Laboratório",
    titleEm: "Criações", titlePost: " que moldam o que vem.",
    items: [
      { tag: "Farmacêutico · IA", name: "Azuen", desc: "Plataforma de IA para o setor farmacêutico. Agentes com foco em segurança, confiabilidade e conformidade regulatória.", grad: "grad-a" },
      { tag: "Em desenvolvimento", name: "Ibelo", desc: "Nova solução digital aplicando recursos avançados de dados e IA generativa para impacto real.", grad: "grad-b" },
      { tag: "Saúde · IA", name: "Care", desc: "IA voltada à saúde, com foco em experiência do usuário, segurança e impacto no cuidado ao paciente.", grad: "grad-c" },
    ],
    cta: "Saiba mais",
  },
  contact: {
    label: "Contato",
    titlePre: "Tem um ", titleEm: "desafio", titlePost: " que vale a pena resolver?",
    lead: "Conta pra gente. Da primeira conversa à entrega final, caminhamos com você.",
    cta: "Enviar uma mensagem",
  },
  whatsapp: { label: "WhatsApp", text: "Olá! Vim pelo seu site e gostaria de conversar." },
  footer: { city: "Brasília, DF — Brasil", rights: "© 2015–2026 Include Tech. Todos os direitos reservados." },
  languagePicker: "Idioma",
};

const EN: Dict = {
  nav: { about: "About", services: "Services", products: "Products", contact: "Contact", cta: "Get in touch" },
  hero: {
    badge: "Include Tech · AI & Product Studio · since 2015",
    headlinePre: "Intelligence turned into ",
    headlineEmphasis1: "product",
    headlineMid: ", from ",
    headlineEmphasis2: "design",
    headlinePost: " to delivery.",
    lead: { yearsLabel: "For the past ", years: "11 years", rest: ", Include Tech has been turning data, AI and product into solutions with real impact for industry, healthcare and education." },
    ctaPrimary: "See services",
    ctaSecondary: "Get in touch",
  },
  marquee: [
    "Generative AI", "Agent Orchestration", "Data Engineering", "LLMs",
    "Digital Product", "SENAI · Google", "Brazilian Industry", "Brasília · Brazil",
    "Pharma · Healthcare", "E-commerce", "AI Innovation", "Data Analytics",
  ],
  stats: [
    ["11+", "Years as Include Tech"],
    ["20+", "Years of tech expertise"],
    ["3", "AI products in development"],
    ["∞", "Possibilities with generative AI"],
  ],
  about: {
    label: "Who we are",
    titlePre: "Technology with ", titleEm: "purpose", titlePost: " and depth.",
    p1: "Include Tech was founded in 2015 as a software development house and has steadily evolved into data, analytics and Artificial Intelligence — riding every wave of the digital transformation.",
    p2: "Today we lead generative AI and agent orchestration projects for industry and vocational education, working on high-impact national initiatives — such as the SENAI + Google partnership.",
    p3: "Our philosophy is simple: turn AI into real, accessible and applicable solutions that generate measurable value for the people that matter.",
    cardName: "Include Tech",
    cardTag: "AI · Data · Product",
    cardText: "A studio specialized in Generative AI, LLMs and Agent Orchestration. We connect artificial intelligence to Brazilian industry, vocational education and healthcare with end-to-end solutions, from design to delivery.",
    cardChips: ["Generative AI","LLMs","AI Agents","Product Management","Data & Analytics","Industry · Health · Education"],
  },
  services: {
    label: "What we deliver",
    titlePre: "From ", titleEm1: "design", titleMid: " to ", titleEm2: "delivery", titlePost: ", no gaps along the way.",
    items: [
      { k: "01", t: "Discovery & Strategy", d: "Mapping problem, opportunity and journey. We define the product before a single line of code." },
      { k: "02", t: "Product Design", d: "Information architecture, flows and interface. Navigable prototypes to validate with real people." },
      { k: "03", t: "Software Engineering", d: "Frontend, backend, APIs and integrations. Modern stack, sustainable code, iterative delivery." },
      { k: "04", t: "AI Agent Architecture", d: "LLM pipelines, orchestration, RAG, evaluation and responsible governance." },
      { k: "05", t: "Data Engineering", d: "Pipelines, dimensional modeling, analytics and data storytelling for evidence-based decisions." },
      { k: "06", t: "Delivery & Operations", d: "Deploy, observability, product metrics and continuous evolution alongside your team." },
    ],
    sectorsLabel: "Sectors we serve",
    sectorsTitlePre: "Where we create ", sectorsTitleEm: "real impact", sectorsTitlePost: ".",
    sectors: [
      { n: "01", t: "Industry & Manufacturing", d: "AI applied to process optimization, in partnership with SENAI at national scale." },
      { n: "02", t: "Vocational Education", d: "Generative tools that transform the experience of teachers and learners." },
      { n: "03", t: "Health & Pharma", d: "AI solutions with regulatory rigor, focused on professionals and patients." },
      { n: "04", t: "E-commerce & Retail", d: "Performance, data and user experience to power the business." },
    ],
  },
  products: {
    label: "Lab",
    titleEm: "Creations", titlePost: " shaping what's next.",
    items: [
      { tag: "Pharma · AI", name: "Azuen", desc: "AI platform for the pharmaceutical sector. Agents focused on safety, reliability and regulatory compliance.", grad: "grad-a" },
      { tag: "In development", name: "Ibelo", desc: "A new digital solution applying advanced data and generative AI capabilities for real impact.", grad: "grad-b" },
      { tag: "Health · AI", name: "Care", desc: "Healthcare-oriented AI with focus on user experience, safety and impact on patient care.", grad: "grad-c" },
    ],
    cta: "Learn more",
  },
  contact: {
    label: "Contact",
    titlePre: "Got a ", titleEm: "challenge", titlePost: " worth solving?",
    lead: "Tell us about it. From the first conversation to final delivery, we walk it with you.",
    cta: "Send a message",
  },
  whatsapp: { label: "WhatsApp", text: "Hi! I came from your website and would like to talk." },
  footer: { city: "Brasília, DF — Brazil", rights: "© 2015–2026 Include Tech. All rights reserved." },
  languagePicker: "Language",
};

const ES: Dict = {
  nav: { about: "Nosotros", services: "Servicios", products: "Productos", contact: "Contacto", cta: "Hablemos" },
  hero: {
    badge: "Include Tech · Estudio de IA & Producto · desde 2015",
    headlinePre: "Inteligencia que se convierte en ",
    headlineEmphasis1: "producto",
    headlineMid: ", del ",
    headlineEmphasis2: "diseño",
    headlinePost: " a la entrega.",
    lead: { yearsLabel: "Desde hace ", years: "11 años", rest: ", Include Tech transforma datos, IA y producto en soluciones con impacto real para industria, salud y educación." },
    ctaPrimary: "Ver servicios",
    ctaSecondary: "Hablemos",
  },
  marquee: [
    "IA Generativa", "Orquestación de Agentes", "Ingeniería de Datos", "LLMs",
    "Producto Digital", "SENAI · Google", "Industria Brasileña", "Brasília · DF",
    "Farmacia · Salud", "E-commerce", "Innovación en IA", "Data Analytics",
  ],
  stats: [
    ["11+", "Años como Include Tech"],
    ["20+", "Años de experiencia en tecnología"],
    ["3", "Productos de IA en desarrollo"],
    ["∞", "Posibilidades con IA generativa"],
  ],
  about: {
    label: "Quiénes somos",
    titlePre: "Tecnología con ", titleEm: "propósito", titlePost: " y profundidad.",
    p1: "Include Tech nació en 2015 como casa de desarrollo de software y evolucionó de forma consistente hacia datos, analítica e Inteligencia Artificial — acompañando cada ola de la transformación digital.",
    p2: "Hoy lideramos proyectos de IA generativa y orquestación de agentes para industria y educación profesional, con participación en convenios nacionales de gran impacto — como el proyecto SENAI + Google.",
    p3: "Nuestra filosofía es simple: transformar la IA en soluciones reales, accesibles y aplicables, generando valor medible para quienes importan.",
    cardName: "Include Tech",
    cardTag: "IA · Datos · Producto",
    cardText: "Estudio especializado en IA Generativa, LLMs y Orquestación de Agentes. Conectamos inteligencia artificial con la industria brasileña, la educación profesional y la salud con soluciones end-to-end, del diseño a la entrega.",
    cardChips: ["IA Generativa","LLMs","Agentes de IA","Product Management","Datos & Analítica","Industria · Salud · Educación"],
  },
  services: {
    label: "Lo que entregamos",
    titlePre: "Del ", titleEm1: "diseño", titleMid: " a la ", titleEm2: "entrega", titlePost: ", sin baches en el camino.",
    items: [
      { k: "01", t: "Discovery & Estrategia", d: "Mapeo de problema, oportunidad y journey. Definimos el producto antes de una sola línea de código." },
      { k: "02", t: "Diseño de Producto", d: "Arquitectura de información, flujos e interfaz. Prototipos navegables para validar con gente real." },
      { k: "03", t: "Ingeniería de Software", d: "Frontend, backend, APIs e integraciones. Stack moderna, código sostenible y entregas iterativas." },
      { k: "04", t: "Arquitectura de Agentes de IA", d: "Pipelines con LLMs, orquestación, RAG, evaluación y gobernanza responsable." },
      { k: "05", t: "Ingeniería de Datos", d: "Pipelines, modelado dimensional, analítica y data storytelling para decisiones basadas en evidencia." },
      { k: "06", t: "Entrega & Operación", d: "Deploy, observabilidad, métricas de producto y evolución continua junto a tu equipo." },
    ],
    sectorsLabel: "Sectores donde actuamos",
    sectorsTitlePre: "Dónde generamos ", sectorsTitleEm: "impacto real", sectorsTitlePost: ".",
    sectors: [
      { n: "01", t: "Industria & Manufactura", d: "IA aplicada a la optimización de procesos, en alianza con SENAI a escala nacional." },
      { n: "02", t: "Educación Profesional", d: "Herramientas generativas que transforman la experiencia de docentes y estudiantes." },
      { n: "03", t: "Salud & Farmacia", d: "Soluciones de IA con rigor regulatorio y foco en el profesional y el paciente." },
      { n: "04", t: "E-commerce & Retail", d: "Performance, datos y experiencia de usuario para impulsar el negocio." },
    ],
  },
  products: {
    label: "Laboratorio",
    titleEm: "Creaciones", titlePost: " que dan forma a lo que viene.",
    items: [
      { tag: "Farmacéutico · IA", name: "Azuen", desc: "Plataforma de IA para el sector farmacéutico. Agentes con foco en seguridad, confiabilidad y cumplimiento regulatorio.", grad: "grad-a" },
      { tag: "En desarrollo", name: "Ibelo", desc: "Nueva solución digital que aplica recursos avanzados de datos e IA generativa para impacto real.", grad: "grad-b" },
      { tag: "Salud · IA", name: "Care", desc: "IA orientada a la salud, con foco en experiencia de usuario, seguridad e impacto en el cuidado del paciente.", grad: "grad-c" },
    ],
    cta: "Saber más",
  },
  contact: {
    label: "Contacto",
    titlePre: "¿Tienes un ", titleEm: "desafío", titlePost: " que vale la pena resolver?",
    lead: "Cuéntanos. Desde la primera conversación hasta la entrega final, lo recorremos contigo.",
    cta: "Enviar un mensaje",
  },
  whatsapp: { label: "WhatsApp", text: "¡Hola! Vengo desde su sitio y me gustaría conversar." },
  footer: { city: "Brasília, DF — Brasil", rights: "© 2015–2026 Include Tech. Todos los derechos reservados." },
  languagePicker: "Idioma",
};

const FR: Dict = {
  nav: { about: "À propos", services: "Services", products: "Produits", contact: "Contact", cta: "Parlons-en" },
  hero: {
    badge: "Include Tech · Studio IA & Produit · depuis 2015",
    headlinePre: "L'intelligence transformée en ",
    headlineEmphasis1: "produit",
    headlineMid: ", du ",
    headlineEmphasis2: "design",
    headlinePost: " à la livraison.",
    lead: { yearsLabel: "Depuis ", years: "11 ans", rest: ", Include Tech transforme data, IA et produit en solutions à impact réel pour l'industrie, la santé et l'éducation." },
    ctaPrimary: "Voir les services",
    ctaSecondary: "Parlons-en",
  },
  marquee: [
    "IA Générative", "Orchestration d'agents", "Ingénierie de données", "LLM",
    "Produit numérique", "SENAI · Google", "Industrie brésilienne", "Brasília · DF",
    "Pharma · Santé", "E-commerce", "Innovation IA", "Data Analytics",
  ],
  stats: [
    ["11+", "Années en tant qu'Include Tech"],
    ["20+", "Années d'expertise tech"],
    ["3", "Produits d'IA en développement"],
    ["∞", "Possibilités avec l'IA générative"],
  ],
  about: {
    label: "Qui sommes-nous",
    titlePre: "Une technologie avec ", titleEm: "du sens", titlePost: " et de la profondeur.",
    p1: "Include Tech est née en 2015 comme maison de développement logiciel et a évolué de manière constante vers la data, l'analytique et l'Intelligence Artificielle — en suivant chaque vague de la transformation numérique.",
    p2: "Aujourd'hui nous menons des projets d'IA générative et d'orchestration d'agents pour l'industrie et la formation professionnelle, avec une présence dans des partenariats nationaux d'envergure — comme le projet SENAI + Google.",
    p3: "Notre philosophie est simple : transformer l'IA en solutions réelles, accessibles et applicables, générant une valeur mesurable pour ceux qui comptent.",
    cardName: "Include Tech",
    cardTag: "IA · Data · Produit",
    cardText: "Studio spécialisé en IA Générative, LLMs et Orchestration d'Agents. Nous connectons l'intelligence artificielle à l'industrie brésilienne, à la formation professionnelle et à la santé avec des solutions de bout en bout, du design à la livraison.",
    cardChips: ["IA Générative","LLMs","Agents d'IA","Product Management","Data & Analytics","Industrie · Santé · Éducation"],
  },
  services: {
    label: "Ce que nous livrons",
    titlePre: "Du ", titleEm1: "design", titleMid: " à la ", titleEm2: "livraison", titlePost: ", sans accroc en chemin.",
    items: [
      { k: "01", t: "Discovery & Stratégie", d: "Cartographie du problème, de l'opportunité et du parcours. Nous définissons le produit avant la première ligne de code." },
      { k: "02", t: "Design Produit", d: "Architecture de l'information, parcours et interface. Prototypes navigables pour valider avec de vraies personnes." },
      { k: "03", t: "Ingénierie Logicielle", d: "Frontend, backend, APIs et intégrations. Stack moderne, code durable, livraisons itératives." },
      { k: "04", t: "Architecture d'Agents IA", d: "Pipelines LLM, orchestration, RAG, évaluation et gouvernance responsable." },
      { k: "05", t: "Ingénierie de Données", d: "Pipelines, modélisation dimensionnelle, analytique et data storytelling pour des décisions fondées sur les preuves." },
      { k: "06", t: "Livraison & Exploitation", d: "Déploiement, observabilité, métriques produit et évolution continue aux côtés de votre équipe." },
    ],
    sectorsLabel: "Secteurs où nous intervenons",
    sectorsTitlePre: "Là où nous créons ", sectorsTitleEm: "un impact réel", sectorsTitlePost: ".",
    sectors: [
      { n: "01", t: "Industrie & Manufacture", d: "IA appliquée à l'optimisation des processus, en partenariat avec SENAI à l'échelle nationale." },
      { n: "02", t: "Formation Professionnelle", d: "Des outils génératifs qui transforment l'expérience des enseignants et des apprenants." },
      { n: "03", t: "Santé & Pharma", d: "Des solutions d'IA rigoureuses sur le plan réglementaire, centrées sur le professionnel et le patient." },
      { n: "04", t: "E-commerce & Retail", d: "Performance, data et expérience utilisateur pour propulser le business." },
    ],
  },
  products: {
    label: "Laboratoire",
    titleEm: "Créations", titlePost: " qui façonnent la suite.",
    items: [
      { tag: "Pharma · IA", name: "Azuen", desc: "Plateforme d'IA pour le secteur pharmaceutique. Agents axés sur la sécurité, la fiabilité et la conformité réglementaire.", grad: "grad-a" },
      { tag: "En développement", name: "Ibelo", desc: "Nouvelle solution numérique appliquant des capacités avancées de data et d'IA générative pour un impact réel.", grad: "grad-b" },
      { tag: "Santé · IA", name: "Care", desc: "IA dédiée à la santé, centrée sur l'expérience utilisateur, la sécurité et l'impact sur les soins du patient.", grad: "grad-c" },
    ],
    cta: "En savoir plus",
  },
  contact: {
    label: "Contact",
    titlePre: "Vous avez un ", titleEm: "défi", titlePost: " qui vaut le coup d'être relevé ?",
    lead: "Racontez-nous. De la première conversation à la livraison finale, nous le parcourons avec vous.",
    cta: "Envoyer un message",
  },
  whatsapp: { label: "WhatsApp", text: "Bonjour ! Je viens de votre site et j'aimerais en discuter." },
  footer: { city: "Brasília, DF — Brésil", rights: "© 2015–2026 Include Tech. Tous droits réservés." },
  languagePicker: "Langue",
};

export const DICTIONARIES: Record<Locale, Dict> = { pt: PT, en: EN, es: ES, fr: FR };

export function t(locale: Locale): Dict {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}