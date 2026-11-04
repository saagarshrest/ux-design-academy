// @ts-check
/* Stage 11 (part 2): Portfolio and career. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'testing-and-outcomes': {
    objectives: [
      'Show how you validated designs in a case study.',
      'Report outcomes honestly, including partial or unknown results.',
      'Connect outcomes back to the original problem.',
    ],
    explanation: `
<p>Outcomes answer the question every reviewer has: <em>did it work?</em> Show both how you tested and what changed.</p>
<h3>Validation</h3>
<p>Briefly describe usability tests, A/B tests, pilots or feedback sessions. Say what you tested, with whom, and what you changed as a result.</p>
<h3>Outcomes</h3>
<ul>
<li><strong>Quantitative</strong>: completion rates, conversion, time on task, support calls, error rates.</li>
<li><strong>Qualitative</strong>: user quotes, stakeholder feedback, observed behaviour.</li>
<li><strong>Organisational</strong>: a pattern adopted by other teams, a process improved, a decision made.</li>
</ul>
<h3>When you lack hard numbers</h3>
<p>Many projects never ship, or ship after you leave. Be honest: report test results, the metrics the team planned to track, or what you would measure. "Task success rose from 3 of 6 to 6 of 6 participants in the second round of testing" is a valid outcome.</p>
<h3>Link back</h3>
<p>Connect outcomes to the problem you set up at the start. If the problem was abandonment at photo upload, report what happened to abandonment.</p>`,
    why: `
<p>Outcomes turn a case study from "here is what I made" into "here is the difference I made". They show you care about impact rather than output. Honest reporting, including uncertain or partial results, builds credibility, while inflated or vague claims are easily spotted by experienced reviewers and can damage trust in the whole portfolio.</p>`,
    example: `
<p>A case study about a parking permit service ends: "In two rounds of testing with 12 residents, task completion rose from 7 of 12 to 12 of 12. After launch, phone enquiries about permits fell by about a third over two months. One thing we did not fix: residents with more than one car still found renewals confusing, which the team has planned for the next phase."</p>
<p>The result is specific, linked to the original problem and honest about what remains.</p>`,
    walkthrough: [
      { title: 'Summarise testing', body: 'Write what you tested, with whom and what changed.' },
      { title: 'Collect outcomes', body: 'Gather numbers, quotes and organisational effects.' },
      { title: 'Check accuracy', body: 'Make sure every figure is real and attributable.' },
      { title: 'Handle gaps', body: 'If results are unknown, say what was planned or would be measured.' },
      { title: 'Link to the problem', body: 'Show how outcomes address the original problem.' },
      { title: 'Note what remains', body: 'Mention unsolved issues honestly.' },
    ],
    mistakes: [
      { mistake: 'Inflated or invented numbers.', fix: 'Report only real, checkable outcomes.' },
      { mistake: 'Outcomes unrelated to the problem.', fix: 'Link results back to the problem statement.' },
      { mistake: 'Leaving outcomes out because the project did not ship.', fix: 'Report test results and planned measures.' },
    ],
    quiz: [
      { q: 'What if your project never launched?', options: ['Invent results', 'Report test results and planned measures', 'Remove the project'], answer: 1, explain: 'Honest partial outcomes are valid.' },
      { q: 'Which is an organisational outcome?', options: ['A pattern adopted by other teams', 'A nicer colour', 'More screens'], answer: 0, explain: 'Impact can go beyond metrics.' },
      { q: 'Why link outcomes to the problem?', options: ['It closes the story and shows impact', 'It makes it longer', 'It is not needed'], answer: 0, explain: 'The story should resolve.' },
    ],
    exercise: {
      title: 'Outcomes section',
      minutes: 30,
      brief: '<p>Write the testing and outcomes section for a case study.</p>',
      steps: [
        'Summarise how you validated the design.',
        'List quantitative, qualitative and organisational outcomes.',
        'Link each to the original problem.',
        'Add one honest note about what remains.',
      ],
      deliverable: 'A testing and outcomes section.',
    },
    checklist: [
      'Validation is described.',
      'Outcomes are real and specific.',
      'They link to the problem.',
      'Limits are acknowledged.',
    ],
    summary: [
      'Show how you validated the design.',
      'Report quantitative, qualitative and organisational outcomes.',
      'Be honest when results are partial.',
      'Link outcomes back to the problem.',
    ],
    reading: [
      { title: 'Usability testing 101', url: 'https://www.nngroup.com/articles/usability-testing-101/', source: 'Nielsen Norman Group' },
      { title: 'Measuring success', url: 'https://www.gov.uk/service-manual/measuring-success', source: 'GOV.UK Service Manual' },
    ],
  },

  'constraints-tradeoffs': {
    objectives: [
      'Explain constraints that shaped a project.',
      'Describe trade-offs and why you made them.',
      'Show mature judgement rather than ideal-world design.',
    ],
    explanation: `
<p>Real design always happens within limits: time, budget, technology, regulation, team skills and organisational politics. Showing how you worked within constraints is one of the strongest signals of seniority.</p>
<h3>Common constraints</h3>
<ul>
<li><strong>Time</strong>: a fixed launch date.</li>
<li><strong>Technology</strong>: legacy systems, platform limits, existing components.</li>
<li><strong>Regulation</strong>: legal wording, accessibility law, data protection.</li>
<li><strong>Business</strong>: budget, priorities, stakeholder demands.</li>
<li><strong>Users</strong>: devices, skills, contexts of use.</li>
</ul>
<h3>Describing trade-offs</h3>
<p>For each important decision, explain: the options, what you chose, why, what you gave up and how you reduced the downside. "We could not change the payment provider, so instead of a custom checkout we improved the page before it to set expectations. It reduced surprise, though the provider's page remained clunky."</p>
<h3>Avoid blaming</h3>
<p>Describe constraints neutrally. "Engineering would not let us" sounds like blame; "the API only returned data once a day, so we designed around a daily update" shows problem solving.</p>`,
    why: `
<p>Hiring managers know that perfect designs rarely ship. They want designers who can make smart compromises, communicate them and still improve things for users. Showing trade-offs proves you can operate in real organisations, not just in idealised exercises.</p>`,
    example: `
<p>A case study on an internal HR tool explains: "We wanted to rebuild the leave request form entirely, but the team had three weeks and the back end could not change. We focused on the two fields that caused 80% of errors, adding clearer labels and inline validation. Errors fell, but the outdated layout remained; we documented a full redesign for the next quarter."</p>`,
    walkthrough: [
      { title: 'List constraints', body: 'Write every constraint that shaped the project.' },
      { title: 'Pick key decisions', body: 'Choose two or three decisions shaped by constraints.' },
      { title: 'Describe options', body: 'List what you considered.' },
      { title: 'Explain the choice', body: 'Say what you chose and why.' },
      { title: 'Note the cost', body: 'Say what you gave up and how you reduced the downside.' },
      { title: 'Check tone', body: 'Rewrite anything that sounds like blame.' },
    ],
    mistakes: [
      { mistake: 'Pretending there were no constraints.', fix: 'Describe them honestly.' },
      { mistake: 'Blaming other teams.', fix: 'Describe constraints neutrally and show how you adapted.' },
      { mistake: 'Hiding what was given up.', fix: 'Be clear about the cost of each trade-off.' },
    ],
    quiz: [
      { q: 'Why show constraints?', options: ['To excuse weak work', 'To show judgement in real conditions', 'They are not relevant'], answer: 1, explain: 'Working within limits is a key skill.' },
      { q: 'Which phrasing is best?', options: ['Engineering refused our design', 'The API updated daily, so we designed around that', 'Nobody listened'], answer: 1, explain: 'Neutral, problem-solving framing.' },
      { q: 'What should a trade-off description include?', options: ['Only the final choice', 'Options, choice, reason and cost', 'Who to blame'], answer: 1, explain: 'Show the full reasoning.' },
    ],
    exercise: {
      title: 'Trade-off story',
      minutes: 30,
      brief: '<p>Write up the trade-offs in one project.</p>',
      steps: [
        'List the constraints.',
        'Choose two decisions shaped by them.',
        'Write options, choice, reason and cost for each.',
        'Check the tone is neutral.',
      ],
      deliverable: 'A constraints and trade-offs section.',
    },
    checklist: [
      'Constraints are clear.',
      'Trade-offs include options and reasons.',
      'Costs are acknowledged.',
      'The tone is neutral.',
    ],
    summary: [
      'Real design happens within constraints.',
      'Explain options, choices, reasons and costs.',
      'Describe constraints without blame.',
      'Trade-offs show seniority.',
    ],
    reading: [
      { title: 'Prioritisation matrices', url: 'https://www.nngroup.com/articles/prioritization-matrices/', source: 'Nielsen Norman Group' },
      { title: 'Agile delivery', url: 'https://www.gov.uk/service-manual/agile-delivery', source: 'GOV.UK Service Manual' },
    ],
  },

  'concise-case-studies': {
    objectives: [
      'Edit case studies so they are quick to read.',
      'Use layout and headings to support scanning.',
      'Create short and long versions of a case study.',
    ],
    explanation: `
<p>Reviewers are busy. Many will skim a case study in a minute or two. Concise, scannable case studies are read more and remembered better.</p>
<h3>Editing techniques</h3>
<ul>
<li><strong>Cut process theatre</strong>: remove steps that did not change the outcome.</li>
<li><strong>One idea per section</strong> with a clear heading that states the point ("Residents did not know which items were allowed").</li>
<li><strong>Short paragraphs</strong> and bullet points.</li>
<li><strong>Let visuals carry detail</strong>, with captions that explain them.</li>
<li><strong>Bold key facts</strong> so skimmers catch them.</li>
</ul>
<h3>Layers</h3>
<p>Think in layers: the summary for 30-second readers, headings and captions for 2-minute readers, and full text for those who want detail. Some designers also offer a longer version or a password-protected deep dive.</p>
<h3>Target length</h3>
<p>Aim for something that can be read in five to eight minutes. If it takes longer, cut.</p>`,
    why: `
<p>A brilliant project hidden in a 4,000-word case study may never be noticed. Concise writing respects reviewers' time and shows you can communicate clearly, which is itself a core design skill. Clear structure also makes it easier to present the work in interviews.</p>`,
    example: `
<p>A designer's case study was 3,500 words with headings like "Discovery", "Define" and "Develop". After editing, it is 1,200 words with headings that state insights: "Most drivers renew on their phone in a car park", "A single page beat five steps", "Renewals completed online rose to 78%". A reviewer can understand the project by reading headings alone.</p>`,
    walkthrough: [
      { title: 'Time yourself', body: 'Measure how long it takes to read.' },
      { title: 'Rewrite headings', body: 'Make each heading state a point.' },
      { title: 'Cut process theatre', body: 'Remove steps that did not change anything.' },
      { title: 'Shorten paragraphs', body: 'Split long paragraphs and use bullets.' },
      { title: 'Caption visuals', body: 'Add one-sentence captions.' },
      { title: 'Test skim-reading', body: 'Ask someone to explain the project from headings only.' },
    ],
    mistakes: [
      { mistake: 'Generic process headings.', fix: 'Use headings that state the insight or decision.' },
      { mistake: 'Walls of text.', fix: 'Use short paragraphs, bullets and visuals.' },
      { mistake: 'Including every detail.', fix: 'Keep detail for interviews or a longer version.' },
    ],
    quiz: [
      { q: 'Which heading is better?', options: ['Discovery', 'Most drivers renew on their phone in a car park', 'Phase 1'], answer: 1, explain: 'It states the point.' },
      { q: 'What is a good target reading time?', options: ['30 minutes', 'Five to eight minutes', 'Under 10 seconds'], answer: 1, explain: 'Respect reviewers\' time.' },
      { q: 'What should captions do?', options: ['Repeat the title', 'Explain what the visual shows', 'Nothing'], answer: 1, explain: 'Captions help skimmers.' },
    ],
    exercise: {
      title: 'Edit a case study',
      minutes: 60,
      brief: '<p>Cut a case study to half its length.</p>',
      steps: [
        'Time how long it takes to read now.',
        'Rewrite headings as statements.',
        'Cut process theatre and split paragraphs.',
        'Test skim-reading with someone else.',
      ],
      deliverable: 'An edited case study and before-and-after word counts.',
    },
    checklist: [
      'Headings state points.',
      'Paragraphs are short.',
      'Visuals have captions.',
      'It can be read in under eight minutes.',
    ],
    summary: [
      'Reviewers skim, so write for skimming.',
      'Use statement headings and short paragraphs.',
      'Let captioned visuals carry detail.',
      'Aim for five to eight minutes.',
    ],
    reading: [
      { title: 'Inverted pyramid: writing for comprehension', url: 'https://www.nngroup.com/articles/inverted-pyramid/', source: 'Nielsen Norman Group' },
      { title: 'Writing for GOV.UK', url: 'https://www.gov.uk/guidance/content-design/writing-for-gov-uk', source: 'GOV.UK' },
    ],
  },

  'portfolio-site': {
    objectives: [
      'Choose a platform and structure for a portfolio site.',
      'Design a home page that quickly communicates who you are.',
      'Make the site fast, accessible and easy to update.',
    ],
    explanation: `
<p>Your portfolio site is itself a design project. Reviewers will judge its usability as well as its content.</p>
<h3>Platform</h3>
<p>Options include website builders (quick and easy), portfolio platforms, no-code tools and hand-coded sites. Choose what lets you update content easily. A simple, well-structured site beats an ambitious one that is never finished.</p>
<h3>Structure</h3>
<ul>
<li><strong>Home</strong>: who you are, what you do and links to two to four case studies.</li>
<li><strong>Case studies</strong>: one page each.</li>
<li><strong>About</strong>: background, skills, a photo if you like, and how you work.</li>
<li><strong>Contact</strong>: email and professional profiles; a CV download.</li>
</ul>
<h3>Home page</h3>
<p>In one sentence, say what kind of designer you are: "Product designer focused on public services and accessibility." Show project cards with a clear title, one-line outcome and image.</p>
<h3>Quality</h3>
<p>Check speed, mobile layout, colour contrast, keyboard access and alt text. Use your own name in the domain if possible. Remove broken links and placeholder text.</p>`,
    why: `
<p>For many employers, your site is the first impression of your design skills. A clear, fast and accessible site shows you apply good UX to your own work. A confusing or broken site can undermine even excellent case studies.</p>`,
    example: `
<p>A designer's site opens with a full-screen animation, then a grid of 12 unlabelled thumbnails. Reviewers cannot tell what each project is.</p>
<p>The redesigned site opens with: "I'm Priya, a product designer who makes complex services simple." Below are three cards, each with a title, a one-line outcome ("Cut form errors by 40% for 2 million users") and a clear image. It loads quickly on a phone and passes basic accessibility checks.</p>`,
    walkthrough: [
      { title: 'Choose a platform', body: 'Pick one you can update easily.' },
      { title: 'Plan pages', body: 'Home, case studies, about and contact.' },
      { title: 'Write a positioning line', body: 'Say what kind of designer you are in one sentence.' },
      { title: 'Design project cards', body: 'Add a title, outcome and image.' },
      { title: 'Check quality', body: 'Test speed, mobile, contrast, keyboard and alt text.' },
      { title: 'Get feedback', body: 'Ask someone to find a case study and your contact details.' },
    ],
    mistakes: [
      { mistake: 'Style over usability.', fix: 'Make it fast and easy to navigate.' },
      { mistake: 'Unlabelled thumbnails.', fix: 'Add titles and one-line outcomes.' },
      { mistake: 'An inaccessible portfolio.', fix: 'Check contrast, keyboard and alt text.' },
    ],
    quiz: [
      { q: 'What should the home page communicate first?', options: ['A long biography', 'What kind of designer you are', 'Every project'], answer: 1, explain: 'Positioning first.' },
      { q: 'What should a project card include?', options: ['Only an image', 'A title, one-line outcome and image', 'A full case study'], answer: 1, explain: 'Help reviewers choose.' },
      { q: 'Why check accessibility on your portfolio?', options: ['It is optional', 'It shows you practise good UX', 'It slows the site'], answer: 1, explain: 'Your site is evidence of skill.' },
    ],
    exercise: {
      title: 'Plan your site',
      minutes: 45,
      brief: '<p>Plan or audit your portfolio site.</p>',
      steps: [
        'Write a one-sentence positioning line.',
        'Sketch the home page with project cards.',
        'Run speed, mobile and accessibility checks.',
        'Ask someone to complete two tasks on it.',
      ],
      deliverable: 'A site plan or audit with fixes.',
    },
    checklist: [
      'There is a clear positioning line.',
      'Project cards have titles and outcomes.',
      'The site works on mobile and is accessible.',
      'Contact details are easy to find.',
    ],
    summary: [
      'Your site is a design project.',
      'Keep the structure simple.',
      'Lead with positioning and strong project cards.',
      'Make it fast and accessible.',
    ],
    reading: [
      { title: 'WebAIM contrast checker', url: 'https://webaim.org/resources/contrastchecker/', source: 'WebAIM' },
      { title: 'Easy checks: a first review of web accessibility', url: 'https://www.w3.org/WAI/test-evaluate/preliminary/', source: 'W3C WAI' },
    ],
  },

  'resume-profile': {
    objectives: [
      'Write a design CV that is clear and scannable.',
      'Present experience in terms of impact.',
      'Keep professional profiles consistent with your portfolio.',
    ],
    explanation: `
<p>Your CV and online profiles often come before your portfolio. They need to make someone want to click the link.</p>
<h3>CV basics</h3>
<ul>
<li><strong>One or two pages</strong>, simple layout, readable fonts.</li>
<li><strong>Header</strong>: name, role, location, email and portfolio link.</li>
<li><strong>Summary</strong>: two or three lines on what you do and what you are looking for.</li>
<li><strong>Experience</strong>: role, organisation, dates and two to four bullet points each.</li>
<li><strong>Skills and tools</strong>: concise, relevant lists.</li>
<li><strong>Education and training</strong>.</li>
</ul>
<h3>Impact bullets</h3>
<p>Write bullets as action plus result: "Redesigned the claims form, reducing abandonment from 38% to 21%." Avoid lists of duties ("Responsible for wireframes").</p>
<h3>Applicant tracking systems</h3>
<p>Many employers use software to scan CVs. Keep layouts simple (avoid text inside images and complex columns) and include key words from the job description where they are true.</p>
<h3>Profiles</h3>
<p>Keep professional networking profiles consistent with your CV: the same role title, summary and portfolio link.</p>
<h3>Career changers</h3>
<p>Highlight transferable skills such as research, facilitation, writing or problem solving, with examples.</p>`,
    why: `
<p>A clear CV gets your portfolio opened. Impact-focused bullets show you think about outcomes, which is what design teams want. Consistent profiles make you easier to find and remember, and simple formatting avoids being filtered out by automated systems.</p>`,
    example: `
<p>Before: "UX Designer, Acme Ltd. Responsible for wireframes, prototypes and user testing."</p>
<p>After: "UX Designer, Acme Ltd (2023 to 2025). Led research and design for a new onboarding flow, increasing activation from 31% to 46%. Ran fortnightly usability tests and introduced a shared research repository used by four teams."</p>`,
    walkthrough: [
      { title: 'Set up the header', body: 'Name, role, location, email and portfolio link.' },
      { title: 'Write a summary', body: 'Two or three lines on who you are and what you want.' },
      { title: 'Rewrite bullets', body: 'Turn duties into action plus result.' },
      { title: 'Tailor', body: 'Match true key words from the job description.' },
      { title: 'Simplify layout', body: 'Avoid complex columns and text in images.' },
      { title: 'Align profiles', body: 'Update your online profiles to match.' },
    ],
    mistakes: [
      { mistake: 'Listing duties.', fix: 'Write action plus result bullets.' },
      { mistake: 'Over-designed layouts.', fix: 'Keep it simple and machine-readable.' },
      { mistake: 'No portfolio link.', fix: 'Put it in the header.' },
    ],
    quiz: [
      { q: 'Which bullet is strongest?', options: ['Responsible for wireframes', 'Redesigned the claims form, reducing abandonment from 38% to 21%', 'Used design tools'], answer: 1, explain: 'Action plus result.' },
      { q: 'Why keep CV layouts simple?', options: ['Design does not matter', 'Automated systems may misread complex layouts', 'It is cheaper'], answer: 1, explain: 'Help it pass scanning.' },
      { q: 'What should career changers highlight?', options: ['Nothing', 'Transferable skills with examples', 'Only tools'], answer: 1, explain: 'Show relevant strengths.' },
    ],
    exercise: {
      title: 'Rewrite your CV',
      minutes: 60,
      brief: '<p>Rewrite your CV for a design role.</p>',
      steps: [
        'Update the header and summary.',
        'Rewrite every bullet as action plus result.',
        'Tailor it to one job description.',
        'Update one online profile to match.',
      ],
      deliverable: 'A rewritten CV and updated profile.',
    },
    checklist: [
      'The portfolio link is in the header.',
      'Bullets show impact.',
      'The layout is simple.',
      'Profiles are consistent.',
    ],
    summary: [
      'Your CV should make people open your portfolio.',
      'Write impact bullets.',
      'Keep layouts simple for scanning.',
      'Keep profiles consistent.',
    ],
    reading: [
      { title: 'UX portfolios', url: 'https://www.interaction-design.org/literature/topics/ux-portfolio', source: 'Interaction Design Foundation' },
      { title: 'National Careers Service: CV sections', url: 'https://nationalcareers.service.gov.uk/careers-advice/cv-sections', source: 'National Careers Service' },
    ],
  },

  'presenting-in-interviews': {
    objectives: [
      'Present a case study in an interview within a time limit.',
      'Structure a presentation as a story.',
      'Handle questions confidently.',
    ],
    explanation: `
<p>Many design interviews include a portfolio presentation: usually 30 to 45 minutes to walk through one or two projects, followed by questions.</p>
<h3>Structure</h3>
<ol>
<li><strong>Introduction</strong> (1 to 2 minutes): who you are and what you will show.</li>
<li><strong>Context and problem</strong>: users, problem, your role.</li>
<li><strong>Key moments</strong>: two or three decisions, with evidence.</li>
<li><strong>Solution and outcomes</strong>.</li>
<li><strong>Reflection</strong>: what you learned.</li>
<li><strong>Questions</strong>.</li>
</ol>
<h3>Preparation</h3>
<p>Create slides specifically for presenting (less text than the web case study). Rehearse aloud with a timer. Prepare for likely questions: "What would you do differently?", "How did you handle disagreement?", "What was your specific contribution?"</p>
<h3>Delivery</h3>
<p>Say "I" for your work and "we" for the team's, clearly. Check in with the panel ("Shall I go deeper here or move on?"). If you do not know an answer, say so and explain how you would find out.</p>
<h3>Remote presenting</h3>
<p>Test screen sharing, close notifications and have a backup (a PDF) ready.</p>`,
    why: `
<p>The presentation is often the deciding part of a design interview. It shows how you communicate, how you think on your feet and how you would present work to stakeholders. Good preparation turns nerves into confidence and lets your work speak clearly.</p>`,
    example: `
<p>A candidate has 30 minutes. They spend 2 minutes on introduction, 5 on context, 12 on three key decisions, 5 on the solution and outcomes and 2 on reflection, leaving time for questions. When asked "What was your role versus the researcher's?", they explain clearly which parts they led and which they supported.</p>`,
    walkthrough: [
      { title: 'Choose projects', body: 'Pick one or two that suit the role.' },
      { title: 'Build slides', body: 'Create presentation slides with little text.' },
      { title: 'Plan timing', body: 'Allocate minutes to each section.' },
      { title: 'Rehearse', body: 'Practise aloud with a timer, ideally with a listener.' },
      { title: 'Prepare answers', body: 'Write answers to likely questions.' },
      { title: 'Check set-up', body: 'Test tech and have a PDF backup.' },
    ],
    mistakes: [
      { mistake: 'Running out of time.', fix: 'Rehearse with a timer and plan sections.' },
      { mistake: 'Reading text-heavy slides.', fix: 'Use visual slides and speak to them.' },
      { mistake: 'Unclear contribution.', fix: 'Use "I" and "we" accurately.' },
    ],
    quiz: [
      { q: 'How many key moments should you cover?', options: ['Every step', 'Two or three', 'None'], answer: 1, explain: 'Focus on decisions.' },
      { q: 'What should you do if you do not know an answer?', options: ['Make one up', 'Say so and explain how you would find out', 'Change the subject'], answer: 1, explain: 'Honesty shows maturity.' },
      { q: 'Why say "I" and "we" carefully?', options: ['Grammar', 'To make your contribution clear', 'It does not matter'], answer: 1, explain: 'Panels assess your role.' },
    ],
    exercise: {
      title: 'Rehearse a presentation',
      minutes: 60,
      brief: '<p>Prepare and rehearse a 20-minute case study presentation.</p>',
      steps: [
        'Create a slide outline with timings.',
        'Build simple visual slides.',
        'Rehearse aloud twice with a timer.',
        'Write answers to five likely questions.',
      ],
      deliverable: 'Slides, timings and prepared answers.',
    },
    checklist: [
      'The story has a clear structure.',
      'I rehearsed with a timer.',
      'I prepared for questions.',
      'My contribution is clear.',
    ],
    summary: [
      'Structure the presentation as a story.',
      'Rehearse with a timer.',
      'Prepare for common questions.',
      'Be clear about your contribution.',
    ],
    reading: [
      { title: 'Storytelling in design', url: 'https://www.interaction-design.org/literature/topics/storytelling', source: 'Interaction Design Foundation' },
      { title: 'National Careers Service: interview advice', url: 'https://nationalcareers.service.gov.uk/careers-advice/interview-advice', source: 'National Careers Service' },
    ],
  },
};
