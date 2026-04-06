import { Shield, Coffee } from "lucide-react";
import Link from "next/link";

const ASCII_TEAPOT = `
            ;,'
     _o_    ;:;'
 ,-.'---\`.__ ;
((j\`=====',-'
 \`-\\     /
    \`-=-'`;

export default function TeapotPage() {
  return (
    <div className="min-h-screen bg-guardian-bg flex items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-8 animate-fade-in">
        {/* Steam + ASCII Teapot */}
        <div className="relative inline-block">
          <div className="flex justify-center gap-3 -mb-2">
            <span className="text-guardian-muted/60 text-2xl animate-steam">
              ☁
            </span>
            <span className="text-guardian-muted/40 text-xl animate-steam-delayed">
              ☁
            </span>
            <span className="text-guardian-muted/50 text-lg animate-steam-slow">
              ☁
            </span>
          </div>
          <pre className="font-mono text-guardian-accent text-lg leading-tight inline-block select-none">
            {ASCII_TEAPOT}
          </pre>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold text-guardian-danger tracking-tight">
            418
          </h1>
          <h2 className="text-2xl font-bold text-guardian-text">
            I&apos;m a Teapot
          </h2>
          <p className="text-sm text-guardian-purple italic">
            The Guardian recommends tea instead of merging.
          </p>
        </div>

        {/* RFC Quote */}
        <blockquote className="border-l-4 border-guardian-warning bg-guardian-surface/60 px-5 py-4 text-sm text-guardian-muted italic text-left rounded-r-lg">
          &ldquo;Any attempt to brew coffee with a teapot should result in the
          error code &lsquo;418 I&apos;m a teapot&rsquo;.&rdquo;
          <span className="block mt-2 text-xs text-guardian-accent not-italic font-medium">
            — RFC 2324, Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)
          </span>
        </blockquote>

        {/* Compliance Report */}
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

        {/* Teapot Status */}
        <div className="border border-guardian-border rounded-lg bg-guardian-surface/50 p-4">
          <h3 className="text-xs text-guardian-muted uppercase tracking-wider font-medium mb-3">
            Teapot Status
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span>
              <span className="text-guardian-danger">Temperature:</span>{" "}
              <span className="text-guardian-text font-mono">∞°C</span>
            </span>
            <span className="text-guardian-border">·</span>
            <span>
              <span className="text-guardian-warning">Brew Status:</span>{" "}
              <span className="text-guardian-text font-mono">
                Philosophically Brewing
              </span>
            </span>
            <span className="text-guardian-border">·</span>
            <span>
              <span className="text-guardian-purple">Capacity:</span>{" "}
              <span className="text-guardian-text font-mono">
                Unlimited Disappointment
              </span>
            </span>
          </div>
        </div>

        {/* Return Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-guardian-accent/10 border border-guardian-accent/30 rounded-lg text-sm font-medium text-guardian-accent hover:bg-guardian-accent/20 transition-colors"
        >
          <Shield className="w-4 h-4" />
          Return to Guardian
        </Link>

        <p className="text-[10px] text-guardian-muted/40">
          This teapot has been enterprise-certified and is GDPR-compliant.
        </p>
      </div>
    </div>
  );
}
