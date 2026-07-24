const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = document.querySelectorAll("[data-nav-panel] a");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableLabels = document.querySelectorAll("[data-i18n-aria-label]");
const revealTargets = document.querySelectorAll(
  ".section, .service-card, .experience-stack article, .trust-grid article, .process-grid article, .seo-columns article, .initiative-card, .contact-card"
);

const translations = {
  es: {
    pageTitle: "INNOVASOFT GT | Desarrollo de software a la medida en Guatemala",
    metaDescription: "INNOVASOFT GT desarrolla software a la medida en Guatemala: plataformas web, sistemas administrativos, software financiero, recursos humanos, APIs, automatizacion e integraciones SAP.",
    skip: "Saltar al contenido principal",
    menuLabel: "Abrir navegacion",
    languageLabel: "Seleccionar idioma",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navInitiatives: "Iniciativas",
    navProcess: "Proceso",
    navContact: "Contacto",
    navTalk: "Hablemos",
    heroEyebrow: "Desarrollo de software en Guatemala",
    heroTitle: "Convertimos procesos complejos en software que si funciona.",
    heroText: "Disenamos, desarrollamos e integramos soluciones digitales a la medida para organizaciones que necesitan ordenar su operacion, conectar sistemas, automatizar flujos y transformar ideas en productos reales.",
    heroPrimary: "Solicitar informacion",
    heroSecondary: "Conocer nuestra experiencia",
    focusFinance: "Software financiero",
    focusHr: "Recursos humanos",
    focusSap: "Integraciones SAP",
    nodeCustom: "Software a la medida",
    nodeOperation: "Operacion",
    nodeIntegrations: "Integraciones",
    nodeProduct: "Producto",
    nodeIntegrable: "Integrable",
    nodeScalable: "Escalable",
    servicesEyebrow: "Servicios",
    servicesTitle: "Soluciones tecnologicas para operar mejor",
    servicesText: "Construimos software claro, util e integrable, alineado al problema real de cada organizacion.",
    serviceCustomTitle: "Software a la medida",
    serviceCustomText: "Aplicaciones, portales y sistemas internos construidos alrededor de reglas reales de negocio, usuarios, permisos, flujos y reportes.",
    serviceFinanceTitle: "Soluciones financieras",
    serviceFinanceText: "Herramientas para credito, pagos, cartera, cobros, conciliaciones, seguimiento operativo, trazabilidad y reporterias de control.",
    serviceHrTitle: "Recursos humanos",
    serviceHrText: "Digitalizacion de solicitudes, aprobaciones, controles administrativos, expedientes, indicadores y procesos internos de gestion humana.",
    serviceIntegrationTitle: "Integraciones empresariales",
    serviceIntegrationText: "Conexion entre sistemas mediante APIs, servicios SOAP y REST, integraciones SAP y plataformas internas.",
    serviceDataTitle: "Automatizacion y datos",
    serviceDataText: "Automatizacion de tareas repetitivas, consolidacion de informacion, indicadores, tableros y estructuras de datos para decidir mejor.",
    serviceProductTitle: "Diseno de productos digitales",
    serviceProductText: "Definicion, prototipado y construccion de productos digitales preparados para evolucionar por etapas.",
    experienceEyebrow: "Experiencia tecnica",
    experienceTitle: "Experiencia construyendo software para operacion real",
    experienceTextA: "La capacidad de INNOVASOFT GT nace de resolver necesidades practicas: sistemas administrativos, procesos financieros, flujos de recursos humanos, integraciones con plataformas empresariales, reporterias y automatizaciones que deben funcionar en el dia a dia.",
    experienceTextB: "No vendemos plantillas. Analizamos reglas, dependencias, datos, usuarios, permisos e integraciones para construir soluciones mantenibles y preparadas para crecer.",
    expFinanceEyebrow: "Finanzas",
    expFinanceTitle: "Credito, pagos, cartera y cobros",
    expFinanceText: "Modelado de flujos financieros, validaciones, estados, reportes, control operativo y seguimiento de informacion critica.",
    expOperationEyebrow: "Operacion",
    expOperationTitle: "Administracion y recursos humanos",
    expOperationText: "Procesos internos, solicitudes, aprobaciones, expedientes, trazabilidad, roles y automatizacion de tareas recurrentes.",
    expIntegrationEyebrow: "Integracion",
    expIntegrationTitle: "SAP, APIs, SOAP y REST",
    expIntegrationText: "Conexion entre sistemas empresariales, servicios externos, bases de datos, plataformas internas y productos digitales.",
    expProductEyebrow: "Producto",
    expProductTitle: "Frontend, backend y arquitectura",
    expProductText: "Interfaces claras, servicios mantenibles, documentacion, pruebas, despliegues y evolucion por etapas.",
    capEnterprise: "Sistemas empresariales",
    capDatabases: "Bases de datos",
    capReports: "Reporteria",
    capIndicators: "Indicadores",
    capAutomation: "Automatizacion",
    capDocs: "Documentacion",
    capDeployments: "Despliegues",
    trustEyebrow: "Como trabajamos",
    trustTitle: "Claridad tecnica antes de escribir codigo",
    trustProcessTitle: "Entendemos el proceso",
    trustProcessText: "Levantamos reglas, excepciones, usuarios, aprobaciones, datos y puntos de integracion antes de proponer una solucion.",
    trustBuildTitle: "Construimos con criterio",
    trustBuildText: "Priorizamos arquitectura simple, mantenible, documentada y alineada a la operacion real de la organizacion.",
    trustEvolveTitle: "Evolucionamos el sistema",
    trustEvolveText: "El software queda preparado para mejorar por etapas conforme cambian los procesos, el volumen y las necesidades.",
    initiativeEyebrow: "Innovacion propia",
    initiativeText: "Iniciativa tecnologica orientada a fortalecer la experiencia de descubrir Guatemala y generar nuevas formas de conexion entre personas, destinos y oportunidades locales.",
    initiativeStatusA: "Iniciativa en desarrollo.",
    initiativeStatusB: "En etapa de estructuracion estrategica.",
    initiativeStatusC: "En busqueda de alianzas para validacion y desarrollo.",
    initiativeStatusD: "Propuesta independiente de INNOVASOFT GT.",
    processEyebrow: "Proceso de trabajo",
    processTitle: "De problema operativo a solucion evolutiva",
    processUnderstandTitle: "Entender",
    processUnderstandText: "Analizamos el problema, el contexto operativo y las reglas que debe respetar la solucion.",
    processDesignTitle: "Disenar",
    processDesignText: "Definimos alcance, arquitectura, flujos, integraciones y una ruta de desarrollo clara.",
    processBuildTitle: "Construir",
    processBuildText: "Desarrollamos por etapas, validando funcionalidad, calidad, seguridad y facilidad de uso.",
    processEvolveTitle: "Evolucionar",
    processEvolveText: "Mejoramos el sistema conforme crecen la operacion, los usuarios y las necesidades del negocio.",
    seoEyebrow: "Soluciones para empresas",
    seoTitle: "Desarrollo de software a la medida en Guatemala",
    seoText: "INNOVASOFT GT apoya a empresas, organizaciones e instituciones que necesitan crear o mejorar sistemas digitales para administrar procesos, integrar plataformas, automatizar tareas y convertir informacion operativa en reportes utiles.",
    seoInternalTitle: "Para operaciones internas",
    seoInternalText: "Sistemas administrativos, portales web, flujos de aprobacion, recursos humanos, expedientes, permisos, trazabilidad y gestion documental.",
    seoFinanceTitle: "Para procesos financieros",
    seoFinanceText: "Software financiero, credito, pagos, cartera, cobros, conciliaciones, indicadores, controles operativos y reporteria gerencial.",
    seoDataTitle: "Para integraciones y datos",
    seoDataText: "Integraciones SAP, APIs REST, servicios SOAP, bases de datos, sincronizacion de sistemas, automatizacion de procesos y tableros de indicadores.",
    contactEyebrow: "Contacto",
    contactTitle: "Solicita informacion sobre tu proyecto",
    contactText: "Para conversar sobre una solucion, alianza o necesidad tecnica, escribe al correo de contacto con una breve descripcion del proceso, sistema o idea que quieres desarrollar.",
    contactRole: "Desarrollo de Software",
    contactNote: "Canal principal para solicitudes de informacion, propuestas y reuniones tecnicas.",
    footerTagline: "Software con proposito. Tecnologia con direccion."
  },
  en: {
    pageTitle: "INNOVASOFT GT | Custom Software Development in Guatemala",
    metaDescription: "INNOVASOFT GT builds custom software in Guatemala: web platforms, administrative systems, financial software, HR workflows, APIs, automation and SAP integrations.",
    skip: "Skip to main content",
    menuLabel: "Open navigation",
    languageLabel: "Select language",
    navServices: "Services",
    navExperience: "Experience",
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

  try {
    localStorage.setItem("innovasoftgt-language", language);
  } catch {
    // The site still works when browser storage is unavailable.
  }
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
