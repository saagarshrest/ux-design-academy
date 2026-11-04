// @ts-check
/* Stage 8 (part 1): Usability testing. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'usability-heuristics': {
    objectives: [
      'Name and explain Nielsen\'s ten usability heuristics.',
      'Apply heuristics to find problems in a real interface.',
      'Understand the strengths and limits of heuristic review.',
    ],
    explanation: `
<p>Heuristics are broad rules of thumb for usable design. The best known are Jakob Nielsen's ten:</p>
<ol>
<li><strong>Visibility of system status</strong>: keep people informed.</li>
<li><strong>Match between system and the real world</strong>: use familiar language and concepts.</li>
<li><strong>User control and freedom</strong>: provide undo, cancel and clear exits.</li>
<li><strong>Consistency and standards</strong>: follow platform and internal conventions.</li>
<li><strong>Error prevention</strong>: stop errors before they happen.</li>
<li><strong>Recognition rather than recall</strong>: make options visible instead of relying on memory.</li>
<li><strong>Flexibility and efficiency of use</strong>: shortcuts for experts without confusing beginners.</li>
<li><strong>Aesthetic and minimalist design</strong>: remove irrelevant information.</li>
<li><strong>Help users recognise, diagnose and recover from errors</strong>: plain, constructive error messages.</li>
<li><strong>Help and documentation</strong>: easy to search, focused on tasks.</li>
</ol>
<h3>Strengths and limits</h3>
<p>Heuristic review is fast and cheap and catches many obvious problems. But reviewers are not real users: they miss problems specific to your audience and may flag things that do not matter. Use it alongside testing, not instead of it.</p>`,
    why: `
<p>Heuristics give you a shared vocabulary for usability problems and a quick way to review designs before testing. Knowing them makes your critiques more convincing ("this breaks recognition rather than recall") and they are frequently discussed in interviews.</p>`,
    example: `
<p>A reviewer evaluates a library's online renewal system. Findings include: no confirmation after renewing (heuristic 1), "Patron ID" instead of "Library card number" (2), no way to undo a cancelled reservation (3), and error message "Transaction failed: code 17" (9).</p>
<p>Each finding is logged with a screenshot, the heuristic and a severity rating. The team fixes the high-severity items before running user tests, so testing can focus on deeper issues.</p>`,
    walkthrough: [
      { title: 'Learn the ten', body: 'Write each heuristic in your own words with an example.' },
      { title: 'Pick a product', body: 'Choose a flow to review.' },
      { title: 'Review independently', body: 'Go through the flow twice: once for overview, once in detail.' },
      { title: 'Log issues', body: 'Record each issue with screenshot, heuristic and location.' },
      { title: 'Rate severity', body: 'Rate from cosmetic to catastrophic.' },
      { title: 'Combine', body: 'Merge with other reviewers\' findings.' },
    ],
    mistakes: [
      { mistake: 'Reviewing alone.', fix: 'Use two to five reviewers and combine findings.' },
      { mistake: 'Treating heuristics as strict rules.', fix: 'Use judgement; they are guidelines.' },
      { mistake: 'Skipping user testing.', fix: 'Use heuristics as a complement to testing.' },
    ],
    quiz: [
      { q: '"Transaction failed: code 17" breaks which heuristic?', options: ['Consistency', 'Help users recognise, diagnose and recover from errors', 'Flexibility'], answer: 1, explain: 'The message does not help recovery.' },
      { q: 'What does "recognition rather than recall" mean?', options: ['Make options visible instead of relying on memory', 'Remember user names', 'Use icons'], answer: 0, explain: 'Reduce memory load.' },
      { q: 'What is a limit of heuristic review?', options: ['It is expensive', 'Reviewers are not real users', 'It takes months'], answer: 1, explain: 'It misses audience-specific issues.' },
    ],
    exercise: {
      title: 'Heuristic review',
      minutes: 60,
      brief: '<p>Run a heuristic review of a sign-up or booking flow.</p>',
      steps: [
        'Review the flow against all ten heuristics.',
        'Log at least eight issues.',
        'Rate severity.',
        'Recommend fixes for the top three.',
      ],
      deliverable: 'A heuristic review table with recommendations.',
    },
    checklist: [
      'I can explain all ten heuristics.',
      'I logged issues with evidence.',
      'I rated severity.',
      'I treat review as a complement to testing.',
    ],
    summary: [
      'Nielsen\'s ten heuristics are rules of thumb for usability.',
      'Heuristic review is fast and cheap.',
      'Use several reviewers and rate severity.',
      'It complements, not replaces, testing.',
    ],
    reading: [
      { title: '10 usability heuristics for user interface design', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', source: 'Nielsen Norman Group' },
      { title: 'How to conduct a heuristic evaluation', url: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/', source: 'Nielsen Norman Group' },
    ],
  },

  'planning-usability-tests': {
    objectives: [
      'Write a test plan with goals, participants, tasks and logistics.',
      'Choose what to test and what success looks like.',
      'Prepare materials so sessions run smoothly.',
    ],
    explanation: `
<p>A <strong>usability test</strong> watches real people try to complete realistic tasks with a design, to find where it causes problems. Good tests start with a plan.</p>
<h3>A test plan includes</h3>
<ul>
<li><strong>Goals and research questions</strong>: what you need to learn. "Can first-time users book a repeat prescription?"</li>
<li><strong>What is being tested</strong>: prototype, live site, competitor.</li>
<li><strong>Participants</strong>: who, how many and how they will be recruited.</li>
<li><strong>Method</strong>: moderated or unmoderated, remote or in person.</li>
<li><strong>Tasks and scenarios</strong>: realistic, in order.</li>
<li><strong>Success measures</strong>: task completion, time, errors, confidence ratings.</li>
<li><strong>Logistics</strong>: schedule, tools, consent forms, incentives, roles (moderator, note-taker, observers).</li>
</ul>
<h3>How many participants?</h3>
<p>For finding problems in qualitative tests, around five participants per distinct user group usually reveals most major issues. Test, fix, and test again rather than running one large study. Quantitative benchmarks need many more participants.</p>
<h3>Pilot</h3>
<p>Always run a pilot session with a colleague to catch broken prototypes, confusing tasks and timing problems.</p>`,
    why: `
<p>A plan keeps the test focused on decisions the team needs to make, makes sessions consistent so results are comparable, and lets stakeholders agree goals in advance. Skipping planning leads to vague findings and wasted participant time.</p>`,
    example: `
<p>A pharmacy app team plans a test of a new repeat prescription flow. Goals: can first-time users find and complete a repeat order, and do they understand when it will be ready? Five participants who take regular medication, recruited through a panel, in 45-minute remote moderated sessions. Four tasks, with success measured by completion and a confidence rating.</p>
<p>The pilot with a colleague reveals the prototype breaks if someone taps "Change pharmacy", so they fix it before the real sessions.</p>`,
    walkthrough: [
      { title: 'Agree goals', body: 'Write two to four research questions with stakeholders.' },
      { title: 'Choose method', body: 'Decide moderated or unmoderated, remote or in person.' },
      { title: 'Define participants', body: 'Write criteria and numbers.' },
      { title: 'Write tasks', body: 'Create realistic tasks linked to goals.' },
      { title: 'Define success', body: 'Choose what you will measure.' },
      { title: 'Prepare and pilot', body: 'Prepare consent, scripts and tools; run a pilot.' },
    ],
    mistakes: [
      { mistake: 'No clear goals.', fix: 'Write research questions linked to decisions.' },
      { mistake: 'Skipping the pilot.', fix: 'Always pilot to catch problems.' },
      { mistake: 'One huge test at the end.', fix: 'Test small and often.' },
    ],
    quiz: [
      { q: 'How many participants typically find most major issues in a qualitative test?', options: ['1', 'About 5 per user group', '100'], answer: 1, explain: 'Small rounds, repeated, work best.' },
      { q: 'Why run a pilot?', options: ['To get more data', 'To catch broken prototypes and confusing tasks', 'It is required by law'], answer: 1, explain: 'Pilots protect real sessions.' },
      { q: 'What should goals be linked to?', options: ['Decisions the team needs to make', 'Random curiosity', 'Visual style'], answer: 0, explain: 'Tests should inform decisions.' },
    ],
    exercise: {
      title: 'Test plan',
      minutes: 60,
      brief: '<p>Write a test plan for a prototype you built earlier.</p>',
      steps: [
        'Write goals and research questions.',
        'Define participants and method.',
        'Write four tasks and success measures.',
        'Run a pilot and update the plan.',
      ],
      deliverable: 'A one-to-two-page test plan.',
    },
    checklist: [
      'Goals link to decisions.',
      'Participants and method are defined.',
      'Tasks and success measures are clear.',
      'I ran a pilot.',
    ],
    summary: [
      'Usability tests watch people attempt realistic tasks.',
      'Plan goals, participants, method, tasks, measures and logistics.',
      'About five people per group finds most major issues.',
      'Pilot before real sessions.',
    ],
    reading: [
      { title: 'Usability testing 101', url: 'https://www.nngroup.com/articles/usability-testing-101/', source: 'Nielsen Norman Group' },
      { title: 'Why you only need to test with 5 users', url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/', source: 'Nielsen Norman Group' },
    ],
  },

  'writing-unbiased-tasks': {
    objectives: [
      'Write realistic task scenarios that do not give away the answer.',
      'Avoid leading words and interface labels in tasks.',
      'Order tasks to reduce learning effects.',
    ],
    explanation: `
<p>Tasks are the heart of a usability test. A good task is realistic, specific enough to have an end point, and does not tell people how to do it.</p>
<h3>Scenario-based tasks</h3>
<p>Give context and motivation: "Your daughter's birthday party is on Saturday. Order a cake that feeds 15 people and can be collected on Friday afternoon." This feels real and gives people what they need to make decisions.</p>
<h3>Avoid giving clues</h3>
<p>If the button says "Manage subscription", do not write "Manage your subscription". Instead: "You want to pay for your plan yearly rather than monthly. Make that change." Using interface labels turns the test into a word-matching game.</p>
<h3>Other tips</h3>
<ul>
<li>Avoid leading words like "easily" or "quickly".</li>
<li>Include both exploratory tasks ("Find a holiday that interests you") and specific tasks with a clear answer.</li>
<li>Let participants use their own details where appropriate, which increases realism.</li>
<li>Order tasks naturally, but vary order between participants where learning effects matter.</li>
</ul>`,
    why: `
<p>Biased tasks produce misleading results: people succeed because the task told them where to click, and real problems stay hidden. Well-written tasks are the difference between a test that reveals truth and one that confirms what the team wants to hear.</p>`,
    example: `
<p>A bank's first test task reads: "Click on 'Payees' and add a new payee." Everyone succeeds, but in real life, call centre logs show people cannot find how to pay someone new.</p>
<p>The rewritten task reads: "You owe your friend Sam £40 for concert tickets. You have their sort code and account number. Pay them back." Three of five participants look under "Transfers" first, revealing the real navigation problem.</p>`,
    walkthrough: [
      { title: 'Start from goals', body: 'List what people need to achieve, not screens.' },
      { title: 'Add context', body: 'Write a short, realistic scenario with motivation.' },
      { title: 'Remove clues', body: 'Check for interface words and replace them.' },
      { title: 'Define the end', body: 'Make sure there is a clear point where the task is complete.' },
      { title: 'Order tasks', body: 'Arrange naturally and consider varying order.' },
      { title: 'Pilot', body: 'Test tasks with a colleague for clarity.' },
    ],
    mistakes: [
      { mistake: 'Using interface labels in tasks.', fix: 'Describe the goal in everyday words.' },
      { mistake: 'Tasks with no clear end.', fix: 'Define success clearly.' },
      { mistake: 'Leading words like "simply".', fix: 'Keep task wording neutral.' },
    ],
    quiz: [
      { q: 'Which task is least biased?', options: ['Click Settings and change your password', 'You think someone knows your password. Make your account secure.', 'Easily update your password'], answer: 1, explain: 'It gives a goal without clues.' },
      { q: 'Why add a scenario?', options: ['To make tasks longer', 'To give realistic context and motivation', 'To confuse participants'], answer: 1, explain: 'Context helps people act naturally.' },
      { q: 'Why vary task order?', options: ['To reduce learning effects', 'For fun', 'To save time'], answer: 0, explain: 'Earlier tasks can teach people.' },
    ],
    exercise: {
      title: 'Rewrite tasks',
      minutes: 30,
      brief: '<p>Rewrite biased tasks into realistic scenarios.</p>',
      steps: [
        'Write five tasks for a food delivery app the "obvious" way.',
        'Highlight clues and leading words.',
        'Rewrite each as a scenario.',
        'Pilot with a friend.',
      ],
      deliverable: 'Before and after task lists with notes.',
    },
    checklist: [
      'Tasks are goals, not instructions.',
      'There are no interface labels.',
      'Each task has a clear end.',
      'Wording is neutral.',
    ],
    summary: [
      'Tasks should be realistic, specific and unbiased.',
      'Use scenarios with context and motivation.',
      'Avoid interface labels and leading words.',
      'Pilot tasks before testing.',
    ],
    reading: [
      { title: 'Turn user goals into task scenarios for usability testing', url: 'https://www.nngroup.com/articles/task-scenarios-usability-testing/', source: 'Nielsen Norman Group' },
      { title: 'Usability testing', url: 'https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing', source: 'GOV.UK Service Manual' },
    ],
  },

  'moderated-unmoderated': {
    objectives: [
      'Compare moderated and unmoderated testing.',
      'Choose remote or in-person testing for a situation.',
      'Set up each type well.',
    ],
    explanation: `
<p><strong>Moderated</strong> testing has a facilitator present (in person or by video) who guides the session, asks follow-up questions and helps if something breaks. <strong>Unmoderated</strong> testing uses a platform: participants complete tasks alone while their screen and voice are recorded.</p>
<h3>Moderated</h3>
<p>Strengths: rich insight, ability to probe "why", flexibility with rough prototypes. Weaknesses: slower, requires scheduling and skilled facilitation, smaller samples.</p>
<h3>Unmoderated</h3>
<p>Strengths: fast, cheap, larger samples, people in their own environment, good for clear tasks and quantitative measures. Weaknesses: no follow-up questions, participants may rush or misunderstand, broken prototypes waste sessions.</p>
<h3>Remote or in person</h3>
<p>Remote testing reaches more diverse participants and is convenient. In-person testing suits physical products, people less comfortable with technology, and situations where you need to see body language or the environment, such as a clinic or warehouse.</p>
<h3>Mixing</h3>
<p>Many teams run a few moderated sessions to understand problems, then unmoderated tests to measure how common they are.</p>`,
    why: `
<p>Choosing the right format affects what you learn, how fast and at what cost. Moderated sessions explain why problems happen; unmoderated tests show how often. Picking appropriately makes research more efficient and convincing.</p>`,
    example: `
<p>A grocery delivery company wants to know why people abandon the checkout and how often a new address form causes errors. They run six moderated remote sessions and learn that people are confused by delivery slot pricing.</p>
<p>After redesigning, they run an unmoderated test with 60 participants comparing the old and new checkout. Completion and time on task show the new version performs clearly better, which convinces leadership to ship it.</p>`,
    walkthrough: [
      { title: 'Clarify the question', body: 'Do you need to know why or how many?' },
      { title: 'Choose moderation', body: 'Moderated for why, unmoderated for scale.' },
      { title: 'Choose location', body: 'Remote for reach, in person for context or accessibility needs.' },
      { title: 'Prepare tools', body: 'Set up video calls, recording or testing platform.' },
      { title: 'Write clear instructions', body: 'Especially for unmoderated, make tasks unambiguous.' },
      { title: 'Pilot', body: 'Run a pilot in the chosen format.' },
    ],
    mistakes: [
      { mistake: 'Unmoderated testing with a fragile prototype.', fix: 'Use moderated sessions for rough prototypes.' },
      { mistake: 'Moderated sessions with large samples for measurement.', fix: 'Use unmoderated testing for scale.' },
      { mistake: 'Ignoring participants\' access needs.', fix: 'Offer formats people can take part in comfortably.' },
    ],
    quiz: [
      { q: 'Which format best explains why people struggle?', options: ['Moderated', 'Unmoderated', 'Analytics'], answer: 0, explain: 'Facilitators can ask follow-up questions.' },
      { q: 'What is a strength of unmoderated testing?', options: ['Deep probing', 'Speed and larger samples', 'Handling broken prototypes'], answer: 1, explain: 'It scales easily.' },
      { q: 'When is in-person testing especially useful?', options: ['Physical or context-dependent products', 'Always', 'Never'], answer: 0, explain: 'Some contexts need to be seen.' },
    ],
    exercise: {
      title: 'Choose a format',
      minutes: 30,
      brief: '<p>Choose testing formats for three scenarios.</p>',
      steps: [
        'Scenario 1: early sketch prototype of a new app.',
        'Scenario 2: comparing two versions of a sign-up page.',
        'Scenario 3: a stock app used in a warehouse.',
        'Choose and justify formats for each.',
      ],
      deliverable: 'A short justification for each scenario.',
    },
    checklist: [
      'I matched format to question.',
      'I considered participant access.',
      'Instructions suit the format.',
      'I piloted.',
    ],
    summary: [
      'Moderated testing explains why; unmoderated shows how often.',
      'Remote reaches more people; in person shows context.',
      'Mix formats for depth and scale.',
      'Choose based on the question.',
    ],
    reading: [
      { title: 'Remote usability tests: moderated and unmoderated', url: 'https://www.nngroup.com/articles/remote-usability-tests/', source: 'Nielsen Norman Group' },
      { title: 'Using moderated usability testing', url: 'https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing', source: 'GOV.UK Service Manual' },
    ],
  },

  'recruiting-participants': {
    objectives: [
      'Define recruitment criteria that match real users.',
      'Write screener questions that do not reveal the right answer.',
      'Recruit inclusively and ethically, including people with access needs.',
    ],
    explanation: `
<p>Who you test with determines what you learn. Testing with the wrong people produces confident but misleading findings.</p>
<h3>Criteria</h3>
<p>Define criteria based on behaviour and context, not just demographics: "Has booked a holiday online in the last 12 months" is more useful than "Aged 25 to 45". Include a mix of experience levels, devices and abilities.</p>
<h3>Screeners</h3>
<p>A <strong>screener</strong> is a short questionnaire to select participants. Good screeners hide what you are looking for: instead of "Do you use online banking?" (people may say yes to qualify), ask "Which of these have you done in the last month?" with several options.</p>
<h3>Sources</h3>
<p>Recruitment agencies and panels, your own customer lists, social media, community groups and charities. Each has biases: existing customers know your product, panels may include frequent testers.</p>
<h3>Inclusion and ethics</h3>
<p>Recruit disabled people and those with low digital skills or confidence. Offer accessible formats and fair incentives, explain how data will be used, and get informed consent. Do not over-recruit from colleagues or friends.</p>`,
    why: `
<p>Insights are only as good as the participants. Recruiting real and diverse users reveals the problems that matter, including those that affect people who are often excluded. Ethical recruitment protects participants and your organisation's reputation.</p>`,
    example: `
<p>A benefits application service is tested with university students recruited quickly through a panel. They complete it easily. After launch, many applicants with low digital confidence struggle, and call volumes rise.</p>
<p>The team recruits again through local charities and job centres, including people using screen readers and people who rarely use computers, with in-person options. They uncover serious problems with identity verification that the first round missed.</p>`,
    walkthrough: [
      { title: 'Define criteria', body: 'List behaviours and contexts that matter.' },
      { title: 'Plan diversity', body: 'Include different abilities, devices and confidence levels.' },
      { title: 'Write a screener', body: 'Use multiple-choice questions that hide the target.' },
      { title: 'Choose sources', body: 'Pick sources and note their biases.' },
      { title: 'Prepare consent and incentives', body: 'Write clear consent and offer fair payment.' },
      { title: 'Track no-shows', body: 'Over-recruit slightly and keep a reserve list.' },
    ],
    mistakes: [
      { mistake: 'Testing with colleagues.', fix: 'Recruit people who match real users.' },
      { mistake: 'Screener questions that reveal the answer.', fix: 'Use neutral, multiple-choice questions.' },
      { mistake: 'Excluding people with access needs.', fix: 'Recruit inclusively and offer accessible formats.' },
    ],
    quiz: [
      { q: 'Which criterion is most useful?', options: ['Aged 25–45', 'Has booked a holiday online in the last year', 'Likes travel'], answer: 1, explain: 'Behaviour predicts relevance.' },
      { q: 'What is a screener?', options: ['A type of test', 'A questionnaire to select participants', 'A recording tool'], answer: 1, explain: 'It filters candidates.' },
      { q: 'Why recruit disabled participants?', options: ['To meet a quota', 'To find problems that exclude real users', 'It is optional'], answer: 1, explain: 'Inclusion reveals critical issues.' },
    ],
    exercise: {
      title: 'Write a screener',
      minutes: 45,
      brief: '<p>Write a recruitment plan for a fitness app test.</p>',
      steps: [
        'Write behavioural criteria.',
        'Write a six-question screener.',
        'Plan inclusive recruitment sources.',
        'Draft a consent statement.',
      ],
      deliverable: 'A recruitment plan, screener and consent text.',
    },
    checklist: [
      'Criteria are behavioural.',
      'Screener questions are neutral.',
      'Recruitment is inclusive.',
      'Consent and incentives are clear.',
    ],
    summary: [
      'Participants determine what you learn.',
      'Use behavioural criteria and neutral screeners.',
      'Recruit inclusively from varied sources.',
      'Get informed consent and pay fairly.',
    ],
    reading: [
      { title: 'Find participants for user research', url: 'https://www.gov.uk/service-manual/user-research/find-user-research-participants', source: 'GOV.UK Service Manual' },
      { title: 'Running research sessions with people with disabilities', url: 'https://www.gov.uk/service-manual/user-research/running-research-sessions-with-people-with-disabilities', source: 'GOV.UK Service Manual' },
    ],
  },

  'observing-without-leading': {
    objectives: [
      'Facilitate sessions without influencing participants.',
      'Use think-aloud, neutral prompts and silence effectively.',
      'Handle common difficult moments during sessions.',
    ],
    explanation: `
<p>The facilitator's job is to create a comfortable space and then mostly stay out of the way.</p>
<h3>Setting up</h3>
<p>Explain that you are testing the design, not them, that there are no wrong answers, and that you did not design it (or that they will not hurt your feelings). Ask them to <strong>think aloud</strong>: say what they are looking at, trying and thinking.</p>
<h3>During tasks</h3>
<ul>
<li>Stay quiet. Silence lets people work and think.</li>
<li>Use neutral prompts: "What are you thinking?", "What would you expect to happen?"</li>
<li>Answer questions with questions: "What do you think it does?"</li>
<li>Avoid reacting: no "great", sighs or nods at correct choices.</li>
<li>Do not rescue too early. Let people struggle a little; that is where the insight is. Step in if they are distressed or completely stuck.</li>
</ul>
<h3>After tasks</h3>
<p>Ask follow-up questions about moments you observed: "I noticed you paused on this screen. What was going through your mind?" Ask for ratings, such as how easy the task was.</p>`,
    why: `
<p>Facilitators easily, and unknowingly, steer participants: a hint, a nod or a leading question can change what they do. That turns real problems into false successes. Neutral facilitation produces honest evidence the team can trust.</p>`,
    example: `
<p>In a session, a participant hovers between two buttons and asks, "Is it this one?" The new facilitator says, "Yes, try that." The task is recorded as a success, and the confusing labels never get fixed.</p>
<p>After coaching, the facilitator responds instead: "What do you think each one does?" The participant explains they expected "Save" to submit the form, revealing a labelling problem the team then fixes.</p>`,
    walkthrough: [
      { title: 'Prepare an intro script', body: 'Write a short, reassuring introduction and think-aloud request.' },
      { title: 'Practise neutral prompts', body: 'Prepare five neutral phrases.' },
      { title: 'Practise silence', body: 'Count to ten before speaking when someone pauses.' },
      { title: 'Plan rescue rules', body: 'Decide when you will step in and how.' },
      { title: 'Prepare follow-ups', body: 'Write questions for after each task.' },
      { title: 'Review a recording', body: 'Watch yourself and note any leading behaviour.' },
    ],
    mistakes: [
      { mistake: 'Answering participants\' questions directly.', fix: 'Reflect questions back.' },
      { mistake: 'Praising correct actions.', fix: 'Stay neutral throughout.' },
      { mistake: 'Rescuing at the first hesitation.', fix: 'Give people time to work it out.' },
    ],
    quiz: [
      { q: 'What should you say when a participant asks "Is this right?"', options: ['Yes', 'What do you think it does?', 'No, try the other one'], answer: 1, explain: 'Reflect the question back.' },
      { q: 'Why ask people to think aloud?', options: ['To fill silence', 'To understand what they look at, try and expect', 'To speed up the test'], answer: 1, explain: 'It reveals reasoning.' },
      { q: 'When should you step in?', options: ['At the first hesitation', 'When the person is distressed or completely stuck', 'Never'], answer: 1, explain: 'Let them struggle a little, but not suffer.' },
    ],
    exercise: {
      title: 'Practice session',
      minutes: 60,
      brief: '<p>Run and record a practice session.</p>',
      steps: [
        'Write an intro script and neutral prompts.',
        'Run a 20-minute session with a friend on any website.',
        'Watch the recording and tally leading behaviours.',
        'Write three things to change.',
      ],
      deliverable: 'A script, a tally of leading behaviours and an improvement list.',
    },
    checklist: [
      'I reassure participants at the start.',
      'I use neutral prompts.',
      'I tolerate silence.',
      'I reviewed my own facilitation.',
    ],
    summary: [
      'Facilitators create comfort, then stay out of the way.',
      'Use think-aloud, neutral prompts and silence.',
      'Reflect questions back and avoid reacting.',
      'Rescue only when needed.',
    ],
    reading: [
      { title: 'Thinking aloud: the #1 usability tool', url: 'https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/', source: 'Nielsen Norman Group' },
      { title: 'Talking with participants during a usability test', url: 'https://www.nngroup.com/articles/talking-to-users/', source: 'Nielsen Norman Group' },
    ],
  },
};
