import { useId } from "react";

type HeroPatternLayerProps = {
  className?: string;
  cellSize?: number;
  opacity?: number;
  strokeColor?: string;
  dotSpacing?: number;
  dotRadius?: number;
  dotOpacity?: number;
  dotColor?: string;
};

export function HeroPatternLayer({
  className = "",
  cellSize = 20,
  opacity = 0.12,
  strokeColor = "rgba(40, 196, 214, 0.26)",
  dotSpacing,
  dotRadius = 1,
  dotOpacity = 0.34,
  dotColor,
}: HeroPatternLayerProps) {
  const uid = useId().replace(/:/g, "");
  const patternId = `hero-dot-matrix-${uid}`;
  const spacing = dotSpacing ?? cellSize;
  const color = dotColor ?? strokeColor;

  return (
    <div className={`hero-pattern-shell ${className}`} style={{ opacity, color }}>
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            <circle cx={spacing / 2} cy={spacing / 2} r={dotRadius} fill="currentColor" fillOpacity={dotOpacity} />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
