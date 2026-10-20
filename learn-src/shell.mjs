// @ts-check
/* Page shell for academy pages. The site navigation, mobile menu and footer
   are copied from /index.html at build time so the academy never drifts from
   the rest of the site. If those markers change, the build fails loudly. */
import { readFileSync, existsSync } from 'node:fs';
import { esc } from './components.mjs';
import { AppDock } from './components.mjs';

/* The public origin of the site. Set SITE_URL when building for a different
   host (for example a Vercel production domain); the default matches the
   portfolio the academy lives in. */
export const SITE = String(process.env.SITE_URL || 'https://saagarshrest.com.np').replace(/\/+$/, '');

/* The portfolio the academy belongs to. Used for links that stay with the
   author even when the academy is hosted elsewhere. */
export const PORTFOLIO_SITE = 'https://saagarshrest.com.np';

/* Analytics tag. Inside the portfolio the portfolio's own tag is used; a
   standalone build only loads analytics when GA_ID is provided, so a new
   deployment never reports into someone else's property by accident. */
const GA_DEFAULT = 'G-FYVQB18KQB';
const GA_ID = String(process.env.GA_ID || '').trim();

/* Social preview image. Must be an absolute URL. Set OG_IMAGE_URL to use
   your own; a standalone build falls back to the portfolio's image so the
   link never points at a file that does not exist. */
export const OG_IMAGE = String(process.env.OG_IMAGE_URL || '');

/* Ads. The loader is added to every page; the ids live in ads.mjs. */
import { ADSENSE_CLIENT, ADSENSE_SLOT, adsenseScript } from './ads.mjs';
export { ADSENSE_CLIENT, ADSENSE_SLOT, adsenseScript };

/** Return the outer HTML of the element whose opening tag starts at `start`, by balancing tags of that name. */
function balanced(/** @type {string} */ src, /** @type {number} */ start, /** @type {string} */ tag) {
  const re = new RegExp(`<${tag}\\b|</${tag}>`, 'g');
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(src))) {
    depth += m[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return src.slice(start, m.index + m[0].length);
  }
  throw new Error(`Unbalanced <${tag}> starting at ${start}`);
}

/** Minimal chrome used when the academy is built on its own, outside the portfolio site.
    The academy bar (AcademyHeader) acts as the app header, so no separate
    site navigation is rendered here. */
const STANDALONE = {
  standalone: true,
  nav: '',
  menu: '',
  footer: `<footer class="la-solo-foot"><div class="la-solo__in"><p>UI/UX Design Academy by <a href="https://saagarshrest.com.np/">Saagar Shrestha</a>. Free to learn from.</p></div></footer>`,
  icons: [
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
  ],
};

