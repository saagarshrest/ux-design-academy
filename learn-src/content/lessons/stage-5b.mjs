// @ts-check
/* Stage 5 (part 2): Figma and design tools. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'responsive-adaptive': {
    objectives: [
      'Explain the difference between responsive and adaptive design.',
      'Build frames that stretch using auto layout, min and max widths, and wrap.',
      'Design the key breakpoints a product needs and show how layouts change between them.',
    ],
    explanation: `
<p><strong>Responsive</strong> layouts flow continuously: columns stretch, text wraps and items reflow as the screen width changes. <strong>Adaptive</strong> layouts switch between a set of fixed designs at specific widths. Most real products combine the two, with fluid layouts that also change structure at a few <strong>breakpoints</strong>.</p>
<h3>Tools in a design file</h3>
<ul>
<li><strong>Auto layout with fill container</strong> lets content stretch with its parent.</li>
<li><strong>Min and max width</strong> stop elements from becoming too narrow or too wide. A paragraph capped at about 70 characters per line stays readable.</li>
<li><strong>Wrap</strong> lets cards move onto a new row when space runs out.</li>
<li><strong>Layout grids</strong> per breakpoint show columns, gutters and margins.</li>
</ul>
<h3>What to design</h3>
<p>You do not need every width. Design the smallest supported width, a common phone, a tablet and a desktop width, and test the in-between widths by dragging the frame. Note structural changes, such as a sidebar becoming a bottom bar, with annotations.</p>`,
    why: `
<p>People use products on phones, tablets, laptops and large monitors, often switching mid-task. A design that only works at one width forces developers to guess, and the guesses usually produce cramped or stretched layouts. Building resizable frames shows the real behaviour and catches problems before they are coded.</p>`,
    example: `
<p>A recipe site's desktop design has three columns of cards and a filter sidebar. The designer builds the card grid as a wrapping auto layout with cards at a minimum of 260px, and caps the article text at 680px.</p>
<p>Dragging the frame narrower, the grid drops to two columns, then one. At tablet width, the sidebar becomes a "Filters" button that opens a sheet, shown as a separate frame with an annotation. Developers receive a clear picture of both the fluid and the adaptive behaviour.</p>`,
    walkthrough: [
      { title: 'Choose breakpoints', body: 'Pick three or four widths based on your users\' devices and content.' },
      { title: 'Set up grids', body: 'Create a layout grid style for each breakpoint.' },
      { title: 'Build fluid sections', body: 'Use auto layout, fill container and wrap for main sections.' },
      { title: 'Add limits', body: 'Set min and max widths on cards and text blocks.' },
      { title: 'Drag-test', body: 'Resize the frame slowly and note where it breaks.' },
      { title: 'Design structural changes', body: 'Where layout must change, design the variant and annotate the breakpoint.' },
    ],
    mistakes: [
      { mistake: 'Designing desktop only and hoping it shrinks.', fix: 'Start with or include the smallest width early.' },
      { mistake: 'Lines of text stretching across wide screens.', fix: 'Set a max width for reading content.' },
      { mistake: 'Leaving behaviour between breakpoints undefined.', fix: 'Drag-test and annotate how items stretch or wrap.' },
    ],
    quiz: [
      { q: 'What is the difference between responsive and adaptive?', options: ['There is none', 'Responsive flows continuously; adaptive switches between fixed layouts', 'Adaptive is only for apps'], answer: 1, explain: 'Most products mix both.' },
      { q: 'Why set a max width on paragraphs?', options: ['To save space', 'Very long lines are hard to read', 'Figma requires it'], answer: 1, explain: 'Comfortable line length aids reading.' },
      { q: 'Which auto layout setting moves cards to a new row when space runs out?', options: ['Hug', 'Wrap', 'Absolute position'], answer: 1, explain: 'Wrap reflows items onto new rows.' },
    ],
    exercise: {
      title: 'Responsive product listing',
      minutes: 60,
      brief: '<p>Design a product listing page that works from 360px to 1440px wide.</p>',
      steps: [
        'Set up grid styles for three breakpoints.',
        'Build the card grid with wrap and minimum widths.',
        'Design how filters change on small screens.',
        'Capture screenshots at four widths and annotate changes.',
      ],
      deliverable: 'A resizable layout with annotated screenshots at four widths.',
    },
    checklist: [
      'I chose breakpoints deliberately.',
      'Sections stretch with fill container.',
      'Text has a sensible max width.',
      'Structural changes are designed and annotated.',
    ],
    summary: [
      'Responsive flows; adaptive switches; most products do both.',
      'Auto layout, min and max widths, and wrap build fluid frames.',
      'Design a few key breakpoints and drag-test between them.',
      'Annotate behaviour for developers.',
    ],
    reading: [
      { title: 'Responsive web design basics', url: 'https://web.dev/articles/responsive-web-design-basics', source: 'web.dev' },
      { title: 'Mobile first is not mobile only', url: 'https://www.nngroup.com/articles/mobile-first-not-mobile-only/', source: 'Nielsen Norman Group' },
    ],
  },

  'prototyping': {
    objectives: [
      'Connect frames into a clickable prototype with triggers and actions.',
      'Choose suitable transitions and use overlays and scrolling.',
      'Plan a prototype around the tasks you want to test.',
    ],
    explanation: `
<p>A <strong>prototype</strong> links static frames so people can click, tap and move through a flow as if it were real. Design tools build these with three parts:</p>
<ul>
<li><strong>Trigger</strong>: what the person does, such as on click, on drag, while hovering or after a delay.</li>
<li><strong>Action</strong>: what happens, such as navigate to a frame, open an overlay, scroll to a section, swap a component or go back.</li>
<li><strong>Animation</strong>: how it happens, such as instant, dissolve, move in, or smart animate (which animates matching layers between frames).</li>
</ul>
<h3>Useful features</h3>
<p><strong>Overlays</strong> show modals, menus and sheets on top of a screen. <strong>Scroll behaviour</strong> lets long frames scroll while headers stay fixed. <strong>Flows</strong> (starting points) let you share several journeys from one file.</p>
<h3>Plan around tasks</h3>
<p>Prototype the paths you need to test or demonstrate, not every button. List the tasks first, then wire only those paths, adding sensible dead ends ("This feature isn't in the prototype") where needed.</p>`,
    why: `
<p>Static screens hide problems with flow: missing back routes, confusing order, unclear feedback. A prototype lets you test with users, demo to stakeholders and show developers the intended behaviour. It is far cheaper to discover a broken journey in a prototype than in code.</p>`,
    example: `
<p>A team is redesigning a parcel redelivery service. They list two test tasks: rebook a delivery for Saturday, and change the address to a neighbour. The designer wires only those paths across nine frames: date picker as an overlay, smart animate when the summary card expands, and a confirmation screen.</p>
<p>In testing, three of five participants try to tap the parcel status card to change the date. The team had not wired it because they did not expect it, and that tells them where people expect the control to be.</p>`,
    walkthrough: [
      { title: 'List the tasks', body: 'Write the flows the prototype must support.' },
      { title: 'Prepare the frames', body: 'Make sure each step has a frame, including errors and confirmations.' },
      { title: 'Set a starting point', body: 'Create a flow starting on the first screen.' },
      { title: 'Wire interactions', body: 'Add triggers, actions and animations for the main path.' },
      { title: 'Add overlays and scrolling', body: 'Use overlays for sheets and menus, and fix headers while content scrolls.' },
      { title: 'Play it through', body: 'Run the prototype on the target device and fix dead ends.' },
    ],
    mistakes: [
      { mistake: 'Wiring every button in the product.', fix: 'Prototype only the tasks you need.' },
      { mistake: 'Flashy transitions that slow people down.', fix: 'Use quick, purposeful animation.' },
      { mistake: 'Testing a phone prototype on a desktop screen.', fix: 'Run it on the real device type where possible.' },
    ],
    quiz: [
      { q: 'What are the three parts of a prototype interaction?', options: ['Colour, type, spacing', 'Trigger, action, animation', 'Frame, page, file'], answer: 1, explain: 'Each link combines these three.' },
      { q: 'Which action suits a bottom sheet?', options: ['Navigate', 'Open overlay', 'Scroll to'], answer: 1, explain: 'Overlays sit on top of the current screen.' },
      { q: 'How should you scope a prototype?', options: ['Everything clickable', 'Around the tasks you want to test or show', 'Only the home screen'], answer: 1, explain: 'Task-led prototypes are faster and more useful.' },
    ],
    exercise: {
      title: 'Task-based prototype',
      minutes: 60,
      brief: '<p>Build a clickable prototype for one task in a food ordering app.</p>',
      steps: [
        'Choose the task, for example "order a vegetarian lunch for pick-up at 12:30".',
        'Design or reuse the frames needed.',
        'Wire the path with at least one overlay and one smart animate.',
        'Ask someone to complete the task while you watch silently.',
      ],
      deliverable: 'A shareable prototype link plus three notes from watching someone use it.',
    },
    checklist: [
      'The prototype supports specific tasks.',
      'Overlays and scrolling behave correctly.',
      'Animations are quick and purposeful.',
      'I ran it on the target device.',
    ],
    summary: [
      'Prototypes combine triggers, actions and animations.',
      'Overlays, scrolling and flows make prototypes realistic.',
      'Scope prototypes around tasks.',
      'They reveal flow problems before code.',
    ],
    reading: [
      { title: 'UX prototypes: low fidelity vs. high fidelity', url: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/', source: 'Nielsen Norman Group' },
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
    ],
  },

  'interactive-states': {
    objectives: [
      'Design the interactive states every control needs.',
      'Build interactive components so prototypes respond to hover and press.',
      'Show focus states clearly for keyboard users.',
    ],
    explanation: `
<p>Interactive elements look different depending on what is happening to them. The common <strong>states</strong> are:</p>
<ul>
<li><strong>Default</strong>: resting.</li>
<li><strong>Hover</strong>: a pointer is over it (desktop only, so never rely on it alone).</li>
<li><strong>Focus</strong>: selected by keyboard; needs a clearly visible indicator.</li>
<li><strong>Pressed or active</strong>: being clicked or tapped.</li>
<li><strong>Selected or checked</strong>: for toggles, tabs, checkboxes.</li>
<li><strong>Disabled</strong>: unavailable, ideally with a reason given nearby.</li>
<li><strong>Loading</strong> and <strong>error</strong>: for buttons that submit and fields that validate.</li>
</ul>
<h3>Interactive components</h3>
<p>When states are variants in a component set, you can add interactions between the variants themselves: "while hovering, change to Hover", "on click, change to Pressed". Every instance then responds in prototypes without extra wiring.</p>
<h3>Focus matters</h3>
<p>Keyboard and switch users depend on the focus state to know where they are. Make it obvious, for example a 2px outline with an offset in a colour that contrasts with both the component and the background.</p>`,
    why: `
<p>States are feedback: they tell people the interface noticed them. Missing states make products feel broken, and a missing focus state can make a product unusable for keyboard users. Designing states explicitly also prevents developers inventing their own inconsistent versions.</p>`,
    example: `
<p>A developer asks what a checkbox looks like when it is focused and checked at the same time. The design only shows checked and unchecked.</p>
<p>The designer builds a checkbox set with properties for Checked (true, false, indeterminate) and State (default, hover, focus, disabled), adds an error version with a message, and wires interactive variants so it toggles on click in prototypes. The question never comes up again for that component.</p>`,
    walkthrough: [
      { title: 'List states per component', body: 'For each control, write down every state it can be in.' },
      { title: 'Design focus first', body: 'Create a consistent, high-contrast focus style for all controls.' },
      { title: 'Build variants', body: 'Add each state as a variant value.' },
      { title: 'Add interactions', body: 'Wire hover, press and toggle between variants.' },
      { title: 'Test combinations', body: 'Check states that combine, such as focused and checked.' },
      { title: 'Document', body: 'Show a state matrix next to the component.' },
    ],
    mistakes: [
      { mistake: 'No focus state.', fix: 'Design a clear focus indicator for every interactive element.' },
      { mistake: 'Disabled buttons with no explanation.', fix: 'Explain why nearby, or keep the button enabled and validate on submit.' },
      { mistake: 'Relying on hover to reveal information.', fix: 'Touch screens have no hover; make important things visible.' },
    ],
    quiz: [
      { q: 'Which state do keyboard users rely on most?', options: ['Hover', 'Focus', 'Disabled'], answer: 1, explain: 'Focus shows where they are.' },
      { q: 'Why not rely on hover?', options: ['It is ugly', 'Touch screens do not have hover', 'It is slow'], answer: 1, explain: 'Many users never hover.' },
      { q: 'What does an interactive component do?', options: ['Wires state changes between its own variants', 'Exports code', 'Adds animation to pages'], answer: 0, explain: 'Instances then respond automatically.' },
    ],
    exercise: {
      title: 'State matrix',
      minutes: 45,
      brief: '<p>Design a full state matrix for a text input.</p>',
      steps: [
        'List states: default, hover, focus, filled, error, disabled, read-only.',
        'Build them as variants with labels and help text.',
        'Add focus interaction in a prototype.',
        'Check contrast of the focus indicator and error text.',
      ],
      deliverable: 'A text input component with a documented state matrix.',
    },
    checklist: [
      'Every control has all its states.',
      'Focus is clearly visible.',
      'Disabled states are explained.',
      'Interactive variants work in prototypes.',
    ],
    summary: [
      'Controls need default, hover, focus, pressed, selected, disabled, loading and error states.',
      'Focus is essential for keyboard users.',
      'Interactive components make prototypes respond automatically.',
      'Document states so nothing is invented later.',
    ],
    reading: [
      { title: 'Focus visible (WCAG 2.4.7)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html', source: 'W3C WAI' },
      { title: 'States', url: 'https://m3.material.io/foundations/interaction/states/overview', source: 'Material Design 3' },
    ],
  },

  'libraries-collaboration': {
    objectives: [
      'Publish and use shared libraries of components and styles.',
      'Collaborate through comments, branching and version history.',
      'Manage library updates without breaking other people\'s work.',
    ],
    explanation: `
<p>A <strong>library</strong> is a file whose components, styles and variables are published so other files can use them. Teams usually have one core library (the design system) and product files that consume it.</p>
<h3>Publishing and updating</h3>
<p>When the library owner publishes changes, consumers are notified and can review and accept updates. Write a short description with each publish so people know what changed and whether anything might break.</p>
<h3>Collaboration tools</h3>
<ul>
<li><strong>Comments</strong>: pin feedback to the exact spot. Resolve comments when done.</li>
<li><strong>Version history</strong>: name versions at milestones ("Ready for test round 2") so you can return to them.</li>
<li><strong>Branching</strong> (on some plans): work on changes separately, then review and merge, like code branches.</li>
<li><strong>Multiplayer editing</strong>: several people in a file at once. Agree who owns which pages to avoid clashes.</li>
</ul>`,
    why: `
<p>Design is a team activity. Shared libraries keep many designers consistent, and good collaboration habits stop work being overwritten, lost or reviewed in the wrong version. On larger teams, managing library updates carefully is as important as designing the components.</p>`,
    example: `
<p>A library owner changes the spacing inside the card component and publishes without a note. Product designers accept the update and discover days later that several carefully balanced screens now overflow.</p>
<p>The team adopts a routine: changes are made on a branch, reviewed by a second designer, published with a clear note ("Card: padding 16→20px. Check tight layouts."), and announced in the team channel. Product designers review updates before accepting, and named versions let anyone roll back a screen if needed.</p>`,
    walkthrough: [
      { title: 'Create a library file', body: 'Move components, styles and variables into one file.' },
      { title: 'Publish', body: 'Publish the library with a description.' },
      { title: 'Enable it in a product file', body: 'Turn on the library and use its components.' },
      { title: 'Make a change', body: 'Edit a component, publish with a change note and accept the update in the product file.' },
      { title: 'Use comments', body: 'Leave and resolve comments with a teammate.' },
      { title: 'Name a version', body: 'Save a named version at a milestone.' },
    ],
    mistakes: [
      { mistake: 'Publishing without notes.', fix: 'Describe every change and its impact.' },
      { mistake: 'Copying components instead of using the library.', fix: 'Use library instances so updates flow through.' },
      { mistake: 'Leaving comments unresolved for weeks.', fix: 'Resolve or reply regularly so the file stays readable.' },
    ],
    quiz: [
      { q: 'What is a library?', options: ['A folder of images', 'A file whose components and styles are published for others to use', 'A plugin'], answer: 1, explain: 'Libraries share design assets across files.' },
      { q: 'Why name versions?', options: ['To return to milestones easily', 'It saves storage', 'It is required to publish'], answer: 0, explain: 'Named versions make history useful.' },
      { q: 'What should accompany a library publish?', options: ['Nothing', 'A note describing changes and impact', 'A new file'], answer: 1, explain: 'Notes help consumers decide when to accept.' },
    ],
    exercise: {
      title: 'Library round trip',
      minutes: 45,
      brief: '<p>Practise publishing and consuming a library.</p>',
      steps: [
        'Move your Stage 5 components into a library file and publish.',
        'Use them in a separate product file.',
        'Change one component and publish with a note.',
        'Accept the update and check the product file.',
      ],
      deliverable: 'A library and product file with a documented update.',
    },
    checklist: [
      'Components and styles live in a library.',
      'Product files use library instances.',
      'Publishes include change notes.',
      'I use comments and named versions.',
    ],
    summary: [
      'Libraries share components, styles and variables.',
      'Publish with notes; review updates before accepting.',
      'Comments, versions and branching support teamwork.',
      'Good habits prevent lost and broken work.',
    ],
    reading: [
      { title: 'Design critiques', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
    ],
  },

  'handoff': {
    objectives: [
      'Prepare designs so developers can build them accurately.',
      'Annotate behaviour, states, content rules and accessibility.',
      'Work with developers through handoff rather than throwing files over the wall.',
    ],
    explanation: `
<p><strong>Handoff</strong> is how designs become code. Modern tools let developers inspect measurements, colours, variables and export assets, but inspection only shows what is drawn. Developers also need to know what is <em>not</em> drawn.</p>
<h3>What to include</h3>
<ul>
<li><strong>Final screens</strong> clearly marked as ready, separate from explorations.</li>
<li><strong>States</strong>: empty, loading, error, success, and component states.</li>
<li><strong>Behaviour</strong>: what happens on click, how things animate, what is responsive.</li>
<li><strong>Content rules</strong>: maximum lengths, truncation, sorting, formatting of dates and money.</li>
<li><strong>Accessibility</strong>: heading levels, focus order, labels for icons, alt text.</li>
<li><strong>Edge cases</strong>: very long names, zero items, slow networks, permissions.</li>
</ul>
<h3>Handoff is a conversation</h3>
<p>Walk developers through the design before they start, invite questions early, and review builds as they progress. Many teams add a developer to design reviews and a designer to code reviews for UI changes.</p>`,
    why: `
<p>Most gaps between design and the shipped product come from missing information, not poor development. Clear handoff reduces rework, avoids guessed behaviour and builds trust between design and engineering. It also makes you far more effective as a designer, because your intent actually reaches users.</p>`,
    example: `
<p>A designer hands over a team members page with one screen. The developer builds it, and in testing a customer with 400 team members finds the page unusable, while a new account sees a blank table.</p>
<p>For the next feature, the designer adds annotated frames: the empty state with a call to action, pagination after 50 rows, long name truncation with a tooltip, loading skeletons, an error banner, focus order and labels for the icon buttons. A 30-minute walkthrough with the developer surfaces two more questions, answered before any code is written.</p>`,
    walkthrough: [
      { title: 'Mark what is ready', body: 'Move approved frames to a "Ready for dev" page or section.' },
      { title: 'Add states and edge cases', body: 'Design empty, loading, error and extreme content cases.' },
      { title: 'Annotate', body: 'Add notes for behaviour, content rules and accessibility.' },
      { title: 'Check components and tokens', body: 'Ensure library components and variables are used so inspection shows names, not raw values.' },
      { title: 'Walk through', body: 'Present the design to developers and log questions.' },
      { title: 'Review the build', body: 'Compare the implementation with the design and agree fixes.' },
    ],
    mistakes: [
      { mistake: 'Handing over only the happy path.', fix: 'Include states and edge cases.' },
      { mistake: 'Assuming inspection is enough.', fix: 'Annotate behaviour and rules that cannot be seen.' },
      { mistake: 'Disappearing after handoff.', fix: 'Stay available and review the build.' },
    ],
    quiz: [
      { q: 'What can inspection tools not show?', options: ['Colours', 'Spacing', 'Behaviour and content rules'], answer: 2, explain: 'Inspection shows what is drawn, not what happens.' },
      { q: 'Which belongs in handoff?', options: ['Only the final hero screen', 'States, edge cases and accessibility notes', 'All explorations'], answer: 1, explain: 'Developers need the full picture.' },
      { q: 'Why review the build?', options: ['To find blame', 'To catch differences while they are cheap to fix', 'It is optional'], answer: 1, explain: 'Early review prevents drift.' },
    ],
    exercise: {
      title: 'Handoff package',
      minutes: 60,
      brief: '<p>Prepare a handoff for one screen you have designed.</p>',
      steps: [
        'Add empty, loading and error states.',
        'Add at least five annotations covering behaviour, content and accessibility.',
        'List three edge cases and how they are handled.',
        'Ask a developer or peer what is still unclear.',
      ],
      deliverable: 'An annotated handoff page plus a list of questions received.',
    },
    checklist: [
      'Ready screens are separate from explorations.',
      'States and edge cases are designed.',
      'Behaviour, content and accessibility are annotated.',
      'I walked developers through it.',
    ],
    summary: [
      'Handoff turns designs into code.',
      'Include states, behaviour, content rules, accessibility and edge cases.',
      'Use components and tokens so inspection is meaningful.',
      'Treat handoff as an ongoing conversation.',
    ],
    reading: [
      { title: 'Wireflows', url: 'https://www.nngroup.com/articles/wireflows/', source: 'Nielsen Norman Group' },
      { title: 'Making your service accessible', url: 'https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction', source: 'GOV.UK Service Manual' },
    ],
  },

  'design-system-organisation': {
    objectives: [
      'Structure a design system file so components are easy to find.',
      'Separate foundations, components and patterns.',
      'Document usage alongside components.',
    ],
    explanation: `
<p>A design system file is used by many people, so its organisation matters as much as its contents. A common structure has three layers:</p>
<ul>
<li><strong>Foundations</strong>: colour, typography, spacing, radius, elevation, grids, icons. Usually variables and styles.</li>
<li><strong>Components</strong>: buttons, inputs, selects, checkboxes, cards, navigation, modals.</li>
<li><strong>Patterns</strong>: combinations solving common problems, such as a sign-in form, a filter bar or an empty state.</li>
</ul>
<h3>Page structure</h3>
<p>Give each component or group its own page, or group related components on a page with clear sections. Order pages logically and use dividers. Hide internal building blocks by prefixing their names (for example with a dot or underscore) so they do not appear in the assets panel.</p>
<h3>Documentation next to components</h3>
<p>Each component page should show the component set, its properties, do and don't examples, accessibility notes and a link to the coded version. Many teams also keep a website for documentation, but notes in the file help designers at the moment of use.</p>`,
    why: `
<p>If people cannot find the right component quickly, they draw their own, and the system fragments. A clear structure speeds up everyday work, reduces duplicates and makes onboarding new designers much easier. It also shows developers how the system maps to their code.</p>`,
    example: `
<p>A growing company's library has 140 components in one long page. Designers search the assets panel and find three different "Card" components, two of them internal pieces never meant for use.</p>
<p>The system team splits the file into Foundations, Components (one page per group: Actions, Inputs, Navigation, Feedback, Data display) and Patterns. Internal pieces get a leading underscore and are hidden from publishing. Each page gets a header with usage guidance and a link to the code. Searches now return one card, and duplicate requests drop.</p>`,
    walkthrough: [
      { title: 'Audit what exists', body: 'List all components, styles and variables.' },
      { title: 'Group them', body: 'Sort them into foundations, components and patterns.' },
      { title: 'Create pages', body: 'Create ordered pages with dividers for each group.' },
      { title: 'Hide internals', body: 'Prefix private building blocks so they are not published.' },
      { title: 'Add documentation', body: 'Add a header frame per component with usage, dos and don\'ts.' },
      { title: 'Test findability', body: 'Ask a teammate to find five components and time them.' },
    ],
    mistakes: [
      { mistake: 'Everything on one page.', fix: 'Group into foundations, components and patterns.' },
      { mistake: 'Publishing internal building blocks.', fix: 'Hide them with a prefix.' },
      { mistake: 'No guidance on when to use components.', fix: 'Add usage notes and examples beside each one.' },
    ],
    quiz: [
      { q: 'Which belongs in foundations?', options: ['Modal', 'Spacing scale', 'Sign-in form'], answer: 1, explain: 'Foundations are base values.' },
      { q: 'What is a pattern?', options: ['A single button', 'A combination of components solving a common problem', 'A colour'], answer: 1, explain: 'Patterns combine components.' },
      { q: 'Why hide internal building blocks?', options: ['To save space', 'So people do not use pieces never meant for products', 'Figma requires it'], answer: 1, explain: 'It keeps the assets panel clean.' },
    ],
    exercise: {
      title: 'Organise a mini system',
      minutes: 60,
      brief: '<p>Organise your Stage 5 components into a structured system file.</p>',
      steps: [
        'Create foundation, component and pattern pages.',
        'Move items into place and hide internals.',
        'Add a documentation header to three components.',
        'Ask someone to find components and note any confusion.',
      ],
      deliverable: 'An organised system file with documentation for three components.',
    },
    checklist: [
      'Foundations, components and patterns are separated.',
      'Pages are ordered and labelled.',
      'Internal parts are hidden.',
      'Components have usage notes.',
    ],
    summary: [
      'Organise systems as foundations, components and patterns.',
      'Clear pages and hidden internals improve findability.',
      'Document usage next to components.',
      'Good organisation prevents fragmentation.',
    ],
    reading: [
      { title: 'GOV.UK Design System', url: 'https://design-system.service.gov.uk/', source: 'GOV.UK', note: 'A clear example of styles, components and patterns.' },
      { title: 'Material Design 3', url: 'https://m3.material.io/', source: 'Google' },
    ],
  },

  'naming-file-hygiene': {
    objectives: [
      'Name layers, frames, components and variables consistently.',
      'Keep files tidy with regular clean-up habits.',
      'Use naming conventions that match code.',
    ],
    explanation: `
<p>Good names make files searchable and handoff smoother. Bad names ("Frame 2381", "Rectangle copy 4", "final_FINAL_v3") make files hard to use and hide meaning.</p>
<h3>Conventions</h3>
<ul>
<li><strong>Screens</strong>: include flow and step, for example "Checkout / 02 Delivery / Error".</li>
<li><strong>Components</strong>: use slashes for grouping ("Input / Text field") and property names that match code ("size", "variant", "state").</li>
<li><strong>Layers</strong>: name meaningful containers ("Header", "Price row"), not every rectangle.</li>
<li><strong>Variables</strong>: use a consistent pattern such as category/role/variant ("color/text/secondary").</li>
</ul>
<h3>Hygiene habits</h3>
<p>Delete hidden and unused layers, detach nothing without reason, archive old explorations, keep a consistent page structure and resolve comments. Many teams do a short clean-up before every handoff or review.</p>`,
    why: `
<p>Files are read far more often than they are written. Clear names help teammates and developers find things, help you return to your own work months later, and signal professionalism to anyone reviewing your files, including hiring managers who sometimes ask to see real working files.</p>`,
    example: `
<p>A developer inspecting a screen sees layers named "Group 14", "Rectangle 7" and "Frame 2381". They cannot tell what a container represents and build the structure from scratch.</p>
<p>After a 20-minute clean-up, the same screen has "Order summary", "Line item", "Delivery estimate" and "Primary action", and components named "Button / Primary". The developer maps containers to their components directly, and later searches for "Line item" find every use in the file.</p>`,
    walkthrough: [
      { title: 'Agree conventions', body: 'Write naming rules for screens, components, layers and variables.' },
      { title: 'Rename screens', body: 'Apply the flow / step / state pattern.' },
      { title: 'Rename key layers', body: 'Name meaningful containers; leave tiny decorative layers alone.' },
      { title: 'Remove clutter', body: 'Delete hidden and unused layers and stray frames.' },
      { title: 'Archive', body: 'Move old explorations to an archive page.' },
      { title: 'Schedule clean-ups', body: 'Add a clean-up step before every handoff.' },
    ],
    mistakes: [
      { mistake: 'Version numbers in file names ("final_v7").', fix: 'Use version history and named versions instead.' },
      { mistake: 'Naming by appearance ("Blue box").', fix: 'Name by purpose ("Promo banner").' },
      { mistake: 'Renaming every layer obsessively.', fix: 'Focus on meaningful containers and components.' },
    ],
    quiz: [
      { q: 'Which screen name is most useful?', options: ['Frame 2381', 'Checkout / 02 Delivery / Error', 'New screen final'], answer: 1, explain: 'It shows flow, step and state.' },
      { q: 'Why match component property names to code?', options: ['It looks smart', 'Developers can map designs to code directly', 'It is required'], answer: 1, explain: 'Shared names reduce confusion.' },
      { q: 'What replaces version numbers in file names?', options: ['Named versions in version history', 'More pages', 'Different colours'], answer: 0, explain: 'Version history keeps one file current.' },
    ],
    exercise: {
      title: 'File clean-up',
      minutes: 30,
      brief: '<p>Clean up a file you made earlier in this stage.</p>',
      steps: [
        'Write a short naming convention.',
        'Rename screens, containers and components.',
        'Remove hidden and unused layers.',
        'Archive old explorations and take before and after screenshots of the layers panel.',
      ],
      deliverable: 'A cleaned-up file with before and after screenshots.',
    },
    checklist: [
      'I have written conventions.',
      'Screens show flow, step and state.',
      'Meaningful layers are named.',
      'Unused and hidden layers are gone.',
    ],
    summary: [
      'Consistent names make files searchable and handoff smoother.',
      'Name by purpose and match code conventions.',
      'Clean up regularly, especially before handoff.',
      'Tidy files show professionalism.',
    ],
    reading: [
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
    ],
  },
};
