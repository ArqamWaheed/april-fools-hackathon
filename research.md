# MergeGuardian 9000 Research Plan

## Executive Summary

`MergeGuardian 9000` should be built as a **fake AI pull-request review platform** that looks expensive, serious, and policy-driven, while delivering **absurd, ceremonial, useless feedback**.

The strongest angle is not "AI gives bad comments." The stronger angle is:

> "A premium enterprise code review platform has become so overconfident, overcompliant, and overautomated that it is now structurally incapable of approving any pull request."

That framing fits the DEV April Fools Challenge well because it is:

- immediately understandable
- relatable to developers
- easy to demo in under 10 seconds
- visually rich
- naturally suited to AI-generated nonsense
- strong for `Overall`, `Best Google AI Usage`, and `Community Favorite`

---

## Why This Idea Is Strong

Based on the earlier challenge research, the current top entries tend to win with a combination of:

1. a one-line joke premise
2. polished fake-product presentation
3. visible technical overkill
4. a live interactive demo
5. a funny, dead-serious writeup

`MergeGuardian 9000` fits that pattern well.

It also avoids the most crowded lane, which is direct `418` / teapot / coffee protocol tribute apps. Instead, it plays in a fresher lane: **developer-tool satire**.

---

## Core Concept

### One-line pitch

`MergeGuardian 9000` is an AI code review platform that rejects every pull request for reasons that sound intelligent, authoritative, and completely useless.

### Product fantasy

The app should feel like a cross between:

- GitHub Pull Requests
- enterprise compliance software
- CI/CD dashboards
- an overpowered AI review bot
- a startup landing page for a tool nobody asked for

### The joke

The platform claims to improve code quality, delivery velocity, governance, and team alignment.

In practice, it does things like:

- block a PR because a function lacks "emotional idempotency"
- fail a check because the variable naming strategy is "not audit-ready"
- request changes because the code is too readable and may create unfair expectations
- warn that the diff has "insufficient enterprise friction"
- open fake checks such as `soulcheck`, `semantic ceremony`, `brand consistency lint`, and `retroactive compliance`

The goal is not to be random. The comments should feel **plausibly corporate** and **painfully familiar**.

---

## How the App Should Work

## High-level user flow

1. User lands on a beautiful fake PR review dashboard.
2. They paste code, a diff, or select a sample PR.
3. They click a button like `Run Enterprise Review`.
4. The app animates through fake review stages.
5. It generates:
   - summary verdict
   - check run statuses
   - line comments or file comments
   - policy violations
   - blocked merge reasons
   - an absurd "recommended next step"
6. The merge button is disabled or theatrically denied.
7. User can rerun the review, switch review modes, or share the result.

## Fast joke path

The joke needs to land in under 10 seconds. That means the first screen must already communicate the premise.

A good first impression:

- PR title already visible
- fake repository info
- status checks already visible
- one giant scary status badge like `MERGE BLOCKED BY GUARDIAN POLICY`
- big CTA: `Review My PR`

That way even before clicking, the user understands: this is a hostile AI code review product.

---

## Recommended MVP Scope

For a 4-day timeline, keep the MVP tight.

## Must-have features

### 1. Input area

At least one of:

- paste raw code
- paste fake git diff
- choose from sample PRs

Best MVP choice: support **sample PRs + freeform paste**.

Why: sample PRs guarantee funny results and let judges test quickly.

### 2. Fake PR dashboard

A GitHub-inspired page with:

- repo name
- PR title
- author avatar
- branch names
- file tab / conversation tab feel
- review summary card
- status checks panel
- merge box

### 3. AI-generated review output

Generate structured absurd output in categories:

- overall verdict
- 3 to 8 review comments
- 3 to 5 fake check runs
- 1 final merge-blocking reason
- 1 ridiculous remediation plan

### 4. Visible progression

Use loading phases to make it feel overengineered:

- indexing codebase beliefs
- aligning governance context
- calibrating reviewer temperament
- validating semantic posture
- reconciling merge ethics

### 5. Hard refusal to merge

There should be no real success path in the MVP.

Even when the review is "positive," it should still block merge for a ceremonial reason.

Example:

> "All checks passed, but merge remains paused pending vibe reconciliation."

## Nice-to-have stretch features

