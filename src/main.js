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
    if (destination) focusDestination(destination);
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
    const destinations = payload.data;
    setMapStatus(payload.pagination.total ?? destinations.length, countryName);
    showPreviewCards(destinations);
    try { await ensureGoogleMap(); renderMarkers(destinations); }
    catch {
      mapSection?.classList.add("map-fallback-mode");
      mapUnavailable.hidden = false;
    }
  } catch (error) {
    mapSection?.classList.add("map-fallback-mode");
    mapUnavailable.hidden = false;
    mapUnavailable.querySelector("p").textContent = "No pudimos traer los destinos ahora. Inténtalo nuevamente en unos minutos.";
    mapPreview.innerHTML = '<p class="destination-card"><b>El catálogo está tomando un descanso.</b><span>Vuelve a intentarlo pronto.</span></p>';
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
    travelerForm.reset();
    updateTravelerStatus(body.message || "¡Listo! Ya formas parte de la lista Nómada.", "success");
  } catch (error) {
    updateTravelerStatus(error instanceof Error ? error.message : "No pudimos guardar tu solicitud. Inténtalo nuevamente.", "error");
  } finally { submit?.removeAttribute("disabled"); }
});
