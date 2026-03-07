import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { ArrowDown, Layers3, Radio, Zap } from "lucide-react";

type ConnectItem = {
  index: string;
  title: string;
  description: string;
};

type ConnectIdealClientsSectionProps = {
  eyebrow?: string;
  heading: string;
  subheading: string;
  items: ConnectItem[];
  footnote?: string;
  className?: string;
};

export function ConnectIdealClientsSection({
  eyebrow,
  heading,
  subheading,
  items,
  footnote,
  className = "",
}: ConnectIdealClientsSectionProps) {
  const itemBackgrounds = [
    "linear-gradient(90deg, rgba(6,24,34,0.88) 0%, rgba(8,66,74,0.64) 52%, rgba(6,32,50,0.8) 100%)",
    "linear-gradient(90deg, rgba(6,30,28,0.9) 0%, rgba(10,72,58,0.65) 52%, rgba(6,36,52,0.8) 100%)",
    "linear-gradient(90deg, rgba(6,30,22,0.9) 0%, rgba(8,68,46,0.66) 52%, rgba(6,44,28,0.8) 100%)",
  ];

  return (
    <section className={`px-4 py-12 md:px-5 md:py-20 lg:px-6 ${className}`}>
      <div className="mx-auto max-w-[980px] text-center">
        {eyebrow ? (
          <EyebrowPill label={eyebrow} />
        ) : null}

        <h2 className="mt-5 text-[clamp(34px,8vw,62px)] font-[380] leading-[1.1] tracking-[-0.02em] gradient-heading">{heading}</h2>
        <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-white/56 md:mt-5 md:text-base md:leading-7">{subheading}</p>

        <div className="mx-auto mt-12 max-w-[900px] space-y-3 text-left">
          {items.map((item, idx) => {
            const isRoutingLayer = idx === 1;
            return (
              <div
                key={`${item.index}-${item.title}`}
                className={isRoutingLayer ? "md:mx-[-22px] lg:mx-[-28px]" : undefined}
              >
                <article
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-[rgba(0,255,200,0.3)] px-4 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.34)] sm:gap-4 sm:px-5 sm:py-5 md:px-6"
                  style={{ background: itemBackgrounds[idx] ?? itemBackgrounds[0] }}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(0,255,200,0.3)] bg-[rgba(2,16,20,0.75)] text-[#00e7ff] sm:h-10 sm:w-10">
                    {idx === 0 ? <Radio size={16} /> : idx === 1 ? <Layers3 size={16} /> : <Zap size={16} />}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-semibold text-white/92 sm:text-base md:text-[18px]">{item.title}</h3>
                      {isRoutingLayer ? (
                        <span className="inline-flex rounded-full border border-[rgba(0,255,200,0.28)] bg-[rgba(0,255,200,0.12)] px-2 py-0.5 text-[10px] font-semibold tracking-[0.04em] text-[#22f0c4]">
                          YOU ARE HERE
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-[11px] leading-5 text-white/58 sm:text-xs md:text-[13px]">{item.description}</p>
                  </div>
                  <span className="text-[30px] font-semibold tracking-[0.02em] text-[#1fe8ff] sm:text-[34px] md:text-[36px]">{item.index}</span>
                </article>
                {idx < items.length - 1 ? (
                  <div className="flex items-center justify-center py-2">
                    <span className="inline-flex items-center text-[#00e7ff]">
                      <ArrowDown size={16} />
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {footnote ? (
          <p className="mx-auto mt-8 max-w-[900px] rounded-2xl border border-white/10 bg-[rgba(7,10,12,0.72)] px-5 py-5 text-center text-sm leading-7 text-white/58 md:text-[13px]">{footnote}</p>
        ) : null}
      </div>
    </section>
  );
}

