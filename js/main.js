// main.js – renderiza projetos dinamicamente a partir de data.js
import { projects } from "./data.js";

function createBadge(className, text) {
  const span = document.createElement("span");
  span.className = `badge ${className}`;
  span.textContent = text;
  return span;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h4");
    title.textContent = p.title;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = p.description;
    card.appendChild(desc);

    // Badges
    if (Array.isArray(p.badges)) {
      p.badges.forEach(b => {
        let text = "";
        switch (b) {
          case "badge-data": text = "Engenharia de Dados"; break;
          case "badge-ml": text = "Machine Learning"; break;
          case "badge-bi": text = "BI & Analytics"; break;
          case "badge-dev": text = "Automação & Software"; break;
          default: text = b;
        }
        const badgeEl = createBadge(b, text);
        card.appendChild(badgeEl);
      });
    }

    // Links (repo & demo)
    const linksDiv = document.createElement("div");
    linksDiv.style.marginTop = "0.5rem";
    if (p.repo) {
      const a = document.createElement("a");
      a.href = p.repo;
      a.target = "_blank";
      a.textContent = "Código";
      a.style.marginRight = "0.8rem";
      linksDiv.appendChild(a);
    }
    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.textContent = "Demo";
      linksDiv.appendChild(a);
    }
    card.appendChild(linksDiv);

    container.appendChild(card);
  });
}

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    btn.textContent = isDark ? "🌙" : "☀️";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
});
