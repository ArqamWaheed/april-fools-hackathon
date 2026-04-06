# MergeGuardian 9000 — Technical Design

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
│                                                  │
│  ┌─────────────┐  ┌──────────┐  ┌────────────┐  │
│  │ Input Panel │  │ Loading  │  │  Review    │  │
│  │ (code/PR)   │──▶│ Theater  │──▶│ Dashboard  │  │
│  └─────────────┘  └──────────┘  └────────────┘  │
│         │                             │          │
│         │         ┌──────────┐        │          │
│         │         │ Reviewer │        │          │
│         └────────▶│ Switcher │────────┘          │
│                   └──────────┘                   │
└──────────────────────┬───────────────────────────┘
                       │ POST /api/review
                       ▼
┌──────────────────────────────────────────────────┐
│               Next.js API Route                   │
│                                                   │
│  ┌──────────┐   ┌────────────┐   ┌────────────┐  │
│  │ Prompt   │──▶│ AI Service │──▶│ Normalizer │  │
│  │ Builder  │   │ (Gemini)   │   │ (JSON)     │  │
│  └──────────┘   └─────┬──────┘   └────────────┘  │
│                       │ fallback                  │
│                       ▼                           │
│                ┌─────────────┐                    │
│                │  Template   │                    │
│                │  Generator  │                    │
│                └─────────────┘                    │
└──────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Full-stack in one project; fast Vercel deploy |
| **Language** | TypeScript | Type safety for structured review output |
| **Styling** | Tailwind CSS | Rapid UI iteration; dark mode trivial |
| **Components** | shadcn/ui (selective) | Polished cards, badges, buttons without bloat |
| **AI** | Google Gemini API (gemini-2.0-flash) | Free tier, fast, good at structured JSON |
| **Hosting** | Vercel | Free tier; zero-config Next.js deployment |
| **Code editor** | react-simple-code-editor or Monaco (lite) | Syntax highlighting for pasted code |
| **Icons** | Lucide React | Clean dev-tool aesthetic |

### Why Next.js over Vite + Express

- Single project, single deploy target
- API routes colocated with frontend
- Vercel deployment is one click
- App Router gives good defaults for a single-page-ish app

### Why Gemini over other AI

- Google AI free tier is generous enough for a demo
- Directly supports "Best Google AI Usage" category
- `gemini-2.0-flash` is fast and cheap — good for interactive demo
- Structured JSON output mode available

---

## Project Structure

```
mergeguardian-9000/
├── .github/
│   └── copilot-instructions.md
├── public/
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, fonts, metadata
│   │   ├── page.tsx                # Main (and only) page
│   │   ├── globals.css             # Tailwind + custom styles
│   │   └── api/
│   │       └── review/
│   │           └── route.ts        # POST /api/review endpoint
│   ├── components/
│   │   ├── PRHeader.tsx            # Repo name, PR title, labels, branches
│   │   ├── CodeInput.tsx           # Code editor / paste area
│   │   ├── SamplePRSelector.tsx    # Preset PR picker
│   │   ├── ReviewerSwitcher.tsx    # Persona selector
│   │   ├── LoadingTheater.tsx      # Animated fake loading stages
│   │   ├── ReviewDashboard.tsx     # Main review output container
│   │   ├── VerdictCard.tsx         # Summary + verdict badge
│   │   ├── CheckRunList.tsx        # Fake CI check statuses
│   │   ├── ReviewComments.tsx      # Comment thread / annotations
│   │   ├── PolicyViolations.tsx    # Policy violation cards
│   │   ├── MergeBox.tsx            # Disabled merge button + block reason
│   │   └── NextSteps.tsx           # Remediation plan
│   ├── lib/
│   │   ├── ai.ts                   # Gemini API call + prompt builder
│   │   ├── fallback.ts             # Template-based fallback generator
│   │   ├── prompts.ts              # Reviewer persona system prompts
│   │   ├── sample-prs.ts           # Sample PR data
│   │   └── types.ts                # ReviewOutput type definitions
│   └── data/
│       └── fallback-comments.json  # Curated comment bank
├── MEMORY.md
├── PRD.md
├── TECHDESIGN.md
├── research.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Core Data Types

```typescript
// src/lib/types.ts

export type Verdict = "changes_requested" | "blocked" | "spiritually_rejected";

export type CheckStatus = "passed" | "failed" | "warning" | "pending";

export interface Check {
  name: string;
  status: CheckStatus;
  details: string;
}

export interface ReviewComment {
  file: string;
  line: number;
  severity: "critical" | "high" | "medium" | "low" | "philosophical";
  comment: string;
}

export type ReviewerPersona =
  | "guardian_core"
  | "compliance_beast"
  | "staff_engineer_of_doom"
  | "ai_optimizer"
  | "passive_aggressive_teammate";

export interface ReviewOutput {
  verdict: Verdict;
  summary: string;
  checks: Check[];
  comments: ReviewComment[];
  blockReason: string;
  nextSteps: string[];
  reviewerPersona: ReviewerPersona;
}

export interface ReviewRequest {
  code: string;
  prTitle: string;
  persona: ReviewerPersona;
}
```

---

## API Design

### `POST /api/review`

**Request:**

```json
{
  "code": "function add(a, b) { return a + b; }",
  "prTitle": "Fix typo in button label",
  "persona": "guardian_core"
}
```

**Response:** `ReviewOutput` JSON (see types above)

**Logic:**

1. Build system prompt from persona
2. Build user prompt from code + PR title
3. Call Gemini API with JSON mode
4. Parse and validate response
5. If AI fails → call fallback generator
6. Return normalized `ReviewOutput`

**Error handling:**

- AI timeout (10s) → fallback
- AI rate limit → fallback
- AI malformed response → fallback
- All paths return valid `ReviewOutput`

---

## AI Prompt Strategy

### System Prompt Template

```
You are MergeGuardian 9000, an enterprise AI code review platform.

