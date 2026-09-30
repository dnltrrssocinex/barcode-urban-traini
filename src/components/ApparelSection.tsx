import { ShoppingBag, ArrowRight } from "lucide-react";
import { APPAREL_PRODUCTS } from "../lib/data";

interface ApparelSectionProps {
  onOpenProduct: (productId?: string) => void;
}

export function ApparelSection({ onOpenProduct }: ApparelSectionProps) {
  return (
    <section id="shop" className="py-24 bg-card/40 relative border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="barcode-stripes h-3 w-8 text-volt inline-block" />
              <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                BARCODE APPAREL & GEAR
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
              WEAR THE WORK
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Training doesn’t stop when you leave the gym. Barcode apparel brings the same energy,
            discipline, and identity into the street.
          </p>
        </div>

        {/* Products Grid with Directional Image Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPAREL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-sm bg-card border border-border overflow-hidden hover:border-volt/80 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Placeholder with clear direction */}
              <div
                className="aspect-square bg-secondary/70 relative overflow-hidden cursor-pointer flex flex-col items-center justify-center p-6 text-center border-b border-border/60 hover:bg-secondary transition-colors"
                onClick={() => onOpenProduct(prod.id)}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,255,0,0.04)_0%,transparent_70%)]" />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs text-volt text-[10px] font-athletic font-black uppercase tracking-wider px-2 py-0.5 border border-border">
                  {prod.status}
                </span>

                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-sm bg-background/80 border border-border flex items-center justify-center mx-auto text-volt">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-athletic font-bold uppercase tracking-wider text-volt">
                    PRODUCT IMAGE PLACEHOLDER
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-tight max-w-[210px] mx-auto">
                    {prod.imagePlaceholderNotice}
                  </p>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between grow">
                <div>
                  <h3
                    className="font-display text-xl font-black text-foreground tracking-wide group-hover:text-volt transition-colors cursor-pointer"
                    onClick={() => onOpenProduct(prod.id)}
                  >
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
                    {prod.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="font-athletic text-lg font-black text-foreground">
                    {prod.price}
                  </span>
                  <button
                    onClick={() => onOpenProduct(prod.id)}
                    className="px-3.5 py-1.5 rounded-sm border border-border hover:border-volt bg-secondary hover:bg-secondary/80 text-foreground font-athletic text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-volt" />
                    <span>SHOP</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenProduct()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-secondary hover:bg-secondary/80 border border-border hover:border-volt text-foreground font-athletic font-black text-sm uppercase tracking-widest transition-all cursor-pointer shadow-lg"
          >
            <ShoppingBag className="w-4 h-4 text-volt" />
            <span>SHOP ALL BARCODE</span>
            <ArrowRight className="w-4 h-4 text-volt" />
          </button>
        </div>
      </div>
    </section>
  );
}
