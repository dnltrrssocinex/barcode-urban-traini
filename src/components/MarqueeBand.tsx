const PHRASES = [
  "MOVE WITH PURPOSE",
  "BUILD REAL STRENGTH",
  "TRAIN WITH INTENTION",
  "SHOW UP STRONGER",
  "PUT IN THE WORK",
  "EARN EVERY REP",
];

export function MarqueeBand() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <section
      aria-hidden="true"
      className="relative py-5 bg-volt text-primary-foreground overflow-hidden border-y-2 border-background select-none"
    >
      <div className="marquee-mask flex">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {row.map((p, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-wide px-6">
                {p}
              </span>
              <span className="barcode-stripes h-4 w-10 text-primary-foreground/40 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
