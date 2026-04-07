"use client";

import { useState, useMemo } from "react";
import { Sparkles, Loader2, AlertTriangle } from "lucide-react";

interface RoastMetric {
  name: string;
  score: number;
  grade: string;
  explanation: string;
}

interface RoastResponse {
  overallScore: number;
  overallGrade: string;
  metrics: RoastMetric[];
  recommendation: string;
  aiConfidence: string;
}

interface RoastDashboardProps {
  code: string;
  prTitle: string;
  apiKey?: string;
}

function getScoreColor(score: number): string {
  if (score < 20) return "bg-guardian-danger";
  if (score < 40) return "bg-guardian-warning";
  return "bg-yellow-500";
}

function getScoreTextColor(score: number): string {
  if (score < 20) return "text-guardian-danger";
  if (score < 40) return "text-guardian-warning";
  return "text-yellow-500";
}

function getGradeBadgeClasses(grade: string): string {
  const g = grade.toUpperCase();
  if (g.startsWith("F") || g.startsWith("D"))
    return "bg-guardian-danger/15 text-guardian-danger border-guardian-danger/20";
  if (g.startsWith("C"))
    return "bg-guardian-warning/15 text-guardian-warning border-guardian-warning/20";
  return "bg-yellow-500/15 text-yellow-500 border-yellow-500/20";
}

function ScoreRing({
  score,
  grade,
}: {
  score: number;
  grade: string;
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.max(0, Math.min(100, score));
  const offset = circumference - (clampedScore / 100) * circumference;
  const strokeColor =
    score < 20
      ? "#f85149"
      : score < 40
        ? "#d29922"
        : "#d29922";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#30363d"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-2xl font-bold text-guardian-text">
            {score}
          </span>
          <span className="font-mono text-xs text-guardian-muted">/100</span>
        </div>
      </div>
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border ${getGradeBadgeClasses(grade)}`}
      >
        {grade}
      </span>
    </div>
  );
}

function MetricCard({ metric }: { metric: RoastMetric }) {
  const barWidth = Math.max(2, Math.min(100, metric.score));

  return (
    <div className="bg-guardian-bg border border-guardian-border rounded-md p-3 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-medium text-guardian-text truncate">
          {metric.name}
        </h4>
        <span
          className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold border ${getGradeBadgeClasses(metric.grade)}`}
        >
          {metric.grade}
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex-1 h-2 rounded-full bg-guardian-border overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${getScoreColor(metric.score)}`}
              style={{ width: `${barWidth}%` }}
            />
          </div>
          <span className="ml-2 font-mono text-xs text-guardian-muted w-8 text-right">
            {metric.score}
          </span>
        </div>
      </div>

      <p className="text-xs text-guardian-muted leading-relaxed">
        {metric.explanation}
      </p>
    </div>
  );
}

export default function RoastDashboard({ code, prTitle, apiKey }: RoastDashboardProps) {
  const [result, setResult] = useState<RoastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reportNumber = useMemo(
    () =>
      `MG9K-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    []
  );

  async function handleAnalyze() {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, prTitle, apiKey: apiKey || undefined }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(
          errData?.error || `Analysis failed with status ${res.status}`
        );
      }

      const data: RoastResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Code analysis request failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-guardian-border rounded-lg bg-guardian-surface overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-guardian-border flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-guardian-warning flex-shrink-0" />
          <h3 className="text-sm font-semibold text-guardian-text">
            Enterprise Code Quality Report
          </h3>
          <span className="font-mono text-[10px] text-guardian-muted">
            #{reportNumber}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-guardian-purple/10 text-guardian-purple border border-guardian-purple/20">
          <Sparkles className="w-3 h-3" />
          Gemini AI
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* No result yet — show analyze button */}
        {!result && !loading && !error && (
          <button
            onClick={handleAnalyze}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-guardian-border bg-guardian-bg text-guardian-text hover:bg-guardian-border/50 transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-guardian-warning" />
            Run Code Quality Analysis
          </button>
        )}

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center gap-3 py-8">
            <Loader2 className="w-8 h-8 text-guardian-accent animate-spin" />
            <p className="text-sm text-guardian-muted">
              Computing enterprise metrics...
            </p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="space-y-3">
            <div className="flex items-start gap-2 py-2 px-3 bg-guardian-danger/10 border border-guardian-danger/20 rounded-md">
              <AlertTriangle className="w-4 h-4 text-guardian-danger flex-shrink-0 mt-0.5" />
              <p className="text-xs text-guardian-danger">{error}</p>
            </div>
            <button
              onClick={handleAnalyze}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-guardian-border bg-guardian-bg text-guardian-text hover:bg-guardian-border/50 transition-colors"
            >
              Retry Analysis
            </button>
          </div>
        )}

        {/* Results dashboard */}
        {result && (
          <div className="space-y-5">
            {/* Overall score */}
            <div className="flex justify-center py-2">
              <ScoreRing score={result.overallScore} grade={result.overallGrade} />
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.metrics.map((metric) => (
                <MetricCard key={metric.name} metric={metric} />
              ))}
            </div>

            {/* Recommendation */}
            <div className="bg-guardian-bg border border-guardian-border rounded-md p-3 space-y-2">
              <h4 className="text-xs font-semibold text-guardian-muted uppercase tracking-wider">
                Recommendation
              </h4>
              <p className="text-sm text-guardian-text">
                {result.recommendation}
              </p>
            </div>

            {/* AI Confidence */}
            <p className="text-center text-xs text-guardian-muted italic">
              {result.aiConfidence}
            </p>

            {/* Re-run button */}
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium rounded-md border border-guardian-border bg-guardian-bg text-guardian-muted hover:text-guardian-text hover:bg-guardian-border/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Re-run Analysis
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
