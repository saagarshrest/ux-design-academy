// @ts-check
/** @type {import('../types').LearningPath[]} */
export default [
  {
    slug: 'beginner',
    title: 'Beginner path',
    who: 'New to design',
    description: 'Learn the fundamentals from scratch in a sensible order, with short exercises after each idea. Expect around 6 to 8 hours a week for three to four months.',
    steps: [
      { label: 'Stage 0: Orientation and design foundations', href: '/learn/courses/orientation/', why: 'A realistic picture of the field, the process and a learning plan before anything else.' },
      { label: 'Stage 1: Visual design fundamentals', href: '/learn/courses/visual-design/', why: 'Hierarchy, type, colour and layout make every later artefact easier to read and critique.' },
      { label: 'Practice: rebuild a visual hierarchy', href: '/learn/practice/rebuild-visual-hierarchy/', why: 'Your first hands-on test of the principles, small enough to finish in one sitting.' },
      { label: 'Stage 2: UX research and problem definition', href: '/learn/courses/ux-research/', why: 'Learning to find the right problem before designing a solution.' },
      { label: 'Stage 3: Information architecture', href: '/learn/courses/information-architecture/', why: 'Structure and navigation, so people can find things.' },
      { label: 'Stage 4: Wireframing and ideation', href: '/learn/courses/wireframing/', why: 'Explore ideas cheaply and design every state of a screen.' },
      { label: 'Stage 5: Figma and design tools', href: '/learn/courses/figma/', why: 'Once you know what to design, learn to build it efficiently in a professional tool.' },
    ],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio path',
    who: 'Aiming for a junior role',
    description: 'Complete the core curriculum in order and build the four guided projects as you go, ending with two or three case studies you can show. Plan for six to nine months at a steady pace.',
    steps: [
      { label: 'Stages 0 to 5: foundations, research, IA, wireframing and Figma', href: '/learn/roadmap/#stages', why: 'Every project assumes these skills.' },
      { label: 'Project 1: Improve a local service business website', href: '/learn/projects/local-service-website/', why: 'A contained, realistic first case study with real users nearby.' },
      { label: 'Stages 6 and 7: UI design systems, interaction and prototyping', href: '/learn/courses/ui-design-systems/', why: 'Polish, components and realistic prototypes.' },
      { label: 'Project 2: Design a mobile wellness app', href: '/learn/projects/wellness-mobile-app/', why: 'Shows mobile patterns, onboarding and ethical design.' },
      { label: 'Stages 8 and 9: usability testing and accessibility', href: '/learn/courses/usability-testing/', why: 'Evidence and inclusion: what separates a junior designer from a screen maker.' },
      { label: 'Project 3: Design a responsive e-commerce experience', href: '/learn/projects/responsive-ecommerce/', why: 'Testing-led iteration on a familiar, high-stakes flow.' },
      { label: 'Stage 10 and Project 4: product thinking and a SaaS dashboard', href: '/learn/projects/saas-dashboard/', why: 'Metrics, trade-offs and data-dense design.' },
      { label: 'Stage 11 and the career guide', href: '/learn/career/', why: 'Turn the projects into concise case studies, then prepare for interviews.' },
    ],
  },
  {
    slug: 'reference',
    title: 'Quick reference',
    who: 'Already working, or in a hurry',
    description: 'Skip the sequence and go straight to a concept, pattern, checklist or tool guide when a project needs it.',
    steps: [
      { label: 'Search the academy', href: '/learn/search/', why: 'Finds lessons, glossary terms, templates and external resources together.' },
      { label: 'Glossary', href: '/learn/glossary/', why: 'Plain definitions with examples for the words you will hear in meetings.' },
      { label: 'Templates', href: '/learn/resources/#templates', why: 'Research plans, test plans, audits and case study outlines, ready to copy.' },
      { label: 'Practice library', href: '/learn/practice/', why: 'Short, focused exercises when you want to sharpen one skill.' },
      { label: 'Resource library', href: '/learn/resources/#library', why: 'Official documentation and trusted references, sorted by topic.' },
    ],
  },
];
