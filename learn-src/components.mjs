// @ts-check
/* =====================================================================
   UI/UX Design Academy: presentation components.
   Pure functions that return HTML strings. Content comes in as data;
   nothing here contains lesson text. Interactive behaviour is attached
   by /js/learn/app.js through the data-* hooks each component renders.
   ===================================================================== */

/** @typedef {import('./types').Course} Course */
/** @typedef {import('./types').Lesson} Lesson */

/** Escape text for HTML content and attributes. */
export const esc = (/** @type {unknown} */ s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c);

/** "35 min", "1 h 20 min", "6 h" */
export const fmtMin = (/** @type {number} */ m) => {
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60), r = m % 60;
  return r ? `${h} h ${r} min` : `${h} h`;
};

export const lessonUrl = (/** @type {string} */ slug) => `/learn/lessons/${slug}/`;
export const courseUrl = (/** @type {string} */ slug) => `/learn/courses/${slug}/`;

const SR_NEW_TAB = '<span class="la-sr"> (opens in a new tab)</span>';

/** External link with an explicit new-tab cue for screen readers. */
export const extLink = (/** @type {string} */ href, /** @type {string} */ label, cls = '') =>
  `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer"${cls ? ` class="${cls}"` : ''}>${label}<span aria-hidden="true" class="la-ext">↗</span>${SR_NEW_TAB}</a>`;

/* ---------------------------------------------------------------- header */

const ACADEMY_NAV = [
  ['overview', '/learn/', 'Overview'],
  ['roadmap', '/learn/roadmap/', 'Roadmap'],
  ['courses', '/learn/courses/', 'Courses'],
  ['practice', '/learn/practice/', 'Practice'],
  ['projects', '/learn/projects/', 'Projects'],
  ['resources', '/learn/resources/', 'Resources'],
  ['glossary', '/learn/glossary/', 'Glossary'],
  ['career', '/learn/career/', 'Career'],
  ['saved', '/learn/saved/', 'My learning'],
];

