// Publica el sitio estático: copia site/ a build/, que es la carpeta que
// Vercel y Cloudflare Pages despliegan después de `npm run build`.
import { cpSync, rmSync, existsSync } from "node:fs";

rmSync("build", { recursive: true, force: true });
cpSync("site", "build", { recursive: true });

if (!existsSync("build/index.html")) {
  console.error("build/index.html no existe: algo falló al copiar site/");
  process.exit(1);
}
console.log("Sitio estático copiado a build/");
