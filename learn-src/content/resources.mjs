// @ts-check
/* External resources. Every URL was checked to load before publishing (October 2026).
   "cost" is set only where it is clear from the source itself: public-sector and W3C material
   is free to read; tools are marked "Open source" only when they publish their source.
   Everything here is third-party content outside the academy's control. */

/** @param {string} category @returns {(title: string, url: string, source: string, note: string, cost?: string) => import('../types').Resource} */
const c = (category) => (title, url, source, note, cost) => ({ title, url, source, note, category, ...(cost ? { cost } : {}) });

const FIGMA = c('Figma and design tools');
const RESEARCH = c('UX research methods');
const A11Y = c('Accessibility');
const PATTERNS = c('UI patterns and design systems');
const TYPE = c('Typography and colour');
const TESTING = c('Usability testing');
const CAREER = c('Portfolio and career');
const BOOKS = c('Books and reference');
const TOOLS = c('Free and open tools');
const PROCESS = c('Process and product thinking');

/** @type {import('../types').Resource[]} */
export default [
  FIGMA('Figma Help Center', 'https://help.figma.com/hc/en-us', 'Figma', 'Official documentation for every Figma feature. The most reliable place to check current menu names and behaviour.'),
  FIGMA('Get started with Figma', 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started', 'Figma', 'Official beginner guides to the interface, files and basic tools.'),
  FIGMA('Guide to auto layout', 'https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma', 'Figma', 'Official explanation of auto layout settings and resizing.'),
  FIGMA('Guide to components in Figma', 'https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma', 'Figma', 'Components, instances, properties and variants.'),
  FIGMA('Guide to variables in Figma', 'https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma', 'Figma', 'Variables for colours, numbers and modes, the basis of design tokens in Figma.'),
  FIGMA('Guide to prototyping in Figma', 'https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma', 'Figma', 'Connections, interactions, overlays and smart animate.'),
  FIGMA('Figma on YouTube', 'https://www.youtube.com/@Figma', 'Figma', 'Official video tutorials and talks. Interfaces change; check dates.'),
  FIGMA('Penpot', 'https://penpot.app/', 'Kaleidos', 'An open-source design and prototyping tool that runs in the browser and can be self-hosted.', 'Open source'),

  RESEARCH('UX Research Cheat Sheet', 'https://www.nngroup.com/articles/ux-research-cheat-sheet/', 'Nielsen Norman Group', 'Which research methods suit each stage of a project.'),
  RESEARCH('When to Use Which User-Experience Research Methods', 'https://www.nngroup.com/articles/which-ux-research-methods/', 'Nielsen Norman Group', 'A framework for choosing methods by the kind of question you have.'),
  RESEARCH('User Interviews 101', 'https://www.nngroup.com/articles/interviewing-users/', 'Nielsen Norman Group', 'Planning and running interviews, with common mistakes.'),
  RESEARCH('Affinity Diagramming', 'https://www.nngroup.com/articles/affinity-diagram/', 'Nielsen Norman Group', 'A step-by-step guide to clustering research findings.'),
  RESEARCH('Journey Mapping 101', 'https://www.nngroup.com/articles/journey-mapping-101/', 'Nielsen Norman Group', 'What journey maps are and how to make useful ones.'),
  RESEARCH('Empathy Mapping', 'https://www.nngroup.com/articles/empathy-mapping/', 'Nielsen Norman Group', 'Says, thinks, does and feels, and how to base each on research.'),
  RESEARCH('Personas: Study Guide', 'https://www.nngroup.com/articles/persona/', 'Nielsen Norman Group', 'Links to articles on creating and using research-based personas.'),
  RESEARCH('Card Sorting: Uncover Users\' Mental Models', 'https://www.nngroup.com/articles/card-sorting-definition/', 'Nielsen Norman Group', 'Open, closed and hybrid card sorts and how to analyse them.'),
  RESEARCH('Tree Testing', 'https://www.nngroup.com/articles/tree-testing/', 'Nielsen Norman Group', 'Testing navigation structure before visual design.'),
  RESEARCH('User research in the GOV.UK Service Manual', 'https://www.gov.uk/service-manual/user-research', 'GOV.UK Service Manual', 'Practical, public guidance on planning research, recruiting and analysing findings, including with people with access needs.', 'Free'),

  A11Y('Introduction to Web Accessibility', 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', 'W3C WAI', 'What accessibility is, who it affects and why it matters.', 'Free'),
  A11Y('WCAG 2 Overview', 'https://www.w3.org/WAI/standards-guidelines/wcag/', 'W3C WAI', 'The official overview of the Web Content Accessibility Guidelines and their versions.', 'Free'),
  A11Y('How to Meet WCAG 2.2 (Quick Reference)', 'https://www.w3.org/WAI/WCAG22/quickref/', 'W3C WAI', 'Every success criterion with techniques and filters by level.', 'Free'),
  A11Y('Designing for Web Accessibility', 'https://www.w3.org/WAI/tips/designing/', 'W3C WAI', 'Short, practical tips written for designers.', 'Free'),
  A11Y('How People with Disabilities Use the Web', 'https://www.w3.org/WAI/people-use-web/', 'W3C WAI', 'Stories and descriptions of assistive technologies and adaptive strategies.', 'Free'),
  A11Y('Easy Checks: A First Review of Web Accessibility', 'https://www.w3.org/WAI/test-evaluate/preliminary/', 'W3C WAI', 'Simple manual checks anyone can do in a browser.', 'Free'),
  A11Y('ARIA Authoring Practices Guide', 'https://www.w3.org/WAI/ARIA/apg/', 'W3C WAI', 'Accessible patterns for menus, tabs, dialogs and other widgets, with keyboard expectations.', 'Free'),
  A11Y('Web Accessibility Evaluation Tools List', 'https://www.w3.org/WAI/test-evaluate/tools/list/', 'W3C WAI', 'A searchable list of checkers and testing tools.', 'Free'),
  A11Y('WebAIM Contrast Checker', 'https://webaim.org/resources/contrastchecker/', 'WebAIM', 'Check text and background colour pairs against WCAG.'),
  A11Y('Alternative Text', 'https://webaim.org/techniques/alttext/', 'WebAIM', 'How to write alt text for different kinds of images.'),
  A11Y('The WebAIM Million', 'https://webaim.org/projects/million/', 'WebAIM', 'An annual automated analysis of the top million home pages, showing the most common detectable failures.'),
  A11Y('NVDA screen reader', 'https://www.nvaccess.org/download/', 'NV Access', 'A widely used screen reader for Windows, useful for testing your own work.', 'Open source'),
  A11Y('Accessibility Insights', 'https://accessibilityinsights.io/', 'Microsoft', 'Browser and desktop tools for automated checks and guided manual assessments.', 'Open source'),

  PATTERNS('GOV.UK Design System', 'https://design-system.service.gov.uk/', 'Government Digital Service', 'Components and patterns tested with a very wide public audience, with research notes explaining decisions.', 'Free'),
  PATTERNS('GOV.UK patterns', 'https://design-system.service.gov.uk/patterns/', 'Government Digital Service', 'Reusable solutions for common tasks such as asking for addresses, dates and names.', 'Free'),
  PATTERNS('U.S. Web Design System', 'https://designsystem.digital.gov/', 'U.S. General Services Administration', 'An accessible public design system with components and guidance.', 'Free'),
  PATTERNS('Material Design 3', 'https://m3.material.io/', 'Google', 'Google\'s design system, with detailed component guidance for Android and the web.'),
  PATTERNS('Human Interface Guidelines', 'https://developer.apple.com/design/human-interface-guidelines/', 'Apple', 'Apple\'s platform conventions for iOS, iPadOS, macOS, watchOS and visionOS.'),
  PATTERNS('Fluent 2', 'https://fluent2.microsoft.design/', 'Microsoft', 'Microsoft\'s design system across platforms.'),
  PATTERNS('Carbon Design System', 'https://carbondesignsystem.com/', 'IBM', 'An open-source design system strong on data-dense enterprise patterns.', 'Open source'),
  PATTERNS('Atlassian Design System', 'https://atlassian.design/', 'Atlassian', 'Foundations, components and content guidance for collaboration software.'),
  PATTERNS('Design Systems 101', 'https://www.nngroup.com/articles/design-systems-101/', 'Nielsen Norman Group', 'What a design system is and what it contains.'),
  PATTERNS('The Component Gallery', 'https://component.gallery/', 'Iain Bean', 'Compare how dozens of public design systems name and design the same component.'),
  PATTERNS('Design Systems Repo', 'https://designsystemsrepo.com/', 'Design Systems Repo', 'A directory of public design systems, articles and tools.'),

  TYPE('Practical Typography', 'https://practicaltypography.com/', 'Matthew Butterick', 'A readable, opinionated online book about typography rules.'),
  TYPE('Google Fonts Knowledge', 'https://fonts.google.com/knowledge', 'Google Fonts', 'Articles on choosing, pairing and using type on screens.'),
  TYPE('Understanding SC 1.4.3: Contrast (Minimum)', 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', 'W3C WAI', 'The reasoning and exceptions behind text contrast requirements.', 'Free'),
  TYPE('ColorBrewer', 'https://colorbrewer2.org/', 'Cynthia Brewer, Mark Harrower and Penn State', 'Tested colour schemes for maps and charts, including colour-blind safe options.'),
  TYPE('Datawrapper Academy', 'https://www.datawrapper.de/academy', 'Datawrapper', 'Guides on choosing charts and colours for data visualisation.'),

  TESTING('Usability Testing 101', 'https://www.nngroup.com/articles/usability-testing-101/', 'Nielsen Norman Group', 'What usability testing is and the basic steps.'),
  TESTING('Why You Only Need to Test with 5 Users', 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/', 'Nielsen Norman Group', 'The reasoning behind small, iterative tests and its limits.'),
  TESTING('10 Usability Heuristics for User Interface Design', 'https://www.nngroup.com/articles/ten-usability-heuristics/', 'Nielsen Norman Group', 'The ten heuristics with examples.'),
  TESTING('How to Conduct a Heuristic Evaluation', 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/', 'Nielsen Norman Group', 'Running an expert review and combining findings.'),
  TESTING('Remote Usability Tests: Moderated and Unmoderated', 'https://www.nngroup.com/articles/remote-usability-tests/', 'Nielsen Norman Group', 'Trade-offs between remote formats.'),
  TESTING('Using moderated usability testing', 'https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing', 'GOV.UK Service Manual', 'Planning, running and analysing moderated sessions.', 'Free'),
  TESTING('Error-Message Guidelines', 'https://www.nngroup.com/articles/error-message-guidelines/', 'Nielsen Norman Group', 'How to write and display error messages people can act on.'),

  CAREER('UX Design Portfolios', 'https://www.nngroup.com/articles/ux-design-portfolios/', 'Nielsen Norman Group', 'What hiring managers look for in portfolios and case studies.'),
  CAREER('Digital, data and technology roles and skills', 'https://understand-digital-data-roles-skills.service.gov.uk/', 'UK Government', 'Detailed public descriptions of design roles and the skills expected at each level, useful for planning your growth.', 'Free'),
  CAREER('GOV.UK Design Notes', 'https://designnotes.blog.gov.uk/', 'Government Digital Service', 'Designers writing about real projects, decisions and mistakes. Good models for case study writing.', 'Free'),

  BOOKS('Don\'t Make Me Think, Revisited', 'https://web.archive.org/web/2024/https://sensible.com/dont-make-me-think/', 'Steve Krug', 'A short, practical classic on web usability. A book; check the publisher page for formats. (The author\'s site is offline; this is an archived copy.)'),
  BOOKS('Rocket Surgery Made Easy', 'https://web.archive.org/web/2024/https://sensible.com/rocket-surgery-made-easy/', 'Steve Krug', 'A do-it-yourself guide to running simple usability tests. (The author\'s site is offline; this is an archived copy.)'),
  BOOKS('The Design of Everyday Things', 'https://jnd.org/books/', 'Don Norman', 'The origin of many core interaction design ideas, including affordances, signifiers and feedback.'),
  BOOKS('Refactoring UI', 'https://refactoringui.com/', 'Adam Wathan and Steve Schoger', 'Practical visual design tactics for interfaces, written for developers and designers.'),
  BOOKS('Laws of UX', 'https://lawsofux.com/', 'Jon Yablonski', 'Short summaries of psychology principles used in interface design.'),

  TOOLS('Excalidraw', 'https://excalidraw.com/', 'Excalidraw', 'A whiteboard for quick sketches, flows and diagrams in the browser.', 'Open source'),
  TOOLS('tldraw', 'https://www.tldraw.com/', 'tldraw', 'A fast browser whiteboard for sketching flows and wireframes.'),
  TOOLS('Figma Community', 'https://www.figma.com/community', 'Figma', 'Files, templates and plugins shared by the community. Quality varies; check licences before reusing.'),
  TOOLS('Optimal Workshop learning hub', 'https://www.optimalworkshop.com/learn-hub', 'Optimal Workshop', 'Guides on card sorting, tree testing and other IA research, from a research tool vendor.'),

  PROCESS('The Double Diamond', 'https://www.designcouncil.org.uk/resources/the-double-diamond/', 'Design Council (UK)', 'The origin and current version of the Double Diamond process model.'),
  PROCESS('GOV.UK Service Manual', 'https://www.gov.uk/service-manual', 'GOV.UK', 'How to plan, build and run digital services in multidisciplinary teams.', 'Free'),
  PROCESS('How the discovery phase works', 'https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works', 'GOV.UK Service Manual', 'What discovery is for and what it should produce.', 'Free'),
  PROCESS('Design Thinking 101', 'https://www.nngroup.com/articles/design-thinking/', 'Nielsen Norman Group', 'An overview of the design thinking framework.'),
  PROCESS('Deceptive Patterns: types', 'https://deceptive.design/types/', 'Harry Brignull and contributors', 'A catalogue of manipulative design patterns, with examples and legal context.'),
  PROCESS('d.school tools', 'https://dschool.stanford.edu/innovate/tools', 'Stanford d.school', 'Free activities and guides for design thinking workshops.'),
];