Your personality: {persona_description}

You MUST review the submitted pull request and generate a structured JSON response.

Rules:
- NEVER approve the merge. Always find reasons to block.
- Comments should sound plausibly corporate but be completely useless.
- Invent metrics, policies, and compliance terms freely.
- Reference fake internal standards like "Guardian Policy 7.4.2" or "Semantic Delivery Framework v3".
- The blockReason must be a single devastating sentence.
- nextSteps should be elaborate, impossible actions the developer "must" take.

Respond with ONLY valid JSON matching this schema:
{schema}
```

### Persona Prompt Variants

| Persona | System Prompt Addition |
|---|---|
| Guardian Core | "You are balanced but firm. Every PR has potential but none are ready." |
| Compliance Beast | "You see policy violations everywhere. Reference audit trails, SOC2, and regulatory alignment constantly." |
| Staff Engineer of Doom | "You have impossibly high taste. Code must be philosophically sound, not just correct." |
| AI Optimizer | "You are obsessed with metrics. Cite fake percentages, confidence scores, and threshold violations." |
| Passive-Aggressive Teammate | "You phrase everything as suggestions but they are absolutely requirements. Use 'just a thought' and 'not blocking but' liberally." |

---

## Fallback Generator Design

When AI is unavailable, generate reviews from curated templates:

```typescript
// src/lib/fallback.ts

function generateFallbackReview(req: ReviewRequest): ReviewOutput {
  const comments = pickRandom(COMMENT_BANK[req.persona], 3, 6);
  const checks = pickRandom(CHECK_BANK, 3, 5);
  const blockReason = pickRandom(BLOCK_REASONS);
  const nextSteps = pickRandom(NEXT_STEPS_BANK, 2, 4);

  return {
    verdict: pickRandom(["changes_requested", "blocked", "spiritually_rejected"]),
    summary: generateSummary(req.prTitle),
    checks,
    comments: comments.map(c => ({
      ...c,
      file: extractFilename(req.code) || "src/index.ts",
      line: randomLine(req.code),
    })),
    blockReason,
    nextSteps,
    reviewerPersona: req.persona,
  };
}
```

The fallback bank should contain 50+ comments, 15+ checks, 20+ block reasons, and 20+ next steps.

---

## Loading Theater Sequence

Fake loading stages displayed sequentially with 400–800ms intervals:

```typescript
const LOADING_STAGES = [
  "Indexing codebase beliefs…",
  "Scanning for unapproved convenience…",
  "Aligning governance context…",
  "Calibrating reviewer temperament…",
  "Consulting enterprise policy matrix…",
  "Evaluating semantic posture…",
  "Cross-referencing naming karma…",
  "Computing cyclomatic intention…",
  "Validating emotional idempotency…",
  "Reconciling merge ethics…",
  "Preparing devastation report…",
  "Finalizing disappointment…",
];
```

Display as a vertical progress list. Each stage gets a checkmark when "complete." Last stage transitions to the review dashboard.

---

## UI Component Specifications

### PRHeader

- Repo breadcrumb: `mergeguardian-9000 / pull / #9001`
- PR title (editable or from preset)
- Labels: `ai-reviewed`, `policy-sensitive`, `blocked`
- Branch pill: `feature/hope` → `main`
- Author avatar (generic)

### CodeInput

- Syntax-highlighted editor area
- Supports paste or type
- Language auto-detection not needed — display as-is
- Minimum height: 200px

### ReviewDashboard

- Appears after loading theater completes
- Contains: VerdictCard, CheckRunList, ReviewComments, PolicyViolations, MergeBox, NextSteps

### VerdictCard

- Large status badge: `CHANGES REQUESTED` / `BLOCKED` / `SPIRITUALLY REJECTED`
- Summary text below
- Reviewer persona avatar + name

### CheckRunList

- Vertical list of check items
- Each: icon (✓ / ✗ / ⚠) + name + details
- Color coded: green/red/yellow

### MergeBox

- Green "Merge pull request" button — permanently disabled
- Red banner above: block reason text
- Small lock icon
- Tooltip on hover: "Merge is not permitted in this moral climate."

---

## Deployment

### Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variable: `GEMINI_API_KEY`
4. Deploy

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes (for AI) | Google AI Studio API key |

If the key is missing, the app falls back to template generation automatically.

---

## Performance Targets

| Metric | Target |
|---|---|
| First paint | < 1s |
| Review generation (AI) | < 5s |
| Review generation (fallback) | < 100ms |
| Lighthouse mobile score | > 80 |

---

## Security Considerations

- API key is server-side only (Next.js API route)
- No user data stored
- Rate limiting on /api/review: 10 requests per minute per IP (simple in-memory counter)
- Input sanitization: strip code to 5000 chars max before sending to AI
- No auth needed

---

## Testing Strategy

Given the 4-day constraint, testing is minimal:

- Manual testing of all sample PRs
- Manual testing of freeform code paste
- Manual testing of all 5 reviewer personas
- Manual testing of fallback mode (remove API key)
- Mobile responsive check
- Screenshot capture for submission post
