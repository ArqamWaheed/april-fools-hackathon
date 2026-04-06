"use client";

import { useState, useCallback } from "react";
import { ReviewOutput, ReviewerPersona, SamplePR } from "@/lib/types";
import { PRHeader } from "@/components/PRHeader";
import { CodeInput } from "@/components/CodeInput";
import { SamplePRSelector } from "@/components/SamplePRSelector";
import { ReviewerSwitcher } from "@/components/ReviewerSwitcher";
import { LoadingTheater } from "@/components/LoadingTheater";
import { VerdictCard } from "@/components/VerdictCard";
import { CheckRunList } from "@/components/CheckRunList";
import { ReviewComments } from "@/components/ReviewComments";
import { MergeBox } from "@/components/MergeBox";
import { Shield, Zap, RotateCcw } from "lucide-react";

type AppState = "idle" | "loading-api" | "loading-theater" | "done";

export default function Home() {
  const [code, setCode] = useState("");
  const [prTitle, setPrTitle] = useState("feat: add new feature");
  const [persona, setPersona] = useState<ReviewerPersona>("guardian_core");
  const [activeSample, setActiveSample] = useState<SamplePR | null>(null);
  const [state, setState] = useState<AppState>("idle");
  const [review, setReview] = useState<ReviewOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSampleSelect = useCallback((pr: SamplePR) => {
    setActiveSample(pr);
    setCode(pr.code);
    setPrTitle(pr.title);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!code.trim()) return;

    setError(null);
    setReview(null);
    setState("loading-api");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, prTitle, persona }),
      });

      if (!res.ok) {
        throw new Error(`Review failed: ${res.statusText}`);
      }

      const data = (await res.json()) as ReviewOutput;
      setReview(data);
      setState("loading-theater");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("idle");
    }
  }, [code, prTitle, persona]);

  const handleTheaterComplete = useCallback(() => {
    setState("done");
  }, []);

  const handleReset = useCallback(() => {
    setState("idle");
    setReview(null);
    setError(null);
  }, []);

  return (
    <div className="min-h-screen bg-guardian-bg">
      {/* Hero header */}
      <header className="border-b border-guardian-border bg-guardian-surface/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-guardian-danger" />
            <h1 className="text-2xl font-bold text-guardian-text">
              MergeGuardian <span className="text-guardian-danger">9000</span>
            </h1>
            <span className="text-[10px] bg-guardian-danger/20 text-guardian-danger px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
              Enterprise
            </span>
          </div>
          <p className="text-sm text-guardian-muted max-w-xl">
            AI-powered code review that blocks every merge with enterprise-grade
            excuses. Because your code isn&apos;t the problem — everything is.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Input section — hide when showing results */}
        {state !== "done" && (
          <div className="space-y-4 animate-fade-in">
            <PRHeader
              prTitle={prTitle}
              branch={activeSample?.branch || "feature/unknown"}
              labels={["needs-review", "ai-reviewed"]}
            />

            {/* PR Title input */}
            <div>
              <label className="text-xs text-guardian-muted uppercase tracking-wider font-medium block mb-1">
                PR Title
              </label>
              <input
                type="text"
                value={prTitle}
                onChange={(e) => setPrTitle(e.target.value)}
                className="w-full bg-guardian-surface border border-guardian-border rounded-md px-3 py-2 text-sm text-guardian-text focus:outline-none focus:border-guardian-accent"
                placeholder="feat: add something incredible"
              />
            </div>

            <SamplePRSelector
              activeSample={activeSample}
              onSelect={handleSampleSelect}
            />

            <ReviewerSwitcher active={persona} onChange={setPersona} />

            <CodeInput
              code={code}
              onChange={setCode}
              activeSample={activeSample}
            />

            {error && (
              <div className="text-sm text-guardian-danger bg-guardian-danger/10 border border-guardian-danger/30 rounded-md px-4 py-2">
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={!code.trim() || state === "loading-api"}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-guardian-accent text-white font-medium text-sm hover:bg-guardian-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {state === "loading-api" ? (
                <>
                  <Zap className="w-4 h-4 animate-pulse" />
                  Consulting the Guardian…
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Request Review
                </>
              )}
            </button>
          </div>
        )}

        {/* Loading theater */}
        {state === "loading-theater" && (
          <div className="animate-fade-in">
            <LoadingTheater onComplete={handleTheaterComplete} />
          </div>
        )}

        {/* Results */}
        {state === "done" && review && (
          <div className="space-y-4 animate-fade-in">
            <PRHeader
              prTitle={prTitle}
              branch={activeSample?.branch || "feature/unknown"}
              labels={["blocked", "ai-reviewed", "needs-therapy"]}
            />

            <VerdictCard review={review} />

            {review.checks && review.checks.length > 0 && (
              <CheckRunList checks={review.checks} />
            )}

            {review.comments && review.comments.length > 0 && (
              <ReviewComments comments={review.comments} />
            )}

            <MergeBox
              blockReason={review.blockReason}
              nextSteps={review.nextSteps}
            />

            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md border border-guardian-border text-guardian-muted hover:text-guardian-text hover:border-guardian-muted font-medium text-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Submit Another PR (good luck)
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-guardian-border mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-xs text-guardian-muted">
            MergeGuardian 9000 · Powered by Gemini AI · Built for the{" "}
            <a
              href="https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-guardian-accent hover:underline"
            >
              DEV April Fools Challenge 2026
            </a>
          </p>
          <p className="text-[10px] text-guardian-muted/50 mt-1">
            No code was actually reviewed in the making of this application.
          </p>
        </div>
      </footer>
    </div>
  );
}
