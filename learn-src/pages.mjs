// @ts-check
/* Page templates for every academy route. Each returns { path, title, description, body, active, jsonld? }. */
import {
  esc, fmtMin, lessonUrl, courseUrl, extLink, Breadcrumbs, ProgressIndicator, CourseCard, courseStats, levelTag, coreTag,
  RoadmapOverview, LearningObjectives, LessonTableOfContents, KnowledgeCheck, Checklist, ExerciseCard, AssignmentBrief,
  AssessmentRubric, ResourceCard, BookmarkControl, PreviousNextLesson, SearchAndFilters, GlossarySearch, ProjectMilestoneList,
  EmptyState, ulText, ul, ol,
} from './components.mjs';
import { SITE } from './shell.mjs';

/** @typedef {import('./types').Course} Course */
/** @typedef {import('./types').Lesson} Lesson */

const AUTHOR = { '@type': 'Person', name: 'Saagar Shrestha', url: SITE + '/' };
const ACADEMY = { '@type': 'Organization', name: 'UI/UX Design Academy by Saagar Shrestha', url: SITE + '/learn/' };

/** Section heading with an anchor id. */
const sec = (/** @type {string} */ id, /** @type {string} */ title, /** @type {string} */ inner, cls = '') =>
  `<section class="la-sec${cls ? ' ' + cls : ''}" id="${id}" aria-labelledby="${id}-h"><h2 id="${id}-h">${title}</h2>${inner}</section>`;

const hero = (/** @type {string} */ eyebrow, /** @type {string} */ title, /** @type {string} */ lead, extra = '') =>
  `<header class="la-hero"><div class="la-wrap"><p class="la-eyebrow">${eyebrow}</p><h1 class="la-h1">${title}</h1><p class="la-lead">${lead}</p>${extra}</div></header>`;

const storageNote = `<p class="la-note" data-storage-note>Progress, bookmarks and notes are saved in this browser only. They do not sync across devices and are lost if you clear your browser data. You can <a href="/learn/saved/#backup">download a backup</a> at any time.</p>`;

/* =================================================================== HOME */

/** @param {{ courses: Course[], projects: import('./types').Project[], exercises: import('./types').PracticeExercise[], paths: import('./types').LearningPath[], glossary: import('./types').GlossaryTerm[], resources: import('./types').Resource[], templates: import('./types').Template[], first: Lesson }} d */
export function homePage(d) {
  const allLessons = d.courses.flatMap((c) => c.lessons);
  const published = allLessons.filter((l) => l.status === 'published');
  const core = d.courses.filter((c) => !c.optional), opt = d.courses.filter((c) => c.optional);
  const facts = [
    [String(d.courses.length), 'stages, from orientation to specialisms'],
    [String(allLessons.length), `lessons planned, ${published.length} written so far`],
    [String(d.projects.length), 'guided portfolio projects'],
    [String(d.glossary.length), 'glossary terms'],
  ];
  const body = `
<header class="la-hero la-hero--home">
  <div class="la-wrap la-hero__grid">
    <div>
      <p class="la-eyebrow">Free and self-guided · no account needed</p>
      <h1 class="la-h1 la-h1--xl">UI/UX Design <em>Academy.</em></h1>
      <p class="la-tagline">Learn design by understanding, practising, and building.</p>
      <p class="la-lead">A structured path from complete beginner to portfolio-ready junior designer. Every lesson explains why a decision works, shows a realistic example, and ends with practice you can check against a rubric. Written for students, career switchers, visual designers moving into UX, and developers who want to learn product design.</p>
      <div class="la-actions">
        <a class="la-btn la-btn--lg" href="${lessonUrl(d.first.slug)}" data-start-link>Start learning <span aria-hidden="true">→</span></a>
        <a class="la-btn la-btn--ghost la-btn--lg" href="/learn/roadmap/">See the roadmap</a>
      </div>
    </div>
    <dl class="la-facts">${facts.map(([n, l]) => `<div><dt>${esc(l)}</dt><dd>${n}</dd></div>`).join('')}</dl>
  </div>
</header>

<section class="la-band la-continue" data-continue hidden aria-labelledby="continue-h">
  <div class="la-wrap">
    <h2 id="continue-h" class="la-h2">Continue <em>learning.</em></h2>
    <div class="la-continue__grid" data-continue-slot></div>
  </div>
</section>

<section class="la-band" aria-labelledby="overview-h">
  <div class="la-wrap la-split">
    <div>
      <h2 id="overview-h" class="la-h2">Your <em>progress.</em></h2>
      <p class="la-muted">Calculated from the lessons that are written so far. Optional specialisms are counted separately.</p>
      ${ProgressIndicator('core', 'Core curriculum progress', 'lg')}
      ${storageNote}
    </div>
    <div class="la-searchbox">
      <h2 class="la-h3"><label for="la-home-q">Find a lesson, term or resource</label></h2>
      <div class="la-searchbox__row"><input id="la-home-q" type="search" data-live-search="la-home-results" placeholder="Try “hierarchy”, “persona” or “contrast”" autocomplete="off"></div>
      <div id="la-home-results" class="la-live" aria-live="polite"></div>
    </div>
  </div>
</section>

<section class="la-band la-band--soft" aria-labelledby="road-h">
  <div class="la-wrap">
    <div class="la-head-row"><h2 id="road-h" class="la-h2">The <em>roadmap.</em></h2><a class="la-more" href="/learn/roadmap/">Full roadmap with prerequisites <span aria-hidden="true">→</span></a></div>
    <p class="la-muted la-maxw">Stages 0 to 11 are the core curriculum, in a recommended order. Stage 12 holds optional specialisms for after the core. Your status for each stage updates as you complete lessons.</p>
    ${RoadmapOverview(d.courses)}
  </div>
</section>

<section class="la-band" aria-labelledby="paths-h">
  <div class="la-wrap">
    <h2 id="paths-h" class="la-h2">Choose a <em>path.</em></h2>
    <div class="la-grid la-grid--3">${d.paths.map((p) => `<article class="la-card la-path">
      <p class="la-stage">${esc(p.who)}</p>
      <h3 class="la-card__title"><a class="la-stretch" href="/learn/roadmap/#path-${p.slug}">${esc(p.title)}</a></h3>
      <p class="la-card__text">${esc(p.description)}</p>
    </article>`).join('')}</div>
  </div>
</section>

<section class="la-band la-band--soft" aria-labelledby="courses-h">
  <div class="la-wrap">
    <div class="la-head-row"><h2 id="courses-h" class="la-h2">Core <em>courses.</em></h2><a class="la-more" href="/learn/courses/">All courses <span aria-hidden="true">→</span></a></div>
    <div class="la-grid la-grid--3">${core.map((c) => CourseCard(c)).join('')}</div>
    <h3 class="la-h3 la-mt">Optional and advanced</h3>
    <div class="la-grid la-grid--3">${opt.map((c) => CourseCard(c, { outcomes: 0, headingLevel: 4 })).join('')}</div>
  </div>
</section>

<section class="la-band" aria-labelledby="proj-h">
  <div class="la-wrap">
    <div class="la-head-row"><h2 id="proj-h" class="la-h2">Build real <em>projects.</em></h2><a class="la-more" href="/learn/projects/">All projects <span aria-hidden="true">→</span></a></div>
    <div class="la-grid la-grid--2">${d.projects.map(projectCard).join('')}</div>
    <div class="la-head-row la-mt"><h3 class="la-h3">Short challenges</h3><a class="la-more" href="/learn/practice/">Practice library <span aria-hidden="true">→</span></a></div>
    <div class="la-grid la-grid--3">${d.exercises.slice(0, 6).map(ExerciseCard).join('')}</div>
  </div>
</section>

<section class="la-band la-band--ink" aria-labelledby="quick-h">
  <div class="la-wrap">
    <h2 id="quick-h" class="la-h2">Quick <em>reference.</em></h2>
    <div class="la-quick">
      <a href="/learn/glossary/"><b>Glossary</b><span>${d.glossary.length} terms with examples</span></a>
      <a href="/learn/resources/#templates"><b>Templates</b><span>${d.templates.length} copyable templates and checklists</span></a>
      <a href="/learn/resources/"><b>Resources</b><span>${d.resources.length} trusted external references</span></a>
      <a href="/learn/career/"><b>Career guide</b><span>Portfolio, interviews and freelancing</span></a>
    </div>
  </div>
</section>`;
  return {
    path: '/learn/', active: 'overview',
    title: 'Learn UI/UX design from scratch',
    description: 'A free, self-guided UI/UX design academy: a structured roadmap, written lessons with examples, exercises, portfolio projects, templates and a glossary. Progress is saved in your browser.',
    body,
    jsonld: { '@context': 'https://schema.org', '@type': 'WebSite', name: 'UI/UX Design Academy', url: SITE + '/learn/', publisher: AUTHOR, potentialAction: { '@type': 'SearchAction', target: SITE + '/learn/search/?q={q}', 'query-input': 'required name=q' } },
  };
}

