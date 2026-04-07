"use client";

import { useState } from "react";
import { ReviewComment, Severity } from "@/lib/types";
import { MessageSquare, ChevronRight } from "lucide-react";

interface ReviewCommentsProps {
  comments: ReviewComment[];
}

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: "bg-guardian-danger/20 text-guardian-danger border-guardian-danger/30",
  high: "bg-guardian-warning/20 text-guardian-warning border-guardian-warning/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-guardian-accent/20 text-guardian-accent border-guardian-accent/30",
  philosophical: "bg-guardian-purple/20 text-guardian-purple border-guardian-purple/30",
};

export function ReviewComments({ comments }: ReviewCommentsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-guardian-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-guardian-surface px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-guardian-border/30 transition-colors"
      >
        <ChevronRight className={`w-3.5 h-3.5 text-guardian-muted transition-transform ${expanded ? "rotate-90" : ""}`} />
        <MessageSquare className="w-4 h-4 text-guardian-muted" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-guardian-text">
          Review Comments
        </h3>
        <span className="text-xs text-guardian-muted font-mono">
          ({comments.length})
        </span>
      </button>

      {expanded && (
        <div className="divide-y divide-guardian-border border-t border-guardian-border">
          {comments.map((comment, i) => (
            <div key={i} className="px-4 py-2.5 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
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
      )}
    </div>
  );
}
