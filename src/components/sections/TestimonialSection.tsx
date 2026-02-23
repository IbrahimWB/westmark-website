import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { SectionContainer } from "@/components/ui/SectionContainer";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
  author: string;
  role: string;
};

export function TestimonialSection({
  eyebrow,
  title,
  subtitle,
  quote,
  author,
  role,
}: Props) {
  return (
    <section className="py-20">
      <SectionContainer>
        <div className="text-center">
          <EyebrowPill label={eyebrow} />
          <h2 className="mt-5 text-[clamp(34px,5vw,54px)] font-[360] leading-[1.08] tracking-[-0.02em] gradient-heading">
            {title}
          </h2>
          <p className="mt-3 text-sm text-[rgba(255,255,255,0.62)] md:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[920px] rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,14,16,0.58)] p-6 md:p-8">
          <p className="text-[28px] leading-[1.25] tracking-[-0.01em] text-[rgba(224,224,224,0.95)]">
            {quote}
          </p>
          <div className="mt-6 text-sm text-[rgba(255,255,255,0.9)]">{author}</div>
          <div className="text-xs text-[rgba(255,255,255,0.6)]">{role}</div>
        </div>
      </SectionContainer>
    </section>
  );
}


