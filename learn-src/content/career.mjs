// @ts-check
/* Career guide (/learn/career/). Practical, honest guidance; no invented statistics. */

export default {
  intro: 'How to turn your projects into a portfolio that shows how you think, prepare for interviews and design challenges, and work with clients. Practical checklists, no shortcuts promised.',
  sections: [
    {
      id: 'expectations',
      title: 'An honest starting point',
      html: `
<p>Junior design roles are competitive in many regions, and the number of openings changes with the economy. Nobody can promise a job after any course, including this one. What you can control is the quality of your evidence: two or three case studies that show clear reasoning, a tidy portfolio, and the ability to talk about your decisions calmly.</p>
<p>Widen your search beyond the exact title "UX designer". Many designers start in adjacent roles: UI designer at an agency, design assistant, content or UX writer, research assistant, front-end developer with design duties, or a designer inside a non-tech organisation such as a hospital, university or council. Those roles build real experience and count on your CV.</p>`,
    },
    {
      id: 'choosing-projects',
      title: 'Choosing portfolio projects',
      html: `
<p>Reviewers spend a few minutes on a portfolio. Two or three strong case studies beat eight thin ones. Choose projects that together show:</p>
<ul>
<li><strong>Problem framing:</strong> you found or sharpened a real problem rather than receiving a finished brief.</li>
<li><strong>Evidence:</strong> you spoke to or observed real people, even only five.</li>
<li><strong>Range:</strong> for example one responsive website, one mobile app and one data-heavy product.</li>
<li><strong>Iteration:</strong> at least one project where testing changed your design.</li>
<li><strong>Craft:</strong> polished, consistent final UI with all important states.</li>
</ul>
<p>Avoid redesigning famous apps with no access to their users, constraints or data. These "unsolicited redesigns" are common, rarely convincing, and can come across as naive about the real constraints. If you do one, frame it honestly as a learning exercise and focus on a narrow, testable problem.</p>
<p>Good sources of real projects: a local business or charity, a club or society, a tool your current workplace uses (with permission), or the four guided projects in this academy, which ask you to do real research.</p>`,
    },
    {
      id: 'case-study-structure',
      title: 'Structuring a case study',
      html: `
<p>A case study is a short story about a decision process. Use a structure reviewers can skim:</p>
<ol>
<li><strong>Summary (top of the page):</strong> one sentence on the problem, one on what you did, one on the outcome. Your role, the team, the timeline and the tools.</li>
<li><strong>Context:</strong> who the users are, what the business or organisation needed, and the constraints.</li>
<li><strong>Problem:</strong> what was going wrong and how you know. Include your problem statement.</li>
<li><strong>Research and insights:</strong> what you did, with whom, and the two or three insights that shaped the design. Quote people where you have permission.</li>
<li><strong>Exploration:</strong> the options you considered, including the ones you rejected and why.</li>
<li><strong>Design:</strong> the final solution, shown with annotated screens that explain decisions.</li>
<li><strong>Testing and iteration:</strong> what you tested, what you learned, what you changed.</li>
<li><strong>Outcome and reflection:</strong> results you can honestly claim, what you would do next, and what you learned.</li>
</ol>
<p>The <a href="/learn/resources/templates/case-study-outline/">case study outline template</a> turns this into a fill-in document.</p>`,
    },
    {
      id: 'writing',
      title: 'Writing concise, honest case studies',
      html: `
<ul>
<li><strong>Lead with the point.</strong> Each section starts with its conclusion, then the detail.</li>
<li><strong>Use real numbers or none.</strong> "Three of five participants could not find the delivery fee" is strong. Invented percentages are dishonest and experienced reviewers notice.</li>
<li><strong>Say "I" and "we" accurately.</strong> Be specific about what you did yourself in a team project.</li>
<li><strong>Annotate images.</strong> A screenshot without explanation is decoration. Add a short caption explaining the decision it shows.</li>
<li><strong>Cut process theatre.</strong> Do not include every artefact. Include the ones that changed a decision.</li>
<li><strong>Aim for five to ten minutes of reading.</strong> Most reviewers will skim; headings and captions should tell the story on their own.</li>
<li><strong>Protect confidentiality.</strong> Remove client names, real customer data and anything under a non-disclosure agreement. Ask permission before publishing client work.</li>
</ul>`,
    },
    {
      id: 'portfolio-site',
      title: 'Portfolio website structure',
      html: `
<p>A simple structure works best:</p>
<ul>
<li><strong>Home:</strong> one sentence about who you are and what you design, then your two or three case studies as large, clearly labelled cards.</li>
<li><strong>Case study pages:</strong> one per project, using the structure above.</li>
<li><strong>About:</strong> a short, human paragraph, your background (including previous careers), and what kind of role you want.</li>
<li><strong>Contact:</strong> email, LinkedIn and a downloadable CV. Make it work without a form.</li>
</ul>
<p>Practical checks before you share it: it loads quickly on a phone, text is readable, images have alt text, links work, there are no placeholder pages, and it passes your own <a href="/learn/resources/templates/accessibility-audit/">accessibility audit</a>. A plain site built with a website builder is fine; the content matters far more than the platform.</p>`,
    },
    {
      id: 'resume',
      title: 'Resume and professional profile',
      html: `
<ul>
<li>Keep it to one page if you have under ten years of experience.</li>
<li>Use a simple single-column layout with real text so applicant tracking systems can read it. Save fancy layouts for your portfolio.</li>
<li>Put a link to your portfolio at the top, next to your contact details.</li>
<li>Describe impact, not duties: "Redesigned the volunteer sign-up form; completion went from 4 to 9 of 10 test participants" rather than "Responsible for forms".</li>
<li>Include relevant earlier careers with the design-relevant parts highlighted: customer insight, writing, training, analysis, coding.</li>
<li>Keep your professional profile (for example LinkedIn) consistent with the CV, with a headline that names the role you want.</li>
</ul>`,
    },
    {
      id: 'presenting',
      title: 'Presenting your work in interviews',
      html: `
<p>Many design interviews include a portfolio presentation of 30 to 45 minutes for one or two projects. A reliable structure for each project:</p>
<ol>
<li><strong>Set the scene (2 minutes):</strong> the product, the users, your role and the problem.</li>
<li><strong>The key insight (3 minutes):</strong> what you learned that changed the direction.</li>
<li><strong>Exploration and decisions (5 to 8 minutes):</strong> options, trade-offs and why you chose one.</li>
<li><strong>The solution (5 minutes):</strong> walk through the final design as a user would.</li>
<li><strong>Results and reflection (3 minutes):</strong> what happened, what you would change.</li>
</ol>
<p>Rehearse aloud with a timer. Prepare for "What would you do differently?", "How did you handle disagreement?" and "How did you know it worked?". It is fine to say "I don't know, but here is how I would find out".</p>`,
    },
    {
      id: 'challenges',
      title: 'Whiteboard exercises and design challenges',
      html: `
<p>Live challenges test your process, not your drawing. A typical 45-minute challenge might be "Design a way for patients to reschedule appointments". A dependable approach:</p>
<ol>
<li><strong>Clarify (5 to 8 minutes):</strong> ask who the users are, what the goal is, what constraints exist and how success would be measured. Write your assumptions down where the interviewer can see them.</li>
<li><strong>Frame (5 minutes):</strong> pick one primary user and one primary task. Say why.</li>
<li><strong>Explore (10 minutes):</strong> sketch two or three different approaches quickly.</li>
<li><strong>Choose and detail (15 minutes):</strong> pick one, explain the trade-off, and sketch the key screens including an error or empty state.</li>
<li><strong>Validate (5 minutes):</strong> explain how you would test it and what you would measure.</li>
</ol>
<p>Think aloud throughout. Interviewers want to see how you reason and collaborate. For take-home challenges, respect your own time: agree a time limit, note what you would do with more time, and decline challenges that look like unpaid client work.</p>`,
    },
    {
      id: 'questions',
      title: 'Common interview questions to prepare',
      html: `
<ul>
<li>Walk me through a project you are proud of.</li>
<li>Tell me about a time research changed your mind.</li>
<li>How do you decide what to work on when everything feels important?</li>
<li>Tell me about a disagreement with an engineer or product manager and how it ended.</li>
<li>How do you make sure your designs are accessible?</li>
<li>How do you know whether a design was successful after launch?</li>
<li>What feedback have you received that changed how you work?</li>
<li>Why this company and this role?</li>
</ul>
<p>Prepare short stories using situation, task, action and result. Have one example ready for collaboration, one for failure and one for research.</p>`,
    },
    {
      id: 'critique',
      title: 'Giving and receiving critique',
      html: `
<p><strong>When receiving:</strong> state the goal and what kind of feedback you want ("Is the hierarchy clear?" rather than "Thoughts?"). Listen, write it down, ask clarifying questions, and decide later. You do not have to accept every suggestion, but you should understand it.</p>
<p><strong>When giving:</strong> start from the goal, describe what you observe and its likely effect on users, and suggest rather than dictate. "The two buttons look equally important, so people may hesitate at checkout. Could the secondary action be a text link?" is useful. "I don't like it" is not. Use the <a href="/learn/resources/templates/design-critique/">design critique worksheet</a> to structure sessions.</p>`,
    },
    {
      id: 'freelance',
      title: 'Freelancing, clients and project scope',
      html: `
<p>Freelance work is a valid path into design, and it teaches client communication fast. The most common problems come from unclear scope.</p>
<ul>
<li><strong>Write a short proposal</strong> before starting: the problem, goals, what is included, what is not, deliverables, timeline, number of revision rounds, price and payment terms.</li>
<li><strong>Define a revision round:</strong> for example, one consolidated set of feedback from the client within five working days.</li>
<li><strong>Handle change requests in writing:</strong> "Happy to add the booking page. It is outside our current scope; it would add about three days and the following cost. Shall I update the proposal?"</li>
<li><strong>Collect feedback in one place</strong> and ask clients to describe problems ("customers can't find prices") rather than solutions ("make it blue").</li>
<li><strong>Get permission</strong> before showing client work in your portfolio, and agree what can be shared.</li>
</ul>
<p>Pricing and contracts vary by country and are legal matters; use local freelancer associations and professional advice rather than templates copied from elsewhere.</p>`,
    },
    {
      id: 'keep-learning',
      title: 'A continuing learning plan',
      html: `
<p>After the core curriculum, pick one specialism from <a href="/learn/courses/advanced/">Stage 12</a> that matches the jobs you want, and keep a light routine:</p>
<ul>
<li>One small practice exercise a week from the <a href="/learn/practice/">practice library</a>.</li>
<li>One real conversation with a user, client or designer a month.</li>
<li>Read one long-form article or chapter a week from the <a href="/learn/resources/">resource library</a>.</li>
<li>Update your practice log and refresh one case study each quarter.</li>
<li>Join a community or critique group, online or local, and give feedback as often as you receive it.</li>
</ul>`,
    },
  ],
};
