import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ExternalLink } from "lucide-react";

const STORE_URL = "https://direct.distrokid.com/seanaustin3/";

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
      <div className="min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Official Store
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Shop official Sean Austin merchandise and music.
            </p>
          </div>

          {/* Featured Items Grid */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-primary text-center mb-6">
              Featured Items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {featuredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="bg-card/50 hover:bg-card/70 transition-all hover:scale-105 h-full overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-display text-lg font-semibold text-primary mb-2">
                          {item.name}
                        </h3>
                        <p className="text-xl font-bold text-primary">
                          {item.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Store Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-primary mb-4">
                  View Full Collection
                </h2>
                <p className="text-muted-foreground mb-6">
                  Browse the complete store for the full lineup of official Sean Austin T-shirts and more.
                </p>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Shop All Items
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All purchases support the artist directly. Thank you for your support!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
