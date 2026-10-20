// Tests for the academy's learning logic. Run: node --test learn-src/test/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  STORAGE_KEY, SCHEMA_VERSION, emptyState, migrate, createStore, probeBackend, courseProgress, projectProgress, scopeProgress,
  stageStatus, nextLesson, findLesson, search, filterItems, hasActivity,
} from '../../js/learn/store.mjs';

/** In-memory Storage double. */
function memory(initial = {}) {
  const m = new Map(Object.entries(initial));
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), dump: () => Object.fromEntries(m) };
}
const fixedNow = () => '2026-10-20T10:00:00.000Z';

const catalog = {
  version: 1, first: '/learn/lessons/a/',
  courses: [
    { slug: 'c0', stage: 0, title: 'Zero', optional: false, url: '/c0/', lessons: [
      { slug: 'a', title: 'A', published: true, url: '/a/' }, { slug: 'b', title: 'B', published: true, url: '/b/' } ] },
    { slug: 'c1', stage: 1, title: 'One', optional: false, url: '/c1/', lessons: [
      { slug: 'c', title: 'C', published: true, url: '/c/' }, { slug: 'd', title: 'D', published: false, url: '/c1/#d' } ] },
    { slug: 'c2', stage: 2, title: 'Two', optional: false, url: '/c2/', lessons: [{ slug: 'e', title: 'E', published: false, url: '/c2/#e' }] },
    { slug: 'adv', stage: 12, title: 'Advanced', optional: true, url: '/adv/', lessons: [{ slug: 'x', title: 'X', published: true, url: '/x/' }] },
  ],
  projects: [{ slug: 'p', title: 'P', url: '/p/', milestones: [{ id: 'm1', title: 'M1', tasks: 3 }, { id: 'm2', title: 'M2', tasks: 1 }] }],
};

test('migrate turns garbage into a valid empty state', () => {
  for (const raw of [null, 42, 'x', [], { done: 'nope', notes: 5 }]) assert.deepEqual(migrate(raw), emptyState());
});

test('migrate keeps valid entries and drops invalid ones', () => {
  const s = migrate({
    v: 1, done: { a: '2026-01-01', b: true, c: 7 },
    bookmarks: { 'lesson:a': { title: 'A', href: '/learn/lessons/a/' }, bad: { title: 'X', href: 'javascript:alert(1)' } },
    notes: { a: { text: 'hello' }, b: { text: '   ' } },
    quiz: { a: { 0: 1, 1: -1, 2: 'x' } },
    checks: { l: [2, 2, 0, -1, 'x'] },
    videos: { a: '2026-02-02', b: 7 },
    last: { slug: 'a' }, extra: 'ignored',
  });
  assert.deepEqual(Object.keys(s.done).sort(), ['a', 'b']);
  assert.deepEqual(Object.keys(s.bookmarks), ['lesson:a'], 'non-relative hrefs are rejected');
  assert.deepEqual(Object.keys(s.notes), ['a'], 'blank notes are dropped');
  assert.deepEqual(s.quiz.a, { 0: 1 });
  assert.deepEqual(s.checks.l, [0, 2]);
  assert.deepEqual(Object.keys(s.videos), ['a'], 'only string timestamps are kept');
  assert.equal(s.last.slug, 'a');
  assert.equal('extra' in s, false);
});

test('migrate upgrades the unversioned "completed" array', () => {
  const s = migrate({ completed: ['a', 'b', 3] });
  assert.deepEqual(Object.keys(s.done).sort(), ['a', 'b']);
});

test('store persists to the backend under a versioned key', () => {
  const b = memory();
  const store = createStore(b, fixedNow);
  store.setDone('a', true);
  const saved = JSON.parse(b.dump()[STORAGE_KEY]);
  assert.equal(saved.v, SCHEMA_VERSION);
  assert.equal(saved.done.a, fixedNow());
  const again = createStore(b, fixedNow);
  assert.equal(again.isDone('a'), true, 'a new store reads previous progress');
  again.setDone('a', false);
  assert.equal(createStore(b).isDone('a'), false);
});

