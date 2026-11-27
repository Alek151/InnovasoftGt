const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const header = document.querySelector("[data-header]");
const progressBar = document.querySelector("[data-scroll-progress]");
const demoTabs = [...document.querySelectorAll("[data-demo]")];
const demoPanels = [...document.querySelectorAll("[data-demo-panel]")];
const demoCount = document.querySelector("[data-demo-count]");
const toast = document.querySelector("[data-toast]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// El mapa es el primer momento de la historia: se presenta justo después del manifiesto.
const manifestoSection = document.querySelector(".manifesto");
const explorerSection = document.querySelector("#explora");
if (manifestoSection && explorerSection) manifestoSection.insertAdjacentElement("afterend", explorerSection);

const translations = {
  es: {
    pageTitle: "Nómada | Tu pasaporte de aventuras en Guatemala",
    metaDescription: "Descubre Guatemala, recorre rutas, valida tus visitas y colecciona sellos e insignias en tu pasaporte digital. Nómada llegará muy pronto a iOS y Android."
  },
  en: {
    pageTitle: "Nómada | Your adventure passport for Guatemala",
    metaDescription: "Discover Guatemala, follow routes, verify visits and collect stamps and badges in your digital passport. Nómada is coming soon to iOS and Android.",
    skip: "Skip to content", brandBy: "by INNOVASOFT GT", navExperience: "The experience", navPassport: "Passport", navExplore: "Explore the map", navTravel: "Travel prepared", navCommunity: "Community", navNotify: "Notify me",
    heroEyebrow: "Your next story starts here", heroTitleA: "Guatemala is not just visited.", heroTitleB: "It is collected.", heroText: "Discover places, follow routes, verify every adventure and fill your digital passport with stamps that prove everything you have experienced.", heroPrimary: "I want early access", heroSecondary: "Explore the experience", soonIn: "Coming soon to", hello: "Hello, explorer", whereNext: "Where are we going today?", searchPlace: "Search a destination or route", recommended: "Recommended for you", progressLabel: "Your progress",
    manifesto: "The map starts the adventure. The passport keeps your progress. Every stamp awakens the desire to discover one more place.", manifestoNote: "It is not another travel directory. It is the verifiable, collectible and shareable story of your journey.", experienceEyebrow: "One adventure, five moments", experienceTitle: "Your journey comes alive in Nómada", experienceText: "From the first idea to the stamp that stays forever. Tap each stage and discover how the app will feel.",
    stepDiscover: "Discover", stepDiscoverText: "Find something you did not know you were looking for.", stepPlan: "Plan", stepPlanText: "Prices, hours, route and what to bring.", stepVisit: "Visit", stepVisitText: "Confirm your arrival with GPS and QR.", stepCollect: "Collect", stepCollectText: "Receive stamps, points and badges.", stepRemember: "Remember", stepRememberText: "Save photos, notes and share your achievement.", nearYou: "NEAR YOU", placesCalling: "Places calling your name", yourRoute: "YOUR ROUTE", routeReady: "Everything you need before leaving.", validateVisit: "VERIFY VISIT", youArrived: "You made it!", stampPassport: "Stamp my passport", newStamp: "NEW STAMP", adventureConfirmed: "Adventure confirmed", yourMemory: "YOUR MEMORY", memoryCopy: "A view worth keeping with you.", privateByDefault: "Private until you choose to share", demoHint: "Select a stage to explore the experience.",
    passportEyebrow: "Your story, made into a passport", passportTitle: "Every place leaves a mark.", passportText: "Your verified visits become stamps. Complete routes, discover departments and unlock badges that reveal the traveler you are.", passportOne: "Progress by department", passportOneText: "See how much of Guatemala is already part of you.", passportTwo: "Badges with personality", passportTwoText: "Adventurer, Foodie or Volcano Conqueror.", passportThree: "Achievements to share", passportThreeText: "Celebrate your path without revealing private locations.", stamps: "stamps", recentStamps: "RECENT STAMPS", nextAdventure: "NEXT ADVENTURE", simulateStamp: "Simulate a new stamp",
    travelEyebrow: "Confidence on the road", travelTitle: "Travel prepared, even without signal.", travelText: "Save the essentials of a route and access useful information when coverage disappears.", offlineTitle: "Your routes travel with you", offlineText: "Download stops, essential details and useful contacts before leaving.", freshInfoTitle: "Information with context", freshInfoText: "Prices, hours, difficulty, recommended gear and verification date.", privacyTitle: "Your location is yours", privacyText: "The app requests your location only for a clear benefit and never publishes your exact position by default.", navigateTitle: "Arrive with your favorite map", navigateText: "Open navigation without being locked to a single provider.",
    communityEyebrow: "Real experiences", communityTitle: "Memories that remain.", communityText: "Create albums by trip, keep notes and photos private or share achievements with friends and explorers. You decide who sees each story.", albums: "Adventure albums", privacyLevels: "Privacy levels", travelerIdentity: "Traveler identity", worldEyebrow: "Guatemala is the first chapter", worldTitle: "A passport that does not end at the border.", worldText: "Nómada is born to explore Guatemala and dreams of joining you, chapter by chapter, through new countries and new stories.",
    soonEyebrow: "The adventure is about to begin", soonTitle: "Be among the first to fill your passport.", soonText: "Nómada is coming soon to iOS and Android. Write to us and we will let you know when the first route is ready.", soonButton: "Tell me first", soonNote: "No forms. Just a conversation when we have news.", footerText: "Made in Guatemala for those who never stop exploring.", toastTitle: "New stamp unlocked!", toastText: "Your passport keeps growing."
  }
};

Object.assign(translations.en, { soonOwnerLabel: "Holder", founderStamp: "Founder", perkEarly: "Early access to the app", perkStamp: "Founding traveler stamp", perkRoutes: "The first routes before anyone else", styleLabel: "Your travel style", styleAll: "A bit of everything", styleNature: "Nature", styleCulture: "Culture & history", styleFood: "Food", styleAdventure: "Adventure", footerCtaKicker: "Your next story", footerCtaTitle: "Guatemala is waiting for you.", footerExplore: "Explore", footerBusiness: "For businesses", footerBizApply: "Apply with your business", footerBizMap: "Appear on the map", footerAlliance: "Partnerships & routes", footerContact: "Contact", footerCA: "Central America", footerBackTop: "BACK TO TOP ✦ BACK TO TOP ✦ ", footerMade: "Made with ♥ in Guatemala", footerTag: "Discover · Visit · Stamp · Share" });
Object.assign(translations.en, { previewKicker: "Preview on Nómada", previewNew: "★ New on Nómada", progressDone: "complete", stepBusiness: "Your business", stepContact: "How do we reach you?", stepIdea: "Your idea", interestVisit: "Appear as a place to visit", interestRoute: "Be part of a route", interestOffers: "Offer perks to travelers", interestAlliance: "Explore a full partnership" });
Object.assign(translations.en, { ppName: "Name", ppLevel: "Level", ppLevelValue: "Volcano backpacker", ppDepartments: "of Guatemala's departments" });
Object.assign(translations.en, { offlineNoSignal: "No signal", offlineReady: "Your route is still available", offlineSaved: "Saved on your phone", verifiedAgo: "Verified 3 days ago", privacyApprox: "Approximate location", chapterOpen: "Chapter open", chapterNext: "Next destination", chapterDream: "The big dream", worldTwo: "Central America", worldThree: "The world", bpTitle: "Boarding pass · Nómada", bpPassenger: "Passenger", bpExplorer: "Explorer", bpGate: "Gate", bpSeat: "Seat" });
Object.assign(translations.en, { heroBadgeKicker: "New badge", heroBadge: "Volcano conqueror", progressUnit: "departments stamped" });

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
const SEMUC_STAMP = '<svg viewBox="0 0 120 120"><g filter="url(#inkRough)"><ellipse cx="60" cy="60" rx="56" ry="44" fill="none" stroke="currentColor" stroke-width="3.5"/><ellipse cx="60" cy="60" rx="50" ry="38" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="60" y="44" class="st-big">SEMUC</text><path d="M32 64c8-6 14 6 22 0s14 6 22 0 14 6 22 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><text x="60" y="84" class="st-small">ALTA VERAPAZ · HOY</text></g></svg>';
document.querySelector("[data-add-stamp]")?.addEventListener("click", () => {
  const book = document.querySelector("[data-passport-book]");
  const slot = document.querySelector("[data-stamp-slot].is-locked");
  if (!book || book.classList.contains("is-stamping")) return;
  if (!slot) { showToast(); return; }
  book.classList.add("is-stamping");
  window.setTimeout(() => {
    slot.classList.remove("is-locked");
    slot.className = "ink-stamp st-bougain just-stamped";
    slot.style.setProperty("--r", "8deg");
    slot.innerHTML = SEMUC_STAMP;
    simulatedStamps = 9;
    const score = document.querySelector("[data-passport-score]");
    if (score) score.textContent = "09";
    const percent = document.querySelector("[data-passport-percent]");
    if (percent) percent.textContent = "41";
    const cell = document.querySelector("[data-dept-grid] i:not(.on)");
    if (cell) { cell.style.setProperty("--c", "#c2417a"); cell.classList.add("on", "is-new"); }
    showToast();
  }, reduceMotion ? 0 : 620);
  window.setTimeout(() => book.classList.remove("is-stamping"), reduceMotion ? 0 : 1300);
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

const businessForm = document.querySelector("[data-business-form]");
const businessStatus = document.querySelector("[data-business-status]");
const NOMADA_API_URL = "https://api-nomada.innovasoftgt.com/api/v1";

// El mapa público usa únicamente el catálogo ligero: no expone ubicación de viajeros ni acciones de ruta.
const mapSection = document.querySelector("[data-explore-map-section]");
const mapCanvas = document.querySelector("[data-explore-map]");
const mapLoading = document.querySelector("[data-map-loading]");
const mapUnavailable = document.querySelector("[data-map-unavailable]");
const mapCountryFilter = document.querySelector("[data-country-filter]");
const mapPreview = document.querySelector("[data-destination-preview]");
const mapTotal = document.querySelector("[data-map-total]");
const mapSummary = document.querySelector("[data-map-summary]");
const mapCaption = document.querySelector("[data-map-caption]");
const runtimeMapsKey = String(window.NOMADA_RUNTIME_CONFIG?.googleMapsKey || "").trim();
const mapsKey = runtimeMapsKey.startsWith("__NOMADA_") ? "" : runtimeMapsKey;
const mapCachePrefix = "nomada-public-map-v1:";
const publicMapCache = new Map();
let googleMap;
let infoWindow;
let activeMarkers = [];
let mapScriptPromise;
let mapStarted = false;

// Destinos destacados: si el catálogo no responde, el mapa sigue mostrando una selección curada en vez de un error.
const FEATURED_DESTINATIONS = [
  { id: "f-antigua", name: "Antigua Guatemala", country: "Guatemala", category: "Cultura", latitude: 14.5586, longitude: -90.7295, shortDescription: "Calles empedradas, ruinas coloniales y volcanes en cada esquina." },
  { id: "f-atitlan", name: "Lago de Atitlán", country: "Guatemala", category: "Naturaleza", latitude: 14.6907, longitude: -91.2025, shortDescription: "Pueblos a la orilla del lago rodeados por tres volcanes." },
  { id: "f-tikal", name: "Tikal", country: "Guatemala", category: "Sitio arqueológico", latitude: 17.222, longitude: -89.6237, shortDescription: "Templos mayas que emergen sobre la selva de Petén." },
  { id: "f-semuc", name: "Semuc Champey", country: "Guatemala", category: "Parque nacional", latitude: 15.5333, longitude: -89.9606, shortDescription: "Pozas turquesa escalonadas sobre un puente natural de piedra." },
  { id: "f-acatenango", name: "Volcán Acatenango", country: "Guatemala", category: "Aventura", latitude: 14.5006, longitude: -90.8758, shortDescription: "Acampa frente al Volcán de Fuego y mira sus erupciones al amanecer." },
  { id: "f-chichi", name: "Chichicastenango", country: "Guatemala", category: "Cultura", latitude: 14.9433, longitude: -91.1111, shortDescription: "El mercado de colores y tradiciones más vivo del altiplano." },
  { id: "f-xela", name: "Quetzaltenango", country: "Guatemala", category: "Ciudad", latitude: 14.8347, longitude: -91.5181, shortDescription: "Arquitectura neoclásica, aguas termales y cumbres cercanas." },
  { id: "f-livingston", name: "Lívingston", country: "Guatemala", category: "Playa", latitude: 15.8269, longitude: -88.7506, shortDescription: "Cultura garífuna en el Caribe, solo accesible por el río o el mar." },
];
const GT_BOUNDS = { north: 17.95, south: 13.7, west: -92.3, east: -88.2 };

function renderIllustratedMap(destinations) {
  if (!mapCanvas) return;
  mapCanvas.querySelector(".map-sketch")?.remove();
  const sketch = document.createElement("div");
  sketch.className = "map-sketch";
  const points = destinations.map((destination) => ({ destination, position: positionOf(destination) })).filter((item) => item.position)
    .map((item) => ({ ...item, x: ((item.position.lng - GT_BOUNDS.west) / (GT_BOUNDS.east - GT_BOUNDS.west)) * 100, y: ((GT_BOUNDS.north - item.position.lat) / (GT_BOUNDS.north - GT_BOUNDS.south)) * 100 }));
  const route = [...points].sort((a, b) => a.x - b.x).map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  sketch.innerHTML = `<svg class="map-sketch-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="${route}"/></svg><span class="map-sketch-badge">Vista ilustrada · destinos favoritos</span>`
    + points.map((point, index) => `<button type="button" class="map-sketch-pin" style="--x:${point.x.toFixed(2)}%;--y:${point.y.toFixed(2)}%;--pin:${categoryPin[point.destination.category] || "#24634c"};--delay:${index * 90}ms" data-sketch-id="${escapeMapHtml(point.destination.id)}"><i aria-hidden="true"></i><span>${escapeMapHtml(point.destination.name)}</span></button>`).join("");
  sketch.querySelectorAll("[data-sketch-id]").forEach((button) => button.addEventListener("click", () => activateSketchPin(button.dataset.sketchId)));
  mapCanvas.append(sketch);
  mapSection?.classList.add("map-sketch-mode");
  if (points[0]) activateSketchPin(points[0].destination.id);
}

function activateSketchPin(id) {
  mapCanvas?.querySelectorAll(".map-sketch-pin").forEach((pin) => pin.classList.toggle("is-active", pin.dataset.sketchId === String(id)));
  mapPreview?.querySelectorAll("[data-preview-destination]").forEach((card) => card.classList.toggle("is-active", card.dataset.previewDestination === String(id)));
}

async function showDestinations(destinations, total, countryName) {
  setMapStatus(total, countryName);
  showPreviewCards(destinations);
  try { await ensureGoogleMap(); renderMarkers(destinations); }
  catch { renderIllustratedMap(destinations); }
}

const categoryPin = {
  "Sitio arqueológico": "#b44935", "Parque nacional": "#2f7a54", "Naturaleza": "#2f7a54", "Playa": "#287d9b",
  "Museo": "#9b6b25", "Cultura": "#8f5a92", "Aventura": "#d86143", "Ciudad": "#4d6fa3",
};

function escapeMapHtml(value) {
  return String(value || "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function setMapLoading(visible, message = "Preparando destinos para ti…") {
  if (mapLoading) { mapLoading.hidden = !visible; mapLoading.querySelector("p").textContent = message; }
}

function setMapStatus(total, countryName = "") {
  if (mapTotal) mapTotal.textContent = `${total} destino${total === 1 ? "" : "s"} Nómada`;
  if (mapSummary) mapSummary.textContent = countryName ? `Explora ${countryName} a tu ritmo.` : "Puntos turísticos listos para descubrir.";
  if (mapCaption) mapCaption.textContent = countryName ? `${total} lugares disponibles en ${countryName}.` : `${total} puntos turísticos para inspirar tu próxima aventura.`;
}

function readStoredMap(countryCode) {
  try {
    const item = JSON.parse(sessionStorage.getItem(`${mapCachePrefix}${countryCode || "world"}`) || "null");
    return item && Array.isArray(item.data) ? item : null;
  } catch { return null; }
}

function storeMap(countryCode, payload) {
  try { sessionStorage.setItem(`${mapCachePrefix}${countryCode || "world"}`, JSON.stringify(payload)); } catch { /* El caché es una mejora, no un requisito. */ }
}

async function fetchMapDestinations(countryCode = "") {
  if (publicMapCache.has(countryCode)) return publicMapCache.get(countryCode);
  const stored = readStoredMap(countryCode);
  if (stored) { publicMapCache.set(countryCode, stored); return stored; }
  const search = new URLSearchParams({ view: "map", page: "1", limit: "250" });
  if (countryCode) search.set("country", countryCode);
  const response = await fetch(`${NOMADA_API_URL}/destinations?${search.toString()}`);
  if (!response.ok) throw new Error("No pudimos cargar los destinos.");
  const body = await response.json();
  const payload = { data: Array.isArray(body.data) ? body.data : [], pagination: body.pagination || {} };
  publicMapCache.set(countryCode, payload);
  storeMap(countryCode, payload);
  return payload;
}

function showPreviewCards(destinations) {
  if (!mapPreview) return;
  mapPreview.setAttribute("aria-busy", "false");
  const preview = destinations.slice(0, 3);
  if (!preview.length) { mapPreview.innerHTML = '<p class="destination-card"><b>Aún no hay destinos para este filtro.</b><span>Prueba con otro país o vuelve pronto.</span></p>'; return; }
  mapPreview.innerHTML = preview.map((destination, index) => `<button class="destination-card" type="button" data-preview-destination="${escapeMapHtml(destination.id)}"><small>${escapeMapHtml(destination.country || "Nómada")}</small><b>${escapeMapHtml(destination.name || destination.officialName || "Destino")}</b><span>${escapeMapHtml(destination.shortDescription || destination.description || destination.category || "Un lugar por descubrir.")}</span><em aria-hidden="true">${index + 1}</em></button>`).join("");
  mapPreview.querySelectorAll("[data-preview-destination]").forEach((button) => button.addEventListener("click", () => {
    const destination = destinations.find((item) => String(item.id) === button.dataset.previewDestination);
    if (!destination) return;
    if (googleMap) focusDestination(destination);
    else activateSketchPin(destination.id);
  }));
}

function createPin(destination) {
  const color = categoryPin[destination.category] || "#24634c";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="52" viewBox="0 0 42 52"><path fill="${color}" stroke="#fffaf0" stroke-width="2" d="M21 2C11.1 2 3 10.1 3 20c0 13.5 18 30 18 30s18-16.5 18-30C39 10.1 30.9 2 21 2z"/><circle cx="21" cy="20" r="7" fill="#fffaf0"/><circle cx="21" cy="20" r="3" fill="${color}"/></svg>`;
  return { url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, scaledSize: new google.maps.Size(36, 45), anchor: new google.maps.Point(18, 45) };
}

function positionOf(destination) {
  const lat = Number(destination.latitude ?? destination.lat);
  const lng = Number(destination.longitude ?? destination.long);
  return Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null;
}

function infoContent(destination) {
  const cost = destination.averageCostMin || destination.averageCostMax ? `${destination.costCurrency || ""} ${destination.averageCostMin || 0}${destination.averageCostMax ? `–${destination.averageCostMax}` : "+"}`.trim() : destination.category || "Destino Nómada";
  return `<article class="nomada-map-info"><small>${escapeMapHtml(destination.country || "Nómada")} · ${escapeMapHtml(destination.category || "Explorar")}</small><h3>${escapeMapHtml(destination.name || destination.officialName)}</h3><p>${escapeMapHtml(destination.shortDescription || destination.description || "Un punto especial para tu próximo viaje.")}</p><span>${escapeMapHtml(cost)}</span></article>`;
}

function renderMarkers(destinations) {
  if (!googleMap || !window.google?.maps) return;
  activeMarkers.forEach((marker) => marker.setMap(null));
  activeMarkers = [];
  const bounds = new google.maps.LatLngBounds();
  destinations.forEach((destination) => {
    const position = positionOf(destination);
    if (!position) return;
    const marker = new google.maps.Marker({ map: googleMap, position, title: destination.name || destination.officialName || "Destino Nómada", icon: createPin(destination), optimized: true });
    marker.addListener("click", () => { infoWindow.setContent(infoContent(destination)); infoWindow.open({ map: googleMap, anchor: marker }); });
    activeMarkers.push(marker);
    bounds.extend(position);
  });
  if (activeMarkers.length === 1) { googleMap.setCenter(activeMarkers[0].getPosition()); googleMap.setZoom(11); }
  else if (activeMarkers.length > 1) googleMap.fitBounds(bounds, 52);
}

function focusDestination(destination) {
  const position = positionOf(destination);
  if (!position || !googleMap) return;
  googleMap.panTo(position);
  googleMap.setZoom(Math.max(googleMap.getZoom() || 0, 10));
  const marker = activeMarkers.find((item) => item.getPosition()?.lat() === position.lat && item.getPosition()?.lng() === position.lng);
  if (marker) { infoWindow.setContent(infoContent(destination)); infoWindow.open({ map: googleMap, anchor: marker }); }
  mapCanvas?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
}

function loadGoogleMaps() {
  if (!mapsKey) return Promise.reject(new Error("La clave de Google Maps aún no está configurada."));
  if (window.google?.maps) return Promise.resolve(window.google.maps);
  if (mapScriptPromise) return mapScriptPromise;
  mapScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(mapsKey)}&v=weekly`;
    script.async = true; script.defer = true;
    script.onload = () => window.google?.maps ? resolve(window.google.maps) : reject(new Error("Google Maps no respondió."));
    script.onerror = () => reject(new Error("No fue posible cargar Google Maps."));
    document.head.append(script);
  });
  return mapScriptPromise;
}

async function ensureGoogleMap() {
  if (googleMap) return googleMap;
  await loadGoogleMaps();
  googleMap = new google.maps.Map(mapCanvas, { center: { lat: 15.8, lng: -90.2 }, zoom: 5, minZoom: 2, maxZoom: 18, mapTypeControl: false, streetViewControl: false, fullscreenControl: true, clickableIcons: false, gestureHandling: "cooperative", styles: [{ featureType: "poi.business", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }] });
  infoWindow = new google.maps.InfoWindow();
  return googleMap;
}

async function selectCountry(countryCode = "", countryName = "") {
  mapCountryFilter?.querySelectorAll("button").forEach((button) => button.classList.toggle("is-active", button.dataset.country === countryCode));
  setMapLoading(true, countryName ? `Buscando destinos en ${countryName}…` : "Reuniendo destinos de todo el mundo…");
  mapPreview?.setAttribute("aria-busy", "true");
  mapPreview.innerHTML = '<span class="destination-placeholder"></span><span class="destination-placeholder"></span><span class="destination-placeholder"></span>';
  try {
    const payload = await fetchMapDestinations(countryCode);
    const destinations = payload.data.length || countryCode ? payload.data : FEATURED_DESTINATIONS;
    await showDestinations(destinations, payload.data.length ? payload.pagination.total ?? destinations.length : destinations.length, countryName);
  } catch {
    // Sin catálogo: mostramos los favoritos curados en lugar de un mensaje de error.
    await showDestinations(FEATURED_DESTINATIONS, FEATURED_DESTINATIONS.length, "Guatemala");
    if (mapCaption) mapCaption.textContent = "Algunos favoritos para empezar tu historia. Pronto verás el catálogo completo.";
  } finally { setMapLoading(false); }
}

async function startPublicExplorer() {
  if (mapStarted || !mapSection) return;
  mapStarted = true;
  try {
    const response = await fetch(`${NOMADA_API_URL}/destinations/countries`);
    const body = response.ok ? await response.json() : { data: [] };
    const countries = Array.isArray(body.data) ? body.data : [];
    countries.forEach((country) => {
      const button = document.createElement("button");
      button.className = "country-chip"; button.type = "button"; button.dataset.country = country.countryCode || country.code || "";
      button.textContent = `${country.country || country.name || country.countryCode} · ${country.destinationCount || country.count || 0}`;
      button.addEventListener("click", () => selectCountry(button.dataset.country, country.country || country.name || ""));
      mapCountryFilter?.append(button);
    });
  } catch { /* El mapa mundial sigue disponible aunque el catálogo de filtros falle. */ }
  mapCountryFilter?.querySelector('[data-country=""]')?.addEventListener("click", () => selectCountry());
  selectCountry();
}

if (mapSection) {
  const mapObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) { startPublicExplorer(); mapObserver.disconnect(); }
  }, { rootMargin: "260px" }) : null;
  if (mapObserver) mapObserver.observe(mapSection); else startPublicExplorer();
}

