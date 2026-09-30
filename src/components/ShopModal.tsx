import { useState } from "react";
import { X, ShoppingBag, Check, ShieldCheck, ArrowRight } from "lucide-react";
import { APPAREL_PRODUCTS, BARCODE_IMAGES } from "../lib/data";

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductId?: string;
}

export function ShopModal({ isOpen, onClose, selectedProductId }: ShopModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(
    selectedProductId || APPAREL_PRODUCTS[0]?.id || "",
  );
  const [selectedSize, setSelectedSize] = useState("L");
  const [added, setAdded] = useState(false);

  if (!isOpen) return null;

  const currentItem = APPAREL_PRODUCTS.find((p) => p.id === selectedProduct) || APPAREL_PRODUCTS[0];

  const handleCheckoutRedirect = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40">
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
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Product Selector Ribbon */}
          <div className="grid grid-cols-4 gap-2">
            {APPAREL_PRODUCTS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedProduct(item.id)}
                className={`p-2 rounded-sm border text-left transition-all ${
                  item.id === currentItem.id
                    ? "border-volt bg-secondary"
                    : "border-border bg-card/60 hover:border-border/80"
                }`}
              >
                <div className="aspect-square bg-secondary/80 rounded-xs overflow-hidden mb-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-[10px] font-athletic uppercase font-bold text-foreground truncate">
                  {item.name.replace("BARCODE ", "")}
                </div>
                <div className="text-[9px] text-volt font-bold">{item.price}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Left Product Image */}
            <div className="sm:col-span-6 aspect-square rounded-sm bg-secondary/80 border border-border overflow-hidden relative">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs text-volt text-[10px] font-athletic font-black uppercase tracking-wider px-2 py-0.5 border border-border z-10">
                {currentItem.status}
              </span>
            </div>

            {/* Right Details */}
            <div className="sm:col-span-6 space-y-4">
              <div>
                <span className="inline-block text-[10px] font-athletic uppercase tracking-widest text-volt font-bold bg-secondary px-2 py-0.5 border border-border mb-2">
                  {currentItem.status}
                </span>
                <h3 className="font-display text-2xl font-black text-foreground tracking-wide">
                  {currentItem.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{currentItem.subtitle}</p>
                <div className="font-athletic text-2xl font-black text-volt mt-2">
                  {currentItem.price}
                </div>
              </div>

              {/* Size Select */}
              <div>
                <label className="block text-[11px] uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                  SELECT SIZE
                </label>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL", "2XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`w-10 h-10 rounded-sm font-athletic font-black text-xs transition-all ${
                        selectedSize === sz
                          ? "bg-volt text-primary-foreground shadow-md shadow-volt/20"
                          : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-muted-foreground pt-1 border-t border-border/60">
                {currentItem.details}
              </div>

              <button
                onClick={handleCheckoutRedirect}
                className="w-full py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-volt/20"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ITEM ADDED TO CART</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG & PROCEED TO CHECKOUT</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] uppercase font-athletic tracking-wider text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-volt" />
                <span>Heavyweight French Terry Cotton | Free Size Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
