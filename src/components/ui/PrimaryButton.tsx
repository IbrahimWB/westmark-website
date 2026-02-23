import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function PrimaryButton({ label, className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 rounded-lg bg-[#00FFC8] px-5 py-3 text-sm font-semibold text-[#031012] transition hover:brightness-110 ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </button>
  );
}
