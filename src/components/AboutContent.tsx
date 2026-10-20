import { ArrowRight, Calendar, ShoppingBag, Music, Shirt, Dumbbell, Users } from "lucide-react";
import { Reveal } from "./Reveal";

interface AboutContentProps {
  onOpenBooking: () => void;
  onOpenShop: () => void;
}

/* Reusable framed image placeholder — gives clear direction on what to drop in */
function ImagePlaceholder({
  label,
  caption,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  label: string;
  caption: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative ${ratio} ${className} rounded-sm overflow-hidden border border-border bg-secondary/70 bg-concrete-grain`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-secondary/30 via-transparent to-background/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="barcode-stripes h-8 w-24 text-volt/30 mb-4" />
        <div className="text-[10px] font-athletic font-black uppercase tracking-[0.22em] text-volt mb-2.5">
          {label}
        </div>
        <div className="text-[11px] text-muted-foreground max-w-[260px] leading-relaxed font-medium">
          {caption}
        </div>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-background/85 border border-border">
        <span className="w-1.5 h-1.5 bg-volt rounded-full animate-pulse" />
        <span className="text-[9px] font-athletic uppercase tracking-widest text-muted-foreground">
          Image
        </span>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    icon: Dumbbell,
    title: "PHYSICAL TRAINING",
    body: "Discover strength, build discipline, challenge what you believe is possible.",
  },
  {
    icon: Music,
    title: "ORIGINAL MUSIC",
    body: "A message of identity, expression, and overcoming adversity told through sound.",
  },
  {
    icon: Shirt,
    title: "APPAREL",
    body: "Wear the work. Clothing that carries the same energy off the training floor.",
  },
  {
    icon: Users,
    title: "COMMUNITY & YOUTH",
    body: "Work with young people — schools, boxing programs, the next generation.",
  },
];

const BARS = [
  {
    label: "THE PULL-UP BAR",
    body: "Where he developed his strength and commitment to fitness.",
  },
  {
    label: "THE MUSICAL BARS",
    body: "The verses and measures through which he tells his story.",
  },
  {
    label: "THE BAR HE RAISES",
    body: "The standard he keeps lifting for himself and the people around him.",
  },
];

export function AboutContent({ onOpenBooking, onOpenShop }: AboutContentProps) {
  return (
    <main className="pt-20">
      {/* ===== About Hero ===== */}
      <section
        id="about-hero"
        className="relative overflow-hidden bg-background bg-concrete-grain border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Reveal variant="up" as="div">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-secondary/80 border border-border">
                  <span className="w-2 h-2 bg-volt rounded-full animate-pulse" />
                  <span className="text-[11px] font-athletic font-bold uppercase tracking-[0.25em] text-volt">
                    OUR STORY
                  </span>
                </div>
              </Reveal>

              <Reveal
                variant="up"
                delay={80}
                as="h1"
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[0.9]"
              >
                BEHIND THE BARS. <br />
                BEYOND THE LIMITS. <br />
                <span className="text-volt">RAISING THE BAR.</span>
              </Reveal>

              <Reveal
                variant="up"
                delay={160}
                as="p"
                className="text-lg sm:text-xl text-foreground/90 max-w-xl leading-relaxed font-medium"
              >
                Barcode was built on a simple belief: your circumstances don&apos;t have to define
                your future.
              </Reveal>

              <Reveal
                variant="up"
                delay={240}
                as="div"
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-xl shadow-volt/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK YOUR SESSION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenShop}
                  className="px-8 py-4 rounded-sm border border-border hover:border-volt/70 bg-secondary/60 hover:bg-secondary text-foreground font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 active:scale-95 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-volt" />
                  <span>SHOP THE COLLECTION</span>
                </button>
              </Reveal>
            </div>

            <Reveal
              variant="left"
              delay={120}
              as="div"
              className="lg:col-span-5 order-first lg:order-last"
            >
              <ImagePlaceholder
                label="FOUNDER PORTRAIT"
                caption="Rafiq at the pull-up bar — raw, urban backdrop, natural light. Portrait orientation."
                ratio="aspect-[4/5] lg:aspect-[4/5]"
                className="shadow-2xl shadow-background"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== The Origin ===== */}
      <section className="relative bg-card/30 border-b border-border bg-concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal variant="right" as="div" className="lg:col-span-5 order-last lg:order-first">
              <ImagePlaceholder
                label="TRAINING ENVIRONMENT"
                caption="Inside the Barcode training space — concrete, steel, sweat. Wide environmental shot."
                ratio="aspect-[4/5]"
                className="shadow-2xl shadow-background"
              />
            </Reveal>

            <div className="lg:col-span-7 space-y-6">
              <Reveal variant="up" as="div">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                  <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    THE FOUNDATION
                  </span>
                </div>
              </Reveal>

              <Reveal
                variant="up"
                delay={80}
                as="h2"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
              >
                MORE THAN <span className="text-volt">FITNESS.</span>
              </Reveal>

              <Reveal
                variant="up"
                delay={160}
                as="p"
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                Founded by Rafiq, Barcode is more than fitness, clothing, or music. It&apos;s a
                brand rooted in lived experience, personal transformation, and the determination to
                break through the limitations that life and society can place on us.
              </Reveal>

              <Reveal
                variant="up"
                delay={220}
                as="p"
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                For Rafiq, the meaning behind Barcode is personal.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== The Meaning Behind the Bars ===== */}
      <section className="relative bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl mb-14 space-y-6">
            <Reveal variant="up" as="div">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  THE MEANING BEHIND THE BARS
                </span>
              </div>
            </Reveal>

            <Reveal
              variant="up"
              delay={80}
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
            >
              WHAT ONCE MEANT <br />
              <span className="text-volt">LIMITATION</span> BECAME POSSIBILITY.
            </Reveal>

            <Reveal
              variant="up"
              delay={160}
              as="p"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              There were times in his life when being behind bars meant more than incarceration. It
              meant being boxed in by expectations, labeled by past mistakes, and told — directly or
              indirectly — how far he could go.
            </Reveal>

            <Reveal
              variant="up"
              delay={220}
              as="p"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              But bars can mean something different.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BARS.map((item, i) => (
              <Reveal key={item.label} variant="up" delay={i * 120} as="div" className="h-full">
                <div className="p-7 rounded-sm bg-card border border-border hover:border-volt transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <span className="font-display text-5xl font-black text-volt/20 mb-4 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-black text-foreground tracking-wide mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={120} as="div">
            <div className="mt-12 flex items-center gap-4 max-w-3xl">
              <span className="barcode-stripes h-8 w-16 text-volt shrink-0" />
              <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                What once represented limitation became a symbol of possibility.{" "}
                <span className="text-volt">That&apos;s the foundation of Barcode.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== More Than Fitness — Pillars ===== */}
      <section className="relative bg-card/30 border-b border-border bg-concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 self-start">
              <Reveal variant="up" as="div">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                  <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    ONE VISION
                  </span>
                </div>
              </Reveal>

              <Reveal
                variant="up"
                delay={80}
                as="h2"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
              >
                MORE THAN <br />
                <span className="text-volt">FITNESS.</span>
              </Reveal>

              <Reveal
                variant="up"
                delay={160}
                as="p"
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Barcode brings together fitness training, original music, apparel, and community
                engagement under one vision.
              </Reveal>

              <Reveal
                variant="up"
                delay={220}
                as="p"
                className="text-sm text-muted-foreground leading-relaxed"
              >
                And through his work with young people — including experience supporting youth in
                schools and boxing programs — he&apos;s working to show the next generation that
                their past, their environment, and other people&apos;s expectations don&apos;t
                determine what they can become.
              </Reveal>

              <Reveal variant="up" delay={280} as="p">
                <span className="font-athletic text-sm uppercase tracking-widest text-foreground font-bold">
                  Each part of Barcode tells a different chapter of the same story.
                </span>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} variant="up" delay={i * 100} as="div" className="h-full">
                  <div className="p-7 rounded-sm bg-background border border-border hover:border-volt transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-11 h-11 rounded-sm bg-secondary border border-border flex items-center justify-center text-volt mb-5">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-foreground tracking-wide mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Built to Break Barriers ===== */}
      <section className="relative bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Reveal variant="up" as="div">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                  <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    BUILT TO BREAK BARRIERS
                  </span>
                </div>
              </Reveal>

              <Reveal
                variant="up"
                delay={80}
                as="h2"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
              >
                NOT PRETENDING OBSTACLES <br />
                DON&apos;T EXIST. <span className="text-volt">REFUSING TO STOP.</span>
              </Reveal>

              <Reveal
                variant="up"
                delay={160}
                as="p"
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                Barcode isn&apos;t about pretending obstacles don&apos;t exist. It&apos;s about
                refusing to let them be the end of the story.
              </Reveal>

              <Reveal
                variant="up"
                delay={220}
                as="p"
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                Whether you&apos;re stepping into a training session, wearing the brand, listening
                to the music, or connecting with its message — Barcode represents the opportunity to
                challenge limits and keep moving forward.
              </Reveal>

              <Reveal variant="up" delay={280} as="div">
                <div className="space-y-2 pt-2">
                  <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                    Because you are more than where you&apos;ve been.
                  </p>
                  <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                    You&apos;re more than what people expect.
                  </p>
                  <p className="text-lg sm:text-xl font-display font-black text-volt leading-relaxed tracking-tight">
                    And you&apos;re capable of raising the bar.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal variant="left" delay={120} as="div" className="lg:col-span-5 space-y-6">
              <ImagePlaceholder
                label="STREET / TRAINING"
                caption="Candid moment — Rafiq or a member mid-session, gritty street aesthetic, motion blur."
                ratio="aspect-[4/5]"
                className="shadow-2xl shadow-background"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Closing Manifesto CTA ===== */}
      <section className="relative overflow-hidden bg-secondary/60 border-b border-border bg-concrete-grain">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/40 via-transparent to-background/30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center space-y-8">
          <Reveal variant="up" as="div">
            <div className="barcode-stripes h-8 w-28 text-volt/40 mx-auto mb-6" />
          </Reveal>

          <Reveal
            variant="blur"
            delay={100}
            as="h2"
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-foreground leading-[0.9]"
          >
            BARCODE. <br />
            <span className="text-volt">BREAK THE LIMITS.</span> <br />
            RAISE THE BAR.
          </Reveal>

          <Reveal
            variant="up"
            delay={220}
            as="div"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-xl shadow-volt/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR FIRST SESSION</span>
            </button>
            <button
              onClick={onOpenShop}
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-border hover:border-volt/80 bg-background/70 hover:bg-background text-foreground font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 active:scale-95 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-volt" />
              <span>SHOP THE COLLECTION</span>
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
