// ─── Verdict ────────────────────────────────────────────────
export type Verdict = "changes_requested" | "blocked" | "spiritually_rejected";

// ─── Check Runs ─────────────────────────────────────────────
export type CheckStatus = "passed" | "failed" | "warning" | "pending";

export interface Check {
  name: string;
  status: CheckStatus;
  details: string;
}

// ─── Review Comments ────────────────────────────────────────
export type Severity = "critical" | "high" | "medium" | "low" | "philosophical";

export interface ReviewComment {
  file: string;
  line: number;
  severity: Severity;
  comment: string;
}

// ─── Reviewer Personas ──────────────────────────────────────
export type ReviewerPersona =
  | "guardian_core"
  | "compliance_beast"
  | "staff_engineer_of_doom"
  | "ai_optimizer"
  | "passive_aggressive_teammate";

export interface PersonaInfo {
  id: ReviewerPersona;
  name: string;
  title: string;
  avatar: string;
  color: string;
}

// ─── Review Output ──────────────────────────────────────────
export interface ReviewOutput {
  verdict: Verdict;
  summary: string;
  checks: Check[];
  comments: ReviewComment[];
  blockReason: string;
  nextSteps: string[];
  reviewerPersona: ReviewerPersona;
}

// ─── Review Request ─────────────────────────────────────────
export interface ReviewRequest {
  code: string;
  prTitle: string;
  persona: ReviewerPersona;
}

// ─── Sample PR ──────────────────────────────────────────────
export interface SamplePR {
  id: string;
  title: string;
  description: string;
  branch: string;
  files: string[];
  code: string;
}
