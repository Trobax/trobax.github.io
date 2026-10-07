"use client";

import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";

const Education = () => {
  const { degrees, certifications } = portfolioData.education;

  return (
    <section id="education" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" file="education.md" title="Education & Certifications">
          Formal degrees, diplomas and professional certifications.
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 font-mono text-sm text-warn"># degrees</h3>
            <ul className="space-y-6">
              {degrees.map((d) => (
                <li key={d.title} className="border-l border-line-strong pl-5">
                  <h4 className="font-mono text-sm font-semibold text-bright">{d.title}</h4>
                  <p className="mt-1 font-mono text-xs text-accent">{d.details}</p>
                  <p className="mt-2 text-sm text-dim">{d.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-sm text-warn"># certifications</h3>
            <ul className="space-y-6">
              {certifications.map((c) => (
                <li key={c.title} className="border-l border-line-strong pl-5">
                  <h4 className="font-mono text-sm font-semibold text-bright">{c.title}</h4>
                  <p className="mt-1 font-mono text-xs text-accent">{c.details}</p>
                  <p className="mt-2 text-sm text-dim">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;