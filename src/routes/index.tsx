import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { IntroSection } from "../components/IntroSection";
import { ApparelSection } from "../components/ApparelSection";
import { TrainingSection } from "../components/TrainingSection";
import { CommunityAndFounder } from "../components/CommunityAndFounder";
import { ContactSection, Footer } from "../components/FooterAndContact";
import { BookingModal } from "../components/BookingModal";
import { ShopModal } from "../components/ShopModal";
import { BARCODE_IMAGES } from "../lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BARCODE — Urban Gym & Athletic Apparel" },
      {
        name: "description",
        content:
          "Barcode is an urban training compound engineered for real movement, strength, performance, and street athletic culture. Book your session or shop the collection.",
      },
      { property: "og:title", content: "BARCODE — Urban Gym & Athletic Apparel" },
      {
        property: "og:description",
        content:
          "Urban training compound built for people who want to move stronger, train harder, and become more capable.",
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

      <IntroSection />

      {/* Apparel and Gear moved above Training Services as requested */}
      <ApparelSection onOpenProduct={(id) => openShopWithProduct(id)} />

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
        initialServiceId={selectedServiceId}
      />

      <ShopModal
        isOpen={shopOpen}
        onClose={() => setShopOpen(false)}
        selectedProductId={selectedProductId}
      />
    </div>
  );
}
