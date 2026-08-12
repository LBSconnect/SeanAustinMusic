import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Configurable like the hero — swap the photo/crop here.
const BRIDGE_IMAGE = "/attached_assets/Sean-Austin-reggae-artist-Houston-5.jpg";
const BRIDGE_POSITION = "center 10%";

// One strong image + one short line + one CTA. Not a bio — the About page
// (linked via /social) remains the full-story destination.
export default function HomeBrandBridge() {
  return (
    <section className="relative bg-black" data-testid="section-home-brand-bridge">
      <div className="relative h-[56vh] min-h-[420px] max-h-[620px] overflow-hidden">
        <img
          src={BRIDGE_IMAGE}
          alt="Sean Austin"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          style={{ objectPosition: BRIDGE_POSITION }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-12 sm:pb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-2xl">
            The Music. The Journey. The Story.
          </h2>
          <a href="/social" className="mt-6">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-7 bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white rounded-none tracking-wide font-semibold"
              data-testid="button-discover-sean"
            >
              Discover Sean
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