function updateBusinessStatus(message, kind = "") {
  if (!businessStatus) return;
  businessStatus.textContent = message;
  businessStatus.className = `form-status${kind ? ` is-${kind}` : ""}`;
}

businessForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!businessForm.reportValidity()) return;
  const submit = businessForm.querySelector("button[type='submit']");
  const form = new FormData(businessForm);
  const websiteOrSocial = String(form.get("website") || "").trim();
  const payload = {
    companyName: String(form.get("companyName") || "").trim(),
    contactName: String(form.get("contactName") || "").trim(),
    email: String(form.get("email") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    businessType: String(form.get("businessType") || "").trim(),
    department: String(form.get("department") || "").trim(),
    municipality: String(form.get("municipality") || "").trim(),
    website: websiteOrSocial.startsWith("@") ? "" : (websiteOrSocial && !/^https?:\/\//i.test(websiteOrSocial) ? `https://${websiteOrSocial}` : websiteOrSocial),
    socialHandle: websiteOrSocial.startsWith("@") ? websiteOrSocial : "",
    interest: String(form.get("interest") || "visit_point"),
    message: String(form.get("message") || "").trim(),
    consent: form.get("consent") === "on",
    websiteTrap: String(form.get("websiteTrap") || ""),
  };
  submit?.setAttribute("disabled", "disabled");
  updateBusinessStatus("Estamos enviando la información de tu negocio…");
  try {
    const response = await fetch(`${NOMADA_API_URL}/business-interests`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.message || "Revisa los datos e inténtalo nuevamente.");
    businessForm.reset();
    updateBusinessStatus(body.message || "¡Listo! Recibimos tu solicitud y te contactaremos pronto.", "success");
  } catch (error) {
    updateBusinessStatus(error instanceof Error ? error.message : "No pudimos enviar la solicitud. Inténtalo nuevamente.", "error");
  } finally {
    submit?.removeAttribute("disabled");
  }
});

