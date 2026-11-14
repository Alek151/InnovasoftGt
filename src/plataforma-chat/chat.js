// Plataforma Chat: menú, animaciones y demostraciones (página estática, no depende de ningún servidor).
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); };

  // ---- Encabezado y menú móvil ----
  var header = document.querySelector("[data-site-header]");
  var menuButton = document.querySelector("[data-menu-button]");
  var navPanel = document.querySelector("[data-nav-panel]");
  function setMenu(open) {
    if (!menuButton || !navPanel) return;
    menuButton.setAttribute("aria-expanded", String(open));
    navPanel.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }
  if (menuButton) menuButton.addEventListener("click", function () { setMenu(menuButton.getAttribute("aria-expanded") !== "true"); });
  document.querySelectorAll("[data-nav-panel] a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  window.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ---- Barra de progreso, encabezado y "volver arriba" ----
  var progress = document.querySelector("[data-scroll-progress]");
  var backTop = document.querySelector("[data-back-top]");
  var ticking = false;
  function onScroll() {
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.setProperty("--progress", (max > 0 ? Math.min(1, window.scrollY / max) : 0).toFixed(4));
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 18);
    if (backTop) backTop.classList.toggle("is-visible", window.scrollY > 700);
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  // ---- Aparición al hacer scroll ----
  var targets = document.querySelectorAll(".section-heading, .designer, .solution-grid article, .pc-steps li, .price, .terms, .pc-api, .contact-panel");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  // ---- Luz que sigue al cursor en las tarjetas ----
  document.querySelectorAll(".solution-grid article").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  // ---- Conversación de demostración en el teléfono ----
  var chat = document.querySelector("[data-demo-chat]");
  var script = [
    ["out", "Hola, quiero información de apartamentos"],
    ["typing"],
    ["in", "¡Hola! 👋 Gracias por escribir a Plataforma Desarrollos. ¿En qué te ayudamos?"],
    ["opts", ["Información", "Agendar visita", "Hablar con asesor"], 1],
    ["out", "Agendar visita"],
    ["typing"],
    ["in", "¿Qué día y hora te queda bien? 📅"],
    ["out", "El sábado a las 10 am"],
    ["sys", "💾 Guardado: fecha de visita"],
    ["typing"],
    ["in", "¡Listo! ✅ Un asesor confirmará tu visita en breve."],
    ["sys", "👤 Chat asignado a Ana"]
  ];
  function bubble(className, text) {
    var el = document.createElement("div");
    el.className = className;
    el.textContent = text;
    chat.appendChild(el);
    while (chat.scrollHeight > chat.clientHeight + 4 && chat.children.length > 1) chat.firstElementChild.remove();
    return el;
  }
  async function playChat() {
    if (!chat) return;
    if (reduceMotion) {
      script.filter(function (s) { return s[0] === "in" || s[0] === "out"; }).slice(0, 5).forEach(function (s) { bubble("msg " + s[0], s[1]); });
      return;
    }
    for (;;) {
      chat.innerHTML = "";
      for (var i = 0; i < script.length; i++) {
        var s = script[i];
        if (s[0] === "typing") {
          var t = bubble("typing", "");
          t.innerHTML = "<i></i><i></i><i></i>";
          await wait(900);
          t.remove();
        } else if (s[0] === "opts") {
          var o = bubble("msg-opts", "");
          s[1].forEach(function (label) { var b = document.createElement("span"); b.textContent = label; o.appendChild(b); });
          await wait(900);
          o.children[s[2]].classList.add("pick");
          await wait(500);
        } else {
          bubble(s[0] === "sys" ? "msg-sys" : "msg " + s[0], s[1]);
          await wait(s[0] === "out" ? 1100 : 1300);
        }
      }
      await wait(3500);
    }
  }
  playChat();

  // ---- Diseñador de flujos de demostración ----
  var canvas = document.querySelector("[data-designer]");
  var svg = document.querySelector("[data-wires]");
  if (canvas && svg) {
    var NODES = [
      { id: "a", x: 2, y: 40, c: "#1d2b4f", bg: "#e8ecf5", t: "▶ Inicio", b: "Al iniciar conversación" },
      { id: "b", x: 21, y: 10, c: "#0f9f8f", bg: "#dcf7f3", t: "🔘 Botones", b: "¡Hola! ¿En qué te ayudamos?" },
      { id: "c", x: 40, y: 56, c: "#ea6a0c", bg: "#ffeedd", t: "❓ Pregunta", b: "¿Cuál es tu presupuesto?" },
      { id: "d", x: 59, y: 22, c: "#a16207", bg: "#fef6d8", t: "🔀 Condición", b: "Si presupuesto > 1,000,000" },
      { id: "e", x: 79, y: 6, c: "#db2777", bg: "#fde7f1", t: "🏷 Etiquetar", b: "Cliente premium" },
      { id: "f", x: 79, y: 60, c: "#15803d", bg: "#dcfce7", t: "👤 Pasar a asesor", b: "Al asesor con menos chats" }
    ];
    var LINKS = [["a", "b", "#1d2b4f"], ["b", "c", "#1d2b4f"], ["c", "d", "#1d2b4f"], ["d", "e", "#1fa8a2"], ["d", "f", "#e11d48"]];
    var els = {};
    NODES.forEach(function (n) {
      var el = document.createElement("div");
      el.className = "node";
      el.innerHTML = '<div class="hd"></div><div class="bd"></div>';
      el.firstChild.textContent = n.t;
      el.firstChild.style.background = n.bg;
      el.firstChild.style.color = n.c;
      el.lastChild.textContent = n.b;
      canvas.appendChild(el);
      els[n.id] = el;
    });
    var isCol = function () { return canvas.clientWidth < 760; };
    var index = function (id) { return NODES.findIndex(function (n) { return n.id === id; }); };
    var drawWires = function () {
      var r = canvas.getBoundingClientRect();
      var col = isCol();
      svg.innerHTML = LINKS.map(function (l) {
        var A = els[l[0]].getBoundingClientRect(), B = els[l[1]].getBoundingClientRect();
        var d, x1, y1, x2, y2;
        if (col && index(l[1]) - index(l[0]) === 1) {
          x1 = A.left - r.left + A.width / 2; y1 = A.bottom - r.top; x2 = B.left - r.left + B.width / 2; y2 = B.top - r.top;
          d = "M" + x1 + "," + y1 + " C" + x1 + "," + (y1 + 14) + " " + x2 + "," + (y2 - 14) + " " + x2 + "," + y2;
        } else if (col) {
          x1 = A.right - r.left; y1 = A.top - r.top + A.height / 2; x2 = B.right - r.left; y2 = B.top - r.top + B.height / 2;
          var out = Math.min(r.width - 6, Math.max(x1, x2) + 22);
          d = "M" + x1 + "," + y1 + " C" + out + "," + y1 + " " + out + "," + y2 + " " + x2 + "," + y2;
        } else {
          x1 = A.right - r.left; y1 = A.top - r.top + A.height / 2; x2 = B.left - r.left; y2 = B.top - r.top + B.height / 2;
          var dx = Math.max(30, Math.abs(x2 - x1) / 2);
          d = "M" + x1 + "," + y1 + " C" + (x1 + dx) + "," + y1 + " " + (x2 - dx) + "," + y2 + " " + x2 + "," + y2;
        }
        return '<path class="wire" stroke="' + l[2] + '" d="' + d + '"/><circle cx="' + x2 + '" cy="' + y2 + '" r="4" fill="' + l[2] + '"/>';
      }).join("");
    };
    var layout = function () {
      var col = isCol();
      canvas.classList.toggle("col", col);
      var w = canvas.clientWidth;
      NODES.forEach(function (n, i) {
        els[n.id].style.left = col ? "calc(50% - 89px)" : Math.min(n.x / 100 * w, w - 190) + "px";
        els[n.id].style.top = col ? (14 + i * 100) + "px" : n.y + "%";
      });
      drawWires();
    };
    layout();
    window.addEventListener("resize", layout);
    var designer = document.querySelector(".designer");
    if (designer) designer.addEventListener("transitionend", drawWires);
    if (!reduceMotion) {
      var path = ["a", "b", "c", "d", "e"], step = 0;
      setInterval(function () {
        Object.keys(els).forEach(function (k) { els[k].classList.remove("live"); });
        els[path[step % path.length]].classList.add("live");
        step++;
      }, 1100);
    }
  }

  // ---- Datos reales de la API (desde la especificación publicada en este sitio) ----
  fetch("./api/openapi.json").then(function (r) { return r.json(); }).then(function (spec) {
    var tags = {}, ops = 0;
    Object.keys(spec.paths).forEach(function (p) {
      Object.keys(spec.paths[p]).forEach(function (m) {
        var o = spec.paths[p][m];
        if (o && o.tags) { ops++; tags[o.tags[0]] = (tags[o.tags[0]] || 0) + 1; }
      });
    });
    var opsEl = document.querySelector("[data-ops]");
    if (opsEl) opsEl.textContent = String(ops);
    var box = document.querySelector("[data-api-tags]");
    if (box) {
      box.innerHTML = "";
      Object.keys(tags).forEach(function (t) {
        var s = document.createElement("span");
        s.textContent = t + " ";
        var b = document.createElement("b");
        b.textContent = tags[t];
        s.appendChild(b);
        box.appendChild(s);
      });
    }
  }).catch(function () {});
})();
