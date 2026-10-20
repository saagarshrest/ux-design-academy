// @ts-check
/* =====================================================================
   UI/UX Design Academy: browser behaviour.
   Pages are complete, readable HTML without this script. This file adds
   progress, bookmarks, notes, knowledge checks, checklists, filters,
   search, printing, template copy/download and backup/restore.
   ===================================================================== */
import {
  createStore, probeBackend, scopeProgress, stageStatus, nextLesson, findLesson, hasActivity, search, filterItems, courseProgress,
} from './store.mjs';

const $ = (/** @type {string} */ s, /** @type {ParentNode} */ r = document) => /** @type {HTMLElement | null} */ (r.querySelector(s));
const $$ = (/** @type {string} */ s, /** @type {ParentNode} */ r = document) => /** @type {HTMLElement[]} */ ([...r.querySelectorAll(s)]);
const esc = (/** @type {unknown} */ s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c);

const store = createStore(probeBackend(() => window.localStorage));

/** @type {import('./store.mjs').Catalog | null} */
let catalog = null;
let catalogFailed = false;

/** @type {Promise<import('./store.mjs').IndexEntry[]> | null} */
let indexPromise = null;
const loadIndex = () => (indexPromise ||= fetch('/learn/search-index.json').then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); }));

/* ---------------------------------------------------------- storage note */
function storageNotice() {
  if (store.persistent && !store.error) return;
  const msg = store.error || 'This browser is not allowing the academy to save data, so progress, bookmarks and notes will be lost when you leave the page. Private browsing or blocked site data usually causes this.';
  for (const el of $$('[data-storage-note]')) { el.textContent = msg; el.classList.add('la-note--warn'); }
}

/* -------------------------------------------------------------- progress */
function renderProgress() {
  for (const el of $$('[data-progress]')) {
    const bar = $('[role="progressbar"]', el), fill = $('[role="progressbar"] span', el), txt = $('[data-progress-text]', el);
    if (!bar || !fill || !txt) continue;
    if (!catalog) { txt.textContent = catalogFailed ? 'Progress could not be loaded. Refresh the page to try again.' : 'Loading progress…'; continue; }
    const p = scopeProgress(catalog, store.state, /** @type {string} */ (el.dataset.progress));
    if (!p) { el.hidden = true; continue; }
    bar.setAttribute('aria-valuenow', String(p.pct));
    bar.setAttribute('aria-valuetext', `${p.pct}%`);
    fill.style.width = `${p.pct}%`;
    if (p.unit === 'tasks') txt.textContent = p.done ? `${p.done} of ${p.total} milestone tasks done` : `${p.total} milestone tasks, none ticked yet`;
    else {
      const planned = p.total - p.available;
      txt.textContent = `${p.done} of ${p.available} written lessons complete (${p.pct}%)${planned ? ` · ${planned} more in writing` : ''}`;
    }
    el.classList.toggle('is-done', p.available > 0 && p.done === p.available);
  }
  // Circular progress rings on the dashboard and course pages
  for (const el of $$('[data-ring-scope]')) {
    if (!catalog) continue;
    const p = scopeProgress(catalog, store.state, /** @type {string} */ (el.dataset.ringScope));
    if (!p) { el.hidden = true; continue; }
    const pct = p.available ? Math.round((p.done / p.available) * 100) : 0;
    el.style.setProperty('--la-pct', String(pct));
    el.dataset.done = p.available > 0 && p.done === p.available ? '1' : '0';
    const label = ($('.la-ring__in span', el) || {}).textContent || 'complete';
    el.setAttribute('aria-label', `${label}: ${pct} percent complete`);
    const value = $('[data-ring-value]', el);
    if (value) value.innerHTML = `${pct}<i>%</i>`;
  }
  // The app bar pill
  const pill = $('[data-app-progress]');
  if (pill && catalog) {
    const p = scopeProgress(catalog, store.state, 'core');
    const txt = $('[data-app-progress-text]', pill);
    if (txt) txt.textContent = p && p.available ? `${p.done}/${p.available} lessons` : 'Start learning';
    pill.dataset.state = p && p.available && p.done === p.available ? 'done' : (p && p.done ? 'active' : 'empty');
  }
  // Roadmap stage statuses
  for (const node of $$('[data-stage]')) {
    const c = catalog?.courses.find((x) => x.slug === node.dataset.stage);
    const label = $('[data-stage-status]', node);
    if (!c || !label) continue;
    const st = stageStatus(c, store.state);
    const p = courseProgress(c, store.state);
    label.textContent = { 'in-writing': 'In writing', 'not-started': 'Not started', 'in-progress': `In progress · ${p.done}/${p.available}`, complete: 'Complete' }[st];
    label.dataset.state = st;
    node.dataset.state = st;
  }
  // Lesson rows on course pages
  for (const row of $$('[data-lesson-row]')) {
    const slug = /** @type {string} */ (row.dataset.lessonRow);
    const done = store.isDone(slug);
    row.classList.toggle('is-done', done);
    const s = $('[data-lesson-state]', row);
    if (s) s.textContent = done ? 'Completed' : (store.isVideoWatched(slug) ? 'Video watched' : '');
  }
}

