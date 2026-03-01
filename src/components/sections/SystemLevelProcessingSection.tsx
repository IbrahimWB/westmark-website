import { ArrowRight, CheckCircle2, Funnel, Search } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

type ProcessingCard = {
  stage: string;
  title: string;
  description: string;
  metrics: string[];
  tone: string;
};

type Props = {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: ProcessingCard[];
};

function toneStyles(tone: string) {
  if (tone === "blue") {
    return {
      border: "rgba(64,150,255,0.32)",
      bg: "linear-gradient(90deg, rgba(8,16,34,0.92) 0%, rgba(8,28,58,0.74) 100%)",
      chip: "rgba(64,150,255,0.18)",
      chipBorder: "rgba(64,150,255,0.3)",
      iconBorder: "rgba(64,150,255,0.34)",
      iconBg: "rgba(8,24,48,0.72)",
      accent: "#64A8FF",
    };
  }
  if (tone === "green") {
    return {
      border: "rgba(0,210,120,0.3)",
      bg: "linear-gradient(90deg, rgba(6,26,18,0.92) 0%, rgba(8,52,32,0.72) 100%)",
      chip: "rgba(0,210,120,0.16)",
      chipBorder: "rgba(0,210,120,0.3)",
      iconBorder: "rgba(0,210,120,0.34)",
      iconBg: "rgba(4,28,18,0.7)",
      accent: "#2AD68E",
    };
  }
  if (tone === "teal") {
    return {
      border: "rgba(0,220,180,0.3)",
      bg: "linear-gradient(90deg, rgba(6,24,22,0.92) 0%, rgba(8,44,38,0.72) 100%)",
      chip: "rgba(0,220,180,0.16)",
      chipBorder: "rgba(0,220,180,0.3)",
      iconBorder: "rgba(0,220,180,0.34)",
      iconBg: "rgba(4,24,22,0.7)",
      accent: "#22E8C0",
    };
  }
  return {
    border: "rgba(0,220,255,0.3)",
    bg: "linear-gradient(90deg, rgba(6,20,28,0.92) 0%, rgba(8,42,48,0.72) 100%)",
    chip: "rgba(0,220,255,0.16)",
    chipBorder: "rgba(0,220,255,0.3)",
    iconBorder: "rgba(0,220,255,0.34)",
    iconBg: "rgba(4,20,28,0.7)",
    accent: "#2EDBFF",
  };
}

export function SystemLevelProcessingSection({ eyebrow, heading, subheading, cards }: Props) {
  return (
    <section className="px-4 pt-16 pb-6 md:px-5 md:pt-20 md:pb-8 lg:px-6">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <EyebrowPill label={eyebrow} />
          <h2 className="mt-4 text-[clamp(40px,5vw,60px)] font-[380] leading-[1.08] tracking-[-0.02em] gradient-heading">{heading}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-7 text-white/56 md:text-base">{subheading}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, idx) => {
            const tone = toneStyles(card.tone);
            const icon =
              idx === 0 ? <Search size={16} /> : idx === 1 ? <Funnel size={16} /> : idx === 2 ? <ArrowRight size={16} /> : <CheckCircle2 size={16} />;

            return (
              <article
                key={`${card.stage}-${card.title}`}
                className="rounded-2xl border px-5 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.3)] md:px-6"
                style={{ borderColor: tone.border, background: tone.bg }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{ borderColor: tone.iconBorder, background: tone.iconBg, color: tone.accent }}
                  >
                    {icon}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: tone.accent }}>
                      {card.stage}
                    </p>
                    <h3 className="mt-1 text-[30px] font-semibold text-white/92">{card.title}</h3>
                    <p className="mt-1.5 text-[13px] text-white/58">{card.description}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-white/44">Metrics</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {card.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-md border px-2.5 py-1 text-[11px] font-medium"
                        style={{ color: tone.accent, background: tone.chip, borderColor: tone.chipBorder }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
