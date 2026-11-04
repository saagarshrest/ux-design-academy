// @ts-check
/* Stage 2 (part 2): UX research and problem definition. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'personas': {
    objectives: [
      'Explain what a persona is for and when it helps a team.',
      'Build a persona from research evidence rather than imagination.',
      'Avoid stereotypes and the common ways personas go unused.',
    ],
    explanation: `
<p>A <strong>persona</strong> is a short, realistic description of a group of users with similar goals, behaviours and frustrations. It is a communication tool: it helps a team keep real people in mind when making decisions.</p>
<h3>Evidence first</h3>
<p>Useful personas come from research. They summarise patterns you saw across several participants: what they are trying to do, how they currently do it, what gets in the way, and what matters to them. A persona invented in a meeting reflects the team's assumptions, which is the opposite of what personas are for.</p>
<h3>Behaviour over demographics</h3>
<p>Age, job title and a stock photo feel concrete but rarely change design decisions. Behaviour does: "orders the same lunch every day and wants it in two taps" versus "explores new restaurants and reads every review". Many teams now leave out photos and names that suggest a gender or ethnicity, because these invite stereotypes and add little.</p>
<h3>Keep the set small</h3>
<p>Two to four personas are usually enough. Choose a <strong>primary persona</strong> whose needs you design for first. If you try to satisfy ten personas equally, you satisfy none.</p>`,
    why: `
<p>Personas help teams argue about real needs rather than personal preferences. "Would Priya, who checks her balance at the bus stop, understand this?" is a better question than "Do you like this?" But personas are only as good as the evidence behind them. Fictional personas can give false confidence and bake in bias, so knowing how to build and use them well matters.</p>`,
    example: `
<p>A coworking space app team runs ten interviews. Two clear behaviour patterns emerge. Some members book the same desk every week and want booking to be invisible. Others work there occasionally, mainly for meetings, and need to find a room at short notice.</p>
<p>The team writes two personas: <em>The Regular</em> and <em>The Drop-in</em>. Each has goals, current behaviour, frustrations and three quotes from real interviews. There are no stock photos. The Regular becomes the primary persona because they make up most revenue. In design reviews, the team asks "Does this slow down the Regular?" and catches several unnecessary steps.</p>`,
    walkthrough: [
      { title: 'Start from research', body: 'Use interview notes and affinity map themes. If there is no research, do some first.' },
      { title: 'Find behaviour patterns', body: 'Look for variables that split participants: frequency, confidence, goals, context.' },
      { title: 'Group participants', body: 'Cluster participants who behave similarly on the most important variables.' },
      { title: 'Write each persona', body: 'Include goals, current behaviour, frustrations, context and real quotes. Keep it to one page.' },
      { title: 'Choose a primary persona', body: 'Decide whose needs come first and explain why.' },
      { title: 'Use them', body: 'Refer to personas in design reviews, prioritisation and test recruitment.' },
    ],
    mistakes: [
      { mistake: 'Inventing personas without research.', fix: 'Base every detail on observed patterns, and label anything assumed as an assumption.' },
      { mistake: 'Filling personas with irrelevant demographics.', fix: 'Include details only if they change design decisions.' },
      { mistake: 'Making too many personas.', fix: 'Merge similar ones and choose a primary persona.' },
      { mistake: 'Creating personas and never using them.', fix: 'Build them into reviews, briefs and test plans.' },
    ],
    quiz: [
      { q: 'What should a persona be based on?', options: ['The team\'s best guess', 'Patterns observed in research', 'Market segments from sales'], answer: 1, explain: 'Personas summarise real behaviour patterns.' },
      { q: 'Which detail is most useful in a persona?', options: ['Favourite colour', 'Checks the app quickly between meetings and rarely reads long text', 'Age 34'], answer: 1, explain: 'Behaviour and context directly affect design.' },
      { q: 'Why choose a primary persona?', options: ['To ignore other users', 'To decide whose needs come first when they conflict', 'Because tools require one'], answer: 1, explain: 'A primary persona settles trade-offs.' },
    ],
    exercise: {
      title: 'Evidence-based persona',
      minutes: 45,
      brief: '<p>Using your interview notes or affinity map, build one persona.</p>',
      steps: [
        'List three behaviour variables that split your participants.',
        'Group participants on those variables.',
        'Write a one-page persona with goals, behaviour, frustrations and real quotes.',
        'Mark any detail that is assumed rather than observed.',
      ],
      deliverable: 'A one-page persona with sources noted.',
    },
    checklist: [
      'Every detail comes from research or is labelled as an assumption.',
      'The persona focuses on behaviour and goals.',
      'I avoided stereotypes and stock imagery.',
      'I know how the team will use it.',
    ],
    summary: [
      'Personas summarise groups of users with similar goals and behaviour.',
      'They must be grounded in research.',
      'Behaviour matters more than demographics.',
      'Keep the set small, choose a primary persona, and use them in decisions.',
    ],
    reading: [
      { title: 'Personas make users memorable for product team members', url: 'https://www.nngroup.com/articles/persona/', source: 'Nielsen Norman Group' },
      { title: '3 persona types: lightweight, qualitative, and statistical', url: 'https://www.nngroup.com/articles/persona-types/', source: 'Nielsen Norman Group' },
    ],
  },

  'jobs-to-be-done': {
    objectives: [
      'Describe the Jobs to Be Done idea in plain language.',
      'Write job statements that describe progress people want to make.',
      'Use jobs to find competitors and opportunities a feature list would miss.',
    ],
    explanation: `
<p><strong>Jobs to Be Done</strong> (JTBD) is a way of thinking about why people use products. The idea is that people "hire" a product to make progress in a particular situation, and "fire" it when something else does the job better.</p>
<h3>Jobs are about progress</h3>
<p>A job is not a task in your interface. It is the progress someone wants: "When I get home late and tired, I want to eat something decent without effort, so I can rest." A food delivery app, a frozen meal and a sandwich from the corner shop are all candidates for that job.</p>
<h3>Job statements</h3>
<p>A common format is: <strong>When</strong> [situation], <strong>I want to</strong> [motivation], <strong>so I can</strong> [outcome]. The situation matters most, because the same person has different jobs in different moments. Jobs also have <strong>functional</strong> sides (get fed), <strong>emotional</strong> sides (not feel guilty about it) and <strong>social</strong> sides (look like a good host).</p>
<h3>JTBD and personas</h3>
<p>Personas describe types of people; jobs describe situations and goals. They can work together: a persona tells you who, a job tells you what they are trying to achieve right now. JTBD is especially good at revealing unexpected competitors and the real reasons people switch.</p>`,
    why: `
<p>Thinking in jobs stops teams designing features in isolation. It shows what really competes for a person's time and money, explains why people switch products, and keeps the focus on outcomes rather than screens. A clear job statement is a strong foundation for problem statements and success metrics later in this stage.</p>`,
    example: `
<p>A meditation app team assumes its competitors are other meditation apps. Switch interviews (asking recent new customers what they used before and why they changed) tell a different story. Many people "hired" the app <em>when they couldn't fall asleep because of work worries</em>. Before, they had used podcasts, scrolling social media or a glass of wine.</p>
<p>The job, "When I'm lying awake worrying about work, I want to calm my mind quickly so I can sleep and cope tomorrow", reshapes the product. The team builds a one-tap night mode with no bright screens and no choices to make, rather than adding more meditation courses.</p>`,
    walkthrough: [
      { title: 'Talk to recent switchers', body: 'Interview people who recently started or stopped using a product like yours.' },
      { title: 'Reconstruct the timeline', body: 'Ask what was happening when they first thought about changing, what they tried, and what made them decide.' },
      { title: 'Identify the situation', body: 'Note the moment and context that triggered the need.' },
      { title: 'Write job statements', body: 'Use "When... I want to... so I can..." and include emotional and social aspects.' },
      { title: 'List all competing solutions', body: 'Include non-obvious alternatives, such as doing nothing.' },
      { title: 'Find gaps', body: 'Where do current solutions do the job poorly? That is your opportunity.' },
    ],
    mistakes: [
      { mistake: 'Writing jobs that name your product or a feature.', fix: 'Describe progress the person wants independently of any solution.' },
      { mistake: 'Leaving out the situation.', fix: 'Start every job with "When...". Context is what makes jobs useful.' },
      { mistake: 'Ignoring emotional and social sides.', fix: 'Ask how people want to feel and be seen, not just what they want done.' },
    ],
    quiz: [
      { q: 'Which is a well-formed job statement?', options: ['Use the budget feature monthly', 'When my pay arrives, I want to see what I can safely spend so I can stop worrying until the next payday', 'A budgeting app with charts'], answer: 1, explain: 'It has a situation, motivation and outcome, and names no product.' },
      { q: 'In JTBD, which might compete with a language learning app?', options: ['Only other language apps', 'Evening classes, phrasebooks, or a friend who speaks the language', 'Nothing'], answer: 1, explain: 'Anything people hire for the same job is a competitor.' },
      { q: 'Why does the situation matter so much?', options: ['It makes statements longer', 'The same person has different jobs in different moments', 'It is part of the brand'], answer: 1, explain: 'Context changes what progress someone wants.' },
    ],
    exercise: {
      title: 'Switch story',
      minutes: 40,
      brief: '<p>Interview someone who recently changed how they do something, such as switching banks, gyms or note-taking apps.</p>',
      steps: [
        'Ask about the moment they first thought of changing.',
        'Map their timeline from first thought to decision.',
        'Write two job statements with functional and emotional parts.',
        'List every alternative they considered, including doing nothing.',
      ],
      deliverable: 'A timeline, two job statements and a list of competing solutions.',
    },
    checklist: [
      'My job statements start with a situation.',
      'They name no product or feature.',
      'I included emotional or social aspects.',
      'I listed non-obvious competing solutions.',
    ],
    summary: [
      'People hire products to make progress in specific situations.',
      'Job statements use "When... I want to... so I can...".',
      'Jobs reveal unexpected competitors and reasons for switching.',
      'Jobs complement personas: one describes situations, the other people.',
    ],
    reading: [
      { title: 'Personas vs. jobs-to-be-done', url: 'https://www.nngroup.com/articles/personas-jobs-be-done/', source: 'Nielsen Norman Group' },
      { title: 'Know your customers\' "jobs to be done"', url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done', source: 'Harvard Business Review' },
    ],
  },

  'empathy-and-journey-maps': {
    objectives: [
      'Use an empathy map to summarise what one user type says, thinks, does and feels.',
      'Build a current-state journey map from research.',
      'Identify pain points and opportunities across a whole experience, not just one screen.',
    ],
    explanation: `
<p>Maps help teams see research as a whole rather than as a pile of quotes.</p>
<h3>Empathy maps</h3>
<p>An <strong>empathy map</strong> divides a page into four areas: what a user <em>says</em>, <em>thinks</em>, <em>does</em> and <em>feels</em>. It is a quick way to summarise research about one user type and to notice contradictions, such as someone who says they compare prices but in practice always buys the first option. Keep it grounded: fill it from real notes, not imagination.</p>
<h3>Journey maps</h3>
<p>A <strong>journey map</strong> shows the steps someone goes through to reach a goal, over time and across channels: searching online, calling, visiting, using the app, receiving a letter. For each stage you record what the person does, thinks and feels, and where things go wrong.</p>
<p>A <strong>current-state</strong> journey map shows what happens today, based on research. A <strong>future-state</strong> map shows what you want to happen. Start with current state; it is what reveals the problems.</p>
<h3>Pain points and moments that matter</h3>
<p>The most valuable output is the list of <strong>pain points</strong> (where people struggle) and <strong>moments that matter</strong> (where the experience makes or breaks trust). Often the biggest problems happen between screens or outside the product entirely, such as waiting for a confirmation email that never comes.</p>`,
    why: `
<p>Teams usually own a slice of an experience: one app, one page, one form. Users experience the whole thing. Journey maps show how slices connect, reveal problems that fall between teams, and help everyone agree on where to focus. Empathy maps give a fast, shared picture of a user type before design starts.</p>`,
    example: `
<p>A car insurance company maps the claim journey of drivers after a minor accident, based on twelve interviews. The stages are: accident, reporting, waiting, repair, payout.</p>
<p>The app scores well at reporting. But the map shows that the worst moments come during <em>waiting</em>: people hear nothing for days, phone the call centre repeatedly and start to fear the claim was lost. Emotions drop to their lowest point there, not in the app.</p>
<p>The team designs proactive status updates at each step of the claim. Calls to the centre fall, and the next round of interviews shows much less anxiety, even though the repair takes the same time.</p>`,
    walkthrough: [
      { title: 'Pick one user type and one goal', body: 'A journey map works best for a single persona achieving a single outcome.' },
      { title: 'List the stages', body: 'From first trigger to the end of the experience, including steps outside your product.' },
      { title: 'Fill each stage from research', body: 'Record actions, thoughts, feelings and channels used.' },
      { title: 'Draw the emotional curve', body: 'Plot how the person feels across stages to show highs and lows.' },
      { title: 'Mark pain points', body: 'Highlight where people struggle, wait or give up.' },
      { title: 'Write opportunities', body: 'For each major pain point, write a "How might we..." question.' },
    ],
    mistakes: [
      { mistake: 'Mapping the journey the business wishes users took.', fix: 'Base current-state maps on observed behaviour, including messy workarounds.' },
      { mistake: 'Only mapping screens.', fix: 'Include phone calls, emails, waiting and conversations with other people.' },
      { mistake: 'Making a beautiful map nobody uses.', fix: 'End with prioritised opportunities and owners.' },
    ],
    quiz: [
      { q: 'What makes a journey map "current-state"?', options: ['It uses the latest software', 'It shows what happens today, based on research', 'It covers only the current release'], answer: 1, explain: 'Current-state maps document reality, which reveals problems.' },
      { q: 'A user says they compare prices but always buys the first option. Where would an empathy map show this?', options: ['Only in "Feels"', 'As a contrast between "Says" and "Does"', 'It would not'], answer: 1, explain: 'Empathy maps are good at revealing gaps between words and actions.' },
      { q: 'Why include steps outside the product?', options: ['To make the map bigger', 'Because many serious pain points happen between or outside screens', 'They are required by templates'], answer: 1, explain: 'Users experience the whole journey, not just your interface.' },
    ],
    exercise: {
      title: 'Map a real journey',
      minutes: 60,
      brief: '<p>Map the journey of renting a flat, from deciding to move to the first week living there, using interviews with two people who moved recently.</p>',
      steps: [
        'List six to eight stages.',
        'For each stage, note actions, thoughts, feelings and channels.',
        'Draw an emotional curve.',
        'Mark three pain points and write a "How might we" question for each.',
      ],
      deliverable: 'A one-page current-state journey map with opportunities.',
    },
    checklist: [
      'The map covers one user type and one goal.',
      'It is based on research, not assumptions.',
      'It includes steps outside the product.',
      'It ends with clear opportunities.',
    ],
    summary: [
      'Empathy maps summarise what a user type says, thinks, does and feels.',
      'Journey maps show an experience over time and across channels.',
      'Start with current state to find real pain points.',
      'The value of a map is in the opportunities it leads to.',
    ],
    reading: [
      { title: 'Journey mapping 101', url: 'https://www.nngroup.com/articles/journey-mapping-101/', source: 'Nielsen Norman Group' },
      { title: 'Empathy mapping: the first step in design thinking', url: 'https://www.nngroup.com/articles/empathy-mapping/', source: 'Nielsen Norman Group' },
    ],
  },

  'problem-statements': {
    objectives: [
      'Write a problem statement that is grounded in evidence and free of solutions.',
      'Reframe problems as opportunities using "How might we" questions.',
      'Choose the right scope for a problem: neither too broad nor too narrow.',
    ],
    explanation: `
<p>After research, you need to say clearly what problem you are solving. A <strong>problem statement</strong> is a short description of who has the problem, what it is, why it matters, and what evidence you have.</p>
<h3>A simple structure</h3>
<p>[User] needs a way to [need] because [insight]. We know this because [evidence]. This matters because [impact on users and business].</p>
<p>For example: "Shift workers need a way to book GP appointments outside office hours because they cannot call at 8am when slots are released. Six of eight participants described missing out repeatedly. Unbooked patients end up in A&amp;E, which costs far more."</p>
<h3>No solutions inside</h3>
<p>"Users need an app to book appointments" hides a solution in the problem. Keep the statement about the need so the team can explore different answers, some of which may not involve screens at all.</p>
<h3>How might we</h3>
<p>A <strong>"How might we"</strong> (HMW) question turns a problem into an invitation to ideas: "How might we let shift workers secure an appointment without being free at 8am?" Good HMWs are broad enough to allow many solutions and narrow enough to give direction. "How might we fix healthcare?" is too broad; "How might we add a booking button?" is too narrow.</p>`,
    why: `
<p>A clear problem statement aligns the whole team on what success means before anyone draws a screen. It makes ideas easier to evaluate ("does this solve the stated problem?"), stops the project drifting, and makes your reasoning easy to show in a case study. Many failed projects solved a problem nobody had stated clearly.</p>`,
    example: `
<p>A university's student app team starts with the brief: "Build a timetable feature." Research shows students already have timetables; what they lack is knowing when a room has changed. Students arrive at the wrong building several times a term.</p>
<p>The designer writes: "First-year students need to know about last-minute room changes because the current email arrives too late and gets buried. Nine of twelve students missed at least one class this term. Missed classes are linked to dropping out in the first year."</p>
<p>The HMW becomes: "How might we make sure students know where their next class is, right when it matters?" Ideas include push alerts, signs on the old room and a lock-screen widget. The team tests the cheapest two first.</p>`,
    walkthrough: [
      { title: 'Start with your insights', body: 'Pick the strongest insight from your analysis.' },
      { title: 'Name the user', body: 'Be specific about who has the problem.' },
      { title: 'State the need and the reason', body: 'Use the insight to explain why the need exists.' },
      { title: 'Add evidence and impact', body: 'Cite what you saw and why it matters for users and the organisation.' },
      { title: 'Remove solutions', body: 'Delete any mention of apps, features or screens.' },
      { title: 'Write three HMWs', body: 'Try different scopes and pick the one that opens up ideas without losing focus.' },
    ],
    mistakes: [
      { mistake: 'A solution disguised as a problem.', fix: 'Describe the need; leave the how open.' },
      { mistake: 'No evidence.', fix: 'Add what you observed and how many participants it applied to.' },
      { mistake: 'HMWs that are too broad or too narrow.', fix: 'Write several versions at different scopes and choose the middle.' },
    ],
    quiz: [
      { q: 'Which is a better problem statement?', options: ['Users need a chatbot', 'New tenants need to report repairs outside office hours because most work during the day; 7 of 10 waited days to report urgent issues', 'Improve the repairs page'], answer: 1, explain: 'It names the user, need, reason and evidence without a solution.' },
      { q: 'What is wrong with "How might we add a filter to search results?"', options: ['It is too narrow and contains a solution', 'It is too broad', 'Nothing'], answer: 0, explain: 'It leaves no room to explore other ideas.' },
      { q: 'Why include impact in a problem statement?', options: ['To make it longer', 'To show why solving it matters for users and the organisation', 'For legal reasons'], answer: 1, explain: 'Impact helps prioritise and secure support.' },
    ],
    exercise: {
      title: 'Problem statement and HMWs',
      minutes: 30,
      brief: '<p>Using an insight from your own research or the earlier exercises, write a problem statement and HMW questions.</p>',
      steps: [
        'Write a problem statement with user, need, reason, evidence and impact.',
        'Check it contains no solution.',
        'Write three HMW questions at different scopes.',
        'Choose one and explain your choice.',
      ],
      deliverable: 'One problem statement and three HMWs with your chosen one marked.',
    },
    checklist: [
      'My statement names a specific user.',
      'It includes evidence and impact.',
      'It contains no solution.',
      'My chosen HMW allows several different solutions.',
    ],
    summary: [
      'A problem statement says who, what, why, and how you know.',
      'Keep solutions out of it.',
      '"How might we" questions turn problems into opportunities.',
      'Scope matters: aim between too broad and too narrow.',
    ],
    reading: [
      { title: 'Using "How might we" questions to ideate on the right problems', url: 'https://www.nngroup.com/articles/how-might-we-questions/', source: 'Nielsen Norman Group' },
      { title: 'Problem statements in UX discovery', url: 'https://www.nngroup.com/articles/problem-statements/', source: 'Nielsen Norman Group' },
    ],
  },

  'hypotheses-and-prioritisation': {
    objectives: [
      'Write design hypotheses that can be proven wrong.',
      'Prioritise ideas using impact and effort.',
      'Choose which assumption to test first and how cheaply to test it.',
    ],
    explanation: `
<p>Once you have a problem and some ideas, you need to decide what to try first. Treating ideas as <strong>hypotheses</strong> rather than certainties helps teams learn faster and waste less.</p>
<h3>Design hypotheses</h3>
<p>A useful format: <strong>We believe</strong> [change] <strong>for</strong> [users] <strong>will result in</strong> [outcome]. <strong>We will know we are right when</strong> [measurable signal].</p>
<p>"We believe showing delivery slots before checkout for first-time customers will reduce basket abandonment. We will know we are right when abandonment at the delivery step falls by 15% over four weeks." A hypothesis must be possible to disprove; if no result could make you change your mind, it is a plan, not a hypothesis.</p>
<h3>Prioritising</h3>
<p>A simple <strong>impact / effort</strong> matrix sorts ideas into four groups: quick wins (high impact, low effort), big bets (high impact, high effort), fill-ins (low impact, low effort) and things to drop (low impact, high effort). Other frameworks, such as RICE (reach, impact, confidence, effort), add more nuance. All of them are tools for conversation, not formulas that decide for you.</p>
<h3>Test the riskiest part cheaply</h3>
<p>For each big idea, ask what must be true for it to work, and test the riskiest part first with the cheapest method: a paper prototype, a fake door, a conversation or a quick prototype test.</p>`,
    why: `
<p>Teams always have more ideas than time. Hypotheses make the expected outcome explicit, so you can tell whether a change worked. Prioritisation keeps effort on the work most likely to matter. Testing risky assumptions early stops months of building something nobody wanted.</p>`,
    example: `
<p>A recipe app team has twelve ideas to increase the number of recipes people actually cook. They score each for impact and effort in a 30-minute session with design, product and engineering.</p>
<p>Two quick wins stand out: a shopping list generated from a recipe, and an "ingredients you already have" filter. The big bet is a step-by-step cooking mode with timers. They write a hypothesis for the cooking mode and identify the riskiest assumption: that people will use their phone while cooking with messy hands.</p>
<p>Before building anything, they film five people cooking at home with a clickable prototype. Most prefer voice and large buttons, which changes the design significantly. The test cost two days; building the wrong version would have cost two months.</p>`,
    walkthrough: [
      { title: 'List ideas', body: 'Collect ideas from your HMW sessions in one place.' },
      { title: 'Write hypotheses', body: 'For the main ideas, use "We believe... will result in... We will know when...".' },
      { title: 'Score impact and effort', body: 'Do this as a group with engineering, so effort estimates are realistic.' },
      { title: 'Place on the matrix', body: 'Sort into quick wins, big bets, fill-ins and drops.' },
      { title: 'Find the riskiest assumption', body: 'For each big bet, ask what must be true for it to work.' },
      { title: 'Plan the cheapest test', body: 'Choose the fastest way to learn whether that assumption holds.' },
    ],
    mistakes: [
      { mistake: 'Hypotheses with no measurable signal.', fix: 'Say what you will observe or measure and what result would prove you wrong.' },
      { mistake: 'Designers estimating effort alone.', fix: 'Score effort with engineers, who know the real cost.' },
      { mistake: 'Treating framework scores as final answers.', fix: 'Use scores to start the discussion, then apply judgement.' },
    ],
    quiz: [
      { q: 'What makes a hypothesis testable?', options: ['It is optimistic', 'It names a measurable signal that could prove it wrong', 'It is approved by a manager'], answer: 1, explain: 'If no result could change your mind, it is not a hypothesis.' },
      { q: 'An idea is high impact and low effort. What is it?', options: ['A big bet', 'A quick win', 'A fill-in'], answer: 1, explain: 'Quick wins are usually worth doing first.' },
      { q: 'Why test the riskiest assumption first?', options: ['It is the most fun', 'If it is wrong, the whole idea fails, so learning early saves effort', 'It is required'], answer: 1, explain: 'Early tests of critical assumptions avoid expensive mistakes.' },
    ],
    exercise: {
      title: 'Prioritise and plan a test',
      minutes: 45,
      brief: '<p>Take at least eight ideas from an HMW session (yours or invented for a parking app) and prioritise them.</p>',
      steps: [
        'Write a hypothesis for your top three ideas.',
        'Place all ideas on an impact / effort matrix.',
        'Identify the riskiest assumption in your biggest bet.',
        'Describe the cheapest test that would check it.',
      ],
      deliverable: 'Matrix, three hypotheses and a short test plan.',
    },
    checklist: [
      'Each hypothesis has a measurable signal.',
      'Effort was estimated with technical input.',
      'I identified the riskiest assumption.',
      'My test is the cheapest way to learn.',
    ],
    summary: [
      'Treat design ideas as hypotheses with measurable signals.',
      'Impact / effort matrices help prioritise and start conversations.',
      'Test the riskiest assumption first, as cheaply as possible.',
      'Frameworks support judgement; they do not replace it.',
    ],
    reading: [
      { title: 'Prioritization matrices', url: 'https://www.nngroup.com/articles/prioritization-matrices/', source: 'Nielsen Norman Group' },
      { title: 'RICE: simple prioritization for product managers', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/', source: 'Intercom' },
    ],
  },

  'success-metrics': {
    objectives: [
      'Define what success looks like for a design change before you build it.',
      'Choose metrics that reflect user outcomes, not just activity.',
      'Combine behavioural and attitudinal measures, and watch for unintended effects.',
    ],
    explanation: `
<p>If you do not decide what success looks like before you start, you will always find a number afterwards that looks good. <strong>Success metrics</strong> make the goal concrete and honest.</p>
<h3>Outcomes, not activity</h3>
<p>Page views, clicks and time on site are easy to measure but often misleading. Longer time on a help page might mean people are stuck. Good metrics reflect whether people achieved what they came to do: task completion rate, time to complete a task, error rate, successful first-time setup, repeat use.</p>
<h3>Frameworks</h3>
<p>Google's <strong>HEART</strong> framework groups metrics into Happiness, Engagement, Adoption, Retention and Task success. For each category you choose a <strong>goal</strong>, a <strong>signal</strong> that would show progress, and a <strong>metric</strong> you can track. You rarely need all five; pick the ones that fit the problem.</p>
<h3>Behaviour and attitude</h3>
<p><strong>Behavioural</strong> metrics measure what people do (completion, errors). <strong>Attitudinal</strong> metrics measure what they say (satisfaction scores, perceived ease). Use both: people sometimes complete a task but hate the experience, or enjoy it but fail.</p>
<h3>Guardrail metrics</h3>
<p>A <strong>guardrail metric</strong> checks that you have not broken something else. If you reduce checkout steps to increase conversion, watch refund requests and support calls too.</p>`,
    why: `
<p>Metrics turn design from opinion into something the team can learn from. They help you prove the value of your work, decide whether to keep a change, and spot harm early. Defining them up front also keeps everyone honest: success is agreed before results come in.</p>`,
    example: `
<p>A water company redesigns the "report a leak" form. The team defines success before launch:</p>
<ul>
<li><strong>Task success:</strong> share of started reports that are submitted rises from 61% to 80%.</li>
<li><strong>Quality:</strong> reports with a usable location rise from 70% to 90% (fewer callbacks to engineers).</li>
<li><strong>Happiness:</strong> average ease rating after submitting is at least 4 out of 5.</li>
<li><strong>Guardrail:</strong> duplicate reports do not increase.</li>
</ul>
<p>After a month, completion reaches 83% and location quality 88%, but duplicates rise slightly. The team adds a "Has this already been reported?" map, and duplicates fall again. Without the guardrail they would have missed it.</p>`,
    walkthrough: [
      { title: 'Restate the goal', body: 'Write the user and business outcome you want in one sentence.' },
      { title: 'Choose categories', body: 'Use HEART or similar to pick the two or three that matter most.' },
      { title: 'Define goal, signal, metric', body: 'For each category, write what you want, what would show it, and how you will measure it.' },
      { title: 'Record a baseline', body: 'Measure the current value before you change anything.' },
      { title: 'Set a target and timeframe', body: 'Decide what change counts as success and over what period.' },
      { title: 'Add a guardrail', body: 'Pick one metric that would reveal unintended harm.' },
    ],
    mistakes: [
      { mistake: 'Choosing vanity metrics such as page views.', fix: 'Measure whether users achieved their goal.' },
      { mistake: 'No baseline.', fix: 'Measure before the change so you can compare.' },
      { mistake: 'Defining success after launch.', fix: 'Agree metrics and targets before you build.' },
      { mistake: 'Ignoring side effects.', fix: 'Track at least one guardrail metric.' },
    ],
    quiz: [
      { q: 'Time on a help page increases after a redesign. What could this mean?', options: ['Definitely a success', 'It could mean people are more engaged or more stuck; you need other evidence', 'The page is broken'], answer: 1, explain: 'Activity metrics are ambiguous without outcome measures.' },
      { q: 'What does the "T" in HEART stand for?', options: ['Traffic', 'Task success', 'Time'], answer: 1, explain: 'Task success measures whether people achieve what they set out to do.' },
      { q: 'What is a guardrail metric for?', options: ['Making dashboards look full', 'Detecting harm caused elsewhere by a change', 'Measuring design quality'], answer: 1, explain: 'Guardrails catch unintended side effects.' },
    ],
    exercise: {
      title: 'Metrics plan',
      minutes: 35,
      brief: '<p>Define success metrics for a redesign of a cinema ticket booking flow.</p>',
      steps: [
        'Write the goal in one sentence.',
        'Choose two or three HEART categories and fill in goal, signal and metric.',
        'Note how you would get a baseline.',
        'Add one guardrail metric and explain what it protects.',
      ],
      deliverable: 'A one-page metrics plan with targets and a guardrail.',
    },
    checklist: [
      'My metrics reflect user outcomes, not just activity.',
      'I included behavioural and attitudinal measures.',
      'I have a baseline and a target.',
      'I chose a guardrail metric.',
    ],
    summary: [
      'Define success before building, with baselines and targets.',
      'Measure outcomes such as task success, not just activity.',
      'HEART helps structure goals, signals and metrics.',
      'Guardrail metrics reveal unintended harm.',
    ],
    reading: [
      { title: 'Measuring the user experience on a large scale (HEART)', url: 'https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/', source: 'Google Research' },
      { title: 'Success rate: the simplest usability metric', url: 'https://www.nngroup.com/articles/success-rate-the-simplest-usability-metric/', source: 'Nielsen Norman Group' },
    ],
  },
};