/* ---------------------------------------------------- complete + last visit */
function initLesson() {
  const root = $('[data-lesson]');
  if (root && root.dataset.lesson) store.setLast(root.dataset.lesson);
  const sync = () => {
    for (const btn of $$('[data-complete]')) {
      const done = store.isDone(/** @type {string} */ (btn.dataset.complete));
      btn.setAttribute('aria-pressed', String(done));
      const label = $('[data-complete-label]', btn);
      // The sticky mobile bar has less room, so it uses shorter wording.
      const short = !!btn.closest('[data-actionbar]');
      if (label) label.textContent = done ? (short ? 'Completed' : 'Completed. Mark as not done') : (short ? 'Mark complete' : 'Mark lesson complete');
      btn.classList.toggle('is-on', done);
    }
  };
  for (const btn of $$('[data-complete]')) btn.addEventListener('click', () => {
    const slug = /** @type {string} */ (btn.dataset.complete);
    store.setDone(slug, !store.isDone(slug));
  });
  store.subscribe(sync);
  sync();
}

/* ---------------------------------------------------------- video player */
const PLAY_ICON = '<path d="M8 5.5v13l11-6.5z"/>';
const PAUSE_ICON = '<path d="M7.5 5h3v14h-3zM13.5 5h3v14h-3z"/>';
const MUTE_ICON = '<path d="M4 9.5h3l4-3.5v12l-4-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.8a7.5 7.5 0 0 1 0 10.4"/>';
const SOUND_ICON = '<path d="M4 9.5h3l4-3.5v12l-4-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.8a7.5 7.5 0 0 1 0 10.4"/><path d="M4 4l16 16" stroke-linecap="round"/>';
const RATES = [1, 1.25, 1.5, 0.75];

const clock = (/** @type {number} */ seconds) => {
  const s = Math.max(0, Math.floor(seconds || 0));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
};

/**
 * The YouTube IFrame Player API, loaded once and only on pages that
 * have a video. It is what gives us play/pause, seeking, speed and the
 * current time. If it never arrives, the native YouTube controls in the
 * embed still work and our bar is removed.
 */
let ytApi = null;
function loadYouTubeApi() {
  if (ytApi) return ytApi;
  ytApi = new Promise((resolve) => {
    if (window.YT && window.YT.Player) { resolve(window.YT); return; }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (previous) previous(); resolve(window.YT); };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
    // Never leave the bar half working.
    setTimeout(() => resolve(window.YT), 10000);
  });
  return ytApi;
}

/**
 * Keep the embed's origin parameter in step with the page. YouTube only
 * accepts player commands from the origin named in the URL, so a build
 * made for one host must still work when it is served from another.
 */
function syncOrigin(/** @type {HTMLIFrameElement} */ frame) {
  try {
    const url = new URL(frame.src);
    if (url.searchParams.get('origin') === location.origin) return;
    url.searchParams.set('origin', location.origin);
    frame.src = url.toString();
  } catch { /* leave the embed as it is */ }
}

/**
 * Wire up one video: the control bar, the watched flag and the state
 * the player reports back to us.
 */
