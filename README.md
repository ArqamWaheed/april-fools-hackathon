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

- **Google Gemini AI Integration** — Uses `gemini-2.0-flash` to generate contextually absurd reviews based on your actual code
- **80+ Curated Fallback Jokes** — The app works perfectly without an API key via a handcrafted template engine
- **Loading Theater** — A dramatic 12-stage CI/CD pipeline animation ("Validating emotional idempotency…")
- **7 Sample PRs** — Pre-loaded examples from "fix typo" to "implement entire todo app"
- **Share Your Rejection** — One-click Twitter sharing of your block reason
- **Easter Eggs** — Visit `/418` for a teapot surprise 🫖
- **Keyboard Shortcuts** — `Ctrl+Enter` to submit/reset

## 🚀 Live Demo

**[mergeguardian9000.vercel.app](https://mergeguardian9000.vercel.app)**

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 |
| AI | Google Gemini API (`gemini-2.0-flash`) |
| Icons | Lucide React |
| Deployment | Vercel |

## 🏗️ Architecture

```
Browser → POST /api/review → Prompt Builder → Gemini API → JSON → UI
                                    ↓ (on error/no key)
                              Fallback Generator → JSON → UI
```

- **Single API route** (`/api/review`) — rate-limited (10 req/min/IP)
- **Dual generation paths** — Gemini AI for context-aware reviews, deterministic fallback for reliability
- **Per-persona prompts** — Each reviewer persona has tailored system prompts
- **Structured JSON output** — Gemini returns typed `ReviewOutput` via `responseMimeType: "application/json"`

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

Get a free API key at [aistudio.google.com](https://aistudio.google.com/).

> **Note:** The app works fully without an API key — the fallback generator produces equally hilarious reviews.

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

## 📁 Project Structure

```
src/
├── app/
│   ├── api/review/route.ts    # API endpoint with rate limiting
│   ├── 418/page.tsx           # 🫖 Easter egg
│   ├── not-found.tsx          # Custom 404
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main page
│   └── globals.css            # Tailwind + animations
├── components/
│   ├── PRHeader.tsx           # PR breadcrumb & labels
│   ├── CodeInput.tsx          # Code editor with line numbers
│   ├── SamplePRSelector.tsx   # Sample PR picker
│   ├── ReviewerSwitcher.tsx   # Persona selector
│   ├── LoadingTheater.tsx     # CI/CD pipeline animation
│   ├── VerdictCard.tsx        # Review verdict display
│   ├── CheckRunList.tsx       # Status checks
│   ├── ReviewComments.tsx     # Inline review comments
│   └── MergeBox.tsx           # Blocked merge box
└── lib/
    ├── types.ts               # TypeScript interfaces
    ├── sample-prs.ts          # Sample data & personas
    ├── fallback.ts            # Fallback generator (80+ jokes)
    ├── prompts.ts             # Gemini prompt builder
    └── ai.ts                  # Gemini API integration
```

## 🤖 How It Works

1. **You paste code** (or pick a sample PR)
2. **Choose a reviewer persona** — each has distinct blocking patterns
3. **Hit "Request Review"** — the Guardian "analyzes" your code
4. **Watch the Loading Theater** — 12 dramatic pipeline stages animate
5. **Receive your rejection** — verdict, block reason, status checks, inline comments, and a permanently disabled merge button

The Gemini AI integration reads your actual code and PR title to generate contextually relevant (but still absurd) reviews. Without an API key, the fallback engine uses 80+ handcrafted jokes across 5 categories.

## 🎭 Sample Block Reasons

- *"Code compiles, tests pass, but the universe has not consented."*
- *"Naming convention rejected by the Council of Elders."*
- *"This PR would set a precedent for productivity. Denied."*
- *"Variable naming confidence exceeds departmental humility threshold."*
- *"LGTM detected in prior review. Triggering automatic escalation."*

## 📜 License

MIT — because even rejected code deserves freedom.

## 🏆 DEV April Fools Challenge 2026

This project was built for the [DEV April Fools Challenge](https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa). It targets:

- 🏅 **Overall Best** — Most entertaining anti-useful app
- 🤖 **Best Google AI Usage** — Gemini API integration for contextual humor
- ❤️ **Community Favorite** — Relatable developer pain, shareable rejections

---

*No code was actually reviewed in the making of this application. Approval rate: 0.00%.*
