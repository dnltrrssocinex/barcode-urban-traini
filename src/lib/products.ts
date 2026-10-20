import type { CatalogProduct } from "@/integrations/payments";
import { APPAREL_PRODUCTS } from "./data";

/** A product normalized for display on the homepage apparel section + shop modal. */
export interface DisplayProduct {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  status: string;
  /** True when this product comes from the live Payments catalog. */
  isCatalog: boolean;
  /** Catalog products carry the priceId used to seed hosted checkout. */
  priceId?: string | undefined;
  soldOut?: boolean | undefined;
}

/** External GoHighLevel storefront, used as a fallback when the catalog is empty. */
export const SHOP_URL = "https://shop.barcode1982.com";

const SELECTION_KEY = "vibe.checkout.selection.v1";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}

/** Convert a live catalog product into the display shape used by the apparel grid. */
export function catalogToDisplay(p: CatalogProduct): DisplayProduct {
  const available = p.prices.filter((pr) => !pr.sold_out);
  const price = available[0] ?? p.prices[0];
  const currency = price?.currency ?? p.currency ?? "USD";
  const amount = price?.amount ?? 0;
  const formatted = formatPrice(amount, currency);
  const image = p.image ?? p.images?.[0] ?? "";
  const allSoldOut = p.prices.length > 0 && available.length === 0;
  const subtitle = p.description ? stripHtml(p.description).slice(0, 90) : "";

  return {
    id: p.id,
    name: p.name,
    subtitle,
    price: p.prices.length > 1 ? `From ${formatted}` : formatted,
    image,
    status: allSoldOut ? "Sold Out" : "In Stock",
    isCatalog: true,
    priceId: price?.id,
    soldOut: allSoldOut,
  } satisfies DisplayProduct;
}

/** The hardcoded featured products, used only when the live catalog is empty. */
export function fallbackProducts(): DisplayProduct[] {
  return APPAREL_PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    subtitle: p.subtitle,
    price: p.price,
    image: p.image,
    status: p.status,
    isCatalog: false,
  }));
}

/** Persist a single catalog product's price so the hosted checkout sells it. */
export function persistCheckoutSelection(priceId: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      SELECTION_KEY,
      JSON.stringify({ items: [{ priceId, quantity: 1 }] }),
    );
  } catch {
    /* storage unavailable — checkout will fall back to its own empty state */
  }
}
