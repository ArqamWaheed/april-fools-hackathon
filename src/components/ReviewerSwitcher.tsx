"use client";

import { ReviewerPersona, PersonaInfo } from "@/lib/types";
import { PERSONAS } from "@/lib/sample-prs";

interface ReviewerSwitcherProps {
  active: ReviewerPersona;
  onChange: (persona: ReviewerPersona) => void;
}

export function ReviewerSwitcher({ active, onChange }: ReviewerSwitcherProps) {
  return (
    <div>
      <p className="text-xs text-guardian-muted mb-2 uppercase tracking-wider font-medium">
        Reviewer Persona
      </p>
      <div className="flex flex-wrap gap-2">
        {PERSONAS.map((p: PersonaInfo) => (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            className={`text-xs px-3 py-1.5 rounded-md border transition-colors flex items-center gap-1.5 ${
              active === p.id
                ? "bg-guardian-accent/20 border-guardian-accent text-guardian-accent"
                : "bg-guardian-surface border-guardian-border text-guardian-muted hover:text-guardian-text hover:border-guardian-muted"
            }`}
          >
            <span>{p.avatar}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
