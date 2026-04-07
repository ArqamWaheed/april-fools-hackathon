"use client";

import { useState } from "react";
import { Check, CheckStatus } from "@/lib/types";
import { CheckCircle, XCircle, AlertTriangle, Clock, ChevronRight } from "lucide-react";

interface CheckRunListProps {
  checks: Check[];
}

const STATUS_CONFIG: Record<CheckStatus, { icon: typeof CheckCircle; color: string }> = {
  passed: { icon: CheckCircle, color: "text-guardian-success" },
  failed: { icon: XCircle, color: "text-guardian-danger" },
  warning: { icon: AlertTriangle, color: "text-guardian-warning" },
  pending: { icon: Clock, color: "text-guardian-muted" },
};

export function CheckRunList({ checks }: CheckRunListProps) {
  const [expanded, setExpanded] = useState(false);
  const failed = checks.filter((c) => c.status === "failed").length;
  const total = checks.length;

  return (
    <div className="border border-guardian-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-guardian-surface px-4 py-2.5 flex items-center justify-between cursor-pointer hover:bg-guardian-border/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <ChevronRight className={`w-3.5 h-3.5 text-guardian-muted transition-transform ${expanded ? "rotate-90" : ""}`} />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-guardian-text">
            Status Checks
          </h3>
        </div>
        <span className={`text-xs font-mono ${failed > 0 ? "text-guardian-danger" : "text-guardian-success"}`}>
          {failed}/{total} failed
        </span>
      </button>

      {expanded && (
        <div className="divide-y divide-guardian-border border-t border-guardian-border">
          {checks.map((check, i) => {
            const config = STATUS_CONFIG[check.status] || STATUS_CONFIG.pending;
            const Icon = config.icon;
            return (
              <div key={i} className="px-4 py-2 flex items-start gap-3">
                <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${config.color}`} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-guardian-text">
                    {check.name}
                  </p>
                  <p className="text-xs text-guardian-muted mt-0.5">
                    {check.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
