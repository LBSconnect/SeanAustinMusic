import { Button } from "@/components/ui/button";
import { Music, ShoppingBag } from "lucide-react";
import { FaSpotify, FaApple } from "react-icons/fa6";

export default function FeaturedRelease() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/5 bg-black/30"
      data-testid="section-featured-release"
    >
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Section divider label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-primary/25" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            New Release
          </span>
          <div className="flex-1 h-px bg-primary/25" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left — release info */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              2026 · Single
            </p>
            <h2
              className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-1"
              data-testid="text-featured-release-title"
            >
              Island<br />Breeze
            </h2>
            <p className="text-sm text-muted-foreground mb-4">feat. Dameon Gayle</p>
            <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
              A smooth island groove blending Jamaican roots with contemporary sound — available on all platforms now.
            </p>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              <a
                href="https://open.spotify.com/album/4YPqkhdYa0H94H9msaB9xx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1db954] text-black text-xs font-bold hover:bg-[#1db954]/85 transition-colors"
              >
                <FaSpotify className="w-3.5 h-3.5" /> Spotify
              </a>
              <a
                href="https://music.apple.com/us/album/island-breeze-single/1891567464"
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

          {/* Right — embed players */}
          <div className="space-y-3">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="152"
              style={{ width: "100%", overflow: "hidden", borderRadius: "12px", display: "block" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/island-breeze-single/1891567464"
              title="Island Breeze on Apple Music"
            />
            <iframe
              style={{ borderRadius: "12px", display: "block" }}
              src="https://open.spotify.com/embed/track/1ZU4hR5PFxKqWGstKd15ho?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Ready Mi Ready on Spotify"
              data-testid="embed-spotify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
