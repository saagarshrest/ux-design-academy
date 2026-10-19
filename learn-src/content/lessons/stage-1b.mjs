// @ts-check
/* Stage 1 (part 2): Visual design fundamentals. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'spacing-and-grids': {
    objectives: [
      'Explain why a spacing scale makes layouts consistent and faster to build.',
      'Set up a spacing scale based on a 4 or 8 pixel unit.',
      'Use a column grid with margins and gutters, and adapt it across screen sizes.',
    ],
    explanation: `
<p>Spacing is the most frequent design decision you make. Every gap between two elements is a choice. Without a system, those choices drift: 13px here, 15px there, 22px somewhere else. The result looks slightly off and is slow to build and maintain.</p>
<h3>Spacing scales</h3>
<p>A <strong>spacing scale</strong> is a short list of allowed spacing values. Many teams base it on a 4 or 8 pixel unit, because common screen sizes divide evenly and the values are easy to remember. A typical scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. Small steps are close together for fine adjustments inside components; large steps are far apart for separating sections.</p>
<p>The scale supports proximity: use small values inside groups (a label and its field, 4 to 8px), medium values between related groups (16 to 24px), and large values between sections (48px or more).</p>
<h3>Column grids</h3>
<p>A <strong>column grid</strong> divides the width of a screen into columns separated by <strong>gutters</strong>, with <strong>margins</strong> at the edges. Content spans one or more columns. A common setup is 12 columns on desktop, 8 on tablet and 4 on phones, but the right number depends on your content.</p>
<p>Grids create alignment across a whole page, help with responsive layouts, and give designers and developers a shared vocabulary ("the sidebar spans 3 columns"). A grid is a guide, not a cage: some elements, such as full-bleed images, can deliberately break it.</p>
<h3>Baseline and vertical rhythm</h3>
<p>Some teams also align text line heights to the same unit (for example line heights that are multiples of 4px). This creates a steady vertical rhythm. It is useful, but less important than consistent spacing values and a clear horizontal grid.</p>`,
    why: `
<p>A spacing scale and grid speed up design and development dramatically. Developers can implement spacing with a small set of tokens, designers stop debating 2px differences, and screens built by different people look like they belong to the same product. Consistent spacing also makes grouping clearer, which reduces errors.</p>`,
    example: `
<p>An events app has been designed by four freelancers over two years. An audit finds 23 different spacing values and three different page margins. Screens look subtly inconsistent, and developers keep asking for exact measurements.</p>
<p>The team adopts an 8px-based scale (4, 8, 16, 24, 32, 48, 64), a 4-column mobile grid with 16px margins and gutters, and a 12-column desktop grid with 24px gutters. They update components first (buttons, cards, form fields) so most screens improve automatically. New screens are faster to design because spacing decisions now come from a list, not from scratch.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 660 270" role="img" aria-labelledby="fx-grid-t">
  <title id="fx-grid-t">Left: a spacing scale shown as bars of 4, 8, 12, 16, 24, 32, 48 and 64 pixels. Right: a phone screen with a 4-column grid, 16 pixel margins and 16 pixel gutters, with a card spanning all four columns and two smaller cards spanning two columns each.</title>
  <g transform="translate(20,30)">
    <text x="0" y="-8" class="fx-t-label">Spacing scale</text>
    ${[4, 8, 12, 16, 24, 32, 48, 64].map((v, i) => `<rect x="44" y="${i * 26 + 4}" width="${v * 3}" height="14" class="fx-acc" rx="2"/><text x="0" y="${i * 26 + 16}" class="fx-t-sm">${v}px</text>`).join('')}
  </g>
  <g transform="translate(400,10)">
    <text x="0" y="12" class="fx-t-label">4-column grid</text>
    <rect x="0" y="22" width="200" height="236" rx="18" class="fx-box"/>
    ${[0, 1, 2, 3].map((c) => `<rect x="${12 + c * 46}" y="34" width="38" height="212" fill="rgba(30,64,175,.08)"/>`).join('')}
    <rect x="12" y="46" width="176" height="70" rx="8" fill="#fff" stroke="#0A0A0A"/>
    <rect x="12" y="128" width="84" height="60" rx="8" fill="#fff" stroke="#0A0A0A"/>
    <rect x="104" y="128" width="84" height="60" rx="8" fill="#fff" stroke="#0A0A0A"/>
  </g>
</svg>`,
      caption: 'A spacing scale gives every gap a predictable value. A column grid aligns content across the page and adapts by changing the number of columns.',
    },
    walkthrough: [
      { title: 'Audit current spacing', body: 'Measure the gaps on three screens of a product and list every value you find.' },
      { title: 'Choose a base unit', body: 'Pick 4px or 8px. Eight is simpler; four gives finer control inside dense components.' },
      { title: 'Define the scale', body: 'Write 7 to 10 values. Name them (for example space-1 to space-9, or xs to 3xl).' },
      { title: 'Map old values to the scale', body: 'Round every audited value to the nearest scale step.' },
      { title: 'Set up a grid', body: 'Define columns, gutters and margins for phone, tablet and desktop.' },
      { title: 'Rebuild one screen', body: 'Apply only scale values and align content to the grid. Compare with the original.' },
    ],
    mistakes: [
      { mistake: 'Using any value that "looks right".', fix: 'Choose from the scale. If nothing fits, question whether the layout needs changing, not the scale.' },
      { mistake: 'Treating the grid as mandatory for every element.', fix: 'Use it for major structure. Allow intentional exceptions such as full-width images.' },
      { mistake: 'Same spacing everywhere.', fix: 'Use small values inside groups and larger values between them, so spacing communicates structure.' },
    ],
    quiz: [
      { q: 'Why do many teams base spacing on a 4 or 8 pixel unit?', options: ['Browsers require it', 'It creates a small, predictable set of values that is easy to use consistently', 'It makes screens load faster'], answer: 1, explain: 'A consistent unit gives a memorable scale shared by design and code.' },
      { q: 'What is a gutter in a column grid?', options: ['The space between columns', 'The page margin', 'A type of navigation'], answer: 0, explain: 'Gutters separate columns; margins sit at the outer edges.' },
      { q: 'A label is 24px above its field and 24px below the previous field. What should change?', options: ['Nothing', 'Reduce the gap between the label and its field so the label groups with it', 'Increase both gaps to 48px'], answer: 1, explain: 'Spacing should show which elements belong together.' },
    ],
    exercise: {
      title: 'Spacing audit and rebuild',
      minutes: 45,
      brief: '<p>Audit and rebuild one screen of a real product using a spacing scale and grid.</p>',
      steps: [
        'Screenshot a screen and measure at least 15 gaps.',
        'Define an 8px-based scale.',
        'Rebuild the screen using only scale values on a 4-column mobile grid.',
        'Annotate where you used small, medium and large spacing and why.',
      ],
      deliverable: 'Audit list, scale definition, and before and after screens with annotations.',
    },
    checklist: [
      'Every spacing value comes from the scale.',
      'Content aligns to the grid columns.',
      'Gaps inside groups are smaller than gaps between groups.',
      'I documented the scale with names.',
    ],
    summary: [
      'A spacing scale limits spacing to a small set of values, often based on 4 or 8px.',
      'Spacing communicates grouping: small inside, large between.',
      'Column grids with margins and gutters create alignment and adapt across screen sizes.',
      'Grids guide layout; intentional exceptions are fine.',
    ],
    reading: [
      { title: 'Using Grids in Interface Designs', url: 'https://www.nngroup.com/articles/using-grids-in-interface-designs/', source: 'Nielsen Norman Group' },
      { title: 'Spacing', url: 'https://design-system.service.gov.uk/styles/spacing/', source: 'GOV.UK Design System', note: 'A real, public spacing scale with responsive values.' },
      { title: 'Layout', url: 'https://design-system.service.gov.uk/styles/layout/', source: 'GOV.UK Design System' },
    ],
  },

  'composition-responsive': {
    objectives: [
      'Plan a layout that works from small phones to wide screens.',
      'Use content priority to decide how a layout reflows.',
      'Choose breakpoints based on content rather than specific devices.',
      'Avoid common responsive failures such as hidden content and horizontal scrolling.',
    ],
    explanation: `
<p><strong>Composition</strong> is the arrangement of elements on a screen to create a clear, balanced whole. <strong>Responsive design</strong> is making that composition adapt to the space available, from a narrow phone to a wide monitor, and to settings like zoom and larger text.</p>
<h3>Start with content priority</h3>
<p>On a narrow screen, everything stacks into one column, so the order of content becomes the hierarchy. Decide the order first: what must people see first, what supports their decision, what is optional. That order should be the same on every screen size, even when wide screens place things side by side.</p>
<h3>How layouts adapt</h3>
<ul>
<li><strong>Reflow:</strong> columns stack vertically on narrow screens.</li>
<li><strong>Resize:</strong> elements stretch or shrink within limits, for example images scale to the container width.</li>
<li><strong>Reveal or condense:</strong> wide screens can show more at once, such as a sidebar; narrow screens can move secondary content behind a disclosure. Do not remove essential content on small screens.</li>
<li><strong>Change pattern:</strong> a horizontal tab bar might become a menu, or a table might become stacked cards.</li>
</ul>
<h3>Breakpoints</h3>
<p>A <strong>breakpoint</strong> is a width where the layout changes. Choose breakpoints where your content starts to look wrong (lines too long, cards too cramped), not around particular phone models, which change every year. Most products need two to four breakpoints.</p>
<h3>Mobile first</h3>
<p>Designing for the smallest screen first forces you to prioritise, because there is no room for everything. You then add layout enhancements as space grows. This approach also tends to produce simpler, faster pages. It is not the only approach, and complex desktop tools are sometimes designed desktop first, but the content priority exercise is valuable either way.</p>
<h3>Zoom and reflow</h3>
<p>Responsive design is also an accessibility requirement. WCAG asks that content reflows without horizontal scrolling at a width equivalent to 320 CSS pixels (which is what a 1280px-wide window looks like at 400% zoom), with exceptions for things like data tables and maps.</p>`,
    why: `
<p>People use the same product on different devices, often within one task: researching on a phone, buying on a laptop. If the mobile layout hides prices or makes buttons hard to tap, people leave. Layouts that break at zoom levels exclude people with low vision. Responsive thinking is part of designing any screen, not a final adaptation step.</p>`,
    example: `
<p>A university course page on desktop shows a left sidebar with key facts (duration, fees, start date, entry requirements) next to a long description. On phones, the sidebar was moved to the bottom of the page, so prospective students had to scroll past a long description to find the fees.</p>
<p>The team reorders the content by priority: course name, a short summary, then the key facts as a compact list, then the "Apply" button, then the full description in sections. On desktop the key facts still sit in a sidebar, but on phones they now come straight after the summary. Questions to the admissions office about fees and dates fall noticeably over the next term.</p>`,
    figure: {
      html: `
<svg class="fx-svg" viewBox="0 0 660 240" role="img" aria-labelledby="fx-resp-t">
  <title id="fx-resp-t">The same content at three widths. On a phone, title, key facts, button and description stack in one column in priority order. On a tablet, key facts and button sit beside each other. On desktop, the description takes two thirds of the width and key facts with the button sit in a sidebar.</title>
  <g transform="translate(10,20)">
    <text x="0" y="0" class="fx-t-label">Phone</text>
    <rect x="0" y="12" width="110" height="200" rx="14" class="fx-box"/>
    <rect x="10" y="24" width="90" height="16" rx="3" class="fx-dot"/>
    <rect x="10" y="48" width="90" height="34" rx="4" class="fx-circle"/>
    <rect x="10" y="90" width="90" height="14" rx="7" class="fx-acc"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="10" y="${114 + i * 16}" width="${i === 4 ? 60 : 90}" height="6" rx="3" fill="#CFCFCF"/>`).join('')}
  </g>
  <g transform="translate(150,20)">
    <text x="0" y="0" class="fx-t-label">Tablet</text>
    <rect x="0" y="12" width="190" height="200" rx="14" class="fx-box"/>
    <rect x="12" y="24" width="166" height="16" rx="3" class="fx-dot"/>
    <rect x="12" y="48" width="100" height="44" rx="4" class="fx-circle"/>
    <rect x="120" y="60" width="58" height="16" rx="8" class="fx-acc"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="12" y="${104 + i * 16}" width="${i === 4 ? 110 : 166}" height="6" rx="3" fill="#CFCFCF"/>`).join('')}
  </g>
  <g transform="translate(380,20)">
    <text x="0" y="0" class="fx-t-label">Desktop</text>
    <rect x="0" y="12" width="270" height="200" rx="14" class="fx-box"/>
    <rect x="14" y="26" width="160" height="18" rx="3" class="fx-dot"/>
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="14" y="${58 + i * 18}" width="${i === 6 ? 110 : 160}" height="6" rx="3" fill="#CFCFCF"/>`).join('')}
    <rect x="188" y="26" width="68" height="70" rx="4" class="fx-circle"/>
    <rect x="188" y="104" width="68" height="16" rx="8" class="fx-acc"/>
  </g>
</svg>`,
      caption: 'Key facts (the outlined block) and the primary button (blue) come before the description on narrow screens and move to a sidebar on wide screens. The priority order stays the same.',
    },
    walkthrough: [
      { title: 'List content in priority order', body: 'Write the content of a page as a single ordered list. This is your phone layout.' },
      { title: 'Sketch the phone layout', body: 'Draw it at 320 to 375px wide. Check the primary action is reachable without scrolling past unrelated content.' },
      { title: 'Widen until it looks wrong', body: 'In a design tool or browser, stretch the frame. Note the width where lines get too long or space feels wasted. That is a breakpoint.' },
      { title: 'Decide what changes', body: 'At each breakpoint, decide whether to reflow, resize, reveal or change pattern.' },
      { title: 'Check extremes', body: 'Check 320px wide, a very wide screen, long text, and 200% text size.' },
    ],
    mistakes: [
      { mistake: 'Hiding important content on mobile to save space.', fix: 'Reorder or condense instead. People on phones need the same information.' },
      { mistake: 'Choosing breakpoints for specific devices.', fix: 'Choose them where the content needs a change.' },
      { mistake: 'Designing only the desktop and "squeezing" it later.', fix: 'Design the smallest layout early, or at least define content priority before desktop layouts.' },
      { mistake: 'Fixed widths that cause horizontal scrolling.', fix: 'Use flexible widths and test at 320px.' },
    ],
    quiz: [
      { q: 'What should decide where a breakpoint goes?', options: ['The screen size of the latest popular phone', 'The width at which the content starts to look or work wrong', 'Always 768px'], answer: 1, explain: 'Content-driven breakpoints keep working as devices change.' },
      { q: 'On a phone, the fees for a course appear after a long description. What is the best fix?', options: ['Make the description shorter', 'Reorder content by priority so key facts come early', 'Hide the description on phones'], answer: 1, explain: 'On a single column, order is hierarchy. Put decision-critical content first.' },
      { q: 'Which width does WCAG use as the reflow benchmark for vertically scrolling content?', options: ['320 CSS pixels', '1024 CSS pixels', '600 CSS pixels'], answer: 0, explain: 'Content should reflow without horizontal scrolling at a width equivalent to 320 CSS pixels.' },
    ],
    exercise: {
      title: 'Three-width layout',
      minutes: 45,
      brief: '<p>Choose a content-heavy page (a recipe, a product, a course) and design it at phone, tablet and desktop widths.</p>',
      steps: [
        'Write the content in priority order.',
        'Design the phone layout first.',
        'Find natural breakpoints by widening the frame.',
        'Design tablet and desktop layouts that keep the same priority.',
        'Annotate what changes at each breakpoint and why.',
      ],
      deliverable: 'Three annotated layouts and the priority list.',
    },
    checklist: [
      'The phone layout includes all essential content.',
      'The priority order is the same at every width.',
      'Breakpoints are justified by content.',
      'Nothing requires horizontal scrolling at 320px.',
    ],
    summary: [
      'On narrow screens, order is hierarchy; decide content priority first.',
      'Layouts adapt by reflowing, resizing, revealing and changing patterns.',
      'Place breakpoints where content needs them.',
      'Responsive design is also an accessibility requirement (reflow at 320 CSS pixels).',
    ],
    reading: [
      { title: 'Responsive Web Design (RWD) and User Experience', url: 'https://www.nngroup.com/articles/responsive-web-design-definition/', source: 'Nielsen Norman Group' },
      { title: 'Responsive design', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design', source: 'MDN Web Docs' },
      { title: 'Understanding Success Criterion 1.4.10: Reflow', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html', source: 'W3C WAI' },
    ],
  },

  'images-icons-consistency': {
    objectives: [
      'Decide when an image, icon or illustration genuinely helps.',
      'Use icons with labels and choose familiar icons over clever ones.',
      'Keep imagery and icon styles consistent across a product.',
      'Write useful alternative text.',
    ],
    explanation: `
<p>Images, icons and illustrations can make an interface faster to understand and more human. They can also slow pages down, push content out of view and confuse people. Use each one for a reason.</p>
<h3>Images</h3>
<p>Photos are valuable when people need to see the real thing: a product, a room, a dish, a person they will meet. Decorative stock photos of smiling people at laptops rarely help and often push useful content down. Ask: would someone miss this image if it were gone?</p>
<h3>Icons</h3>
<p>Icons save space and speed up recognition, but only when people recognise them. A few icons are nearly universal in context (search, home, close, print). Most are not: a heart can mean "like", "save" or "health"; a gear can mean "settings" or "tools". Research on icon usability consistently finds that text labels improve understanding. Use icons with visible labels, especially in navigation and for important actions. Icon-only buttons are acceptable for very familiar actions in tight spaces, and still need an accessible name.</p>
<h3>Illustration</h3>
<p>Illustrations can explain concepts, give empty states personality, and support brand. Keep them secondary to content, and make sure they do not carry meaning that text does not also explain.</p>
<h3>Consistency</h3>
<p>Use one icon family with consistent stroke weight, corner style and size. Use one photographic style (lighting, cropping, colour treatment) and one illustration style. Mixing outlined and filled icons randomly, or three illustration styles, makes a product feel stitched together. Where filled and outlined variants exist, give them a meaning, for example filled for the selected state.</p>
<h3>Alternative text</h3>
<p>Images that convey information need <strong>alt text</strong> that conveys the same information. Describe purpose and content in context, not the file ("photo.jpg") or the obvious ("image of"). Purely decorative images should be hidden from assistive technology (empty alt text in HTML). A product photo might need "Hand-thrown blue ceramic mug, about 10 cm tall"; a decorative swirl needs nothing.</p>`,
    why: `
<p>Unlabelled icons are a common source of confusion in usability tests, and they are hard for new users to learn. Heavy imagery slows pages on mobile networks, which affects everyone and particularly people on limited data plans. Inconsistent visual styles erode trust. Missing alt text makes content unavailable to screen reader users.</p>`,
    example: `
<p>A field service app for engineers uses a bottom navigation bar with five unlabelled icons: a calendar, a wrench, a box, a speech bubble and a person. In onboarding sessions, new engineers repeatedly tap the box expecting "parts inventory", which actually opens "completed jobs".</p>
<p>Adding short labels (Schedule, Jobs, Parts, Messages, Profile) and changing the box icon to a clipboard for jobs ends the confusion. The team also replaces a mix of outlined and filled icons with one consistent outlined family, using filled versions only for the selected tab.</p>`,
    figure: {
      html: `
<div class="fx-pair">
  <div class="fx-panel" role="img" aria-label="Before: a bottom navigation bar with five icons and no labels.">
    <span class="fx-panel__label is-bad">Icons only</span>
    <div style="display:flex;justify-content:space-around;padding:.6rem 0;border-top:1px solid #DDD;font-size:1.3rem;color:#333">
      <span>📅</span><span>🔧</span><span>📦</span><span>💬</span><span>👤</span>
    </div>
  </div>
  <div class="fx-panel" role="img" aria-label="After: the same five tabs, each with an icon and a text label: Schedule, Jobs, Parts, Messages, Profile. Schedule is selected and shown in bold.">
    <span class="fx-panel__label is-good">Icons with labels</span>
    <div style="display:flex;justify-content:space-around;padding:.5rem 0;border-top:1px solid #DDD;font-size:.68rem;text-align:center;color:#57564F">
      <span style="color:#0A0A0A;font-weight:600"><span style="font-size:1.1rem;display:block">📅</span>Schedule</span><span><span style="font-size:1.1rem;display:block">📋</span>Jobs</span><span><span style="font-size:1.1rem;display:block">🔧</span>Parts</span><span><span style="font-size:1.1rem;display:block">💬</span>Messages</span><span><span style="font-size:1.1rem;display:block">👤</span>Profile</span>
    </div>
  </div>
</div>`,
      caption: 'Labels remove guesswork. Emoji are used here only as stand-ins for a consistent icon set.',
    },
    walkthrough: [
      { title: 'Inventory visuals', body: 'List every image, icon and illustration on three screens of a product.' },
      { title: 'Ask what each one does', body: 'For each, write its purpose: inform, identify, decorate, or none.' },
      { title: 'Test icon recognition', body: 'Show five icons without labels to three people and ask what each does. Note mismatches.' },
      { title: 'Add labels and remove decoration', body: 'Label navigation and important actions. Remove or shrink visuals that do not help.' },
      { title: 'Unify styles', body: 'Choose one icon family and one photo or illustration style. Replace exceptions.' },
      { title: 'Write alt text', body: 'For each informative image, write alt text that conveys its purpose in context.' },
    ],
    mistakes: [
      { mistake: 'Icon-only navigation with abstract icons.', fix: 'Add visible labels.' },
      { mistake: 'Large decorative hero images above the actual task.', fix: 'Shrink or remove them, or make the image itself useful.' },
      { mistake: 'Alt text like "image" or the file name.', fix: 'Describe the information or function. Use empty alt for decoration.' },
      { mistake: 'Mixing icon styles from different libraries.', fix: 'Pick one family and draw missing icons in the same style.' },
    ],
    quiz: [
      { q: 'What usually improves icon understanding the most?', options: ['Making icons more colourful', 'Adding a visible text label', 'Animating them'], answer: 1, explain: 'Labels remove ambiguity, especially for less common actions.' },
      { q: 'What alt text should a purely decorative background pattern have?', options: ['"Decorative pattern"', 'Empty alt text so screen readers skip it', 'The file name'], answer: 1, explain: 'Decorative images should be hidden from assistive technology.' },
      { q: 'When is a photo most valuable in an interface?', options: ['When people need to see the real thing, such as a product or a place', 'On every page to make it friendlier', 'When there is not enough text'], answer: 0, explain: 'Images earn their space when they carry information people need.' },
    ],
    exercise: {
      title: 'Icon recognition test',
      minutes: 30,
      brief: '<p>Test how well people understand the icons in an app you use.</p>',
      steps: [
        'Take screenshots of eight icons from one app, cropped without labels.',
        'Show them to three people and ask what each does.',
        'Record correct, partially correct and wrong answers.',
        'Propose labels or replacement icons for anything misunderstood.',
      ],
      deliverable: 'A results table and your recommendations.',
    },
    checklist: [
      'I tested with real people, not just myself.',
      'I recorded answers honestly.',
      'My recommendations include labels where needed.',
      'Any replacement icons match one style.',
    ],
    summary: [
      'Use images when people need to see the real thing; question decoration.',
      'Icons work best with labels; only a few are universally understood.',
      'Keep one icon family and one imagery style.',
      'Write alt text that conveys meaning in context; hide decorative images.',
    ],
    reading: [
      { title: 'Icon Usability', url: 'https://www.nngroup.com/articles/icon-usability/', source: 'Nielsen Norman Group' },
      { title: 'Alternative Text', url: 'https://webaim.org/techniques/alttext/', source: 'WebAIM' },
      { title: 'Images', url: 'https://design-system.service.gov.uk/styles/images/', source: 'GOV.UK Design System' },
    ],
  },

  'visual-accessibility': {
    objectives: [
      'Apply the main visual WCAG requirements: text contrast, non-text contrast, use of colour, resizing, reflow and text spacing.',
      'Design visible focus indicators and adequate target sizes.',
      'Check a design for visual accessibility problems before handoff.',
    ],
    explanation: `
<p>Visual accessibility is the part of accessibility designers control most directly. Many of the most common accessibility failures on the web are visual, and most are easy to prevent at the design stage. This lesson focuses on what you can see; Stage 9 covers keyboard, screen readers and cognitive accessibility in depth.</p>
<h3>The key requirements</h3>
<p>The Web Content Accessibility Guidelines (WCAG) 2.2 include these visual success criteria at level AA, which many organisations and laws use as a target:</p>
<ul>
<li><strong>Contrast (minimum), 1.4.3:</strong> text needs at least 4.5:1 contrast with its background; large text (at least 24px regular or about 18.7px bold) needs 3:1.</li>
<li><strong>Non-text contrast, 1.4.11:</strong> meaningful graphics and the visible parts of controls (input borders, icons, focus indicators, chart lines) need at least 3:1 against adjacent colours.</li>
<li><strong>Use of colour, 1.4.1 (level A):</strong> colour must not be the only way information is conveyed, such as errors, links in text, or chart series.</li>
<li><strong>Resize text, 1.4.4:</strong> text can be enlarged to 200% without loss of content or function.</li>
<li><strong>Reflow, 1.4.10:</strong> content works at a width of 320 CSS pixels without two-dimensional scrolling, with some exceptions.</li>
<li><strong>Text spacing, 1.4.12:</strong> layouts survive users increasing line, paragraph, letter and word spacing.</li>
<li><strong>Focus visible, 2.4.7:</strong> keyboard focus is always visible. WCAG 2.2 adds <strong>focus not obscured (minimum), 2.4.11:</strong> the focused element is not completely hidden, for example by a sticky header.</li>
<li><strong>Target size (minimum), 2.5.8:</strong> pointer targets are at least 24 by 24 CSS pixels, or spaced so a 24px circle around each does not overlap others. Larger targets, such as 44px, are more comfortable and recommended by many platform guidelines.</li>
</ul>
<h3>Beyond the minimum</h3>
<p>Meeting a success criterion is a floor, not a guarantee of a good experience. Text that passes 4.5:1 can still be tiring if it is thin and small. Aim for comfortable, not just compliant. And remember that automated contrast checkers cannot judge everything, such as text over images or whether colour is the only cue.</p>`,
    why: `
<p>Low vision, colour vision deficiency, ageing eyes, small screens, bright sunlight and tired eyes affect a large share of people. Visual accessibility problems therefore affect far more people than many teams assume. Fixing them in design costs almost nothing; fixing them after development costs time and money, and in many countries inaccessible public services and some private ones can face legal challenges.</p>`,
    example: `
<p>A transport company's journey planner shows delays in red text on a dark grey background, uses a pale grey outline for input fields, and removes the default focus outline because it "looked ugly". A customer who navigates by keyboard cannot tell where they are on the page, and colour-blind customers miss delays entirely.</p>
<p>The fix: delays get an icon and the word "Delayed" with sufficient contrast; input borders darken to meet 3:1; a clear two-colour focus ring is designed to work on both light and dark backgrounds; the sticky header is checked so it never covers a focused field. The changes take a designer one afternoon.</p>`,
    figure: {
      html: `
<div class="fx-pair">
  <div class="fx-panel" role="img" aria-label="Before: three train times. One is shown in red to mean delayed, with no other indication. A pale grey input field and no visible focus.">
    <span class="fx-panel__label is-bad">Colour is the only cue</span>
    <div style="display:grid;gap:.4rem;font-size:.9rem">
      <span>08:12 Kathmandu to Pokhara</span><span style="color:#E5484D">08:40 Kathmandu to Chitwan</span><span>09:05 Kathmandu to Pokhara</span>
      <span style="margin-top:.4rem;border:1px solid #E5E5E5;border-radius:6px;padding:.4rem .6rem;color:#AAA">From</span>
    </div>
  </div>
  <div class="fx-panel" role="img" aria-label="After: the delayed departure has an exclamation icon and the word Delayed. The input field has a darker border and a thick visible focus ring.">
    <span class="fx-panel__label is-good">Text, icon and contrast</span>
    <div style="display:grid;gap:.4rem;font-size:.9rem;color:#1B1B1A">
      <span>08:12 Kathmandu to Pokhara</span><span>08:40 Kathmandu to Chitwan <b style="color:#B42318">⚠ Delayed 20 min</b></span><span>09:05 Kathmandu to Pokhara</span>
      <span style="margin-top:.4rem;border:1px solid #6B6B6B;border-radius:6px;padding:.4rem .6rem;outline:3px solid #1E40AF;outline-offset:2px">From</span>
    </div>
  </div>
</div>`,
      caption: 'The delay is now communicated with text and an icon, the input border meets 3:1, and keyboard focus is clearly visible.',
    },
    walkthrough: [
      { title: 'Check text contrast', body: 'Measure every text colour on every background it sits on, including text over images and coloured panels.' },
      { title: 'Check non-text contrast', body: 'Measure input borders, icons that convey meaning, chart lines and focus indicators against adjacent colours (3:1).' },
      { title: 'Remove colour-only meaning', body: 'View the design in greyscale. Add text, icons or patterns wherever meaning disappears.' },
      { title: 'Design focus states', body: 'Design a focus indicator for every interactive component, visible on all backgrounds it appears on.' },
      { title: 'Check targets', body: 'Measure tap targets. Aim for 44px; never go below 24px without spacing.' },
      { title: 'Stress test', body: 'Check the layout at 320px wide, with 200% text size, and with long translated strings.' },
    ],
    mistakes: [
      { mistake: 'Removing focus outlines for aesthetics.', fix: 'Design a better focus indicator instead; never remove it without a visible replacement.' },
      { mistake: 'Placeholder text as the only label, in light grey.', fix: 'Use visible labels above fields; placeholders, if used at all, are hints with sufficient contrast.' },
      { mistake: 'Assuming an automated checker found everything.', fix: 'Combine tools with manual checks such as greyscale, zoom and keyboard focus.' },
      { mistake: 'Text over busy photos.', fix: 'Add a solid or gradient overlay and measure contrast on the worst part of the image.' },
    ],
    quiz: [
      { q: 'What contrast do input field borders need against the background?', options: ['No requirement', 'At least 3:1', 'At least 7:1'], answer: 1, explain: 'Non-text contrast (1.4.11) requires 3:1 for visual information needed to identify controls.' },
      { q: 'What is the WCAG 2.2 AA minimum target size?', options: ['24 by 24 CSS pixels, or sufficient spacing', '10 by 10 pixels', '60 by 60 pixels'], answer: 0, explain: 'Success criterion 2.5.8 sets 24px with a spacing exception; many guidelines recommend 44px for comfort.' },
      { q: 'A design passes an automated contrast check. Is it accessible?', options: ['Yes', 'Not necessarily; many issues need manual checks', 'Only if it also uses a dark theme'], answer: 1, explain: 'Automated tools find only some problems. Colour-only meaning, focus visibility and reflow need human review.' },
    ],
    exercise: {
      title: 'Visual accessibility review',
      minutes: 45,
      brief: '<p>Review one of your own designs, or a public website, for visual accessibility using the walkthrough.</p>',
      steps: [
        'Measure and record contrast for all text and key non-text elements.',
        'Produce a greyscale version and note any lost meaning.',
        'Check focus indicators on three interactive elements.',
        'Check target sizes on mobile.',
        'Write a prioritised list of fixes.',
      ],
      deliverable: 'A short audit using the accessibility audit template, with fixes.',
    },
    checklist: [
      'All text contrast is measured, not estimated.',
      'Non-text elements meet 3:1.',
      'Meaning survives in greyscale.',
      'Focus states are designed and visible.',
      'Targets are 44px where possible and never below 24px without spacing.',
    ],
    summary: [
      'Key visual criteria: text contrast, non-text contrast, use of colour, resize, reflow, text spacing, focus and target size.',
      'Never rely on colour alone; never remove focus indicators.',
      'Treat WCAG as a minimum and design for comfort.',
      'Automated tools help but do not replace manual review.',
    ],
    reading: [
      { title: 'WCAG 2.2 quick reference', url: 'https://www.w3.org/WAI/WCAG22/quickref/', source: 'W3C WAI' },
      { title: 'Understanding Success Criterion 1.4.11: Non-text Contrast', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html', source: 'W3C WAI' },
      { title: 'Understanding Success Criterion 2.5.8: Target Size (Minimum)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', source: 'W3C WAI' },
      { title: 'Designing for Web Accessibility', url: 'https://www.w3.org/WAI/tips/designing/', source: 'W3C WAI' },
    ],
  },

  'critique-an-interface': {
    objectives: [
      'Use a repeatable method to critique an interface against goals and principles.',
      'Separate observation, impact and suggestion in written feedback.',
      'Prioritise improvements by their effect on users.',
    ],
    explanation: `
<p>Critique is a core design skill. You will critique your own work every day, review teammates' work, and assess competitors. Good critique is specific, grounded in goals and principles, and useful to the person receiving it. "I don't like the colours" is an opinion. "The two buttons have equal weight, so people may not know which one continues the booking" is a critique.</p>
<h3>A five-step method</h3>
<ol>
<li><strong>Understand the goal.</strong> Who is this for, what are they trying to do, and what does the business need? Without the goal, you cannot judge anything.</li>
<li><strong>Do the task.</strong> Try to complete the main task as a user would. Note every hesitation.</li>
<li><strong>Review with principles.</strong> Go through hierarchy, grouping and alignment, typography, colour and contrast, consistency, content and copy, states and feedback, and accessibility.</li>
<li><strong>Write findings as observation, impact, suggestion.</strong> What you see, why it matters for the user or the goal, and one possible improvement.</li>
<li><strong>Prioritise.</strong> Rank findings by how much they affect people's ability to succeed. Lead with the most important, and include what works well so it is kept.</li>
</ol>
<h3>Critique is not testing</h3>
<p>An expert critique, like a heuristic evaluation, predicts problems. It is fast and cheap, but it can miss real problems and flag ones users do not mind. Use critique to improve designs before testing, and confirm important findings with real users.</p>`,
    why: `
<p>Designers who can critique clearly improve their own work faster, give feedback colleagues value, and present their own decisions convincingly. Critique also appears in many design interviews ("critique this app") and in client work, where you need to explain what is wrong with an existing site without offending its owners.</p>`,
    example: `
<p>A designer is asked to critique a charity's donation page. Instead of listing dislikes, they write:</p>
<blockquote><p><strong>Observation:</strong> The monthly and one-off options are shown as two small tabs above the amount buttons, and "monthly" is selected by default without a clear label. <strong>Impact:</strong> People intending a one-off gift may set up a recurring payment by mistake, which damages trust and may lead to refunds and complaints. <strong>Suggestion:</strong> Ask "How often would you like to give?" with two clearly labelled options and no default, or default to one-off and offer monthly as a clear second choice.</p></blockquote>
<p>The finding is specific, connected to user and organisational impact, and offers a direction without dictating the final design. The charity's team immediately understands why it matters.</p>`,
    figure: {
      html: `
<div class="fx-panel" role="img" aria-label="An annotated donation form with three numbered callouts. One: small, unlabelled tabs for monthly and one-off with monthly preselected. Two: four amount buttons with equal weight to the Donate button. Three: a light grey note about fees with low contrast.">
  <span class="fx-panel__label">Annotated critique</span>
  <div style="display:grid;gap:1rem;grid-template-columns:minmax(0,1fr)" >
    <div style="position:relative;border:1px solid #DDD;border-radius:10px;padding:1rem;font-size:.85rem;max-width:22rem">
      <div style="display:flex;gap:.3rem;margin-bottom:.6rem"><span style="padding:.15rem .5rem;background:#0A0A0A;color:#fff;border-radius:4px;font-size:.72rem">Monthly</span><span style="padding:.15rem .5rem;border:1px solid #CCC;border-radius:4px;font-size:.72rem">One-off</span><b style="margin-left:auto;color:#1E40AF">1</b></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.3rem;margin-bottom:.6rem"><span style="border:1px solid #999;border-radius:4px;text-align:center;padding:.3rem">500</span><span style="border:1px solid #999;border-radius:4px;text-align:center;padding:.3rem">1000</span><span style="border:1px solid #999;border-radius:4px;text-align:center;padding:.3rem">2000</span><span style="border:1px solid #999;border-radius:4px;text-align:center;padding:.3rem">Other</span></div>
      <div style="display:flex;align-items:center;gap:.4rem"><span style="border:1px solid #999;border-radius:4px;padding:.3rem .8rem">Donate</span><b style="margin-left:auto;color:#1E40AF">2</b></div>
      <div style="display:flex;margin-top:.5rem;color:#BBB;font-size:.72rem">A small fee may apply.<b style="margin-left:auto;color:#1E40AF">3</b></div>
    </div>
    <ol style="list-style:decimal;padding-left:1.2rem;font-size:.85rem;display:grid;gap:.3rem;color:#1B1B1A">
      <li>Frequency is easy to miss and preselected. Risk of accidental monthly gifts.</li>
      <li>"Donate" looks the same as the amounts, so the main action does not stand out.</li>
      <li>The fee note fails contrast and may surprise people later.</li>
    </ol>
  </div>
</div>`,
      caption: 'Numbered annotations keep critique concrete. Each number maps to an observation, its impact and a suggestion.',
    },
    walkthrough: [
      { title: 'Write the goal', body: 'One sentence each for the user goal and the business goal.' },
      { title: 'Complete the task twice', body: 'Once naturally, noting hesitation; once slowly, looking for problems.' },
      { title: 'Go through the principles', body: 'Use the checklist: hierarchy, grouping, alignment, type, colour, consistency, content, states, accessibility.' },
      { title: 'Annotate a screenshot', body: 'Number each issue on the image.' },
      { title: 'Write each finding', body: 'Observation, impact, suggestion. Keep each to two or three sentences.' },
      { title: 'Prioritise and add positives', body: 'Order by user impact. Add two or three things that work well.' },
    ],
    mistakes: [
      { mistake: 'Critiquing without knowing the goal.', fix: 'Ask, or state your assumption about the goal before you begin.' },
      { mistake: 'Stating preferences as problems.', fix: 'Tie each point to a principle, evidence or a likely user impact.' },
      { mistake: 'Prescribing a full redesign for every issue.', fix: 'Offer a direction; leave room for the designer to solve it.' },
      { mistake: 'Only listing negatives.', fix: 'Say what works so it is not lost in changes.' },
    ],
    quiz: [
      { q: 'Which is the most useful critique?', options: ['"The page feels cluttered."', '"The sidebar has nine links of equal weight, so the two main tasks are hard to spot. Could we promote those two?"', '"I would use a different font."'], answer: 1, explain: 'It states the observation, the impact and a possible direction.' },
      { q: 'What is the first step of the critique method?', options: ['Look for colour problems', 'Understand the user and business goal', 'Redesign the screen'], answer: 1, explain: 'Without the goal you cannot judge whether a design works.' },
      { q: 'How should expert critique relate to usability testing?', options: ['It replaces testing', 'It finds likely problems quickly; important findings should be confirmed with users', 'It should only happen after launch'], answer: 1, explain: 'Critique predicts; testing confirms.' },
    ],
    exercise: {
      title: 'Write a structured critique',
      minutes: 45,
      brief: '<p>Critique the sign-up or onboarding flow of a real app using the method.</p>',
      steps: [
        'Write the user and business goals.',
        'Complete the flow and annotate screenshots.',
        'Write at least six findings as observation, impact, suggestion.',
        'Prioritise them and add three positives.',
        'Share with someone and ask whether each finding is clear.',
      ],
      deliverable: 'An annotated critique document, around one to two pages.',
    },
    assignment: {
      title: 'Critique and redesign',
      brief: '<p>Choose your top three findings from the exercise and redesign those parts of the flow. Show before and after, and explain how each change addresses the finding.</p>',
      deliverables: ['Three before and after comparisons', 'A short explanation for each linking change to finding', 'A plan for how you would test the changes'],
    },
    checklist: [
      'Every finding has an observation, impact and suggestion.',
      'Findings are tied to principles or evidence, not taste.',
      'Findings are prioritised by user impact.',
      'I included what works well.',
      'Someone else understood my findings without explanation.',
    ],
    summary: [
      'Critique is specific, goal-based and useful.',
      'Method: understand the goal, do the task, review with principles, write observation, impact and suggestion, then prioritise.',
      'Include positives so good decisions survive.',
      'Critique predicts problems; testing confirms them.',
    ],
    reading: [
      { title: 'Design Critiques: Encourage a Positive Culture to Improve Products', url: 'https://www.nngroup.com/articles/design-critiques/', source: 'Nielsen Norman Group' },
      { title: '10 Usability Heuristics for User Interface Design', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', source: 'Nielsen Norman Group' },
    ],
  },
};
