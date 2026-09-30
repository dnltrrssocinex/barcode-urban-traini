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
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background with Directional Placeholder for Hero Visual */}
      <div className="absolute inset-0 z-0 bg-secondary/80 flex items-center justify-center overflow-hidden">
        {/* Subtle grid and dark industrial backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,255,0,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/50" />

        {/* Directional image placeholder badge overlay */}
        <div className="relative z-10 max-w-xl mx-auto p-6 rounded-sm border border-dashed border-border bg-background/60 backdrop-blur-md text-center">
          <div className="text-[11px] font-athletic font-bold uppercase tracking-[0.25em] text-volt mb-1">
            HERO BACKGROUND VISUAL PLACEHOLDER
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            [Direction: Place full-screen hero image or video here — athletic movement inside an
            urban industrial gym, heavy lifting, strength work, functional barbell motion against
            concrete walls]
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xs bg-secondary/80 border border-border backdrop-blur-md mb-6">
            <span className="barcode-stripes h-3 w-8 text-volt inline-block" />
            <span className="text-[11px] font-athletic font-bold uppercase tracking-[0.25em] text-volt">
              CONCRETE TRAINING GROUND
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88] text-foreground uppercase">
            TRAIN <br />
            <span className="text-volt">DIFFERENT.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
            Barcode is an urban training experience built for people who want to move stronger,
            train harder, and become more capable.
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
        </div>
      </div>
    </section>
  );
}
