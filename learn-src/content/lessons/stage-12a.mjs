// @ts-check
/* Stage 12 (part 1): Advanced paths. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'path-mobile': {
    objectives: [
      'Apply iOS and Android platform conventions appropriately.',
      'Design for gestures, small screens and interrupted use.',
      'Handle offline states and notifications responsibly.',
    ],
    explanation: `
<p>Mobile apps are used in short bursts, one-handed, on the move and often with poor connections. Good mobile design embraces these conditions.</p>
<h3>Platform conventions</h3>
<p>iOS (Apple's Human Interface Guidelines) and Android (Material Design) differ in navigation, controls, typography and system behaviours such as the back action. Follow each platform's conventions where users expect them, while keeping your brand and core flows consistent.</p>
<h3>Touch and gestures</h3>
<ul>
<li>Make touch targets at least around 44 to 48 points/pixels.</li>
<li>Place frequent actions within thumb reach, often near the bottom.</li>
<li>Always provide a visible alternative to hidden gestures such as swipe-to-delete.</li>
</ul>
<h3>Interrupted and offline use</h3>
<p>Save progress automatically, restore state when people return and show clear offline states. Queue actions to sync later where possible, and tell people what happened.</p>
<h3>Notifications and permissions</h3>
<p>Ask for permissions (location, camera, notifications) in context, explaining the benefit, not on first launch. Send notifications only when they are timely and useful, and let people control them.</p>`,
    why: `
<p>Mobile is the main or only device for many people. Ignoring platform conventions makes apps feel foreign; ignoring real-world conditions such as poor signal and interruptions makes them fail when people need them most. Respectful permissions and notifications protect trust and reduce uninstalls.</p>`,
    example: `
<p>A parcel delivery app asks for location, camera and notification permissions on first launch; many people deny all three. The redesign asks for notifications only after someone books a delivery ("Get a message when your driver is nearby?"), and camera only when they choose to photograph a damaged parcel. Opt-in rates rise sharply, and the app saves photo uploads to send when signal returns.</p>`,
    walkthrough: [
      { title: 'Review guidelines', body: 'Read the relevant parts of iOS and Android guidance.' },
      { title: 'Map contexts', body: 'List where, when and how people use the app.' },
      { title: 'Check touch', body: 'Review target sizes and thumb reach.' },
      { title: 'Add gesture alternatives', body: 'Provide visible controls for every gesture.' },
      { title: 'Design offline and resume', body: 'Design offline states, sync and state restoration.' },
      { title: 'Plan permissions', body: 'Ask in context with clear benefits.' },
    ],
    mistakes: [
      { mistake: 'Asking for all permissions at launch.', fix: 'Ask in context when the benefit is clear.' },
      { mistake: 'Hidden gestures only.', fix: 'Provide visible alternatives.' },
      { mistake: 'Ignoring offline use.', fix: 'Design offline states and syncing.' },
    ],
    quiz: [
      { q: 'When should an app ask for camera permission?', options: ['On first launch', 'When the person chooses a camera feature', 'Never'], answer: 1, explain: 'In context, with a clear benefit.' },
      { q: 'Why follow platform conventions?', options: ['They are required by law', 'They match what users expect on their device', 'They look nicer'], answer: 1, explain: 'Familiarity reduces effort.' },
      { q: 'What should happen when signal drops mid-task?', options: ['Lose progress', 'Save progress and sync later where possible', 'Close the app'], answer: 1, explain: 'Design for interruption.' },
    ],
    exercise: {
      title: 'Mobile audit',
      minutes: 45,
      brief: '<p>Audit a mobile app you use.</p>',
      steps: [
        'Check targets, thumb reach and gestures.',
        'Turn on airplane mode and try a key task.',
        'Note how and when it asks for permissions.',
        'Propose three improvements.',
      ],
      deliverable: 'An audit with three improvements.',
    },
    checklist: [
      'I followed platform conventions.',
      'Targets and reach are comfortable.',
      'Offline and interruption are handled.',
      'Permissions are asked in context.',
    ],
    summary: [
      'Design for short, interrupted, one-handed use.',
      'Follow platform conventions.',
      'Handle offline states and save progress.',
      'Ask for permissions and send notifications respectfully.',
    ],
    reading: [
      { title: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', source: 'Apple' },
      { title: 'Material Design 3', url: 'https://m3.material.io/', source: 'Google' },
    ],
  },

  'path-saas-dashboards': {
    objectives: [
      'Design dashboards that support decisions, not decoration.',
      'Design data tables for scanning, sorting and bulk actions.',
      'Handle roles, permissions and complex workflows.',
    ],
    explanation: `
<p>SaaS and enterprise products are used for hours a day by expert users doing complex work. Efficiency, clarity and reliability matter more than novelty.</p>
<h3>Dashboards</h3>
<p>Start with the decisions people make. A good dashboard answers "Is anything wrong? What needs my attention?" Show a few key metrics with comparison (versus target or last period), highlight exceptions and link to detail. Avoid filling space with charts nobody uses.</p>
<h3>Data tables</h3>
<ul>
<li>Align numbers right and text left; use tabular figures.</li>
<li>Allow sorting, filtering, column choice and saved views.</li>
<li>Support bulk selection and actions.</li>
<li>Keep headers visible on scroll and offer density options.</li>
</ul>
<h3>Roles and permissions</h3>
<p>Different users (admins, managers, agents) need different views and actions. Hide or disable actions people cannot take, explaining why when disabled.</p>
<h3>Complex workflows</h3>
<p>Support keyboard shortcuts, drafts, undo and audit trails. Research with real expert users, as their workflows are often invisible to outsiders.</p>`,
    why: `
<p>Small inefficiencies in tools used all day multiply into large costs in time and errors. Enterprise buyers increasingly judge products on usability, and poor tools lead to workarounds, spreadsheets and mistakes. Designing for expert workflows creates real value and loyalty.</p>`,
    example: `
<p>A support dashboard shows twelve charts. Team leads ignore it and check a spreadsheet instead. Research shows they need to know three things: tickets at risk of breaching the response target, agents overloaded and unusual spikes. The redesign shows these three at the top with exceptions highlighted and links to filtered ticket tables. Team leads start using it daily.</p>`,
    walkthrough: [
      { title: 'Identify decisions', body: 'List the decisions each role makes.' },
      { title: 'Choose metrics', body: 'Pick a few metrics with comparisons.' },
      { title: 'Highlight exceptions', body: 'Surface what needs attention.' },
      { title: 'Design tables', body: 'Add sorting, filtering, bulk actions and saved views.' },
      { title: 'Map roles', body: 'Define what each role sees and can do.' },
      { title: 'Support experts', body: 'Add shortcuts, undo and audit trails.' },
    ],
    mistakes: [
      { mistake: 'Decorative dashboards.', fix: 'Design for decisions and exceptions.' },
      { mistake: 'Tables without sorting or filtering.', fix: 'Support scanning and manipulation.' },
      { mistake: 'Designing without expert users.', fix: 'Research real workflows.' },
    ],
    quiz: [
      { q: 'What should a dashboard start from?', options: ['Available data', 'The decisions people make', 'Chart types'], answer: 1, explain: 'Decisions drive design.' },
      { q: 'How should numbers be aligned in tables?', options: ['Left', 'Right', 'Centre'], answer: 1, explain: 'Right alignment helps comparison.' },
      { q: 'What should happen with actions a role cannot take?', options: ['Show them with no explanation', 'Hide them or disable with explanation', 'Let them fail'], answer: 1, explain: 'Avoid confusion.' },
    ],
    exercise: {
      title: 'Dashboard redesign',
      minutes: 60,
      brief: '<p>Redesign a dashboard for one role.</p>',
      steps: [
        'Choose a role and list their decisions.',
        'Pick three to five metrics with comparisons.',
        'Sketch the dashboard with exceptions highlighted.',
        'Sketch the linked detail table.',
      ],
      deliverable: 'A dashboard and table sketch.',
    },
    checklist: [
      'The dashboard supports decisions.',
      'Exceptions are highlighted.',
      'Tables support sorting, filtering and bulk actions.',
      'Roles are considered.',
    ],
    summary: [
      'Enterprise users need efficiency and clarity.',
      'Design dashboards around decisions.',
      'Make tables powerful and scannable.',
      'Design for roles and expert workflows.',
    ],
    reading: [
      { title: 'Data tables: four major user tasks', url: 'https://www.nngroup.com/articles/data-tables/', source: 'Nielsen Norman Group' },
      { title: 'Material Design: data tables', url: 'https://m2.material.io/components/data-tables', source: 'Google' },
    ],
  },

  'path-ecommerce': {
    objectives: [
      'Improve product discovery through search, filters and navigation.',
      'Design product pages that answer buying questions.',
      'Reduce friction in cart and checkout.',
    ],
    explanation: `
<p>E-commerce UX directly affects revenue, so it is heavily researched and tested. The core journey is: <em>discover, evaluate, buy, receive</em>.</p>
<h3>Discovery</h3>
<p>Offer clear category navigation, forgiving search (typos, synonyms) and useful filters (size, price, availability). Show results with key information: image, price, rating, availability.</p>
<h3>Product pages</h3>
<p>Answer the buyer's questions: What is it? Will it fit or work for me? How much in total? When will it arrive? Can I return it? Use good images, specifications, reviews and clear delivery and returns information.</p>
<h3>Cart and checkout</h3>
<ul>
<li>Allow guest checkout.</li>
<li>Show total cost, including delivery and taxes, early.</li>
<li>Keep forms short with autofill and clear errors.</li>
<li>Offer familiar payment methods.</li>
<li>Show a clear confirmation with order details.</li>
</ul>
<h3>Ethics</h3>
<p>Avoid deceptive patterns such as fake urgency, hidden costs, pre-ticked add-ons and hard-to-cancel subscriptions. They may raise short-term sales but damage trust and can break consumer law.</p>`,
    why: `
<p>Small improvements in e-commerce journeys can have large financial effects, and unexpected costs and forced account creation are common reasons people abandon carts. Honest, clear shopping experiences build repeat customers. Designers in e-commerce must balance commercial goals with fairness to customers.</p>`,
    example: `
<p>An online furniture shop finds many people abandon checkout at the delivery step. Research shows delivery costs and dates were only shown there, and were often higher and later than expected. The redesign shows estimated delivery cost and date on product pages. Checkout abandonment falls and complaints about delivery drop.</p>`,
    walkthrough: [
      { title: 'Map the journey', body: 'Discover, evaluate, buy, receive.' },
      { title: 'Test search', body: 'Try typos, synonyms and filters.' },
      { title: 'Audit product pages', body: 'Check they answer key buying questions.' },
      { title: 'Review checkout', body: 'Check guest checkout, total cost and form length.' },
      { title: 'Check for deceptive patterns', body: 'Remove fake urgency and hidden costs.' },
      { title: 'Measure', body: 'Track funnel steps and test changes.' },
    ],
    mistakes: [
      { mistake: 'Hidden costs until the final step.', fix: 'Show total cost early.' },
      { mistake: 'Forced account creation.', fix: 'Offer guest checkout.' },
      { mistake: 'Fake urgency.', fix: 'Use only honest scarcity and timing information.' },
    ],
    quiz: [
      { q: 'What is a common reason for cart abandonment?', options: ['Too many images', 'Unexpected extra costs', 'Clear prices'], answer: 1, explain: 'Show costs early.' },
      { q: 'What should product pages answer?', options: ['Only the price', 'What it is, fit, total cost, delivery and returns', 'Brand history'], answer: 1, explain: 'Answer buying questions.' },
      { q: 'Why avoid fake urgency?', options: ['It is slow', 'It damages trust and may break consumer law', 'It is hard to build'], answer: 1, explain: 'Ethics and law.' },
    ],
    exercise: {
      title: 'Shop audit',
      minutes: 60,
      brief: '<p>Audit an online shop journey.</p>',
      steps: [
        'Search for a product with a typo and filter results.',
        'Check the product page against buying questions.',
        'Go through checkout to the payment step.',
        'List five improvements and any deceptive patterns.',
      ],
      deliverable: 'An audit with improvements.',
    },
    checklist: [
      'Search and filters work well.',
      'Product pages answer buying questions.',
      'Total cost is shown early.',
      'There are no deceptive patterns.',
    ],
    summary: [
      'The journey is discover, evaluate, buy, receive.',
      'Make search and filters forgiving and useful.',
      'Answer buying questions on product pages.',
      'Keep checkout honest and simple.',
    ],
    reading: [
      { title: 'Baymard Institute: cart abandonment research', url: 'https://baymard.com/lists/cart-abandonment-rate', source: 'Baymard Institute' },
      { title: 'Deceptive patterns', url: 'https://www.deceptive.design/', source: 'Deceptive Design' },
    ],
  },

  'path-design-systems-scale': {
    objectives: [
      'Set up governance and contribution models for a design system.',
      'Manage versioning, deprecation and releases.',
      'Drive adoption and measure success.',
    ],
    explanation: `
<p>Building components is the easy part. Running a design system for many teams over years is an ongoing product and organisational challenge.</p>
<h3>Team models</h3>
<ul>
<li><strong>Centralised</strong>: a dedicated team builds and maintains the system.</li>
<li><strong>Federated</strong>: designers and developers from product teams contribute.</li>
<li><strong>Hybrid</strong>: a core team plus contributors, the most common model at scale.</li>
</ul>
<h3>Contribution</h3>
<p>Define how teams propose new components or changes: raise a need, check for existing solutions, gather evidence, design and build, review for quality and accessibility, document and release.</p>
<h3>Versioning and deprecation</h3>
<p>Use semantic versioning (major, minor, patch), clear release notes and migration guides. Deprecate components gradually with warnings and timelines.</p>
<h3>Adoption</h3>
<p>Make the system the easiest path: good documentation, code examples, support channels and office hours. Measure adoption (component usage across products), quality (accessibility issues, bugs) and satisfaction (surveys of product teams).</p>`,
    why: `
<p>Without governance, design systems either stagnate or fragment as teams build their own versions. A healthy system speeds up teams, improves consistency and accessibility and lowers maintenance costs. Treating it as a product with users, roadmap and support is what makes it last.</p>`,
    example: `
<p>A company's design system is used by only a third of teams. Others say it lacks components they need and changes break their products without warning. The system team introduces a contribution process, monthly releases with migration guides and fortnightly office hours. Within a year, adoption grows to most teams and several contributed components are added.</p>`,
    walkthrough: [
      { title: 'Choose a model', body: 'Decide centralised, federated or hybrid.' },
      { title: 'Define contribution', body: 'Write a step-by-step contribution process.' },
      { title: 'Set versioning', body: 'Adopt semantic versioning and release notes.' },
      { title: 'Plan deprecation', body: 'Define warnings, timelines and migration guides.' },
      { title: 'Support adoption', body: 'Provide docs, examples and support channels.' },
      { title: 'Measure', body: 'Track adoption, quality and satisfaction.' },
    ],
    mistakes: [
      { mistake: 'Breaking changes without warning.', fix: 'Use versioning and migration guides.' },
      { mistake: 'No contribution route.', fix: 'Define and publicise a contribution process.' },
      { mistake: 'Not measuring adoption.', fix: 'Track usage and satisfaction.' },
    ],
    quiz: [
      { q: 'What is the most common model at scale?', options: ['Centralised only', 'Hybrid: core team plus contributors', 'No team'], answer: 1, explain: 'Hybrid balances quality and reach.' },
      { q: 'What does a major version signal?', options: ['A small fix', 'Breaking changes', 'Nothing'], answer: 1, explain: 'Semantic versioning.' },
      { q: 'What drives adoption?', options: ['Mandates alone', 'Making the system the easiest path', 'Hiding documentation'], answer: 1, explain: 'Make it easy and useful.' },
    ],
    exercise: {
      title: 'Governance plan',
      minutes: 45,
      brief: '<p>Write a governance plan for a design system.</p>',
      steps: [
        'Choose a team model and explain why.',
        'Draw the contribution process.',
        'Define versioning and deprecation rules.',
        'Choose three success measures.',
      ],
      deliverable: 'A one-page governance plan.',
    },
    checklist: [
      'There is a team model.',
      'There is a contribution process.',
      'Versioning and deprecation are defined.',
      'Adoption is measured.',
    ],
    summary: [
      'A design system is a product.',
      'Define governance and contribution.',
      'Version and deprecate carefully.',
      'Drive and measure adoption.',
    ],
    reading: [
      { title: 'Design systems 101', url: 'https://www.nngroup.com/articles/design-systems-101/', source: 'Nielsen Norman Group' },
      { title: 'Semantic Versioning', url: 'https://semver.org/', source: 'semver.org' },
      { title: 'GOV.UK Design System: community', url: 'https://design-system.service.gov.uk/community/', source: 'GOV.UK Design System' },
    ],
  },

  'path-ux-writing': {
    objectives: [
      'Define a voice and tone for a product.',
      'Write clear microcopy for buttons, errors and empty states.',
      'Apply content-first design.',
    ],
    explanation: `
<p><strong>UX writing</strong> and <strong>content design</strong> treat words as a core part of the interface. Often the best design improvement is a clearer sentence.</p>
<h3>Voice and tone</h3>
<p><em>Voice</em> is the product's consistent personality (for example "clear, warm, direct"). <em>Tone</em> adapts to context: celebratory after success, calm and helpful after an error.</p>
<h3>Microcopy</h3>
<ul>
<li><strong>Buttons</strong>: say what happens ("Send payment", not "Submit").</li>
<li><strong>Errors</strong>: explain what went wrong and how to fix it, without blame.</li>
<li><strong>Empty states</strong>: explain what will appear and how to start.</li>
<li><strong>Confirmations</strong>: state what happened and what comes next.</li>
</ul>
<h3>Content-first design</h3>
<p>Start with the content people need, then design the layout around it. Use real content in prototypes instead of placeholder text, which hides problems.</p>
<h3>Plain language</h3>
<p>Use short sentences, common words and active voice. Front-load key information. Test whether people understand the words.</p>`,
    why: `
<p>Words guide people through every interaction. Unclear labels and errors cause confusion, support calls and abandonment, while clear writing makes products feel easy and trustworthy. Plain language also helps people with cognitive disabilities, those reading in a second language and everyone in a hurry.</p>`,
    example: `
<p>Error before: "Invalid input. Error code 4012."</p>
<p>After: "Enter your date of birth in the format DD/MM/YYYY, for example 07/03/1990."</p>
<p>Empty state before: "No data." After: "You have no saved addresses yet. Add one to check out faster next time." with an "Add address" button.</p>`,
    walkthrough: [
      { title: 'Define voice', body: 'Choose three voice qualities with dos and don\'ts.' },
      { title: 'Map tone', body: 'Describe tone for success, errors and warnings.' },
      { title: 'Audit microcopy', body: 'Review buttons, errors, empty states and confirmations.' },
      { title: 'Rewrite', body: 'Make each clear, specific and helpful.' },
      { title: 'Use real content', body: 'Replace placeholder text in prototypes.' },
      { title: 'Test comprehension', body: 'Ask users to explain key messages.' },
    ],
    mistakes: [
      { mistake: 'Generic buttons like "Submit".', fix: 'Say what will happen.' },
      { mistake: 'Blaming error messages.', fix: 'Explain how to fix the problem.' },
      { mistake: 'Designing with placeholder text.', fix: 'Use real content early.' },
    ],
    quiz: [
      { q: 'Which button label is best?', options: ['Submit', 'Send payment', 'OK'], answer: 1, explain: 'Say what happens.' },
      { q: 'What is the difference between voice and tone?', options: ['None', 'Voice is consistent; tone adapts to context', 'Tone is consistent; voice adapts'], answer: 1, explain: 'Personality versus mood.' },
      { q: 'Why avoid placeholder text?', options: ['It looks bad', 'It hides content problems', 'It is slow'], answer: 1, explain: 'Real content reveals issues.' },
    ],
    exercise: {
      title: 'Microcopy rewrite',
      minutes: 45,
      brief: '<p>Rewrite microcopy in a product.</p>',
      steps: [
        'Define three voice qualities.',
        'Collect ten pieces of microcopy.',
        'Rewrite each using plain language.',
        'Test two rewrites with users.',
      ],
      deliverable: 'A before-and-after microcopy table.',
    },
    checklist: [
      'Voice and tone are defined.',
      'Buttons say what happens.',
      'Errors explain fixes.',
      'Real content is used in designs.',
    ],
    summary: [
      'Words are part of the interface.',
      'Define voice and adapt tone.',
      'Write clear, helpful microcopy.',
      'Design content first and test it.',
    ],
    reading: [
      { title: 'Content design: planning, writing and managing content', url: 'https://www.gov.uk/guidance/content-design', source: 'GOV.UK' },
      { title: 'Error message guidelines', url: 'https://www.nngroup.com/articles/error-message-guidelines/', source: 'Nielsen Norman Group' },
    ],
  },

  'path-service-design': {
    objectives: [
      'Explain service design and how it differs from product design.',
      'Create a service blueprint.',
      'Design across channels and backstage processes.',
    ],
    explanation: `
<p><strong>Service design</strong> looks at the whole service: every channel (online, phone, in person, post), the people delivering it and the processes and systems behind the scenes.</p>
<h3>Front stage and backstage</h3>
<p>The <em>front stage</em> is what users see: websites, letters, staff conversations. The <em>backstage</em> is what makes it work: staff processes, systems, policies and partners. Many user problems are caused backstage.</p>
<h3>Service blueprints</h3>
<p>A blueprint maps, in rows:</p>
<ul>
<li>User actions.</li>
<li>Front-stage interactions (touchpoints and staff).</li>
<li>Backstage actions.</li>
<li>Support processes and systems.</li>
<li>Evidence (what the user sees or receives).</li>
</ul>
<p>Lines separate what users see from what they do not. Pain points and opportunities are marked on the map.</p>
<h3>Working across channels</h3>
<p>People move between channels. Make sure information and progress carry across, so people do not repeat themselves.</p>
<h3>Collaboration</h3>
<p>Service design involves frontline staff, operations, policy and technology teams. Workshops and co-design are central.</p>`,
    why: `
<p>Polishing a screen cannot fix a broken process behind it. Service design finds the root causes of problems, such as handoffs between teams, slow approvals or missing data, and improves the whole experience. It is widely used in public services, healthcare, banking and retail.</p>`,
    example: `
<p>A council's blue badge (disabled parking permit) applications take 12 weeks. The online form is fine, but a blueprint reveals that applications are printed, posted to an assessment team and manually re-entered. Redesigning the backstage process so applications flow digitally to assessors cuts the time to four weeks, with no change to the form.</p>`,
    walkthrough: [
      { title: 'Define the service', body: 'Choose a service and its start and end.' },
      { title: 'Map user actions', body: 'List each step the user takes.' },
      { title: 'Add front stage', body: 'Add touchpoints and staff interactions.' },
      { title: 'Add backstage', body: 'Interview staff to map hidden processes and systems.' },
      { title: 'Mark pain points', body: 'Highlight delays, handoffs and failures.' },
      { title: 'Design improvements', body: 'Co-design changes with staff and users.' },
    ],
    mistakes: [
      { mistake: 'Only designing screens.', fix: 'Look at the whole service including backstage.' },
      { mistake: 'Mapping without staff input.', fix: 'Interview and involve frontline staff.' },
      { mistake: 'Channels that do not connect.', fix: 'Carry information across channels.' },
    ],
    quiz: [
      { q: 'What is backstage in service design?', options: ['The website', 'Processes and systems users do not see', 'The marketing'], answer: 1, explain: 'Hidden work that makes the service run.' },
      { q: 'What does a blueprint add beyond a journey map?', options: ['Colours', 'Backstage actions and support processes', 'Personas'], answer: 1, explain: 'It shows what happens behind the scenes.' },
      { q: 'Who should be involved?', options: ['Only designers', 'Frontline staff, operations, policy and technology', 'Only managers'], answer: 1, explain: 'Services span teams.' },
    ],
    exercise: {
      title: 'Blueprint a service',
      minutes: 60,
      brief: '<p>Create a service blueprint for a service you know.</p>',
      steps: [
        'Choose a service such as returning a parcel.',
        'Map user actions and front-stage touchpoints.',
        'Add likely backstage actions and systems.',
        'Mark three pain points and opportunities.',
      ],
      deliverable: 'A service blueprint.',
    },
    checklist: [
      'All channels are included.',
      'Backstage is mapped.',
      'Pain points are marked.',
      'Staff were involved.',
    ],
    summary: [
      'Service design covers the whole service.',
      'Map front stage and backstage.',
      'Use blueprints to find root causes.',
      'Work across channels and teams.',
    ],
    reading: [
      { title: 'Service blueprints: definition', url: 'https://www.nngroup.com/articles/service-blueprints-definition/', source: 'Nielsen Norman Group' },
      { title: 'Service manual: service design', url: 'https://www.gov.uk/service-manual/design', source: 'GOV.UK Service Manual' },
    ],
  },
};
