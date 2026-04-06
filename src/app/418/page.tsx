import { Shield, Coffee } from "lucide-react";
import Link from "next/link";

export default function TeapotPage() {
  return (
    <div className="min-h-screen bg-guardian-bg flex items-center justify-center p-4">
      <div className="max-w-lg text-center space-y-6 animate-fade-in">
        <div className="text-8xl">🫖</div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-guardian-danger">418</h1>
          <h2 className="text-xl font-semibold text-guardian-text">
            I&apos;m a Teapot
          </h2>
        </div>

        <div className="border border-guardian-border rounded-lg bg-guardian-surface p-6 text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-guardian-muted uppercase tracking-wider font-medium">
            <Coffee className="w-3.5 h-3.5" />
            HTCPCP/1.0 — RFC 2324 Compliance Report
          </div>

          <p className="text-sm text-guardian-text leading-relaxed">
            MergeGuardian 9000 attempted to brew coffee, but the server
            identified itself as a teapot. Under{" "}
            <span className="text-guardian-accent">RFC 2324 §2.3.2</span>, this
            entity is permanently unable to brew coffee and should not be asked
            to do so.
          </p>

          <div className="text-xs text-guardian-muted space-y-1 border-t border-guardian-border pt-3">
            <p>
              <span className="text-guardian-warning">⚠</span> This incident has
              been logged in the Beverage Compliance Dashboard.
            </p>
            <p>
              <span className="text-guardian-danger">✗</span> Coffee Brewing
              Authorization: <strong>DENIED</strong>
            </p>
            <p>
              <span className="text-guardian-success">✓</span> Teapot
              Self-Awareness: <strong>CONFIRMED</strong>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-guardian-accent hover:underline"
        >
          <Shield className="w-4 h-4" />
          Return to MergeGuardian 9000
        </Link>

        <p className="text-[10px] text-guardian-muted/40">
          This teapot has been enterprise-certified and is GDPR-compliant.
        </p>
      </div>
    </div>
  );
}
