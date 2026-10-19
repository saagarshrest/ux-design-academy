// @ts-check
/* =====================================================================
   UI/UX Design Academy: learning state and pure learning logic.
   Shared by the browser (js/learn/app.js) and the tests
   (learn-src/test/store.test.mjs). No DOM access in this file.

   Storage: one versioned JSON document in localStorage. If storage is
   unavailable (private mode, blocked site data, quota), the store keeps
   working in memory and reports persistent === false so the UI can say so.
   Accounts or cloud sync can later replace the backend without touching
   the rest of the code: createStore() only needs getItem/setItem.
   ===================================================================== */

export const STORAGE_KEY = 'uxacademy';
export const SCHEMA_VERSION = 1;
const NOTE_MAX = 20000;

/**
 * @typedef {{ v: number, done: Record<string, string>, bookmarks: Record<string, { title: string, href: string, at: string }>,
 *   notes: Record<string, { text: string, at: string }>, quiz: Record<string, Record<string, number>>,
 *   checks: Record<string, number[]>, last: { slug: string, at: string } | null, updatedAt: string | null }} LearnState
 * @typedef {{ getItem(k: string): string | null, setItem(k: string, v: string): void, removeItem(k: string): void }} Backend
 * @typedef {{ slug: string, title: string, minutes?: number, published: boolean, url: string }} CatLesson
 * @typedef {{ slug: string, stage: number, title: string, optional: boolean, url: string, lessons: CatLesson[] }} CatCourse
 * @typedef {{ slug: string, title: string, url: string, milestones: { id: string, title: string, tasks: number }[] }} CatProject
 * @typedef {{ version: number, first: string, courses: CatCourse[], projects: CatProject[] }} Catalog
 */

/** @returns {LearnState} */
export function emptyState() {
  return { v: SCHEMA_VERSION, done: {}, bookmarks: {}, notes: {}, quiz: {}, checks: {}, last: null, updatedAt: null };
}

const isObj = (/** @type {unknown} */ x) => !!x && typeof x === 'object' && !Array.isArray(x);
const isStr = (/** @type {unknown} */ x) => typeof x === 'string';

/**
 * Turn anything (old versions, hand-edited backups, corrupted JSON) into a valid state.
 * Unknown fields are dropped; invalid entries are skipped rather than failing the whole load.
 * @param {unknown} raw @returns {LearnState}
 */
export function migrate(raw) {
  const s = emptyState();
  if (!isObj(raw)) return s;
  const r = /** @type {Record<string, any>} */ (raw);
  // Version 0 (unversioned drafts) stored completed lessons as an array of slugs.
  if (Array.isArray(r.completed)) for (const slug of r.completed) if (isStr(slug)) s.done[slug] = new Date(0).toISOString();
  if (isObj(r.done)) for (const [k, v] of Object.entries(r.done)) if (isStr(v) || v === true) s.done[k] = v === true ? new Date(0).toISOString() : v;
  if (isObj(r.bookmarks)) for (const [k, v] of Object.entries(r.bookmarks)) if (isObj(v) && isStr(v.title) && isStr(v.href) && v.href.startsWith('/')) s.bookmarks[k] = { title: v.title, href: v.href, at: isStr(v.at) ? v.at : '' };
  if (isObj(r.notes)) for (const [k, v] of Object.entries(r.notes)) if (isObj(v) && isStr(v.text) && v.text.trim()) s.notes[k] = { text: v.text.slice(0, NOTE_MAX), at: isStr(v.at) ? v.at : '' };
  if (isObj(r.quiz)) for (const [k, v] of Object.entries(r.quiz)) if (isObj(v)) {
    const q = /** @type {Record<string, number>} */ ({});
    for (const [qi, a] of Object.entries(v)) if (Number.isInteger(a) && a >= 0) q[qi] = a;
    s.quiz[k] = q;
  }
  if (isObj(r.checks)) for (const [k, v] of Object.entries(r.checks)) if (Array.isArray(v)) s.checks[k] = [...new Set(v.filter((n) => Number.isInteger(n) && n >= 0))].sort((a, b) => a - b);
  if (isObj(r.last) && isStr(r.last.slug)) s.last = { slug: r.last.slug, at: isStr(r.last.at) ? r.last.at : '' };
  if (isStr(r.updatedAt)) s.updatedAt = r.updatedAt;
  return s;
}

/** Probe a backend; returns it if reads and writes work, otherwise null. @param {() => Backend | null | undefined} get */
export function probeBackend(get) {
  try {
    const b = get();
    if (!b) return null;
    const k = `${STORAGE_KEY}:probe`;
    b.setItem(k, '1');
    const ok = b.getItem(k) === '1';
    b.removeItem(k);
    return ok ? b : null;
  } catch {
    return null;
  }
}

