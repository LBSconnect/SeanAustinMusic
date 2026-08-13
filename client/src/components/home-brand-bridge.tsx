import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Container from "@/components/container";

// Configurable like the hero — swap the photo/crop here.
const BRIDGE_IMAGE = "/attached_assets/Sean-Austin-reggae-artist-Houston-17.jpeg";
// This photo is portrait (taller than it is wide), so object-cover always
// shows its full width and crops top/bottom — object-position only needs a
// vertical value tuned to the face's position in the source photo.
const BRIDGE_POSITION = "center 29%";

// One strong image + one short line + one CTA. Not a bio — the About page
// (linked via /social) remains the full-story destination.
export default function HomeBrandBridge() {
  return (
    <section className="relative bg-black" data-testid="section-home-brand-bridge">
      {/* A fixed aspect-ratio (rather than a vh-based height) keeps the
          portrait photo's object-cover crop window a constant percentage of
          its height at every viewport width — a vh-based height let wide/
          short viewports "zoom in" so far that the subject's face got cut
          off, same bug already fixed on the hero and /music banner. No
          max-height: it would fight the aspect ratio at wide widths the
          same way. w-full is required alongside aspect-[...] + min-h-[...]:
          without it, when min-h clamps the box taller than the ratio would
          naturally make it, some browsers derive the box's WIDTH from that
          clamped height instead of filling the viewport. */}
      <div className="relative w-full aspect-[2/1] min-h-[320px] overflow-hidden">
        <img
          src={BRIDGE_IMAGE}
          alt="Sean Austin"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          style={{ objectPosition: BRIDGE_POSITION }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center pb-12 sm:pb-16">
          <Container className="flex flex-col items-center">
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
          </Container>
        </div>
      </div>
    </section>
  );
}
