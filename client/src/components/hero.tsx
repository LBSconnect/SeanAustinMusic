import { Music, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
      data-testid="section-hero"
    >
      {/* Dark base so nothing flashes unstyled */}
      <div className="absolute inset-0 bg-background" />

      {/* Artist photo — public URL avoids Vite bundling quirks; center 20%
          keeps the subject visible on both portrait mobile and landscape desktop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/attached_assets/Sean-Austin-reggae-artist-Houston-17.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          opacity: 0.85,
        }}
      />

      {/* Gradient scrim — only the bottom 55% fades to background so the
          top portion of the image is always unobstructed */}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent"
        style={{ height: "55%" }}
      />

      {/* Spacer — flex-1 pushes content into the lower half on every viewport */}
      <div className="flex-1" style={{ minHeight: "48svh" }} />

      {/* Content — always in the bottom ~45%, never overlaps the image face */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center px-4 sm:px-6 pb-14 sm:pb-20">
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
    </section>
  );
}
