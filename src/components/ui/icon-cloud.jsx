"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Interactive 3D icon sphere (dependency-free canvas implementation).
 * - Drag to spin, release to let it coast
 * - Auto-rotates, pauses while hovering
 * - Hover shows the name of the front-most icon under the cursor
 * - Falls back to a text chip if an icon image fails to load
 */
const IconCloud = ({ items, className = "" }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Fibonacci sphere distribution */
    const n = items.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const points = items.map((item, i) => {
      const y = 1 - (i / Math.max(1, n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * golden;
      const img = new Image();
      const node = { item, x: Math.cos(phi) * r, y, z: Math.sin(phi) * r, img, ok: false };
      img.onload = () => (node.ok = true);
      img.src = item.src;
      return node;
    });

    let width = 0;
    let height = 0;
    let dpr = 1;
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let rotX = 0.3;
    let rotY = 0;
    let velX = 0;
    let velY = reduceMotion ? 0 : 0.004;
    let dragging = false;
    let inside = false;
    let last = { x: 0, y: 0 };
    let pointer = null;
    let hoverIdx = null;
    let projected = [];

    const onDown = (e) => {
      dragging = true;
      last = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (dragging) {
        velY = (e.clientX - last.x) * 0.0035;
        velX = -(e.clientY - last.y) * 0.0035;
        last = { x: e.clientX, y: e.clientY };
      }
    };
    const onUp = (e) => {
      dragging = false;
      canvas.releasePointerCapture?.(e.pointerId);
      canvas.style.cursor = "grab";
    };
    const onEnter = () => (inside = true);
    const onLeave = () => {
      inside = false;
      pointer = null;
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointerleave", onLeave);

    let raf;
    const frame = () => {
      const radius = Math.min(width, height) * 0.36;
      const base = Math.min(width, height) * 0.13;

      if (!dragging) {
        velX *= 0.95;
        velY += ((reduceMotion || inside ? 0 : 0.004) - velY) * 0.03;
      }
      rotX += velX;
      rotY += velY;

      const cx = Math.cos(rotY);
      const sx = Math.sin(rotY);
      const cy = Math.cos(rotX);
      const sy = Math.sin(rotX);

      projected = points.map((p) => {
        const x1 = p.x * cx + p.z * sx;
        const z1 = -p.x * sx + p.z * cx;
        const y2 = p.y * cy - z1 * sy;
        const z2 = p.y * sy + z1 * cy;
        const depth = (z2 + 1) / 2;
        return {
          p,
          x: width / 2 + x1 * radius,
          y: height / 2 + y2 * radius,
          z: z2,
          size: base * (0.55 + 0.75 * depth),
          alpha: 0.25 + 0.75 * depth,
        };
      });
      projected.sort((a, b) => a.z - b.z);

      /* hit test: front-most icon under the pointer */
      let hit = null;
      if (pointer && !dragging) {
        for (let i = projected.length - 1; i >= 0; i--) {
          const q = projected[i];
          if (Math.hypot(pointer.x - q.x, pointer.y - q.y) < q.size * 0.6) {
            hit = q.p.item.label;
            break;
          }
        }
      }
      if (hit !== hoverIdx) {
        hoverIdx = hit;
        setHovered(hit);
      }

      ctx.clearRect(0, 0, width, height);
      for (const q of projected) {
        const isHit = hoverIdx === q.p.item.label;
        ctx.globalAlpha = isHit ? 1 : q.alpha;
        const s = isHit ? q.size * 1.2 : q.size;
        if (q.p.ok) {
          ctx.drawImage(q.p.img, q.x - s / 2, q.y - s / 2, s, s);
        } else {
          ctx.font = `${Math.max(9, s * 0.28)}px ui-monospace, monospace`;
          const label = q.p.item.label;
          const w = ctx.measureText(label).width + 12;
          const h = s * 0.42;
          ctx.fillStyle = "#161b24";
          ctx.strokeStyle = "#343f4e";
          ctx.fillRect(q.x - w / 2, q.y - h / 2, w, h);
          ctx.strokeRect(q.x - w / 2, q.y - h / 2, w, h);
          ctx.fillStyle = "#d5dbe3";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label, q.x, q.y + 1);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [items]);

  return (
    <div ref={wrapRef} className={`relative aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab touch-none"
        role="img"
        aria-label={`Interactive 3D cloud of technologies: ${items.map((i) => i.label).join(", ")}`}
      />
      <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 border border-line bg-background px-2.5 py-1 font-mono text-xs text-dim">
        {hovered ? <span className="text-accent">{hovered}</span> : "drag to rotate"}
      </span>
    </div>
  );
};

export default IconCloud;
