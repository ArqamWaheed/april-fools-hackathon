import { SamplePR, PersonaInfo } from "./types";

// ─── Sample PRs ─────────────────────────────────────────────

export const SAMPLE_PRS: SamplePR[] = [
  {
    id: "fix-typo",
    title: "Fix typo in button label",
    description: "Changed 'Submitt' to 'Submit' on the login page.",
    branch: "fix/button-typo",
    files: ["src/components/LoginButton.tsx"],
    code: `// src/components/LoginButton.tsx

export function LoginButton() {
  return (
    <button
      type="submit"
      className="btn btn-primary"
    >
      Submit
    </button>
  );
}`,
  },
  {
    id: "refactor-auth",
    title: "Refactor auth helper to use async/await",
    description: "Replace .then() chains with async/await in auth module.",
    branch: "refactor/auth-async",
    files: ["src/lib/auth.ts", "src/lib/session.ts"],
    code: `// src/lib/auth.ts

export async function authenticateUser(email: string, password: string) {
  const user = await db.users.findByEmail(email);
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return null;

  const session = await createSession(user.id);
  return { user, session };
}

async function createSession(userId: string) {
  return db.sessions.create({
    userId,
    expiresAt: new Date(Date.now() + 86400000),
    token: crypto.randomUUID(),
  });
}`,
  },
  {
    id: "dark-mode",
    title: "Add dark mode toggle",
    description: "Adds a theme toggle button to the navbar and persists preference.",
    branch: "feature/dark-mode",
    files: ["src/components/ThemeToggle.tsx", "src/hooks/useTheme.ts"],
    code: `// src/components/ThemeToggle.tsx

import { useTheme } from '../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

// src/hooks/useTheme.ts

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark');
  };

  return { theme, toggle };
}`,
  },
  {
    id: "center-div",
    title: "Center the hero div",
    description: "Use flexbox to center the hero section. Finally.",
    branch: "fix/center-div",
    files: ["src/app/page.tsx"],
    code: `// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="mt-2 text-gray-500">This div is centered.</p>
      </div>
    </main>
  );
}`,
  },
  {
    id: "remove-util",
    title: "Remove unused formatCurrency util",
    description: "This util was added in 2019 and never imported anywhere.",
    branch: "chore/remove-dead-code",
    files: ["src/utils/formatCurrency.ts"],
    code: `// src/utils/formatCurrency.ts  (DELETED)

/**
 * Formats a number as USD currency string.
 * @deprecated Nobody uses this. Nobody ever used this.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}`,
  },
  {
    id: "add-ai",
    title: "Add AI-powered summarizer",
    description: "Uses OpenAI GPT-4 to summarize user feedback into actionable insights.",
    branch: "feature/ai-summarizer",
    files: ["src/lib/ai-summarizer.ts", "src/app/api/summarize/route.ts"],
    code: `// src/lib/ai-summarizer.ts

import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function summarizeFeedback(feedback: string[]): Promise<string> {
  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Summarize user feedback into 3 bullet points.' },
      { role: 'user', content: feedback.join('\\n') },
    ],
    temperature: 0.3,
  });

  return response.choices[0].message.content ?? 'No summary available.';
}`,
  },
  {
    id: "todo-app",
    title: "feat: implement entire todo app",
    description: "Full CRUD todo app with persistence. Built during a meeting.",
    branch: "feature/todo-app",
    files: ["src/app/todos/page.tsx", "src/lib/todos.ts"],
    code: `// src/app/todos/page.tsx

'use client';
import { useState } from 'react';

interface Todo { id: number; text: string; done: boolean; }

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="flex gap-2 mb-4">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 border p-2" />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">Add</button>
      </div>
      {todos.map(t => (
        <div key={t.id} onClick={() => toggleTodo(t.id)} className="cursor-pointer p-2">
          <span className={t.done ? 'line-through' : ''}>{t.text}</span>
        </div>
      ))}
    </div>
  );
}`,
  },
];

// ─── Reviewer Personas ──────────────────────────────────────

export const PERSONAS: PersonaInfo[] = [
  {
    id: "guardian_core",
    name: "Guardian Core",
    title: "Senior Review Orchestrator",
    avatar: "🛡️",
    color: "text-guardian-accent",
  },
  {
    id: "compliance_beast",
    name: "Compliance Beast",
    title: "Chief Policy Enforcement Officer",
    avatar: "📋",
    color: "text-guardian-warning",
  },
  {
    id: "staff_engineer_of_doom",
    name: "Staff Engineer of Doom",
    title: "Principal Taste Architect",
    avatar: "💀",
    color: "text-guardian-purple",
  },
  {
    id: "ai_optimizer",
    name: "AI Optimizer",
    title: "Metrics & Confidence Analyst",
    avatar: "🤖",
    color: "text-guardian-success",
  },
  {
    id: "passive_aggressive_teammate",
    name: "Passive-Aggressive Teammate",
    title: "Friendly Neighborhood Blocker",
    avatar: "😊",
    color: "text-guardian-danger",
  },
];

// ─── Loading Stages ─────────────────────────────────────────

export const LOADING_STAGES = [
  "Indexing codebase beliefs…",
  "Scanning for unapproved convenience…",
  "Aligning governance context…",
  "Calibrating reviewer temperament…",
  "Consulting enterprise policy matrix…",
  "Evaluating semantic posture…",
  "Cross-referencing naming karma…",
  "Computing cyclomatic intention…",
  "Validating emotional idempotency…",
  "Reconciling merge ethics…",
  "Preparing devastation report…",
  "Finalizing disappointment…",
];