async function setupVideo(/** @type {HTMLElement} */ fig) {
  const slug = /** @type {string} */ (fig.dataset.videoSlug);
  const frame = /** @type {HTMLIFrameElement | null} */ ($('iframe', fig));
  if (!frame) return;
  syncOrigin(frame);
  const bar = $('[data-vbar]', fig);
  const playBtn = $('[data-vplay]', fig);
  const playIcon = $('[data-vplay-icon]', fig);
  const seek = /** @type {HTMLInputElement | null} */ ($('[data-vseek]', fig));
  const timeEl = $('[data-vtime]', fig);
  const durEl = $('[data-vdur]', fig);
  const muteBtn = $('[data-vmute]', fig);
  const muteIcon = $('[data-vmute-icon]', fig);
  const rateBtn = $('[data-vrate]', fig);
  const fullBtn = $('[data-vfull]', fig);
  const markWatched = () => {
    const flag = $('[data-video-watched]', fig);
    if (flag) flag.hidden = false;
  };
  if (store.isVideoWatched(slug)) markWatched();

  const YT = await loadYouTubeApi();
  if (!YT || !YT.Player) { bar?.remove(); return; }

  let duration = Number(fig.dataset.videoSeconds) || 0;
  let position = 0;
  let muted = false;
  let rateIndex = 0;
  let scrubbing = false;

  /** @type {any} */
  let player;

  const update = () => {
    if (!scrubbing && player && typeof player.getCurrentTime === 'function') {
      try { position = player.getCurrentTime(); } catch { /* not ready yet */ }
    }
    if (timeEl) timeEl.textContent = clock(position);
    if (seek) seek.value = String(duration ? Math.round((position / duration) * 1000) : 0);
    if (playIcon) {
      const playing = player && player.getPlayerState && player.getPlayerState() === 1;
      playIcon.innerHTML = playing ? PAUSE_ICON : PLAY_ICON;
    }
    if (playBtn) playBtn.setAttribute('aria-label', player && player.getPlayerState && player.getPlayerState() === 1 ? 'Pause the video' : 'Play the video');
    if (muteIcon) muteIcon.innerHTML = muted ? SOUND_ICON : MUTE_ICON;
    if (muteBtn) muteBtn.setAttribute('aria-label', muted ? 'Unmute the video' : 'Mute the video');
  };

  try {
    player = new YT.Player(frame, {
      events: {
        onReady: () => {
          bar?.querySelectorAll('button, input').forEach((el) => { el.disabled = false; });
          const d = player.getDuration();
          if (d) duration = d;
          if (durEl) durEl.textContent = clock(duration);
          update();
        },
        onStateChange: (/** @type {{ data: number }} */ e) => {
          const state = e.data;
          if (state === 0) { store.setVideoWatched(slug); markWatched(); }
          if (state === 1) { position = player.getCurrentTime(); }
          update();
        },
      },
    });
  } catch {
    bar?.remove();
    return;
  }

  playBtn?.addEventListener('click', () => {
    if (!player) return;
    if (player.getPlayerState() === 1) player.pauseVideo(); else player.playVideo();
    setTimeout(update, 120);
  });
  muteBtn?.addEventListener('click', () => {
    if (!player) return;
    if (muted) { player.unMute(); muted = false; } else { player.mute(); muted = true; }
    update();
  });
  rateBtn?.addEventListener('click', () => {
    if (!player) return;
    rateIndex = (rateIndex + 1) % RATES.length;
    const rate = RATES[rateIndex];
    player.setPlaybackRate(rate);
    if (rateBtn) rateBtn.textContent = `${rate}×`;
  });
  fullBtn?.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else fig.requestFullscreen?.();
  });
  seek?.addEventListener('pointerdown', () => { scrubbing = true; });
  seek?.addEventListener('input', () => {
    scrubbing = true;
    position = (Number(seek.value) / 1000) * duration;
    if (timeEl) timeEl.textContent = clock(position);
  });
  seek?.addEventListener('change', () => {
    if (player && duration) player.seekTo(position, true);
    scrubbing = false;
  });
  seek?.addEventListener('pointerup', () => { scrubbing = false; });

  // Keep the bar in step with the player while it runs.
  setInterval(update, 250);
  update();
}

