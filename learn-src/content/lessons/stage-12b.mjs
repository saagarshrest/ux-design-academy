// @ts-check
/* Stage 12 (part 2): Advanced paths. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'path-data-visualisation': {
    objectives: [
      'Choose chart types that suit the question being asked.',
      'Encode data accurately with position, length and colour.',
      'Avoid misleading graphics and make charts accessible.',
    ],
    explanation: `
<p>Data visualisation turns numbers into something people can understand at a glance. Good charts start from a question, not from the data.</p>
<h3>Choosing a chart</h3>
<ul>
<li><strong>Compare categories</strong>: bar chart.</li>
<li><strong>Change over time</strong>: line chart.</li>
<li><strong>Part of a whole</strong>: stacked bar, or a pie with very few slices.</li>
<li><strong>Relationship</strong>: scatter plot.</li>
<li><strong>Distribution</strong>: histogram or box plot.</li>
<li><strong>A single key number</strong>: a large figure with comparison.</li>
</ul>
<h3>Encoding</h3>
<p>People judge position and length most accurately, angle and area less so, and colour intensity least. Use colour to highlight and group, not as the only way to read values.</p>
<h3>Avoid misleading charts</h3>
<p>Start bar chart axes at zero, avoid 3D effects, keep scales consistent and label units. Do not cherry-pick time ranges.</p>
<h3>Clarity and accessibility</h3>
<p>Use a clear title that states the takeaway, direct labels instead of distant legends, sufficient contrast, patterns or labels in addition to colour, and a text summary or data table for screen reader users.</p>`,
    why: `
<p>Charts shape decisions. A misleading or confusing chart can lead to bad choices, while a clear one makes insights obvious. Designers increasingly work on dashboards, reports and data products, so visualisation skills are valuable. Accessible charts make sure everyone can use the information.</p>`,
    example: `
<p>A report shows monthly sign-ups as a 3D pie chart with twelve slices. Nobody can compare months. The redesign uses a line chart titled "Sign-ups grew steadily, with a spike after the March campaign", with the March point labelled directly and a data table available below. Readers understand the trend immediately.</p>`,
    walkthrough: [
      { title: 'State the question', body: 'Write what the chart should answer.' },
      { title: 'Choose the chart', body: 'Match the chart type to the question.' },
      { title: 'Encode carefully', body: 'Use position and length for key values.' },
      { title: 'Check honesty', body: 'Check axes, scales and ranges.' },
      { title: 'Write a takeaway title', body: 'State the main insight.' },
      { title: 'Make it accessible', body: 'Add contrast, direct labels and a text alternative.' },
    ],
    mistakes: [
      { mistake: '3D and decorative charts.', fix: 'Use flat, simple charts.' },
      { mistake: 'Truncated bar chart axes.', fix: 'Start bars at zero.' },
      { mistake: 'Colour as the only encoding.', fix: 'Add labels or patterns.' },
    ],
    quiz: [
      { q: 'Which chart is best for change over time?', options: ['Pie chart', 'Line chart', 'Scatter plot'], answer: 1, explain: 'Lines show trends.' },
      { q: 'Which encoding do people judge most accurately?', options: ['Colour intensity', 'Position', 'Area'], answer: 1, explain: 'Position and length are most accurate.' },
      { q: 'Why add a text alternative?', options: ['For decoration', 'So screen reader users can access the data', 'It is not needed'], answer: 1, explain: 'Accessibility.' },
    ],
    exercise: {
      title: 'Chart makeover',
      minutes: 45,
      brief: '<p>Redesign a poor chart.</p>',
      steps: [
        'Find a confusing or misleading chart.',
        'Write the question it should answer.',
        'Redesign it with a better chart type and takeaway title.',
        'Add an accessible text summary.',
      ],
      deliverable: 'Before-and-after charts with explanation.',
    },
    checklist: [
      'The chart answers a clear question.',
      'The type suits the data.',
      'It is honest.',
      'It is accessible.',
    ],
    summary: [
      'Start from the question.',
      'Match chart type to the task.',
      'Encode with position and length; avoid misleading tricks.',
      'Use takeaway titles and accessible alternatives.',
    ],
    reading: [
      { title: 'Choosing chart types', url: 'https://www.nngroup.com/articles/choosing-chart-types/', source: 'Nielsen Norman Group' },
      { title: 'Complex images (charts and graphs)', url: 'https://www.w3.org/WAI/tutorials/images/complex/', source: 'W3C WAI' },
    ],
  },

  'path-motion': {
    objectives: [
      'Use motion purposefully to explain change and give feedback.',
      'Choreograph timing and easing.',
      'Prototype and hand off motion, respecting reduced-motion preferences.',
    ],
    explanation: `
<p>Motion is part of interaction design. Used well, it explains what changed, where things came from and whether an action worked.</p>
<h3>Purposes of motion</h3>
<ul>
<li><strong>Feedback</strong>: a button press, a success tick.</li>
<li><strong>Orientation</strong>: a panel sliding from where it was triggered.</li>
<li><strong>Continuity</strong>: an item expanding into its detail view.</li>
<li><strong>Attention</strong>: gently highlighting a change.</li>
</ul>
<h3>Timing and easing</h3>
<p>Most interface transitions take about 150 to 300 milliseconds; larger movements can be a little longer. Use easing: <em>ease-out</em> for entering elements, <em>ease-in</em> for exiting. Keep timing consistent with motion tokens.</p>
<h3>Choreography</h3>
<p>When several elements move, stagger them slightly and move them in a logical order. Avoid everything moving at once.</p>
<h3>Prototyping and handoff</h3>
<p>Prototype motion in your design tool or code. Hand off with specifications: trigger, properties, duration, easing and delay, plus a video reference.</p>
<h3>Accessibility</h3>
<p>Respect the <code>prefers-reduced-motion</code> setting by reducing or removing non-essential motion. Avoid flashing content and large parallax effects that can trigger discomfort.</p>`,
    why: `
<p>Purposeful motion makes interfaces feel responsive and easier to understand. Gratuitous motion slows people down and can make some users feel unwell. Clear specifications ensure what is designed is what gets built.</p>`,
    example: `
<p>In a task app, completed tasks vanish instantly and people think they have been deleted. The redesign adds a 200ms tick animation and a 250ms collapse, with the completed count updating. People understand what happened. With reduced motion turned on, the task simply fades out quickly.</p>`,
    walkthrough: [
      { title: 'Find moments', body: 'List changes that could confuse users.' },
      { title: 'Define purpose', body: 'Decide what each motion should explain.' },
      { title: 'Set timing and easing', body: 'Use consistent motion tokens.' },
      { title: 'Choreograph', body: 'Sequence multiple elements.' },
      { title: 'Prototype', body: 'Build and test the motion.' },
      { title: 'Specify and respect preferences', body: 'Write specs and a reduced-motion alternative.' },
    ],
    mistakes: [
      { mistake: 'Decorative motion everywhere.', fix: 'Use motion only with a purpose.' },
      { mistake: 'Slow transitions.', fix: 'Keep most transitions around 150 to 300ms.' },
      { mistake: 'Ignoring reduced motion.', fix: 'Support prefers-reduced-motion.' },
    ],
    quiz: [
      { q: 'Typical duration for interface transitions?', options: ['1 to 2 seconds', 'About 150 to 300 milliseconds', '10 milliseconds'], answer: 1, explain: 'Quick but perceivable.' },
      { q: 'Which easing suits entering elements?', options: ['Ease-out', 'Ease-in', 'Linear'], answer: 0, explain: 'They decelerate into place.' },
      { q: 'What should happen with reduced motion on?', options: ['Nothing changes', 'Non-essential motion is reduced or removed', 'More motion'], answer: 1, explain: 'Respect user preferences.' },
    ],
    exercise: {
      title: 'Motion spec',
      minutes: 45,
      brief: '<p>Design and specify a motion for one interaction.</p>',
      steps: [
        'Choose an interaction such as adding to a basket.',
        'Define the purpose of the motion.',
        'Prototype it with timing and easing.',
        'Write a spec including a reduced-motion version.',
      ],
      deliverable: 'A motion prototype and specification.',
    },
    checklist: [
      'Every motion has a purpose.',
      'Timing and easing are consistent.',
      'There is a clear spec.',
      'Reduced motion is supported.',
    ],
    summary: [
      'Use motion for feedback, orientation, continuity and attention.',
      'Keep transitions short with appropriate easing.',
      'Choreograph and specify motion clearly.',
      'Respect reduced-motion preferences.',
    ],
    reading: [
      { title: 'Material Design 3: motion', url: 'https://m3.material.io/styles/motion/overview', source: 'Google' },
      { title: 'prefers-reduced-motion', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion', source: 'MDN' },
    ],
  },

  'path-ai-workflows': {
    objectives: [
      'Use AI tools to speed up parts of the design process.',
      'Recognise where AI tools fail or mislead.',
      'Apply responsible practices for privacy, bias and accuracy.',
    ],
    explanation: `
<p>AI tools can generate text, images, layouts, code and summaries. Used carefully, they speed up some tasks; used carelessly, they produce confident nonsense.</p>
<h3>Useful applications</h3>
<ul>
<li>Drafting interview guides, survey questions or test scripts for you to edit.</li>
<li>Generating many rough ideas or copy variations quickly.</li>
<li>Creating realistic placeholder content.</li>
<li>Helping with first-pass coding of qualitative data, which you then check.</li>
<li>Turning sketches into rough prototypes.</li>
</ul>
<h3>Limitations</h3>
<ul>
<li><strong>Not real users</strong>: AI can imitate opinions but cannot replace research with real people.</li>
<li><strong>Confident errors</strong>: summaries may invent quotes or miss key points.</li>
<li><strong>Generic output</strong>: designs often look average and ignore your context and constraints.</li>
<li><strong>Bias</strong>: outputs can reflect stereotypes in training data.</li>
</ul>
<h3>Responsible practice</h3>
<p>Do not paste personal or confidential data into tools without approval. Check every output against sources. Be transparent with your team about AI use, and keep human judgement in charge of decisions.</p>`,
    why: `
<p>AI tools are becoming part of everyday design work, and designers who use them well can move faster on routine tasks. Knowing their limits protects your work from errors, bias and privacy breaches. Above all, design still depends on understanding real people, which no tool can do for you.</p>`,
    example: `
<p>A designer uses an AI tool to summarise twelve interview transcripts. The summary says "most participants wanted a dark mode". Checking the transcripts, the designer finds only one person mentioned it. They use the AI summary only as a starting point, code the transcripts themselves and note that AI-generated summaries must always be verified.</p>`,
    walkthrough: [
      { title: 'Choose tasks', body: 'Pick routine tasks where speed helps.' },
      { title: 'Check policies', body: 'Confirm what data can be used with which tools.' },
      { title: 'Prompt clearly', body: 'Give context, constraints and format.' },
      { title: 'Verify', body: 'Check outputs against sources.' },
      { title: 'Check for bias', body: 'Review outputs for stereotypes and gaps.' },
      { title: 'Document use', body: 'Tell the team where AI was used.' },
    ],
    mistakes: [
      { mistake: 'Replacing user research with AI personas.', fix: 'Research with real people.' },
      { mistake: 'Trusting summaries without checking.', fix: 'Verify against the source.' },
      { mistake: 'Pasting personal data into tools.', fix: 'Follow data policies and anonymise.' },
    ],
    quiz: [
      { q: 'Can AI replace research with real users?', options: ['Yes', 'No', 'Only for surveys'], answer: 1, explain: 'It can only imitate.' },
      { q: 'What should you do with an AI summary?', options: ['Publish it', 'Verify it against sources', 'Ignore it'], answer: 1, explain: 'Summaries can contain errors.' },
      { q: 'What about confidential data?', options: ['Paste freely', 'Follow policies and anonymise', 'It does not matter'], answer: 1, explain: 'Protect privacy.' },
    ],
    exercise: {
      title: 'AI experiment',
      minutes: 45,
      brief: '<p>Test an AI tool on a design task.</p>',
      steps: [
        'Pick a task such as drafting a usability test script.',
        'Use an AI tool to create a first draft.',
        'Review and correct it, noting errors.',
        'Write guidelines for when to use AI in this task.',
      ],
      deliverable: 'An edited draft and a short guideline.',
    },
    checklist: [
      'I chose suitable tasks.',
      'I followed data policies.',
      'I verified outputs.',
      'I was transparent about use.',
    ],
    summary: [
      'AI can speed up routine design tasks.',
      'It cannot replace real users or judgement.',
      'Verify outputs and check for bias.',
      'Protect data and be transparent.',
    ],
    reading: [
      { title: 'AI-driven design', url: 'https://www.interaction-design.org/literature/topics/ai-driven-design', source: 'Interaction Design Foundation' },
      { title: 'People + AI Guidebook', url: 'https://pair.withgoogle.com/guidebook/', source: 'Google PAIR' },
    ],
  },

  'path-advanced-research': {
    objectives: [
      'Plan and run diary studies and contextual inquiry.',
      'Combine qualitative and quantitative methods.',
      'Choose methods for complex research questions.',
    ],
    explanation: `
<p>Interviews and usability tests answer many questions, but some need deeper or longer research.</p>
<h3>Diary studies</h3>
<p>Participants record experiences over days or weeks, using an app, messages or forms. Useful for behaviours that happen over time, such as managing a long-term health condition or planning a holiday. Give clear prompts, check in regularly and reward participation fairly.</p>
<h3>Contextual inquiry</h3>
<p>You observe and talk with people in their own environment while they do real tasks, using a master-apprentice approach: they show, you ask. It reveals workarounds, interruptions and tools that interviews miss.</p>
<h3>Mixed methods</h3>
<p>Combine qualitative ("why") and quantitative ("how many") research. For example: analytics show where people drop off; interviews explain why; a survey measures how common each reason is.</p>
<h3>Other methods</h3>
<p>Card sorting and tree testing for structure, longitudinal studies, field experiments and participatory design workshops.</p>
<h3>Ethics</h3>
<p>Longer and in-context studies are more intrusive. Get informed consent, protect privacy, allow withdrawal at any time and take care with sensitive topics.</p>`,
    why: `
<p>Complex products and services involve behaviours that unfold over time and in context. Advanced methods uncover what basic interviews miss. Mixed methods give both depth and confidence, making findings more persuasive to stakeholders and more reliable for decisions.</p>`,
    example: `
<p>A team designing a medication app runs a two-week diary study with 10 people. Entries reveal that doses are often missed at weekends, when routines change. Contextual visits show pill boxes kept in kitchens, not bedrooms. A follow-up survey of 400 users confirms weekend misses are common. The team designs routine-based reminders instead of fixed times.</p>`,
    walkthrough: [
      { title: 'Frame the question', body: 'Decide what you need to learn and why basic methods are not enough.' },
      { title: 'Choose methods', body: 'Pick diary, contextual or mixed methods.' },
      { title: 'Plan logistics', body: 'Set duration, prompts, tools and incentives.' },
      { title: 'Address ethics', body: 'Plan consent, privacy and withdrawal.' },
      { title: 'Run and monitor', body: 'Check in and keep participants engaged.' },
      { title: 'Synthesise and triangulate', body: 'Combine findings across methods.' },
    ],
    mistakes: [
      { mistake: 'Diary studies with vague prompts.', fix: 'Give clear, specific prompts.' },
      { mistake: 'Relying on interviews for workplace behaviour.', fix: 'Observe in context.' },
      { mistake: 'Quantitative data without explanation.', fix: 'Combine with qualitative research.' },
    ],
    quiz: [
      { q: 'When is a diary study useful?', options: ['For one-off tasks', 'For behaviours that happen over time', 'For visual design'], answer: 1, explain: 'It captures change over time.' },
      { q: 'What does contextual inquiry reveal?', options: ['Opinions only', 'Real workarounds and environment', 'Statistics'], answer: 1, explain: 'Observation in context.' },
      { q: 'Why combine methods?', options: ['To use more budget', 'To get both why and how many', 'It is required'], answer: 1, explain: 'Depth and scale.' },
    ],
    exercise: {
      title: 'Research plan',
      minutes: 45,
      brief: '<p>Plan a mixed-methods study.</p>',
      steps: [
        'Choose a complex research question.',
        'Select two or three methods and explain why.',
        'Plan logistics and ethics.',
        'Describe how you will combine findings.',
      ],
      deliverable: 'A mixed-methods research plan.',
    },
    checklist: [
      'The question needs advanced methods.',
      'Methods complement each other.',
      'Ethics are addressed.',
      'Findings will be triangulated.',
    ],
    summary: [
      'Diary studies capture behaviour over time.',
      'Contextual inquiry reveals real environments.',
      'Mixed methods combine why and how many.',
      'Take extra care with ethics.',
    ],
    reading: [
      { title: 'Diary studies', url: 'https://www.nngroup.com/articles/diary-studies/', source: 'Nielsen Norman Group' },
      { title: 'Contextual inquiry', url: 'https://www.nngroup.com/articles/contextual-inquiry/', source: 'Nielsen Norman Group' },
      { title: 'UX research cheat sheet', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', source: 'Nielsen Norman Group' },
    ],
  },

  'path-experimentation': {
    objectives: [
      'Design experiments with clear hypotheses and metrics.',
      'Analyse funnels and cohorts.',
      'Avoid common statistical pitfalls.',
    ],
    explanation: `
<p>Experimentation lets teams learn what actually works by comparing versions with real users. Analytics shows what people do at scale.</p>
<h3>Experiment design</h3>
<ul>
<li><strong>Hypothesis</strong>: "If we show delivery dates on product pages, checkout completion will increase, because people will not be surprised at checkout."</li>
<li><strong>Primary metric</strong>: one main measure of success.</li>
<li><strong>Guardrail metrics</strong>: things that must not get worse, such as returns or complaints.</li>
<li><strong>Sample size and duration</strong>: calculated in advance; usually run full weeks.</li>
</ul>
<h3>Funnels and cohorts</h3>
<p>A <strong>funnel</strong> shows how many people complete each step in a journey, revealing where they drop off. <strong>Cohorts</strong> group users by when they started or what they did, showing how behaviour changes over time (for example retention).</p>
<h3>Statistical pitfalls</h3>
<ul>
<li><strong>Peeking</strong>: stopping a test as soon as results look good inflates false positives.</li>
<li><strong>Too many metrics</strong>: test enough metrics and something will look significant by chance.</li>
<li><strong>Novelty effects</strong>: new things get attention that fades.</li>
<li><strong>Small samples</strong>: low traffic makes results unreliable.</li>
</ul>
<p>Work with analysts or data scientists, and combine experiments with qualitative research to understand why.</p>`,
    why: `
<p>Experiments replace opinion with evidence, but badly run tests produce false confidence. Understanding the basics helps designers propose good tests, interpret results correctly and avoid shipping changes that only appeared to work. It also builds trust with product and data teams.</p>`,
    example: `
<p>A team tests a new sign-up page and checks results daily. On day three the new version is "winning" by 12%, so they stop. A month later sign-ups are unchanged. Their next test sets the sample size in advance, runs for two full weeks, uses one primary metric and a guardrail for account activation, and checks results only at the end.</p>`,
    walkthrough: [
      { title: 'Write a hypothesis', body: 'Include change, expected effect and reason.' },
      { title: 'Choose metrics', body: 'One primary metric and guardrails.' },
      { title: 'Plan sample and duration', body: 'Calculate in advance with an analyst.' },
      { title: 'Run without peeking', body: 'Wait for the planned end.' },
      { title: 'Analyse', body: 'Check results, segments and guardrails.' },
      { title: 'Explain', body: 'Use qualitative research to understand why.' },
    ],
    mistakes: [
      { mistake: 'Stopping early when results look good.', fix: 'Set duration in advance.' },
      { mistake: 'Too many metrics.', fix: 'Pick one primary metric.' },
      { mistake: 'Testing with tiny traffic.', fix: 'Check sample size or use other methods.' },
    ],
    quiz: [
      { q: 'What is peeking?', options: ['Checking results early and stopping when they look good', 'User research', 'A design method'], answer: 0, explain: 'It inflates false positives.' },
      { q: 'What is a guardrail metric?', options: ['The main metric', 'A metric that must not get worse', 'A vanity metric'], answer: 1, explain: 'It protects against harm.' },
      { q: 'What does a funnel show?', options: ['Revenue only', 'Where people drop off in a journey', 'Colours'], answer: 1, explain: 'Step-by-step completion.' },
    ],
    exercise: {
      title: 'Experiment plan',
      minutes: 45,
      brief: '<p>Plan an experiment for a design change.</p>',
      steps: [
        'Write a hypothesis.',
        'Choose a primary metric and two guardrails.',
        'Estimate sample size with an online calculator.',
        'Write how you will analyse and explain results.',
      ],
      deliverable: 'An experiment plan.',
    },
    checklist: [
      'The hypothesis is clear.',
      'There is one primary metric and guardrails.',
      'Sample and duration are planned.',
      'Results will be explained qualitatively.',
    ],
    summary: [
      'Experiments need hypotheses, metrics and planned samples.',
      'Funnels and cohorts reveal behaviour.',
      'Avoid peeking, too many metrics and small samples.',
      'Combine experiments with qualitative research.',
    ],
    reading: [
      { title: 'A/B testing 101', url: 'https://www.nngroup.com/articles/ab-testing/', source: 'Nielsen Norman Group' },
      { title: 'Sample size calculator', url: 'https://www.evanmiller.org/ab-testing/sample-size.html', source: 'Evan Miller' },
      { title: 'Analytics and user experience', url: 'https://www.nngroup.com/articles/analytics-user-experience/', source: 'Nielsen Norman Group' },
    ],
  },

  'path-leadership': {
    objectives: [
      'Facilitate workshops and meetings that produce decisions.',
      'Mentor other designers effectively.',
      'Influence decisions without formal authority.',
    ],
    explanation: `
<p>Design leadership is not only for managers. Every designer leads when they facilitate a workshop, mentor a colleague or persuade a team to put users first.</p>
<h3>Facilitation</h3>
<p>Set a clear goal and agenda, choose activities that fit (for example silent idea generation then group discussion), manage time, include quieter voices and end with decisions and owners.</p>
<h3>Mentoring</h3>
<p>Listen more than you talk. Ask questions that help mentees think ("What options have you considered?"). Share experiences and give specific feedback. Help them set goals and connect them with opportunities.</p>
<h3>Influencing without authority</h3>
<ul>
<li><strong>Understand others' goals</strong>: frame design in terms of what matters to them.</li>
<li><strong>Bring evidence</strong>: research, data and user stories.</li>
<li><strong>Involve people early</strong>: invite stakeholders to research and critique.</li>
<li><strong>Build relationships</strong>: trust grows over time through reliability and help.</li>
<li><strong>Pick battles</strong>: focus energy on decisions that matter most for users.</li>
</ul>
<h3>Growing design maturity</h3>
<p>Leaders also help organisations get better at design: sharing research, building rituals like critique and showing the value of design through outcomes.</p>`,
    why: `
<p>Great design rarely ships on the strength of a designer's skill alone. It needs collaboration, buy-in and a team that keeps improving. Leadership skills multiply your impact by helping others do good work and by shaping decisions beyond your own screens, and they are essential for senior roles.</p>`,
    example: `
<p>A designer believes a new onboarding flow is confusing, but the product manager wants to launch. Instead of arguing, the designer invites the product manager and an engineer to watch three quick usability sessions. All three observers see users struggle. The team agrees to fix two key issues before launch, and the product manager asks the designer to run sessions for every release.</p>`,
    walkthrough: [
      { title: 'Plan a workshop', body: 'Write a goal, agenda and decisions needed.' },
      { title: 'Facilitate', body: 'Run activities, manage time and include everyone.' },
      { title: 'Capture outcomes', body: 'End with decisions and owners.' },
      { title: 'Mentor', body: 'Hold a session focused on the mentee\'s goals.' },
      { title: 'Map stakeholders', body: 'List their goals and concerns.' },
      { title: 'Influence with evidence', body: 'Invite stakeholders to see users first-hand.' },
    ],
    mistakes: [
      { mistake: 'Workshops without decisions.', fix: 'Set goals and end with owners.' },
      { mistake: 'Mentoring by lecturing.', fix: 'Listen and ask questions.' },
      { mistake: 'Arguing from opinion.', fix: 'Bring evidence and involve people.' },
    ],
    quiz: [
      { q: 'What should every workshop end with?', options: ['Sticky notes', 'Decisions and owners', 'A party'], answer: 1, explain: 'Outcomes matter.' },
      { q: 'What is a good mentoring approach?', options: ['Give all the answers', 'Listen and ask questions', 'Avoid feedback'], answer: 1, explain: 'Help them think.' },
      { q: 'How can you influence without authority?', options: ['Insist loudly', 'Use evidence and involve stakeholders early', 'Wait to be asked'], answer: 1, explain: 'Evidence and relationships.' },
    ],
    exercise: {
      title: 'Leadership practice',
      minutes: 45,
      brief: '<p>Plan a leadership action.</p>',
      steps: [
        'Plan a 45-minute workshop with goal, agenda and outputs.',
        'Map three stakeholders and their goals.',
        'Plan how to bring them closer to users.',
        'Write three good mentoring questions.',
      ],
      deliverable: 'A workshop plan, stakeholder map and mentoring questions.',
    },
    checklist: [
      'Workshops have goals and decisions.',
      'I mentor by listening and asking.',
      'I understand stakeholders\' goals.',
      'I influence with evidence.',
    ],
    summary: [
      'Every designer can lead.',
      'Facilitate towards decisions.',
      'Mentor by listening and asking.',
      'Influence through evidence, involvement and trust.',
    ],
    reading: [
      { title: 'Stakeholder interviews', url: 'https://www.nngroup.com/articles/stakeholder-interviews/', source: 'Nielsen Norman Group' },
      { title: 'Design critiques: encourage a positive culture', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
      { title: 'Workshop facilitation', url: 'https://www.interaction-design.org/literature/topics/workshops', source: 'Interaction Design Foundation' },
    ],
  },
};
