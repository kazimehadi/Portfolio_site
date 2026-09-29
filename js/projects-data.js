/* ==========================================================================
   projects-data.js — every project on the site lives here.

   HOW TO ADD IMAGES
   Drop a screenshot into  assets/img/projects/  using the file name in the
   `image` field below (for example  assets/img/projects/nafias-fashion-store.jpg ).
   Until the file exists, a coloured placeholder is shown automatically.
   For a gallery inside the pop-up, list more files in `gallery`.

   HOW TO ADD LINKS
   Fill the `links` array. Each link becomes a button on the card and in the
   pop-up. Labels are up to you: "Live site", "GitHub", "Case study", "Behance"...
     links: [
       { label: "Live site", url: "https://example.com" },
       { label: "GitHub",    url: "https://github.com/kazimehadi/repo-name" }
     ]

   type    : "wordpress" | "development" | "operations"
   accent  : "pink" | "blue" | "yellow" | "teal"   (card colour)
   mark    : short letters shown on the placeholder
   Order in this list = order on the page.
   ========================================================================== */
window.PROJECTS = [
  /* ------------------------------ WordPress ------------------------------ */
  {
    id: "nafias-fashion-store",
    title: "Nafia\u2019s Fashion Store",
    subtitle: "WooCommerce fashion storefront",
    type: "wordpress",
    role: "Developer",
    accent: "pink",
    mark: "NF",
    tools: ["WordPress", "WooCommerce", "Elementor"],
    summary: "A responsive fashion store with easy browsing and buying on desktop and mobile, built for a growing brand.",
    description: [
      "Developed a responsive fashion e-commerce website using WordPress, WooCommerce, and Elementor. I handled the store setup, page design and customization, product and category structure, responsive layouts, shopping functionality, and overall user experience.",
      "The website gives customers an easy product-browsing and purchasing experience across desktop and mobile devices. I also worked on performance, usability, and maintaining a clean, conversion-focused storefront suited to a growing fashion brand."
    ],
    image: "assets/img/projects/nafias-fashion-store.jpg",
    gallery: ["assets/img/projects/nafias-fashion-store.jpg", "assets/img/projects/nafias-fashion-store-2.jpg"],
    links: [
      { label: "Live site", url: "https://nafias.com.bd/" }
    ]
  },
  {
    id: "mr-steam-toronto",
    title: "Mr. Steam Toronto",
    subtitle: "Carpet & upholstery cleaning website",
    type: "wordpress",
    role: "WordPress developer",
    accent: "blue",
    mark: "MS",
    tools: ["WordPress", "Elementor", "WPForms"],
    summary: "A booking-focused site for a Greater Toronto Area cleaning franchise, with per-room pricing and before/after galleries.",
    description: [
      "Built a WordPress website for Mr. Steam Toronto, a carpet, rug, upholstery, and mattress cleaning franchise serving the Greater Toronto Area.",
      "The site features transparent per-room pricing, before/after result galleries, embedded Google reviews, an online booking and quote system, and dedicated service pages for each cleaning type.",
      "It is designed with trust-building elements throughout (BBB accreditation, commercial client logos, and a \u201cMeet the Team\u201d section) to convert local search visitors into booked appointments. Built with WordPress, Elementor, and WPForms, and fully responsive across devices."
    ],
    image: "assets/img/projects/mr-steam-toronto.jpg",
    gallery: ["assets/img/projects/mr-steam-toronto.jpg", "assets/img/projects/mr-steam-toronto-2.jpg"],
    links: [
      { label: "Live site", url: "https://www.mrsteamtoronto.ca/" }
    ]
  },
  {
    id: "vintage-cleaning",
    title: "Vintage Cleaning",
    subtitle: "Professional cleaning services website",
    type: "wordpress",
    role: "Designer & developer",
    accent: "yellow",
    mark: "VC",
    tools: ["WordPress", "WPBakery", "WooCommerce"],
    summary: "A full site for a Toronto and GTA cleaning company, with 10+ service pages, a quote flow, and WooCommerce booking.",
    description: [
      "Designed and built a full WordPress site for Vintage Cleaning, a residential and commercial cleaning company serving Toronto and the GTA.",
      "The site features 10+ dedicated service pages, a custom quote request flow, WooCommerce-powered booking and checkout, trust signals (Trustpilot rating, BBB badges, testimonials), and location-targeted SEO copy across major GTA areas.",
      "Built with WordPress, WPBakery Page Builder, and WooCommerce, the site is fully responsive and structured to turn visitors into booked appointments through clear service breakdowns and a streamlined lead-generation form."
    ],
    image: "assets/img/projects/vintage-cleaning.jpg",
    gallery: ["assets/img/projects/vintage-cleaning.jpg"],
    links: [
      { label: "Live site", url: "https://vintagecleaning.ca/" }
    ]
  },

  /* ---------------------- Development (Git projects) ---------------------- */
  {
    id: "grapmart",
    title: "Grapmart",
    subtitle: "Ecommerce store",
    type: "development",
    role: "Developer",
    accent: "teal",
    mark: "GM",
    tools: ["React", "Node.js"],
    summary: "An online grocery marketplace serving 1,000+ customers, with a full admin portal.",
    description: [
      "An online grocery marketplace built and deployed to serve 1,000+ customers, with a full admin portal for order, user, and product management."
    ],
    image: "assets/img/projects/grapmart.jpg",
    gallery: [],
    links: [
      /* { label: "GitHub", url: "https://github.com/kazimehadi/..." } */
    ]
  },
  {
    id: "storex-api",
    title: "Storex API",
    subtitle: "Public REST API for store demos",
    type: "development",
    role: "Developer",
    accent: "yellow",
    mark: "SX",
    tools: ["Node.js", "Express.js", "MongoDB", "Postman"],
    summary: "A public REST API for store management demos, ready to use for teaching, testing, and prototyping.",
    description: [
      "A public REST API for store management demos, designed and deployed for teaching, testing, and prototyping without needing any backend setup."
    ],
    image: "assets/img/projects/storex-api.jpg",
    gallery: [],
    links: []
  },

  /* ------------------------- Operations & data ------------------------- */
  {
    id: "ebay-listing-order-management",
    title: "eBay Product Listing and Order Management",
    subtitle: "Store operations as a virtual assistant",
    type: "operations",
    role: "Virtual assistant",
    accent: "teal",
    mark: "eB",
    tools: ["eBay", "Image editing", "SEO"],
    summary: "End-to-end eBay store operations: listings, orders, customer messages, tracking, and inventory.",
    description: [
      "Managed end-to-end eBay store operations, including optimized product listings, image editing, SEO-friendly titles, and category selection.",
      "Handled daily order processing, customer messages, tracking updates, and issue resolution. Kept inventory accurate and improved listing quality by following eBay best practices, which meant smoother operations and a better buyer experience."
    ],
    image: "assets/img/projects/ebay-listing-order-management.jpg",
    gallery: ["assets/img/projects/ebay-listing-order-management.jpg"],
    links: [
      { label: "View on Upwork", url: "https://www.upwork.com/freelancers/~014f332dc89dc9664d?p=1999805434886590464" }
    ]
  },
  {
    id: "etsy-product-research",
    title: "Etsy Product Research & Supplier Sourcing",
    subtitle: "Finding products and suppliers worth selling",
    type: "operations",
    role: "Product research & sourcing",
    accent: "pink",
    mark: "ET",
    tools: ["Etsy", "1688", "Google Sheets"],
    summary: "Researched Etsy demand and sourced reliable 1688 suppliers, with every detail organized for client review.",
    description: [
      "Conducted Etsy product research and supplier sourcing using Etsy and 1688. Analyzed buyer interest, reviews, order activity, pricing, and supplier reliability to identify promising products.",
      "Collected product links, supplier information, pricing, and other key data, and organized everything accurately in Google Sheets for easy client review."
    ],
    image: "assets/img/projects/etsy-product-research.jpg",
    gallery: ["assets/img/projects/etsy-product-research.jpg", "assets/img/projects/etsy-product-research-2.jpg"],
    links: [
      { label: "View on Upwork", url: "https://www.upwork.com/freelancers/~014f332dc89dc9664d?p=2099876679583318016" }
    ]
  },
  {
    id: "b2b-lead-generation",
    title: "B2B Lead Generation & Prospect Research for SaaS",
    subtitle: "Prospect database for a SaaS/ERP company",
    type: "operations",
    role: "Lead generation & research",
    accent: "blue",
    mark: "B2B",
    tools: ["Apollo", "LinkedIn Sales Navigator", "Excel", "Google Sheets"],
    summary: "A clean, verified database of decision-makers, ready for a SaaS/ERP company\u2019s sales outreach.",
    description: [
      "Generated and researched B2B prospects for a SaaS/ERP software company using Apollo, LinkedIn Sales Navigator, and Google. Targeted relevant companies and decision-makers based on industry, company size, location, and job role.",
      "Collected and verified prospect details, including company information, decision-makers, job titles, LinkedIn profiles, and contact data. Compiled high-volume leads in Excel and Google Sheets into a clean, structured database ready for sales outreach."
    ],
    image: "assets/img/projects/b2b-lead-generation.jpg",
    gallery: ["assets/img/projects/b2b-lead-generation.jpg"],
    links: [
      { label: "View on Upwork", url: "https://www.upwork.com/freelancers/~014f332dc89dc9664d?p=2099879246589640704" }
    ]
  },
  {
    id: "data-processing-dashboard",
    title: "Data Processing & Dashboard Management",
    subtitle: "U.S. client project at Quantanite BPO",
    type: "operations",
    role: "Team supervisor",
    accent: "yellow",
    mark: "DP",
    tools: ["Excel", "Google Sheets", "Data scraping"],
    summary: "Led a team on a U.S. client data project: categorizing, researching, scraping, and quality-checking large sheets.",
    description: [
      "We handled a U.S. client project for data entry and processing at Quantanite BPO. The work included categorizing items in Excel and Google Sheets, searching for details online, and scraping data to organize the sheets.",
      "We ran our own quality checks to prepare every file before submitting it to the client. I supervised the entire team on this project, having worked on similar projects with the same client before."
    ],
    image: "assets/img/projects/data-processing-dashboard.jpg",
    gallery: ["assets/img/projects/data-processing-dashboard.jpg", "assets/img/projects/data-processing-dashboard-2.jpg"],
    links: [
      { label: "View on Upwork", url: "https://www.upwork.com/freelancers/~014f332dc89dc9664d?p=1988188236095602688" }
    ]
  }
];