function initVideos() {
  const figures = $$('[data-video-slug]');
  if (!figures.length) return;
  for (const fig of figures) setupVideo(fig);
  store.subscribe(() => {
    for (const fig of figures) {
      if (store.isVideoWatched(/** @type {string} */ (fig.dataset.videoSlug))) {
        const flag = $('[data-video-watched]', fig);
        if (flag) flag.hidden = false;
      }
    }
  });
}

/* ------------------------------------------------------------- bookmarks */
function initBookmarks() {
  const sync = () => {
    for (const btn of $$('[data-bookmark]')) {
      const on = store.isBookmarked(/** @type {string} */ (btn.dataset.bookmark));
      btn.setAttribute('aria-pressed', String(on));
      btn.classList.toggle('is-on', on);
      const label = $('[data-bm-label]', btn);
      if (label) label.textContent = on ? 'Saved' : 'Save';
    }
  };
  for (const btn of $$('[data-bookmark]')) btn.addEventListener('click', () => {
    store.toggleBookmark(/** @type {string} */ (btn.dataset.bookmark), { title: btn.dataset.title || document.title, href: btn.dataset.href || location.pathname });
  });
  store.subscribe(sync);
  sync();
}

/* ----------------------------------------------------------------- notes */
function initNotes() {
  for (const ta of /** @type {HTMLTextAreaElement[]} */ ($$('textarea[data-notes]'))) {
    const slug = /** @type {string} */ (ta.dataset.notes);
    const status = ta.parentElement ? $('[data-notes-status]', ta.parentElement) : null;
    ta.value = store.getNote(slug);
    /** @type {number | undefined} */ let t;
    const save = () => {
      store.setNote(slug, ta.value);
      if (status) status.textContent = store.error ? store.error : store.persistent ? 'Saved in this browser.' : 'Not saved: storage is unavailable.';
    };
    ta.addEventListener('input', () => { if (status) status.textContent = 'Saving…'; clearTimeout(t); t = window.setTimeout(save, 500); });
    ta.addEventListener('blur', () => { clearTimeout(t); save(); });
  }
}

/* ------------------------------------------------------- knowledge checks */
function initKnowledgeChecks() {
  for (const kc of $$('[data-kc]')) {
    const id = /** @type {string} */ (kc.dataset.kc);
    const qs = $$('[data-kc-q]', kc);
    const score = $('[data-kc-score]', kc);
    const saved = store.getQuiz(id);

    const updateScore = () => {
      const answered = qs.filter((q) => q.dataset.result);
      if (!score) return;
      if (!answered.length) { score.textContent = ''; return; }
      const right = answered.filter((q) => q.dataset.result === 'right').length;
      score.textContent = `${right} of ${qs.length} correct${answered.length < qs.length ? ` · ${qs.length - answered.length} still to check` : ''}.`;
    };

    /** @param {HTMLElement} q @param {number} choice @param {boolean} announce */
    const reveal = (q, choice, announce) => {
      const answer = Number(q.dataset.answer);
      const fb = $('.la-kc__fb', q), why = $('.la-kc__why', q), reset = $('[data-kc-reset]', q), check = $('[data-kc-check]', q);
      const opts = /** @type {HTMLInputElement[]} */ ($$('input[type="radio"]', q));
      const right = choice === answer;
      q.dataset.result = right ? 'right' : 'wrong';
      opts.forEach((o, j) => {
        o.checked = j === choice;
        o.disabled = true;
        const label = o.closest('label');
        label?.classList.toggle('is-answer', j === answer);
        label?.classList.toggle('is-wrong', j === choice && !right);
      });
      if (fb) {
        const correct = /** @type {HTMLElement} */ (opts[answer]?.nextElementSibling)?.textContent || '';
        fb.innerHTML = `<p class="la-kc__verdict">${right ? 'Correct.' : `Not quite. The answer is: ${esc(correct)}.`}</p><p>${esc(why?.textContent || '')}</p>`;
        fb.className = `la-kc__fb ${right ? 'is-right' : 'is-wrong'}`;
        if (!announce) fb.setAttribute('aria-live', 'off');
        else fb.setAttribute('aria-live', 'polite');
      }
      if (check) check.hidden = true;
      if (reset) reset.hidden = false;
      updateScore();
    };

    qs.forEach((q) => {
      const qi = q.dataset.kcQ || '0';
      const check = $('[data-kc-check]', q), reset = $('[data-kc-reset]', q), fb = $('.la-kc__fb', q);
      check?.addEventListener('click', () => {
        const picked = /** @type {HTMLInputElement | null} */ (q.querySelector('input[type="radio"]:checked'));
        if (!picked) {
          if (fb) { fb.className = 'la-kc__fb is-hint'; fb.innerHTML = '<p>Choose an answer first.</p>'; }
          /** @type {HTMLInputElement | null} */ (q.querySelector('input[type="radio"]'))?.focus();
          return;
        }
        const choice = Number(picked.value);
        store.setQuizAnswer(id, Number(qi), choice);
        reveal(q, choice, true);
      });
      reset?.addEventListener('click', () => {
        store.setQuizAnswer(id, Number(qi), null);
        delete q.dataset.result;
        for (const o of /** @type {HTMLInputElement[]} */ ($$('input[type="radio"]', q))) { o.disabled = false; o.checked = false; o.closest('label')?.classList.remove('is-answer', 'is-wrong'); }
        if (fb) { fb.innerHTML = ''; fb.className = 'la-kc__fb'; }
        if (check) check.hidden = false;
        reset.hidden = true;
        /** @type {HTMLInputElement | null} */ (q.querySelector('input[type="radio"]'))?.focus();
        updateScore();
      });
      if (saved[qi] !== undefined && saved[qi] < $$('input[type="radio"]', q).length) reveal(q, saved[qi], false);
    });
  }
}

