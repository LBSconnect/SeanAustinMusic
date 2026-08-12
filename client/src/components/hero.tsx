import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaSpotify, FaApple, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      {/* Full-bleed image — no text overlay */}
      <section
        className="relative h-screen min-h-[600px] overflow-hidden"
        data-testid="section-hero"
      >
        {/* The source artwork is a square promo graphic with "SEAN AUSTIN / FI YU FOREVER"
            text baked into its left half and a photo on the right half. On narrow/tall
            viewports object-cover has to crop most of the width away, so the position is
            shifted per-breakpoint to keep the photo (not the baked-in text) in frame on
            phones and tablets. */}
        <img
          src="/attached_assets/Sean-Austin-Fi-Yu-Forever.jpeg"
          alt="Sean Austin - Fi Yu Forever"
          className="absolute inset-0 w-full h-full object-cover object-[88%_center] sm:object-[68%_center] lg:object-[center_38%]"
          fetchPriority="high"
        />

        {/* Subtle bottom fade to blend into the content section below */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Headline, tagline, and CTAs — its own section, not overlaid on the image */}
      <section className="px-6 py-14 text-center bg-background" data-testid="section-hero-content">
        <div className="max-w-4xl mx-auto">

          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-5 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            data-testid="text-hero-headline"
          >
            SEAN AUSTIN
          </h1>

          {/* Location tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/75">
              Houston, Texas
            </span>
          </div>

          <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
            Sean Austin blends Jamaican roots with a modern global sound, music that moves your spirit and your body.
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
              <FaSpotify className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://music.apple.com/us/artist/sean-austin/1496526691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaApple className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@SeanAustinReggae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaYoutube className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/iamseanaustin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
