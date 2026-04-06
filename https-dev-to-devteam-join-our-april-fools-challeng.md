# DEV April Fools Challenge Research and Prize-Maximizing Idea Deck

## Executive Summary

The challenge explicitly rewards four things: **delightful uselessness**, **creativity**, **technical execution**, and **writing quality**.[^1] The strongest current entries are not just random jokes; they are polished, interactive, easy-to-explain products with a one-sentence premise and a writeup that commits hard to the bit.[^2][^3][^4][^5][^6]

The field is currently crowded in two lanes: **HTCPCP / 418 / teapot tributes** and **anti-productivity / anti-UX apps**.[^2][^3][^7][^8][^9][^10][^11] That means your best odds are likely in one of two strategies: either build a **more original hybrid** that can compete for Overall + Best Google AI Usage + Community Favorite, or build an **exceptionally differentiated Larry Masinter tribute** that does something the teapot cluster is not already doing.[^1][^2][^3][^7][^15]

If your goal is to maximize prize probability rather than just make something funny, the sweet spot is: **instantly understandable joke + strong interaction loop + surprising technical overkill + very polished writeup + clear category targeting**.[^1][^2][^4][^5][^12][^13][^14]

## Challenge Criteria and Prize Structure

### Judging criteria

The official judging criteria are:

1. **Anti-Value Proposition**: how useless, silly, or over-engineered the project is.[^1]
2. **Creativity**: whether the concept is original or a hilariously bad take on a familiar problem.[^1]
3. **Technical Execution**: whether it is functional in its dysfunction.[^1]
4. **Writing Quality**: whether the submission tells a clear, funny, compelling story.[^1]

### Prize categories

There are **five winner slots** total: two overall winners, plus one winner each for **Best Google AI Usage**, **Best Ode to Larry Masinter**, and **Community Favorite**.[^1] Each winner receives a surprise teapot or coffee maker, DEV++ membership, and an exclusive DEV badge, while all valid submissions receive a completion badge.[^1]

### Strategic implication

Because there are separate category prizes, you do **not** need the single funniest project in the whole contest. You need a project that is tightly optimized for at least one prize lane, while remaining strong enough to be considered for overall.[^1]

## What the Current Top Entries Suggest

## Pattern 1: “Fake serious product” beats “just a prank”

The best entries present themselves like legitimate, over-funded software products. **BrewOps** frames a joke RFC implementation as enterprise infrastructure with observability, SLA language, dashboards, incident timelines, and attack detection.[^2] **Fourbidden** turns `2+2` into a full AI workflow with legal steps, widgets, and process theater.[^7] **Can You Center This Div?** wraps a trivial premise in a JARVIS-style HUD, live leaderboard, real-time metrics, and share cards.[^14]

**Takeaway:** a convincing fake product wrapper appears to score very well because it boosts both creativity and technical execution.[^1][^2][^7][^14]

## Pattern 2: The joke must be legible in one sentence

The strongest entries can be explained immediately:

- Brew coffee with a real HTCPCP server and get 418’d by teapots.[^2]
- Finish a to-do by beating expert Minesweeper; fail and the task duplicates 20 times.[^3]
- Solve `2+2`, but the app keeps adding process instead of answers.[^7]
- Try to center a div with an impossible threshold.[^14]
- Blink while coding and your editor sabotages your code.[^13]

**Takeaway:** you want a premise that is tweet-length, demo-friendly, and funny before the user reads the implementation details.[^2][^3][^7][^13][^14]

## Pattern 3: Strong live demos matter

Many standout submissions provide a live demo and make the interaction itself part of the humor: BrewOps has a multiplayer dashboard and curlable public endpoint; AdTube invites users to suffer through dark patterns; Center This Div has a leaderboard and sharing loop; the stress-coding editor is playable in-browser.[^2][^12][^14][^13]

**Takeaway:** if the joke only exists in prose, you are weaker. If users can experience the absurdity in seconds, you have better odds at both judge attention and Community Favorite.[^1][^2][^12][^14]

## Pattern 4: Larry Masinter / 418 is crowded

