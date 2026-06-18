import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ExternalLink } from "lucide-react";

const STORE_URL = "https://direct.distrokid.com/seanaustin3/";

// Merchandise items synced from the official store
const featuredItems = [
  {
    id: "tshirt-daddy-you-a-leader",
    name: "Daddy You a Leader",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/5365f426e2d60691857780a40f2181ece26a3b3f/original/5ff24fc4-fbce-4d18-b7fe-a3259e3dc091.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274735-daddy-you-a-leader-unisex-t-shirt",
  },
  {
    id: "tshirt-birthday-shellings",
    name: "Birthday Shellings",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/75699eab5cd848b35f24eb9b0ebb1e6e999ab3b7/original/9ae7115a-e9f3-4310-8d1b-4b296daf745f.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274734-birthday-shellings-unisex-t-shirt",
  },
  {
    id: "tshirt-mamma-youre-my-sunshine",
    name: "Mamma You're My Sunshine",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/c7c8021b815ffac00b8279a798b447301ca070a0/original/c5f69e8a-3dc2-4172-9ada-37696f66ecaa.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274733-mamma-you-re-my-sunshine-unisex-t-shirt",
  },
  {
    id: "tshirt-the-essentials",
    name: "The Essentials",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/04888eb30728d7df8eca4add41dd596b128c4eb3/original/d3ac3db0-323e-44ef-ab4b-9a59e40e46e7.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274732-the-essentials-unisex-t-shirt",
  },
  {
    id: "tshirt-greatest-pain-in-life",
    name: "Greatest Pain in Life",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/e1270775513ee9d2751567b2da565cbf62630f5f/original/e1151c5b-5a6e-4395-9c39-471a1049c55c.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1274756-greatest-pain-in-life-unisex-t-shirt",
  },
  {
    id: "tshirt-2020-pt1",
    name: "Sean Austin 2020 Pt. 1",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/b85fe4b19f4233d91dc65831b75121cbc713965c/original/3dc8a2f3-7b0d-4ad4-afda-a7753be07f39.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216579-sean-austin-2020-pt-1-unisex-t-shirt",
  },
  {
    id: "tshirt-2020-pt2",
    name: "2020, Pt. 2: Reloaded",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/bd160e1012146e03120b0eaea4219a593702479e/original/7d0c8e74-7f3d-4947-a778-0d18d0763035.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216580-2020-pt-2-reloaded-unisex-t-shirt",
  },
  {
    id: "tshirt-eyes-dont-lie",
    name: "Eyes Don't Lie",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/d96a2f21a856f07341682fc3edcf41e54e12942b/original/10d5b394-2347-43c6-b3d1-5af156333caa.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216581-eyes-don-t-lie-unisex-t-shirt",
  },
  {
    id: "tshirt-teddy-2-the-future",
    name: "Teddy 2 the Future",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/f32092f96669673dd907bea2b02bc5c95f983e34/original/455648bf-8144-44df-bb33-53d4154c0705.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216577-teddy-2-the-future-unisex-t-shirt",
  },
  {
    id: "tshirt-afronomixx",
    name: "AFRONOMIXX",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/54438aaf1fafa7ce69ddc2a4bf5af2c50f9f5b2b/original/4f45bc69-ff53-4f6d-9965-339129c3a80a.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216576-afronomixx-unisex-t-shirt",
  },
  {
    id: "tshirt-how-deep-is-your-love",
    name: "How Deep Is Your Love",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/1cd5c3c250590f37bc55446e9d2b8ab10b1c0a71/original/84749979-8aa4-4c3f-844a-67a40653b50b.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216569-how-deep-is-your-love-unisex-t-shirt",
  },
  {
    id: "tshirt-purple-hearts",
    name: "Purple Hearts",
    price: "$25.00",
    category: "Unisex T-Shirt",
    image: "https://images.zoogletools.com/s:bzglfiles/u/1262585/052069057f59ba3109b0ac6d7d6847c8f89bf3da/original/22aff42e-df12-477d-8782-5e4681e25f11.png",
    url: "https://direct.distrokid.com/seanaustin3/product/1216567-purple-hearts-unisex-t-shirt",
  },
];

export default function MerchPage() {
  return (
    <>
      <SEO
        title="Merch - Sean Austin"
        description="Official Sean Austin merchandise. Shop music, apparel, and more."
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Official Store
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Shop official Sean Austin merchandise and music.
            </p>
          </div>

          {/* Featured Items Grid */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-primary text-center mb-8">
              Official T-Shirts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  Browse the complete store for all official Sean Austin T-shirts. Available in sizes S–5XL.
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
