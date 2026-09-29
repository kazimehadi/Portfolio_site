/* ==========================================================================
   skills.js — the tools list. Add, remove, or re-order tools here.
   Every tool links to its official site and opens in a new tab.
   ========================================================================== */
(function () {
  "use strict";

  var GROUPS = [
    {
      title: "Web development",
      blurb: "Front-end and back-end code for stores, portals, and APIs.",
      size: "7",
      tone: "",
      tools: [
        ["HTML", "https://developer.mozilla.org/docs/Web/HTML"],
        ["CSS", "https://developer.mozilla.org/docs/Web/CSS"],
        ["JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript"],
        ["React", "https://react.dev"],
        ["Node.js", "https://nodejs.org"],
        ["PHP", "https://www.php.net"],
        ["Tailwind CSS", "https://tailwindcss.com"]
      ]
    },
    {
      title: "WordPress & e-commerce",
      blurb: "Responsive stores and service sites for Toronto and GTA businesses, built with page builders and WooCommerce.",
      size: "5",
      tone: "blue",
      tools: [
        ["WordPress", "https://wordpress.org"],
        ["WooCommerce", "https://woocommerce.com"],
        ["Elementor", "https://elementor.com"],
        ["WPBakery", "https://wpbakery.com"],
        ["WPForms", "https://wpforms.com"]
      ]
    },
    {
      title: "Data, automation & research",
      blurb: "Spreadsheets, lead databases, and automated workflows that save time and stay accurate.",
      size: "5",
      tone: "pink",
      tools: [
        ["Excel", "https://www.microsoft.com/microsoft-365/excel"],
        ["Google Sheets", "https://workspace.google.com/products/sheets/"],
        ["Zapier", "https://zapier.com"],
        ["Apollo", "https://www.apollo.io"],
        ["Sales Navigator", "https://business.linkedin.com/sales-solutions/sales-navigator"]
      ]
    },
    {
      title: "Databases & workflow",
      blurb: "Data storage, version control, and the tooling that keeps projects moving.",
      size: "7",
      tone: "",
      tools: [
        ["MongoDB", "https://www.mongodb.com"],
        ["MySQL", "https://www.mysql.com"],
        ["Git", "https://git-scm.com"],
        ["GitHub", "https://github.com"],
        ["Jira", "https://www.atlassian.com/software/jira"],
        ["Postman", "https://www.postman.com"]
      ]
    },
    {
      title: "Marketplaces I work on",
      blurb: "Platforms where I have managed stores, sourced products, and grown client profiles.",
      size: "12",
      tone: "yellow",
      tools: [
        ["Upwork", "https://www.upwork.com"],
        ["Freelancer.com", "https://www.freelancer.com"],
        ["Etsy", "https://www.etsy.com"],
        ["eBay", "https://www.ebay.com"],
        ["1688", "https://www.1688.com"]
      ]
    }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function mono(name) {
    var w = name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean);
    return (w.length > 1 ? w[0].charAt(0) + w[1].charAt(0) : name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2));
  }

  /* moving rows: two rows, opposite directions, pause on hover */
  var all = [];
  GROUPS.forEach(function (g) { g.tools.forEach(function (t) { all.push(t); }); });

  function row(items, reverse, speed) {
    return (
      '<div class="marquee marquee--pause' + (reverse ? " marquee--reverse" : "") + '">' +
      '<div class="marquee__inner" data-speed="' + speed + '"><div class="marquee__group">' +
      items.map(function (t, i) {
        return '<a class="tool" href="' + esc(t[1]) + '" target="_blank" rel="noopener noreferrer">' +
               '<span class="tool__mono" data-c="' + (i % 4) + '" aria-hidden="true">' + esc(mono(t[0])) + "</span>" + esc(t[0]) + "</a>";
      }).join("") +
      "</div></div></div>"
    );
  }

  var rows = document.getElementById("tool-rows");
  if (rows) {
    var half = Math.ceil(all.length / 2);
    rows.innerHTML = row(all.slice(0, half), false, 55) + row(all.slice(half), true, 45);
  }

  var bento = document.getElementById("tool-groups");
  if (bento) {
    bento.innerHTML = GROUPS.map(function (g) {
      return (
        '<section class="bento__card bento__card--' + g.size + (g.tone ? " bento__card--" + g.tone : "") + '">' +
        "<h3>" + esc(g.title) + "</h3><p>" + esc(g.blurb) + "</p>" +
        '<div class="chips">' +
        g.tools.map(function (t) {
          return '<a class="tool-chip" href="' + esc(t[1]) + '" target="_blank" rel="noopener noreferrer">' +
                 '<span class="tool-chip__mono" aria-hidden="true"><span>' + esc(mono(t[0])) + "</span></span>" + esc(t[0]) + "</a>";
        }).join("") +
        "</div></section>"
      );
    }).join("");
  }
})();