Several top entries explicitly target the teapot angle: **BrewOps**, **Depresso-Tron 418**, and **I Built a Coffee Brewer That Is Legally Required to Refuse Your Coffee** are all direct HTCPCP / 418 tributes, while other entries include 418 easter eggs or teapot references in a lighter way.[^2][^8][^15][^9][^10][^12][^14]

**Takeaway:** if you chase Best Ode to Larry Masinter, you are entering a crowded lane. You probably need either a much stronger implementation, a more novel protocol interpretation, or a completely different kind of homage than “yet another coffee/teapot app.”[^2][^8][^15]

## Pattern 5: Google AI usage wins when it is structural, not decorative

The challenge asks entrants to explain how they used Google AI, including Gemini CLI, Google AI Studio, Gemini API, or Google Cloud products.[^1] The stronger Google AI contenders use AI as part of the core mechanism: Fourbidden uses Gemini across multiple endpoints to generate different layers of nonsense; Proof of Work uses Gemini to generate demotivational content; Depresso-Tron uses Gemini as the hostile barista persona; Quantum Collapse used Gemini tooling heavily in ideation and delivery, plus Cloud Run deployment.[^7][^3][^8][^13]

By contrast, some entries mention AI more lightly, such as ideation or asset generation, which is less compelling as a category bid.[^12][^9]

**Takeaway:** if you want Best Google AI Usage, make AI indispensable to the user-facing joke and say exactly how it shaped behavior.[^1][^3][^7][^8][^13]

## Pattern 6: The writeup is part of the product

The contest explicitly judges writing quality.[^1] The strongest posts are funny even without the demo because the authorial voice is confident and specific. BrewOps uses SRE and RFC language throughout; Proof of Work leans into anti-productivity philosophy and “Hydra Engine” terminology; Fourbidden sells the joke with product-satire language; Center This Div turns precision metrics into theatrical copy.[^2][^3][^7][^14]

**Takeaway:** plan the post as seriously as the app. A mediocre app with an excellent story may beat a better app with weak narration because writing is literally a judging category.[^1]

## Competitive Landscape Summary

| Cluster | Current strength | Evidence | Implication |
|---|---|---|---|
| HTCPCP / 418 / teapot | Very crowded, high polish | BrewOps, Depresso-Tron, coffee brewer refusal, plus many 418 callbacks.[^2][^8][^15][^9][^10][^12][^14] | Hard to win unless unusually original or technically extreme. |
| Anti-productivity / anti-UX | Crowded but still fertile | Proof of Work, hateful login, Do Not Type, AdTube.[^3][^10][^9][^12] | Good lane if you find a new mechanic, not just “UI fights back.” |
| AI product satire | Strong and relatively open | Fourbidden, Confidently Wrong AI, Quantum Collapse, PureSlop.[^7][^6][^13][^4] | Likely best lane for Overall + Google AI if execution is strong. |
| Precision / impossible challenge games | Less crowded, high shareability | Center This Div is the clearest example.[^14] | Good Community Favorite angle if the game is instantly replayable. |
| Literalism / loophole humor | Underrepresented but promising | I Want To Be... is a simple, strong example.[^5] | Good space for originality if you find a better interaction loop. |

## Best Prize-Maximizing Strategy

## My recommendation: optimize for **Overall + Best Google AI Usage + Community Favorite**, not Larry-first

A Larry-first strategy faces the densest competition because several standout entries are already fully committed HTCPCP implementations with polished lore, public demos, and real protocol mechanics.[^2][^8][^15] In contrast, the “AI product satire with interactive suffering” lane still has more room for novel concepts, especially if the AI is central rather than ornamental.[^6][^7][^13]

### Best strategic shape

Build something that is:

- **Immediately legible** in one sentence.[^2][^3][^7][^14]
- **Interactive in under 10 seconds** so judges instantly get the joke.[^2][^12][^14]
- **Technically overbuilt** in a way that is visible to the audience.[^2][^3][^7][^14]
- **AI-dependent** if you want the Google AI prize.[^1][^7][^8]
- **Narratively rich** so the post can carry it.[^1][^2][^3][^7]
- **Shareable or replayable** for Community Favorite.[^1][^12][^14]

