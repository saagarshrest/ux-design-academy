/* =====================================================================
   UI/UX Design Academy: content model
   Every content file in learn-src/content is plain JavaScript with
   `// @ts-check` and JSDoc annotations pointing at these types, so editors
   (and `npx -p typescript tsc -p learn-src`) check the content without a
   build toolchain. build.mjs also validates the data at build time.
   Rich text fields hold trusted HTML written by the site author.
   ===================================================================== */

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
/** Authored lessons have their own page. Planned lessons are listed but never linked or counted as done. */
export type LessonStatus = 'published' | 'planned';

export interface Reading {
  title: string;
  url: string;
  /** Publisher, e.g. "Nielsen Norman Group" or "W3C WAI". */
  source: string;
  note?: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Index into options. */
  answer: number;
  explain: string;
}

export interface Step { title: string; body: string }
export interface Mistake { mistake: string; fix: string }

export interface Exercise {
  title: string;
  minutes: number;
  /** HTML. */
  brief: string;
  steps: string[];
  deliverable: string;
}

export interface Assignment {
  title: string;
  /** HTML. */
  brief: string;
  deliverables: string[];
}

export interface Figure {
  /** HTML or inline SVG. Decorative SVGs need aria-hidden; informative ones need role="img" and a label. */
  html: string;
  caption: string;
}

/** A fully written lesson. Every field maps to one part of the lesson template. */
export interface LessonBody {
  objectives: string[];
  /** HTML: the plain-language explanation. */
  explanation: string;
  /** HTML. */
  why: string;
  /** HTML: a realistic worked example. */
  example: string;
  figure?: Figure;
  walkthrough: Step[];
  mistakes: Mistake[];
  quiz: QuizQuestion[];
  exercise: Exercise;
  assignment?: Assignment;
  /** Self-assessment checklist, persisted per lesson. */
  checklist: string[];
  summary: string[];
  reading: Reading[];
}

export interface LessonMeta {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  level?: Level;
  /** Lesson slugs that should be read first. */
  prerequisites?: string[];
  /** Course slugs to finish first (used by the optional advanced paths). */
  requiresCourses?: string[];
}

export interface Lesson extends LessonMeta {
  status: LessonStatus;
  body?: LessonBody;
}

/** One curriculum stage is one course. */
export interface Course {
  slug: string;
  stage: number;
  title: string;
  short: string;
  level: Level;
  /** Optional advanced stages are excluded from the core path. */
  optional: boolean;
  /** HTML: the stage overview. */
  overview: string;
  outcomes: string[];
  /** Course slugs to finish first. */
  prerequisites: string[];
  lessons: Lesson[];
  /** Project slugs that practise this stage. */
  projects?: string[];
}

export interface PracticeExercise {
  slug: string;
  title: string;
  topic: string;
  level: Level;
  minutes: number;
  summary: string;
  /** HTML. */
  context: string;
  prompt: string;
  /** Optional illustrative "before" artefact (HTML). */
  artefact?: Figure;
  instructions: string[];
  deliverables: string[];
  checklist: string[];
  criteria: string[];
  hints: string[];
  /** HTML: one illustrative solution, never the only right answer. */
  solution: string;
  relatedLessons?: string[];
}

export interface Milestone { id: string; title: string; tasks: string[] }
export interface RubricRow { criterion: string; levels: [string, string, string, string] }

export interface Project {
  slug: string;
  number: number;
  title: string;
  short: string;
  level: Level;
  weeks: string;
  /** Course slugs this project assumes. */
  prerequisites: string[];
  background: string;
  problem: string;
  users: string[];
  assumptions: string[];
  businessGoals: string[];
  userNeeds: string[];
  scope: string[];
  constraints: string[];
  researchPlan: string[];
  competitorWorksheet: { columns: string[]; competitors: string[] };
  interviewQuestions?: string[];
  synthesis: string[];
  problemStatement: string;
  metrics: string[];
  iaAndFlow: string[];
  wireframing: string[];
  uiRequirements: string[];
  prototype: string[];
  testingPlan: string[];
  iteration: string[];
  accessibility: string[];
  deliverables: string[];
  caseStudyOutline: string[];
  rubric: RubricRow[];
  extensions: string[];
  /** HTML: hints and a worked example, shown behind a disclosure. */
  workedExample: string;
  milestones: Milestone[];
}

export type GlossaryGroup =
  | 'Research' | 'Interaction' | 'Visual design' | 'Prototyping'
  | 'Accessibility' | 'Product thinking' | 'Design systems';

export interface GlossaryTerm {
  term: string;
  group: GlossaryGroup;
  definition: string;
  example: string;
  related: string[];
}

export interface Resource {
  title: string;
  url: string;
  category: string;
  source: string;
  /** "Official", "Free", "Paid", "Free and paid", or omitted when not verified. */
  cost?: string;
  /** Third-party content the academy does not control. Everything external is third-party; kept explicit for clarity. */
  note: string;
}

export interface Template {
  slug: string;
  title: string;
  summary: string;
  usedIn: string[];
  /** Markdown source: copied or downloaded as-is, rendered for print. */
  markdown: string;
}

export interface LearningPath {
  slug: string;
  title: string;
  who: string;
  description: string;
  steps: { label: string; href: string; why: string }[];
}
