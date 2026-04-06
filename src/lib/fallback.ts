import { ReviewOutput, ReviewRequest, Check, ReviewComment, Verdict, Severity, ReviewerPersona } from "./types";

// ─── Comment Banks ──────────────────────────────────────────

const COMMENTS: Record<string, string[]> = {
  bureaucratic: [
    "This helper introduces unapproved convenience at the edge layer.",
    "Please attach a rollback narrative before using `map()` in production-facing logic.",
    "The code is technically correct, which is not the same as enterprise-ready.",
    "This import has not been pre-approved by the Architecture Review Board.",
    "Function length exceeds the Guardian Comfort Index. Split into emotional units.",
    "Return statement on line {line} exits too eagerly. Consider adding ceremony.",
    "Variable declared without a governance sponsor. Assign an owner before merge.",
    "This logic bypasses the approved suffering threshold for junior developers.",
  ],
  anthropomorphic: [
    "This function appears eager but not self-aware.",
    "The variable names are confident but not accountable.",
    "This loop lacks empathy for future maintainers.",
    "This callback seems emotionally unavailable to its parent scope.",
    "The error handling here is technically present but spiritually absent.",
    "This ternary has trust issues. Consider a more transparent conditional.",
    "This module has the energy of someone who peaked in a hackathon.",
    "Your code has commitment issues — it returns before fully processing its feelings.",
  ],
  metrics: [
    "Guardian detected a 74% mismatch between implementation confidence and roadmap maturity.",
    "Cyclomatic intention exceeds approved thresholds (actual: 12.7, limit: 3).",
    "Naming entropy is trending above audit comfort levels (σ = 4.2).",
    "Semantic drift score: 0.89. Acceptable range: 0.00–0.02.",
    "Code sentiment analysis: 62% passive, 31% indifferent, 7% hopeful. Needs more conviction.",
    "This function's bus factor is 1. If you get hit by a bus, this code dies alone.",
    "Dependency freshness index: stale. Last meaningful thought: 6 commits ago.",
    "Reviewer confidence in this approach: 3%. Margin of error: ±97%.",
  ],
  developer_pain: [
    "Please split this 4-line PR into smaller PRs for easier emotional review.",
    "I left one non-blocking comment that is definitely blocking.",
    "Can we move this into a shared util even though it will only ever be used here?",
    "Have we considered writing a design doc before changing this string?",
    "This looks fine, but I want to think about it over the weekend. Blocking.",
    "Looks good to me, but I'd like a second opinion from someone who disagrees.",
    "Could you add a comment explaining why this code does what it clearly does?",
    "I see you already handled the edge case. Let me suggest handling it differently.",
  ],
  passive_aggressive: [
    "Just a thought — have you considered not doing this?",
    "Not blocking, but I would never write it this way. Not blocking though.",
    "Interesting approach! I once tried something similar. It didn't work, but interesting.",
    "I'm sure this works, but could you explain it to me like I'm the CEO?",
    "Totally up to you, but the last person who merged code like this no longer works here.",
    "No concerns! Well, one small concern. Actually several. Let me enumerate.",
    "Love the initiative here. Quick question though — why?",
    "Great PR! Minor nit: everything.",
  ],
};

const CHECK_NAMES: Array<{ name: string; failDetails: string; passDetails: string }> = [
  { name: "Semantic Posture", failDetails: "Implementation is correct but lacks ceremonial resilience.", passDetails: "Acceptable posture detected." },
  { name: "Enterprise Readiness", failDetails: "Code is deployable, but not governable.", passDetails: "Governance alignment: nominal." },
  { name: "Soul Check", failDetails: "This code has no soul. Consider adding one.", passDetails: "Faint soul detected. Proceeding." },
  { name: "Brand Consistency Lint", failDetails: "Variable names do not reflect company values.", passDetails: "Names are aspirationally on-brand." },
  { name: "Retroactive Compliance", failDetails: "Code does not comply with policies that haven't been written yet.", passDetails: "Pre-emptive compliance: tentative." },
  { name: "Emotional Idempotency", failDetails: "Re-running this code may produce different feelings.", passDetails: "Feelings remain stable across runs." },
  { name: "Naming Karma", failDetails: "Your variable names carry technical debt from a past life.", passDetails: "Karma: cautiously neutral." },
  { name: "Cyclomatic Intention", failDetails: "Code complexity exceeds the reviewer's willingness to understand.", passDetails: "Complexity: within tolerance." },
  { name: "Merge Ethics Board", failDetails: "The board has not convened. Merge postponed.", passDetails: "Board in recess. Proceeding with caution." },
  { name: "Vibes Analysis", failDetails: "Vibes are off. Cannot proceed in good conscience.", passDetails: "Vibes: cautiously optimistic." },
];

const BLOCK_REASONS = [
  "Merge blocked pending cross-functional trust alignment.",
  "All checks passed, but merge remains paused pending vibe reconciliation.",
  "Code compiles, tests pass, but the universe has not consented.",
  "Merge denied: insufficient enterprise friction detected.",
  "Blocked by Guardian Policy 7.4.2: 'Code that works on the first try is suspicious.'",
  "Merge postponed until the Architecture Review Board reconvenes in Q3.",
  "This PR requires sign-off from at least two people who have already left the company.",
  "Merge blocked: the code is ready, but the team is not emotionally prepared.",
  "Denied: this change would set a dangerous precedent of shipping things that work.",
  "Merge paused for mandatory 72-hour reflection period.",
  "Guardian cannot approve this PR in the current moral climate.",
  "Blocked: deploying this would make the next sprint planning meeting too easy.",
];

