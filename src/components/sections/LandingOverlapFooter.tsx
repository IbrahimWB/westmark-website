import { LogoMark } from "@/components/ui/LogoMark";

type Props = {
  brand: string;
  tagline: string;
  copyright: string;
};

export function LandingOverlapFooter({ brand, tagline, copyright }: Props) {
  const [line1, line2] = splitBrand(brand);

  return (
    <section className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[52vh] min-h-[320px] overflow-hidden border-t border-[rgba(0,255,220,0.08)] bg-[linear-gradient(180deg,#010204_0%,#02060a_50%,#03090f_100%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_46%,rgba(20,120,170,0.18)_0%,rgba(20,120,170,0.06)_30%,rgba(20,120,170,0.015)_54%,rgba(0,0,0,0)_76%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_62%,rgba(10,70,110,0.16)_0%,rgba(10,70,110,0.06)_34%,rgba(0,0,0,0)_72%)]"
      />

      <div className="relative mx-auto flex h-full max-w-[1120px] flex-col justify-end gap-4 px-4 pb-4 md:gap-5 md:px-6 md:pb-5">
        <div className="flex items-start gap-3">
          <LogoMark className="mt-1 h-6 w-6 sm:h-7 sm:w-7" />
          <div>
            <h2
              className="text-[clamp(36px,7.2vw,102px)] leading-[0.9] tracking-[-0.022em] text-white/94"
              style={{ fontFamily: "var(--font-clash), Inter, system-ui, sans-serif", fontWeight: 360 }}
            >
              {line1}
              <br />
              {line2}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 text-white/62 sm:flex-row sm:items-center sm:gap-4">
          <div className="inline-flex items-center gap-3 text-white/78">
            <span className="h-px w-12 bg-white/55" />
            <span className="text-xs font-medium sm:text-sm">{tagline}</span>
          </div>
          <p className="text-[11px] sm:text-xs">{copyright}</p>
        </div>
      </div>
    </section>
  );
}

function splitBrand(brand: string): [string, string] {
  const parts = brand.trim().split(/\s+/);
  if (parts.length < 2) return [brand, ""];
  const pivot = Math.ceil(parts.length / 2);
  return [parts.slice(0, pivot).join(" "), parts.slice(pivot).join(" ")];
}