/* ------------------------------------------------------------- checklists */
function initChecklists() {
  for (const list of $$('[data-checklist]')) {
    const id = /** @type {string} */ (list.dataset.checklist);
    const boxes = /** @type {HTMLInputElement[]} */ ($$('input[type="checkbox"]', list));
    const count = $('[data-checklist-count]', list);
    const sync = () => {
      const on = new Set(store.getChecks(id));
      boxes.forEach((b, i) => { b.checked = on.has(i); b.closest('li')?.classList.toggle('is-checked', b.checked); });
      const n = boxes.filter((b) => b.checked).length;
      if (count) count.textContent = n === boxes.length ? `All ${boxes.length} done` : `${n} of ${boxes.length} done`;
      list.classList.toggle('is-complete', n === boxes.length);
    };
    boxes.forEach((b, i) => b.addEventListener('change', () => store.setCheck(id, i, b.checked)));
    store.subscribe(sync);
    sync();
  }
}

/* ---------------------------------------------------------------- filters */
function initFilters() {
  for (const form of $$('[data-filters-for]')) {
    const list = $(`[data-filterable="${form.dataset.filtersFor}"]`);
    if (!list) continue;
    const items = $$('[data-item]', list);
    const empty = list.parentElement ? $('[data-filter-empty]', list.parentElement) : null;
    const q = /** @type {HTMLInputElement | null} */ ($('[data-filter-search]', form));
    const selects = /** @type {HTMLSelectElement[]} */ ($$('select[data-filter]', form));
    const count = $('[data-filter-count]', form);
    const data = items.map((el) => ({
      search: el.dataset.search || '',
      filters: Object.fromEntries(Object.entries(el.dataset).filter(([k]) => k.startsWith('filter')).map(([k, v]) => [k.slice(6).toLowerCase(), v || ''])),
    }));
    const params = new URLSearchParams(location.search);
    if (q && params.get('q')) q.value = params.get('q') || '';
    for (const s of selects) { const v = params.get(s.dataset.filter || ''); if (v && [...s.options].some((o) => o.value === v)) s.value = v; }
    const apply = () => {
      const active = Object.fromEntries(selects.map((s) => [s.dataset.filter || '', s.value]));
      const vis = filterItems(data, q?.value || '', active);
      let shown = 0;
      items.forEach((el, i) => { el.hidden = !vis[i]; if (vis[i]) shown++; });
      if (empty) empty.hidden = shown > 0;
      if (count) count.textContent = shown === items.length ? `Showing all ${items.length}` : `Showing ${shown} of ${items.length}`;
      // keep filters shareable without adding history entries
      const p = new URLSearchParams();
      if (q?.value.trim()) p.set('q', q.value.trim());
      for (const s of selects) if (s.value) p.set(s.dataset.filter || '', s.value);
      history.replaceState(null, '', `${location.pathname}${p.toString() ? `?${p}` : ''}${location.hash}`);
    };
    q?.addEventListener('input', apply);
    selects.forEach((s) => s.addEventListener('change', apply));
    // The form filters in place; pressing Enter should not reload the page.
    form.addEventListener('submit', (e) => e.preventDefault());
    apply();
  }
}