function projectCard(/** @type {import('./types').Project} */ p) {
  return `<article class="la-card la-proj" data-item>
  <div class="la-course__top"><span class="la-stage">Project ${p.number}</span>${levelTag(p.level)}</div>
  <h3 class="la-card__title"><a class="la-stretch" href="/learn/projects/${p.slug}/">${esc(p.title)}</a></h3>
  <p class="la-card__text">${esc(p.short)}</p>
  <ul class="la-meta"><li>${esc(p.weeks)}</li><li>${p.milestones.length} milestones</li><li>${p.deliverables.length} deliverables</li></ul>
  ${ProgressIndicator(`project:${p.slug}`, `${p.title} milestones`, 'sm')}
</article>`;
}

/* ================================================================ ROADMAP */

/** @param {{ courses: Course[], paths: import('./types').LearningPath[], projects: import('./types').Project[] }} d */
export function roadmapPage(d) {
  const projAfter = (/** @type {string} */ slug) => d.projects.filter((p) => p.prerequisites[p.prerequisites.length - 1] === slug);
  const body = `
${hero('Roadmap', 'From first lesson to <em>first job.</em>', 'The recommended order through the academy, what each stage needs before it, and where the portfolio projects fit. Your status for each stage updates as you complete lessons.', `<div class="la-actions"><a class="la-btn" href="#stages">Jump to the stages</a><a class="la-btn la-btn--ghost" href="#paths">Learning paths</a></div>`)}
<div class="la-wrap la-page">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Roadmap' }])}
  ${sec('next', 'What to study next', `<div data-next-slot>${EmptyState('Start with Stage 0', 'You have not completed any lessons in this browser yet. Stage 0 explains the field and helps you plan your learning.', `<a class="la-btn" href="/learn/lessons/what-is-ui-and-ux/">Start the first lesson</a>`)}</div>`)}
  ${sec('stages', 'Stages and prerequisites', `
    <p class="la-muted la-maxw">Each stage builds on the ones listed under “After”. You can read ahead, but exercises assume the earlier stages. Projects appear at the point you have the skills to do them.</p>
    ${RoadmapOverview(d.courses, { detailed: true })}
    <h3 class="la-h3 la-mt">Where the projects fit</h3>
    <ol class="la-fit">${d.courses.filter((c) => projAfter(c.slug).length).map((c) => projAfter(c.slug).map((p) => `<li><span>After Stage ${c.stage}</span> <a href="/learn/projects/${p.slug}/">Project ${p.number}: ${esc(p.title)}</a></li>`).join('')).join('')}</ol>`)}
  ${sec('paths', 'Learning paths', d.paths.map((p) => `<div class="la-pathd" id="path-${p.slug}">
      <h3 class="la-h3">${esc(p.title)}</h3>
      <p class="la-muted"><strong>For:</strong> ${esc(p.who)}. ${esc(p.description)}</p>
      <ol class="la-steps la-steps--compact">${p.steps.map((s) => `<li><a href="${s.href}">${esc(s.label)}</a><p>${esc(s.why)}</p></li>`).join('')}</ol>
    </div>`).join(''))}
  ${storageNote}
</div>`;
  return { path: '/learn/roadmap/', active: 'roadmap', title: 'Learning roadmap', description: 'The full UI/UX learning roadmap: 13 stages with prerequisites, recommended order, learning paths and where each portfolio project fits.', body };
}

