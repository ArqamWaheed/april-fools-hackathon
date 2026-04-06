# MEMORY.md — MergeGuardian 9000

> **This file is the living memory for the project. It must be read at the start of every prompt and updated at the end of every session.**

---

## Last Updated

2026-04-06T15:22:00Z

---

## Project Summary

**MergeGuardian 9000** is a satirical web app for the DEV April Fools Challenge 2026. It is a fake AI pull-request review platform that blocks every merge for absurd, corporate-sounding reasons.

---

## Key Decisions Made

| Decision | Choice | Date |
|---|---|---|
| Project idea | MergeGuardian 9000 (AI PR reviewer that always blocks) | 2026-04-06 |
| Target prizes | Overall, Best Google AI Usage, Community Favorite | 2026-04-06 |
| Platform | Web app | 2026-04-06 |
| Stack | Next.js 14 + TypeScript + Tailwind + shadcn/ui + Gemini API | 2026-04-06 |
| Hosting | Vercel (free tier) | 2026-04-06 |
| AI provider | Google Gemini (gemini-2.0-flash) | 2026-04-06 |
| Budget | $0 (free tier only) | 2026-04-06 |
| Deadline | April 12, 2026 at 11:59 PM PT | 2026-04-06 |
| Build window | 4 days | 2026-04-06 |

---

## Current Phase

**Phase: Planning** — PRD and tech design created. No code yet.

---

## What Exists

| File | Purpose | Status |
|---|---|---|
| `research.md` | Challenge research, competitive analysis, idea brief | ✅ Complete |
| `PRD.md` | Product requirements document | ✅ Complete |
| `TECHDESIGN.md` | Technical design and architecture | ✅ Complete |
| `MEMORY.md` | This file — living project memory | ✅ Active |
| `.github/copilot-instructions.md` | Agent instructions for Copilot | ✅ Complete |

---

## What Needs To Be Built

### Day 1 (current)
- [ ] Scaffold Next.js project
- [ ] Build main PR layout (PRHeader, CodeInput, SamplePRSelector)
- [ ] Create sample PR data
- [ ] Create static fake review output to prove UI
- [ ] Set up Tailwind + shadcn/ui

### Day 2
- [ ] Build /api/review endpoint
- [ ] Integrate Gemini API with prompt builder
- [ ] Add reviewer persona switcher
- [ ] Add loading theater animation
- [ ] Render structured checks and comments

### Day 3
- [ ] Build fallback template generator
- [ ] Tune joke quality and comment bank
- [ ] Add rerun review flow
- [ ] Polish copy, branding, and visual details
- [ ] Add 418 easter egg

### Day 4
- [ ] Final polish and responsive testing
- [ ] Deploy to Vercel
- [ ] Capture screenshots and GIFs
- [ ] Write DEV submission post
- [ ] Submit

---

## Architecture Quick Reference

```
Browser → POST /api/review → Prompt Builder → Gemini API → JSON → UI
                                    ↓ (fallback)
                              Template Generator → JSON → UI
```

- Single page app, single API route
- Output is always `ReviewOutput` JSON regardless of source
- 5 reviewer personas with distinct prompt presets
- Fallback templates ensure demo works without API key

---

## Important Context

- The DEV April Fools Challenge is crowded with 418/teapot/coffee entries
- MergeGuardian 9000 plays in the less-crowded "developer tool satire" lane
- Top entries in the challenge combine: one-line premise + polished fake product + live demo + funny writeup
- The joke must land in under 10 seconds
- Writing quality is explicitly judged — the post matters as much as the app

---

## Open Questions

- None currently

---

## Blockers

- None currently
