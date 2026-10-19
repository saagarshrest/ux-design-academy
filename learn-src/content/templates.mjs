// @ts-check
/* Templates: Markdown source is the single source of truth. Pages render it,
   and learners can copy or download it unchanged. */

/** @type {import('../types').Template[]} */
export default [
  {
    slug: 'research-plan',
    title: 'Research plan',
    summary: 'Agree what you need to learn, from whom and how, before you start talking to anyone.',
    usedIn: ['Stage 2', 'All projects'],
    markdown: `# Research plan

**Project:**
**Researcher(s):**
**Date:**

## 1. Background
What do we already know? What prompted this research? Link to any data, support tickets or previous research.

## 2. Research goals
What decisions will this research inform? Keep it to two or three goals.

1.
2.
3.

## 3. Research questions
Questions we want answered (not the questions we will ask participants).

- What do [users] currently do when they [task]?
- What makes [task] slow, confusing or risky for them?
- What do they use instead, and why?

## 4. Assumptions to test
| Assumption | Risk if wrong (high / medium / low) | How we will test it |
|---|---|---|
| | | |
| | | |

## 5. Method
- [ ] Desk research and competitive review
- [ ] Interviews (moderated, about 30 to 45 minutes)
- [ ] Observation or contextual inquiry
- [ ] Survey
- [ ] Usability test of the current product
- [ ] Analytics or support ticket review

**Why this method fits our questions:**

## 6. Participants
- **Who:** describe behaviours and context, not just demographics.
- **How many:** for interviews, 5 to 8 per distinct group is a common starting point.
- **Screening criteria:**
- **Recruiting from:**
- **Incentive (if any):**

## 7. Ethics and consent
- [ ] Participants know the purpose, what we record and how we store it
- [ ] Written or recorded consent before any recording
- [ ] Participants can stop at any time without giving a reason
- [ ] Personal data stored securely and deleted by: (date)
- [ ] No vulnerable participants without appropriate safeguards and approval

## 8. Schedule
| Activity | Date | Owner |
|---|---|---|
| Recruit participants | | |
| Pilot session | | |
| Sessions | | |
| Synthesis | | |
| Share findings | | |

## 9. Outputs
How will findings be shared, and with whom?
`,
  },
  {
    slug: 'interview-guide',
    title: 'Interview guide',
    summary: 'A semi-structured script with neutral, open questions and prompts for following up.',
    usedIn: ['Stage 2', 'Projects 1 to 4'],
    markdown: `# Interview guide

**Project:**
**Session length:** 30 to 45 minutes
**Interviewer:**
**Note-taker:**

## Before the session
- [ ] Consent form ready and recording tested
- [ ] Questions printed or on a second screen
- [ ] Notes document ready, one per participant

## Introduction (about 3 minutes)
> Thank you for joining. I'm [name] and I'm learning about how people [topic]. There are no right or wrong answers; we are interested in your experience. We are not testing you. You can skip any question or stop at any time. Is it all right if I record the session so I can take accurate notes? The recording stays private and is deleted after the project.

## Warm-up (about 5 minutes)
1. Tell me a little about yourself and what a typical week looks like.
2. How does [topic] fit into your week?

## Recent experience (about 15 minutes)
Ask about real, recent events, not opinions about hypothetical futures.

3. Think about the last time you [did the task]. Can you walk me through what happened, from the beginning?
4. What were you trying to achieve?
5. What happened next?
6. What was the hardest or most annoying part?
7. What did you do about it?
8. What tools, apps, people or workarounds did you use?

## Deeper dive (about 10 minutes)
9. How do you decide [a key decision in the task]?
10. What would you lose if [current tool or method] disappeared tomorrow?
11. What have you tried that did not work?

## Wrap-up (about 3 minutes)
12. Is there anything about [topic] I should have asked but didn't?
13. Is there anyone else you think I should speak to?

> Thank you. This has been really helpful.

## Neutral follow-up prompts
- Tell me more about that.
- What happened next?
- Why was that important?
- What do you mean by "[their word]"?
- How did that make you feel?
- Can you show me?

## Avoid
- Leading questions: "Wouldn't it be easier if…?"
- Asking people to predict the future: "Would you use…?"
- Asking two questions at once.
- Explaining or defending your design.
`,
  },
  {
    slug: 'competitor-analysis',
    title: 'Competitor analysis matrix',
    summary: 'Compare how others solve the same problem, so you can learn patterns and spot gaps.',
    usedIn: ['Stage 2', 'Projects 1 to 4'],
    markdown: `# Competitor analysis matrix

**Project:**
**Task being compared:** (for example "book a cleaning appointment")
**Date reviewed:**

## Who to include
- 2 or 3 **direct** competitors (same service, same audience)
- 1 or 2 **indirect** competitors (different service, same need)
- 1 **inspiration** product from another industry that does the task well

## Matrix
| | Competitor A | Competitor B | Competitor C | Indirect D |
|---|---|---|---|---|
| Who it seems to be for | | | | |
| Main promise or value | | | | |
| Steps to complete the task | | | | |
| Information shown before committing (price, time, availability) | | | | |
| Trust signals (reviews, guarantees, credentials) | | | | |
| Mobile experience | | | | |
| Accessibility issues noticed | | | | |
| What works well | | | | |
| What is frustrating | | | | |

## Patterns
What do most competitors do the same way? This is often what users expect.

## Gaps and opportunities
What does nobody do well? Where could we be clearly better?

## Cautions
- Competitors are not evidence of what users need; they show what others decided.
- Note the date: products change.
`,
  },
  {
    slug: 'persona',
    title: 'Persona (evidence-based)',
    summary: 'A one-page summary of a user group, built from research, with the evidence cited.',
    usedIn: ['Stage 2'],
    markdown: `# Persona

> Personas must come from research. Every statement below should link to evidence (interview numbers, survey results, analytics). If you have no evidence, call it a proto-persona and treat it as a set of assumptions to test.

**Name and short label:** (for example "Busy parent booking after-school activities")
**Based on:** (for example "7 interviews, March 2026; support tickets Jan to Mar")

## Context
Where, when and how do they encounter the problem?

## Goals
What are they trying to achieve? (Use their words where possible.)
-
-

## Behaviours
What do they actually do today? Include workarounds.
-
-

## Pain points
What gets in the way? Rank by severity.
1.
2.
3.

## Needs from a solution
-
-

## Quotes (with permission)
> ""

## Evidence
| Statement | Source |
|---|---|
| | |

## What this persona is not
List assumptions people often make about this group that your research did not support.
`,
  },
  {
    slug: 'journey-map',
    title: 'User journey map',
    summary: 'Map one user\'s experience across stages, with actions, thoughts, feelings, pain points and opportunities.',
    usedIn: ['Stage 2', 'Projects 1 and 3'],
    markdown: `# User journey map

**User / persona:**
**Scenario:** (one specific goal, for example "Find and book a plumber for a leaking pipe tonight")
**Evidence:** (where each row comes from)

| | 1. Notice the need | 2. Search and compare | 3. Decide and book | 4. Wait and receive service | 5. Pay and follow up |
|---|---|---|---|---|---|
| **Actions** (what they do) | | | | | |
| **Touchpoints** (website, phone, email, in person) | | | | | |
| **Thoughts** (what they are asking themselves) | | | | | |
| **Feelings** (low / neutral / high) | | | | | |
| **Pain points** | | | | | |
| **Opportunities** | | | | | |

## Moments that matter most
Which one or two stages have the biggest pain or the biggest drop-off? Why?

## Opportunities to pursue
| Opportunity | Stage | Evidence | Impact (H/M/L) | Effort (H/M/L) |
|---|---|---|---|---|
| | | | | |
`,
  },
  {
    slug: 'problem-statement',
    title: 'Problem and opportunity statements',
    summary: 'Turn research into an agreed problem, a "How might we" question and measures of success.',
    usedIn: ['Stage 2', 'All projects'],
    markdown: `# Problem and opportunity statements

## Problem statement
**[User group]** struggles to **[do what]** when **[context]** because **[root cause]**. This matters because **[impact on the user and the organisation]**.

Example: _First-time customers struggle to book a cleaning on their phone because prices only appear after they enter their address, so many leave to compare elsewhere. This costs the business bookings and wastes customers' time._

## Evidence
-
-

## How might we…
Turn the problem into two or three opportunity questions. Not too broad, not too narrow.
- How might we…
- How might we…

## Success measures
| Measure | Current (if known) | Target | How we will measure |
|---|---|---|---|
| | | | |

## Out of scope
What we are deliberately not solving now:
-

## Agreement
Reviewed with (names, roles, date):
`,
  },
  {
    slug: 'user-flow-checklist',
    title: 'User flow checklist',
    summary: 'Check that a flow covers entry points, decisions, errors and exits, not only the happy path.',
    usedIn: ['Stage 3', 'Stage 4'],
    markdown: `# User flow checklist

**Flow name:**
**User goal:**
**Start point(s):**
**End point (success):**

## Coverage
- [ ] Every way a user can enter the flow (link, notification, search, deep link)
- [ ] The happy path from start to success
- [ ] Every decision point, shown as a diamond with labelled branches
- [ ] What happens when the user is signed out, new or returning
- [ ] Error paths: invalid input, payment declined, network failure, timeout
- [ ] Empty states: no results, nothing saved yet
- [ ] Ways to go back, cancel or save and continue later
- [ ] Confirmation and what happens next (email, receipt, status)
- [ ] Hand-offs outside the product (phone call, in person, email)

## Quality
- [ ] Each step has one clear purpose
- [ ] No step asks for information the product already has
- [ ] The number of steps is justified; any step that could be removed is questioned
- [ ] Labels in the flow use the user's words
- [ ] Accessibility: every step can be completed with a keyboard and a screen reader

## Notes and open questions
`,
  },
  {
    slug: 'wireframe-checklist',
    title: 'Wireframe review checklist',
    summary: 'Review structure, content and states before moving to visual design.',
    usedIn: ['Stage 4'],
    markdown: `# Wireframe review checklist

**Screen / flow:**
**Reviewer:**

## Purpose and hierarchy
- [ ] The screen's main purpose is obvious within five seconds
- [ ] One primary action per screen, visually distinct
- [ ] Content is ordered by what users need first, not by what the organisation wants to say
- [ ] Headings describe the content below them

## Content
- [ ] Real or realistic content, not lorem ipsum
- [ ] Long names, long text and large numbers have been tried
- [ ] Labels and buttons use clear verbs ("Book appointment", not "Submit")

## States
- [ ] Empty state
- [ ] Loading state
- [ ] Error state with recovery
- [ ] Success or confirmation state
- [ ] Partial data or very large data sets

## Layout and responsiveness
- [ ] Mobile layout designed, not just squeezed
- [ ] Reading order makes sense when stacked in one column
- [ ] Touch targets are large enough and spaced apart

## Accessibility (structural)
- [ ] A logical heading order
- [ ] Form fields have visible labels
- [ ] Information is not conveyed by position or colour alone

## Open questions for the team
`,
  },
  {
    slug: 'usability-test-plan',
    title: 'Usability test plan',
    summary: 'Goals, participants, scenarios, tasks and success criteria for a moderated test.',
    usedIn: ['Stage 8', 'Projects 1 to 4'],
    markdown: `# Usability test plan

**Product / prototype:**
**Version or link:**
**Facilitator:**
**Note-taker:**

## Goals
What do we need to learn? Tie each goal to a decision.
1.
2.

## Participants
- Number: 5 per distinct user group is a common starting point for finding major problems
- Criteria:
- Exclude: people who worked on the product, close friends of the team

## Format
- [ ] Moderated, in person
- [ ] Moderated, remote
- [ ] Unmoderated
- Device(s):
- Session length: 30 to 45 minutes

## Scenarios and tasks
Write scenarios as realistic situations without using the interface's own words.

| # | Scenario | Success criteria | Max time |
|---|---|---|---|
| 1 | You need a deep clean before your parents visit on Saturday. Book one for the morning. | Booking confirmed for Saturday morning without help | 5 min |
| 2 | | | |
| 3 | | | |

## Questions after each task
- How easy or difficult was that, on a scale of 1 (very difficult) to 7 (very easy)?
- What, if anything, was confusing?

## Closing questions
- What did you like most and least?
- Is there anything you expected to see that was missing?

## Metrics to record
- Task success (completed / completed with help / not completed)
- Time on task (optional)
- Errors and where they happened
- Ease rating

## Ethics
- [ ] Consent recorded
- [ ] Participants told we are testing the design, not them
- [ ] Recordings stored securely and deleted on:

## Pilot
Run one pilot session with a colleague and fix unclear tasks before real sessions.
`,
  },
  {
    slug: 'findings-report',
    title: 'Usability findings report',
    summary: 'Report issues with evidence, severity and recommendations people can act on.',
    usedIn: ['Stage 8', 'Projects 1 to 4'],
    markdown: `# Usability findings report

**Product / version tested:**
**Dates:**
**Participants:** (number and who; no personal details)
**Method:**

## Summary
Three to five sentences: what we tested, the most important findings and the top recommendations.

## Task results
| Task | Completed | Completed with help | Not completed | Notes |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |

## Findings
Rate severity: **Critical** (prevents task completion), **Serious** (major delay or frustration), **Minor** (small friction), **Suggestion**.

### Finding 1: (short, specific title)
- **Severity:**
- **Seen in:** x of y participants
- **What happened:**
- **Evidence:** (quote or observation, with participant number)
- **Why it matters:**
- **Recommendation:**

### Finding 2:
- **Severity:**
- **Seen in:**
- **What happened:**
- **Evidence:**
- **Why it matters:**
- **Recommendation:**

## What worked well
Keep these during changes.
-

## Recommended next steps
| Recommendation | Finding(s) | Priority | Owner |
|---|---|---|---|
| | | | |

## Limitations
Small sample, prototype fidelity, recruitment bias, anything that limits how far the findings generalise.
`,
  },
  {
    slug: 'accessibility-audit',
    title: 'Accessibility audit checklist',
    summary: 'A manual review based on common WCAG 2.2 requirements, to use alongside automated tools.',
    usedIn: ['Stage 1', 'Stage 9', 'All projects'],
    markdown: `# Accessibility audit checklist

**Page / flow:**
**Date:**
**Auditor:**
**Tools used:** (automated checker, screen reader, browser zoom)

> This checklist covers frequent issues; it is not a full WCAG conformance review. Automated tools find only part of the problems. Passing them does not make a design accessible.

## Perceivable
- [ ] Body text contrast at least 4.5:1; large text at least 3:1 (WCAG 1.4.3)
- [ ] Icons, input borders and focus indicators at least 3:1 against adjacent colours (1.4.11)
- [ ] Information is never conveyed by colour alone (1.4.1)
- [ ] Meaningful images have alt text; decorative images are hidden from assistive tech (1.1.1)
- [ ] Video has captions; audio has transcripts (1.2)
- [ ] Content works at 200% zoom and reflows at 320 CSS pixels wide without horizontal scrolling (1.4.4, 1.4.10)
- [ ] Text spacing can be increased without loss of content (1.4.12)

## Operable
- [ ] Everything works with a keyboard alone (2.1.1)
- [ ] No keyboard traps (2.1.2)
- [ ] Focus order follows a logical reading order (2.4.3)
- [ ] Focus is always visible (2.4.7) and not hidden behind sticky elements (2.4.11)
- [ ] A skip link or landmarks allow skipping repeated navigation (2.4.1)
- [ ] Pages have descriptive titles (2.4.2)
- [ ] Link text makes sense out of context (2.4.4)
- [ ] Targets are at least 24 by 24 CSS pixels or adequately spaced (2.5.8)
- [ ] Anything done by dragging also works with a single pointer (2.5.7)
- [ ] Motion can be paused or is reduced when the user prefers reduced motion

## Understandable
- [ ] Page language is set (3.1.1)
- [ ] Form fields have visible labels and instructions (3.3.2)
- [ ] Errors are identified in text and explain how to fix them (3.3.1, 3.3.3)
- [ ] Navigation is consistent across pages (3.2.3)
- [ ] Users are not asked to re-enter information already provided in the same process (3.3.7)

## Robust
- [ ] Headings form a logical outline (h1, then h2, then h3)
- [ ] Buttons are buttons and links are links
- [ ] Custom controls have accessible names, roles and states (4.1.2)
- [ ] Status messages are announced without moving focus (4.1.3)

## Screen reader spot check
- [ ] The main task can be completed with a screen reader (VoiceOver, NVDA or TalkBack)

## Issues found
| # | Issue | Where | WCAG criterion | Severity | Recommendation |
|---|---|---|---|---|---|
| 1 | | | | | |
`,
  },
  {
    slug: 'design-critique',
    title: 'Design critique worksheet',
    summary: 'Structure feedback around goals and evidence, for giving or receiving critique.',
    usedIn: ['Stage 1', 'Stage 10', 'Career'],
    markdown: `# Design critique worksheet

**Design being reviewed:**
**Presenter:**
**Reviewers:**
**Stage:** (exploration / refinement / final check)

## Presenter fills in first
- **Goal of the design:**
- **Who it is for:**
- **Constraints:**
- **What feedback I want today:** (be specific, for example "Is the pricing clear?")
- **What feedback I don't need today:** (for example "Colours are not final")

## Reviewers: for each point
| What I noticed | Why it might matter for users or the goal | Question or suggestion |
|---|---|---|
| | | |
| | | |

## Prompts
- Is the main purpose clear within five seconds?
- What is the first thing your eye goes to? Is that right?
- Where might someone hesitate or make a mistake?
- What happens when something goes wrong?
- Is anything inconsistent with the rest of the product?
- Can everyone use this, including keyboard and screen reader users?

## Presenter: after the session
| Feedback | Decision (act / explore / park) | Reason |
|---|---|---|
| | | |
`,
  },
  {
    slug: 'design-system-inventory',
    title: 'Design system inventory',
    summary: 'Audit the colours, type, spacing and components a product actually uses before systematising them.',
    usedIn: ['Stage 6'],
    markdown: `# Design system inventory

**Product:**
**Screens reviewed:** (list)
**Date:**

## Colours found
| Hex | Where used | Purpose | Keep / merge / remove | Token name |
|---|---|---|---|---|
| | | | | |

## Typography found
| Font / size / weight / line height | Where used | Proposed style name |
|---|---|---|
| | | |

## Spacing values found
List every margin and padding value. Group into a scale (for example 4, 8, 12, 16, 24, 32, 48, 64).

## Components
| Component | Variants found | States covered (default, hover, focus, active, disabled, error, loading) | Inconsistencies | Priority |
|---|---|---|---|---|
| Button | | | | |
| Text input | | | | |
| Select | | | | |
| Checkbox / radio | | | | |
| Card | | | | |
| Navigation | | | | |
| Dialog | | | | |
| Toast / alert | | | | |
| Table | | | | |

## Icons and imagery
Sizes, styles and sources found:

## Decisions
- Primary palette:
- Type scale:
- Spacing scale:
- First five components to standardise:
`,
  },
  {
    slug: 'case-study-outline',
    title: 'Portfolio case study outline',
    summary: 'A skimmable structure for a 5 to 10 minute case study that shows your reasoning.',
    usedIn: ['Stage 11', 'All projects', 'Career'],
    markdown: `# Case study outline

## Title
A specific outcome-focused title, for example "Making first-time bookings possible on mobile".

## Summary (3 sentences)
- **Problem:**
- **What I did:**
- **Outcome:** (only what you can honestly claim)

**Role:** **Team:** **Timeline:** **Tools:**

## 1. Context
Who are the users? What did the organisation need? What were the constraints (time, technology, budget, policy)?

## 2. The problem
What was going wrong and how did you know? Include the problem statement.

## 3. Research
What did you do, with whom, and why that method? Show one artefact that mattered (an affinity map photo, a journey map). Two or three key insights, each with evidence.

## 4. Exploration
Show two or three directions you considered. Why did you reject the others?

## 5. Design
Annotated final screens. For each, one caption explaining the decision and the reason.

## 6. Testing and iteration
What did you test, with whom? What changed as a result? Before and after.

## 7. Outcome
Results with honest numbers, or qualitative results clearly labelled. If the project is not launched, say what you would measure.

## 8. Reflection
What would you do differently? What did you learn?

---

### Final checks
- [ ] Every image has a caption that explains a decision
- [ ] No invented data or quotes
- [ ] Client and personal data removed or permission obtained
- [ ] Readable in under ten minutes
- [ ] Alt text on images
`,
  },
];