/** @param {Backend | null} backend @param {() => string} [now] */
export function createStore(backend, now = () => new Date().toISOString()) {
  /** @type {Set<(s: LearnState) => void>} */
  const listeners = new Set();
  let lastError = /** @type {string | null} */ (null);

  const read = () => {
    if (!backend) return emptyState();
    try {
      const txt = backend.getItem(STORAGE_KEY);
      return txt ? migrate(JSON.parse(txt)) : emptyState();
    } catch {
      lastError = 'Saved progress could not be read, so a fresh start was used.';
      return emptyState();
    }
  };
  let state = read();

  const commit = () => {
    state.updatedAt = now();
    if (backend) {
      try { backend.setItem(STORAGE_KEY, JSON.stringify(state)); lastError = null; }
      catch { lastError = 'Your browser refused to save. Changes will be lost when you leave this page.'; }
    }
    listeners.forEach((fn) => fn(state));
  };

  return {
    get state() { return state; },
    get persistent() { return !!backend; },
    get error() { return lastError; },
    /** Re-read storage (another tab changed it). */
    reload() { state = read(); listeners.forEach((fn) => fn(state)); },
    /** @param {(s: LearnState) => void} fn */
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

    isDone: (/** @type {string} */ slug) => !!state.done[slug],
    /** @param {string} slug @param {boolean} done */
    setDone(slug, done) { if (done) state.done[slug] = now(); else delete state.done[slug]; commit(); },

    isBookmarked: (/** @type {string} */ key) => !!state.bookmarks[key],
    /** @param {string} key @param {{ title: string, href: string }} meta @returns {boolean} the new saved state */
    toggleBookmark(key, meta) {
      if (state.bookmarks[key]) delete state.bookmarks[key];
      else state.bookmarks[key] = { title: meta.title, href: meta.href, at: now() };
      commit();
      return !!state.bookmarks[key];
    },

    getNote: (/** @type {string} */ slug) => state.notes[slug]?.text || '',
    /** @param {string} slug @param {string} text */
    setNote(slug, text) {
      const t = String(text).slice(0, NOTE_MAX);
      if (t.trim()) state.notes[slug] = { text: t, at: now() }; else delete state.notes[slug];
      commit();
    },

    getQuiz: (/** @type {string} */ id) => state.quiz[id] || {},
    /** @param {string} id @param {number} q @param {number | null} choice */
    setQuizAnswer(id, q, choice) {
      const cur = { ...(state.quiz[id] || {}) };
      if (choice === null) delete cur[q]; else cur[q] = choice;
      state.quiz[id] = cur;
      commit();
    },

    getChecks: (/** @type {string} */ id) => state.checks[id] || [],
    /** @param {string} id @param {number} idx @param {boolean} on */
    setCheck(id, idx, on) {
      const set = new Set(state.checks[id] || []);
      if (on) set.add(idx); else set.delete(idx);
      if (set.size) state.checks[id] = [...set].sort((a, b) => a - b); else delete state.checks[id];
      commit();
    },

    /** @param {string} slug */
    setLast(slug) { state.last = { slug, at: now() }; commit(); },

    exportJSON() { return JSON.stringify({ app: 'uxacademy', exportedAt: now(), ...state }, null, 2); },
    /** @param {string} text @returns {{ ok: true } | { ok: false, error: string }} */
    importJSON(text) {
      let raw;
      try { raw = JSON.parse(text); } catch { return { ok: false, error: 'That file is not valid JSON.' }; }
      if (!isObj(raw) || (raw.app !== 'uxacademy' && !('done' in raw))) return { ok: false, error: 'That file does not look like an academy backup.' };
      state = migrate(raw);
      commit();
      return { ok: true };
    },
    reset() { state = emptyState(); commit(); },
  };
}

/* ------------------------------------------------------------- progress */

/** @param {CatCourse} course @param {LearnState} state */
export function courseProgress(course, state) {
  const pub = course.lessons.filter((l) => l.published);
  const done = pub.filter((l) => state.done[l.slug]).length;
  return { done, available: pub.length, total: course.lessons.length, planned: course.lessons.length - pub.length, pct: pub.length ? Math.round((done / pub.length) * 100) : 0 };
}

