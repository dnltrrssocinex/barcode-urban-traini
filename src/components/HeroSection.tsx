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
      {/* Background Video Showing Athletic Movement in Industrial Setting */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={BARCODE_IMAGES.heroVideoPoster}
            className="w-full h-full object-cover opacity-45 filter grayscale contrast-125"
          >
            <source src={BARCODE_IMAGES.heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Dark industrial radial gradient overlay for high readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex flex-col justify-center">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xs bg-secondary/80 border border-border backdrop-blur-md mb-6 hero-rise"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="barcode-stripes h-3 w-8 text-volt inline-block animate-scan" />
            <span className="text-[11px] font-athletic font-bold uppercase tracking-[0.25em] text-volt">
              CONCRETE TRAINING GROUND
            </span>
          </div>

          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88] text-foreground uppercase hero-rise"
            style={{ animationDelay: "0.25s" }}
          >
            TRAIN <br />
            <span className="text-volt">DIFFERENT.</span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed hero-rise"
            style={{ animationDelay: "0.45s" }}
          >
            Barcode is a training experience built for people who are determined to raise the bar.
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none hero-rise"
            style={{ animationDelay: "0.65s" }}
          >
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

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-muted-foreground hero-rise"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="text-[10px] font-athletic uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-linear-to-b from-volt to-transparent animate-pulse" />
      </div>
    </section>
  );
}
