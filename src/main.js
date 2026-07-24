const menuButton = document.querySelector("[data-menu-button]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = document.querySelectorAll("[data-nav-panel] a");

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