const travelerForm = document.querySelector("[data-traveler-form]");
const travelerStatus = document.querySelector("[data-traveler-status]");
function updateTravelerStatus(message, kind = "") {
  if (!travelerStatus) return;
  travelerStatus.textContent = message;
  travelerStatus.className = `traveler-status${kind ? ` is-${kind}` : ""}`;
}
travelerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!travelerForm.reportValidity()) return;
  const submit = travelerForm.querySelector("button[type='submit']");
  const form = new FormData(travelerForm);
  const payload = {
    fullName: String(form.get("fullName") || "").trim(), email: String(form.get("email") || "").trim(),
    travelerStyle: String(form.get("travelerStyle") || "all"), consent: form.get("consent") === "on", websiteTrap: String(form.get("websiteTrap") || ""),
  };
  submit?.setAttribute("disabled", "disabled");
  updateTravelerStatus("Guardando tu lugar en la aventura…");
  try {
    const response = await fetch(`${NOMADA_API_URL}/traveler-interests`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.message || "Revisa tus datos e inténtalo nuevamente.");
    document.querySelector(".soon-card")?.classList.add("is-joined");
    travelerForm.reset();
    updateTravelerStatus(body.message || "¡Listo! Ya formas parte de la lista Nómada.", "success");
  } catch (error) {
    updateTravelerStatus(error instanceof Error ? error.message : "No pudimos guardar tu solicitud. Inténtalo nuevamente.", "error");
  } finally { submit?.removeAttribute("disabled"); }
});

