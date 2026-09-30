import { Flame, Users, ArrowRight } from "lucide-react";
import { BARCODE_IMAGES } from "../lib/data";

export function IntroSection() {
  return (
    <section className="py-24 bg-card/60 relative border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Bold Photography with urban architectural framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 rounded-sm overflow-hidden border border-border shadow-2xl group">
              <img
                src={BARCODE_IMAGES.intenseWarehouse}
                alt="Athletes training at Barcode concrete warehouse"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-background/90 backdrop-blur-md border border-border flex items-center justify-between">
                <div>
                  <div className="font-display text-lg text-foreground font-black">
                    RAW FACILITY PROTOCOL
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Free weights, sled tracks, power cages, heavy bags.
                  </div>
                </div>
                <span className="barcode-stripes h-4 w-10 text-volt" />
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-volt/60 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-volt/60 pointer-events-none" />
          </div>

          {/* Right: Intro Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-volt rounded-full" />
              <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                FACILITY BLUEPRINT
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]">
              WELCOME TO THE <br />
              <span className="text-volt">CONCRETE JUNGLE.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This is where strength, discipline, movement, and culture meet. Barcode creates a
              training environment designed to challenge the body while building confidence,
              consistency, and community.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              We stripped away the fluff, the juice bars, and the idle treadmills. What remains is
              pure intent: high-density lifting stations, functional open turf, uncompromising
              coaching, and peers who push you past mental limits.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-secondary/50 border border-border">
                <Flame className="w-5 h-5 text-volt mb-2" />
                <div className="font-athletic text-sm uppercase font-black text-foreground">
                  UNCOMPROMISING EFFORT
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Every set is logged and measured for tangible progression.
                </div>
              </div>
              <div className="p-4 rounded-sm bg-secondary/50 border border-border">
                <Users className="w-5 h-5 text-volt mb-2" />
                <div className="font-athletic text-sm uppercase font-black text-foreground">
                  STREET CULTURE
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Community welded together through sweat and shared struggle.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#training"
                className="inline-flex items-center gap-2 text-xs uppercase font-athletic font-bold tracking-widest text-volt hover:text-foreground transition-colors group"
              >
                <span>EXPLORE OUR TRAINING DISCIPLINES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
