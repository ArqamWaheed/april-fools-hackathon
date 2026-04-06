# MEMORY.md — MergeGuardian 9000

> **This file is the living memory for the project. It must be read at the start of every prompt and updated at the end of every session.**

---

## Last Updated

2026-04-07T01:00:00Z

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
| Stack | Next.js 14 + TypeScript + Tailwind v3 + Lucide React + Gemini API | 2026-04-06 |
| Hosting | Vercel (free tier) | 2026-04-06 |
| AI provider | Google Gemini (gemini-2.0-flash) | 2026-04-06 |
| Budget | $0 (free tier only) | 2026-04-06 |
| Deadline | April 12, 2026 at 11:59 PM PT | 2026-04-06 |
| Build window | 4 days | 2026-04-06 |

---

## Current Phase

**Phase: Building — Day 1 COMPLETE** — Full app scaffolded, all UI components built, build passes, API works.

---

## What Exists

| File | Purpose | Status |
|---|---|---|
| `research.md` | Challenge research, competitive analysis, idea brief | ✅ Complete |
| `PRD.md` | Product requirements document | ✅ Complete |
| `TECHDESIGN.md` | Technical design and architecture | ✅ Complete |
| `MEMORY.md` | This file — living project memory | ✅ Active |
| `.github/copilot-instructions.md` | Agent instructions for Copilot | ✅ Complete |
| `src/app/page.tsx` | Main page — orchestrates all components | ✅ Complete |
| `src/app/layout.tsx` | Root layout with dark mode, metadata | ✅ Complete |
| `src/app/globals.css` | Tailwind directives + custom animations | ✅ Complete |
| `src/app/api/review/route.ts` | POST endpoint — rate limiting, validation | ✅ Complete |
| `src/lib/types.ts` | All TypeScript interfaces | ✅ Complete |
| `src/lib/sample-prs.ts` | 5 sample PRs, 5 personas, loading stages | ✅ Complete |
| `src/lib/fallback.ts` | Fallback review generator (60+ jokes) | ✅ Complete |
| `src/lib/prompts.ts` | Gemini prompt builder per persona | ✅ Complete |
| `src/lib/ai.ts` | Gemini API integration with fallback | ✅ Complete |
| `src/components/PRHeader.tsx` | PR breadcrumb, title, labels | ✅ Complete |
| `src/components/CodeInput.tsx` | Code textarea with file tab | ✅ Complete |
| `src/components/SamplePRSelector.tsx` | Sample PR picker buttons | ✅ Complete |
| `src/components/ReviewerSwitcher.tsx` | Persona selector | ✅ Complete |
| `src/components/LoadingTheater.tsx` | Animated review pipeline steps | ✅ Complete |
| `src/components/VerdictCard.tsx` | Verdict display with persona | ✅ Complete |
| `src/components/CheckRunList.tsx` | Status checks list | ✅ Complete |
| `src/components/ReviewComments.tsx` | Inline review comments | ✅ Complete |
| `src/components/MergeBox.tsx` | Blocked merge box with disabled button | ✅ Complete |

---

## What's Done

### Day 1 ✅ COMPLETE
- [x] Scaffold Next.js project (manual setup — Next 14, TW v3)
- [x] Build all UI components (PRHeader, CodeInput, SamplePRSelector, ReviewerSwitcher, LoadingTheater, VerdictCard, CheckRunList, ReviewComments, MergeBox)
- [x] Create sample PR data (5 PRs, 5 personas, loading stages)
- [x] Build fallback template generator (60+ jokes)
- [x] Build prompt builder for Gemini
- [x] Build API route with rate limiting
- [x] Build Gemini AI integration with fallback
- [x] Build main page orchestrating everything
- [x] ✅ Build passes, API returns valid responses

## What Needs To Be Done

### Day 2 (next)
- [ ] Wire up Gemini API with real key (test with GEMINI_API_KEY env var)
- [ ] Test full flow end-to-end in browser
- [ ] Polish loading theater animation timing
- [ ] Add 418 easter egg page/response
- [ ] Improve visual polish and responsive design

### Day 3
- [ ] Tune joke quality — review all fallback comments
- [ ] Add rerun review flow improvements
- [ ] Polish copy, branding, and visual details
- [ ] Test across browsers/devices

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
