"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "portfolio", label: "projects" },
  { id: "contact", label: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || isOpen
          ? "border-line bg-background/95"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-mono text-sm text-bright"
        >
          <span className="text-accent">~/</span>zakaria
          <span className="text-faint">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className="px-3 py-1 font-mono text-xs text-dim transition-colors hover:text-accent"
            >
              <span className="text-faint">0{i + 1}.</span>
              {s.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-dim hover:text-accent lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => handleNavClick(e, s.id)}
                  className="py-2 font-mono text-sm text-dim hover:text-accent"
                >
                  <span className="text-faint">0{i + 1}.</span>
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;