/* ----------------------------------------------------------------- search */
const TYPE_LABEL = /** @type {Record<string, string>} */ ({ lesson: 'Lesson', course: 'Course', exercise: 'Exercise', project: 'Project', term: 'Glossary', template: 'Template', resource: 'Resource', page: 'Guide' });

function initSearch() {
  for (const input of /** @type {HTMLInputElement[]} */ ($$('input[data-live-search]'))) {
    const out = document.getElementById(/** @type {string} */ (input.dataset.liveSearch));
    if (!out) continue;
    const isPage = input.hasAttribute('data-sync-url');
    const typeBoxes = /** @type {HTMLInputElement[]} */ ($$('[data-search-types] input'));
    const params = new URLSearchParams(location.search);
    if (isPage) {
      input.value = params.get('q') || '';
      const t = params.get('type') || '';
      typeBoxes.forEach((b) => { b.checked = b.value === t; });
      if (!typeBoxes.some((b) => b.checked) && typeBoxes[0]) typeBoxes[0].checked = true;
      const bar = /** @type {HTMLInputElement | null} */ ($('#la-bar-q'));
      if (bar) bar.value = input.value;
    }
    /** @type {number | undefined} */ let timer;
    const run = async () => {
      const q = input.value.trim();
      const type = typeBoxes.find((b) => b.checked)?.value || '';
      if (isPage) {
        const p = new URLSearchParams(); if (q) p.set('q', q); if (type) p.set('type', type);
        history.replaceState(null, '', `${location.pathname}${p.toString() ? `?${p}` : ''}`);
      }
      if (!q) { out.innerHTML = isPage ? '<p class="la-muted">Type a word or two to search. Results appear as you type.</p>' : ''; return; }
      if (!indexPromise) out.innerHTML = '<p class="la-muted">Loading search…</p>';
      let index;
      try { index = await loadIndex(); }
      catch { indexPromise = null; out.innerHTML = '<p class="la-note la-note--warn">Search could not load. Check your connection and try again.</p>'; return; }
      const res = search(index, q, type, isPage ? 60 : 8);
      if (!res.length) {
        out.innerHTML = `<div class="la-empty"><p class="la-empty__title">No results for “${esc(q)}”</p><p>Try a shorter or more general word, check the spelling, or browse the <a href="/learn/glossary/">glossary</a>.</p></div>`;
        return;
      }
      const items = res.map((r) => {
        const ext = !r.url.startsWith('/');
        return `<li class="la-result"><a href="${esc(r.url)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}><span class="la-result__type">${TYPE_LABEL[r.type] || r.type}</span><b>${esc(r.title)}</b><span class="la-result__meta">${esc(r.meta)}${ext ? ' · opens in a new tab' : ''}</span></a></li>`;
      }).join('');
      const more = !isPage ? `<p class="la-result__all"><a href="/learn/search/?q=${encodeURIComponent(q)}">See all results for “${esc(q)}”</a></p>` : '';
      out.innerHTML = `<p class="la-sr">${res.length} results</p><ul class="la-results">${items}</ul>${more}`;
    };
    input.addEventListener('input', () => { clearTimeout(timer); timer = window.setTimeout(run, 120); });
    typeBoxes.forEach((b) => b.addEventListener('change', run));
    if (input.value) run();
    else if (isPage) run();
  }
}

