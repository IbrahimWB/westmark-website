import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  className?: string;
};

export function IconBadge({ icon, className = "" }: Props) {
  return (
    <div
      className={`grid h-9 w-9 place-items-center rounded-lg border border-[rgba(0,255,200,0.18)] bg-[rgba(0,255,200,0.06)] ${className}`}
    >
      {icon}
    </div>
  );
}
