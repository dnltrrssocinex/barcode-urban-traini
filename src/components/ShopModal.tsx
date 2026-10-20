import { useEffect, useState } from "react";
import { X, ShoppingBag, ArrowRight, ExternalLink } from "lucide-react";
import { PaymentCheckoutBlock, isCheckoutReturn } from "@/integrations/payments";
import { BARCODE_IMAGES } from "../lib/data";
import { SHOP_URL, persistCheckoutSelection, type DisplayProduct } from "../lib/products";

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: DisplayProduct[];
  selectedProductId?: string | undefined;
}

export function ShopModal({ isOpen, onClose, products, selectedProductId }: ShopModalProps) {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"selected" | "all">("selected");

  const selected = selectedProductId ? products.find((p) => p.id === selectedProductId) : undefined;
  const hasCatalog = products.some((p) => p.isCatalog);

  // Persist the chosen product's price before mounting the hosted checkout,
  // or open in "all" mode for Shop All / sold-out / payment-return loads.
  useEffect(() => {
    if (!isOpen) {
      setReady(false);
      return;
    }
    if (isCheckoutReturn()) {
      setMode("all");
      setReady(true);
      return;
    }
    if (selected?.isCatalog && selected.priceId && !selected.soldOut) {
      persistCheckoutSelection(selected.priceId);
      setMode("selected");
    } else {
      setMode("all");
    }
    setReady(true);
  }, [isOpen, selected]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40 shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={BARCODE_IMAGES.logo}
              alt="Barcode"
              className="h-6 w-auto object-contain invert brightness-200"
            />
            <span className="font-display text-xl font-black tracking-wider text-foreground">
              BARCODE APPAREL & GEAR
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {hasCatalog ? (
            ready ? (
              <PaymentCheckoutBlock
                key={`${mode}-${selectedProductId ?? "all"}`}
                checkoutMode={mode}
                onSuccess={() => onClose()}
              />
            ) : (
              <div className="py-16 text-center text-muted-foreground text-sm font-athletic uppercase tracking-widest">
                Loading checkout…
              </div>
            )
          ) : (
            <FallbackStoreView products={products} selected={selected} />
          )}
        </div>
      </div>
    </div>
  );
}

/** Shown only while the live catalog is empty — routes buyers to the external store. */
function FallbackStoreView({
  products,
  selected,
}: {
  products: DisplayProduct[];
  selected?: DisplayProduct | undefined;
}) {
  const featured = selected ?? products[0];
  return (
    <div className="space-y-8">
      {featured && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="aspect-square rounded-sm bg-secondary/80 border border-border overflow-hidden">
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
                <ShoppingBag className="w-12 h-12" />
              </div>
            )}
          </div>
          <div className="space-y-4">
            <span className="inline-block text-[10px] font-athletic uppercase tracking-widest text-volt font-bold bg-secondary px-2 py-0.5 border border-border">
              {featured.status}
            </span>
            <h3 className="font-display text-2xl font-black text-foreground tracking-wide">
              {featured.name}
            </h3>
            <p className="text-sm text-muted-foreground">{featured.subtitle}</p>
            <div className="font-athletic text-2xl font-black text-volt">{featured.price}</div>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-volt/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>VISIT STORE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      <div className="pt-6 border-t border-border/60">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-athletic uppercase tracking-widest text-muted-foreground font-bold">
            FEATURED COLLECTION
          </span>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-athletic font-bold uppercase tracking-wider text-volt hover:brightness-110"
          >
            SHOP ALL BARCODE
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {products.map((p) => (
            <a
              key={p.id}
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="group rounded-sm border border-border bg-card overflow-hidden hover:border-volt/80 transition-all"
            >
              <div className="aspect-square bg-secondary/60 overflow-hidden">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-2">
                <div className="text-[10px] font-athletic font-bold uppercase text-foreground truncate">
                  {p.name}
                </div>
                <div className="text-[10px] text-volt font-bold">{p.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
