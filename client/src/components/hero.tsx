import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaSpotify, FaApple, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
      data-testid="section-hero"
    >
      {/* Full-bleed background image */}
      <img
        src="/attached_assets/Sean-Austin-reggae-artist-Houston-16.jpeg"
        alt="Sean Austin"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 35%" }}
        fetchPriority="high"
      />

      {/* Gradient overlays — heavy bottom fade for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

      {/* Content pinned to bottom */}
      <div className="relative z-10 px-6 pb-10 pt-20 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Location tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/75">
              Houston, Texas
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-none mb-4 tracking-tight"
            data-testid="text-hero-headline"
          >
            <span style={{ color: "#cc2200" }}>ROOTS.</span>{" "}
            <span style={{ color: "#FFD700" }}>ROCK.</span>{" "}
            <span style={{ color: "#22aa22" }}>REGGAE.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
            Sean Austin blends Jamaican roots with a modern global sound — music that moves your spirit and your body.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-2 px-7 bg-primary hover:bg-primary/90"
                data-testid="button-stream-now"
              >
                <FaSpotify className="w-4 h-4" />
                Stream Now
              </Button>
            </a>
            <a href="/videos">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-7 bg-white/10 border-white/30 text-white hover:bg-white/20"
                style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
                data-testid="button-watch-video"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Watch Videos
              </Button>
            </a>
          </div>

          {/* Platform icon row */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaSpotify className="w-5 h-5" />
            </a>
            <a
              href="https://music.apple.com/us/artist/sean-austin/1496526691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaApple className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@SeanAustinMusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/iamseanaustin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
