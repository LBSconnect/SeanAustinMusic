import { Button } from "@/components/ui/button";
import { Music, ShoppingBag } from "lucide-react";

export default function FeaturedRelease() {
  return (
    <section className="py-20 px-6 text-center" data-testid="section-featured-release">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">New Release</p>
        <h2 className="font-display text-3xl font-bold text-primary" data-testid="text-featured-release-title">
          Daddy You a Leader
        </h2>
        <p className="mt-4 text-muted-foreground">
          The latest single from Sean Austin — an uplifting Father's Day anthem. Stream now on all platforms.
        </p>

        {/* Stream embeds — equal height, side-by-side on sm+ screens */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Apple Music — Daddy You a Leader */}
          <div style={{ background: "#fc3c44", borderRadius: "12px", padding: "8px" }}>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="175"
              style={{ width: "100%", overflow: "hidden", borderRadius: "8px", display: "block" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/daddy-you-a-leader-single/6766866326"
              title="Daddy You a Leader on Apple Music"
            />
          </div>

          {/* Spotify — Daddy You a Leader */}
          <div style={{ background: "#1db954", borderRadius: "12px", padding: "8px" }}>
            <iframe
              style={{ borderRadius: "8px", display: "block" }}
              src="https://open.spotify.com/embed/album/7HaBbBg2YpdZtJkvkLuTnb?utm_source=generator&theme=0"
              width="100%"
              height="175"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Daddy You a Leader on Spotify"
              data-testid="embed-spotify"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/music">
            <Button variant="outline" size="lg">
              <Music className="w-4 h-4 mr-2" />
              View All Releases
            </Button>
          </a>
          <a href="/merch">
            <Button variant="outline" size="lg">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Merch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
