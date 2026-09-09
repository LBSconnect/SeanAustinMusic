import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Music, Video as VideoIcon, ArrowRight } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa6";
import Container from "@/components/container";

const COVER_ART_URL = "/attached_assets/Sean-Austin-One-More-Chance.jpg";

// YouTube video ID for the official "One More Chance" visualizer
const VIDEO_ID = "SdK9K9vhaMo";

// No dedicated Spotify single link is available yet — falls back to a search
// deep-link (same pattern used for other not-yet-linked tracks in music.tsx).
// The Apple Music link below is the real, direct single link (verified).
const SPOTIFY_SEARCH_URL = "https://open.spotify.com/search/Sean%20Austin%20One%20More%20Chance";
const APPLE_MUSIC_URL = "https://music.apple.com/us/album/one-more-chance/6807165166?i=6807165168";

const RIDDIMS_WORLD_URL = "https://riddimsworld.com/singles/sean-austin-one-more-chance/";

export default function LatestReleasePage() {
  return (
    <>
      <SEO
        title="One More Chance — Latest Release"
        description={`Sean Austin's latest single "One More Chance," produced by XO — a reggae reflection on accountability, forgiveness, and choosing to make things right.`}
        path="/latest-release"
        image={COVER_ART_URL}
        type="music.song"
      />

      <div className="min-h-screen pt-20 pb-12">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Latest Release
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
              One More Chance
            </h1>
            <p className="mt-3 text-muted-foreground">
              2026 · Single · Produced by XO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            {/* Cover art */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 aspect-square">
              <img
                src={COVER_ART_URL}
                alt="Sean Austin - One More Chance cover art"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A reggae reflection on accountability, forgiveness, and relationship reconciliation,
                "One More Chance" finds Sean Austin asking for a second chance after letting someone
                down. Rooted in his Jamaican upbringing, the song carries themes that reach beyond
                romance into questions of trust, pride, and personal growth.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                As featured in{" "}
                <a
                  href={RIDDIMS_WORLD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Riddims World
                </a>
                : "Reggae provides a connection to his Jamaican roots and a fitting setting for a
                song concerned with love and reflection."
              </p>

              {/* Streaming links */}
              <div className="flex flex-wrap gap-2 mb-6">
                <a href={SPOTIFY_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-[#1db954] hover:bg-[#1db954]/85 text-black">
                    <FaSpotify className="w-4 h-4" />
                    Stream on Spotify
                  </Button>
                </a>
                <a href={APPLE_MUSIC_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <FaApple className="w-4 h-4" />
                    Apple Music
                  </Button>
                </a>
                <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <FaYoutube className="w-4 h-4" />
                    Watch on YouTube
                  </Button>
                </a>
              </div>

              {/* Secondary nav links */}
              <div className="flex flex-wrap gap-3">
                <a href="/music">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
                    <Music className="w-3.5 h-3.5" />
                    All Releases
                  </Button>
                </a>
                <a href="/videos">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
                    <VideoIcon className="w-3.5 h-3.5" />
                    More Videos
                  </Button>
                </a>
                <a href="/epk">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
                    Full Bio & EPK
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Official visualizer */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-4 text-center">
              Official Visualizer
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Sean Austin - One More Chance (Official Visualizer)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
