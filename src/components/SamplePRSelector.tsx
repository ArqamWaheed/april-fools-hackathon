"use client";

import { SamplePR } from "@/lib/types";
import { SAMPLE_PRS } from "@/lib/sample-prs";

interface SamplePRSelectorProps {
  activeSample: SamplePR | null;
  onSelect: (pr: SamplePR) => void;
}

export function SamplePRSelector({ activeSample, onSelect }: SamplePRSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = SAMPLE_PRS.find((pr) => pr.id === e.target.value);
    if (selected) onSelect(selected);
  };

  return (
    <div>
      <label className="text-xs text-guardian-muted mb-1 block">
        Or try a sample PR
      </label>
      <select
        value={activeSample?.id ?? ""}
        onChange={handleChange}
        className="w-full bg-guardian-surface border border-guardian-border rounded-md text-sm text-guardian-text px-3 py-1.5 focus:outline-none focus:border-guardian-accent"
      >
        <option value="" disabled>
          Select a sample PR to try...
        </option>
        {SAMPLE_PRS.map((pr) => (
          <option key={pr.id} value={pr.id}>
            {pr.title}
          </option>
        ))}
      </select>
    </div>
  );
}