### Best tactical move

Instead of making “a website that annoys people,” make **a fake serious system with a ridiculous internal process**. That framing is repeatedly working in top entries.[^2][^3][^7][^14]

## White Space: what seems underexploited

These angles appear comparatively open across the current top entries:

1. **Multi-user sabotage**: most projects are solo experiences; fewer turn other users into part of the joke.[^2][^12][^14]
2. **Team / workplace satire beyond login annoyance**: Quantum Collapse touches remote-work surveillance, but there is room for fake enterprise platforms, performance reviews, compliance, procurement, etc.[^13]
3. **Physical-world absurdity outside coffee**: coffee is crowded; other protocols or fake operational tools are less saturated.[^2][^8][^15]
4. **AI as ritual bureaucracy**: Fourbidden is the best example, but this theme has plenty of room.[^7]
5. **Socially contagious mechanics**: Center This Div shows shareability; more projects could weaponize invites, rankings, or collaborative failure.[^14]
6. **Ridiculously specific generators** with better interaction loops: Confidently Wrong AI and I Want To Be... show the appeal of quick-response tools, but neither fully weaponizes virality or replay depth.[^6][^5]

## High-Potential Concept Directions

## Tier S: strongest overall prize potential

### 1. **ProcureGPT: the AI purchase approval system that can never approve anything**

**Premise:** you ask to buy a tiny item like a pen or USB cable; the system spins up policy checks, legal reviews, carbon audits, stakeholder alignment, and AI-generated risk memos until your request expires.

**Why it fits:** It is instantly legible, easy to make interactive, rich in corporate satire, perfect for AI-generated nonsense, and not trapped in the overused teapot lane.[^1][^7][^13]

**Best categories:** Overall, Best Google AI Usage, Community Favorite.

**Potential:** **S**

### 2. **StandupOS: a daily standup tool that creates more blockers than it removes**

**Premise:** every update you submit spawns AI-generated follow-up tasks, alignment questions, Jira tickets, and calendar invites until your whole day is consumed by reporting progress.

**Why it fits:** anti-productivity is proven, but this is fresher than “hostile login” or “can’t type.” It is highly relatable to developers and offers strong writing material.[^3][^9][^10][^13]

**Best categories:** Overall, Best Google AI Usage, Community Favorite.

**Potential:** **S**

### 3. **InterviewLoop.ai: the coding interview simulator that never reaches the coding round**

**Premise:** users try to get hired, but the platform keeps inventing new screenings, culture screens, take-homes, references, and personality recalibrations without ever opening the editor.

**Why it fits:** dev audience relatability is extremely high, the fake-enterprise layer can be polished, and AI can drive the escalating absurdity.[^1][^7][^13]

**Best categories:** Overall, Best Google AI Usage, Community Favorite.

**Potential:** **S**

### 4. **MergeGuardian 9000: an AI PR bot that blocks every pull request for spiritually inadequate reasons**

**Premise:** paste code or a fake diff, and the system generates devastating but useless review comments like “this function lacks emotional rollback safety” or “variable naming fails our lunar accessibility standard.”

**Why it fits:** AI satire plus dev-tool parody is strong, quick to demo, and very shareable if users can paste snippets and share absurd reviews.[^4][^6][^7]

**Best categories:** Overall, Best Google AI Usage, Community Favorite.

**Potential:** **S**

### 5. **Latency as a Service: a premium API that only adds delay**

**Premise:** an “edge optimization” platform whose sole function is to slow any request with dashboards, regions, SLAs, and premium lag tiers.

**Why it fits:** perfect fake serious product energy, highly demoable, strong infra satire, and extensible into a very polished landing page + dashboard + API combo.[^2][^14]

**Best categories:** Overall, Community Favorite.

**Potential:** **S-**

## Tier A: strong category contenders

### 6. **CalendarCollapse: scheduling one 15-minute meeting causes a combinatorial meeting explosion**

**Premise:** pick a meeting time and watch the tool recursively create pre-reads, pre-pre-reads, debriefs, alignment syncs, and retrospective meetings.