/* -------------------------------------------------------------- continue */
function renderContinue() {
  const section = $('[data-continue]');
  const slot = $('[data-continue-slot]');
  if (!section || !slot || !catalog) return;
  if (!hasActivity(store.state)) { section.hidden = true; return; }
  const last = store.state.last ? findLesson(catalog, store.state.last.slug) : null;
  const next = nextLesson(catalog, store.state);
  const cards = [];
  const badge = (l) => (l.video ? '<span class="la-tag la-tag--video">Video</span>' : '');
  if (last && last.lesson.published) cards.push(`<a class="la-card la-cont" href="${last.lesson.url}"><span class="la-stage">Last opened · Stage ${last.course.stage}</span><b>${esc(last.lesson.title)}</b>${badge(last.lesson)}<span class="la-cont__meta">${store.isDone(last.lesson.slug) ? 'Completed' : 'Not marked complete yet'}</span></a>`);
  if (next && (!last || next.lesson.slug !== last.lesson.slug)) cards.push(`<a class="la-card la-cont" href="${next.lesson.url}"><span class="la-stage">Up next · Stage ${next.course.stage}</span><b>${esc(next.lesson.title)}</b>${badge(next.lesson)}<span class="la-cont__meta">The next lesson you have not completed</span></a>`);
  if (!next) cards.push('<div class="la-card la-cont"><span class="la-stage">All caught up</span><b>You have completed every written lesson.</b><span class="la-cont__meta">Try a <a href="/learn/projects/">portfolio project</a> while new lessons are written.</span></div>');
  slot.innerHTML = cards.join('');
  section.hidden = false;
}

function renderNext() {
  const slot = $('[data-next-slot]');
  if (!slot || !catalog || !hasActivity(store.state)) return;
  const next = nextLesson(catalog, store.state);
  if (!next) { slot.innerHTML = '<div class="la-empty"><p class="la-empty__title">Every written lesson is complete</p><p>Keep going with the <a href="/learn/projects/">portfolio projects</a> and the <a href="/learn/practice/">practice library</a>. New lessons appear on the course pages as they are written.</p></div>'; return; }
  const p = courseProgress(next.course, store.state);
  slot.innerHTML = `<div class="la-callout la-callout--next"><p class="la-stage">Stage ${next.course.stage} · ${esc(next.course.title)} · ${p.done}/${p.available} done</p><p class="la-h3"><a href="${next.lesson.url}">${esc(next.lesson.title)}</a></p><p class="la-muted">This is the first lesson in the recommended order that you have not completed.</p></div>`;
}

/* ------------------------------------------------------------ saved page */
/** Original empty-state markup per slot, so it can be restored when the last item is removed. */
const emptyHtml = new Map();
/** @param {HTMLElement} slot @param {string} html */
const fill = (slot, html) => { if (!emptyHtml.has(slot)) emptyHtml.set(slot, slot.innerHTML); slot.innerHTML = html || emptyHtml.get(slot); };

function renderSaved() {
  const bm = $('[data-bookmarks-slot]'), notes = $('[data-notes-slot]'), comp = $('[data-completed-slot]');
  if (bm) {
    const entries = Object.entries(store.state.bookmarks).sort((a, b) => b[1].at.localeCompare(a[1].at));
    fill(bm, entries.length ? `<ul class="la-saved">${entries.map(([key, v]) => `<li><a href="${esc(v.href)}">${esc(v.title)}</a><span class="la-saved__kind">${esc(key.split(':')[0])}</span><button type="button" class="la-link-btn" data-unsave="${esc(key)}">Remove<span class="la-sr"> ${esc(v.title)}</span></button></li>`).join('')}</ul>` : '');
    for (const b of $$('[data-unsave]', bm)) b.addEventListener('click', () => { const k = /** @type {string} */ (b.dataset.unsave); const v = store.state.bookmarks[k]; if (v) store.toggleBookmark(k, v); });
  }
  if (!catalog) return;
  const cat = catalog;
  if (notes) {
    const entries = Object.entries(store.state.notes);
    fill(notes, entries.length ? `<ul class="la-saved la-saved--notes">${entries.map(([slug, n]) => {
      const f = findLesson(cat, slug);
      return `<li><a href="${f ? f.lesson.url + '#notes' : '/learn/'}">${esc(f ? f.lesson.title : slug)}</a><p>${esc(n.text.length > 280 ? n.text.slice(0, 280) + '…' : n.text)}</p></li>`;
    }).join('')}</ul>` : '');
  }
  if (comp) {
    const done = Object.keys(store.state.done).map((s) => findLesson(cat, s)).filter((x) => !!x);
    comp.innerHTML = done.length ? `<details class="la-disc"><summary>${done.length} completed lesson${done.length > 1 ? 's' : ''}</summary><ul>${done.map((d) => `<li><a href="${d.lesson.url}">${esc(d.lesson.title)}</a></li>`).join('')}</ul></details>` : '';
  }
}

