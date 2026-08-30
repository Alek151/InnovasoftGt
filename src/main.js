const siteHeader = document.querySelector("[data-site-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = document.querySelectorAll("[data-nav-panel] a");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableLabels = document.querySelectorAll("[data-i18n-aria-label]");
const revealTargets = document.querySelectorAll(
  ".section, .solution-grid article, .method-list li, .metrics-panel article, .tech-grid article, .operations-visual, .contact-card"
);

const translations = {
  es: {
    pageTitle: "INNOVASOFT GT | Software empresarial a la medida en Guatemala",
    metaDescription: "INNOVASOFT GT dise\u00f1a, desarrolla e integra software empresarial a la medida: sistemas administrativos, financieros, recursos humanos, APIs, automatizaci\u00f3n, datos e integraciones SAP.",
    skip: "Saltar al contenido principal",
    menuLabel: "Abrir navegaci\u00f3n",
    languageLabel: "Seleccionar idioma",
    navSolutions: "Soluciones",
    navMethod: "M\u00e9todo",
    navExperience: "Experiencia",
    navTech: "Tecnolog\u00edas",
    navContact: "Contacto",
    navCta: "Cotizar proyecto",
    heroEyebrow: "Software empresarial desde Guatemala",
    heroTitle: "INNOVASOFT GT",
    heroLead: "Desarrollamos plataformas, integraciones y automatizaciones para empresas que necesitan operar con m\u00e1s control, menos trabajo manual y datos confiables.",
    heroPrimary: "Hablar de mi proyecto",
    heroSecondary: "Ver soluciones",
    proofFinance: "Finanzas",
    proofSap: "SAP + APIs",
    proofAutomation: "Automatizaci\u00f3n",
    proofData: "Datos",
    opsInput: "Procesos",
    opsInputText: "Reglas, permisos, solicitudes y estados.",
    opsIntegration: "Integraci\u00f3n",
    opsIntegrationText: "SAP, APIs, SOAP, REST y bases de datos.",
    opsAutomation: "Automatizaci\u00f3n",
    opsAutomationText: "Flujos que reducen tareas repetitivas.",
    opsDecision: "Decisi\u00f3n",
    opsDecisionText: "Reportes, indicadores y trazabilidad.",
    introEyebrow: "Para empresas que ya no pueden improvisar",
    introTitle: "Convertimos operaci\u00f3n real en sistemas claros, medibles y escalables.",
    introText: "Levantamos procesos, entendemos restricciones y construimos software que se adapta a la forma en que una empresa trabaja: usuarios, aprobaciones, integraciones, datos, seguridad y crecimiento por etapas.",
    solutionsEyebrow: "Soluciones",
    solutionsTitle: "Tecnolog\u00eda hecha para resolver operaci\u00f3n, no para decorar procesos.",
    solutionsText: "Cada proyecto puede iniciar con un m\u00f3dulo puntual o convertirse en una plataforma completa.",
    solutionCustomTitle: "Software a la medida",
    solutionCustomText: "Portales, sistemas internos y aplicaciones web con roles, permisos, flujos, validaciones y reportes propios del negocio.",
    solutionFinanceTitle: "Procesos financieros",
    solutionFinanceText: "Cr\u00e9dito, pagos, cartera, cobros, conciliaciones, controles operativos e indicadores para equipos financieros.",
    solutionHrTitle: "Recursos humanos",
    solutionHrText: "Solicitudes, aprobaciones, expedientes, gesti\u00f3n documental, trazabilidad e indicadores de procesos internos.",
    solutionIntegrationTitle: "Integraciones empresariales",
    solutionIntegrationText: "Conexi\u00f3n entre SAP, ERP, CRM, APIs, servicios SOAP/REST, bases de datos y plataformas existentes.",
    solutionDataTitle: "Datos y dashboards",
    solutionDataText: "Estructuras de datos, reporter\u00eda, tableros ejecutivos y vistas operativas para tomar mejores decisiones.",
    solutionProductTitle: "Productos digitales",
    solutionProductText: "Prototipos, MVPs y plataformas listas para evolucionar con clientes, aliados o equipos internos.",
    methodEyebrow: "M\u00e9todo",
    methodTitle: "Primero entendemos el negocio. Luego escribimos c\u00f3digo.",
    methodText: "El software serio necesita claridad antes de construir: alcance, reglas, excepciones, datos, usuarios, seguridad y ruta de entrega.",
    methodDiscoverTitle: "Diagnosticar",
    methodDiscoverText: "Mapeamos procesos, fricciones, sistemas actuales y prioridades reales.",
    methodDesignTitle: "Dise\u00f1ar",
    methodDesignText: "Definimos arquitectura, flujos, datos, integraciones y experiencia de usuario.",
    methodBuildTitle: "Construir",
    methodBuildText: "Desarrollamos por hitos, validando funcionalidad, seguridad y facilidad de uso.",
    methodEvolveTitle: "Evolucionar",
    methodEvolveText: "Mejoramos el sistema seg\u00fan usuarios, volumen, reportes y nuevas reglas.",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Capacidad t\u00e9cnica para operaciones con dependencias reales.",
    experienceText: "Trabajamos con sistemas administrativos, procesos financieros, recursos humanos, integraciones empresariales, APIs, automatizaci\u00f3n, reporter\u00eda y productos digitales que deben mantenerse despu\u00e9s del lanzamiento.",
    metricTrace: "Trazabilidad de extremo a extremo",
    metricIntegration: "Integraci\u00f3n con ecosistemas existentes",
    metricScale: "Evoluci\u00f3n por etapas sin rehacer todo",
    techEyebrow: "Tecnolog\u00edas",
    techTitle: "Elegimos tecnolog\u00eda por estabilidad, mantenimiento y contexto.",
    initiativeEyebrow: "Innovaci\u00f3n propia",
    initiativeTitle: "Tambi\u00e9n construimos productos propios.",
    initiativeText: "N\u00f3mada es una iniciativa de INNOVASOFT GT para explorar nuevas formas de conectar turismo, tecnolog\u00eda, comunidad y experiencias digitales en Guatemala.",
    initiativeCta: "Conocer N\u00f3mada",
    contactEyebrow: "Contacto",
    contactTitle: "Cu\u00e9ntanos qu\u00e9 proceso necesitas ordenar o automatizar.",
    contactText: "Escribe con una breve descripci\u00f3n del sistema, proceso, integraci\u00f3n o idea que quieres desarrollar. Podemos ayudarte a definir una ruta realista.",
    contactRole: "Desarrollo de software empresarial",
    footerText: "Software con prop\u00f3sito. Tecnolog\u00eda con direcci\u00f3n."
  },
  en: {
    pageTitle: "INNOVASOFT GT | Custom enterprise software in Guatemala",
    metaDescription: "INNOVASOFT GT designs, builds and integrates custom enterprise software: administrative systems, finance, HR, APIs, automation, data and SAP integrations.",
    skip: "Skip to main content",
    menuLabel: "Open navigation",
    languageLabel: "Select language",
    navSolutions: "Solutions",
    navMethod: "Method",
    navExperience: "Experience",
    navTech: "Technologies",
    navContact: "Contact",
    navCta: "Quote a project",
    heroEyebrow: "Enterprise software from Guatemala",
    heroTitle: "INNOVASOFT GT",
    heroLead: "We build platforms, integrations and automations for companies that need more control, less manual work and reliable data.",
    heroPrimary: "Discuss my project",
    heroSecondary: "View solutions",
    proofFinance: "Finance",
    proofSap: "SAP + APIs",
    proofAutomation: "Automation",
    proofData: "Data",
    opsInput: "Processes",
    opsInputText: "Rules, permissions, requests and states.",
    opsIntegration: "Integration",
    opsIntegrationText: "SAP, APIs, SOAP, REST and databases.",
    opsAutomation: "Automation",
    opsAutomationText: "Flows that reduce repetitive tasks.",
    opsDecision: "Decision",
    opsDecisionText: "Reports, indicators and traceability.",
    introEyebrow: "For companies that can no longer improvise",
    introTitle: "We turn real operations into clear, measurable and scalable systems.",
    introText: "We map processes, understand constraints and build software that adapts to how a company works: users, approvals, integrations, data, security and staged growth.",
    solutionsEyebrow: "Solutions",
    solutionsTitle: "Technology built to solve operations, not decorate processes.",
    solutionsText: "Each project can start as a focused module or become a complete platform.",
    solutionCustomTitle: "Custom software",
    solutionCustomText: "Portals, internal systems and web apps with roles, permissions, workflows, validations and business-specific reports.",
    solutionFinanceTitle: "Financial processes",
    solutionFinanceText: "Credit, payments, portfolio, collections, reconciliations, operational controls and indicators for finance teams.",
    solutionHrTitle: "Human resources",
    solutionHrText: "Requests, approvals, records, document management, traceability and indicators for internal processes.",
    solutionIntegrationTitle: "Enterprise integrations",
    solutionIntegrationText: "Connectivity between SAP, ERP, CRM, APIs, SOAP/REST services, databases and existing platforms.",
    solutionDataTitle: "Data and dashboards",
    solutionDataText: "Data structures, reporting, executive dashboards and operational views for better decisions.",
    solutionProductTitle: "Digital products",
    solutionProductText: "Prototypes, MVPs and platforms ready to evolve with customers, partners or internal teams.",
    methodEyebrow: "Method",
    methodTitle: "We understand the business first. Then we write code.",
    methodText: "Serious software needs clarity before development: scope, rules, exceptions, data, users, security and delivery path.",
    methodDiscoverTitle: "Diagnose",
    methodDiscoverText: "We map processes, friction, current systems and real priorities.",
    methodDesignTitle: "Design",
    methodDesignText: "We define architecture, flows, data, integrations and user experience.",
    methodBuildTitle: "Build",
    methodBuildText: "We develop by milestones, validating functionality, security and usability.",
    methodEvolveTitle: "Evolve",
    methodEvolveText: "We improve the system according to users, volume, reports and new rules.",
    experienceEyebrow: "Experience",
    experienceTitle: "Technical capability for operations with real dependencies.",
    experienceText: "We work with administrative systems, financial processes, HR, enterprise integrations, APIs, automation, reporting and digital products that must remain maintainable after launch.",
    metricTrace: "End-to-end traceability",
    metricIntegration: "Integration with existing ecosystems",
    metricScale: "Staged evolution without rebuilding everything",
    techEyebrow: "Technologies",
    techTitle: "We choose technology for stability, maintenance and context.",
    initiativeEyebrow: "Internal innovation",
    initiativeTitle: "We also build our own products.",
    initiativeText: "Nomada is an INNOVASOFT GT initiative exploring new ways to connect tourism, technology, community and digital experiences in Guatemala.",
    initiativeCta: "Explore Nomada",
    contactEyebrow: "Contact",
    contactTitle: "Tell us which process you need to organize or automate.",
    contactText: "Send a short description of the system, process, integration or idea you want to build. We can help define a realistic path.",
    contactRole: "Enterprise software development",
    footerText: "Software with purpose. Technology with direction."
  }
};

function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  navPanel?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

function syncHeader() {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 18);
}

function applyLanguage(language) {
  const dictionary = translations[language] ?? translations.es;

  document.documentElement.lang = language === "en" ? "en" : "es-GT";
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.metaDescription);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", dictionary.metaDescription);

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  translatableLabels.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (key && dictionary[key]) {
      node.setAttribute("aria-label", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langOption === language));
  });

  try {
    localStorage.setItem("innovasoftgt-language", language);
  } catch {
    // The site remains usable when browser storage is unavailable.
  }
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption === "en" ? "en" : "es");
    setMenu(false);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

let savedLanguage = "es";
try {
  savedLanguage = localStorage.getItem("innovasoftgt-language") || "es";
} catch {
  savedLanguage = "es";
}

applyLanguage(savedLanguage === "en" ? "en" : "es");
