"use client";

import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories)))];
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="portfolio" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="05" file="projects/" title="Projects">
          Selected mobile, web and full-stack work.
        </SectionHeader>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`border px-3 py-1 font-mono text-xs transition-colors ${
                activeCategory === cat
                  ? "border-accent text-accent"
                  : "border-line text-dim hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id} className="win flex flex-col transition-colors hover:border-line-strong">
              <div className="win-bar">
                <span>~/projects/{slug(project.title)}</span>
                <span className="text-faint">#{project.id}</span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="font-mono text-lg font-semibold text-bright">{project.title}</h3>
                <p className="flex-1 text-sm text-dim">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {[...project.techTags, ...project.categories].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 border-t border-line pt-4">
                  <button onClick={() => setSelectedProject(project)} className="btn">
                    details
                  </button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                    <ExternalLink className="h-3.5 w-3.5" /> source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div className="win w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="win-bar">
              <span>~/projects/{slug(selectedProject.title)}/README.md</span>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
                className="text-dim hover:text-bright"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4 p-6">
              <h3 className="font-mono text-xl font-semibold text-bright">{selectedProject.title}</h3>
              <p className="font-mono text-xs text-info">{selectedProject.techTags.join(" · ")}</p>
              <p className="text-foreground">{selectedProject.description}</p>
              <div className="flex justify-end gap-3 border-t border-line pt-4">
                <button onClick={() => setSelectedProject(null)} className="btn">
                  close
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view source <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;