import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function InfoPanel({ title, children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-[rgba(0,255,200,0.22)] bg-[rgba(10,14,16,0.72)] p-6 ${className}`}
    >
      {title ? (
        <h3 className="mb-3 text-lg font-semibold text-[rgba(224,224,224,0.95)]">
          {title}
        </h3>
      ) : null}
      <div className="text-sm leading-7 text-[rgba(255,255,255,0.62)]">{children}</div>
    </div>
  );
}
