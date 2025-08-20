"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * <ResumeCodeEditor />
 *
 * A lightweight, dependency-free React component that LOOKS like a code editor
 * and types/erases code on a loop — perfect for portfolios/resumes.
 *
 * Props:
 * - snippets: string[]                // array of code snippets to showcase
 * - height?: number                   // px height of the editor (default 220)
 * - loop?: boolean                    // whether to loop through snippets (default true)
 * - typingSpeedMs?: number            // base typing speed (default 28)
 * - deletingSpeedMs?: number          // base deleting speed (default 18)
 * - pauseBeforeDeleteMs?: number      // pause after full snippet typed (default 1100)
 * - pauseBeforeNextMs?: number        // pause after deletion before next (default 400)
 * - title?: string                    // title shown in the tab area (default "app.tsx")
 * - className?: string                // additional wrapper classes
 * - theme?: 'dark' | 'light'          // simple theming (default 'dark')
 */
export default function ResumeCodeEditor({
  snippets = defaultSnippets,
  height = 420,
  loop = true,
  typingSpeedMs = 75,
  deletingSpeedMs = 52,
  pauseBeforeDeleteMs = 1500,
  pauseBeforeNextMs = 400,
  title = "app.tsx",
  className = "",
  theme = "dark",
}) {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef(0);

  // pick active snippet
  const snippet = useMemo(() => snippets[Math.max(0, snippetIndex % snippets.length)] || "", [snippets, snippetIndex]);

  // typing machine
  useEffect(() => {
    if (paused) return; // honor pauses

    const base = deleting ? deletingSpeedMs : typingSpeedMs;
    const jitter = Math.floor(Math.random() * 60) - 30; // human-ish
    const delay = Math.max(4, base + jitter);

    const id = window.setTimeout(() => {
      if (!deleting) {
        // typing forward
        const next = snippet.slice(0, text.length + 1);
        setText(next);
        if (next.length === snippet.length) {
          // reached end — small pause, then start deleting
          setPaused(true);
          window.setTimeout(() => {
            setPaused(false);
            setDeleting(true);
          }, pauseBeforeDeleteMs);
        }
      } else {
        // deleting backward
        const next = snippet.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setPaused(true);
          window.setTimeout(() => {
            setPaused(false);
            setSnippetIndex((i) => {
              const nextIdx = i + 1;
              if (!loop && nextIdx >= snippets.length) return i; // stop at last
              return nextIdx % snippets.length;
            });
          }, pauseBeforeNextMs);
        }
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [text, deleting, paused, snippet, typingSpeedMs, deletingSpeedMs, pauseBeforeDeleteMs, pauseBeforeNextMs, loop, snippets.length]);

  // caret blink via CSS class toggle (independent of typing loop)
  useEffect(() => {
    let last = performance.now();
    const step = (t) => {
      const dt = t - last;
      if (dt > 500) {
        last = t;
        frameRef.current ^= 1; // toggle 0/1
      }
      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`w-full max-w-2xl rounded-2xl shadow-xl ring-1 ${
        isDark ? "bg-zinc-900 ring-zinc-800" : "bg-white ring-zinc-200"
      } ${className}`}
      style={{ height }}
    >
      {/* Title bar */}
      <div
        className={`flex items-center justify-between px-4 py-2 rounded-t-2xl border-b ${
          isDark ? "border-zinc-800 bg-zinc-950/50" : "border-zinc-200 bg-zinc-50"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
          <span className={`ml-3 text-xs tabular-nums ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>{title}</span>
        </div>
        {/* <div className={`text-[10px] ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          typing {deleting ? "(erasing)" : "(streaming)"}
        </div> */}
      </div>

      {/* Editor body */}
      <div className={`relative h-[calc(100%-40px)] overflow-hidden font-mono text-sm leading-relaxed ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
        <div className={`absolute inset-0 p-4 overflow-hidden ${isDark ? "bg-gradient-to-b from-zinc-900 to-zinc-950" : "bg-gradient-to-b from-white to-zinc-50"}`}>
          {/* subtle grid background */}
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(127,127,127,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* code content */}
          <pre className="relative whitespace-pre-wrap break-words pr-6">
            <code>
              {text}
              <span
                className={`inline-block align-[-2px] w-2 h-4 ml-0.5 ${
                  frameRef.current ? "opacity-0" : "opacity-100"
                } ${isDark ? "bg-zinc-200" : "bg-zinc-800"}`}
              />
            </code>
          </pre>

          {/* gradient fade at bottom */}
          <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 ${isDark ? "from-transparent to-zinc-950" : "from-transparent to-zinc-50"} bg-gradient-to-b`} />
        </div>
      </div>
    </div>
  );
}

// Example default snippets (feel free to replace via props)
const defaultSnippets = [
  `// Minimal Express server\nimport express from 'express'\nconst app = express()\n\napp.get('/health', (_, res) => res.json({ ok: true }))\n\napp.listen(3000, () => {\n  console.log('🚀 Server ready on http://localhost:3000')\n})`,
  `// React: tiny state store\nimport { useSyncExternalStore } from 'react'\n\nconst createStore = (initial) => {\n  let state = initial;\n  const listeners = new Set();\n  return {\n    get: () => state,\n    set: (v) => { state = typeof v === 'function' ? v(state) : v; listeners.forEach(l=>l()); },\n    subscribe: (l) => (listeners.add(l), () => listeners.delete(l)),\n  };\n};\n\nexport const counter = createStore(0);\nexport const useCounter = () => useSyncExternalStore(counter.subscribe, counter.get);`,
  `// Python: quicksort\nfrom typing import List\n\ndef quicksort(a: List[int]) -> List[int]:\n    if len(a) <= 1:\n        return a\n    pivot = a[len(a)//2]\n    left  = [x for x in a if x < pivot]\n    mid   = [x for x in a if x == pivot]\n    right = [x for x in a if x > pivot]\n    return quicksort(left) + mid + quicksort(right)`,
];
