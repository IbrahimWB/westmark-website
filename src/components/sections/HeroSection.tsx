import { HeroBackgroundFlow } from "@/components/hero/HeroBackgroundFlow";
import { HeroCursorHalo } from "@/components/hero/HeroCursorHalo";
import { HeroPatternLayer } from "@/components/hero/HeroPatternLayer";
import { LogoMark } from "@/components/ui/LogoMark";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
};

export function HeroSection({ badge, title, subtitle, cta }: Props) {
  const highlightedTitle = title.replace(/introductions\.?/i, "");
  const hasHighlight = /introductions\.?/i.test(title);

  return (
    <section className="hero-bg-root relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020607]" />
      <HeroPatternLayer
        className="absolute inset-0 z-[1] hero-dot-base"
        opacity={0.24}
        dotSpacing={20}
        dotRadius={1}
        dotOpacity={0.42}
        dotColor="rgba(114, 192, 218, 0.50)"
      />
      <div className="hero-dot-tone absolute inset-0 z-[2]" />
      <HeroBackgroundFlow
        className="absolute inset-0 z-[3]"
        density={0.54}
        speed={0.62}
        intensity={0.5}
      />
      <HeroPatternLayer
        className="absolute inset-0 z-[4] hero-dot-highlight"
        opacity={0.8}
        dotSpacing={20}
        dotRadius={1.15}
        dotOpacity={0.92}
        dotColor="rgba(118, 235, 255, 0.96)"
      />
      <HeroCursorHalo className="z-[5]" radius={220} intensity={0.24} visible={false} />
      <div className="hero-grid-fade absolute inset-0 z-[6]" />
      <div className="hero-bg-vignette absolute inset-0 z-[7]" />
      <div className="hero-bottom-fade absolute inset-0 z-[8]" />
      <div className="pointer-events-none absolute inset-0 z-[9] bg-[radial-gradient(circle_at_50%_40%,rgba(0,220,255,0.05)_0%,rgba(0,220,255,0.02)_34%,rgba(0,0,0,0)_68%)]" />

      <div className="relative z-20 mx-auto flex max-w-[1360px] justify-center px-4 pt-4 md:px-5 lg:px-6">
        <div className="flex w-full max-w-[720px] items-center justify-between rounded-2xl border border-[rgba(0,255,220,0.14)] bg-[rgba(6,12,14,0.78)] px-4 py-2.5 shadow-[0_12px_34px_rgba(0,0,0,0.38)] backdrop-blur-md md:px-6">
          <div className="inline-flex items-center gap-2.5 text-white/92">
            <LogoMark className="h-5 w-5 sm:h-6 sm:w-6" />
            <span
              className="text-[15px] font-medium tracking-[-0.01em] sm:text-[17px]"
              style={{ fontFamily: "var(--font-clash), Inter, system-ui, sans-serif" }}
            >
              Westmark Office
            </span>
          </div>
          <a className="text-[14px] font-medium text-white/75 transition hover:text-white/95" href="#">
            Access the Routing Layer
          </a>
        </div>
      </div>

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-[1120px] items-center justify-center px-4 pt-20 pb-16 text-center md:px-5 md:pt-24 lg:px-6 lg:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[49%] h-[460px] w-[min(820px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-[radial-gradient(ellipse_at_center,rgba(0,210,255,0.22)_0%,rgba(0,185,235,0.12)_34%,rgba(0,120,170,0.05)_60%,rgba(0,0,0,0)_82%)] blur-[2px]"
        />
        <div className="w-full">
          <div className="inline-flex items-center rounded-full border border-[rgba(0,225,255,0.34)] bg-[linear-gradient(90deg,rgba(2,34,44,0.82)_0%,rgba(2,52,62,0.74)_100%)] px-7 py-2 text-[11px] font-medium tracking-[0.08em] text-[#19dcff] shadow-[inset_0_0_0_1px_rgba(0,255,255,0.08)]">
            {badge}
          </div>
          <h1
            className="mx-auto mt-7 max-w-[930px] text-[clamp(40px,5.2vw,84px)] font-[380] leading-[1.02] tracking-[-0.028em] text-white"
            style={{ textShadow: "0 0 22px rgba(118, 226, 255, 0.08)" }}
          >
            {highlightedTitle}
            {hasHighlight ? (
              <span className="text-[#27dcff]">Introductions.</span>
            ) : null}
          </h1>
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.5] text-[rgba(255,255,255,0.62)] sm:text-[16px] md:text-[18px]">
            {subtitle}
          </p>
          <div className="mt-8">
            <PrimaryButton
              label={cta}
              heroEffect
              className="h-12 rounded-xl bg-[linear-gradient(90deg,#25bfee_0%,#29e2b4_100%)] px-8 text-[16px] font-medium shadow-[0_0_24px_rgba(0,255,200,0.28)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
