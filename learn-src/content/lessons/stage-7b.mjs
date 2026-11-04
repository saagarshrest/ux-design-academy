// @ts-check
/* Stage 7 (part 2): Interaction design. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'motion-principles': {
    objectives: [
      'Explain the purposes motion serves in interfaces.',
      'Apply duration, easing and choreography principles.',
      'Design motion that is accessible and respects user preferences.',
    ],
    explanation: `
<p>Motion in interfaces should have a job. Common purposes:</p>
<ul>
<li><strong>Orientation</strong>: show where something came from or went (a card expanding into a detail view).</li>
<li><strong>Feedback</strong>: confirm an action (a button press, a toggle).</li>
<li><strong>Attention</strong>: draw the eye to a change (a new message sliding in).</li>
<li><strong>Continuity</strong>: connect states so changes do not feel abrupt.</li>
<li><strong>Personality</strong>: express brand character, used sparingly.</li>
</ul>
<h3>Duration</h3>
<p>Small elements move quickly (around 100–200ms); larger elements and full-screen transitions take a little longer (around 200–400ms). Anything slower starts to feel sluggish for frequent actions.</p>
<h3>Easing</h3>
<p>Real objects accelerate and decelerate. <strong>Ease-out</strong> (fast start, slow end) suits elements entering the screen. <strong>Ease-in</strong> suits elements leaving. <strong>Ease-in-out</strong> suits elements moving from one place to another. Linear motion feels mechanical, except for things like progress bars and spinners.</p>
<h3>Choreography</h3>
<p>When several things move, stagger them slightly and move them in a consistent direction so the eye can follow.</p>
<h3>Accessibility</h3>
<p>Large or parallax motion can cause dizziness and nausea for people with vestibular disorders. Respect the "reduce motion" setting by replacing movement with fades or instant changes, and never use flashing content.</p>`,
    why: `
<p>Purposeful motion helps people understand changes and makes products feel responsive and polished. Purposeless motion slows people down, distracts and can make some people physically unwell. Knowing the principles lets you specify motion precisely for developers.</p>`,
    example: `
<p>A to-do app deletes tasks instantly, and people often are not sure which task disappeared. The designer adds a 200ms ease-in collapse for the removed row, with the rows below sliding up, plus an "Undo" toast.</p>
<p>With "reduce motion" switched on, the row fades out instead and the list updates instantly. People now notice what changed, accidental deletions are easily undone, and nobody with motion sensitivity is affected.</p>`,
    walkthrough: [
      { title: 'List changes', body: 'List state changes on a screen that could use motion.' },
      { title: 'Assign purpose', body: 'Give each motion a purpose, or remove it.' },
      { title: 'Choose duration', body: 'Pick durations based on size and frequency.' },
      { title: 'Choose easing', body: 'Ease-out for entering, ease-in for leaving, ease-in-out for moving.' },
      { title: 'Choreograph', body: 'Stagger and align directions for multiple elements.' },
      { title: 'Design reduced motion', body: 'Define the alternative for each motion.' },
    ],
    mistakes: [
      { mistake: 'Slow animations on frequent actions.', fix: 'Keep frequent motion short.' },
      { mistake: 'Linear easing everywhere.', fix: 'Use easing curves that feel natural.' },
      { mistake: 'Ignoring reduced motion settings.', fix: 'Provide fade or instant alternatives.' },
    ],
    quiz: [
      { q: 'Which easing suits elements entering the screen?', options: ['Ease-in', 'Ease-out', 'Linear'], answer: 1, explain: 'Fast start, gentle stop feels natural on entry.' },
      { q: 'What is a typical duration for a small UI change?', options: ['100–200ms', '1 second', '3 seconds'], answer: 0, explain: 'Small changes should be quick.' },
      { q: 'Why respect reduced motion?', options: ['To save battery', 'Motion can cause dizziness and nausea for some people', 'It is faster'], answer: 1, explain: 'Vestibular disorders are triggered by motion.' },
    ],
    exercise: {
      title: 'Motion spec',
      minutes: 45,
      brief: '<p>Write a motion spec for opening and closing a bottom sheet.</p>',
      steps: [
        'Define purpose, duration and easing for open and close.',
        'Define what happens to the background.',
        'Define the reduced motion alternative.',
        'Prototype both versions.',
      ],
      deliverable: 'A motion spec table and two prototypes.',
    },
    checklist: [
      'Every motion has a purpose.',
      'Durations suit size and frequency.',
      'Easing is deliberate.',
      'Reduced motion is designed.',
    ],
    summary: [
      'Motion should orient, give feedback, draw attention or connect states.',
      'Keep durations short and use natural easing.',
      'Choreograph multiple elements.',
      'Respect reduced motion preferences.',
    ],
    reading: [
      { title: 'Animation duration and motion characteristics', url: 'https://www.nngroup.com/articles/animation-duration/', source: 'Nielsen Norman Group' },
      { title: 'Animation from interactions (WCAG 2.3.3)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html', source: 'W3C WAI' },
    ],
  },

  'transitions-animation': {
    objectives: [
      'Design transitions between screens and states.',
      'Choose transition types that support the navigation model.',
      'Specify animations so developers can build them accurately.',
    ],
    explanation: `
<p>Transitions connect one state to the next. They should reflect the structure of the product.</p>
<h3>Common transition types</h3>
<ul>
<li><strong>Push / slide</strong>: moving deeper into a hierarchy (list to detail). Back reverses the direction.</li>
<li><strong>Slide up / sheet</strong>: temporary tasks such as composing a message or choosing an option.</li>
<li><strong>Fade / cross-fade</strong>: switching between peers, such as tabs, where there is no direction.</li>
<li><strong>Shared element (container transform)</strong>: an element, such as a card, grows into the next screen, keeping continuity.</li>
<li><strong>Skeleton to content</strong>: placeholder content fades into real data.</li>
</ul>
<h3>Specifying animation</h3>
<p>Developers need: what moves, from where to where, duration, easing curve, delay and stagger, and the reduced motion alternative. Use a table or annotated frames. Short screen recordings of prototypes help, but always include numbers.</p>
<h3>Performance</h3>
<p>Animations that move or fade elements (transform and opacity) run smoothly. Animating layout properties such as width and height can cause jank, so check with developers.</p>`,
    why: `
<p>Transitions tell people how screens relate. Consistent transitions build a spatial model of the product, so people always know whether they went deeper, opened something temporary or switched sections. Precise specs prevent animations being dropped or built differently on each platform.</p>`,
    example: `
<p>A recipe app uses a slide-left transition for every screen change, including switching tabs and opening the filter sheet. People feel they are going "deeper" when they are not, and back behaviour feels inconsistent.</p>
<p>The designer defines rules: slide for hierarchy, sheet for temporary tasks, cross-fade for tabs and a container transform from recipe card to detail. A spec table gives developers durations and easing. The app now feels coherent, and testing shows fewer people getting lost.</p>`,
    walkthrough: [
      { title: 'Map relationships', body: 'For each navigation, note whether it is deeper, temporary or peer.' },
      { title: 'Assign transitions', body: 'Choose a transition type for each relationship.' },
      { title: 'Prototype', body: 'Build key transitions with smart animate or similar.' },
      { title: 'Write the spec', body: 'Document properties, durations, easing and stagger.' },
      { title: 'Check performance', body: 'Prefer transform and opacity; review with developers.' },
      { title: 'Define reduced motion', body: 'Specify the fallback for each transition.' },
    ],
    mistakes: [
      { mistake: 'One transition for everything.', fix: 'Match transitions to relationships.' },
      { mistake: 'Specs with only a video.', fix: 'Include exact numbers.' },
      { mistake: 'Animating layout properties.', fix: 'Use transform and opacity where possible.' },
    ],
    quiz: [
      { q: 'Which transition suits switching tabs?', options: ['Push slide', 'Cross-fade', 'Sheet'], answer: 1, explain: 'Peers have no direction.' },
      { q: 'What should a motion spec include?', options: ['Only a video', 'What moves, duration, easing, delay and reduced motion fallback', 'Just colours'], answer: 1, explain: 'Numbers make it buildable.' },
      { q: 'Which properties animate most smoothly?', options: ['Width and height', 'Transform and opacity', 'Margins'], answer: 1, explain: 'They avoid layout recalculation.' },
    ],
    exercise: {
      title: 'Transition system',
      minutes: 60,
      brief: '<p>Define a transition system for a small app.</p>',
      steps: [
        'List navigation relationships.',
        'Assign transition types.',
        'Prototype three transitions.',
        'Write the spec table.',
      ],
      deliverable: 'A transition rules table, spec and prototype link.',
    },
    checklist: [
      'Transitions match relationships.',
      'Specs include numbers.',
      'Performance is considered.',
      'Reduced motion fallbacks exist.',
    ],
    summary: [
      'Transitions show how screens relate.',
      'Use slide, sheet, fade and shared element deliberately.',
      'Specify motion with numbers.',
      'Prefer transform and opacity for performance.',
    ],
    reading: [
      { title: 'Transitions', url: 'https://m3.material.io/styles/motion/transitions/transition-patterns', source: 'Material Design 3' },
      { title: 'Animations and performance', url: 'https://web.dev/articles/animations-guide', source: 'web.dev' },
    ],
  },

  'prototyping-flows': {
    objectives: [
      'Prototype complete flows, including branches and errors.',
      'Choose the right fidelity and tool for the question.',
      'Use prototypes to communicate and test interaction ideas.',
    ],
    explanation: `
<p>In Stage 5 you learned prototyping features. Here the focus is <strong>what</strong> to prototype for interaction design.</p>
<h3>Flows, not screens</h3>
<p>Prototype a complete task from start to finish, including decisions, branches and failure paths. Real users go off the happy path, so include at least one error and one alternative route.</p>
<h3>Choose fidelity by question</h3>
<ul>
<li><strong>Is the flow logical?</strong> Low-fidelity click-through.</li>
<li><strong>Do people understand the labels and content?</strong> Mid-fidelity with real copy.</li>
<li><strong>Does the interaction feel right?</strong> High-fidelity with motion, or a coded prototype.</li>
</ul>
<h3>Advanced prototyping</h3>
<p>Some questions need logic: forms that validate, lists that filter, totals that update. Design tools offer variables and conditions; tools such as ProtoPie, Framer or simple coded prototypes handle complex logic, real data and device sensors.</p>
<h3>Make it realistic enough</h3>
<p>Use real content and realistic data. Fake perfection (every product in stock, every name short) hides problems.</p>`,
    why: `
<p>Interaction problems often appear only when people move through a whole flow: a missing back route, a confusing branch or an error with no recovery. Prototyping complete flows reveals these early and gives stakeholders and developers a shared, concrete picture of the experience.</p>`,
    example: `
<p>A team prototypes only the happy path of a password reset: enter email, receive code, choose new password, done. In testing, a participant mistypes the code, and the prototype has nowhere to go.</p>
<p>The designer adds branches: wrong code (with retry and "send a new code"), expired code, and email not recognised (with a neutral message that does not reveal whether an account exists). The next test reveals that the code expiry time is too short for people switching between apps.</p>`,
    walkthrough: [
      { title: 'Define the question', body: 'Write what the prototype must answer.' },
      { title: 'Map the flow', body: 'Include main path, branches and errors.' },
      { title: 'Choose fidelity and tool', body: 'Match them to the question.' },
      { title: 'Use real content', body: 'Add realistic data and copy.' },
      { title: 'Build and walk through', body: 'Build the flow and walk every branch yourself.' },
      { title: 'Test with people', body: 'Run it with at least three people.' },
    ],
    mistakes: [
      { mistake: 'Only the happy path.', fix: 'Include errors and alternative routes.' },
      { mistake: 'Higher fidelity than the question needs.', fix: 'Match fidelity to the question.' },
      { mistake: 'Perfect fake data.', fix: 'Use realistic, messy content.' },
    ],
    quiz: [
      { q: 'What fidelity suits testing flow logic?', options: ['Low', 'High with motion', 'Coded'], answer: 0, explain: 'Logic does not need polish.' },
      { q: 'Why include error paths?', options: ['To make prototypes longer', 'Real users make mistakes and need recovery', 'It is required'], answer: 1, explain: 'Errors are part of real use.' },
      { q: 'When might you use a coded prototype?', options: ['For simple click-throughs', 'For complex logic, real data or device sensors', 'Never'], answer: 1, explain: 'Code handles what design tools cannot.' },
    ],
    exercise: {
      title: 'Full-flow prototype',
      minutes: 90,
      brief: '<p>Prototype a complete booking flow for a hair salon.</p>',
      steps: [
        'Map the main path, two branches and two errors.',
        'Choose fidelity and build the prototype.',
        'Use realistic availability and names.',
        'Test with three people and note issues.',
      ],
      deliverable: 'A prototype link, a flow map and test notes.',
    },
    checklist: [
      'The prototype answers a clear question.',
      'Branches and errors are included.',
      'Fidelity fits the question.',
      'Content is realistic.',
    ],
    summary: [
      'Prototype complete flows, including branches and errors.',
      'Match fidelity and tool to the question.',
      'Use realistic content.',
      'Test with people early.',
    ],
    reading: [
      { title: 'UX prototypes: low fidelity vs. high fidelity', url: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/', source: 'Nielsen Norman Group' },
      { title: 'Making prototypes', url: 'https://www.gov.uk/service-manual/design/making-prototypes', source: 'GOV.UK Service Manual' },
    ],
  },

  'confusing-interactions': {
    objectives: [
      'Recognise common causes of confusing interactions.',
      'Diagnose confusion using evidence rather than opinion.',
      'Fix confusing interactions with targeted changes.',
    ],
    explanation: `
<p>Interactions become confusing for a handful of recurring reasons:</p>
<ul>
<li><strong>Hidden controls</strong>: actions only available by hover, long press or swipe.</li>
<li><strong>Ambiguous labels</strong>: "Submit", "OK", or icons without text.</li>
<li><strong>Unexpected results</strong>: an action does something different from what people predict.</li>
<li><strong>Modes</strong>: the same action does different things depending on a state people do not notice (such as edit mode).</li>
<li><strong>Missing feedback</strong>: nothing seems to happen.</li>
<li><strong>Inconsistency</strong>: similar things behave differently in different places.</li>
<li><strong>Irreversible actions</strong> without warning or undo.</li>
</ul>
<h3>Diagnosing</h3>
<p>Look for evidence: repeated clicks (rage clicks), back-and-forth navigation, support tickets, session recordings, failed tasks in testing. Ask "what did the person expect?" and compare it with what happened.</p>
<h3>Fixing</h3>
<p>Fix the cause, not the symptom. Adding a tooltip to a confusing icon is a weaker fix than adding a text label. Adding a tutorial for a confusing flow is weaker than simplifying the flow.</p>`,
    why: `
<p>Confusion costs time, causes errors and erodes trust. Being able to diagnose and fix confusing interactions systematically is a core interaction design skill and a common interview topic. It also helps you push back on "just add a tooltip" fixes.</p>`,
    example: `
<p>A photo app's delete action is a swipe left. Session recordings show many people swiping left to see the next photo, deleting images by accident. Support tickets about missing photos rise.</p>
<p>The team diagnoses the conflict with the common "swipe to browse" mental model. They change swipe to browse, move delete to a visible bin icon with a label, and add an "Undo" toast plus a "Recently deleted" folder. Accidental deletion tickets drop sharply.</p>`,
    walkthrough: [
      { title: 'Collect evidence', body: 'Gather support tickets, analytics and test notes.' },
      { title: 'Identify the moment', body: 'Pinpoint where confusion happens.' },
      { title: 'Compare expectation and reality', body: 'Write what people expected and what happened.' },
      { title: 'Name the cause', body: 'Match it to one of the common causes.' },
      { title: 'Fix the cause', body: 'Design a fix that removes the confusion rather than explaining it.' },
      { title: 'Verify', body: 'Test the fix and watch the evidence change.' },
    ],
    mistakes: [
      { mistake: 'Adding tooltips or tutorials to patch confusion.', fix: 'Fix the underlying interaction.' },
      { mistake: 'Relying on opinions.', fix: 'Gather behavioural evidence.' },
      { mistake: 'Irreversible actions without undo.', fix: 'Add confirmation or undo.' },
    ],
    quiz: [
      { q: 'What is a "mode" problem?', options: ['The same action does different things depending on an unnoticed state', 'Dark mode', 'A colour issue'], answer: 0, explain: 'Hidden modes cause errors.' },
      { q: 'Which is evidence of confusion?', options: ['A stakeholder opinion', 'Rage clicks and failed tasks', 'A design award'], answer: 1, explain: 'Behaviour reveals confusion.' },
      { q: 'Which fix is strongest for a confusing icon?', options: ['A tooltip', 'A visible text label', 'A tutorial'], answer: 1, explain: 'Fix the cause directly.' },
    ],
    exercise: {
      title: 'Confusion diagnosis',
      minutes: 45,
      brief: '<p>Find and fix a confusing interaction in a product you use.</p>',
      steps: [
        'Identify a confusing moment and collect evidence.',
        'Write expectation versus reality.',
        'Name the cause.',
        'Design and justify a fix.',
      ],
      deliverable: 'A one-page diagnosis and redesign.',
    },
    checklist: [
      'I used evidence.',
      'I named the cause.',
      'My fix addresses the cause.',
      'Irreversible actions are protected.',
    ],
    summary: [
      'Confusion has common causes.',
      'Diagnose with evidence and expectation versus reality.',
      'Fix causes, not symptoms.',
      'Verify fixes with testing.',
    ],
    reading: [
      { title: 'Modes in user interfaces', url: 'https://www.nngroup.com/articles/modes/', source: 'Nielsen Norman Group' },
      { title: 'Icon usability', url: 'https://www.nngroup.com/articles/icon-usability/', source: 'Nielsen Norman Group' },
    ],
  },

  'evaluating-prototypes': {
    objectives: [
      'Evaluate interaction prototypes with users and experts.',
      'Combine heuristic review with quick user testing.',
      'Turn evaluation results into prioritised changes.',
    ],
    explanation: `
<p>Before handing interactions to development, evaluate them. Two complementary methods are quick and cheap:</p>
<h3>Expert review</h3>
<p>A <strong>heuristic evaluation</strong> checks the prototype against known principles, such as Nielsen's ten heuristics. Two or three reviewers work independently, then combine findings. It is fast and finds obvious problems, but it cannot tell you what real users will do.</p>
<h3>Quick user testing</h3>
<p>Give five or so people realistic tasks and watch them use the prototype. Note where they hesitate, misinterpret or fail. Ask them to think aloud. You will cover testing in depth in Stage 8.</p>
<h3>What to look for in interactions</h3>
<ul>
<li>Can people find and recognise controls?</li>
<li>Do they predict outcomes correctly?</li>
<li>Is feedback noticed and understood?</li>
<li>Can they recover from errors?</li>
<li>Does motion help or distract?</li>
</ul>
<h3>Prioritise</h3>
<p>Rate each issue by severity (how badly it affects people) and frequency, then fix the most serious first.</p>`,
    why: `
<p>Evaluating prototypes catches problems when they are cheap to fix. Combining expert review and user testing finds more issues than either alone. Clear, prioritised findings help the team agree what to change before development begins.</p>`,
    example: `
<p>A team evaluates a new drag-and-drop calendar prototype. Heuristic review flags missing keyboard support and unclear undo. Testing with five people shows two cannot find how to move an appointment because the drag handle is too subtle, and one does not notice the confirmation.</p>
<p>The team prioritises: add a visible handle and a "Move" option in the event menu (also solving keyboard access), make confirmations persistent with undo, and leave a motion tweak for later.</p>`,
    walkthrough: [
      { title: 'Prepare tasks', body: 'Write realistic tasks for the prototype.' },
      { title: 'Run a heuristic review', body: 'Have two or three people review independently.' },
      { title: 'Test with users', body: 'Watch five people complete tasks.' },
      { title: 'Combine findings', body: 'Merge and de-duplicate issues.' },
      { title: 'Rate severity', body: 'Rate each issue by impact and frequency.' },
      { title: 'Plan changes', body: 'Agree what to fix now, later or not at all.' },
    ],
    mistakes: [
      { mistake: 'Only reviewing your own design.', fix: 'Include other reviewers and real users.' },
      { mistake: 'Treating every issue as equal.', fix: 'Rate severity and prioritise.' },
      { mistake: 'Testing with colleagues only.', fix: 'Test with people who match your users.' },
    ],
    quiz: [
      { q: 'What does heuristic evaluation do?', options: ['Checks a design against known principles', 'Measures sales', 'Tests code'], answer: 0, explain: 'It is an expert review method.' },
      { q: 'Why combine expert review with user testing?', options: ['They find different issues', 'It is cheaper', 'It is required'], answer: 0, explain: 'Each method has blind spots.' },
      { q: 'How should issues be prioritised?', options: ['Alphabetically', 'By severity and frequency', 'By who found them'], answer: 1, explain: 'Fix the most serious first.' },
    ],
    exercise: {
      title: 'Evaluate a prototype',
      minutes: 90,
      brief: '<p>Evaluate the prototype you built in "Prototyping flows".</p>',
      steps: [
        'Run a heuristic review with one other person.',
        'Test with three users.',
        'Combine and rate findings.',
        'Write a prioritised change list.',
      ],
      deliverable: 'A findings table with severity and a change list.',
    },
    checklist: [
      'I used both expert review and user testing.',
      'Findings are combined.',
      'Severity is rated.',
      'Changes are prioritised.',
    ],
    summary: [
      'Evaluate interactions before development.',
      'Heuristic reviews and user tests complement each other.',
      'Focus on findability, prediction, feedback and recovery.',
      'Prioritise by severity.',
    ],
    reading: [
      { title: 'How to conduct a heuristic evaluation', url: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/', source: 'Nielsen Norman Group' },
      { title: '10 usability heuristics', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', source: 'Nielsen Norman Group' },
    ],
  },
};
