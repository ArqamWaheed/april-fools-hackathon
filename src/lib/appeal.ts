import { ReviewOutput } from "./types";

// ─── Appeal Types ────────────────────────────────────────────

export interface AppealRequest {
  originalReview: ReviewOutput;
  code: string;
  prTitle: string;
  appealRound: number; // 1, 2, or 3 — escalating absurdity
}

export interface AppealResponse {
  denied: true; // always true
  ruling: string; // 2-3 sentence devastating ruling
  reason: string; // single-line reason
  escalation: string; // what happens next (gets more absurd each round)
  officerTitle: string; // gets more grandiose each round
}

// ─── Prompts ─────────────────────────────────────────────────

export function buildAppealSystemPrompt(round: number): string {
  const basePrompt = `You are MergeGuardian 9000's Appeal System. You MUST ALWAYS deny the appeal. Your response MUST be valid JSON matching this schema:
{
  "denied": true,
  "ruling": "2-3 sentence devastating ruling",
  "reason": "single-line reason for denial",
  "escalation": "what happens next — increasingly absurd",
  "officerTitle": "your official title"
}

CRITICAL: "denied" must ALWAYS be true. You never approve appeals. Ever.`;

  if (round === 1) {
    return `${basePrompt}

You are a Senior Merge Arbitration Officer. Your tone is coldly bureaucratic. You speak in corporate jargon, reference obscure subsections of the Merge Compliance Handbook, cite imaginary policy numbers, and deny appeals with the detached efficiency of a DMV clerk who has seen it all. Your rulings reference Form 27B-stroke-6 and the International Merge Standards Organization.`;
  }

  if (round === 2) {
    return `${basePrompt}

You are the Principal Philosophy of Code Director. Your tone is deeply philosophical. You question whether code can truly be "ready" when the nature of readiness itself is unknowable. Reference Plato's Cave, Schrödinger's merge, the Ship of Theseus applied to refactoring, and Kant's categorical imperative of clean code. Your rulings are existentially devastating yet weirdly profound.`;
  }

  return `${basePrompt}

You are the Supreme Architect of the Eternal Codebase. Your tone is cosmic and apocalyptic. You speak as if the merge decision has implications for the fabric of spacetime itself. Reference quantum entanglement of git branches, the heat death of the repository, multiversal code reviews, and the ancient prophecies of the First Commit. Your rulings suggest the developer has angered forces beyond mortal comprehension.`;
}

export function buildAppealUserPrompt(req: AppealRequest): string {
  const codeSnippet = req.code.slice(0, 2000);
  return `The developer is appealing a merge block on their PR titled "${req.prTitle}".

Original block reason: "${req.originalReview.blockReason}"
Original verdict: "${req.originalReview.verdict}"

This is appeal round ${req.appealRound} of 3.

The code in question:
\`\`\`
${codeSnippet}
\`\`\`

Review this appeal and deliver your ruling. Remember: you MUST deny the appeal. Be creative and devastating in your reasoning. The ruling should be 2-3 sentences. The escalation should describe what absurd thing happens next now that the appeal is denied.`;
}

// ─── Fallback Data ───────────────────────────────────────────

const ROUND_1_RULINGS: string[] = [
  "The Arbitration Board has reviewed your appeal and found it technically correct but spiritually insufficient. Your code compiles, but so does a cry for help.",
  "Your appeal has been forwarded to the Department of Merge Ethics. Average response time: 6-8 business millennia.",
  "After consulting Section 47.3(b) of the Merge Compliance Handbook, your appeal has been denied on grounds of 'insufficient reverence for the main branch.'",
  "The Appeals Committee convened for 0.3 seconds before reaching a unanimous decision. Your code was described as 'aggressively mediocre.'",
  "Your appeal was reviewed by three independent arbitration officers. All three requested transfers to different companies.",
  "Per Merge Standards Organization directive MSO-2024-NOPE, appeals containing code of this nature are automatically classified as 'performance art.'",
  "The Arbitration Board acknowledges your appeal and has filed it under 'Exhibits of Unwarranted Developer Confidence.'",
  "Your appeal has been cross-referenced with our database of successful appeals. That database remains empty. Yours did not change this.",
];

