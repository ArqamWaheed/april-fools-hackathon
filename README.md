# 🛡️ MergeGuardian 9000

**The AI-powered code review platform that blocks every merge — for your own good.**

> *"Your code compiles, tests pass, but the universe has not consented."*

MergeGuardian 9000 is an enterprise-grade AI pull request review platform with a **0.00% approval rate**. Paste your code, select a reviewer persona, and watch as the Guardian finds profoundly absurd reasons to block your merge.

Built for the [DEV April Fools Challenge 2026](https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa).

## ✨ Features

- **5 Reviewer Personas** — Each with a unique personality and blocking style:
  - 🛡️ **Guardian Core** — Senior Review Orchestrator
  - 📋 **Compliance Beast** — Chief Policy Enforcement Officer
  - 💀 **Staff Engineer of Doom** — Principal Taste Architect
  - 🤖 **AI Optimizer** — Metrics & Confidence Analyst
  - 😊 **Passive-Aggressive Teammate** — Friendly Neighborhood Blocker

- **Google Gemini AI Integration** — Uses `gemini-2.0-flash` across 3 endpoints with 8+ system prompts for contextually absurd reviews, appeal denials, and code roasts
- **Bring Your Own Key** — Paste your Gemini API key directly in the UI (stored in localStorage, never leaves your browser). Grab a free key from [Google AI Studio](https://aistudio.google.com/apikey)
- **80+ Curated Fallback Jokes** — The app works perfectly without an API key via a handcrafted template engine
- **Google Cloud Run Ready** — Includes Dockerfile and `cloudbuild.yaml` for one-command deploy to Cloud Run
- **Appeal System** — 3-round escalation where users appeal merge blocks (bureaucratic → philosophical → existential). Always denied with escalating officer titles.
- **Code Roast Dashboard** — Fake enterprise code quality metrics with SVG gauge, grade cards, and AI-powered confidence statements
- **Loading Theater** — A dramatic 12-stage CI/CD pipeline animation ("Validating emotional idempotency…")
- **10 Sample PRs** — Pre-loaded examples from "fix typo" to "vibe-coding" to "blockchain-based approval"
- **Share Your Rejection** — One-click Twitter sharing of your block reason
- **Easter Eggs** — Visit `/418` for an enhanced teapot experience with ASCII art, animated steam, and RFC 2324 quotes 🫖
- **Keyboard Shortcuts** — `Ctrl+Enter` to submit/reset
- **Gemini AI Badges** — Visible in VerdictCard and MergeBox components

## 🚀 Live Demo

**[mergeguardian9000.vercel.app](https://mergeguardian9000.vercel.app)**

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 (custom `guardian` color palette) |
| AI | Google Gemini API (`gemini-2.0-flash`) — 3 endpoints, 8+ system prompts |
| AI Tooling | Google AI Studio (prompt prototyping), Gemini CLI (terminal testing) |
| Icons | Lucide React |
| Deployment | Vercel (live demo) + Google Cloud Run (Dockerfile + Cloud Build config) |

## 🏗️ Architecture

```
Browser → POST /api/review  → Prompt Builder  → Gemini API → JSON → UI
Browser → POST /api/appeal  → Appeal Prompts  → Gemini API → JSON → UI
Browser → POST /api/roast   → Roast Prompts   → Gemini API → JSON → UI
                                     ↓ (on error/no key)
                               Fallback Generator → JSON → UI
```

- **3 API routes** — `/api/review` (review), `/api/appeal` (appeal escalation), `/api/roast` (code roast) — all rate-limited (10 req/min/IP)
- **Dual generation paths** — Gemini AI for context-aware output, deterministic fallback for reliability
- **Per-persona prompts** — Each reviewer persona has tailored system prompts
- **Appeal escalation** — 3 rounds with increasingly absurd Gemini system prompts (bureaucratic → philosophical → existential)
- **Roast engine** — Generates fake enterprise metrics, grades, and AI confidence statements
- **Structured JSON output** — Gemini returns typed responses via `responseMimeType: "application/json"`

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/ArqamWaheed/april-fools-hackathon.git
cd april-fools-hackathon
npm install
```

### Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:
```
GEMINI_API_KEY=your_key_here
```

Get a free API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey).

> **Note:** You can also paste your API key directly in the UI — no `.env` file needed. The key stays in `localStorage` and never leaves your browser. The app works fully without any API key via the fallback generator.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Deploy to Google Cloud Run

```bash
# Requires gcloud CLI authenticated with a GCP project
gcloud builds submit --config cloudbuild.yaml
```

The included `Dockerfile` and `cloudbuild.yaml` handle the multi-stage build and deployment automatically. Cloud Run's free tier covers 2 million requests/month.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/review/route.ts    # API endpoint with rate limiting
│   ├── api/appeal/route.ts    # Appeal escalation endpoint
│   ├── api/roast/route.ts     # Code roast endpoint
│   ├── 418/page.tsx           # 🫖 Enhanced easter egg (ASCII teapot, steam)
│   ├── not-found.tsx          # Custom 404
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main page
│   └── globals.css            # Tailwind + animations + steam keyframes
├── components/
│   ├── PRHeader.tsx           # PR breadcrumb & labels
│   ├── CodeInput.tsx          # Code editor with line numbers
│   ├── SamplePRSelector.tsx   # Sample PR picker
│   ├── ApiKeyInput.tsx        # Gemini API key input (localStorage)
│   ├── ReviewerSwitcher.tsx   # Persona selector
│   ├── LoadingTheater.tsx     # CI/CD pipeline animation
│   ├── VerdictCard.tsx        # Review verdict display + Gemini badge
│   ├── CheckRunList.tsx       # Status checks
│   ├── ReviewComments.tsx     # Inline review comments
│   ├── MergeBox.tsx           # Blocked merge box + Gemini badge
│   ├── AppealFlow.tsx         # 3-round appeal escalation UI
│   └── RoastDashboard.tsx     # Code quality roast with fake metrics
└── lib/
    ├── types.ts               # TypeScript interfaces
    ├── sample-prs.ts          # 10 sample PRs & personas
    ├── fallback.ts            # Fallback generator (80+ jokes)
    ├── prompts.ts             # Gemini prompt builder
    ├── ai.ts                  # Gemini API integration (review)
    ├── appeal.ts              # Appeal system (prompts, fallback, Gemini)
    └── roast.ts               # Roast dashboard (prompts, fallback, Gemini)
```

## 🤖 How It Works

1. **You paste code** (or pick a sample PR)
2. **Choose a reviewer persona** — each has distinct blocking patterns
3. **Hit "Request Review"** — the Guardian "analyzes" your code
4. **Watch the Loading Theater** — 12 dramatic pipeline stages animate
5. **Receive your rejection** — verdict, block reason, status checks, inline comments, and a permanently disabled merge button

The Gemini AI integration reads your actual code and PR title to generate contextually relevant (but still absurd) reviews. Without an API key, the fallback engine uses 80+ handcrafted jokes across 5 categories.

### Appeal Escalation

After receiving your rejection, you can appeal — but it only makes things worse. The 3-round appeal system uses different Gemini system prompts at each level:

1. **Round 1** — Bureaucratic denial (Junior Compliance Intern)
2. **Round 2** — Philosophical rejection (Senior Ethics Arbiter)
3. **Round 3** — Existential crisis (Chief Existential Officer)

### Code Roast Dashboard

Request a "code quality assessment" and receive fake enterprise metrics: an SVG quality gauge, letter grades for arbitrary categories, and an AI-generated confidence statement that sounds authoritative but means nothing.

## 🎭 Sample Block Reasons

- *"Code compiles, tests pass, but the universe has not consented."*
- *"Naming convention rejected by the Council of Elders."*
- *"This PR would set a precedent for productivity. Denied."*
- *"Variable naming confidence exceeds departmental humility threshold."*
- *"LGTM detected in prior review. Triggering automatic escalation."*

### 🗣️ Sample Appeal Denials

- *"Your appeal has been reviewed by the Junior Compliance Intern. The original decision stands, pending quarterly realignment."*
- *"The Senior Ethics Arbiter has determined that merging this code raises unresolved ontological questions."*
- *"The Chief Existential Officer has stared into the void on your behalf. The void said no."*

## 📜 License

MIT — because even rejected code deserves freedom.

## 🏆 DEV April Fools Challenge 2026

This project was built for the [DEV April Fools Challenge](https://dev.to/challenges/aprilfools-2026). It targets:

- 🏅 **Overall Best** — Most entertaining anti-useful app
- 🤖 **Best Google AI Usage** — 3 Gemini endpoints, 8+ system prompts, structured JSON, AI Studio prototyping, Gemini CLI testing, Cloud Run deployment, BYOK with AI Studio link, all on the free tier
- 🫖 **Best Ode to Larry Masinter** — Enhanced `/418` teapot page with ASCII art, animated steam, and RFC 2324 tribute
- ❤️ **Community Favorite** — Relatable developer pain, shareable rejections

---

*No code was actually reviewed in the making of this application. Approval rate: 0.00%.*
