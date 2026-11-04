// @ts-check
/* Stage 7 (part 1): Interaction design. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'affordances-signifiers': {
    objectives: [
      'Explain the difference between affordances and signifiers.',
      'Spot interfaces where people cannot tell what is interactive.',
      'Design clear signifiers for common controls.',
    ],
    explanation: `
<p>An <strong>affordance</strong> is what an object lets you do: a button affords pressing, a slider affords dragging. A <strong>signifier</strong> is the cue that tells you the affordance exists: the raised look of a button, the handle on a slider, underlined link text. The terms come from the work of Don Norman.</p>
<p>On screens, almost everything is a flat picture, so signifiers do all the work. If something does not look interactive, people will not try it. If something looks interactive but is not, they will tap it and be confused.</p>
<h3>Common signifiers</h3>
<ul>
<li>Buttons: filled or outlined shapes with a clear label.</li>
<li>Links: distinct colour <em>and</em> underline, especially in body text.</li>
<li>Draggable items: grip handles, a change of cursor.</li>
<li>Scrollable areas: content cut off at the edge, scroll bars.</li>
<li>Expandable sections: chevrons and "Show more" text.</li>
</ul>
<h3>Flat design risk</h3>
<p>Very flat styles can remove signifiers entirely: labels that look like buttons, buttons that look like labels. Keep enough visual difference between interactive and static elements.</p>`,
    why: `
<p>People cannot use what they cannot find. Weak signifiers cause missed features, extra support and the feeling that a product is hard to use. Strong signifiers make an interface learnable at a glance and are especially important for new users and people with cognitive or visual impairments.</p>`,
    example: `
<p>A travel booking site shows filters as plain grey text: "Price", "Stops", "Times". In testing, only one of six participants realises they are clickable, and others scroll through hundreds of flights.</p>
<p>The designer restyles the filters as outlined chips with chevrons, and active filters as filled chips with a close icon. In the next test, all six participants use filters within the first minute.</p>`,
    walkthrough: [
      { title: 'Screenshot a screen', body: 'Choose a screen from a product you use.' },
      { title: 'Mark interactive elements', body: 'Circle everything you believe is interactive.' },
      { title: 'Check reality', body: 'Click everything and note surprises.' },
      { title: 'List signifiers', body: 'For each interactive element, note what signals it.' },
      { title: 'Fix weak ones', body: 'Redesign elements that are hard to spot or misleading.' },
      { title: 'Test the five-second view', body: 'Show the screen briefly and ask what people could click.' },
    ],
    mistakes: [
      { mistake: 'Links distinguished only by colour.', fix: 'Add underline in body text.' },
      { mistake: 'Static elements styled like buttons.', fix: 'Reserve button styling for actions.' },
      { mistake: 'Hidden gestures as the only way to act.', fix: 'Provide visible controls as well.' },
    ],
    quiz: [
      { q: 'What is a signifier?', options: ['What an object can do', 'A cue that shows what can be done', 'A colour'], answer: 1, explain: 'Signifiers communicate affordances.' },
      { q: 'Why are signifiers vital on screens?', options: ['Screens are flat, so cues do all the work', 'They are decorative', 'They improve speed'], answer: 0, explain: 'Without physical shape, visual cues tell the story.' },
      { q: 'Which is the weakest signifier for a link in body text?', options: ['Colour and underline', 'Colour alone', 'Underline alone'], answer: 1, explain: 'Colour alone fails for some users.' },
    ],
    exercise: {
      title: 'Signifier audit',
      minutes: 30,
      brief: '<p>Audit signifiers on an app or website.</p>',
      steps: [
        'Pick two screens.',
        'Mark what looks interactive and test it.',
        'List three weak or misleading signifiers.',
        'Redesign one of them.',
      ],
      deliverable: 'An annotated audit and one redesign.',
    },
    checklist: [
      'I can explain affordance and signifier.',
      'Interactive elements look interactive.',
      'Static elements do not look clickable.',
      'Gestures have visible alternatives.',
    ],
    summary: [
      'Affordances are what is possible; signifiers show it.',
      'On screens, signifiers do the work.',
      'Flat styles can hide interactivity.',
      'Test whether people can spot what is clickable.',
    ],
    reading: [
      { title: 'Signifiers, not affordances', url: 'https://jnd.org/signifiers-not-affordances/', source: 'Don Norman' },
      { title: 'Flat UI elements attract less attention', url: 'https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/', source: 'Nielsen Norman Group' },
    ],
  },

  'feedback-system-status': {
    objectives: [
      'Explain why systems must always show what is happening.',
      'Choose the right feedback for different response times.',
      'Design feedback for success, progress and failure.',
    ],
    explanation: `
<p>Every action should get a response. "Visibility of system status" is the first of Jakob Nielsen's usability heuristics: keep people informed about what is going on, through appropriate feedback within reasonable time.</p>
<h3>Response times</h3>
<ul>
<li><strong>Under about 0.1 seconds</strong>: feels instant. Just show the result.</li>
<li><strong>About 1 second</strong>: people notice the delay but keep their flow. A subtle indicator helps.</li>
<li><strong>Over a few seconds</strong>: show progress, ideally with an estimate, and let people do something else or cancel.</li>
</ul>
<h3>Types of feedback</h3>
<ul>
<li><strong>Immediate</strong>: button press states, toggles changing.</li>
<li><strong>Progress</strong>: spinners, progress bars, skeletons, step counts.</li>
<li><strong>Result</strong>: success messages, updated content, toasts.</li>
<li><strong>Failure</strong>: clear errors with recovery steps.</li>
</ul>
<h3>Optimistic updates</h3>
<p>For actions that rarely fail, such as liking a post, the interface can update immediately and quietly undo if the server fails. This feels fast, but needs a clear message when it does fail.</p>`,
    why: `
<p>Without feedback, people repeat actions (paying twice), abandon tasks they think failed, or lose trust. Good feedback makes products feel fast and reliable, even when they are not. It is one of the cheapest ways to improve usability.</p>`,
    example: `
<p>An online form submits silently and takes four seconds. People click "Submit" again, creating duplicate applications that staff must clean up by hand.</p>
<p>The designer changes the button to a loading state with "Submitting…" and disables repeat clicks, then shows a confirmation page with a reference number. Duplicate submissions virtually disappear, and fewer people phone to check their application arrived.</p>`,
    walkthrough: [
      { title: 'List actions', body: 'List every action on a key flow.' },
      { title: 'Measure timing', body: 'Estimate or measure response times.' },
      { title: 'Choose feedback', body: 'Pick immediate, progress, result and failure feedback for each.' },
      { title: 'Prevent repeats', body: 'Block duplicate submissions while processing.' },
      { title: 'Design failures', body: 'Write clear error and retry messages.' },
      { title: 'Test on a slow connection', body: 'Throttle the network and try the flow.' },
    ],
    mistakes: [
      { mistake: 'No feedback during waits.', fix: 'Show progress for anything over about a second.' },
      { mistake: 'Success messages that vanish too fast.', fix: 'Give people time to read, or keep a persistent result.' },
      { mistake: 'Optimistic updates that fail silently.', fix: 'Tell people when an action did not work.' },
    ],
    quiz: [
      { q: 'Which heuristic covers feedback?', options: ['Aesthetic design', 'Visibility of system status', 'Error prevention'], answer: 1, explain: 'It is Nielsen\'s first heuristic.' },
      { q: 'What should happen for a 6-second wait?', options: ['Nothing', 'Show progress and ideally allow cancel', 'Show a success message'], answer: 1, explain: 'Long waits need progress.' },
      { q: 'What is an optimistic update?', options: ['Updating the interface before the server confirms', 'A positive error message', 'A cheerful colour'], answer: 0, explain: 'It feels fast but needs failure handling.' },
    ],
    exercise: {
      title: 'Feedback map',
      minutes: 45,
      brief: '<p>Map feedback for a checkout flow.</p>',
      steps: [
        'List every action.',
        'Assign feedback by response time.',
        'Design loading, success and failure for payment.',
        'Test on a throttled connection.',
      ],
      deliverable: 'A feedback table and designed states for payment.',
    },
    checklist: [
      'Every action has feedback.',
      'Long waits show progress.',
      'Duplicate actions are prevented.',
      'Failures are clear and recoverable.',
    ],
    summary: [
      'Always show what the system is doing.',
      'Match feedback to response time.',
      'Design progress, results and failures.',
      'Optimistic updates need failure handling.',
    ],
    reading: [
      { title: '10 usability heuristics for user interface design', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', source: 'Nielsen Norman Group' },
      { title: 'Response times: the 3 important limits', url: 'https://www.nngroup.com/articles/response-times-3-important-limits/', source: 'Nielsen Norman Group' },
    ],
  },

  'patterns-mental-models': {
    objectives: [
      'Explain mental models and why they shape expectations.',
      'Use familiar patterns so people can rely on what they know.',
      'Decide when breaking a convention is worth it.',
    ],
    explanation: `
<p>A <strong>mental model</strong> is what a person believes about how something works. People build mental models from past experience, especially other products. They expect a logo in the top left to go home, a basket icon to show their basket, and a swipe to dismiss a notification.</p>
<p>Jakob's Law puts it simply: people spend most of their time on <em>other</em> sites, so they expect yours to work the same way.</p>
<h3>Patterns</h3>
<p><strong>Interaction patterns</strong> are proven solutions to common problems: search with suggestions, pull to refresh, tabs, step-by-step checkout. Using them means people can transfer what they know.</p>
<h3>When to break conventions</h3>
<p>Break a convention only when the benefit is large and tested, and when you can teach the new behaviour quickly. Novelty for its own sake costs learning time and creates errors.</p>
<h3>Mismatches</h3>
<p>Problems arise when the system model (how it really works) differs from the user's model. For example, people may think "delete" removes a file everywhere when it only removes it from one device. Close the gap with clear labels, feedback and explanation.</p>`,
    why: `
<p>Familiar patterns make products feel easy without effort, and they reduce the need for instructions. Understanding mental models helps you predict confusion before testing and explain it afterwards. It also gives you a strong argument in debates about "creative" but confusing ideas.</p>`,
    example: `
<p>A fashion brand's new site hides navigation behind a custom gesture: swiping up on the logo. It wins a design award, but analytics show most visitors never find category pages and conversion drops.</p>
<p>The team returns to a conventional header with visible categories and a search box, keeping brand personality in imagery and typography. Category visits recover within a week.</p>`,
    walkthrough: [
      { title: 'List expectations', body: 'For a screen, write what users likely expect from other products.' },
      { title: 'Check patterns', body: 'Compare your design with common patterns for the same task.' },
      { title: 'Spot deviations', body: 'Highlight where you break convention.' },
      { title: 'Justify or fix', body: 'Keep deviations only if clearly better; otherwise use the convention.' },
      { title: 'Check system vs user model', body: 'Find actions where results may surprise people.' },
      { title: 'Test', body: 'Ask people to predict what will happen before they act.' },
    ],
    mistakes: [
      { mistake: 'Inventing new interactions for common tasks.', fix: 'Use established patterns.' },
      { mistake: 'Assuming users understand how the system works.', fix: 'Explain consequences clearly.' },
      { mistake: 'Copying patterns that do not fit the context.', fix: 'Check the pattern solves your problem.' },
    ],
    quiz: [
      { q: 'What is a mental model?', options: ['A 3D model', 'What a person believes about how something works', 'A persona'], answer: 1, explain: 'It shapes expectations.' },
      { q: 'What does Jakob\'s Law say?', options: ['People expect your site to work like others they use', 'Fewer choices are faster', 'Bigger targets are easier'], answer: 0, explain: 'Experience elsewhere shapes expectations.' },
      { q: 'When should you break a convention?', options: ['To stand out', 'When the benefit is large, tested and easy to learn', 'Never'], answer: 1, explain: 'Break conventions only with good reason.' },
    ],
    exercise: {
      title: 'Prediction test',
      minutes: 30,
      brief: '<p>Test whether people\'s mental models match a design.</p>',
      steps: [
        'Choose three controls on a screen.',
        'Ask two people what they think each will do.',
        'Compare predictions with reality.',
        'Suggest changes where they differ.',
      ],
      deliverable: 'A table of predictions, reality and suggested fixes.',
    },
    checklist: [
      'I use established patterns for common tasks.',
      'Deviations are justified.',
      'Consequences of actions are clear.',
      'I tested predictions.',
    ],
    summary: [
      'Mental models come from experience.',
      'Familiar patterns let people transfer knowledge.',
      'Break conventions rarely and deliberately.',
      'Close gaps between system and user models.',
    ],
    reading: [
      { title: 'Mental models', url: 'https://www.nngroup.com/articles/mental-models/', source: 'Nielsen Norman Group' },
      { title: 'Jakob\'s Law', url: 'https://lawsofux.com/jakobs-law/', source: 'Laws of UX' },
    ],
  },

  'navigation-behaviour': {
    objectives: [
      'Design how navigation behaves, not just how it looks.',
      'Handle back, history, deep links and state preservation.',
      'Make navigation predictable across devices.',
    ],
    explanation: `
<p>In Stage 3 you chose navigation structures. Interaction design decides how navigation <strong>behaves</strong>.</p>
<h3>Back and history</h3>
<p>The back button should take people where they expect: usually the previous screen, with their scroll position and filters intact. Modals and drawers should close on back rather than leaving the page. Avoid breaking browser history in web apps.</p>
<h3>State preservation</h3>
<p>When someone filters a list, opens an item and returns, the filters and scroll position should still be there. Losing them is one of the most common frustrations.</p>
<h3>Deep links</h3>
<p>Every important screen should have its own address so people can bookmark, share and return to it. Notifications should open the exact relevant screen.</p>
<h3>Location and transitions</h3>
<p>Show where people are (highlighted navigation item, page title, breadcrumbs). Use transitions consistently: sliding in from the side for deeper levels, sliding up for temporary tasks.</p>
<h3>Mobile specifics</h3>
<p>Tab bars should remember each tab's position. System gestures (such as swipe back) should keep working.</p>`,
    why: `
<p>Navigation behaviour determines whether people feel in control or lost. Losing filters, breaking back, or opening the wrong screen from a notification are small issues that add up to a product feeling unreliable. Getting behaviour right is often more important than the visual style of the menu.</p>`,
    example: `
<p>On a property site, people filter to "2 bedrooms, under £1,200", scroll halfway down and open a listing. Pressing back returns them to the top of an unfiltered list. Analytics show many people leave at this point.</p>
<p>The team stores filters in the URL and restores scroll position. Shared links now include filters, and returning from a listing feels seamless. Listings viewed per session rise substantially.</p>`,
    walkthrough: [
      { title: 'Map navigation paths', body: 'List how people move between key screens.' },
      { title: 'Define back behaviour', body: 'Write where back goes from each screen and overlay.' },
      { title: 'Decide what to preserve', body: 'List filters, scroll, tabs and form input to keep.' },
      { title: 'Assign URLs', body: 'Give important screens and states their own address.' },
      { title: 'Define transitions', body: 'Choose consistent transitions for depth and temporary tasks.' },
      { title: 'Test journeys', body: 'Try deep links, back, refresh and sharing.' },
    ],
    mistakes: [
      { mistake: 'Back loses filters and scroll.', fix: 'Preserve state when returning.' },
      { mistake: 'Notifications opening the home screen.', fix: 'Deep link to the relevant item.' },
      { mistake: 'Modals that do not close on back.', fix: 'Treat back as close for overlays.' },
    ],
    quiz: [
      { q: 'What should usually happen when returning to a filtered list?', options: ['Reset filters', 'Keep filters and scroll position', 'Show the home page'], answer: 1, explain: 'Preserving state avoids frustration.' },
      { q: 'Why give screens their own URLs?', options: ['For SEO only', 'So they can be bookmarked, shared and deep linked', 'It is required'], answer: 1, explain: 'Addresses make content reachable.' },
      { q: 'What should back do with an open modal?', options: ['Leave the page', 'Close the modal', 'Nothing'], answer: 1, explain: 'People expect back to close overlays.' },
    ],
    exercise: {
      title: 'Navigation behaviour spec',
      minutes: 45,
      brief: '<p>Write a navigation behaviour spec for a shopping flow.</p>',
      steps: [
        'Map screens and overlays.',
        'Define back, preserved state and URLs.',
        'Define transitions.',
        'Test the current behaviour of a real shop and compare.',
      ],
      deliverable: 'A behaviour spec table with notes from testing a real site.',
    },
    checklist: [
      'Back behaviour is defined.',
      'State is preserved.',
      'Important screens have URLs.',
      'Transitions are consistent.',
    ],
    summary: [
      'Navigation behaviour matters as much as structure.',
      'Preserve state and make back predictable.',
      'Deep link important screens.',
      'Use consistent transitions and show location.',
    ],
    reading: [
      { title: 'Breadcrumbs: 11 design guidelines', url: 'https://www.nngroup.com/articles/breadcrumbs/', source: 'Nielsen Norman Group' },
      { title: 'Back link', url: 'https://design-system.service.gov.uk/components/back-link/', source: 'GOV.UK Design System' },
    ],
  },

  'microinteractions': {
    objectives: [
      'Describe the parts of a microinteraction.',
      'Design small interactions that give feedback and delight without getting in the way.',
      'Recognise when a microinteraction adds value.',
    ],
    explanation: `
<p>A <strong>microinteraction</strong> is a small, contained moment built around one task: toggling a setting, liking a post, pulling to refresh, showing a password. Dan Saffer described four parts:</p>
<ol>
<li><strong>Trigger</strong>: what starts it (a tap, or a system event such as a new message).</li>
<li><strong>Rules</strong>: what happens.</li>
<li><strong>Feedback</strong>: how people know it happened (visual, sound, haptic).</li>
<li><strong>Loops and modes</strong>: what happens over time or on repeat.</li>
</ol>
<h3>Good microinteractions</h3>
<ul>
<li>Serve a purpose: confirm, guide, prevent errors or reduce effort.</li>
<li>Are fast: most should finish in 100–300ms.</li>
<li>Stay consistent across the product.</li>
<li>Do not block people from carrying on.</li>
<li>Respect reduced motion preferences.</li>
</ul>
<p>Examples: a password field that shows requirements ticking off as you type, a copy button that changes to "Copied" for two seconds, a toggle that slides and changes colour.</p>`,
    why: `
<p>Microinteractions are where products feel polished or clumsy. Small feedback moments reduce errors and uncertainty, and a few delightful touches build affection for a product. But overused or slow animations become irritating, so purpose matters.</p>`,
    example: `
<p>A developer documentation site has code snippets with a "Copy" icon. People click it but are unsure whether anything happened, so they select and copy manually.</p>
<p>The designer adds a microinteraction: on click, the icon changes to a tick, the label says "Copied" for two seconds, and a screen reader announcement confirms it. Manual selection of code drops, and people start using the button routinely.</p>`,
    walkthrough: [
      { title: 'Pick a moment', body: 'Choose a small task, such as saving a favourite.' },
      { title: 'Define the trigger', body: 'Decide what starts it.' },
      { title: 'Write the rules', body: 'Describe exactly what happens, including edge cases.' },
      { title: 'Design feedback', body: 'Choose visual, haptic and assistive feedback.' },
      { title: 'Define loops', body: 'Decide what happens on repeat or over time.' },
      { title: 'Prototype and time', body: 'Build it and check it feels quick.' },
    ],
    mistakes: [
      { mistake: 'Animations that slow people down.', fix: 'Keep most under 300ms.' },
      { mistake: 'Delight without purpose.', fix: 'Make sure it confirms, guides or prevents errors.' },
      { mistake: 'Feedback only visible on screen.', fix: 'Announce changes to assistive technology too.' },
    ],
    quiz: [
      { q: 'What are the four parts of a microinteraction?', options: ['Trigger, rules, feedback, loops and modes', 'Colour, type, space, grid', 'Plan, test, ship, measure'], answer: 0, explain: 'This is Dan Saffer\'s model.' },
      { q: 'How long should most microinteractions take?', options: ['100–300ms', '2–3 seconds', '10 seconds'], answer: 0, explain: 'Quick feedback feels responsive.' },
      { q: 'What makes a microinteraction worthwhile?', options: ['It looks cool', 'It serves a purpose like confirming or guiding', 'It uses sound'], answer: 1, explain: 'Purpose comes first.' },
    ],
    exercise: {
      title: 'Design a microinteraction',
      minutes: 45,
      brief: '<p>Design a microinteraction for adding an item to a wishlist.</p>',
      steps: [
        'Write trigger, rules, feedback and loops.',
        'Include what happens when offline or not signed in.',
        'Prototype it.',
        'Note the accessibility feedback.',
      ],
      deliverable: 'A spec and a prototype of the microinteraction.',
    },
    checklist: [
      'All four parts are defined.',
      'It serves a purpose.',
      'It is quick.',
      'It is accessible and respects reduced motion.',
    ],
    summary: [
      'Microinteractions are small, single-task moments.',
      'They have triggers, rules, feedback and loops.',
      'Keep them quick, purposeful and consistent.',
      'Make feedback accessible.',
    ],
    reading: [
      { title: 'Microinteractions in user experience', url: 'https://www.nngroup.com/articles/microinteractions/', source: 'Nielsen Norman Group' },
      { title: 'prefers-reduced-motion', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion', source: 'MDN Web Docs' },
    ],
  },

  'forms-validation': {
    objectives: [
      'Design forms that are quick and easy to complete.',
      'Choose when and how to validate input.',
      'Write helpful error messages and recovery paths.',
    ],
    explanation: `
<p>Forms are where many products make or lose money. Good form design reduces effort and errors.</p>
<h3>Structure</h3>
<ul>
<li>Ask only for what you need. Question every field.</li>
<li>Use one column, with labels above fields.</li>
<li>Group related questions and, for long forms, split into steps with one topic each.</li>
<li>Use the right input type: number keyboards for numbers, date pickers or separate day, month and year fields for known dates.</li>
<li>Mark optional fields rather than required ones if most are required.</li>
<li>Never use placeholder text as the label.</li>
</ul>
<h3>Validation timing</h3>
<p>Validate when people leave a field (on blur) or when they submit, not while they are still typing. Exceptions include password requirements shown as a checklist. After an error, re-validate as they fix it so the message disappears when the problem is solved.</p>
<h3>Error messages</h3>
<p>Say what went wrong and how to fix it, in plain language: "Enter a date of birth in the past" rather than "Invalid input". Show errors next to the field and, on submit, in a summary at the top that links to each field. Keep everything people have entered.</p>`,
    why: `
<p>Every unnecessary field and confusing error loses people. Forms are often the last step before a sign-up, purchase or application, so small improvements can have large business and social impact. Accessible forms are also a legal requirement in many places.</p>`,
    example: `
<p>A council's parking permit form has 24 fields, validates every keystroke ("Invalid postcode" appears after typing "S"), and clears the whole form when there is any error.</p>
<p>The redesign removes seven unnecessary fields, splits the rest into four steps, validates on blur and submit, keeps entered data, and uses specific messages like "Enter a full postcode, like SW1A 1AA". The share of people completing the form online rises and phone calls to the council fall.</p>`,
    walkthrough: [
      { title: 'Question every field', body: 'For each field, ask who uses the data and why.' },
      { title: 'Structure the form', body: 'Group fields, order them logically and split long forms.' },
      { title: 'Choose input types', body: 'Use appropriate keyboards and controls.' },
      { title: 'Plan validation', body: 'Decide timing and rules per field.' },
      { title: 'Write errors', body: 'Write specific, plain-language messages.' },
      { title: 'Design the error summary', body: 'Show a linked summary on submit and keep all data.' },
    ],
    mistakes: [
      { mistake: 'Placeholders used as labels.', fix: 'Use visible labels above fields.' },
      { mistake: 'Validating while people type.', fix: 'Validate on blur or submit.' },
      { mistake: 'Generic error messages.', fix: 'Say what is wrong and how to fix it.' },
    ],
    quiz: [
      { q: 'When should most validation happen?', options: ['On every keystroke', 'When leaving a field or on submit', 'Never'], answer: 1, explain: 'Avoid interrupting people mid-typing.' },
      { q: 'Which error message is best?', options: ['Invalid input', 'Error 422', 'Enter a date of birth in the past'], answer: 2, explain: 'It is specific and actionable.' },
      { q: 'Why not use placeholder text as labels?', options: ['It disappears when typing and often has poor contrast', 'It is too big', 'It is not supported'], answer: 0, explain: 'Labels must stay visible.' },
    ],
    exercise: {
      title: 'Form redesign',
      minutes: 75,
      brief: '<p>Redesign a sign-up or application form.</p>',
      steps: [
        'Audit the fields and remove unnecessary ones.',
        'Restructure and split if long.',
        'Define validation timing and write all error messages.',
        'Design the error summary and test with someone.',
      ],
      deliverable: 'Before and after designs, a validation table and test notes.',
    },
    checklist: [
      'Every field is necessary.',
      'Labels are visible and above fields.',
      'Validation timing is sensible.',
      'Errors are specific and data is kept.',
    ],
    summary: [
      'Ask for less and structure forms clearly.',
      'Validate on blur or submit, not mid-typing.',
      'Write specific, plain-language errors.',
      'Use error summaries and keep entered data.',
    ],
    reading: [
      { title: 'Question pages', url: 'https://design-system.service.gov.uk/patterns/question-pages/', source: 'GOV.UK Design System' },
      { title: 'Error message', url: 'https://design-system.service.gov.uk/components/error-message/', source: 'GOV.UK Design System' },
    ],
  },
};
