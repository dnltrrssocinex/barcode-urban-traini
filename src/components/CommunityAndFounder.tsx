import { Sparkles, Calendar, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { useCountUp } from "../hooks/useCountUp";

interface CommunityAndFounderProps {
  onBookClick: (serviceId?: string) => void;
}

const STATS = [
  { end: 500, suffix: "+", label: "WORKOUTS COMPLETED", desc: "Logged under our coaching watch" },
  { end: 100, suffix: "+", label: "MEMBERS TRAINED", desc: "Committed everyday movers" },
  { end: 5, suffix: "+", label: "TRAINING PROGRAMS", desc: "Structured progression lanes" },
  { end: 1, suffix: "", label: "COMMUNITY", desc: "United by iron and discipline" },
];

function StatCard({
  end,
  suffix,
  label,
  desc,
}: {
  end: number;
  suffix: string;
  label: string;
  desc: string;
}) {
  const { ref, display } = useCountUp({ end, suffix });
  return (
    <div
      ref={ref}
      className="p-6 rounded-sm bg-card border border-border flex flex-col justify-between hover:border-volt/60 transition-colors"
    >
      <div>
        <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-volt tracking-tight">
          {display}
        </div>
        <div className="mt-2 font-athletic text-xs font-black uppercase tracking-wider text-foreground">
          {label}
        </div>
      </div>
      <p className="mt-2 text-[11px] text-muted-foreground">{desc}</p>
    </div>
  );
}

export function CommunityAndFounder({ onBookClick }: CommunityAndFounderProps) {
  return (
    <>
      {/* Animated Live Stats Section */}
      <section className="py-20 bg-background relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((item, i) => (
              <Reveal key={item.label} variant="scale" delay={i * 100} as="div" className="h-full">
                <StatCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Coach Section with Directional Image Placeholder */}
      <section className="py-24 bg-card/30 relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coach Photo Placeholder */}
            <Reveal variant="left" className="lg:col-span-5 relative order-2 lg:order-1" as="div">
              <div className="relative aspect-3/4 rounded-sm overflow-hidden border border-border bg-secondary/70 flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(218,255,0,0.06)_0%,transparent_70%)]" />

                <div className="relative z-10 max-w-xs space-y-4">
                  <div className="w-14 h-14 rounded-sm bg-background/80 border border-border flex items-center justify-center mx-auto text-volt shadow-lg">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-athletic font-bold uppercase tracking-[0.25em] text-volt">
                    COACH PHOTO PLACEHOLDER
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    [Direction: Place high-resolution portrait or active coaching photo here — Head
                    Coach / Founder inside the gym wearing Barcode athletic gear, confident,
                    athletic, real coaching stance]
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-xs p-3 rounded-xs border border-border text-left">
                  <div className="font-display text-lg font-black text-foreground">RAFEEQ</div>
                  <div className="text-[11px] font-athletic uppercase tracking-wider text-volt font-bold">
                    FOUNDER & HEAD OF PERFORMANCE
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Coach Info */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <Reveal variant="right" as="div">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-volt rounded-full" />
                  <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    LEADERSHIP & RIGOR
                  </span>
                </div>
              </Reveal>

              <Reveal
                variant="right"
                delay={80}
                as="h2"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
              >
                MEET THE COACH <br />
                <span className="text-volt">BEHIND BARCODE</span>
              </Reveal>

              <Reveal
                variant="up"
                delay={160}
                as="p"
                className="text-base text-muted-foreground leading-relaxed"
              >
                "Barcode was born out of frustration with sterile commercial gyms full of glowing
                phone screens and machine circuits that isolate rather than strengthen. I built
                Barcode for those who desire real movement mechanics, honest accountability, and an
                unforgiving standard of work."
              </Reveal>

              <Reveal variant="up" delay={220} as="div" className="space-y-3 pt-2">
                <div className="text-xs font-athletic uppercase tracking-widest text-foreground font-bold">
                  CREDENTIALS & SPECIALIZATIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
                  {[
                    "CSCS — Certified Strength & Conditioning Specialist",
                    "USA Weightlifting (USAW) Level 2 Coach",
                    "FRC Movement Specialist (Functional Range Conditioning)",
                    "10+ Years Coaching Competitive Athletes & Everyday Movers",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-2.5 p-2.5 rounded-xs bg-secondary/50 border border-border"
                    >
                      <Check className="w-4 h-4 text-volt shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal
                variant="up"
                delay={280}
                as="div"
                className="pt-4 flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => onBookClick("personal-training")}
                  className="px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 shadow-lg shadow-volt/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>TRAIN WITH ME</span>
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
