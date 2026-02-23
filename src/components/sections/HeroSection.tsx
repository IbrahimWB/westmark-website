import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
};

export function HeroSection({ badge, title, subtitle, cta }: Props) {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-14 md:px-5 lg:px-6">
      <div className="mx-auto max-w-[1120px] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,184,0,0.35)] bg-[rgba(5,7,8,0.98)] px-4 py-2 text-xs font-semibold text-[rgba(255,255,255,0.9)]">
          <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
          {badge}
          <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
        </div>
        <h1 className="mt-6 text-[clamp(42px,6.6vw,68px)] font-[380] leading-[1.05] tracking-[-0.02em] gradient-heading">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-[760px] text-sm leading-7 text-[rgba(255,255,255,0.62)] md:text-base">
          {subtitle}
        </p>
        <div className="mt-8">
          <PrimaryButton label={cta} />
        </div>
      </div>
    </section>
  );
}