/* ================================================================ COURSES */

/** @param {{ courses: Course[] }} d */
export function coursesPage(d) {
  const body = `
${hero('Curriculum', 'Courses and <em>modules.</em>', 'Thirteen stages, each a course of short lessons. Core stages are the recommended path to a junior role; optional stages are specialisms for later.')}
<div class="la-wrap la-page">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Courses' }])}
  ${SearchAndFilters('courses', [
    { key: 'kind', label: 'Type', options: [['core', 'Core'], ['optional', 'Optional']] },
    { key: 'level', label: 'Level', options: [['Beginner', 'Beginner'], ['Intermediate', 'Intermediate'], ['Advanced', 'Advanced']] },
  ], 'Search courses and lesson titles')}
  <div class="la-grid la-grid--3" data-filterable="courses">${d.courses.map((c) => CourseCard(c)).join('')}</div>
  ${EmptyState('No courses match', 'Try another word, or set the filters back to All.', '', ' data-filter-empty hidden')}
</div>`;
  return { path: '/learn/courses/', active: 'courses', title: 'Courses', description: 'All 13 UI/UX design courses, from orientation and visual design to research, Figma, accessibility, product thinking and career readiness.', body };
}

/** @param {Course} c @param {Course[]} all @param {import('./types').Project[]} projects */
export function coursePage(c, all, projects) {
  const s = courseStats(c);
  const bySlug = Object.fromEntries(all.map((x) => [x.slug, x]));
  const pre = c.prerequisites.length
    ? `<p class="la-pre"><span>Before this stage</span> ${c.prerequisites.map((p) => `<a href="${courseUrl(p)}">Stage ${bySlug[p].stage}: ${esc(bySlug[p].title)}</a>`).join(', ')}</p>`
    : '<p class="la-pre"><span>Before this stage</span> Nothing. Start here.</p>';
  const rows = c.lessons.map((l, i) => {
    const req = l.requiresCourses?.length ? `<p class="la-lrow__req">Builds on ${l.requiresCourses.map((r) => `Stage ${bySlug[r].stage}`).join(', ')}</p>` : '';
    if (l.status === 'published') return `<li class="la-lrow" id="lesson-${l.slug}" data-lesson-row="${l.slug}">
      <span class="la-lrow__n" aria-hidden="true">${i + 1}</span>
      <div class="la-lrow__main"><h3 class="la-lrow__t"><a href="${lessonUrl(l.slug)}">${esc(l.title)}</a></h3><p>${esc(l.summary)}</p>${req}</div>
      <span class="la-lrow__meta">${fmtMin(l.minutes)}<span class="la-lrow__state" data-lesson-state></span></span>
    </li>`;
    return `<li class="la-lrow is-planned" id="lesson-${l.slug}">
      <span class="la-lrow__n" aria-hidden="true">${i + 1}</span>
      <div class="la-lrow__main"><h3 class="la-lrow__t">${esc(l.title)}</h3><p>${esc(l.summary)}</p>${req}</div>
      <span class="la-lrow__meta">${fmtMin(l.minutes)}<span class="la-status la-status--planned">In writing</span></span>
    </li>`;
  }).join('');
  const linked = projects.filter((p) => c.projects?.includes(p.slug));
  const firstPub = c.lessons.find((l) => l.status === 'published');
  const idx = all.indexOf(c);
  const body = `
<header class="la-hero"><div class="la-wrap">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Courses', href: '/learn/courses/' }, { label: `Stage ${c.stage}` }])}
  <p class="la-eyebrow">Stage ${c.stage} · ${c.optional ? 'Optional' : 'Core'} · ${c.level}</p>
  <h1 class="la-h1">${esc(c.title)}</h1>
  <p class="la-lead">${esc(c.short)}</p>
  <ul class="la-meta la-meta--lg"><li>${s.total} lessons</li><li>about ${fmtMin(s.minutes)} of reading and practice</li><li>${s.written}</li></ul>
  <div class="la-actions">${firstPub ? `<a class="la-btn" href="${lessonUrl(firstPub.slug)}" data-course-start="${c.slug}">Start this course <span aria-hidden="true">→</span></a>` : ''}${BookmarkControl('course', c.slug, c.title, courseUrl(c.slug))}</div>
</div></header>
<div class="la-wrap la-page la-course-page">
  <div class="la-course-page__main">
    ${sec('about', 'About this stage', `<div class="la-prose">${c.overview}</div>${pre}`)}
    ${sec('outcomes', 'Learning outcomes', ulText(c.outcomes, 'la-outcomes la-outcomes--lg'))}
    ${sec('lessons', 'Lessons', `${s.pub < s.total ? `<p class="la-note">${s.pub ? `${s.pub} of ${s.total} lessons are written.` : 'The lessons in this stage are being written.'} Lessons marked “In writing” are listed so you can see the full scope; they are never counted towards your progress. The <a href="/learn/resources/">resource library</a> and <a href="/learn/glossary/">glossary</a> cover these topics in the meantime.</p>` : ''}<ol class="la-lrows">${rows}</ol>`)}
    ${linked.length ? sec('projects', 'Practise with a project', `<div class="la-grid la-grid--2">${linked.map(projectCard).join('')}</div>`) : ''}
  </div>
  <aside class="la-course-page__side" aria-label="Course progress">
    <div class="la-side-card">
      <p class="la-side-card__h">Your progress</p>
      ${s.pub ? ProgressIndicator(`course:${c.slug}`, `${c.title} progress`) : '<p class="la-muted">Nothing to track yet. Lessons appear here as they are written.</p>'}
      <p class="la-side-card__links"><a href="/learn/roadmap/">Roadmap</a>${all[idx + 1] ? ` · <a href="${courseUrl(all[idx + 1].slug)}">Next stage</a>` : ''}</p>
    </div>
  </aside>
</div>`;
  return {
    path: courseUrl(c.slug), active: 'courses', title: `Stage ${c.stage}: ${c.title}`,
    description: `${c.short} ${s.total} lessons in the free UI/UX Design Academy.`,
    body,
    jsonld: { '@context': 'https://schema.org', '@type': 'Course', name: c.title, description: c.short, provider: ACADEMY, isAccessibleForFree: true, educationalLevel: c.level, url: SITE + courseUrl(c.slug), teaches: c.outcomes, inLanguage: 'en' },
  };
}

