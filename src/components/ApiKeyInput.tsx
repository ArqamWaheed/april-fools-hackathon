"use client";

import { useState, useEffect } from "react";
import { Key, Eye, EyeOff, Check, Trash2 } from "lucide-react";

const STORAGE_KEY = "mg9k-gemini-api-key";

interface ApiKeyInputProps {
  onKeyChange: (key: string) => void;
}

export default function ApiKeyInput({ onKeyChange }: ApiKeyInputProps) {
  const [key, setKey] = useState("");
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSavedFlash, setShowSavedFlash] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setKey(stored);
      setSaved(true);
      onKeyChange(stored);
    }
  }, [onKeyChange]);

  function handleSave() {
    if (!key.trim()) return;
    localStorage.setItem(STORAGE_KEY, key.trim());
    setSaved(true);
    onKeyChange(key.trim());
    setShowSavedFlash(true);
    setTimeout(() => setShowSavedFlash(false), 2000);
  }

  function handleClear() {
    localStorage.removeItem(STORAGE_KEY);
    setKey("");
    setSaved(false);
    onKeyChange("");
  }

  return (
    <div className="border border-guardian-border rounded-lg bg-guardian-surface p-3">
      <div className="flex items-center gap-2 mb-2">
        <Key className="w-3.5 h-3.5 text-guardian-accent" />
        <span className="text-xs font-medium text-guardian-text">
          Gemini API Key
        </span>
        {saved && (
          <span className="text-[10px] text-guardian-success flex items-center gap-1">
            <Check className="w-3 h-3" /> Saved
          </span>
        )}
        {showSavedFlash && (
          <span className="text-[10px] text-guardian-success animate-pulse">
            ✓ Stored in localStorage
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type={visible ? "text" : "password"}
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
              setSaved(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
            placeholder="AIza..."
            className="w-full bg-guardian-bg border border-guardian-border rounded-md px-3 py-1.5 text-xs text-guardian-text font-mono focus:outline-none focus:border-guardian-accent transition-colors pr-8"
          />
          <button
            onClick={() => setVisible(!visible)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-guardian-muted hover:text-guardian-text transition-colors"
            type="button"
          >
            {visible ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <button
          onClick={handleSave}
          disabled={!key.trim()}
          className="px-3 py-1.5 text-xs font-medium rounded-md bg-guardian-accent text-white hover:bg-guardian-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Save
        </button>

        {saved && (
          <button
            onClick={handleClear}
            className="px-2 py-1.5 text-xs rounded-md border border-guardian-border text-guardian-muted hover:text-guardian-danger hover:border-guardian-danger/50 transition-colors"
            title="Remove API key"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <p className="text-[10px] text-guardian-muted/60 mt-1.5">
        Optional — enables AI-powered reviews via Gemini. Without it, you get our equally devastating fallback reviews.
        Your key stays in your browser&apos;s localStorage.{" "}
        <a
          href="https://aistudio.google.com/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-guardian-accent hover:underline"
        >
          Get a free key →
        </a>
      </p>
    </div>
  );
}
