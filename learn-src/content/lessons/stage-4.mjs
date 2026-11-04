// @ts-check
/* Stage 4: Wireframing and ideation. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'divergent-convergent': {
    objectives: [
      'Explain divergent and convergent thinking and when to use each.',
      'Generate many ideas quickly without judging them too early.',
      'Narrow ideas down using clear criteria.',
    ],
    explanation: `
<p>Good ideas rarely arrive first. Design alternates between two modes of thinking.</p>
<p><strong>Divergent thinking</strong> means opening up: generating as many different ideas as possible, including odd ones. Quantity matters more than quality at this stage, because more ideas give you more to choose from and the first ideas are usually the most obvious.</p>
<p><strong>Convergent thinking</strong> means narrowing down: comparing ideas against criteria, combining the best parts and choosing a direction.</p>
<h3>Keep them separate</h3>
<p>Mixing the two kills ideas. If people judge every idea as it is suggested, they stop suggesting anything risky. Run divergent activities with a rule of no criticism, then switch explicitly to convergent activities with agreed criteria.</p>
<h3>Useful techniques</h3>
<ul>
<li><strong>Crazy 8s</strong>: fold a sheet into eight panels and sketch eight ideas in eight minutes.</li>
<li><strong>Brainwriting</strong>: everyone writes ideas silently, then passes them on for others to build upon. It avoids the loudest voice dominating.</li>
<li><strong>Dot voting</strong>: each person places a few dots on the ideas they find strongest against the criteria.</li>
<li><strong>Criteria matrices</strong>: score shortlisted ideas on user value, feasibility and fit with goals.</li>
</ul>`,
    why: `
<p>Teams that jump straight to the first idea often build something mediocre. Deliberate divergence surfaces better options; deliberate convergence turns them into a decision everyone understands. Separating the two also makes workshops more productive and more inclusive, because quieter people contribute more when ideas are not immediately judged.</p>`,
    example: `
<p>A team is working on "How might we help new tenants report repairs quickly?" In a 40-minute session, five people each sketch Crazy 8s, producing 40 ideas: a photo-first report, a WhatsApp chatbot, QR stickers on boilers, a call-back request button, and more.</p>
<p>After a short break the team switches to convergence. Criteria are agreed: helps tenants who are not confident with forms, feasible within a quarter, reduces incomplete reports. Dot voting shortlists five ideas, and a scoring matrix picks the photo-first report combined with the QR sticker idea. Neither was the first idea anyone suggested.</p>`,
    walkthrough: [
      { title: 'Frame the question', body: 'Start from a clear "How might we" question.' },
      { title: 'Diverge alone first', body: 'Give everyone silent time to generate ideas so all voices count.' },
      { title: 'Share without judging', body: 'Present ideas quickly with no criticism allowed.' },
      { title: 'Agree criteria', body: 'Before choosing, decide what a good idea must achieve.' },
      { title: 'Converge', body: 'Dot vote, then score the shortlist against criteria.' },
      { title: 'Combine and decide', body: 'Merge strong parts of different ideas and record why the chosen direction won.' },
    ],
    mistakes: [
      { mistake: 'Judging ideas while generating them.', fix: 'Separate the two phases explicitly.' },
      { mistake: 'Stopping at the first good idea.', fix: 'Push for quantity; the best ideas often come later.' },
      { mistake: 'Choosing by enthusiasm or seniority.', fix: 'Agree criteria and score against them.' },
    ],
    quiz: [
      { q: 'What is the goal of divergent thinking?', options: ['Choosing the best idea', 'Generating many different ideas', 'Writing specifications'], answer: 1, explain: 'Divergence is about breadth.' },
      { q: 'Why have people ideate silently first?', options: ['To save time', 'So everyone contributes, not just the loudest voices', 'Because talking is banned'], answer: 1, explain: 'Silent ideation reduces groupthink.' },
      { q: 'What should guide convergence?', options: ['Who suggested the idea', 'Agreed criteria', 'The prettiest sketch'], answer: 1, explain: 'Criteria make decisions transparent and fair.' },
    ],
    exercise: {
      title: 'Crazy 8s and converge',
      minutes: 40,
      brief: '<p>Answer "How might we help people remember to water their plants?" using Crazy 8s.</p>',
      steps: [
        'Sketch eight ideas in eight minutes.',
        'Repeat once more to reach 16 ideas.',
        'Write three criteria.',
        'Score your top five and choose one, explaining why.',
      ],
      deliverable: 'Sixteen sketches, criteria and a scored shortlist.',
    },
    checklist: [
      'I generated many ideas before judging.',
      'I agreed criteria before choosing.',
      'My choice is explained against the criteria.',
      'I considered combining ideas.',
    ],
    summary: [
      'Divergent thinking generates options; convergent thinking chooses.',
      'Keep the two phases separate.',
      'Use silent techniques to include everyone.',
      'Choose with agreed criteria.',
    ],
    reading: [
      { title: 'Ideation in practice', url: 'https://www.nngroup.com/articles/ideation-in-practice/', source: 'Nielsen Norman Group' },
      { title: 'Crazy 8s', url: 'https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s', source: 'Google Design Sprint Kit' },
    ],
  },

  'sketching': {
    objectives: [
      'Sketch interface ideas quickly on paper.',
      'Use a small visual vocabulary for common interface elements.',
      'Use sketches to explore and communicate rather than to impress.',
    ],
    explanation: `
<p><strong>Sketching</strong> is the fastest way to explore interface ideas. A sketch takes a minute, costs nothing and is easy to throw away, which is exactly why it is useful.</p>
<h3>You do not need to draw well</h3>
<p>Interface sketches use a handful of shapes: rectangles for containers and images (with a cross through them), lines for text, rounded rectangles for buttons, circles for avatars and icons. Anyone can draw these. What matters is the idea, not the line quality.</p>
<h3>Sketch to think</h3>
<p>Sketching is a thinking tool. Drawing a screen forces decisions: what comes first, what is on the screen at all, what happens when someone taps. Sketch several variations of the same screen to compare approaches, and sketch sequences of screens to explore a flow.</p>
<h3>Annotate</h3>
<p>Add short notes and arrows: what a button does, where content comes from, what happens on error. Annotations turn a drawing into a design.</p>
<h3>Tools</h3>
<p>A thick pen (so you cannot add too much detail), plain paper or printed device frames, and a phone to photograph results. Digital sketching on a tablet works too, as long as it stays rough.</p>`,
    why: `
<p>Sketches let you explore more ideas in an hour than you could in a day in a design tool. Because they look unfinished, people give honest feedback and do not get attached. They are also an excellent way to communicate with developers and stakeholders early, before anyone invests in detail.</p>`,
    example: `
<p>A designer needs a home screen for a pharmacy app. Instead of opening Figma, they spend 20 minutes sketching six versions: one focused on repeat prescriptions, one on finding a pharmacy, one with a search bar first, and others in between.</p>
<p>Showing the sketches to the pharmacist and a developer takes ten minutes. The pharmacist points out that most customers come back for repeat prescriptions; the developer notes that live stock information is not available. Together they choose a direction built around "Order your repeat prescription", which goes forward to wireframes.</p>`,
    walkthrough: [
      { title: 'Gather tools', body: 'A thick marker, paper and printed device outlines if you have them.' },
      { title: 'Warm up', body: 'Draw the basic shapes a few times: boxes, lines, buttons, image placeholders.' },
      { title: 'Sketch variations', body: 'Draw at least three different versions of the same screen.' },
      { title: 'Sketch the flow', body: 'Draw the screen before and after to show how people move.' },
      { title: 'Annotate', body: 'Add notes explaining behaviour and content.' },
      { title: 'Share and discuss', body: 'Show the sketches early and capture feedback on the paper.' },
    ],
    mistakes: [
      { mistake: 'Spending too long on one sketch.', fix: 'Time-box sketches to a few minutes each.' },
      { mistake: 'Apologising for drawing ability.', fix: 'Focus on ideas; rough is the point.' },
      { mistake: 'Sketching only one idea.', fix: 'Always sketch several alternatives to compare.' },
    ],
    quiz: [
      { q: 'Why use a thick pen for sketching?', options: ['It looks professional', 'It prevents adding too much detail', 'It is required'], answer: 1, explain: 'Thick lines keep sketches rough and fast.' },
      { q: 'What do annotations add?', options: ['Colour', 'Explanations of behaviour and content', 'Nothing'], answer: 1, explain: 'They turn drawings into communicable designs.' },
      { q: 'Why do sketches get more honest feedback?', options: ['They look unfinished, so people feel free to suggest changes', 'They are larger', 'They use less colour'], answer: 0, explain: 'Roughness invites critique.' },
    ],
    exercise: {
      title: 'Six-up sketches',
      minutes: 30,
      brief: '<p>Sketch six versions of a home screen for a local cinema app.</p>',
      steps: [
        'Divide a page into six phone frames.',
        'Sketch six different approaches.',
        'Annotate each with its main idea.',
        'Pick the strongest and sketch the next screen in its flow.',
      ],
      deliverable: 'Photos of six sketches and one flow continuation.',
    },
    checklist: [
      'I sketched several different approaches.',
      'Sketches are rough and quick.',
      'I annotated behaviour.',
      'I showed them to someone for feedback.',
    ],
    summary: [
      'Sketching is the fastest way to explore ideas.',
      'A few simple shapes are enough.',
      'Sketch variations and flows, and annotate.',
      'Rough sketches invite honest feedback.',
    ],
    reading: [
      { title: 'Paper prototyping: getting user data before you code', url: 'https://www.nngroup.com/articles/paper-prototyping/', source: 'Nielsen Norman Group' },
    ],
  },

  'lofi-midfi-wireframes': {
    objectives: [
      'Explain what wireframes are and what each level of fidelity is for.',
      'Create low- and mid-fidelity wireframes with realistic content.',
      'Choose the right fidelity for the question you need to answer.',
    ],
    explanation: `
<p>A <strong>wireframe</strong> is a simplified drawing of a screen that shows structure, content and functionality without visual styling. It answers "what goes where and why" before anyone discusses colour or fonts.</p>
<h3>Levels of fidelity</h3>
<ul>
<li><strong>Low fidelity</strong>: rough boxes and lines, often on paper or a whiteboard. Fast and disposable, good for exploring layouts and flows.</li>
<li><strong>Mid fidelity</strong>: digital, greyscale, with real headings, realistic content and proper spacing. Good for testing structure and content with users and for discussing details with developers.</li>
<li><strong>High fidelity</strong>: close to the final design, with visual style. Covered later in visual design.</li>
</ul>
<h3>Use real content</h3>
<p>"Lorem ipsum" hides problems. A product name that is 40 characters long, an error message, a price with a discount: real or realistic content shows whether a layout actually works.</p>
<h3>Greyscale on purpose</h3>
<p>Keeping wireframes grey keeps discussion on structure and content. As soon as colour appears, conversations shift to taste.</p>`,
    why: `
<p>Wireframes are where most structural decisions get made. They are quick to change, easy to test and clear enough for developers to estimate. Choosing the right fidelity saves time: too high too early wastes effort on details that will change; too low for too long leaves important questions unanswered.</p>`,
    example: `
<p>A designer working on a holiday rental listing page starts with paper wireframes of three layouts. A quick review chooses one with photos at the top, key facts (guests, bedrooms, price) next, then availability.</p>
<p>The mid-fidelity version in Figma uses a real listing: a long cottage name, 23 photos, a cancellation policy and a minimum-stay rule. This reveals that the price area needs room for "from £120 per night, minimum 3 nights", which the paper version had ignored. Five usability sessions with the mid-fi prototype confirm people find availability easily but miss the cancellation policy, which moves higher.</p>`,
    walkthrough: [
      { title: 'Start from sketches', body: 'Choose the strongest sketched direction.' },
      { title: 'Draw lo-fi variants', body: 'Quickly try two or three layouts of the key screen.' },
      { title: 'Gather real content', body: 'Collect realistic text, data and edge cases.' },
      { title: 'Build mid-fi', body: 'Create a greyscale digital wireframe with real content and consistent spacing.' },
      { title: 'Annotate', body: 'Explain behaviour, rules and data sources.' },
      { title: 'Review and test', body: 'Walk through with developers and test with a few users.' },
    ],
    mistakes: [
      { mistake: 'Using placeholder text everywhere.', fix: 'Use real or realistic content, including long and short examples.' },
      { mistake: 'Adding colour and styling too early.', fix: 'Keep wireframes greyscale until structure is settled.' },
      { mistake: 'Jumping straight to high fidelity.', fix: 'Match fidelity to the question you are trying to answer.' },
    ],
    quiz: [
      { q: 'What is a wireframe mainly for?', options: ['Choosing brand colours', 'Showing structure, content and functionality', 'Marketing'], answer: 1, explain: 'Wireframes focus on what goes where.' },
      { q: 'Why avoid lorem ipsum?', options: ['It is Latin', 'It hides real content problems such as long names and errors', 'It is copyrighted'], answer: 1, explain: 'Real content tests whether a layout works.' },
      { q: 'When is mid fidelity most useful?', options: ['Exploring dozens of layouts quickly', 'Testing structure and content with users and developers', 'Final brand approval'], answer: 1, explain: 'Mid-fi balances speed and realism.' },
    ],
    exercise: {
      title: 'Lo-fi to mid-fi',
      minutes: 60,
      brief: '<p>Wireframe a product detail page for an online bike shop.</p>',
      steps: [
        'Sketch three lo-fi layouts.',
        'Collect real content for one real bike.',
        'Build a mid-fi greyscale wireframe of the best layout.',
        'Annotate behaviour and add one edge case, such as out of stock.',
      ],
      deliverable: 'Three lo-fi sketches and one annotated mid-fi wireframe.',
    },
    checklist: [
      'I explored multiple lo-fi layouts.',
      'My mid-fi uses realistic content.',
      'It is greyscale.',
      'It includes annotations and an edge case.',
    ],
    summary: [
      'Wireframes show structure without styling.',
      'Lo-fi is for exploring; mid-fi is for testing and detailing.',
      'Use realistic content.',
      'Match fidelity to the question.',
    ],
    reading: [
      { title: 'Wireflows: a UX deliverable for workflows and apps', url: 'https://www.nngroup.com/articles/wireflows/', source: 'Nielsen Norman Group' },
      { title: 'UX prototypes: low fidelity vs. high fidelity', url: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/', source: 'Nielsen Norman Group' },
    ],
  },

  'content-hierarchy': {
    objectives: [
      'Decide the priority order of content on a screen.',
      'Use a priority list to drive layout decisions.',
      'Design content-first rather than filling a layout.',
    ],
    explanation: `
<p><strong>Content hierarchy</strong> is the order of importance of content on a screen. Visual hierarchy (covered in Stage 1) is how you show it; content hierarchy is deciding it.</p>
<h3>Priority lists</h3>
<p>Before drawing a screen, write a <strong>priority list</strong>: every piece of content and action the screen needs, ranked from most to least important for the user's main task. For a recipe page that might be: recipe name, photo, time and servings, ingredients, steps, nutrition, reviews, related recipes.</p>
<p>The list drives layout. The top items go highest and get the most visual weight; the lowest items may move further down, into a secondary area, or off the screen altogether.</p>
<h3>Content first</h3>
<p>Designing <strong>content first</strong> means deciding what the screen says before deciding how it looks. Starting with a layout template and filling boxes leads to screens that look tidy but bury what matters.</p>
<h3>One main job per screen</h3>
<p>Most screens work best with one primary purpose and one primary action. If you cannot say what the main job of a screen is, the hierarchy will be muddy.</p>`,
    why: `
<p>Every screen competes for limited attention, especially on mobile. Deciding priority explicitly stops important content being buried and makes layout discussions faster, because the team argues about priorities once rather than about every box. It also makes responsive design easier: on small screens you stack content in priority order.</p>`,
    example: `
<p>A local council's bin collection page shows a news banner, a long introduction, recycling guidance and finally the next collection date at the bottom.</p>
<p>The designer interviews five residents and writes a priority list: next collection date and which bins; what to do if missed; what goes in which bin; holiday changes; everything else. The new page leads with "Your next collection: Tuesday 12 March, green and black bins" after entering a postcode. Calls asking about collection days fall.</p>`,
    walkthrough: [
      { title: 'Define the main job', body: 'Write one sentence describing what the screen is for.' },
      { title: 'List everything', body: 'Write every content item and action the screen needs.' },
      { title: 'Rank it', body: 'Order the list by importance for the main job, using research.' },
      { title: 'Question the bottom', body: 'Decide whether low items belong on this screen at all.' },
      { title: 'Lay out in order', body: 'Wireframe with the highest priorities most prominent.' },
      { title: 'Check on mobile', body: 'Stack the content in priority order and see whether it still works.' },
    ],
    mistakes: [
      { mistake: 'Filling a template layout without priorities.', fix: 'Write the priority list first.' },
      { mistake: 'Treating everything as equally important.', fix: 'Force a ranking; ties hide decisions.' },
      { mistake: 'Ranking by what the business wants to promote.', fix: 'Rank by what helps users complete their task, then find space for business needs.' },
    ],
    quiz: [
      { q: 'What is a priority list?', options: ['A to-do list for the designer', 'A ranked list of content and actions for a screen', 'A list of bugs'], answer: 1, explain: 'It drives layout decisions.' },
      { q: 'What does "content first" mean?', options: ['Writing before designing', 'Deciding what a screen says before how it looks', 'Using only text'], answer: 1, explain: 'Content decisions come before visual ones.' },
      { q: 'How does a priority list help responsive design?', options: ['It does not', 'On small screens content can stack in priority order', 'It removes the need for testing'], answer: 1, explain: 'Priority order becomes stacking order.' },
    ],
    exercise: {
      title: 'Priority list redesign',
      minutes: 40,
      brief: '<p>Pick a cluttered screen from a real website, such as a product page or news article.</p>',
      steps: [
        'Write the main job of the screen.',
        'List and rank every content item and action.',
        'Wireframe a new version in priority order.',
        'Explain what you removed or moved down and why.',
      ],
      deliverable: 'Priority list, before screenshot and new wireframe.',
    },
    checklist: [
      'I wrote the main job of the screen.',
      'My list is fully ranked with no ties.',
      'The layout follows the ranking.',
      'I questioned low-priority items.',
    ],
    summary: [
      'Content hierarchy decides what matters most.',
      'Priority lists drive layout.',
      'Design content first.',
      'Give each screen one main job.',
    ],
    reading: [
      { title: 'Priority guides: a content-first alternative to wireframes', url: 'https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/', source: 'A List Apart' },
      { title: 'Inverted pyramid: writing for comprehension', url: 'https://www.nngroup.com/articles/inverted-pyramid/', source: 'Nielsen Norman Group' },
    ],
  },

  'responsive-wireframes': {
    objectives: [
      'Wireframe a screen for small, medium and large widths.',
      'Decide how content stacks, reflows and changes between sizes.',
      'Annotate responsive behaviour for developers.',
    ],
    explanation: `
<p>Most products are used on many screen sizes. <strong>Responsive wireframes</strong> show how a screen adapts, so the team decides behaviour deliberately instead of leaving it to chance.</p>
<h3>Common responsive behaviours</h3>
<ul>
<li><strong>Stack</strong>: columns side by side on wide screens stack vertically on narrow ones, in priority order.</li>
<li><strong>Reflow</strong>: a grid of cards changes from four per row to two to one.</li>
<li><strong>Reveal or collapse</strong>: secondary content moves into an accordion, tab or "more" link on small screens.</li>
<li><strong>Reposition</strong>: navigation moves from a top bar to a bottom tab bar or menu.</li>
<li><strong>Resize</strong>: images and text scale within limits.</li>
</ul>
<h3>Start with the smallest</h3>
<p>Wireframing the small screen first forces prioritisation, because there is only room for what matters. Then expand: what gets more space, what moves alongside, what new elements become useful on large screens?</p>
<h3>Annotate breakpoints</h3>
<p>Note the widths where layout changes, and describe the behaviour: "Filters move into a slide-up panel below 768px." Developers need this as much as the drawings.</p>`,
    why: `
<p>A layout designed only for desktop usually fails on mobile, where many people now do most of their browsing. Thinking through responsive behaviour at the wireframe stage is cheap; fixing it after visual design or development is expensive. Clear annotations also prevent developers having to guess.</p>`,
    example: `
<p>An online course platform's lesson page has video, a lesson list sidebar, notes and comments. The designer wireframes three widths.</p>
<p>On a phone, the video comes first, then the lesson title and a "Next lesson" button; the lesson list collapses into a drop-down and notes move into a tab. On a tablet, the lesson list becomes a slide-out panel. On desktop, the list sits in a sidebar and notes appear beside the video. Annotations describe each change, and the developer builds it without questions.</p>`,
    walkthrough: [
      { title: 'Write a priority list', body: 'Rank content for the screen.' },
      { title: 'Wireframe small first', body: 'Stack content in priority order on a narrow frame.' },
      { title: 'Expand to medium', body: 'Decide what moves side by side and what gains space.' },
      { title: 'Expand to large', body: 'Use extra space for secondary content, not just bigger margins.' },
      { title: 'Mark behaviours', body: 'Label stack, reflow, collapse and reposition changes.' },
      { title: 'Annotate breakpoints', body: 'Write widths and behaviour notes for developers.' },
    ],
    mistakes: [
      { mistake: 'Hiding important content on mobile.', fix: 'Reorder or collapse, but keep everything essential available.' },
      { mistake: 'Choosing breakpoints by device names.', fix: 'Choose them where the content starts to break.' },
      { mistake: 'Only showing static frames.', fix: 'Annotate how and why content changes.' },
    ],
    quiz: [
      { q: 'Why wireframe the smallest screen first?', options: ['It is faster to draw', 'It forces you to prioritise content', 'Developers prefer it'], answer: 1, explain: 'Limited space reveals what really matters.' },
      { q: 'Four cards per row become one per row on a phone. What behaviour is this?', options: ['Reflow', 'Reposition', 'Hide'], answer: 0, explain: 'Content reflows into fewer columns.' },
      { q: 'Where should breakpoints go?', options: ['At popular device widths only', 'Where the content layout starts to break', 'At every 100px'], answer: 1, explain: 'Content-based breakpoints last longer than device-based ones.' },
    ],
    exercise: {
      title: 'Three-width wireframe',
      minutes: 60,
      brief: '<p>Wireframe a restaurant menu and ordering page at phone, tablet and desktop widths.</p>',
      steps: [
        'Write a priority list.',
        'Wireframe the phone version first.',
        'Wireframe tablet and desktop versions.',
        'Annotate behaviours and breakpoints.',
      ],
      deliverable: 'Three annotated wireframes.',
    },
    checklist: [
      'I started with the smallest screen.',
      'Nothing essential is hidden on mobile.',
      'Large screens use space meaningfully.',
      'Behaviours and breakpoints are annotated.',
    ],
    summary: [
      'Responsive wireframes decide how layouts adapt.',
      'Common behaviours: stack, reflow, collapse, reposition, resize.',
      'Start small and expand.',
      'Annotate breakpoints based on content.',
    ],
    reading: [
      { title: 'Responsive web design basics', url: 'https://web.dev/articles/responsive-web-design-basics', source: 'web.dev' },
      { title: 'Mobile-first is not mobile-only', url: 'https://www.nngroup.com/articles/mobile-first-not-mobile-only/', source: 'Nielsen Norman Group' },
    ],
  },

  'screen-states': {
    objectives: [
      'Identify the states every data-driven screen needs.',
      'Design empty, loading, partial, error and success states.',
      'Write helpful messages that tell people what happened and what to do next.',
    ],
    explanation: `
<p>Designers often draw the "ideal" screen: full of perfect data, loaded instantly, with nothing going wrong. Real screens spend much of their time in other <strong>states</strong>.</p>
<h3>The common states</h3>
<ul>
<li><strong>Empty</strong>: no data yet (a new user's inbox) or no results (a search with no matches). A good empty state explains what will appear and how to start.</li>
<li><strong>Loading</strong>: content is on its way. Use skeleton screens or spinners, and show progress for longer waits.</li>
<li><strong>Partial</strong>: some data, but not much (one item in a list designed for many). Check the layout still looks intentional.</li>
<li><strong>Error</strong>: something went wrong. Say what happened in plain language, whether data was lost, and what to do next.</li>
<li><strong>Success</strong>: the action worked. Confirm it clearly and suggest the next step.</li>
<li><strong>Ideal</strong>: the screen with typical data.</li>
</ul>
<h3>Messages</h3>
<p>Good state messages are specific and kind. "Something went wrong" is not helpful; "We couldn't save your changes because you're offline. They're stored on this device and will save when you reconnect" is.</p>`,
    why: `
<p>Users judge products most harshly when things go wrong or when they are new. A thoughtful empty state can turn a confusing first visit into a clear start; a helpful error can prevent a support call. Designing states up front also prevents developers having to invent them under deadline pressure.</p>`,
    example: `
<p>A shared shopping-list app shows a blank white screen to new users. Many never add an item.</p>
<p>The designer creates an empty state with a short illustration, the text "Your list is empty. Add your first item or invite someone to share this list", and two buttons. They add a skeleton loading state, an offline error that keeps items locally, and a success toast when someone joins the list. First-week retention improves noticeably.</p>`,
    walkthrough: [
      { title: 'List screens with data', body: 'Find every screen that loads, saves or depends on data.' },
      { title: 'List states for each', body: 'Empty, loading, partial, error, success and ideal.' },
      { title: 'Design empty states', body: 'Explain what will appear and give a clear first action.' },
      { title: 'Design loading', body: 'Choose skeletons or spinners and plan for slow connections.' },
      { title: 'Design errors', body: 'Write messages that say what happened and what to do.' },
      { title: 'Design success', body: 'Confirm and suggest a next step.' },
    ],
    mistakes: [
      { mistake: 'Only designing the ideal state.', fix: 'Design every state for every data-driven screen.' },
      { mistake: 'Vague error messages.', fix: 'Say what happened, what it means and what to do.' },
      { mistake: 'Blank empty states.', fix: 'Explain and offer a first action.' },
    ],
    quiz: [
      { q: 'What should a good empty state include?', options: ['Nothing', 'An explanation and a clear first action', 'An error code'], answer: 1, explain: 'It turns emptiness into a starting point.' },
      { q: 'Which error message is best?', options: ['Error 500', 'Something went wrong', 'We couldn\'t send your message because the connection dropped. Try again.'], answer: 2, explain: 'It explains and gives a next step.' },
      { q: 'Why design a partial state?', options: ['Layouts designed for many items can look broken with one', 'It is required by law', 'To fill time'], answer: 0, explain: 'Partial data reveals layout weaknesses.' },
    ],
    exercise: {
      title: 'State set',
      minutes: 45,
      brief: '<p>Design all states for the "My bookings" screen of a fitness class app.</p>',
      steps: [
        'Wireframe the ideal state.',
        'Wireframe empty, loading, partial and error states.',
        'Write the message text for each.',
        'Design a success state for cancelling a booking.',
      ],
      deliverable: 'Six state wireframes with messages.',
    },
    checklist: [
      'I designed all six states.',
      'Empty states give a first action.',
      'Errors explain and suggest a fix.',
      'Messages use plain language.',
    ],
    summary: [
      'Real screens spend much time in non-ideal states.',
      'Design empty, loading, partial, error, success and ideal.',
      'Write specific, helpful messages.',
      'States shape first impressions and trust.',
    ],
    reading: [
      { title: 'Designing empty states in complex applications', url: 'https://www.nngroup.com/articles/empty-state-interface-design/', source: 'Nielsen Norman Group' },
      { title: 'Error-message guidelines', url: 'https://www.nngroup.com/articles/error-message-guidelines/', source: 'Nielsen Norman Group' },
    ],
  },

  'common-patterns': {
    objectives: [
      'Recognise common interface patterns and when to use them.',
      'Wireframe forms, tables, lists and dashboards that follow good practice.',
      'Use established patterns instead of reinventing them.',
    ],
    explanation: `
<p><strong>Interface patterns</strong> are proven solutions to recurring problems. People already know how they work, so using them reduces learning effort.</p>
<h3>Forms</h3>
<p>Put one column of fields in a logical order, with labels above fields, clear required and optional markers, and helpful hints. Ask only for what you need. Group related fields and break long forms into steps.</p>
<h3>Tables</h3>
<p>Use tables when people need to compare items across several attributes. Align numbers to the right, keep headers visible when scrolling, allow sorting, and consider how the table behaves on small screens (often turning rows into cards).</p>
<h3>Lists and cards</h3>
<p>Lists suit scanning many similar items; cards suit items with images and varied content. Keep the structure of each item consistent so people can scan.</p>
<h3>Dashboards</h3>
<p>Dashboards summarise what matters most at a glance. Start from the decisions people make with the data, show the most important numbers first, give context (compared with last month, against a target), and link to details.</p>
<h3>Other patterns</h3>
<p>Wizards for multi-step tasks, tabs for related views, accordions for optional detail, modals for focused interruptions. Each has known strengths and pitfalls.</p>`,
    why: `
<p>Using patterns well lets you spend your creativity where it matters, on the problem, rather than on reinventing a date picker. Familiar patterns are faster for users, faster for developers, and usually more accessible because they have been refined over time. Knowing why a pattern works also helps you recognise when it does not fit.</p>`,
    example: `
<p>A small accounting tool shows invoices in a grid of colourful cards. Users find it hard to compare due dates and amounts.</p>
<p>The designer replaces the cards with a table: client, invoice number, amount (right-aligned), due date and status, sortable by any column. Overdue invoices get a clear status label. On mobile, each row becomes a compact card with the amount and status most prominent. Users find overdue invoices much faster in testing.</p>`,
    walkthrough: [
      { title: 'Identify the task', body: 'What are people trying to do: enter data, compare, scan, monitor?' },
      { title: 'Choose a pattern', body: 'Match the task to a pattern: form, table, list, card, dashboard, wizard.' },
      { title: 'Study good examples', body: 'Look at design systems such as GOV.UK or Material for guidance.' },
      { title: 'Wireframe with real content', body: 'Use realistic data, including long and empty values.' },
      { title: 'Consider small screens', body: 'Plan how the pattern adapts.' },
      { title: 'Test', body: 'Check the pattern supports the task.' },
    ],
    mistakes: [
      { mistake: 'Using cards when people need to compare.', fix: 'Use a table for comparison across attributes.' },
      { mistake: 'Multi-column forms.', fix: 'Use a single column so the path is clear.' },
      { mistake: 'Dashboards full of every available metric.', fix: 'Start from decisions and show what supports them.' },
    ],
    quiz: [
      { q: 'When is a table better than cards?', options: ['When items have big images', 'When people compare items across several attributes', 'Always'], answer: 1, explain: 'Tables support comparison.' },
      { q: 'How should numbers be aligned in a table?', options: ['Left', 'Centre', 'Right'], answer: 2, explain: 'Right alignment makes digits line up for comparison.' },
      { q: 'Where should dashboard design start?', options: ['With the available data', 'With the decisions people make', 'With chart types'], answer: 1, explain: 'Decisions define what matters.' },
    ],
    exercise: {
      title: 'Pattern choice',
      minutes: 50,
      brief: '<p>Design screens for a volunteer rota app: sign-up form, shift list and a coordinator dashboard.</p>',
      steps: [
        'Choose a pattern for each screen and explain why.',
        'Wireframe each with realistic content.',
        'Show how the shift list adapts on mobile.',
        'List the decisions the dashboard supports.',
      ],
      deliverable: 'Three wireframes with pattern rationale.',
    },
    checklist: [
      'Each pattern matches the task.',
      'Forms use a single column with clear labels.',
      'Tables align numbers and adapt on mobile.',
      'The dashboard starts from decisions.',
    ],
    summary: [
      'Patterns are proven solutions people already understand.',
      'Match patterns to tasks: enter, compare, scan, monitor.',
      'Design systems are great references.',
      'Know a pattern\'s pitfalls as well as its strengths.',
    ],
    reading: [
      { title: 'Components and patterns', url: 'https://design-system.service.gov.uk/patterns/', source: 'GOV.UK Design System' },
      { title: 'Data tables: four major user tasks', url: 'https://www.nngroup.com/articles/data-tables/', source: 'Nielsen Norman Group' },
    ],
  },

  'critiquing-wireframes': {
    objectives: [
      'Run a structured critique of wireframes.',
      'Give feedback tied to goals and evidence rather than personal taste.',
      'Receive feedback and turn it into clear next steps.',
    ],
    explanation: `
<p>A <strong>design critique</strong> is a structured conversation about whether a design meets its goals. Wireframe critiques focus on structure, flow and content, not on visual style.</p>
<h3>Set the context</h3>
<p>The presenter explains the problem, the user, the goals, constraints and what kind of feedback they need ("I'm unsure whether the steps are in the right order"). Without context, feedback drifts towards personal preference.</p>
<h3>Give useful feedback</h3>
<ul>
<li>Tie comments to goals: "If the goal is fast reordering, the reorder button is hard to find."</li>
<li>Ask questions: "What happens if someone has no saved address?"</li>
<li>Be specific about location and reason.</li>
<li>Mention what works, so it is kept.</li>
</ul>
<h3>Receive feedback well</h3>
<p>Listen, take notes and ask clarifying questions. Avoid defending every decision; you can explain later. Not every comment needs action, but every comment deserves consideration.</p>
<h3>Close the loop</h3>
<p>End with a list of agreed changes and open questions, with owners.</p>`,
    why: `
<p>Critique is how design improves before it reaches users. Structured critiques catch problems early, spread knowledge across the team and build shared ownership. Feedback grounded in goals is easier to act on and less personal, which keeps the team honest and the atmosphere healthy.</p>`,
    example: `
<p>A designer presents wireframes for a parking app's payment flow. They state the goal (pay for parking in under 30 seconds), the main user (drivers standing next to their car) and the feedback wanted (flow order and clarity).</p>
<p>A developer asks what happens when the car's number plate is not recognised. A product manager notes that choosing a duration before the location means the price is unknown. Someone points out the large "Pay" button works well one-handed. The designer leaves with three agreed changes and one question for research.</p>`,
    walkthrough: [
      { title: 'Prepare context', body: 'Write the problem, user, goals, constraints and feedback wanted.' },
      { title: 'Present the flow', body: 'Walk through the wireframes as a user would.' },
      { title: 'Silent review', body: 'Give reviewers a few minutes to note thoughts before discussion.' },
      { title: 'Discuss against goals', body: 'Focus each comment on whether the design meets the goals.' },
      { title: 'Capture actions', body: 'Record agreed changes, questions and owners.' },
      { title: 'Follow up', body: 'Share what changed after the critique.' },
    ],
    mistakes: [
      { mistake: 'Presenting without context.', fix: 'Always explain goals and the kind of feedback needed.' },
      { mistake: 'Feedback about taste ("I don\'t like it").', fix: 'Explain how something helps or hurts the goal.' },
      { mistake: 'Defending every point.', fix: 'Listen first; decide later.' },
    ],
    quiz: [
      { q: 'What makes feedback useful?', options: ['It is short', 'It is tied to goals and specific', 'It is positive'], answer: 1, explain: 'Specific, goal-based feedback can be acted on.' },
      { q: 'What should a presenter do before showing work?', options: ['Apologise', 'Explain context, goals and feedback wanted', 'Show final visuals'], answer: 1, explain: 'Context focuses the critique.' },
      { q: 'Why include positive feedback?', options: ['To be polite only', 'So strong parts are kept in the next iteration', 'It is a rule'], answer: 1, explain: 'Knowing what works protects it.' },
    ],
    exercise: {
      title: 'Run a critique',
      minutes: 45,
      brief: '<p>Run a critique of a wireframe you made in this stage with at least two other people.</p>',
      steps: [
        'Write a one-paragraph context.',
        'Present and give silent review time.',
        'Discuss and capture feedback.',
        'Write agreed changes and update the wireframe.',
      ],
      deliverable: 'Context note, feedback list and updated wireframe.',
    },
    checklist: [
      'I gave context and asked for specific feedback.',
      'Feedback was tied to goals.',
      'I listened without defending.',
      'I recorded and acted on agreed changes.',
    ],
    summary: [
      'Critique checks whether a design meets its goals.',
      'Context focuses feedback.',
      'Give specific, goal-based feedback; receive it openly.',
      'End with clear actions.',
    ],
    reading: [
      { title: 'Design critiques: encourage a positive culture to improve products', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
    ],
  },

  'wireframes-to-visual': {
    objectives: [
      'Decide when a wireframe is ready to move into visual design.',
      'Carry structure and decisions forward without losing them.',
      'Apply visual hierarchy, type, colour and spacing to an approved wireframe.',
    ],
    explanation: `
<p>Wireframes settle structure; visual design makes it clear, usable and appealing. Moving between them is a step that is easy to rush.</p>
<h3>When is a wireframe ready?</h3>
<p>Before adding visual design, check that the flow has been reviewed, key states are designed, content is realistic, and the main questions have been tested or at least critiqued. Visual design makes changes slower and more expensive, so settle structure first.</p>
<h3>Keep the decisions</h3>
<p>Visual design should express the priorities you set in wireframes, not override them. If the wireframe put the delivery date first because research showed it mattered most, the visual design should make it the most prominent element, even if a product photo would look prettier there.</p>
<h3>Apply the fundamentals</h3>
<p>Use the skills from Stage 1: a type scale for hierarchy, a spacing scale and grid, a colour palette with clear semantic meaning, and accessible contrast. Ideally, use an existing design system or components so the result is consistent and buildable.</p>
<h3>Review again</h3>
<p>Once visual design is applied, check that hierarchy still matches the priority list. It is common for decoration to pull attention away from what matters.</p>`,
    why: `
<p>Many projects lose good structural work during the jump to visual design: priorities get shuffled for aesthetics, states get forgotten and content gets shortened to fit. Treating the transition deliberately protects the research and decisions behind the wireframe and produces visual designs that work, not just look good.</p>`,
    example: `
<p>A designer moves an approved wireframe for a parcel tracking screen into visual design. The priority list says: delivery date and time window, current status, live map, then help options.</p>
<p>The first visual draft has a large, attractive map at the top. Reviewing it against the priority list, the designer sees the date has become small and secondary. They swap them: the date becomes the largest text, the status uses a clear coloured label with text, and the map sits below. A quick five-second test confirms people now see when their parcel arrives first.</p>`,
    walkthrough: [
      { title: 'Check readiness', body: 'Flow reviewed, states designed, content realistic, main questions answered.' },
      { title: 'Restate priorities', body: 'Keep the priority list visible while designing.' },
      { title: 'Apply the system', body: 'Use the type scale, spacing, colour and components.' },
      { title: 'Design all states', body: 'Bring empty, loading and error states into visual design too.' },
      { title: 'Compare to the wireframe', body: 'Check the visual hierarchy still matches the priorities.' },
      { title: 'Test quickly', body: 'Use a five-second or first-click test to confirm.' },
    ],
    mistakes: [
      { mistake: 'Starting visual design before structure is settled.', fix: 'Review and test wireframes first.' },
      { mistake: 'Letting decoration override priorities.', fix: 'Check the design against the priority list.' },
      { mistake: 'Forgetting non-ideal states.', fix: 'Carry every state from wireframe into visual design.' },
    ],
    quiz: [
      { q: 'When is a wireframe ready for visual design?', options: ['As soon as it exists', 'When structure, flow and key states have been reviewed', 'When the client asks'], answer: 1, explain: 'Visual design makes structural changes more expensive.' },
      { q: 'A beautiful image pushes the key information down. What should you do?', options: ['Keep the image prominent', 'Restore the priority order from the wireframe', 'Remove all images'], answer: 1, explain: 'Visual design should express priorities, not override them.' },
      { q: 'What is a quick way to check visual hierarchy?', options: ['A five-second test', 'A survey', 'Asking the CEO'], answer: 0, explain: 'It shows what people notice first.' },
    ],
    exercise: {
      title: 'Wireframe to visual',
      minutes: 75,
      brief: '<p>Take a mid-fi wireframe from this stage and create a visual design.</p>',
      steps: [
        'Write the priority list next to the wireframe.',
        'Apply type, spacing and colour from Stage 1.',
        'Design one non-ideal state in visual style.',
        'Run a five-second test with two people and note what they saw first.',
      ],
      deliverable: 'Wireframe, visual design, one state and test notes.',
    },
    checklist: [
      'Structure was reviewed before visual work.',
      'Visual hierarchy matches the priority list.',
      'I used consistent type, spacing and colour.',
      'I included at least one non-ideal state.',
    ],
    summary: [
      'Settle structure in wireframes before visual design.',
      'Visual design should express the priorities, not change them.',
      'Apply fundamentals and existing systems.',
      'Re-check hierarchy and states after styling.',
    ],
    reading: [
      { title: 'Visual hierarchy in UX: definition', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/', source: 'Nielsen Norman Group' },
    ],
  },
};
