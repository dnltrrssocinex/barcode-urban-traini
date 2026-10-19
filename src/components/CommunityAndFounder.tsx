import { Calendar, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BARCODE_IMAGES } from "../lib/data";

interface CommunityAndFounderProps {
  onBookClick: (serviceId?: string) => void;
}

export function CommunityAndFounder({ onBookClick }: CommunityAndFounderProps) {
  return (
    <>
      {/* Founder / Coach Section with Directional Image Placeholder */}
      <section className="py-24 bg-card/30 relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coach Photo Placeholder */}
            <Reveal variant="left" className="lg:col-span-5 relative order-2 lg:order-1" as="div">
              <div className="relative rounded-sm overflow-hidden border border-border bg-secondary">
                <div className="relative w-full" style={{ paddingTop: "150%" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://adilo.bigcommand.com/watch/KVsVMjq4"
                    frameBorder={0}
                    allow="fullscreen"
                    scrolling="no"
                    title="Barcode coach training footage"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-xs p-3 rounded-xs border border-border text-left z-10">
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
