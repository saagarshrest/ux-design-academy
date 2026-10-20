# UI/UX Design Academy

_Learn design by understanding, practising, and building._

A free, self-guided learning path from complete beginner to portfolio-ready junior UI/UX designer. It is a static site generated from plain JavaScript content files, with no dependencies and no backend.

The live version is at **[ux-academy-five.vercel.app](https://ux-academy-five.vercel.app/)**. It is a standalone website: it brings its own navigation, styles and scripts, and depends on nothing else.

## What's inside

- **13-stage curriculum** (`learn-src/content/curriculum.mjs`): orientation, visual design, research, information architecture, wireframing, Figma, UI and design systems, interaction design, usability testing, accessibility, product thinking, portfolio and career, plus optional specialisms.
- **Written lessons** (`learn-src/content/lessons/`): each one has objectives, an explanation, real-project context, a worked example with a diagram, a step-by-step walkthrough, common mistakes, a knowledge check with explanations, an exercise, a self-assessment checklist, a summary and further reading. Stages 0 and 1 are complete; see [`learn-src/CONTENT-INVENTORY.md`](learn-src/CONTENT-INVENTORY.md) for what is written and what remains.
- **Companion videos** (`learn-src/content/videos.mjs`): one video per written lesson, from established channels such as Nielsen Norman Group, Figma, the Interaction Design Foundation, Flux Academy, ArtClass, Sarah Renae Clark and The Accessibility Guy. Every id was checked against YouTube, and the runtime shown is the real one. The video is embedded with the privacy-friendly `youtube-nocookie` domain, never autoplays, and is left out of printing. Each lesson carries a control bar — play/pause, a scrubber, the time, mute, playback speed and full screen — built on the YouTube IFrame Player API, which is loaded only on pages that have a video. YouTube hides its own controls when the player is under 200px tall, so the frame is given a taller shape on a phone.
- **Practice library**: short exercises with briefs, checklists, criteria, hints and illustrative solutions.
- **Four portfolio projects**: full briefs with research plans, worksheets, testing plans, milestones and rubrics. All businesses and data in them are fictional.
- **Templates**: 14 copyable Markdown templates (research plan, interview guide, usability test plan, accessibility audit, case study outline and more).
- **Glossary**: over 100 terms with examples and related terms.
- **Resource library**: curated external references. Links were checked when they were added.

The site behaves like a learning platform rather than a document site: a dashboard with progress rings, course tiles, a video-first lesson page with a syllabus, a sticky mobile action bar and a bottom navigation dock. On a phone it is laid out as an app.

In the browser, learners can mark lessons complete, bookmark pages, write notes, answer knowledge checks, tick checklists and project milestones, and search everything. Watching a lesson's video to the end is recorded too. Progress is stored in `localStorage` only: it does not sync between devices, and it can be backed up and restored as a JSON file from the "My learning" page.

## Run it locally

Requires Node.js 22 or newer and Python 3 (for the static server). There is nothing to install.

```sh
npm run build   # validate the content and generate /learn and /404.html
npm test        # unit tests for progress, storage and search logic
npm run serve   # then open http://localhost:8000/learn/
```

`npm run check` validates the content without writing any files.

`npm run build:vercel` builds the complete site into `/dist` (pages, stylesheet, scripts, favicon, `index.html`, `robots.txt`, `sitemap.xml` and `404.html`). `npm run preview` builds it and serves `/dist` on <http://localhost:8000/learn/>.

## Deploying to Vercel

The repository is ready to deploy: `vercel.json` builds the site with `npm run build:vercel` and publishes `/dist`. Import the repository in Vercel and deploy; no settings need changing.

A deploy build serves the academy **from the root of the domain**, so the website is simply `https://your-domain/`. The pages are written without the `/learn` prefix and the links inside them are rewritten to match. The default build writes the same site under `/learn`, for a host that serves the academy from a sub-path.

What the deploy build produces:

| Path in `/dist` | Purpose |
|---|---|
| `index.html` | The academy home page |
| `courses/`, `lessons/`, `practice/`, `projects/`, `resources/`, `glossary/`, `roadmap/`, `career/`, `saved/`, `search/` | Every other page |
| `catalog.json`, `search-index.json` | The lesson catalogue and the search index the browser fetches |
| `css/learn.css`, `js/learn/*` | The stylesheet and the browser script the pages load |
| `favicon.svg` | Site icon |
| `404.html` | Not-found page |
| `robots.txt`, `sitemap.xml` | Crawling hints, pointing at the sitemap |

Any old `/learn/...` address is redirected to its clean equivalent, so links from elsewhere keep working.

Build-time environment variables, all optional:

| Variable | Effect |
|---|---|
| `SITE_URL` | Public origin used for canonical links, the sitemap and structured data. Defaults to the Vercel production domain, or `http://localhost:8000` for a local build |
| `GA_ID` | Google Analytics measurement ID. Without it a standalone build loads no analytics at all |
| `OG_IMAGE_URL` | Absolute URL of the social preview image |
| `ADSENSE_CLIENT` | AdSense publisher id. Defaults to the one in `learn-src/ads.mjs` |
| `ADSENSE_SLOT` | AdSense ad unit id. Without it the loader still runs, so AdSense auto ads work; with it a labelled slot appears on the home page and under each lesson video |

### The domain

The academy is a website of its own. It has no domain of its own on Vercel yet, so it is served from the project's own address:

**https://ux-academy-five.vercel.app/**

To give it a real domain, attach one to the project (`vercel domains add <domain> <project>`) and add the DNS record the registrar asks for. A subdomain of a domain you already own is the easiest option, and it is covered by that domain's AdSense approval. The `*.vercel.app` address keeps working as an alias either way.

Whichever domain is in use, `SITE_URL` sets the origin the build writes into the canonical links, the sitemap and `robots.txt`. Leave it unset on Vercel and the build follows the project domain automatically; set it when the site is served from somewhere else.

Note that AdSense only accepts a registrable domain, so the site cannot be approved while it lives on a `*.vercel.app` address. The `ads.txt` file for the approved domain belongs at the root of that domain.

## How it is built

| Path | Purpose |
|---|---|
| `learn-src/content/` | All content, kept separate from presentation |
| `learn-src/content/videos.mjs` | The companion video library, one entry per written lesson |
| `learn-src/ads.mjs` | The AdSense publisher id and the loader script |
| `learn-src/types.d.ts` | TypeScript types for the content model (checked through JSDoc `@ts-check`) |
| `learn-src/components.mjs` | Presentation components that return HTML strings |
| `learn-src/pages.mjs` | One template per route |
| `learn-src/shell.mjs` | Page shell: the head, the body and the footer every page shares |
| `learn-src/og-image.mjs` | The social preview image, drawn at build time |
| `learn-src/build.mjs` | Validates content and links, then writes pages, `catalog.json`, `search-index.json` and the content inventory. With `--deploy` it writes a self-contained site to `/dist` |
| `js/learn/store.mjs` | Pure learning logic: versioned storage, progress, search, filters |
| `js/learn/app.js` | Browser behaviour, attached to server-rendered HTML through `data-*` attributes |
| `css/learn.css` | Styles |
| `public/favicon.svg` | Icon used by a standalone build |

Pages are complete, readable HTML without JavaScript; scripts only add the interactive features.

The build fails if content is invalid, for example a duplicate slug, a missing lesson section, a knowledge-check answer out of range, or a broken internal link or anchor.

### Adding a lesson

1. Find the lesson's slug in `learn-src/content/curriculum.mjs`.
2. Add a body for that slug to a file in `learn-src/content/lessons/` (see `stage-0.mjs` for the shape).
3. Add a companion video for it in `learn-src/content/videos.mjs`.
4. Run `npm run build`. The lesson becomes "published", gets its own page, and counts towards progress.

The build fails if content is invalid, for example a duplicate slug, a missing lesson section, a knowledge-check answer out of range, a broken internal link or anchor, or a video with a malformed id. It warns when a written lesson has no video yet.

## Notes

- Generated output (`/learn/`, `/404.html`, `/dist/`) is not committed; run the build to produce it.
- The default build uses absolute `/learn/...` URLs, so serve it from a domain root. The deploy build rewrites them to sit at the root of the domain.
- External resources are third-party content and may change.
