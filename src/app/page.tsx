"use client";

import { useState, useCallback, useRef, useEffect } from "react";
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
import AppealFlow from "@/components/AppealFlow";
import RoastDashboard from "@/components/RoastDashboard";
import { Shield, Zap, RotateCcw, ExternalLink, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

type AppState = "idle" | "loading-api" | "loading-theater" | "done";

export default function Home() {
  const [code, setCode] = useState("");
  const [prTitle, setPrTitle] = useState("feat: add new feature");
  const [persona, setPersona] = useState<ReviewerPersona>("guardian_core");
  const [activeSample, setActiveSample] = useState<SamplePR | null>(null);
  const [state, setState] = useState<AppState>("idle");
  const [review, setReview] = useState<ReviewOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewTime, setReviewTime] = useState<number | null>(null);
  const timerRef = useRef<number>(0);

  const handleSampleSelect = useCallback((pr: SamplePR) => {
    setActiveSample(pr);
    setCode(pr.code);
    setPrTitle(pr.title);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!code.trim()) return;

    setError(null);
    setReview(null);
    timerRef.current = Date.now();
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
      setReviewTime(Date.now() - timerRef.current);
      setState("loading-theater");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("idle");
    }
  }, [code, prTitle, persona]);

  const handleTheaterComplete = useCallback(() => {
    setState("done");
    setReviewCount((c) => c + 1);
  }, []);

  const handleReset = useCallback(() => {
    setState("idle");
    setReview(null);
    setError(null);
    setReviewTime(null);
  }, []);

  // Ctrl+Enter to submit
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (state === "done") {
          handleReset();
        } else if (state === "idle" && code.trim()) {
          handleSubmit();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state, code, handleSubmit, handleReset]);

  return (
    <div className="min-h-screen bg-guardian-bg flex flex-col">
      {/* Top banner */}
      <div className="bg-guardian-danger/10 border-b border-guardian-danger/20 py-1.5 px-4 text-center">
        <p className="text-[11px] text-guardian-danger font-medium">
          ⚠ SYSTEM NOTICE: MergeGuardian 9000 has blocked{" "}
          <span className="font-bold">∞</span> merges globally.{" "}
          {reviewCount > 0 && (
            <span className="text-guardian-warning">
              You have contributed {reviewCount} blocked PR{reviewCount !== 1 ? "s" : ""} to this total.
            </span>
          )}
        </p>
      </div>

      {/* Hero header */}
      <header className="border-b border-guardian-border bg-guardian-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-guardian-danger" />
                <h1 className="text-xl sm:text-2xl font-bold text-guardian-text">
                  MergeGuardian <span className="text-guardian-danger">9000</span>
                </h1>
                <span className="text-[10px] bg-guardian-danger/20 text-guardian-danger px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                  Enterprise
                </span>
              </div>
              <p className="text-xs sm:text-sm text-guardian-muted max-w-xl">
                AI-powered code review that blocks every merge with enterprise-grade
                excuses. Because your code isn&apos;t the problem — everything is.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-guardian-muted">
              <Link
                href="/418"
                className="hover:text-guardian-accent transition-colors"
                title="🫖"
              >
                418
              </Link>
              <a
                href="https://github.com/ArqamWaheed/april-fools-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-guardian-accent transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5 flex-1">
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
                className="w-full bg-guardian-surface border border-guardian-border rounded-md px-3 py-2 text-sm text-guardian-text focus:outline-none focus:border-guardian-accent transition-colors"
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
              onSubmit={handleSubmit}
            />

            {error && (
              <div className="text-sm text-guardian-danger bg-guardian-danger/10 border border-guardian-danger/30 rounded-md px-4 py-2">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <button
                onClick={handleSubmit}
                disabled={!code.trim() || state === "loading-api"}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-guardian-accent text-white font-medium text-sm hover:bg-guardian-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
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
              <p className="text-[10px] text-guardian-muted/50 text-center">
                <kbd className="px-1 py-0.5 rounded bg-guardian-surface border border-guardian-border text-[9px]">Ctrl</kbd>
                {" + "}
                <kbd className="px-1 py-0.5 rounded bg-guardian-surface border border-guardian-border text-[9px]">Enter</kbd>
                {" to submit"}
              </p>
            </div>
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

            {/* Review metadata bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-guardian-muted font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span className="text-blue-400">Gemini AI</span>
              </span>
              <span>·</span>
              <span>
                reviewed in {reviewTime ? `${(reviewTime / 1000).toFixed(1)}s` : "—"}
              </span>
              <span>·</span>
              <span>
                verdict: <span className="text-guardian-danger">{review.verdict.replace(/_/g, " ")}</span>
              </span>
              <span>·</span>
              <span>
                {review.comments?.length || 0} comments · {review.checks?.length || 0} checks
              </span>
            </div>

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

            <AppealFlow
              code={code}
              prTitle={prTitle}
              originalBlockReason={review.blockReason}
              persona={persona}
            />

            <RoastDashboard code={code} prTitle={prTitle} />

            {/* Action bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-guardian-border text-guardian-muted hover:text-guardian-text hover:border-guardian-muted font-medium text-sm transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Submit Another PR (good luck)
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `MergeGuardian 9000 just blocked my PR: "${review.blockReason}" 😭\n\nTry it yourself:`
                )}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.origin : "https://mergeguardian9000.vercel.app")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-guardian-border text-guardian-muted hover:text-guardian-accent hover:border-guardian-accent font-medium text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Share Rejection
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-guardian-border mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {/* Gemini badge — prominent for Google AI prize */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-guardian-surface border border-guardian-border text-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-guardian-muted">Powered by</span>
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Google Gemini AI
              </span>
              <span className="text-guardian-muted/50">·</span>
              <span className="text-guardian-muted font-mono">gemini-2.0-flash</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-guardian-muted">
              MergeGuardian 9000 · Built for the{" "}
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
              No code was actually reviewed in the making of this application. Approval rate: 0.00%.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
