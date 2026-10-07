"use client";

import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-line px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-dim">
      <span className="text-center">
        © {new Date().getFullYear()} Zakaria Hammoud. All rights reserved.
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 hover:text-accent"
        aria-label="Back to top"
      >
        top <ArrowUp className="h-3.5 w-3.5" />
      </button>
    </div>
  </footer>
);

export default Footer;