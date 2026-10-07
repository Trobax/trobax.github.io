"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "./Icons";
import { portfolioData } from "../data";

const socialLinks = [
  { platform: "LinkedIn", url: "https://bit.ly/2GOFsWy", icon: LinkedinIcon },
  { platform: "Facebook", url: "https://bit.ly/2Lb6m0r", icon: FacebookIcon },
  { platform: "Twitter", url: "https://bit.ly/2DEYFt1", icon: TwitterIcon },
  { platform: "Email", url: "mailto:zhammoud.zakaria@gmail.com", icon: Mail },
];

const stack = ["Java 17/21", "Spring Boot", "React", "PostgreSQL", "REST APIs"];

const metrics = [
  { key: "years_experience", value: "7+" },
  { key: "enterprise_projects", value: "15+" },
  { key: "test_coverage", value: "100%" },
];

const Hero = () => {
  const { name } = portfolioData.hero;

  return (
    <section id="home" className="px-6 pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="win">
          <div className="win-bar">
            <span>zakaria@dev: ~</span>
            <span className="flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              open to new roles
            </span>
          </div>

          <div className="space-y-8 p-6 font-mono sm:p-10">
            <div>
              <p className="text-sm text-dim">
                <span className="text-accent">$</span> whoami
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-bright sm:text-6xl">
                {name}
                <span className="cursor" aria-hidden />
              </h1>
              <p className="mt-3 text-lg text-warn sm:text-xl">
                Senior Software Engineer
              </p>
            </div>

            <div>
              <p className="text-sm text-dim">
                <span className="text-accent">$</span> cat summary.txt
              </p>
              <p className="mt-3 max-w-2xl font-sans text-base text-foreground">
                Senior engineer building reliable enterprise software end to end. Deep
                experience with Java and Spring Boot backends, React frontends, and
                leading agile teams from requirements to production.
              </p>
            </div>

            <div>
              <p className="text-sm text-dim">
                <span className="text-accent">$</span> echo $STACK
              </p>
              <p className="mt-3 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#portfolio" className="btn btn-primary">
                view projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1mNgySDpiR4fYTTJ2UdFCRFXqvg06vWWj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Download className="h-4 w-4" /> download cv
              </a>
              <span className="mx-1 hidden h-5 w-px bg-line sm:block" />
              {socialLinks.map(({ platform, url, icon: Icon }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={platform}
                  aria-label={platform}
                  className="p-2 text-dim transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-1 divide-y divide-line border-t border-line font-mono text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((m) => (
              <div key={m.key} className="flex items-baseline justify-between gap-4 px-6 py-4 sm:px-8">
                <dt className="text-dim">{m.key}</dt>
                <dd className="text-lg font-semibold text-accent">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;