import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa6";
import { Play } from "lucide-react";
import Container from "@/components/container";

// ─── Hero image configuration ────────────────────────────────────────────
// Swap photos or crops here without touching the markup below.
// Desktop and mobile can use entirely different photos if needed — the two
// <img> tags are toggled by breakpoint (hidden md:block / md:hidden), not by
// JS media queries, so there's no layout flash and it works with SSR.
const HERO_IMAGE_DESKTOP = "/attached_assets/Sean-Austin-Fi-Yu-Forever-Solo.png";
const HERO_IMAGE_MOBILE = "/attached_assets/Sean-Austin-Fi-Yu-Forever-Solo.png";
// object-position as "horizontal% vertical%" — adjust to re-center the subject
// after swapping in a different photo. Never stretches; always object-fit: cover.
const HERO_POSITION_DESKTOP = "82% 24%";
const HERO_POSITION_MOBILE = "50% center";

const SPOTIFY_URL = "https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT";

function HeroCopy() {
  return (
    <div className="max-w-xl">
      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-4">
        Official Home of Sean Austin
      </p>

      <h1
        className="font-display leading-[0.85] tracking-tight text-white"
        data-testid="text-hero-headline"
      >
        <span className="block text-6xl sm:text-7xl lg:text-8xl">Reggae</span>
        <span className="block text-6xl sm:text-7xl lg:text-8xl italic text-white/70">
          Is Back
        </span>
      </h1>

      <p
        className="mt-5 text-2xl sm:text-3xl text-white/90"
        style={{ fontFamily: "'Give You Glory', cursive" }}
      >
        Sean Austin
      </p>

      <p className="mt-4 text-sm sm:text-base text-white/60 tracking-wide">
        Real Love. Real Vibes. Real Life.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="gap-2 px-7 bg-white text-black hover:bg-white/90 rounded-none tracking-wide font-semibold"
            data-testid="button-listen-now"
          >
            <FaSpotify className="w-4 h-4" />
            Listen Now
          </Button>
        </a>
        <a href="/videos">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-7 bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white rounded-none tracking-wide font-semibold"
            data-testid="button-watch-video"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch Video
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    // The photo and its overlays are true edge-to-edge (100% viewport width,
    // no max-width) — only the copy below is constrained to the site's
    // shared Container so its left edge lines up with the nav/footer grid.
    // A fixed aspect-ratio (rather than a vh-based height) keeps the photo's
    // object-cover crop window a constant percentage of its height at every
    // viewport width, so the framing doesn't drift as the window gets wider.
    // w-full is required alongside md:aspect-[...] + md:min-h-[...]: without
    // it, at widths where min-h clamps the box taller than the ratio would
    // naturally make it (e.g. right around 768px here), some browsers derive
    // the box's WIDTH from that clamped height via the ratio instead of
    // filling the viewport — causing horizontal overflow.
    <section
      className="relative w-full bg-black overflow-hidden h-[86vh] min-h-[560px] max-h-[880px] md:h-auto md:aspect-[16/10] md:min-h-[560px] md:max-h-[900px]"
      data-testid="section-hero"
    >
      {/* Desktop photo */}
      <img
        src={HERO_IMAGE_DESKTOP}
        alt="Sean Austin"
        className="hidden md:block absolute inset-0 w-full h-full object-cover grayscale motion-reduce:transition-none"
        style={{ objectPosition: HERO_POSITION_DESKTOP }}
        fetchPriority="high"
      />
      {/* Mobile photo */}
      <img
        src={HERO_IMAGE_MOBILE}
        alt="Sean Austin"
        className="md:hidden absolute inset-0 w-full h-full object-cover grayscale"
        style={{ objectPosition: HERO_POSITION_MOBILE }}
        fetchPriority="high"
      />

      {/* Desktop: dark panel behind the copy so it reads over any photo */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-black via-black/85 to-transparent" />
      {/* Mobile: bottom scrim so the copy block (stacked below the photo's midline) reads clearly */}
      <div className="md:hidden absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/70 to-transparent" />
      {/* Faint top scrim on all sizes so the fixed nav stays legible */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        <Container>
          <HeroCopy />
        </Container>
      </div>
    </section>
  );
}
