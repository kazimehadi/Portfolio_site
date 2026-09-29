/* ==========================================================================
   main.js — shared behaviour for every page.
   Edit SITE below to change your contact details, links, and navigation
   everywhere at once (the header and footer are built from it).
   ========================================================================== */
(function () {
  "use strict";

  var SITE = {
    name: "Kazi Mehadi Hasan",
    short: "Kazi Mehadi",
    email: "kazihmehadi@gmail.com",
    phone: "+880 1677-878818",
    phoneHref: "+8801677878818",
    cv: "assets/Kazi_Mehadi_Hasan_CV.pdf",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kazi-mehadi" },
      { label: "GitHub", url: "https://github.com/kazimehadi" },
      { label: "Behance", url: "https://www.behance.net/kazimehadi" },
      { label: "Upwork", url: "https://www.upwork.com/freelancers/~014f332dc89dc9664d" }
    ],
    nav: [
      { label: "About", href: "index.html", page: "about" },
      { label: "Skills", href: "skills.html", page: "skills" },
      { label: "Experience", href: "experience.html", page: "experience" },
      { label: "Projects", href: "projects.html", page: "projects" },
      { label: "Achievements", href: "achievements.html", page: "achievements" }
    ]
  };
  window.SITE = SITE;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var page = document.body.getAttribute("data-page");

  /* ---------- Header ---------- */
  var sun =
    '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon =
    '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var burger =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  var headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.className = "site-header";
    headerEl.innerHTML =
      '<a class="skip" href="#main">Skip to content</a>' +
      '<div class="site-header__bar">' +
      '<a class="logo" href="index.html" aria-label="' + SITE.name + ', home">' +
      '<span class="logo__mark">KMH</span><span class="logo__text">' + SITE.short + "</span></a>" +
      '<nav class="nav" id="nav" aria-label="Primary">' +
      SITE.nav
        .map(function (n) {
          return '<a href="' + n.href + '"' + (n.page === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
        })
        .join("") +
      "</nav>" +
      '<button class="icon-btn theme-toggle" type="button" aria-label="Switch to dark theme">' + sun + moon + "</button>" +
      '<a class="btn btn--sm header-cta" href="#contact">Contact</a>' +
      '<button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu">' + burger + "</button>" +
      "</div>";

    var menuBtn = headerEl.querySelector(".menu-btn");
    function setMenu(open) {
      headerEl.setAttribute("data-open", open ? "true" : "false");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    menuBtn.addEventListener("click", function () {
      setMenu(headerEl.getAttribute("data-open") !== "true");
    });
    headerEl.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    /* theme toggle */
    var toggle = headerEl.querySelector(".theme-toggle");
    function syncToggle() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
    syncToggle();
    toggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (err) { /* storage unavailable */ }
      syncToggle();
    });
  }

  /* ---------- Footer / contact ---------- */
  var footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.className = "site-footer";
    footerEl.id = "contact";
    var word = '<span class="footer-marquee__word">Kazi Mehadi Hasan</span><i class="star" aria-hidden="true"></i>' +
               '<span class="footer-marquee__word footer-marquee__word--fill">Let\u2019s talk</span><i class="star" aria-hidden="true"></i>';
    footerEl.innerHTML =
      '<div class="footer-marquee marquee" aria-hidden="true"><div class="marquee__inner" data-speed="70"><div class="marquee__group">' + word + "</div></div></div>" +
      '<div class="wrap footer__grid">' +
      "<div>" +
      '<h2 class="footer__title">Let\u2019s build something great together.</h2>' +
      '<p class="footer__copy">Open to remote and freelance work: WordPress and e-commerce builds, automation, and data projects. Email is the fastest way to reach me.</p>' +
      '<a class="btn btn--pink btn--lg" href="mailto:' + SITE.email + '">' + SITE.email + "</a>" +
      "</div>" +
      '<div class="footer__links">' +
      '<a href="tel:' + SITE.phoneHref + '"><span>Phone</span><small>' + SITE.phone + "</small></a>" +
      SITE.socials
        .map(function (s) {
          return '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer"><span>' + s.label + '</span><small>Open profile</small></a>';
        })
        .join("") +
      "</div></div>" +
      '<div class="wrap footer__base"><p>\u00a9 ' + new Date().getFullYear() + " " + SITE.name + '. Dhaka, Bangladesh.</p><a href="#top">Back to top</a></div>';
  }

  /* ---------- Left social rail ---------- */
  var ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.4 1-2.5 2.3-2.5S16.5 12 16.5 13.5V16"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7.5 8 6 8-6"/></svg>'
  };
  function socialUrl(label) {
    for (var i = 0; i < SITE.socials.length; i++) if (SITE.socials[i].label === label) return SITE.socials[i].url;
    return "";
  }
  var rail = document.createElement("nav");
  rail.className = "rail";
  rail.setAttribute("aria-label", "Social links");
  rail.innerHTML =
    '<a href="' + socialUrl("GitHub") + '" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">' + ICONS.github + "</a>" +
    '<a href="' + socialUrl("LinkedIn") + '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">' + ICONS.linkedin + "</a>" +
    '<a href="' + socialUrl("Upwork") + '" target="_blank" rel="noopener noreferrer" aria-label="Upwork (opens in a new tab)">' + ICONS.arrow + "</a>" +
    '<a href="mailto:' + SITE.email + '" aria-label="Email ' + SITE.email + '">' + ICONS.mail + "</a>";
  document.body.appendChild(rail);

  /* ---------- Cursor glow + custom cursor (mouse only) ---------- */
  var root = document.documentElement;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer) {
    var cur = document.createElement("div");
    cur.className = "cursor";
    cur.setAttribute("aria-hidden", "true");
    cur.innerHTML = '<div class="cursor__ring"><span class="cursor__label"></span></div><div class="cursor__dot"></div>';
    document.body.appendChild(cur);
    var ring = cur.querySelector(".cursor__ring");
    var dot = cur.querySelector(".cursor__dot");
    var label = cur.querySelector(".cursor__label");

    var tx = -100, ty = -100, rx = -100, ry = -100, running = false;
    var HOVER = "a, button, summary, label, [role='button'], .card, .tool, .filter, .repo";

    function frame() {
      // the dot sticks to the pointer; the ring eases after it
      rx += (tx - rx) * (reduced ? 1 : 0.2);
      ry += (ty - ry) * (reduced ? 1 : 0.2);
      dot.style.transform = "translate(" + tx + "px," + ty + "px)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      if (Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1) {
        requestAnimationFrame(frame);
      } else {
        running = false;
      }
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }

    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!cur.classList.contains("is-on")) {
        rx = tx; ry = ty;
        cur.classList.add("is-on");
        root.classList.add("has-cursor");
      }
      root.style.setProperty("--mx", tx + "px");
      root.style.setProperty("--my", ty + "px");
      kick();
    }, { passive: true });

    document.addEventListener("mouseover", function (e) {
      var t = e.target;
      // the pop-up lives in the browser's top layer above the custom cursor, so use the normal pointer there
      cur.classList.toggle("is-hidden", !!(t.closest && t.closest(".modal")));
      var hit = t.closest ? t.closest(HOVER) : null;
      cur.classList.toggle("is-hover", !!hit);
      var text = "";
      if (hit) {
        var inCard = t.closest(".card");
        var inLinks = t.closest(".card__links");
        text = hit.getAttribute("data-cursor") || (inCard && !inLinks ? "View" : "");
      }
      label.textContent = text;
      cur.classList.toggle("has-label", !!text);
    });
    document.addEventListener("mouseleave", function () { cur.classList.remove("is-on"); });
    document.addEventListener("mouseenter", function () { if (root.classList.contains("has-cursor")) cur.classList.add("is-on"); });
    window.addEventListener("mousedown", function () { cur.classList.add("is-down"); });
    window.addEventListener("mouseup", function () { cur.classList.remove("is-down"); });
  }

  /* CV links anywhere on the page */
  document.querySelectorAll("[data-cv]").forEach(function (a) { a.setAttribute("href", SITE.cv); });

  /* ---------- Word rotator ---------- */
  document.querySelectorAll("[data-rotator]").forEach(function (el) {
    var words = el.getAttribute("data-rotator").split("|");
    el.innerHTML = words
      .map(function (w, i) { return "<span" + (i === 0 ? ' class="is-on"' : "") + ">" + w + "</span>"; })
      .join("");
    if (reduced || words.length < 2) return;
    var spans = Array.prototype.slice.call(el.children);
    var i = 0;
    setInterval(function () {
      var cur = spans[i];
      i = (i + 1) % spans.length;
      var next = spans[i];
      cur.classList.remove("is-on");
      cur.classList.add("is-out");
      next.classList.remove("is-out");
      next.classList.add("is-on");
      setTimeout(function () { cur.classList.remove("is-out"); }, 650);
    }, 2600);
  });

  /* ---------- Portrait fallback (shows initials if the photo is missing) ---------- */
  document.querySelectorAll(".portrait__frame img").forEach(function (img) {
    var box = img.closest(".portrait");
    function fail() { box.classList.add("portrait--nophoto"); }
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  });

  /* ---------- Marquees ---------- */
  function buildMarquees() {
    document.querySelectorAll(".marquee").forEach(function (m) {
      var inner = m.querySelector(".marquee__inner");
      if (!inner) return;
      var groups = inner.querySelectorAll(".marquee__group");
      var first = groups[0];
      if (!first) return;
      // reset earlier clones (on resize)
      Array.prototype.slice.call(groups, 1).forEach(function (g) { g.remove(); });
      var groupW = first.getBoundingClientRect().width;
      if (!groupW) return;
      var vw = Math.max(document.documentElement.clientWidth, 320) * 1.15;
      var k = Math.max(1, Math.ceil(vw / groupW));
      // total groups = 2k so that translating by -50% loops seamlessly
      for (var n = 1; n < k * 2; n++) {
        var clone = first.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("a, button").forEach(function (el) { el.setAttribute("tabindex", "-1"); });
        inner.appendChild(clone);
      }
      var speed = Number(inner.getAttribute("data-speed")) || 60; // pixels per second
      inner.style.setProperty("--dur", Math.max(12, (k * groupW) / speed).toFixed(1) + "s");
    });
  }
  window.buildMarquees = buildMarquees;

  function init() {
    buildMarquees();
    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(buildMarquees, 250);
    });
  }
  if (document.fonts && document.fonts.ready) {
    // wait for web fonts so group widths are measured correctly
    document.fonts.ready.then(init);
  } else {
    window.addEventListener("load", init);
  }
})();
