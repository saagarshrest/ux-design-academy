// @ts-check
/* Stage 6 (part 1): UI design and design systems. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'wireframes-to-polished-ui': {
    objectives: [
      'Turn an approved wireframe into polished UI step by step.',
      'Apply type, colour, spacing and imagery without losing the structure.',
      'Check the polished design against the original goals.',
    ],
    explanation: `
<p>Polishing a wireframe is not decoration added at the end. It is a series of decisions that make the structure clearer and give the product a personality. Work in layers:</p>
<ol>
<li><strong>Grid and spacing</strong>: place content on a grid and apply your spacing scale.</li>
<li><strong>Typography</strong>: apply the type scale so hierarchy comes mainly from size and weight.</li>
<li><strong>Colour</strong>: start mostly neutral, then add brand and accent colours for actions and meaning.</li>
<li><strong>Components</strong>: swap wireframe boxes for real system components.</li>
<li><strong>Imagery and icons</strong>: add real or realistic images and a consistent icon set.</li>
<li><strong>Details</strong>: borders, radius, shadows and small touches, used sparingly.</li>
</ol>
<h3>Protect the hierarchy</h3>
<p>The wireframe established what matters most. After each layer, squint at the screen or view it in greyscale: the most important thing should still stand out first. If a decorative image or colour now steals attention, adjust.</p>`,
    why: `
<p>Visual design affects trust, comprehension and how fast people find things. Rushing from grey boxes to a full-colour mock-up often loses the hierarchy the team agreed on. Working in layers keeps the decisions deliberate and easy to explain, which matters when stakeholders start debating colours.</p>`,
    example: `
<p>A wireframe for a council bin collection page shows the next collection date at the top, then a list of bin types, then a link to report a missed collection. In the first polished draft, a large photo of recycling bins and a bright brand banner dominate, and the date gets lost.</p>
<p>Working in layers instead, the designer sets the date as the largest text in a tinted panel, keeps the page mostly neutral, uses colour only for bin types (with text labels too) and shrinks the image. A greyscale check confirms the date still stands out first.</p>`,
    walkthrough: [
      { title: 'Start from an approved wireframe', body: 'Confirm the hierarchy and content before polishing.' },
      { title: 'Apply grid and spacing', body: 'Align to your grid and use the spacing scale.' },
      { title: 'Apply typography', body: 'Set text styles and check hierarchy in greyscale.' },
      { title: 'Add colour with purpose', body: 'Use colour for actions, status and brand moments.' },
      { title: 'Swap in components', body: 'Replace placeholders with system components and real content.' },
      { title: 'Review against goals', body: 'Check the main task is still the clearest thing on the screen.' },
    ],
    mistakes: [
      { mistake: 'Adding colour and imagery first.', fix: 'Start with spacing and type; add colour later.' },
      { mistake: 'Losing the hierarchy.', fix: 'Do a greyscale or squint check after each layer.' },
      { mistake: 'Too many decorative effects.', fix: 'Use shadows, gradients and borders sparingly.' },
    ],
    quiz: [
      { q: 'Which layer usually comes first when polishing?', options: ['Colour', 'Grid and spacing', 'Shadows'], answer: 1, explain: 'Structure first, decoration last.' },
      { q: 'What does a greyscale check reveal?', options: ['Brand fit', 'Whether hierarchy works without colour', 'File size'], answer: 1, explain: 'Hierarchy should not depend on colour alone.' },
      { q: 'What is the main risk of polishing too fast?', options: ['Losing the agreed hierarchy', 'Slow files', 'Too few screens'], answer: 0, explain: 'Decoration can hide what matters.' },
    ],
    exercise: {
      title: 'Layered polish',
      minutes: 90,
      brief: '<p>Take a wireframe from Stage 4 and polish it in layers.</p>',
      steps: [
        'Duplicate the wireframe for each layer: spacing, type, colour, components, details.',
        'Do a greyscale check at each step.',
        'Note one decision per layer and why.',
        'Present the sequence to a peer.',
      ],
      deliverable: 'A sequence of frames showing each layer with short rationale notes.',
    },
    checklist: [
      'I started from an approved wireframe.',
      'I worked in layers.',
      'Hierarchy survives a greyscale check.',
      'I can explain each visual decision.',
    ],
    summary: [
      'Polish in layers: spacing, type, colour, components, imagery, details.',
      'Protect the hierarchy from the wireframe.',
      'Use colour and decoration with purpose.',
      'Check against goals, not just looks.',
    ],
    reading: [
      { title: 'Visual hierarchy in UX', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/', source: 'Nielsen Norman Group' },
      { title: 'From wireframes to visual design', url: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/', source: 'Nielsen Norman Group', note: 'Explains fidelity levels and when to raise them.' },
    ],
  },

  'visual-language': {
    objectives: [
      'Define what a visual language is and what it includes.',
      'Turn brand values into concrete UI decisions.',
      'Create a simple visual language sheet for a product.',
    ],
    explanation: `
<p>A <strong>visual language</strong> is the consistent set of visual choices that make a product recognisable: typography, colour, shape, spacing rhythm, imagery, iconography and motion. It sits between brand guidelines (often made for marketing) and the component library.</p>
<h3>From adjectives to decisions</h3>
<p>Brand values are usually adjectives such as "calm", "playful" or "trustworthy". Translate each into decisions you can apply:</p>
<ul>
<li><strong>Calm</strong>: generous spacing, muted colours, soft radius, slow, subtle motion.</li>
<li><strong>Playful</strong>: rounded shapes, bright accents, illustration, bouncy motion.</li>
<li><strong>Precise</strong>: tight grids, small radius, monospaced numbers, minimal decoration.</li>
</ul>
<h3>What to define</h3>
<p>A typeface pairing and scale, a colour palette with roles, a corner radius scale, an icon style (outline or filled, stroke width), an imagery style, an elevation approach and a motion personality. Keep it small enough to apply consistently.</p>`,
    why: `
<p>A coherent visual language makes products feel trustworthy and well made, and helps people learn the interface faster because similar things look similar. It also speeds up design decisions: instead of debating every shade, the team checks whether a choice fits the agreed language.</p>`,
    example: `
<p>A mental health journaling app has the values "gentle", "private" and "encouraging". The designer translates these: a warm off-white background, a muted green primary colour, a rounded humanist typeface, 16px corner radius, soft illustration rather than stock photos, outline icons with 1.5px strokes and slow fade transitions.</p>
<p>When a developer proposes a bright red notification badge, the team checks the language sheet and uses a soft amber dot with text instead, keeping the experience calm.</p>`,
    walkthrough: [
      { title: 'Collect brand values', body: 'Gather three to five adjectives from the brand or product strategy.' },
      { title: 'Translate each', body: 'For each adjective, list concrete decisions for type, colour, shape and motion.' },
      { title: 'Gather references', body: 'Collect examples that show the feel you want.' },
      { title: 'Make a sheet', body: 'Create one page showing type, colours, radius, icons, imagery and motion notes.' },
      { title: 'Apply to a screen', body: 'Design one key screen using only the sheet.' },
      { title: 'Review', body: 'Ask others which adjectives the screen suggests.' },
    ],
    mistakes: [
      { mistake: 'Copying a trendy style that does not fit the brand.', fix: 'Start from values, not trends.' },
      { mistake: 'Too many typefaces and colours.', fix: 'Keep a small, consistent set.' },
      { mistake: 'Mixing icon styles.', fix: 'Pick one icon family and stroke width.' },
    ],
    quiz: [
      { q: 'What is a visual language?', options: ['A coding language', 'A consistent set of visual choices', 'A logo'], answer: 1, explain: 'It makes a product recognisable and coherent.' },
      { q: 'How do you use brand adjectives?', options: ['Put them in the footer', 'Translate them into concrete design decisions', 'Ignore them'], answer: 1, explain: 'Adjectives guide type, colour, shape and motion.' },
      { q: 'Which suits "precise"?', options: ['Bouncy motion and big radius', 'Tight grids and minimal decoration', 'Hand-drawn illustration'], answer: 1, explain: 'Precision is expressed through restraint.' },
    ],
    exercise: {
      title: 'Visual language sheet',
      minutes: 60,
      brief: '<p>Create a visual language for a fictional product, such as a cycling club app.</p>',
      steps: [
        'Choose three brand adjectives.',
        'Translate each into decisions.',
        'Build a one-page sheet.',
        'Design one screen and ask others to guess the adjectives.',
      ],
      deliverable: 'A visual language sheet and one applied screen.',
    },
    checklist: [
      'Values are translated into decisions.',
      'Type, colour, shape, icons, imagery and motion are covered.',
      'The set is small and consistent.',
      'I tested whether others read the intended feel.',
    ],
    summary: [
      'A visual language is a consistent set of visual choices.',
      'Translate brand adjectives into concrete decisions.',
      'Keep it small enough to apply.',
      'It speeds decisions and builds trust.',
    ],
    reading: [
      { title: 'Material Design 3: styles', url: 'https://m3.material.io/styles', source: 'Material Design 3' },
      { title: 'GOV.UK Design System: styles', url: 'https://design-system.service.gov.uk/styles/', source: 'GOV.UK', note: 'A deliberately plain, trustworthy visual language.' },
    ],
  },

  'core-components': {
    objectives: [
      'Identify the core components most products need.',
      'Design components that are flexible but consistent.',
      'Prioritise which components to build first.',
    ],
    explanation: `
<p>Most interfaces are built from a surprisingly small set of components. A typical core set includes:</p>
<ul>
<li><strong>Actions</strong>: buttons, links, icon buttons.</li>
<li><strong>Inputs</strong>: text fields, text areas, selects, checkboxes, radios, toggles, date pickers.</li>
<li><strong>Navigation</strong>: header, tabs, side navigation, breadcrumbs, pagination.</li>
<li><strong>Feedback</strong>: alerts, banners, toasts, inline errors, progress indicators.</li>
<li><strong>Containers</strong>: cards, modals, sheets, accordions.</li>
<li><strong>Data display</strong>: lists, tables, tags, avatars, badges.</li>
</ul>
<h3>What makes a good component</h3>
<p>It solves one job well, has clear options (variants and properties) for real needs, handles long and missing content, includes all states and is accessible. It should be flexible enough to reuse but not so flexible that every use looks different.</p>
<h3>Build in order of use</h3>
<p>Audit existing screens and count how often each element appears. Start with the most used and most inconsistent components, usually buttons, inputs and typography, then expand.</p>`,
    why: `
<p>A solid core set covers most screens and makes design and development much faster. Focusing first on the components used everywhere gives the biggest gain in consistency and quality with the least effort. Knowing the core set also helps you read any product quickly.</p>`,
    example: `
<p>A small startup wants a design system but has limited time. The designer audits 40 screens and finds 11 button styles, 6 input styles and 4 kinds of alert, while date pickers appear only twice.</p>
<p>They build buttons, text inputs, selects, checkboxes, alerts and cards first, with all states. Within a month these cover about 80% of interface elements on new screens. Date pickers wait until a feature needs them.</p>`,
    walkthrough: [
      { title: 'Audit screens', body: 'Screenshot every unique button, input, alert and so on.' },
      { title: 'Count and group', body: 'Group similar elements and count variants.' },
      { title: 'Prioritise', body: 'Rank by frequency and inconsistency.' },
      { title: 'Define each component', body: 'Write its job, options, states and content rules.' },
      { title: 'Build and test', body: 'Build the component and test it with real content.' },
      { title: 'Replace old versions', body: 'Swap old elements for the new component.' },
    ],
    mistakes: [
      { mistake: 'Building rare components first.', fix: 'Start with the most used ones.' },
      { mistake: 'Endless options for every edge case.', fix: 'Support real needs; say no to one-offs.' },
      { mistake: 'Testing only with short sample text.', fix: 'Test with long, missing and translated content.' },
    ],
    quiz: [
      { q: 'Which components usually come first?', options: ['Date pickers and carousels', 'Buttons, inputs and alerts', 'Charts'], answer: 1, explain: 'They appear most often.' },
      { q: 'How should you prioritise?', options: ['By what looks exciting', 'By frequency and inconsistency', 'Alphabetically'], answer: 1, explain: 'Focus where the impact is biggest.' },
      { q: 'What makes a component too flexible?', options: ['When every use looks different', 'When it has states', 'When it is accessible'], answer: 0, explain: 'Too many options undermine consistency.' },
    ],
    exercise: {
      title: 'Component audit',
      minutes: 60,
      brief: '<p>Audit an existing app or website and plan a core component set.</p>',
      steps: [
        'Screenshot all buttons, inputs, alerts and cards on 10 screens.',
        'Group and count the variations.',
        'Prioritise the five components to build first.',
        'Write a one-paragraph definition for each.',
      ],
      deliverable: 'An audit board and a prioritised component list.',
    },
    checklist: [
      'I audited real screens.',
      'I counted variations.',
      'I prioritised by use and inconsistency.',
      'Each component has a clear job.',
    ],
    summary: [
      'A small set of components builds most interfaces.',
      'Good components do one job, handle content and include all states.',
      'Audit and prioritise by frequency.',
      'Avoid options for one-off cases.',
    ],
    reading: [
      { title: 'GOV.UK Design System: components', url: 'https://design-system.service.gov.uk/components/', source: 'GOV.UK' },
      { title: 'Material Design 3: components', url: 'https://m3.material.io/components', source: 'Material Design 3' },
    ],
  },

  'component-states': {
    objectives: [
      'Map every state a component can be in, including data states.',
      'Design states that are visually distinct and accessible.',
      'Communicate states clearly to developers.',
    ],
    explanation: `
<p>In Stage 5 you built interactive states in the tool. Here we look at <em>designing</em> them well. Components have two families of states:</p>
<ul>
<li><strong>Interaction states</strong>: default, hover, focus, pressed, selected, disabled.</li>
<li><strong>Data and validation states</strong>: empty, filled, loading, success, warning, error, read-only.</li>
</ul>
<h3>Design principles</h3>
<ul>
<li><strong>Distinct</strong>: each state must be recognisable at a glance, not just a slightly different shade.</li>
<li><strong>Not colour alone</strong>: pair colour with icons, text, borders or patterns.</li>
<li><strong>Consistent</strong>: focus and error look the same across every component.</li>
<li><strong>Combinable</strong>: states can overlap (focused and in error), so check combinations.</li>
</ul>
<h3>State matrix</h3>
<p>A <strong>state matrix</strong> is a grid showing each variant against each state. It reveals gaps and helps developers implement every combination.</p>`,
    why: `
<p>States are how a product communicates. Unclear states lead to repeated clicks, missed errors and lost data. Consistent states across components let people learn the system once. A state matrix also prevents the classic gap where developers invent their own error or disabled style.</p>`,
    example: `
<p>A payments form shows errors only by turning the field border red. Colour-blind users and people in bright sunlight miss them, and support receives complaints about payments "failing for no reason".</p>
<p>The designer redesigns the error state: thicker red border, an error icon, a clear message under the field and a summary at the top of the form linking to each error. A state matrix shows error combined with focus and filled. Complaints about unexplained failures drop.</p>`,
    walkthrough: [
      { title: 'List both families', body: 'Write interaction and data states for the component.' },
      { title: 'Design each state', body: 'Make each distinct using more than colour.' },
      { title: 'Check combinations', body: 'Design focus plus error, selected plus disabled, and so on.' },
      { title: 'Build a matrix', body: 'Lay out variants against states in a grid.' },
      { title: 'Check accessibility', body: 'Test contrast and colour-independence.' },
      { title: 'Share', body: 'Walk developers through the matrix.' },
    ],
    mistakes: [
      { mistake: 'Error shown only by colour.', fix: 'Add icons and text.' },
      { mistake: 'Inconsistent focus styles.', fix: 'Use one focus style system-wide.' },
      { mistake: 'Forgetting loading states.', fix: 'Design what happens while data loads or submits.' },
    ],
    quiz: [
      { q: 'Which is a data state?', options: ['Hover', 'Loading', 'Pressed'], answer: 1, explain: 'Loading relates to data, not pointer interaction.' },
      { q: 'Why not show errors with colour only?', options: ['It is ugly', 'Some people cannot perceive the colour difference', 'Red is expensive'], answer: 1, explain: 'Colour alone excludes some users.' },
      { q: 'What does a state matrix show?', options: ['Variants against states', 'File history', 'User personas'], answer: 0, explain: 'It reveals gaps and combinations.' },
    ],
    exercise: {
      title: 'Select state matrix',
      minutes: 60,
      brief: '<p>Design a full state matrix for a select (drop-down) component.</p>',
      steps: [
        'List interaction and data states.',
        'Design each with more than colour.',
        'Lay out a matrix including combinations.',
        'Check contrast and ask a peer to identify each state.',
      ],
      deliverable: 'A state matrix for a select component.',
    },
    checklist: [
      'Both state families are covered.',
      'States do not rely on colour alone.',
      'Combinations are designed.',
      'Focus and error are consistent system-wide.',
    ],
    summary: [
      'Components have interaction and data states.',
      'States must be distinct, accessible and consistent.',
      'Check combinations of states.',
      'A state matrix communicates them clearly.',
    ],
    reading: [
      { title: 'Error message guidelines', url: 'https://www.nngroup.com/articles/error-message-guidelines/', source: 'Nielsen Norman Group' },
      { title: 'Error summary', url: 'https://design-system.service.gov.uk/components/error-summary/', source: 'GOV.UK Design System' },
    ],
  },

  'design-tokens': {
    objectives: [
      'Explain design tokens and their tiers.',
      'Write token names that are clear and scalable.',
      'Understand how tokens flow from design to code.',
    ],
    explanation: `
<p><strong>Design tokens</strong> are named values that store design decisions: colours, spacing, type sizes, radius, shadows, durations. They are the shared source of truth between design tools and code.</p>
<h3>Tiers</h3>
<ul>
<li><strong>Primitive (global) tokens</strong>: raw values. <code>blue-600: #1D4ED8</code>, <code>space-4: 16px</code>.</li>
<li><strong>Semantic (alias) tokens</strong>: purpose. <code>color-action-primary: {blue-600}</code>, <code>space-inset-md: {space-4}</code>.</li>
<li><strong>Component tokens</strong> (optional): specific uses. <code>button-primary-background: {color-action-primary}</code>.</li>
</ul>
<h3>Naming</h3>
<p>A common pattern is category, then property, then variant, then state: <code>color-text-secondary</code>, <code>color-border-input-focus</code>. Names should describe purpose, be predictable and avoid describing appearance in semantic tokens.</p>
<h3>From design to code</h3>
<p>Tokens are often stored as JSON, edited in a design tool or a repository, and transformed by a build tool into CSS variables, iOS and Android values. One change updates every platform.</p>`,
    why: `
<p>Tokens make consistency enforceable across design and every platform. They enable theming, rebrands and accessibility fixes in one place. Designers who understand tokens collaborate much more effectively with engineers and can work on any modern design system.</p>`,
    example: `
<p>A retailer runs a website, an iOS app and an Android app. Their "primary green" differs slightly on each because values were copied by hand.</p>
<p>The team defines tokens in JSON: primitives for the green scale and semantics such as <code>color-action-primary</code>. A build step outputs CSS variables, Swift and Kotlin constants. When accessibility testing shows the green fails contrast on white, they change one primitive mapping and all three platforms update in the next release.</p>`,
    walkthrough: [
      { title: 'Collect raw values', body: 'List the colours, spacing, radius and type values in use.' },
      { title: 'Define primitives', body: 'Name the scales, such as grey-100 to grey-900.' },
      { title: 'Define semantics', body: 'Create purpose-based tokens pointing to primitives.' },
      { title: 'Agree naming', body: 'Write a naming pattern with developers.' },
      { title: 'Apply in design', body: 'Use variables that mirror the tokens.' },
      { title: 'Trace a change', body: 'Change one primitive and follow it through to all uses.' },
    ],
    mistakes: [
      { mistake: 'Semantic tokens named by colour ("color-blue-button").', fix: 'Name by purpose ("color-action-primary").' },
      { mistake: 'Too many component tokens too early.', fix: 'Start with primitives and semantics.' },
      { mistake: 'Design and code tokens drifting apart.', fix: 'Keep one source of truth and sync it.' },
    ],
    quiz: [
      { q: 'Which is a semantic token?', options: ['blue-600', 'color-text-error', '#D4351C'], answer: 1, explain: 'It describes purpose.' },
      { q: 'What is the main benefit of tokens?', options: ['Smaller images', 'A shared source of truth across design and platforms', 'Faster typing'], answer: 1, explain: 'One change updates everywhere.' },
      { q: 'What format are tokens often stored in?', options: ['PDF', 'JSON', 'PNG'], answer: 1, explain: 'JSON is easy to transform into platform code.' },
    ],
    exercise: {
      title: 'Token set',
      minutes: 60,
      brief: '<p>Write a small token set for a product.</p>',
      steps: [
        'Define primitive colour, spacing and radius tokens.',
        'Define 10 to 15 semantic tokens.',
        'Write them in a simple JSON structure.',
        'Map three components to the semantic tokens.',
      ],
      deliverable: 'A token JSON file and a mapping table for three components.',
    },
    checklist: [
      'I have primitive and semantic tiers.',
      'Names describe purpose.',
      'The naming pattern is consistent.',
      'Components use semantic tokens.',
    ],
    summary: [
      'Design tokens are named design decisions.',
      'Use primitive, semantic and optional component tiers.',
      'Name by purpose with a predictable pattern.',
      'Tokens flow from one source to every platform.',
    ],
    reading: [
      { title: 'Design Tokens Community Group', url: 'https://www.designtokens.org/', source: 'W3C Community Group' },
      { title: 'Design tokens', url: 'https://m3.material.io/foundations/design-tokens/overview', source: 'Material Design 3' },
    ],
  },

  'component-architecture': {
    objectives: [
      'Structure components from smaller building blocks.',
      'Use composition and slots instead of endless variants.',
      'Balance flexibility, consistency and maintainability.',
    ],
    explanation: `
<p><strong>Component architecture</strong> is how components are built from one another. A popular way to think about it is to move from small to large: foundations (tokens), basic elements (icon, label), components (button, input), composite components (search bar, card) and patterns (filter panel, checkout form). This idea is often called atomic design.</p>
<h3>Composition over configuration</h3>
<p>Instead of one giant card component with 40 options, build small pieces (card container, media, header, body, actions) that can be combined. This is <strong>composition</strong>. It keeps each piece simple and lets teams create layouts the system did not predict, while staying consistent.</p>
<h3>Slots</h3>
<p>A <strong>slot</strong> is a placeholder inside a component where other content can go, for example the body of a modal. In design tools, slots are often a placeholder instance that can be swapped. In code, they map to "children" or named slots.</p>
<h3>Maintainability</h3>
<p>Nesting helps updates flow, but deep nesting makes components hard to understand and slow. Keep nesting shallow and document how pieces fit.</p>`,
    why: `
<p>Well-architected components scale: new needs can be met by combining existing parts rather than adding special cases. Poor architecture leads to bloated components that nobody understands and a flood of one-off detached copies. Thinking like this also mirrors how developers structure code, which improves collaboration.</p>`,
    example: `
<p>A system's card component has grown to 96 variants covering image positions, button counts and badge options. Designers struggle to find the right one and often detach it.</p>
<p>The team rebuilds the card as a container with slots for media, header, body and footer, plus small sub-components for each. The variant count drops to four sizes. Designers compose cards from parts, and developers map them directly to their composable card in code.</p>`,
    walkthrough: [
      { title: 'Pick a complex component', body: 'Choose one with many variants or frequent detaching.' },
      { title: 'Break it down', body: 'Identify the smaller parts it is made from.' },
      { title: 'Build the parts', body: 'Create sub-components for each part.' },
      { title: 'Add slots', body: 'Use swappable placeholders for flexible areas.' },
      { title: 'Compose examples', body: 'Build several real layouts from the parts.' },
      { title: 'Compare', body: 'Compare complexity before and after.' },
    ],
    mistakes: [
      { mistake: 'Adding a variant for every request.', fix: 'Use composition and slots.' },
      { mistake: 'Very deep nesting.', fix: 'Keep nesting shallow and document structure.' },
      { mistake: 'Design architecture different from code.', fix: 'Agree structure with developers.' },
    ],
    quiz: [
      { q: 'What is composition?', options: ['Combining small parts to build larger components', 'Adding colour', 'Writing documentation'], answer: 0, explain: 'Composition builds from parts.' },
      { q: 'What is a slot?', options: ['A placeholder where other content can go', 'A colour token', 'A breakpoint'], answer: 0, explain: 'Slots allow flexible content.' },
      { q: 'What does a 96-variant card suggest?', options: ['Excellent design', 'An architecture problem', 'Too few states'], answer: 1, explain: 'Composition would simplify it.' },
    ],
    exercise: {
      title: 'Refactor a component',
      minutes: 75,
      brief: '<p>Refactor a complex component into composable parts.</p>',
      steps: [
        'Choose a modal, card or list item.',
        'Break it into parts and build sub-components.',
        'Add at least one slot.',
        'Compose three different real-world examples.',
      ],
      deliverable: 'A refactored component with three composed examples.',
    },
    checklist: [
      'I broke the component into parts.',
      'I used slots for flexible areas.',
      'Nesting is shallow.',
      'Structure matches code.',
    ],
    summary: [
      'Build components from smaller parts.',
      'Prefer composition and slots to endless variants.',
      'Keep nesting shallow and documented.',
      'Match architecture with code.',
    ],
    reading: [
      { title: 'Atomic Design', url: 'https://atomicdesign.bradfrost.com/', source: 'Brad Frost' },
      { title: 'GOV.UK Design System: patterns', url: 'https://design-system.service.gov.uk/patterns/', source: 'GOV.UK' },
    ],
  },

  'responsive-breakpoints': {
    objectives: [
      'Choose breakpoints based on content, not specific devices.',
      'Define how grids, type and components change at each breakpoint.',
      'Document responsive behaviour in a design system.',
    ],
    explanation: `
<p>A <strong>breakpoint</strong> is a width at which the layout changes. Good breakpoints come from <strong>content</strong>: where does this layout start to look cramped or stretched? Device lists change every year; content needs do not.</p>
<h3>What changes at breakpoints</h3>
<ul>
<li><strong>Grid</strong>: number of columns, gutter and margin sizes.</li>
<li><strong>Navigation</strong>: full menu, collapsed menu, bottom bar or side rail.</li>
<li><strong>Typography</strong>: larger headings on wide screens; sometimes fluid sizes that scale smoothly.</li>
<li><strong>Components</strong>: tables become cards, side panels become sheets, multi-column forms become single column.</li>
<li><strong>Density</strong>: more information per screen on large displays.</li>
</ul>
<h3>System-level breakpoints</h3>
<p>A design system typically defines a small set of named breakpoints (for example small, medium, large, extra large) with grid settings for each. Components document how they behave at each. Container queries in CSS now also let components respond to the space they are given rather than the whole screen.</p>`,
    why: `
<p>Consistent breakpoints let every team design responsive screens the same way and give developers clear rules. Content-based breakpoints produce layouts that work on devices nobody has invented yet. Documenting component behaviour avoids each team solving the same responsive problems differently.</p>`,
    example: `
<p>A news site chose breakpoints matching three specific phones and an old tablet. New devices fall between them, causing awkward layouts: articles with very long lines and cramped sidebars.</p>
<p>The team redesigns by dragging layouts wider and narrower and marking where each breaks. They settle on four named breakpoints, cap article width, switch the sidebar below content under the medium breakpoint and use fluid heading sizes. Layouts now hold up on every width tested.</p>`,
    walkthrough: [
      { title: 'Start small', body: 'Design the content at the smallest supported width.' },
      { title: 'Widen slowly', body: 'Increase width until the layout looks wrong.' },
      { title: 'Mark the breakpoint', body: 'Note the width and what should change.' },
      { title: 'Repeat', body: 'Continue to the widest width you support.' },
      { title: 'Name and round', body: 'Group nearby breakpoints into a small named set.' },
      { title: 'Document', body: 'Write grid settings and component behaviour per breakpoint.' },
    ],
    mistakes: [
      { mistake: 'Breakpoints copied from specific devices.', fix: 'Base them on where content breaks.' },
      { mistake: 'Too many breakpoints.', fix: 'Keep a small named set.' },
      { mistake: 'Undocumented component behaviour.', fix: 'Write how each component adapts.' },
    ],
    quiz: [
      { q: 'What should breakpoints be based on?', options: ['Popular devices', 'Where content starts to break', 'Round numbers'], answer: 1, explain: 'Content-based breakpoints last longer.' },
      { q: 'What might happen to a data table on small screens?', options: ['Nothing', 'Become cards or scroll horizontally with care', 'Disappear'], answer: 1, explain: 'Components adapt to space.' },
      { q: 'What do container queries allow?', options: ['Components responding to their own available space', 'Faster loading', 'Dark mode'], answer: 0, explain: 'They respond to the container, not the screen.' },
    ],
    exercise: {
      title: 'Breakpoint study',
      minutes: 60,
      brief: '<p>Find content-based breakpoints for an article page.</p>',
      steps: [
        'Design the article at 320px.',
        'Widen in steps and mark where it breaks.',
        'Define three or four named breakpoints.',
        'Document what changes at each.',
      ],
      deliverable: 'A breakpoint table with screenshots.',
    },
    checklist: [
      'Breakpoints are content-based.',
      'There is a small named set.',
      'Grid settings are defined per breakpoint.',
      'Component behaviour is documented.',
    ],
    summary: [
      'Breakpoints are widths where layout changes.',
      'Base them on content, not devices.',
      'Grids, navigation, type, components and density can change.',
      'Document breakpoints and component behaviour.',
    ],
    reading: [
      { title: 'Responsive web design basics', url: 'https://web.dev/articles/responsive-web-design-basics', source: 'web.dev' },
      { title: 'Container queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries', source: 'MDN Web Docs' },
    ],
  },
};
