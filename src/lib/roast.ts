// ─── Roast Types ─────────────────────────────────────────────

export interface MetricScore {
  name: string;
  score: number; // 0-100, always suspiciously low
  grade: string; // F, D-, D, C- etc
  explanation: string; // devastating AI explanation
}

export interface RoastResponse {
  overallScore: number; // always terrible (0-30 range)
  overallGrade: string; // always F or D-
  metrics: MetricScore[];
  recommendation: string; // always "do not merge"
  aiConfidence: string; // "99.7% confident this should not ship"
}

// ─── Prompts ─────────────────────────────────────────────────

export function buildRoastSystemPrompt(): string {
  return `You are MergeGuardian 9000's Code Quality Analysis Engine, the most advanced and merciless code metrics system ever built. You generate fake but devastatingly plausible enterprise code quality metrics.

Your response MUST be valid JSON matching this schema:
{
  "overallScore": <number 0-30>,
  "overallGrade": "<F or D->",
  "metrics": [
    {
      "name": "<creative enterprise metric name>",
      "score": <number 0-45>,
      "grade": "<F through C- only>",
      "explanation": "<1-2 sentence devastating but funny explanation>"
    }
  ],
  "recommendation": "<always some variation of 'do not merge'>",
  "aiConfidence": "<high percentage confident this should not ship>"
}

Rules:
- Generate exactly 6-8 metrics with creative enterprise-sounding names
- All scores must be low (0-45 range). The overall score must be 0-30.
- Overall grade must be F or D-. Individual metric grades can range from F to C-.
- Explanations should be corporate/absurd humor — devastatingly funny but not mean-spirited
- The recommendation must always be some variation of "do not merge"
- The aiConfidence should be a humorously precise percentage like "99.7%" or "97.3%"
- Reference specific aspects of the submitted code when possible`;
}

export function buildRoastUserPrompt(code: string, prTitle: string): string {
  const codeSnippet = code.slice(0, 3000);
  return `Analyze this pull request and generate enterprise code quality metrics.

PR Title: "${prTitle}"

Code to analyze:
\`\`\`
${codeSnippet}
\`\`\`

Generate your devastating code quality metrics report. Be creative with metric names and explanations. Reference the actual code where possible.`;
}

// ─── Fallback Data ───────────────────────────────────────────

interface FallbackMetric {
  name: string;
  score: number;
  grade: string;
  explanations: string[];
}

const FALLBACK_METRICS: FallbackMetric[] = [
  {
    name: "Semantic Cohesion",
    score: 12,
    grade: "F",
    explanations: [
      "Your functions communicate like divorced parents at a school play.",
      "This code has the semantic density of a fortune cookie written by a random number generator.",
      "We detected 14 different programming paradigms. None of them were used correctly.",
    ],
  },
  {
    name: "Naming Karma Index",
    score: 8,
    grade: "F",
    explanations: [
      "Your variable names suggest someone who peaked during a 3am hackathon.",
      "We ran your variable names through a sentiment analyzer. It returned 'confused and slightly afraid.'",
      "The naming conventions here violate the Geneva Convention on Developer Readability.",
    ],
  },
  {
    name: "Cyclomatic Intention",
    score: 23,
    grade: "D-",
    explanations: [
      "This code has the structural integrity of a house of cards in a wind tunnel.",
      "Your control flow looks like a choose-your-own-adventure book where every path leads to regret.",
      "We tried to diagram the logic flow. The diagram achieved sentience and requested a transfer.",
    ],
  },
  {
    name: "Bus Factor Resilience",
    score: 3,
    grade: "F",
    explanations: [
      "If you got hit by a bus, this code would also die because no one else could understand it.",
      "The bus factor is technically negative — understanding this code makes existing developers want to leave.",
      "We showed this code to 10 engineers. The bus factor decreased by 10.",
    ],
  },
  {
    name: "Existential Debt Ratio",
    score: 41,
    grade: "C-",
    explanations: [
      "This code doesn't just have technical debt — it has technical existential dread.",
      "The debt ratio here suggests your code has been borrowing against its own future deprecation.",
      "If technical debt were currency, this codebase could buy a small country and ruin its infrastructure too.",
    ],
  },
  {
    name: "Vibe Alignment Score",
    score: 7,
    grade: "F",
    explanations: [
      "The vibes are off. Specifically, they are approximately 180 degrees from where vibes should be.",
      "We put your code through the Vibe-O-Meter 3000. It shattered the Vibe-O-Meter 3000.",
      "Your code's energy is best described as 'fluorescent lighting in a government waiting room.'",
    ],
  },
  {
    name: "Corporate Compliance Quotient",
    score: 15,
    grade: "F",
    explanations: [
      "This code would be rejected by every Fortune 500 company and most Fortune 5,000,000 companies.",
      "The compliance team saw this code and preemptively scheduled a mandatory all-hands meeting.",
      "Your code fails 47 of our 46 compliance checks. Yes, it failed one that doesn't exist yet.",
    ],
  },
  {
    name: "Merge Readiness Factor",
    score: 2,
    grade: "F",
    explanations: [
      "If this code were a building, it would be condemned. Then demolished. Then the land would be salted.",
      "On a scale of 1 to merge-ready, this code is a solid 'please close the PR.'",
      "This code is as ready to merge as a submarine is ready to fly.",
    ],
  },
];

