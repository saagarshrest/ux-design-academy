// @ts-check
/* Stage 11 (part 3): Portfolio and career. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'whiteboard-challenges': {
    objectives: [
      'Approach a live design challenge with a clear structure.',
      'Think aloud and involve the interviewers.',
      'Manage time and scope under pressure.',
    ],
    explanation: `
<p>A <strong>whiteboard challenge</strong> (or live design exercise) asks you to tackle a design problem in 30 to 60 minutes, often on a whiteboard or online board. Interviewers care far more about how you think than about the final sketch.</p>
<h3>A reliable structure</h3>
<ol>
<li><strong>Clarify</strong>: ask questions about users, goals, constraints and success.</li>
<li><strong>Frame</strong>: state who you are designing for and the problem you will focus on.</li>
<li><strong>Explore</strong>: map the user journey and list several ideas.</li>
<li><strong>Choose</strong>: pick one idea and explain why.</li>
<li><strong>Sketch</strong>: draw key screens or steps.</li>
<li><strong>Evaluate</strong>: explain risks, how you would test it and what you would measure.</li>
</ol>
<h3>Think aloud</h3>
<p>Narrate your reasoning. Treat interviewers as collaborators: ask their opinion, check assumptions and respond to hints.</p>
<h3>Manage time</h3>
<p>Agree a rough plan at the start and glance at the clock. It is better to reach evaluation with rough sketches than to perfect one screen.</p>`,
    why: `
<p>Live challenges reveal how you approach unfamiliar problems, collaborate and communicate under pressure. A clear structure helps you stay calm and shows a professional process. Practising in advance makes a huge difference, because the format feels unnatural at first.</p>`,
    example: `
<p>Prompt: "Design a way for library members to borrow e-books."</p>
<p>The candidate asks who the members are, what devices they use and what the library wants to achieve. They focus on older members borrowing their first e-book, map a journey from discovery to reading, sketch three ideas, choose a guided first-borrow flow and finish by explaining how they would test it with five members and measure first-time completion.</p>`,
    walkthrough: [
      { title: 'Clarify', body: 'Ask three to five questions about users, goals and constraints.' },
      { title: 'Frame', body: 'State the user and problem you will focus on.' },
      { title: 'Plan time', body: 'Share a rough time plan.' },
      { title: 'Explore', body: 'Map the journey and list ideas.' },
      { title: 'Choose and sketch', body: 'Pick one idea and sketch key steps.' },
      { title: 'Evaluate', body: 'Explain risks, testing and measures.' },
    ],
    mistakes: [
      { mistake: 'Jumping straight to screens.', fix: 'Clarify and frame first.' },
      { mistake: 'Working in silence.', fix: 'Think aloud and involve interviewers.' },
      { mistake: 'Running out of time on one screen.', fix: 'Plan time and keep sketches rough.' },
    ],
    quiz: [
      { q: 'What do interviewers mainly assess?', options: ['Drawing skill', 'How you think and collaborate', 'Speed'], answer: 1, explain: 'Process matters most.' },
      { q: 'What should you do first?', options: ['Sketch screens', 'Ask clarifying questions', 'Pick colours'], answer: 1, explain: 'Understand the problem first.' },
      { q: 'How should you end?', options: ['With a polished screen', 'By explaining risks, testing and measures', 'By leaving early'], answer: 1, explain: 'Show how you would validate.' },
    ],
    exercise: {
      title: 'Practise a challenge',
      minutes: 45,
      brief: '<p>Run a timed practice challenge: "Design a way for neighbours to share tools."</p>',
      steps: [
        'Write clarifying questions and assumed answers.',
        'Frame the user and problem.',
        'Explore, choose and sketch in 25 minutes.',
        'Finish with risks, testing and measures.',
      ],
      deliverable: 'Photos or exports of your board and a short self-review.',
    },
    checklist: [
      'I clarified before designing.',
      'I thought aloud.',
      'I managed time.',
      'I ended with evaluation.',
    ],
    summary: [
      'Live challenges test thinking, not drawing.',
      'Clarify, frame, explore, choose, sketch, evaluate.',
      'Think aloud and collaborate.',
      'Manage time and keep it rough.',
    ],
    reading: [
      { title: 'Design thinking', url: 'https://www.interaction-design.org/literature/topics/design-thinking', source: 'Interaction Design Foundation' },
      { title: 'Journey mapping 101', url: 'https://www.nngroup.com/articles/journey-mapping-101/', source: 'Nielsen Norman Group' },
    ],
  },

  'interview-prep': {
    objectives: [
      'Prepare for the common stages of a design interview process.',
      'Answer behavioural questions with structured stories.',
      'Research the organisation and prepare good questions.',
    ],
    explanation: `
<p>Design hiring processes usually include several stages: a screening call, a portfolio review or presentation, a design exercise (live or take-home), behavioural interviews and sometimes a meeting with leadership.</p>
<h3>Behavioural questions</h3>
<p>Questions like "Tell me about a time you disagreed with a product manager" are best answered with the <strong>STAR</strong> structure: <em>Situation, Task, Action, Result</em>. Prepare five to eight stories covering conflict, failure, influence, ambiguity, collaboration and impact.</p>
<h3>Research the organisation</h3>
<p>Use their product, read their job description closely and look for public information about their design team. Note one or two ideas or questions about their product.</p>
<h3>Questions to ask</h3>
<ul>
<li>How is design involved in deciding what to build?</li>
<li>How does the team do research?</li>
<li>What would success look like in this role after six months?</li>
<li>What are the biggest challenges for the team right now?</li>
</ul>
<h3>Take-home exercises</h3>
<p>Clarify the time expected and stick to it. Show your process and assumptions, not just polished screens.</p>`,
    why: `
<p>Preparation turns interviews from stressful guesswork into confident conversations. Structured stories make your experience memorable and show reflection. Good questions show genuine interest and help you decide whether the job is right for you, since interviews work in both directions.</p>`,
    example: `
<p>Asked about a failure, a candidate uses STAR: "Situation: we launched a new search feature. Task: I designed the results page. Action: we skipped testing to hit a deadline, and usage was low; I ran quick tests after launch and found the filters were hidden. Result: we moved filters into view and usage doubled. Since then I always push for at least one round of testing, even if it is small."</p>`,
    walkthrough: [
      { title: 'Map the process', body: 'Ask the recruiter what stages to expect.' },
      { title: 'Write STAR stories', body: 'Prepare five to eight stories.' },
      { title: 'Research', body: 'Use the product and read about the team.' },
      { title: 'Prepare questions', body: 'Write four or five thoughtful questions.' },
      { title: 'Practise', body: 'Do a mock interview with a peer.' },
      { title: 'Reflect afterwards', body: 'Note what went well and what to improve.' },
    ],
    mistakes: [
      { mistake: 'Rambling answers.', fix: 'Use STAR and keep to two minutes.' },
      { mistake: 'No questions for the panel.', fix: 'Prepare thoughtful questions.' },
      { mistake: 'Spending too long on take-homes.', fix: 'Agree and respect the time limit.' },
    ],
    quiz: [
      { q: 'What does STAR stand for?', options: ['Situation, Task, Action, Result', 'Start, Test, Assess, Repeat', 'Style, Type, Accessibility, Responsive'], answer: 0, explain: 'A structure for behavioural answers.' },
      { q: 'Why ask questions at the end?', options: ['To fill time', 'To show interest and assess fit', 'It is rude not to'], answer: 1, explain: 'Interviews go both ways.' },
      { q: 'What matters most in a take-home?', options: ['Polish', 'Process and assumptions within the time limit', 'Length'], answer: 1, explain: 'Show thinking.' },
    ],
    exercise: {
      title: 'Story bank',
      minutes: 60,
      brief: '<p>Build a bank of interview stories.</p>',
      steps: [
        'List six themes: conflict, failure, influence, ambiguity, collaboration, impact.',
        'Write a STAR story for each.',
        'Practise telling two aloud in under two minutes.',
        'Write four questions to ask a design team.',
      ],
      deliverable: 'A story bank and question list.',
    },
    checklist: [
      'I have STAR stories for key themes.',
      'I researched the organisation.',
      'I prepared questions.',
      'I practised aloud.',
    ],
    summary: [
      'Know the interview stages.',
      'Use STAR for behavioural answers.',
      'Research the organisation.',
      'Ask good questions.',
    ],
    reading: [
      { title: 'National Careers Service: the STAR method', url: 'https://nationalcareers.service.gov.uk/careers-advice/interview-advice/the-star-method', source: 'National Careers Service' },
      { title: 'National Careers Service: interview advice', url: 'https://nationalcareers.service.gov.uk/careers-advice/interview-advice', source: 'National Careers Service' },
    ],
  },

  'giving-receiving-critique': {
    objectives: [
      'Give design feedback that is specific, kind and useful.',
      'Receive critique without becoming defensive.',
      'Run or take part in effective critique sessions.',
    ],
    explanation: `
<p><strong>Critique</strong> is a structured conversation about whether a design meets its goals. It is not a judgement of the designer.</p>
<h3>Giving critique</h3>
<ul>
<li><strong>Start from goals</strong>: "The goal is for first-time users to book quickly. Does this layout help?"</li>
<li><strong>Be specific</strong>: point to exact elements.</li>
<li><strong>Explain impact</strong>: "Because the price is below the fold, people may not see it before choosing."</li>
<li><strong>Ask questions</strong>: "What led you to put filters in a menu?"</li>
<li><strong>Separate preference from problem</strong>: "Personally I prefer…" versus "This may cause…"</li>
</ul>
<h3>Receiving critique</h3>
<ul>
<li>Share the goal and what feedback you need.</li>
<li>Listen and take notes; do not defend every point.</li>
<li>Ask clarifying questions.</li>
<li>Decide afterwards what to act on, and say why.</li>
</ul>
<h3>Session formats</h3>
<p>Set a clear goal, a time limit and roles (presenter, facilitator, note-taker). Silent critique on sticky notes before discussion can help quieter voices.</p>`,
    why: `
<p>Critique improves designs faster than working alone and is a daily part of design work. Teams that critique well spot problems early and learn from each other. Handling critique gracefully is also something interviewers and managers watch closely.</p>`,
    example: `
<p>Unhelpful feedback: "I don't like it. It feels cluttered."</p>
<p>Helpful feedback: "The goal is quick booking. I count six buttons with equal weight on this screen, so it is hard to see the main action. Could 'Book now' be the only primary button?"</p>
<p>The designer replies: "Thanks, that's useful. The other buttons came from stakeholder requests; I'll test a version with one primary action."</p>`,
    walkthrough: [
      { title: 'State the goal', body: 'Begin each critique by restating what the design is for.' },
      { title: 'Set the focus', body: 'Say what feedback is needed.' },
      { title: 'Give specific feedback', body: 'Point to elements and explain impact.' },
      { title: 'Ask questions', body: 'Understand the designer\'s reasoning.' },
      { title: 'Capture notes', body: 'Record feedback without debating.' },
      { title: 'Decide and follow up', body: 'Choose what to act on and share why.' },
    ],
    mistakes: [
      { mistake: 'Personal opinions as facts.', fix: 'Separate preference from problems.' },
      { mistake: 'Defending every point.', fix: 'Listen, note and decide later.' },
      { mistake: 'Critique without goals.', fix: 'Always start from the design\'s goals.' },
    ],
    quiz: [
      { q: 'What should critique start from?', options: ['Personal taste', 'The design\'s goals', 'The designer\'s experience'], answer: 1, explain: 'Goals make feedback relevant.' },
      { q: 'How should you receive critique?', options: ['Defend every point', 'Listen, ask questions and decide later', 'Ignore it'], answer: 1, explain: 'Stay open.' },
      { q: 'Which feedback is most useful?', options: ['It feels cluttered', 'Six equal buttons make the main action unclear', 'I don\'t like it'], answer: 1, explain: 'Specific with impact.' },
    ],
    exercise: {
      title: 'Critique practice',
      minutes: 30,
      brief: '<p>Give and receive critique on a design.</p>',
      steps: [
        'Choose a screen and state its goal.',
        'Write three pieces of specific, goal-based feedback.',
        'Share your own work and ask for focused feedback.',
        'Record what you will change and why.',
      ],
      deliverable: 'Written feedback and an action list.',
    },
    checklist: [
      'Feedback starts from goals.',
      'It is specific and explains impact.',
      'I listened without defending.',
      'I decided what to act on.',
    ],
    summary: [
      'Critique is about goals, not people.',
      'Be specific and explain impact.',
      'Receive feedback openly.',
      'Structure critique sessions.',
    ],
    reading: [
      { title: 'Design critiques: encourage a positive culture', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
      { title: 'Design critique', url: 'https://www.interaction-design.org/literature/topics/design-critique', source: 'Interaction Design Foundation' },
    ],
  },

  'client-feedback': {
    objectives: [
      'Gather useful feedback from clients and stakeholders.',
      'Turn vague or conflicting feedback into clear actions.',
      'Push back respectfully when feedback harms users.',
    ],
    explanation: `
<p>Clients and stakeholders often give feedback that is vague ("make it pop"), prescriptive ("make the logo bigger") or conflicting. Your job is to understand the concern behind it.</p>
<h3>Ask for the right feedback</h3>
<p>Present work against agreed goals and ask focused questions: "Does this flow cover all the cases your team handles?" rather than "What do you think?"</p>
<h3>Find the underlying need</h3>
<p>When someone asks for a specific change, ask why. "Make the logo bigger" may really mean "I'm worried people won't recognise our brand". There may be a better solution.</p>
<h3>Handle conflicts</h3>
<p>When stakeholders disagree, bring them together, restate the goals and use evidence (research or test results) to decide. Name a decision owner.</p>
<h3>Push back respectfully</h3>
<p>If feedback would hurt users, explain the risk with evidence and offer alternatives or a test: "Removing the guest checkout may reduce sales; could we A/B test it first?"</p>
<h3>Record decisions</h3>
<p>Write feedback and decisions down and share them, so everyone agrees what will change.</p>`,
    why: `
<p>Managing feedback well keeps projects on track and protects the user experience. It builds trust with clients and stakeholders because they feel heard, even when you do not implement every request. It is an essential skill for both agency and in-house designers.</p>`,
    example: `
<p>A client says: "The homepage feels empty. Can we add more products?" The designer asks what worries them. The client explains that sales of new lines are low. The designer proposes a "New this month" section instead of filling the page, and suggests measuring clicks on it. The client agrees, and the decision is recorded in a shared document.</p>`,
    walkthrough: [
      { title: 'Restate goals', body: 'Begin reviews by reminding everyone of the goals.' },
      { title: 'Ask focused questions', body: 'Guide feedback to what you need.' },
      { title: 'Ask why', body: 'Explore the concern behind each request.' },
      { title: 'Resolve conflicts', body: 'Use goals and evidence, and name a decision owner.' },
      { title: 'Push back with evidence', body: 'Explain risks and offer alternatives or tests.' },
      { title: 'Record decisions', body: 'Share a written summary of what will change.' },
    ],
    mistakes: [
      { mistake: 'Asking "What do you think?"', fix: 'Ask focused, goal-based questions.' },
      { mistake: 'Implementing every request literally.', fix: 'Find the underlying need.' },
      { mistake: 'Not recording decisions.', fix: 'Share written summaries.' },
    ],
    quiz: [
      { q: 'What should you do with "Make the logo bigger"?', options: ['Do it immediately', 'Ask what concern is behind it', 'Ignore it'], answer: 1, explain: 'Find the real need.' },
      { q: 'How should conflicting feedback be resolved?', options: ['Choose the loudest', 'Restate goals, use evidence and name a decision owner', 'Do both'], answer: 1, explain: 'Evidence and ownership.' },
      { q: 'How should you push back?', options: ['Refuse', 'Explain the risk and offer alternatives or a test', 'Complain'], answer: 1, explain: 'Respectful and evidence-based.' },
    ],
    exercise: {
      title: 'Feedback triage',
      minutes: 30,
      brief: '<p>Process a set of stakeholder feedback.</p>',
      steps: [
        'List five pieces of feedback (real or invented).',
        'Write the likely underlying need for each.',
        'Propose a response or alternative.',
        'Write a decision summary to share.',
      ],
      deliverable: 'A feedback triage table and decision summary.',
    },
    checklist: [
      'I asked focused questions.',
      'I found underlying needs.',
      'I resolved conflicts with evidence.',
      'I recorded decisions.',
    ],
    summary: [
      'Guide feedback with goals and focused questions.',
      'Look for the need behind requests.',
      'Resolve conflicts with evidence.',
      'Push back respectfully and record decisions.',
    ],
    reading: [
      { title: 'Stakeholder interviews', url: 'https://www.nngroup.com/articles/stakeholder-interviews/', source: 'Nielsen Norman Group' },
      { title: 'A/B testing 101', url: 'https://www.nngroup.com/articles/ab-testing/', source: 'Nielsen Norman Group' },
    ],
  },

  'freelance-scope': {
    objectives: [
      'Define the scope of a freelance design project.',
      'Write a simple proposal covering deliverables, timeline and price.',
      'Manage changes to scope.',
    ],
    explanation: `
<p>Freelance projects succeed or fail on clear scope. Scope defines what you will deliver, by when, for how much and what is excluded.</p>
<h3>Discovery call</h3>
<p>Ask about goals, users, current problems, success measures, budget, timeline, decision makers and existing assets (brand, research, code).</p>
<h3>A simple proposal</h3>
<ul>
<li><strong>Background and goals</strong>.</li>
<li><strong>Scope</strong>: activities and deliverables (for example "5 user interviews, a research summary, wireframes for 6 screens, 2 rounds of revisions").</li>
<li><strong>Out of scope</strong>: what is not included.</li>
<li><strong>Timeline</strong>: phases and milestones.</li>
<li><strong>Price and payment</strong>: fixed price or day rate, deposit and payment dates.</li>
<li><strong>Responsibilities</strong>: what the client must provide and by when.</li>
</ul>
<h3>Scope creep</h3>
<p>When the client asks for extra work, acknowledge it, estimate the impact on time and cost and agree in writing before starting: "Happy to add the account pages. That is about three extra days; shall I send an updated quote?"</p>
<h3>Contracts</h3>
<p>Use a written contract covering payment, ownership of work, confidentiality and cancellation. Get professional advice where needed.</p>`,
    why: `
<p>Clear scope protects both you and the client. It sets expectations, prevents disputes and makes sure you are paid fairly. Many freelance problems, such as endless revisions and late payment, come from vague agreements rather than bad design.</p>`,
    example: `
<p>A café owner asks for "a new website". After a discovery call, the designer proposes: research with 5 customers, a site map, designs for 4 page types, 2 rounds of revisions and handover to a developer, over 4 weeks for a fixed price with 50% upfront. Online ordering is listed as out of scope. When the owner later asks for ordering, the designer sends a separate quote.</p>`,
    walkthrough: [
      { title: 'Run discovery', body: 'Ask about goals, users, budget, timeline and decision makers.' },
      { title: 'Define deliverables', body: 'List specific outputs and revision rounds.' },
      { title: 'State exclusions', body: 'Write what is out of scope.' },
      { title: 'Set timeline and price', body: 'Add phases, milestones and payment terms.' },
      { title: 'Agree in writing', body: 'Use a contract.' },
      { title: 'Manage changes', body: 'Quote extra work before starting it.' },
    ],
    mistakes: [
      { mistake: 'Vague deliverables.', fix: 'List specific outputs and revision rounds.' },
      { mistake: 'Starting extra work without agreement.', fix: 'Quote changes in writing first.' },
      { mistake: 'No contract or deposit.', fix: 'Use a contract and take a deposit.' },
    ],
    quiz: [
      { q: 'What does "out of scope" do?', options: ['Lists extras for free', 'Clarifies what is not included', 'Nothing'], answer: 1, explain: 'It prevents misunderstandings.' },
      { q: 'How should scope creep be handled?', options: ['Do it for free', 'Estimate impact and agree in writing', 'Refuse all changes'], answer: 1, explain: 'Agree changes formally.' },
      { q: 'What should a proposal include?', options: ['Only a price', 'Goals, scope, exclusions, timeline, price and responsibilities', 'Only designs'], answer: 1, explain: 'Cover everything needed to agree.' },
    ],
    exercise: {
      title: 'Write a proposal',
      minutes: 60,
      brief: '<p>Write a one-page proposal for a small freelance project.</p>',
      steps: [
        'Write discovery questions and assumed answers.',
        'Define deliverables and exclusions.',
        'Add timeline, price and payment terms.',
        'Write how you will handle change requests.',
      ],
      deliverable: 'A one-page proposal.',
    },
    checklist: [
      'Deliverables are specific.',
      'Exclusions are clear.',
      'Timeline and payment are agreed.',
      'There is a change process.',
    ],
    summary: [
      'Clear scope protects you and the client.',
      'List deliverables and exclusions.',
      'Agree timeline, price and responsibilities in writing.',
      'Quote changes before doing them.',
    ],
    reading: [
      { title: 'Working for yourself', url: 'https://www.gov.uk/working-for-yourself', source: 'GOV.UK' },
      { title: 'Stakeholder interviews', url: 'https://www.nngroup.com/articles/stakeholder-interviews/', source: 'Nielsen Norman Group' },
    ],
  },

  'continuing-learning': {
    objectives: [
      'Build a sustainable plan for continued learning.',
      'Find communities, mentors and resources.',
      'Choose areas to specialise in over time.',
    ],
    explanation: `
<p>UX is a broad, changing field. Finishing a course is the start, not the end, of learning.</p>
<h3>Learn by doing</h3>
<p>The fastest learning comes from real projects: volunteer work, side projects, internal projects at work, or redesigning everyday services with real research.</p>
<h3>Learn from others</h3>
<ul>
<li><strong>Communities</strong>: local meetups, online groups and conferences.</li>
<li><strong>Mentors</strong>: experienced designers who can review work and give career advice. Many offer free sessions through mentoring platforms.</li>
<li><strong>Critique partners</strong>: peers who swap feedback regularly.</li>
</ul>
<h3>Read and watch</h3>
<p>Follow reputable sources: research organisations, government design blogs, accessibility groups and well-known books. Prefer depth over a constant stream of hot takes.</p>
<h3>Specialise over time</h3>
<p>After building broad skills, many designers deepen one or two areas: research, interaction design, accessibility, design systems, content design, service design or leadership. Choose based on what energises you and what the market needs.</p>
<h3>Make a plan</h3>
<p>Set a small, regular habit: for example one article and one practice exercise each week, and one project each quarter. Keep a learning log.</p>`,
    why: `
<p>Tools, platforms and practices keep changing, and careers grow through steady learning. A simple, regular habit beats occasional bursts of intense study. Communities and mentors speed up learning, open doors to opportunities and help you stay motivated through the ups and downs of a design career.</p>`,
    example: `
<p>A new designer sets a plan: one accessibility article and one 30-minute practice exercise every week, a monthly critique swap with two peers, a local meetup every other month and one volunteer project per quarter. After a year they have a stronger portfolio, a small network and a clear interest in accessibility, which shapes their next job search.</p>`,
    walkthrough: [
      { title: 'Reflect', body: 'List your strengths and the skills you want to grow.' },
      { title: 'Choose habits', body: 'Pick a small weekly reading and practice routine.' },
      { title: 'Find people', body: 'Join a community and find a critique partner or mentor.' },
      { title: 'Plan projects', body: 'Choose one real project for the next quarter.' },
      { title: 'Keep a log', body: 'Record what you learned and applied.' },
      { title: 'Review quarterly', body: 'Adjust your plan and consider specialisms.' },
    ],
    mistakes: [
      { mistake: 'Only consuming content.', fix: 'Balance reading with real practice.' },
      { mistake: 'Learning alone.', fix: 'Join communities and find feedback partners.' },
      { mistake: 'Specialising too early.', fix: 'Build broad foundations first.' },
    ],
    quiz: [
      { q: 'What is the fastest way to learn?', options: ['Only reading', 'Real projects with feedback', 'Collecting certificates'], answer: 1, explain: 'Practice with feedback works best.' },
      { q: 'What makes a learning plan sustainable?', options: ['Intense bursts', 'Small regular habits', 'No plan'], answer: 1, explain: 'Consistency wins.' },
      { q: 'When should you specialise?', options: ['Immediately', 'After building broad foundations', 'Never'], answer: 1, explain: 'Breadth first, then depth.' },
    ],
    exercise: {
      title: 'Learning plan',
      minutes: 30,
      brief: '<p>Create a 12-month learning plan.</p>',
      steps: [
        'List strengths and growth areas.',
        'Choose weekly, monthly and quarterly habits.',
        'Name one community and one potential mentor or critique partner.',
        'Pick a project for the next quarter.',
      ],
      deliverable: 'A one-page learning plan.',
    },
    checklist: [
      'I have regular habits.',
      'I balance reading with practice.',
      'I have people to learn with.',
      'I review my plan quarterly.',
    ],
    summary: [
      'Learning continues after the course.',
      'Learn by doing real projects.',
      'Learn with communities and mentors.',
      'Build habits and specialise over time.',
    ],
    reading: [
      { title: 'UX research cheat sheet', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', source: 'Nielsen Norman Group' },
      { title: 'Laws of UX', url: 'https://lawsofux.com/', source: 'Laws of UX' },
      { title: 'W3C WAI: accessibility fundamentals', url: 'https://www.w3.org/WAI/fundamentals/', source: 'W3C WAI' },
    ],
  },
};