/** AcademyHeader + AcademyNavigation: the academy's own bar under the site nav. */
export function AcademyHeader(/** @type {string} */ active, query = '') {
  const links = ACADEMY_NAV.map(([key, href, label]) =>
    `<a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `
<div class="la-bar">
  <div class="la-bar__in">
    <a class="la-bar__brand" href="/learn/"><span class="la-bar__mark" aria-hidden="true">UX</span><span>Design Academy</span></a>
    <nav class="la-bar__nav" aria-label="Academy">${links}</nav>
    <form class="la-bar__search" role="search" action="/learn/search/" method="get">
      <label class="la-sr" for="la-bar-q">Search the academy</label>
      <input id="la-bar-q" name="q" type="search" value="${esc(query)}" placeholder="Search lessons, terms, resources" autocomplete="off">
      <button type="submit" class="la-bar__go"><span class="la-sr">Search</span><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
    </form>
    <a class="la-bar__pill" href="/learn/saved/" data-app-progress><span class="la-bar__pill-dot" aria-hidden="true"></span><span data-app-progress-text>My progress</span></a>
  </div>
</div>`;
}

/** @param {{ label: string, href?: string }[]} items */
export function Breadcrumbs(items) {
  const li = items.map((it, i) => i === items.length - 1
    ? `<li><span aria-current="page">${esc(it.label)}</span></li>`
    : `<li><a href="${it.href}">${esc(it.label)}</a></li>`).join('');
  return `<nav class="la-crumbs" aria-label="Breadcrumb"><ol>${li}</ol></nav>`;
}

/* -------------------------------------------------------------- progress */

/** ProgressIndicator. scope is "all", "core" or "course:<slug>"; filled in by app.js. */
export function ProgressIndicator(/** @type {string} */ scope, /** @type {string} */ label, size = '') {
  return `<div class="la-prog${size ? ` la-prog--${size}` : ''}" data-progress="${esc(scope)}">
  <div class="la-prog__bar" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
  <p class="la-prog__txt" data-progress-text>Progress is saved in this browser.</p>
</div>`;
}

/** CourseProgress: compact count for a course, filled by app.js. */
export const CourseProgress = (/** @type {Course} */ c) => ProgressIndicator(`course:${c.slug}`, `${c.title} progress`, 'sm');

/* ------------------------------------------------------------------ cards */

export function levelTag(/** @type {string} */ level) {
  return `<span class="la-tag la-tag--${level.toLowerCase()}">${esc(level)}</span>`;
}

export function coreTag(/** @type {boolean} */ optional) {
  return optional ? '<span class="la-tag la-tag--optional">Optional</span>' : '<span class="la-tag la-tag--core">Core</span>';
}

export function courseStats(/** @type {Course} */ c) {
  const minutes = c.lessons.reduce((n, l) => n + l.minutes, 0);
  const pub = c.lessons.filter((l) => l.status === 'published').length;
  const written = pub === c.lessons.length ? 'all written' : pub === 0 ? 'in writing' : `${pub} written, ${c.lessons.length - pub} in writing`;
  return { minutes, pub, written, total: c.lessons.length };
}

/** CourseCard. */
export function CourseCard(/** @type {Course} */ c, { outcomes = 3, headingLevel = 3, cover = true } = {}) {
  const s = courseStats(c);
  const h = `h${headingLevel}`;
  return `<article class="la-card la-course${c.optional ? ' is-optional' : ''}" data-item data-filter-level="${c.level}" data-filter-kind="${c.optional ? 'optional' : 'core'}" data-search="${esc(`${c.title} ${c.short} ${c.lessons.map((l) => l.title).join(' ')}`.toLowerCase())}">
  ${cover ? CourseCover(c, { compact: true }) : ''}
  <div class="la-course__top"><span class="la-stage">Stage ${c.stage}</span>${coreTag(c.optional)}${levelTag(c.level)}</div>
  <${h} class="la-card__title"><a href="${courseUrl(c.slug)}" class="la-stretch">${esc(c.title)}</a></${h}>
  <p class="la-card__text">${esc(c.short)}</p>
  <ul class="la-meta" aria-label="Course details"><li>${s.total} lessons</li><li>about ${fmtMin(s.minutes)}</li><li>${s.written}</li></ul>
  ${outcomes ? `<ul class="la-outcomes">${c.outcomes.slice(0, outcomes).map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
  ${s.pub ? CourseProgress(c) : ''}
</article>`;
}

/** EmptyState. */
export function EmptyState(/** @type {string} */ title, /** @type {string} */ body, action = '', attrs = '') {
  return `<div class="la-empty"${attrs}><p class="la-empty__title">${esc(title)}</p><p>${body}</p>${action}</div>`;
}

/* ---------------------------------------------------------------- roadmap */

/** RoadmapOverview: every stage, core vs optional, prerequisites and live status. */
export function RoadmapOverview(/** @type {Course[]} */ courses, { detailed = false } = {}) {
  const bySlug = Object.fromEntries(courses.map((c) => [c.slug, c]));
  const node = (/** @type {Course} */ c) => {
    const s = courseStats(c);
    const pre = c.prerequisites.length
      ? `<p class="la-road__pre"><span>After</span> ${c.prerequisites.map((p) => `<a href="${courseUrl(p)}">Stage ${bySlug[p].stage}: ${esc(bySlug[p].title)}</a>`).join(', ')}</p>`
      : '<p class="la-road__pre"><span>Start here</span> No prerequisites</p>';
    return `<li class="la-road__node${c.optional ? ' is-optional' : ''}" data-stage="${c.slug}" data-stage-pub="${s.pub}">
  <span class="la-road__dot" aria-hidden="true">${c.stage}</span>
  <div class="la-road__body">
    <div class="la-road__head">
      <h3 class="la-road__title"><a href="${courseUrl(c.slug)}">${esc(c.title)}</a></h3>
      <span class="la-status" data-stage-status>${s.pub ? 'Not started' : 'In writing'}</span>
    </div>
    <p class="la-road__text">${esc(c.short)}</p>
    <ul class="la-meta"><li>Stage ${c.stage}</li><li>${c.level}</li><li>${s.total} lessons</li><li>about ${fmtMin(s.minutes)}</li>${c.optional ? '<li>Optional</li>' : ''}</ul>
    ${detailed ? pre : ''}
    ${detailed ? `<details class="la-road__more"><summary>Learning outcomes</summary><ul class="la-outcomes">${c.outcomes.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></details>` : ''}
  </div>
</li>`;
  };
  const core = courses.filter((c) => !c.optional), opt = courses.filter((c) => c.optional);
  return `<div class="la-road">
  <h3 class="la-road__group">Core curriculum <span>required for the portfolio path</span></h3>
  <ol class="la-road__list">${core.map(node).join('')}</ol>
  <h3 class="la-road__group">After the core <span>optional specialisms</span></h3>
  <ol class="la-road__list">${opt.map(node).join('')}</ol>
</div>`;
}

/* ----------------------------------------------------------------- lesson */

/** LearningObjectives */
export function LearningObjectives(/** @type {string[]} */ items) {
  return `<section class="la-sec la-objectives" id="objectives" aria-labelledby="objectives-h">
  <h2 id="objectives-h">By the end of this lesson you can</h2>
  <ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
</section>`;
}

/** LessonTableOfContents */
export function LessonTableOfContents(/** @type {{ id: string, label: string }[]} */ items) {
  return `<nav class="la-toc" aria-label="On this page">
  <p class="la-toc__h">On this page</p>
  <ol>${items.map((i) => `<li><a href="#${i.id}">${esc(i.label)}</a></li>`).join('')}</ol>
</nav>`;
}

/** KnowledgeCheck: immediate feedback via app.js; answers visible behind a disclosure without JavaScript. */
export function KnowledgeCheck(/** @type {string} */ id, /** @type {import('./types').QuizQuestion[]} */ quiz) {
  const qs = quiz.map((q, i) => {
    const name = `kc-${id}-${i}`;
    return `<fieldset class="la-kc__q" data-kc-q="${i}" data-answer="${q.answer}">
  <legend><span class="la-kc__n">Question ${i + 1} of ${quiz.length}</span>${esc(q.q)}</legend>
  <div class="la-kc__opts">${q.options.map((o, j) => `<label class="la-kc__opt"><input type="radio" name="${name}" value="${j}"><span>${esc(o)}</span></label>`).join('')}</div>
  <div class="la-kc__row"><button type="button" class="la-btn la-btn--sm" data-kc-check>Check answer</button><button type="button" class="la-link-btn" data-kc-reset hidden>Try again</button></div>
  <div class="la-kc__fb" role="status" aria-live="polite"></div>
  <p class="la-kc__why" hidden>${esc(q.explain)}</p>
  <details class="la-kc__ans"><summary>Show answer</summary><p><strong>${esc(q.options[q.answer])}.</strong> ${esc(q.explain)}</p></details>
</fieldset>`;
  }).join('');
  return `<div class="la-kc" data-kc="${esc(id)}">${qs}<p class="la-kc__score" data-kc-score aria-live="polite"></p></div>`;
}

/** Persisted checklist (self-assessment, assignment checklists, milestones). */
export function Checklist(/** @type {string} */ id, /** @type {string[]} */ items, label = 'Checklist') {
  return `<div class="la-checklist" data-checklist="${esc(id)}">
  <ul aria-label="${esc(label)}">${items.map((t, i) => `<li><label><input type="checkbox" data-idx="${i}"><span>${esc(t)}</span></label></li>`).join('')}</ul>
  <p class="la-checklist__count" data-checklist-count aria-live="polite">${items.length} items</p>
</div>`;
}

/** ExerciseCard: card in the practice library. */
export function ExerciseCard(/** @type {import('./types').PracticeExercise} */ e) {
  return `<article class="la-card la-ex" data-item data-filter-topic="${esc(e.topic)}" data-filter-level="${e.level}" data-filter-duration="${e.minutes <= 30 ? 'short' : e.minutes <= 60 ? 'medium' : 'long'}" data-search="${esc(`${e.title} ${e.summary} ${e.topic}`.toLowerCase())}">
  <div class="la-course__top"><span class="la-stage">${esc(e.topic)}</span>${levelTag(e.level)}</div>
  <h3 class="la-card__title"><a href="/learn/practice/${e.slug}/" class="la-stretch">${esc(e.title)}</a></h3>
  <p class="la-card__text">${esc(e.summary)}</p>
  <ul class="la-meta"><li>${fmtMin(e.minutes)}</li><li>${e.deliverables.length} deliverable${e.deliverables.length > 1 ? 's' : ''}</li></ul>
</article>`;
}

/** AssignmentBrief */
export function AssignmentBrief(/** @type {import('./types').Assignment} */ a, /** @type {string} */ id) {
  return `<div class="la-brief" id="${id}-brief">
  <p class="la-brief__label">Assignment</p>
  <h3>${esc(a.title)}</h3>
  ${a.brief}
  <h4>Deliverables</h4>
  ${Checklist(`assign:${id}`, a.deliverables, 'Assignment deliverables')}
</div>`;
}

const RUBRIC_LEVELS = ['Not yet', 'Developing', 'Competent', 'Excellent'];

/** AssessmentRubric: a real table on wide screens, stacked cards on narrow ones. */
export function AssessmentRubric(/** @type {import('./types').RubricRow[]} */ rows, caption = 'Assessment rubric') {
  return `<div class="la-rubric-wrap"><table class="la-rubric">
  <caption>${esc(caption)}</caption>
  <thead><tr><th scope="col">Criterion</th>${RUBRIC_LEVELS.map((l) => `<th scope="col">${l}</th>`).join('')}</tr></thead>
  <tbody>${rows.map((r) => `<tr><th scope="row">${esc(r.criterion)}</th>${r.levels.map((l, i) => `<td data-label="${RUBRIC_LEVELS[i]}">${esc(l)}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>`;
}

/** ResourceCard */
export function ResourceCard(/** @type {import('./types').Resource} */ r) {
  return `<article class="la-card la-res" data-item data-filter-category="${esc(r.category)}" data-search="${esc(`${r.title} ${r.source} ${r.note} ${r.category}`.toLowerCase())}">
  <div class="la-course__top"><span class="la-stage">${esc(r.category)}</span>${r.cost ? `<span class="la-tag">${esc(r.cost)}</span>` : ''}<span class="la-tag la-tag--ext">Third-party</span></div>
  <h3 class="la-card__title">${extLink(r.url, esc(r.title), 'la-stretch')}</h3>
  <p class="la-res__src">${esc(r.source)}</p>
  <p class="la-card__text">${esc(r.note)}</p>
</article>`;
}

/** BookmarkControl */
export function BookmarkControl(/** @type {string} */ kind, /** @type {string} */ id, /** @type {string} */ title, /** @type {string} */ href) {
  return `<button type="button" class="la-btn la-btn--ghost la-bm" data-bookmark="${esc(`${kind}:${id}`)}" data-title="${esc(title)}" data-href="${esc(href)}" aria-pressed="false">
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg><span data-bm-label>Save</span>
</button>`;
}

/** PreviousNextLesson */
export function PreviousNextLesson(/** @type {Lesson | null} */ prev, /** @type {Lesson | null} */ next, /** @type {Course} */ course) {
  const card = (/** @type {Lesson} */ l, /** @type {string} */ dir) => `<a class="la-pn__link la-pn__link--${dir}" href="${lessonUrl(l.slug)}"><span>${dir === 'prev' ? '← Previous lesson' : 'Next lesson →'}</span><b>${esc(l.title)}</b></a>`;
  return `<nav class="la-pn" aria-label="Lesson navigation">
  ${prev ? card(prev, 'prev') : '<span></span>'}
  ${next ? card(next, 'next') : '<span></span>'}
</nav>
<p class="la-pn__back"><a href="${courseUrl(course.slug)}">Back to ${esc(course.title)}</a> <span aria-hidden="true">·</span> <a href="/learn/roadmap/">Roadmap</a></p>`;
}

/** SearchAndFilters: a search box plus select filters for any [data-filterable] list. */
export function SearchAndFilters(/** @type {string} */ id, /** @type {{ key: string, label: string, options: [string, string][] }[]} */ filters, placeholder = 'Search') {
  return `<form class="la-filters" data-filters-for="${id}" role="search">
  <div class="la-field la-field--grow"><label for="${id}-q">Search</label><input id="${id}-q" type="search" data-filter-search placeholder="${esc(placeholder)}" autocomplete="off"></div>
  ${filters.map((f) => `<div class="la-field"><label for="${id}-${f.key}">${esc(f.label)}</label><select id="${id}-${f.key}" data-filter="${f.key}"><option value="">All</option>${f.options.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('')}</select></div>`).join('')}
  <p class="la-filters__count" data-filter-count aria-live="polite"></p>
</form>`;
}

/** GlossarySearch: filters + a definition list, using the same filter engine. */
export function GlossarySearch(/** @type {import('./types').GlossaryTerm[]} */ terms, /** @type {string[]} */ groups) {
  const slug = (/** @type {string} */ t) => 'term-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term));
  const known = new Set(terms.map((t) => t.term.toLowerCase()));
  const items = sorted.map((t) => `<div class="la-term" id="${slug(t.term)}" data-item data-filter-group="${esc(t.group)}" data-search="${esc(`${t.term} ${t.definition} ${t.related.join(' ')}`.toLowerCase())}">
  <dt><span class="la-term__name">${esc(t.term)}</span> <span class="la-tag">${esc(t.group)}</span></dt>
  <dd><p>${esc(t.definition)}</p><p class="la-term__ex"><span>Example</span> ${esc(t.example)}</p>${t.related.length ? `<p class="la-term__rel"><span>Related</span> ${t.related.map((r) => known.has(r.toLowerCase()) ? `<a href="#${slug(r)}">${esc(r)}</a>` : esc(r)).join(', ')}</p>` : ''}</dd>
</div>`).join('');
  return `${SearchAndFilters('glossary', [{ key: 'group', label: 'Group', options: groups.map((g) => [g, g]) }], 'Search terms and definitions')}
<dl class="la-terms" data-filterable="glossary">${items}</dl>
${EmptyState('No terms match', 'Try a shorter word or clear the group filter.', '', ' data-filter-empty hidden')}`;
}

/** ProjectMilestoneList */
export function ProjectMilestoneList(/** @type {import('./types').Project} */ p) {
  return `<div class="la-ms" data-milestones="${p.slug}">
  ${ProgressIndicator(`project:${p.slug}`, `${p.title} milestones`, 'sm')}
  <ol class="la-ms__list">${p.milestones.map((m, i) => `<li class="la-ms__item">
    <h3 class="la-ms__title"><span>Milestone ${i + 1}</span>${esc(m.title)}</h3>
    ${Checklist(`ms:${p.slug}:${m.id}`, m.tasks, `${m.title} tasks`)}
  </li>`).join('')}</ol>
</div>`;
}

/** Simple list helpers */
export const ul = (/** @type {string[]} */ items, cls = '') => `<ul${cls ? ` class="${cls}"` : ''}>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
export const ulText = (/** @type {string[]} */ items, cls = '') => ul(items.map(esc), cls);
export const ol = (/** @type {string[]} */ items, cls = '') => `<ol${cls ? ` class="${cls}"` : ''}>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;

/* ------------------------------------------------------------- e-learning */

/** Video runtime: "5:45" under an hour, "1 h 14 min" above it. */
export const fmtDuration = (/** @type {number} */ seconds) => {
  const total = Math.max(0, Math.round(seconds));
  if (total < 3600) return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
  const m = Math.round(total / 60);
  const h = Math.floor(m / 60), r = m % 60;
  return r ? `${h} h ${r} min` : `${h} h`;
};

/**
 * VideoPlayer: a third-party video at the top of a lesson. The embed is
 * lazy, uses the privacy-friendly nocookie domain and never autoplays.
 *
 * `origin` is passed to YouTube, as its documentation asks: it proves
 * the page is a real embedder and stops another page from hijacking the
 * player through postMessage. The embed also asks for the native
 * controls explicitly, and the frame is kept large enough for YouTube to
 * draw them (it hides the bar below 200px tall).
 *
 * app.js attaches the control bar underneath: play/pause, a scrubber,
 * the time, mute, playback speed and full screen. It uses the YouTube
 * IFrame Player API, which it loads only on pages that have a video.
 */
export function VideoPlayer(/** @type {import('./types').Video} */ v, slug = '', origin = '') {
  const params = new URLSearchParams({ rel: '0', controls: '1', playsinline: '1', enablejsapi: '1' });
  if (origin) params.set('origin', origin.replace(/\/+$/, ''));
  const src = `https://www.youtube-nocookie.com/embed/${esc(v.id)}?${params.toString()}`;
  return `<figure class="la-player" data-video-slug="${esc(slug)}" data-video-id="${esc(v.id)}" data-video-seconds="${v.seconds}">
  <div class="la-player__frame">
    <iframe src="${esc(src)}"
      title="${esc(v.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="la-vbar" data-vbar>
    <button type="button" class="la-vbar__btn" data-vplay aria-label="Play the video" data-icon="play">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor" data-vplay-icon><path d="M8 5.5v13l11-6.5z"/></svg>
    </button>
    <span class="la-vbar__time" data-vtime aria-live="off">0:00</span>
    <input class="la-vbar__seek" type="range" min="0" max="1000" value="0" step="1" data-vseek aria-label="Seek through the video" disabled>
    <span class="la-vbar__time" data-vdur>${fmtDuration(v.seconds)}</span>
    <button type="button" class="la-vbar__btn" data-vmute aria-label="Mute the video" data-icon="mute">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-vmute-icon>
        <path d="M4 9.5h3l4-3.5v12l-4-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.8a7.5 7.5 0 0 1 0 10.4"/>
      </svg>
    </button>
    <button type="button" class="la-vbar__btn la-vbar__rate" data-vrate aria-label="Change the playback speed">1×</button>
    <button type="button" class="la-vbar__btn" data-vfull aria-label="Watch full screen">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/></svg>
    </button>
  </div>
  <figcaption class="la-player__cap">
    <p class="la-player__meta"><span class="la-tag la-tag--video">Watch</span><span class="la-player__chan">${esc(v.channel)}</span><span class="la-player__len">${fmtDuration(v.seconds)}</span><span class="la-player__watched" data-video-watched hidden>Watched</span></p>
    <p class="la-player__title">${esc(v.title)}</p>
    <p class="la-player__note">${esc(v.note)}</p>
    <p class="la-player__links"><a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener noreferrer">Watch on YouTube<span class="la-sr"> (opens in a new tab)</span></a><span class="la-player__legal">Third-party video. It is loaded from YouTube and is not hosted by the academy.</span></p>
  </figcaption>
</figure>`;
}

/** ProgressRing: a circular progress indicator for the dashboard. The
    percentage is filled in by app.js from the learner's own progress. */
export function ProgressRing(/** @type {string} */ scope, label = 'complete', size = 'md') {
  return `<div class="la-ring la-ring--${size}" data-ring-scope="${esc(scope)}" style="--la-pct:0" role="img" aria-label="${esc(label)}: 0 percent complete">
  <div class="la-ring__in"><b data-ring-value>0<i>%</i></b><span>${esc(label)}</span></div>
</div>`;
}

/** The kind of work a lesson asks for, shown as a small badge. */
const LESSON_KIND = (/** @type {Lesson} */ l, hasVideo) => {
  if (l.status !== 'published') return { key: 'planned', label: 'In writing' };
  if (hasVideo) return { key: 'video', label: 'Video' };
  return { key: 'reading', label: 'Reading' };
};

/**
 * LessonRow: one lesson in a course syllabus. Shows the kind of work,
 * how long it takes and, once started, whether it is finished.
 */
export function LessonRow(/** @type {Lesson} */ l, { index = 0, video = null, total = 0 } = {}) {
  const kind = LESSON_KIND(l, !!video);
  const published = l.status === 'published';
  const title = published
    ? `<a href="${lessonUrl(l.slug)}">${esc(l.title)}</a>`
    : `${esc(l.title)} <span class="la-status la-status--planned">In writing</span>`;
  return `<li class="la-srow${published ? '' : ' is-planned'}" ${published ? `data-lesson-row="${esc(l.slug)}"` : `id="lesson-${esc(l.slug)}"`}>
  <span class="la-srow__n" aria-hidden="true">${index + 1}</span>
  <div class="la-srow__main">
    <h3 class="la-srow__t">${title}</h3>
    <p class="la-srow__sum">${esc(l.summary)}</p>
  </div>
  <span class="la-srow__meta">
    <span class="la-kind la-kind--${kind.key}">${kind.label}</span>
    <span class="la-srow__len">${fmtMin(l.minutes)}</span>
    <span class="la-srow__state" data-lesson-state></span>
  </span>
</li>`;
}

/** CourseCover: the coloured panel that makes a course card read like a course tile. */
export function CourseCover(/** @type {Course} */ c, { compact = false } = {}) {
  const s = courseStats(c);
  return `<div class="la-cover la-cover--stage-${c.stage % 6}" aria-hidden="true">
  <span class="la-cover__stage">Stage ${c.stage}</span>
  <span class="la-cover__mark">${esc(c.title.split(' ').slice(0, 2).map((w) => w[0]).join(''))}</span>
  ${compact ? '' : `<span class="la-cover__meta">${s.total} lessons · about ${fmtMin(s.minutes)}</span>`}
</div>`;
}

/** Mobile dock: an app-style bottom navigation, shown on small screens. */
export function AppDock(/** @type {string} */ active) {
  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
    courses: '<rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    roadmap: '<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="12" r="2.2"/><circle cx="6" cy="18" r="2.2"/><path d="M8 7.2 16 11M8 16.8 16 13"/>',
    practice: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16V11"/><path d="M13 16V7"/><path d="M18 16v-3"/>',
    saved: '<path d="M6 3h12v18l-6-4.5L6 21z"/>',
  };
  const items = [
    ['overview', '/learn/', 'Home', I.home],
    ['courses', '/learn/courses/', 'Courses', I.courses],
    ['roadmap', '/learn/roadmap/', 'Roadmap', I.roadmap],
    ['practice', '/learn/practice/', 'Practice', I.practice],
    ['saved', '/learn/saved/', 'My learning', I.saved],
  ];
  return `<nav class="la-dock" aria-label="Main">
  <ul>${items.map(([key, href, label, icon]) => `<li><a href="${href}"${key === active ? ' aria-current="page"' : ''}>
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>
    <span>${label}</span></a></li>`).join('')}</ul>
</nav>`;
}
