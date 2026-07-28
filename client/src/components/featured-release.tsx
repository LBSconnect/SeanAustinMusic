import { Button } from "@/components/ui/button";
import { Music, ShoppingBag } from "lucide-react";
import { FaSpotify, FaApple } from "react-icons/fa6";

export default function FeaturedRelease() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/5 bg-[#2b2b30]"
      data-testid="section-featured-release"
    >
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Section divider label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-primary/25" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Latest Release
          </span>
          <div className="flex-1 h-px bg-primary/25" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left — release info */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              2026 · Album · 12 Tracks
            </p>
            <h2
              className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-4"
              data-testid="text-featured-release-title"
            >
              The<br />Essentials
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
              12 essential tracks spanning roots reggae, dancehall and contemporary sounds, Sean Austin's most complete body of work to date.
            </p>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              <a
                href="https://open.spotify.com/album/0ZkV4SpzAppY7ZbMDp2tl0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1db954] text-black text-xs font-bold hover:bg-[#1db954]/85 transition-colors"
              >
                <FaSpotify className="w-3.5 h-3.5" /> Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/sean-austin/1496526691"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fc3c44] text-white text-xs font-bold hover:bg-[#fc3c44]/85 transition-colors"
              >
                <FaApple className="w-3.5 h-3.5" /> Apple Music
              </a>
            </div>

            {/* Secondary nav links */}
            <div className="flex flex-wrap gap-3">
              <a href="/music">
                <Button variant="outline" size="sm" className="gap-1.5 border-white/20 text-white/70 hover:text-white">
                  <Music className="w-3.5 h-3.5" />
                  All Releases
                </Button>
              </a>
              <a href="/merch">
                <Button variant="outline" size="sm" className="gap-1.5 border-white/20 text-white/70 hover:text-white">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Shop Merch
                </Button>
              </a>
            </div>
          </div>

          {/* Right — Spotify album embed */}
          <div>
            <iframe
              style={{ borderRadius: "12px", display: "block" }}
              src="https://open.spotify.com/embed/album/0ZkV4SpzAppY7ZbMDp2tl0?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="The Essentials on Spotify"
              data-testid="embed-spotify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
