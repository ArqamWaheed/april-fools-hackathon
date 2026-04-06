# MEMORY.md — MergeGuardian 9000

> **This file is the living memory for the project. It must be read at the start of every prompt and updated at the end of every session.**

---

## Last Updated

2026-04-06T16:00:00Z

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

**Phase: Building — Day 2 COMPLETE** — Visual polish, 418 easter egg, responsive design, share flow, review counter.

---

## What Exists

| File | Purpose | Status |
|---|---|---|
| `research.md` | Challenge research, competitive analysis, idea brief | ✅ Complete |
| `PRD.md` | Product requirements document | ✅ Complete |
| `TECHDESIGN.md` | Technical design and architecture | ✅ Complete |
| `MEMORY.md` | This file — living project memory | ✅ Active |
| `.github/copilot-instructions.md` | Agent instructions for Copilot | ✅ Complete |
| `src/app/page.tsx` | Main page — orchestrates all components | ✅ Polished |
| `src/app/layout.tsx` | Root layout with dark mode, metadata, emoji favicon | ✅ Polished |
| `src/app/globals.css` | Tailwind directives + animations + scrollbar + selection | ✅ Polished |
| `src/app/api/review/route.ts` | POST endpoint — rate limiting, validation | ✅ Complete |
| `src/app/418/page.tsx` | 🫖 Easter egg teapot page (RFC 2324) | ✅ NEW |
| `src/app/not-found.tsx` | Custom 404 page with on-brand humor | ✅ NEW |
| `src/lib/types.ts` | All TypeScript interfaces | ✅ Complete |
| `src/lib/sample-prs.ts` | 5 sample PRs, 5 personas, loading stages | ✅ Complete |
| `src/lib/fallback.ts` | Fallback review generator (60+ jokes) | ✅ Complete |
| `src/lib/prompts.ts` | Gemini prompt builder per persona | ✅ Complete |
| `src/lib/ai.ts` | Gemini API integration with fallback | ✅ Complete |
| `src/components/PRHeader.tsx` | PR breadcrumb, title, labels | ✅ Complete |
| `src/components/CodeInput.tsx` | Code textarea with file tab | ✅ Complete |
| `src/components/SamplePRSelector.tsx` | Sample PR picker buttons | ✅ Complete |
| `src/components/ReviewerSwitcher.tsx` | Persona selector with descriptions | ✅ Polished |
| `src/components/LoadingTheater.tsx` | Animated pipeline with progress bar | ✅ Polished |
| `src/components/VerdictCard.tsx` | Verdict display with persona | ✅ Complete |
| `src/components/CheckRunList.tsx` | Status checks list | ✅ Complete |
| `src/components/ReviewComments.tsx` | Inline review comments | ✅ Complete |
| `src/components/MergeBox.tsx` | Blocked merge box with rotating messages | ✅ Polished |

---

## What's Done

### Day 1 ✅ COMPLETE
- [x] Scaffold Next.js project (manual setup — Next 14, TW v3)
- [x] Build all UI components
- [x] Create sample PR data (5 PRs, 5 personas, loading stages)
- [x] Build fallback template generator (60+ jokes)
- [x] Build prompt builder for Gemini
- [x] Build API route with rate limiting
- [x] Build Gemini AI integration with fallback
- [x] Build main page orchestrating everything

### Day 2 ✅ COMPLETE
- [x] Test full flow end-to-end (all 5 personas verified)
- [x] Polish loading theater (progress bar, percentage, final delay)
- [x] Add 418 teapot easter egg page (/418 route)
- [x] Add custom 404 page with on-brand humor
- [x] Visual polish: warning banner, review counter, review metadata
- [x] Responsive design: grid persona selector, sm breakpoints throughout
- [x] Share rejection button (Twitter intent link)
- [x] Enhanced CSS: custom scrollbar, selection color, focus rings
- [x] Emoji favicon (🛡️), improved OG/Twitter meta tags
- [x] Reviewer persona descriptions shown on selection
- [x] Merge box rotating disabled button messages
- [x] GitHub repo link in header
- [x] Build passes ✅

## What Needs To Be Done

### Day 3 (next)
- [ ] Tune joke quality — review all fallback comments
- [ ] Add more sample PRs or improve existing ones
- [ ] Add rerun review flow improvements
- [ ] Polish copy, branding, and visual details
- [ ] Test across browsers/devices
- [ ] Consider adding keyboard shortcuts (Ctrl+Enter to submit)

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
