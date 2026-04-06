import { Lock, GitMerge, AlertTriangle, Sparkles } from "lucide-react";

interface MergeBoxProps {
  blockReason: string;
  nextSteps: string[];
}

const MERGE_BUTTON_MESSAGES = [
  "Merge is not permitted in this moral climate.",
  "This button has been disabled by the Architecture Review Board.",
  "Nice try. The Guardian is always watching.",
  "Merge access revoked pending spiritual alignment.",
  "This button reports directly to compliance.",
];

export function MergeBox({ blockReason, nextSteps }: MergeBoxProps) {
  const buttonMsg = MERGE_BUTTON_MESSAGES[Math.floor(Math.random() * MERGE_BUTTON_MESSAGES.length)];

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
        <div className="flex items-center gap-1 mt-1.5">
          <Sparkles className="w-2.5 h-2.5 text-blue-400" />
          <span className="text-[9px] text-guardian-muted">Blocked by Gemini-powered analysis</span>
        </div>
      </div>

      {/* Next steps */}
      <div className="px-4 py-3 bg-guardian-surface/50">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-3.5 h-3.5 text-guardian-warning" />
          <p className="text-xs text-guardian-warning uppercase tracking-wider font-medium">
            Required Actions Before Merge
          </p>
        </div>
        <ul className="space-y-1.5">
          {nextSteps.map((step, i) => (
            <li key={i} className="text-xs text-guardian-text flex items-start gap-2">
              <span className="text-guardian-muted font-mono mt-0.5 flex-shrink-0">{i + 1}.</span>
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
          title={buttonMsg}
        >
          <GitMerge className="w-4 h-4" />
          Merge pull request
        </button>
        <p className="text-[10px] text-guardian-muted text-center mt-1.5">
          {buttonMsg}
        </p>
      </div>
    </div>
  );
}