/* ================================================================= LESSON */

/** @param {{ lesson: Lesson, course: Course, prev: Lesson | null, next: Lesson | null, index: number, lessonsBySlug: Record<string, { lesson: Lesson, course: Course }> }} d */
export function lessonPage(d) {
  const { lesson: l, course: c } = d;
  const b = /** @type {import('./types').LessonBody} */ (l.body);
  const toc = [
    { id: 'objectives', label: 'Objectives' }, { id: 'explanation', label: 'The idea' }, { id: 'why', label: 'Why it matters' },
    { id: 'example', label: 'Example' }, { id: 'walkthrough', label: 'Step by step' }, { id: 'mistakes', label: 'Common mistakes' },
    { id: 'check', label: 'Knowledge check' }, { id: 'exercise', label: 'Exercise' },
    ...(b.assignment ? [{ id: 'assignment', label: 'Assignment' }] : []),
    { id: 'self-check', label: 'Self-assessment' }, { id: 'summary', label: 'Summary' }, { id: 'reading', label: 'Further reading' }, { id: 'notes', label: 'Your notes' },
  ];
  const pre = (l.prerequisites || []).map((p) => d.lessonsBySlug[p]).filter(Boolean);
  const preHtml = pre.length ? `<p class="la-pre"><span>Read first</span> ${pre.map((x) => `<a href="${lessonUrl(x.lesson.slug)}">${esc(x.lesson.title)}</a>`).join(', ')}</p>` : '';
  const figure = b.figure ? `<figure class="la-fig">${b.figure.html}<figcaption>${esc(b.figure.caption)}</figcaption></figure>` : '';
  const ex = b.exercise;
  const completeBtn = (/** @type {string} */ where) => `<button type="button" class="la-btn${where === 'top' ? ' la-btn--ghost' : ''}" data-complete="${l.slug}" aria-pressed="false"><span data-complete-label>Mark lesson complete</span></button>`;
  const body = `
<header class="la-hero la-hero--lesson"><div class="la-wrap">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: `Stage ${c.stage}: ${c.title}`, href: courseUrl(c.slug) }, { label: l.title }])}
  <p class="la-eyebrow">Stage ${c.stage} · Lesson ${d.index + 1} of ${c.lessons.length}</p>
  <h1 class="la-h1">${esc(l.title)}</h1>
  <p class="la-lead">${esc(l.summary)}</p>
  <ul class="la-meta la-meta--lg"><li>${esc(l.level || c.level)}</li><li>${fmtMin(l.minutes)}</li><li>${b.quiz.length} check questions</li><li>Exercise: ${fmtMin(ex.minutes)}</li></ul>
  ${preHtml}
  <div class="la-actions la-no-print">${completeBtn('top')}${BookmarkControl('lesson', l.slug, l.title, lessonUrl(l.slug))}<button type="button" class="la-btn la-btn--ghost" data-print>Print lesson</button></div>
</div></header>

<div class="la-wrap la-lesson" data-lesson="${l.slug}" data-course="${c.slug}">
  <aside class="la-lesson__side la-no-print">
    <details class="la-toc-wrap" open data-toc-details>
      <summary>Contents</summary>
      ${LessonTableOfContents(toc)}
    </details>
    <div class="la-side-card">
      <p class="la-side-card__h">${esc(c.title)}</p>
      ${ProgressIndicator(`course:${c.slug}`, `${c.title} progress`, 'sm')}
      <p class="la-side-card__links"><a href="${courseUrl(c.slug)}">Course</a> · <a href="/learn/roadmap/">Roadmap</a></p>
    </div>
  </aside>

  <article class="la-lesson__main">
    ${LearningObjectives(b.objectives)}
    ${sec('explanation', 'The idea', `<div class="la-prose">${b.explanation}</div>`)}
    ${sec('why', 'Why it matters in real projects', `<div class="la-prose">${b.why}</div>`)}
    ${sec('example', 'A realistic example', `<div class="la-prose">${b.example}</div>${figure}`)}
    ${sec('walkthrough', 'Step by step', `<ol class="la-steps">${b.walkthrough.map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></li>`).join('')}</ol>`)}
    ${sec('mistakes', 'Common mistakes', `<ul class="la-mistakes">${b.mistakes.map((m) => `<li><p class="la-mistakes__m"><span>Mistake</span> ${esc(m.mistake)}</p><p class="la-mistakes__f"><span>Instead</span> ${esc(m.fix)}</p></li>`).join('')}</ul>`)}
    ${sec('check', 'Check your understanding', `<p class="la-muted">Choose an answer, then check it. There is an explanation either way.</p>${KnowledgeCheck(l.slug, b.quiz)}`)}
    ${sec('exercise', 'Practice exercise', `<div class="la-brief">
      <p class="la-brief__label">Exercise · about ${fmtMin(ex.minutes)}</p>
      <h3>${esc(ex.title)}</h3>
      <div class="la-prose">${ex.brief}</div>
      <h4>Steps</h4>${ol(ex.steps.map(esc), 'la-ol')}
      <h4>Deliverable</h4><p>${esc(ex.deliverable)}</p>
    </div>`)}
    ${b.assignment ? sec('assignment', 'Assignment', AssignmentBrief(b.assignment, l.slug)) : ''}
    ${sec('self-check', 'Self-assessment', `<p class="la-muted">Tick each item when it is true of your exercise. Be honest; this is for you.</p>${Checklist(`lesson:${l.slug}`, b.checklist, 'Self-assessment checklist')}`)}
    ${sec('summary', 'Summary', ulText(b.summary, 'la-summary'))}
    ${sec('reading', 'Further reading', `<p class="la-muted">Third-party sources, chosen for reliability. They open in a new tab.</p><ul class="la-reading">${b.reading.map((r) => `<li>${extLink(r.url, esc(r.title))}<span class="la-reading__src">${esc(r.source)}</span>${r.note ? `<p>${esc(r.note)}</p>` : ''}</li>`).join('')}</ul>`)}
    ${sec('notes', 'Your notes', `<label class="la-sr" for="notes-${l.slug}">Notes for ${esc(l.title)}</label><textarea id="notes-${l.slug}" class="la-notes" data-notes="${l.slug}" rows="6" placeholder="What did you learn? What will you try? Notes save automatically in this browser."></textarea><p class="la-notes__status" data-notes-status aria-live="polite"></p>`, 'la-no-print-empty')}
    <div class="la-finish la-no-print">${completeBtn('bottom')}<p class="la-muted">Marking complete updates your course and roadmap progress.</p></div>
    ${PreviousNextLesson(d.prev, d.next, c)}
  </article>
