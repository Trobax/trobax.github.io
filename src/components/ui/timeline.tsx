"use client";

import {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { portfolioData } from "../../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/* useLayoutEffect warns during SSR; fall back to useEffect on the server. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type Month = (typeof MONTHS)[number];

export type JourneyItem = {
  id: string;
  year: string;
  month: Month;
  content: string;
};

// Map portfolio data to timeline items
const EXPERIENCE_ITEMS: JourneyItem[] = portfolioData.experience.map((exp, index) => {
  // Extract start date from dateRange (assumes format "Month YYYY - ...")
  const dateParts = exp.dateRange.split(' ');
  const monthStr = dateParts[0];
  const yearStr = dateParts[1];

  // Convert month to full name if needed
  const monthMap: Record<string, Month> = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
  };

  const month: Month = monthMap[monthStr] || (monthStr as Month);

  // Generate a unique id
  const id = `${exp.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${exp.position.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${yearStr}-${index}`;

  return {
    id,
    year: yearStr,
    month,
    content: `${exp.position} at ${exp.company}\n${exp.description}`,
  };
});

const DEFAULT_ITEMS: JourneyItem[] = EXPERIENCE_ITEMS;

function sortChronologically(items: JourneyItem[]) {
  return [...items].sort(
    (a, b) =>
      Number(a.year) - Number(b.year) ||
      MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month),
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export type TimelineProps = {
  /** Section id — defaults to `experience` so the navbar link resolves. */
  id?: string;
  eyebrow?: string;
  title?: string;
  highlight?: string;
  periodLabel?: string;
  items?: JourneyItem[];
  imageUrl?: string;
  imageAlt?: string;
  /** Accent gradient stops used by the progress rail, nodes and years. */
  accentFrom?: string;
  accentVia?: string;
  accentTo?: string;
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const MOBILE = "(max-width: 639px)";
const DESKTOP = "(min-width: 640px)";

export default function Timeline({
  id = "experience",
  eyebrow = "03 // experience.log",
  title = "My",
  highlight = "Experience",
  periodLabel,
  items = DEFAULT_ITEMS,
  imageUrl = "https://cdn.21st.dev/assets/mirror/b0/b0c41784074f76ac5fb6b447da87780c901135841317a096241371f24bc13ddd.jpg",
  imageAlt = "Modern office workspace",
  accentFrom = "#4ade80",
  accentVia = "#4ade80",
  accentTo = "#4ade80",
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const journey = sortChronologically(items);
  const period =
    periodLabel ??
    (journey.length
      ? `${journey[0].year} — ${journey[journey.length - 1].year}`
      : "");

  const accentVars = {
    "--tl-from": accentFrom,
    "--tl-via": accentVia,
    "--tl-to": accentTo,
  } as CSSProperties;

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const rail = railRef.current;
    const progress = progressRef.current;
    if (!section || !track || !rail || !progress) return;

    const mm = gsap.matchMedia(section);

    mm.add(
      /* gsap.matchMedia only runs the setup when at least one condition
         matches — desktop + mobile together cover every viewport, and the
         callback re-runs (with a clean revert) when crossing breakpoints. */
      { reduce: REDUCED_MOTION, mobile: MOBILE, desktop: DESKTOP },
      (context) => {
        const { reduce, mobile } = context.conditions as {
          reduce: boolean;
          mobile: boolean;
        };

        /* The "playhead" is a fixed vertical line on screen (as a fraction
           of the viewport width). The progress rail always ends exactly at
           the playhead, and each milestone reveals the moment its node
           crosses it — so line, nodes and text are always in sync. */
        const playhead = mobile ? 0.3 : 0.55;
        const playheadPct = `${playhead * 100}%`;

        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const syncProgress = () => {
          const railBox = rail.getBoundingClientRect();
          const lineLength = railBox.width;
          if (!lineLength) return;
          const filled = window.innerWidth * playhead - railBox.left;
          gsap.set(progress, {
            scaleX: gsap.utils.clamp(0, 1, filled / lineLength),
          });
        };

        /* 1) Pin the section and translate the track horizontally.
              Distance is measured from the real DOM, so it is correct at
              every viewport size and recalculated on refresh/resize. */
        const horizontal = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          onUpdate: syncProgress,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: reduce ? true : 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: syncProgress,
          },
        });

        const nodes = gsap.utils.toArray<HTMLElement>(".tl-item", rail);

        /* 2) Reduced motion: keep the user-driven horizontal scroll,
              but show every milestone immediately with no reveals. */
        if (reduce) {
          nodes.forEach((node) => node.classList.add("is-active"));
          syncProgress();
          return;
        }

        /* 3) Per-milestone reveal, driven by the horizontal animation
              through `containerAnimation`. */
        nodes.forEach((node) => {
          const isTop = node.dataset.side === "top";
          const stem = node.querySelector<HTMLElement>(".tl-stem");
          const endDot = node.querySelector<HTMLElement>(".tl-end-dot");
          const year = node.querySelector<HTMLElement>(".tl-year");
          const month = node.querySelector<HTMLElement>(".tl-month");
          const description = node.querySelector<HTMLElement>(".tl-desc");

          gsap.set(stem, {
            scaleY: 0,
            transformOrigin: isTop ? "50% 100%" : "50% 0%",
          });
          gsap.set(endDot, { scale: 0 });
          gsap.set(year, { yPercent: 110 });
          gsap.set(month, { autoAlpha: 0, x: -12 });

          const trigger = {
            trigger: node,
            containerAnimation: horizontal,
            start: `left ${playheadPct}`,
            toggleActions: "play none none reverse",
          } satisfies ScrollTrigger.Vars;

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                ...trigger,
                onEnter: () => node.classList.add("is-active"),
                onLeaveBack: () => node.classList.remove("is-active"),
              },
            })
            .to(stem, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
            .to(endDot, { scale: 1, duration: 0.35, ease: "back.out(3)" }, "-=0.15")
            .to(year, { yPercent: 0, duration: 0.7 }, "-=0.35")
            .to(month, { autoAlpha: 1, x: 0, duration: 0.5 }, "<0.1");

          /* Description lines: masked line-by-line rise. `autoSplit`
             re-splits after web fonts load and on width changes, so line
             breaks are always correct. */
          if (description) {
            SplitText.create(description, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.lines, {
                  yPercent: 110,
                  duration: 0.8,
                  stagger: 0.08,
                  delay: 0.35,
                  ease: "power3.out",
                  scrollTrigger: { ...trigger },
                }),
            });
          }
        });

        syncProgress();
      },
    );

    /* Images / fonts above this section can shift its offset after
       hydration — re-measure once everything has settled. */
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      requestAnimationFrame(refresh);
    } else {
      window.addEventListener("load", refresh, { once: true });
    }
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [journey.length]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative h-svh w-full overflow-hidden bg-background text-foreground"
      style={accentVars}
    >
      {/* Faint dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] bg-[size:24px_24px]"
      />

      <div
        ref={trackRef}
        className="relative flex h-full w-max items-center gap-[clamp(3rem,7vw,7rem)] pl-[6vw] pt-16 will-change-transform"
      >
        {/* ---------- Intro panel ---------- */}
        <header className="flex w-[min(34rem,84vw)] shrink-0 flex-col gap-6">
          <span className="w-fit font-mono text-xs text-faint">
            <span className="text-accent">{eyebrow.split(" ")[0]}</span>{" "}
            {eyebrow.split(" ").slice(1).join(" ")}
          </span>

          <h2
            id={`${id}-title`}
            className="font-mono text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1] tracking-tight text-bright"
          >
            {title}{" "}
            <span className="text-accent">{highlight}</span>
          </h2>

          {period && (
            <p className="font-mono text-[clamp(1rem,1.4vw,1.25rem)] text-dim">
              {period}
            </p>
          )}

          <figure className="group relative h-[clamp(10rem,30vh,18rem)] overflow-hidden rounded-[4px] border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover opacity-60 grayscale"
            />
            <figcaption className="absolute bottom-3 left-3 border border-line bg-background px-2.5 py-1 font-mono text-xs text-dim">
              <span className="text-accent">{journey.length}</span> entries
            </figcaption>
          </figure>

          <p className="flex items-center gap-3 font-mono text-xs text-faint">
            <span className="relative block h-px w-10 overflow-hidden bg-white/10">
              <span className="absolute inset-y-0 left-0 w-1/2 animate-[tl-hint_1.8s_ease-in-out_infinite] bg-[var(--tl-from)]" />
            </span>
            scroll to tail the log
          </p>
        </header>

        {/* ---------- Rail ---------- */}
        <ol
          ref={railRef}
          className="relative flex h-[min(72vh,42rem)] shrink-0 items-stretch"
        >
          {/* Base line + progress line (progress is scaled from JS) */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10"
          />
          <div
            ref={progressRef}
            aria-hidden
            className="absolute inset-x-0 top-1/2 h-[2px] origin-left -translate-y-1/2 scale-x-0 rounded-full bg-[var(--tl-from)]"
          />

          {journey.map((item, index) => {
            const side = index % 2 === 0 ? "top" : "bottom";
            const isTop = side === "top";

            return (
              <li
                key={item.id}
                data-side={side}
                className="tl-item group/item relative grid w-[clamp(13rem,20vw,19rem)] shrink-0 grid-rows-2 max-sm:w-[40vw]"
              >
                {/* Node on the centre line */}
                <span
                  aria-hidden
                  className="tl-node absolute left-0 top-1/2 z-10 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[3px] border border-line-strong bg-background transition-colors duration-300"
                >
                  <span className="size-2 rounded-[1px] bg-faint transition-colors duration-300" />
                </span>

                <div
                  className={`relative flex flex-col ${
                    isTop
                      ? "row-start-1 justify-start pb-6"
                      : "row-start-2 justify-end pt-6"
                  }`}
                >
                  {/* Stem from the centre line out to the content */}
                  <span
                    aria-hidden
                    className={`tl-stem absolute left-0 w-px bg-gradient-to-b ${
                      isTop
                        ? "bottom-0 top-2 from-[var(--tl-via)]/0 to-[var(--tl-from)]"
                        : "bottom-2 top-0 from-[var(--tl-from)] to-[var(--tl-via)]/0"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`tl-end-dot absolute left-0 size-3 -translate-x-1/2 rounded-[2px] bg-[var(--tl-from)] ${
                      isTop ? "top-0" : "bottom-0"
                    }`}
                  />

                  <article
                    className={`w-[clamp(15rem,28vw,24rem)] pl-6 max-sm:w-[72vw] ${
                      isTop ? "-mt-1.5" : "-mb-1.5"
                    }`}
                  >
                    <h3 className="flex flex-col gap-1">
                      <span className="block overflow-hidden pb-1">
                        <span className="tl-year block font-mono text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-accent">
                          {item.year}
                        </span>
                      </span>
                      <span className="tl-month font-mono text-xs uppercase tracking-[0.2em] text-warn">
                        {item.month}
                      </span>
                    </h3>
                    <p className="tl-desc mt-4 max-w-[22rem] text-[clamp(0.95rem,1.15vw,1.125rem)] leading-relaxed text-foreground">
                      {item.content}
                    </p>
                  </article>
                </div>
              </li>
            );
          })}

          {/* Closing panel: also provides trailing space so the last node
              reaches the playhead and its content stays on screen. */}
          <li className="flex w-[clamp(34rem,70vw,60rem)] shrink-0 items-center pl-[clamp(16rem,28vw,26rem)] pr-[6vw] max-sm:w-[130vw] max-sm:pl-[78vw]">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-faint">
                <span className="text-accent">$</span> git checkout -b next-chapter
              </span>
              <p className="font-mono text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold leading-tight tracking-tight text-bright">
                Be part of my <span className="text-accent">journey.</span>
              </p>
              <p className="max-w-sm text-dim">
                The story isn&apos;t finished. Let&apos;s write the next milestone together.
              </p>
              <a
                href="#contact"
                className="btn btn-primary mt-2 w-fit"
              >
                Let&apos;s build something
                <span aria-hidden>→</span>
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}