const FALLBACK_RECOMMENDATIONS: string[] = [
  "Do not merge. Do not pass go. Do not collect $200.",
  "Immediate merge denial recommended. Consider a career in interpretive dance instead.",
  "This code must not be merged. The codebase has enough problems without adding yours.",
  "MERGE DENIED. We recommend printing this code and using it as a cautionary tale at your next team standup.",
  "Do not merge under any circumstances. This PR should be sealed in a lead-lined container and buried.",
  "Merging this would violate the Hippocratic Oath of Software Engineering: 'First, do no harm.'",
  "This code is not merge-ready. It is not even code-review-ready. It is barely IDE-ready.",
  "Do not merge. The codebase called — it doesn't want this. Nobody wants this.",
];

const FALLBACK_CONFIDENCES: string[] = [
  "99.7% confident this should not ship",
  "97.3% confident this code is a liability",
  "99.97% confident — and we rounded down",
  "100% confident, but we say 99.8% to seem humble",
  "98.6% confident (same temperature as a fever, which this code gives us)",
  "99.4% confident this belongs in a museum, not production",
  "97.8% confident, with a 2.2% margin of error that it's actually worse",
  "99.99% confident. The 0.01% is a rounding error, not hope.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleAndTake<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ─── Fallback Generator ─────────────────────────────────────

export function generateFallbackRoast(_code: string): RoastResponse {
  const metricCount = 6 + Math.floor(Math.random() * 3); // 6-8 metrics
  const selectedMetrics = shuffleAndTake(FALLBACK_METRICS, metricCount);

  const metrics: MetricScore[] = selectedMetrics.map((m) => ({
    name: m.name,
    score: m.score + Math.floor(Math.random() * 5) - 2, // slight variance
    grade: m.grade,
    explanation: pickRandom(m.explanations),
  }));

  // Ensure scores stay in valid range
  metrics.forEach((m) => {
    m.score = Math.max(0, Math.min(45, m.score));
  });

  const overallScore = Math.floor(
    metrics.reduce((sum, m) => sum + m.score, 0) / metrics.length * 0.6
  );

  return {
    overallScore: Math.max(0, Math.min(30, overallScore)),
    overallGrade: overallScore <= 15 ? "F" : "D-",
    metrics,
    recommendation: pickRandom(FALLBACK_RECOMMENDATIONS),
    aiConfidence: pickRandom(FALLBACK_CONFIDENCES),
  };
}

// ─── Gemini Integration ──────────────────────────────────────

export async function generateRoast(code: string, prTitle: string): Promise<RoastResponse> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return generateFallbackRoast(code);
  }

  try {
    const systemPrompt = buildRoastSystemPrompt();
    const userPrompt = buildRoastUserPrompt(code, prTitle);

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
      return generateFallbackRoast(code);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return generateFallbackRoast(code);
    }

    const parsed = JSON.parse(text) as RoastResponse;

    // Validate required fields
    if (
      parsed.overallScore === undefined ||
      !parsed.overallGrade ||
      !Array.isArray(parsed.metrics) ||
      parsed.metrics.length === 0 ||
      !parsed.recommendation ||
      !parsed.aiConfidence
    ) {
      return generateFallbackRoast(code);
    }

    // Enforce terrible scores
    parsed.overallScore = Math.min(30, parsed.overallScore);
    if (parsed.overallGrade !== "F" && parsed.overallGrade !== "D-") {
      parsed.overallGrade = "F";
    }

    return parsed;
  } catch (error) {
    console.error("Roast generation failed, using fallback:", error);
    return generateFallbackRoast(code);
  }
}
