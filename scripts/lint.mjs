import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "src/index.html",
  "src/styles.css",
  "src/main.js",
  "src/assets/logo-innovasoftgt.svg",
  "src/robots.txt",
  "src/sitemap.xml"
];

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Falta el archivo requerido: ${file}`);
  }
}

if (errors.length === 0) {
  const html = readFileSync(join(root, "src/index.html"), "utf8");
  const css = readFileSync(join(root, "src/styles.css"), "utf8");
  const js = readFileSync(join(root, "src/main.js"), "utf8");

  const requiredHtml = [
    "<title>",
    "meta name=\"description\"",
    "meta name=\"keywords\"",
    "meta property=\"og:title\"",
    "meta property=\"og:url\"",
    "application/ld+json",
    "rel=\"sitemap\"",
    "https://innovasoftgt.com",
    "id=\"experiencia\"",
    "id=\"pasaporte\"",
    "id=\"viaja\"",
    "id=\"comunidad\"",
    "id=\"muy-pronto\"",
    "aria-label"
  ];

  for (const token of requiredHtml) {
    if (!html.includes(token)) {
      errors.push(`No se encontro en HTML: ${token}`);
    }
  }

  const assetMatches = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value) => value.startsWith("./") || value.startsWith("assets/"));

  for (const asset of assetMatches) {
    const normalized = asset.replace(/^\.\//, "");
    const target = join(root, "src", normalized);
    if (!existsSync(target) || !statSync(target).isFile()) {
      errors.push(`Referencia rota: ${asset}`);
    }
  }

  if (!css.includes("@media (prefers-reduced-motion: reduce)")) {
    errors.push("Falta soporte CSS para prefers-reduced-motion.");
  }

  if (!css.includes(":focus-visible")) {
    errors.push("Faltan estados de foco visibles para teclado.");
  }

  if (!js.includes("aria-expanded")) {
    errors.push("El menu movil debe actualizar aria-expanded.");
  }

  if (html.includes("target=\"_blank\"") && !html.includes("rel=\"noopener noreferrer\"")) {
    errors.push("Los enlaces externos con target _blank deben usar rel=\"noopener noreferrer\".");
  }

  if (/SinFin|password|token|secret|api[_-]?key/i.test(`${html}\n${css}\n${js}`)) {
    errors.push("Se detecto posible contenido sensible o referencia prohibida.");
  }
}

if (errors.length > 0) {
  console.error("Lint fallido:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Lint exitoso: estructura, accesibilidad basica, assets y contenido sensible verificados.");
