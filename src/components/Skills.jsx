"use client";

import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import IconCloud from "./ui/icon-cloud";

/* Skill name -> simple-icons slug. Icons are tinted to the site's
   foreground colour; any that fail to load render as text chips. */
const TINT = "d5dbe3";
const slugs = {
  Java: "openjdk",
  "Spring Boot": "springboot",
  Angular: "angular",
  Aurelia: "aurelia",
  JavaScript: "javascript",
  HTML5: "html5",
  CSS3: "css",
  XML: null,
  Python: "python",
  MySQL: "mysql",
  "PostgreSQL/PgAdmin": "postgresql",
  GitHub: "github",
  GitLab: "gitlab",
};

const extras = [
  { label: "React", slug: "react" },
  { label: "TypeScript", slug: "typescript" },
  { label: "Next.js", slug: "nextdotjs" },
  { label: "Docker", slug: "docker" },
  { label: "Git", slug: "git" },
];

const Skills = () => {
  const { categories } = portfolioData.skills;

  const names = categories.flatMap((c) => c.skills);
  const cloudItems = [
    ...names.map((label) => ({ label, slug: slugs[label] })),
    ...extras,
  ]
    .filter((i) => i.slug)
    .map((i) => ({
      label: i.label,
      src: `https://cdn.simpleicons.org/${i.slug}/${TINT}`,
    }));

  return (
    <section id="skills" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" file="skills.config" title="Skills">
          Languages, frameworks, databases and tooling I use day to day.
        </SectionHeader>

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <div className="win lg:col-span-3">
            <div className="win-bar">
              <span>stack.sphere</span>
              <span className="text-faint">{cloudItems.length} icons</span>
            </div>
            <IconCloud items={cloudItems} className="mx-auto max-w-[34rem]" />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {categories.map((category) => (
              <div key={category.title} className="win flex-1">
                <div className="win-bar">
                  <span>{category.title.toLowerCase().replace(/[^a-z]+/g, "_")}</span>
                  <span className="text-faint">{category.skills.length}</span>
                </div>
                <ul className="flex flex-wrap gap-2 p-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;