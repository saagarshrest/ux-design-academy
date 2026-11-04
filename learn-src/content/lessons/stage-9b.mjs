// @ts-check
/* Stage 9 (part 2): Accessibility. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'target-size-motor': {
    objectives: [
      'Design for people with limited dexterity, tremors and other motor impairments.',
      'Apply target size and spacing requirements.',
      'Provide alternatives to complex gestures and dragging.',
    ],
    explanation: `
<p>Motor impairments affect how precisely and quickly people can move. People may use a mouse with difficulty, a keyboard, switch devices, voice control, head pointers or eye tracking.</p>
<h3>Target size</h3>
<p>WCAG 2.2 criterion 2.5.8 (AA) requires targets of at least <strong>24 by 24 CSS pixels</strong>, or enough spacing around smaller targets. 2.5.5 (AAA) asks for 44 by 44. Platform guidelines recommend 44–48. Bigger targets help everyone.</p>
<h3>Gestures and dragging</h3>
<ul>
<li><strong>Pointer gestures</strong> (2.5.1): anything needing multi-finger or path-based gestures (pinch, swipe patterns) must also work with a single tap or click.</li>
<li><strong>Dragging</strong> (2.5.7, new in 2.2): anything done by dragging, such as reordering lists or moving sliders, needs a single-pointer alternative, such as up and down buttons or a "Move to" menu.</li>
<li><strong>Pointer cancellation</strong> (2.5.2): actions should happen on release, not on press, so people can slide off to cancel.</li>
<li><strong>Motion actuation</strong> (2.5.4): features triggered by shaking or tilting need an alternative and a way to turn them off.</li>
</ul>
<h3>Time</h3>
<p>People may need more time. Avoid short time limits, or let people extend them. Avoid content that moves or updates before people can act on it.</p>`,
    why: `
<p>Motor impairments are common, including arthritis, which affects many older people, as well as temporary injuries and situational limits like using a phone while walking. Small targets and complex gestures can make tasks impossible for some people. Simple alternatives cost little to design and benefit everyone.</p>`,
    example: `
<p>A to-do app lets people reorder tasks only by dragging, and the delete icon is 16 by 16 pixels next to the edit icon. A user with Parkinson's frequently deletes tasks by mistake and cannot reorder at all.</p>
<p>The designer enlarges targets to 44px with spacing, moves delete into a menu with undo, and adds a "Move up / Move down" option to each task's menu. The same user can now manage their list independently.</p>`,
    walkthrough: [
      { title: 'Measure targets', body: 'Check all interactive targets against 24px minimum and 44px recommended.' },
      { title: 'Check spacing', body: 'Make sure small targets have enough space around them.' },
      { title: 'List gestures', body: 'Find any multi-finger, path or drag interactions.' },
      { title: 'Add alternatives', body: 'Design single-tap or button alternatives for each.' },
      { title: 'Check timing', body: 'Find time limits and moving content.' },
      { title: 'Test with alternative input', body: 'Try voice control or switch access if possible.' },
    ],
    mistakes: [
      { mistake: 'Drag-only interactions.', fix: 'Provide single-pointer alternatives.' },
      { mistake: 'Tiny adjacent targets.', fix: 'Enlarge and space them.' },
      { mistake: 'Actions triggered on press.', fix: 'Trigger on release so people can cancel.' },
    ],
    quiz: [
      { q: 'What is the WCAG 2.2 AA minimum target size?', options: ['16px', '24px (or sufficient spacing)', '60px'], answer: 1, explain: 'Criterion 2.5.8.' },
      { q: 'A list can be reordered only by dragging. What is needed?', options: ['Nothing', 'A single-pointer alternative such as move buttons', 'A tutorial'], answer: 1, explain: 'Criterion 2.5.7 requires an alternative.' },
      { q: 'Why trigger actions on release?', options: ['It is faster', 'People can slide away to cancel', 'It looks better'], answer: 1, explain: 'Pointer cancellation prevents accidents.' },
    ],
    exercise: {
      title: 'Motor accessibility review',
      minutes: 45,
      brief: '<p>Review a mobile app for motor accessibility.</p>',
      steps: [
        'Measure targets on three screens.',
        'List gestures and drag interactions.',
        'Design alternatives.',
        'Try the app with voice control.',
      ],
      deliverable: 'A review with redesigned alternatives.',
    },
    checklist: [
      'Targets meet minimum sizes.',
      'Gestures have simple alternatives.',
      'Dragging has alternatives.',
      'Time limits are adjustable.',
    ],
    summary: [
      'Design for limited precision and alternative input.',
      'Targets need at least 24px, ideally 44–48px.',
      'Provide alternatives to gestures and dragging.',
      'Give people enough time.',
    ],
    reading: [
      { title: 'Understanding dragging movements', url: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html', source: 'W3C WAI' },
      { title: 'Understanding target size (minimum)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', source: 'W3C WAI' },
    ],
  },

  'cognitive-plain-language': {
    objectives: [
      'Design for people with cognitive, learning and neurological disabilities.',
      'Write in plain language.',
      'Reduce memory load, distraction and anxiety.',
    ],
    explanation: `
<p>Cognitive accessibility covers memory, attention, reading, problem-solving and processing speed. It includes people with dyslexia, ADHD, autism, learning disabilities, brain injuries and dementia, as well as anyone tired, stressed or using a second language.</p>
<h3>Plain language</h3>
<ul>
<li>Use common words and short sentences.</li>
<li>Put the most important information first.</li>
<li>Use active voice: "We will send you a letter" rather than "A letter will be sent".</li>
<li>Explain or avoid jargon and acronyms.</li>
<li>Use headings, lists and white space to break up text.</li>
</ul>
<h3>Reduce cognitive load</h3>
<ul>
<li>One thing per page for complex tasks.</li>
<li>Show progress in multi-step processes.</li>
<li>Do not rely on memory: show information people need on the page where they need it.</li>
<li>Keep navigation and layouts consistent (WCAG 3.2.3, 3.2.4) and help in a consistent place (3.2.6).</li>
<li>Avoid distracting animation and auto-playing content.</li>
<li>Allow people to save progress and return later.</li>
</ul>
<h3>Reduce anxiety</h3>
<p>Explain what will happen, how long it will take and what people need before they start. Make it easy to undo and to get help from a person.</p>`,
    why: `
<p>Cognitive disabilities are among the most common, yet they are often overlooked because they are less visible. Plain language and low cognitive load help everyone, especially in stressful situations such as illness, money problems or legal processes. Research consistently shows that even highly educated experts prefer plain language.</p>`,
    example: `
<p>An energy supplier's letter about a price change reads: "Pursuant to the revision of tariff structures, your unit rate will be subject to adjustment effective from the commencement of the next billing period."</p>
<p>The rewrite says: "Your prices are changing on 1 April. You'll pay 28p per unit instead of 25p. This means your bill will go up by about £6 a month. You don't need to do anything. If you want to switch tariff, call us or go online." Calls asking what the letter means drop significantly.</p>`,
    walkthrough: [
      { title: 'Read aloud', body: 'Read your content aloud and mark where you stumble.' },
      { title: 'Shorten', body: 'Cut long sentences and remove unnecessary words.' },
      { title: 'Front-load', body: 'Put the main point first.' },
      { title: 'Structure', body: 'Add headings and lists.' },
      { title: 'Reduce memory load', body: 'Show information where it is needed.' },
      { title: 'Test', body: 'Ask someone unfamiliar with the topic to explain it back.' },
    ],
    mistakes: [
      { mistake: 'Jargon and legal language.', fix: 'Use everyday words and explain essentials.' },
      { mistake: 'Many tasks on one page.', fix: 'Split complex tasks into steps.' },
      { mistake: 'Requiring people to remember information.', fix: 'Show it again where it is needed.' },
    ],
    quiz: [
      { q: 'Which sentence uses active voice?', options: ['A letter will be sent', 'We will send you a letter', 'Letters are sent'], answer: 1, explain: 'Active voice names who does what.' },
      { q: 'Who benefits from plain language?', options: ['Only people with learning disabilities', 'Almost everyone, including experts', 'No one'], answer: 1, explain: 'Plain language helps all readers.' },
      { q: 'How can you reduce memory load?', options: ['Show needed information where it is needed', 'Add more steps', 'Use acronyms'], answer: 0, explain: 'Do not make people remember.' },
    ],
    exercise: {
      title: 'Plain language rewrite',
      minutes: 45,
      brief: '<p>Rewrite a complex page in plain language.</p>',
      steps: [
        'Find a complex page, such as terms, a policy or an official letter.',
        'Rewrite it using plain language techniques.',
        'Add structure.',
        'Ask someone to explain both versions back to you.',
      ],
      deliverable: 'Before and after text with test notes.',
    },
    checklist: [
      'Words are common and sentences short.',
      'The main point is first.',
      'Tasks are split into steps.',
      'Memory load is reduced.',
    ],
    summary: [
      'Cognitive accessibility covers memory, attention, reading and processing.',
      'Write in plain language.',
      'Reduce load, distraction and anxiety.',
      'Plain language helps everyone.',
    ],
    reading: [
      { title: 'Making content usable for people with cognitive and learning disabilities', url: 'https://www.w3.org/TR/coga-usable/', source: 'W3C' },
      { title: 'Writing for GOV.UK', url: 'https://www.gov.uk/guidance/content-design/writing-for-gov-uk', source: 'GOV.UK' },
    ],
  },

  'captions-alt-text': {
    objectives: [
      'Write useful alt text for images, icons and charts.',
      'Decide when images are decorative.',
      'Provide captions, transcripts and audio description for media.',
    ],
    explanation: `
<h3>Alt text</h3>
<p><strong>Alternative text</strong> describes an image for people who cannot see it. It should convey the image's <em>purpose</em> in context, not every visual detail.</p>
<ul>
<li><strong>Informative images</strong>: describe the information. "Bar chart: sales rose from £2m in 2023 to £3.5m in 2025."</li>
<li><strong>Functional images</strong> (images that are links or buttons): describe the action. "Search", not "magnifying glass".</li>
<li><strong>Decorative images</strong>: mark them so screen readers skip them (empty alt).</li>
<li><strong>Complex images</strong> such as detailed charts: give a short alt plus a longer description or data table nearby.</li>
<li>Do not start with "Image of". Screen readers already announce it is an image.</li>
<li>Avoid text in images; if unavoidable, include the text in the alt.</li>
</ul>
<h3>Media</h3>
<ul>
<li><strong>Captions</strong>: synchronised text of speech and important sounds, for deaf and hard of hearing people (and anyone watching without sound).</li>
<li><strong>Transcripts</strong>: full text of audio and video content, useful for deafblind people and for skimming.</li>
<li><strong>Audio description</strong>: narration of important visual information, for blind people.</li>
</ul>
<p>Auto-generated captions are a starting point but must be checked and corrected.</p>`,
    why: `
<p>Images and video carry meaning that blind, deaf and deafblind people otherwise miss. Good alt text and captions make content usable for them, and also help people on slow connections, in noisy or silent places, and search engines. Designers often decide which images are meaningful and what they communicate, so they are well placed to write alt text.</p>`,
    example: `
<p>An online shop's product images all have alt text "product image". A blind customer cannot tell the difference between colour options. A promotional video has no captions, so deaf customers miss the discount code that is only spoken.</p>
<p>The team rewrites alt text as "Navy wool coat, knee length, front view" and so on, adds corrected captions, and shows the discount code on screen and in the video description. Customer service sees fewer accessibility complaints.</p>`,
    walkthrough: [
      { title: 'Inventory images', body: 'List every image on a page.' },
      { title: 'Classify', body: 'Mark each as informative, functional, decorative or complex.' },
      { title: 'Write alt text', body: 'Describe purpose in context.' },
      { title: 'Handle complex images', body: 'Add longer descriptions or data tables.' },
      { title: 'Check media', body: 'Ensure captions, transcripts and audio description where needed.' },
      { title: 'Review with a screen reader', body: 'Listen to the page and check it makes sense.' },
    ],
    mistakes: [
      { mistake: 'Alt text like "image" or file names.', fix: 'Describe purpose.' },
      { mistake: 'Describing decorative images.', fix: 'Mark them decorative.' },
      { mistake: 'Uncorrected auto-captions.', fix: 'Review and correct captions.' },
    ],
    quiz: [
      { q: 'What is the best alt text for a magnifying glass icon that submits search?', options: ['Magnifying glass', 'Search', 'Image of icon'], answer: 1, explain: 'Functional images describe the action.' },
      { q: 'What should decorative images have?', options: ['Long descriptions', 'Empty alt so screen readers skip them', 'The file name'], answer: 1, explain: 'Decorative images add nothing to understanding.' },
      { q: 'Who mainly benefits from audio description?', options: ['Deaf people', 'Blind people', 'Keyboard users'], answer: 1, explain: 'It describes visual information.' },
    ],
    exercise: {
      title: 'Alt text practice',
      minutes: 30,
      brief: '<p>Write alt text for a page of images.</p>',
      steps: [
        'Choose a news article or product page.',
        'Classify each image.',
        'Write alt text for each.',
        'Compare with the existing alt text using browser tools.',
      ],
      deliverable: 'An image table with classifications and alt text.',
    },
    checklist: [
      'Every image is classified.',
      'Alt text describes purpose.',
      'Complex images have longer descriptions.',
      'Media has captions and transcripts.',
    ],
    summary: [
      'Alt text conveys an image\'s purpose in context.',
      'Decorative images are skipped.',
      'Complex images need longer descriptions.',
      'Media needs captions, transcripts and audio description.',
    ],
    reading: [
      { title: 'Images tutorial', url: 'https://www.w3.org/WAI/tutorials/images/', source: 'W3C WAI' },
      { title: 'Making audio and video media accessible', url: 'https://www.w3.org/WAI/media/av/', source: 'W3C WAI' },
    ],
  },

  'zoom-reflow': {
    objectives: [
      'Design layouts that work at 200% text size and 400% zoom.',
      'Apply WCAG reflow and text spacing requirements.',
      'Test zoom and text resizing.',
    ],
    explanation: `
<p>Many people with low vision enlarge content using browser zoom, operating system text size or screen magnifiers.</p>
<h3>Requirements (WCAG AA)</h3>
<ul>
<li><strong>Resize text</strong> (1.4.4): text can be resized to 200% without losing content or function.</li>
<li><strong>Reflow</strong> (1.4.10): content works at 320 CSS pixels wide (equivalent to 400% zoom on a 1280px screen) without scrolling in two directions, except for things like maps and data tables.</li>
<li><strong>Text spacing</strong> (1.4.12): no loss of content when people increase line height, paragraph spacing, letter spacing and word spacing.</li>
<li><strong>Orientation</strong> (1.3.4): content works in both portrait and landscape unless one is essential.</li>
</ul>
<h3>Design implications</h3>
<ul>
<li>Responsive layouts that reflow into a single column.</li>
<li>No fixed heights on text containers; let them grow.</li>
<li>Sticky headers and footers that do not cover most of the screen at high zoom.</li>
<li>Support system text size settings in apps (Dynamic Type on iOS, font scale on Android).</li>
</ul>`,
    why: `
<p>Low vision is far more common than blindness, and many people zoom without considering themselves disabled. Layouts that break at high zoom force people to scroll in two directions or lose content. Designing for reflow also makes products more resilient on small screens and with long text.</p>`,
    example: `
<p>An airline website at 400% zoom shows a sticky header and a sticky "Book now" bar that together cover 70% of the screen, leaving a narrow strip for content. Text in fixed-height cards is cut off.</p>
<p>The designer specifies that sticky elements become non-sticky at narrow widths, cards grow with content and the layout reflows into a single column. A low-vision tester can now complete a booking at 400%.</p>`,
    walkthrough: [
      { title: 'Zoom to 200%', body: 'Use browser zoom and check content and function.' },
      { title: 'Zoom to 400%', body: 'Check for horizontal scrolling and covered content.' },
      { title: 'Increase text spacing', body: 'Use a text spacing bookmarklet or extension.' },
      { title: 'Test app text sizes', body: 'Set the largest system text size on a phone.' },
      { title: 'Rotate', body: 'Check portrait and landscape.' },
      { title: 'Annotate', body: 'Specify reflow and sticky behaviour in designs.' },
    ],
    mistakes: [
      { mistake: 'Fixed-height text containers.', fix: 'Let containers grow with content.' },
      { mistake: 'Large sticky elements.', fix: 'Reduce or unstick them at narrow widths.' },
      { mistake: 'Ignoring system text size in apps.', fix: 'Support dynamic text scaling.' },
    ],
    quiz: [
      { q: 'At what width must content reflow without two-dimensional scrolling?', options: ['1024px', '320 CSS pixels', '100px'], answer: 1, explain: 'This equals 400% zoom on 1280px.' },
      { q: 'What does text spacing (1.4.12) require?', options: ['Fixed spacing', 'No loss of content when users increase spacing', 'Double spacing everywhere'], answer: 1, explain: 'Layouts must tolerate user spacing.' },
      { q: 'Which is a common zoom failure?', options: ['Sticky elements covering the screen', 'Large headings', 'Single columns'], answer: 0, explain: 'Sticky elements consume space at high zoom.' },
    ],
    exercise: {
      title: 'Zoom test',
      minutes: 30,
      brief: '<p>Test a website at high zoom.</p>',
      steps: [
        'Test at 200% and 400%.',
        'Test with increased text spacing.',
        'Screenshot problems.',
        'Redesign one problem area.',
      ],
      deliverable: 'An annotated test report with one redesign.',
    },
    checklist: [
      'Text resizes to 200%.',
      'Content reflows at 320px.',
      'Text spacing does not break layouts.',
      'Sticky elements behave at high zoom.',
    ],
    summary: [
      'Many people zoom or enlarge text.',
      'Support 200% text, 400% zoom reflow and text spacing.',
      'Avoid fixed heights and oversized sticky elements.',
      'Support system text sizes in apps.',
    ],
    reading: [
      { title: 'Understanding reflow', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html', source: 'W3C WAI' },
      { title: 'Understanding text spacing', url: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html', source: 'W3C WAI' },
    ],
  },

  'a11y-testing-tools': {
    objectives: [
      'Use automated accessibility testing tools.',
      'Use browser, design tool and assistive technology tools for manual testing.',
      'Understand what each tool can and cannot find.',
    ],
    explanation: `
<h3>Design tools</h3>
<p>Contrast checker plugins, colour blindness simulators and annotation kits for headings, focus order and labels. Use them before handoff.</p>
<h3>Automated testing</h3>
<p>Tools such as <strong>axe DevTools</strong>, <strong>WAVE</strong> and <strong>Lighthouse</strong> scan pages for detectable problems: missing alt text, low contrast, missing labels, invalid ARIA. They are fast, but they cannot judge meaning: is the alt text accurate? Is the focus order logical? Automated tools find only a portion of issues.</p>
<h3>Browser tools</h3>
<p>Browser developer tools show the <strong>accessibility tree</strong> (what assistive technology sees): roles, names and states. Zoom and text spacing tests need only the browser.</p>
<h3>Assistive technology</h3>
<ul>
<li><strong>Screen readers</strong>: NVDA (free, Windows), VoiceOver (built into Apple devices), TalkBack (Android), JAWS (commercial).</li>
<li><strong>Voice control</strong>: Voice Control on Apple devices, Voice Access on Android.</li>
<li><strong>Magnifiers</strong>: built into operating systems.</li>
</ul>
<h3>People</h3>
<p>No tool replaces testing with disabled people, who use assistive technology daily and in ways testers may not expect.</p>`,
    why: `
<p>Using the right tools at the right stage catches problems early and efficiently. Knowing their limits prevents false confidence: a perfect automated score does not mean a product is accessible. Designers who can test with assistive technology produce better specs and understand the experience they are designing for.</p>`,
    example: `
<p>A team celebrates a Lighthouse accessibility score of 100. A screen reader user then tries the checkout: the promo code field is labelled, but its error is never announced, and a custom drop-down cannot be operated.</p>
<p>The team adds manual keyboard and screen reader checks to their definition of done, uses axe in their test pipeline, and runs quarterly sessions with disabled participants. The next release catches similar problems before launch.</p>`,
    walkthrough: [
      { title: 'Install tools', body: 'Install a contrast plugin, axe DevTools and WAVE.' },
      { title: 'Run automated scans', body: 'Scan a page and review results.' },
      { title: 'Inspect the accessibility tree', body: 'Check names and roles in browser tools.' },
      { title: 'Learn a screen reader', body: 'Learn ten basic commands for NVDA or VoiceOver.' },
      { title: 'Try voice control', body: 'Complete a task using voice commands.' },
      { title: 'Combine results', body: 'Compare what each method found.' },
    ],
    mistakes: [
      { mistake: 'Trusting automated scores alone.', fix: 'Add manual and assistive technology testing.' },
      { mistake: 'Testing only in one screen reader.', fix: 'Test in at least two combinations where possible.' },
      { mistake: 'Never testing with disabled people.', fix: 'Include them in research regularly.' },
    ],
    quiz: [
      { q: 'What can automated tools not judge?', options: ['Missing alt attributes', 'Whether alt text is accurate', 'Low contrast'], answer: 1, explain: 'Meaning needs human judgement.' },
      { q: 'Which screen reader is built into Apple devices?', options: ['NVDA', 'VoiceOver', 'JAWS'], answer: 1, explain: 'VoiceOver is built in.' },
      { q: 'What does the accessibility tree show?', options: ['File structure', 'What assistive technology sees', 'Page speed'], answer: 1, explain: 'It shows roles, names and states.' },
    ],
    exercise: {
      title: 'Tool comparison',
      minutes: 60,
      brief: '<p>Test one page with several tools.</p>',
      steps: [
        'Scan with axe and WAVE.',
        'Inspect the accessibility tree.',
        'Test with a screen reader and keyboard.',
        'Compare what each found.',
      ],
      deliverable: 'A comparison table of findings by tool.',
    },
    checklist: [
      'I use design, automated and assistive technology tools.',
      'I know the limits of automated tools.',
      'I can use a screen reader at a basic level.',
      'I plan testing with disabled people.',
    ],
    summary: [
      'Use design tools before handoff.',
      'Automated tools are fast but limited.',
      'Browser and assistive technology testing finds more.',
      'Testing with disabled people is essential.',
    ],
    reading: [
      { title: 'Selecting web accessibility evaluation tools', url: 'https://www.w3.org/WAI/test-evaluate/tools/selecting/', source: 'W3C WAI' },
      { title: 'WAVE evaluation tool', url: 'https://wave.webaim.org/', source: 'WebAIM' },
    ],
  },

  'common-a11y-failures': {
    objectives: [
      'Recognise the most common accessibility failures.',
      'Explain who each failure affects and how to fix it.',
      'Build a quick check for designs.',
    ],
    explanation: `
<p>WebAIM's yearly analysis of the top one million home pages finds the same failures again and again. The most common:</p>
<ol>
<li><strong>Low contrast text</strong>: affects people with low vision and anyone in bright light.</li>
<li><strong>Missing alt text</strong>: blind people miss image content.</li>
<li><strong>Missing form labels</strong>: screen reader users cannot tell what fields are.</li>
<li><strong>Empty links and buttons</strong>: icon controls with no name.</li>
<li><strong>Missing document language</strong>: screen readers mispronounce content.</li>
<li><strong>Empty or skipped headings</strong>: navigation by heading breaks.</li>
</ol>
<h3>Other frequent problems</h3>
<ul>
<li>Invisible focus or keyboard traps.</li>
<li>Custom controls (drop-downs, date pickers, carousels) that do not work with keyboard or screen readers.</li>
<li>Colour-only information.</li>
<li>Auto-playing media and moving content without pause.</li>
<li>Inaccessible PDFs and documents.</li>
<li>CAPTCHAs and cognitive tests without alternatives.</li>
</ul>
<p>Most of these are preventable at the design stage with good annotations.</p>`,
    why: `
<p>A small set of failures causes most accessibility problems. Knowing them lets you catch the majority of issues quickly in any design review. It also helps you prioritise when time is limited, and explain clearly to colleagues why each issue matters.</p>`,
    example: `
<p>A charity website is preparing for a relaunch. The designer runs a 20-minute quick check against the common failures and finds: grey text at 3.1:1, social icons with no names, a donation form using placeholders as labels, a carousel that auto-advances without pause, and a hero image with text in it.</p>
<p>All five are fixed in the designs before development. The post-launch audit finds far fewer issues than the previous site.</p>`,
    walkthrough: [
      { title: 'Learn the list', body: 'Memorise the top six failures.' },
      { title: 'Create a quick check', body: 'Turn the failures into a checklist.' },
      { title: 'Apply to a design', body: 'Run the check on a design file.' },
      { title: 'Apply to a live site', body: 'Run it on a live site using tools.' },
      { title: 'Note who is affected', body: 'For each issue, note which users it harms.' },
      { title: 'Fix and share', body: 'Fix issues and share the checklist with your team.' },
    ],
    mistakes: [
      { mistake: 'Building custom controls without a spec.', fix: 'Use native controls or fully specify accessible behaviour.' },
      { mistake: 'Auto-playing carousels.', fix: 'Avoid them or provide pause controls.' },
      { mistake: 'Text in images.', fix: 'Use live text.' },
    ],
    quiz: [
      { q: 'Which is consistently the most common failure?', options: ['Low contrast text', 'Too many headings', 'Large fonts'], answer: 0, explain: 'Low contrast tops the list year after year.' },
      { q: 'Who is affected by empty buttons?', options: ['Screen reader and voice control users', 'No one', 'Only mouse users'], answer: 0, explain: 'Without a name, controls cannot be identified.' },
      { q: 'When can most common failures be prevented?', options: ['After launch', 'At the design stage', 'Never'], answer: 1, explain: 'Annotations prevent them.' },
    ],
    exercise: {
      title: 'Quick check',
      minutes: 30,
      brief: '<p>Build and use a quick accessibility check.</p>',
      steps: [
        'Write a 10-item checklist from this lesson.',
        'Run it on two websites.',
        'Record failures and who they affect.',
        'Share the checklist with a peer.',
      ],
      deliverable: 'A checklist and results for two sites.',
    },
    checklist: [
      'I know the most common failures.',
      'I have a quick check.',
      'I know who each failure affects.',
      'I prevent them in designs.',
    ],
    summary: [
      'A few failures cause most problems.',
      'Low contrast, missing alt, missing labels and empty controls lead the list.',
      'Custom controls and colour-only cues are frequent too.',
      'Most are preventable in design.',
    ],
    reading: [
      { title: 'The WebAIM Million', url: 'https://webaim.org/projects/million/', source: 'WebAIM' },
      { title: 'Easy checks', url: 'https://www.w3.org/WAI/test-evaluate/preliminary/', source: 'W3C WAI' },
    ],
  },
};