**Best categories:** Overall, Community Favorite.

**Potential:** **A**

### 7. **BugBountyBureau: report one bug, get trapped in a compliance maze**

**Premise:** a fake bug submission portal that demands 47 impossible reproductions, notarized screenshots, legal attestations, and browser recordings of your browser recording itself.

**Best categories:** Overall, Best Google AI Usage.

**Potential:** **A**

### 8. **Prompt OSHA: an AI safety checker that rejects prompts for unsafe levels of clarity**

**Premise:** users submit prompts, and the system blocks them for lacking ambiguity, whimsy, ritual disclaimers, or sufficient metaphysical uncertainty.

**Best categories:** Best Google AI Usage, Community Favorite.

**Potential:** **A**

### 9. **Git Blame Dungeon: every blame click reveals a deeper older ancestor and worse excuse**

**Premise:** paste a repo snippet and descend through fictional blame history, each layer more cursed than the last.

**Best categories:** Community Favorite.

**Potential:** **A**

### 10. **Terms-and-Conditions-as-a-Service**

**Premise:** upload a tiny action like “set a reminder,” and the service generates 84 pages of AI-generated compliance text before allowing you to proceed.

**Best categories:** Best Google AI Usage.

**Potential:** **A**

### 11. **Productivity CAPTCHA**

**Premise:** to mark one task done, you must prove you are productive by passing absurd tests: aligning calendars, estimating Fibonacci numbers emotionally, or recognizing which stock photo “looks most synergistic.”

**Best categories:** Overall, Community Favorite.

**Potential:** **A**

### 12. **RFC 2324 but for something nobody else picked**

**Premise:** instead of coffee again, build a fake standards-compliant control plane for an adjacent or entirely invented appliance, protocol, or process.

**Best categories:** Best Ode to Larry Masinter.

**Potential:** **A** if truly novel, **C** if it is another coffee dashboard.

## Tier B: good but needs excellent execution

### 13. **404 Dating App**

Every profile is algorithmically incompatible for reasons that sound data-driven.

**Potential:** **B+**

### 14. **NoCode Divorce Generator**

Builds enterprise architecture diagrams to explain why two ideas are no longer aligned.

**Potential:** **B**

### 15. **Agile Tarot**

Sprint planning using tarot cards, velocity horoscopes, and burndown omens.

**Potential:** **B+**

### 16. **CI/CD but the C stands for Confusion**

Upload a project and receive a theatrical pipeline that never ships but reports green status.

**Potential:** **B+**

### 17. **Premium Loading Spinner**

A SaaS whose only feature is more prestigious loading states, complete with enterprise plan tiers.

**Potential:** **B**

### 18. **AI Rubber Duck that gaslights you**

It listens to your bug explanation and concludes the code was already correct until you emotionally destabilize.

**Potential:** **B+**

### 19. **Password Manager for Passwords You Will Forget on Purpose**

It generates mnemonic stories so strange they erase the original password from your brain.

**Potential:** **B**

### 20. **Cloud Cost Dashboard for Imaginary Infrastructure**

Tracks spend for whimsical resources like unused side projects, abandoned tabs, and emotional technical debt.

**Potential:** **B+**

## Tier C: funny, but riskier for prizes

### 21. **Cursor Repellent Text Area**

Too close to existing hostile-input entries unless the mechanic is reinvented.[^9][^10]

**Potential:** **C**

### 22. **Another 418 coffee thing**

Too crowded unless the twist is spectacularly different.[^2][^8][^15]

**Potential:** **C**

### 23. **Random bad ads generator**

Already partially covered by Confidently Wrong AI unless materially deeper.[^6]

**Potential:** **C**

### 24. **Another impossible precision game**

Center This Div already occupies this lane strongly.[^14]

**Potential:** **C**

### 25. **A generic anti-YouTube clone**

AdTube is already polished in that niche.[^12]

**Potential:** **C**

## Broad Idea Bank

Below is a broader list optimized for quantity and concept coverage.

