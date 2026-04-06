"use client";

import { useState } from "react";
import { Sparkles, Loader2, AlertTriangle, XCircle, Shield } from "lucide-react";

interface AppealResponse {
  denied: true;
  ruling: string;
  reason: string;
  escalation: string;
  officerTitle: string;
}

interface AppealFlowProps {
  code: string;
  prTitle: string;
  originalBlockReason: string;
  persona: string;
}

interface DenialRecord {
  round: number;
  response: AppealResponse;
}

const ROUND_CONFIG: Record<
  number,
  {
    borderColor: string;
    titleColor: string;
    buttonLabel: string;
    loadingPrefix: string;
  }
> = {
  1: {
    borderColor: "border-guardian-warning",
    titleColor: "text-guardian-warning",
    buttonLabel: "Appeal Merge Block",
    loadingPrefix: "Your appeal is being reviewed by the",
  },
  2: {
    borderColor: "border-guardian-danger",
    titleColor: "text-guardian-danger",
    buttonLabel: "Escalate to Higher Authority",
    loadingPrefix: "Your escalation is being reviewed by the",
  },
  3: {
    borderColor: "border-guardian-purple",
    titleColor: "text-guardian-purple",
    buttonLabel: "Final Appeal to the Supreme Architect",
    loadingPrefix: "Your final appeal is being reviewed by the",
  },
};

export default function AppealFlow({
  code,
  prTitle,
  originalBlockReason,
  persona,
}: AppealFlowProps) {
  const [denials, setDenials] = useState<DenialRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentOfficer, setCurrentOfficer] = useState<string>("");

  const currentRound = denials.length + 1;
  const allExhausted = denials.length >= 3;

  async function handleAppeal() {
    if (allExhausted || loading) return;

    const round = currentRound;
    const config = ROUND_CONFIG[round];
    if (!config) return;

    setLoading(true);
    setError(null);
    setCurrentOfficer("");

    try {
      const res = await fetch("/api/appeal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          prTitle,
          originalBlockReason,
          persona,
          appealRound: round,
          previousDenials: denials.map((d) => d.response.ruling),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(
          errData?.error || `Appeal failed with status ${res.status}`
        );
      }

      const data: AppealResponse = await res.json();
      setDenials((prev) => [...prev, { round, response: data }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Appeal request failed");
    } finally {
      setLoading(false);
    }
  }

  // When loading starts, we peek at the officer title once available
  // For now, we show a generic loading message until response arrives
  const loadingRoundConfig = ROUND_CONFIG[currentRound];

  return (
    <div className="border border-guardian-warning/30 rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-2 text-guardian-text">
        <Shield className="w-5 h-5 text-guardian-warning flex-shrink-0" />
        <h3 className="font-semibold text-sm">Appeal Process</h3>
      </div>

      {/* Original block reason */}
      <div className="bg-guardian-bg border border-guardian-border rounded-md p-3">
        <p className="text-xs text-guardian-muted mb-1">Original Block Reason</p>
        <p className="text-sm text-guardian-danger">{originalBlockReason}</p>
      </div>

      {/* Denial history */}
      {denials.map((denial) => {
        const config = ROUND_CONFIG[denial.round];
        if (!config) return null;

        return (
          <div
            key={denial.round}
            className={`border-l-2 ${config.borderColor} pl-4 py-2 space-y-2`}
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-guardian-surface ${config.titleColor}`}
              >
                {denial.response.officerTitle}
              </span>
              <span className="text-xs text-guardian-muted">
                Round {denial.round} of 3
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-guardian-purple/10 text-guardian-purple border border-guardian-purple/20">
                <Sparkles className="w-3 h-3" />
                Gemini AI
              </span>
            </div>

            <blockquote className="border-l-2 border-guardian-border pl-3 py-1">
              <p className="text-sm italic text-guardian-text">
                {denial.response.ruling}
              </p>
            </blockquote>

            <div className="flex items-start gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-guardian-danger flex-shrink-0 mt-0.5" />
              <p className="text-xs text-guardian-danger">
                {denial.response.reason}
              </p>
            </div>

            {denial.response.escalation && denial.round < 3 && (
              <div className="flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-guardian-warning flex-shrink-0 mt-0.5" />
                <p className="text-xs text-guardian-warning">
                  {denial.response.escalation}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {/* Loading state */}
      {loading && loadingRoundConfig && (
        <div className="flex items-center gap-2 py-3 px-4 bg-guardian-bg rounded-md border border-guardian-border">
          <Loader2 className="w-4 h-4 text-guardian-accent animate-spin flex-shrink-0" />
          <p className="text-sm text-guardian-muted">
            {loadingRoundConfig.loadingPrefix}{" "}
            {currentOfficer || "reviewing authority"}...
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="flex items-start gap-2 py-2 px-3 bg-guardian-danger/10 border border-guardian-danger/20 rounded-md">
          <XCircle className="w-4 h-4 text-guardian-danger flex-shrink-0 mt-0.5" />
          <p className="text-xs text-guardian-danger">{error}</p>
        </div>
      )}

      {/* Action button or exhausted message */}
      {allExhausted ? (
        <div className="text-center py-4 px-3 bg-guardian-bg border border-guardian-purple/30 rounded-md">
          <p className="text-sm text-guardian-purple font-medium">
            All appeals exhausted.
          </p>
          <p className="text-xs text-guardian-muted mt-1">
            This merge is permanently blocked in this and all parallel universes.
          </p>
        </div>
      ) : (
        <button
          onClick={handleAppeal}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-guardian-border bg-guardian-surface text-guardian-text hover:bg-guardian-border/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing Appeal...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              {ROUND_CONFIG[currentRound]?.buttonLabel ?? "Appeal"}
            </>
          )}
        </button>
      )}
    </div>
  );
}
