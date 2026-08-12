import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const STORE_URL = "https://direct.distrokid.com/seanaustin3/";
const STORE_BANNER = "/attached_assets/Sean-Austin-reggae-artist-Houston-11.jpeg";

// Featured merchandise items with actual product images and direct links
const featuredItems = [
  {
    id: "tshirt-afronomixx",
    name: "AFRONOMIXX T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/e54b1957e19c988fbc3ad4615e8d41a307532e40/original/6291500a-2f26-4f93-8d05-5991a33fd8bd.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216576-afronomixx-unisex-t-shirt",
  },
  {
    id: "tshirt-purple-hearts",
    name: "Purple Hearts T-Shirt",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/fdb248ead60e0ac7f343c841d8594f742bb31cbf/original/0f43e36a-afaf-41f6-8afc-8060fb8fe085.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216567-purple-hearts-unisex-t-shirt",
  },
];

export default function MerchPage() {
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
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">
              Featured
            </h2>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
              data-testid="link-shop-all-inline"
            >
              Shop All
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-testid={`card-merch-${item.id}`}
              >
                <div className="aspect-square bg-white rounded-sm overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black text-white text-center text-xs font-semibold uppercase tracking-widest py-3">
                    Shop Now
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-white/50 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="text-white font-semibold mt-0.5">{item.name}</h3>
                  </div>
                  <p className="text-white font-semibold flex-shrink-0">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Shop-all promo banner */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
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
          </div>
        </div>

        <div className="text-center pb-14">
          <p className="text-sm text-white/40">
            All purchases support the artist directly. Thank you for your support!
          </p>
        </div>
      </div>
    </>
  );
}
