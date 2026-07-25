const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = document.querySelectorAll("[data-nav-panel] a");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableLabels = document.querySelectorAll("[data-i18n-aria-label]");
const revealTargets = document.querySelectorAll(
  ".section, .service-card, .experience-stack article, .trust-grid article, .feature-grid article, .standards-list article, .process-grid article, .seo-columns article, .initiative-card, .contact-card"
);

const translations = {
  es: {
    pageTitle: "INNOVASOFT GT | Desarrollo de software a la medida en Guatemala",
    metaDescription: "INNOVASOFT GT desarrolla software a la medida en Guatemala: plataformas web, sistemas administrativos, software financiero, recursos humanos, APIs, automatización e integraciones SAP.",
    skip: "Saltar al contenido principal",
    menuLabel: "Abrir navegación",
    languageLabel: "Seleccionar idioma",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navScope: "Alcance global",
    navInitiatives: "Iniciativas",
    navProcess: "Proceso",
    navContact: "Contacto",
    navTalk: "Hablemos",
    heroEyebrow: "Desarrollo de software en Guatemala",
    heroTitle: "Convertimos procesos complejos en software que sí funciona.",
    heroText: "Diseñamos, desarrollamos e integramos soluciones digitales a la medida para organizaciones que necesitan ordenar su operación, conectar sistemas, automatizar flujos y transformar ideas en productos reales.",
    heroPrimary: "Solicitar información",
    heroSecondary: "Conocer nuestra experiencia",
    focusFinance: "Software financiero",
    focusHr: "Recursos humanos",
    focusSap: "Integraciones SAP",
    nodeCustom: "Software a la medida",
    nodeOperation: "Operación",
    nodeIntegrations: "Integraciones",
    nodeProduct: "Producto",
    nodeIntegrable: "Integrable",
    nodeScalable: "Escalable",
    servicesEyebrow: "Servicios",
    servicesTitle: "Soluciones tecnológicas para operar mejor",
    servicesText: "Construimos software claro, útil e integrable, alineado al problema real de cada organización.",
    serviceCustomTitle: "Software a la medida",
    serviceCustomText: "Aplicaciones, portales y sistemas internos construidos alrededor de reglas reales de negocio, usuarios, permisos, flujos y reportes.",
    serviceFinanceTitle: "Soluciones financieras",
    serviceFinanceText: "Herramientas para crédito, pagos, cartera, cobros, conciliaciones, seguimiento operativo, trazabilidad y reporterías de control.",
    serviceHrTitle: "Recursos humanos",
    serviceHrText: "Digitalización de solicitudes, aprobaciones, controles administrativos, expedientes, indicadores y procesos internos de gestión humana.",
    serviceIntegrationTitle: "Integraciones empresariales",
    serviceIntegrationText: "Conexión entre sistemas mediante APIs, servicios SOAP y REST, integraciones SAP y plataformas internas.",
    serviceDataTitle: "Automatización y datos",
    serviceDataText: "Automatización de tareas repetitivas, consolidación de información, indicadores, tableros y estructuras de datos para decidir mejor.",
    serviceProductTitle: "Diseño de productos digitales",
    serviceProductText: "Definición, prototipado y construcción de productos digitales preparados para evolucionar por etapas.",
    experienceEyebrow: "Experiencia técnica",
    experienceTitle: "Experiencia construyendo software para operación real",
    experienceTextA: "La capacidad de INNOVASOFT GT nace de resolver necesidades prácticas: sistemas administrativos, procesos financieros, flujos de recursos humanos, integraciones con plataformas empresariales, reporterías y automatizaciones que deben funcionar en el día a día.",
    experienceTextB: "No vendemos plantillas. Analizamos reglas, dependencias, datos, usuarios, permisos e integraciones para construir soluciones mantenibles y preparadas para crecer.",
    expFinanceEyebrow: "Finanzas",
    expFinanceTitle: "Crédito, pagos, cartera y cobros",
    expFinanceText: "Modelado de flujos financieros, validaciones, estados, reportes, control operativo y seguimiento de información crítica.",
    expOperationEyebrow: "Operación",
    expOperationTitle: "Administración y recursos humanos",
    expOperationText: "Procesos internos, solicitudes, aprobaciones, expedientes, trazabilidad, roles y automatización de tareas recurrentes.",
    expIntegrationEyebrow: "Integración",
    expIntegrationTitle: "SAP, APIs, SOAP y REST",
    expIntegrationText: "Conexión entre sistemas empresariales, servicios externos, bases de datos, plataformas internas y productos digitales.",
    expProductEyebrow: "Producto",
    expProductTitle: "Frontend, backend y arquitectura",
    expProductText: "Interfaces claras, servicios mantenibles, documentación, pruebas, despliegues y evolución por etapas.",
    capEnterprise: "Sistemas empresariales",
    capDatabases: "Bases de datos",
    capReports: "Reportería",
    capIndicators: "Indicadores",
    capAutomation: "Automatización",
    capDocs: "Documentación",
    capDeployments: "Despliegues",
    trustEyebrow: "Cómo trabajamos",
    trustTitle: "Claridad técnica antes de escribir código",
    trustProcessTitle: "Entendemos el proceso",
    trustProcessText: "Levantamos reglas, excepciones, usuarios, aprobaciones, datos y puntos de integración antes de proponer una solución.",
    trustBuildTitle: "Construimos con criterio",
    trustBuildText: "Priorizamos arquitectura simple, mantenible, documentada y alineada a la operación real de la organización.",
    trustEvolveTitle: "Evolucionamos el sistema",
    trustEvolveText: "El software queda preparado para mejorar por etapas conforme cambian los procesos, el volumen y las necesidades.",
    scopeEyebrow: "Software internacional desde Guatemala",
    scopeTitle: "Capacidad local para proyectos con visión global",
    scopeText: "Acompañamos a empresas que necesitan productos preparados para operar en distintos mercados, con arquitectura escalable, integración entre equipos y prácticas profesionales de entrega.",
    scopeDeliveryTitle: "Entrega remota y colaborativa",
    scopeDeliveryText: "Trabajo por hitos, reuniones ejecutivas, tableros de avance, documentación clara y comunicación ordenada para equipos locales o internacionales.",
    scopeArchitectureTitle: "Arquitectura preparada para crecer",
    scopeArchitectureText: "Diseño de módulos, APIs, bases de datos e integraciones pensando en mantenimiento, seguridad, escalabilidad y evolución del negocio.",
    scopeMarketsTitle: "Adaptación a mercados",
    scopeMarketsText: "Soluciones listas para múltiples monedas, idiomas, permisos, reportes, zonas horarias y reglas operativas según el país o industria.",
    standardsEyebrow: "Estándares profesionales",
    standardsTitle: "Lo que un proyecto serio necesita desde el inicio",
    standardsText: "Además de programar, cuidamos los elementos que hacen que una solución sea confiable para operar, auditar, mantener y presentar ante clientes, socios o equipos internos.",
    standardsDiscoveryTitle: "Descubrimiento y alcance",
    standardsDiscoveryText: "Definición de objetivos, usuarios, flujos, restricciones, prioridades y entregables antes de iniciar el desarrollo.",
    standardsSecurityTitle: "Seguridad y control",
    standardsSecurityText: "Roles, permisos, trazabilidad, respaldos, validaciones y criterios de acceso adecuados para cada operación.",
    standardsQualityTitle: "Calidad y continuidad",
    standardsQualityText: "Pruebas, documentación, despliegues ordenados, soporte evolutivo y transferencia de conocimiento.",
    initiativeEyebrow: "Innovación propia",
    initiativeText: "Iniciativa tecnológica orientada a fortalecer la experiencia de descubrir Guatemala y generar nuevas formas de conexión entre personas, destinos y oportunidades locales.",
    initiativeStatusA: "Iniciativa en desarrollo.",
    initiativeStatusB: "En etapa de estructuración estratégica.",
    initiativeStatusC: "En búsqueda de alianzas para validación y desarrollo.",
    initiativeStatusD: "Propuesta independiente de INNOVASOFT GT.",
    processEyebrow: "Proceso de trabajo",
    processTitle: "De problema operativo a solución evolutiva",
    processUnderstandTitle: "Entender",
    processUnderstandText: "Analizamos el problema, el contexto operativo y las reglas que debe respetar la solución.",
    processDesignTitle: "Diseñar",
    processDesignText: "Definimos alcance, arquitectura, flujos, integraciones y una ruta de desarrollo clara.",
    processBuildTitle: "Construir",
    processBuildText: "Desarrollamos por etapas, validando funcionalidad, calidad, seguridad y facilidad de uso.",
    processEvolveTitle: "Evolucionar",
    processEvolveText: "Mejoramos el sistema conforme crecen la operación, los usuarios y las necesidades del negocio.",
    seoEyebrow: "Soluciones para empresas",
    seoTitle: "Desarrollo de software a la medida en Guatemala",
    seoText: "INNOVASOFT GT apoya a empresas, organizaciones e instituciones que necesitan crear o mejorar sistemas digitales para administrar procesos, integrar plataformas, automatizar tareas y convertir información operativa en reportes útiles.",
    seoInternalTitle: "Para operaciones internas",
    seoInternalText: "Sistemas administrativos, portales web, flujos de aprobación, recursos humanos, expedientes, permisos, trazabilidad y gestión documental.",
    seoFinanceTitle: "Para procesos financieros",
    seoFinanceText: "Software financiero, crédito, pagos, cartera, cobros, conciliaciones, indicadores, controles operativos y reportería gerencial.",
    seoDataTitle: "Para integraciones y datos",
    seoDataText: "Integraciones SAP, APIs REST, servicios SOAP, bases de datos, sincronización de sistemas, automatización de procesos y tableros de indicadores.",
    contactEyebrow: "Contacto",
    contactTitle: "Solicita información sobre tu proyecto",
    contactText: "Para conversar sobre una solución, alianza o necesidad técnica, escribe al correo de contacto con una breve descripción del proceso, sistema o idea que quieres desarrollar.",
    contactRole: "Desarrollo de Software",
    contactNote: "Canal principal para solicitudes de información, propuestas y reuniones técnicas.",
    footerTagline: "Software con propósito. Tecnología con dirección."
  },
  en: {
    pageTitle: "INNOVASOFT GT | Custom Software Development in Guatemala",
    metaDescription: "INNOVASOFT GT builds custom software in Guatemala: web platforms, administrative systems, financial software, HR workflows, APIs, automation and SAP integrations.",
    skip: "Skip to main content",
    menuLabel: "Open navigation",
    languageLabel: "Select language",
    navServices: "Services",
    navExperience: "Experience",
    navScope: "Global scope",
    navInitiatives: "Initiatives",
    navProcess: "Process",
    navContact: "Contact",
    navTalk: "Let's talk",
    heroEyebrow: "Software development in Guatemala",
    heroTitle: "We turn complex processes into software that works.",
    heroText: "We design, build and integrate custom digital solutions for organizations that need to organize operations, connect systems, automate workflows and turn ideas into real products.",
    heroPrimary: "Request information",
    heroSecondary: "Explore our experience",
    focusFinance: "Financial software",
    focusHr: "Human resources",
    focusSap: "SAP integrations",
    nodeCustom: "Custom software",
    nodeOperation: "Operations",
    nodeIntegrations: "Integrations",
    nodeProduct: "Product",
    nodeIntegrable: "Integrable",
    nodeScalable: "Scalable",
    servicesEyebrow: "Services",
    servicesTitle: "Technology solutions for better operations",
    servicesText: "We build clear, useful and integrable software aligned with each organization's real problem.",
    serviceCustomTitle: "Custom software",
    serviceCustomText: "Applications, portals and internal systems built around real business rules, users, permissions, workflows and reporting.",
    serviceFinanceTitle: "Financial solutions",
    serviceFinanceText: "Tools for credit, payments, portfolio, collections, reconciliations, operational tracking, traceability and control reporting.",
    serviceHrTitle: "Human resources",
    serviceHrText: "Digital workflows for requests, approvals, administrative controls, records, indicators and internal people processes.",
    serviceIntegrationTitle: "Enterprise integrations",
    serviceIntegrationText: "System connectivity through APIs, SOAP and REST services, SAP integrations and internal platforms.",
    serviceDataTitle: "Automation and data",
    serviceDataText: "Automation of repetitive tasks, information consolidation, indicators, dashboards and data structures for better decisions.",
    serviceProductTitle: "Digital product design",
    serviceProductText: "Definition, prototyping and development of digital products prepared to evolve in stages.",
    experienceEyebrow: "Technical experience",
    experienceTitle: "Experience building software for real operations",
    experienceTextA: "INNOVASOFT GT's capability comes from solving practical needs: administrative systems, financial processes, HR workflows, enterprise integrations, reporting and automations that must work every day.",
    experienceTextB: "We do not sell templates. We analyze rules, dependencies, data, users, permissions and integrations to build maintainable solutions prepared to grow.",
    expFinanceEyebrow: "Finance",
    expFinanceTitle: "Credit, payments, portfolio and collections",
    expFinanceText: "Financial workflow modeling, validations, statuses, reports, operational control and tracking of critical information.",
    expOperationEyebrow: "Operations",
    expOperationTitle: "Administration and human resources",
    expOperationText: "Internal processes, requests, approvals, records, traceability, roles and automation of recurring tasks.",
    expIntegrationEyebrow: "Integration",
    expIntegrationTitle: "SAP, APIs, SOAP and REST",
    expIntegrationText: "Connectivity between enterprise systems, external services, databases, internal platforms and digital products.",
    expProductEyebrow: "Product",
    expProductTitle: "Frontend, backend and architecture",
    expProductText: "Clear interfaces, maintainable services, documentation, testing, deployments and staged evolution.",
    capEnterprise: "Enterprise systems",
    capDatabases: "Databases",
    capReports: "Reporting",
    capIndicators: "Indicators",
    capAutomation: "Automation",
    capDocs: "Documentation",
    capDeployments: "Deployments",
    trustEyebrow: "How we work",
    trustTitle: "Technical clarity before writing code",
    trustProcessTitle: "We understand the process",
    trustProcessText: "We map rules, exceptions, users, approvals, data and integration points before proposing a solution.",
    trustBuildTitle: "We build with criteria",
    trustBuildText: "We prioritize simple, maintainable, documented architecture aligned with the organization's real operation.",
    trustEvolveTitle: "We evolve the system",
    trustEvolveText: "The software is prepared to improve in stages as processes, volume and needs change.",
    scopeEyebrow: "International software from Guatemala",
    scopeTitle: "Local capability for projects with a global vision",
    scopeText: "We support companies that need products prepared to operate in different markets, with scalable architecture, team integration and professional delivery practices.",
    scopeDeliveryTitle: "Remote and collaborative delivery",
    scopeDeliveryText: "Milestone-based work, executive meetings, progress boards, clear documentation and organized communication for local or international teams.",
    scopeArchitectureTitle: "Architecture prepared to grow",
    scopeArchitectureText: "Design of modules, APIs, databases and integrations with maintainability, security, scalability and business evolution in mind.",
    scopeMarketsTitle: "Market adaptation",
    scopeMarketsText: "Solutions ready for multiple currencies, languages, permissions, reports, time zones and operating rules according to country or industry.",
    standardsEyebrow: "Professional standards",
    standardsTitle: "What a serious project needs from the beginning",
    standardsText: "Beyond programming, we care for the elements that make a solution reliable to operate, audit, maintain and present to clients, partners or internal teams.",
    standardsDiscoveryTitle: "Discovery and scope",
    standardsDiscoveryText: "Definition of objectives, users, workflows, constraints, priorities and deliverables before development begins.",
    standardsSecurityTitle: "Security and control",
    standardsSecurityText: "Roles, permissions, traceability, backups, validations and access criteria suited to each operation.",
    standardsQualityTitle: "Quality and continuity",
    standardsQualityText: "Testing, documentation, organized deployments, evolutionary support and knowledge transfer.",
    initiativeEyebrow: "Internal innovation",
    initiativeText: "A technology initiative aimed at strengthening the experience of discovering Guatemala and creating new forms of connection between people, destinations and local opportunities.",
    initiativeStatusA: "Initiative in development.",
    initiativeStatusB: "In strategic structuring stage.",
    initiativeStatusC: "Seeking alliances for validation and development.",
    initiativeStatusD: "Independent proposal by INNOVASOFT GT.",
    processEyebrow: "Work process",
    processTitle: "From operational problem to evolving solution",
    processUnderstandTitle: "Understand",
    processUnderstandText: "We analyze the problem, operational context and the rules the solution must respect.",
    processDesignTitle: "Design",
    processDesignText: "We define scope, architecture, workflows, integrations and a clear development path.",
    processBuildTitle: "Build",
    processBuildText: "We develop in stages, validating functionality, quality, security and ease of use.",
    processEvolveTitle: "Evolve",
    processEvolveText: "We improve the system as the operation, users and business needs grow.",
    seoEyebrow: "Business solutions",
    seoTitle: "Custom software development in Guatemala",
    seoText: "INNOVASOFT GT supports companies, organizations and institutions that need to create or improve digital systems to manage processes, integrate platforms, automate tasks and turn operational information into useful reports.",
    seoInternalTitle: "For internal operations",
    seoInternalText: "Administrative systems, web portals, approval workflows, human resources, records, permissions, traceability and document management.",
    seoFinanceTitle: "For financial processes",
    seoFinanceText: "Financial software, credit, payments, portfolio, collections, reconciliations, indicators, operational controls and management reporting.",
    seoDataTitle: "For integrations and data",
    seoDataText: "SAP integrations, REST APIs, SOAP services, databases, system synchronization, process automation and indicator dashboards.",
    contactEyebrow: "Contact",
    contactTitle: "Request information about your project",
    contactText: "To discuss a solution, alliance or technical need, email us with a brief description of the process, system or idea you want to develop.",
    contactRole: "Software Development",
    contactNote: "Main channel for information requests, proposals and technical meetings.",
    footerTagline: "Software with purpose. Technology with direction."
  }
};

function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  navPanel?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

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
    const isSelected = button.dataset.langOption === language;
    button.setAttribute("aria-pressed", String(isSelected));
  });

  decorateInitialLetters();

  try {
    localStorage.setItem("innovasoftgt-language", language);
  } catch {
    // The site still works when browser storage is unavailable.
  }
}

function decorateInitialLetters() {
  document.querySelectorAll("h1, h2, h3").forEach((heading) => {
    const text = heading.textContent?.trim();
    if (!text) return;

    heading.textContent = "";

    const firstLetter = document.createElement("span");
    firstLetter.className = "animated-initial";
    firstLetter.textContent = text.slice(0, 1);

    const rest = document.createElement("span");
    rest.textContent = text.slice(1);

    heading.append(firstLetter, rest);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption === "en" ? "en" : "es");
    setMenu(false);
  });
});

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
    { threshold: 0.14 }
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
