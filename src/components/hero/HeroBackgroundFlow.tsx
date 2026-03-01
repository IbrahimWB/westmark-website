"use client";

import { useEffect, useRef } from "react";

export type HeroBackgroundFlowProps = {
  density?: number;
  speed?: number;
  intensity?: number;
  className?: string;
  palette?: {
    base: string;
    accentA: string;
    accentB: string;
  };
};

type Dot = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  layer: number;
  warm: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const parsed = Number.parseInt(clean, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function HeroBackgroundFlow({
  density = 1.4,
  speed = 0.95,
  intensity = 1.2,
  className,
  palette = {
    base: "#95d9ff",
    accentA: "#00ffc8",
    accentB: "#ffb800",
  },
}: HeroBackgroundFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const random = mulberry32(423_119);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const state = {
      width: 0,
      height: 0,
      dots: [] as Dot[],
      rafId: 0,
      running: true,
      lastFrame: 0,
      reduced: reducedMotion.matches,
      dpr: 1,
    };

    const layerScale = [0.7, 1, 1.25];

    const buildDots = () => {
      const area = state.width * state.height;
      const responsiveDensity = state.width < 640 ? 0.55 : state.width < 1024 ? 0.75 : 1;
      const safeDensity = clamp(density, 0.3, 2.2);
      const count = Math.floor(area * 0.00012 * safeDensity * responsiveDensity);

      const dots: Dot[] = [];
      for (let i = 0; i < count; i += 1) {
        const layer = Math.floor(random() * 3);
        dots.push({
          x: random() * state.width,
          y: random() * state.height,
          size: clamp((0.8 + random() * 1.4) * layerScale[layer], 0.8, 2.2),
          alpha: clamp(0.16 + random() * 0.46, 0.16, 0.62),
          phase: random() * Math.PI * 2,
          layer,
          warm: random() < 0.07,
        });
      }
      state.dots = dots;
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      state.width = Math.max(1, Math.floor(rect.width));
      state.height = Math.max(1, Math.floor(rect.height));
      state.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      buildDots();
    };

    const draw = (now: number) => {
      if (!state.running) return;

      const frameGap = 1000 / 56;
      if (now - state.lastFrame < frameGap) {
        state.rafId = window.requestAnimationFrame(draw);
        return;
      }
      state.lastFrame = now;

      const t = now * 0.001 * clamp(speed, 0.5, 1.8);
      const driftScale = 2.1 * clamp(intensity, 0.5, 1.8);
      const waveScale = 12 * clamp(intensity, 0.5, 1.8);

      ctx.clearRect(0, 0, state.width, state.height);

      for (const dot of state.dots) {
        const layerDrift = (dot.layer + 1) * 0.4;
        const flow = Math.sin(dot.x * 0.0024 + dot.phase + t * 0.33) + Math.cos(dot.y * 0.002 + dot.phase * 0.6 - t * 0.26);
        const angle = flow * 1.1;

        const drift = state.reduced ? 0.22 : driftScale;
        const dx = Math.cos(angle + dot.phase) * drift * layerDrift;
        const dy = Math.sin(angle * 0.9 - dot.phase) * drift * layerDrift;

        const wave = Math.sin(dot.x * 0.006 + t * (0.24 + dot.layer * 0.03) + dot.phase) * (waveScale * (dot.layer + 1) * 0.12);
        const px = dot.x + dx;
        const py = dot.y + dy + (state.reduced ? wave * 0.18 : wave);

        const centerBias = 1 - Math.abs(py - state.height * 0.5) / (state.height * 0.75);
        const alphaBoost = clamp(centerBias, 0.55, 1.15);
        const alpha = dot.alpha * alphaBoost;

        const color = dot.warm
          ? rgba(palette.accentB, alpha * 0.68)
          : dot.layer === 2
            ? rgba(palette.accentA, alpha * 0.9)
            : rgba(palette.base, alpha);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }

      state.rafId = window.requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      state.running = !document.hidden;
      if (state.running) {
        state.lastFrame = 0;
        state.rafId = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(state.rafId);
      }
    };

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      state.reduced = event.matches;
    };

    resize();
    state.rafId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleReducedMotion);

    return () => {
      state.running = false;
      window.cancelAnimationFrame(state.rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleReducedMotion);
    };
  }, [density, intensity, palette.accentA, palette.accentB, palette.base, speed]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={className}
      style={{
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
