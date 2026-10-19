// @ts-check
/* =====================================================================
   UI/UX Design Academy: static site generator (no dependencies).

     node learn-src/build.mjs          validate content and write /learn
     node learn-src/build.mjs --check  validate only, write nothing

   Output: /learn/** (generated, do not edit by hand), /learn/catalog.json,
   /learn/search-index.json, the academy block in /sitemap.xml and
   learn-src/CONTENT-INVENTORY.md.
   ===================================================================== */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

import { courses as courseMeta } from './content/curriculum.mjs';
import glossary from './content/glossary.mjs';
import resources from './content/resources.mjs';
import templates from './content/templates.mjs';
import exercises from './content/exercises.mjs';
import projects from './content/projects.mjs';
import career from './content/career.mjs';
import paths from './content/paths.mjs';
import { loadChrome, page, SITE } from './shell.mjs';
import { AcademyHeader, esc, lessonUrl, courseUrl } from './components.mjs';
import * as P from './pages.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const OUT = join(ROOT, 'learn');
const CHECK_ONLY = process.argv.includes('--check');

/** @typedef {import('./types').Course} Course */
/** @typedef {import('./types').Lesson} Lesson */

const errors = /** @type {string[]} */ ([]);
const warnings = /** @type {string[]} */ ([]);
const fail = (/** @type {string} */ m) => errors.push(m);
const warn = (/** @type {string} */ m) => warnings.push(m);

/* ------------------------------------------------------------ load lessons */
/** @type {Record<string, import('./types').LessonBody>} */
const bodies = {};
for (const f of readdirSync(join(HERE, 'content/lessons')).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = (await import(pathToFileURL(join(HERE, 'content/lessons', f)).href)).default;
  for (const [slug, body] of Object.entries(mod)) {
    if (bodies[slug]) fail(`Lesson body "${slug}" is defined twice (second in ${f})`);
    bodies[slug] = body;
  }
}

/** @type {Course[]} */
const courses = courseMeta.map((c) => ({
  ...c,
  lessons: c.lessons.map((l) => (bodies[l.slug] ? { ...l, status: /** @type {const} */ ('published'), body: bodies[l.slug] } : { ...l, status: /** @type {const} */ ('planned') })),
}));