// ---- Portada viva: contadores, inclinación 3D del teléfono y parallax de la acuarela ----
const heroSection = document.querySelector(".hero");
const heroProduct = document.querySelector(".hero-product");
const heroLandscape = document.querySelector(".hero-landscape");

function countUp(node) {
  const target = Number(node.dataset.countTo) || 0;
  if (reduceMotion) { node.textContent = String(target); return; }
  let started = performance.now();
  const duration = 1600;
  const tick = (now) => {
    const progress = Math.min(1, (now - started) / duration);
    node.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
    if (progress < 1) requestAnimationFrame(tick);
  };
  node.textContent = "0";
  const begin = () => document.documentElement.classList.contains("has-intro") ? setTimeout(begin, 200) : requestAnimationFrame((now) => { started = now; tick(now); });
  setTimeout(begin, 700);
}
document.querySelectorAll("[data-count-to]").forEach(countUp);

if (heroSection && heroProduct && !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let frame = 0;
  heroSection.addEventListener("pointermove", (event) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const box = heroSection.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width) * 2 - 1;
      const y = ((event.clientY - box.top) / box.height) * 2 - 1;
      heroProduct.style.setProperty("--mx", x.toFixed(3));
      heroProduct.style.setProperty("--my", y.toFixed(3));
    });
  });
  heroSection.addEventListener("pointerleave", () => { heroProduct.style.setProperty("--mx", "0"); heroProduct.style.setProperty("--my", "0"); });
}

