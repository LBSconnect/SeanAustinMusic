import { Music, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="flex flex-col min-h-[100svh] overflow-hidden"
      data-testid="section-hero"
    >
      {/* ── IMAGE ZONE ───────────────────────────────────────────────────
          pt-16 clears the fixed navigation bar (h-16 = 64px) so the photo
          starts visibly below it. Height is explicit so the image is always
          a defined, clearly visible block above the text on every device.  */}
      <div
        className="relative w-full flex-shrink-0 pt-16"
        style={{ height: "calc(43svh + 3rem)" }}
      >
        <img
          src="/attached_assets/Sean-Austin-reggae-artist-Houston-16.jpeg"
          alt="Sean Austin"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
          fetchPriority="high"
        />
        {/* Soft fade at bottom edge blending into the dark content area */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      {/* ── CONTENT ZONE ─────────────────────────────────────────────────
          flex-1 fills the remaining viewport height. Content is centred
          vertically within this zone.                                     */}
      <div className="flex-1 bg-background flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto w-full">
          <h1
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
            data-testid="text-hero-headline"
          >
            <span style={{ color: "#8B1A1A" }}>ROOTS.</span>{" "}
            <span style={{ color: "#FFD700" }}>ROCK.</span>{" "}
            <span style={{ color: "#1A6B1A" }}>REGGAE.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-2">
            Houston based Reggae Artist Sean Austin blends Jamaican roots with modern global sound
            music that moves your spirit and your body.
          </p>
          <p className="mt-3 text-sm text-primary/80">
            <a href="/reggae-artist-houston-texas" className="hover:text-primary underline underline-offset-4 transition-colors">
              Reggae Artist in Houston, Texas — Book Live Performances &amp; Events
            </a>
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-stream-now">
                <Music className="w-4 h-4 mr-2" />
                Stream Now
              </Button>
            </a>
            <a href="/videos">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white"
                style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
                data-testid="button-watch-video"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