/** @param {CatProject} project @param {LearnState} state */
export function projectProgress(project, state) {
  let done = 0, total = 0;
  for (const m of project.milestones) {
    total += m.tasks;
    done += (state.checks[`ms:${project.slug}:${m.id}`] || []).filter((i) => i < m.tasks).length;
  }
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

/**
 * Progress for a scope: "all", "core", "course:<slug>" or "project:<slug>".
 * @param {Catalog} catalog @param {LearnState} state @param {string} scope
 * @returns {{ done: number, available: number, total: number, pct: number, unit: string } | null}
 */
export function scopeProgress(catalog, state, scope) {
  if (scope.startsWith('project:')) {
    const p = catalog.projects.find((x) => x.slug === scope.slice(8));
    if (!p) return null;
    const r = projectProgress(p, state);
    return { done: r.done, available: r.total, total: r.total, pct: r.pct, unit: 'tasks' };
  }
  const courses = scope === 'all' ? catalog.courses
    : scope === 'core' ? catalog.courses.filter((c) => !c.optional)
    : catalog.courses.filter((c) => `course:${c.slug}` === scope);
  if (!courses.length) return null;
  let done = 0, available = 0, total = 0;
  for (const c of courses) { const p = courseProgress(c, state); done += p.done; available += p.available; total += p.total; }
  return { done, available, total, pct: available ? Math.round((done / available) * 100) : 0, unit: 'lessons' };
}

/** @param {CatCourse} course @param {LearnState} state @returns {'in-writing' | 'not-started' | 'in-progress' | 'complete'} */
export function stageStatus(course, state) {
  const p = courseProgress(course, state);
  if (!p.available) return 'in-writing';
  if (!p.done) return 'not-started';
  // A stage is only complete when every lesson exists and is done.
  return p.done === p.available && !p.planned ? 'complete' : 'in-progress';
}

/** Ordered list of published lessons, core stages first. @param {Catalog} catalog */
export function lessonSequence(catalog) {
  const ordered = [...catalog.courses.filter((c) => !c.optional), ...catalog.courses.filter((c) => c.optional)];
  return ordered.flatMap((c) => c.lessons.filter((l) => l.published).map((l) => ({ lesson: l, course: c })));
}

/** First published lesson not yet done, in curriculum order. @param {Catalog} catalog @param {LearnState} state */
export function nextLesson(catalog, state) {
  return lessonSequence(catalog).find((x) => !state.done[x.lesson.slug]) || null;
}

/** @param {Catalog} catalog @param {string} slug */
export function findLesson(catalog, slug) {
  for (const c of catalog.courses) { const l = c.lessons.find((x) => x.slug === slug); if (l) return { lesson: l, course: c }; }
  return null;
}

/** Whether there is anything to "continue". @param {LearnState} state */
export function hasActivity(state) {
  return !!state.last || Object.keys(state.done).length > 0;
}

/* --------------------------------------------------------------- search */

/**
 * @typedef {{ type: string, title: string, url: string, text: string, meta: string }} IndexEntry
 * @param {IndexEntry[]} index @param {string} query @param {string} [type] @param {number} [limit]
 */
export function search(index, query, type = '', limit = 50) {
  const q = query.toLowerCase().trim().replace(/\s+/g, ' ');
  if (!q) return [];
  const tokens = q.split(' ').filter((t) => t.length > 1 || q.length === 1);
  const typeRank = /** @type {Record<string, number>} */ ({ lesson: 0, course: 1, term: 2, exercise: 3, project: 4, template: 5, page: 6, resource: 7 });
  const scored = [];
  for (const e of index) {
    if (type && e.type !== type) continue;
    const title = e.title.toLowerCase(), text = e.text.toLowerCase();
    let score = 0, all = true;
    for (const t of tokens) {
      const inTitle = title.includes(t), inText = text.includes(t);
      if (!inTitle && !inText) { all = false; break; }
      score += inTitle ? 4 : 1;
    }
    if (!all) continue;
    if (title === q) score += 20;
    else if (title.startsWith(q)) score += 10;
    else if (title.includes(q)) score += 6;
    if (e.meta.includes('In writing')) score -= 2;
    scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score || (typeRank[a.e.type] ?? 9) - (typeRank[b.e.type] ?? 9) || a.e.title.localeCompare(b.e.title));
  return scored.slice(0, limit).map((x) => x.e);
}

/* -------------------------------------------------------------- filters */

/**
 * Generic list filter used by courses, practice, resources and glossary.
 * @param {{ search: string, filters: Record<string, string> }[]} items each item's lowercase search text and filter values
 * @param {string} query @param {Record<string, string>} active
 * @returns {boolean[]} visibility per item
 */
export function filterItems(items, query, active) {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return items.map((it) => tokens.every((t) => it.search.includes(t)) && Object.entries(active).every(([k, v]) => !v || it.filters[k] === v));
}