/* --------------------------------------------------------------- validate */
const courseSlugs = new Set();
/** @type {Record<string, { lesson: Lesson, course: Course }>} */
const lessonsBySlug = {};
for (const c of courses) {
  if (courseSlugs.has(c.slug)) fail(`Duplicate course slug ${c.slug}`);
  courseSlugs.add(c.slug);
  for (const l of c.lessons) {
    if (lessonsBySlug[l.slug]) fail(`Duplicate lesson slug ${l.slug}`);
    lessonsBySlug[l.slug] = { lesson: l, course: c };
    if (!/^[a-z0-9-]+$/.test(l.slug)) fail(`Lesson slug "${l.slug}" must be lowercase letters, digits and hyphens`);
    if (l.minutes < 5 || l.minutes > 240) fail(`Lesson ${l.slug}: unrealistic duration ${l.minutes}`);
  }
}
for (const slug of Object.keys(bodies)) if (!lessonsBySlug[slug]) fail(`Lesson body "${slug}" has no entry in curriculum.mjs`);
for (const c of courses) {
  for (const p of c.prerequisites) {
    const pc = courses.find((x) => x.slug === p);
    if (!pc) fail(`Course ${c.slug}: unknown prerequisite ${p}`);
    else if (pc.stage >= c.stage) fail(`Course ${c.slug}: prerequisite ${p} is not an earlier stage`);
  }
  for (const pr of c.projects || []) if (!projects.find((p) => p.slug === pr)) fail(`Course ${c.slug}: unknown project ${pr}`);
  for (const l of c.lessons) {
    for (const p of l.prerequisites || []) if (!lessonsBySlug[p]) fail(`Lesson ${l.slug}: unknown prerequisite lesson ${p}`);
    for (const p of l.requiresCourses || []) if (!courseSlugs.has(p)) fail(`Lesson ${l.slug}: unknown required course ${p}`);
    if (l.status !== 'published' || !l.body) continue;
    const b = l.body, where = `Lesson ${l.slug}`;
    const min = (/** @type {unknown[] | undefined} */ arr, /** @type {number} */ n, /** @type {string} */ field) => { if (!arr || arr.length < n) fail(`${where}: ${field} needs at least ${n} items`); };
    min(b.objectives, 2, 'objectives'); min(b.walkthrough, 3, 'walkthrough'); min(b.mistakes, 2, 'mistakes');
    min(b.quiz, 3, 'quiz'); min(b.checklist, 3, 'checklist'); min(b.summary, 2, 'summary'); min(b.reading, 1, 'reading');
    min(b.exercise?.steps, 3, 'exercise.steps');
    for (const f of /** @type {const} */ (['explanation', 'why', 'example'])) if (!b[f] || b[f].replace(/<[^>]+>/g, '').trim().length < 200) fail(`${where}: ${f} is missing or too short to be a real section`);
    b.quiz.forEach((q, i) => { if (!(q.answer >= 0 && q.answer < q.options.length)) fail(`${where}: quiz ${i + 1} answer index out of range`); if (q.options.length < 2) fail(`${where}: quiz ${i + 1} needs options`); });
    for (const r of b.reading) if (!/^https:\/\//.test(r.url)) fail(`${where}: reading link must be https: ${r.url}`);
    if (b.figure && !/role="img"|aria-hidden="true"|<table|<img [^>]*alt=/.test(b.figure.html)) fail(`${where}: figure needs role="img" with a label, alt text, or aria-hidden`);
  }
}
const projSlugs = new Set();
for (const p of projects) {
  if (projSlugs.has(p.slug)) fail(`Duplicate project ${p.slug}`);
  projSlugs.add(p.slug);
  for (const pre of p.prerequisites) if (!courseSlugs.has(pre)) fail(`Project ${p.slug}: unknown prerequisite ${pre}`);
  const ids = new Set();
  for (const m of p.milestones) { if (ids.has(m.id)) fail(`Project ${p.slug}: duplicate milestone ${m.id}`); ids.add(m.id); }
  for (const r of p.rubric) if (r.levels.length !== 4) fail(`Project ${p.slug}: rubric row "${r.criterion}" needs 4 levels`);
}
const exSlugs = new Set();
for (const e of exercises) {
  if (exSlugs.has(e.slug)) fail(`Duplicate exercise ${e.slug}`);
  exSlugs.add(e.slug);
  for (const s of e.relatedLessons || []) {
    if (!lessonsBySlug[s]) fail(`Exercise ${e.slug}: unknown related lesson ${s}`);
  }
}
const termNames = new Set(glossary.map((t) => t.term.toLowerCase()));
if (termNames.size !== glossary.length) fail('Glossary has duplicate terms');
for (const t of glossary) for (const r of t.related) if (!termNames.has(r.toLowerCase())) warn(`Glossary "${t.term}": related term "${r}" is not defined (shown as plain text)`);
const tplSlugs = new Set();
for (const t of templates) { if (tplSlugs.has(t.slug)) fail(`Duplicate template ${t.slug}`); tplSlugs.add(t.slug); }
for (const r of resources) if (!/^https:\/\//.test(r.url)) fail(`Resource "${r.title}" must use https`);

/* --------------------------------------------------------------- markdown */
/** Minimal Markdown for templates: headings, paragraphs, lists, task lists, tables, quotes, rules, bold, italic, code. */
function renderMd(/** @type {string} */ md) {
  const inline = (/** @type {string} */ s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])_([^_]+)_(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>');
  const lines = md.replace(/\r/g, '').split('\n');
  let html = '', i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(line))) { const n = Math.min(m[1].length + 1, 5); html += `<h${n}>${inline(m[2])}</h${n}>`; i++; continue; }
    if (/^---+$/.test(line.trim())) { html += '<hr>'; i++; continue; }
    if (line.startsWith('>')) { let q = ''; while (i < lines.length && lines[i].startsWith('>')) q += lines[i++].replace(/^>\s?/, '') + ' '; html += `<blockquote><p>${inline(q.trim())}</p></blockquote>`; continue; }
    if (line.startsWith('|')) {
      const rows = []; while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = (/** @type {string} */ r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(rows[0]), bodyRows = rows.slice(2).map(cells);
      html += `<div class="la-rubric-wrap"><table class="la-ws"><thead><tr>${head.map((h) => `<th scope="col">${inline(h)}</th>`).join('')}</tr></thead><tbody>${bodyRows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s/.test(line)) {
      const ordered = /^\s*\d+\./.test(line); const items = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*]|\d+\.)\s/, ''));
      const li = items.map((it) => { const t = /^\[( |x)\]\s(.*)$/.exec(it); return t ? `<li class="la-task"><span class="la-box" aria-hidden="true"></span>${inline(t[2])}</li>` : `<li>${inline(it)}</li>`; }).join('');
      html += ordered ? `<ol>${li}</ol>` : `<ul>${li}</ul>`;
      continue;
    }
    let para = '';
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\||\s*([-*]|\d+\.)\s|---+$)/.test(lines[i])) para += lines[i++] + ' ';
    html += `<p>${inline(para.trim())}</p>`;
  }
  return html;
}

/* ------------------------------------------------------------------ pages */
const published = courses.flatMap((c) => c.lessons.filter((l) => l.status === 'published').map((l) => ({ l, c })));
const first = published[0]?.l;
if (!first) fail('No published lessons');

if (errors.length) {
  console.error(`\n✗ Content validation failed (${errors.length}):\n  - ${errors.join('\n  - ')}\n`);
  process.exit(1);
}

const hash = createHash('sha1');
for (const f of ['css/learn.css', 'js/learn/app.js', 'js/learn/store.mjs']) if (existsSync(join(ROOT, f))) hash.update(readFileSync(join(ROOT, f)));
const version = hash.digest('hex').slice(0, 8);
const chrome = loadChrome(ROOT);

/** @type {{ path: string, active: string, title: string, description: string, body: string, jsonld?: object, noindex?: boolean, query?: string }[]} */
const pages = [];
const data = { courses, projects, exercises, paths, glossary, resources, templates, first: /** @type {Lesson} */ (first) };
pages.push(P.homePage(data), P.roadmapPage(data), P.coursesPage(data), P.practicePage(data), P.projectsPage(data),
  P.resourcesPage(data), P.glossaryPage(data), P.careerPage({ career }), P.searchPage(), P.savedPage());
for (const c of courses) pages.push(P.coursePage(c, courses, projects));
published.forEach(({ l, c }, i) => {
  pages.push(P.lessonPage({ lesson: l, course: c, prev: published[i - 1]?.l || null, next: published[i + 1]?.l || null, index: c.lessons.indexOf(l), lessonsBySlug }));
});
for (const e of exercises) pages.push(P.exercisePage(e, lessonsBySlug));
for (const p of projects) pages.push(P.projectPage(p, courses));
for (const t of templates) pages.push(P.templatePage(t, renderMd));

/* ------------------------------------------------- internal link checking */
const generated = new Set(pages.map((p) => p.path));
for (const p of pages) {
  const ids = new Set([...p.body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const [, href] of p.body.matchAll(/href="(\/[^"]*)"/g)) {
    const [path, hashPart] = href.split('#');
    const clean = path.split('?')[0];
    if (clean.startsWith('/learn/')) {
      if (!generated.has(clean)) fail(`${p.path}: broken link ${href}`);
      else if (hashPart && clean === p.path && !ids.has(hashPart)) fail(`${p.path}: missing anchor #${hashPart}`);
    } else if (clean && clean !== '/' && !existsSync(join(ROOT, decodeURIComponent(clean)))) fail(`${p.path}: link to missing file ${href}`);
  }
  for (const [, hashOnly] of p.body.matchAll(/href="#([^"]+)"/g)) if (!ids.has(hashOnly)) fail(`${p.path}: missing anchor #${hashOnly}`);
}
// Cross-page anchors (e.g. /learn/roadmap/#path-x)
const idsByPath = Object.fromEntries(pages.map((p) => [p.path, new Set([...p.body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
for (const p of pages) for (const m of p.body.matchAll(/href="(\/learn\/[^"#]*)#([^"]+)"/g)) if (idsByPath[m[1]] && !idsByPath[m[1]].has(m[2])) fail(`${p.path}: missing anchor ${m[1]}#${m[2]}`);

if (errors.length) {
  console.error(`\n✗ Link validation failed (${errors.length}):\n  - ${errors.join('\n  - ')}\n`);
  process.exit(1);
}

/* ------------------------------------------------------------------ write */
const catalog = {
  version: 1,
  first: first ? lessonUrl(first.slug) : '/learn/',
  courses: courses.map((c) => ({ slug: c.slug, stage: c.stage, title: c.title, optional: c.optional, url: courseUrl(c.slug), lessons: c.lessons.map((l) => ({ slug: l.slug, title: l.title, minutes: l.minutes, published: l.status === 'published', url: l.status === 'published' ? lessonUrl(l.slug) : `${courseUrl(c.slug)}#lesson-${l.slug}` })) })),
  projects: projects.map((p) => ({ slug: p.slug, title: p.title, url: `/learn/projects/${p.slug}/`, milestones: p.milestones.map((m) => ({ id: m.id, title: m.title, tasks: m.tasks.length })) })),
};
const strip = (/** @type {string} */ h) => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const index = [
  ...courses.map((c) => ({ type: 'course', title: `Stage ${c.stage}: ${c.title}`, url: courseUrl(c.slug), text: `${c.short} ${c.outcomes.join(' ')}`, meta: c.optional ? 'Optional course' : 'Core course' })),
  ...courses.flatMap((c) => c.lessons.map((l) => ({
    type: 'lesson', title: l.title, url: l.status === 'published' ? lessonUrl(l.slug) : `${courseUrl(c.slug)}#lesson-${l.slug}`,
    text: l.body ? `${l.summary} ${l.body.objectives.join(' ')} ${strip(l.body.explanation).slice(0, 1200)} ${l.body.summary.join(' ')}` : l.summary,
    meta: `Stage ${c.stage} · ${l.status === 'published' ? `${l.minutes} min` : 'In writing'}`,
  }))),
  ...exercises.map((e) => ({ type: 'exercise', title: e.title, url: `/learn/practice/${e.slug}/`, text: `${e.summary} ${e.topic} ${e.prompt}`, meta: `${e.topic} · ${e.level}` })),
  ...projects.map((p) => ({ type: 'project', title: p.title, url: `/learn/projects/${p.slug}/`, text: `${p.short} ${strip(p.problem)}`, meta: `Project ${p.number}` })),
  ...glossary.map((t) => ({ type: 'term', title: t.term, url: `/learn/glossary/#term-${t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, text: `${t.definition} ${t.related.join(' ')}`, meta: `Glossary · ${t.group}` })),
  ...templates.map((t) => ({ type: 'template', title: `${t.title} template`, url: `/learn/resources/templates/${t.slug}/`, text: t.summary, meta: 'Template' })),
  ...resources.map((r) => ({ type: 'resource', title: r.title, url: r.url, text: `${r.note} ${r.source} ${r.category}`, meta: `${r.source} · external` })),
  { type: 'page', title: 'Career guide', url: '/learn/career/', text: career.sections.map((s) => `${s.title} ${strip(s.html).slice(0, 300)}`).join(' '), meta: 'Guide' },
];

if (!CHECK_ONLY) {
  rmSync(OUT, { recursive: true, force: true });
  for (const p of pages) {
    const file = join(ROOT, p.path, 'index.html');
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page(chrome, { ...p, header: AcademyHeader(p.active), version }));
  }
  // Site-wide not-found page (GitHub Pages serves /404.html for any missing path).
  const notFound = page(chrome, {
    path: '/404.html', title: 'Page not found', noindex: true, version, header: '',
    description: 'The page you were looking for does not exist.',
    body: `<header class="la-hero"><div class="la-wrap la-narrow">
  <p class="la-eyebrow">Error 404</p>
  <h1 class="la-h1">This page <em>doesn't exist.</em></h1>
  <p class="la-lead">The link may be out of date, or the address may have a typo. If you were looking for a lesson, it may still be in writing; the course pages list every lesson and its status.</p>
  <div class="la-actions"><a class="la-btn" href="/learn/roadmap/">Academy roadmap</a><a class="la-btn la-btn--ghost" href="/learn/search/">Search the academy</a><a class="la-btn la-btn--ghost" href="/">Home page</a></div>
</div></header>`,
  });
  writeFileSync(join(ROOT, '404.html'), notFound);
  writeFileSync(join(OUT, 'catalog.json'), JSON.stringify(catalog));
  writeFileSync(join(OUT, 'search-index.json'), JSON.stringify(index));

  // sitemap: replace the academy block, keep everything else untouched
  const smPath = join(ROOT, 'sitemap.xml');
  if (existsSync(smPath)) {
  let sm = readFileSync(smPath, 'utf8').replace(/\s*<!-- learn:start -->[\s\S]*<!-- learn:end -->/, '');
  const urls = pages.filter((p) => !p.noindex).map((p) => `  <url>\n    <loc>${SITE}${p.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p.path === '/learn/' ? '0.8' : '0.6'}</priority>\n  </url>`).join('\n');
  sm = sm.replace('</urlset>', `  <!-- learn:start -->\n${urls}\n  <!-- learn:end -->\n</urlset>`);
  writeFileSync(smPath, sm);
  }

  // content inventory
  const inv = ['# UI/UX Design Academy: content inventory', '', '_Generated by `node learn-src/build.mjs`. Do not edit by hand._', ''];
  const totalL = courses.reduce((n, c) => n + c.lessons.length, 0);
  inv.push(`- Lessons: **${published.length} written** of ${totalL} planned`, `- Practice exercises: ${exercises.length}`, `- Projects: ${projects.length}`, `- Glossary terms: ${glossary.length}`, `- Templates: ${templates.length}`, `- External resources: ${resources.length}`, '');
  for (const c of courses) {
    const pub = c.lessons.filter((l) => l.status === 'published').length;
    inv.push(`## Stage ${c.stage}: ${c.title} (${pub}/${c.lessons.length} written)`, '');
    for (const l of c.lessons) inv.push(`- [${l.status === 'published' ? 'x' : ' '}] \`${l.slug}\` ${l.title}`);
    inv.push('');
  }
  writeFileSync(join(HERE, 'CONTENT-INVENTORY.md'), inv.join('\n'));
}

console.log(`✓ ${CHECK_ONLY ? 'Validated' : 'Built'} ${pages.length} pages · ${published.length} lessons written of ${courses.reduce((n, c) => n + c.lessons.length, 0)} · ${exercises.length} exercises · ${projects.length} projects · ${glossary.length} terms · ${templates.length} templates · ${resources.length} resources`);
if (warnings.length) console.warn(`  ${warnings.length} warning(s):\n  - ${warnings.join('\n  - ')}`);
