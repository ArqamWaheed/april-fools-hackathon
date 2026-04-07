import { GitBranch, Shield } from "lucide-react";

interface PRHeaderProps {
  prTitle: string;
  branch: string;
  labels: string[];
}

export function PRHeader({ prTitle, branch, labels }: PRHeaderProps) {
  return (
    <div className="border-b border-guardian-border pb-4">
      {/* Repo breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-guardian-muted mb-2">
        <Shield className="w-4 h-4 text-guardian-accent" />
        <span className="text-guardian-accent hover:underline cursor-pointer">
          mergeguardian-9000
        </span>
        <span>/</span>
        <span className="text-guardian-accent hover:underline cursor-pointer">
          pull
        </span>
        <span>/</span>
        <span className="text-guardian-text font-semibold">#9001</span>
      </div>

      {/* PR Title */}
      <h1 className="text-xl font-semibold text-guardian-text mb-2">
        {prTitle}
      </h1>

      {/* Branch + Labels */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 text-xs bg-guardian-surface border border-guardian-border rounded-full px-3 py-1">
          <GitBranch className="w-3 h-3" />
          <span className="text-guardian-accent font-mono">{branch}</span>
          <span className="text-guardian-muted mx-1">→</span>
          <span className="text-guardian-accent font-mono">main</span>
        </div>
        {labels.map((label) => (
          <span
            key={label}
            className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
              label === "blocked"
                ? "border-guardian-danger text-guardian-danger"
                : label === "ai-reviewed"
                ? "border-guardian-accent text-guardian-accent"
                : "border-guardian-warning text-guardian-warning"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
