type IndustryItem = {
  name: string;
  short?: string;
};

type IndustryLeadersStripProps = {
  title: string;
  items: IndustryItem[];
  className?: string;
};

export function IndustryLeadersStrip({ title, items, className = "" }: IndustryLeadersStripProps) {
  return (
    <section className={`px-4 pb-8 md:px-5 lg:px-6 ${className}`}>
      <div className="mx-auto max-w-[1120px]">
        <p className="text-center text-sm font-medium text-white/70">{title}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="inline-flex min-w-[118px] items-center justify-center rounded-lg border border-[rgba(0,255,200,0.16)] bg-[linear-gradient(90deg,rgba(12,16,18,0.9)_0%,rgba(10,20,22,0.9)_100%)] px-4 py-3 text-xs font-medium text-white/72 shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
            >
              {item.short ?? item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