| Idea | One-line pitch | Best category | Potential |
|---|---|---|---|
| ProcureGPT | Buy a stapler, trigger enterprise procurement armageddon | Overall / Google AI | S |
| StandupOS | Daily standup generates more work than work | Overall / Google AI | S |
| InterviewLoop.ai | Infinite hiring funnel with no interview | Overall / Google AI | S |
| MergeGuardian 9000 | AI PR bot rejects code for mystical reasons | Overall / Google AI | S |
| Latency as a Service | API gateway that monetizes slowness | Overall | S- |
| CalendarCollapse | Schedule one meeting, create 40 | Community | A |
| BugBountyBureau | Report a bug, become the bug | Overall / Google AI | A |
| Prompt OSHA | Rejects prompts for insufficient ambiguity | Google AI | A |
| Productivity CAPTCHA | Prove you deserve to finish your task | Overall | A |
| SyncSync | A meeting platform to coordinate future meetings | Community | A |
| Jira Necromancer | Closed tickets resurrect with commentary | Community | A |
| AI Exit Interview | Quitting triggers sentiment analysis and retention theater | Google AI | A |
| Compliance Karaoke | You must sing your privacy policy to continue | Community | B+ |
| RFC for Leftovers | Appliance protocol for microwaving disappointment | Larry | B+ |
| Agile Tarot | Sprint planning by occult divination | Community | B+ |
| Semantic Zoom Apology Generator | Corporate apologies that get less specific as you zoom in | Community | B |
| Cloud Cost Seance | Detect costs from dead startups | Community | B+ |
| Cache Miss Café | Barista only serves stale coffee faster | Larry / Overall | B |
| Error Budget Dating | Relationship app with SLOs and outage postmortems | Community | B |
| PagerDuty for Houseplants | Alerts you after the plant already died | Community | B |
| Keyboard Performance Review | Your keystrokes get quarterly ratings | Overall | A |
| DocuSign Dungeon | One signature requires eight rituals | Community | A |
| Figma-to-Nothing | Design-to-production tool that outputs vibes | Overall | B+ |
| AI Refactor Tribunal | Every refactor request becomes a hearing | Google AI | A |
| Emotional Load Balancer | Routes your stress to the busiest teammate | Community | B+ |
| Cache-Control: no-self-esteem | Browser devtools for personal confidence | Community | B |
| Infinite Undo | Every undo creates two new mistakes | Overall | A |
| DevRel Bot Farm | Auto-generates heartfelt conference enthusiasm | Community | B |
| PTO Request Miner | Vacation request must be mined like crypto | Overall | A |
| Pair Programming Escape Room | Two users must sabotage each other to proceed | Community | A |
| AI Product Vision Board | Turns simple app ideas into impossible startup decks | Google AI | A |
| Benchmark Olympics | Compete to optimize the wrong metric | Community | B+ |
| Accessibility Anti-Checker | Rates apps by how inaccessible they can become | Risky / not recommended | D |
| Merge Conflict Matchmaker | Auto-generates soulmates from conflicting branches | Community | B |
| Postmortem Composer | Turns tiny bugs into operatic incident reports | Community | A |
| Middleware Middleware | A framework for adding layers to middleware | Overall | B+ |

## If you want the single best odds: top 5 recommendations

### Option A — **ProcureGPT**

This is my top recommendation because it is easy to understand, highly expandable, perfect for AI-generated artifacts, and deeply relatable to developers and office workers. It also gives you lots of opportunities for funny screenshots: legal notices, approval ladders, policy scores, carbon impact, procurement committees, and rejection emails.[^7][^13]

### Option B — **StandupOS**

This gives you repeated interaction, broad relatability, and easy Community Favorite appeal. If the AI-generated blockers get more absurd with each daily update, it becomes a very strong joke engine.[^3][^13]

### Option C — **MergeGuardian 9000**

This could go viral because users can paste their own code and share the absurd AI code review. It also naturally suits the DEV audience and can be deployed as a polished fake tooling product.[^4][^6][^7]

### Option D — **InterviewLoop.ai**

This has emotionally painful realism for the target audience. That pain-to-laughter conversion can perform well if the writing lands.[^1][^13]