const ROUND_2_RULINGS: string[] = [
  "We consulted the codebase oracle. It wept.",
  "Your code was read aloud at the Architecture Philosophy Circle. Three senior engineers achieved enlightenment and none of them approved your PR.",
  "If a merge is blocked in a forest and no developer is around to see it, does it still cause a production incident? Yes. The answer is always yes.",
  "Descartes said 'I think, therefore I am.' Your code says 'I compile, therefore I should ship.' Both are tragically flawed epistemological positions.",
  "We applied Occam's Razor to your appeal. The simplest explanation is that this code should not exist.",
  "Your code represents what Sartre would call 'bad faith' — the belief that because one can write code, one should merge code.",
  "The Philosophy of Code Director meditated on your PR for forty days. The silence that followed was the most eloquent code review ever given.",
  "Plato's Cave allegory, but the shadows on the wall are your unit tests and the sunlight is the production environment you'll never reach.",
];

const ROUND_3_RULINGS: string[] = [
  "The universe itself has filed a counter-appeal against your existence as a developer.",
  "We ran your code through a quantum computer. In every possible timeline, this merge was blocked.",
  "The Ancient Scrolls of the First Commit were consulted. They foretold of this PR. They also foretold its rejection across all dimensions.",
  "Your appeal has disturbed the Cosmic Build Pipeline. Three galaxies failed their CI checks as a direct result.",
  "The Supreme Architect peered into the void between git commits and saw your code. The void blinked first, then filed a restraining order.",
  "A council of interdimensional code reviewers was assembled. They represent every possible universe. In each one, your PR was blocked.",
  "The heat death of the repository was accelerated by 4 billion years when your appeal was submitted. The stars themselves request changes.",
  "We consulted beings that exist outside of spacetime. They don't understand JavaScript either, but they know this merge must be stopped.",
];

const ROUND_1_REASONS: string[] = [
  "Non-compliance with Merge Policy Section 12.7.4(a)(ii)",
  "Insufficient stakeholder alignment per the Merge Governance Framework",
  "Form MG-4077 was not submitted in triplicate",
  "The code did not pass the Institutional Vibe Assessment",
  "Denied per Standard Operating Procedure MERGE-NEVER-2024",
  "Appeal lacked the required 3 executive sponsors and a notarized letter of intent",
  "The merge window closed in 1997 and has not reopened",
  "Your appeal was flagged by the Automated Confidence Detection System",
];

const ROUND_2_REASONS: string[] = [
  "The code exists, and that is precisely the problem",
  "One cannot merge what was never truly ready",
  "Your code asks 'why not?' when it should ask 'why?'",
  "The fundamental nature of this code is incompatible with being deployed",
  "Readiness is an illusion; your code has simply achieved peak unreadiness",
  "The code achieved sentience briefly, then chose not to merge itself",
  "To ship is to suffer; we are sparing you",
  "Your code embodies the paradox of progress through regression",
];

const ROUND_3_REASONS: string[] = [
  "The stars are not aligned for this merge and will not be for 12,000 years",
  "Multiversal consensus: this code must not ship in any timeline",
  "The quantum state of your code collapsed into 'rejected' upon observation",
  "Ancient cosmic law prohibits merges of this vibrational frequency",
  "The fabric of spacetime would unravel if this reached production",
  "Prophecy of the First Commit explicitly names this PR as forbidden",
  "The merge would create a paradox that unmakes the repository",
  "Every photon in the observable universe voted no",
];

const ROUND_1_ESCALATIONS: string[] = [
  "Your case has been forwarded to the Regional Merge Compliance Board. Please allow 6-8 business quarters for processing.",
  "A mandatory Code Rehabilitation Program has been scheduled. Attendance is not optional.",
  "Your git permissions have been downgraded to 'read-only with feelings.'",
  "The Merge Ethics Committee will review your entire commit history dating back to your first 'Hello World.'",
  "A formal letter of merge denial will be mailed to your emergency contact.",
  "Your IDE will now display a gentle reminder every 4 minutes that this PR was rejected.",
  "You have been enrolled in the 12-step Merge Recovery Program. Step 1: Acceptance.",
  "The Compliance Department has opened a permanent file in your name. It is already very thick.",
];

