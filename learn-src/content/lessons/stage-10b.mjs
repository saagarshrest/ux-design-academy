// @ts-check
/* Stage 10 (part 2): Product thinking. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'design-documentation': {
    objectives: [
      'Write design documents that record decisions and rationale.',
      'Choose the right level of documentation for the team.',
      'Keep documentation findable and current.',
    ],
    explanation: `
<p>Design documentation records what was decided, why and what is still open. It complements design files, which show <em>what</em> but rarely <em>why</em>.</p>
<h3>Common documents</h3>
<ul>
<li><strong>Design brief</strong>: problem, users, goals, constraints, success measures and scope.</li>
<li><strong>Design decision log</strong>: each significant decision with date, options considered, evidence and who agreed.</li>
<li><strong>Spec or handoff notes</strong>: behaviour, states, content rules and accessibility.</li>
<li><strong>Research summaries</strong>: findings and links to evidence.</li>
<li><strong>Release notes</strong>: what changed for users.</li>
</ul>
<h3>Right-sized</h3>
<p>Write enough that someone joining in six months can understand why the product works as it does. Avoid long documents nobody reads: use headings, short paragraphs, bullet points and links to files.</p>
<h3>Findable and current</h3>
<p>Store documents in an agreed place (a wiki, a project folder) and link them from design files. Mark status (draft, agreed, superseded) and date them. Update or archive when decisions change.</p>`,
    why: `
<p>Without documentation, teams repeat old debates, new members undo good decisions without knowing why they were made, and knowledge leaves when people do. Clear records save time, protect good design and make you easier to work with. They also give you strong material for portfolio case studies.</p>`,
    example: `
<p>A new product manager joins a team and asks why checkout does not offer guest purchase. Nobody remembers, and the team is about to spend weeks adding it.</p>
<p>The designer finds the decision log entry: guest checkout was tested two years earlier, but because orders need age verification for alcohol, account creation was required by regulation. The log links to the legal advice and test results. The team avoids wasted work and instead simplifies account creation.</p>`,
    walkthrough: [
      { title: 'Start a brief', body: 'Write a one-page brief at the start of each project.' },
      { title: 'Create a decision log', body: 'Use a simple table: date, decision, options, evidence, agreed by.' },
      { title: 'Log as you go', body: 'Add entries after critiques and key meetings.' },
      { title: 'Link from files', body: 'Link documents from your design file cover page.' },
      { title: 'Mark status', body: 'Label documents as draft, agreed or superseded.' },
      { title: 'Review regularly', body: 'Update or archive documents at milestones.' },
    ],
    mistakes: [
      { mistake: 'No record of why decisions were made.', fix: 'Keep a decision log.' },
      { mistake: 'Long documents nobody reads.', fix: 'Keep them short and structured.' },
      { mistake: 'Outdated documents with no status.', fix: 'Date, label and update them.' },
    ],
    quiz: [
      { q: 'What does a decision log record?', options: ['Only final designs', 'Decisions, options, evidence and who agreed', 'Meeting attendance'], answer: 1, explain: 'It captures rationale.' },
      { q: 'Why mark document status?', options: ['For colour coding', 'So readers know if it is current', 'It is required'], answer: 1, explain: 'Status prevents outdated guidance being followed.' },
      { q: 'What is the right amount of documentation?', options: ['As much as possible', 'Enough for someone new to understand why', 'None'], answer: 1, explain: 'Right-sized documents get read.' },
    ],
    exercise: {
      title: 'Brief and decision log',
      minutes: 45,
      brief: '<p>Document a project you are working on.</p>',
      steps: [
        'Write a one-page brief.',
        'Create a decision log with at least five entries.',
        'Link both from your design file.',
        'Ask a peer to explain your key decisions back to you.',
      ],
      deliverable: 'A brief and decision log.',
    },
    checklist: [
      'I write a brief for each project.',
      'I keep a decision log.',
      'Documents are linked and findable.',
      'Status and dates are clear.',
    ],
    summary: [
      'Documentation records what and why.',
      'Use briefs, decision logs, specs and summaries.',
      'Keep documents short, findable and current.',
      'Good records save time and protect decisions.',
    ],
    reading: [
      { title: 'Writing a design brief', url: 'https://www.interaction-design.org/literature/topics/design-brief', source: 'Interaction Design Foundation' },
    ],
  },

  'measuring-outcomes': {
    objectives: [
      'Measure whether a design change achieved its goals after launch.',
      'Combine behavioural, attitudinal and operational measures.',
      'Report outcomes honestly, including when things did not work.',
    ],
    explanation: `
<p>Shipping is not the end. <strong>Outcomes</strong> are the changes in user behaviour and business results that a design causes. <strong>Outputs</strong> are the things you made. Teams should be judged on outcomes.</p>
<h3>Types of measure</h3>
<ul>
<li><strong>Behavioural</strong>: completion rates, conversion, time on task, retention, feature adoption, error rates.</li>
<li><strong>Attitudinal</strong>: satisfaction surveys, ease ratings, Net Promoter Score, qualitative feedback.</li>
<li><strong>Operational</strong>: support calls, refunds, manual processing, cost per transaction.</li>
</ul>
<h3>Measuring well</h3>
<ul>
<li>Define success measures and a <strong>baseline</strong> before launch.</li>
<li>Watch for <strong>guardrail metrics</strong>: things that must not get worse, such as complaints or accessibility.</li>
<li>Allow enough time: some effects take weeks to appear.</li>
<li>Account for other changes, such as marketing campaigns or seasonality.</li>
<li>Combine numbers with qualitative insight to understand why.</li>
</ul>
<h3>Honest reporting</h3>
<p>Report what happened, including disappointing results. A change that did not work is still valuable learning.</p>`,
    why: `
<p>Measuring outcomes proves the value of design, guides what to do next and builds credibility with leadership. Without measurement, teams cannot tell success from failure and keep building on guesses. Outcome evidence is also what makes portfolio case studies convincing.</p>`,
    example: `
<p>A team redesigns a council tax direct debit sign-up. Before launch, they record a baseline: 61% completion, 340 related phone calls per month. Guardrails: complaints and accessibility issues must not increase.</p>
<p>Eight weeks after launch, completion is 78% and calls have fallen to 190 per month, with no rise in complaints. A short survey shows people value the clearer payment date choice. The team shares the results, including that mobile completion is still lower, which becomes the next focus.</p>`,
    walkthrough: [
      { title: 'Define success', body: 'Choose two or three outcome measures.' },
      { title: 'Record a baseline', body: 'Measure current performance before launch.' },
      { title: 'Choose guardrails', body: 'Pick measures that must not get worse.' },
      { title: 'Set up tracking', body: 'Make sure analytics and surveys are in place.' },
      { title: 'Wait and measure', body: 'Allow enough time and account for other factors.' },
      { title: 'Report', body: 'Share results honestly with next steps.' },
    ],
    mistakes: [
      { mistake: 'No baseline.', fix: 'Measure before launch.' },
      { mistake: 'Measuring outputs, not outcomes.', fix: 'Focus on behaviour and results.' },
      { mistake: 'Hiding disappointing results.', fix: 'Report honestly and learn.' },
    ],
    quiz: [
      { q: 'What is an outcome?', options: ['A design file', 'A change in behaviour or results caused by the design', 'A meeting'], answer: 1, explain: 'Outcomes are effects, outputs are artefacts.' },
      { q: 'What is a guardrail metric?', options: ['A main goal', 'A measure that must not get worse', 'A design token'], answer: 1, explain: 'Guardrails catch harmful side effects.' },
      { q: 'Why record a baseline?', options: ['To compare after launch', 'For decoration', 'It is optional'], answer: 0, explain: 'Without it, you cannot measure change.' },
    ],
    exercise: {
      title: 'Measurement plan',
      minutes: 30,
      brief: '<p>Write a measurement plan for a design change.</p>',
      steps: [
        'Define outcome measures.',
        'Describe how to get a baseline.',
        'Choose guardrails.',
        'Plan when and how to report.',
      ],
      deliverable: 'A one-page measurement plan.',
    },
    checklist: [
      'I define outcomes before launch.',
      'I record baselines.',
      'I use guardrails.',
      'I report honestly.',
    ],
    summary: [
      'Outcomes matter more than outputs.',
      'Combine behavioural, attitudinal and operational measures.',
      'Set baselines and guardrails.',
      'Report honestly, including disappointments.',
    ],
    reading: [
      { title: 'Measuring success', url: 'https://www.gov.uk/service-manual/measuring-success', source: 'GOV.UK Service Manual' },
      { title: 'Benchmarking UX: tracking metrics', url: 'https://www.nngroup.com/articles/benchmarking-ux/', source: 'Nielsen Norman Group' },
    ],
  },

  'ab-testing': {
    objectives: [
      'Explain how A/B tests work and when to use them.',
      'Design a valid A/B test with a clear hypothesis and metric.',
      'Avoid common mistakes in running and interpreting tests.',
    ],
    explanation: `
<p>An <strong>A/B test</strong> randomly shows different versions of a design to different users and compares results. Version A is usually the current design (the <strong>control</strong>); version B is the change (the <strong>variant</strong>).</p>
<h3>When A/B testing fits</h3>
<ul>
<li>You have enough traffic to detect meaningful differences.</li>
<li>The goal is measurable, such as sign-ups or purchases.</li>
<li>You are choosing between specific options.</li>
</ul>
<p>It does not tell you <em>why</em> one version wins, and it is poor for testing big new concepts or low-traffic pages. Use qualitative research for those.</p>
<h3>Designing a test</h3>
<ol>
<li>Write a <strong>hypothesis</strong>: "Showing delivery costs on the product page will increase checkout completion, because people abandon when surprised by costs."</li>
<li>Choose one <strong>primary metric</strong> and guardrails.</li>
<li>Calculate the <strong>sample size</strong> needed before starting.</li>
<li>Run the test for the planned time, usually at least one or two full weeks to cover weekly patterns.</li>
<li>Analyse once the planned sample is reached.</li>
</ol>
<h3>Statistical significance</h3>
<p>Significance indicates how unlikely the difference would be if there were no real effect. It does not tell you the difference is large or important. Look at the size of the effect too.</p>`,
    why: `
<p>A/B tests provide strong evidence of cause and effect, which helps settle debates and avoid shipping changes that hurt results. Misused, they produce false confidence: stopping early, testing too many things or ignoring effect size leads to poor decisions. Designers who understand testing can design better variants and interpret results correctly.</p>`,
    example: `
<p>An online furniture retailer debates whether to show delivery costs on product pages. The team writes a hypothesis, picks checkout completion as the primary metric and refund requests as a guardrail, and calculates they need about 20,000 visitors per variant.</p>
<p>After two weeks, the variant shows completion up from 3.1% to 3.5% with no change in refunds. The designer pairs this with session recordings showing fewer people leaving at the delivery step, and the change is rolled out to everyone.</p>`,
    walkthrough: [
      { title: 'Check suitability', body: 'Confirm you have enough traffic and a measurable goal.' },
      { title: 'Write a hypothesis', body: 'State the change, expected effect and reason.' },
      { title: 'Choose metrics', body: 'One primary metric plus guardrails.' },
      { title: 'Calculate sample size', body: 'Use a sample size calculator.' },
      { title: 'Run without peeking', body: 'Run for the planned duration.' },
      { title: 'Analyse and learn', body: 'Check significance, effect size and qualitative evidence.' },
    ],
    mistakes: [
      { mistake: 'Stopping as soon as results look good.', fix: 'Run until the planned sample size is reached.' },
      { mistake: 'Testing many changes at once.', fix: 'Change one meaningful thing or use proper multivariate methods.' },
      { mistake: 'Ignoring effect size.', fix: 'Ask whether the difference matters in practice.' },
    ],
    quiz: [
      { q: 'What is the control in an A/B test?', options: ['The new design', 'The current design', 'The winner'], answer: 1, explain: 'The control is the baseline.' },
      { q: 'Why not stop a test early?', options: ['It costs more', 'Early results are often misleading', 'It is not allowed'], answer: 1, explain: 'Peeking inflates false positives.' },
      { q: 'When is A/B testing a poor fit?', options: ['High-traffic checkout', 'Low-traffic pages or big new concepts', 'Comparing two button labels'], answer: 1, explain: 'It needs traffic and specific options.' },
    ],
    exercise: {
      title: 'Test design',
      minutes: 45,
      brief: '<p>Design an A/B test for a sign-up page.</p>',
      steps: [
        'Write a hypothesis.',
        'Choose primary and guardrail metrics.',
        'Estimate sample size with an online calculator.',
        'Design the variant.',
      ],
      deliverable: 'A one-page test plan and variant design.',
    },
    checklist: [
      'There is a clear hypothesis.',
      'One primary metric is chosen.',
      'Sample size is calculated.',
      'I plan to look at effect size and qualitative evidence.',
    ],
    summary: [
      'A/B tests compare versions with random assignment.',
      'They need traffic and measurable goals.',
      'Write a hypothesis, choose metrics and calculate sample size.',
      'Do not stop early; consider effect size.',
    ],
    reading: [
      { title: 'A/B testing 101', url: 'https://www.nngroup.com/articles/ab-testing/', source: 'Nielsen Norman Group' },
      { title: 'Sample size calculator', url: 'https://www.evanmiller.org/ab-testing/sample-size.html', source: 'Evan Miller' },
    ],
  },

  'analytics-informed-design': {
    objectives: [
      'Use product analytics to find design problems and opportunities.',
      'Read funnels, cohorts and event data.',
      'Combine analytics with qualitative research.',
    ],
    explanation: `
<p>Product analytics tools record what people do: pages viewed, buttons clicked, steps completed. Used well, they show <em>where</em> problems are. Qualitative research then explains <em>why</em>.</p>
<h3>Common analyses</h3>
<ul>
<li><strong>Funnels</strong>: how many people move through each step of a process, and where they drop off.</li>
<li><strong>Cohorts</strong>: groups of users who started at the same time or share a trait, compared over time (for example retention).</li>
<li><strong>Feature adoption</strong>: how many people use a feature and how often.</li>
<li><strong>Paths</strong>: common routes people take.</li>
<li><strong>Segments</strong>: comparing groups, such as mobile and desktop or new and returning users.</li>
</ul>
<h3>Event tracking</h3>
<p>Designers can help define which events to track, with clear names such as <code>checkout_delivery_selected</code>. Plan tracking alongside the design, not after launch.</p>
<h3>Cautions</h3>
<ul>
<li>Analytics show behaviour, not intent: a long time on page could mean interest or confusion.</li>
<li>Respect privacy: collect only what you need, follow consent rules and avoid tracking sensitive data.</li>
<li>Beware vanity metrics that look good but do not reflect value.</li>
</ul>`,
    why: `
<p>Analytics help designers find the biggest problems, prioritise work and build evidence-based arguments. They reveal patterns across thousands of users that no interview could show. Combined with qualitative research, they lead to confident, targeted design decisions.</p>`,
    example: `
<p>A fitness app's funnel shows 70% of new users finish onboarding, but only 20% log a workout in their first week. Segmenting shows Android users drop off much more than iOS users.</p>
<p>The designer runs five quick interviews with Android users and discovers that the workout logging button is hidden behind a floating menu that overlaps the system navigation on many Android phones. A layout fix raises first-week logging among Android users significantly.</p>`,
    walkthrough: [
      { title: 'Define questions', body: 'Write what you want to learn from data.' },
      { title: 'Build a funnel', body: 'Map key steps and find the largest drop-off.' },
      { title: 'Segment', body: 'Compare devices, new and returning users and other groups.' },
      { title: 'Form hypotheses', body: 'Write possible reasons for patterns.' },
      { title: 'Investigate why', body: 'Use interviews, recordings or tests.' },
      { title: 'Plan tracking', body: 'Define events for your next design.' },
    ],
    mistakes: [
      { mistake: 'Assuming you know why from numbers alone.', fix: 'Investigate with qualitative research.' },
      { mistake: 'Tracking everything.', fix: 'Track what answers your questions and respect privacy.' },
      { mistake: 'Celebrating vanity metrics.', fix: 'Focus on measures linked to value.' },
    ],
    quiz: [
      { q: 'What does a funnel show?', options: ['Where people drop off in a process', 'User emotions', 'Page colours'], answer: 0, explain: 'Funnels show step-by-step progress.' },
      { q: 'What do analytics not tell you?', options: ['What people do', 'Why they do it', 'How many people'], answer: 1, explain: 'Qualitative research explains why.' },
      { q: 'What is a cohort?', options: ['A group of users who share a start time or trait', 'A chart type', 'A design system'], answer: 0, explain: 'Cohorts compare groups over time.' },
    ],
    exercise: {
      title: 'Funnel analysis',
      minutes: 45,
      brief: '<p>Analyse a funnel (use sample data or your own product).</p>',
      steps: [
        'Map the steps and conversion rates.',
        'Find the largest drop-off.',
        'Write three hypotheses.',
        'Plan a qualitative study to test them.',
      ],
      deliverable: 'A funnel diagram, hypotheses and a research plan.',
    },
    checklist: [
      'I start with questions.',
      'I use funnels and segments.',
      'I investigate why with qualitative research.',
      'I plan tracking and respect privacy.',
    ],
    summary: [
      'Analytics show where problems are.',
      'Use funnels, cohorts, adoption, paths and segments.',
      'Plan event tracking with design.',
      'Combine with qualitative research and respect privacy.',
    ],
    reading: [
      { title: 'Analytics and user experience', url: 'https://www.nngroup.com/articles/analytics-user-experience/', source: 'Nielsen Norman Group' },
      { title: 'Measuring success: using data', url: 'https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction', source: 'GOV.UK Service Manual' },
    ],
  },

  'ethics-dark-patterns': {
    objectives: [
      'Recognise dark patterns and deceptive design.',
      'Explain the harm they cause and the legal risks.',
      'Design ethical alternatives and raise concerns at work.',
    ],
    explanation: `
<p><strong>Dark patterns</strong> (also called deceptive patterns) are design choices that trick or pressure people into doing things they did not intend, usually for the business's benefit.</p>
<h3>Common examples</h3>
<ul>
<li><strong>Confirmshaming</strong>: "No thanks, I don't like saving money."</li>
<li><strong>Roach motel</strong>: easy to sign up, very hard to cancel.</li>
<li><strong>Sneaking</strong>: adding items or fees to a basket without clear consent.</li>
<li><strong>False urgency and scarcity</strong>: fake countdown timers and "only 1 left" messages.</li>
<li><strong>Disguised ads</strong>: ads that look like content or navigation.</li>
<li><strong>Preselected options</strong>: opting people into marketing or add-ons by default.</li>
<li><strong>Nagging</strong>: repeated prompts until people give in.</li>
<li><strong>Privacy zuckering</strong>: confusing settings that lead people to share more data than intended.</li>
</ul>
<h3>Harm and law</h3>
<p>Dark patterns harm users financially and emotionally, and erode trust. Regulators increasingly act against them under consumer protection and data protection laws, including the EU Digital Services Act and GDPR, the UK's consumer law and the US FTC.</p>
<h3>Ethical design</h3>
<p>Ask: would users be happy if they fully understood what we are doing? Make cancelling as easy as signing up, make defaults respect user interests, and be honest about costs and scarcity.</p>`,
    why: `
<p>Designers are often the people asked to build manipulative features, so they are well placed to prevent them. Dark patterns may raise short-term numbers, but they increase complaints, cancellations, regulatory fines and reputational damage. Ethical design builds long-term trust, which is a lasting business advantage.</p>`,
    example: `
<p>A streaming service requires people to phone during office hours to cancel, while sign-up takes one click. The designer is asked to add a fourth "Are you sure?" screen to the online pause flow.</p>
<p>The designer raises the issue with the product manager, citing complaints data, regulatory guidance on easy cancellation and the risk of fines. They propose an honest cancellation flow with one retention offer and a clear confirmation. Cancellations rise slightly at first, but complaints drop sharply and returning subscribers increase over the following months.</p>`,
    walkthrough: [
      { title: 'Learn the patterns', body: 'Study a catalogue of deceptive patterns.' },
      { title: 'Audit a product', body: 'Look for patterns in sign-up, checkout, cancellation and privacy settings.' },
      { title: 'Assess harm', body: 'Note who is harmed and how.' },
      { title: 'Design alternatives', body: 'Create honest versions that still meet business goals where possible.' },
      { title: 'Prepare your case', body: 'Gather evidence on complaints, law and long-term impact.' },
      { title: 'Raise concerns', body: 'Discuss constructively with your team and escalate if needed.' },
    ],
    mistakes: [
      { mistake: 'Treating dark patterns as clever growth tactics.', fix: 'Consider long-term trust, harm and legal risk.' },
      { mistake: 'Staying silent when asked to build them.', fix: 'Raise concerns with evidence and alternatives.' },
      { mistake: 'Defaults that serve the business only.', fix: 'Make defaults respect user interests.' },
    ],
    quiz: [
      { q: '"No thanks, I like paying full price" is an example of:', options: ['Sneaking', 'Confirmshaming', 'Nagging'], answer: 1, explain: 'It shames people for declining.' },
      { q: 'What is a roach motel?', options: ['Easy to get in, hard to get out', 'A fake timer', 'A disguised ad'], answer: 0, explain: 'Cancelling is made hard.' },
      { q: 'What is a good ethical test?', options: ['Does it increase revenue?', 'Would users be happy if they fully understood it?', 'Do competitors do it?'], answer: 1, explain: 'Informed users should agree.' },
    ],
    exercise: {
      title: 'Dark pattern audit',
      minutes: 45,
      brief: '<p>Audit a subscription service for dark patterns.</p>',
      steps: [
        'Go through sign-up, settings and cancellation.',
        'List any dark patterns with screenshots.',
        'Assess harm and legal risk.',
        'Design an ethical alternative for one.',
      ],
      deliverable: 'An audit and one redesigned flow.',
    },
    checklist: [
      'I can recognise common dark patterns.',
      'I understand the harm and legal risk.',
      'I design honest alternatives.',
      'I can raise concerns constructively.',
    ],
    summary: [
      'Dark patterns trick or pressure people.',
      'They cause harm and legal risk.',
      'Ethical design respects informed choice.',
      'Designers can and should push back.',
    ],
    reading: [
      { title: 'Deceptive patterns', url: 'https://www.deceptive.design/', source: 'Harry Brignull' },
      { title: 'Deceptive patterns in UX', url: 'https://www.nngroup.com/articles/deceptive-patterns/', source: 'Nielsen Norman Group' },
    ],
  },

  'communicating-rationale': {
    objectives: [
      'Explain design decisions clearly to different audiences.',
      'Structure rationale around problems, evidence and trade-offs.',
      'Present work with confidence and handle challenges.',
    ],
    explanation: `
<p>Designers spend a lot of time explaining their work. Strong rationale turns opinions into reasoned decisions others can support.</p>
<h3>A simple structure</h3>
<ol>
<li><strong>Problem</strong>: what users or the business were struggling with.</li>
<li><strong>Goal</strong>: what success looks like.</li>
<li><strong>Evidence</strong>: research, data, standards or best practice.</li>
<li><strong>Options considered</strong>: what else you explored.</li>
<li><strong>Decision and trade-offs</strong>: what you chose and what you gave up.</li>
<li><strong>Next steps</strong>: how you will validate or measure it.</li>
</ol>
<h3>Adapting to audiences</h3>
<ul>
<li><strong>Executives</strong>: outcomes, risks and decisions needed, in a few minutes.</li>
<li><strong>Product managers</strong>: goals, priorities and trade-offs.</li>
<li><strong>Engineers</strong>: behaviour, constraints and edge cases.</li>
<li><strong>Designers</strong>: craft details and system consistency.</li>
</ul>
<h3>Handling challenges</h3>
<p>Treat questions as curiosity, not attack. Acknowledge valid points, explain your reasoning, and be willing to change your mind when new evidence appears. "I don't know, but I'll find out" is a strong answer.</p>`,
    why: `
<p>Good designs get rejected when they are explained poorly, and weaker designs get approved when they are explained well. Clear rationale builds trust, shortens debates and helps teams make better decisions. It is one of the most important skills in interviews and for career progression.</p>`,
    example: `
<p>A designer presents a new navigation for a hospital booking app. A senior stakeholder asks, "Why did you remove the hamburger menu? Everyone uses those."</p>
<p>The designer explains: "In testing, four of five patients didn't find appointments behind the menu. We moved the four most used sections to a visible bottom bar, which tested well, and kept less used items in a 'More' tab. The trade-off is less room for new sections, which we'll review quarterly." The stakeholder agrees to proceed.</p>`,
    walkthrough: [
      { title: 'Write the problem', body: 'State the user and business problem in one sentence.' },
      { title: 'Gather evidence', body: 'List research, data and standards that support your decision.' },
      { title: 'Show options', body: 'Include two or three alternatives you considered.' },
      { title: 'State trade-offs', body: 'Be clear about what you gave up.' },
      { title: 'Tailor', body: 'Adjust the depth for your audience.' },
      { title: 'Rehearse challenges', body: 'Prepare answers to likely questions.' },
    ],
    mistakes: [
      { mistake: '"I just think it looks better."', fix: 'Link decisions to problems and evidence.' },
      { mistake: 'Hiding trade-offs.', fix: 'State them openly.' },
      { mistake: 'Getting defensive.', fix: 'Treat questions as curiosity and stay open.' },
    ],
    quiz: [
      { q: 'What should rationale start with?', options: ['The final design', 'The problem', 'The colour palette'], answer: 1, explain: 'Problems give decisions meaning.' },
      { q: 'What do executives usually need?', options: ['Pixel details', 'Outcomes, risks and decisions needed', 'Component names'], answer: 1, explain: 'They need the big picture.' },
      { q: 'How should you respond to a challenge you cannot answer?', options: ['Make something up', 'Say you will find out', 'Change the subject'], answer: 1, explain: 'Honesty builds trust.' },
    ],
    exercise: {
      title: 'Rationale presentation',
      minutes: 45,
      brief: '<p>Prepare a five-minute rationale for one design decision.</p>',
      steps: [
        'Use the six-part structure.',
        'Prepare versions for an executive and an engineer.',
        'List three likely challenges and your answers.',
        'Present to a peer and ask them to challenge you.',
      ],
      deliverable: 'Two short rationale versions and a challenge list.',
    },
    checklist: [
      'Rationale starts with the problem.',
      'Evidence and options are shown.',
      'Trade-offs are explicit.',
      'I tailor to the audience and stay open.',
    ],
    summary: [
      'Structure rationale as problem, goal, evidence, options, decision and next steps.',
      'Tailor depth to the audience.',
      'Be open about trade-offs.',
      'Treat challenges as curiosity.',
    ],
    reading: [
      { title: 'Design rationale', url: 'https://www.interaction-design.org/literature/topics/design-rationale', source: 'Interaction Design Foundation' },
      { title: 'Stakeholder interviews', url: 'https://www.nngroup.com/articles/stakeholder-interviews/', source: 'Nielsen Norman Group' },
    ],
  },
};
