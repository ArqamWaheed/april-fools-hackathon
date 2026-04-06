"use client";

import { ReviewerPersona, PersonaInfo } from "@/lib/types";
import { PERSONAS } from "@/lib/sample-prs";

interface ReviewerSwitcherProps {
  active: ReviewerPersona;
  onChange: (persona: ReviewerPersona) => void;
}

const PERSONA_DESCRIPTIONS: Record<ReviewerPersona, string> = {
  guardian_core: "Balanced but firm. References fake internal policies.",
  compliance_beast: "Sees policy violations everywhere. Everything needs a form.",
  staff_engineer_of_doom: "Impossibly high taste. Philosophy > function.",
  ai_optimizer: "Cites fake metrics with false precision.",
  passive_aggressive_teammate: "Friendly suggestions that are definitely requirements.",
};

export function ReviewerSwitcher({ active, onChange }: ReviewerSwitcherProps) {
  return (
    <div>
      <p className="text-xs text-guardian-muted mb-2 uppercase tracking-wider font-medium">
        Reviewer Persona
      </p>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {PERSONAS.map((p: PersonaInfo) => (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            title={PERSONA_DESCRIPTIONS[p.id]}
            className={`text-xs px-3 py-2 sm:py-1.5 rounded-md border transition-all flex items-center gap-1.5 ${
              active === p.id
                ? "bg-guardian-accent/20 border-guardian-accent text-guardian-accent"
                : "bg-guardian-surface border-guardian-border text-guardian-muted hover:text-guardian-text hover:border-guardian-muted"
            }`}
          >
            <span className="text-sm">{p.avatar}</span>
            <span className="truncate">{p.name}</span>
          </button>
        ))}
      </div>
      <p className="text-[11px] text-guardian-muted/60 mt-1.5 italic">
        {PERSONA_DESCRIPTIONS[active]}
      </p>
    </div>
  );
}