- line-by-line code annotations
- export/share result image
- multiple reviewer personalities
- fake compliance score
- reroll button for more comments
- hidden `418` easter egg
- sample repositories with themed PRs
- fake CI timeline

---

## Best Product Shape

The best shape is **not** a generic chatbot.

The best shape is a **single fake pull request page** with a strong visual hierarchy.

### Recommended screen structure

1. **Top bar**
   - repo name
   - PR number
   - status pill
   - branch into branch

2. **PR header**
   - PR title
   - author
   - labels like `ai-reviewed`, `policy-sensitive`, `blocked`

3. **Main two-column layout**
   - left: diff/code or sample PR content
   - right: review summary, checks, policies, merge box

4. **Review comments section**
   - comments pinned to files or lines
   - or rendered as a threaded review feed

5. **Bottom CTA row**
   - `Re-run review`
   - `Switch reviewer`
   - `Generate harsher feedback`
   - disabled `Merge`

This is the easiest shape to make polished fast.

---

## Recommended Joke Engine

The humor should come from **structured parody**, not pure randomness.

## Core review categories

Generate comments from a few repeatable buckets:

### 1. Bureaucratic nonsense

Comments that sound like process/compliance theater.

Examples:

- "This helper introduces unapproved convenience at the edge layer."
- "Please attach a rollback narrative before using `map()` in production-facing logic."
- "The code is technically correct, which is not the same as enterprise-ready."

### 2. Anthropomorphic code criticism

Treat code like it has emotional or moral obligations.

Examples:

- "This function appears eager but not self-aware."
- "The variable names are confident but not accountable."
- "This loop lacks empathy for future maintainers."

### 3. Corporate AI hallucination

Use fake analysis terms and invented metrics.

Examples:

- "Guardian detected a 74% mismatch between implementation confidence and roadmap maturity."
- "Cyclomatic intention exceeds approved thresholds."
- "Naming entropy is trending above audit comfort levels."

### 4. Familiar developer pain

Jokes that feel close to real PR pain.

Examples:

- "Please split this 4-line PR into smaller PRs for easier emotional review."
- "I left one non-blocking comment that is definitely blocking."
- "Can we move this into a shared util even though it will only ever be used here?"

### 5. Impossible remediation

The fix suggestions should be elaborate and useless.

Examples:

- "Before merge, please provide a postmortem for the version of this bug that never happened."
- "Re-open this PR after stakeholder alignment with Design, Legal, Platform, and your inner child."
- "Convert this function into an RFC, gather consensus, then inline it again."

## Reviewer modes

Adding reviewer personas gives replay value quickly.

Recommended reviewer modes:

- **Guardian Core**: default enterprise reviewer
- **Compliance Beast**: obsessed with process and policy
- **Staff Engineer of Doom**: elite taste, impossible standards
- **AI Optimizer**: obsessed with metrics and false precision
- **Passive-Aggressive Teammate**: realistic and painful

This can be implemented as prompt presets plus visual theming.

---

## AI Integration Strategy

If you want to compete for `Best Google AI Usage`, AI should be central to the joke, not just a garnish.

## Strong AI use cases inside the app

Use AI to generate:

- overall PR verdict
- review comments
- check run names and descriptions
- blocked merge reason
- remediation plan
- reviewer persona voice

## Recommended response shape

Ask the model for structured JSON like:

- `summary`
- `verdict`
- `checks[]`
- `comments[]`
- `blockReason`
- `nextSteps[]`

Why this matters:

- easier UI rendering
- more polished output
- simpler retries and fallbacks
- cleaner separation between frontend and AI logic

## Fallback plan

Because this is a 4-day free-tier project, have a backup if live AI is unavailable:

- a local bank of handcrafted comments
- seeded random generation
- reviewer-specific templates

That way the demo still works even if the AI quota does not.

## Best category strategy

You can honestly claim `Best Google AI Usage` if AI is the engine that creates the review artifacts and reviewer personalities.

---

## Feature Matrix

