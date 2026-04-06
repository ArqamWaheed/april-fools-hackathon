import { ReviewComment, Severity } from "@/lib/types";
import { MessageSquare } from "lucide-react";

interface ReviewCommentsProps {
  comments: ReviewComment[];
}

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  philosophical: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export function ReviewComments({ comments }: ReviewCommentsProps) {
  return (
    <div className="border border-guardian-border rounded-lg overflow-hidden">
      <div className="bg-guardian-surface px-4 py-2.5 border-b border-guardian-border flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-guardian-muted" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-guardian-text">
          Review Comments
        </h3>
        <span className="text-xs text-guardian-muted font-mono">
          ({comments.length})
        </span>
      </div>

      <div className="divide-y divide-guardian-border">
        {comments.map((comment, i) => (
          <div key={i} className="px-4 py-3 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-guardian-accent">
                {comment.file}:{comment.line}
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded border font-medium uppercase ${
                  SEVERITY_COLORS[comment.severity] || SEVERITY_COLORS.medium
                }`}
              >
                {comment.severity}
              </span>
            </div>
            <p className="text-sm text-guardian-text leading-relaxed">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
