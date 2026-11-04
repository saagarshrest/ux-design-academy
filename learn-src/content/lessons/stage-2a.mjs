// @ts-check
/* Stage 2 (part 1): UX research and problem definition. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'users-and-business-goals': {
    objectives: [
      'Explain why a product has to serve both its users and the business that pays for it.',
      'Separate user needs from business goals and write each down clearly.',
      'Find the overlap where a design decision helps both, and spot where they conflict.',
    ],
    explanation: `
<p>Every product exists for two reasons at once. People use it because it helps them do something they care about. A business builds it because it hopes to earn money, save money, or meet a mission. Good design lives where those two reasons overlap.</p>
<h3>User needs</h3>
<p>A <strong>user need</strong> describes what a person is trying to achieve and what gets in their way. It is written from the person's point of view and does not mention your product: "I need to know my parcel will arrive before I leave for work" rather than "I need a tracking page".</p>
<h3>Business goals</h3>
<p>A <strong>business goal</strong> describes what the organisation wants: more subscribers, fewer support calls, higher order value, more people completing an application on time. Good business goals are measurable and come with a reason ("reduce support calls about delivery by 20% because each call costs £4").</p>
<h3>The overlap</h3>
<p>The strongest design decisions serve both. Clear delivery tracking helps the customer plan their day <em>and</em> reduces support calls. When a goal only serves the business (hiding the cancel button) it usually costs trust later. When a decision only serves users and ignores the business, it rarely gets built or survives.</p>
<p>Designers are often the people in the room who keep the user's side visible. That does not mean opposing the business; it means showing how meeting user needs is usually the most reliable route to the business goal.</p>`,
    why: `
<p>Designers who only talk about users struggle to get their ideas funded. Designers who only talk about business metrics drift into manipulative patterns. Being able to state both, and to show the overlap, is what lets you argue for good design in terms everyone in the team cares about. It also gives you a way to judge your own ideas: if a design helps neither side, cut it.</p>`,
    example: `
<p>A gym chain wants to grow online class bookings. The business goal is clear: increase the share of classes booked through the app from 40% to 60%, because phone bookings tie up front-desk staff.</p>
<p>Interviews with members show a user need the team had not considered: "I want to know if a class is worth going to before I commit an evening to it." Members phoned the desk mainly to ask how busy a class was and whether it suited beginners.</p>
<p>The team adds a short description, a difficulty level and a live "spaces left" count to each class. Members can now decide without calling. Online bookings rise and front-desk calls fall. One change served both needs because the team understood why people phoned in the first place.</p>`,
    walkthrough: [
      { title: 'Collect the business goal', body: 'Ask the product owner what success looks like, how it will be measured, and why it matters now.' },
      { title: 'Collect user needs', body: 'Review existing research, support tickets and reviews. Write needs as "I need to... so that..." statements without mentioning the product.' },
      { title: 'Place them side by side', body: 'Make two columns. Draw lines between needs and goals that support each other.' },
      { title: 'Mark the conflicts', body: 'Highlight goals that would work against a user need, such as adding friction to cancelling.' },
      { title: 'Choose the focus', body: 'Pick one or two overlaps to design for first, and write a sentence explaining how each serves both sides.' },
    ],
    mistakes: [
      { mistake: 'Writing user needs as features ("users need a filter").', fix: 'Describe the outcome the person wants. The filter is one possible solution.' },
      { mistake: 'Treating business goals as the enemy.', fix: 'Learn the reason behind each goal. Most can be met by serving users well.' },
      { mistake: 'Accepting vague goals such as "improve engagement".', fix: 'Ask what behaviour should change, by how much, and how it will be measured.' },
    ],
    quiz: [
      { q: 'Which is a well-written user need?', options: ['Users need a dark mode toggle', 'I need to read my statements late at night without straining my eyes', 'Increase night-time sessions by 10%'], answer: 1, explain: 'It describes the person\'s goal and problem, not a feature or a metric.' },
      { q: 'A stakeholder wants to make cancelling a subscription harder to reduce churn. What is the best response?', options: ['Do it, the business pays for the work', 'Refuse to discuss it', 'Explore why people cancel and propose changes that address those reasons'], answer: 2, explain: 'Understanding the cause usually reduces churn without damaging trust or breaking consumer law.' },
      { q: 'What makes a business goal useful to a designer?', options: ['It is short', 'It is measurable and comes with a reason', 'It mentions the brand'], answer: 1, explain: 'A measurable goal with a reason lets you judge whether a design is helping.' },
    ],
    exercise: {
      title: 'Map needs to goals',
      minutes: 40,
      brief: '<p>Choose a product you use weekly, such as a food delivery or banking app, and map its likely user needs against its likely business goals.</p>',
      steps: [
        'Write five user needs in "I need to... so that..." form.',
        'Write three business goals with a measure and a reason.',
        'Connect needs and goals that support each other.',
        'Mark one conflict and propose a design that respects the user need.',
      ],
      deliverable: 'A one-page map with needs, goals, connections and one proposed design change.',
    },
    checklist: [
      'My user needs do not mention features.',
      'Each business goal has a measure and a reason.',
      'I identified at least one overlap and one conflict.',
      'I can explain in one sentence how my chosen design serves both sides.',
    ],
    summary: [
      'Products have to serve the people who use them and the organisation that builds them.',
      'User needs describe outcomes from the person\'s point of view; business goals describe measurable organisational outcomes.',
      'The best design decisions sit in the overlap.',
      'Goals that only serve the business tend to cost trust over time.',
    ],
    reading: [
      { title: 'Learning about users and their needs', url: 'https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs', source: 'GOV.UK Service Manual' },
      { title: 'UX research cheat sheet', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', source: 'Nielsen Norman Group' },
    ],
  },

  'research-questions': {
    objectives: [
      'Turn a vague project brief into specific research questions.',
      'List the assumptions a team is making and rank them by risk.',
      'Tell the difference between research questions and interview questions.',
    ],
    explanation: `
<p>Research starts with a question, not a method. If you do not know what you are trying to learn, you will collect lots of interesting material and still be unable to make a decision.</p>
<h3>Research questions</h3>
<p>A <strong>research question</strong> states what the team needs to learn to move forward. Good research questions are specific, answerable with evidence, and tied to a decision. "What do people think of our app?" is too broad. "How do first-time customers decide which plan to choose, and where do they hesitate?" is specific and connected to the pricing page the team is about to redesign.</p>
<h3>Research questions are not interview questions</h3>
<p>You rarely ask a research question directly. If your research question is "Why do people abandon their basket?", asking participants "Why did you abandon your basket?" invites guesses and rationalisations. Instead you ask them to describe the last time they bought something online, watch them shop, and look for the moments they hesitate.</p>
<h3>Assumptions</h3>
<p>Every project rests on <strong>assumptions</strong>: beliefs the team treats as true without evidence. "Customers know what a direct debit is." "Most people order on their phone." Writing them down makes them visible. Then rank them: which ones, if wrong, would cause the most damage, and how confident are we? High-risk, low-confidence assumptions become your research priorities.</p>`,
    why: `
<p>Research costs time and participants' goodwill. Clear questions make sure that effort answers what the team actually needs to know. They also make research easier to plan, easier to analyse and easier to report, because every finding can be traced back to a question. Listing assumptions protects the team from building on beliefs nobody checked.</p>`,
    example: `
<p>A council wants to "improve the bin collection page". The designer runs a short workshop and collects assumptions: residents know their collection day; most people visit the page when a collection is missed; residents understand which bin takes which materials.</p>
<p>The team ranks them. The last one is high risk (wrong bins lead to rejected collections and complaints) and low confidence (nobody has checked). It becomes the main research question: "How do residents decide which bin to put an item in, and what do they do when unsure?"</p>
<p>The designer plans short interviews at home, asking residents to sort a bag of typical household items while thinking aloud. The findings lead to a searchable "which bin?" tool rather than a redesigned calendar.</p>`,
    walkthrough: [
      { title: 'Write down the decision', body: 'What will the team decide after the research? Start there.' },
      { title: 'List assumptions', body: 'Ask everyone to write what they believe about users, their behaviour and the context. One belief per note.' },
      { title: 'Rank by risk and confidence', body: 'Plot each assumption on a 2x2: impact if wrong against how much evidence exists.' },
      { title: 'Write 2 to 4 research questions', body: 'Focus on the high-risk, low-evidence corner. Make each specific and answerable.' },
      { title: 'Check each question', body: 'Ask: could evidence answer this? Would the answer change what we do? If not, rewrite or drop it.' },
    ],
    mistakes: [
      { mistake: 'Starting with a method ("let\'s do a survey").', fix: 'Write the question first, then choose the method that can answer it.' },
      { mistake: 'Too many research questions.', fix: 'Keep to two to four per study. More questions mean shallower answers.' },
      { mistake: 'Asking research questions directly to participants.', fix: 'Ask about specific past behaviour and observe tasks instead.' },
    ],
    quiz: [
      { q: 'Which is the strongest research question?', options: ['Do users like our app?', 'How do freelancers decide when to send an invoice, and what delays them?', 'Should we add a dark mode?'], answer: 1, explain: 'It is specific, answerable through evidence and linked to a product area.' },
      { q: 'Which assumptions should research tackle first?', options: ['Low impact, high confidence', 'High impact, low confidence', 'Whichever is easiest to test'], answer: 1, explain: 'Those are the beliefs that would cause the most harm if wrong and that have the least evidence.' },
      { q: 'Why should you avoid asking "Why did you abandon your basket?" directly?', options: ['It is rude', 'People tend to guess or rationalise rather than report what happened', 'It takes too long'], answer: 1, explain: 'Asking about concrete past events and observing behaviour gives more reliable evidence.' },
    ],
    exercise: {
      title: 'Assumption map',
      minutes: 35,
      brief: '<p>Pick a product idea, such as an app that helps flatmates split bills, and map its assumptions.</p>',
      steps: [
        'Write at least 10 assumptions about users, behaviour and context.',
        'Place them on an impact versus evidence 2x2.',
        'Write three research questions for the riskiest corner.',
        'For one question, write three interview prompts that ask about past behaviour.',
      ],
      deliverable: 'The 2x2 map, three research questions and three interview prompts.',
    },
    checklist: [
      'Each research question is tied to a decision.',
      'I listed assumptions before choosing a method.',
      'I ranked assumptions by impact and evidence.',
      'My interview prompts ask about real past behaviour.',
    ],
    summary: [
      'Research starts with questions tied to decisions, not with methods.',
      'Research questions guide the study; they are not what you ask participants.',
      'Listing and ranking assumptions shows where research is most needed.',
      'Keep a study to a few focused questions.',
    ],
    reading: [
      
      { title: 'Plan user research for your service', url: 'https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service', source: 'GOV.UK Service Manual' },
    ],
  },

  'desk-and-competitive-research': {
    objectives: [
      'Use existing sources to learn about a problem before recruiting participants.',
      'Run a structured competitive analysis instead of a screenshot collection.',
      'Record findings so they inform design without copying competitors.',
    ],
    explanation: `
<p><strong>Desk research</strong> (also called secondary research) means learning from what already exists: previous studies, support tickets, app store reviews, analytics, industry reports, forum threads and academic papers. It is cheap, fast and often surprisingly rich.</p>
<h3>Sources worth checking</h3>
<ul>
<li><strong>Inside the organisation:</strong> earlier research, support logs, sales call notes, analytics, search terms people type on the site.</li>
<li><strong>Outside:</strong> reviews of your product and competitors, community forums, government statistics, published research and design case studies.</li>
</ul>
<h3>Competitive analysis</h3>
<p>A <strong>competitive analysis</strong> compares how other products solve the same problem. Include direct competitors (the same kind of product) and indirect ones (other ways people solve the problem, such as a spreadsheet or a phone call). Decide what you are comparing before you start: for example how each product handles sign-up, pricing, and the first useful moment.</p>
<p>The goal is to understand conventions people already know, gaps nobody fills, and patterns that fail. It is not to copy. A competitor's design reflects its own constraints and may not even be working well for it.</p>`,
    why: `
<p>Desk research stops teams repeating work and asking participants questions that are already answered. It sharpens your research questions, so the time you spend with real people goes on what only they can tell you. Competitive analysis helps you respect conventions users already understand and find opportunities to stand out.</p>`,
    example: `
<p>A start-up is designing a plant-care app. Before any interviews, the designer reads 300 reviews of the three most popular plant apps. Common complaints cluster around reminders that ignore the season and plant identification that fails in low light.</p>
<p>The competitive analysis compares five apps (and one indirect competitor: a paper watering calendar sold in garden centres) on four points: onboarding length, how reminders are set, what happens when a plant is unwell, and price. It shows every app asks for an account before showing anything useful.</p>
<p>The designer now has sharper interview questions about seasonal care, and a clear opportunity: let people add their first plant before signing up.</p>`,
    walkthrough: [
      { title: 'Define what you want to learn', body: 'Start from your research questions so desk research stays focused.' },
      { title: 'Check internal sources', body: 'Ask for previous research, support data, analytics and site search logs.' },
      { title: 'Read reviews and forums', body: 'Collect quotes into a spreadsheet and tag each one with a theme.' },
      { title: 'Choose competitors and criteria', body: 'Pick 4 to 6 products, including at least one indirect competitor, and 4 to 6 criteria.' },
      { title: 'Compare in a grid', body: 'Fill a table with observations and screenshots for each criterion.' },
      { title: 'Summarise implications', body: 'Write what this means for your design: conventions to keep, gaps to explore, mistakes to avoid.' },
    ],
    mistakes: [
      { mistake: 'Collecting screenshots without a question.', fix: 'Decide the criteria first and compare products against them.' },
      { mistake: 'Copying the market leader.', fix: 'Ask why a pattern exists and whether it suits your users and constraints.' },
      { mistake: 'Treating reviews as representative.', fix: 'Reviews skew towards strong opinions. Use them to find themes, not to measure how common something is.' },
    ],
    quiz: [
      { q: 'What is an indirect competitor for an expense-tracking app?', options: ['Another expense app', 'A spreadsheet many people use instead', 'A bank'], answer: 1, explain: 'Indirect competitors are other ways people solve the same problem.' },
      { q: 'What should a competitive analysis produce?', options: ['A folder of screenshots', 'Implications for your design: conventions, gaps and patterns to avoid', 'A copy of the best competitor'], answer: 1, explain: 'Analysis is only useful when it leads to decisions.' },
      { q: 'Why do desk research before interviews?', options: ['To avoid talking to users', 'To focus interviews on what only participants can tell you', 'Because it is required'], answer: 1, explain: 'Existing evidence sharpens your questions and saves participants\' time.' },
    ],
    exercise: {
      title: 'Competitive grid',
      minutes: 50,
      brief: '<p>Compare how four apps handle the first five minutes for a new user in one category, such as language learning or budgeting.</p>',
      steps: [
        'Choose three direct competitors and one indirect competitor.',
        'Define five criteria, such as time to first value and account requirements.',
        'Fill a grid with observations and screenshots.',
        'Write three implications for a new product in this space.',
      ],
      deliverable: 'A comparison grid and a short list of design implications.',
    },
    checklist: [
      'I defined criteria before comparing.',
      'I included at least one indirect competitor.',
      'My findings are written as implications, not just observations.',
      'I noted the limits of my sources.',
    ],
    summary: [
      'Desk research uses existing material and is cheap, fast and useful.',
      'Internal sources such as support logs and search terms are often overlooked.',
      'Competitive analysis compares products against chosen criteria.',
      'Learn from competitors; do not copy them.',
    ],
    reading: [
      { title: 'Competitive usability evaluations', url: 'https://www.nngroup.com/articles/competitive-usability-evaluations/', source: 'Nielsen Norman Group' },
      { title: 'Secondary research in UX', url: 'https://www.nngroup.com/articles/secondary-research-in-ux/', source: 'Nielsen Norman Group' },
    ],
  },

  'user-interviews': {
    objectives: [
      'Plan, run and record a user interview ethically.',
      'Write an interview guide that asks about past behaviour rather than opinions.',
      'Use neutral follow-up questions to get deeper, more reliable answers.',
      'Explain informed consent and how to handle participant data.',
    ],
    explanation: `
<p>A <strong>user interview</strong> is a one-to-one conversation to understand someone's experiences, goals and context. It is the most common qualitative research method, and one of the easiest to do badly.</p>
<h3>Ask about the past, not the future</h3>
<p>People are poor at predicting what they will do and good at describing what they did. "Would you use a feature that...?" produces polite yeses. "Tell me about the last time you planned a trip with friends" produces a story full of real detail, workarounds and frustrations.</p>
<h3>The interview guide</h3>
<p>An <strong>interview guide</strong> lists the topics and opening questions you want to cover. It is a guide, not a script: follow interesting threads. A common shape is a warm-up, a few open story prompts, deeper probing on key moments, and a wrap-up.</p>
<h3>Follow-up questions</h3>
<p>The best insights come from follow-ups: "What happened next?", "How did you decide?", "Can you show me?", "You said it was annoying. What made it annoying?" Avoid leading questions ("Wasn't that frustrating?") and do not explain or defend your product. Silence is useful: wait a few seconds after an answer and people often add the important part.</p>
<h3>Ethics and consent</h3>
<p>Participants must know what the research is for, how it will be recorded, who will see it, and that they can stop at any time without consequence. Get consent before recording, store notes securely, remove names from what you share, and delete recordings when you no longer need them. Pay people fairly for their time. Take extra care with vulnerable people and sensitive topics.</p>`,
    why: `
<p>Interviews reveal the context behind behaviour: the reasons, workarounds and constraints that analytics cannot show. A handful of good interviews can change the direction of a project. Done badly, with leading questions and opinions about hypothetical features, they produce false confidence. Ethical practice protects participants and the credibility of your work.</p>`,
    example: `
<p>A designer researching a shared-calendar app for families plans six interviews of 45 minutes. The guide opens with "Walk me through how your family planned last weekend." One parent describes a whiteboard in the kitchen, a group chat and a paper diary, each used for different things.</p>
<p>The designer follows up: "Why does the dentist appointment go on the whiteboard but not in the chat?" The answer, "Because the kids can see the whiteboard and the chat gets buried", reveals a need for visibility to people without phones. That insight would never have come from "Would you use a shared calendar?"</p>
<p>Each participant signs a plain-language consent form, receives a voucher, and is told recordings will be deleted after analysis.</p>`,
    walkthrough: [
      { title: 'Recruit the right people', body: 'Write criteria based on behaviour (planned a family event in the last month), not just demographics.' },
      { title: 'Write the guide', body: 'Warm-up, two or three story prompts, probes for key moments, and a wrap-up question such as "Is there anything I should have asked?"' },
      { title: 'Get consent', body: 'Explain purpose, recording, data use and the right to stop. Confirm consent before you start recording.' },
      { title: 'Run the interview', body: 'Listen far more than you speak. Ask for stories and examples. Use neutral follow-ups and pauses.' },
      { title: 'Write notes immediately', body: 'Within an hour, note key quotes, behaviours and surprises while memory is fresh.' },
      { title: 'Handle data responsibly', body: 'Anonymise notes, store files securely and delete recordings when analysis is done.' },
    ],
    mistakes: [
      { mistake: 'Asking "Would you use...?"', fix: 'Ask about the last time they faced the problem and what they actually did.' },
      { mistake: 'Leading questions such as "Wasn\'t that confusing?"', fix: 'Ask "How was that for you?" and let them choose the words.' },
      { mistake: 'Defending or explaining the product.', fix: 'Stay curious. If they misunderstand something, that is a finding.' },
      { mistake: 'Recording without clear consent.', fix: 'Explain and get consent first, every time, and honour requests to stop.' },
    ],
    quiz: [
      { q: 'Which interview prompt is most likely to give reliable insight?', options: ['Would you pay for this app?', 'Tell me about the last time you split a bill with friends.', 'Don\'t you hate splitting bills?'], answer: 1, explain: 'Asking about a specific past event gives real detail rather than predictions or agreement.' },
      { q: 'A participant says the process was "a pain". What is a good follow-up?', options: ['So you would like it to be faster?', 'What made it a pain?', 'Many people say that.'], answer: 1, explain: 'A neutral, open follow-up lets the participant explain in their own words.' },
      { q: 'What must participants know before you record?', options: ['Only the session length', 'The purpose, how it is recorded and used, and that they can stop', 'Nothing, consent can come later'], answer: 1, explain: 'Informed consent covers purpose, recording, data use and the right to withdraw.' },
    ],
    exercise: {
      title: 'Run two practice interviews',
      minutes: 90,
      brief: '<p>Interview two people about how they plan their weekly food shopping.</p>',
      steps: [
        'Write a guide with a warm-up, two story prompts and a list of follow-ups.',
        'Prepare a short consent statement.',
        'Run two 20-minute interviews, recording only with consent.',
        'Write up the five most interesting behaviours and one thing you would ask differently next time.',
      ],
      deliverable: 'Interview guide, consent statement, anonymised notes and a reflection on your technique.',
    },
    assignment: {
      title: 'Interview study plan',
      brief: '<p>Plan a small interview study (five participants) for a problem of your choice.</p>',
      deliverables: ['Research questions', 'Recruitment criteria based on behaviour', 'Interview guide', 'Consent form', 'Data handling plan'],
    },
    checklist: [
      'My prompts ask about specific past experiences.',
      'I avoided leading questions.',
      'I obtained informed consent before recording.',
      'My notes are anonymised and stored securely.',
    ],
    summary: [
      'Interviews reveal context, reasons and workarounds behind behaviour.',
      'Ask about real past events, not hypothetical futures.',
      'Neutral follow-ups and silence produce the deepest insights.',
      'Informed consent, fair payment and careful data handling are non-negotiable.',
    ],
    reading: [
      { title: 'User interviews 101', url: 'https://www.nngroup.com/articles/user-interviews/', source: 'Nielsen Norman Group' },
      { title: 'Getting informed consent for user research', url: 'https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research', source: 'GOV.UK Service Manual' },
    ],
  },

  'surveys': {
    objectives: [
      'Decide when a survey is the right method and when it is not.',
      'Write clear, unbiased survey questions.',
      'Recognise sampling bias and interpret survey results with care.',
    ],
    explanation: `
<p>A <strong>survey</strong> asks many people the same set of questions. Surveys are good at measuring <em>how many</em> and <em>how much</em>: how many customers use a feature, how satisfied people are, which of five problems is most common. They are poor at explaining <em>why</em>.</p>
<h3>When surveys help</h3>
<ul>
<li>Measuring how common something is that you already understand from interviews.</li>
<li>Tracking satisfaction or a metric over time.</li>
<li>Reaching many people quickly, or people in many places.</li>
</ul>
<h3>When they do not</h3>
<p>Surveys cannot follow up. If you do not yet know which problems exist, your answer options will reflect your own guesses. Use interviews first to discover; use surveys later to measure.</p>
<h3>Writing good questions</h3>
<ul>
<li>Ask one thing per question. "How easy and fast was checkout?" mixes two.</li>
<li>Use neutral wording. "How much did you enjoy..." assumes enjoyment.</li>
<li>Offer balanced scales and an "I don't know" or "Not applicable" option.</li>
<li>Prefer behaviour ("How many times did you order last month?") to prediction ("Would you order more if...").</li>
<li>Keep it short. Every extra question lowers completion.</li>
</ul>
<h3>Sampling bias</h3>
<p>Who answers matters as much as what they say. A pop-up survey on your site reaches existing users, not people who left. Very happy and very unhappy people are more likely to respond. Always report who responded and how many.</p>`,
    why: `
<p>Surveys are easy to send and easy to get wrong. A badly worded question or a biased sample can produce confident numbers that point the team in the wrong direction. Knowing what surveys can and cannot do lets you use them to size problems and track change, while leaving the "why" to methods that can answer it.</p>`,
    example: `
<p>After eight interviews, a library app team has found four reasons people stop renewing loans online. They do not know which matters most.</p>
<p>They send a short survey to members: one question about how they renewed their last loan, one ranking the four problems (plus "Something else" with a text box), and two demographic questions. They receive 1,240 responses and note that 70% came from people who visit the library weekly, so occasional users are under-represented.</p>
<p>The ranking shows "I didn't know my loan was due" leads by a wide margin. The team prioritises reminders, while running a few extra interviews with occasional users to check whether their picture differs.</p>`,
    walkthrough: [
      { title: 'Check it is the right method', body: 'Do you already understand the problem well enough to write good answer options? If not, interview first.' },
      { title: 'Write the goal', body: 'State what you want to measure and what decision it will inform.' },
      { title: 'Draft few questions', body: 'Aim for under ten. Cut anything that will not change a decision.' },
      { title: 'Review for bias', body: 'Check each question for double meanings, leading words and missing options.' },
      { title: 'Pilot it', body: 'Ask three people to complete it while talking aloud. Fix anything they misread.' },
      { title: 'Report with context', body: 'State the sample size, who responded, how they were reached and what that means for the results.' },
    ],
    mistakes: [
      { mistake: 'Using a survey to find out why people behave a certain way.', fix: 'Use interviews or observation to understand reasons, then surveys to measure them.' },
      { mistake: 'Double-barrelled questions.', fix: 'Split them into separate questions.' },
      { mistake: 'Reporting percentages without the sample.', fix: 'Always state how many people responded and who they were.' },
    ],
    quiz: [
      { q: 'What are surveys best at?', options: ['Explaining why people behave as they do', 'Measuring how common something is', 'Testing whether people can use a prototype'], answer: 1, explain: 'Surveys measure scale; they cannot ask follow-up questions.' },
      { q: 'What is wrong with "How quick and easy was it to find a product?"', options: ['Nothing', 'It asks about two things at once', 'It is too short'], answer: 1, explain: 'Speed and ease are separate; one answer cannot cover both.' },
      { q: 'A website pop-up survey shows 90% satisfaction. What should you be cautious about?', options: ['It only reaches people still using the site', 'Pop-ups are always accurate', 'The number is too high to be possible'], answer: 0, explain: 'People who left are not in the sample, so the result is likely too positive.' },
    ],
    exercise: {
      title: 'Rewrite a bad survey',
      minutes: 30,
      brief: '<p>Find a real survey you have received, or write a deliberately flawed one about a commuting app, and fix it.</p>',
      steps: [
        'Identify every leading, double-barrelled or unclear question.',
        'Rewrite each with neutral wording and balanced options.',
        'Cut questions that would not change a decision.',
        'Write a note on who the survey would reach and who it would miss.',
      ],
      deliverable: 'Before and after versions of the survey and a short note on sampling bias.',
    },
    checklist: [
      'I only used a survey to measure something I already understand.',
      'Each question asks one thing in neutral language.',
      'I piloted the survey before sending it.',
      'I reported the sample alongside the results.',
    ],
    summary: [
      'Surveys measure how many and how much; they cannot explain why.',
      'Discover with interviews first, then measure with surveys.',
      'Write neutral, single-topic questions with balanced options.',
      'Sampling bias can make results misleading; always report who answered.',
    ],
    reading: [
      { title: '28 tips for creating great qualitative surveys', url: 'https://www.nngroup.com/articles/qualitative-surveys/', source: 'Nielsen Norman Group' },
      { title: 'Survey best practices', url: 'https://www.nngroup.com/articles/survey-best-practices/', source: 'Nielsen Norman Group' },
    ],
  },

  'qual-vs-quant': {
    objectives: [
      'Explain the difference between qualitative and quantitative research.',
      'Choose the right kind of evidence for a given question.',
      'Combine both kinds of evidence to make stronger decisions.',
    ],
    explanation: `
<p>Research produces two broad kinds of evidence.</p>
<p><strong>Qualitative</strong> research collects observations, words and stories from a small number of people. Interviews, usability tests and diary studies are qualitative. It answers <em>why</em> and <em>how</em>: why people abandon a form, how they think about their savings.</p>
<p><strong>Quantitative</strong> research collects numbers from a larger number of people or events. Analytics, surveys with closed questions, A/B tests and benchmark studies are quantitative. It answers <em>how many</em>, <em>how often</em> and <em>how much</em>: what share of visitors abandon the form, and at which field.</p>
<h3>Different strengths</h3>
<p>Qualitative research is rich but not statistically representative; five participants cannot tell you that 40% of all users have a problem. Quantitative research is measurable but thin; analytics can show that people leave a page but not what they were thinking.</p>
<h3>Using both</h3>
<p>The two work best together. Numbers point to where something is happening; qualitative research explains it; numbers then confirm whether the fix worked. This is sometimes called <strong>triangulation</strong>: looking at a question from more than one angle so you can trust the answer.</p>`,
    why: `
<p>Teams often trust whichever kind of evidence they are used to: engineers may favour dashboards, designers may favour quotes. Each alone can mislead. Knowing what each kind of evidence can and cannot show helps you pick methods sensibly, interpret findings honestly and persuade people who prefer the other kind.</p>`,
    example: `
<p>Analytics for a pet insurance site show that 58% of people who start a quote leave on the "pet details" step. That is quantitative: it tells the team where.</p>
<p>The designer runs five usability sessions and watches people reach that step. Three hesitate at "Breed", because their dog is a cross-breed and the list has no clear option. Two are unsure whether "Pre-existing conditions" includes a past ear infection. That is qualitative: it tells the team why.</p>
<p>The team adds a "Mixed or cross breed" option and a short example under the conditions question. A month later, abandonment on that step falls to 41%. The numbers confirm the change helped.</p>`,
    walkthrough: [
      { title: 'Write the question', body: 'Is it about why or how (qualitative), or how many and how much (quantitative)?' },
      { title: 'Check existing data', body: 'Look at analytics or past research before running anything new.' },
      { title: 'Choose a method', body: 'Pick the method that can answer the question with the time and access you have.' },
      { title: 'Plan the follow-up', body: 'Decide how you will check the finding from the other angle.' },
      { title: 'Report limits', body: 'State sample sizes and what the evidence cannot show.' },
    ],
    mistakes: [
      { mistake: 'Turning five interviews into percentages ("60% of users...").', fix: 'Report qualitative findings as patterns: "three of five participants...". Avoid implying statistical weight.' },
      { mistake: 'Assuming analytics explain behaviour.', fix: 'Use analytics to locate a problem, then observe or talk to people to understand it.' },
      { mistake: 'Dismissing small studies as unscientific.', fix: 'Small qualitative studies are designed to find problems and reasons, not to measure prevalence.' },
    ],
    quiz: [
      { q: 'Which question needs quantitative evidence?', options: ['Why do people skip the tutorial?', 'What share of new users skip the tutorial?', 'How do people describe the tutorial?'], answer: 1, explain: 'A share is a measurement across many users.' },
      { q: 'Analytics show many people leave a page. What should you do next?', options: ['Redesign the page immediately', 'Watch or talk to people using that page to learn why', 'Remove the page'], answer: 1, explain: 'Numbers show where; qualitative research shows why.' },
      { q: 'What does triangulation mean in research?', options: ['Using three researchers', 'Checking a question from more than one angle or method', 'Testing on three devices'], answer: 1, explain: 'Combining sources makes a conclusion more trustworthy.' },
    ],
    exercise: {
      title: 'Plan a mixed-method study',
      minutes: 30,
      brief: '<p>A recipe app sees many people save recipes but few cook them. Plan research to understand and measure this.</p>',
      steps: [
        'Write one qualitative and one quantitative research question.',
        'Choose a method for each and explain why.',
        'Describe how the results of one will inform the other.',
        'Note the main limit of each method.',
      ],
      deliverable: 'A one-page research plan combining both kinds of evidence.',
    },
    checklist: [
      'I can say whether a question is about why or how many.',
      'I chose methods to match my questions.',
      'I did not present small-sample findings as percentages.',
      'My plan uses one kind of evidence to check the other.',
    ],
    summary: [
      'Qualitative research explains why and how, with depth from few people.',
      'Quantitative research measures how many and how much, with breadth.',
      'Each has blind spots; together they are much stronger.',
      'Report evidence honestly, including sample sizes and limits.',
    ],
    reading: [
      { title: 'Quantitative vs. qualitative usability testing', url: 'https://www.nngroup.com/articles/quant-vs-qual/', source: 'Nielsen Norman Group' },
      { title: 'When to use which user-experience research methods', url: 'https://www.nngroup.com/articles/which-ux-research-methods/', source: 'Nielsen Norman Group' },
    ],
  },

  'affinity-mapping': {
    objectives: [
      'Prepare raw research notes for analysis.',
      'Group observations into themes using affinity mapping.',
      'Turn themes into insights that explain behaviour and suggest action.',
    ],
    explanation: `
<p>After interviews or tests you have pages of notes. <strong>Affinity mapping</strong> is a simple way to make sense of them: write each observation on its own note, then group notes that seem related until patterns appear. It is a practical form of <strong>thematic analysis</strong>.</p>
<h3>Observations first</h3>
<p>Each note holds one observation: something a participant said or did, with an ID so you can trace it back ("P3: keeps a paper list of passwords"). Avoid writing interpretations at this stage. "P3 is disorganised" is a judgement; "P3 keeps passwords on paper" is an observation.</p>
<h3>Grouping</h3>
<p>Move notes into clusters without deciding the categories in advance. Let the groups emerge from the data. When a cluster feels coherent, give it a label that says what it means, written as a sentence: "People don't trust themselves to remember passwords" is more useful than "Passwords".</p>
<h3>From themes to insights</h3>
<p>A <strong>theme</strong> describes a pattern. An <strong>insight</strong> explains it and points somewhere: "People keep passwords on paper because they fear being locked out more than being hacked. Recovery feels harder than the risk." Good insights are grounded in evidence from several participants, surprising enough to be worth saying, and clear about what they imply for design.</p>`,
    why: `
<p>Without structured analysis, teams remember the most vivid quote and forget the pattern. Affinity mapping keeps findings tied to evidence, makes analysis visible to the whole team, and turns scattered notes into a small number of insights people can act on. Doing it together also builds shared understanding, which makes findings easier to accept.</p>`,
    example: `
<p>A team researching a hospital appointment app has notes from eight interviews: about 200 observations. They write each on a digital sticky note, tagged with the participant number.</p>
<p>Over an hour, clusters form. One holds notes about patients asking relatives to read letters; another about missing appointments because letters arrived late; another about phoning to confirm even after receiving a text. The team labels them, then notices the bigger pattern: patients don't trust any single channel, so they double-check everything.</p>
<p>The insight, "Patients phone to confirm because no single message feels official enough to rely on", leads the team to make the app the single source of truth and to say so explicitly in every reminder.</p>`,
    walkthrough: [
      { title: 'Extract observations', body: 'Go through each session and write one observation per note, with a participant ID.' },
      { title: 'Spread them out', body: 'Put every note on a wall or digital board in no particular order.' },
      { title: 'Cluster silently', body: 'Move related notes together. Working without talking at first avoids one voice dominating.' },
      { title: 'Label clusters', body: 'Write a sentence describing what each cluster means.' },
      { title: 'Look for higher-level patterns', body: 'Group clusters into larger themes and look for relationships between them.' },
      { title: 'Write insights', body: 'For each main theme, write why it happens and what it implies, and list the supporting evidence.' },
    ],
    mistakes: [
      { mistake: 'Writing interpretations instead of observations on notes.', fix: 'Record what was said or done. Interpret during clustering.' },
      { mistake: 'Deciding categories before grouping.', fix: 'Let clusters emerge from the data so you can find what you did not expect.' },
      { mistake: 'One-word cluster labels.', fix: 'Label clusters with a sentence that states the meaning.' },
      { mistake: 'Insights supported by one participant.', fix: 'Check how many participants each insight rests on and say so.' },
    ],
    quiz: [
      { q: 'Which is an observation rather than an interpretation?', options: ['P2 is confused by technology', 'P2 asked her son to set up the app', 'P2 doesn\'t care about privacy'], answer: 1, explain: 'It records what happened without judging the person.' },
      { q: 'Why label clusters with sentences?', options: ['They look better', 'They state what the pattern means, not just its topic', 'Tools require it'], answer: 1, explain: '"People avoid calling the bank" says more than "Phone".' },
      { q: 'What turns a theme into an insight?', options: ['Adding a quote', 'Explaining why the pattern happens and what it implies', 'Making it shorter'], answer: 1, explain: 'An insight explains the pattern and points toward action.' },
    ],
    exercise: {
      title: 'Affinity map from sample notes',
      minutes: 60,
      brief: '<p>Use notes from your own practice interviews, or write 40 realistic observations about how people choose a takeaway on a Friday night.</p>',
      steps: [
        'Write one observation per note with a participant ID.',
        'Cluster them without predefined categories.',
        'Label each cluster with a sentence.',
        'Write three insights, each with its supporting evidence and a design implication.',
      ],
      deliverable: 'A photo or export of the map and three written insights.',
    },
    checklist: [
      'Each note is a single observation with a source.',
      'Clusters emerged from the data.',
      'Cluster labels are sentences.',
      'Each insight cites evidence from several participants.',
    ],
    summary: [
      'Affinity mapping groups observations into themes.',
      'Start with observations, not interpretations.',
      'Let categories emerge and label them with meaning.',
      'Insights explain why a pattern happens and what to do about it.',
    ],
    reading: [
      { title: 'Affinity diagramming', url: 'https://www.nngroup.com/articles/affinity-diagram/', source: 'Nielsen Norman Group' },
      { title: 'How to do a thematic analysis of user interviews', url: 'https://www.nngroup.com/articles/thematic-analysis/', source: 'Nielsen Norman Group' },
    ],
  },
};
