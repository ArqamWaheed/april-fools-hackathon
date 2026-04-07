import { ReviewOutput, Verdict } from "@/lib/types";
import { PERSONAS } from "@/lib/sample-prs";
import { ShieldAlert, ShieldX, ShieldOff, Sparkles } from "lucide-react";

interface VerdictCardProps {
  review: ReviewOutput;
}

const VERDICT_CONFIG: Record<Verdict, { label: string; color: string; icon: typeof ShieldAlert }> = {
  changes_requested: {
    label: "CHANGES REQUESTED",
    color: "text-guardian-warning border-guardian-warning bg-guardian-warning/10",
    icon: ShieldAlert,
  },
  blocked: {
    label: "MERGE BLOCKED",
    color: "text-guardian-danger border-guardian-danger bg-guardian-danger/10",
    icon: ShieldX,
  },
  spiritually_rejected: {
    label: "SPIRITUALLY REJECTED",
    color: "text-guardian-purple border-guardian-purple bg-guardian-purple/10",
    icon: ShieldOff,
  },
};

export function VerdictCard({ review }: VerdictCardProps) {
  const config = VERDICT_CONFIG[review.verdict] || VERDICT_CONFIG.blocked;
  const Icon = config.icon;
  const persona = PERSONAS.find((p) => p.id === review.reviewerPersona);

  return (
    <div className={`border rounded-lg p-4 ${config.color}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 flex-shrink-0" />
        <span className="text-sm font-bold uppercase tracking-wider">
          {config.label}
        </span>
      </div>

      <p className="text-sm text-guardian-text leading-relaxed mb-3">
        {review.summary}
      </p>

      <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-guardian-border flex-wrap">
        {persona && (
          <div className="flex items-center gap-2 text-xs text-guardian-muted">
            <span className="text-base">{persona.avatar}</span>
            <span>
              Reviewed by <strong className={persona.color}>{persona.name}</strong> · {persona.title}
            </span>
          </div>
        )}
        <span className="flex items-center gap-1 text-[10px] text-guardian-muted">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span className="text-blue-400">Gemini AI</span> · {review.comments?.length || 0} comments
        </span>
      </div>
    </div>
  );
}
