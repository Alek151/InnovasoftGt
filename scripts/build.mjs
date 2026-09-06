import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "src");
const dist = join(root, "dist");
const client = join(dist, "client");
const server = join(dist, "server");

if (!existsSync(source)) {
  console.error("No existe la carpeta src/.");
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(client, { recursive: true });
mkdirSync(server, { recursive: true });
cpSync(source, client, { recursive: true });

writeFileSync(
  join(server, "index.js"),
  `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;

    // La clave es pública por diseño de Google Maps, pero se inyecta en ejecución
    // para no almacenarla en el repositorio ni en los archivos estáticos.
    const page = (await response.text()).replace(
      "__NOMADA_GOOGLE_MAPS_KEY__",
      JSON.stringify(env.GOOGLE_MAPS_API_KEY || "")
    );
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/html; charset=UTF-8");
    return new Response(page, { status: response.status, statusText: response.statusText, headers });
  }
};
`,
  "utf8"
);

console.log("Build exitoso: archivos publicados en dist/client y Worker generado en dist/server.");