test('store survives corrupt JSON and reports an error', () => {
  const store = createStore(memory({ [STORAGE_KEY]: '{not json' }));
  assert.deepEqual(store.state.done, {});
  assert.match(String(store.error), /could not be read/);
});

test('store works in memory when storage is unavailable', () => {
  const store = createStore(null);
  assert.equal(store.persistent, false);
  store.setDone('a', true);
  assert.equal(store.isDone('a'), true);
});

test('store reports when the backend refuses to save', () => {
  const b = memory();
  b.setItem = () => { throw new Error('QuotaExceeded'); };
  const store = createStore(b);
  store.setDone('a', true);
  assert.equal(store.isDone('a'), true, 'state is still updated in memory');
  assert.match(String(store.error), /refused to save/);
});

test('probeBackend returns null when access throws', () => {
  assert.equal(probeBackend(() => { throw new Error('SecurityError'); }), null);
  assert.equal(probeBackend(() => null), null);
  assert.ok(probeBackend(() => memory()));
});

test('bookmarks, notes, quiz answers and checklists round-trip', () => {
  const store = createStore(memory(), fixedNow);
  assert.equal(store.toggleBookmark('lesson:a', { title: 'A', href: '/a/' }), true);
  assert.equal(store.isBookmarked('lesson:a'), true);
  assert.equal(store.toggleBookmark('lesson:a', { title: 'A', href: '/a/' }), false);
  store.setNote('a', 'remember hierarchy');
  assert.equal(store.getNote('a'), 'remember hierarchy');
  store.setNote('a', '  ');
  assert.equal(store.getNote('a'), '', 'blank notes are removed');
  store.setQuizAnswer('a', 0, 2);
  store.setQuizAnswer('a', 1, 0);
  store.setQuizAnswer('a', 0, null);
  assert.deepEqual(store.getQuiz('a'), { 1: 0 });
  store.setCheck('list', 2, true); store.setCheck('list', 0, true); store.setCheck('list', 2, false);
  assert.deepEqual(store.getChecks('list'), [0]);
  store.setCheck('list', 0, false);
  assert.equal('list' in store.state.checks, false);
});

test('watched videos are recorded once and survive a reload', () => {
  const b = memory();
  const store = createStore(b, fixedNow);
  assert.equal(store.isVideoWatched('a'), false);
  store.setVideoWatched('a');
  assert.equal(store.isVideoWatched('a'), true);
  assert.equal(store.state.videos.a, '2026-10-20T10:00:00.000Z');
  const reloaded = createStore(b, fixedNow);
  assert.equal(reloaded.isVideoWatched('a'), true, 'the watched video is still known after a reload');
});

test('marking a video watched again does not change the timestamp', () => {
  let now = '2026-10-20T10:00:00.000Z';
  const store = createStore(memory(), () => now);
  store.setVideoWatched('a');
  now = '2026-10-21T10:00:00.000Z';
  store.setVideoWatched('a');
  assert.equal(store.state.videos.a, '2026-10-20T10:00:00.000Z');
});

test('subscribers are notified on every change', () => {
  const store = createStore(memory());
  let calls = 0;
  const off = store.subscribe(() => calls++);
  store.setDone('a', true); store.setNote('a', 'x');
  off();
  store.setDone('b', true);
  assert.equal(calls, 2);
});

test('export and import round-trip, and import rejects foreign files', () => {
  const a = createStore(memory(), fixedNow);
  a.setDone('a', true); a.setNote('b', 'note');
  const json = a.exportJSON();
  const b = createStore(memory());
  assert.deepEqual(b.importJSON(json), { ok: true });
  assert.equal(b.isDone('a'), true);
  assert.equal(b.getNote('b'), 'note');
  assert.equal(b.importJSON('nope').ok, false);
  assert.equal(b.importJSON('{"hello":"world"}').ok, false);
  assert.equal(b.isDone('a'), true, 'a failed import leaves progress untouched');
});

test('course progress counts only published lessons', () => {
  const state = { ...emptyState(), done: { c: 'x', d: 'x' } };
  const p = courseProgress(catalog.courses[1], state);
  assert.deepEqual(p, { done: 1, available: 1, total: 2, planned: 1, pct: 100 });
});

