import { Check, CheckStatus } from "@/lib/types";
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

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
  const failed = checks.filter((c) => c.status === "failed").length;
  const total = checks.length;

  return (
    <div className="border border-guardian-border rounded-lg overflow-hidden">
      <div className="bg-guardian-surface px-4 py-2.5 border-b border-guardian-border flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-guardian-text">
          Status Checks
        </h3>
        <span className={`text-xs font-mono ${failed > 0 ? "text-guardian-danger" : "text-guardian-success"}`}>
          {failed}/{total} failed
        </span>
      </div>

      <div className="divide-y divide-guardian-border">
        {checks.map((check, i) => {
          const config = STATUS_CONFIG[check.status] || STATUS_CONFIG.pending;
          const Icon = config.icon;
          return (
            <div key={i} className="px-4 py-2.5 flex items-start gap-3">
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
    </div>
  );
}
