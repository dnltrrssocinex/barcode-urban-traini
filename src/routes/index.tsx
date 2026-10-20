import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { listCatalogProducts } from "@/integrations/payments";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ApparelSection } from "../components/ApparelSection";
import { TrainingSection } from "../components/TrainingSection";
import { CommunityAndFounder } from "../components/CommunityAndFounder";
import { ContactSection, Footer } from "../components/FooterAndContact";
import { BookingModal } from "../components/BookingModal";
import { ShopModal } from "../components/ShopModal";
import { MarqueeBand } from "../components/MarqueeBand";
import { BARCODE_IMAGES } from "../lib/data";
import { catalogToDisplay, fallbackProducts, type DisplayProduct } from "../lib/products";

export const Route = createFileRoute("/")({
  loader: async () => {
    // Try the live Payments catalog first; fall back to the featured products
    // whenever the catalog is empty or unreachable (e.g. during prerender).
    let products: DisplayProduct[] = fallbackProducts();
    try {
      const page = await listCatalogProducts({ limit: 24, offset: 0 });
      if (page.products.length > 0) {
        products = page.products.map(catalogToDisplay);
      }
    } catch {
      /* catalog not configured / unreachable — keep featured fallback */
    }
    return { products };
  },
  head: () => ({
    meta: [
      { title: "BARCODE — Gym & Athletic Apparel" },
      {
        name: "description",
        content:
          "Barcode is a training experience built for people who are determined to raise the bar. Book your session or shop the collection.",
      },
      { property: "og:title", content: "BARCODE — Gym & Athletic Apparel" },
      {
        property: "og:description",
        content:
          "Barcode is a training experience built for people who are determined to raise the bar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BARCODE_IMAGES.logo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BARCODE_IMAGES.logo },
    ],
  }),
  component: Index,
});

function Index() {
  const { products } = Route.useLoaderData();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [shopOpen, setShopOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const openBookingWithService = (id?: string) => {
    setSelectedServiceId(id);
    setBookingOpen(true);
  };

  const openShopWithProduct = (id?: string) => {
    setSelectedProductId(id);
    setShopOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-volt selection:text-primary-foreground font-sans bg-concrete-grain">
      <Navbar
        onOpenBooking={() => openBookingWithService()}
        onOpenShop={() => openShopWithProduct()}
      />

      <HeroSection
        onOpenBooking={() => openBookingWithService()}
        onOpenShop={() => openShopWithProduct()}
      />

      <MarqueeBand />

      {/* Apparel and Gear moved above Training Services as requested */}
      <ApparelSection products={products} onOpenProduct={(id) => openShopWithProduct(id)} />

      <TrainingSection onBookService={(id) => openBookingWithService(id)} />

      <CommunityAndFounder onBookClick={(id) => openBookingWithService(id)} />

      <ContactSection onBookClick={(svc) => openBookingWithService(svc)} />

      <Footer
        onBookClick={() => openBookingWithService()}
        onShopClick={() => openShopWithProduct()}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialServiceId={selectedServiceId === undefined ? undefined : selectedServiceId}
      />

      <ShopModal
        isOpen={shopOpen}
        onClose={() => setShopOpen(false)}
        products={products}
        selectedProductId={selectedProductId === undefined ? undefined : selectedProductId}
      />
    </div>
  );
}
