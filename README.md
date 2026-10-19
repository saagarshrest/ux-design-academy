# UI/UX Design Academy

_Learn design by understanding, practising, and building._

A free, self-guided learning path from complete beginner to portfolio-ready junior UI/UX designer. It is a static site generated from plain JavaScript content files, with no dependencies and no backend.

The live version runs inside Saagar Shrestha's portfolio at **[saagarshrest.com.np/learn](https://saagarshrest.com.np/learn/)**.

## What's inside

- **13-stage curriculum** (`learn-src/content/curriculum.mjs`): orientation, visual design, research, information architecture, wireframing, Figma, UI and design systems, interaction design, usability testing, accessibility, product thinking, portfolio and career, plus optional specialisms.
- **Written lessons** (`learn-src/content/lessons/`): each one has objectives, an explanation, real-project context, a worked example with a diagram, a step-by-step walkthrough, common mistakes, a knowledge check with explanations, an exercise, a self-assessment checklist, a summary and further reading. Stages 0 and 1 are complete; see [`learn-src/CONTENT-INVENTORY.md`](learn-src/CONTENT-INVENTORY.md) for what is written and what remains.
- **Practice library**: short exercises with briefs, checklists, criteria, hints and illustrative solutions.
- **Four portfolio projects**: full briefs with research plans, worksheets, testing plans, milestones and rubrics. All businesses and data in them are fictional.
- **Templates**: 14 copyable Markdown templates (research plan, interview guide, usability test plan, accessibility audit, case study outline and more).
- **Glossary**: over 100 terms with examples and related terms.
- **Resource library**: curated external references. Links were checked when they were added.

In the browser, learners can mark lessons complete, bookmark pages, write notes, answer knowledge checks, tick checklists and project milestones, and search everything. Progress is stored in `localStorage` only: it does not sync between devices, and it can be backed up and restored as a JSON file from the "My learning" page.

## Run it locally

Requires Node.js 20 or newer and Python 3 (for the static server). There is nothing to install.

```sh
npm run build   # validate the content and generate /learn and /404.html
npm test        # unit tests for progress, storage and search logic
npm run serve   # then open http://localhost:8000/learn/
```

`npm run check` validates the content without writing any files.

## How it is built

| Path | Purpose |
|---|---|
| `learn-src/content/` | All content, kept separate from presentation |
| `learn-src/types.d.ts` | TypeScript types for the content model (checked through JSDoc `@ts-check`) |
| `learn-src/components.mjs` | Presentation components that return HTML strings |
| `learn-src/pages.mjs` | One template per route |
| `learn-src/shell.mjs` | Page shell. Inside the portfolio it reuses the site's nav and footer; on its own it uses a minimal header |
| `learn-src/build.mjs` | Validates content and links, then writes pages, `catalog.json`, `search-index.json` and the content inventory |
| `js/learn/store.mjs` | Pure learning logic: versioned storage, progress, search, filters |
| `js/learn/app.js` | Browser behaviour, attached to server-rendered HTML through `data-*` attributes |
| `css/learn.css` | Styles |

Pages are complete, readable HTML without JavaScript; scripts only add the interactive features.

The build fails if content is invalid, for example a duplicate slug, a missing lesson section, a knowledge-check answer out of range, or a broken internal link or anchor.

### Adding a lesson

1. Find the lesson's slug in `learn-src/content/curriculum.mjs`.
2. Add a body for that slug to a file in `learn-src/content/lessons/` (see `stage-0.mjs` for the shape).
3. Run `npm run build`. The lesson becomes "published", gets its own page, and counts towards progress.

## Notes

- Generated output (`/learn/`, `/404.html`) is not committed; run the build to produce it.
- The site uses absolute `/learn/...` URLs, so serve it from a domain root.
- External resources are third-party content and may change.