</div>`;
  return {
    path: lessonUrl(l.slug), active: 'courses', title: l.title,
    description: `${l.summary} A free lesson with examples, a knowledge check and an exercise, from Stage ${c.stage} of the UI/UX Design Academy.`,
    body,
    jsonld: { '@context': 'https://schema.org', '@type': 'LearningResource', name: l.title, description: l.summary, learningResourceType: 'Lesson', educationalLevel: l.level || c.level, timeRequired: `PT${l.minutes}M`, isAccessibleForFree: true, author: AUTHOR, isPartOf: { '@type': 'Course', name: c.title, url: SITE + courseUrl(c.slug) }, teaches: b.objectives, url: SITE + lessonUrl(l.slug), inLanguage: 'en' },
  };
}

/* =============================================================== PRACTICE */

/** @param {{ exercises: import('./types').PracticeExercise[] }} d */
export function practicePage(d) {
  const topics = [...new Set(d.exercises.map((e) => e.topic))].sort();
  const body = `
${hero('Practice library', 'Short exercises, <em>real skills.</em>', 'Focused challenges you can finish in an evening. Each one has a brief, a checklist, evaluation criteria, hints and an illustrative solution. There is never only one correct design.')}
<div class="la-wrap la-page">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Practice' }])}
  ${SearchAndFilters('practice', [
    { key: 'topic', label: 'Topic', options: topics.map((t) => [t, t]) },
    { key: 'level', label: 'Difficulty', options: [['Beginner', 'Beginner'], ['Intermediate', 'Intermediate'], ['Advanced', 'Advanced']] },
    { key: 'duration', label: 'Duration', options: [['short', 'Up to 30 min'], ['medium', '31 to 60 min'], ['long', 'Over an hour']] },
  ], 'Search exercises')}
  <div class="la-grid la-grid--3" data-filterable="practice">${d.exercises.map(ExerciseCard).join('')}</div>
  ${EmptyState('No exercises match', 'Try a different word or reset the filters to All.', '', ' data-filter-empty hidden')}
</div>`;
  return { path: '/learn/practice/', active: 'practice', title: 'Practice library', description: 'Searchable UI/UX design exercises by topic, difficulty and duration: hierarchy, forms, navigation, contrast, type scales, components, states, checkout critique and heuristic audits.', body };
}

/** @param {import('./types').PracticeExercise} e @param {Record<string, { lesson: Lesson, course: Course }>} lessonsBySlug */
export function exercisePage(e, lessonsBySlug) {
  const related = (e.relatedLessons || []).map((s) => lessonsBySlug[s]).filter(Boolean);
  const body = `
<header class="la-hero"><div class="la-wrap">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Practice', href: '/learn/practice/' }, { label: e.title }])}
  <p class="la-eyebrow">${esc(e.topic)} · ${e.level} · ${fmtMin(e.minutes)}</p>
  <h1 class="la-h1">${esc(e.title)}</h1>
  <p class="la-lead">${esc(e.summary)}</p>
  <div class="la-actions la-no-print">${BookmarkControl('exercise', e.slug, e.title, `/learn/practice/${e.slug}/`)}<button type="button" class="la-btn la-btn--ghost" data-print>Print brief</button></div>
</div></header>
<div class="la-wrap la-page la-narrow">
  ${sec('context', 'Context', `<div class="la-prose">${e.context}</div>`)}
  ${sec('prompt', 'Your prompt', `<p class="la-callout">${esc(e.prompt)}</p>${e.artefact ? `<figure class="la-fig">${e.artefact.html}<figcaption>${esc(e.artefact.caption)}</figcaption></figure>` : ''}`)}
  ${sec('instructions', 'Instructions', ol(e.instructions.map(esc), 'la-ol'))}
  ${sec('deliverables', 'Expected deliverables', ulText(e.deliverables))}
  ${sec('checklist', 'Completion checklist', Checklist(`ex:${e.slug}`, e.checklist, 'Completion checklist'))}
  ${sec('criteria', 'Evaluation criteria', ulText(e.criteria, 'la-criteria'))}
  ${sec('help', 'Hints and an illustrative solution', `<details class="la-disc"><summary>Show hints</summary>${ulText(e.hints)}</details>
    <details class="la-disc"><summary>Show one possible solution</summary><p class="la-note">This is one reasonable answer, not the only one. Compare reasoning, not pixels.</p><div class="la-prose">${e.solution}</div></details>`)}
  ${related.length ? sec('related', 'Related lessons', ul(related.map((r) => r.lesson.status === 'published'
    ? `<a href="${lessonUrl(r.lesson.slug)}">${esc(r.lesson.title)}</a>`
    : `<a href="${courseUrl(r.course.slug)}#lesson-${r.lesson.slug}">${esc(r.lesson.title)}</a> <span class="la-status la-status--planned">In writing</span>`))) : ''}
  <p class="la-pn__back"><a href="/learn/practice/">Back to the practice library</a></p>
