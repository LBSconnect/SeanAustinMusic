import { useState } from "react";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Mail } from "lucide-react";
import Container from "@/components/container";
import EmailCapture from "@/components/email-capture";

const STORE_URL = "https://direct.distrokid.com/seanaustin3/";
const STORE_BANNER = "/attached_assets/Sean-Austin-reggae-artist-Houston-11.jpeg";

// Real garment info, verified against each product's DistroKid store page —
// same print-on-demand garment for every design, so the size run, color
// options, and fulfillment description are shared across all four.
const SIZE_RANGE = "S – 5XL";
const COLORS = ["Black", "Dark Grey Heather", "Navy", "White"];
const COLOR_SWATCH: Record<string, string> = {
  Black: "#111111",
  "Dark Grey Heather": "#6b7280",
  Navy: "#1e3a5f",
  White: "#ffffff",
};

// Featured merchandise items with actual product images and direct links —
// every item here is real and currently for sale on the artist's store.
const featuredItems = [
  {
    id: "tshirt-afronomixx",
    name: "AFRONOMIXX T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    type: "Apparel",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/e54b1957e19c988fbc3ad4615e8d41a307532e40/original/6291500a-2f26-4f93-8d05-5991a33fd8bd.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216576-afronomixx-unisex-t-shirt",
  },
  {
    id: "tshirt-purple-hearts",
    name: "Purple Hearts T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    type: "Apparel",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/fdb248ead60e0ac7f343c841d8594f742bb31cbf/original/0f43e36a-afaf-41f6-8afc-8060fb8fe085.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216567-purple-hearts-unisex-t-shirt",
  },
  {
    id: "tshirt-daddy-you-a-leader",
    name: "Daddy You A Leader T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    type: "Apparel",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/5365f426e2d60691857780a40f2181ece26a3b3f/original/5ff24fc4-fbce-4d18-b7fe-a3259e3dc091.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274735-daddy-you-a-leader-unisex-t-shirt",
  },
  {
    id: "tshirt-birthday-shellings",
    name: "Birthday Shellings T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    type: "Apparel",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/75699eab5cd848b35f24eb9b0ebb1e6e999ab3b7/original/9ae7115a-e9f3-4310-8d1b-4b296daf745f.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274734-birthday-shellings-unisex-t-shirt",
  },
];

type Item = (typeof featuredItems)[number];

const categories = ["All", ...Array.from(new Set(featuredItems.map((i) => i.type)))];

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      data-testid={`card-merch-${item.id}`}
    >
      {/* Photo-frame treatment: a white mat + hairline border + soft shadow
          around the product photo, like a framed print, rather than the
          image sitting flush against the page. */}
      <div className="bg-white p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] rounded-sm">
        <div className="border border-black/10">
          <div className="aspect-square overflow-hidden relative bg-white">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black text-white text-center text-xs font-semibold uppercase tracking-widest py-3">
              Shop Now
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] text-white/50 uppercase tracking-wider">
            {item.category}
          </p>
          <h3 className="text-white font-semibold mt-0.5">{item.name}</h3>
          <p className="text-xs text-white/40 mt-1">Sizes {SIZE_RANGE}</p>
          <div className="flex items-center gap-1.5 mt-2" aria-hidden="true">
            {COLORS.map((c) => (
              <span
                key={c}
                title={c}
                className="w-3 h-3 rounded-full ring-1 ring-white/30"
                style={{ backgroundColor: COLOR_SWATCH[c] }}
              />
            ))}
          </div>
        </div>
        <p className="text-white font-semibold flex-shrink-0">{item.price}</p>
      </div>
    </a>
  );
}

export default function MerchPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleItems =
    activeCategory === "All" ? featuredItems : featuredItems.filter((i) => i.type === activeCategory);

  return (
    <>
      <SEO
        title="Merch"
        description="Official Sean Austin merchandise. Shop music, apparel, and more."
      />

      <div className="min-h-screen bg-black">
        {/* Store banner */}
        <div className="relative h-[36vh] min-h-[260px] max-h-[420px] overflow-hidden">
          <img
            src={STORE_BANNER}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-3">
              Sean Austin
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
              Official Store
            </h1>
            <p className="mt-3 text-white/70 max-w-md">
              Apparel and merch, straight from the artist.
            </p>
          </div>
        </div>

        {/* Product grid — clean, editorial, product-first */}
        <Container className="py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? "bg-white text-black"
                      : "bg-white/10 text-white/60 hover:text-white hover:bg-white/15"
                  }`}
                  data-testid={`button-category-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 flex-shrink-0"
              data-testid="link-shop-all-inline"
            >
              Shop All
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {visibleItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </Container>

        {/* Shop-all promo banner */}
        <div className="border-t border-white/10">
          <Container className="py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white">The Full Collection</h2>
              <p className="text-white/60 mt-1">
                Browse every official Sean Austin T-shirt and more.
              </p>
            </div>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="gap-2 bg-white text-black hover:bg-white/90 rounded-none tracking-wide font-semibold px-8"
                data-testid="button-shop-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop All Items
              </Button>
            </a>
          </Container>
        </div>

        {/* Newsletter / merch-drop signup */}
        <div className="border-t border-white/10">
          <EmailCapture />
        </div>

        {/* Shipping, support & checkout info */}
        <div className="border-t border-white/10">
          <Container className="py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Truck className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Shipping &amp; Returns
                </h3>
                <p className="text-sm text-white/50">
                  Every item is made to order at checkout, so all sales are final.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Secure Checkout
                </h3>
                <p className="text-sm text-white/50">
                  Orders are processed securely through DistroKid. 100% of proceeds
                  go directly to the artist.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Support
                </h3>
                <p className="text-sm text-white/50">
                  Questions about an order?{" "}
                  <a
                    href="mailto:iamseanaustin@icloud.com"
                    className="text-primary hover:text-primary/80"
                  >
                    iamseanaustin@icloud.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </div>

        <Container className="text-center pb-14 pt-10">
          <p className="text-sm text-white/40">
            All purchases support the artist directly. Thank you for your support!
          </p>
        </Container>
      </div>
    </>
  );
}
