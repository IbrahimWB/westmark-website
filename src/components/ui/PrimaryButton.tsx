import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  heroEffect?: boolean;
};

export function PrimaryButton({ label, heroEffect = false, className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#00FFC8] px-5 py-3 text-sm font-semibold text-[#031012] transition ${heroEffect ? "duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(0,255,200,0.42)]" : "hover:brightness-110"} ${className}`}
    >
      {heroEffect ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-white/0 via-white/45 to-white/0 opacity-0 transition duration-500 group-hover:translate-x-[420%] group-hover:opacity-100"
        />
      ) : null}
      <span className={heroEffect ? "relative z-10" : ""}>{label}</span>
      <span aria-hidden className={heroEffect ? "relative z-10 transition-transform duration-300 group-hover:translate-x-1" : ""}>
        &rarr;
      </span>
    </button>
  );
}