</div>`;
  return { path: `/learn/practice/${e.slug}/`, active: 'practice', title: e.title, description: `${e.summary} A ${fmtMin(e.minutes)} UI/UX design exercise with a checklist, criteria and hints.`, body };
}

/* =============================================================== PROJECTS */

/** @param {{ projects: import('./types').Project[] }} d */
export function projectsPage(d) {
  const body = `
${hero('Portfolio projects', 'Guided projects for your <em>portfolio.</em>', 'Four complete briefs with fictional business context, milestones, worksheets, testing plans and rubrics. You do the research yourself; nothing here pretends to be real evidence.')}
<div class="la-wrap la-page">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Projects' }])}
  <div class="la-grid la-grid--2">${d.projects.map(projectCard).join('')}</div>
  <p class="la-note la-mt">Each project brief separates your independent task from the hints and worked example, which are hidden until you choose to open them. Try the task first.</p>
</div>`;
  return { path: '/learn/projects/', active: 'projects', title: 'Portfolio projects', description: 'Four guided UI/UX portfolio projects: a local service website, a mobile wellness app, a responsive e-commerce experience and a SaaS dashboard, each with milestones and a rubric.', body };
}

/** @param {import('./types').Project} p @param {Course[]} courses */
export function projectPage(p, courses) {
  const bySlug = Object.fromEntries(courses.map((c) => [c.slug, c]));
  const toc = [
    ['brief', 'The brief'], ['users', 'Users and assumptions'], ['goals', 'Goals and needs'], ['scope', 'Scope and constraints'],
    ['research', 'Research'], ['define', 'Problem and metrics'], ['ia', 'IA and flows'], ['wireframes', 'Sketching and wireframes'],
    ['ui', 'UI and prototype'], ['testing', 'Testing and iteration'], ['a11y', 'Accessibility'], ['deliverables', 'Deliverables'],
    ['case-study', 'Case study outline'], ['rubric', 'Rubric'], ['milestones', 'Milestones'], ['extensions', 'Extensions'], ['worked', 'Hints and worked example'],
  ];
  const ws = p.competitorWorksheet;
  const body = `
<header class="la-hero"><div class="la-wrap">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Projects', href: '/learn/projects/' }, { label: `Project ${p.number}` }])}
  <p class="la-eyebrow">Project ${p.number} · ${p.level} · ${esc(p.weeks)}</p>
  <h1 class="la-h1">${esc(p.title)}</h1>
  <p class="la-lead">${esc(p.short)}</p>
  <p class="la-pre"><span>Do this after</span> ${p.prerequisites.map((s) => `<a href="${courseUrl(s)}">Stage ${bySlug[s].stage}: ${esc(bySlug[s].title)}</a>`).join(', ')}</p>
  <div class="la-actions la-no-print">${BookmarkControl('project', p.slug, p.title, `/learn/projects/${p.slug}/`)}<button type="button" class="la-btn la-btn--ghost" data-print>Print brief</button></div>
</div></header>
<div class="la-wrap la-lesson">
  <aside class="la-lesson__side la-no-print">
    <details class="la-toc-wrap" open data-toc-details><summary>Contents</summary>${LessonTableOfContents(toc.map(([id, label]) => ({ id, label })))}</details>
    <div class="la-side-card"><p class="la-side-card__h">Milestones</p>${ProgressIndicator(`project:${p.slug}`, `${p.title} milestones`, 'sm')}</div>
  </aside>
  <article class="la-lesson__main">
    <p class="la-note">This brief is fictional. The business, people and numbers are invented for practice. Do your own research with real people where the brief asks for it, and never present invented findings as real in your portfolio.</p>
    ${sec('brief', 'The brief', `<div class="la-prose">${p.background}</div><h3 class="la-h4">The problem to solve</h3><div class="la-prose">${p.problem}</div>`)}
    ${sec('users', 'Target users and assumptions', `<h3 class="la-h4">Users</h3>${ulText(p.users)}<h3 class="la-h4">Assumptions to test</h3>${ulText(p.assumptions)}`)}
    ${sec('goals', 'Business goals and user needs', `<div class="la-two"><div><h3 class="la-h4">Business goals</h3>${ulText(p.businessGoals)}</div><div><h3 class="la-h4">User needs</h3>${ulText(p.userNeeds)}</div></div>`)}
    ${sec('scope', 'Scope and constraints', `<h3 class="la-h4">In scope</h3>${ulText(p.scope)}<h3 class="la-h4">Constraints</h3>${ulText(p.constraints)}`)}
    ${sec('research', 'Research plan', `${ol(p.researchPlan.map(esc), 'la-ol')}
      <h3 class="la-h4">Competitor analysis worksheet</h3><p class="la-muted">Copy this grid into a spreadsheet or your design file. Fill one row per competitor you choose.</p>
      <div class="la-rubric-wrap"><table class="la-ws"><caption>Competitor analysis</caption><thead><tr><th scope="col">Competitor</th>${ws.columns.map((col) => `<th scope="col">${esc(col)}</th>`).join('')}</tr></thead><tbody>${ws.competitors.map((comp) => `<tr><th scope="row">${esc(comp)}</th>${ws.columns.map(() => '<td></td>').join('')}</tr>`).join('')}</tbody></table></div>
      ${p.interviewQuestions ? `<h3 class="la-h4">Interview questions</h3>${ol(p.interviewQuestions.map(esc), 'la-ol')}` : ''}
      <h3 class="la-h4">Synthesis</h3>${ol(p.synthesis.map(esc), 'la-ol')}`)}
    ${sec('define', 'Problem statement and success metrics', `<p class="la-callout">${esc(p.problemStatement)}</p><p class="la-muted">A starting draft. Rewrite it from your own research.</p><h3 class="la-h4">Success metrics</h3>${ulText(p.metrics)}`)}
    ${sec('ia', 'Information architecture and user flow', ol(p.iaAndFlow.map(esc), 'la-ol'))}
    ${sec('wireframes', 'Sketching and wireframing', ol(p.wireframing.map(esc), 'la-ol'))}
    ${sec('ui', 'UI, components and prototype', `<h3 class="la-h4">UI and component requirements</h3>${ulText(p.uiRequirements)}<h3 class="la-h4">Prototype requirements</h3>${ulText(p.prototype)}`)}
    ${sec('testing', 'Usability testing and iteration', `<h3 class="la-h4">Testing plan</h3>${ol(p.testingPlan.map(esc), 'la-ol')}<h3 class="la-h4">Iteration</h3>${ulText(p.iteration)}`)}
    ${sec('a11y', 'Accessibility checklist', Checklist(`proj-a11y:${p.slug}`, p.accessibility, 'Accessibility checklist'))}
    ${sec('deliverables', 'Final deliverables', Checklist(`proj-del:${p.slug}`, p.deliverables, 'Final deliverables'))}
    ${sec('case-study', 'Portfolio case study outline', ol(p.caseStudyOutline.map(esc), 'la-ol'))}
    ${sec('rubric', 'Assessment rubric', `<p class="la-muted">Score yourself honestly, then ask a peer or mentor to score you. Aim for Competent on every row before calling the project finished.</p>${AssessmentRubric(p.rubric, `${p.title}: assessment rubric`)}`)}
    ${sec('milestones', 'Milestones', `<p class="la-muted">Tick tasks as you finish them. Progress is saved in this browser.</p>${ProjectMilestoneList(p)}`)}
    ${sec('extensions', 'Optional extension challenges', ulText(p.extensions))}
    ${sec('worked', 'Hints and worked example', `<p class="la-note">Try the project yourself first. The worked example shows one way through, with illustrative content that is not real research.</p><details class="la-disc"><summary>Show hints and the worked example</summary><div class="la-prose">${p.workedExample}</div></details>`)}
  </article>