function initBackup() {
  const status = $('[data-backup-status]');
  const say = (/** @type {string} */ m) => { if (status) status.textContent = m; };
  $('[data-export]')?.addEventListener('click', () => {
    const blob = new Blob([store.exportJSON()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ux-academy-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    say('Backup downloaded.');
  });
  const file = /** @type {HTMLInputElement | null} */ ($('[data-import]'));
  file?.addEventListener('change', async () => {
    const f = file.files?.[0];
    if (!f) return;
    if (!confirm('Restoring replaces the progress, bookmarks and notes in this browser. Continue?')) { file.value = ''; return; }
    const r = store.importJSON(await f.text());
    say(r.ok ? 'Backup restored.' : `Could not restore: ${r.error}`);
    file.value = '';
  });
  $('[data-reset]')?.addEventListener('click', () => {
    if (!confirm('Delete all progress, bookmarks, quiz answers and notes in this browser? This cannot be undone unless you have a backup.')) return;
    store.reset();
    say('All progress in this browser has been reset.');
  });
}

/* ------------------------------------------------------- templates, print */
function initUtilities() {
  for (const b of $$('[data-print]')) b.addEventListener('click', () => {
    // open every disclosure so printed briefs are complete, then restore
    const closed = /** @type {HTMLDetailsElement[]} */ ($$('details:not([open])'));
    closed.forEach((d) => { d.open = true; });
    window.print();
    closed.forEach((d) => { d.open = false; });
  });
  const status = $('[data-template-status]');
  for (const b of $$('[data-copy-template]')) b.addEventListener('click', async () => {
    const src = document.getElementById(/** @type {string} */ (b.dataset.copyTemplate));
    try { await navigator.clipboard.writeText(src?.textContent || ''); if (status) status.textContent = 'Copied to your clipboard as Markdown.'; }
    catch { if (status) status.textContent = 'Copying is blocked in this browser. Open “View the Markdown source” below and copy it manually.'; }
  });
  for (const b of $$('[data-download-template]')) b.addEventListener('click', () => {
    const src = document.getElementById(/** @type {string} */ (b.dataset.downloadTemplate));
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([src?.textContent || ''], { type: 'text/markdown' }));
    a.download = b.dataset.filename || 'template.md';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    if (status) status.textContent = 'Downloaded.';
  });
}

/* -------------------------------------------------- table of contents */
function initToc() {
  const details = /** @type {HTMLDetailsElement[]} */ ($$('[data-toc-details]'));
  const mq = window.matchMedia('(min-width: 1024px)');
  const setOpen = () => details.forEach((d) => { d.open = mq.matches; });
  setOpen();
  mq.addEventListener('change', setOpen);
  const links = /** @type {HTMLAnchorElement[]} */ ($$('.la-toc a'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map(links.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) {
      links.forEach((a) => a.removeAttribute('aria-current'));
      map.get(e.target.id)?.setAttribute('aria-current', 'true');
    }
  }, { rootMargin: '-20% 0px -70% 0px' });
  for (const id of map.keys()) { const el = document.getElementById(id); if (el) io.observe(el); }
  for (const a of links) a.addEventListener('click', () => { if (!mq.matches) a.closest('details')?.removeAttribute('open'); });
}

/* ------------------------------------------------------------------- boot */
async function boot() {
  storageNotice();
  initLesson();
  initVideos();
  initBookmarks();
  initNotes();
  initKnowledgeChecks();
  initChecklists();
  initFilters();
  initSearch();
  initUtilities();
  initBackup();
  initToc();
  renderProgress();
  store.subscribe(() => { renderProgress(); renderContinue(); renderNext(); renderSaved(); });
  window.addEventListener('storage', (e) => { if (e.key === null || e.key === 'uxacademy') store.reload(); });
  try {
    const r = await fetch('/learn/catalog.json');
    if (!r.ok) throw new Error(String(r.status));
    catalog = await r.json();
  } catch {
    catalogFailed = true;
  }
  renderProgress();
  renderContinue();
  renderNext();
  renderSaved();
  storageNotice();
}

boot();
