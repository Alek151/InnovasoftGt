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
    return env.ASSETS.fetch(request);
  }
};
`,
  "utf8"
);

console.log("Build exitoso: archivos publicados en dist/client y Worker generado en dist/server.");
