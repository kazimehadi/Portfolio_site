# Kazi Mehadi Hasan: portfolio

A static site (plain HTML, CSS and JavaScript). There is no build step, so it deploys as-is on Vercel or Netlify.

## Pages

| File | Page |
| --- | --- |
| `index.html` | About (hero, what I do, recent projects) |
| `skills.html` | Skills (moving tool rows and grouped tools, all clickable) |
| `experience.html` | Experience timeline and education |
| `projects.html` | Projects with filters, detail pop-ups, and live GitHub repos |
| `achievements.html` | Certifications, awards, and results |

The contact section is the footer on every page (the **Contact** button jumps to it).

## Where to edit things

| I want to change... | Edit |
| --- | --- |
| Email, phone, social links, menu, CV path | `js/main.js` (the `SITE` block at the top) |
| Projects, project images, project links | `js/projects-data.js` |
| Tools and their links | `js/skills.js` |
| Colours, fonts, spacing | `css/styles.css` (the tokens at the top) |
| Jobs, education, certifications | the matching `.html` file |

## Adding project images

1. Put a screenshot in `assets/img/projects/`.
2. Name it exactly as the `image` field in `js/projects-data.js`, for example `nafias-fashion-store.jpg`.

Until a file exists, the card shows a coloured placeholder automatically, so nothing looks broken.
Use 16:10 images (for example 1600 x 1000) for the best crop.

Images and live links are already in for: Nafia's Fashion Store, Mr. Steam Toronto, Vintage Cleaning, eBay
Product Listing, Etsy Product Research, B2B Lead Generation, and Data Processing & Dashboard Management.
Grapmart and Storex API still use placeholders since there's no live link or screenshot for them yet — add
an image the same way (drop it in `assets/img/projects/` as `grapmart.jpg` / `storex-api.jpg`) whenever you
have one. Group of Biophotomatix and Children Journey were removed from the site since there's no live site
for either.

More than one image? List them in the project's `gallery` array and the pop-up shows a thumbnail strip.

## Adding project links (live site, GitHub, case study)

In `js/projects-data.js`, fill the `links` array of a project:

```js
links: [
  { label: "Live site", url: "https://example.com" },
  { label: "GitHub",    url: "https://github.com/kazimehadi/repo-name" }
]
```

A project with no links simply shows no link buttons.

The **From GitHub** section on the Projects page loads your public repositories automatically (top 6 by stars, then most recent). Forks, archived repos and the `kazimehadi.github.io` repo are skipped.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening the files by double-click also works, but a local server matches production.)

## Deploy

### Netlify
- **Drag and drop:** go to app.netlify.com/drop and drop this whole folder.
- **From GitHub:** Add new site > Import an existing project > pick the repo. Leave **Build command** empty and set **Publish directory** to `.` (the repo root).

### Vercel
- **From GitHub:** Add New > Project > import the repo. Set **Framework Preset** to `Other`, leave **Build Command** and **Output Directory** empty, then Deploy.
- **CLI:** run `npx vercel` in this folder and accept the defaults.

Both platforms redeploy automatically each time you push to the repo.

## Notes

- The photo (`assets/img/profile.jpg`) and CV (`assets/Kazi_Mehadi_Hasan_CV.pdf`) were copied from your existing site. Replace them with new files of the same name any time.
- The site opens in the dark theme. The moon/sun button in the header switches to light, and it remembers the visitor's choice.
- The colours are set once at the top of `css/styles.css` (`--blue` is the orange accent, `--pink` the amber). Change those two values to re-colour the whole site.
- The custom cursor (ring + dot, with a "View" label over project cards) and the glow that follows the mouse only appear for mouse users. Touch devices keep their normal behaviour.
- The left social icons (GitHub, LinkedIn, Upwork, email) come from `js/main.js` and are hidden on narrow screens.
- Animations respect the "reduce motion" setting.
