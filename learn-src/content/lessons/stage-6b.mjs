// @ts-check
/* Stage 6 (part 2): UI design and design systems. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'mobile-first-desktop-first': {
    objectives: [
      'Compare mobile-first and desktop-first approaches.',
      'Choose an approach based on users, content and product type.',
      'Avoid the pitfalls of each approach.',
    ],
    explanation: `
<p><strong>Mobile-first</strong> means designing the smallest screen first, then enhancing for larger ones. <strong>Desktop-first</strong> starts with the large screen and adapts down.</p>
<h3>Mobile-first strengths</h3>
<p>Small screens force prioritisation: there is room only for what matters. Adding space later is easier than removing content. It suits consumer products where most traffic is mobile.</p>
<h3>Desktop-first strengths</h3>
<p>Some products are used mostly on large screens: data-heavy dashboards, professional tools, design and spreadsheet applications. Starting there lets you design for the dense, multi-panel workflows that matter most, then decide what a phone version should offer (often a subset).</p>
<h3>Choosing</h3>
<p>Look at analytics and research: which devices do people use for which tasks? Many products are mixed. A banking app might be mobile-first for checking balances, while its business version is desktop-first for bulk payments. Whichever you start with, design both ends before committing, and remember that "mobile-first" should not mean "mobile-only".</p>`,
    why: `
<p>The starting point shapes priorities. Starting in the wrong place leads to cramped phone layouts squeezed from desktop designs, or stretched desktop layouts that waste space. Choosing deliberately, based on evidence, produces better experiences on the devices that matter most.</p>`,
    example: `
<p>A recruitment platform has two sides. Candidates browse and apply for jobs, and 78% of them use phones. Recruiters review dozens of applications side by side, and 90% of them use laptops.</p>
<p>The team designs the candidate side mobile-first, focusing on quick browsing and a short application form. The recruiter side is desktop-first, with a split view of list and detail. A phone version for recruiters focuses on the few tasks they do on the move: reading new applications and replying to messages.</p>`,
    walkthrough: [
      { title: 'Check the data', body: 'Look at device usage by task.' },
      { title: 'Choose a starting point per area', body: 'Decide mobile-first or desktop-first for each part of the product.' },
      { title: 'Prioritise content', body: 'List what is essential on the smallest screen.' },
      { title: 'Design both ends early', body: 'Sketch the largest and smallest versions before detailing either.' },
      { title: 'Fill in the middle', body: 'Design tablet and intermediate widths.' },
      { title: 'Validate', body: 'Test key tasks on real devices.' },
    ],
    mistakes: [
      { mistake: 'Choosing by habit.', fix: 'Choose based on device data per task.' },
      { mistake: 'Mobile-first that strips useful features from desktop.', fix: 'Enhance for larger screens; do not limit them.' },
      { mistake: 'Desktop designs squeezed onto phones.', fix: 'Rethink content and tasks for small screens.' },
    ],
    quiz: [
      { q: 'What is a key strength of mobile-first?', options: ['It forces prioritisation', 'It is always faster', 'It suits every product'], answer: 0, explain: 'Limited space forces focus.' },
      { q: 'When does desktop-first make sense?', options: ['Never', 'For dense professional tools used mainly on large screens', 'For all consumer apps'], answer: 1, explain: 'Start where the main work happens.' },
      { q: 'What should decide the approach?', options: ['Personal preference', 'Device usage data per task', 'The latest trend'], answer: 1, explain: 'Evidence beats habit.' },
    ],
    exercise: {
      title: 'Choose and justify',
      minutes: 45,
      brief: '<p>Pick a product with two user groups and choose an approach for each.</p>',
      steps: [
        'Describe both user groups and their main tasks.',
        'Estimate or find device usage for each.',
        'Choose an approach for each and justify it.',
        'Sketch both ends for one key screen.',
      ],
      deliverable: 'A one-page decision note with sketches.',
    },
    checklist: [
      'I used device data.',
      'I chose per area or task.',
      'I designed both ends early.',
      'I avoided treating mobile-first as mobile-only.',
    ],
    summary: [
      'Mobile-first forces prioritisation; desktop-first suits dense tools.',
      'Choose by device usage per task.',
      'Products may use both approaches in different areas.',
      'Design both ends before committing.',
    ],
    reading: [
      { title: 'Mobile first is not mobile only', url: 'https://www.nngroup.com/articles/mobile-first-not-mobile-only/', source: 'Nielsen Norman Group' },
      { title: 'Responsive web design basics', url: 'https://web.dev/articles/responsive-web-design-basics', source: 'web.dev' },
    ],
  },

  'density-touch-targets': {
    objectives: [
      'Choose an appropriate information density for different contexts.',
      'Apply minimum touch target sizes and spacing.',
      'Offer density options where users need them.',
    ],
    explanation: `
<p><strong>Density</strong> is how much information fits in a given space. High density suits experts who scan lots of data, such as traders and analysts. Low density suits occasional users, touch screens and calm experiences.</p>
<h3>Touch targets</h3>
<p>Fingers are less precise than mouse pointers. Common guidance:</p>
<ul>
<li>Apple suggests at least 44 by 44 points; Material Design suggests 48 by 48 density-independent pixels.</li>
<li>WCAG 2.2 sets a minimum of 24 by 24 CSS pixels (with exceptions) and recommends 44 by 44 at the enhanced level.</li>
<li>Leave enough space between targets so people do not tap the wrong one.</li>
</ul>
<p>A small icon can have a larger invisible target area around it, so the visual size and the tappable size can differ.</p>
<h3>Density options</h3>
<p>Professional tools often offer compact, comfortable and spacious modes. These can be built with spacing tokens and modes. Keep touch targets large enough even in compact mode on touch devices.</p>`,
    why: `
<p>The right density makes products efficient for experts and approachable for newcomers. Small or crowded targets cause mis-taps, frustration and errors, especially for people with motor impairments, older users and anyone using a phone on the move. Target size is also an accessibility requirement.</p>`,
    example: `
<p>A field engineering app shows job lists with small "Start" and "Cancel" icons placed 4px apart. Engineers wearing gloves often cancel jobs by mistake.</p>
<p>The designer increases tappable areas to 48px, separates the destructive action, adds a confirmation for cancelling and introduces a "comfortable" density by default on phones. Accidental cancellations drop sharply, while office staff using the web version keep a compact table view.</p>`,
    walkthrough: [
      { title: 'Identify context', body: 'Note who uses the screen, how often and on what device.' },
      { title: 'Choose density', body: 'Decide the base density for that context.' },
      { title: 'Check targets', body: 'Measure tappable areas against guidelines.' },
      { title: 'Check spacing', body: 'Make sure adjacent targets are not too close, especially destructive ones.' },
      { title: 'Add density modes', body: 'Where needed, define compact and comfortable spacing tokens.' },
      { title: 'Test on device', body: 'Try key actions on a phone, one-handed.' },
    ],
    mistakes: [
      { mistake: 'Tiny icon buttons on touch screens.', fix: 'Extend the tappable area to at least 44–48px.' },
      { mistake: 'Destructive actions next to common ones.', fix: 'Separate them and confirm where appropriate.' },
      { mistake: 'One density for every user.', fix: 'Offer options for expert, data-heavy contexts.' },
    ],
    quiz: [
      { q: 'What is a common minimum touch target?', options: ['16px', 'About 44–48px', '100px'], answer: 1, explain: 'Platform guidance sits around 44–48.' },
      { q: 'Can the tappable area be bigger than the visible icon?', options: ['Yes', 'No'], answer: 0, explain: 'Invisible padding increases the target.' },
      { q: 'Who benefits most from high density?', options: ['First-time users', 'Experts scanning lots of data', 'Children'], answer: 1, explain: 'Experts value seeing more at once.' },
    ],
    exercise: {
      title: 'Target audit',
      minutes: 30,
      brief: '<p>Audit touch targets on a mobile app you use.</p>',
      steps: [
        'Screenshot three screens.',
        'Measure the tappable areas you can identify.',
        'Mark any below guidance or too close together.',
        'Redesign one problem area.',
      ],
      deliverable: 'An annotated audit and one redesign.',
    },
    checklist: [
      'Density fits the context.',
      'Targets meet minimum sizes.',
      'Destructive actions are separated.',
      'I tested on a real device.',
    ],
    summary: [
      'Density should match users and context.',
      'Touch targets need about 44–48px with spacing.',
      'Tappable areas can exceed visual size.',
      'Offer density modes for expert tools.',
    ],
    reading: [
      { title: 'Target size (minimum), WCAG 2.5.8', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', source: 'W3C WAI' },
      { title: 'Accessible tap targets', url: 'https://web.dev/articles/accessible-tap-targets', source: 'web.dev' },
    ],
  },

  'dark-themes': {
    objectives: [
      'Design dark themes that are comfortable and accessible.',
      'Adapt colour, elevation and imagery for dark backgrounds.',
      'Implement themes with semantic tokens and modes.',
    ],
    explanation: `
<p>A <strong>dark theme</strong> uses dark surfaces with light text. People choose it for comfort in low light, personal preference or battery saving on some screens. It is not simply inverted colours.</p>
<h3>Key principles</h3>
<ul>
<li><strong>Avoid pure black and pure white.</strong> Use dark greys for surfaces and slightly off-white text to reduce glare and halo effects.</li>
<li><strong>Desaturate colours.</strong> Bright saturated colours vibrate on dark backgrounds; use lighter, softer versions.</li>
<li><strong>Elevation with lightness.</strong> Shadows are hard to see on dark surfaces, so raised surfaces are usually slightly lighter.</li>
<li><strong>Check contrast again.</strong> Every text and UI colour needs re-testing in the dark theme.</li>
<li><strong>Images and illustrations</strong> may need dark versions, and logos may need light variants.</li>
</ul>
<h3>Implementation</h3>
<p>Use semantic tokens such as <code>surface/default</code> and <code>text/primary</code> with Light and Dark modes. Components never reference raw colours, so switching theme is automatic. Respect the operating system setting by default and let people override it.</p>`,
    why: `
<p>Many people now expect a dark theme, and some need it to reduce eye strain or light sensitivity. A poorly made dark theme, with harsh contrast, vibrating colours or invisible elevation, is worse than none. Token-based theming makes it maintainable.</p>`,
    example: `
<p>A podcast app adds a dark theme by inverting colours. The pure white text on pure black looks harsh, the bright brand orange buzzes, cards are indistinguishable from the background and the logo disappears.</p>
<p>The team redesigns with a #121212-style dark grey base, lighter surfaces for raised cards, off-white text, a softer orange for actions and a light logo variant. Everything is driven by semantic tokens with two modes, and contrast is checked for every pairing.</p>`,
    walkthrough: [
      { title: 'Set up semantic tokens', body: 'Make surface, text, border and action tokens with Light and Dark modes.' },
      { title: 'Choose surfaces', body: 'Pick a dark grey base and lighter steps for elevation.' },
      { title: 'Adjust colours', body: 'Create softer versions of brand and status colours.' },
      { title: 'Check contrast', body: 'Test every text and UI colour pair.' },
      { title: 'Handle imagery', body: 'Prepare dark-friendly illustrations and logo variants.' },
      { title: 'Test in context', body: 'Use the theme in a dark room and in daylight.' },
    ],
    mistakes: [
      { mistake: 'Simply inverting colours.', fix: 'Design the dark theme deliberately.' },
      { mistake: 'Pure black with pure white text.', fix: 'Use dark grey and off-white.' },
      { mistake: 'Relying on shadows for elevation.', fix: 'Use lighter surfaces for raised elements.' },
    ],
    quiz: [
      { q: 'Why avoid pure white text on pure black?', options: ['It uses more battery', 'It can cause glare and halo effects', 'It is not allowed'], answer: 1, explain: 'Slightly softer values are more comfortable.' },
      { q: 'How is elevation usually shown in dark themes?', options: ['Darker shadows', 'Lighter surfaces', 'Thicker borders'], answer: 1, explain: 'Shadows are hard to see on dark surfaces.' },
      { q: 'What makes theme switching maintainable?', options: ['Duplicating screens', 'Semantic tokens with modes', 'Separate files'], answer: 1, explain: 'Components use tokens that change by mode.' },
    ],
    exercise: {
      title: 'Dark theme',
      minutes: 60,
      brief: '<p>Create a dark theme for one of your screens.</p>',
      steps: [
        'Convert colours to semantic tokens with two modes.',
        'Design surfaces and elevation.',
        'Adjust brand and status colours.',
        'Check contrast for all pairs.',
      ],
      deliverable: 'The screen in light and dark themes with a contrast table.',
    },
    checklist: [
      'I used semantic tokens with modes.',
      'Surfaces avoid pure black.',
      'Colours are softened.',
      'All contrast is checked.',
    ],
    summary: [
      'Dark themes are designed, not inverted.',
      'Use dark greys, off-white text and softer colours.',
      'Show elevation with lighter surfaces.',
      'Implement with semantic tokens and modes.',
    ],
    reading: [
      { title: 'prefers-color-scheme', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme', source: 'MDN Web Docs' },
      { title: 'Colour roles', url: 'https://m3.material.io/styles/color/roles', source: 'Material Design 3' },
    ],
  },

  'ui-states-in-practice': {
    objectives: [
      'Design the full lifecycle of a screen: first use, loading, partial, ideal, error and empty.',
      'Write helpful copy for each state.',
      'Plan states before visual design.',
    ],
    explanation: `
<p>Screens are not static. A useful model is that every screen has several states during its life:</p>
<ul>
<li><strong>Blank or first use</strong>: nothing has been created yet. Explain value and guide the first action.</li>
<li><strong>Loading</strong>: show progress. Skeleton screens work for content layouts; spinners for short waits.</li>
<li><strong>Partial</strong>: some data exists. Encourage the next step.</li>
<li><strong>Ideal</strong>: the screen as normally designed.</li>
<li><strong>Too much</strong>: very long lists, huge numbers. Use pagination, truncation and summaries.</li>
<li><strong>Error</strong>: something failed. Explain what happened and how to recover, keeping people's work.</li>
<li><strong>No results</strong>: a search or filter returned nothing. Suggest how to broaden it.</li>
<li><strong>Offline</strong>: show what is available and what will sync later.</li>
</ul>
<h3>Copy carries states</h3>
<p>Each state needs clear, human copy: what happened, why and what to do. Avoid blame and technical jargon.</p>`,
    why: `
<p>People spend more time in non-ideal states than designers expect, especially new users who start with empty screens and anyone on a poor connection. Well-designed states reduce support requests, help people recover and keep trust. In Stage 4 you sketched them; here you design them to production quality.</p>`,
    example: `
<p>A shared expenses app shows a blank white screen for new groups, a spinner for up to ten seconds on slow connections and "Error 500" when sync fails.</p>
<p>The redesign shows an illustrated first-use state: "Add your first expense — everyone will see it instantly", a skeleton list while loading, a partial state suggesting inviting friends, and an error banner: "We couldn't sync your latest expense. It's saved on this phone and we'll try again automatically." Support tickets about "lost" expenses fall noticeably.</p>`,
    walkthrough: [
      { title: 'List states', body: 'For one key screen, list every state from the model.' },
      { title: 'Prioritise', body: 'Mark which are most common or most risky.' },
      { title: 'Write copy first', body: 'Draft what each state says before designing it.' },
      { title: 'Design each state', body: 'Use system components for alerts, skeletons and empty states.' },
      { title: 'Link them', body: 'Prototype transitions between loading, ideal and error.' },
      { title: 'Review with support', body: 'Ask support staff which states cause most questions.' },
    ],
    mistakes: [
      { mistake: 'Designing only the ideal state.', fix: 'Design the full lifecycle.' },
      { mistake: 'Technical error messages.', fix: 'Explain in plain language with a way forward.' },
      { mistake: 'Losing user input on errors.', fix: 'Keep work and allow retry.' },
    ],
    quiz: [
      { q: 'What should a first-use state do?', options: ['Show nothing', 'Explain value and guide the first action', 'Show an error'], answer: 1, explain: 'Help people get started.' },
      { q: 'When are skeleton screens useful?', options: ['For content layouts while loading', 'For errors', 'For offline mode'], answer: 0, explain: 'They show structure while data loads.' },
      { q: 'What should an error state include?', options: ['A code only', 'What happened and how to recover', 'Nothing'], answer: 1, explain: 'Recovery is the priority.' },
    ],
    exercise: {
      title: 'Screen lifecycle',
      minutes: 75,
      brief: '<p>Design the full lifecycle of a notifications screen.</p>',
      steps: [
        'List the states.',
        'Write copy for each.',
        'Design at least six states.',
        'Prototype loading to ideal and loading to error.',
      ],
      deliverable: 'A set of state frames with copy and a short prototype.',
    },
    checklist: [
      'I designed the full lifecycle.',
      'Copy is clear and kind.',
      'Errors preserve user work.',
      'Transitions are prototyped.',
    ],
    summary: [
      'Screens move through many states.',
      'Design first use, loading, partial, ideal, too much, error, no results and offline.',
      'Copy carries the meaning of each state.',
      'Good states reduce support and build trust.',
    ],
    reading: [
      { title: 'Designing empty states in complex applications', url: 'https://www.nngroup.com/articles/empty-state-interface-design/', source: 'Nielsen Norman Group' },
      { title: 'Error message guidelines', url: 'https://www.nngroup.com/articles/error-message-guidelines/', source: 'Nielsen Norman Group' },
    ],
  },

  'i18n-long-content': {
    objectives: [
      'Design layouts that cope with translation and long content.',
      'Handle right-to-left languages, dates, numbers and names.',
      'Test designs with realistic international content.',
    ],
    explanation: `
<p><strong>Internationalisation (i18n)</strong> is designing so a product can be adapted to different languages and regions. <strong>Localisation (l10n)</strong> is the actual adaptation.</p>
<h3>Text length</h3>
<p>Translations are often longer than English: German and Finnish can be 30% or more longer, and short labels can double. Some languages are shorter but taller, with larger characters. Design flexible components that wrap, avoid fixed widths for text and avoid putting text in images.</p>
<h3>Direction</h3>
<p>Arabic, Hebrew and Persian read right to left (RTL). Layouts mirror: navigation, back arrows and progress move to the other side. Some icons should not mirror, such as a play button or a clock.</p>
<h3>Formats</h3>
<p>Dates, times, numbers, currencies, addresses, phone numbers and names vary by region. Use locale-aware formatting and do not assume a first name and surname structure.</p>
<h3>Long content in general</h3>
<p>Even without translation, real content is messy: very long names, product titles and email addresses. Decide truncation rules and always make the full text available somewhere.</p>`,
    why: `
<p>Products that break when translated are expensive to fix later and exclude large audiences. Designing for long and international content from the start is cheaper and produces sturdier components that also handle long names and user-generated content in your own language.</p>`,
    example: `
<p>An e-commerce site launches in Germany. The "Add to basket" button becomes "In den Warenkorb legen" and overflows the fixed-width button. The address form requires a "State" field that does not apply, and dates appear in month-first order that German shoppers misread.</p>
<p>The team rebuilds buttons to hug content and wrap, uses locale-aware date and price formatting, and creates country-specific address forms. Before the next launch in the UAE, they test RTL layouts and Arabic text in the prototypes.</p>`,
    walkthrough: [
      { title: 'Stress-test text', body: 'Replace labels with text 40% longer and see what breaks.' },
      { title: 'Use pseudo-localisation', body: 'Add accents and padding to text, such as [Àççôûñţ šéţţîñĝš ___], to find hard-coded strings and overflow.' },
      { title: 'Mirror for RTL', body: 'Create an RTL version of a key screen and check icons.' },
      { title: 'Check formats', body: 'List dates, numbers, money, addresses and names on the screen and how they vary.' },
      { title: 'Set truncation rules', body: 'Decide where text truncates and how full text is revealed.' },
      { title: 'Document', body: 'Add i18n notes to components.' },
    ],
    mistakes: [
      { mistake: 'Fixed-width buttons and labels.', fix: 'Use hug and wrap behaviour.' },
      { mistake: 'Text inside images.', fix: 'Keep text as live text.' },
      { mistake: 'Assuming name and address formats.', fix: 'Use flexible, locale-aware fields.' },
    ],
    quiz: [
      { q: 'How much longer can translations be?', options: ['Never longer', 'Often 30% or more', 'Exactly the same'], answer: 1, explain: 'Plan for expansion.' },
      { q: 'Which icon should not usually mirror in RTL?', options: ['Back arrow', 'Play button', 'Progress direction'], answer: 1, explain: 'Media controls keep their direction.' },
      { q: 'What is pseudo-localisation?', options: ['Real translation', 'Modified text to reveal overflow and hard-coded strings', 'A font'], answer: 1, explain: 'It is a cheap test before translation.' },
    ],
    exercise: {
      title: 'International stress test',
      minutes: 60,
      brief: '<p>Stress-test one screen for international use.</p>',
      steps: [
        'Expand all text by 40% and fix overflow.',
        'Create an RTL version.',
        'Swap in international names, addresses and prices.',
        'Write five i18n notes for developers.',
      ],
      deliverable: 'Before and after frames, an RTL frame and i18n notes.',
    },
    checklist: [
      'Components handle long text.',
      'I tested RTL.',
      'Formats are locale-aware.',
      'Truncation rules are defined.',
    ],
    summary: [
      'Design for longer text and different scripts.',
      'Mirror layouts for RTL, but not every icon.',
      'Use locale-aware formats and flexible fields.',
      'Test with realistic international content early.',
    ],
    reading: [
      { title: 'Internationalization', url: 'https://www.w3.org/International/questions/qa-i18n', source: 'W3C' },
      { title: 'Personal names around the world', url: 'https://www.w3.org/International/questions/qa-personal-names', source: 'W3C' },
    ],
  },

  'documenting-design-systems': {
    objectives: [
      'Write component documentation people actually use.',
      'Include usage guidance, examples, accessibility and code links.',
      'Keep documentation up to date with contribution and versioning.',
    ],
    explanation: `
<p>A design system is only as good as its documentation. Components without guidance get misused or ignored.</p>
<h3>What a component page includes</h3>
<ul>
<li><strong>Summary</strong>: what it is and when to use it.</li>
<li><strong>When not to use it</strong>, and what to use instead.</li>
<li><strong>Anatomy</strong>: labelled parts.</li>
<li><strong>Variants and states</strong> with examples.</li>
<li><strong>Content guidance</strong>: label length, tone, capitalisation.</li>
<li><strong>Accessibility</strong>: keyboard behaviour, screen reader labels, focus.</li>
<li><strong>Code</strong>: link to the implementation and props.</li>
<li><strong>Research</strong>: evidence that supports the design, if any.</li>
</ul>
<h3>Keeping it alive</h3>
<p>Documentation goes stale quickly. Define a <strong>contribution process</strong> (how teams propose changes), <strong>version</strong> the system with release notes, and assign ownership. Mark components as experimental, stable or deprecated so people know what they can rely on.</p>`,
    why: `
<p>Good documentation turns a component library into a shared language. It helps new designers and developers learn quickly, reduces repeated questions and keeps products consistent. Clear status and release notes build trust that the system is maintained.</p>`,
    example: `
<p>A team's modal component is used for everything from confirmations to multi-step forms. Users complain about modals inside modals and lost work.</p>
<p>The system team writes a modal page: when to use it (short, focused tasks), when not to (long forms, which should be full pages), anatomy, keyboard behaviour (focus trap, Escape to close, return focus), content guidance and a link to the coded component. They mark the old "large form modal" as deprecated. Misuse drops in the next quarter's audit.</p>`,
    walkthrough: [
      { title: 'Choose a component', body: 'Pick one that is often misused.' },
      { title: 'Write when and when not', body: 'Describe appropriate and inappropriate uses.' },
      { title: 'Label anatomy', body: 'Create a labelled diagram.' },
      { title: 'Add examples', body: 'Show good and bad examples side by side.' },
      { title: 'Add accessibility and code', body: 'Document keyboard and screen reader behaviour and link the code.' },
      { title: 'Set status and owner', body: 'Mark status and name who maintains it.' },
    ],
    mistakes: [
      { mistake: 'Documenting only what a component looks like.', fix: 'Explain when and why to use it.' },
      { mistake: 'No accessibility guidance.', fix: 'Document keyboard, focus and labels.' },
      { mistake: 'No owner or status.', fix: 'Assign ownership and mark status.' },
    ],
    quiz: [
      { q: 'What is most often missing from component docs?', options: ['Screenshots', 'When not to use it', 'Colours'], answer: 1, explain: 'Guidance on misuse prevents problems.' },
      { q: 'Why mark components as deprecated?', options: ['To hide them forever', 'So people stop using them and know what replaces them', 'For fun'], answer: 1, explain: 'Status guides adoption.' },
      { q: 'What keeps documentation alive?', options: ['Writing it once', 'Ownership, contribution process and release notes', 'More pages'], answer: 1, explain: 'Maintenance needs process.' },
    ],
    exercise: {
      title: 'Component page',
      minutes: 75,
      brief: '<p>Write a full documentation page for one component.</p>',
      steps: [
        'Pick a component from your system.',
        'Write all sections listed in this lesson.',
        'Include do and don\'t examples.',
        'Ask someone new to use the component following only your docs.',
      ],
      deliverable: 'A complete documentation page and feedback from a tester.',
    },
    checklist: [
      'The page covers when and when not.',
      'Anatomy, variants and states are shown.',
      'Accessibility and code are included.',
      'Status and owner are clear.',
    ],
    summary: [
      'Documentation makes components usable.',
      'Cover usage, anatomy, states, content, accessibility and code.',
      'Use contribution, versioning and status to keep it current.',
      'Good docs create a shared language.',
    ],
    reading: [
      { title: 'Modal dialog pattern', url: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/', source: 'W3C WAI ARIA Authoring Practices' },
      { title: 'GOV.UK Design System: components', url: 'https://design-system.service.gov.uk/components/', source: 'GOV.UK', note: 'Each page shows usage, research and accessibility notes.' },
    ],
  },
};
