// @ts-check
/* Stage 8 (part 2): Usability testing. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'recording-findings-ethically': {
    objectives: [
      'Take useful notes and recordings during sessions.',
      'Handle participant data with consent, security and care.',
      'Separate observations from interpretations.',
    ],
    explanation: `
<p>What you record during a session becomes the evidence for decisions. It also contains personal data, so it must be handled responsibly.</p>
<h3>Note-taking</h3>
<p>A dedicated note-taker lets the facilitator focus. Use a template with columns for task, timestamp, observation, quote and severity. Write <strong>observations</strong> (what people did and said) separately from <strong>interpretations</strong> (why you think it happened). "Clicked 'Transfers' twice, then said 'Where do I add someone?'" is an observation; "Navigation labels are unclear" is an interpretation.</p>
<h3>Recordings</h3>
<p>Record screen and audio (and video only if needed), with explicit consent. Timestamps make it easy to find clips later.</p>
<h3>Ethics and data protection</h3>
<ul>
<li>Get <strong>informed consent</strong>: explain purpose, recording, who will see it, how long it is kept, and the right to stop at any time.</li>
<li>Collect only what you need, store it securely with restricted access and delete it on schedule.</li>
<li>Remove or blur personal details (names, account numbers, faces) in clips and reports.</li>
<li>Follow local data protection law, such as UK GDPR or GDPR.</li>
<li>Look after participants' wellbeing; stop if they become distressed.</li>
</ul>`,
    why: `
<p>Clear, factual notes make analysis faster and findings more credible. Poor data handling can harm participants and break the law, and it damages trust in research. Ethical practice is a professional responsibility, not paperwork.</p>`,
    example: `
<p>During testing of an insurance claims app, a participant enters their real policy number and talks about a recent car accident. The recording is later shared in a company-wide channel as a highlight clip.</p>
<p>The team changes its process: consent forms explain exactly who sees recordings, clips are reviewed and personal details blurred before sharing, recordings live in a restricted folder and are deleted after six months, and facilitators ask participants to use test details where possible.</p>`,
    walkthrough: [
      { title: 'Prepare consent', body: 'Write a plain-language consent form covering recording and data use.' },
      { title: 'Set up a note template', body: 'Include task, time, observation, quote and severity.' },
      { title: 'Brief the note-taker', body: 'Explain the difference between observation and interpretation.' },
      { title: 'Record securely', body: 'Use approved tools and restricted storage.' },
      { title: 'Anonymise', body: 'Remove personal details before sharing.' },
      { title: 'Schedule deletion', body: 'Set and follow a retention period.' },
    ],
    mistakes: [
      { mistake: 'Mixing observations and opinions in notes.', fix: 'Record what happened separately from what you think it means.' },
      { mistake: 'Sharing clips with personal details.', fix: 'Anonymise before sharing.' },
      { mistake: 'Keeping recordings forever.', fix: 'Set and follow a retention policy.' },
    ],
    quiz: [
      { q: 'Which is an observation?', options: ['Navigation is confusing', 'Clicked Transfers twice and said "Where do I add someone?"', 'Users hate this page'], answer: 1, explain: 'Observations describe behaviour.' },
      { q: 'What must consent cover?', options: ['Only the incentive', 'Purpose, recording, access, retention and the right to stop', 'Nothing'], answer: 1, explain: 'Informed consent covers all of these.' },
      { q: 'What should happen before sharing clips?', options: ['Nothing', 'Remove personal details', 'Add music'], answer: 1, explain: 'Protect participants\' privacy.' },
    ],
    exercise: {
      title: 'Research data kit',
      minutes: 45,
      brief: '<p>Create a consent form and note-taking template.</p>',
      steps: [
        'Write a plain-language consent form.',
        'Create a note template.',
        'Write a short data handling policy (storage, access, retention).',
        'Practise notes on a recorded session.',
      ],
      deliverable: 'Consent form, note template, data policy and sample notes.',
    },
    checklist: [
      'Consent is informed and plain.',
      'Notes separate observation and interpretation.',
      'Data is stored securely.',
      'Clips are anonymised and retention is set.',
    ],
    summary: [
      'Notes and recordings are your evidence.',
      'Separate observations from interpretations.',
      'Get informed consent and handle data securely.',
      'Anonymise and delete on schedule.',
    ],
    reading: [
      { title: 'Getting users\' consent for research', url: 'https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research', source: 'GOV.UK Service Manual' },
    ],
  },

  'severity-prioritisation': {
    objectives: [
      'Rate usability issues consistently by severity.',
      'Combine severity with frequency and effort to prioritise.',
      'Agree priorities with your team.',
    ],
    explanation: `
<p>Tests produce many issues. Not all are equally important. <strong>Severity</strong> describes how much an issue harms users.</p>
<h3>A simple scale</h3>
<ul>
<li><strong>Critical</strong>: prevents people completing a task, or causes harm such as data loss or wrong payments.</li>
<li><strong>Serious</strong>: causes significant delay, frustration or errors, but people can recover.</li>
<li><strong>Minor</strong>: causes small hesitation or annoyance.</li>
<li><strong>Cosmetic</strong>: noticeable but does not affect task success.</li>
</ul>
<h3>Factors</h3>
<p>Consider <strong>impact</strong> (how badly it affects people), <strong>frequency</strong> (how many people hit it) and <strong>persistence</strong> (does it happen once or every time?). An issue that affects one participant but blocks payment may outrank one that slightly annoys everyone.</p>
<h3>Prioritising fixes</h3>
<p>Combine severity with the <strong>effort</strong> to fix. Quick fixes to serious problems come first. Plot issues on a matrix of severity against effort and discuss with product and engineering partners.</p>`,
    why: `
<p>Without prioritisation, teams either try to fix everything (and ship nothing) or fix the easiest cosmetic issues and leave serious ones. Clear severity ratings help the team agree what matters, and they make research findings actionable.</p>`,
    example: `
<p>A test of a ticket booking site produces 23 issues. The team rates them: two critical (a seat selection error that books the wrong seats, and a payment page that fails on one browser), six serious, ten minor and five cosmetic.</p>
<p>On a severity-effort matrix, the browser payment bug is critical and quick to fix, so it goes into the current sprint. The seat selection redesign is critical but larger and is scheduled next. Cosmetic issues go into the backlog.</p>`,
    walkthrough: [
      { title: 'List issues', body: 'Gather all issues from sessions.' },
      { title: 'Define the scale', body: 'Agree severity definitions with the team.' },
      { title: 'Rate independently', body: 'Have two people rate each issue, then discuss differences.' },
      { title: 'Add frequency', body: 'Note how many participants hit each issue.' },
      { title: 'Estimate effort', body: 'Ask engineers for rough effort.' },
      { title: 'Plot and agree', body: 'Plot severity against effort and agree priorities.' },
    ],
    mistakes: [
      { mistake: 'Rating by personal annoyance.', fix: 'Use agreed definitions focused on user impact.' },
      { mistake: 'Counting frequency only.', fix: 'Weigh impact; rare critical issues matter.' },
      { mistake: 'Prioritising without engineers.', fix: 'Include effort estimates from the team.' },
    ],
    quiz: [
      { q: 'Which is critical?', options: ['A misaligned icon', 'A bug that charges people twice', 'A slightly confusing label'], answer: 1, explain: 'It causes harm.' },
      { q: 'Should a rare issue ever outrank a common one?', options: ['No', 'Yes, if its impact is severe', 'Only on Fridays'], answer: 1, explain: 'Impact matters as well as frequency.' },
      { q: 'What should fixes be prioritised by?', options: ['Severity and effort', 'Alphabetical order', 'Who found them'], answer: 0, explain: 'Quick, serious fixes first.' },
    ],
    exercise: {
      title: 'Prioritise findings',
      minutes: 45,
      brief: '<p>Prioritise a list of usability issues.</p>',
      steps: [
        'Use issues from your heuristic review or a test.',
        'Rate severity with a partner.',
        'Estimate effort.',
        'Plot a matrix and write the top five priorities.',
      ],
      deliverable: 'A rated issue list, matrix and priorities.',
    },
    checklist: [
      'Severity definitions are agreed.',
      'Ratings consider impact, frequency and persistence.',
      'Effort is estimated.',
      'Priorities are agreed with the team.',
    ],
    summary: [
      'Severity measures harm to users.',
      'Consider impact, frequency and persistence.',
      'Combine with effort to prioritise.',
      'Agree priorities together.',
    ],
    reading: [
      { title: 'Severity ratings for usability problems', url: 'https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/', source: 'Nielsen Norman Group' },
      { title: 'Rating the severity of usability problems', url: 'https://measuringu.com/rating-severity/', source: 'MeasuringU' },
    ],
  },

  'analysing-results': {
    objectives: [
      'Analyse qualitative and quantitative test data.',
      'Find patterns across sessions and identify root causes.',
      'Turn findings into clear, evidence-based recommendations.',
    ],
    explanation: `
<p>Analysis turns notes and recordings into findings the team can act on.</p>
<h3>Debrief quickly</h3>
<p>After each session, spend 10–15 minutes with observers noting the biggest issues while memories are fresh.</p>
<h3>Qualitative analysis</h3>
<p>Gather observations onto notes, one per observation, tagged with participant and task. Group them by task and by theme, as in affinity mapping. Look for patterns: what happened to several people? Then ask <em>why</em>: what is the root cause? Several symptoms often share one cause.</p>
<h3>Quantitative measures</h3>
<ul>
<li><strong>Task success rate</strong>: percentage who completed each task.</li>
<li><strong>Time on task</strong>: useful for comparison, less so with small samples.</li>
<li><strong>Errors</strong>: number and type.</li>
<li><strong>Ratings</strong>: such as a single ease question after each task, or the System Usability Scale (SUS) at the end.</li>
</ul>
<p>With five participants, report numbers carefully ("4 of 5 participants") rather than as percentages that imply precision.</p>
<h3>Findings and recommendations</h3>
<p>A finding states what happened and why, with evidence. A recommendation states what to change. Keep them linked.</p>`,
    why: `
<p>Raw observations do not change products; clear findings do. Good analysis distinguishes one-off quirks from real patterns, identifies root causes so fixes work, and presents evidence in a way that persuades.</p>`,
    example: `
<p>In a test of a recipe app, four of five participants failed to adjust serving sizes, two tapped the ingredient list, and one said "I'd just do the maths myself."</p>
<p>Grouping observations reveals the root cause: the serving control sat below the fold and looked like static text. The finding reads: "4 of 5 participants could not change servings because the control was not visible or recognisable as interactive." The recommendation: move a visible stepper next to the ingredients heading.</p>`,
    walkthrough: [
      { title: 'Debrief after each session', body: 'Note top issues with observers.' },
      { title: 'Transfer observations', body: 'One observation per note, tagged with participant and task.' },
      { title: 'Group', body: 'Cluster by task and theme.' },
      { title: 'Find root causes', body: 'Ask why for each pattern.' },
      { title: 'Calculate measures', body: 'Compute success rates, errors and ratings.' },
      { title: 'Write findings and recommendations', body: 'Link each recommendation to evidence.' },
    ],
    mistakes: [
      { mistake: 'Over-reacting to one participant.', fix: 'Look for patterns, but weigh severe one-offs.' },
      { mistake: 'Reporting percentages from five people.', fix: 'Use counts such as "4 of 5".' },
      { mistake: 'Recommendations without evidence.', fix: 'Link each to observations.' },
    ],
    quiz: [
      { q: 'How should you report results from five participants?', options: ['80%', '4 of 5 participants', 'Most users'], answer: 1, explain: 'Counts avoid false precision.' },
      { q: 'What is a root cause?', options: ['The first symptom observed', 'The underlying reason behind several symptoms', 'A bug'], answer: 1, explain: 'Fix causes, not symptoms.' },
      { q: 'When should you debrief?', options: ['A month later', 'Right after each session', 'Never'], answer: 1, explain: 'Memory fades quickly.' },
    ],
    exercise: {
      title: 'Analyse a test',
      minutes: 75,
      brief: '<p>Analyse notes from a usability test (your own or a sample).</p>',
      steps: [
        'Transfer observations onto notes.',
        'Group and identify patterns.',
        'Find root causes.',
        'Write five findings with recommendations.',
      ],
      deliverable: 'An analysis board and a findings list.',
    },
    checklist: [
      'I debriefed after sessions.',
      'I grouped observations into patterns.',
      'I identified root causes.',
      'Recommendations link to evidence.',
    ],
    summary: [
      'Debrief quickly, then group observations.',
      'Find patterns and root causes.',
      'Use measures carefully with small samples.',
      'Link findings, evidence and recommendations.',
    ],
    reading: [
      { title: 'Thematic analysis of qualitative user research data', url: 'https://www.nngroup.com/articles/thematic-analysis/', source: 'Nielsen Norman Group' },
      { title: 'Measuring usability with the System Usability Scale (SUS)', url: 'https://measuringu.com/sus/', source: 'MeasuringU' },
    ],
  },

  'accessibility-audits': {
    objectives: [
      'Run a basic accessibility audit of a design or product.',
      'Combine automated, manual and assistive technology checks.',
      'Report accessibility issues with WCAG references and fixes.',
    ],
    explanation: `
<p>An <strong>accessibility audit</strong> checks whether a product can be used by disabled people and meets standards such as WCAG. Stage 9 goes deeper; here we cover how to run an audit as part of testing.</p>
<h3>Three layers</h3>
<ol>
<li><strong>Automated tools</strong> (such as axe or Lighthouse) catch issues like missing alt text, low contrast and missing labels. They find only part of the problems.</li>
<li><strong>Manual checks</strong>: use only a keyboard, zoom to 200% and 400%, check headings and focus order, check colour is not the only signal, and review content and error messages.</li>
<li><strong>Assistive technology</strong>: test with a screen reader (such as NVDA, VoiceOver or TalkBack) and, ideally, include disabled participants in usability testing.</li>
</ol>
<h3>Auditing designs</h3>
<p>You can audit before code: check contrast, target sizes, focus states, heading structure, labels, error messages and reading order in design files. Fixing issues in design is much cheaper.</p>
<h3>Reporting</h3>
<p>For each issue, note where it is, what is wrong, who it affects, the WCAG success criterion, severity and a recommended fix.</p>`,
    why: `
<p>Accessibility problems exclude real people and can create legal risk. Automated tools alone miss many issues, so designers who can run manual checks and interpret results are valuable. Audits also build team awareness of how disabled people use products.</p>`,
    example: `
<p>An automated scan of an events site shows only four issues. A manual check finds much more: the date picker cannot be used by keyboard, focus is invisible on the dark header, the "Book" buttons all read "Book" to screen readers with no event name, and error messages appear only in red.</p>
<p>The report lists each issue with WCAG references and fixes. The team fixes the keyboard and focus issues first because they block whole groups of users.</p>`,
    walkthrough: [
      { title: 'Run automated checks', body: 'Use a tool such as axe or Lighthouse on key pages.' },
      { title: 'Use only the keyboard', body: 'Complete key tasks with Tab, Shift+Tab, Enter, Space and arrows.' },
      { title: 'Zoom', body: 'Check layouts at 200% and 400% zoom.' },
      { title: 'Use a screen reader', body: 'Navigate by headings, links and forms.' },
      { title: 'Check content', body: 'Review labels, errors, alt text and plain language.' },
      { title: 'Report', body: 'Log issues with WCAG references, severity and fixes.' },
    ],
    mistakes: [
      { mistake: 'Relying only on automated tools.', fix: 'Add manual and assistive technology checks.' },
      { mistake: 'Auditing only at the end.', fix: 'Audit designs before development.' },
      { mistake: 'Reports without fixes.', fix: 'Recommend specific changes.' },
    ],
    quiz: [
      { q: 'Can automated tools find all accessibility issues?', options: ['Yes', 'No, only part of them'], answer: 1, explain: 'Manual checks are essential.' },
      { q: 'Which is a manual check?', options: ['Running Lighthouse', 'Completing a task using only the keyboard', 'Counting images'], answer: 1, explain: 'Keyboard testing needs a person.' },
      { q: 'What should each reported issue include?', options: ['Only a screenshot', 'Location, problem, impact, WCAG criterion, severity and fix', 'Just the page name'], answer: 1, explain: 'Complete reports are actionable.' },
    ],
    exercise: {
      title: 'Mini audit',
      minutes: 90,
      brief: '<p>Audit one key flow of a website.</p>',
      steps: [
        'Run an automated tool.',
        'Do keyboard, zoom and screen reader checks.',
        'Log at least eight issues.',
        'Add WCAG references and fixes.',
      ],
      deliverable: 'An accessibility audit report.',
    },
    checklist: [
      'I used automated, manual and assistive technology checks.',
      'I tested with keyboard and zoom.',
      'Issues reference WCAG.',
      'Fixes are recommended.',
    ],
    summary: [
      'Audits combine automated, manual and assistive technology checks.',
      'Automated tools find only part of the issues.',
      'Audit designs early.',
      'Report with WCAG references and fixes.',
    ],
    reading: [
      { title: 'Easy checks: a first review of web accessibility', url: 'https://www.w3.org/WAI/test-evaluate/preliminary/', source: 'W3C WAI' },
      { title: 'Testing for accessibility', url: 'https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility', source: 'GOV.UK Service Manual' },
    ],
  },

  'iterative-design': {
    objectives: [
      'Explain the build-test-learn cycle.',
      'Plan rounds of testing and iteration.',
      'Know when a design is good enough to move on.',
    ],
    explanation: `
<p><strong>Iterative design</strong> means improving a design through repeated cycles: design, test, learn, change, test again. Each round fixes the biggest problems and reveals the next layer.</p>
<h3>Why small rounds work</h3>
<p>Major problems hide smaller ones: if people cannot find the checkout, you will never learn whether the payment form is confusing. Small rounds of about five people, with fixes in between, find more problems overall than one large test.</p>
<h3>Planning iterations</h3>
<ul>
<li>Plan two or three rounds into the project timeline from the start.</li>
<li>Keep the core tasks the same between rounds so you can compare.</li>
<li>Add new tasks as the design grows.</li>
<li>Track issues across rounds: fixed, still present, new.</li>
</ul>
<h3>When is it good enough?</h3>
<p>Agree criteria with the team: for example, all critical and serious issues on core tasks resolved and most participants completing core tasks without help. Then ship, measure in live use and keep iterating.</p>`,
    why: `
<p>No design is right first time. Iterating with evidence produces much better outcomes than polishing a single version and hoping. It also reduces risk: problems are found when they are cheap to fix, and stakeholders see steady, measurable progress.</p>`,
    example: `
<p>A council's school admissions service goes through three rounds. Round 1: four of five parents cannot find how to rank schools. Round 2: ranking is clear, but three of five misunderstand the deadline. Round 3: the deadline is clear and all five complete the core task, with only minor issues left.</p>
<p>The team agreed in advance that this met their criteria, so they release a beta while monitoring support calls and completion rates.</p>`,
    walkthrough: [
      { title: 'Plan rounds', body: 'Schedule two or three test rounds.' },
      { title: 'Define core tasks', body: 'Choose tasks to keep across rounds.' },
      { title: 'Run round 1', body: 'Test and analyse.' },
      { title: 'Fix the biggest problems', body: 'Change the design for critical and serious issues.' },
      { title: 'Run the next round', body: 'Test again and track issues.' },
      { title: 'Check exit criteria', body: 'Decide whether the design is ready.' },
    ],
    mistakes: [
      { mistake: 'One big test at the end.', fix: 'Plan small rounds throughout.' },
      { mistake: 'Changing tasks every round.', fix: 'Keep core tasks consistent to compare.' },
      { mistake: 'No exit criteria.', fix: 'Agree when the design is good enough.' },
    ],
    quiz: [
      { q: 'Why do small rounds find more problems?', options: ['They are cheaper', 'Fixing big problems reveals smaller hidden ones', 'They use fewer tasks'], answer: 1, explain: 'Each round uncovers the next layer.' },
      { q: 'Why keep core tasks the same?', options: ['To compare across rounds', 'To save writing', 'Participants prefer it'], answer: 0, explain: 'Consistency shows progress.' },
      { q: 'What should exit criteria cover?', options: ['How the design looks', 'Resolution of serious issues and task success', 'The number of screens'], answer: 1, explain: 'They define good enough.' },
    ],
    exercise: {
      title: 'Iteration plan',
      minutes: 30,
      brief: '<p>Plan iterations for a project.</p>',
      steps: [
        'Define core tasks.',
        'Schedule three rounds.',
        'Write exit criteria.',
        'Create an issue tracker with fixed, still present and new columns.',
      ],
      deliverable: 'An iteration plan and issue tracker.',
    },
    checklist: [
      'Rounds are planned.',
      'Core tasks are consistent.',
      'Issues are tracked across rounds.',
      'Exit criteria are agreed.',
    ],
    summary: [
      'Iterate: design, test, learn, change, repeat.',
      'Small rounds find more problems.',
      'Track issues across rounds.',
      'Agree exit criteria and keep improving after launch.',
    ],
    reading: [
      { title: 'Parallel and iterative design + competitive testing', url: 'https://www.nngroup.com/articles/parallel-and-iterative-design/', source: 'Nielsen Norman Group' },
      { title: 'Why you only need to test with 5 users', url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/', source: 'Nielsen Norman Group' },
    ],
  },

  'communicating-evidence': {
    objectives: [
      'Present test findings so stakeholders act on them.',
      'Use clips, quotes and data persuasively and honestly.',
      'Tailor reports to different audiences.',
    ],
    explanation: `
<p>Research only matters if it changes decisions. How you communicate findings decides whether they do.</p>
<h3>Lead with what matters</h3>
<p>Start with the top three to five findings and recommendations, then supporting detail. Busy stakeholders may read only the first page.</p>
<h3>Show, do not just tell</h3>
<ul>
<li><strong>Video clips</strong>: 30-second clips of people struggling are more persuasive than any slide.</li>
<li><strong>Quotes</strong>: short, representative, anonymised.</li>
<li><strong>Numbers</strong>: task success counts, severity totals.</li>
<li><strong>Screenshots</strong> annotated with the problem.</li>
</ul>
<h3>Tailor the format</h3>
<p>Executives want impact and decisions. Product managers want priorities and trade-offs. Designers and engineers want detail and examples. A short summary, a highlight reel and a detailed findings log often cover everyone.</p>
<h3>Be honest</h3>
<p>Do not cherry-pick dramatic clips that misrepresent the overall picture. State sample size and limits. Mention what worked well, too: it protects good design decisions.</p>
<h3>Involve people early</h3>
<p>Stakeholders who watch sessions live are far more likely to act. Invite them and give them a role, such as note-taking.</p>`,
    why: `
<p>Findings that are ignored are wasted research. Clear, honest and well-targeted communication builds trust in research, wins support for fixes and helps teams make better decisions faster.</p>`,
    example: `
<p>A designer sends a 40-page report after testing a new onboarding flow. Nobody reads past page three and the critical issues stay unfixed.</p>
<p>For the next round, they invite the product manager and two engineers to watch sessions, share a one-page summary with the top four findings and a two-minute highlight reel, and keep a detailed log for the team. The critical issue gets fixed the same week, because everyone saw participants struggle.</p>`,
    walkthrough: [
      { title: 'Invite observers', body: 'Ask stakeholders to watch sessions.' },
      { title: 'Choose top findings', body: 'Pick three to five that matter most.' },
      { title: 'Gather evidence', body: 'Select clips, quotes and numbers for each.' },
      { title: 'Write a one-page summary', body: 'Findings, evidence, recommendations and limits.' },
      { title: 'Create a highlight reel', body: 'Two to three minutes of key clips, anonymised.' },
      { title: 'Present and agree actions', body: 'Discuss and record decisions.' },
    ],
    mistakes: [
      { mistake: 'Long reports nobody reads.', fix: 'Lead with a short summary.' },
      { mistake: 'Cherry-picking dramatic clips.', fix: 'Represent the overall picture honestly.' },
      { mistake: 'Only reporting problems.', fix: 'Include what worked well.' },
    ],
    quiz: [
      { q: 'What is often most persuasive?', options: ['A long report', 'Short video clips of real users', 'A chart'], answer: 1, explain: 'Seeing struggle builds empathy.' },
      { q: 'Why mention what worked well?', options: ['To be polite', 'To protect good design decisions', 'It is required'], answer: 1, explain: 'Good parts should not be changed accidentally.' },
      { q: 'What increases the chance stakeholders act?', options: ['Watching sessions live', 'Receiving a PDF', 'Hearing about it later'], answer: 0, explain: 'Direct observation is powerful.' },
    ],
    exercise: {
      title: 'Findings summary',
      minutes: 60,
      brief: '<p>Communicate findings from a test you analysed.</p>',
      steps: [
        'Write a one-page summary.',
        'Select three quotes and one clip or screenshot per finding.',
        'Include limits and positives.',
        'Present to a peer and ask what they would do next.',
      ],
      deliverable: 'A one-page summary and evidence pack.',
    },
    checklist: [
      'I lead with top findings.',
      'Evidence is shown, not just described.',
      'I tailored formats to audiences.',
      'I was honest about limits and positives.',
    ],
    summary: [
      'Findings must change decisions.',
      'Lead with what matters and show evidence.',
      'Tailor formats and invite observers.',
      'Be honest about limits and successes.',
    ],
    reading: [
      { title: 'Sharing user research findings', url: 'https://www.gov.uk/service-manual/user-research/sharing-user-research-findings', source: 'GOV.UK Service Manual' },
      { title: 'UX research cheat sheet', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', source: 'Nielsen Norman Group' },
    ],
  },
};
