import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionContainer } from "@/components/ui/SectionContainer";

type Props = {
  title: string;
  cta: string;
};

export function FooterCtaSection({ title, cta }: Props) {
  return (
    <section className="py-20">
      <SectionContainer>
        <div className="rounded-2xl border border-[rgba(0,255,200,0.18)] bg-[rgba(10,14,16,0.7)] p-8 text-center md:p-10">
          <h3 className="text-[clamp(28px,3.8vw,42px)] font-[380] tracking-[-0.02em] gradient-heading">
            {title}
          </h3>
          <div className="mt-6">
            <PrimaryButton label={cta} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}