| Feature | Priority | Why it matters |
|---|---|---|
| Single PR review page | Must-have | Makes the joke immediately clear |
| Paste code or diff | Must-have | Lets users try their own code |
| Sample PR presets | Must-have | Ensures fast demo path |
| AI-generated review summary | Must-have | Core joke engine |
| Fake check runs | Must-have | Makes it feel like a real dev tool |
| Blocked merge box | Must-have | Strong comedic payoff |
| Reviewer mode switcher | Should-have | Adds replayability fast |
| Loading phase theater | Should-have | Adds fake sophistication |
| Code annotations | Nice-to-have | Extra polish but more work |
| Share/export card | Nice-to-have | Good for community reach |
| Auth/database/history | Skip for MVP | Low payoff for 4-day challenge |

---

## UI / UX Direction

## Visual target

The UI should feel like:

- GitHub PR page
- CI checks dashboard
- enterprise risk platform
- glossy AI productivity startup

## Tone

Serious, premium, overconfident, slightly hostile.

## Visual ideas

- dark mode by default
- green/red status pills
- neon or polished gradients for AI branding
- subtle badge overload
- tiny metric cards for fake analysis
- lots of official-looking labels

## Suggested components

- PR header card
- repository breadcrumb
- code editor / diff viewer panel
- review summary card
- status checks list
- policy violations card
- merge box with disabled button
- activity log or timeline
- reviewer personality switcher

## Copy style

All text should sound like a company that raised too much money.

Examples:

- "Enterprise merge intelligence"
- "policy-aware review orchestration"
- "semantic delivery governance"
- "guardian-certified readiness analysis"
- "compliance-native code acceleration"

---

## Tech Stack Recommendation

For a free-only, 4-day build, optimize for speed and frontend polish.

## Recommended stack

### Frontend

- **Next.js** or **Vite + React**
- **TypeScript**
- **Tailwind CSS**
- optional component help from **shadcn/ui** style patterns

### Backend

Two easy options:

1. **Next.js API routes**
2. **Small Express server**

Best fast choice: **Next.js full-stack**.

Why:

- one project
- simple deployment
- easy API endpoint for AI generation
- polished app feel quickly

### Hosting

- **Vercel** for web app
- free tier is enough for a challenge demo

### Data

No database needed for MVP.

Optional later:

- localStorage for recent reviews

### AI

If using Google AI, use a simple server endpoint that sends the pasted code or selected sample PR plus reviewer mode to the model and gets back structured review JSON.

## Simpler no-AI backup architecture

If AI integration becomes risky, launch with:

- curated comment templates
- deterministic random generation
- optional AI enhancement later

This is safer than blocking the whole project on API setup.

---

## Architecture Recommendation

## Minimal architecture

### Frontend responsibilities

- collect input
- select reviewer mode
- show fake loading stages
- render review output
- support reruns

### Backend responsibilities

- build prompt from input + reviewer mode
- call AI or fallback generator
- normalize response into structured JSON

### Output contract

Use one response contract so the UI does not care whether output came from AI or fallback templates.

That means you can switch generation methods without rewriting the UI.

---

## Sample Output Shape

```json
{
  "verdict": "changes_requested",
  "summary": "MergeGuardian 9000 detected elevated semantic risk across this pull request.",
  "checks": [
    {
      "name": "Semantic Posture",
      "status": "failed",
      "details": "Implementation is correct but lacks ceremonial resilience."
    },
    {
      "name": "Enterprise Readiness",
      "status": "neutral",
      "details": "Code is deployable, but not governable."
    }
  ],
  "comments": [
    {
      "file": "src/auth.ts",
      "line": 18,
      "severity": "high",
      "comment": "This function returns too quickly and may surprise compliance."
    }
  ],
  "blockReason": "Merge blocked pending cross-functional trust alignment.",
  "nextSteps": [
    "Document the emotional lifecycle of this helper.",
    "Re-submit after stakeholder-approved variable naming calibration."
  ]
}
```

---

## Sample PR Presets

Add sample PRs so judges can click and instantly enjoy the joke.

Recommended presets:

1. **Fix typo in button label**
   - absurdly overreviewed tiny change

2. **Refactor auth helper**
   - good for fake security comments

3. **Add dark mode toggle**
   - good for accessibility, brand, and governance jokes

4. **Center a div**
   - nice meta joke for the dev audience

5. **Remove unused util**
   - perfect for comments about organizational memory and legacy alignment

---

## What To Avoid

Avoid these pitfalls:

