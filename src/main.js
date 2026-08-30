const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const header = document.querySelector("[data-header]");
const progressBar = document.querySelector("[data-scroll-progress]");
const demoTabs = [...document.querySelectorAll("[data-demo]")];
const demoPanels = [...document.querySelectorAll("[data-demo-panel]")];
const demoCount = document.querySelector("[data-demo-count]");
const toast = document.querySelector("[data-toast]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  es: {
    pageTitle: "Nómada | Tu pasaporte de aventuras en Guatemala",
    metaDescription: "Descubre Guatemala, recorre rutas, valida tus visitas y colecciona sellos e insignias en tu pasaporte digital. Nómada llegará muy pronto a iOS y Android."
  },
  en: {
    pageTitle: "Nómada | Your adventure passport for Guatemala",
    metaDescription: "Discover Guatemala, follow routes, verify visits and collect stamps and badges in your digital passport. Nómada is coming soon to iOS and Android.",
    skip: "Skip to content", brandBy: "by INNOVASOFT GT", navExperience: "The experience", navPassport: "Passport", navTravel: "Travel prepared", navCommunity: "Community", navNotify: "Notify me",
    heroEyebrow: "Your next story starts here", heroTitleA: "Guatemala is not just visited.", heroTitleB: "It is collected.", heroText: "Discover places, follow routes, verify every adventure and fill your digital passport with stamps that prove everything you have experienced.", heroPrimary: "I want early access", heroSecondary: "Explore the experience", soonIn: "Coming soon to", hello: "Hello, explorer", whereNext: "Where are we going today?", searchPlace: "Search a destination or route", recommended: "Recommended for you", progressLabel: "Your progress",
    manifesto: "The map starts the adventure. The passport keeps your progress. Every stamp awakens the desire to discover one more place.", manifestoNote: "It is not another travel directory. It is the verifiable, collectible and shareable story of your journey.", experienceEyebrow: "One adventure, five moments", experienceTitle: "Your journey comes alive in Nómada", experienceText: "From the first idea to the stamp that stays forever. Tap each stage and discover how the app will feel.",
    stepDiscover: "Discover", stepDiscoverText: "Find something you did not know you were looking for.", stepPlan: "Plan", stepPlanText: "Prices, hours, route and what to bring.", stepVisit: "Visit", stepVisitText: "Confirm your arrival with GPS and QR.", stepCollect: "Collect", stepCollectText: "Receive stamps, points and badges.", stepRemember: "Remember", stepRememberText: "Save photos, notes and share your achievement.", nearYou: "NEAR YOU", placesCalling: "Places calling your name", yourRoute: "YOUR ROUTE", routeReady: "Everything you need before leaving.", validateVisit: "VERIFY VISIT", youArrived: "You made it!", stampPassport: "Stamp my passport", newStamp: "NEW STAMP", adventureConfirmed: "Adventure confirmed", yourMemory: "YOUR MEMORY", memoryCopy: "A view worth keeping with you.", privateByDefault: "Private until you choose to share", demoHint: "Select a stage to explore the experience.",
    passportEyebrow: "Your story, made into a passport", passportTitle: "Every place leaves a mark.", passportText: "Your verified visits become stamps. Complete routes, discover departments and unlock badges that reveal the traveler you are.", passportOne: "Progress by department", passportOneText: "See how much of Guatemala is already part of you.", passportTwo: "Badges with personality", passportTwoText: "Adventurer, Foodie or Volcano Conqueror.", passportThree: "Achievements to share", passportThreeText: "Celebrate your path without revealing private locations.", stamps: "stamps", recentStamps: "RECENT STAMPS", nextAdventure: "NEXT ADVENTURE", simulateStamp: "Simulate a new stamp",
    travelEyebrow: "Confidence on the road", travelTitle: "Travel prepared, even without signal.", travelText: "Save the essentials of a route and access useful information when coverage disappears.", offlineTitle: "Your routes travel with you", offlineText: "Download stops, essential details and useful contacts before leaving.", freshInfoTitle: "Information with context", freshInfoText: "Prices, hours, difficulty, recommended gear and verification date.", privacyTitle: "Your location is yours", privacyText: "The app requests your location only for a clear benefit and never publishes your exact position by default.", navigateTitle: "Arrive with your favorite map", navigateText: "Open navigation without being locked to a single provider.",
    communityEyebrow: "Real experiences", communityTitle: "Memories that remain.", communityText: "Create albums by trip, keep notes and photos private or share achievements with friends and explorers. You decide who sees each story.", albums: "Adventure albums", privacyLevels: "Privacy levels", travelerIdentity: "Traveler identity", worldEyebrow: "Guatemala is the first chapter", worldTitle: "A passport that does not end at the border.", worldText: "Nómada is born to explore Guatemala and dreams of joining you, chapter by chapter, through new countries and new stories.",
    soonEyebrow: "The adventure is about to begin", soonTitle: "Be among the first to fill your passport.", soonText: "Nómada is coming soon to iOS and Android. Write to us and we will let you know when the first route is ready.", soonButton: "Tell me first", soonNote: "No forms. Just a conversation when we have news.", footerText: "Made in Guatemala for those who never stop exploring.", toastTitle: "New stamp unlocked!", toastText: "Your passport keeps growing."
  }
};

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  navPanel?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navPanel?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
});
navPanel?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const ratio = scrollable > 0 ? scrollY / scrollable : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, ratio * 100)}%`;
  header?.classList.toggle("is-scrolled", scrollY > 20);
}
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

function activateDemo(name) {
  demoTabs.forEach((tab) => {
    const active = tab.dataset.demo === name;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  demoPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.demoPanel === name));
  const index = demoTabs.findIndex((tab) => tab.dataset.demo === name);
  if (demoCount && index >= 0) demoCount.textContent = String(index + 1).padStart(2, "0");
}

let demoTimer;
function startDemoRotation() {
  if (reduceMotion || demoTabs.length === 0) return;
  clearInterval(demoTimer);
  demoTimer = setInterval(() => {
    const current = demoTabs.findIndex((tab) => tab.classList.contains("is-active"));
    activateDemo(demoTabs[(current + 1) % demoTabs.length].dataset.demo);
  }, 5200);
}
demoTabs.forEach((tab) => tab.addEventListener("click", () => { activateDemo(tab.dataset.demo); startDemoRotation(); }));
startDemoRotation();

function showToast() {
  toast?.classList.add("is-visible");
  window.setTimeout(() => toast?.classList.remove("is-visible"), 3200);
}
document.querySelector("[data-stamp-button]")?.addEventListener("click", () => {
  activateDemo("collect");
  const stamp = document.querySelector("[data-big-stamp]");
  stamp?.classList.remove("is-stamped");
  requestAnimationFrame(() => stamp?.classList.add("is-stamped"));
  showToast();
});

let simulatedStamps = 8;
document.querySelector("[data-add-stamp]")?.addEventListener("click", () => {
  if (simulatedStamps < 9) simulatedStamps += 1;
  const score = document.querySelector("[data-passport-score]");
  if (score) score.textContent = String(simulatedStamps).padStart(2, "0");
  const unlockedStamp = document.querySelector(".stamp-locked");
  if (unlockedStamp) {
    unlockedStamp.classList.remove("stamp-locked");
    unlockedStamp.classList.add("stamp-coral");
    unlockedStamp.querySelector("b").textContent = "SEMUC";
    unlockedStamp.querySelector("span").textContent = "≋";
    unlockedStamp.querySelector("small").textContent = "ALTA VERAPAZ";
  }
  showToast();
});

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((element) => revealObserver ? revealObserver.observe(element) : element.classList.add("is-visible"));

function applyLanguage(language) {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language === "en" ? "en" : "es-GT";
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const spanish = node.dataset.es || node.textContent;
    if (!node.dataset.es) node.dataset.es = spanish;
    node.textContent = language === "en" && dictionary[key] ? dictionary[key] : node.dataset.es;
  });
  document.querySelectorAll("[data-lang-option]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.langOption === language)));
  try { localStorage.setItem("nomada-language", language); } catch { /* Preference storage is optional. */ }
}

document.querySelectorAll("[data-lang-option]").forEach((button) => button.addEventListener("click", () => { applyLanguage(button.dataset.langOption); closeMenu(); }));
let savedLanguage = "es";
try { savedLanguage = localStorage.getItem("nomada-language") || "es"; } catch { savedLanguage = "es"; }
applyLanguage(savedLanguage === "en" ? "en" : "es");
