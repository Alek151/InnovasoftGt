import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "src");
const dist = join(root, "dist");

if (!existsSync(source)) {
  console.error("No existe la carpeta src/.");
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(source, dist, { recursive: true });

console.log("Build exitoso: archivos publicados en dist/.");
