import { ArrowRight, Calendar, ShoppingBag } from "lucide-react";
import { BARCODE_IMAGES } from "../lib/data";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenShop: () => void;
}

export function HeroSection({ onOpenBooking, onOpenShop }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={BARCODE_IMAGES.heroLifting}
          alt="Barcode urban industrial gym training"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms] filter grayscale contrast-125 brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-background/40 to-background" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-volt/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xs bg-secondary/80 border border-border backdrop-blur-md mb-6">
            <span className="barcode-stripes h-3 w-8 text-volt inline-block" />
            <span className="text-[11px] font-athletic font-bold uppercase tracking-[0.25em] text-volt">
              CONCRETE TRAINING GROUND
            </span>
            <span className="hidden sm:inline-block text-[11px] text-muted-foreground">|</span>
            <span className="hidden sm:inline-block text-[11px] font-athletic uppercase text-muted-foreground">
              NYC WAREHOUSE DISTRICT
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88] text-foreground uppercase">
            TRAIN <br />
            <span className="text-volt">DIFFERENT.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
            Barcode is an urban training experience built for people who want to move stronger,
            train harder, and become more capable. Built inside steel and concrete.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-volt/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR SESSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenShop}
              className="px-8 py-4 rounded-sm border border-border hover:border-volt/70 bg-secondary/60 hover:bg-secondary text-foreground font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-volt" />
              <span>SHOP THE COLLECTION</span>
            </button>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="font-display text-2xl font-black text-foreground">5,000 SQ FT</div>
              <div className="text-xs uppercase font-athletic tracking-wider text-muted-foreground">
                Open Compound Floor
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-black text-foreground">MAX 6 PER SQD</div>
              <div className="text-xs uppercase font-athletic tracking-wider text-muted-foreground">
                Small Group Cap
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-black text-foreground">
                1-ON-1 & SQUADS
              </div>
              <div className="text-xs uppercase font-athletic tracking-wider text-muted-foreground">
                Custom Programming
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-black text-volt">100% COACH LED</div>
              <div className="text-xs uppercase font-athletic tracking-wider text-muted-foreground">
                Zero Generic Routines
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