### 1. Too much backend complexity

Do not build real auth, real GitHub integration, real repo parsing, or real database history for MVP.

### 2. Pure randomness

If the jokes are too random, it stops feeling like code review satire. Keep them structured and believable.

### 3. Too many screens

One polished main screen is better than five unfinished routes.

### 4. Weak refusal mechanic

The merge denial must be funny and unavoidable. That is the punchline.

### 5. Overdependence on live AI

Always keep fallback generation in place.

---

## 4-Day Build Plan

## Day 1

- choose stack
- scaffold project
- build main PR layout
- create sample PR data
- create static fake review output to prove UI

## Day 2

- build generation pipeline
- add reviewer modes
- add loading sequence
- render structured checks and comments
- polish visual hierarchy

## Day 3

- add fallback templates
- tune joke quality
- add rerun flow
- add screenshots/demo-friendly touches
- improve copy everywhere

## Day 4

- final polish
- deploy
- test on mobile and desktop
- capture screenshots and GIFs
- write DEV submission post
- tune title and opening paragraph

---

## Submission Strategy

## Target categories

Best targets:

- `Overall`
- `Best Google AI Usage`
- `Community Favorite`

## Post structure

### 1. What I Built

One-line explanation immediately.

Example:

> I built `MergeGuardian 9000`, an AI pull request reviewer that blocks every merge for reasons that sound intelligent, official, and deeply unhelpful.

### 2. Demo

Give live link fast.

### 3. Code

Give repo link fast.

### 4. How I Built It

Explain:

- fake PR dashboard
- AI-generated review artifacts
- reviewer personas
- structured output
- fallback templates
- stack and deployment

### 5. How I Used Google AI

Explain exactly how AI generated:

- review summaries
- review comments
- fake checks
- merge blockers
- personality styles

### 6. Prize Category Justification

Short paragraphs for each target category.

### 7. Closing line

End with a strong joke.

Example:

> The code compiled, the tests passed, and the merge was denied for spiritual reasons.

---

## Deep Research Prompt

Use this if you want a second-pass research run in another AI tool.

## Deep Research Request: MergeGuardian 9000

<context>
I'm building `MergeGuardian 9000`, a joke web app for the DEV April Fools Challenge. It is a fake AI PR-review platform that gives absurd, ceremonial, useless code-review feedback.

I'm somewhat technical and familiar with the MERN stack, but I'm open to any tools that maximize speed and polish. This is a 4-day, free-only project, and success means giving myself the best chance to win.
</context>

<instructions>
### Core Questions:
1. What product shape gives `MergeGuardian 9000` the best chance to win the challenge in 4 days?
2. What are the minimum features needed for the joke to land fast and feel polished?
3. What UI patterns from GitHub, CI dashboards, code review tools, and developer products should be parodied?
4. What is the best free tech stack and deployment plan for fast development and a polished demo?
5. How should AI be integrated so it feels central enough to compete for `Best Google AI Usage`?
6. What kinds of absurd review comments, fake statuses, and rejection reasons will be funniest and most replayable?
7. How should the submission post be structured to maximize performance on judging criteria and Community Favorite?

### Research Areas:
- challenge-winning feature prioritization
- competitor / inspiration analysis from current top entries
- technical approach recommendations for a fast web app
- AI tools/APIs relevant to this product and free-tier constraints
- UI inspiration from code review, PR, and CI/CD products
- MVP development strategy for a 4-day sprint
- submission-writing strategy

### Required Deliverables:
1. Feature Matrix — MVP vs stretch features
2. Tech Stack Recommendation — with alternatives and trade-offs
3. AI Joke Engine Guide — prompts, output categories, safeguards, caching/fallback ideas
4. UI/UX Plan — page structure, components, visual style, parody references
5. 4-Day Roadmap — day-by-day execution plan
6. Submission Strategy — post outline, category targeting, screenshot/demo suggestions
</instructions>

<output_format>
- Assume basic programming knowledge, but explain advanced trade-offs clearly
- Include source URLs with access dates for major recommendations
- Use tables for comparisons
- Note any conflicting information between sources
- Provide pros/cons for major decisions
</output_format>

---

## Session Continuity Reminder

Save a short summary of this research and reuse it later instead of starting from scratch.
