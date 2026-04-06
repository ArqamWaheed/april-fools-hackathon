import { Shield } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-guardian-bg flex items-center justify-center p-4">
      <div className="max-w-lg text-center space-y-6 animate-fade-in">
        <div className="text-6xl">🛡️</div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-guardian-danger">404</h1>
          <h2 className="text-lg font-semibold text-guardian-text">
            This route was blocked before it existed.
          </h2>
        </div>

        <p className="text-sm text-guardian-muted max-w-md mx-auto">
          MergeGuardian 9000 pre-emptively rejected the PR that would have
          created this page. The page was deemed &quot;architecturally
          aspirational but spiritually unready.&quot;
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-guardian-accent hover:underline"
        >
          <Shield className="w-4 h-4" />
          Return to the Guardian
        </Link>
      </div>
    </div>
  );
}
