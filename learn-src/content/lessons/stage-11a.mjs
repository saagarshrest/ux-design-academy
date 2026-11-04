// @ts-check
/* Stage 11 (part 1): Portfolio and career. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'selecting-projects': {
    objectives: [
      'Choose portfolio projects that show the skills employers look for.',
      'Balance real, self-initiated and course projects.',
      'Decide how many projects to include.',
    ],
    explanation: `
<p>A portfolio is not an archive of everything you have done. It is a curated argument that you can do the job you are applying for.</p>
<h3>What hiring managers look for</h3>
<ul>
<li>A clear <strong>process</strong>: understanding problems, research, iteration and testing.</li>
<li><strong>Judgement</strong>: why you made decisions and what you traded off.</li>
<li><strong>Craft</strong>: solid interaction and visual design.</li>
<li><strong>Collaboration</strong>: working with others and handling constraints.</li>
<li><strong>Outcomes</strong>: what changed because of your work.</li>
</ul>
<h3>Choosing projects</h3>
<p>Pick two to four projects that together show this range. Favour projects with real users, real constraints and evidence of impact. If you have no professional work, a well-run self-initiated project (for example redesigning a local service with real research and testing) can be stronger than a polished but shallow concept.</p>
<h3>Match the role</h3>
<p>Tailor your selection to the jobs you want: a design systems role needs a component or system project; a research-heavy role needs strong research stories.</p>`,
    why: `
<p>Reviewers often spend only a few minutes on each portfolio. A tight selection of strong, relevant projects makes your skills obvious quickly, while weak or irrelevant projects dilute the impression. Choosing well is the first step in getting interviews.</p>`,
    example: `
<p>A career changer has eight projects: four course exercises, two visual redesigns of famous apps, a volunteer project for a food bank and a small freelance website. Their portfolio gets few responses.</p>
<p>They cut it to three: the food bank volunteer project (real users, research, testing and measurable impact), the freelance website (client constraints and delivery) and one course project rewritten to show strong interaction design. Interview requests increase.</p>`,
    walkthrough: [
      { title: 'List all projects', body: 'Write every project you could include.' },
      { title: 'Score them', body: 'Rate each for process, judgement, craft, collaboration and outcomes.' },
      { title: 'Check relevance', body: 'Compare with the roles you want.' },
      { title: 'Choose two to four', body: 'Pick a set that covers the range.' },
      { title: 'Fill gaps', body: 'If a key skill is missing, plan a small project to show it.' },
      { title: 'Get feedback', body: 'Ask a working designer which projects are strongest.' },
    ],
    mistakes: [
      { mistake: 'Including everything.', fix: 'Curate two to four strong projects.' },
      { mistake: 'Only visual redesigns of famous apps.', fix: 'Show real problems, research and outcomes.' },
      { mistake: 'Ignoring the target role.', fix: 'Tailor projects to the jobs you want.' },
    ],
    quiz: [
      { q: 'How many projects should a portfolio usually feature?', options: ['One', 'Two to four', 'Ten or more'], answer: 1, explain: 'Quality and relevance beat quantity.' },
      { q: 'What is often stronger than a polished concept?', options: ['A real project with research and outcomes', 'More screens', 'A logo'], answer: 0, explain: 'Evidence of process matters.' },
      { q: 'Why tailor projects to a role?', options: ['To make it longer', 'So reviewers see relevant skills quickly', 'It is not needed'], answer: 1, explain: 'Relevance gets interviews.' },
    ],
    exercise: {
      title: 'Project selection',
      minutes: 30,
      brief: '<p>Choose your portfolio projects.</p>',
      steps: [
        'List and score every project.',
        'Pick two to four for your target role.',
        'Identify one gap.',
        'Plan a small project to fill it.',
      ],
      deliverable: 'A scored project list and gap plan.',
    },
    checklist: [
      'I curated two to four projects.',
      'They show process, judgement, craft, collaboration and outcomes.',
      'They suit my target role.',
      'I got feedback.',
    ],
    summary: [
      'A portfolio is a curated argument.',
      'Show process, judgement, craft, collaboration and outcomes.',
      'Choose two to four relevant projects.',
      'Real problems beat shallow concepts.',
    ],
    reading: [
      { title: 'Case studies', url: 'https://www.interaction-design.org/literature/topics/case-studies', source: 'Interaction Design Foundation' },
      { title: 'UX portfolios', url: 'https://www.interaction-design.org/literature/topics/ux-portfolio', source: 'Interaction Design Foundation' },
    ],
  },

  'case-study-structure': {
    objectives: [
      'Structure a case study that tells a clear story.',
      'Lead with a summary that busy readers can scan.',
      'Balance process and results.',
    ],
    explanation: `
<p>A <strong>case study</strong> explains a project: the problem, your role, what you did, what you decided and what happened. A reliable structure:</p>
<ol>
<li><strong>Summary</strong>: one paragraph plus key facts (role, team, timeline, tools) and the main outcome. Many readers stop here.</li>
<li><strong>Problem and context</strong>: who the users are, what was wrong and why it mattered.</li>
<li><strong>Goals and constraints</strong>.</li>
<li><strong>Process highlights</strong>: research, insights, ideas, iterations. Choose the moments that show judgement, not every step.</li>
<li><strong>Solution</strong>: the final design, explained.</li>
<li><strong>Outcomes</strong>: results, measures and feedback.</li>
<li><strong>Reflection</strong>: what you learned and what you would do differently.</li>
</ol>
<h3>Story, not a process diagram</h3>
<p>Avoid listing every method you used ("empathise, define, ideate…"). Instead, tell the story of key decisions: what you learned, how it changed your direction and why.</p>`,
    why: `
<p>A clear structure lets reviewers quickly find what they need, whether they skim the summary or read every detail. Stories about decisions show how you think, which is what hiring managers are really assessing. Structure also makes case studies easier to present in interviews.</p>`,
    example: `
<p>A case study opens with: "I led design on a redesign of a city council's bulky waste booking service. Online bookings rose from 42% to 71% of all bookings in three months, reducing phone calls by about 1,200 a month. Role: sole designer in a team of five. Timeline: 10 weeks."</p>
<p>It then tells three key moments: discovering residents did not know which items were allowed, testing a photo-based item picker, and simplifying payment after a failed first prototype.</p>`,
    walkthrough: [
      { title: 'Write the summary first', body: 'Problem, role, outcome in one paragraph.' },
      { title: 'Add key facts', body: 'Role, team, timeline, tools.' },
      { title: 'Choose three key moments', body: 'Pick decisions that changed direction.' },
      { title: 'Show the solution', body: 'Present final screens with explanation.' },
      { title: 'Add outcomes', body: 'Include measures and feedback.' },
      { title: 'Reflect', body: 'Write what you learned.' },
    ],
    mistakes: [
      { mistake: 'Burying the outcome at the end.', fix: 'Put it in the summary.' },
      { mistake: 'Listing every method.', fix: 'Tell the story of key decisions.' },
      { mistake: 'Unclear role.', fix: 'State exactly what you did.' },
    ],
    quiz: [
      { q: 'What should the summary include?', options: ['Only the title', 'Problem, role and main outcome', 'All research methods'], answer: 1, explain: 'Many readers stop at the summary.' },
      { q: 'How should process be shown?', options: ['Every step', 'Key decisions that show judgement', 'Not at all'], answer: 1, explain: 'Decisions reveal thinking.' },
      { q: 'Why include reflection?', options: ['To fill space', 'To show learning and self-awareness', 'It is required'], answer: 1, explain: 'Reflection shows growth.' },
    ],
    exercise: {
      title: 'Outline a case study',
      minutes: 45,
      brief: '<p>Outline a case study for one portfolio project.</p>',
      steps: [
        'Write the summary paragraph and key facts.',
        'Choose three key moments.',
        'List the screens and evidence you will show.',
        'Write a two-sentence reflection.',
      ],
      deliverable: 'A case study outline.',
    },
    checklist: [
      'The summary includes outcome and role.',
      'Key moments show decisions.',
      'The solution is explained.',
      'There is a reflection.',
    ],
    summary: [
      'Lead with a summary and key facts.',
      'Tell the story of key decisions.',
      'Show the solution and outcomes.',
      'Reflect on what you learned.',
    ],
    reading: [
      { title: 'UX portfolios', url: 'https://www.interaction-design.org/literature/topics/ux-portfolio', source: 'Interaction Design Foundation' },
      { title: 'Inverted pyramid: writing for comprehension', url: 'https://www.nngroup.com/articles/inverted-pyramid/', source: 'Nielsen Norman Group', note: 'The same principle applies to case studies.' },
    ],
  },

  'problem-and-context': {
    objectives: [
      'Frame the problem clearly at the start of a case study.',
      'Give enough context about users, business and constraints.',
      'Make the problem matter to the reader.',
    ],
    explanation: `
<p>The problem section sets up everything that follows. If readers do not understand the problem, they cannot judge your solution.</p>
<h3>What to include</h3>
<ul>
<li><strong>Users</strong>: who they are and what they were trying to do.</li>
<li><strong>The problem</strong>: what was going wrong, ideally with evidence (data, quotes, complaints).</li>
<li><strong>Why it mattered</strong>: impact on users and the organisation.</li>
<li><strong>Context</strong>: the product, team, your role and timeline.</li>
<li><strong>Constraints</strong>: what limited the solution.</li>
</ul>
<h3>Be specific</h3>
<p>"Users found the app confusing" is weak. "Two in five people who started a claim abandoned at the photo upload step, and support received 300 calls a month asking how to send photos" is strong.</p>
<h3>Respect confidentiality</h3>
<p>If you cannot share exact figures or names, use percentages, rounded numbers or describe the organisation generically. Never break a non-disclosure agreement.</p>`,
    why: `
<p>A well-framed problem makes your work meaningful and your decisions understandable. It also shows that you start with problems, not solutions, which is one of the main things hiring managers look for. A vague problem makes even good solutions look arbitrary.</p>`,
    example: `
<p>Weak: "The client wanted to modernise their booking app."</p>
<p>Strong: "Patients at a chain of dental practices booked appointments mainly by phone. Receptionists spent about three hours a day on calls, and 18% of appointments were missed. The online booking tool existed but was used for only 9% of bookings because it did not show real availability. I was the sole designer on a six-week project to increase online bookings and reduce missed appointments."</p>`,
    walkthrough: [
      { title: 'Describe users', body: 'Write who they are and what they were trying to do.' },
      { title: 'State the problem', body: 'Write what was going wrong.' },
      { title: 'Add evidence', body: 'Add numbers, quotes or complaints.' },
      { title: 'Explain impact', body: 'Why did it matter to users and the business?' },
      { title: 'Give context', body: 'Your role, team, timeline and constraints.' },
      { title: 'Check confidentiality', body: 'Anonymise anything you cannot share.' },
    ],
    mistakes: [
      { mistake: 'Starting with the solution.', fix: 'Start with the problem.' },
      { mistake: 'Vague problems.', fix: 'Use specific evidence.' },
      { mistake: 'Sharing confidential details.', fix: 'Anonymise and round figures.' },
    ],
    quiz: [
      { q: 'Which problem statement is strongest?', options: ['The app was confusing', 'Two in five claimants abandoned at photo upload', 'The client wanted modern design'], answer: 1, explain: 'It is specific and evidenced.' },
      { q: 'What if you cannot share exact figures?', options: ['Make them up', 'Use percentages or rounded numbers', 'Skip the problem'], answer: 1, explain: 'Protect confidentiality honestly.' },
      { q: 'Why include constraints?', options: ['To excuse mistakes', 'So readers understand the context for decisions', 'It is optional'], answer: 1, explain: 'Constraints explain trade-offs.' },
    ],
    exercise: {
      title: 'Problem section',
      minutes: 30,
      brief: '<p>Write the problem and context section for a case study.</p>',
      steps: [
        'Draft users, problem, evidence and impact.',
        'Add role, team, timeline and constraints.',
        'Cut to under 200 words.',
        'Ask someone to explain the problem back.',
      ],
      deliverable: 'A problem and context section under 200 words.',
    },
    checklist: [
      'Users and problem are clear.',
      'There is evidence.',
      'Impact is explained.',
      'Confidentiality is respected.',
    ],
    summary: [
      'Frame the problem before the solution.',
      'Include users, evidence, impact, context and constraints.',
      'Be specific.',
      'Respect confidentiality.',
    ],
    reading: [
      { title: 'Problem statements', url: 'https://www.interaction-design.org/literature/topics/problem-statements', source: 'Interaction Design Foundation' },
      { title: 'Storytelling in design', url: 'https://www.interaction-design.org/literature/topics/storytelling', source: 'Interaction Design Foundation' },
    ],
  },

  'showing-research': {
    objectives: [
      'Present research in a case study without overwhelming readers.',
      'Show insights and how they changed the design.',
      'Use artefacts such as quotes, maps and personas well.',
    ],
    explanation: `
<p>Research sections often fail by showing too much: blurry sticky note photos, long method lists and generic personas. Instead, focus on what you learned and what you did with it.</p>
<h3>A simple pattern</h3>
<ol>
<li><strong>Question</strong>: what you needed to find out.</li>
<li><strong>Method</strong>: briefly, what you did and with whom ("8 interviews with home carers").</li>
<li><strong>Insight</strong>: what you learned, in one sentence.</li>
<li><strong>Evidence</strong>: a quote, number or image.</li>
<li><strong>Impact</strong>: how it changed the design.</li>
</ol>
<h3>Artefacts</h3>
<p>Show artefacts only when they help explain. A clear, readable journey map with a highlighted pain point is useful; an unreadable wall of notes is not. Recreate artefacts cleanly for the portfolio if needed.</p>
<h3>Be honest about scale</h3>
<p>Say how many people you spoke to and any limits. Small-scale research is fine if you are honest about it.</p>`,
    why: `
<p>Research shows that your design decisions were grounded in evidence. Hiring managers want to see that you can turn research into insight and insight into design, not just that you ran a method. Clear, honest research sections build trust in everything that follows.</p>`,
    example: `
<p>Instead of a page of sticky note photos, a case study shows: "Question: why do carers miss medication reminders? Method: 8 interviews and 2 days of shadowing. Insight: carers check the app only at the start of each visit, not between visits. Evidence: 'I look at it in the car before I go in.' Impact: we moved from push reminders to a visit summary screen."</p>`,
    walkthrough: [
      { title: 'List questions', body: 'Write what you needed to learn.' },
      { title: 'Summarise methods', body: 'One line per method with numbers.' },
      { title: 'Pick top insights', body: 'Choose two or three that shaped the design.' },
      { title: 'Add evidence', body: 'Add a quote, number or clear image for each.' },
      { title: 'Link to design', body: 'Explain how each insight changed the design.' },
      { title: 'Clean up artefacts', body: 'Recreate any artefacts so they are readable.' },
    ],
    mistakes: [
      { mistake: 'Unreadable sticky note photos.', fix: 'Show clean, focused artefacts.' },
      { mistake: 'Generic personas with no impact.', fix: 'Only include artefacts that shaped decisions.' },
      { mistake: 'Overstating scale.', fix: 'Be honest about numbers and limits.' },
    ],
    quiz: [
      { q: 'What is most important in a research section?', options: ['The number of methods', 'Insights and how they changed the design', 'Photos of workshops'], answer: 1, explain: 'Impact shows judgement.' },
      { q: 'When should you include an artefact?', options: ['Always', 'When it helps explain an insight', 'Never'], answer: 1, explain: 'Artefacts should serve the story.' },
      { q: 'How should you describe small-scale research?', options: ['Hide the numbers', 'Be honest about numbers and limits', 'Exaggerate'], answer: 1, explain: 'Honesty builds trust.' },
    ],
    exercise: {
      title: 'Research story',
      minutes: 30,
      brief: '<p>Rewrite the research section of a case study.</p>',
      steps: [
        'Use the question, method, insight, evidence, impact pattern.',
        'Choose two or three insights.',
        'Create one clean artefact.',
        'Cut anything that does not change the design.',
      ],
      deliverable: 'A rewritten research section.',
    },
    checklist: [
      'Insights are clear.',
      'Evidence supports each.',
      'Each insight links to a design change.',
      'Artefacts are readable.',
    ],
    summary: [
      'Show what you learned, not every method.',
      'Use question, method, insight, evidence, impact.',
      'Include only helpful, readable artefacts.',
      'Be honest about scale.',
    ],
    reading: [
      { title: 'Journey mapping 101', url: 'https://www.nngroup.com/articles/journey-mapping-101/', source: 'Nielsen Norman Group' },
      { title: 'Personas make users memorable', url: 'https://www.nngroup.com/articles/persona/', source: 'Nielsen Norman Group' },
    ],
  },

  'showing-iterations': {
    objectives: [
      'Show how designs evolved through iteration.',
      'Explain why changes were made using evidence.',
      'Show early work without making it look unfinished.',
    ],
    explanation: `
<p>Hiring managers want to see how you think, and iteration shows thinking in action. Show the journey from early ideas to the final design.</p>
<h3>What to show</h3>
<ul>
<li><strong>Early exploration</strong>: a few sketches or alternatives, showing breadth.</li>
<li><strong>Key turning points</strong>: moments where testing or feedback changed direction.</li>
<li><strong>Before and after</strong>: side-by-side comparisons with notes.</li>
<li><strong>Rejected ideas</strong>: briefly, and why they were rejected.</li>
</ul>
<h3>Explain changes</h3>
<p>For each iteration, say what you changed, why (with evidence) and what happened. "Version 1 used tabs; 3 of 5 testers missed the second tab, so version 2 used a single scrolling page."</p>
<h3>Present rough work well</h3>
<p>Rough sketches are fine, but present them cleanly: crop, label and group them. Show a few, not dozens.</p>`,
    why: `
<p>Iteration proves you test and improve rather than guessing. It shows how you respond to evidence and feedback, which are core professional skills. A portfolio that shows only final screens can make it look as if decisions were arbitrary or not your own.</p>`,
    example: `
<p>A case study shows three versions of a pet insurance quote form. Version 1: one long page; testing showed people abandoned halfway. Version 2: five steps; people completed it but were surprised by the price at the end. Version 3: a price estimate updating as people answered; completion rose and surprise disappeared.</p>
<p>Each version is shown as a cropped screenshot with a two-line explanation.</p>`,
    walkthrough: [
      { title: 'Gather versions', body: 'Collect sketches, wireframes and prototypes.' },
      { title: 'Find turning points', body: 'Identify two or three major changes.' },
      { title: 'Pair with evidence', body: 'Note what evidence caused each change.' },
      { title: 'Create comparisons', body: 'Make before-and-after visuals.' },
      { title: 'Write short notes', body: 'One or two lines per change.' },
      { title: 'Curate', body: 'Keep only what tells the story.' },
    ],
    mistakes: [
      { mistake: 'Only showing final screens.', fix: 'Show key iterations.' },
      { mistake: 'Showing every version.', fix: 'Pick turning points.' },
      { mistake: 'Changes without reasons.', fix: 'Link each change to evidence.' },
    ],
    quiz: [
      { q: 'What do iterations show?', options: ['That you were slow', 'How you think and respond to evidence', 'That the first design was bad'], answer: 1, explain: 'Iteration shows judgement.' },
      { q: 'How should each change be explained?', options: ['What changed, why and what happened', 'Only what changed', 'Not at all'], answer: 0, explain: 'Explain cause and effect.' },
      { q: 'How many sketches should you show?', options: ['All of them', 'A few, presented cleanly', 'None'], answer: 1, explain: 'Curate for clarity.' },
    ],
    exercise: {
      title: 'Iteration story',
      minutes: 45,
      brief: '<p>Create an iteration section for a case study.</p>',
      steps: [
        'Collect all versions.',
        'Pick two or three turning points.',
        'Create before-and-after visuals.',
        'Write short evidence-based notes.',
      ],
      deliverable: 'An iteration section with visuals and notes.',
    },
    checklist: [
      'I show turning points.',
      'Each change has evidence.',
      'Rough work is presented cleanly.',
      'I curated rather than dumped.',
    ],
    summary: [
      'Iteration shows thinking.',
      'Show turning points with evidence.',
      'Use before-and-after comparisons.',
      'Present rough work cleanly and selectively.',
    ],
    reading: [
      { title: 'Parallel and iterative design', url: 'https://www.nngroup.com/articles/parallel-and-iterative-design/', source: 'Nielsen Norman Group' },
      { title: 'Storytelling in design', url: 'https://www.interaction-design.org/literature/topics/storytelling', source: 'Interaction Design Foundation' },
    ],
  },

  'presenting-ui': {
    objectives: [
      'Present final UI clearly and attractively.',
      'Use annotations and context to explain designs.',
      'Avoid presentation tricks that hide the real design.',
    ],
    explanation: `
<p>The final design should be shown in a way that is clear, honest and easy to understand.</p>
<h3>Show in context</h3>
<p>Use simple device frames or browser frames sparingly. Show screens at a readable size. Group screens into flows so readers understand the journey.</p>
<h3>Annotate</h3>
<p>Add short notes pointing to key decisions: "Delivery date shown first because it was the top question in research." Annotations turn pretty screens into evidence of thinking.</p>
<h3>Show details and states</h3>
<p>Include close-ups of important interactions, error states, empty states and responsive versions. Short videos or GIFs can show interactions, but keep them short and add captions.</p>
<h3>Be honest</h3>
<p>Do not present unshipped concepts as live products. Label concepts clearly. Avoid heavy mock-up effects (tilted 3D phones, dramatic shadows) that make screens hard to read.</p>
<h3>Accessibility</h3>
<p>Your portfolio should be accessible too: readable text, alt text for images and captions for videos.</p>`,
    why: `
<p>Clear presentation helps reviewers understand your design quality quickly. Annotations show reasoning and make your work memorable. Honest, accessible presentation builds trust and shows you practise what you preach.</p>`,
    example: `
<p>A portfolio shows a banking app as tilted phones floating over a gradient. The text is unreadable and the reviewer cannot tell what the design does.</p>
<p>The revised version shows three key screens flat, at readable size, with numbered annotations explaining decisions, plus a close-up of the error state and a 10-second captioned video of the payment confirmation interaction.</p>`,
    walkthrough: [
      { title: 'Choose key screens', body: 'Pick screens that show the main flow and decisions.' },
      { title: 'Arrange as flows', body: 'Show screens in sequence.' },
      { title: 'Annotate', body: 'Add short notes on key decisions.' },
      { title: 'Add details', body: 'Include states, close-ups and responsive views.' },
      { title: 'Add motion if useful', body: 'Use short, captioned videos.' },
      { title: 'Check accessibility', body: 'Add alt text and check readability.' },
    ],
    mistakes: [
      { mistake: 'Unreadable mock-up effects.', fix: 'Show screens flat and large enough to read.' },
      { mistake: 'No annotations.', fix: 'Explain key decisions on the screens.' },
      { mistake: 'Presenting concepts as shipped.', fix: 'Label work honestly.' },
    ],
    quiz: [
      { q: 'What do annotations add?', options: ['Decoration', 'Evidence of thinking', 'File size'], answer: 1, explain: 'They explain decisions.' },
      { q: 'What is a problem with tilted 3D mock-ups?', options: ['They are expensive', 'Screens become hard to read', 'They are not allowed'], answer: 1, explain: 'Readability matters most.' },
      { q: 'How should unshipped concepts be labelled?', options: ['As live products', 'Clearly as concepts', 'Not at all'], answer: 1, explain: 'Honesty builds trust.' },
    ],
    exercise: {
      title: 'Present a flow',
      minutes: 45,
      brief: '<p>Present a final design flow for your portfolio.</p>',
      steps: [
        'Choose three to five key screens.',
        'Arrange them as a flow.',
        'Add three to five annotations.',
        'Add one state close-up and alt text.',
      ],
      deliverable: 'A presentation-ready flow image or page section.',
    },
    checklist: [
      'Screens are readable.',
      'Flows are clear.',
      'Annotations explain decisions.',
      'Work is labelled honestly and is accessible.',
    ],
    summary: [
      'Show final UI clearly in context.',
      'Annotate key decisions.',
      'Include states and details.',
      'Be honest and accessible.',
    ],
    reading: [
      { title: 'UX portfolios', url: 'https://www.interaction-design.org/literature/topics/ux-portfolio', source: 'Interaction Design Foundation' },
      { title: 'Images tutorial (alt text)', url: 'https://www.w3.org/WAI/tutorials/images/', source: 'W3C WAI' },
    ],
  },
};
