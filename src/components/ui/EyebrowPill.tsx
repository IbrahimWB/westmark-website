type Props = {
  label: string;
  className?: string;
};

export function EyebrowPill({ label, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-[rgba(0,255,200,0.22)] bg-[linear-gradient(90deg,rgba(0,165,255,0.12)_0%,rgba(0,255,200,0.12)_100%)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#18E0FF] shadow-[0_0_0_1px_rgba(0,255,200,0.06),inset_0_0_18px_rgba(0,255,200,0.1)] ${className}`}
    >
      {label}
    </div>
  );
}
