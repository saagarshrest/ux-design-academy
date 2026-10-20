// @ts-check
/* =====================================================================
   Advertising.

   The AdSense loader is added to every page. It is asynchronous and
   carries no third-party cookies before it loads, and it only ever
   runs on pages the learner actually opens.

   ADSENSE_CLIENT overrides the publisher id, and ADSENSE_SLOT adds a
   named ad unit. Without a slot, AdSense auto ads still work.
   ===================================================================== */

/** The publisher id. Public: it appears in the page source anyway. */
export const ADSENSE_CLIENT = String(process.env.ADSENSE_CLIENT || 'ca-pub-9024176667555201').trim();

/** An optional ad unit id. Empty means auto ads only. */
export const ADSENSE_SLOT = String(process.env.ADSENSE_SLOT || '').trim();

/** The loader script, or an empty string when ads are switched off. */
export const adsenseScript = () => (ADSENSE_CLIENT
  ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}" crossorigin="anonymous"></script>`
  : '');