test('scope progress for core, all, course and project', () => {
  const state = { ...emptyState(), done: { a: 'x', x: 'x' }, checks: { 'ms:p:m1': [0, 1, 5], 'ms:p:m2': [0] } };
  assert.deepEqual(scopeProgress(catalog, state, 'core'), { done: 1, available: 3, total: 5, pct: 33, unit: 'lessons' });
  assert.deepEqual(scopeProgress(catalog, state, 'all'), { done: 2, available: 4, total: 6, pct: 50, unit: 'lessons' });
  assert.equal(scopeProgress(catalog, state, 'course:c0').pct, 50);
  assert.equal(scopeProgress(catalog, state, 'course:nope'), null);
  assert.deepEqual(projectProgress(catalog.projects[0], state), { done: 3, total: 4, pct: 75 }, 'out-of-range task indexes are ignored');
  assert.equal(scopeProgress(catalog, state, 'project:p').unit, 'tasks');
});

test('stage status never claims a partly written stage is complete', () => {
  const s = { ...emptyState(), done: { a: 'x', b: 'x', c: 'x' } };
  assert.equal(stageStatus(catalog.courses[0], s), 'complete');
  assert.equal(stageStatus(catalog.courses[1], s), 'in-progress', 'all written lessons done, but one is still in writing');
  assert.equal(stageStatus(catalog.courses[2], s), 'in-writing');
  assert.equal(stageStatus(catalog.courses[0], emptyState()), 'not-started');
});

test('next lesson follows core order, then optional', () => {
  assert.equal(nextLesson(catalog, emptyState()).lesson.slug, 'a');
  assert.equal(nextLesson(catalog, { ...emptyState(), done: { a: 1, b: 1 } }).lesson.slug, 'c');
  assert.equal(nextLesson(catalog, { ...emptyState(), done: { a: 1, b: 1, c: 1 } }).lesson.slug, 'x');
  assert.equal(nextLesson(catalog, { ...emptyState(), done: { a: 1, b: 1, c: 1, x: 1 } }), null);
  assert.equal(findLesson(catalog, 'd').course.slug, 'c1');
  assert.equal(findLesson(catalog, 'zzz'), null);
});

test('hasActivity is false for a fresh learner', () => {
  assert.equal(hasActivity(emptyState()), false);
  assert.equal(hasActivity({ ...emptyState(), last: { slug: 'a', at: '' } }), true);
});

test('search ranks title matches first, requires every word and filters by type', () => {
  const index = [
    { type: 'lesson', title: 'Visual hierarchy', url: '/1', text: 'size weight colour', meta: 'Stage 1' },
    { type: 'term', title: 'Contrast ratio', url: '/2', text: 'visual hierarchy relies on contrast', meta: 'Glossary' },
    { type: 'lesson', title: 'Typography', url: '/3', text: 'type scale and hierarchy', meta: 'Stage 1' },
    { type: 'lesson', title: 'Card sorting', url: '/4', text: 'hierarchy of navigation', meta: 'Stage 3 · In writing' },
  ];
  assert.deepEqual(search(index, 'hierarchy').map((r) => r.url), ['/1', '/3', '/2', '/4']);
  assert.deepEqual(search(index, 'visual hierarchy').map((r) => r.url), ['/1', '/2']);
  assert.deepEqual(search(index, 'hierarchy', 'term').map((r) => r.url), ['/2']);
  assert.deepEqual(search(index, '   '), []);
  assert.deepEqual(search(index, 'zebra'), []);
});

test('filterItems combines text search and exact filters', () => {
  const items = [
    { search: 'improve a form', filters: { topic: 'Forms', level: 'Beginner' } },
    { search: 'heuristic audit', filters: { topic: 'Usability', level: 'Intermediate' } },
    { search: 'form validation audit', filters: { topic: 'Forms', level: 'Intermediate' } },
  ];
  assert.deepEqual(filterItems(items, '', {}), [true, true, true]);
  assert.deepEqual(filterItems(items, 'form', {}), [true, false, true]);
  assert.deepEqual(filterItems(items, 'audit', { topic: 'Forms' }), [false, false, true]);
  assert.deepEqual(filterItems(items, '', { level: 'Intermediate', topic: '' }), [false, true, true]);
});
