"use client";

import { SamplePR } from "@/lib/types";
import { SAMPLE_PRS } from "@/lib/sample-prs";

interface SamplePRSelectorProps {
  activeSample: SamplePR | null;
  onSelect: (pr: SamplePR) => void;
}

export function SamplePRSelector({ activeSample, onSelect }: SamplePRSelectorProps) {
  return (
    <div>
      <p className="text-xs text-guardian-muted mb-2 uppercase tracking-wider font-medium">
        Or try a sample PR
      </p>
      <div className="flex flex-wrap gap-2">
        {SAMPLE_PRS.map((pr) => (
          <button
            key={pr.id}
            onClick={() => onSelect(pr)}
            className={`text-xs px-3 py-1.5 rounded-md border transition-all ${
              activeSample?.id === pr.id
                ? "bg-guardian-accent/20 border-guardian-accent text-guardian-accent"
                : "bg-guardian-surface border-guardian-border text-guardian-muted hover:text-guardian-text hover:border-guardian-muted"
            }`}
          >
            {pr.title}
          </button>
        ))}
      </div>
    </div>
  );
}
