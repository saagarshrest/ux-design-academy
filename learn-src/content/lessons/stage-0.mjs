// @ts-check
/* Stage 0: Orientation and design foundations. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'what-is-ui-and-ux': {
    objectives: [
      'Define user interface (UI) design and user experience (UX) design in plain language.',
      'Explain why a product can have a beautiful UI and a poor UX, or the other way round.',
      'Identify UI and UX decisions in a product you use every day.',
    ],
    explanation: `
<p><strong>User interface (UI) design</strong> is the design of the parts of a product that people see, hear and touch: screens, buttons, text, icons, colours, layout and the way those elements respond when someone uses them. If you can point at it on a screen, it is part of the UI.</p>
<p><strong>User experience (UX) design</strong> is the design of the whole experience a person has while trying to get something done with a product. That includes the UI, but also the steps a task takes, the order of those steps, the words used, how long things take, what happens when something goes wrong, and even what happens away from the screen, such as an email receipt or a phone call to support.</p>
<p>A useful way to hold the difference: <em>UI is what the product looks like and how its controls behave. UX is whether the person achieved what they came to do, and how it felt to get there.</em></p>
<p>The two are not opposites and they are not separate jobs on most teams. UI is one of the most visible tools a designer uses to shape the experience. A designer who changes the order of a checkout, removes an unnecessary form field and rewrites an error message is doing UX work. A designer who makes the "Pay" button clearly the most important thing on the screen is doing UI work in service of the same experience.</p>
<h3>Why the terms get confused</h3>
<p>Job adverts often say "UI/UX designer" as if it were one word, and many people use "UX" to mean "the design of an app". That is fine in conversation. What matters for your learning is to notice the different questions each one asks:</p>
<ul>
<li>UI questions: Is this readable? Does this look tappable? Is the most important action obvious? Is it consistent with the rest of the product?</li>
<li>UX questions: Who is this for? What are they trying to do? What gets in their way? How many steps does it take? What happens if they make a mistake? Did they succeed?</li>
</ul>`,
    why: `
<p>Teams waste a lot of effort polishing screens that solve the wrong problem. Knowing the difference helps you ask the right question at the right time. Early in a project, the useful questions are almost all UX questions: who, what, why and in what order. Later, UI questions matter a great deal, because an unclear button or unreadable text can break an otherwise good flow.</p>
<p>It also helps you describe your skills honestly. A portfolio of attractive screens shows UI skill. A case study that explains how you found a problem, shaped a solution and checked that it worked shows UX skill. Most employers want to see both.</p>`,
    example: `
<p>Imagine a city bus ticket app. A commuter called Mina needs to buy a single ticket while walking to the bus stop.</p>
<ul>
<li><strong>A UI problem:</strong> the "Buy ticket" button is light grey on white, so in bright sunshine Mina cannot tell it is a button. The fix is a UI fix: stronger contrast and a clearer button style.</li>
<li><strong>A UX problem:</strong> the app asks Mina to create an account, confirm her email and add a card before she can buy anything. The bus arrives while she is still typing. The screens might be beautiful, but the experience fails. The fix is a UX fix: allow guest purchase with a saved payment method from the phone's wallet, and offer an account afterwards.</li>
<li><strong>A problem that is both:</strong> after paying, the ticket appears as small text in a list of past orders. The driver needs to see it quickly. The experience needs a "show ticket" step at the right moment (UX), and the ticket needs to be large, high-contrast and recognisable at a glance (UI).</li>
</ul>`,
    figure: {
      html: `
<div class="fx-journey" role="img" aria-label="Diagram of a bus ticket journey with six steps. All six steps are part of the user experience. Only the three steps that happen on a screen involve the user interface.">
  <div class="fx-journey__band"><span>UX: the whole journey</span></div>
  <ol class="fx-journey__steps">
    <li><b>Decide to take the bus</b><small>Off screen</small></li>
    <li class="is-ui"><b>Open the app and find the route</b><small>Screen</small></li>
    <li class="is-ui"><b>Choose and pay for a ticket</b><small>Screen</small></li>
    <li><b>Walk to the stop</b><small>Off screen</small></li>
    <li class="is-ui"><b>Show the ticket to the driver</b><small>Screen</small></li>
    <li><b>Ask for a refund if the bus is cancelled</b><small>Email, phone</small></li>
  </ol>
  <p class="fx-journey__key"><span class="fx-key fx-key--ui"></span> UI is involved &nbsp; <span class="fx-key"></span> Experience without a screen</p>
</div>`,
      caption: 'UX covers every step of the journey. UI is the part that happens on a screen, so it is one of several tools for shaping the experience.',
    },
    walkthrough: [
      { title: 'Pick a product you used today', body: 'Choose something ordinary: a banking app, a food delivery app, a government website. Ordinary products teach more than famous ones because you already know where they annoy you.' },
      { title: 'Write the goal in one sentence', body: 'For example, "Pay my electricity bill before the due date." The goal is the person\'s, not the product\'s. "Use the payments feature" is not a goal.' },
      { title: 'List the steps you took', body: 'Include steps off the screen: finding the bill, looking up an account number, waiting for a confirmation email. Number them.' },
      { title: 'Mark each frustration as UI or UX', body: 'Next to each step, note anything that slowed you down. Label it UI if it was about how something looked or behaved on screen, UX if it was about the steps, order, wording or missing help. Some will be both.' },
      { title: 'Suggest one fix for each', body: 'Keep it short. "Make the due date bigger" is a UI fix. "Show the amount due on the home screen so I do not need to open the bill" is a UX fix.' },
    ],
    mistakes: [
      { mistake: 'Thinking UX means wireframes and UI means colours.', fix: 'Both are about outcomes for people. Wireframes and colours are just artefacts. Ask what question each artefact answers.' },
      { mistake: 'Judging a product only by screenshots.', fix: 'Screenshots show UI. To judge UX you need to know the goal and try the task, ideally watching someone else do it.' },
      { mistake: 'Treating UX as an extra phase before "real" design.', fix: 'UX thinking continues through the whole project, including after launch, when you learn how people actually use what you built.' },
    ],
    quiz: [
      { q: 'A sign-up form has clear labels and good contrast, but asks for 14 pieces of information before the user can see the product. What is the main problem?', options: ['A UI problem with the form styling', 'A UX problem with the steps and what is asked for', 'There is no problem because the form is readable'], answer: 1, explain: 'The visuals are fine. The experience asks for too much, too early, which is a UX decision about the flow and content.' },
      { q: 'Which of these is a UI decision?', options: ['Letting people check out as a guest', 'Making the primary button visually stronger than the secondary one', 'Sending a receipt by email'], answer: 1, explain: 'Button styling and emphasis are part of the interface. Guest checkout and receipts shape the wider experience.' },
      { q: 'Can a product have a great UI and a poor UX?', options: ['No, a good UI always creates a good UX', 'Yes, a polished interface can still make a task slow, confusing or impossible', 'Only on mobile apps'], answer: 1, explain: 'Beautiful screens can sit inside a flow that does not match what people need. The bus ticket example shows this.' },
    ],
    exercise: {
      title: 'UI or UX? Audit one everyday task',
      minutes: 30,
      brief: '<p>Use the walkthrough above on one product you used this week. Work on paper or in a document; no design tool is needed.</p>',
      steps: [
        'Write the goal in one sentence from the user\'s point of view.',
        'List every step, including steps that happen off screen.',
        'Mark at least five frustrations or moments of hesitation, labelled UI, UX or both.',
        'Write one specific, realistic fix for each.',
        'Choose the single fix you think would help most and explain why in two sentences.',
      ],
      deliverable: 'A one-page audit: goal, numbered steps, labelled frustrations, fixes, and your top recommendation.',
    },
    checklist: [
      'My goal sentence describes what the person wants, not what the product offers.',
      'I included at least one step that happens away from the screen.',
      'Each frustration is labelled UI, UX or both, with a reason.',
      'My fixes are specific enough that someone else could design them.',
      'I explained why my top recommendation matters most.',
    ],
    summary: [
      'UI is what people see and interact with. UX is the whole experience of trying to get something done.',
      'UI is one of the main tools for shaping UX, so the two overlap heavily.',
      'Early project questions are mostly UX questions; UI quality becomes critical as the design takes shape.',
      'You judge UI by looking. You judge UX by trying the task and watching others try it.',
    ],
    reading: [
      { title: 'The Definition of User Experience (UX)', url: 'https://www.nngroup.com/articles/definition-user-experience/', source: 'Nielsen Norman Group', note: 'A short, widely cited definition from Don Norman and Jakob Nielsen.' },
      { title: 'Design in government: the Service Manual', url: 'https://www.gov.uk/service-manual/design', source: 'GOV.UK Service Manual', note: 'How a large public organisation thinks about designing whole services, not only screens.' },
    ],
  },

  'design-disciplines': {
    objectives: [
      'Describe UI, UX, product, interaction and visual design and how they overlap.',
      'Read a job advert and work out which skills it is really asking for.',
      'Choose which discipline to focus on first, based on what you enjoy.',
    ],
    explanation: `
<p>Design job titles are messy. The same work can be called different things at different companies, and the same title can mean different work. Instead of memorising titles, learn the <em>kinds of work</em>. Most titles are a mix of these five.</p>
<dl class="la-dl">
<dt>Visual design</dt><dd>Typography, colour, layout, imagery and brand expression. The question is: does this communicate clearly and look like it belongs to this brand? Visual designers often work across marketing, print and product.</dd>
<dt>UI design</dt><dd>Visual design applied to interactive products: screens, components, states and the details of how controls look and respond. The question is: can people see what to do and do it confidently?</dd>
<dt>Interaction design</dt><dd>How a product behaves over time: what happens when you tap, drag, wait or make a mistake; transitions; feedback; the logic of flows. The question is: does the product respond in ways people expect and understand?</dd>
<dt>UX design</dt><dd>The overall experience of reaching a goal: research, structure, flows, content and testing. The question is: does this solve the right problem in a way that works for the people who have it?</dd>
<dt>Product design</dt><dd>UX, UI and interaction design combined with product thinking: business goals, metrics, prioritisation and close work with engineering. The question is: is this the right thing to build, and is it working once shipped?</dd>
</dl>
<p>Specialist roles also exist: UX researcher, content designer or UX writer, service designer, design systems designer, accessibility specialist, motion designer. Many of them appear as optional paths later in this academy.</p>`,
    why: `
<p>Knowing the disciplines lets you read the market honestly. A "UI/UX designer" advert at a small agency usually wants strong visual and UI skills and fast delivery. A "product designer" advert at a software company usually wants evidence that you can frame problems, work with metrics and collaborate with engineers. The portfolio that suits one may not suit the other.</p>
<p>It also protects you from trying to master everything at once. Every designer has a "T shape": broad awareness of all five areas and depth in one or two.</p>`,
    example: `
<p>Here is a fictional advert, written to look like many real ones:</p>
<blockquote><p><strong>Junior Product Designer.</strong> You will design new features for our appointment booking app, from discovery through to delivery. You will run lightweight research with customers, create flows and prototypes, contribute to our design system, and work daily with engineers and our product manager. You care about details and accessibility.</p></blockquote>
<p>Reading it by discipline: "discovery", "research with customers" and "flows" are UX. "Prototypes" and "details" are interaction and UI. "Design system" is UI and systems work. "Work daily with engineers and our product manager" is product design. There is almost nothing here about brand or illustration, so a portfolio of posters would miss the point, while a single well-explained booking-flow case study would hit it.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 640 300" role="img" aria-labelledby="fx-disc-t">
  <title id="fx-disc-t">Overlapping areas: visual design and interaction design overlap to form UI design. UX design surrounds UI design, and product design surrounds UX design.</title>
  <rect x="10" y="10" width="620" height="280" rx="18" class="fx-fill-1"/>
  <text x="30" y="40" class="fx-t-label">Product design: UX + UI + product thinking</text>
  <rect x="40" y="56" width="560" height="218" rx="16" class="fx-fill-2"/>
  <text x="60" y="84" class="fx-t-label">UX design: research, structure, flows, content, testing</text>
  <circle cx="265" cy="180" r="74" class="fx-circle"/>
  <circle cx="375" cy="180" r="74" class="fx-circle"/>
  <text x="225" y="184" text-anchor="middle" class="fx-t">Visual</text>
  <text x="415" y="184" text-anchor="middle" class="fx-t">Interaction</text>
  <text x="320" y="176" text-anchor="middle" class="fx-t fx-t-strong">UI</text>
  <text x="320" y="194" text-anchor="middle" class="fx-t-sm">design</text>
</svg>`,
      caption: 'A simplified map. Real roles blur these lines, but the nesting shows why product designers are expected to know a little of everything.',
    },
    walkthrough: [
      { title: 'Collect five job adverts', body: 'Search for "junior product designer", "UI designer" and "UX designer" in your region or for remote roles. Copy the responsibilities sections into one document.' },
      { title: 'Highlight by discipline', body: 'Use five colours, one per discipline. Highlight every responsibility. Some lines will get two colours.' },
      { title: 'Count the colours', body: 'For each advert, note which discipline dominates. You will usually see two or three patterns repeat.' },
      { title: 'Compare with what you enjoy', body: 'Which highlighted tasks sound most interesting to you? Be honest. Enjoyment keeps you practising.' },
      { title: 'Choose a starting focus', body: 'Write one sentence: "For the next three months I will focus on ___ while keeping a general awareness of the rest." You can change it later.' },
    ],
    mistakes: [
      { mistake: 'Choosing a title because it sounds senior or pays more.', fix: 'Choose the work you want to do every day. Titles follow skills.' },
      { mistake: 'Ignoring visual skills because "UX is about research".', fix: 'Almost every junior role still involves producing clear interfaces. Visual fundamentals make your research and ideas easier to understand.' },
      { mistake: 'Trying to become an expert in all five areas before applying anywhere.', fix: 'Build a T shape: depth in one or two, working knowledge of the rest.' },
    ],
    quiz: [
      { q: 'An advert says: "You will define success metrics with the product manager and decide what we build next quarter." Which discipline is this mostly about?', options: ['Visual design', 'Product design', 'Motion design'], answer: 1, explain: 'Metrics and roadmap decisions are product thinking, which is what separates product design from UI or UX alone.' },
      { q: 'Which question belongs most clearly to interaction design?', options: ['Which typeface suits the brand?', 'What should happen when a payment takes ten seconds?', 'How many people did we interview?'], answer: 1, explain: 'Interaction design is about behaviour over time, including waiting, feedback and errors.' },
      { q: 'What does a "T-shaped" designer mean?', options: ['A designer who only does one thing', 'Broad awareness across disciplines with depth in one or two', 'A designer who works in a team'], answer: 1, explain: 'The horizontal bar is breadth; the vertical bar is depth.' },
    ],
    exercise: {
      title: 'Decode five job adverts',
      minutes: 40,
      brief: '<p>Do the walkthrough with real adverts. Keep your highlighted document; you will use it again in the career stage.</p>',
      steps: [
        'Collect five adverts and paste their responsibilities into one document.',
        'Highlight every line by discipline.',
        'Write a one-line summary per advert: "Mostly ___ with some ___."',
        'List the three skills that appear in at least three adverts.',
        'Write your starting focus sentence.',
      ],
      deliverable: 'A highlighted document with five summaries, a list of the three most repeated skills, and your focus sentence.',
    },
    checklist: [
      'I used real adverts, not imagined ones.',
      'Every responsibility line is highlighted.',
      'My summaries name a dominant discipline for each advert.',
      'I identified repeated skills from evidence, not guesswork.',
      'My focus sentence is specific and has a time frame.',
    ],
    summary: [
      'Learn kinds of work, not titles: visual, UI, interaction, UX and product design.',
      'UI combines visual and interaction design; UX includes UI; product design adds business and delivery thinking.',
      'Read job adverts by responsibilities, not titles.',
      'Aim for a T shape: broad awareness and one or two deep skills.',
    ],
    reading: [
      { title: 'UX research cheat sheet', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', source: 'Nielsen Norman Group', note: 'Shows how research methods fit across a product lifecycle, which helps place UX work in context.' },
      { title: 'Digital, data and technology roles and skills', url: 'https://understand-digital-data-roles-skills.service.gov.uk/', source: 'UK Government', note: 'Public, detailed descriptions of design roles (interaction, service, content, graphic) and the skills expected at each level.' },
    ],
  },

  'what-product-designers-do': {
    objectives: [
      'Describe the main activities in a product designer\'s week.',
      'Name the artefacts designers produce and what each one is for.',
      'Identify the skills beyond tools that make designers effective.',
    ],
    explanation: `
<p>Beginners often imagine designers spending all day pushing pixels in a design tool. In practice, tool time is maybe a third to a half of the week. The rest is understanding problems, talking with people, reviewing work and making decisions.</p>
<h3>A realistic week</h3>
<p>Here is a fictional but typical week for a designer on a small product team building a clinic appointment app:</p>
<ul>
<li><strong>Monday:</strong> team planning. The designer hears that many patients abandon booking on the "choose a time" screen. They agree to investigate this week.</li>
<li><strong>Tuesday:</strong> looks at analytics with the product manager, reads support tickets, and calls two patients the clinic has permission to contact. Notices that people cannot see which doctor is available on which day.</li>
<li><strong>Wednesday:</strong> sketches four different approaches on paper, then builds two of them as quick wireframes. Shares them with an engineer to check what the booking system can actually return.</li>
<li><strong>Thursday:</strong> design critique with other designers in the morning. Turns the stronger idea into a clickable prototype and tests it with three people in the afternoon.</li>
<li><strong>Friday:</strong> updates the design based on the tests, writes notes on states and edge cases, and walks the engineer through it. Also reviews a teammate's work and fixes two bugs in the design system.</li>
</ul>
<h3>The artefacts designers make</h3>
<p>Every artefact exists to answer a question or support a decision. Choose the lightest one that does the job.</p>
<ul>
<li><strong>Research notes and summaries</strong>: what did we learn?</li>
<li><strong>Problem statements</strong>: what exactly are we solving and for whom?</li>
<li><strong>User flows and sitemaps</strong>: what are the steps and where do things live?</li>
<li><strong>Sketches and wireframes</strong>: what could the structure be?</li>
<li><strong>Prototypes</strong>: how would it feel to use, and does it work for real people?</li>
<li><strong>High-fidelity designs and specifications</strong>: exactly what should be built?</li>
<li><strong>Design system components and documentation</strong>: how do we stay consistent and fast?</li>
</ul>`,
    why: `
<p>If you know what the job really involves, you can practise the right things. Many beginners spend months on tool tricks and visual polish, then struggle in interviews because they cannot explain how they would find a problem, choose between options or work with an engineer. Those conversations are a large part of the job, and they are learnable.</p>`,
    example: `
<p>Two junior designers present the same booking-screen redesign in an interview.</p>
<p>The first shows six polished screens and says, "I made it cleaner and more modern."</p>
<p>The second shows three screens and says, "Booking data showed most drop-offs on the time picker. In two short calls, patients said they did not know which doctor they would get. I tried four layouts, tested two, and grouped times by doctor with their next available day. In a small test, all three participants booked without help, compared with one of three before. Next I would check the completion rate after launch."</p>
<p>The second designer is describing the actual job. Their screens may even be less polished; they are still the stronger candidate.</p>`,
    figure: {
      html: `
<div class="fx-bars" role="img" aria-label="Approximate share of a designer's week: understanding problems 25 percent, designing in tools 35 percent, collaborating and reviewing 25 percent, testing and learning 15 percent. Proportions vary widely between teams.">
  <div class="fx-bar" style="--w:25%"><span>Understanding problems</span><b>~25%</b></div>
  <div class="fx-bar" style="--w:35%"><span>Designing in tools</span><b>~35%</b></div>
  <div class="fx-bar" style="--w:25%"><span>Collaborating and reviewing</span><b>~25%</b></div>
  <div class="fx-bar" style="--w:15%"><span>Testing and learning</span><b>~15%</b></div>
</div>`,
      caption: 'An illustrative split, not a measured statistic. It varies a lot by company and seniority; the point is that tool time is only part of the job.',
    },
    walkthrough: [
      { title: 'Find a real process to learn from', body: 'Read two or three published case studies from designers or public design teams, for example GOV.UK design blog posts. Focus on what they did, not what the final screens look like.' },
      { title: 'List the activities', body: 'Write down every activity mentioned: interviews, workshops, sketching, testing, meetings. Note who they worked with.' },
      { title: 'List the artefacts', body: 'Write down every artefact shown or mentioned and the question it answered.' },
      { title: 'Rate your current confidence', body: 'Score yourself from 1 to 5 on each activity. This becomes the starting point of your learning plan in the last lesson of this stage.' },
    ],
    mistakes: [
      { mistake: 'Treating high-fidelity screens as the only real output.', fix: 'Value the decision, not the artefact. A sketch that settles a debate in ten minutes is excellent work.' },
      { mistake: 'Designing alone and revealing finished work at the end.', fix: 'Share early and often, especially with engineers. Late surprises cost the most.' },
      { mistake: 'Ignoring what happens after launch.', fix: 'Ask how success will be measured and check it. That habit separates product designers from screen designers.' },
    ],
    quiz: [
      { q: 'Which artefact best answers "what are the steps in this task and where can it go wrong"?', options: ['A mood board', 'A user flow', 'A colour palette'], answer: 1, explain: 'User flows map steps, decisions and failure points.' },
      { q: 'Why did the second interview candidate in the example come across as stronger?', options: ['Their screens were more colourful', 'They explained the evidence, options, decision and result', 'They used a newer design tool'], answer: 1, explain: 'Interviewers look for reasoning they can trust, not just finished visuals.' },
      { q: 'What is a sensible rule for choosing an artefact?', options: ['Always make a high-fidelity prototype', 'Use the lightest artefact that answers the current question', 'Make every artefact your team has ever used'], answer: 1, explain: 'Effort should match the question. Lighter artefacts are faster to change.' },
    ],
    exercise: {
      title: 'Map a designer\'s week',
      minutes: 45,
      brief: '<p>Using two published design case studies or team blog posts, reconstruct what the designers did.</p>',
      steps: [
        'Pick two detailed public case studies or design team blog posts.',
        'List every activity, collaborator and artefact mentioned.',
        'Draw a simple timeline of the project from problem to launch.',
        'Rate your confidence from 1 to 5 for each activity.',
      ],
      deliverable: 'A timeline per case study and one combined table of activities with your confidence ratings.',
    },
    checklist: [
      'My sources are real, published case studies or team posts.',
      'I listed collaborators, not just design tasks.',
      'Each artefact has the question it answered next to it.',
      'My confidence ratings are honest and will feed my learning plan.',
    ],
    summary: [
      'Designers spend much of their time understanding problems, collaborating and testing, not only using tools.',
      'Every artefact should answer a question or support a decision.',
      'Explaining your reasoning is a core professional skill.',
      'Good designers care about what happens after launch.',
    ],
    reading: [
      { title: 'GOV.UK Design Notes', url: 'https://designnotes.blog.gov.uk/', source: 'Government Digital Service', note: 'Real posts from designers about their process, decisions and mistakes.' },
      { title: 'Design in government: the Service Manual', url: 'https://www.gov.uk/service-manual/design', source: 'GOV.UK Service Manual' },
    ],
  },

  'the-design-process': {
    objectives: [
      'Explain the four phases of the Double Diamond and the purpose of each.',
      'Recognise when a project is jumping straight to solutions.',
      'Choose appropriate activities for each phase of a small project.',
    ],
    explanation: `
<p>There is no single official design process, but most good processes follow the same shape: first understand the problem, then choose what to focus on, then explore solutions, then refine and deliver one. The UK Design Council's <strong>Double Diamond</strong> is a popular way to draw that shape.</p>
<p>Each diamond has two halves. You <em>diverge</em> (open up, gather, generate) and then <em>converge</em> (narrow down, decide).</p>
<ol>
<li><strong>Discover</strong> (diverge): learn about the people, the context and the current situation. Talk to users, read support tickets, look at data, try the existing product. Avoid deciding the answer yet.</li>
<li><strong>Define</strong> (converge): make sense of what you found and agree on the specific problem worth solving. The output is a clear problem statement and some measures of success.</li>
<li><strong>Develop</strong> (diverge): generate many possible solutions. Sketch, wireframe, prototype, and test rough ideas quickly.</li>
<li><strong>Deliver</strong> (converge): choose, refine and build the best solution, test it, launch it, and measure whether it worked.</li>
</ol>
<p>In real projects the process is not a straight line. Testing a prototype often reveals that you misunderstood the problem, which sends you back to Discover. That is not failure; it is the process working. Design is iterative: you loop until the evidence says the solution is good enough to ship, and then you keep learning after launch.</p>`,
    why: `
<p>The most common and expensive mistake in product work is solving the wrong problem well. Teams under pressure jump from a complaint ("users hate the dashboard") straight to a solution ("let's redesign the dashboard"). A short Discover and Define phase often reveals the real issue, which might be one missing number, a confusing label, or a step that should not exist at all.</p>
<p>A shared process also helps teams talk. Saying "we are still in Discover" tells everyone that ideas are welcome but decisions are premature.</p>`,
    example: `
<p>A local gym's website gets complaints that "booking a class is annoying". The owner asks for a new booking page.</p>
<ul>
<li><strong>Discover:</strong> the designer watches three members book a class and reads twenty recent complaint emails. Most complaints are not about the booking page at all. Members cannot tell which classes are full until after they log in, and the login expires every day.</li>
<li><strong>Define:</strong> "Regular members waste time logging in daily only to discover their usual class is full. We will know we have improved this when members can see availability without logging in and fewer complaints mention full classes."</li>
<li><strong>Develop:</strong> ideas include showing spaces left on the public timetable, a waitlist, longer login sessions and a "book my usual classes" shortcut. Quick paper tests show that spaces left on the timetable is the clearest improvement.</li>
<li><strong>Deliver:</strong> the timetable shows spaces left; sessions last 30 days; a waitlist follows later. Complaints are tracked for a month after launch.</li>
</ul>
<p>The owner asked for a new booking page. The evidence pointed elsewhere.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 680 230" role="img" aria-labelledby="fx-dd-t">
  <title id="fx-dd-t">The Double Diamond. The first diamond, the problem space, contains Discover, which opens out, and Define, which narrows to a problem statement. The second diamond, the solution space, contains Develop, which opens out, and Deliver, which narrows to a solution.</title>
  <path d="M20 115 L170 25 L320 115 L170 205 Z" class="fx-diamond"/>
  <path d="M340 115 L490 25 L640 115 L490 205 Z" class="fx-diamond"/>
  <line x1="170" y1="25" x2="170" y2="205" class="fx-dash"/>
  <line x1="490" y1="25" x2="490" y2="205" class="fx-dash"/>
  <text x="105" y="120" text-anchor="middle" class="fx-t">Discover</text>
  <text x="240" y="120" text-anchor="middle" class="fx-t">Define</text>
  <text x="425" y="120" text-anchor="middle" class="fx-t">Develop</text>
  <text x="560" y="120" text-anchor="middle" class="fx-t">Deliver</text>
  <circle cx="330" cy="115" r="5" class="fx-dot"/>
  <text x="330" y="226" text-anchor="middle" class="fx-t-sm">Problem statement</text>
  <text x="170" y="18" text-anchor="middle" class="fx-t-sm">Problem space</text>
  <text x="490" y="18" text-anchor="middle" class="fx-t-sm">Solution space</text>
</svg>`,
      caption: 'Diverge, converge, diverge, converge. The point in the middle is an agreed problem statement.',
    },
    walkthrough: [
      { title: 'Write down the request as given', body: 'Copy the request word for word: "We need a new booking page." This is usually a solution in disguise.' },
      { title: 'Ask what problem it would solve', body: 'Ask "what would be better if we built this?" and "how do we know that is a problem?" Note what evidence exists.' },
      { title: 'Plan a small Discover phase', body: 'Choose two or three cheap activities: watch people use the current product, read support messages, check basic analytics. Give it a time limit.' },
      { title: 'Write a draft problem statement', body: 'Use the pattern: "[Who] struggles to [do what] because [why]. We will know we have improved this when [measure]."' },
      { title: 'Generate at least three solutions', body: 'Include one that is very small, one that is ambitious, and one that removes a step entirely.' },
      { title: 'Decide how you will check it worked', body: 'Pick one or two signals you can actually observe after launch.' },
    ],
    mistakes: [
      { mistake: 'Treating the process as a strict sequence of deliverables.', fix: 'Use it as a map of the kind of thinking you are doing. Loop back when evidence demands it.' },
      { mistake: 'Skipping Define because "we already know the problem".', fix: 'Write the problem statement anyway. If people disagree with it, you have just saved weeks.' },
      { mistake: 'Developing only one idea.', fix: 'Force yourself to produce several genuinely different options before converging.' },
    ],
    quiz: [
      { q: 'What is the main output of the Define phase?', options: ['A high-fidelity prototype', 'A clear problem statement with success measures', 'A list of competitors'], answer: 1, explain: 'Define converges on the specific problem worth solving and how you will know it is solved.' },
      { q: 'During Develop, what should you be doing?', options: ['Polishing one chosen design', 'Generating and testing several possible solutions', 'Interviewing stakeholders about the brand'], answer: 1, explain: 'Develop is divergent: explore options and test rough versions.' },
      { q: 'Usability testing shows you misunderstood the problem. What does that mean?', options: ['The project has failed', 'Loop back to discovery with what you have learned', 'Ignore the result and ship'], answer: 1, explain: 'Iteration is normal. Finding a misunderstanding early is the cheapest time to find it.' },
    ],
    exercise: {
      title: 'Reframe a solution request',
      minutes: 45,
      brief: '<p>Take a request like "add a dark mode", "redesign the homepage" or "we need an app". Use a real one from your work or life if you can.</p>',
      steps: [
        'Write the request exactly as given.',
        'List the questions you would ask to uncover the real problem.',
        'Plan a Discover phase of no more than five hours of work.',
        'Write two different possible problem statements, because you do not know the answer yet.',
        'For each, sketch three solution directions in words.',
      ],
      deliverable: 'A one-page reframing: request, questions, discovery plan, two candidate problem statements and six solution directions.',
    },
    assignment: {
      title: 'Process diagram for a familiar service',
      brief: '<p>Draw the Double Diamond for a service you know well (a library, a clinic, a delivery app). In each phase, write the specific activities you would run and the artefact each produces.</p>',
      deliverables: ['A Double Diamond diagram with activities in each phase', 'One sentence per phase explaining why that activity fits'],
    },
    checklist: [
      'I separated the request from the problem.',
      'My discovery plan is realistic and time-boxed.',
      'My problem statements name who, what, why and a measure.',
      'My solution directions are genuinely different from each other.',
    ],
    summary: [
      'Good processes alternate between diverging and converging.',
      'Discover and Define happen in the problem space; Develop and Deliver in the solution space.',
      'A clear problem statement is the hinge between the two.',
      'Looping back is normal and cheaper than shipping the wrong thing.',
    ],
    reading: [
      { title: 'The Double Diamond', url: 'https://www.designcouncil.org.uk/resources/the-double-diamond/', source: 'Design Council (UK)', note: 'The origin and current version of the model.' },
      { title: 'How the discovery phase works', url: 'https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works', source: 'GOV.UK Service Manual', note: 'A practical guide to discovery in a real delivery process.' },
    ],
  },

  'design-thinking': {
    objectives: [
      'Name the five modes of design thinking and what each is for.',
      'Explain how design thinking relates to the Double Diamond.',
      'Describe three common criticisms of design thinking and how to avoid them.',
    ],
    explanation: `
<p><strong>Design thinking</strong> is a name for the way designers approach problems, packaged so that non-designers can use it. The most widely taught version, popularised by the Stanford d.school and IDEO, has five modes:</p>
<ol>
<li><strong>Empathise:</strong> understand the people involved through observation and conversation.</li>
<li><strong>Define:</strong> state the problem from their point of view.</li>
<li><strong>Ideate:</strong> generate many ideas without judging them too early.</li>
<li><strong>Prototype:</strong> make cheap, rough versions of ideas.</li>
<li><strong>Test:</strong> put the prototypes in front of people and learn.</li>
</ol>
<p>These map neatly onto the Double Diamond: Empathise is Discover, Define is Define, Ideate and Prototype are Develop, and Test runs through Develop and Deliver. The two models describe the same habits: understand first, generate options, learn by making, and check with real people.</p>
<h3>Its limitations</h3>
<p>Design thinking has real critics, and the criticisms are worth knowing because they describe traps you can avoid:</p>
<ul>
<li><strong>Theatre instead of evidence.</strong> A two-day workshop with sticky notes can feel productive while involving no real users. Empathy built from imagination is assumption.</li>
<li><strong>Too shallow for hard problems.</strong> Complex problems such as healthcare access or housing involve policy, money and history. A five-step workshop does not replace domain expertise or long-term work with affected communities.</li>
<li><strong>Ignoring delivery.</strong> Many design thinking efforts stop at a prototype. Ideas that never ship help nobody.</li>
<li><strong>Designing "for" rather than "with".</strong> Designers can end up deciding on behalf of people they have spent an hour with. Participatory approaches involve affected people in the decisions.</li>
</ul>`,
    why: `
<p>You will meet design thinking in workshops, job interviews and client requests. Knowing the modes lets you participate. Knowing the limits lets you add value by asking, "Who are the real users we will speak to?" and "How will this actually get built and measured?"</p>`,
    example: `
<p>A university team runs a one-day design thinking workshop to "improve the student experience". Staff role-play students, fill a wall with ideas and vote for a student app. Six months later the app has very few users.</p>
<p>A second team, with the same goal, spends two weeks interviewing twelve students across different courses. They find the sharpest pain is not information but timing: students find out about deadline extensions and support services after they need them. The team tests a simple change, sending reminders at the right points in the term, which costs a fraction of an app. Usage of support services rises the next term.</p>
<p>Both teams "did design thinking". The difference was real evidence and attention to delivery.</p>`,
    walkthrough: [
      { title: 'Choose a small, real problem', body: 'Something with real people you can reach this week: the queue at a local shop, how your family shares a calendar, how classmates share notes.' },
      { title: 'Empathise with at least three people', body: 'Watch or ask about the last time they did the task. Note what they did, not what they say they would do.' },
      { title: 'Define the problem in their words', body: 'Write one sentence using a phrase you actually heard.' },
      { title: 'Ideate ten ideas in ten minutes', body: 'Quantity first. Include at least one idea that involves no technology.' },
      { title: 'Prototype one idea in under an hour', body: 'Paper, a note, a script, a role-play. It should be cheap enough to throw away.' },
      { title: 'Test it with the same people', body: 'Ask them to try it. Note what confused them and what they ignored.' },
    ],
    mistakes: [
      { mistake: 'Running workshops with no real users involved.', fix: 'Bring real evidence into the room, or treat the output as hypotheses to test.' },
      { mistake: 'Treating the five modes as a strict sequence.', fix: 'Move between modes as needed. Testing often sends you back to Empathise.' },
      { mistake: 'Stopping at the prototype.', fix: 'Plan how the idea would be built, who owns it and how you will measure it.' },
    ],
    quiz: [
      { q: 'Which design thinking mode corresponds most closely to the Discover phase of the Double Diamond?', options: ['Ideate', 'Empathise', 'Test'], answer: 1, explain: 'Both are about understanding people and context before deciding anything.' },
      { q: 'What is the main risk of a workshop where staff role-play users?', options: ['It takes too long', 'The insights are assumptions, not evidence', 'It produces too few ideas'], answer: 1, explain: 'Role-play can be useful for generating ideas, but it cannot replace contact with real people.' },
      { q: 'What does "designing with, not for" mean?', options: ['Using a design system', 'Involving affected people in decisions, not only in research', 'Working in pairs'], answer: 1, explain: 'It is a participatory approach that shares decision-making with the people affected.' },
    ],
    exercise: {
      title: 'A one-week mini design thinking cycle',
      minutes: 120,
      brief: '<p>Run the walkthrough on a small real problem over a week, a little each day.</p>',
      steps: [
        'Talk to or observe at least three people.',
        'Write a problem statement that uses their words.',
        'Generate ten ideas, choose one with a short reason.',
        'Make a prototype in under an hour.',
        'Test with at least two people and record what you learned.',
      ],
      deliverable: 'A short write-up (around 500 words) with photos of your notes and prototype, plus a paragraph on what you would do differently.',
    },
    checklist: [
      'I spoke to real people, not imagined ones.',
      'My problem statement quotes or paraphrases something I heard.',
      'At least one idea involved no technology.',
      'My prototype was cheap enough to throw away.',
      'I wrote down what did not work, not just what did.',
    ],
    summary: [
      'Design thinking has five modes: empathise, define, ideate, prototype, test.',
      'It describes the same habits as the Double Diamond.',
      'It fails when it becomes workshop theatre, ignores complexity, or never reaches delivery.',
      'Real evidence and a plan to ship are what make it useful.',
    ],
    reading: [
      { title: 'Design Thinking 101', url: 'https://www.nngroup.com/articles/design-thinking/', source: 'Nielsen Norman Group' },
      { title: 'd.school tools', url: 'https://dschool.stanford.edu/innovate/tools', source: 'Stanford d.school', note: 'Free guides and activities from one of the originators of the five-mode model.' },
    ],
  },

  'designer-myths': {
    objectives: [
      'Recognise common myths that discourage new designers.',
      'Replace each myth with a more accurate, practical belief.',
      'Write down your own doubts and a plan to test them.',
    ],
    explanation: `
<p>Many people never start, or quit early, because of beliefs about design that are not true. Here are the most common, with what is closer to reality.</p>
<dl class="la-dl">
<dt>"You need to be naturally creative or artistic."</dt><dd>Interface design is mostly problem solving, clear communication and attention to detail. Visual skill matters, but it is learned through principles and practice, not born. Many strong product designers cannot draw well.</dd>
<dt>"You need to be able to draw."</dt><dd>You need to sketch boxes, arrows and words quickly. That is a skill anyone can learn in an afternoon. Sketching is for thinking, not for display.</dd>
<dt>"You need a design degree."</dt><dd>Some employers prefer degrees, but many designers come from psychology, engineering, journalism, retail, teaching and other fields. Evidence of skill, usually in a portfolio, matters more in most hiring processes. That said, competition for junior roles is real, so plan for a serious amount of practice.</dd>
<dt>"Learning the tool is learning design."</dt><dd>Tools are the easy part and they change. Knowing why a layout works, how to find a problem and how to test a solution is what makes you a designer.</dd>
<dt>"Good taste is all you need."</dt><dd>Taste helps, but it is personal. Professional decisions need reasons: evidence from users, principles, constraints and goals. You will often design things that are not to your taste because they work better for the people using them.</dd>
<dt>"AI will do the designing, so there is no point learning."</dt><dd>AI tools can speed up some tasks, such as generating variations or summarising notes. They do not know your users, cannot judge trade-offs in your context, and often produce plausible but wrong output. The skills to frame problems, judge quality and take responsibility for decisions become more valuable, not less. There is an optional path on AI-assisted workflows later in the academy.</dd>
<dt>"You will be designing beautiful new apps from scratch."</dt><dd>Most design work improves existing products: fixing flows, adding features, handling edge cases. Learning to love improving things is a career advantage.</dd>
</dl>`,
    why: `
<p>Beliefs shape what you practise. If you believe design is talent, you will stop at the first difficult critique. If you believe the tool is the skill, you will practise shortcuts instead of reasoning. Replacing myths with accurate beliefs points your effort at what employers and clients actually value.</p>`,
    example: `
<p>A fictional learner, Arjun, works in customer support. He thinks he cannot become a designer because he "isn't artistic". After a few weeks of this academy he notices that his support work already involves design skills: he knows the five most common customer problems, he can explain confusing features simply, and he spots patterns in complaints. His first portfolio project redesigns a confusing refund flow using tickets from his own job (with company permission and anonymised data). His drawing skills never come up in interviews; his understanding of customers comes up in every one.</p>`,
    walkthrough: [
      { title: 'Write your doubts down', body: 'List every reason you think you might not succeed as a designer. Be honest.' },
      { title: 'Match each doubt to a myth or fact', body: 'Some doubts are myths. Some are real constraints, such as limited time. Label them.' },
      { title: 'For each myth, write the accurate belief', body: 'Use this lesson as a starting point, then find one real designer\'s story that contradicts the myth.' },
      { title: 'For each real constraint, write a plan', body: 'Limited time: plan five focused hours a week. No money for courses: use this academy and free official documentation.' },
      { title: 'List transferable skills', body: 'What do you already do that involves understanding people, explaining things or solving problems? Those are design skills.' },
    ],
    mistakes: [
      { mistake: 'Comparing your first month to someone else\'s fifth year.', fix: 'Compare your work to your own work from a month ago.' },
      { mistake: 'Waiting to feel ready before sharing work.', fix: 'Share early drafts for feedback. Feedback is how you improve fastest.' },
      { mistake: 'Hiding your previous career.', fix: 'Domain knowledge is valuable. A former nurse designing healthcare tools is a strength.' },
    ],
    quiz: [
      { q: 'What does sketching in interface design mainly exist for?', options: ['Producing portfolio artwork', 'Thinking through ideas quickly', 'Replacing the design tool'], answer: 1, explain: 'Sketches are thinking tools. Neatness is irrelevant.' },
      { q: 'Which statement about AI design tools is most accurate?', options: ['They make design skills unnecessary', 'They can speed up some tasks but cannot replace understanding users and judging trade-offs', 'They should never be used'], answer: 1, explain: 'They are tools with real limits. Judgement and responsibility remain with the designer.' },
      { q: 'A learner with a nursing background wants to design. What is the best approach?', options: ['Hide the nursing experience', 'Use the domain knowledge as a strength, for example in healthcare projects', 'Wait until they have a design degree'], answer: 1, explain: 'Domain knowledge is often what makes a junior designer stand out.' },
    ],
    exercise: {
      title: 'Doubts, facts and transferable skills',
      minutes: 30,
      brief: '<p>Complete the walkthrough and keep the result with your learning plan.</p>',
      steps: [
        'List at least five doubts.',
        'Label each as a myth or a real constraint.',
        'Write an accurate belief for each myth and a plan for each constraint.',
        'List at least five transferable skills from your current or past work.',
      ],
      deliverable: 'A two-column table (doubt, response) and a list of transferable skills.',
    },
    checklist: [
      'I was honest about my doubts.',
      'Each real constraint has a concrete plan.',
      'I found at least one real story that contradicts a myth I believed.',
      'My transferable skills include evidence, not just labels.',
    ],
    summary: [
      'Design is learnable problem solving and communication, not innate artistic talent.',
      'Tools are the easy part; reasoning is the skill.',
      'Your previous experience and domain knowledge are assets.',
      'AI tools change some tasks but not the need for judgement.',
    ],
    reading: [
      { title: 'Interaction designer role description', url: 'https://understand-digital-data-roles-skills.service.gov.uk/role/interaction-designer/', source: 'UK Government', note: 'Shows that design roles are described by learnable skills, not talent.' },
    ],
  },

  'team-roles': {
    objectives: [
      'Describe what product managers, engineers and researchers are responsible for.',
      'Explain what each role needs from a designer and what a designer needs from them.',
      'Use simple habits that build trust in a product team.',
    ],
    explanation: `
<p>Designers rarely work alone. On a typical product team you will work with these roles. Titles vary, but the responsibilities are fairly consistent.</p>
<dl class="la-dl">
<dt>Product manager (PM)</dt><dd>Responsible for <em>what</em> the team builds and <em>why</em>: understanding the market and business goals, prioritising work, and deciding what success means. A good PM protects the team from too many priorities. They need from you: clear options with trade-offs, evidence about users, and realistic effort estimates for design work.</dd>
<dt>Engineers (developers)</dt><dd>Responsible for <em>how</em> it is built: architecture, code quality, performance, security and reliability. They need from you: designs that cover all states and edge cases, early conversations about feasibility, consistent components and clear specifications. You need from them: early warnings about constraints, and their ideas, which are often excellent.</dd>
<dt>UX researcher</dt><dd>Responsible for planning and running research and making sure insights are sound. On many smaller teams there is no researcher, so designers do research themselves. They need from you: clear research questions and involvement in sessions. You need from them: evidence, and help avoiding biased conclusions.</dd>
<dt>Other roles you may meet</dt><dd>Content designers and UX writers (words), QA testers (quality), data analysts (metrics), marketing (acquisition and brand), customer support (problems users report), and stakeholders such as founders, sales or legal who influence decisions.</dd>
</dl>
<p>A simple way to remember the core triangle: the PM owns the <em>problem and priority</em>, the designer owns the <em>experience</em>, and engineering owns the <em>implementation</em>. All three share responsibility for the outcome.</p>`,
    why: `
<p>Most design work that fails in delivery fails because of collaboration, not craft. A design that ignores a technical constraint, or a business rule, or a legal requirement, gets rebuilt or watered down. Designers who involve others early ship better work and have more influence.</p>`,
    example: `
<p>A designer finishes a beautiful redesign of a search results page with instant filtering. In the handoff meeting, the engineer explains that the search service takes two seconds per query, so instant filtering would feel broken. The PM adds that the sales team promised a client a specific filter that is missing.</p>
<p>Two weeks of work need rethinking. If the designer had shared rough sketches with both of them in the first two days, both issues would have surfaced while changes were cheap. On the next project, the designer starts a short "design kick-off" with the PM and one engineer before sketching.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 560 300" role="img" aria-labelledby="fx-tri-t">
  <title id="fx-tri-t">The product trio. Product manager owns problem and priority. Designer owns the experience. Engineering owns implementation. The shared outcome sits in the middle.</title>
  <path d="M280 40 L490 260 L70 260 Z" class="fx-diamond"/>
  <circle cx="280" cy="40" r="8" class="fx-dot"/><circle cx="490" cy="260" r="8" class="fx-dot"/><circle cx="70" cy="260" r="8" class="fx-dot"/>
  <text x="280" y="22" text-anchor="middle" class="fx-t fx-t-strong">Product manager</text>
  <text x="280" y="66" text-anchor="middle" class="fx-t-sm">problem and priority</text>
  <text x="70" y="288" text-anchor="middle" class="fx-t fx-t-strong">Designer</text>
  <text x="70" y="240" text-anchor="start" class="fx-t-sm" dx="-40">experience</text>
  <text x="490" y="288" text-anchor="middle" class="fx-t fx-t-strong">Engineering</text>
  <text x="490" y="240" text-anchor="end" class="fx-t-sm" dx="40">implementation</text>
  <text x="280" y="190" text-anchor="middle" class="fx-t">Shared outcome</text>
</svg>`,
      caption: 'The product trio. Each role leads in one area, and all three share responsibility for whether the product works.',
    },
    walkthrough: [
      { title: 'Start with a kick-off', body: 'Before designing, spend 30 minutes with the PM and an engineer. Agree the problem, constraints, deadline and what success looks like.' },
      { title: 'Share rough work early', body: 'Show sketches in the first few days. Ask engineers "what would make this hard?" and PMs "does this solve the problem we agreed?"' },
      { title: 'Invite people to research', body: 'Ask engineers and PMs to watch at least one interview or test. Shared observations end many arguments.' },
      { title: 'Document decisions', body: 'Keep a short decision log: what was decided, why, and by whom.' },
      { title: 'Stay involved during building', body: 'Answer questions quickly, review builds, and accept small changes that keep the intent.' },
    ],
    mistakes: [
      { mistake: 'Throwing finished designs "over the wall" to engineering.', fix: 'Collaborate from the start and keep talking during the build.' },
      { mistake: 'Treating the PM as the enemy of good design.', fix: 'Understand their goals and constraints. Most disagreements disappear when everyone sees the same evidence.' },
      { mistake: 'Saying "the user wants" without evidence.', fix: 'Bring quotes, observations or data. Opinions get debated; evidence gets acted on.' },
    ],
    quiz: [
      { q: 'Who is usually responsible for deciding which problem the team works on next?', options: ['The engineer', 'The product manager, informed by the team', 'The designer alone'], answer: 1, explain: 'Prioritisation is usually the PM\'s responsibility, with input from design and engineering.' },
      { q: 'What do engineers most need from a designer?', options: ['Only the final happy-path screens', 'All states and edge cases, early feasibility conversations and clear specs', 'A presentation about the brand'], answer: 1, explain: 'Missing states and late surprises cause the most rework.' },
      { q: 'What is the best way to resolve "I think users want X" debates?', options: ['Whoever is most senior decides', 'Bring evidence, ideally observed by the whole team', 'Vote'], answer: 1, explain: 'Shared evidence is the strongest tool for alignment.' },
    ],
    exercise: {
      title: 'Plan a kick-off conversation',
      minutes: 30,
      brief: '<p>Prepare the questions you would ask in a 30-minute kick-off for a feature such as "let customers reschedule appointments".</p>',
      steps: [
        'Write five questions for the PM about goals, users, priority and success.',
        'Write five questions for an engineer about data, systems, constraints and risks.',
        'Write three things you will share at the end of the meeting.',
        'Draft a one-paragraph summary you would send afterwards.',
      ],
      deliverable: 'A kick-off agenda with questions and a sample follow-up message.',
    },
    checklist: [
      'My PM questions cover goals, users, priority and success.',
      'My engineering questions cover data, constraints and risk.',
      'My follow-up message records decisions and open questions.',
    ],
    summary: [
      'PMs own problem and priority; designers own experience; engineers own implementation; everyone owns the outcome.',
      'Involve others early, share rough work and invite them to research.',
      'Evidence, not opinion, settles most disagreements.',
    ],
    reading: [
      { title: 'How the alpha phase works', url: 'https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works', source: 'GOV.UK Service Manual', note: 'How multidisciplinary teams test ideas together.' },
      { title: 'Design Thinking 101', url: 'https://www.nngroup.com/articles/design-thinking/', source: 'Nielsen Norman Group' },
    ],
  },

  'learning-plan-and-files': {
    objectives: [
      'Create a realistic weekly learning plan around your other commitments.',
      'Set up a practice log that records what you made and learned.',
      'Organise design files and folders with a naming system you will keep using.',
    ],
    explanation: `
<p>Learning design is a long project. People who succeed are usually not the most talented; they are the most consistent. A plan, a log and an organised file system make consistency easier.</p>
<h3>A weekly rhythm</h3>
<p>A sustainable plan for someone with a job or classes is around 5 to 8 focused hours a week. A full-time learner might do 20 to 30. Whatever your number, split it into three kinds of time:</p>
<ul>
<li><strong>Learn (about 30%)</strong>: read a lesson, watch a talk, study a reference.</li>
<li><strong>Practise (about 50%)</strong>: do the exercise, redesign something, work on a project.</li>
<li><strong>Reflect and share (about 20%)</strong>: write in your log, ask for feedback, give feedback to others.</li>
</ul>
<p>Practice is the largest share on purpose. Reading about hierarchy does not make you good at hierarchy; making fifty layouts does.</p>
<h3>A practice log</h3>
<p>Keep one document or notebook. After each session write the date, what you did, one thing you learned, one question you still have, and a link or image of the work. In a few months, this log becomes raw material for your portfolio and interview answers.</p>
<h3>Files and folders</h3>
<p>Use one top-level folder for your design learning, with a folder per project. Inside each project, keep the same structure every time:</p>
<pre class="la-pre">design-learning/
  00-log/
  01-orientation-exercises/
  project-local-gym-website/
    01-research/
    02-define/
    03-wireframes/
    04-ui/
    05-testing/
    06-case-study/
    _assets/</pre>
<p>Name files so they sort correctly and tell you what they are: <code>2026-10-14_gym-website_homepage-wireframe_v2.fig</code>. Dates first (year-month-day) make files sort by time. Avoid "final", "final2" and "new"; use version numbers.</p>
<p>In your design tool, use clear page names in the same order as your process: Cover, Research, Flows, Wireframes, UI, Prototype, Archive. Name layers and frames meaningfully. You will learn more about file hygiene in the Figma stage.</p>`,
    why: `
<p>Disorganised work is invisible work. When you build your portfolio, you need to find your early sketches, research notes and rejected ideas. When you join a team, others need to navigate your files. And a plan protects your learning from the weeks when motivation is low.</p>`,
    example: `
<p>A learner with a full-time job plans six hours a week: two one-hour weekday evenings for lessons, and a four-hour Saturday block for exercises and projects. Every Saturday ends with fifteen minutes on the practice log. After three months, the log shows 13 exercises and two small projects, with notes about what changed after feedback. When writing their first case study, they copy decisions straight from the log instead of trying to remember.</p>`,
    walkthrough: [
      { title: 'Count your real available hours', body: 'Look at last week, not your ideal week. Find blocks of at least 45 minutes.' },
      { title: 'Choose a weekly target', body: 'Start at about 80% of what you think you can do. It is better to exceed a small target than miss a big one.' },
      { title: 'Schedule the blocks', body: 'Put them in your calendar with a label: Learn, Practise or Reflect.' },
      { title: 'Create your folder structure', body: 'Make the folders above now, even if they are empty.' },
      { title: 'Start your practice log', body: 'Write your first entry today: what you have done in this stage so far and what you want to learn next.' },
      { title: 'Use the academy roadmap', body: 'Mark this lesson complete and use the roadmap to pick your path. Progress is stored in this browser only.' },
    ],
    mistakes: [
      { mistake: 'Planning 20 hours a week and doing 2, then feeling like a failure.', fix: 'Plan small and grow. Consistency beats intensity.' },
      { mistake: 'Only consuming content.', fix: 'Keep practice at around half your time. Make something every week.' },
      { mistake: 'Saving files as "untitled" in random places.', fix: 'Set up the folder system once and use it from today.' },
    ],
    quiz: [
      { q: 'Which split of time does the lesson recommend?', options: ['Mostly reading, a little practice', 'Around half practice, the rest learning and reflection', 'Only practice, no reading'], answer: 1, explain: 'Skill comes from doing. Learning and reflection support practice.' },
      { q: 'Why put the date first in a file name, as year-month-day?', options: ['It looks professional', 'Files then sort in time order automatically', 'Design tools require it'], answer: 1, explain: 'Year-month-day sorts correctly as text.' },
      { q: 'What is the practice log most useful for later?', options: ['Proving you studied', 'Raw material for case studies and interviews', 'Nothing; it is optional'], answer: 1, explain: 'Recorded decisions and lessons make case studies far easier to write.' },
    ],
    exercise: {
      title: 'Set up your learning system',
      minutes: 30,
      brief: '<p>Do the walkthrough. This exercise takes less time than it saves.</p>',
      steps: [
        'Write your weekly hour target and schedule the blocks.',
        'Create the folder structure on your computer or cloud drive.',
        'Create a practice log document with the five fields.',
        'Write your first log entry.',
        'Choose a learning path on the roadmap page.',
      ],
      deliverable: 'A calendar with scheduled blocks, a folder structure and a practice log with one entry.',
    },
    checklist: [
      'My weekly target is based on my real schedule.',
      'Blocks are in my calendar with labels.',
      'My folder structure exists and follows one naming pattern.',
      'My practice log has its first entry.',
    ],
    summary: [
      'Consistency matters more than intensity; plan a realistic weekly rhythm.',
      'Spend about half your time practising.',
      'Keep a practice log; it becomes your portfolio raw material.',
      'Use one folder structure and a date-first naming pattern for everything.',
    ],
    reading: [
      { title: 'Figma Learn: getting started', url: 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started', source: 'Figma Help Center', note: 'Official setup guides, if you want to install Figma now. The tool stage covers it in depth.' },
    ],
  },
};
