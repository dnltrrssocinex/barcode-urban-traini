import { Flame, Users, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section id="about" className="py-24 bg-card/20 relative border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Placeholder */}
          <Reveal variant="left" className="lg:col-span-6 relative" as="div">
            <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full rounded-sm overflow-hidden border border-border bg-secondary/60 flex flex-col items-center justify-center p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.07)_0%,transparent_70%)]" />

              <div className="relative z-10 max-w-sm space-y-4">
                <div className="w-14 h-14 rounded-sm bg-background/80 border border-border flex items-center justify-center mx-auto text-volt shadow-lg">
                  <Flame className="w-7 h-7" />
                </div>
                <div className="text-xs font-athletic font-bold uppercase tracking-[0.25em] text-volt">
                  FACILITY IMAGE PLACEHOLDER
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  [Direction: Place high-contrast photography here — athletic training inside an
                  urban warehouse gym, heavy chalked barbell, athletes moving with purpose against
                  raw concrete architecture]
                </p>
              </div>

              {/* Urban detail tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-athletic uppercase tracking-widest text-muted-foreground/80 px-4 py-2 rounded-xs bg-background/80 border border-border backdrop-blur-xs">
                <span>EST. PHILADELPHIA</span>
                <span className="text-volt font-bold">BARCODE COMPOUND</span>
              </div>
            </div>
          </Reveal>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="right" as="div">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  CONCRETE JUNGLE ENVIRONMENT
                </span>
              </div>
            </Reveal>

            <Reveal
              variant="right"
              delay={80}
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
            >
              WELCOME TO THE <br />
              <span className="text-volt">CONCRETE JUNGLE.</span>
            </Reveal>

            <Reveal
              variant="up"
              delay={160}
              as="p"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal"
            >
              This is where strength, discipline, movement, and culture meet. Barcode creates a
              training environment designed to challenge the body while building confidence,
              consistency, and community.
            </Reveal>

            <Reveal
              variant="up"
              delay={220}
              as="p"
              className="text-sm text-muted-foreground leading-relaxed"
            >
              We stripped away the fluff, the juice bars, and the idle screens. In their place:
              heavy steel, calibrated bumper plates, high-ceiling acoustics, and athletes who show
              up to put work into every session.
            </Reveal>

            <Reveal
              variant="up"
              delay={280}
              as="div"
              className="pt-4 flex flex-wrap gap-4 items-center"
            >
              <a
                href="#training"
                className="inline-flex items-center gap-2 text-xs font-athletic font-black uppercase tracking-widest text-volt hover:text-foreground transition-colors group"
              >
                <span>EXPLORE TRAINING DISCIPLINES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