### Option E — **Latency as a Service**

This is the strongest non-AI route: great infra satire, very demoable, and visually rich. It would need polish and fake metrics, but the joke is broad and strong.[^2][^14]

## Category-by-Category Tactics

## To win **Best Google AI Usage**

Do this:

- Make AI generate the thing the user suffers from, not just background copy.[^1][^7][^8]
- Split AI into subsystems or roles, as Fourbidden does with multiple endpoint personalities.[^7]
- Explain your prompts, fallbacks, failure handling, or orchestration in the writeup.[^7][^8]
- If possible, deploy on a Google product or use Gemini tooling and say so clearly.[^1][^13]

Avoid this:

- “I used AI to brainstorm.” That is unlikely to beat entries where AI is the actual engine.[^12][^13]

## To win **Best Ode to Larry Masinter**

Do this:

- Either go all-in on protocol correctness and absurd depth, like BrewOps and the stronger teapot builds, or reinterpret Larry’s spirit in a more novel standards parody.[^2][^8][^15]
- Consider a fake RFC extension, impossible client tooling, or standards-compliance theater around something non-coffee.

Avoid this:

- A shallow 418 easter egg or a normal app with one teapot joke.[^9][^10][^12]

## To win **Community Favorite**

Do this:

- Prioritize instant interaction, sharable outcomes, and repeatability.[^12][^14]
- Let users paste their own input or compete on a board.[^12][^14]
- Include screenshots, gifs, or amusing terminal output in the post.[^2][^14]

Avoid this:

- Long setup, auth, or hidden jokes that take too long to land.

## To win **Overall**

You need a balanced entry with strong anti-value, originality, visible engineering, and a killer writeup.[^1] This usually looks like “a ridiculous premise executed with suspicious professionalism.”[^2][^3][^7][^14]

## Recommended build formula

Use this formula if you want a high-probability entry:

1. Pick a mundane, familiar action: buying a pen, opening a PR, booking a meeting, asking for PTO.
2. Replace the normal result with an absurd process machine.
3. Use AI to generate the machine’s outputs, refusal reasons, or bureaucratic stages.
4. Add 2-3 visible technical flourishes: live logs, dashboards, fake metrics, replay history, export/share cards.
5. Write the post in a dead-serious product-launch voice.
6. State your prize categories explicitly and justify them cleanly.

## Suggested post outline for your submission

1. **What I Built** — one-sentence premise first.
2. **Demo** — live link immediately.
3. **Code** — repo link immediately.
4. **How I Built It** — describe the joke engine and visible architecture.
5. **How I Used Google AI** — if relevant, explain exact user-facing role.
6. **Prize Category** — name the categories and justify each in one short paragraph.
7. **Closing bit** — end with one strong joke line.

This structure mirrors what many strong entries already do and aligns with the writing criterion.[^1][^2][^3][^7][^14]

## Final Recommendation

If I were optimizing strictly for prize odds, I would build one of these three:

1. **ProcureGPT**
2. **StandupOS**
3. **MergeGuardian 9000**

All three are fresher than the crowded teapot cluster, highly legible for judges, naturally suited to Google AI integration, and likely relatable enough for Community Favorite.[^2][^3][^7][^8][^13][^15]

## Confidence Assessment

**High confidence:** the judging criteria, prize categories, and broad competitive patterns are directly grounded in the official challenge post and the listed top entries.[^1][^2][^3][^4][^5][^6][^7][^8][^9][^10][^12][^13][^14][^15]

**Medium confidence:** my assessment of which strategic lane gives you the best chance is an informed inference from the visible field, not an official statement from DEV. In particular, “Larry is crowded” and “AI satire is more open” are analytical conclusions based on the provided top entries.[^2][^7][^8][^13][^15]

**Lower confidence / assumptions:** I am assuming these listed posts are representative of the leading field at the moment you asked, and that additional unseen entries are not radically different. If the leaderboard changes significantly, the white-space analysis may shift.

## Footnotes

