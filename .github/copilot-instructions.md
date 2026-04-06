# Copilot Agent Instructions — MergeGuardian 9000

## Project Context

This is **MergeGuardian 9000** (`mergeguardian-9000`), a satirical web app for the DEV April Fools Challenge 2026. It is a fake AI pull-request review platform that blocks every merge for absurd, corporate-sounding reasons.

**Deadline:** April 12, 2026
**Stack:** Next.js 14 + TypeScript + Tailwind CSS v3 + Lucide React + Google Gemini API (`gemini-2.0-flash`)
**Hosting:** Vercel (free tier)

---

## ⚠️ FIRST — Read MEMORY.md

Before doing **ANY** work on **ANY** prompt, read **`MEMORY.md`** in the project root. It contains the current phase, what exists, what's done, what's pending, and all key decisions. This is non-negotiable.

---

## File Inventory

### Config

| File | Purpose |
|---|---|
| `package.json` | Project config — name: `mergeguardian-9000` |
| `tsconfig.json` | TypeScript strict config |
| `next.config.js` | Next.js 14 config |
| `postcss.config.js` | PostCSS config for Tailwind |
| `tailwind.config.js` | Tailwind v3 config with custom `guardian` color palette |
| `.gitignore` | Git ignore rules |
| `.env.local` | **GITIGNORED** — Gemini API key (`GEMINI_API_KEY`) |
| `.env.example` | Template for `.env.local` |

### Documentation

| File | Purpose |
|---|---|
| `README.md` | Project docs, setup instructions, architecture |
| `research.md` | Challenge research, competitive analysis, submission strategy |
| `PRD.md` | Product requirements, features, humor guidelines, success criteria |
| `TECHDESIGN.md` | Architecture, types, API design, component specs, prompts |
| `MEMORY.md` | Living project memory — **read first, update after changes** |

### Types

| File | Purpose |
|---|---|
| `src/types/global.d.ts` | Global type declarations |

### Core Library (`src/lib/`)

| File | Purpose |
|---|---|
| `src/lib/types.ts` | All TypeScript interfaces — single source of truth for data shapes |
| `src/lib/sample-prs.ts` | 10 sample PRs, 5 reviewer personas, 12 loading stages |
| `src/lib/fallback.ts` | Fallback review template generator (80+ jokes) |
| `src/lib/prompts.ts` | Gemini prompt builder per persona |
| `src/lib/ai.ts` | Gemini API integration with automatic fallback |
| `src/lib/appeal.ts` | Appeal system — prompts, fallback, Gemini integration (same pattern as ai.ts) |
| `src/lib/roast.ts` | Roast dashboard — prompts, fallback, Gemini integration (same pattern as ai.ts) |

### Pages (`src/app/`)

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout — dark mode, metadata, emoji favicon |
| `src/app/page.tsx` | Main page — orchestrates all components |
| `src/app/globals.css` | Tailwind directives + animations + scrollbar + selection styles |
| `src/app/api/review/route.ts` | POST endpoint — rate limiting (10 req/min/IP), validation, Gemini call |
| `src/app/api/appeal/route.ts` | POST endpoint — 3-round appeal escalation via Gemini |
| `src/app/api/roast/route.ts` | POST endpoint — code roast dashboard via Gemini |
| `src/app/418/page.tsx` | 🫖 Enhanced easter egg teapot page (ASCII art, steam animation, RFC 2324) |
| `src/app/not-found.tsx` | Custom 404 page with on-brand humor |

### Components (`src/components/` — 11 total)

| Component | Purpose |
|---|---|
| `PRHeader.tsx` | PR breadcrumb, title, labels |
| `CodeInput.tsx` | Code textarea with line numbers, file tab, Ctrl+Enter submit |
| `SamplePRSelector.tsx` | Sample PR picker buttons |
| `ReviewerSwitcher.tsx` | Persona selector with descriptions |
| `LoadingTheater.tsx` | Animated pipeline with 12-stage progress bar |
| `VerdictCard.tsx` | Verdict display with persona info + Gemini AI badge |
| `CheckRunList.tsx` | Status checks list (all failing) |
| `ReviewComments.tsx` | Inline review comments |
| `MergeBox.tsx` | Blocked merge box with rotating disabled-button messages + Gemini AI badge |
| `AppealFlow.tsx` | 3-round appeal escalation UI (bureaucratic → philosophical → existential) |
| `RoastDashboard.tsx` | Code quality roast with SVG gauge, metric cards, AI confidence statement |

---

## Architecture

```
Browser → POST /api/review  → Prompt Builder  → Gemini API → JSON → UI
Browser → POST /api/appeal  → Appeal Prompts  → Gemini API → JSON → UI
Browser → POST /api/roast   → Roast Prompts   → Gemini API → JSON → UI
                                    ↓ (on failure or no API key)
                              Fallback Generator → JSON → UI
```

