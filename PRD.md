# MergeGuardian 9000 — Product Requirements Document

## Overview

**Product:** MergeGuardian 9000
**Type:** Satirical web application
**Purpose:** DEV April Fools Challenge 2026 entry
**Deadline:** April 12, 2026 at 11:59 PM PT
**Budget:** $0 (free tier only)
**Build window:** 4 days

---

## One-Line Pitch

MergeGuardian 9000 is a fake AI pull-request review platform that blocks every merge for reasons that sound intelligent, authoritative, and completely useless.

---

## Problem Statement (The Anti-Problem)

Modern code review is already painful. MergeGuardian 9000 asks: what if a startup raised $40M to make it worse?

The product parodies:

- AI code review bots that generate noise instead of signal
- enterprise compliance gates that block real work
- CI/CD dashboards that look impressive but delay shipping
- corporate process theater dressed up as engineering rigor

---

## Target Audience

- DEV.to community members (developers, primarily web/full-stack)
- Challenge judges evaluating on: anti-value, creativity, technical execution, writing quality
- Anyone who has suffered through an over-automated PR review pipeline

---

## Target Prize Categories

| Category | Strategy |
|---|---|
| **Overall** (2 winners) | Strong anti-value + visible overengineering + killer writeup |
| **Best Google AI Usage** | AI generates all review artifacts as the core mechanic |
| **Community Favorite** | Instantly interactive, relatable, shareable results |

---

## Core User Flow

```
Landing state → User pastes code or picks sample PR
            → Clicks "Run Enterprise Review"
            → Animated loading stages play
            → Review dashboard populates:
                - Verdict card
                - Check run statuses
                - Review comments
                - Policy violations
                - Merge block reason
                - Remediation steps
            → Merge button is permanently disabled
            → User can rerun, switch reviewer, or share
```

---

## Functional Requirements

### P0 — Must Ship (Day 1–2)

| ID | Requirement | Rationale |
|---|---|---|
| P0-1 | Single-page PR review dashboard | Core product shape; joke must land on one screen |
| P0-2 | Code/diff input area | Users paste their own code or select a sample |
| P0-3 | 3–5 sample PR presets | Guarantees funny output; fast demo path for judges |
| P0-4 | AI-generated structured review output | Core joke engine: verdict, comments, checks, block reason |
| P0-5 | Fake status check runs panel | Makes it feel like a real dev tool |
| P0-6 | Permanently blocked merge box | The punchline — merge is always denied |
| P0-7 | Theatrical loading sequence | "Indexing codebase beliefs…" adds to overengineering feel |
| P0-8 | Responsive layout | Judges may test on mobile |

### P1 — Should Ship (Day 2–3)

| ID | Requirement | Rationale |
|---|---|---|
| P1-1 | Reviewer persona switcher (3–5 modes) | Replayability; different humor angles |
| P1-2 | Re-run review button | Users try again, get fresh absurd output |
| P1-3 | Fallback generation templates | Demo survives if AI quota runs out |
| P1-4 | Polished copy and branding | "Enterprise merge intelligence" voice throughout |
| P1-5 | 418 I'm a Teapot easter egg | Hidden Larry Masinter nod for bonus category eligibility |

### P2 — Stretch (Day 3–4 if time allows)

| ID | Requirement | Rationale |
|---|---|---|
| P2-1 | Line-by-line code annotations | Extra polish; more visual depth |
| P2-2 | Share/export result card | Community amplification |
| P2-3 | Fake compliance score | Extra dashboard absurdity |
| P2-4 | Fake CI timeline | Shows "review pipeline" progression |
| P2-5 | Multiple themed sample repos | More content variety |

### P3 — Explicitly Out of Scope

- User authentication
- Real GitHub integration
- Database / persistence
- Multi-page routing beyond single view
- Real code analysis or linting

---

## Sample PR Presets

| Preset | Why It's Funny |
|---|---|
| "Fix typo in button label" | 1-character change gets 8 review comments |
| "Refactor auth helper" | Triggers fake security escalation |
| "Add dark mode toggle" | Brand governance and accessibility theater |
| "Center a div" | Meta dev joke |
| "Remove unused util" | Organizational memory and legacy alignment |

---

## Reviewer Personas

| Persona | Voice | Focus |
|---|---|---|
| **Guardian Core** | Default enterprise reviewer | Balanced absurdity |
| **Compliance Beast** | Obsessed with process | Policy violations, audit readiness |
| **Staff Engineer of Doom** | Elite taste, impossible standards | Code philosophy, naming, architecture |
| **AI Optimizer** | Metrics-obsessed | Fake scores, thresholds, confidence levels |
| **Passive-Aggressive Teammate** | Realistic and painful | "Just a thought…", "Not blocking, but…" |

---

## Review Output Contract

Every review generates a structured object with:

```
verdict          — "changes_requested" | "blocked" | "spiritually_rejected"
summary          — 1–2 sentence overall assessment
checks[]         — name, status (passed/failed/warning), details
comments[]       — file, line, severity, comment text
blockReason      — why merge is denied
nextSteps[]      — absurd remediation instructions
reviewerPersona  — which persona generated this
```

The UI renders this identically whether it came from AI or fallback templates.

---

## Humor Guidelines

### Do

- Sound plausibly corporate — like a real tool that went too far
- Reference real developer pain (splitting PRs, naming debates, non-blocking-but-blocking comments)
- Use invented metrics and analysis terms with false precision
- Make remediation steps elaborate and useless
- Keep it developer-relatable

### Don't

- Be purely random — the humor comes from structured parody
- Be mean-spirited or target individuals
- Use offensive content
- Make jokes that require explaining — they should land instantly

---

## Success Criteria

1. A judge can understand the joke within 10 seconds of landing on the page
2. Pasting any code produces a funny, structured, screenshot-worthy review
3. Sample presets produce reliably hilarious results
4. The merge button is always denied with a unique reason
5. The app works even if AI is unavailable (fallback templates)
6. The DEV submission post is funny and well-structured on its own
7. The live demo URL works reliably during the judging window (April 12–16)

---

## Constraints

- **Time:** 4 days total build time
- **Budget:** $0 — free tiers only for all services
- **Hosting:** must support free deployment (Vercel free tier)
- **AI:** must have fallback if API quota is exhausted
- **Scope:** one polished screen beats five unfinished routes
