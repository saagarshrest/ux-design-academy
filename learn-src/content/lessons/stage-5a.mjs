// @ts-check
/* Stage 5 (part 1): Figma and design tools. Original lesson text. */

/** @type {Record<string, import('../../types').LessonBody>} */
export default {
  'figma-interface-files': {
    objectives: [
      'Find your way around the Figma interface: canvas, layers, properties and toolbar.',
      'Organise work into teams, projects, files and pages.',
      'Set up a file structure that others can understand.',
    ],
    explanation: `
<p>Figma is a browser-based design tool used by most product teams. Other tools such as Penpot, Sketch and Framer share many of the same ideas, so the concepts here transfer.</p>
<h3>The interface</h3>
<ul>
<li><strong>Canvas</strong>: the infinite space in the middle where you design.</li>
<li><strong>Layers panel</strong> (left): every object in the file, nested in a tree. Pages are listed above it.</li>
<li><strong>Properties panel</strong> (right): settings for whatever is selected, such as size, layout, fill and text.</li>
<li><strong>Toolbar</strong> (bottom or top, depending on version): tools for frames, shapes, pen, text and comments.</li>
</ul>
<h3>How work is organised</h3>
<p>Figma organises work as <strong>teams</strong> (or workspaces) containing <strong>projects</strong>, which contain <strong>files</strong>, which contain <strong>pages</strong>. A file usually holds one product area or feature. Pages split the file into stages or topics.</p>
<h3>A sensible page structure</h3>
<p>Many teams use pages such as: Cover, Research and notes, Explorations, Ready for development, Archive. The cover page shows the file's name, status, owner and last update, so anyone opening it knows where things stand.</p>`,
    why: `
<p>Design files are shared documents. Developers, product managers and other designers need to find the right screen quickly. A clear structure saves everyone time, prevents people building from outdated explorations, and makes your work look professional, including to hiring managers reviewing portfolio files.</p>`,
    example: `
<p>A new designer joins a team and opens the "Checkout" file. It has one page with 300 frames, many duplicates and names like "Frame 482". Nobody knows which version is final.</p>
<p>The team reorganises: a cover page showing status "In development", a page for explorations, a page called "Ready for dev" containing only approved screens with clear names, and an archive page. Developers now go straight to "Ready for dev", and questions about which version to build stop.</p>`,
    walkthrough: [
      { title: 'Create a project', body: 'Make a project for your learning work in your Figma team or drafts.' },
      { title: 'Create a file', body: 'Name it after the product area, for example "Plant app – onboarding".' },
      { title: 'Add pages', body: 'Create Cover, Explorations, Ready for review and Archive pages.' },
      { title: 'Design a cover', body: 'Add the file name, owner, status and date on a frame on the Cover page.' },
      { title: 'Explore the panels', body: 'Select objects and watch how the layers and properties panels change.' },
      { title: 'Learn key shortcuts', body: 'Practise F (frame), R (rectangle), T (text), and Shift+A (auto layout).' },
    ],
    mistakes: [
      { mistake: 'Everything on one page.', fix: 'Split work by stage or topic into pages.' },
      { mistake: 'No indication of status.', fix: 'Add a cover page and label sections as exploration or approved.' },
      { mistake: 'Deleting old work instead of archiving.', fix: 'Move it to an Archive page so decisions can be traced.' },
    ],
    quiz: [
      { q: 'What is the right-hand properties panel for?', options: ['Listing pages', 'Changing settings of the selected object', 'Chatting'], answer: 1, explain: 'It shows properties for the current selection.' },
      { q: 'What should a cover page show?', options: ['A random image', 'File name, owner, status and last update', 'All screens'], answer: 1, explain: 'It tells people where the file stands.' },
      { q: 'Why separate explorations from approved screens?', options: ['To save memory', 'So people do not build from outdated ideas', 'Figma requires it'], answer: 1, explain: 'Clear separation prevents mistakes.' },
    ],
    exercise: {
      title: 'Set up a tidy file',
      minutes: 30,
      brief: '<p>Create a Figma file for a project you will work on through this stage.</p>',
      steps: [
        'Create the file and name it clearly.',
        'Add at least four pages with a clear purpose.',
        'Design a cover with status and owner.',
        'Share view access with someone and ask if they can find the latest work.',
      ],
      deliverable: 'A shared, well-structured Figma file.',
    },
    checklist: [
      'My file has a clear name.',
      'Pages separate stages of work.',
      'There is a cover with status.',
      'I know the main panels and shortcuts.',
    ],
    summary: [
      'Figma has a canvas, layers panel, properties panel and toolbar.',
      'Work is organised as teams, projects, files and pages.',
      'Use pages and a cover to show status.',
      'Well-organised files save everyone time.',
    ],
    reading: [
      { title: 'Figma Learn', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
      { title: 'Penpot user guide', url: 'https://help.penpot.app/user-guide/', source: 'Penpot', note: 'A free, open-source alternative with similar concepts.' },
    ],
  },

  'frames-shapes-text': {
    objectives: [
      'Use frames as screens and containers.',
      'Create and style shapes, text and images.',
      'Use constraints so elements behave sensibly when a frame is resized.',
    ],
    explanation: `
<p>Almost everything in Figma is built from a few basic objects.</p>
<h3>Frames</h3>
<p>A <strong>frame</strong> is a container. Top-level frames act as screens (choose a device preset such as a phone size). Frames can also be nested to group parts of a layout, such as a card or a header. Unlike groups, frames have their own size, fill, clipping and layout settings, so prefer frames for structure.</p>
<h3>Shapes and text</h3>
<p>Rectangles, ellipses and lines make up backgrounds, dividers and icons. Text layers can be <strong>auto width</strong> (grows with content), <strong>auto height</strong> (fixed width, grows downwards) or <strong>fixed</strong>. Use auto height for paragraphs so text wraps naturally.</p>
<h3>Images</h3>
<p>Images are fills on shapes or frames. Set them to <em>fill</em> (crop to cover), <em>fit</em> (show all) or <em>crop</em>. Use realistic images, and remember to write alt text when designs go to development.</p>
<h3>Constraints</h3>
<p><strong>Constraints</strong> tell an element how to behave when its parent frame changes size: stick to the left, right, centre, or stretch. A header bar set to "Left and right" stretches with the screen; a close button set to "Right" stays in the corner. Constraints are a first step towards responsive designs (auto layout, covered next, goes further).</p>`,
    why: `
<p>Understanding these building blocks makes everything else in Figma easier. Using frames instead of loose groups, and setting text and constraints correctly, means designs resize properly, handle real content and are easier for developers to understand. It is the difference between a picture of a screen and a working design.</p>`,
    example: `
<p>A designer builds a phone sign-up screen using groups and fixed text boxes. When the team asks for a tablet version, every element has to be moved by hand, and a longer translated button label overflows.</p>
<p>Rebuilding with frames, auto-height text and constraints, the header stretches across, the logo stays centred and the button stretches with side margins. Resizing the screen frame now produces a sensible tablet layout in seconds, and long text wraps instead of overflowing.</p>`,
    walkthrough: [
      { title: 'Create a screen frame', body: 'Press F and choose a phone preset.' },
      { title: 'Add a header frame', body: 'Draw a frame inside for the header and give it a fill.' },
      { title: 'Add text', body: 'Create a heading (auto width) and a paragraph (auto height with fixed width).' },
      { title: 'Add an image', body: 'Draw a rectangle, add an image fill and set it to fill.' },
      { title: 'Set constraints', body: 'Make the header stretch left and right; keep an icon pinned to the right.' },
      { title: 'Resize the screen', body: 'Drag the frame wider and check everything behaves.' },
    ],
    mistakes: [
      { mistake: 'Using groups for layout.', fix: 'Use frames, which have their own size and layout settings.' },
      { mistake: 'Fixed-size text boxes for paragraphs.', fix: 'Use auto height so text wraps and grows.' },
      { mistake: 'Ignoring constraints.', fix: 'Set them so designs resize predictably.' },
    ],
    quiz: [
      { q: 'Why prefer frames over groups for structure?', options: ['They are faster', 'They have their own size, fill and layout settings', 'Groups are deprecated'], answer: 1, explain: 'Frames are proper containers.' },
      { q: 'Which text setting suits a paragraph?', options: ['Auto width', 'Auto height', 'Fixed'], answer: 1, explain: 'Auto height wraps text within a set width.' },
      { q: 'A header should stretch across any screen width. Which constraint?', options: ['Left', 'Centre', 'Left and right'], answer: 2, explain: 'It pins both sides so the element stretches.' },
    ],
    exercise: {
      title: 'Resizable screen',
      minutes: 45,
      brief: '<p>Build a recipe detail screen that resizes from phone to tablet width.</p>',
      steps: [
        'Build the screen with frames, text and an image.',
        'Set text to auto height where needed.',
        'Set constraints on every element.',
        'Resize to tablet width and fix anything that breaks.',
      ],
      deliverable: 'A screen that resizes cleanly, with before and after resize screenshots.',
    },
    checklist: [
      'I used frames for structure.',
      'Paragraphs use auto height.',
      'Constraints are set.',
      'The screen resizes sensibly.',
    ],
    summary: [
      'Frames are containers and screens.',
      'Shapes, text and image fills build the content.',
      'Choose text sizing to fit the content.',
      'Constraints control behaviour when frames resize.',
    ],
    reading: [
      { title: 'Penpot: layers and boards', url: 'https://help.penpot.app/user-guide/', source: 'Penpot' },
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
    ],
  },

  'auto-layout': {
    objectives: [
      'Explain what auto layout does and why it matters.',
      'Use direction, spacing, padding, alignment and resizing settings.',
      'Build nested auto layout structures for real components and screens.',
    ],
    explanation: `
<p><strong>Auto layout</strong> makes a frame arrange its children automatically, like a flexible box in CSS. Add or remove items, or change text, and everything else moves to fit.</p>
<h3>Key settings</h3>
<ul>
<li><strong>Direction</strong>: horizontal, vertical or wrap.</li>
<li><strong>Gap</strong>: the space between items. Use values from your spacing scale.</li>
<li><strong>Padding</strong>: space between the frame's edge and its content.</li>
<li><strong>Alignment</strong>: where items sit inside the frame.</li>
<li><strong>Resizing</strong>: each item and frame can be <em>fixed</em>, <em>hug contents</em> (shrink to fit) or <em>fill container</em> (stretch to fill).</li>
</ul>
<h3>Nesting</h3>
<p>Real layouts nest auto layout frames. A card is a vertical stack (image, text block, button row). The text block is a vertical stack of title and description. The button row is a horizontal stack. Each level has its own gap and padding.</p>
<h3>Why it mirrors code</h3>
<p>Auto layout works much like CSS flexbox. Designs built this way are closer to how developers will build them, which makes handoff smoother and spacing more consistent.</p>`,
    why: `
<p>Without auto layout, every text change means nudging elements by hand. With it, buttons grow with their labels, lists reflow when items are added and screens adapt to different widths. It saves enormous time, enforces consistent spacing and is a skill nearly every design job now expects.</p>`,
    example: `
<p>A designer builds a button with auto layout: horizontal direction, 16px horizontal padding, 12px vertical padding, 8px gap between icon and label, and the frame set to hug contents. Changing the label from "Buy" to "Add to basket" widens the button automatically.</p>
<p>They then build a product card as a vertical auto layout with the image set to fill width, a text stack and the button. Placing four cards in a horizontal auto layout with wrap creates a grid that reflows when the container narrows.</p>`,
    walkthrough: [
      { title: 'Make a button', body: 'Create text, select it and press Shift+A. Set padding and corner radius.' },
      { title: 'Set resizing', body: 'Set the button to hug contents and test with a longer label.' },
      { title: 'Build a card', body: 'Stack an image, title, description and the button vertically.' },
      { title: 'Set fill container', body: 'Make the image and text fill the card width.' },
      { title: 'Nest', body: 'Wrap title and description in their own auto layout with a smaller gap.' },
      { title: 'Build a list', body: 'Put several cards in a parent auto layout and try wrap.' },
    ],
    mistakes: [
      { mistake: 'Mixing auto layout with manual positioning.', fix: 'Commit to auto layout for the structure, using absolute positioning only for overlays such as badges.' },
      { mistake: 'Random gap and padding values.', fix: 'Use your spacing scale.' },
      { mistake: 'Not understanding hug versus fill.', fix: 'Hug shrinks to content; fill stretches to the parent. Choose deliberately.' },
    ],
    quiz: [
      { q: 'What does "hug contents" do?', options: ['Stretches to fill the parent', 'Shrinks the frame to fit its content', 'Fixes the size'], answer: 1, explain: 'Hug sizes the frame to its children.' },
      { q: 'Which CSS concept is auto layout most similar to?', options: ['Tables', 'Flexbox', 'Floats'], answer: 1, explain: 'Both arrange items along an axis with gaps and alignment.' },
      { q: 'What is padding?', options: ['Space between items', 'Space between the frame edge and its content', 'Corner radius'], answer: 1, explain: 'Gap is between items; padding is around them.' },
    ],
    exercise: {
      title: 'Auto layout screen',
      minutes: 60,
      brief: '<p>Build a settings screen entirely with auto layout.</p>',
      steps: [
        'Build a list row (icon, label, value, chevron) with auto layout.',
        'Stack rows into groups with headings.',
        'Make the screen a vertical auto layout with padding.',
        'Change labels to long text and check nothing breaks.',
      ],
      deliverable: 'A settings screen built fully with auto layout.',
    },
    checklist: [
      'Every structure uses auto layout.',
      'Gaps and padding come from my scale.',
      'I used hug and fill deliberately.',
      'Long text does not break the layout.',
    ],
    summary: [
      'Auto layout arranges children automatically.',
      'Direction, gap, padding, alignment and resizing are the key settings.',
      'Nest auto layouts to build real structures.',
      'It mirrors flexbox, easing handoff.',
    ],
    reading: [
      { title: 'A complete guide to flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', source: 'CSS-Tricks', note: 'Understanding flexbox explains how auto layout thinks.' },
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
    ],
  },

  'components-properties': {
    objectives: [
      'Create main components and use instances.',
      'Use component properties for text, booleans and instance swaps.',
      'Decide what should become a component.',
    ],
    explanation: `
<p>A <strong>component</strong> is a reusable design element. You create a <strong>main component</strong> once; every copy you place is an <strong>instance</strong>. Change the main component and every instance updates.</p>
<h3>Overrides</h3>
<p>Instances can override some things, such as text content or a colour, while staying linked to the main component. That lets you reuse a button with different labels.</p>
<h3>Component properties</h3>
<p>Properties make components easier to use by exposing the settings people actually change:</p>
<ul>
<li><strong>Text property</strong>: edit a label from the properties panel.</li>
<li><strong>Boolean property</strong>: show or hide a part, such as an icon.</li>
<li><strong>Instance swap property</strong>: swap one nested component for another, such as choosing which icon to show.</li>
<li><strong>Variant property</strong>: choose between versions (covered in the next lesson).</li>
</ul>
<h3>What to make a component</h3>
<p>Anything repeated with the same structure: buttons, inputs, list rows, cards, navigation bars, icons. Do not turn one-off layouts into components just because you can.</p>`,
    why: `
<p>Components keep designs consistent and save huge amounts of time: fix a button once and it is fixed everywhere. They also mirror how developers build interfaces from reusable pieces, so a well-componentised file communicates structure clearly. Properties make components easy for others to use correctly.</p>`,
    example: `
<p>A designer has 60 screens with buttons drawn separately. Rounded corners change from 4px to 8px in a rebrand, which means editing every button by hand.</p>
<p>They create a button component with auto layout, a text property for the label, a boolean property to show an icon, and an instance swap property to choose the icon. Replacing the old buttons with instances takes an afternoon. The next style change takes seconds.</p>`,
    walkthrough: [
      { title: 'Build the element', body: 'Create a button with auto layout.' },
      { title: 'Make it a component', body: 'Select it and create a component (Ctrl/Cmd+Alt+K).' },
      { title: 'Add a text property', body: 'Link the label text to a text property.' },
      { title: 'Add a boolean property', body: 'Add an icon and link its visibility to a boolean.' },
      { title: 'Add an instance swap', body: 'Make the icon a component and expose a swap property.' },
      { title: 'Use instances', body: 'Place instances, change properties and then edit the main component to see updates.' },
    ],
    mistakes: [
      { mistake: 'Detaching instances to make small changes.', fix: 'Add a property or variant instead, so the link stays.' },
      { mistake: 'Componentising everything.', fix: 'Make components for repeated patterns only.' },
      { mistake: 'Main components scattered around the file.', fix: 'Keep them on a dedicated components page.' },
    ],
    quiz: [
      { q: 'What happens when you edit a main component?', options: ['Nothing', 'All instances update', 'Instances are deleted'], answer: 1, explain: 'Instances inherit changes from the main component.' },
      { q: 'Which property shows or hides an icon?', options: ['Text', 'Boolean', 'Instance swap'], answer: 1, explain: 'Booleans toggle visibility.' },
      { q: 'Why avoid detaching instances?', options: ['It deletes the file', 'They stop receiving updates from the main component', 'It is slower'], answer: 1, explain: 'Detached copies drift from the system.' },
    ],
    exercise: {
      title: 'Component with properties',
      minutes: 45,
      brief: '<p>Build a list row component for a contacts app.</p>',
      steps: [
        'Build the row with avatar, name, detail text and a trailing icon.',
        'Add text properties for name and detail.',
        'Add a boolean for the trailing icon and an instance swap for which icon.',
        'Build a contact list from instances.',
      ],
      deliverable: 'A component with properties and a list built from instances.',
    },
    checklist: [
      'My component uses auto layout.',
      'It exposes useful properties.',
      'I used instances, not copies.',
      'Main components live on a components page.',
    ],
    summary: [
      'Components are reusable; instances stay linked.',
      'Properties expose what people need to change.',
      'Componentise repeated patterns.',
      'Avoid detaching instances.',
    ],
    reading: [
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
      { title: 'Penpot: components', url: 'https://help.penpot.app/user-guide/', source: 'Penpot' },
    ],
  },

  'variants': {
    objectives: [
      'Combine related components into a component set with variants.',
      'Name variant properties and values clearly.',
      'Decide between variants and other component properties.',
    ],
    explanation: `
<p><strong>Variants</strong> group related versions of a component into one <strong>component set</strong>. A button might come in different types (primary, secondary, tertiary), sizes (small, medium, large) and states (default, hover, pressed, disabled). Instead of twelve separate components, you have one set with three variant properties.</p>
<h3>Naming</h3>
<p>Variant properties are named like <code>Type=Primary, Size=Medium, State=Hover</code>. Use clear, consistent names that match how developers name the same options in code. Values should be readable: "Disabled", not "dis".</p>
<h3>Variants or other properties?</h3>
<p>Use variants when the structure or styling differs between versions (a different colour or size). Use boolean properties for showing or hiding parts, and text properties for content. Mixing these keeps the number of variants manageable: a button with an optional icon does not need separate "with icon" variants.</p>
<h3>Interactive components</h3>
<p>Variants can be linked with interactions so prototypes respond to hover and click without wiring each screen (covered in the prototyping lesson).</p>`,
    why: `
<p>Variants make components easy to find and use: choose options from drop-downs rather than searching for the right component. They mirror how components are built in code, with props for type, size and state, which makes handoff clearer. Well-structured variants are the core of any design system.</p>`,
    example: `
<p>A design system has 24 separate button components with names such as "Button blue big hover". Designers keep picking the wrong one.</p>
<p>The team combines them into one set with Type (Primary, Secondary, Danger), Size (Small, Medium) and State (Default, Hover, Pressed, Disabled), plus a boolean for an icon. The names match the developers' React props. Designers now pick a button and choose options in the panel, and handoff conversations become shorter.</p>`,
    walkthrough: [
      { title: 'List the versions', body: 'Write down all types, sizes and states your component needs.' },
      { title: 'Build each version', body: 'Create each combination from your base component.' },
      { title: 'Combine as variants', body: 'Select them and combine into a component set.' },
      { title: 'Name properties', body: 'Set clear property names and values matching code.' },
      { title: 'Use booleans and text where possible', body: 'Avoid variants for things a boolean or text property can handle.' },
      { title: 'Test the set', body: 'Place instances and switch between options.' },
    ],
    mistakes: [
      { mistake: 'Creating variants for every combination of optional parts.', fix: 'Use boolean properties for optional parts.' },
      { mistake: 'Unclear or inconsistent names.', fix: 'Agree names with developers and use them everywhere.' },
      { mistake: 'Missing states such as disabled or focus.', fix: 'List all states before building.' },
    ],
    quiz: [
      { q: 'What is a component set?', options: ['A folder of images', 'A group of related variants', 'A page'], answer: 1, explain: 'It groups versions under shared properties.' },
      { q: 'A button has an optional icon. Best approach?', options: ['Separate variants with and without icon', 'A boolean property', 'Two components'], answer: 1, explain: 'Booleans keep variant count low.' },
      { q: 'Why match variant names to code?', options: ['It looks technical', 'It makes handoff clearer and reduces mistakes', 'Figma requires it'], answer: 1, explain: 'Shared language reduces translation errors.' },
    ],
    exercise: {
      title: 'Button component set',
      minutes: 60,
      brief: '<p>Build a complete button component set.</p>',
      steps: [
        'Define types, sizes and states.',
        'Build and combine them into variants.',
        'Add boolean and text properties.',
        'Document the properties on a small reference frame.',
      ],
      deliverable: 'A button component set with documentation.',
    },
    checklist: [
      'All types, sizes and states exist.',
      'Names are clear and match code conventions.',
      'Optional parts use booleans.',
      'I documented the set.',
    ],
    summary: [
      'Variants group versions of a component under properties.',
      'Name properties clearly and consistently.',
      'Use booleans and text properties to reduce variants.',
      'Variants mirror component props in code.',
    ],
    reading: [
      { title: 'Figma Learn: help centre', url: 'https://help.figma.com/hc/en-us', source: 'Figma' },
      { title: 'Buttons', url: 'https://m3.material.io/components/buttons/overview', source: 'Material Design 3', note: 'See how a real system defines button types and states.' },
    ],
  },

  'variables-tokens': {
    objectives: [
      'Explain variables and how they relate to design tokens.',
      'Create colour, number and string variables in collections.',
      'Use modes to switch between themes such as light and dark.',
    ],
    explanation: `
<p><strong>Variables</strong> store reusable values: colours, numbers (spacing, radius), strings (text) and booleans. Instead of typing #1D4ED8 into every button, you apply a variable such as <code>color/primary</code>. Change the variable and every use updates.</p>
<h3>Design tokens</h3>
<p><strong>Design tokens</strong> are the same idea in a form shared with code: named values for design decisions. Variables in a design tool can be exported or synced as tokens, so designers and developers use the same names and values.</p>
<h3>Primitive and semantic variables</h3>
<p>Many teams use two layers. <strong>Primitive</strong> variables hold raw values (<code>blue/600 = #1D4ED8</code>). <strong>Semantic</strong> variables describe purpose and point to primitives (<code>color/action/primary = blue/600</code>). Components use semantic variables. When the brand changes, you change what the semantic variable points to.</p>
<h3>Collections and modes</h3>
<p>Variables live in <strong>collections</strong>. A collection can have <strong>modes</strong>: for example Light and Dark, or Compact and Comfortable. Each mode gives the same variable a different value, so switching a frame's mode switches the whole theme.</p>`,
    why: `
<p>Variables make large-scale changes safe and fast, support themes such as dark mode without duplicating screens, and create a shared vocabulary with developers. They are a core skill for working on any modern design system.</p>`,
    example: `
<p>A banking app needs a dark theme. Without variables, every screen would have to be duplicated and recoloured.</p>
<p>The team creates primitive colour variables and a semantic collection with Light and Dark modes: <code>surface/default</code>, <code>text/primary</code>, <code>action/primary</code> and so on. Components are updated to use the semantic variables. Switching any screen frame to Dark mode now shows the dark theme instantly, and developers implement it from the same token names.</p>`,
    walkthrough: [
      { title: 'Create primitives', body: 'Make a collection of raw colour values, such as a blue and grey scale.' },
      { title: 'Create semantics', body: 'Make a collection with names describing purpose, pointing to primitives.' },
      { title: 'Add modes', body: 'Add Light and Dark modes to the semantic collection.' },
      { title: 'Add number variables', body: 'Create spacing and radius variables from your scales.' },
      { title: 'Apply to components', body: 'Use semantic variables in fills, strokes, padding and gaps.' },
      { title: 'Switch modes', body: 'Change a frame\'s mode and check everything updates.' },
    ],
    mistakes: [
      { mistake: 'Applying primitive colours directly in components.', fix: 'Use semantic variables so themes can change.' },
      { mistake: 'Names describing appearance ("blue-button").', fix: 'Describe purpose ("action/primary").' },
      { mistake: 'Too many variables.', fix: 'Start small and add only when needed.' },
    ],
    quiz: [
      { q: 'What is a semantic variable?', options: ['A raw hex value', 'A variable named for its purpose, pointing to a raw value', 'A text style'], answer: 1, explain: 'Semantic variables describe meaning.' },
      { q: 'What do modes allow?', options: ['Different values for the same variable, such as light and dark themes', 'Faster files', 'Animations'], answer: 0, explain: 'Modes switch values for a whole collection.' },
      { q: 'How do variables relate to design tokens?', options: ['They are unrelated', 'Variables can be shared with code as tokens using the same names', 'Tokens are only for fonts'], answer: 1, explain: 'Both are named design decisions.' },
    ],
    exercise: {
      title: 'Themeable card',
      minutes: 60,
      brief: '<p>Create variables and make a card that switches between light and dark themes.</p>',
      steps: [
        'Create primitive colours.',
        'Create semantic colours with Light and Dark modes.',
        'Build a card using only semantic variables.',
        'Switch modes and fix any contrast problems.',
      ],
      deliverable: 'Variable collections and a card shown in both modes.',
    },
    checklist: [
      'I have primitive and semantic layers.',
      'Names describe purpose.',
      'Components use semantic variables.',
      'Both modes have accessible contrast.',
    ],
    summary: [
      'Variables store reusable values.',
      'Design tokens share the same idea with code.',
      'Use primitive and semantic layers.',
      'Modes switch themes without duplicating screens.',
    ],
    reading: [
      { title: 'Design tokens', url: 'https://m3.material.io/foundations/design-tokens/overview', source: 'Material Design 3' },
      { title: 'Design Tokens Community Group', url: 'https://www.designtokens.org/', source: 'W3C Community Group' },
    ],
  },

  'styles': {
    objectives: [
      'Create colour, text, effect and grid styles.',
      'Decide when to use styles and when to use variables.',
      'Build a type scale as text styles.',
    ],
    explanation: `
<p><strong>Styles</strong> save sets of visual properties for reuse: colour fills, text settings, effects such as shadows, and layout grids. Like components, changing a style updates everything that uses it.</p>
<h3>Text styles</h3>
<p>A text style stores font family, weight, size, line height and letter spacing. Build your type scale from Stage 1 as text styles: Display, Heading 1, Heading 2, Body, Body small, Caption, Label. Name them by role, not by size ("Heading 2", not "24 bold").</p>
<h3>Colour and effect styles</h3>
<p>Colour styles store fills, including gradients and images. Effect styles store shadows and blurs, useful for consistent elevation levels. Grid styles store layout grids for each breakpoint.</p>
<h3>Styles and variables</h3>
<p>Variables are best for single values that need modes (colours, spacing). Styles are best for combinations of properties (a text style with several settings, a shadow with several layers) and for things variables cannot hold, such as gradients. Many teams use colour variables plus text and effect styles. Text styles can also reference variables for their values.</p>`,
    why: `
<p>Styles keep typography and visual effects consistent across a whole product. They make updates fast, communicate the type scale to developers and help other designers pick the right option instead of guessing. Without them, files quickly fill with near-duplicate sizes and shadows.</p>`,
    example: `
<p>An audit of a startup's Figma file finds 31 different text size and weight combinations. The designer defines eight text styles from a type scale and three shadow styles for elevation.</p>
<p>Using Figma's selection tools, they find every text layer and apply the nearest style. The file now uses eight text styles consistently. Developers map them to eight CSS classes, and the product looks more polished without any new design work.</p>`,
    walkthrough: [
      { title: 'Define a type scale', body: 'Choose sizes, weights and line heights for each role.' },
      { title: 'Create text styles', body: 'Make a text style for each role, named by purpose.' },
      { title: 'Create effect styles', body: 'Define two or three elevation shadows.' },
      { title: 'Create grid styles', body: 'Save layout grids for phone, tablet and desktop.' },
      { title: 'Apply everywhere', body: 'Replace loose values with styles.' },
      { title: 'Document', body: 'Make a reference page showing each style.' },
    ],
    mistakes: [
      { mistake: 'Naming styles by appearance.', fix: 'Name by role so they survive design changes.' },
      { mistake: 'Too many text styles.', fix: 'Keep the scale small and purposeful.' },
      { mistake: 'Leaving unstyled text in files.', fix: 'Audit and apply styles regularly.' },
    ],
    quiz: [
      { q: 'Which is a better text style name?', options: ['18px semibold', 'Heading 3', 'Big text'], answer: 1, explain: 'Role-based names survive value changes.' },
      { q: 'What can styles hold that single variables cannot?', options: ['A single colour', 'Combinations such as full text settings or multi-layer shadows', 'Numbers'], answer: 1, explain: 'Styles combine several properties.' },
      { q: 'Why use effect styles for shadows?', options: ['Consistent elevation across the product', 'Shadows load faster', 'It is required'], answer: 0, explain: 'Shared styles keep effects consistent.' },
    ],
    exercise: {
      title: 'Style library',
      minutes: 45,
      brief: '<p>Create a small style library for a personal project.</p>',
      steps: [
        'Create six to eight text styles from a type scale.',
        'Create two shadow styles.',
        'Create grid styles for two breakpoints.',
        'Build a reference page showing every style.',
      ],
      deliverable: 'A style library with a reference page.',
    },
    checklist: [
      'Styles are named by role.',
      'The type scale is small and consistent.',
      'Shadows and grids are styles.',
      'I documented them.',
    ],
    summary: [
      'Styles save sets of visual properties for reuse.',
      'Build your type scale as text styles named by role.',
      'Use variables for single values with modes, styles for combinations.',
      'Styles keep products consistent and handoff clear.',
    ],
    reading: [
      { title: 'Typography', url: 'https://m3.material.io/styles/typography/overview', source: 'Material Design 3' },
      { title: 'Elevation', url: 'https://m3.material.io/styles/elevation/overview', source: 'Material Design 3' },
    ],
  },
};
