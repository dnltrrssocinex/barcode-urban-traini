import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/FooterAndContact";
import { AboutContent } from "../components/AboutContent";
import { BookingModal } from "../components/BookingModal";
import { ShopModal } from "../components/ShopModal";
import { fallbackProducts } from "../lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BARCODE" },
      {
        name: "description",
        content:
          "Behind the bars. Beyond the limits. The story of Barcode — founded by Rafiq as more than fitness: training, music, apparel, and community built to break limits and raise the bar.",
      },
      { property: "og:title", content: "About — BARCODE" },
      {
        property: "og:description",
        content:
          "Behind the bars. Beyond the limits. The story of Barcode and founder Rafiq — training, music, apparel, and community built to break limits and raise the bar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [shopOpen, setShopOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const openBooking = () => {
    setSelectedServiceId(undefined);
    setBookingOpen(true);
  };

  const openShop = () => {
    setSelectedProductId(undefined);
    setShopOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-volt selection:text-primary-foreground font-sans bg-concrete-grain">
      <Navbar onOpenBooking={openBooking} onOpenShop={openShop} />

      <AboutContent onOpenBooking={openBooking} onOpenShop={openShop} />

      <Footer onBookClick={openBooking} onShopClick={openShop} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialServiceId={selectedServiceId === undefined ? undefined : selectedServiceId}
      />

      <ShopModal
        isOpen={shopOpen}
        onClose={() => setShopOpen(false)}
        products={fallbackProducts()}
        selectedProductId={selectedProductId === undefined ? undefined : selectedProductId}
      />

      <div className="sr-only">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
