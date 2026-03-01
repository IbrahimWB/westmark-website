"use client";

import { useEffect, useRef } from "react";

export type HeroCursorHaloProps = {
  className?: string;
  color?: string;
  radius?: number;
  intensity?: number;
  smoothing?: number;
  visible?: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function HeroCursorHalo({
  className = "",
  color = "39, 220, 255",
  radius = 320,
  intensity = 0.34,
  smoothing = 0.12,
  visible = false,
}: HeroCursorHaloProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const halo = haloRef.current;
    if (!host || !halo) return;
    const scopeSection = host.closest("section");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const state = {
      targetX: 0.5,
      targetY: 0.46,
      x: 0.5,
      y: 0.46,
      inside: false,
      rafId: 0,
    };

    const updateTarget = (clientX: number, clientY: number) => {
      const rect = host.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const responsiveScale = rect.width < 640 ? 0.64 : rect.width < 1024 ? 0.8 : 1;
      const activeRadius = Math.round(radius * responsiveScale);
      const marginX = clamp((activeRadius * 0.92) / rect.width, 0, 0.34);
      const marginY = clamp((activeRadius * 0.92) / rect.height, 0, 0.34);

      const nx = (clientX - rect.left) / rect.width;
      const ny = (clientY - rect.top) / rect.height;
      state.targetX = clamp(nx, marginX, 1 - marginX);
      state.targetY = clamp(ny, marginY, 1 - marginY);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!canHover) return;
      updateTarget(event.clientX, event.clientY);
      state.inside = true;
    };

    const onPointerLeave = () => {
      state.inside = false;
      state.targetX = 0.5;
      state.targetY = 0.46;
    };

    const draw = () => {
      const rect = host.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const responsiveScale = rect.width < 640 ? 0.64 : rect.width < 1024 ? 0.8 : 1;
        const activeRadius = Math.round(radius * responsiveScale);
        const activeOpacity = clamp(intensity * responsiveScale, 0.15, intensity);

        if (reducedMotion || !state.inside) {
          state.x += (state.targetX - state.x) * 0.06;
          state.y += (state.targetY - state.y) * 0.06;
        } else {
          state.x += (state.targetX - state.x) * smoothing;
          state.y += (state.targetY - state.y) * smoothing;
        }

        if (scopeSection) {
          scopeSection.style.setProperty("--hero-cx", `${Math.round(state.x * 100)}%`);
          scopeSection.style.setProperty("--hero-cy", `${Math.round(state.y * 100)}%`);
          scopeSection.style.setProperty("--hero-clip-radius", `${Math.round(activeRadius * 0.9)}px`);
          scopeSection.style.setProperty("--hero-fade-inner", `${Math.round(activeRadius * 0.62)}px`);
          scopeSection.style.setProperty("--hero-fade-outer", `${Math.round(activeRadius * 1.02)}px`);
        }

        if (visible) {
          halo.style.background = `radial-gradient(circle ${activeRadius}px at ${Math.round(state.x * 100)}% ${Math.round(state.y * 100)}%, rgba(${color}, ${activeOpacity}) 0%, rgba(${color}, ${activeOpacity * 0.5}) 28%, rgba(${color}, 0.07) 52%, rgba(${color}, 0) 74%)`;
        } else {
          halo.style.background = "none";
        }
      }

      state.rafId = window.requestAnimationFrame(draw);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    state.rafId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(state.rafId);
      if (scopeSection) {
        scopeSection.style.removeProperty("--hero-cx");
        scopeSection.style.removeProperty("--hero-cy");
      }
    };
  }, [color, intensity, radius, smoothing, visible]);

  return (
    <div ref={hostRef} className={`hero-cursor-halo pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div ref={haloRef} className="absolute inset-0" />
    </div>
  );
}
