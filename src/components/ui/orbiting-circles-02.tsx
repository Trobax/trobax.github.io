"use client";

import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

const orbits = [
  {
    size: "w-110 h-110 md:w-180 md:h-180",
    duration: 18,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/27/279f60ffd95d6d6e982c0d9544f465b21ba7895d2a7ba9dc2ea798f0aad31074.svg", alt: "Supabase", angle: -60 },
      { src: "https://cdn.21st.dev/assets/mirror/fd/fd242636f2a6c8ce90ddf51d45234a7add1a7262d0d517ef551a290d99fdb620.svg", alt: "gemini", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/d2/d27b280b7858bb5b89008eb325b9d4bdbd93ee1df92f8210247da4abc8a9c1ce.svg", alt: "Make", angle: 60 },
    ],
  },
  {
    size: "w-150 h-150 md:w-220 md:h-220",
    duration: 24,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/cd/cdf9d8e18269a990e7854c0255d64513e5f8b6052b8580dd8f24480a85ec130a.svg", alt: "Figma", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/83/83a5f27a428146febbe4672046c78bfa796a7931aebab5705655cab4fffb5794.svg", alt: "Slack", angle: -90 },
    ],
  },
  {
    size: "w-180 h-180 md:w-265 md:h-265",
    duration: 30,
    icons: [
      { src: "https://cdn.21st.dev/assets/mirror/b5/b58af96de173670c64254e6d93ca4e4daf57b2637cc4fb90529f3232ea1bdf3f.svg", alt: "Claude", angle: -60 },
      { src: "https://cdn.21st.dev/assets/mirror/a2/a21f0f00193ad70e39d2d82b6437464853f77bf6569adeb1ecc6d1f7bc0f5226.svg", alt: "react", angle: 0 },
      { src: "https://cdn.21st.dev/assets/mirror/96/96c6123c466766d6714874ae77ba88be923c98313f09bbd72c9860ff26797d53.svg", alt: "python", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-110 md:h-160 overflow-hidden flex justify-center">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-75 md:w-145 z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-border ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-3 sm:p-4 border border-border rounded-full bg-background -mt-8 relative z-10"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={32}
                    height={32}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}