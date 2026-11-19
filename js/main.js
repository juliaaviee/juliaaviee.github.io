// main.js – renderiza projetos dinamicamente a partir de data.js
import { projects } from "./data.js";

const BADGE_LABELS = {
  "badge-data": "Engenharia de Dados",
  "badge-ml": "Machine Learning",
  "badge-bi": "BI & Analytics",
  "badge-dev": "Automação & Software",
};

function createBadge(className, text) {
  const span = document.createElement("span");
  span.className = `badge ${className}`;
  span.textContent = text;
  return span;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    if (Array.isArray(p.badges) && p.badges.length > 0) {
      const badgesWrapper = document.createElement("div");
      badgesWrapper.className = "card-badges";

      p.badges.forEach((b) => {
        const text = BADGE_LABELS[b] || b;
        badgesWrapper.appendChild(createBadge(b, text));
      });

      card.appendChild(badgesWrapper);
    }

    const title = document.createElement("h3");
    title.textContent = p.title;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = p.description;
    card.appendChild(desc);

    const linksDiv = document.createElement("div");
    linksDiv.className = "card-links";

    if (p.repo) {
      const a = document.createElement("a");
      a.href = p.repo;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Código ↗";
      linksDiv.appendChild(a);
    }

    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Demo ↗";
      linksDiv.appendChild(a);
    }

    card.appendChild(linksDiv);
    container.appendChild(card);
  });
}

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  if (!btn) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    btn.textContent = isDark ? "🌙" : "☀️";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
});