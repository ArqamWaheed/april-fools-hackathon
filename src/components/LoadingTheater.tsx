"use client";

import { useState, useEffect } from "react";
import { LOADING_STAGES } from "@/lib/sample-prs";
import { CheckCircle, Loader2 } from "lucide-react";

interface LoadingTheaterProps {
  onComplete: () => void;
}

export function LoadingTheater({ onComplete }: LoadingTheaterProps) {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (currentStage >= LOADING_STAGES.length) {
      onComplete();
      return;
    }

    const delay = 400 + Math.random() * 500;
    const timer = setTimeout(() => setCurrentStage((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [currentStage, onComplete]);

  return (
    <div className="border border-guardian-border rounded-lg bg-guardian-surface p-6">
      <div className="flex items-center gap-2 mb-4">
        <Loader2 className="w-4 h-4 text-guardian-accent animate-spin" />
        <h3 className="text-sm font-semibold text-guardian-text uppercase tracking-wider">
          Enterprise Review Pipeline
        </h3>
      </div>

      <div className="space-y-1.5">
        {LOADING_STAGES.map((stage, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-sm transition-all duration-300 ${
              i < currentStage
                ? "text-guardian-success opacity-100"
                : i === currentStage
                ? "text-guardian-accent opacity-100 shimmer rounded px-1 -mx-1"
                : "text-guardian-muted/30 opacity-50"
            }`}
          >
            {i < currentStage ? (
              <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
            ) : i === currentStage ? (
              <Loader2 className="w-3.5 h-3.5 flex-shrink-0 animate-spin" />
            ) : (
              <div className="w-3.5 h-3.5 flex-shrink-0 rounded-full border border-current" />
            )}
            <span className="font-mono text-xs">{stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