- Main page + 3 API routes (review, appeal, roast) + 418 + 404 pages
- Output is always structured JSON regardless of source (AI or fallback)
- **Fallback is the real product** — the app works fully without an API key
- 5 reviewer personas with distinct prompt presets
- Appeal system: 3 escalation rounds with different Gemini system prompts
- Roast dashboard: fake enterprise metrics with AI explanations
- `appeal.ts` and `roast.ts` follow the same Gemini integration pattern as `ai.ts` (prompts → Gemini call → fallback on failure)
- Rate limiting: 10 requests/minute/IP (in-memory store) on all endpoints

### Persona IDs (use underscores)

- `guardian_core`
- `compliance_beast`
- `staff_engineer_of_doom`
- `ai_optimizer`
- `passive_aggressive_teammate`

---

## Workflow Rules

### On Every Prompt

1. **Read `MEMORY.md` first** to understand current state
2. Check what phase the project is in
3. Check what has been built vs what is pending
4. Do the requested work
5. **Update `MEMORY.md`** at the end with:
   - What was completed
   - Any new decisions made
   - Any new blockers or open questions
   - Updated checklist status
   - Updated "Last Updated" timestamp
6. **Never commit `.env.local`** — it contains the Gemini API key
7. **Always run `npm run build`** after making changes to verify nothing is broken

### Code Style

- TypeScript strict mode
- Functional React components with hooks
- Tailwind CSS v3 for all styling — no CSS modules or styled-components
- **Use the `guardian` color palette** defined in `tailwind.config.js` for any new UI (e.g., `bg-guardian-surface`, `text-guardian-accent`, `border-guardian-border`)
- Use Lucide React for icons
- Keep components small and focused
- Use `src/lib/types.ts` as the single source of truth for data shapes

### Guardian Color Palette

```
guardian-bg:      #0d1117   (page background)
guardian-surface: #161b22   (cards, panels)
guardian-border:  #30363d   (borders, dividers)
guardian-text:    #e6edf3   (primary text)
guardian-muted:   #8b949e   (secondary text)
guardian-accent:  #58a6ff   (links, highlights)
guardian-danger:  #f85149   (errors, blocked status)
guardian-warning: #d29922   (warnings)
guardian-success: #3fb950   (success indicators)
guardian-purple:  #bc8cff   (accents, tags)
```

### File Organization

- Components in `src/components/`
- API routes in `src/app/api/`
- Shared logic / data in `src/lib/`
- Types in `src/types/` and `src/lib/types.ts`

### Naming Conventions

- Components: PascalCase (`ReviewComments.tsx`)
- Utilities: camelCase (`fallback.ts`)
- Types: PascalCase for interfaces and types (`ReviewOutput`)
- Persona IDs: snake_case (`guardian_core`, `staff_engineer_of_doom`)
- API routes: kebab-case directories (`/api/review/`)
- CSS classes: Tailwind utility classes only — prefer `guardian-*` tokens

---

## Humor Guidelines

When writing copy, comments, or generating sample data:

### Do

- Sound plausibly corporate — like a real tool that went too far
- Reference real developer pain (splitting PRs, naming debates, blocking comments)
- Use invented metrics with false precision ("74% semantic drift detected")
- Make remediation steps elaborate and useless
- Keep it developer-relatable

### Don't

- Be purely random — structured parody, not chaos
- Be mean-spirited or target individuals
- Use offensive content
- Make jokes that require explaining

### Voice Examples

- "Enterprise merge intelligence"
- "Policy-aware review orchestration"
- "This function returns too quickly and may surprise compliance."
- "Please split this 4-line PR into smaller PRs for easier emotional review."
- "Merge blocked pending cross-functional trust alignment."

---

## AI Integration Rules

- All AI calls go through `src/lib/ai.ts`
- Model: `gemini-2.0-flash` via Google Generative AI SDK
- Always return `ReviewOutput` typed responses
- If AI fails for any reason, fall back to `src/lib/fallback.ts` — **this is expected, not an error**
- Never expose the API key to the client — it stays server-side in the API route
- Limit input to 5000 characters before sending to AI
- Target < 5s response time for AI generation
- Rate limiting: 10 requests/minute/IP via in-memory store in the API route

---

## Key Constraints

- **Budget: $0** — only free tiers
- **Time: 4 days** — prefer speed over perfection
- **Fallback is the real product** — app must work fully without an API key
- **Mobile responsive** — judges may test on phones
- **Tailwind v3** — do NOT use Tailwind v4 syntax or features

---

## Priority Order

When making trade-offs, prioritize in this order:

1. The joke lands fast (< 10 seconds to understand)
2. The UI looks polished and fake-serious
3. AI generates funny, structured output
4. Fallback works reliably
5. Code is clean and typed
6. Extra features and stretch goals