if (heroLandscape && !reduceMotion) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = Math.min(window.scrollY, 900);
      heroLandscape.style.transform = `translate3d(0, ${(y * 0.28).toFixed(1)}px, 0) scale(1.06)`;
    });
  }, { passive: true });
}

// ---- Formulario de negocios: vista previa en vivo, progreso y pasos completados ----
const interestNames = { visit_point: "Punto de visita", route_partner: "Parte de una ruta", offers: "Beneficios para viajeros", alliance: "Alianza completa" };
function updateBusinessPreview() {
  if (!businessForm) return;
  const data = new FormData(businessForm);
  const text = (name) => String(data.get(name) || "").trim();
  const set = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  set("[data-preview-name]", text("companyName") || "Tu negocio");
  set("[data-preview-type]", text("businessType") || "Tu tipo de negocio");
  set("[data-preview-place]", [text("municipality"), text("department")].filter(Boolean).join(", ") || "Guatemala");
  set("[data-preview-interest]", interestNames[text("interest")] || "Punto de visita");
  const required = [...new Set([...businessForm.querySelectorAll("[required]")].map((field) => field.name))];
  const valid = required.filter((name) => { const field = businessForm.elements[name]; return field instanceof RadioNodeList ? Boolean(field.value) : field?.checkValidity(); }).length;
  const percent = Math.round((valid / required.length) * 100);
  const bar = document.querySelector("[data-form-progress]");
  if (bar) bar.style.width = percent + "%";
  set("[data-form-progress-label]", percent + "%");
  businessForm.querySelectorAll("[data-form-step]").forEach((step) => {
    const fields = [...step.querySelectorAll("[required]")];
    step.classList.toggle("is-done", fields.length > 0 && fields.every((field) => field.type === "radio" ? Boolean(businessForm.elements[field.name].value) : field.checkValidity()));
  });
}
businessForm?.addEventListener("input", updateBusinessPreview);
businessForm?.addEventListener("change", updateBusinessPreview);
businessForm?.addEventListener("reset", () => setTimeout(updateBusinessPreview, 0));
updateBusinessPreview();

// ---- Sé de los primeros: tu nombre aparece en el pasaporte y el estilo cambia su acento ----
const soonCard = document.querySelector(".soon-card");
const soonName = document.querySelector("[data-soon-name]");
function updateSoonPassport() {
  if (!travelerForm) return;
  const data = new FormData(travelerForm);
  const name = String(data.get("fullName") || "").trim();
  if (soonName) soonName.textContent = name ? name.toUpperCase().slice(0, 28) : (document.documentElement.lang === "en" ? "Your name here" : "Tu nombre aquí");
  if (soonCard) soonCard.dataset.style = String(data.get("travelerStyle") || "all");
}
travelerForm?.addEventListener("input", updateSoonPassport);
travelerForm?.addEventListener("change", updateSoonPassport);
updateSoonPassport();

