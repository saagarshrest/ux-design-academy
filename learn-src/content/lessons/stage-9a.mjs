// @ts-check
/* Stage 9 (part 1): Accessibility. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'disability-and-inclusion': {
    objectives: [
      'Describe the range of disabilities that affect how people use digital products.',
      'Explain the social model of disability and permanent, temporary and situational impairments.',
      'Understand accessibility as part of inclusive design, not a checklist at the end.',
    ],
    explanation: `
<p>Around one in five people in many countries has a disability, and almost everyone experiences impairment at some point. Disabilities that affect digital use include:</p>
<ul>
<li><strong>Vision</strong>: blindness, low vision, colour vision deficiency.</li>
<li><strong>Hearing</strong>: deafness and hearing loss.</li>
<li><strong>Motor</strong>: limited dexterity, tremors, paralysis, repetitive strain injury.</li>
<li><strong>Cognitive and learning</strong>: dyslexia, ADHD, memory impairments, autism, learning disabilities.</li>
<li><strong>Mental health</strong>: anxiety, depression, which affect attention and stress tolerance.</li>
<li><strong>Seizure and vestibular</strong>: photosensitive epilepsy, motion sensitivity.</li>
</ul>
<h3>The social model</h3>
<p>The <strong>social model of disability</strong> says people are disabled by barriers in their environment, not by their bodies. A blind person is not disabled by a website; they are disabled by a website with unlabelled buttons. Designers create or remove those barriers.</p>
<h3>Permanent, temporary, situational</h3>
<p>Someone with one arm, someone with a broken arm and a parent holding a baby all need one-handed use. Designing for permanent disability often helps many more people.</p>
<h3>Inclusive design</h3>
<p>Accessibility is about access for disabled people; inclusive design is the wider practice of designing for the full range of human diversity. Both work best from the start of a project.</p>`,
    why: `
<p>Accessible products reach more people, meet legal requirements (such as the Equality Act in the UK, the ADA in the US and the European Accessibility Act) and are usually easier for everyone to use. Fixing accessibility late is costly; building it in from the start is far cheaper. Most importantly, excluding people from services such as banking, health or education causes real harm, and designers have a direct role in preventing it.</p>`,
    example: `
<p>A bank's mobile app requires a precise swipe gesture to confirm payments. Customers with tremors, people using switch controls and people on a bumpy bus all struggle, and some cannot pay at all.</p>
<p>The team adds a large "Confirm payment" button as an alternative to the swipe, with clear focus and screen reader labels. Complaints drop, and analytics show many customers without any declared disability choose the button too.</p>`,
    walkthrough: [
      { title: 'Learn the range', body: 'List disability types and how each might affect your product.' },
      { title: 'Apply the social model', body: 'For a screen, list barriers rather than "problems with users".' },
      { title: 'Think in spectrums', body: 'For each barrier, note permanent, temporary and situational examples.' },
      { title: 'Listen to disabled people', body: 'Read or watch first-hand accounts of using technology.' },
      { title: 'Build it in', body: 'Add accessibility to your design process checklist from the start.' },
      { title: 'Include disabled participants', body: 'Plan to involve disabled people in research.' },
    ],
    mistakes: [
      { mistake: 'Treating accessibility as a final check.', fix: 'Include it from the start of every project.' },
      { mistake: 'Thinking only about blind users.', fix: 'Consider the full range of disabilities.' },
      { mistake: 'Designing for disabled people without involving them.', fix: 'Include disabled people in research and testing.' },
    ],
    quiz: [
      { q: 'What does the social model of disability say?', options: ['Disability is a medical problem', 'People are disabled by barriers in their environment', 'Disability is rare'], answer: 1, explain: 'Barriers, not bodies, disable people.' },
      { q: 'A parent holding a baby needs one-handed use. This is:', options: ['A permanent impairment', 'A situational impairment', 'Not relevant'], answer: 1, explain: 'Situational impairments benefit from accessible design.' },
      { q: 'When should accessibility be considered?', options: ['At the end', 'From the start', 'Only if required by law'], answer: 1, explain: 'Early is cheaper and better.' },
    ],
    exercise: {
      title: 'Barrier mapping',
      minutes: 45,
      brief: '<p>Map accessibility barriers in a service you use.</p>',
      steps: [
        'Choose a key task, such as booking a GP appointment online.',
        'List barriers for each disability type.',
        'Add permanent, temporary and situational examples.',
        'Suggest one change for each barrier.',
      ],
      deliverable: 'A barrier map with suggested changes.',
    },
    checklist: [
      'I know the range of disabilities.',
      'I can explain the social model.',
      'I think in permanent, temporary and situational terms.',
      'I plan to involve disabled people.',
    ],
    summary: [
      'Disability is common and varied.',
      'Barriers in design disable people.',
      'Designing for permanent disability helps many more people.',
      'Build accessibility in from the start.',
    ],
    reading: [
      { title: 'How people with disabilities use the web', url: 'https://www.w3.org/WAI/people-use-web/', source: 'W3C WAI' },
      { title: 'Introduction to web accessibility', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', source: 'W3C WAI' },
    ],
  },

  'wcag-basics': {
    objectives: [
      'Explain what WCAG is and how it is structured.',
      'Describe the four POUR principles and conformance levels.',
      'Find and read success criteria relevant to a design.',
    ],
    explanation: `
<p>The <strong>Web Content Accessibility Guidelines (WCAG)</strong>, published by the W3C, are the international standard for digital accessibility. They are referenced by laws and policies worldwide and apply to websites, apps and documents. WCAG 2.2 is the current version.</p>
<h3>POUR</h3>
<p>Guidelines are grouped under four principles. Content must be:</p>
<ul>
<li><strong>Perceivable</strong>: people can perceive it (text alternatives, captions, contrast).</li>
<li><strong>Operable</strong>: people can use it (keyboard access, enough time, no seizure triggers, clear navigation).</li>
<li><strong>Understandable</strong>: people can understand it (readable text, predictable behaviour, help with errors).</li>
<li><strong>Robust</strong>: it works with current and future assistive technologies (valid, semantic code).</li>
</ul>
<h3>Success criteria and levels</h3>
<p>Each guideline has testable <strong>success criteria</strong> at three levels: <strong>A</strong> (minimum), <strong>AA</strong> (the usual target in laws and policies) and <strong>AAA</strong> (enhanced). Most organisations aim for AA.</p>
<h3>Reading WCAG</h3>
<p>The official "Understanding" documents explain each criterion's intent, who it helps and examples. The "How to Meet WCAG" quick reference lets you filter criteria by topic and level.</p>`,
    why: `
<p>WCAG gives teams a shared, testable definition of accessibility. Designers who can read and apply it can catch problems early, explain requirements to stakeholders and work confidently with developers and auditors. Many public sector and large private organisations require WCAG AA conformance by law or contract.</p>`,
    example: `
<p>A product manager asks whether a new grey placeholder text style is "accessible enough". The designer looks up success criterion 1.4.3 Contrast (Minimum), Level AA, which requires 4.5:1 for normal text.</p>
<p>The grey measures 2.8:1, so it fails. The designer also notes that placeholders should not replace labels. The team uses a darker grey and visible labels, and the designer links the WCAG criterion in the design documentation.</p>`,
    walkthrough: [
      { title: 'Open the quick reference', body: 'Use the W3C "How to Meet WCAG" page.' },
      { title: 'Filter to AA', body: 'Filter to levels A and AA.' },
      { title: 'Read POUR', body: 'Skim criteria under each principle.' },
      { title: 'Pick five relevant criteria', body: 'Choose ones that apply to a design you are working on.' },
      { title: 'Read the Understanding docs', body: 'Read intent and examples for each.' },
      { title: 'Check your design', body: 'Evaluate your design against them.' },
    ],
    mistakes: [
      { mistake: 'Treating WCAG as the only goal.', fix: 'Meeting WCAG is the floor; test with real users too.' },
      { mistake: 'Not reading the intent.', fix: 'Read the Understanding documents for context.' },
      { mistake: 'Assuming AA covers everything.', fix: 'Consider AAA criteria where they matter for your users.' },
    ],
    quiz: [
      { q: 'What does POUR stand for?', options: ['Perceivable, Operable, Understandable, Robust', 'Possible, Open, Usable, Readable', 'Plain, Organised, Useful, Responsive'], answer: 0, explain: 'These are WCAG\'s four principles.' },
      { q: 'Which level is the usual legal target?', options: ['A', 'AA', 'AAA'], answer: 1, explain: 'AA is the common requirement.' },
      { q: 'What do the Understanding documents provide?', options: ['Code only', 'Intent, who it helps and examples', 'Legal advice'], answer: 1, explain: 'They explain each criterion.' },
    ],
    exercise: {
      title: 'WCAG mapping',
      minutes: 45,
      brief: '<p>Map WCAG criteria to a screen.</p>',
      steps: [
        'Choose one of your screens.',
        'Find ten relevant AA criteria.',
        'Check the screen against each.',
        'Record pass, fail or unsure with notes.',
      ],
      deliverable: 'A WCAG mapping table for the screen.',
    },
    checklist: [
      'I can explain POUR.',
      'I know the conformance levels.',
      'I can find and read criteria.',
      'I checked a design against WCAG.',
    ],
    summary: [
      'WCAG is the international accessibility standard.',
      'It is organised under POUR principles.',
      'Success criteria have A, AA and AAA levels; AA is typical.',
      'Read the Understanding docs for intent.',
    ],
    reading: [
      { title: 'How to Meet WCAG (quick reference)', url: 'https://www.w3.org/WAI/WCAG22/quickref/', source: 'W3C WAI' },
      { title: 'WCAG 2 overview', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', source: 'W3C WAI' },
    ],
  },

  'contrast-colour-independence': {
    objectives: [
      'Apply WCAG contrast requirements to text and interface elements.',
      'Measure contrast with tools.',
      'Avoid relying on colour alone to convey meaning.',
    ],
    explanation: `
<h3>Contrast requirements (WCAG AA)</h3>
<ul>
<li><strong>Normal text</strong>: at least <strong>4.5:1</strong> against its background.</li>
<li><strong>Large text</strong> (about 24px regular or 18.66px bold and above): at least <strong>3:1</strong>.</li>
<li><strong>Non-text elements</strong> such as input borders, icons and focus indicators: at least <strong>3:1</strong> against adjacent colours.</li>
</ul>
<p>Level AAA asks for 7:1 for normal text. Disabled controls and pure decoration are exempt, but consider whether low-contrast disabled states are still understandable.</p>
<h3>Measuring</h3>
<p>Use a contrast checker or plugin in your design tool. Check text over images and gradients at the worst point, and check every theme, including dark mode and hover states.</p>
<h3>Colour independence</h3>
<p>WCAG 1.4.1 says colour must not be the only way to convey information. Pair colour with text, icons, patterns or position:</p>
<ul>
<li>Errors: red border <em>plus</em> icon and message.</li>
<li>Charts: colours <em>plus</em> labels or patterns.</li>
<li>Links in text: colour <em>plus</em> underline.</li>
<li>Status: coloured dot <em>plus</em> a text label.</li>
</ul>`,
    why: `
<p>Low contrast affects people with low vision, older people (contrast sensitivity declines with age) and anyone using a phone in sunlight. About 1 in 12 men and 1 in 200 women have a colour vision deficiency, so colour-only cues exclude millions. Good contrast and colour independence also make interfaces faster for everyone to scan.</p>`,
    example: `
<p>A project management tool shows task status with coloured dots only: green, amber and red. A colour-blind team lead cannot tell "on track" from "at risk", and light grey text on white fails contrast at 2.6:1.</p>
<p>The designer adds text labels ("On track", "At risk", "Blocked"), distinct icons and darkens the grey to meet 4.5:1. Testing with a colour blindness simulator confirms everything is distinguishable.</p>`,
    walkthrough: [
      { title: 'Install a checker', body: 'Add a contrast plugin to your design tool.' },
      { title: 'Check text', body: 'Measure every text colour against its background.' },
      { title: 'Check UI elements', body: 'Measure borders, icons and focus indicators against neighbours.' },
      { title: 'Check every theme and state', body: 'Include dark mode, hover and disabled.' },
      { title: 'Find colour-only cues', body: 'Look for meaning conveyed only by colour.' },
      { title: 'Simulate', body: 'Use a colour blindness simulator and fix problems.' },
    ],
    mistakes: [
      { mistake: 'Light grey text for secondary information.', fix: 'Check it meets 4.5:1.' },
      { mistake: 'Charts distinguished by colour only.', fix: 'Add labels or patterns.' },
      { mistake: 'Checking light theme only.', fix: 'Check every theme and state.' },
    ],
    quiz: [
      { q: 'What contrast does normal text need at AA?', options: ['3:1', '4.5:1', '7:1'], answer: 1, explain: '4.5:1 for normal text.' },
      { q: 'What contrast do input borders need?', options: ['None', '3:1 against adjacent colours', '10:1'], answer: 1, explain: 'Non-text contrast requires 3:1.' },
      { q: 'Which shows an error without relying on colour alone?', options: ['Red border', 'Red text', 'Red border plus icon and message'], answer: 2, explain: 'Multiple cues make it perceivable.' },
    ],
    exercise: {
      title: 'Contrast audit',
      minutes: 45,
      brief: '<p>Audit contrast and colour use on a dashboard.</p>',
      steps: [
        'Measure contrast for all text and UI elements.',
        'List colour-only cues.',
        'Simulate colour blindness.',
        'Redesign failing elements.',
      ],
      deliverable: 'A contrast table and redesigned elements.',
    },
    checklist: [
      'Text meets 4.5:1 (or 3:1 if large).',
      'UI elements meet 3:1.',
      'Meaning never relies on colour alone.',
      'All themes and states are checked.',
    ],
    summary: [
      'Normal text needs 4.5:1, large text and UI elements 3:1.',
      'Measure with tools in every theme and state.',
      'Never rely on colour alone.',
      'Good contrast helps everyone.',
    ],
    reading: [
      { title: 'Understanding contrast (minimum)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', source: 'W3C WAI' },
      { title: 'Understanding use of colour', url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html', source: 'W3C WAI' },
    ],
  },

  'keyboard-focus': {
    objectives: [
      'Ensure everything works with a keyboard alone.',
      'Design visible focus indicators and logical focus order.',
      'Handle focus in modals, menus and dynamic content.',
    ],
    explanation: `
<p>Many people navigate without a mouse: keyboard users, switch users, screen reader users and people using voice control. Everything you can do with a mouse must be possible with a keyboard.</p>
<h3>Basic keys</h3>
<ul>
<li><strong>Tab / Shift+Tab</strong>: move between interactive elements.</li>
<li><strong>Enter</strong>: activate links and buttons.</li>
<li><strong>Space</strong>: activate buttons, toggle checkboxes.</li>
<li><strong>Arrow keys</strong>: move within components such as radio groups, tabs and menus.</li>
<li><strong>Escape</strong>: close modals and menus.</li>
</ul>
<h3>Focus indicators</h3>
<p>Focus must always be visible (WCAG 2.4.7) and, at AA in WCAG 2.2, not hidden by other content such as sticky headers (2.4.11). Design a strong indicator, such as a thick outline with offset, with at least 3:1 contrast.</p>
<h3>Focus order</h3>
<p>Focus should follow a logical reading order, usually the visual order. Annotate focus order for complex layouts.</p>
<h3>Managing focus</h3>
<ul>
<li>When a modal opens, move focus into it, keep it there until it closes, then return focus to the trigger.</li>
<li>After deleting an item, move focus somewhere sensible.</li>
<li>Provide a "Skip to main content" link.</li>
<li>Avoid keyboard traps: people must always be able to move away.</li>
</ul>`,
    why: `
<p>Keyboard access is fundamental: if a control cannot be reached by keyboard, it is unusable for many disabled people. Invisible focus leaves keyboard users lost. Focus management in modals and dynamic content is a frequent failure that designers can prevent by specifying it clearly before development begins.</p>`,
    example: `
<p>A ticketing site's seat map works only with a mouse. Keyboard users can tab to the map but not select seats, and the custom focus style was removed because it "looked ugly".</p>
<p>The designer specifies arrow key navigation between seats, Enter to select, a visible focus ring with 3:1 contrast, a list view alternative for screen reader users and focus returning to the "Selected seats" summary after each choice. Developers build it from the spec, and keyboard users can now book.</p>`,
    walkthrough: [
      { title: 'Unplug the mouse', body: 'Try a key task using only the keyboard.' },
      { title: 'Check every control', body: 'Make sure each can be reached and used.' },
      { title: 'Check focus visibility', body: 'Is it always obvious where focus is?' },
      { title: 'Check order', body: 'Does focus move in a logical order?' },
      { title: 'Check modals and menus', body: 'Does focus move in, stay in and return correctly?' },
      { title: 'Annotate', body: 'Document focus order and behaviour in designs.' },
    ],
    mistakes: [
      { mistake: 'Removing focus outlines for aesthetics.', fix: 'Design a better visible focus style.' },
      { mistake: 'Custom controls that ignore the keyboard.', fix: 'Specify keyboard behaviour for every custom control.' },
      { mistake: 'Focus lost after closing modals.', fix: 'Return focus to the trigger.' },
    ],
    quiz: [
      { q: 'Which key usually closes a modal?', options: ['Tab', 'Escape', 'Space'], answer: 1, explain: 'Escape is the convention.' },
      { q: 'Where should focus go when a modal closes?', options: ['Top of page', 'Back to the element that opened it', 'Nowhere'], answer: 1, explain: 'Returning focus keeps people oriented.' },
      { q: 'What is a keyboard trap?', options: ['A shortcut', 'A place where keyboard users cannot move away', 'A focus style'], answer: 1, explain: 'Traps block navigation.' },
    ],
    exercise: {
      title: 'Keyboard test',
      minutes: 45,
      brief: '<p>Test a website using only the keyboard.</p>',
      steps: [
        'Complete a key task with keyboard only.',
        'Record every problem.',
        'Annotate the correct focus order for one screen.',
        'Design a focus indicator that meets contrast requirements.',
      ],
      deliverable: 'A problem log, a focus order annotation and a focus style.',
    },
    checklist: [
      'Everything works by keyboard.',
      'Focus is always visible.',
      'Order is logical.',
      'Modals and dynamic content manage focus.',
    ],
    summary: [
      'All functions must work by keyboard.',
      'Design visible, high-contrast focus indicators.',
      'Keep focus order logical.',
      'Manage focus in modals and dynamic content.',
    ],
    reading: [
      { title: 'Keyboard accessibility', url: 'https://webaim.org/techniques/keyboard/', source: 'WebAIM' },
      { title: 'Understanding focus not obscured', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html', source: 'W3C WAI' },
    ],
  },

  'screen-readers-semantics': {
    objectives: [
      'Explain how screen readers work and how people navigate with them.',
      'Design with semantic structure: headings, landmarks, lists and labels.',
      'Annotate designs with accessible names and roles.',
    ],
    explanation: `
<p>A <strong>screen reader</strong> turns on-screen content into speech or braille. Common ones are JAWS and NVDA on Windows, VoiceOver on Apple devices and TalkBack on Android.</p>
<h3>How people navigate</h3>
<p>Screen reader users rarely listen to a page from top to bottom. They jump by <strong>headings</strong>, <strong>landmarks</strong> (header, navigation, main, footer), <strong>links</strong> and <strong>form fields</strong>. That makes structure essential.</p>
<h3>Semantics</h3>
<p><strong>Semantic</strong> code describes what things are: a button is a button, a heading is a heading, a list is a list. Screen readers announce the <strong>role</strong> (button), <strong>name</strong> (Add to basket) and <strong>state</strong> (expanded, selected).</p>
<h3>What designers specify</h3>
<ul>
<li><strong>Heading structure</strong>: one H1 per page, logical levels without skipping.</li>
<li><strong>Landmarks</strong>: which areas are header, navigation, main and footer.</li>
<li><strong>Accessible names</strong> for icon buttons ("Close dialog", not "X").</li>
<li><strong>Unique link text</strong>: "Read more about pricing", not five "Read more" links.</li>
<li><strong>Alt text</strong> for meaningful images; decorative images marked as such.</li>
<li><strong>Announcements</strong> for dynamic changes ("3 results found").</li>
</ul>`,
    why: `
<p>Without good structure and labels, screen reader users face a confusing stream of "button, button, link, image". Designers decide much of the structure and naming, so annotating it removes guesswork for developers. It also improves search engine understanding and benefits voice control users, who say the names of controls to activate them.</p>`,
    example: `
<p>A screen reader user visits a recipe site. Every recipe card has a heart icon announced as "button" with no name, and headings jump from H1 to H4. Navigating by heading is useless, and they cannot tell what each button does.</p>
<p>The designer annotates the page: H1 for the page title, H2 for each recipe name, heart buttons named "Save [recipe name]" with a pressed state, and a live announcement "Saved to your recipes". After the fix, the user can scan recipes by heading and save them confidently.</p>`,
    walkthrough: [
      { title: 'Try a screen reader', body: 'Turn on VoiceOver or NVDA and browse a familiar site.' },
      { title: 'Navigate by headings', body: 'Use heading navigation and note gaps.' },
      { title: 'Annotate headings', body: 'Mark heading levels on your design.' },
      { title: 'Annotate landmarks', body: 'Mark header, nav, main and footer regions.' },
      { title: 'Name controls', body: 'Write accessible names for icon buttons and links.' },
      { title: 'Specify announcements', body: 'Note what should be announced on dynamic changes.' },
    ],
    mistakes: [
      { mistake: 'Choosing heading levels for size.', fix: 'Choose levels for structure; style separately.' },
      { mistake: 'Icon buttons without names.', fix: 'Give every control an accessible name.' },
      { mistake: 'Repeated vague link text.', fix: 'Make links meaningful out of context.' },
    ],
    quiz: [
      { q: 'How do most screen reader users navigate?', options: ['Listening top to bottom', 'Jumping by headings, landmarks, links and fields', 'Using a mouse'], answer: 1, explain: 'Structure enables efficient navigation.' },
      { q: 'What three things does a screen reader announce for a control?', options: ['Colour, size, position', 'Role, name and state', 'Font, weight, spacing'], answer: 1, explain: 'Role, name and state describe controls.' },
      { q: 'What is the best name for an X icon closing a dialog?', options: ['X', 'Button', 'Close dialog'], answer: 2, explain: 'Names should describe the action.' },
    ],
    exercise: {
      title: 'Accessibility annotations',
      minutes: 60,
      brief: '<p>Annotate a screen for screen reader users.</p>',
      steps: [
        'Annotate heading levels and landmarks.',
        'Name every icon button and ambiguous link.',
        'Write alt text or mark images decorative.',
        'Specify announcements for dynamic changes.',
      ],
      deliverable: 'An annotated screen ready for developers.',
    },
    checklist: [
      'Headings are logical.',
      'Landmarks are marked.',
      'All controls have names.',
      'Dynamic changes are announced.',
    ],
    summary: [
      'Screen readers announce role, name and state.',
      'Users navigate by structure.',
      'Designers specify headings, landmarks, names and alt text.',
      'Annotations remove guesswork.',
    ],
    reading: [
      { title: 'Using screen readers to test', url: 'https://webaim.org/articles/screenreader_testing/', source: 'WebAIM' },
      { title: 'Page structure tutorial', url: 'https://www.w3.org/WAI/tutorials/page-structure/', source: 'W3C WAI' },
    ],
  },

  'accessible-forms': {
    objectives: [
      'Design forms that work for screen reader, keyboard and cognitive accessibility.',
      'Label fields, group questions and describe errors accessibly.',
      'Avoid common accessibility failures in forms.',
    ],
    explanation: `
<p>Forms are where accessibility failures most often block people completely. Key requirements:</p>
<h3>Labels and instructions</h3>
<ul>
<li>Every field has a visible <strong>label</strong>, programmatically linked to it.</li>
<li>Hints (format, examples) sit between label and field and are linked too.</li>
<li>Required and optional fields are marked in text, not just with an asterisk colour.</li>
</ul>
<h3>Grouping</h3>
<p>Related controls, such as radio buttons or a date of birth split into day, month and year, are grouped with a <strong>fieldset</strong> and a <strong>legend</strong> that asks the question.</p>
<h3>Errors</h3>
<ul>
<li>Describe errors in text, next to the field, linked to it.</li>
<li>Show an error summary at the top on submit, with links to each field, and move focus to it.</li>
<li>Say how to fix the problem.</li>
</ul>
<h3>Input help</h3>
<ul>
<li>Use correct input types and <strong>autocomplete</strong> attributes so browsers and password managers can fill fields.</li>
<li>Do not ask people to re-enter information they have already given in the same process (WCAG 2.2, 3.3.7).</li>
<li>Do not require cognitive tests such as remembering passwords or solving puzzles without an alternative (3.3.8).</li>
<li>Give enough time, or allow time limits to be extended.</li>
</ul>`,
    why: `
<p>Forms gate access to services: applications, purchases, bookings and sign-ins. An unlabelled field or an inaccessible error can stop a disabled person from completing a task entirely. Accessible forms also reduce errors and drop-off for everyone, which improves conversion and lowers support costs.</p>`,
    example: `
<p>A university application form uses placeholders instead of labels, asterisks in red for required fields, a custom date picker that does not work by keyboard and errors shown only as red borders. A blind applicant using a screen reader cannot tell which fields are which.</p>
<p>The redesign adds visible labels and hints, "(optional)" text, a day/month/year date input grouped with a legend, autocomplete on name and address fields, and an error summary that receives focus. The applicant can now complete it independently.</p>`,
    walkthrough: [
      { title: 'Check labels', body: 'Ensure every field has a visible, linked label.' },
      { title: 'Group related controls', body: 'Use fieldset and legend for radio groups and multi-part inputs.' },
      { title: 'Add hints', body: 'Add format hints linked to fields.' },
      { title: 'Design errors', body: 'Inline messages plus a linked summary.' },
      { title: 'Add autocomplete', body: 'Annotate autocomplete values for personal data fields.' },
      { title: 'Test', body: 'Complete the form with keyboard and screen reader.' },
    ],
    mistakes: [
      { mistake: 'Placeholders as labels.', fix: 'Use visible labels.' },
      { mistake: 'Radio buttons without a group question.', fix: 'Use fieldset and legend.' },
      { mistake: 'Errors only in colour.', fix: 'Add text messages linked to fields.' },
    ],
    quiz: [
      { q: 'What groups radio buttons accessibly?', options: ['A div', 'Fieldset and legend', 'A border'], answer: 1, explain: 'The legend gives the group question.' },
      { q: 'What does autocomplete help with?', options: ['Animation', 'Browsers and password managers filling fields', 'Validation'], answer: 1, explain: 'It reduces typing and errors.' },
      { q: 'Where should focus go when a form with errors is submitted?', options: ['First field', 'Error summary', 'Submit button'], answer: 1, explain: 'The summary lists all problems.' },
    ],
    exercise: {
      title: 'Accessible form spec',
      minutes: 60,
      brief: '<p>Make a contact form fully accessible.</p>',
      steps: [
        'Design labels, hints and groups.',
        'Design inline errors and an error summary.',
        'Annotate autocomplete values.',
        'Test with keyboard and a screen reader.',
      ],
      deliverable: 'An annotated accessible form design with test notes.',
    },
    checklist: [
      'Every field has a visible label.',
      'Groups have legends.',
      'Errors are text-based and summarised.',
      'Autocomplete is specified.',
    ],
    summary: [
      'Label every field visibly.',
      'Group related controls with legends.',
      'Describe errors in text with a summary.',
      'Use autocomplete and avoid cognitive tests.',
    ],
    reading: [
      { title: 'Forms tutorial', url: 'https://www.w3.org/WAI/tutorials/forms/', source: 'W3C WAI' },
      { title: 'Creating accessible forms', url: 'https://webaim.org/techniques/forms/', source: 'WebAIM' },
    ],
  },
};
