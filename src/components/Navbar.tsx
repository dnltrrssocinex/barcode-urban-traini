import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ShoppingBag, Calendar, Dumbbell } from "lucide-react";
import { BARCODE_IMAGES } from "../lib/data";

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenShop: () => void;
}

export function Navbar({ onOpenBooking, onOpenShop }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Training", href: "#training" },
    { label: "Experience", href: "#experience" },
    { label: "Book", href: "#booking" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#coach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-2xl py-3"
            : "bg-linear-to-b from-background/90 via-background/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-10 w-auto flex items-center">
              <img
                src={BARCODE_IMAGES.logo}
                alt="Barcode Urban Fitness"
                className="h-9 w-auto object-contain filter invert contrast-125 brightness-110 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-2xl tracking-widest text-foreground font-black leading-none">
                BARCODE
              </span>
              <span className="font-athletic text-[11px] tracking-[0.25em] text-volt uppercase leading-tight font-bold">
                Urban Training Lab
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-athletic font-bold text-muted-foreground hover:text-volt transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-volt transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenShop}
              className="px-4 py-2.5 rounded-sm border border-border hover:border-volt/60 bg-secondary/60 hover:bg-secondary text-foreground text-xs uppercase tracking-widest font-athletic font-bold flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-volt" />
              <span>SHOP BARCODE</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-sm bg-volt text-primary-foreground text-xs uppercase tracking-widest font-athletic font-extrabold flex items-center gap-2 shadow-lg shadow-volt/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A SESSION</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-sm bg-volt text-primary-foreground text-[11px] font-athletic font-black uppercase tracking-wider"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-volt transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background/98 border-b border-border px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base uppercase tracking-widest font-athletic font-bold text-foreground hover:text-volt py-2 border-b border-border/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}

              <div className="flex flex-col gap-3 pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  BOOK A SESSION
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShop();
                  }}
                  className="w-full py-3.5 rounded-sm border border-border bg-secondary font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 text-foreground"
                >
                  <ShoppingBag className="w-4 h-4 text-volt" />
                  SHOP BARCODE
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Persistent mobile bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-background/95 backdrop-blur-lg border-t border-border px-4 py-2.5 flex items-center gap-2">
        <a
          href="#training"
          className="flex-1 py-2.5 rounded-sm border border-border bg-card text-center text-xs font-athletic font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1.5"
        >
          <Dumbbell className="w-3.5 h-3.5 text-volt" />
          SERVICES
        </a>
        <button
          onClick={() => onOpenBooking()}
          className="flex-[2] py-2.5 rounded-sm bg-volt text-primary-foreground text-center text-xs font-athletic font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-volt/20"
        >
          <Calendar className="w-3.5 h-3.5" />
          BOOK A SESSION
        </button>
        <button
          onClick={onOpenShop}
          className="flex-1 py-2.5 rounded-sm border border-border bg-card text-center text-xs font-athletic font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-volt" />
          SHOP
        </button>
      </div>
    </>
  );
}
