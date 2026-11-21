// Logos del stack que flotan a ambos costados de la columna mientras
// la sección "Stack técnico" está en pantalla. Solo en pantallas anchas.
(() => {
  const ICONS = [
    "react", "nextdotjs", "angular", "typescript", "javascript", "tailwindcss",
    "sass", "ionic", "nativescript", "nodedotjs", "hono", "graphql",
    "postgresql", "supabase", "oracle", "dotnet", "php", "anthropic",
    "claude", "n8n", "whatsapp", "cloudflareworkers", "cloudflare",
    "amazonwebservices", "terraform", "docker", "githubactions", "jenkins",
    "git", "vitest", "jest",
  ];
  const COLUMN = 720;     // ancho de main en styles.css
  const MIN_GUTTER = 130; // espacio mínimo a cada lado para mostrar logos
  const section = document.getElementById("stack");
  if (!section || !("IntersectionObserver" in window)) return;

  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (a, b) => a + Math.random() * (b - a);

  const layer = document.createElement("div");
  layer.className = "tech-float";
  layer.setAttribute("aria-hidden", "true");

  const items = ICONS.map((name, i) => {
    const el = document.createElement("span");
    const size = Math.round(rand(24, 40));
    el.style.width = el.style.height = size + "px";
    el.style.setProperty("--icon", `url(img/tech/${name}.svg)`);
    el.style.setProperty("--o", rand(0.16, 0.34).toFixed(2));
    if (Math.random() < 0.45) el.classList.add("sepia");
    layer.appendChild(el);
    return { el, size, side: i % 2, timer: 0 };
  });
  document.body.appendChild(layer);

  function bounds({ side, size }) {
    const vw = document.documentElement.clientWidth;
    const vh = innerHeight;
    const gutter = (vw - COLUMN) / 2;
    if (gutter < MIN_GUTTER) return null;
    const pad = 36;
    return side
      ? { x0: vw - gutter + pad, x1: vw - 20 - size, y0: 84, y1: vh - size - 20 }
      : { x0: 20, x1: gutter - pad - size, y0: 84, y1: vh - size - 20 };
  }

  function place(item, dur) {
    const b = bounds(item);
    if (!b) return false;
    const x = rand(b.x0, Math.max(b.x0, b.x1));
    const y = rand(b.y0, Math.max(b.y0, b.y1));
    item.el.style.transitionDuration = `${dur}s, 1.6s`;
    item.el.style.transform = `translate(${x}px, ${y}px) rotate(${rand(-30, 30)}deg)`;
    return true;
  }

  function drift(item) {
    const dur = rand(10, 18);
    if (place(item, dur) && !still) {
      item.timer = setTimeout(() => drift(item), dur * 1000 * rand(0.6, 0.95));
    }
  }

  let active = false;

  function start() {
    if (active) return;
    active = true;
    items.forEach((item, i) => {
      // Aparece en un punto al azar sin animar el desplazamiento, luego empieza a flotar.
      if (!item.el.classList.contains("in")) {
        place(item, 0);
        void item.el.offsetWidth; // fija la posición inicial antes de animar
      }
      item.timer = setTimeout(() => {
        item.el.classList.add("in");
        drift(item);
      }, i * 90);
    });
  }

  function stop() {
    if (!active) return;
    active = false;
    items.forEach((item) => {
      clearTimeout(item.timer);
      item.el.classList.remove("in");
    });
  }

  new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? start() : stop()),
    // Activo solo cuando la sección cruza la franja central de la pantalla,
    // para no mezclarse con los logos de empresa de Experiencia.
    { rootMargin: "-40% 0px -40% 0px" }
  ).observe(section);
})();