// ---- Pulido general: intro con sello, sección activa en el menú, botón flotante con progreso y botones magnéticos ----
(() => {
  if (reduceMotion) return;
  // La intro del mapa se muestra en cada carga del sitio.
  const intro = document.createElement("div");
  intro.className = "intro-stamp intro-v2";
  intro.setAttribute("aria-hidden", "true");
  intro.innerHTML = "<div class=\"i2-bg\" aria-hidden=\"true\"><svg class=\"i2-rose\" viewBox=\"-50 -50 100 100\"><circle r=\"46\" fill=\"none\" stroke=\"currentColor\" stroke-width=\".6\"/><circle r=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\".4\" stroke-dasharray=\"1 2\"/><polygon points=\"0.0,-24.0 7.8,-7.8 24.0,-0.0 7.8,7.8 0.0,24.0 -7.8,7.8 -24.0,0.0 -7.8,-7.8\" fill=\"currentColor\" transform=\"scale(1.6)\"/></svg><div class=\"i2-particles\"><i style=\"--x:0%;--y:0%;--s:2px;--t:6s;--dl:0s\"></i><i style=\"--x:73%;--y:41%;--s:3px;--t:7s;--dl:-1s\"></i><i style=\"--x:46%;--y:82%;--s:4px;--t:8s;--dl:-2s\"></i><i style=\"--x:19%;--y:23%;--s:2px;--t:9s;--dl:-3s\"></i><i style=\"--x:92%;--y:64%;--s:3px;--t:10s;--dl:-4s\"></i><i style=\"--x:65%;--y:5%;--s:4px;--t:6s;--dl:-5s\"></i><i style=\"--x:38%;--y:46%;--s:2px;--t:7s;--dl:-6s\"></i><i style=\"--x:11%;--y:87%;--s:3px;--t:8s;--dl:0s\"></i><i style=\"--x:84%;--y:28%;--s:4px;--t:9s;--dl:-1s\"></i><i style=\"--x:57%;--y:69%;--s:2px;--t:10s;--dl:-2s\"></i><i style=\"--x:30%;--y:10%;--s:3px;--t:6s;--dl:-3s\"></i><i style=\"--x:3%;--y:51%;--s:4px;--t:7s;--dl:-4s\"></i><i style=\"--x:76%;--y:92%;--s:2px;--t:8s;--dl:-5s\"></i><i style=\"--x:49%;--y:33%;--s:3px;--t:9s;--dl:-6s\"></i></div></div><div class=\"i2-stage\"><div class=\"i2-map\"><svg class=\"i2-svg\" viewBox=\"0 0 600 360\" aria-hidden=\"true\"><defs><linearGradient id=\"i2Paper\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#fcf5e3\"/><stop offset=\".6\" stop-color=\"#f3e5c6\"/><stop offset=\"1\" stop-color=\"#e8d3a8\"/></linearGradient><radialGradient id=\"i2Vignette\" cx=\"50%\" cy=\"50%\" r=\"70%\"><stop offset=\".6\" stop-color=\"rgba(90,62,26,0)\"/><stop offset=\"1\" stop-color=\"rgba(90,62,26,.22)\"/></radialGradient><linearGradient id=\"i2Sea\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#a9d3d8\"/><stop offset=\"1\" stop-color=\"#6fb1bb\"/></linearGradient><linearGradient id=\"i2Fold\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"rgba(90,62,26,0)\"/><stop offset=\".5\" stop-color=\"rgba(90,62,26,.13)\"/><stop offset=\"1\" stop-color=\"rgba(90,62,26,0)\"/></linearGradient><clipPath id=\"i2Clip\"><rect x=\"20\" y=\"20\" width=\"560\" height=\"320\" rx=\"8\"/></clipPath></defs>\n<rect x=\"6\" y=\"6\" width=\"588\" height=\"348\" rx=\"16\" fill=\"url(#i2Paper)\"/>\n<g clip-path=\"url(#i2Clip)\">\n<g stroke=\"rgba(90,62,26,.1)\" stroke-dasharray=\"3 6\"><path d=\"M20 80H580M20 140H580M20 200H580M20 260H580M20 320H580\"/><path d=\"M80 20V340M160 20V340M240 20V340M320 20V340M400 20V340M480 20V340M560 20V340\"/></g>\n<path d=\"M20 262 C70 272 110 300 128 340 L20 340Z\" fill=\"url(#i2Sea)\" opacity=\".75\"/><path d=\"M28 290c8-4 14 4 22 0M44 314c8-4 14 4 22 0M30 330c8-4 14 4 22 0\" fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"1.4\" stroke-linecap=\"round\" opacity=\".8\"/><text class=\"i2-sea\" x=\"44\" y=\"276\">OCÉANO PACÍFICO</text>\n<path d=\"M528 20 L580 20 L580 176 C560 160 548 132 540 104 C532 74 520 46 528 20Z\" fill=\"url(#i2Sea)\" opacity=\".75\"/><path d=\"M548 60c6-3 10 3 16 0M552 96c6-3 10 3 16 0M556 136c6-3 10 3 16 0\" fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"1.4\" stroke-linecap=\"round\" opacity=\".8\"/><text class=\"i2-sea\" x=\"566\" y=\"120\" transform=\"rotate(-90 566 120)\">MAR CARIBE</text>\n<path d=\"M120 50 C200 40 300 30 380 40 C460 30 520 40 530 70 C540 120 560 160 548 180 C520 200 470 210 430 240 C380 280 300 300 230 296 C170 292 120 276 90 250 C60 220 70 150 90 110 C100 80 104 60 120 50Z\" fill=\"rgba(111,143,100,.13)\" stroke=\"rgba(36,99,76,.35)\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\"/>\n<g fill=\"none\" stroke=\"rgba(36,99,76,.18)\" stroke-width=\"1\"><path d=\"M70 200c40-20 80 10 120-4s70-24 110-8\"/><path d=\"M80 214c40-18 78 12 118 0s72-22 108-6\"/><circle cx=\"300\" cy=\"240\" r=\"18\"/><circle cx=\"300\" cy=\"240\" r=\"32\"/></g>\n<path d=\"M330 168 C380 176 420 160 460 168 S520 176 548 166\" fill=\"none\" stroke=\"#7fbcc4\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<ellipse cx=\"150\" cy=\"232\" rx=\"28\" ry=\"13\" fill=\"url(#i2Sea)\"/><path d=\"M134 232c5-3 9 3 14 0s9 3 14 0\" fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path class=\"i2-boat\" d=\"M0 0h10l-2 3H2z M5 0V-7l4 5z\" fill=\"#d86143\" transform=\"translate(156 236)\"/>\n<g transform=\"translate(112 214) scale(0.9)\"><path d=\"M-22 0 L-5 -30 L0 -26 L5 -31 L22 0Z\" fill=\"#7e9c7c\"/><path d=\"M-5 -30 L0 -26 L5 -31 L2 -34 L-2 -33Z\" fill=\"#fbf3df\"/><path d=\"M-22 0 L-5 -30 L-2 -12 Z\" fill=\"rgba(23,55,47,.18)\"/></g><g transform=\"translate(196 222) scale(1.1)\"><path d=\"M-22 0 L-5 -30 L0 -26 L5 -31 L22 0Z\" fill=\"#7e9c7c\"/><path d=\"M-5 -30 L0 -26 L5 -31 L2 -34 L-2 -33Z\" fill=\"#fbf3df\"/><path d=\"M-22 0 L-5 -30 L-2 -12 Z\" fill=\"rgba(23,55,47,.18)\"/><circle class=\"i2-smoke\" cx=\"1\" cy=\"-38\" r=\"4\"/><circle class=\"i2-smoke sm2\" cx=\"3\" cy=\"-38\" r=\"4\"/></g><g transform=\"translate(258 226) scale(0.8)\"><path d=\"M-22 0 L-5 -30 L0 -26 L5 -31 L22 0Z\" fill=\"#7e9c7c\"/><path d=\"M-5 -30 L0 -26 L5 -31 L2 -34 L-2 -33Z\" fill=\"#fbf3df\"/><path d=\"M-22 0 L-5 -30 L-2 -12 Z\" fill=\"rgba(23,55,47,.18)\"/><circle class=\"i2-smoke\" cx=\"1\" cy=\"-38\" r=\"4\"/><circle class=\"i2-smoke sm2\" cx=\"3\" cy=\"-38\" r=\"4\"/></g><g transform=\"translate(292 258) scale(0.7)\"><path d=\"M-22 0 L-5 -30 L0 -26 L5 -31 L22 0Z\" fill=\"#7e9c7c\"/><path d=\"M-5 -30 L0 -26 L5 -31 L2 -34 L-2 -33Z\" fill=\"#fbf3df\"/><path d=\"M-22 0 L-5 -30 L-2 -12 Z\" fill=\"rgba(23,55,47,.18)\"/></g>\n<g transform=\"translate(420 60)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(440 74)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(455 52)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(492 66)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(505 92)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(430 104)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(470 118)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(512 120)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(395 82)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(488 40)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(530 70)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g><g transform=\"translate(455 140)\"><circle r=\"6\" fill=\"#6f9a72\"/><circle cx=\"5\" cy=\"3\" r=\"5\" fill=\"#5d8a63\"/><circle cx=\"-5\" cy=\"3\" r=\"4.5\" fill=\"#7fa77f\"/></g>\n<rect x=\"18\" y=\"18\" width=\"564\" height=\"324\" rx=\"10\" fill=\"url(#i2Vignette)\"/>\n</g>\n<rect x=\"18\" y=\"18\" width=\"564\" height=\"324\" rx=\"10\" fill=\"none\" stroke=\"rgba(90,62,26,.45)\" stroke-width=\"1.6\"/><rect x=\"24\" y=\"24\" width=\"552\" height=\"312\" rx=\"7\" fill=\"none\" stroke=\"rgba(90,62,26,.25)\"/>\n<rect x=\"190\" y=\"6\" width=\"34\" height=\"348\" fill=\"url(#i2Fold)\"/><rect x=\"380\" y=\"6\" width=\"34\" height=\"348\" fill=\"url(#i2Fold)\"/>\n<g class=\"i2-cartouche\" transform=\"translate(40 36)\"><rect width=\"150\" height=\"44\" rx=\"6\" fill=\"#fffaf0\" stroke=\"#b9831a\" stroke-width=\"1.5\"/><rect x=\"4\" y=\"4\" width=\"142\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"rgba(185,131,26,.45)\"/><text class=\"i2-cart-title\" x=\"75\" y=\"22\">GUATEMALA</text><text class=\"i2-cart-sub\" x=\"75\" y=\"34\">MAPA DE AVENTURAS · 2026</text></g>\n<g class=\"i2-scale\" transform=\"translate(410 318)\"><rect width=\"30\" height=\"5\" fill=\"#174d3b\"/><rect x=\"30\" width=\"30\" height=\"5\" fill=\"#fffaf0\" stroke=\"#174d3b\" stroke-width=\".8\"/><rect x=\"60\" width=\"30\" height=\"5\" fill=\"#174d3b\"/><text x=\"0\" y=\"-4\">0</text><text x=\"45\" y=\"-4\">50</text><text x=\"90\" y=\"-4\">100 KM</text></g>\n<g class=\"i2-compass\" transform=\"translate(520 288)\"><circle r=\"30\" fill=\"rgba(255,250,240,.7)\" stroke=\"rgba(90,62,26,.35)\"/><circle r=\"25\" fill=\"none\" stroke=\"rgba(90,62,26,.2)\" stroke-dasharray=\"2 3\"/><polygon points=\"0.0,-24.0 7.8,-7.8 24.0,-0.0 7.8,7.8 0.0,24.0 -7.8,7.8 -24.0,0.0 -7.8,-7.8\" fill=\"#174d3b\" opacity=\".85\"/><path d=\"M0 -24 L5 0 L0 4 L-5 0Z\" fill=\"#d86143\"/><text y=\"-33\">N</text></g>\n<path class=\"i2-route-ghost\" d=\"M150 226 C176 252 206 264 234 250 S318 186 360 152 S440 112 470 80\"/><path class=\"i2-route\" pathLength=\"100\" d=\"M150 226 C176 252 206 264 234 250 S318 186 360 152 S440 112 470 80\"/>\n<g class=\"i2-pin\" style=\"--d:0.55s\" transform=\"translate(150 226)\"><ellipse cy=\"1.5\" rx=\"7\" ry=\"2.4\" fill=\"rgba(23,55,47,.22)\"/><path d=\"M0 0C-6-8-10-12-10-18a10 10 0 1 1 20 0c0 6-4 10-10 18z\" fill=\"#2b7a8c\" stroke=\"#fffaf0\" stroke-width=\"2.2\"/><circle cy=\"-18\" r=\"3.8\" fill=\"#fffaf0\"/><g class=\"i2-check\" transform=\"translate(9 -28)\"><circle r=\"7\" fill=\"#fffaf0\" stroke=\"#2b7a8c\" stroke-width=\"1.6\"/><path d=\"M-3 0l2 2.4 4-4.4\" fill=\"none\" stroke=\"#2b7a8c\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g class=\"i2-tag\" transform=\"translate(-38 6)\"><rect x=\"-27\" y=\"-8\" width=\"54\" height=\"15\" rx=\"7.5\" fill=\"#fffaf0\" stroke=\"rgba(90,62,26,.25)\"/><text y=\"3\">ATITLÁN</text></g></g><g class=\"i2-pin\" style=\"--d:1.05s\" transform=\"translate(234 250)\"><ellipse cy=\"1.5\" rx=\"7\" ry=\"2.4\" fill=\"rgba(23,55,47,.22)\"/><path d=\"M0 0C-6-8-10-12-10-18a10 10 0 1 1 20 0c0 6-4 10-10 18z\" fill=\"#d86143\" stroke=\"#fffaf0\" stroke-width=\"2.2\"/><circle cy=\"-18\" r=\"3.8\" fill=\"#fffaf0\"/><g class=\"i2-check\" transform=\"translate(9 -28)\"><circle r=\"7\" fill=\"#fffaf0\" stroke=\"#d86143\" stroke-width=\"1.6\"/><path d=\"M-3 0l2 2.4 4-4.4\" fill=\"none\" stroke=\"#d86143\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g class=\"i2-tag\" transform=\"translate(0 26)\"><rect x=\"-27\" y=\"-8\" width=\"54\" height=\"15\" rx=\"7.5\" fill=\"#fffaf0\" stroke=\"rgba(90,62,26,.25)\"/><text y=\"3\">ANTIGUA</text></g></g><g class=\"i2-pin\" style=\"--d:1.65s\" transform=\"translate(360 152)\"><ellipse cy=\"1.5\" rx=\"7\" ry=\"2.4\" fill=\"rgba(23,55,47,.22)\"/><path d=\"M0 0C-6-8-10-12-10-18a10 10 0 1 1 20 0c0 6-4 10-10 18z\" fill=\"#24634c\" stroke=\"#fffaf0\" stroke-width=\"2.2\"/><circle cy=\"-18\" r=\"3.8\" fill=\"#fffaf0\"/><g class=\"i2-check\" transform=\"translate(9 -28)\"><circle r=\"7\" fill=\"#fffaf0\" stroke=\"#24634c\" stroke-width=\"1.6\"/><path d=\"M-3 0l2 2.4 4-4.4\" fill=\"none\" stroke=\"#24634c\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g class=\"i2-tag\" transform=\"translate(34 8)\"><rect x=\"-27\" y=\"-8\" width=\"54\" height=\"15\" rx=\"7.5\" fill=\"#fffaf0\" stroke=\"rgba(90,62,26,.25)\"/><text y=\"3\">SEMUC</text></g></g>\n<g class=\"i2-traveler\"><circle r=\"11\" class=\"i2-traveler-glow\"/><circle r=\"6\" fill=\"#2b7a8c\" stroke=\"#fffaf0\" stroke-width=\"2.4\"/></g>\n</svg><span class=\"i2-ink\"></span><span class=\"i2-splat p1\"></span><span class=\"i2-splat p2\"></span><span class=\"i2-splat p3\"></span><span class=\"i2-splat p4\"></span><span class=\"i2-splat p5\"></span><div class=\"i2-seal\"><svg class=\"i2-ring\" viewBox=\"0 0 200 200\" aria-hidden=\"true\"><defs><path id=\"i2RingPath\" d=\"M100 100 m-82 0 a82 82 0 1 1 164 0 a82 82 0 1 1 -164 0\"/></defs><circle cx=\"100\" cy=\"100\" r=\"96\" fill=\"rgba(255,250,240,.92)\" stroke=\"#d86143\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"100\" r=\"90\" fill=\"none\" stroke=\"#d86143\" stroke-width=\"1.4\"/><circle cx=\"100\" cy=\"100\" r=\"68\" fill=\"none\" stroke=\"#d86143\" stroke-width=\"1.4\" stroke-dasharray=\"3 4\"/><text class=\"i2-ring-text\"><textPath href=\"#i2RingPath\">VISITA VERIFICADA ✦ TIKAL · PETÉN ✦ SELLO Nº 08 ✦</textPath></text></svg><span class=\"i2-logo\"><svg viewBox=\"0 0 48 48\"><use href=\"#nomada-logo\"/></svg></span></div><span class=\"i2-sealed\">✓ TIKAL · SELLADO</span></div><div class=\"i2-title\"><span style=\"--i:0\">N</span><span style=\"--i:1\">Ó</span><span style=\"--i:2\">M</span><span style=\"--i:3\">A</span><span style=\"--i:4\">D</span><span style=\"--i:5\">A</span></div><div class=\"i2-tagline\">Guatemala no se visita. <em>Se colecciona.</em></div><div class=\"i2-skip\">Toca para saltar</div></div><div class=\"i2-loader\" aria-hidden=\"true\"><span></span></div>";
  document.documentElement.classList.add("has-intro");
  document.body.append(intro);
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    intro.classList.add("is-done");
    document.documentElement.classList.remove("has-intro");
    window.setTimeout(() => intro.remove(), 900);
  };
  const route = intro.querySelector(".i2-route");
  const traveler = intro.querySelector(".i2-traveler");
  if (route && traveler && route.getTotalLength) {
    const length = route.getTotalLength();
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const place = (t) => { const p = route.getPointAtLength(length * ease(t)); traveler.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`); };
    place(0);
    const startAt = performance.now() + 550;
    const step = (now) => { const t = Math.min(1, Math.max(0, (now - startAt) / 1750)); place(t); if (t < 1 && !finished) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  intro.addEventListener("click", finish);
  window.setTimeout(finish, 4400);
})();

const navSectionLinks = [...document.querySelectorAll('.primary-nav > a[href^="#"]:not(.nav-cta)')];
if ("IntersectionObserver" in window && navSectionLinks.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) navSectionLinks.forEach((link) => link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navSectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean).forEach((section) => spy.observe(section));
}

const fabTop = document.createElement("a");
fabTop.className = "fab-top";
fabTop.href = "#inicio";
fabTop.setAttribute("aria-label", "Volver arriba");
fabTop.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true"><circle class="fab-track" cx="24" cy="24" r="21"/><circle class="fab-value" cx="24" cy="24" r="21" pathLength="100"/></svg><b aria-hidden="true">↑</b>';
document.body.append(fabTop);
const fabValue = fabTop.querySelector(".fab-value");
let fabTicking = false;
window.addEventListener("scroll", () => {
  if (fabTicking) return;
  fabTicking = true;
  requestAnimationFrame(() => {
    fabTicking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    fabTop.classList.toggle("is-visible", window.scrollY > 700);
    fabValue?.setAttribute("stroke-dashoffset", String(100 - progress * 100));
  });
}, { passive: true });

if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".button.primary, .nav-cta, .stamp-action").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const box = button.getBoundingClientRect();
      button.style.translate = `${(((event.clientX - box.left) / box.width) - 0.5) * 10}px ${(((event.clientY - box.top) / box.height) - 0.5) * 8}px`;
    });
    button.addEventListener("pointerleave", () => { button.style.translate = ""; });
  });
}
