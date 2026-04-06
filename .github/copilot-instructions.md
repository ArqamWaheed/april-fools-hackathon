# Copilot Agent Instructions — MergeGuardian 9000

## Project Context

This is **MergeGuardian 9000**, a satirical web app for the DEV April Fools Challenge 2026. It is a fake AI pull-request review platform that blocks every merge for absurd, corporate-sounding reasons.

**Deadline:** April 12, 2026
**Stack:** Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui + Google Gemini API
**Hosting:** Vercel (free tier)

---

## Critical Files — Read These First

Before doing ANY work, read these files for full context:

1. **`MEMORY.md`** — Current project state, decisions, phase, and what needs building
2. **`PRD.md`** — Product requirements, features, humor guidelines, success criteria
3. **`TECHDESIGN.md`** — Architecture, types, API design, component specs, prompts
4. **`research.md`** — Challenge research, competitive analysis, submission strategy

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

### Code Style

- TypeScript strict mode
- Functional React components with hooks
- Tailwind CSS for all styling — no CSS modules or styled-components
- Use shadcn/ui patterns for Cards, Badges, Buttons where it speeds things up
- Keep components small and focused
- Use `src/lib/types.ts` as the single source of truth for data shapes

### File Organization

Follow the structure in `TECHDESIGN.md`:

- Components in `src/components/`
- API routes in `src/app/api/`
- Shared logic in `src/lib/`
- Static data in `src/data/`

### Naming Conventions

- Components: PascalCase (`ReviewDashboard.tsx`)
- Utilities: camelCase (`fallback.ts`)
- Types: PascalCase for interfaces and types (`ReviewOutput`)
- API routes: kebab-case directories (`/api/review/`)
- CSS classes: Tailwind utility classes only

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
- Always return `ReviewOutput` typed responses
- If AI fails for any reason, fall back to `src/lib/fallback.ts`
- Never expose the API key to the client
- Limit input to 5000 characters before sending to AI
- Target < 5s response time for AI generation

---

## Key Constraints

- **Budget: $0** — only free tiers
- **Time: 4 days** — prefer speed over perfection
- **Scope: 1 polished screen** — do not add pages or routing complexity
- **Fallback required** — app must work without AI key
- **Mobile responsive** — judges may test on phones

---

## Priority Order

When making trade-offs, prioritize in this order:

1. The joke lands fast (< 10 seconds to understand)
2. The UI looks polished and fake-serious
3. AI generates funny, structured output
4. Fallback works reliably
5. Code is clean and typed
6. Extra features and stretch goals