</div>`;
  return { path: `/learn/projects/${p.slug}/`, active: 'projects', title: p.title, description: `${p.short} A complete UI/UX portfolio project brief with research plan, milestones, testing plan and rubric.`, body };
}

/* ============================================================== RESOURCES */

/** @param {{ resources: import('./types').Resource[], templates: import('./types').Template[] }} d */
export function resourcesPage(d) {
  const cats = [...new Set(d.resources.map((r) => r.category))];
  const body = `
${hero('Resources', 'Templates, references and <em>tools.</em>', 'Copyable templates for every stage of a project, plus a curated list of trustworthy external sources. External links are third-party content; costs are shown only where they were checked.')}
<div class="la-wrap la-page">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Resources' }])}
  ${sec('templates', 'Templates', `<p class="la-muted la-maxw">Each template opens as a print-friendly page. Copy it as Markdown, download a .md file, or print it.</p>
    <div class="la-grid la-grid--3">${d.templates.map((t) => `<article class="la-card"><div class="la-course__top"><span class="la-stage">Template</span></div><h3 class="la-card__title"><a class="la-stretch" href="/learn/resources/templates/${t.slug}/">${esc(t.title)}</a></h3><p class="la-card__text">${esc(t.summary)}</p><ul class="la-meta"><li>Used in: ${esc(t.usedIn.join(', '))}</li></ul></article>`).join('')}</div>`)}
  ${sec('library', 'External resources', `${SearchAndFilters('resources', [{ key: 'category', label: 'Category', options: cats.map((c) => [c, c]) }], 'Search resources')}
    <div class="la-grid la-grid--3" data-filterable="resources">${d.resources.map(ResourceCard).join('')}</div>
    ${EmptyState('No resources match', 'Try a different word or set Category back to All.', '', ' data-filter-empty hidden')}`)}
  <p class="la-muted">Looking for a definition? Try the <a href="/learn/glossary/">glossary</a>.</p>
</div>`;
  return { path: '/learn/resources/', active: 'resources', title: 'Resources and templates', description: 'Free UX templates (research plan, interview guide, personas, journey maps, usability test plan, accessibility audit, case study outline) and a curated library of trusted design resources.', body };
}

/** @param {import('./types').Template} t @param {(md: string) => string} renderMd */
export function templatePage(t, renderMd) {
  const body = `
<header class="la-hero"><div class="la-wrap">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Resources', href: '/learn/resources/' }, { label: t.title }])}
  <p class="la-eyebrow">Template</p>
  <h1 class="la-h1">${esc(t.title)}</h1>
  <p class="la-lead">${esc(t.summary)}</p>
  <div class="la-actions la-no-print">
    <button type="button" class="la-btn" data-copy-template="tpl-src"><span data-copy-label>Copy as Markdown</span></button>
    <button type="button" class="la-btn la-btn--ghost" data-download-template="tpl-src" data-filename="${t.slug}.md">Download .md</button>
    <button type="button" class="la-btn la-btn--ghost" data-print>Print</button>
  </div>
  <p class="la-status-msg" data-template-status aria-live="polite"></p>
</div></header>
<div class="la-wrap la-page la-narrow">
  <div class="la-template la-prose">${renderMd(t.markdown)}</div>
  <details class="la-disc la-no-print"><summary>View the Markdown source</summary><pre class="la-pre la-pre--src" id="tpl-src">${esc(t.markdown)}</pre></details>
  <p class="la-pn__back"><a href="/learn/resources/#templates">All templates</a></p>