const NEXT_STEPS = [
  "Document the emotional lifecycle of this helper.",
  "Re-submit after stakeholder-approved variable naming calibration.",
  "Before merge, provide a postmortem for the version of this bug that never happened.",
  "Re-open this PR after alignment with Design, Legal, Platform, and your inner child.",
  "Convert this function into an RFC, gather consensus, then inline it again.",
  "Schedule a meeting to discuss whether we need a meeting about this PR.",
  "Add a CHANGELOG entry explaining why nothing changed.",
  "Obtain written approval from the original author of JavaScript.",
  "Run this code through our Feelings Linter (currently in closed beta).",
  "Please rebase onto a branch that doesn't exist yet.",
  "Submit a risk assessment for the risk assessment of this change.",
  "File a JIRA ticket to track the JIRA ticket about this PR.",
  "Wait for Mercury to exit retrograde before re-requesting review.",
  "Rewrite in Rust, then rewrite back. The journey is the point.",
];

const SUMMARIES: Record<ReviewerPersona, string[]> = {
  guardian_core: [
    "MergeGuardian 9000 detected elevated semantic risk across this pull request.",
    "This PR shows promise but is not yet aligned with enterprise delivery standards.",
    "The code functions correctly, which is necessary but not sufficient.",
  ],
  compliance_beast: [
    "Multiple policy violations detected. Audit trail incomplete. Merge denied.",
    "This PR lacks the required SOC2 attestation for modifying production-adjacent logic.",
    "Regulatory alignment: 0%. Enterprise readiness: pending. Coffee readiness: also pending.",
  ],
  staff_engineer_of_doom: [
    "I've seen worse, but I've also seen better. Much better. In languages you haven't learned yet.",
    "This code solves the problem, but it doesn't solve the deeper architectural question of why we have problems.",
    "The implementation works. The philosophy doesn't.",
  ],
  ai_optimizer: [
    "Analysis complete. Confidence: 97.3%. Approval likelihood: 0.0%. Correlation: none.",
    "After processing 4.2 billion parameters, Guardian recommends not merging this.",
    "Predictive model indicates 84% chance this PR will be reverted within 3 sprints.",
  ],
  passive_aggressive_teammate: [
    "Hey! Great work on this. I have a few thoughts. Well, more than a few.",
    "This is totally fine! I just have some non-blocking feedback that will definitely block this.",
    "Really appreciate you putting this up for review. That said…",
  ],
};

// ─── Generator ──────────────────────────────────────────────

function pickRandom<T>(arr: T[], min = 1, max = 1): T[] {
  const count = min === max ? min : min + Math.floor(Math.random() * (max - min + 1));
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getCommentPool(persona: ReviewerPersona): string[] {
  switch (persona) {
    case "compliance_beast":
      return [...COMMENTS.bureaucratic, ...COMMENTS.metrics];
    case "staff_engineer_of_doom":
      return [...COMMENTS.anthropomorphic, ...COMMENTS.bureaucratic];
    case "ai_optimizer":
      return [...COMMENTS.metrics, ...COMMENTS.bureaucratic];
    case "passive_aggressive_teammate":
      return [...COMMENTS.passive_aggressive, ...COMMENTS.developer_pain];
    default:
      return Object.values(COMMENTS).flat();
  }
}

function randomLine(code: string): number {
  const lines = code.split("\n").length;
  return Math.max(1, Math.floor(Math.random() * lines));
}

function extractFilename(code: string): string | null {
  const match = code.match(/\/\/\s*(src\/[^\s]+)/);
  return match ? match[1] : null;
}

export function generateFallbackReview(req: ReviewRequest): ReviewOutput {
  const commentPool = getCommentPool(req.persona);
  const severities: Severity[] = ["critical", "high", "medium", "low", "philosophical"];
  const file = extractFilename(req.code) || "src/index.ts";

  const comments: ReviewComment[] = pickRandom(commentPool, 3, 6).map((text) => ({
    file,
    line: randomLine(req.code),
    severity: pick(severities),
    comment: text.replace("{line}", String(randomLine(req.code))),
  }));

  const checks: Check[] = pickRandom(CHECK_NAMES, 3, 5).map((c) => {
    const failed = Math.random() > 0.3;
    return {
      name: c.name,
      status: failed ? "failed" as const : "warning" as const,
      details: failed ? c.failDetails : c.passDetails,
    };
  });

  const verdicts: Verdict[] = ["changes_requested", "blocked", "spiritually_rejected"];

  return {
    verdict: pick(verdicts),
    summary: pick(SUMMARIES[req.persona]),
    checks,
    comments,
    blockReason: pick(BLOCK_REASONS),
    nextSteps: pickRandom(NEXT_STEPS, 2, 4),
    reviewerPersona: req.persona,
  };
}
