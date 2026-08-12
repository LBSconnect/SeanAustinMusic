import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

const COVER_ART = "/attached_assets/Sean-Austin-Fi-Yu-Forever.jpeg";
const SPOTIFY_URL = "https://open.spotify.com/search/Sean%20Austin%20Fi%20Yu%20Forever";

// Compact teaser for the current priority release — not a discography section.
// Full catalog lives on /music; this exists purely to promote and route there.
export default function HomeFeaturedRelease() {
  return (
    <section className="bg-black border-t border-white/10" data-testid="section-home-featured-release">
      <div className="max-w-5xl mx-auto px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={COVER_ART}
            alt="Fi Yu Forever — Sean Austin"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover flex-shrink-0 grayscale"
          />

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-1">
              Currently Playing
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-white leading-none">
              Fi Yu Forever
            </h2>
            <p className="text-sm text-white/50 mt-1">Sean Austin</p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
              <Button
                className="gap-2 bg-white text-black hover:bg-white/90 rounded-none tracking-wide"
                data-testid="button-featured-stream"
              >
                <FaSpotify className="w-4 h-4" />
                Stream
              </Button>
            </a>
            <a href="/music">
              <Button
                variant="ghost"
                className="gap-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-none"
                data-testid="link-explore-music"
              >
                Explore Music
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