/** @param {string} root */
export function loadChrome(root) {
  if (!existsSync(`${root}/index.html`)) return STANDALONE;
  const src = readFileSync(`${root}/index.html`, 'utf8');
  const navAt = src.indexOf('<nav class="site-nav">');
  const menuAt = src.indexOf('<div id="mobile-menu"');
  const footAt = src.indexOf('<footer id="contact"');
  if (navAt < 0 || menuAt < 0 || footAt < 0) throw new Error('index.html: could not find site nav, mobile menu or footer');
  const strip = (/** @type {string} */ s) => s.replace(/ aria-current="page"/g, '');
  const mark = (/** @type {string} */ s) => strip(s).replace(/<a href="\/learn\/">Learn<\/a>/g, '<a href="/learn/" aria-current="page">Learn</a>');
  const nav = mark(balanced(src, navAt, 'nav'));
  const menu = mark(balanced(src, menuAt, 'div'));
  if (!nav.includes('href="/learn/"')) throw new Error('index.html: the site nav has no Learn link');
  const footer = balanced(src, footAt, 'footer');
  return {
    standalone: false,
    nav,
    menu,
    footer,
    icons: [
      '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
      '<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">',
      '<link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png">',
      '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    ],
  };
}

const FOOTER_SCRIPT = `<script>
    (function () {
        const menu = document.getElementById('mobile-menu');
        const openBtn = document.getElementById('mobile-menu-button');
        const closeBtn = document.getElementById('close-mobile-menu');
        if (menu && openBtn) openBtn.addEventListener('click', () => menu.classList.remove('translate-x-full'));
        if (menu && closeBtn) closeBtn.addEventListener('click', () => menu.classList.add('translate-x-full'));
        const y = document.getElementById('current-year');
        if (y) y.textContent = new Date().getFullYear();
        const t = document.getElementById('npt-time');
        if (t) {
            const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit', hour12: false });
            const tick = () => { t.textContent = fmt.format(new Date()); };
            tick(); setInterval(tick, 15000);
        }
        const btn = document.getElementById('copy-email');
        if (btn) btn.addEventListener('click', async () => {
            const label = btn.querySelector('span');
            try { await navigator.clipboard.writeText('saagarshrest@gmail.com'); label.textContent = 'Copied'; btn.classList.add('done'); }
            catch (e) { label.textContent = 'Press Ctrl+C'; }
            setTimeout(() => { label.textContent = 'Copy'; btn.classList.remove('done'); }, 1600);
        });
        const top = document.getElementById('back-to-top');
        if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    })();
</script>`;

/**
 * @param {{ standalone: boolean, nav: string, menu: string, footer: string, icons: string[] }} chrome
 * @param {{ title: string, description: string, path: string, body: string, header: string, active?: string, jsonld?: object, noindex?: boolean, version: string }} p
 */
export function page(chrome, p) {
  const url = SITE + p.path;
  const fullTitle = `${p.title} | UI/UX Design Academy`;
  const ga = GA_ID || (chrome.standalone ? '' : GA_DEFAULT);
  const ogImage = OG_IMAGE || (chrome.standalone ? `${PORTFOLIO_SITE}/images/og-default.png` : `${SITE}/images/og-default.png`);
  const analytics = ga ? `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${ga}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${ga}');
</script>
` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
${analytics}    <!-- Generated by learn-src/build.mjs. Edit the content in learn-src/, then run: node learn-src/build.mjs -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(fullTitle)}</title>
    <meta name="description" content="${esc(p.description)}">
    ${p.noindex ? '<meta name="robots" content="noindex">' : ''}
    ${chrome.icons.join('\n    ')}
    <link rel="canonical" href="${url}">
    ${ADSENSE_CLIENT ? `<meta name="adsense-account" content="${esc(ADSENSE_CLIENT)}">` : ''}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Saagar Shrestha">
    <meta property="og:locale" content="en_US">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${esc(fullTitle)}">
    <meta property="og:description" content="${esc(p.description)}">
    <meta property="og:image" content="${ogImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(fullTitle)}">
    <meta name="twitter:description" content="${esc(p.description)}">
    <meta name="twitter:image" content="${ogImage}">
    <meta name="author" content="Saagar Shrestha">
    ${p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld).replace(/</g, '\\u003c')}</script>` : ''}
    <script>document.documentElement.classList.add('js');</script>
    ${chrome.standalone ? '' : `<script src="https://cdn.tailwindcss.com"></script>
    <script>tailwind.config = { theme: { extend: { colors: { primary: '#0D0D0D', secondary: '#1E40AF', accent: '#F59E0B' } } } }</script>`}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
    ${chrome.standalone ? '' : '<link rel="stylesheet" href="/css/site.css">'}
    <link rel="stylesheet" href="/css/learn.css?v=${p.version}">
    ${adsenseScript()}
    ${chrome.standalone ? '' : `<!-- Buy me a coffee -->
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="saagarshrest" data-description="Support me on Buy me a coffee!" data-message="" data-color="#808080" data-position="Right" data-x_margin="18" data-y_margin="18"></script>`}
</head>

<body class="${chrome.standalone ? '' : 'bg-white '}la-body" data-no-pager>
<a href="#la-main" class="la-skip">Skip to content</a>
<!-- Navigation -->
${chrome.nav}

<!-- Mobile Navigation Menu -->
${chrome.menu}

${p.header}
<main id="la-main" class="la-main" tabindex="-1">
${p.body}
</main>

<!-- Footer -->
${chrome.footer}

${AppDock(p.active)}
${chrome.standalone ? '' : FOOTER_SCRIPT}
<script type="module" src="/js/learn/app.js?v=${p.version}"></script>
${chrome.standalone ? '' : `<script src="/js/pager.js"></script>
<script src="/js/nav-hero.js"></script>`}
</body>
</html>
`;
}
