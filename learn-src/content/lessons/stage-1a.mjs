// @ts-check
/* Stage 1 (part 1): Visual design fundamentals. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'visual-hierarchy': {
    objectives: [
      'Explain what visual hierarchy is and why people scan rather than read.',
      'Use size, weight, colour, contrast, position and space to set an order of importance.',
      'Test a design\'s hierarchy with the squint test and the five-second test.',
    ],
    explanation: `
<p><strong>Visual hierarchy</strong> is the order in which people notice things on a screen. A good hierarchy makes the most important thing the most noticeable, the next most important thing the next most noticeable, and so on. A poor hierarchy either makes everything equally loud, so nothing stands out, or makes the wrong thing loudest.</p>
<p>People rarely read interfaces word by word. They scan, looking for anything that matches what they came for, and only slow down when they find it. Hierarchy is how you guide that scan.</p>
<h3>The tools of hierarchy</h3>
<ul>
<li><strong>Size:</strong> larger elements are noticed first. This is the strongest and most overused tool.</li>
<li><strong>Weight:</strong> bold text stands out from regular text of the same size.</li>
<li><strong>Colour and contrast:</strong> high contrast against the background draws attention; muted colours recede. A single accent colour on an otherwise neutral screen is very powerful.</li>
<li><strong>Position:</strong> in left-to-right languages, people tend to start at the top left. Content near the top of a screen gets more attention than content far below.</li>
<li><strong>Space:</strong> an element surrounded by empty space feels more important than one crowded by neighbours.</li>
<li><strong>Shape and style:</strong> a filled button stands out from text links; an image stands out from text.</li>
</ul>
<p>Use as few tools as possible for each level. If a heading is already larger, it may not also need to be bold, coloured and underlined. Every extra signal you add to one element makes the others quieter, and you quickly run out of ways to make something stand out.</p>
<h3>Levels, not elements</h3>
<p>Most screens need only three or four levels of importance: the one thing people must see (the page purpose or main action), the supporting information they use to decide, the details they occasionally need, and the background chrome. Decide which level each element belongs to before you style it.</p>`,
    why: `
<p>Hierarchy decides whether people find what they came for. On a product page, if the price and the "Add to basket" button are no more prominent than the returns policy, people take longer to decide and some give up. On a dashboard, if every number is the same size, managers miss the one that changed.</p>
<p>It also makes collaboration easier. When you can explain hierarchy as levels of importance, decisions become discussable: "The delivery date is level two because people use it to decide" is a far better argument than "I think it looks better bigger".</p>`,
    example: `
<p>A food delivery app shows restaurant cards. The first version gives the restaurant name, cuisine, rating, delivery time, delivery fee and a "Free dessert" promotion the same font size and weight. In testing, people say they "can't tell the difference between the restaurants".</p>
<p>The redesign asks what people use to choose. Research with the app's users shows they pick a cuisine first, then compare delivery time and fees, and only then look at ratings. The new card makes the restaurant photo and name level one, puts delivery time and fee together on one line at level two, the rating and cuisine at level three in a muted colour, and the promotion as a small label on the photo. The cards become quicker to compare, and people stop missing the delivery fee.</p>`,
    figure: {
      html: `
<div class="fx-pair">
  <div class="fx-panel" role="img" aria-label="Before: a restaurant card where name, cuisine, rating, delivery time, fee and a promotion are all the same size and weight.">
    <span class="fx-panel__label is-bad">Before: everything equal</span>
    <div style="display:grid;gap:.35rem;font-size:.9rem;color:#444">
      <span>Himalayan Kitchen</span><span>Nepali, Tibetan</span><span>Rating 4.6</span><span>25 to 35 min</span><span>Delivery Rs 60</span><span>Free dessert today</span>
    </div>
  </div>
  <div class="fx-panel" role="img" aria-label="After: the restaurant name is large and bold. Delivery time and fee share one line in medium weight. Cuisine and rating are small and grey. The promotion is a small label.">
    <span class="fx-panel__label is-good">After: three clear levels</span>
    <div style="display:grid;gap:.3rem">
      <span style="justify-self:start;font-size:.7rem;padding:.15rem .45rem;border:1px solid #0A0A0A;border-radius:999px">Free dessert today</span>
      <span style="font-size:1.25rem;font-weight:600;letter-spacing:-.02em;color:#0A0A0A">Himalayan Kitchen</span>
      <span style="font-weight:500;color:#1B1B1A">25 to 35 min · Rs 60 delivery</span>
      <span style="font-size:.82rem;color:#57564F">Nepali, Tibetan · ★ 4.6</span>
    </div>
  </div>
</div>`,
      caption: 'The same content with three levels of importance. Size and weight lead, a muted colour pushes details back, and grouping puts time and fee together because people compare them.',
    },
    walkthrough: [
      { title: 'List every element on the screen', body: 'Write each piece of text, image and control on its own line.' },
      { title: 'Assign each one a level', body: 'Level 1 is what people must see first. Level 2 helps them decide. Level 3 is detail. Level 4 is background chrome. Be strict: usually only one or two things are level 1.' },
      { title: 'Choose one or two tools per level', body: 'For example: level 1 large and bold; level 2 medium size, regular weight, full contrast; level 3 small and muted.' },
      { title: 'Apply the levels consistently', body: 'Everything on the same level should look the same. If two level-2 items look different, people will assume they differ in importance.' },
      { title: 'Squint test', body: 'Step back or blur your eyes. What can you still see? It should be your level-1 items.' },
      { title: 'Five-second test', body: 'Show the design to someone for five seconds, hide it, and ask what they remember and what the page was for. If they remember the wrong thing, adjust.' },
    ],
    mistakes: [
      { mistake: 'Making everything bold or big because "it\'s all important".', fix: 'If everything is emphasised, nothing is. Rank ruthlessly; most things are level 3.' },
      { mistake: 'Using colour as the only way to signal importance.', fix: 'Combine colour with size, weight or position so the hierarchy still works in greyscale and for colour-blind users.' },
      { mistake: 'Letting decoration outrank content, for example a large illustration above the actual task.', fix: 'Ask whether the decoration helps people act. If not, shrink it or move it down.' },
      { mistake: 'Too many levels.', fix: 'Three or four are enough for most screens. More levels become indistinguishable.' },
    ],
    quiz: [
      { q: 'Which is the most reliable way to check a screen\'s hierarchy quickly?', options: ['Ask the client whether they like it', 'Blur or squint at it and see what remains visible', 'Count the number of colours'], answer: 1, explain: 'The squint test removes detail and leaves only the strongest signals, which is roughly what people notice first.' },
      { q: 'A heading is already twice the size of body text. What is usually the best next step?', options: ['Also make it bold, coloured and underlined', 'Leave it, or add only one more signal if it still does not stand out', 'Make the body text bigger too'], answer: 1, explain: 'Stacking signals uses up your emphasis tools and makes it hard to distinguish other levels.' },
      { q: 'How many levels of importance do most screens need?', options: ['One', 'Three or four', 'As many as there are elements'], answer: 1, explain: 'A small number of distinct levels is easier to perceive and keep consistent.' },
      { q: 'Why did grouping delivery time and fee together help in the example?', options: ['It looked tidier', 'People compare those two values when choosing, so seeing them together supports the decision', 'It saved space'], answer: 1, explain: 'Grouping and hierarchy should follow how people make decisions.' },
    ],
    exercise: {
      title: 'Hierarchy rebuild',
      minutes: 45,
      brief: '<p>Take a screenshot of a busy screen from an app or website you use (a product page, a bank account summary, an event listing). Redesign its hierarchy without adding or removing content.</p>',
      steps: [
        'List every element and assign it a level from 1 to 4.',
        'Write down which tools you will use for each level.',
        'Redesign the screen in a design tool or on paper using only those rules.',
        'Run the squint test on the original and your version, side by side.',
        'Run a five-second test with one person on each version and note what they remember.',
      ],
      deliverable: 'Before and after images, your level list, and the five-second test results.',
    },
    checklist: [
      'No more than two elements are level 1.',
      'Each level uses a consistent style.',
      'The hierarchy still works in greyscale.',
      'I tested with at least one other person.',
      'I did not add or remove content to "cheat".',
    ],
    summary: [
      'Hierarchy is the order in which people notice things; it guides scanning.',
      'Use size, weight, colour, position, space and style, but only one or two per level.',
      'Decide levels of importance first, then style them consistently.',
      'Check with the squint test and the five-second test.',
    ],
    reading: [
      { title: 'Visual Hierarchy in UX: Definition', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/', source: 'Nielsen Norman Group' },
      { title: '5 Principles of Visual Design in UX', url: 'https://www.nngroup.com/articles/principles-visual-design/', source: 'Nielsen Norman Group' },
    ],
  },

  'contrast-alignment-proximity': {
    objectives: [
      'Define contrast, balance, alignment, proximity and repetition.',
      'Spot violations of each principle in a real interface.',
      'Fix a layout by applying the principles deliberately.',
    ],
    explanation: `
<p>Five principles explain most of what makes a layout feel organised or messy. They are simple to state and take practice to apply well.</p>
<dl class="la-dl">
<dt>Contrast</dt><dd>Things that are different should look clearly different. If two elements are only slightly different (two greys that are nearly the same, two font sizes 1px apart), it looks like a mistake. Make differences decisive or remove them.</dd>
<dt>Balance</dt><dd>Visual weight should feel distributed, so the screen does not seem to tip to one side. Balance can be symmetrical (centred, formal) or asymmetrical (a large image on one side balanced by a block of text and generous space on the other). Interfaces usually use asymmetrical balance.</dd>
<dt>Alignment</dt><dd>Every element should line up with something else. Shared edges create invisible lines that the eye follows. A layout with many slightly different starting points looks careless even when people cannot say why.</dd>
<dt>Proximity</dt><dd>Things that are close together are seen as related. A label should be closer to its own field than to the field above. A heading should be closer to the content it introduces than to the content before it.</dd>
<dt>Repetition</dt><dd>Repeating the same styles for the same kinds of things (all cards alike, all section headings alike) creates consistency and helps people learn the interface. Repetition is the visual basis of a design system.</dd>
</dl>
<p>These principles work together. Proximity and alignment create groups, repetition makes similar groups recognisable, contrast separates the important from the rest, and balance makes the whole screen feel stable.</p>`,
    why: `
<p>When proximity is wrong, people attach labels to the wrong fields and fill forms incorrectly. When alignment is inconsistent, screens feel untrustworthy, which matters for payments, health and anything official. When repetition breaks, people stop recognising patterns and have to relearn each screen. These are not aesthetic details; they affect errors, speed and trust.</p>`,
    example: `
<p>A clinic's patient registration form has labels positioned exactly halfway between fields, so "Date of birth" seems to belong equally to the field above and below. Some fields start at different left edges because they were added at different times. The "Continue" button is centred while everything else is left-aligned.</p>
<p>The fix uses each principle: labels move to sit 4px above their own field with 24px between field groups (proximity); every label, field and the button share one left edge (alignment); all fields use one style (repetition); the "Continue" button becomes the only filled element (contrast). In a short test, people who previously typed their phone number into the email field stop doing so.</p>`,
    figure: {
      html: `
<div class="fx-pair">
  <div class="fx-panel" role="img" aria-label="Before: form labels sit halfway between fields, fields start at different left edges, and the button is centred.">
    <span class="fx-panel__label is-bad">Before</span>
    <div style="font-size:.85rem;color:#333">
      <div style="height:30px;border:1px solid #CCC;border-radius:6px;margin:0 0 9px 0"></div>
      <div style="margin:0 0 9px 6px">Email address</div>
      <div style="height:30px;border:1px solid #CCC;border-radius:6px;margin:0 0 9px 14px"></div>
      <div style="margin:0 0 9px 2px">Phone number</div>
      <div style="height:30px;border:1px solid #CCC;border-radius:6px;margin:0 0 14px 6px"></div>
      <div style="text-align:center"><span style="display:inline-block;padding:.35rem .9rem;border:1px solid #999;border-radius:6px">Continue</span></div>
    </div>
  </div>
  <div class="fx-panel" role="img" aria-label="After: each label sits directly above its own field, groups are separated by larger gaps, everything shares one left edge, and the button is the only filled element.">
    <span class="fx-panel__label is-good">After</span>
    <div style="font-size:.85rem;color:#1B1B1A">
      <div style="font-weight:500;margin-bottom:4px">Email address</div>
      <div style="height:30px;border:1px solid #777;border-radius:6px;margin-bottom:20px"></div>
      <div style="font-weight:500;margin-bottom:4px">Phone number</div>
      <div style="height:30px;border:1px solid #777;border-radius:6px;margin-bottom:20px"></div>
      <span style="display:inline-block;padding:.45rem 1rem;background:#0A0A0A;color:#fff;border-radius:6px">Continue</span>
    </div>
  </div>
</div>`,
      caption: 'Proximity ties each label to its field; one left edge creates alignment; the filled button creates contrast.',
    },
    walkthrough: [
      { title: 'Draw the alignment lines', body: 'Take a screenshot and draw vertical lines at every left edge. Count them. Fewer, deliberate lines are better.' },
      { title: 'Check every gap', body: 'Is the space inside each group clearly smaller than the space between groups? A useful starting rule is that the gap between groups is at least twice the gap within them.' },
      { title: 'Look for near-misses', body: 'Find elements that are almost the same but not quite: two slightly different greys, two button heights. Make them identical or clearly different.' },
      { title: 'Check repetition', body: 'Do all items of the same type share one style? List any exceptions and decide whether they are intentional.' },
      { title: 'Check balance', body: 'Squint. Does the screen feel heavier on one side or at the top? Adjust spacing or sizes until it feels settled.' },
    ],
    mistakes: [
      { mistake: 'Spacing everything equally.', fix: 'Equal spacing removes grouping. Use small gaps inside groups and larger gaps between them.' },
      { mistake: 'Centring some elements and left-aligning others on the same screen.', fix: 'Choose one alignment for each column of content. Centre only short, self-contained items such as an empty state.' },
      { mistake: 'Low-contrast differences that look accidental.', fix: 'Make differences obvious, or remove them.' },
      { mistake: 'Drawing boxes around everything to group it.', fix: 'Try spacing first. Borders add visual noise; space often groups more cleanly.' },
    ],
    quiz: [
      { q: 'A label sits exactly halfway between two input fields. Which principle is broken?', options: ['Repetition', 'Proximity', 'Balance'], answer: 1, explain: 'Proximity shows relationships. The label must be visibly closer to the field it describes.' },
      { q: 'Two buttons are 40px and 42px tall. What is the best fix?', options: ['Leave it, nobody will notice', 'Make them the same height, or clearly different if they have different roles', 'Add a border to one of them'], answer: 1, explain: 'Small, accidental differences look like errors. Contrast should be decisive.' },
      { q: 'Which principle is the visual basis of a design system?', options: ['Repetition', 'Balance', 'Symmetry'], answer: 0, explain: 'Repeating the same styles for the same things is what a design system formalises.' },
    ],
    exercise: {
      title: 'Fix a form layout with five principles',
      minutes: 35,
      brief: '<p>Find a form on any website (contact, sign-up, checkout). Recreate it roughly in a design tool, then fix it using the five principles.</p>',
      steps: [
        'Recreate the form, keeping its spacing and alignment.',
        'Annotate every problem, labelled with the principle it breaks.',
        'Fix proximity and alignment first, then repetition, then contrast.',
        'Check balance last.',
        'Put the before and after side by side with annotations.',
      ],
      deliverable: 'An annotated before and after comparison.',
    },
    checklist: [
      'Every problem is labelled with a principle.',
      'Gaps between groups are clearly larger than gaps within groups.',
      'The fixed form uses one left edge.',
      'Only the primary action uses the strongest visual style.',
    ],
    summary: [
      'Contrast: make differences decisive.',
      'Balance: distribute visual weight so the screen feels stable.',
      'Alignment: line every element up with something.',
      'Proximity: put related things together and unrelated things apart.',
      'Repetition: style the same things the same way.',
    ],
    reading: [
      { title: '5 Principles of Visual Design in UX', url: 'https://www.nngroup.com/articles/principles-visual-design/', source: 'Nielsen Norman Group' },
      { title: 'Proximity Principle in Visual Design', url: 'https://www.nngroup.com/articles/gestalt-proximity/', source: 'Nielsen Norman Group' },
    ],
  },

  'gestalt-principles': {
    objectives: [
      'Name and recognise six Gestalt principles: proximity, similarity, common region, continuity, closure and figure-ground.',
      'Predict how people will group elements on a screen.',
      'Use these principles to create grouping without extra decoration.',
    ],
    explanation: `
<p>Gestalt psychology, developed in the early twentieth century, studied how people perceive whole patterns rather than separate parts. Its principles are useful because they predict, quite reliably, what people will see as belonging together. You cannot switch these perceptions off, so it is better to design with them.</p>
<dl class="la-dl">
<dt>Proximity</dt><dd>Elements close together are seen as a group. This is usually the strongest and simplest grouping tool.</dd>
<dt>Similarity</dt><dd>Elements that look alike (same colour, shape, size or style) are seen as related, even when spread apart. Links share a style for this reason.</dd>
<dt>Common region</dt><dd>Elements inside the same boundary, such as a card or a shaded panel, are seen as a group, even if they are not close together.</dd>
<dt>Continuity</dt><dd>The eye follows lines and curves. Elements arranged on a line or path are seen as related and in sequence, which is why aligned items feel connected and why step indicators work.</dd>
<dt>Closure</dt><dd>People complete incomplete shapes. An icon made of a few strokes still reads as a whole object; a partially visible card at the edge of a carousel suggests there is more to scroll.</dd>
<dt>Figure-ground</dt><dd>People separate a foreground object from its background. Dialogs, dropdowns and sticky headers rely on it, often using shadow or a dimmed background to make the figure clear.</dd>
</dl>
<p>When principles conflict, stronger cues usually win. Common region tends to override proximity, which is why a card border can group items that are spaced apart. Use that knowledge deliberately: if your grouping is unclear, check whether two principles are pulling in different directions.</p>`,
    why: `
<p>Every grouping decision on a screen relies on these principles: which price belongs to which product, which error belongs to which field, which options are alternatives. Wrong grouping causes real errors. Knowing the principles also helps you remove unnecessary borders and boxes, because space and similarity can do the same job with less clutter.</p>`,
    example: `
<p>A settings screen shows twelve toggles in a single list. People struggle to find the notification settings. The designer groups related toggles with larger gaps between groups and a short heading above each (proximity), keeps all toggles visually identical so they are recognised as the same kind of control (similarity), and puts the risky "Delete account" action in a separate panel at the bottom with a different style (common region and contrast). No new content is added, yet finding a setting becomes faster because the structure is visible.</p>
<p>In a second example, a carousel of product cards shows the last card cut off at the screen edge. That partial card uses closure to suggest more content, an affordance that a full row of perfectly fitting cards would not have.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 660 260" role="img" aria-labelledby="fx-gest-t">
  <title id="fx-gest-t">Four Gestalt principles. Proximity: twelve dots in three clusters read as three groups. Similarity: a grid of circles where some are filled reads as rows of filled and outlined circles. Common region: two dots inside a rounded box read as a pair. Closure: three corner strokes read as a square.</title>
  <g transform="translate(20,40)">
    <text x="0" y="-14" class="fx-t-label">Proximity</text>
    ${[0, 1, 2].map((gx) => [0, 1].map((r) => [0, 1].map((c) => `<circle cx="${gx * 46 + c * 16 + 8}" cy="${r * 16 + 30}" r="5" class="fx-dot"/>`).join('')).join('')).join('')}
    <text x="0" y="110" class="fx-t-sm">Seen as three groups</text>
  </g>
  <g transform="translate(190,40)">
    <text x="0" y="-14" class="fx-t-label">Similarity</text>
    ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => `<circle cx="${c * 22 + 8}" cy="${r * 18 + 14}" r="6" ${r % 2 ? 'class="fx-dot"' : 'fill="none" stroke="#0A0A0A" stroke-width="1.5"'}/>`).join('')).join('')}
    <text x="0" y="110" class="fx-t-sm">Seen as rows</text>
  </g>
  <g transform="translate(350,40)">
    <text x="0" y="-14" class="fx-t-label">Common region</text>
    <rect x="34" y="14" width="64" height="46" rx="10" fill="none" stroke="#1E40AF" stroke-width="1.5"/>
    ${[0, 1, 2, 3].map((c) => `<circle cx="${c * 30 + 18}" cy="37" r="6" class="fx-dot"/>`).join('')}
    <text x="0" y="110" class="fx-t-sm">The boxed pair belongs together</text>
  </g>
  <g transform="translate(540,40)">
    <text x="0" y="-14" class="fx-t-label">Closure</text>
    <path d="M10 30 V10 H30 M70 10 H90 V30 M90 70 V90 H70 M30 90 H10 V70" class="fx-line"/>
    <text x="0" y="110" class="fx-t-sm">Seen as a square</text>
  </g>
</svg>`,
      caption: 'Four principles at work. In interfaces, the same effects decide which label, price or error belongs to which element.',
    },
    walkthrough: [
      { title: 'Pick a busy screen', body: 'A settings page, a dashboard or a long form works well.' },
      { title: 'Circle the groups you see', body: 'Without reading the text, circle what looks grouped. Then read the content and circle what should be grouped.' },
      { title: 'Compare the two', body: 'Where the circles differ, identify which principle is creating the wrong grouping.' },
      { title: 'Fix with the lightest principle first', body: 'Try proximity (spacing) before adding borders or backgrounds. Add common region only when spacing is not enough.' },
      { title: 'Check similarity', body: 'Make sure things that behave alike look alike, and things that behave differently look different.' },
    ],
    mistakes: [
      { mistake: 'Adding borders to every group.', fix: 'Use space first; borders and backgrounds add clutter and should be reserved for strong grouping.' },
      { mistake: 'Styling a non-clickable element like a link or button.', fix: 'Similarity makes people assume it behaves the same. Keep interactive styles exclusive to interactive elements.' },
      { mistake: 'Letting a card boundary group unrelated content.', fix: 'Common region is strong. Only put things in the same card if they truly belong together.' },
    ],
    quiz: [
      { q: 'A blue, underlined phrase in a paragraph is not a link. Which principle makes people try to click it?', options: ['Closure', 'Similarity', 'Figure-ground'], answer: 1, explain: 'It looks like the links elsewhere, so people assume it behaves like them.' },
      { q: 'Which principle explains why a partially visible card suggests more content to scroll?', options: ['Closure', 'Proximity', 'Common region'], answer: 0, explain: 'People mentally complete the cut-off shape and infer that more exists beyond the edge.' },
      { q: 'Spacing and a card border suggest different groupings. Which usually wins?', options: ['Spacing', 'The card border (common region)', 'Neither, people ignore both'], answer: 1, explain: 'Common region generally overrides proximity, so a boundary is a strong grouping signal.' },
    ],
    exercise: {
      title: 'Gestalt spotting walk',
      minutes: 30,
      brief: '<p>Find one clear example of each of the six principles in apps or websites you use.</p>',
      steps: [
        'Take a screenshot for each principle.',
        'Annotate where the principle appears and what grouping it creates.',
        'Find one example where a principle causes confusion.',
        'Suggest a fix for the confusing example.',
      ],
      deliverable: 'Six annotated screenshots plus one problem and fix.',
    },
    checklist: [
      'I found all six principles.',
      'Each annotation explains what grouping is created.',
      'My problem example names the conflicting principles.',
      'My fix uses the lightest effective tool.',
    ],
    summary: [
      'Gestalt principles predict how people group what they see.',
      'Proximity, similarity, common region, continuity, closure and figure-ground cover most interface situations.',
      'Stronger cues such as common region can override weaker ones.',
      'Use spacing first; add boundaries only when needed.',
    ],
    reading: [
      { title: 'Proximity Principle in Visual Design', url: 'https://www.nngroup.com/articles/gestalt-proximity/', source: 'Nielsen Norman Group' },
      { title: 'Laws of UX', url: 'https://lawsofux.com/', source: 'Jon Yablonski', note: 'Short summaries of perception and psychology principles, including several Gestalt principles.' },
    ],
  },

  'typography': {
    objectives: [
      'Choose a readable typeface for an interface and explain the choice.',
      'Build a small type scale with sizes, line heights and weights.',
      'Set body text for comfortable reading: size, line length, line height and contrast.',
      'Pair typefaces only when there is a reason, and avoid common pairing mistakes.',
    ],
    explanation: `
<p>Most interfaces are mostly text. Typography is therefore the single biggest factor in how readable and professional a product feels.</p>
<h3>Choosing a typeface</h3>
<p>For interface text, prioritise legibility over personality. Good interface typefaces have a generous x-height (the height of lowercase letters), open shapes, clearly different characters (capital I, lowercase l and number 1 should not look identical), a range of weights, and support for the languages you need. Many well-made typefaces are free, including system fonts that load instantly. Choose one family for most uses; a second is optional.</p>
<h3>Type scale</h3>
<p>A <strong>type scale</strong> is a small set of sizes that you reuse everywhere. Some designers derive sizes from a ratio, for example multiplying by 1.25 each step (16, 20, 25, 31, 39). Others pick sizes by hand. Either way, keep it small: five to seven sizes cover most products. A fixed scale makes hierarchy consistent and speeds up decisions.</p>
<h3>Readability of body text</h3>
<ul>
<li><strong>Size:</strong> 16px is a common minimum for body text on the web; reading-heavy pages often use 17 to 20px.</li>
<li><strong>Line height:</strong> around 1.4 to 1.7 times the font size for body text. Headings need tighter line height, around 1.1 to 1.3.</li>
<li><strong>Line length:</strong> roughly 45 to 75 characters per line is a widely used guideline. Very long lines make it hard to find the start of the next line.</li>
<li><strong>Contrast:</strong> body text should meet at least 4.5:1 against its background (WCAG AA).</li>
<li><strong>Alignment:</strong> left-align body text in left-to-right languages. Justified text creates uneven gaps; centred text is hard to read beyond a few lines.</li>
<li><strong>Weights:</strong> two or three are usually enough, for example regular, medium and semibold.</li>
</ul>
<h3>Pairing</h3>
<p>Pairing two typefaces can add character, for example a serif for headings and a sans serif for body text. Pair only when it serves a purpose, choose typefaces with clearly different roles, and make sure they share similar proportions so they sit comfortably together. Two similar sans serifs side by side look like a mistake.</p>`,
    why: `
<p>Poor typography slows reading, increases errors and makes products feel untrustworthy. Small type and long lines make forms harder to fill in, especially for older readers and anyone on a small screen. A defined type scale also saves enormous time: instead of choosing a size each time, designers and developers pick from a short list, and screens stay consistent.</p>`,
    example: `
<p>A health information website uses 14px light grey text in lines over 120 characters long, and nine different heading sizes chosen over several years. Visitors, many of them older, report the articles are "hard to read" and they print them out.</p>
<p>The redesign sets body text at 18px with 1.6 line height in a high-contrast dark grey, limits the text column to about 68 characters, and replaces the nine heading sizes with three. The same articles are now readable on a phone without zooming, and the team can build new pages faster because every text style is predefined.</p>`,
    figure: {
      html: `
<div class="fx-panel" role="img" aria-label="A type scale with six steps: caption 13 pixels, body 17 pixels, lead 20 pixels, heading 3 at 21 pixels semibold, heading 2 at 27 pixels, heading 1 at 34 pixels. Each line shows the style name, size and line height.">
  <span class="fx-panel__label">Example type scale (ratio about 1.25)</span>
  <div style="display:grid;gap:.55rem;color:#0A0A0A">
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">H1 34/40</span><span style="font-size:34px;line-height:40px;font-weight:500;letter-spacing:-.03em">Book a class</span></div>
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">H2 27/32</span><span style="font-size:27px;line-height:32px;font-weight:500;letter-spacing:-.02em">This week</span></div>
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">H3 21/28</span><span style="font-size:21px;line-height:28px;font-weight:600">Tuesday evening</span></div>
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">Lead 20/30</span><span style="font-size:20px;line-height:30px;color:#57564F">Small groups, all levels welcome.</span></div>
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">Body 17/28</span><span style="font-size:17px;line-height:28px">Bring water and arrive ten minutes early.</span></div>
    <div style="display:flex;gap:1rem;align-items:baseline"><span style="width:4.5rem;font-size:.7rem;color:#57564F;flex:none">Caption 13/18</span><span style="font-size:13px;line-height:18px;color:#57564F">Prices include tax.</span></div>
  </div>
</div>`,
      caption: 'Six named styles cover a whole product. Larger sizes get tighter line height; body text gets generous line height.',
    },
    walkthrough: [
      { title: 'Choose the body size first', body: 'Start with body text because it is used most. Try 16 to 18px and read a full paragraph on a phone.' },
      { title: 'Set body line height and line length', body: 'Try a line height of 1.5 to 1.6 and limit the text column to roughly 60 to 75 characters.' },
      { title: 'Build the scale upwards', body: 'Pick a ratio such as 1.2 or 1.25, calculate four or five larger steps and one smaller step, and round them.' },
      { title: 'Assign roles', body: 'Name each size by role (caption, body, lead, h3, h2, h1) and decide its weight and line height.' },
      { title: 'Test on real content', body: 'Apply the scale to a real page with long headings, short headings, lists and captions. Adjust where it breaks.' },
      { title: 'Check mobile', body: 'Large headings often need to be smaller on phones. Define the mobile sizes too.' },
    ],
    mistakes: [
      { mistake: 'Light grey, thin body text because it "looks elegant".', fix: 'Use regular weight and check contrast meets at least 4.5:1.' },
      { mistake: 'Too many sizes and weights.', fix: 'Limit to five to seven sizes and two or three weights.' },
      { mistake: 'Full-width text on desktop.', fix: 'Constrain the reading column so lines stay roughly 45 to 75 characters.' },
      { mistake: 'Using all caps for long text.', fix: 'Reserve all caps for short labels, and add letter spacing when you use it.' },
    ],
    quiz: [
      { q: 'Which line length is commonly recommended for comfortable reading?', options: ['20 to 30 characters', 'Roughly 45 to 75 characters', '120 characters or more'], answer: 1, explain: 'Moderate line lengths make it easier to track from the end of one line to the start of the next.' },
      { q: 'Headings and body text should usually have…', options: ['the same line height', 'tighter line height for headings and looser for body text', 'tighter line height for body text'], answer: 1, explain: 'Large text looks spaced out with body-style line height; long paragraphs need more space between lines.' },
      { q: 'What is the main benefit of a defined type scale?', options: ['It looks modern', 'Consistent hierarchy and faster decisions for design and development', 'It allows more font sizes'], answer: 1, explain: 'A small set of reusable styles keeps screens consistent and saves time.' },
    ],
    exercise: {
      title: 'Build and apply a type scale',
      minutes: 40,
      brief: '<p>Create a type scale for a recipe website and apply it to one recipe page with a title, intro, ingredient list, numbered steps and a tip box.</p>',
      steps: [
        'Choose one typeface and justify it in two sentences.',
        'Define five to seven styles with size, line height and weight.',
        'Lay out the recipe page on mobile and desktop using only those styles.',
        'Check the body text contrast with a contrast checker.',
        'Ask someone to read the steps aloud from a phone and note any difficulty.',
      ],
      deliverable: 'A type scale table and the recipe page on mobile and desktop.',
    },
    assignment: {
      title: 'Typography audit',
      brief: '<p>Audit the typography of one real website. List every distinct text style you can find (size, weight, colour, line height). Propose a reduced scale and show three screens before and after applying it.</p>',
      deliverables: ['An inventory of existing styles', 'A proposed scale of seven styles or fewer', 'Three before and after comparisons'],
    },
    checklist: [
      'My scale has seven sizes or fewer.',
      'Body text is at least 16px with line height around 1.5.',
      'Body text contrast meets 4.5:1.',
      'Line length on desktop is roughly 45 to 75 characters.',
      'Every text element uses a named style.',
    ],
    summary: [
      'Choose legible typefaces with a good x-height, distinct characters and the weights you need.',
      'Use a small, named type scale.',
      'Body text: around 16 to 18px, line height 1.4 to 1.7, 45 to 75 characters per line, at least 4.5:1 contrast.',
      'Pair typefaces only with a clear purpose.',
    ],
    reading: [
      { title: 'Practical Typography', url: 'https://practicaltypography.com/', source: 'Matthew Butterick', note: 'A free online book with clear, opinionated typography rules.' },
      { title: 'Google Fonts Knowledge', url: 'https://fonts.google.com/knowledge', source: 'Google Fonts', note: 'Free articles on choosing and using type.' },
    ],
  },

  'colour': {
    objectives: [
      'Describe colour with hue, saturation and lightness, and explain why lightness matters most for interfaces.',
      'Build a functional palette with neutrals, a primary colour and semantic colours, each in several shades.',
      'Assign colours to roles (text, surface, action, success, warning, error) rather than to individual screens.',
      'Check contrast and avoid relying on colour alone.',
    ],
    explanation: `
<p>Colour in interfaces has three jobs: communicate brand, create hierarchy and signal meaning. It is the most emotional design tool and also the easiest to misuse.</p>
<h3>Hue, saturation and lightness</h3>
<p><strong>Hue</strong> is the colour family (red, blue, green). <strong>Saturation</strong> is how intense it is. <strong>Lightness</strong> is how close it is to white or black. For readability and contrast, lightness matters far more than hue: dark blue text on white is readable, light yellow is not, whatever the brand says.</p>
<h3>A functional palette</h3>
<p>A practical interface palette has three parts:</p>
<ul>
<li><strong>Neutrals:</strong> greys (often slightly warm or cool) for text, borders, backgrounds and surfaces. Most of an interface is neutral.</li>
<li><strong>Primary (brand) colour:</strong> used sparingly for primary actions, links, selection and focus. Its power comes from scarcity.</li>
<li><strong>Semantic colours:</strong> green for success, amber for warning, red for errors or destructive actions, blue for information. Their meanings must stay consistent.</li>
</ul>
<p>Each colour needs a range of shades, usually from very light (backgrounds) to very dark (text on light backgrounds). Many systems use numbered steps such as 50 to 900.</p>
<h3>Roles, not colours</h3>
<p>Instead of saying "this button is #1E40AF", say "this is the primary action colour", which happens to be a particular blue. Naming colours by role (text primary, text secondary, surface, border, action primary, danger) keeps usage consistent and makes changes, including dark themes, much easier. These role names become semantic design tokens later.</p>
<h3>Contrast and colour independence</h3>
<p>WCAG asks for at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful non-text elements such as icons, input borders and focus indicators. Separately, never use colour as the only way to communicate meaning. About 1 in 12 men and 1 in 200 women have some form of colour vision deficiency, and everyone struggles with colour in bright sunlight. Pair colour with text, icons or patterns.</p>
<h3>A rule of thumb for proportion</h3>
<p>A common starting heuristic is roughly 60% neutral background, 30% secondary surfaces and text, and 10% accent. It is not a law, but it reminds you that accents work because they are rare.</p>`,
    why: `
<p>Colour mistakes are among the most common accessibility failures on the web, and they directly affect whether people can read text and understand states. Inconsistent semantic colours cause real errors: if red sometimes means "error" and sometimes "sale", people misread both. A role-based palette also makes products cheaper to maintain, because a brand refresh or a dark theme changes a handful of tokens instead of hundreds of screens.</p>`,
    example: `
<p>A banking app uses its brand red for the logo, for "Transfer" buttons, for negative balances and for error messages. Customers hesitate before transferring money because the button looks like a warning, and some miss genuine errors because red is everywhere.</p>
<p>The team keeps red in the logo but introduces a dark blue for primary actions, reserves red strictly for errors and destructive actions, and shows negative balances with a minus sign and the word "overdrawn" in dark text, with red only as a supporting cue. Hesitation on the transfer screen drops in testing, and error messages become noticeable again.</p>`,
    figure: {
      html: `
<div class="fx-panel" role="img" aria-label="A palette organised by role. Text primary is near-black, 17 to 1 contrast on white. Text secondary is dark grey, 7.4 to 1. Action primary is dark blue, 8.7 to 1. Success is dark green, 7.1 to 1. Error is dark red, 6.6 to 1. Warning text is dark brown on a pale yellow background. Border is light grey for decoration only.">
  <span class="fx-panel__label">A palette by role, with contrast on white</span>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(9.5rem,1fr));gap:.6rem;font-size:.8rem">
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#1B1B1A"></div><div style="padding:.45rem .55rem"><b>Text primary</b><br>#1B1B1A · 17:1</div></div>
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#57564F"></div><div style="padding:.45rem .55rem"><b>Text secondary</b><br>#57564F · 7.4:1</div></div>
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#1E40AF"></div><div style="padding:.45rem .55rem"><b>Action primary</b><br>#1E40AF · 8.7:1</div></div>
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#166534"></div><div style="padding:.45rem .55rem"><b>Success</b><br>#166534 · 7.1:1</div></div>
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#B42318"></div><div style="padding:.45rem .55rem"><b>Error, danger</b><br>#B42318 · 6.6:1</div></div>
    <div style="border:1px solid #DDD;border-radius:8px;overflow:hidden"><div style="height:38px;background:#FDF3D7;border-bottom:1px solid #EEE"></div><div style="padding:.45rem .55rem"><b>Warning surface</b><br>with #6B4A06 text · 7.3:1</div></div>
  </div>
</div>`,
      caption: 'Colours named by role. Text and action colours meet AA contrast on white. Pale tints are used only as backgrounds for dark text.',
    },
    walkthrough: [
      { title: 'Start with neutrals', body: 'Choose a text colour, a secondary text colour, a border colour, a page background and a surface colour. Check both text colours on both backgrounds.' },
      { title: 'Choose one primary colour', body: 'Pick a shade dark enough to carry white text and to work as link text on white (4.5:1 or more).' },
      { title: 'Add semantic colours', body: 'Choose success, warning, error and information colours, each with a dark shade for text and icons and a pale shade for backgrounds.' },
      { title: 'Name every colour by role', body: 'Write a table: role, colour value, where it is used, contrast result.' },
      { title: 'Check states', body: 'Hover, focus, pressed and disabled states each need colours. Focus indicators need 3:1 contrast with what is around them.' },
      { title: 'Test without colour', body: 'View your screens in greyscale. Every state and message should still be understandable.' },
    ],
    mistakes: [
      { mistake: 'Using the brand colour for everything.', fix: 'Reserve it for primary actions and key highlights so it keeps its power.' },
      { mistake: 'Communicating status only by colour (green dot, red dot).', fix: 'Add a text label or a distinct icon.' },
      { mistake: 'Picking pale, trendy colours for text or buttons.', fix: 'Measure contrast. Use pale tints for backgrounds, dark shades for text.' },
      { mistake: 'Using red for both errors and promotions.', fix: 'Keep semantic colours exclusive to their meanings.' },
    ],
    quiz: [
      { q: 'Which colour property matters most for text readability?', options: ['Hue', 'Lightness, which determines contrast', 'Saturation'], answer: 1, explain: 'Contrast depends mainly on the difference in lightness between text and background.' },
      { q: 'What is the minimum WCAG AA contrast for normal-sized body text?', options: ['3:1', '4.5:1', '7:1'], answer: 1, explain: '4.5:1 is the AA requirement for normal text; 3:1 applies to large text and meaningful non-text elements.' },
      { q: 'An order status is shown only as a green or red dot. What is the best fix?', options: ['Use brighter colours', 'Add a text label or a distinct icon for each status', 'Make the dots bigger'], answer: 1, explain: 'Colour should support meaning, not carry it alone.' },
      { q: 'Why name colours by role, such as "action primary"?', options: ['It sounds more professional', 'It keeps usage consistent and makes changes such as dark themes easier', 'Developers require it'], answer: 1, explain: 'Role-based names separate the decision from the value, so values can change safely.' },
    ],
    exercise: {
      title: 'Build a role-based palette',
      minutes: 45,
      brief: '<p>Create a palette for a library\'s book reservation app. Use the walkthrough.</p>',
      steps: [
        'Define neutrals for text, borders and surfaces.',
        'Choose a primary colour and semantic colours with light and dark shades.',
        'Create a role table with contrast results.',
        'Design one screen (a reservation list with available, waiting and overdue items) using only your palette.',
        'Check the screen in greyscale and fix anything that depends on colour.',
      ],
      deliverable: 'A palette sheet with role names and contrast values, and one screen in colour and greyscale.',
    },
    checklist: [
      'Every colour has a role name.',
      'All text colours meet 4.5:1 on their backgrounds.',
      'Statuses are understandable in greyscale.',
      'The primary colour is used sparingly.',
      'Semantic colours have consistent meanings.',
    ],
    summary: [
      'Lightness, not hue, decides readability.',
      'A functional palette has neutrals, one primary colour and semantic colours, each in several shades.',
      'Name colours by role, not by value.',
      'Meet contrast requirements and never rely on colour alone.',
    ],
    reading: [
      { title: 'Understanding Success Criterion 1.4.3: Contrast (Minimum)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', source: 'W3C WAI' },
      { title: 'Understanding Success Criterion 1.4.1: Use of Color', url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html', source: 'W3C WAI' },
      { title: 'Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', source: 'WebAIM', note: 'A free tool for checking text and background colour pairs.' },
    ],
  },
};