[^1]: Official challenge post, “Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!” — judging criteria, additional prize categories, prizes, and dates: <https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa>
[^2]: Niko / axrisi, “BrewOps: I Built a Production-Grade HTCPCP Server Because Nobody Else Would” — enterprise framing, full RFC implementation, live dashboard, multiplayer demo, and Larry category positioning: <https://dev.to/axrisi/brewops-i-built-a-production-grade-htcpcp-server-because-nobody-else-would-3clh>
[^3]: Malik Sohaib Iqbal, “Proof of Work: The To-Do List of Infinite Regret” — anti-productivity mechanic, Minesweeper gate, Hydra task duplication, Gemini usage, and Larry angle: <https://dev.to/malik_sohaib_iqbal/proof-of-work-the-to-do-list-of-infinite-regret-48le>
[^4]: Alon Sarias, “PURESLOP.md” — AI coding satire, instantly understandable premise, and strong developer relatability: <https://dev.to/alonsarias/pureslopmd-54ek>
[^5]: Einorde, “Be Anything You Want! OK, Here’s How. Technically.” — literalism-based humor, simple mechanic, and polished presentation: <https://dev.to/einorde/be-anything-you-want-ok-heres-how-technically-4i1d>
[^6]: Sarvagya Pandya, “Confidently Wrong AI – The World’s Most Useless Ad Algorithm” — quick-response AI satire and simple replayable interaction: <https://dev.to/shsarvagya19/confidently-wrong-ai-the-worlds-most-useless-ad-algorithm-18g0>
[^7]: Ujjavala, “Fourbidden: a serious AI solution to 2+2, with maximum ceremony and no resolution” — multi-endpoint AI workflow, product satire, legal/process theater, and Google AI category framing: <https://dev.to/ujja/fourbidden-a-serious-ai-solution-to-22-with-maximum-ceremony-and-no-resolution-3p1g>
[^8]: greysquirr3l, “Depresso-Tron 418: I Built a Bureaucratic Coffee Machine That Cannot Make Coffee” — hostile HTCPCP bureaucracy, Gemini barista, and Larry category positioning: <https://dev.to/greysquirr3l/depresso-tron-418-i-built-a-bureaucratic-coffee-machine-that-cannot-make-coffee-33pl>
[^9]: Syed Ahmer Shah, “The Login Portal That Actively Hates You” — anti-UX phases, moving inputs, sabotage, gaslighting, Gemini-assisted messaging, and Larry nod: <https://dev.to/syedahmershah/the-login-portal-that-actively-hates-you-2p94>
[^10]: Prasoon Jadon, “Do Not Type… The Web App That Fights Back” — hostile typing prank, anti-UX interaction, and lighter Larry homage: <https://dev.to/pjdeveloper896/do-not-type-the-web-app-that-fights-back--44pa>
[^11]: This pattern summary is synthesized from multiple anti-productivity / anti-UX entries: [^3], [^9], [^10], [^12].
[^12]: Akshit, “AdTube: I Made YouTube 10x Better (You’re Welcome)” — polished anti-UX familiar-product parody, hidden teapot references, and replayable frustration loop: <https://dev.to/siakshit/adtube-i-made-youtube-10x-better-youre-welcome-4g5k>
[^13]: phalkmin, “Move Over Vibe Coding, I Built an AI Editor for Stress Coding” — workplace surveillance satire, interactive browser demo, Gemini tooling use, and Cloud Run deployment: <https://dev.to/phalkmin/move-over-vibe-coding-i-built-an-ai-editor-for-stress-coding-4243>
[^14]: raxxo, “Can You Center This Div? Spoiler: No You Can’t” — impossible challenge, heavy polish, leaderboard, live feed, share cards, and strong community-friendly replayability: <https://dev.to/raxxo/can-you-center-this-div-spoiler-no-you-cant-2dm5>
[^15]: Tom Ramos Pedales / inonazaarene, “I Built a Coffee Brewer That Is Legally Required to Refuse Your Coffee” — enterprise HTCPCP console, 418 inevitability, and explicit Larry category targeting: <https://dev.to/inonazaarene/i-built-a-coffee-brewer-that-is-legally-required-to-refuse-your-coffee-mi0>