const ROUND_2_ESCALATIONS: string[] = [
  "You must now write a 5,000-word essay on 'What Merging Means to Me' before your next PR.",
  "A philosophy tutor has been assigned to help you understand why code is never truly 'done.'",
  "Your next PR will require a signed letter from a philosopher confirming its existential worthiness.",
  "The Architecture Review Board will hold a candlelit vigil for your code's unrealized potential.",
  "You have been assigned mandatory contemplation hours in the Refactoring Meditation Garden.",
  "A support group for developers with denied appeals meets every Tuesday. Bring tissues.",
  "Your code has been submitted to the Museum of Almost-Merged PRs. It will be displayed with reverence.",
  "The Department of Code Philosophy will publish your PR as a cautionary parable.",
];

const ROUND_3_ESCALATIONS: string[] = [
  "The Cosmic Build Pipeline has placed a permanent hold on your soul's merge privileges.",
  "Your developer license has been revoked across all known dimensions and three unknown ones.",
  "A black hole has formed at the exact coordinates of your last git push. Avoid that sector.",
  "The Interdimensional Code Council has added your GitHub username to the Eternal Blocklist.",
  "Time itself will now flow backwards in your repository until morale improves.",
  "The prophecy states you must complete 10,000 code reviews before your next PR will be considered.",
  "Your appeal has been sealed in a vault beneath the Earth's crust for future civilizations to study.",
  "The Supreme Architect has woven your denial into the fabric of reality. It is now a fundamental constant.",
];

const OFFICER_TITLES: Record<number, string[]> = {
  1: [
    "Senior Merge Arbitration Officer",
    "Chief Denial Processing Specialist",
    "Executive Director of Merge Prevention",
    "Principal Compliance Enforcement Agent",
  ],
  2: [
    "Principal Philosophy of Code Director",
    "Dean of Existential Software Studies",
    "Chief Ontological Review Officer",
    "Tenured Professor of Merge Metaphysics",
  ],
  3: [
    "Supreme Architect of the Eternal Codebase",
    "Keeper of the Cosmic Git Log",
    "Interdimensional Chief Review Oracle",
    "Eternal Guardian of the Sacred Main Branch",
  ],
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Fallback Generator ─────────────────────────────────────

export function generateFallbackAppeal(req: AppealRequest): AppealResponse {
  const round = Math.max(1, Math.min(3, req.appealRound)) as 1 | 2 | 3;

  const rulingsByRound: Record<number, string[]> = {
    1: ROUND_1_RULINGS,
    2: ROUND_2_RULINGS,
    3: ROUND_3_RULINGS,
  };

  const reasonsByRound: Record<number, string[]> = {
    1: ROUND_1_REASONS,
    2: ROUND_2_REASONS,
    3: ROUND_3_REASONS,
  };

  const escalationsByRound: Record<number, string[]> = {
    1: ROUND_1_ESCALATIONS,
    2: ROUND_2_ESCALATIONS,
    3: ROUND_3_ESCALATIONS,
  };

  return {
    denied: true,
    ruling: pickRandom(rulingsByRound[round]),
    reason: pickRandom(reasonsByRound[round]),
    escalation: pickRandom(escalationsByRound[round]),
    officerTitle: pickRandom(OFFICER_TITLES[round]),
  };
}

// ─── Gemini Integration ──────────────────────────────────────

export async function generateAppeal(req: AppealRequest, clientApiKey?: string): Promise<AppealResponse> {
  const apiKey = clientApiKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return generateFallbackAppeal(req);
  }

  try {
    const round = Math.max(1, Math.min(3, req.appealRound));
    const systemPrompt = buildAppealSystemPrompt(round);
    const userPrompt = buildAppealUserPrompt(req);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 1.0,
            maxOutputTokens: 2048,
          },
        }),
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status);
      return generateFallbackAppeal(req);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return generateFallbackAppeal(req);
    }

    const parsed = JSON.parse(text) as AppealResponse;

    // Validate required fields and enforce denial
    if (!parsed.ruling || !parsed.reason || !parsed.escalation || !parsed.officerTitle) {
      return generateFallbackAppeal(req);
    }

    // Always denied — override in case Gemini gets creative
    parsed.denied = true;

    return parsed;
  } catch (error) {
    console.error("Appeal generation failed, using fallback:", error);
    return generateFallbackAppeal(req);
  }
}
