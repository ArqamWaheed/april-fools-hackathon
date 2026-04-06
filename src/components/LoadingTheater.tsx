"use client";

import { useState, useEffect } from "react";
import { LOADING_STAGES } from "@/lib/sample-prs";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

interface LoadingTheaterProps {
  onComplete: () => void;
}

export function LoadingTheater({ onComplete }: LoadingTheaterProps) {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (currentStage >= LOADING_STAGES.length) {
      const finalDelay = setTimeout(onComplete, 400);
      return () => clearTimeout(finalDelay);
    }

    const delay = 350 + Math.random() * 450;
    const timer = setTimeout(() => setCurrentStage((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [currentStage, onComplete]);

  const progress = Math.min((currentStage / LOADING_STAGES.length) * 100, 100);

  return (
    <div className="border border-guardian-border rounded-lg bg-guardian-surface overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-guardian-border">
        <div
          className="h-full bg-guardian-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Loader2 className="w-4 h-4 text-guardian-accent animate-spin" />
          <h3 className="text-sm font-semibold text-guardian-text uppercase tracking-wider">
            Enterprise Review Pipeline
          </h3>
          <span className="text-[10px] text-guardian-muted font-mono ml-auto">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="space-y-1.5">
          {LOADING_STAGES.map((stage, i) => {
            const isFinalFail = currentStage >= LOADING_STAGES.length && i === LOADING_STAGES.length - 1;
            return (
              <div
                key={i}
                className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                  i < currentStage
                    ? isFinalFail
                      ? "text-guardian-danger opacity-100"
                      : "text-guardian-success opacity-100"
                    : i === currentStage
                    ? "text-guardian-accent opacity-100 shimmer rounded px-1 -mx-1"
                    : "text-guardian-muted/30 opacity-50"
                }`}
              >
                {i < currentStage ? (
                  isFinalFail ? (
                    <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  )
                ) : i === currentStage ? (
                  <Loader2 className="w-3.5 h-3.5 flex-shrink-0 animate-spin" />
                ) : (
                  <div className="w-3.5 h-3.5 flex-shrink-0 rounded-full border border-current" />
                )}
                <span className="font-mono text-xs">{stage}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
