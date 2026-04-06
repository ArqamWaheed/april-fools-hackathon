import { Lock, GitMerge } from "lucide-react";

interface MergeBoxProps {
  blockReason: string;
  nextSteps: string[];
}

export function MergeBox({ blockReason, nextSteps }: MergeBoxProps) {
  return (
    <div className="border border-guardian-danger/50 rounded-lg overflow-hidden pulse-glow">
      {/* Block reason banner */}
      <div className="bg-guardian-danger/10 border-b border-guardian-danger/30 px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-guardian-danger" />
          <span className="text-xs font-bold uppercase tracking-wider text-guardian-danger">
            Merge Blocked
          </span>
        </div>
        <p className="text-sm text-guardian-text">{blockReason}</p>
      </div>

      {/* Next steps */}
      <div className="px-4 py-3 bg-guardian-surface/50">
        <p className="text-xs text-guardian-muted uppercase tracking-wider font-medium mb-2">
          Required Actions Before Merge
        </p>
        <ul className="space-y-1.5">
          {nextSteps.map((step, i) => (
            <li key={i} className="text-xs text-guardian-text flex items-start gap-2">
              <span className="text-guardian-muted font-mono mt-0.5">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disabled merge button */}
      <div className="px-4 py-3 border-t border-guardian-border">
        <button
          disabled
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-guardian-success/20 text-guardian-success/40 font-medium text-sm cursor-not-allowed border border-guardian-success/20"
          title="Merge is not permitted in this moral climate."
        >
          <GitMerge className="w-4 h-4" />
          Merge pull request
        </button>
        <p className="text-[10px] text-guardian-muted text-center mt-1.5">
          Merge is not permitted in this moral climate.
        </p>
      </div>
    </div>
  );
}
