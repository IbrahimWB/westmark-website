type Props = {
  label: string;
  className?: string;
};

export function EyebrowPill({ label, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[rgba(0,255,200,0.18)] bg-[rgba(0,255,200,0.06)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#00FFC8] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#00FFC8]" />
      {label}
    </div>
  );
}
