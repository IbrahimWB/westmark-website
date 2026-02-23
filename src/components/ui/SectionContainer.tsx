import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
