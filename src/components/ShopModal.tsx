import { useState } from "react";
import { X, ExternalLink, ShoppingBag, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { APPAREL_PRODUCTS, BARCODE_IMAGES } from "../lib/data";

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductId?: string;
}

export function ShopModal({ isOpen, onClose, selectedProductId }: ShopModalProps) {
  const [activeProduct, setActiveProduct] = useState(selectedProductId || APPAREL_PRODUCTS[0].id);
  const [selectedSize, setSelectedSize] = useState("L");
  const [addedNotice, setAddedNotice] = useState(false);

  if (!isOpen) return null;

  const product = APPAREL_PRODUCTS.find((p) => p.id === activeProduct) || APPAREL_PRODUCTS[0];

  const handleCheckout = () => {
    setAddedNotice(true);
    setTimeout(() => {
      // Connect to online checkout / shop cart flow
      window.open("https://backend.leadconnectorhq.com", "_blank");
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40">
          <div>
            <span className="text-[11px] font-athletic tracking-[0.2em] uppercase font-bold text-volt">
              BARCODE ATHLETICS STORE
            </span>
            <h2 className="font-display text-2xl text-foreground font-black tracking-wider">
              WEAR THE WORK
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Preview */}
            <div className="space-y-3">
              <div className="aspect-square bg-secondary/50 rounded-sm border border-border overflow-hidden relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-background/90 text-volt text-[11px] font-athletic font-black uppercase tracking-wider px-2.5 py-1 border border-border">
                  {product.status}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {APPAREL_PRODUCTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveProduct(item.id)}
                    className={`aspect-square rounded-sm border overflow-hidden transition-all ${
                      activeProduct === item.id
                        ? "border-volt ring-1 ring-volt"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <h3 className="font-display text-2xl font-black text-foreground tracking-wide leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{product.subtitle}</p>
                <div className="mt-3 font-athletic text-2xl font-black text-volt">
                  {product.price}
                </div>

                <div className="mt-4 pt-4 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
                  {product.details}
                </div>

                {/* Sizing */}
                <div className="mt-5">
                  <div className="flex justify-between text-xs uppercase font-athletic font-bold text-muted-foreground mb-2">
                    <span>SELECT SIZE</span>
                    <span className="text-volt cursor-pointer hover:underline">
                      SIZE GUIDE (ATHLETIC FIT)
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL", "2XL"].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`w-11 h-11 rounded-sm border font-athletic font-bold text-sm transition-all ${
                          selectedSize === sz
                            ? "border-volt bg-volt text-primary-foreground font-black"
                            : "border-border bg-secondary/40 text-foreground hover:border-border/90"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Checkout actions */}
              <div className="space-y-3 pt-4 border-t border-border">
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-volt/20 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {addedNotice ? "CONNECTING TO SHOP CART..." : `CHECKOUT — ${product.price}`}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-muted-foreground text-center pt-1">
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-volt" />
                    <span>Free Shipping $120+</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-volt" />
                    <span>Heavyweight Durability</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RefreshCw className="w-3.5 h-3.5 text-volt" />
                    <span>Pick up at Gym</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
