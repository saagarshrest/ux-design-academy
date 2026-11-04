// @ts-check
/* Stage 3: Information architecture. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'organising-information': {
    objectives: [
      'Explain what information architecture is and why it matters.',
      'Compare common organisation schemes such as alphabetical, task-based and audience-based.',
      'Choose an organisation scheme based on how users think, not how the organisation is structured.',
    ],
    explanation: `
<p><strong>Information architecture</strong> (IA) is the structure of a product: how content and features are organised, labelled and connected so people can find what they need and understand where they are.</p>
<h3>Organisation schemes</h3>
<p>There are only a few basic ways to group things:</p>
<ul>
<li><strong>Exact schemes</strong>: alphabetical, chronological, geographical. Useful when people know exactly what they are looking for (a name, a date, a place).</li>
<li><strong>Topic</strong>: grouping by subject, such as "Mortgages" and "Savings".</li>
<li><strong>Task</strong>: grouping by what people want to do, such as "Pay a bill" and "Report a problem".</li>
<li><strong>Audience</strong>: grouping by who people are, such as "Students" and "Staff". Useful only when audiences need clearly different content and people know which group they belong to.</li>
</ul>
<p>Most products mix schemes: a top level by task, then alphabetical lists inside.</p>
<h3>Users' mental models, not the org chart</h3>
<p>The most common IA failure is mirroring the organisation's internal structure. Visitors to a council website do not know which department handles parking permits; they just want a parking permit. Good IA follows users' <strong>mental models</strong>: the way they already think about the subject.</p>`,
    why: `
<p>If people cannot find something, it may as well not exist. Poor IA increases support calls, makes features look missing and erodes trust. Because IA sits underneath every screen, mistakes are expensive to fix later. Getting the structure right early makes navigation, search and content design much easier.</p>`,
    example: `
<p>A university website is organised by faculty and department. Prospective students looking for "accommodation" find it under "Estates and Facilities", a department name nobody outside the university recognises.</p>
<p>The team reorganises the top level by task for its main audience: "Study with us", "Fees and funding", "Accommodation", "Student life". Department pages still exist, but they are no longer the way in. Search logs show "accommodation" searches fall by half, because people now find it in the navigation.</p>`,
    walkthrough: [
      { title: 'List the content', body: 'Collect the main content and features the product needs to hold.' },
      { title: 'Learn how users think', body: 'Look at search logs, support questions and research to find users\' words and groupings.' },
      { title: 'Try two or three schemes', body: 'Sketch the same content organised by topic, task and audience.' },
      { title: 'Check against real tasks', body: 'For five common tasks, ask where a user would look in each version.' },
      { title: 'Pick and refine', body: 'Choose the scheme that serves the most common tasks, then test it (see card sorting and tree testing).' },
    ],
    mistakes: [
      { mistake: 'Copying the organisation chart.', fix: 'Organise around user tasks and language.' },
      { mistake: 'Audience-based navigation where audiences overlap.', fix: 'Only split by audience if people can confidently pick one group.' },
      { mistake: 'Designing IA alone at a desk.', fix: 'Use research and testing to check structure with real users.' },
    ],
    quiz: [
      { q: 'What is information architecture?', options: ['The visual style of a site', 'The structure and organisation of content and features', 'The back-end database'], answer: 1, explain: 'IA is about organising, labelling and connecting content.' },
      { q: 'When is alphabetical organisation most useful?', options: ['When people know the exact name of what they want', 'When people are browsing for ideas', 'Always'], answer: 0, explain: 'Exact schemes work when users already know the item.' },
      { q: 'What is the most common IA failure?', options: ['Too many colours', 'Mirroring internal departments instead of users\' mental models', 'Using a sidebar'], answer: 1, explain: 'Users do not know or care about internal structure.' },
    ],
    exercise: {
      title: 'Three schemes, one site',
      minutes: 40,
      brief: '<p>Take a local library\'s website content (events, borrowing, digital resources, opening times, membership, venues for hire) and organise it three ways.</p>',
      steps: [
        'List at least 20 content items.',
        'Organise them by topic, by task and by audience.',
        'Test each version against five common tasks.',
        'Choose one and explain why.',
      ],
      deliverable: 'Three draft structures and a short rationale.',
    },
    checklist: [
      'I based groupings on users\' words and tasks.',
      'I compared more than one scheme.',
      'I checked structures against real tasks.',
      'My structure does not mirror the organisation chart.',
    ],
    summary: [
      'IA is the structure that helps people find and understand content.',
      'Common schemes are exact, topic, task and audience.',
      'Follow users\' mental models, not internal structures.',
      'Test structures against real tasks.',
    ],
    reading: [
      { title: 'The difference between information architecture and navigation', url: 'https://www.nngroup.com/articles/ia-vs-navigation/', source: 'Nielsen Norman Group' },
      { title: 'Mental models', url: 'https://www.nngroup.com/articles/mental-models/', source: 'Nielsen Norman Group' },
    ],
  },

  'content-inventories': {
    objectives: [
      'Create a content inventory of an existing product.',
      'Run a content audit to judge quality, accuracy and usefulness.',
      'Use inventory findings to decide what to keep, merge, rewrite or remove.',
    ],
    explanation: `
<p>Before reorganising anything, you need to know what exists. A <strong>content inventory</strong> is a list of everything in a product: pages, sections, documents, features. A <strong>content audit</strong> goes further and judges each item.</p>
<h3>What to record</h3>
<p>A spreadsheet works well. Typical columns: ID, title, URL or location, content type, owner, last updated, and traffic if you have analytics. For an audit, add judgements: accurate, useful, up to date, duplicated, and a recommended action.</p>
<h3>Keep, merge, rewrite, remove</h3>
<p>Most audits end with four actions. <strong>Keep</strong> content that is accurate and used. <strong>Merge</strong> duplicates. <strong>Rewrite</strong> content that is needed but unclear or outdated. <strong>Remove</strong> content nobody needs. Large sites often find that a large share of pages can be removed or merged.</p>
<h3>Sampling</h3>
<p>For very large products you do not need to audit every item in detail. Inventory everything automatically (with a crawler or CMS export), then audit a representative sample by hand.</p>`,
    why: `
<p>You cannot design a good structure for content you have not seen. Inventories reveal duplication, outdated pages and gaps that would otherwise surface as surprises late in a project. They also give you evidence to persuade owners to remove content, and a checklist for migrating to a new structure.</p>`,
    example: `
<p>A charity's website has grown over ten years. The designer exports all 1,400 pages from the CMS into a spreadsheet and adds page views from analytics.</p>
<p>The audit shows that 60% of pages had fewer than ten visits in a year, there are eleven different pages about "volunteering", and three event pages are for events that ended years ago. The team merges the volunteering pages into one clear guide, archives old events and removes hundreds of unused pages. The new site has about 400 pages, and the IA work becomes far simpler.</p>`,
    walkthrough: [
      { title: 'Export or crawl', body: 'Get a list of all content from the CMS, a site crawler or by walking through the product.' },
      { title: 'Set up the spreadsheet', body: 'Add columns for location, type, owner, last updated and traffic.' },
      { title: 'Add audit criteria', body: 'Decide how you will judge accuracy, usefulness and quality.' },
      { title: 'Review items', body: 'Audit everything, or a representative sample for large products.' },
      { title: 'Recommend actions', body: 'Mark each item keep, merge, rewrite or remove.' },
      { title: 'Share with owners', body: 'Agree actions with the people responsible for the content.' },
    ],
    mistakes: [
      { mistake: 'Skipping the inventory and redesigning navigation first.', fix: 'Know what exists before you organise it.' },
      { mistake: 'Removing content without consulting owners.', fix: 'Share findings and agree actions; some low-traffic pages are legally required.' },
      { mistake: 'Treating traffic as the only measure of value.', fix: 'Consider importance and legal needs alongside page views.' },
    ],
    quiz: [
      { q: 'What is the difference between an inventory and an audit?', options: ['There is none', 'An inventory lists content; an audit judges its quality and usefulness', 'An audit is only for finance'], answer: 1, explain: 'The inventory is the list; the audit adds evaluation.' },
      { q: 'Eleven pages cover the same topic. What is the likely action?', options: ['Keep all', 'Merge into one', 'Remove all'], answer: 1, explain: 'Merging removes duplication and confusion.' },
      { q: 'Why not remove every low-traffic page?', options: ['Some may be important or legally required', 'Removing pages is forbidden', 'Traffic is never useful'], answer: 0, explain: 'Value is not only measured by visits.' },
    ],
    exercise: {
      title: 'Mini content audit',
      minutes: 60,
      brief: '<p>Inventory and audit one section of a real website, such as a small business or club site.</p>',
      steps: [
        'List at least 25 pages or items in a spreadsheet.',
        'Add audit columns for accuracy, usefulness and duplication.',
        'Mark each item keep, merge, rewrite or remove.',
        'Summarise the three biggest problems you found.',
      ],
      deliverable: 'The spreadsheet and a short summary of findings.',
    },
    checklist: [
      'My inventory covers the whole section.',
      'I used consistent audit criteria.',
      'Every item has a recommended action.',
      'I noted items that need an owner\'s decision.',
    ],
    summary: [
      'An inventory lists what exists; an audit judges it.',
      'Use a spreadsheet with consistent columns.',
      'Most audits result in keep, merge, rewrite or remove.',
      'Agree actions with content owners.',
    ],
    reading: [
      { title: 'Content inventory and auditing 101', url: 'https://www.nngroup.com/articles/content-audits/', source: 'Nielsen Norman Group' },
    ],
  },

  'card-sorting-tree-testing': {
    objectives: [
      'Run an open or closed card sort to learn how users group content.',
      'Run a tree test to check whether people can find items in a structure.',
      'Interpret results and use them to improve a structure.',
    ],
    explanation: `
<p>Two methods help you design and validate a structure with real users.</p>
<h3>Card sorting</h3>
<p>In a <strong>card sort</strong>, participants group content items written on cards. In an <strong>open sort</strong>, they create and name their own groups, which reveals how they think about the content. In a <strong>closed sort</strong>, they place cards into categories you provide, which checks whether your categories make sense. Card sorts can be run on paper or online; 15 to 30 participants give useful patterns for online sorts.</p>
<h3>Tree testing</h3>
<p>A <strong>tree test</strong> shows participants only the text structure (the "tree") with no visual design, and asks them to find items: "Where would you go to change your delivery address?" You measure whether they succeed, whether they went straight there, and where they went wrong. Because there is no design, it tests the structure and labels alone.</p>
<h3>Using them together</h3>
<p>A common sequence: open card sort to generate ideas, draft a structure, tree test it, revise, tree test again. Card sorting is generative; tree testing is evaluative.</p>`,
    why: `
<p>Designers and stakeholders tend to organise content the way they understand it, which is rarely how users do. These methods replace opinion with evidence before anything is built, when changes are cheap. Tree tests in particular give clear success rates that are easy to share and compare between versions.</p>`,
    example: `
<p>An outdoor clothing shop is restructuring its menu. An open card sort with 25 customers shows that people group by activity ("hiking", "running") more often than by product type ("jackets", "trousers").</p>
<p>The team builds a structure with activity as a main route and product type as a secondary one. A tree test with eight tasks shows strong success for most, but only 35% of people find "waterproof trousers" because they look under "Hiking" rather than "Rain wear". The team adds waterproof trousers in both places and renames "Rain wear" to "Waterproofs". A second test raises success to 78%.</p>`,
    walkthrough: [
      { title: 'Choose items', body: 'Pick 30 to 60 representative content items, written in plain language.' },
      { title: 'Run an open sort', body: 'Ask participants to group and name cards. Use a tool or paper.' },
      { title: 'Analyse groupings', body: 'Look at which items are often grouped together and what names people choose.' },
      { title: 'Draft a tree', body: 'Build a text-only hierarchy from the results.' },
      { title: 'Write tree test tasks', body: 'Write 8 to 10 realistic tasks that do not use the exact label words.' },
      { title: 'Test and iterate', body: 'Run the tree test, find failure points, revise and test again.' },
    ],
    mistakes: [
      { mistake: 'Using labels in tasks ("Find Account settings").', fix: 'Describe the goal in users\' words ("Change the email you log in with").' },
      { mistake: 'Treating card sort results as the final structure.', fix: 'Use them as input, then test the structure with a tree test.' },
      { mistake: 'Too many cards.', fix: 'Keep sorts to a manageable number so participants do not tire.' },
    ],
    quiz: [
      { q: 'Which method reveals how users would group content themselves?', options: ['Closed card sort', 'Open card sort', 'Tree test'], answer: 1, explain: 'In an open sort participants create their own groups.' },
      { q: 'What does a tree test evaluate?', options: ['Visual design', 'Whether people can find items in a structure using labels alone', 'Page load speed'], answer: 1, explain: 'Tree tests isolate structure and labels.' },
      { q: 'Why avoid label words in tree test tasks?', options: ['They make tasks too long', 'Participants match words instead of thinking about meaning', 'Tools forbid it'], answer: 1, explain: 'Word-matching inflates success rates.' },
    ],
    exercise: {
      title: 'Card sort and tree test',
      minutes: 90,
      brief: '<p>Run a small card sort and tree test for a recipe website.</p>',
      steps: [
        'Write 30 cards (recipes, articles, tools, account features).',
        'Run an open sort with at least five people.',
        'Build a tree and write six tasks.',
        'Run a tree test with five people and record success and paths.',
      ],
      deliverable: 'Card sort results, your tree, task list and tree test findings.',
    },
    checklist: [
      'My cards use plain language.',
      'I analysed which items were grouped together.',
      'My tree test tasks avoid label words.',
      'I revised the tree based on failures.',
    ],
    summary: [
      'Card sorting shows how users group content.',
      'Open sorts generate ideas; closed sorts check categories.',
      'Tree tests check whether people can find things in a structure.',
      'Use them in sequence and iterate.',
    ],
    reading: [
      { title: 'Card sorting: uncover users\' mental models', url: 'https://www.nngroup.com/articles/card-sorting-definition/', source: 'Nielsen Norman Group' },
      { title: 'Tree testing: fast, iterative evaluation of menu labels and categories', url: 'https://www.nngroup.com/articles/tree-testing/', source: 'Nielsen Norman Group' },
    ],
  },

  'sitemaps': {
    objectives: [
      'Create a sitemap that shows the structure and hierarchy of a product.',
      'Decide the right depth and breadth for a structure.',
      'Use a sitemap to communicate with stakeholders and developers.',
    ],
    explanation: `
<p>A <strong>sitemap</strong> is a diagram of a product's structure: the main sections, the pages within them and how they relate. It is a planning tool for the team, not the "sitemap" page some websites link to in the footer.</p>
<h3>Hierarchy</h3>
<p>Sitemaps are usually drawn as a tree. The top level holds the main sections that appear in the primary navigation. Each level below holds more specific content. Use consistent shapes: boxes for pages, a different style for external links or content that appears in many places.</p>
<h3>Depth and breadth</h3>
<p>A <strong>broad</strong> structure has many items at each level and few levels. A <strong>deep</strong> structure has few items per level and many levels. Very deep structures make people click through many layers and lose their way; very broad ones overwhelm with choices. Most products work best with a moderately broad top level and two or three levels of depth, but test with your own users and content.</p>
<h3>What to annotate</h3>
<p>Useful sitemaps note page types (list, detail, form), which pages are behind sign-in, and which are new, changed or removed compared with the current product.</p>`,
    why: `
<p>A sitemap lets the whole team see the product's shape at a glance. It makes gaps and duplication obvious, helps estimate effort, and gives developers a clear picture of routes and page templates. It is also a strong artefact in a portfolio, because it shows structural thinking.</p>`,
    example: `
<p>A dental practice is getting its first proper website. The designer drafts a sitemap with five top-level sections: Treatments, Prices, Our team, Book an appointment and Contact. Under Treatments sit eight treatment pages using one template.</p>
<p>Colour coding shows two pages behind a patient login (appointments and forms). The sitemap reveals that "Prices" and each treatment page both describe costs, risking contradictions. The team decides to keep prices in one place and link to it from each treatment, which also makes updates easier.</p>`,
    walkthrough: [
      { title: 'Start from research', body: 'Use your content inventory and card sort results.' },
      { title: 'Define top-level sections', body: 'Choose five to seven main sections based on users\' main tasks.' },
      { title: 'Add lower levels', body: 'Place pages under each section, keeping depth to two or three levels where possible.' },
      { title: 'Mark page types', body: 'Note which pages share a template.' },
      { title: 'Annotate', body: 'Show sign-in areas, new and removed pages, and links between sections.' },
      { title: 'Review with the team', body: 'Walk through key tasks on the sitemap with developers and stakeholders.' },
    ],
    mistakes: [
      { mistake: 'Drawing the sitemap before understanding the content.', fix: 'Start from an inventory and user research.' },
      { mistake: 'Very deep hierarchies.', fix: 'Flatten where possible and test whether people can find deep items.' },
      { mistake: 'No legend or annotations.', fix: 'Explain shapes, colours and page types.' },
    ],
    quiz: [
      { q: 'What does a planning sitemap show?', options: ['The visual design of each page', 'The structure and hierarchy of content', 'Marketing copy'], answer: 1, explain: 'Sitemaps show structure, not visual detail.' },
      { q: 'What is a risk of a very deep structure?', options: ['Too many colours', 'People must click through many layers and get lost', 'It loads slowly'], answer: 1, explain: 'Deep hierarchies hide content.' },
      { q: 'Why mark page types on a sitemap?', options: ['To show which pages share templates, helping design and build', 'For decoration', 'It is required by browsers'], answer: 0, explain: 'Shared templates reduce effort and keep consistency.' },
    ],
    exercise: {
      title: 'Sitemap for a small product',
      minutes: 45,
      brief: '<p>Create a sitemap for a community sports club website.</p>',
      steps: [
        'List the content the site needs.',
        'Define five to seven top-level sections.',
        'Add lower levels and mark page types.',
        'Annotate sign-in areas and add a legend.',
      ],
      deliverable: 'An annotated sitemap diagram.',
    },
    checklist: [
      'The top level reflects users\' main tasks.',
      'Depth is no more than three levels for most content.',
      'Page types are marked.',
      'There is a legend.',
    ],
    summary: [
      'Sitemaps show the structure and hierarchy of a product.',
      'Balance depth and breadth.',
      'Annotate page types and special areas.',
      'Use sitemaps to align the team and spot problems early.',
    ],
    reading: [
      { title: 'Flat vs. deep website hierarchies', url: 'https://www.nngroup.com/articles/flat-vs-deep-hierarchy/', source: 'Nielsen Norman Group' },
    ],
  },

  'navigation-patterns': {
    objectives: [
      'Recognise common navigation patterns for web and mobile.',
      'Choose a pattern based on the number of sections, device and user tasks.',
      'Make sure users can always tell where they are and how to go back.',
    ],
    explanation: `
<p>Navigation is how people move through the structure you designed. It must answer three questions on every screen: <em>Where am I? What can I do here? Where can I go next?</em></p>
<h3>Common patterns</h3>
<ul>
<li><strong>Top navigation bar</strong>: a row of links across the top. Works well on desktop for five to seven main sections.</li>
<li><strong>Sidebar</strong>: a vertical list, common in apps and dashboards with many sections.</li>
<li><strong>Bottom tab bar</strong>: three to five main destinations on mobile, always visible and easy to reach with a thumb.</li>
<li><strong>Hamburger or drawer menu</strong>: hides navigation behind an icon. Saves space but makes options less visible, so use it for secondary items or when there are too many items for tabs.</li>
<li><strong>Breadcrumbs</strong>: show the path to the current page in a hierarchy, useful on deep sites.</li>
<li><strong>Local navigation</strong>: links within a section, such as tabs on a settings page.</li>
</ul>
<h3>Showing location</h3>
<p>Highlight the current section, use clear page titles, and keep navigation in the same place on every screen. On mobile, the back behaviour must be predictable.</p>`,
    why: `
<p>Navigation is often the first thing people use and the thing they rely on when lost. Visible, consistent navigation helps people discover what a product offers. Hidden or inconsistent navigation makes features feel missing and increases reliance on search and support.</p>`,
    example: `
<p>A fitness app hides all sections behind a hamburger menu. Analytics show that few people ever visit "Plans", even though it is the main paid feature.</p>
<p>The team moves the four most important destinations (Today, Workouts, Plans, Profile) into a bottom tab bar, keeping settings and help in the profile area. Visits to Plans rise sharply because people can now see it exists. The highlighted active tab also helps people understand where they are.</p>`,
    walkthrough: [
      { title: 'Count your main destinations', body: 'Use your sitemap to list the top-level sections.' },
      { title: 'Consider devices', body: 'Decide how navigation adapts from mobile to desktop.' },
      { title: 'Choose primary navigation', body: 'Pick a pattern that keeps the most important destinations visible.' },
      { title: 'Add secondary navigation', body: 'Decide where less important items live, such as a profile area or footer.' },
      { title: 'Show location', body: 'Design active states, titles and breadcrumbs where needed.' },
      { title: 'Test key tasks', body: 'Ask people to complete tasks using only navigation.' },
    ],
    mistakes: [
      { mistake: 'Hiding primary destinations in a hamburger menu on mobile.', fix: 'Keep the top three to five destinations visible, for example in a tab bar.' },
      { mistake: 'No clear active state.', fix: 'Highlight the current section with more than just colour, such as weight or an indicator.' },
      { mistake: 'Navigation that changes position between screens.', fix: 'Keep primary navigation consistent everywhere.' },
    ],
    quiz: [
      { q: 'Which pattern suits four main destinations in a mobile app?', options: ['Hamburger menu', 'Bottom tab bar', 'Breadcrumbs'], answer: 1, explain: 'Tab bars keep a few key destinations visible and reachable.' },
      { q: 'What are breadcrumbs for?', options: ['Showing the path to the current page in a hierarchy', 'Decoration', 'Saving cookies'], answer: 0, explain: 'They help people understand and move up a hierarchy.' },
      { q: 'What is the main downside of hiding navigation behind an icon?', options: ['It looks old', 'People are less likely to discover the options', 'It is not accessible by definition'], answer: 1, explain: 'Out of sight is often out of mind.' },
    ],
    exercise: {
      title: 'Navigation for three devices',
      minutes: 45,
      brief: '<p>Using your sports club sitemap or another of your choice, design navigation for phone, tablet and desktop.</p>',
      steps: [
        'Choose primary and secondary navigation for each size.',
        'Sketch the current-location state.',
        'Explain what is hidden on smaller screens and why.',
        'Test with two people on three tasks.',
      ],
      deliverable: 'Three navigation sketches and test notes.',
    },
    checklist: [
      'Primary destinations are visible on every device.',
      'The current location is clear.',
      'Navigation is consistent across screens.',
      'I tested it with real tasks.',
    ],
    summary: [
      'Navigation should answer: where am I, what can I do, where can I go?',
      'Choose patterns based on number of destinations and device.',
      'Keep important destinations visible.',
      'Show current location clearly and consistently.',
    ],
    reading: [
      { title: 'Hamburger menus and hidden navigation hurt UX metrics', url: 'https://www.nngroup.com/articles/hamburger-menus/', source: 'Nielsen Norman Group' },
      { title: 'Breadcrumbs: 11 design guidelines for desktop and mobile', url: 'https://www.nngroup.com/articles/breadcrumbs/', source: 'Nielsen Norman Group' },
    ],
  },

  'user-and-task-flows': {
    objectives: [
      'Explain the difference between task flows, user flows and wireflows.',
      'Draw a flow that includes decisions, errors and alternative paths.',
      'Use flows to find unnecessary steps before designing screens.',
    ],
    explanation: `
<p>A flow shows the steps someone takes to complete a goal. Drawing flows before screens helps you design the journey, not just individual pages.</p>
<h3>Types of flow</h3>
<ul>
<li><strong>Task flow</strong>: a single, linear path for one task, such as "reset password". No branches; good for seeing the minimum steps.</li>
<li><strong>User flow</strong>: includes decisions and different paths depending on the user or situation, such as "already has an account?" or "payment failed".</li>
<li><strong>Wireflow</strong>: a flow drawn with rough screen sketches instead of boxes, useful for mobile apps where layout and flow are closely linked.</li>
</ul>
<h3>Notation</h3>
<p>Keep notation simple and consistent: rectangles for screens or steps, diamonds for decisions, arrows for movement, and a clear start and end. Label arrows with the action that causes them ("taps Continue").</p>
<h3>Don't forget the unhappy paths</h3>
<p>The "happy path" is when everything goes right. Real users also make errors, lose connection, change their minds and return later. Good flows include these paths, because that is where most usability problems live.</p>`,
    why: `
<p>Flows reveal complexity early. It is far cheaper to remove a step from a diagram than from a finished product. They help developers understand logic and edge cases, help product managers see scope, and help you spot where users might get stuck or drop off.</p>`,
    example: `
<p>A train ticket app's designer maps the flow for buying a ticket. The happy path has nine steps. The user flow reveals branches: railcard or not, return or single, seat reservation, and what happens if payment fails.</p>
<p>The diagram shows that people who apply a railcard are sent back to the start of the journey selection, adding three unnecessary steps. It also shows there is no path for a failed payment except starting again. The team fixes both in the flow before any screens are designed.</p>`,
    walkthrough: [
      { title: 'Define the goal and entry points', body: 'Where does the user start, and what does success look like?' },
      { title: 'Draw the happy path', body: 'List the minimum steps as a task flow.' },
      { title: 'Add decisions', body: 'Add diamonds wherever the path depends on a condition or choice.' },
      { title: 'Add unhappy paths', body: 'Include errors, cancellations, timeouts and returning later.' },
      { title: 'Count and challenge steps', body: 'Question every step: can it be removed, merged or automated?' },
      { title: 'Review with developers', body: 'Check logic and edge cases with the people who will build it.' },
    ],
    mistakes: [
      { mistake: 'Only drawing the happy path.', fix: 'Add errors, alternatives and recovery routes.' },
      { mistake: 'Inconsistent shapes and unlabelled arrows.', fix: 'Use a simple legend and label each arrow with an action.' },
      { mistake: 'Starting with screens instead of flows.', fix: 'Draw the flow first to understand the journey.' },
    ],
    quiz: [
      { q: 'What does a diamond usually represent in a flow?', options: ['A screen', 'A decision or condition', 'The end'], answer: 1, explain: 'Diamonds show branching points.' },
      { q: 'What is a wireflow?', options: ['A flow using rough screen sketches', 'A flow about cables', 'A data model'], answer: 0, explain: 'Wireflows combine flow and layout.' },
      { q: 'Why include unhappy paths?', options: ['To make diagrams bigger', 'Because many real problems happen when things go wrong', 'They are required by law'], answer: 1, explain: 'Errors and alternatives are where users most often get stuck.' },
    ],
    exercise: {
      title: 'Flow with unhappy paths',
      minutes: 45,
      brief: '<p>Draw a user flow for booking a haircut online.</p>',
      steps: [
        'Draw the happy path as a task flow.',
        'Add at least three decisions.',
        'Add at least three unhappy paths, such as no slots available.',
        'Remove or merge at least one step and explain why.',
      ],
      deliverable: 'A user flow diagram with a legend and a note on changes.',
    },
    checklist: [
      'My flow has a clear start and end.',
      'It includes decisions and unhappy paths.',
      'Arrows are labelled with actions.',
      'I challenged unnecessary steps.',
    ],
    summary: [
      'Task flows show one path; user flows include decisions; wireflows add screens.',
      'Use simple, consistent notation.',
      'Design unhappy paths, not just happy ones.',
      'Flows make complexity visible before it is built.',
    ],
    reading: [
      { title: 'User journeys vs. user flows', url: 'https://www.nngroup.com/articles/user-journeys-vs-user-flows/', source: 'Nielsen Norman Group' },
      { title: 'Wireflows: a UX deliverable for workflows and apps', url: 'https://www.nngroup.com/articles/wireflows/', source: 'Nielsen Norman Group' },
    ],
  },

  'naming-and-labelling': {
    objectives: [
      'Write navigation and section labels that users understand at a glance.',
      'Use research to find the words users actually use.',
      'Keep labels consistent across a product.',
    ],
    explanation: `
<p>Labels are the words on navigation, buttons, headings and links. They are tiny pieces of text with a big job: telling people what they will find before they click.</p>
<h3>Use users' words</h3>
<p>Organisations develop internal language: product names, department names, jargon. Users do not share it. Search logs, support tickets, interview transcripts and card sorts show the words people use. If customers search for "cancel" and your menu says "Manage membership lifecycle", they will not find it.</p>
<h3>Qualities of good labels</h3>
<ul>
<li><strong>Specific</strong>: "Delivery and returns" beats "Information".</li>
<li><strong>Distinct</strong>: labels should not overlap. "Resources", "Tools" and "Support" are hard to tell apart.</li>
<li><strong>Front-loaded</strong>: put the key word first so people can scan.</li>
<li><strong>Consistent</strong>: call the same thing by the same name everywhere. If the menu says "Orders", the page title should not say "Purchases".</li>
</ul>
<h3>Clever is costly</h3>
<p>Playful names ("The Lab", "Discover") can fit a brand but make people guess. Use them sparingly and never for core navigation.</p>`,
    why: `
<p>People decide where to go by reading labels, so unclear labels break even a well-structured product. Labels are cheap to change and easy to test, which makes them one of the highest-value things a designer can improve. Consistent naming also reduces confusion between teams and in documentation.</p>`,
    example: `
<p>An energy company's app has a section called "Insights". Tree testing shows only 20% of people look there to see their energy use; most look under "Account" or "Usage".</p>
<p>The team renames "Insights" to "Energy use", the phrase customers use in support calls. They also align terms: the app said "meter reading", "submit reading" and "send reading" in different places, which they standardise to "Send a meter reading". Retesting shows success above 80%.</p>`,
    walkthrough: [
      { title: 'Collect users\' words', body: 'Review search logs, support tickets and research transcripts.' },
      { title: 'List current labels', body: 'Write down every navigation and section label in the product.' },
      { title: 'Spot problems', body: 'Mark jargon, overlaps, vague labels and inconsistencies.' },
      { title: 'Rewrite', body: 'Draft specific, distinct, front-loaded labels using users\' language.' },
      { title: 'Test', body: 'Use tree tests or quick first-click tests to compare options.' },
      { title: 'Document', body: 'Record agreed terms in a shared glossary or content guide.' },
    ],
    mistakes: [
      { mistake: 'Using internal or product names.', fix: 'Use the words customers use, found through research.' },
      { mistake: 'Overlapping labels like "Help", "Support" and "Resources".', fix: 'Merge or rename so each label is clearly different.' },
      { mistake: 'Different names for the same thing.', fix: 'Pick one term and use it everywhere.' },
    ],
    quiz: [
      { q: 'Where can you find users\' own words?', options: ['Brand guidelines', 'Search logs and support tickets', 'The org chart'], answer: 1, explain: 'These show the language people naturally use.' },
      { q: 'Which label is most specific?', options: ['Information', 'Delivery and returns', 'More'], answer: 1, explain: 'It tells people exactly what they will find.' },
      { q: 'Why keep terms consistent?', options: ['It saves ink', 'Different names make people think they are different things', 'It is a legal requirement'], answer: 1, explain: 'Inconsistency creates doubt and confusion.' },
    ],
    exercise: {
      title: 'Label audit',
      minutes: 30,
      brief: '<p>Audit the navigation labels of a real website or app you use.</p>',
      steps: [
        'List every navigation label.',
        'Mark jargon, overlaps and vague terms.',
        'Rewrite at least five labels.',
        'Ask three people to say what they expect under each old and new label.',
      ],
      deliverable: 'A before and after label list with test notes.',
    },
    checklist: [
      'My labels use users\' words.',
      'No two labels overlap in meaning.',
      'Key words come first.',
      'Each concept has one name.',
    ],
    summary: [
      'Labels tell people what they will find before they click.',
      'Use users\' language, not internal jargon.',
      'Make labels specific, distinct, front-loaded and consistent.',
      'Test labels; they are cheap to change.',
    ],
    reading: [
      { title: 'Navigation: you are here', url: 'https://www.nngroup.com/articles/navigation-you-are-here/', source: 'Nielsen Norman Group' },
      { title: 'Writing link text', url: 'https://www.gov.uk/guidance/content-design/links', source: 'GOV.UK' },
    ],
  },

  'search-and-filtering': {
    objectives: [
      'Decide when a product needs search, filters or both.',
      'Design a search experience that handles typos, no results and many results.',
      'Design filters that are easy to apply, understand and remove.',
    ],
    explanation: `
<p>Navigation helps people browse. <strong>Search</strong> helps people who know what they want. <strong>Filters</strong> help people narrow down a large set of results. Most content-heavy products need all three.</p>
<h3>Search</h3>
<ul>
<li>Make the search box visible and wide enough for typical queries.</li>
<li>Offer suggestions as people type, and handle typos and synonyms.</li>
<li>Show the query on the results page and let people edit it.</li>
<li>Design the <strong>no results</strong> state: suggest spelling fixes, related items or a way to contact you.</li>
</ul>
<h3>Filters</h3>
<p>Filters (sometimes called facets) let people narrow results by attributes such as price, size or date. Good filters reflect what people actually care about, show how many results each option would give, make active filters obvious, and let people remove them one at a time or all at once.</p>
<p>On mobile, filters usually move into a panel or sheet. Decide whether filters apply immediately or with an "Apply" button; immediate updates feel faster, but a button avoids constant reloading on slow connections.</p>
<h3>Sorting</h3>
<p>Sorting changes the order, not the set. Make the default sort sensible (often relevance) and the current sort visible.</p>`,
    why: `
<p>Many users go straight to search, and those who do often have a clear intent and are valuable. A poor search experience sends them away. Filters turn an overwhelming list into a manageable one. Search logs are also one of the best sources of research data, showing exactly what people want in their own words.</p>`,
    example: `
<p>A recruitment site shows 2,000 jobs for "designer". Filters exist, but they are hidden behind a small icon and do not show counts. People scroll endlessly or leave.</p>
<p>The team adds visible filters for location, salary, contract type and remote working, each showing the number of matching jobs. Active filters appear as removable chips above the results. Search now handles "UX desinger" by suggesting "UX designer". The no-results page suggests removing the most restrictive filter. Applications per visit increase.</p>`,
    walkthrough: [
      { title: 'Study search logs', body: 'Find the most common queries, failed searches and zero-result terms.' },
      { title: 'Decide what to filter by', body: 'Choose attributes based on how users make decisions.' },
      { title: 'Design the search box and suggestions', body: 'Place it prominently and plan for typos and synonyms.' },
      { title: 'Design results', body: 'Show the query, result count, sort order and active filters.' },
      { title: 'Design edge states', body: 'No results, too many results, and slow loading.' },
      { title: 'Test with real queries', body: 'Use queries from the logs in usability tests.' },
    ],
    mistakes: [
      { mistake: 'A dead-end no results page.', fix: 'Offer corrections, related results and a way forward.' },
      { mistake: 'Filters based on internal data rather than user decisions.', fix: 'Research which attributes matter when people choose.' },
      { mistake: 'Active filters that are hard to see or remove.', fix: 'Show them as chips with a clear remove action and a "Clear all".' },
    ],
    quiz: [
      { q: 'What should a no-results page do?', options: ['Show an error code', 'Suggest corrections, alternatives and next steps', 'Return to the home page'], answer: 1, explain: 'Help people recover rather than leaving them stuck.' },
      { q: 'What is the difference between sorting and filtering?', options: ['None', 'Sorting changes order; filtering changes which items are shown', 'Filtering is only for mobile'], answer: 1, explain: 'Filters narrow the set; sorting reorders it.' },
      { q: 'Why show result counts next to filter options?', options: ['To prevent people choosing options that lead to zero results', 'For decoration', 'To slow the page'], answer: 0, explain: 'Counts help people predict outcomes.' },
    ],
    exercise: {
      title: 'Search and filter redesign',
      minutes: 60,
      brief: '<p>Redesign the search and filter experience for an online second-hand furniture shop.</p>',
      steps: [
        'List the top ten queries you would expect.',
        'Choose five filters based on how people decide.',
        'Sketch results with active filters and sorting.',
        'Sketch the no-results and too-many-results states.',
      ],
      deliverable: 'Sketches of search, results, filters and edge states with notes.',
    },
    checklist: [
      'Search is visible and handles typos.',
      'Filters reflect user decisions.',
      'Active filters are visible and removable.',
      'I designed no-results and loading states.',
    ],
    summary: [
      'Navigation is for browsing, search for knowing, filters for narrowing.',
      'Design for typos, no results and too many results.',
      'Make filters relevant, countable and easy to remove.',
      'Search logs are excellent research data.',
    ],
    reading: [
      { title: 'Search: visible and simple', url: 'https://www.nngroup.com/articles/search-visible-and-simple/', source: 'Nielsen Norman Group' },
      { title: 'Filters vs. facets: definitions', url: 'https://www.nngroup.com/articles/filters-vs-facets/', source: 'Nielsen Norman Group' },
    ],
  },

  'complex-products': {
    objectives: [
      'Recognise what makes a product structurally complex.',
      'Use object-based thinking to organise complex products.',
      'Apply progressive disclosure and roles to keep complexity manageable.',
    ],
    explanation: `
<p>Some products are complex by nature: project management tools, accounting software, hospital systems. They have many features, many types of user and lots of data. You cannot make them simple, but you can make them clear.</p>
<h3>Think in objects</h3>
<p><strong>Object-oriented UX</strong> starts by identifying the main "things" in a system and how they relate: in a project tool, Projects contain Tasks, Tasks have Comments and an Assignee, People belong to Teams. Structuring navigation and screens around these objects makes the product predictable: every object has a list view, a detail view and consistent actions.</p>
<h3>Progressive disclosure</h3>
<p>Show what most people need first, and reveal advanced options when asked. Advanced settings, bulk actions and rarely used fields can sit behind an "Advanced" section or a secondary menu.</p>
<h3>Roles and permissions</h3>
<p>Different users need different things. A manager approves expenses; an employee submits them. Structuring by role (or hiding what a role cannot do) reduces clutter, but be careful: people often share roles or switch between them.</p>
<h3>Consistency</h3>
<p>In complex products, consistent patterns matter more than anywhere else. If every list sorts, filters and selects in the same way, users only learn it once.</p>`,
    why: `
<p>Complex products are where structure has the most impact. Users spend hours a day in them, so small inefficiencies multiply. Clear objects, consistent patterns and progressive disclosure reduce training costs, errors and support requests, and they make the product easier to extend without becoming a maze.</p>`,
    example: `
<p>A property management platform has grown feature by feature. Each team added its own menu items, so there are 23 top-level links. Landlords cannot find tenancy documents.</p>
<p>The designer runs an object mapping workshop: Properties, Units, Tenancies, Tenants, Payments, Maintenance requests and Documents. The new navigation is built around Properties, with everything else reachable from a property's detail page. Documents attach to the object they belong to rather than living in a separate section. Top-level links drop to six, and support tickets about finding documents fall sharply.</p>`,
    walkthrough: [
      { title: 'List the objects', body: 'Identify the main things users work with, using research and the existing product.' },
      { title: 'Map relationships', body: 'Draw how objects connect: which contain, belong to or reference others.' },
      { title: 'Define attributes and actions', body: 'List what each object has and what people can do with it.' },
      { title: 'Design consistent views', body: 'Plan a list and detail pattern that every object uses.' },
      { title: 'Apply progressive disclosure', body: 'Decide what is essential and what can be revealed later.' },
      { title: 'Consider roles', body: 'Map which roles need which objects and actions.' },
    ],
    mistakes: [
      { mistake: 'Organising by feature or team.', fix: 'Organise around the objects users think about.' },
      { mistake: 'Showing every option at once.', fix: 'Use progressive disclosure for advanced features.' },
      { mistake: 'Inconsistent patterns between sections.', fix: 'Use the same list, detail and action patterns everywhere.' },
    ],
    quiz: [
      { q: 'What is the first step in object-oriented UX?', options: ['Choose colours', 'Identify the main objects users work with', 'Write code'], answer: 1, explain: 'Objects form the backbone of the structure.' },
      { q: 'What does progressive disclosure mean?', options: ['Showing everything immediately', 'Showing essential options first and revealing advanced ones when needed', 'Hiding content permanently'], answer: 1, explain: 'It keeps screens focused without removing power.' },
      { q: 'Why is consistency especially important in complex products?', options: ['It looks nicer', 'Users learn a pattern once and reuse it everywhere', 'It is cheaper to print'], answer: 1, explain: 'Consistency reduces learning effort.' },
    ],
    exercise: {
      title: 'Object map',
      minutes: 50,
      brief: '<p>Create an object map for a school\'s homework app used by teachers, students and parents.</p>',
      steps: [
        'List at least six objects.',
        'Draw relationships between them.',
        'List attributes and actions for three objects.',
        'Note which roles can see and act on each object.',
      ],
      deliverable: 'An object map with roles noted.',
    },
    checklist: [
      'I identified objects from users\' language.',
      'Relationships are clear.',
      'Each object has consistent views and actions.',
      'I considered different roles.',
    ],
    summary: [
      'Complex products cannot be simple, but they can be clear.',
      'Organise around objects and their relationships.',
      'Use progressive disclosure and roles to reduce clutter.',
      'Consistent patterns make complexity learnable.',
    ],
    reading: [
      { title: 'Object-oriented UX', url: 'https://alistapart.com/article/ooux-a-foundation-for-interaction-design/', source: 'A List Apart' },
      { title: 'Progressive disclosure', url: 'https://www.nngroup.com/articles/progressive-disclosure/', source: 'Nielsen Norman Group' },
    ],
  },

  'validating-ia': {
    objectives: [
      'Choose methods to validate an information architecture before and after launch.',
      'Set success measures for findability.',
      'Iterate on IA using evidence from tests and analytics.',
    ],
    explanation: `
<p>An IA is a hypothesis about how people will find things. <strong>Validation</strong> checks that hypothesis before you invest in building it, and keeps checking after launch.</p>
<h3>Before launch</h3>
<ul>
<li><strong>Tree testing</strong>: checks findability using the structure alone.</li>
<li><strong>First-click testing</strong>: shows a screen design and asks where people would click first to complete a task. A correct first click strongly predicts task success.</li>
<li><strong>Usability testing</strong> with prototypes: checks the IA in context with navigation and content.</li>
</ul>
<h3>After launch</h3>
<ul>
<li><strong>Analytics</strong>: paths through the site, pages where people go back and forth ("pogo-sticking"), and exit pages.</li>
<li><strong>Site search logs</strong>: frequent searches for things that are in the navigation suggest the labels or placement are not working.</li>
<li><strong>Support data</strong>: questions about where to find something.</li>
</ul>
<h3>Measures</h3>
<p>Common measures are task success rate, directness (went straight there without backtracking) and time to find. Set targets before testing, such as 80% success on key tasks, so you know when the IA is good enough.</p>`,
    why: `
<p>Restructuring after launch is expensive and disruptive for existing users. Validation catches problems while they are cheap to fix and gives the team confidence to proceed. Continued monitoring after launch shows when content growth has started to break the structure, which happens to every product over time.</p>`,
    example: `
<p>A bank redesigns its help centre IA. A tree test with 60 participants and ten tasks shows 85% average success, but only 40% for "report a lost card", because people look under "Security" rather than "Cards".</p>
<p>The team adds a cross-link and moves the item. A first-click test on the new design confirms the improvement. Three months after launch, search logs show "lost card" is still a top search, so the team adds an urgent "Lost or stolen card" link on the help centre home page. Searches for it drop.</p>`,
    walkthrough: [
      { title: 'Choose key tasks', body: 'Pick the 8 to 10 most important or frequent tasks.' },
      { title: 'Set targets', body: 'Decide what success rate and directness count as good enough.' },
      { title: 'Run a tree test', body: 'Test the structure without design.' },
      { title: 'Run a first-click test', body: 'Test designed screens to see whether people start in the right place.' },
      { title: 'Fix and retest', body: 'Change failing areas and test again.' },
      { title: 'Monitor after launch', body: 'Review analytics, search logs and support data regularly.' },
    ],
    mistakes: [
      { mistake: 'Skipping validation because the structure "feels obvious".', fix: 'Test it. What feels obvious to the team often is not to users.' },
      { mistake: 'Only testing once.', fix: 'Iterate and retest, and keep monitoring after launch.' },
      { mistake: 'No targets.', fix: 'Set success thresholds before you test.' },
    ],
    quiz: [
      { q: 'What does a first-click test measure?', options: ['Page load speed', 'Where people click first to complete a task', 'Colour preference'], answer: 1, explain: 'A correct first click is a strong predictor of success.' },
      { q: 'Many people search for something that is in the navigation. What does this suggest?', options: ['Search is perfect', 'The label or placement in navigation may not be working', 'Nothing'], answer: 1, explain: 'Search logs reveal navigation failures.' },
      { q: 'Why set targets before testing?', options: ['To know when the IA is good enough', 'To make reports longer', 'Tools require it'], answer: 0, explain: 'Targets prevent moving goalposts.' },
    ],
    exercise: {
      title: 'IA validation plan',
      minutes: 30,
      brief: '<p>Write a validation plan for an IA you created earlier in this stage.</p>',
      steps: [
        'List eight key tasks.',
        'Set success and directness targets.',
        'Choose pre-launch methods and explain why.',
        'List three post-launch signals you would monitor.',
      ],
      deliverable: 'A one-page validation plan.',
    },
    checklist: [
      'My tasks reflect real user goals.',
      'I set targets before testing.',
      'I combined pre-launch and post-launch methods.',
      'I planned to iterate.',
    ],
    summary: [
      'An IA is a hypothesis that must be validated.',
      'Use tree tests, first-click tests and usability tests before launch.',
      'Use analytics, search logs and support data after launch.',
      'Set targets and iterate.',
    ],
    reading: [
      { title: 'The importance of the first click', url: 'https://measuringu.com/first-click/', source: 'MeasuringU' },
      { title: 'Tree testing part 2: interpreting the results', url: 'https://www.nngroup.com/articles/interpreting-tree-test-results/', source: 'Nielsen Norman Group' },
    ],
  },
};
