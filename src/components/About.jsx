"use client";

import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";

const About = () => {
  const { bio, itTools, adobeTools, contactDetails } = portfolioData.about;

  const profile = [
    ["name", "Zakaria Hammoud"],
    ["role", "Senior Software Engineer"],
    ["location", "Tetouan, Morocco"],
    ["email", contactDetails.email, `mailto:${contactDetails.email}`],
    ["phone", contactDetails.phone, "tel:+212623261949"],
  ];

  return (
    <section id="about" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" file="about.md" title="About">
          Software engineer focused on enterprise-grade applications, dependable
          backends and maintainable UIs.
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="win">
            <div className="win-bar">
              <span>profile.json</span>
            </div>
            <dl className="space-y-3 p-5 font-mono text-sm">
              {profile.map(([k, v, href]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-20 shrink-0 text-info">{k}</dt>
                  <dd className="min-w-0 break-words text-foreground">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-accent">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="win">
            <div className="win-bar">
              <span>bio.md</span>
            </div>
            <ul className="space-y-4 p-5 text-sm">
              {bio.map((paragraph, i) => (
                <li key={i} className="flex gap-3 text-foreground">
                  <span className="select-none font-mono text-accent">&gt;</span>
                  <p>{paragraph}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="win">
            <div className="win-bar">
              <span>core_stack</span>
            </div>
            <p className="p-5 font-mono text-xs leading-relaxed text-dim">{itTools}</p>
          </div>

          <div className="win">
            <div className="win-bar">
              <span>design_tools</span>
            </div>
            <p className="p-5 font-mono text-xs leading-relaxed text-dim">{adobeTools}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;