// @ts-check
/* =====================================================================
   Video library for the published lessons.

   One video per published lesson, chosen from established design channels
   (Nielsen Norman Group, Figma, Interaction Design Foundation, Flux
   Academy, ArtClass, Sarah Renae Clark, The Accessibility Guy, Day of
   Figma, Product HQ and others). Every entry was checked against the
   YouTube oEmbed endpoint, so the id, the title and the channel name
   below match what YouTube actually serves.

   `seconds` is the real runtime, used for the lesson list and the
   "video + reading" time estimate. `note` says what the learner gets
   from the video and how it fits the lesson.
   ===================================================================== */

/** @typedef {import('../types').Video} Video */

/** @type {Record<string, Video>} */
export const videos = {
  'what-is-ui-and-ux': {
    id: 'TgqeRTwZvIo',
    title: 'What is UI vs. UX Design? A Practical Example in Under 6 Minutes',
    channel: 'DesignCourse',
    seconds: 345,
    note: 'A short, concrete walk through the same product treated as an interface problem and as an experience problem. Watch it before reading the lesson: it gives you the vocabulary the lesson then sharpens.',
  },
  'design-disciplines': {
    id: 'U7rS_2ch_Ps',
    title: 'Interaction Design Basics: 5 Principles of Interaction Design',
    channel: 'Interaction Design Foundation',
    seconds: 494,
    note: 'The clearest introduction to interaction design as its own discipline, and how it differs from UI, UX and product design. Start here if the boundaries between those words still feel fuzzy.',
  },
  'what-product-designers-do': {
    id: 'p715lG7YMIw',
    title: 'What do Product Designers do? (Digital / UX)',
    channel: 'Finlay Craig',
    seconds: 303,
    note: 'An honest look at the day-to-day work: research, sketching, critique, handoff and the parts of the job nobody puts in a job advert. Use it to picture the role before you commit to it.',
  },
  'the-design-process': {
    id: 'CrZ1PSIJOFw',
    title: "Design Thinking's Double Diamond — Explained With a Real UX Example",
    channel: 'Day of Figma',
    seconds: 1151,
    note: 'The double diamond, worked through on a real product rather than drawn as a diagram. Longer than most explainers, and worth it: it shows the loops, not just the phases.',
  },
  'design-thinking': {
    id: 'ghQbkggkeK4',
    title: 'Design Thinking Activities',
    channel: 'Nielsen Norman Group',
    seconds: 323,
    note: 'From the team that has studied this for thirty years. It focuses on the activities you can actually run, and quietly shows where the method is weaker than its reputation.',
  },
  'designer-myths': {
    id: '_cfiVFLMDdE',
    title: '7 common myths in UX and Product Design',
    channel: 'Design for Change with Jagadeesh',
    seconds: 345,
    note: 'Seven beliefs that make people either avoid the field or quit it: that you need to draw well, that research is the whole job, that a degree is required. Watch before you start, not after you give up.',
  },
  'team-roles': {
    id: '35WzgKFXDRA',
    title: 'How Do Product Managers and UX Designers Work Together?',
    channel: 'Product HQ',
    seconds: 381,
    note: 'The seams between design, product and engineering, including where each role pushes back. Useful before your first team project, when you need to know what a product manager is really deciding.',
  },
  'learning-plan-and-files': {
    id: 'CFHJLt03CYE',
    title: 'Lesson 1: File management and creation',
    channel: 'Figma',
    seconds: 729,
    note: 'Figma\'s own walkthrough of how to structure files so they stay findable. The same habits transfer to any tool, and they save hours every time you come back to an old project.',
  },
  'visual-hierarchy': {
    id: 'kg76CMOO__Y',
    title: 'Understanding Hierarchy in Design',
    channel: 'Flux Academy',
    seconds: 571,
    note: 'How size, weight, colour, space and position combine to tell the eye where to look first. The lesson adds the rules; this shows them applied to real layouts.',
  },
  'contrast-alignment-proximity': {
    id: 'YUMdv4yFlQU',
    title: 'Visual Design Principles in Action',
    channel: 'Nielsen Norman Group',
    seconds: 360,
    note: 'The five visual design principles — scale, hierarchy, balance, contrast and Gestalt — used to critique a real interface. This is the closest thing to a companion video for this lesson.',
  },
  'gestalt-principles': {
    id: 'OHQqoasuiWI',
    title: 'Gestalt Principles in Visual Design',
    channel: 'Interaction Design Foundation',
    seconds: 128,
    note: 'Two minutes on proximity, similarity, closure, continuity and figure-ground, with examples. Short enough to rewatch and still get something from it each time.',
  },
  'typography': {
    id: 'yz-rkP5_w6Y',
    title: 'Typography Explained: 7 Rules Every Designer Should Know',
    channel: 'ArtClass',
    seconds: 418,
    note: 'Hierarchy, pairing, spacing and the rules that make text readable. A good companion to the lesson on type scales, because it covers the judgement calls a scale cannot make for you.',
  },
  'colour': {
    id: 'YeI6Wqn4I78',
    title: 'COLOR THEORY BASICS: Use the Color Wheel & Color Harmonies to Choose Colors that Work Well Together',
    channel: 'Sarah Renae Clark',
    seconds: 418,
    note: 'The colour wheel, harmonies and how to build a palette that holds together. Watch it before choosing colours for the exercise: it is much easier to fix a bad palette than to design around one.',
  },
  'spacing-and-grids': {
    id: 'Vl1VYQXElus',
    title: 'Grids 101',
    channel: 'Nielsen Norman Group',
    seconds: 225,
    note: 'Columns, gutters and margins, and why a grid makes a layout feel deliberate. The lesson covers the spacing system; this covers the structure that system sits on.',
  },
  'composition-responsive': {
    id: 'MlsV3hu84as',
    title: 'Complete Layout Guide',
    channel: 'Flux Academy',
    seconds: 719,
    note: 'Layout as a whole: hierarchy, grids, spacing, alignment and balance, then how layouts adapt to different screen sizes. Long, but it is the connective tissue between this stage and the responsive work later.',
  },
  'images-icons-consistency': {
    id: 'XqQ0ROz73bo',
    title: 'How to create consistent icons?',
    channel: 'Design with Mitch',
    seconds: 458,
    note: 'Icon grids, stroke weights and optical corrections, and why a set of icons from different sources never quite looks like a set. Directly applicable to the consistency exercise.',
  },
  'visual-accessibility': {
    id: 'D8TPUqbhRmA',
    title: 'How to test for Color Contrast | TPGI & WebAIM | WCAG',
    channel: 'The Accessibility Guy',
    seconds: 405,
    note: 'The actual testing tools — WebAIM and TPGI — used on real examples, including how to check the pairs that matter. Practical, quick, and the fastest way to stop guessing about contrast.',
  },
  'critique-an-interface': {
    id: 'CBm9gdwshf8',
    title: 'UX Design Critiques: 3 Tips for Effective Feedback',
    channel: 'Nielsen Norman Group',
    seconds: 219,
    note: 'How to run a critique that produces decisions instead of opinions. Watch it before your first critique: it changes what you write down.',
  },
};

export default videos;