</div>`;
  return { path: `/learn/resources/templates/${t.slug}/`, active: 'resources', title: `${t.title} template`, description: `${t.summary} Free, copyable and print-friendly.`, body };
}

/* =============================================================== GLOSSARY */

/** @param {{ glossary: import('./types').GlossaryTerm[] }} d */
export function glossaryPage(d) {
  const groups = ['Research', 'Interaction', 'Visual design', 'Prototyping', 'Accessibility', 'Product thinking', 'Design systems'];
  const body = `
${hero('Glossary', 'Design words, <em>explained.</em>', `${d.glossary.length} terms used in UI, UX and product design, each with a plain definition, a practical example and related terms.`)}
<div class="la-wrap la-page la-narrow">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Glossary' }])}
  ${GlossarySearch(d.glossary, groups)}
</div>`;
  return { path: '/learn/glossary/', active: 'glossary', title: 'UI/UX design glossary', description: `A searchable glossary of ${d.glossary.length} UI/UX and product design terms with definitions, examples and related terms.`, body };
}

/* ================================================================= CAREER */

/** @param {{ career: { intro: string, sections: { id: string, title: string, html: string }[] } }} d */
export function careerPage(d) {
  const body = `
${hero('Career', 'Portfolio, interviews and <em>first jobs.</em>', d.career.intro)}
<div class="la-wrap la-lesson">
  <aside class="la-lesson__side la-no-print"><details class="la-toc-wrap" open data-toc-details><summary>Contents</summary>${LessonTableOfContents(d.career.sections.map((s) => ({ id: s.id, label: s.title })))}</details></aside>
  <article class="la-lesson__main">
    ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Career' }])}
    ${d.career.sections.map((s) => sec(s.id, esc(s.title), `<div class="la-prose">${s.html}</div>`)).join('')}
    <p class="la-pn__back"><a href="${courseUrl('portfolio-career')}">Stage 11: Portfolio and career readiness</a> · <a href="/learn/resources/templates/case-study-outline/">Case study template</a></p>
  </article>
</div>`;
  return { path: '/learn/career/', active: 'career', title: 'UX career guide', description: 'Practical guidance for junior UI/UX designers: choosing portfolio projects, writing case studies, portfolio sites, resumes, interviews, design challenges and freelancing.', body };
}

/* ================================================================= SEARCH */

export function searchPage() {
  const body = `
${hero('Search', 'Search the <em>academy.</em>', 'Lessons, courses, exercises, projects, glossary terms, templates and resources.')}
<div class="la-wrap la-page la-narrow">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'Search' }])}
  <form class="la-searchbox la-searchbox--page" role="search" action="/learn/search/" method="get">
    <label for="la-search-q" class="la-h3">What are you looking for?</label>
    <div class="la-searchbox__row"><input id="la-search-q" name="q" type="search" data-live-search="la-search-results" data-sync-url autocomplete="off" placeholder="Search"><button class="la-btn" type="submit">Search</button></div>
    <fieldset class="la-chips" data-search-types><legend class="la-sr">Filter by type</legend>
      ${[['', 'Everything'], ['lesson', 'Lessons'], ['course', 'Courses'], ['exercise', 'Exercises'], ['project', 'Projects'], ['term', 'Glossary'], ['template', 'Templates'], ['resource', 'Resources']].map(([v, l], i) => `<label class="la-chip"><input type="radio" name="type" value="${v}"${i === 0 ? ' checked' : ''}><span>${l}</span></label>`).join('')}
    </fieldset>
  </form>
  <div id="la-search-results" class="la-live la-live--page" aria-live="polite">
    <noscript><p class="la-note">Search needs JavaScript. You can browse the <a href="/learn/courses/">courses</a>, <a href="/learn/glossary/">glossary</a> and <a href="/learn/resources/">resources</a> directly.</p></noscript>
  </div>
</div>`;
  return { path: '/learn/search/', active: '', title: 'Search', description: 'Search lessons, courses, exercises, projects, glossary terms, templates and resources in the UI/UX Design Academy.', body, noindex: true };
}

/* ================================================================== SAVED */

export function savedPage() {
  const body = `
${hero('My learning', 'Saved items and <em>notes.</em>', 'Everything here is stored in this browser on this device. Nothing is sent to a server.')}
<div class="la-wrap la-page la-narrow">
  ${Breadcrumbs([{ label: 'Learn', href: '/learn/' }, { label: 'My learning' }])}
  ${sec('progress', 'Progress', `${ProgressIndicator('core', 'Core curriculum progress', 'lg')}${ProgressIndicator('all', 'All written lessons')}<div data-completed-slot></div>`)}
  ${sec('bookmarks', 'Saved lessons and pages', `<div data-bookmarks-slot>${EmptyState('Nothing saved yet', 'Use the Save button on any lesson, course, exercise or project to keep it here.', '<a class="la-btn la-btn--ghost" href="/learn/courses/">Browse courses</a>')}</div>`)}
  ${sec('notes-list', 'Your notes', `<div data-notes-slot>${EmptyState('No notes yet', 'Each lesson has a notes box at the end. Anything you write there appears here.')}</div>`)}
  ${sec('backup', 'Back up or move your progress', `<p>Browser storage does not sync between devices and can be cleared by the browser. Download a backup file to keep your progress safe or move it to another browser.</p>
    <div class="la-actions"><button type="button" class="la-btn" data-export>Download backup (.json)</button>
    <label class="la-btn la-btn--ghost la-file"><input type="file" accept="application/json,.json" data-import><span>Restore from backup</span></label>
    <button type="button" class="la-btn la-btn--danger" data-reset>Reset all progress</button></div>
    <p class="la-status-msg" data-backup-status aria-live="polite"></p>
    <p class="la-note" data-storage-note>Restoring a backup replaces the progress currently in this browser.</p>`)}
</div>`;
  return { path: '/learn/saved/', active: 'saved', title: 'My learning', description: 'Your saved lessons, notes and progress in the UI/UX Design Academy, stored in this browser.', body, noindex: true };
}
