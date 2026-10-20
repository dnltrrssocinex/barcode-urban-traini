import { useState, useEffect } from "react";
import { Menu, X, Calendar, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BARCODE_IMAGES } from "../lib/data";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenShop: () => void;
}

export function Navbar({ onOpenBooking, onOpenShop }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavLink = { label: string } & ({ href: string } | { to: "/about" });
  const navLinks: NavLink[] = [
    { label: "HOME", href: "#hero" },
    { label: "BOOK", href: "#booking" },
    { label: "SHOP", href: "#shop" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-foreground leading-none">
            BARCODE
          </span>
          <img
            src={BARCODE_IMAGES.logo}
            alt="Barcode"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 invert brightness-200"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) =>
              "href" in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase font-athletic tracking-widest text-muted-foreground hover:text-volt transition-colors font-bold"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs uppercase font-athletic tracking-widest text-muted-foreground hover:text-volt transition-colors font-bold"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="h-5 w-px bg-border" />

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenShop}
              className="px-4 py-2 rounded-sm border border-border hover:border-volt bg-secondary/60 hover:bg-secondary text-foreground text-xs uppercase font-athletic tracking-wider font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-volt" />
              <span>SHOP BARCODE</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-sm bg-volt text-primary-foreground text-xs uppercase font-athletic tracking-wider font-black hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-volt/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A SESSION</span>
            </button>
          </div>
        </nav>

        {/* Mobile triggers */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-sm bg-volt text-primary-foreground text-[11px] uppercase font-athletic tracking-wider font-black flex items-center gap-1"
          >
            <span>BOOK</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-volt transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card/98 border-b border-border backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) =>
              "href" in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase font-athletic tracking-widest text-foreground hover:text-volt font-bold py-2 border-b border-border/40"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase font-athletic tracking-widest text-foreground hover:text-volt font-bold py-2 border-b border-border/40"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShop();
              }}
              className="py-3 rounded-sm border border-border text-foreground text-xs uppercase font-athletic tracking-wider font-bold flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-volt" />
              <span>SHOP</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-3 rounded-sm bg-volt text-primary-foreground text-xs uppercase font-athletic tracking-wider font-black flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A SESSION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
