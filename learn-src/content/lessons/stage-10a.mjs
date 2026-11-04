// @ts-check
/* Stage 10 (part 1): Product thinking. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'product-goals-user-needs': {
    objectives: [
      'Connect design decisions to product strategy and goals.',
      'Balance user needs, business viability and technical feasibility.',
      'Explain the value of a design in product terms.',
    ],
    explanation: `
<p>Product thinking means seeing design as part of a product that must succeed for users <em>and</em> for the organisation. A common framing is the overlap of three questions:</p>
<ul>
<li><strong>Desirable</strong>: do people need and want it?</li>
<li><strong>Viable</strong>: does it support the business model and goals?</li>
<li><strong>Feasible</strong>: can we build and run it with the technology, time and skills available?</li>
</ul>
<p>Good products sit where all three overlap.</p>
<h3>From strategy to design</h3>
<p>Products usually have a <strong>vision</strong> (the long-term change), a <strong>strategy</strong> (how to get there), <strong>goals or OKRs</strong> (measurable targets for a period) and a <strong>roadmap</strong> (planned work). Designers should know which goal each piece of work supports.</p>
<h3>Talking about value</h3>
<p>Explain design work in terms of outcomes: "This reduces failed sign-ups, which supports our activation goal," rather than "This looks cleaner." Connect user problems to measurable business effects such as retention, conversion, support costs or risk.</p>`,
    why: `
<p>Designers who understand product goals make better trade-offs, earn a seat in strategic discussions and get their work prioritised. Without that link, design is easily seen as decoration, and good ideas lose out to work that is easier to justify. Product thinking is one of the clearest differences between junior and senior designers.</p>`,
    example: `
<p>A designer proposes a redesign of a meal kit app's recipe pages because "they feel cluttered". The product manager asks how it supports this quarter's goal of reducing subscription cancellations.</p>
<p>The designer returns with evidence: cancellation surveys say "recipes too complicated", and analytics show people who rate recipes "easy" stay longer. They reframe the work around showing difficulty, time and steps clearly, with a goal of increasing recipe completion. The work is prioritised for the next sprint.</p>`,
    walkthrough: [
      { title: 'Find the strategy', body: 'Read your product\'s vision, strategy and current goals.' },
      { title: 'Map your work', body: 'For each piece of design work, name the goal it supports.' },
      { title: 'Check all three lenses', body: 'Ask whether it is desirable, viable and feasible.' },
      { title: 'Find the evidence', body: 'Link user problems to data and business effects.' },
      { title: 'Reframe', body: 'Write the value of the work in outcome terms.' },
      { title: 'Discuss', body: 'Review the framing with your product manager.' },
    ],
    mistakes: [
      { mistake: 'Justifying work with aesthetics alone.', fix: 'Explain value in terms of user and business outcomes.' },
      { mistake: 'Ignoring feasibility until handoff.', fix: 'Involve engineers early.' },
      { mistake: 'Not knowing the current goals.', fix: 'Ask and keep them visible.' },
    ],
    quiz: [
      { q: 'What are the three lenses of a good product?', options: ['Fast, cheap, good', 'Desirable, viable, feasible', 'Big, bold, bright'], answer: 1, explain: 'Good products sit where all three overlap.' },
      { q: 'Which justification is strongest?', options: ['It looks cleaner', 'It reduces failed sign-ups, supporting our activation goal', 'Our competitor did it'], answer: 1, explain: 'It links design to outcomes.' },
      { q: 'What is a roadmap?', options: ['A user journey', 'Planned work over time', 'A sitemap'], answer: 1, explain: 'Roadmaps plan delivery.' },
    ],
    exercise: {
      title: 'Value statement',
      minutes: 30,
      brief: '<p>Write value statements for three pieces of design work.</p>',
      steps: [
        'Choose three design improvements.',
        'Name the product goal each supports.',
        'Assess desirability, viability and feasibility.',
        'Write a one-sentence value statement for each.',
      ],
      deliverable: 'Three value statements with evidence.',
    },
    checklist: [
      'I know my product\'s goals.',
      'My work links to a goal.',
      'I consider all three lenses.',
      'I explain value in outcome terms.',
    ],
    summary: [
      'Good products are desirable, viable and feasible.',
      'Link design work to strategy and goals.',
      'Explain value in outcome terms.',
      'Product thinking marks senior designers.',
    ],
    reading: [
      { title: 'How to prototype a new business (desirability, feasibility, viability)', url: 'https://www.ideou.com/blogs/inspiration/how-to-prototype-a-new-business', source: 'IDEO U' },
      { title: 'OKRs: objectives and key results', url: 'https://www.atlassian.com/agile/agile-at-scale/okr', source: 'Atlassian' },
    ],
  },

  'discovery-delivery': {
    objectives: [
      'Explain the difference between product discovery and delivery.',
      'Run discovery and delivery work in parallel.',
      'Know what design does in each.',
    ],
    explanation: `
<p>Product work has two modes:</p>
<ul>
<li><strong>Discovery</strong>: deciding <em>what</em> to build. Understanding problems, testing ideas cheaply and reducing risk before committing engineering time.</li>
<li><strong>Delivery</strong>: building <em>it</em> well. Detailed design, development, quality assurance, release and measurement.</li>
</ul>
<h3>Risks discovery reduces</h3>
<p>Value risk (will people want it?), usability risk (can they use it?), feasibility risk (can we build it?) and viability risk (does it work for the business?).</p>
<h3>Dual-track</h3>
<p>Many teams run <strong>dual-track</strong> work: discovery runs a little ahead of delivery, so validated ideas are ready when engineers need them. Designers often move between tracks during the same week.</p>
<h3>Phases in public services</h3>
<p>Government services often use named phases: <strong>discovery</strong> (understand the problem), <strong>alpha</strong> (try different solutions), <strong>beta</strong> (build and test with real users) and <strong>live</strong> (run and improve).</p>
<h3>Design in each</h3>
<p>In discovery: research, sketching, prototypes, experiments. In delivery: detailed design, states, specs, handoff, build reviews, post-launch measurement.</p>`,
    why: `
<p>Teams that skip discovery build features nobody uses; teams that never deliver learn nothing real. Understanding both modes helps designers plan their time, set expectations with stakeholders and push for evidence before expensive decisions. It also explains why some work should be rough and fast while other work must be precise.</p>`,
    example: `
<p>A team is asked to build an in-app chat for a home insurance product. Instead of starting delivery, they spend two weeks on discovery: interviews show customers mainly want claim status updates, not chat. A fake-door test of a "Message us" button gets few clicks, while a prototype status tracker tests well.</p>
<p>They deliver the tracker first. Calls asking "where is my claim?" fall, and chat is deprioritised, saving months of engineering effort.</p>`,
    walkthrough: [
      { title: 'Identify risks', body: 'List value, usability, feasibility and viability risks for an idea.' },
      { title: 'Choose discovery methods', body: 'Pick cheap ways to test the biggest risks.' },
      { title: 'Run experiments', body: 'Prototype, interview or test quickly.' },
      { title: 'Decide', body: 'Proceed, change direction or stop.' },
      { title: 'Prepare for delivery', body: 'Detail validated ideas for engineers.' },
      { title: 'Keep discovery running', body: 'Continue discovery for the next ideas while delivery happens.' },
    ],
    mistakes: [
      { mistake: 'Treating every request as delivery.', fix: 'Check risks with discovery first.' },
      { mistake: 'Polishing discovery prototypes.', fix: 'Keep them rough and fast.' },
      { mistake: 'Endless discovery.', fix: 'Timebox and decide.' },
    ],
    quiz: [
      { q: 'What is discovery for?', options: ['Writing code', 'Deciding what to build and reducing risk', 'Launching'], answer: 1, explain: 'Discovery tests ideas before committing.' },
      { q: 'What is dual-track?', options: ['Two products', 'Discovery and delivery running in parallel', 'Two designers'], answer: 1, explain: 'Discovery stays ahead of delivery.' },
      { q: 'Which risk asks "will people want it?"', options: ['Feasibility', 'Value', 'Viability'], answer: 1, explain: 'Value risk is about demand.' },
    ],
    exercise: {
      title: 'Risk plan',
      minutes: 45,
      brief: '<p>Plan discovery for a feature idea.</p>',
      steps: [
        'Choose a feature idea.',
        'List the four risks.',
        'Choose a cheap test for the biggest two.',
        'Define what result would make you proceed or stop.',
      ],
      deliverable: 'A one-page discovery plan.',
    },
    checklist: [
      'I can explain discovery and delivery.',
      'I identify risks before building.',
      'I timebox discovery.',
      'I know design\'s role in both.',
    ],
    summary: [
      'Discovery decides what to build; delivery builds it well.',
      'Discovery reduces value, usability, feasibility and viability risk.',
      'Dual-track runs both in parallel.',
      'Design work differs in each mode.',
    ],
    reading: [
      { title: 'How the discovery phase works', url: 'https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works', source: 'GOV.UK Service Manual' },
      { title: 'How the alpha phase works', url: 'https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works', source: 'GOV.UK Service Manual' },
    ],
  },

  'prioritisation-tradeoffs': {
    objectives: [
      'Use prioritisation frameworks to decide what to design and build.',
      'Make and explain trade-offs between scope, quality and time.',
      'Define a minimum viable version without harming users.',
    ],
    explanation: `
<p>There is always more to do than time allows. Prioritisation decides what comes first.</p>
<h3>Frameworks</h3>
<ul>
<li><strong>RICE</strong>: Reach × Impact × Confidence ÷ Effort.</li>
<li><strong>MoSCoW</strong>: Must have, Should have, Could have, Won't have (this time).</li>
<li><strong>Value versus effort</strong>: a simple two-by-two matrix.</li>
<li><strong>Kano model</strong>: basic expectations, performance features and delighters.</li>
</ul>
<p>Frameworks structure discussion; they do not replace judgement.</p>
<h3>Trade-offs</h3>
<p>Most decisions trade between <strong>scope</strong>, <strong>quality</strong> and <strong>time</strong>. If the date is fixed, reduce scope rather than quality. Make trade-offs explicit and record them so they can be revisited.</p>
<h3>Minimum viable, not minimum awful</h3>
<p>A first release should be the smallest version that delivers real value and lets you learn. Cutting features is fine; cutting accessibility, error handling or clear content usually is not, because it harms users and creates expensive debt.</p>`,
    why: `
<p>Designers constantly face pressure to fit more into less time. Knowing how to prioritise and negotiate trade-offs lets you protect what matters most to users while still shipping. It also makes you a trusted partner for product managers and engineers, rather than someone who only asks for more.</p>`,
    example: `
<p>A team has six weeks to launch online booking for a physiotherapy clinic. The full design includes booking, rescheduling, reminders, payments, a practitioner profile page and reviews.</p>
<p>Using MoSCoW with RICE scores, they agree: must have booking, cancellation and email confirmation; should have reminders; could have profiles; won't have reviews or online payment this time. They refuse to cut accessible forms and error states. Launch happens on time, and data from real bookings shapes the next release.</p>`,
    walkthrough: [
      { title: 'List candidates', body: 'List all features or design improvements.' },
      { title: 'Score', body: 'Apply RICE or value versus effort with the team.' },
      { title: 'Sort with MoSCoW', body: 'Agree must, should, could and won\'t.' },
      { title: 'Protect quality', body: 'List non-negotiables such as accessibility and error handling.' },
      { title: 'Record trade-offs', body: 'Write down what was cut and why.' },
      { title: 'Revisit', body: 'Review priorities after launch with real data.' },
    ],
    mistakes: [
      { mistake: 'Cutting quality instead of scope.', fix: 'Reduce scope and keep core quality.' },
      { mistake: 'Treating framework scores as final answers.', fix: 'Use them to structure discussion.' },
      { mistake: 'Unrecorded trade-offs.', fix: 'Write them down for later.' },
    ],
    quiz: [
      { q: 'What does RICE stand for?', options: ['Reach, Impact, Confidence, Effort', 'Risk, Income, Cost, Ease', 'Research, Ideas, Create, Evaluate'], answer: 0, explain: 'It scores ideas by value and effort.' },
      { q: 'If the date is fixed, what should usually change?', options: ['Quality', 'Scope', 'Nothing'], answer: 1, explain: 'Reduce scope, keep quality.' },
      { q: 'What should rarely be cut from an MVP?', options: ['Reviews', 'Accessibility and error handling', 'Profile pages'], answer: 1, explain: 'Cutting them harms users.' },
    ],
    exercise: {
      title: 'Prioritise a release',
      minutes: 45,
      brief: '<p>Prioritise a first release for a product idea.</p>',
      steps: [
        'List ten candidate features.',
        'Score them with RICE.',
        'Sort them with MoSCoW.',
        'List non-negotiables and recorded trade-offs.',
      ],
      deliverable: 'A prioritised list with trade-off notes.',
    },
    checklist: [
      'I used a framework to structure discussion.',
      'I reduced scope rather than quality.',
      'Non-negotiables are listed.',
      'Trade-offs are recorded.',
    ],
    summary: [
      'Frameworks like RICE and MoSCoW structure prioritisation.',
      'Trade scope before quality.',
      'Minimum viable means valuable, not broken.',
      'Record and revisit trade-offs.',
    ],
    reading: [
      { title: 'RICE: simple prioritization for product managers', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/', source: 'Intercom' },
      { title: 'Prioritization matrices', url: 'https://www.nngroup.com/articles/prioritization-matrices/', source: 'Nielsen Norman Group' },
    ],
  },

  'working-with-pm-dev': {
    objectives: [
      'Describe the roles of product managers and engineers.',
      'Collaborate effectively in a product trio.',
      'Avoid common friction between design, product and engineering.',
    ],
    explanation: `
<p>Most product teams centre on a <strong>trio</strong>: a product manager, a designer and an engineering lead, working with the wider team.</p>
<ul>
<li><strong>Product managers</strong> own the problem and outcomes: what to build and why, priorities and stakeholder alignment.</li>
<li><strong>Designers</strong> own the experience: how people will use it, what it looks and feels like, and evidence about users.</li>
<li><strong>Engineers</strong> own how it is built: architecture, feasibility, quality, performance and security.</li>
</ul>
<p>Responsibilities overlap, and the best teams share ownership of outcomes.</p>
<h3>Ways of working</h3>
<ul>
<li>Involve engineers in discovery so feasibility is considered early.</li>
<li>Share work in progress, not just finished designs.</li>
<li>Join stand-ups, planning and retrospectives.</li>
<li>Pair with engineers during build to solve detail problems quickly.</li>
<li>Agree a definition of done that includes design quality and accessibility.</li>
</ul>
<h3>Agile rhythms</h3>
<p>Teams often work in <strong>sprints</strong> (one to two weeks) or continuous flow (Kanban). Design usually works slightly ahead of development, but stays involved through build and release.</p>`,
    why: `
<p>Most design problems at work are really collaboration problems: late surprises, misunderstood requirements and designs that cannot be built. Strong relationships with product managers and engineers get better products shipped faster and make the job more enjoyable. Collaboration skills are assessed in nearly every design interview.</p>`,
    example: `
<p>A designer spends three weeks perfecting a dashboard and presents it to engineers, who explain that the data updates only once a day, so the real-time charts are impossible. Much of the work is wasted.</p>
<p>On the next project, the designer invites the engineering lead to early sketching sessions and shares rough work weekly. Constraints surface in day two, the design uses daily summaries with clear "last updated" times, and the build finishes ahead of schedule.</p>`,
    walkthrough: [
      { title: 'Map roles', body: 'Write who owns what on your team.' },
      { title: 'Invite engineers early', body: 'Include them in discovery and sketching.' },
      { title: 'Share work in progress', body: 'Show rough work weekly.' },
      { title: 'Join team rituals', body: 'Attend stand-ups, planning and retros.' },
      { title: 'Pair during build', body: 'Sit with engineers on detailed problems.' },
      { title: 'Agree done', body: 'Include design and accessibility checks in the definition of done.' },
    ],
    mistakes: [
      { mistake: 'Big reveals of finished designs.', fix: 'Share early and often.' },
      { mistake: 'Treating engineers as implementers only.', fix: 'Involve them in problem solving.' },
      { mistake: 'Disappearing after handoff.', fix: 'Stay involved through build and release.' },
    ],
    quiz: [
      { q: 'Who typically owns how something is built?', options: ['Designer', 'Engineers', 'Marketing'], answer: 1, explain: 'Engineers own the technical approach.' },
      { q: 'Why involve engineers in discovery?', options: ['To slow it down', 'To surface feasibility early', 'It is required'], answer: 1, explain: 'Early constraints prevent waste.' },
      { q: 'What is a product trio?', options: ['Three designers', 'PM, designer and engineering lead', 'Three products'], answer: 1, explain: 'The trio leads product decisions together.' },
    ],
    exercise: {
      title: 'Collaboration plan',
      minutes: 30,
      brief: '<p>Write a collaboration plan for a project.</p>',
      steps: [
        'Map roles and responsibilities.',
        'Plan when engineers and PMs will see work.',
        'List team rituals you will join.',
        'Draft a definition of done including design checks.',
      ],
      deliverable: 'A one-page collaboration plan.',
    },
    checklist: [
      'I understand each role.',
      'I involve engineers early.',
      'I share work in progress.',
      'Design quality is in the definition of done.',
    ],
    summary: [
      'Product trios share ownership of outcomes.',
      'PMs own the problem, designers the experience, engineers the build.',
      'Involve others early and share often.',
      'Stay involved through delivery.',
    ],
    reading: [
      { title: 'Agile delivery', url: 'https://www.gov.uk/service-manual/agile-delivery', source: 'GOV.UK Service Manual' },
    ],
  },

  'feasibility-constraints': {
    objectives: [
      'Identify technical, business, legal and time constraints.',
      'Design creatively within constraints.',
      'Negotiate constraints with evidence.',
    ],
    explanation: `
<p>Every product has constraints. Good designers find them early and use them to focus the work.</p>
<h3>Types of constraint</h3>
<ul>
<li><strong>Technical</strong>: legacy systems, data availability, performance, platform limits, third-party services.</li>
<li><strong>Business</strong>: budget, pricing, brand rules, partnerships.</li>
<li><strong>Legal and regulatory</strong>: data protection, accessibility law, financial or health regulations, consent requirements.</li>
<li><strong>Time and people</strong>: deadlines, team size, skills.</li>
<li><strong>User context</strong>: devices, connectivity, environments.</li>
</ul>
<h3>Working with constraints</h3>
<p>Ask early: "What can't we change?" Separate true constraints from assumptions. Many supposed constraints ("the system can't do that") turn out to be negotiable when someone asks how hard it would be.</p>
<h3>Designing within them</h3>
<p>Explore options that work today, plus an ideal version for the future. Phase work so the first release fits constraints while moving towards the ideal. Use evidence (user impact, cost of support calls) to argue for removing a constraint when it really harms users.</p>`,
    why: `
<p>Designs that ignore constraints get rejected or watered down late, which wastes time and damages trust. Designers who understand constraints produce work that ships, and they know when and how to push back. Constraints also spark creativity by narrowing the problem.</p>`,
    example: `
<p>A designer wants instant identity checks during sign-up for a lending app. Engineering explains the third-party check can take up to two minutes, and regulation requires it before any loan offer.</p>
<p>The designer redesigns the flow: the check starts in the background as soon as the minimum details are entered, while people continue with other questions. A clear progress message explains the wait. Most checks finish before people reach the offer page, and drop-off during the wait falls.</p>`,
    walkthrough: [
      { title: 'Ask early', body: 'Ask PMs, engineers and legal what cannot change.' },
      { title: 'List constraints', body: 'Categorise them by type.' },
      { title: 'Test assumptions', body: 'Ask how hard each "constraint" would be to change.' },
      { title: 'Design options', body: 'Create a version within constraints and an ideal version.' },
      { title: 'Phase', body: 'Plan steps from today\'s version to the ideal.' },
      { title: 'Argue with evidence', body: 'Use user and business impact to challenge harmful constraints.' },
    ],
    mistakes: [
      { mistake: 'Discovering constraints at handoff.', fix: 'Ask in the first week.' },
      { mistake: 'Accepting every constraint as fixed.', fix: 'Ask how hard it is to change.' },
      { mistake: 'Arguing from opinion.', fix: 'Use evidence of impact.' },
    ],
    quiz: [
      { q: 'Which is a regulatory constraint?', options: ['A brand colour', 'Data protection requirements', 'A deadline'], answer: 1, explain: 'Regulation is legal.' },
      { q: 'What should you do with a supposed constraint?', options: ['Accept it', 'Ask how hard it would be to change', 'Ignore it'], answer: 1, explain: 'Some constraints are assumptions.' },
      { q: 'How can you design when the ideal is not possible yet?', options: ['Give up', 'Phase from a constrained version towards the ideal', 'Ignore constraints'], answer: 1, explain: 'Phasing moves forward realistically.' },
    ],
    exercise: {
      title: 'Constraint map',
      minutes: 30,
      brief: '<p>Map constraints for a project.</p>',
      steps: [
        'List constraints by type.',
        'Mark each as confirmed or assumed.',
        'Design a constrained and an ideal version of one screen.',
        'Write a phasing plan.',
      ],
      deliverable: 'A constraint map, two designs and a phasing plan.',
    },
    checklist: [
      'I ask about constraints early.',
      'I separate true constraints from assumptions.',
      'I design within constraints and plan the ideal.',
      'I challenge with evidence.',
    ],
    summary: [
      'Constraints are technical, business, legal, time and user context.',
      'Find them early and test assumptions.',
      'Design within them and phase towards the ideal.',
      'Challenge harmful constraints with evidence.',
    ],
    reading: [
      { title: 'Design constraints', url: 'https://www.interaction-design.org/literature/topics/constraints', source: 'Interaction Design Foundation' },
      { title: 'Scoping your service', url: 'https://www.gov.uk/service-manual/design/scoping-your-service', source: 'GOV.UK Service Manual' },
    ],
  },

  'critiques-feedback': {
    objectives: [
      'Run and take part in productive design critiques.',
      'Give feedback that is specific, kind and useful.',
      'Handle stakeholder feedback without losing the design\'s purpose.',
    ],
    explanation: `
<p>A <strong>design critique</strong> is a structured conversation to improve work against its goals. It is not approval and not a place for personal taste.</p>
<h3>Running a critique</h3>
<ol>
<li>The presenter states the goal, context, constraints and what kind of feedback they want.</li>
<li>Participants review quietly first, then discuss.</li>
<li>Feedback refers to goals and users: "Will people notice the delivery cost before checkout?"</li>
<li>The presenter listens, asks clarifying questions and notes points, without defending each one.</li>
<li>End by summarising actions.</li>
</ol>
<h3>Giving feedback</h3>
<ul>
<li>Be specific: point to the exact element.</li>
<li>Link to goals: why does it matter for users or the business?</li>
<li>Ask questions: "What led you to put filters on the right?"</li>
<li>Separate observation from suggestion.</li>
<li>Mention what works, too.</li>
</ul>
<h3>Stakeholder feedback</h3>
<p>Stakeholders often give solutions ("Make the button bigger"). Ask what problem they are trying to solve. Respond to the underlying concern, which may need a different solution.</p>`,
    why: `
<p>Regular critique improves work faster than working alone and spreads knowledge across the team. Knowing how to give and receive feedback well builds trust and reduces conflict. Handling stakeholder feedback skilfully protects good design decisions while respecting their concerns.</p>`,
    example: `
<p>A stakeholder says, "The logo needs to be bigger on the home page." Instead of arguing, the designer asks, "What are you hoping a bigger logo will achieve?" The stakeholder explains that partners have said they did not realise the site belonged to the organisation.</p>
<p>The designer proposes clearer branding in the header and an "About us" summary near the top. Partners' feedback improves, and the home page layout stays focused on user tasks.</p>`,
    walkthrough: [
      { title: 'Prepare context', body: 'Write goal, users, constraints and feedback wanted.' },
      { title: 'Present briefly', body: 'Spend no more than five minutes presenting.' },
      { title: 'Allow quiet review', body: 'Give people a few minutes to look first.' },
      { title: 'Guide discussion', body: 'Keep feedback linked to goals.' },
      { title: 'Listen and note', body: 'Thank people and write points down.' },
      { title: 'Summarise actions', body: 'Agree what you will change and follow up.' },
    ],
    mistakes: [
      { mistake: 'Defending every point.', fix: 'Listen, clarify and decide later.' },
      { mistake: 'Feedback based on taste.', fix: 'Tie feedback to goals and users.' },
      { mistake: 'Accepting stakeholder solutions literally.', fix: 'Ask about the underlying problem.' },
    ],
    quiz: [
      { q: 'What should the presenter share first?', options: ['Final visuals', 'Goals, context, constraints and the feedback wanted', 'Their favourite part'], answer: 1, explain: 'Context focuses feedback.' },
      { q: 'Which feedback is most useful?', options: ['I don\'t like it', 'Will people notice delivery costs before checkout?', 'Make it pop'], answer: 1, explain: 'It is specific and linked to goals.' },
      { q: 'A stakeholder asks for a bigger logo. What should you do?', options: ['Do it', 'Refuse', 'Ask what problem they want to solve'], answer: 2, explain: 'Find the underlying concern.' },
    ],
    exercise: {
      title: 'Run a critique',
      minutes: 45,
      brief: '<p>Run a critique of one of your designs.</p>',
      steps: [
        'Prepare a context slide.',
        'Run a 30-minute critique with two or three peers.',
        'Take notes without defending.',
        'Summarise actions and update the design.',
      ],
      deliverable: 'Context slide, critique notes and the updated design.',
    },
    checklist: [
      'I share goals and context.',
      'Feedback links to goals.',
      'I listen without defending.',
      'I find the problem behind stakeholder requests.',
    ],
    summary: [
      'Critiques improve work against goals.',
      'Give specific, goal-linked feedback.',
      'Listen, note and decide later.',
      'Respond to stakeholders\' underlying concerns.',
    ],
    reading: [
      { title: 'Design critiques: encourage a positive culture', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
    ],
  },
};
