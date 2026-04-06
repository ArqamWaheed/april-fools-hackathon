"use client";

import { SamplePR } from "@/lib/types";
import { FileCode } from "lucide-react";

interface CodeInputProps {
  code: string;
  onChange: (code: string) => void;
  activeSample: SamplePR | null;
  onSubmit?: () => void;
}

export function CodeInput({ code, onChange, activeSample, onSubmit }: CodeInputProps) {
  return (
    <div className="border border-guardian-border rounded-lg overflow-hidden focus-within:border-guardian-accent/50 transition-colors">
      {/* File tab bar */}
      <div className="bg-guardian-surface border-b border-guardian-border px-4 py-2 flex items-center gap-2">
        <FileCode className="w-4 h-4 text-guardian-muted" />
        <span className="text-sm text-guardian-text font-mono">
          {activeSample?.files?.[0] || "untitled.ts"}
        </span>
        {activeSample && activeSample.files.length > 1 && (
          <span className="text-xs text-guardian-muted">
            +{activeSample.files.length - 1} more
          </span>
        )}
        <span className="ml-auto text-[10px] text-guardian-muted/40 font-mono">
          {code.split("\n").length} lines
        </span>
      </div>

      {/* Code editor */}
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            onSubmit?.();
          }
        }}
        placeholder="Paste your code here, or select a sample PR above…"
        className="w-full min-h-[280px] bg-guardian-bg text-guardian-text font-mono text-sm p-4 resize-y focus:outline-none placeholder:text-guardian-muted/50"
        spellCheck={false}
      />
    </div>
  );
}
