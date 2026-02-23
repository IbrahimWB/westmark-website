import type { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  label: string;
  value: string;
  className?: string;
};

export function MetricCard({ icon, label, value, className = "" }: Props) {
  return (
    <div
      className={`rounded-xl border border-[rgba(0,255,200,0.22)] bg-[rgba(10,14,16,0.72)] p-4 ${className}`}
    >
      {icon ? <div className="mb-3">{icon}</div> : null}
      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.62)]">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold text-[rgba(224,224,224,0.95)]">
        {value}
      </div>
    </div>
  );
}
