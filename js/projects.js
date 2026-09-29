/* ==========================================================================
   projects.js — renders projects from projects-data.js
   - #projects        (data-mode="teaser" | "editorial") the card grid
   - #filters         filter buttons (projects page only)
   - #project-modal   detail pop-up (projects page only)
   - #repos           live list of public GitHub repositories
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.PROJECTS || [];
  var TYPES = { wordpress: "WordPress", development: "Development", operations: "Operations & data" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function usableLinks(p) {
    return (p.links || []).filter(function (l) { return l && l.url; });
  }
  function byId(id) {
    for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i];
    return null;
  }

  /* media: placeholder art underneath, real image on top (removed if it fails to load) */
  function media(p, src, alt) {
    var img = src
      ? '<img src="' + esc(src) + '" alt="' + esc(alt || p.title + " screenshot") + '" loading="lazy" decoding="async" onerror="this.remove()">'
      : "";
    return (
      '<div class="media"><div class="ph" aria-hidden="true"><span class="ph__mark">' + esc(p.mark || p.title.charAt(0)) +
      '</span><span class="ph__type">' + esc(TYPES[p.type] || "") + "</span></div>" + img + "</div>"
    );
  }

  function linkButtons(p) {
    return usableLinks(p)
      .map(function (l) {
        return '<a class="btn btn--ghost btn--sm" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label || "Visit") + "</a>";
      })
      .join("");
  }

  function card(p, teaser) {
    var open = teaser
      ? '<a class="card__open" href="projects.html#' + esc(p.id) + '">' + esc(p.title) + "</a>"
      : '<button class="card__open" type="button" data-open="' + esc(p.id) + '" aria-haspopup="dialog">' + esc(p.title) + "</button>";
    var links = teaser ? "" : linkButtons(p);
    return (
      '<article class="card" data-accent="' + esc(p.accent || "pink") + '">' +
      media(p, p.image, p.title + " screenshot") +
      '<div class="card__meta"><span class="chip">' + esc(TYPES[p.type] || "") + "</span><span>" + esc(p.role || "") + "</span></div>" +
      '<h3 class="card__title">' + open + "</h3>" +
      (p.subtitle ? '<p class="card__sub">' + esc(p.subtitle) + "</p>" : "") +
      '<p class="card__summary">' + esc(p.summary || "") + "</p>" +
      (teaser ? "" : '<div class="chips">' + (p.tools || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>") +
      (links ? '<div class="card__links">' + links + "</div>" : "") +
      "</article>"
    );
  }

  /* ---------- grid ---------- */
  var grid = document.getElementById("projects");
  var filtersEl = document.getElementById("filters");
  var modal = document.getElementById("project-modal");
  var current = "all";

  function renderGrid() {
    if (!grid) return;
    var teaser = grid.getAttribute("data-mode") === "teaser";
    var list;
    if (teaser) {
      var ids = (grid.getAttribute("data-featured") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
      list = ids.map(byId).filter(Boolean);
    } else {
      list = DATA.filter(function (p) { return current === "all" || p.type === current; });
    }
    grid.innerHTML = list.map(function (p) { return card(p, teaser); }).join("");
  }

  function renderFilters() {
    if (!filtersEl) return;
    var keys = ["all", "wordpress", "development", "operations"];
    filtersEl.innerHTML = keys
      .map(function (k) {
        var n = k === "all" ? DATA.length : DATA.filter(function (p) { return p.type === k; }).length;
        if (!n) return "";
        var label = k === "all" ? "All work" : TYPES[k];
        return '<button class="filter" type="button" data-filter="' + k + '" aria-pressed="' + (k === current) + '">' +
               label + ' <span class="filter__count">' + n + "</span></button>";
      })
      .join("");
    filtersEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (!b) return;
      current = b.getAttribute("data-filter");
      filtersEl.querySelectorAll("[data-filter]").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      renderGrid();
    });
  }

  /* ---------- modal ---------- */
  var stageSrc = null;

  function fillModal(p) {
    var gallery = (p.gallery && p.gallery.length ? p.gallery : p.image ? [p.image] : []).slice();
    stageSrc = gallery[0] || null;
    var thumbs = gallery.length > 1
      ? '<div class="modal__thumbs" role="group" aria-label="Project images">' +
        gallery.map(function (g, i) {
          return '<button class="modal__thumb" type="button" data-src="' + esc(g) + '" aria-label="Show image ' + (i + 1) + '"' +
                 (i === 0 ? ' aria-current="true"' : "") + '><img src="' + esc(g) + '" alt="" onerror="this.parentNode.remove()"></button>';
        }).join("") + "</div>"
      : "";
    var links = linkButtons(p);
    modal.setAttribute("data-accent", p.accent || "pink");
    modal.querySelector(".modal__content").innerHTML =
      '<div class="modal__grid">' +
      '<div class="modal__media"><div class="modal__stage">' + media(p, stageSrc, p.title + " screenshot") + "</div>" + thumbs + "</div>" +
      '<div class="modal__body">' +
      '<div class="chips"><span class="chip">' + esc(TYPES[p.type] || "") + '</span><span class="chip">' + esc(p.role || "") + "</span></div>" +
      '<h2 id="modal-title">' + esc(p.title) + "</h2>" +
      (p.subtitle ? '<p class="modal__sub">' + esc(p.subtitle) + "</p>" : "") +
      (p.description || [p.summary]).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      '<h3>Built with</h3><div class="chips">' + (p.tools || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
      (links ? '<div class="card__links" style="margin-top:.75rem">' + links + "</div>" : "") +
      "</div></div>";
  }

  function openProject(id, updateHash) {
    var p = byId(id);
    if (!p || !modal) return;
    fillModal(p);
    if (!modal.open) modal.showModal();
    if (updateHash !== false) history.replaceState(null, "", "#" + id);
  }

  function setupModal() {
    if (!modal) return;
    modal.innerHTML =
      '<button class="icon-btn modal__close" type="button" aria-label="Close project details" data-close>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<div class="modal__content"></div>';
    modal.setAttribute("aria-labelledby", "modal-title");

    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) { modal.close(); return; }
      var th = e.target.closest(".modal__thumb");
      if (th) {
        var img = modal.querySelector(".modal__stage .media img");
        if (img) img.src = th.getAttribute("data-src");
        modal.querySelectorAll(".modal__thumb").forEach(function (x) { x.removeAttribute("aria-current"); });
        th.setAttribute("aria-current", "true");
      }
    });
    modal.addEventListener("close", function () {
      document.body.style.overflow = "";
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    });
    modal.addEventListener("cancel", function () { document.body.style.overflow = ""; });

    if (grid) {
      grid.addEventListener("click", function (e) {
        var b = e.target.closest("[data-open]");
        if (b) { document.body.style.overflow = "hidden"; openProject(b.getAttribute("data-open")); }
      });
    }
    function fromHash() {
      var id = decodeURIComponent(location.hash.replace("#", ""));
      if (id && byId(id)) {
        var p = byId(id);
        if (current !== "all" && p.type !== current) { current = "all"; renderFilters(); renderGrid(); }
        document.body.style.overflow = "hidden";
        openProject(id, false);
      }
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  }

  /* ---------- GitHub repositories ---------- */
  function loadRepos() {
    var box = document.getElementById("repos");
    if (!box) return;
    var user = box.getAttribute("data-user");
    var fallback = function () {
      box.innerHTML = '<p class="repos__empty">The repository list could not load right now. <a href="https://github.com/' + esc(user) + '" target="_blank" rel="noopener noreferrer">Browse all repositories on GitHub</a>.</p>';
    };
    fetch("https://api.github.com/users/" + encodeURIComponent(user) + "/repos?per_page=100&sort=updated")
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (all) {
        var self = (user + ".github.io").toLowerCase();
        var repos = all
          .filter(function (r) { return !r.fork && !r.archived && r.name.toLowerCase() !== self; })
          .sort(function (a, b) { return (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)); })
          .slice(0, 6);
        if (!repos.length) throw new Error("empty");
        box.innerHTML = repos.map(function (r) {
          return '<a class="repo" href="' + esc(r.html_url) + '" target="_blank" rel="noopener noreferrer">' +
                 "<h3>" + esc(r.name) + "</h3>" +
                 "<p>" + esc(r.description || "No description yet.") + "</p>" +
                 '<div class="repo__meta">' + (r.language ? '<span class="repo__lang">' + esc(r.language) + "</span>" : "") +
                 (r.stargazers_count ? "<span>" + r.stargazers_count + " stars</span>" : "") + "<span>View on GitHub</span></div></a>";
        }).join("");
      })
      .catch(fallback);
  }

  renderFilters();
  renderGrid();
  setupModal();
  loadRepos();
})();
