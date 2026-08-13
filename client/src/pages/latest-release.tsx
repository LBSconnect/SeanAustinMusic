import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Music, Video as VideoIcon, ArrowRight } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa6";
import Container from "@/components/container";

const COVER_ART_URL = "/attached_assets/Sean-Austin-Fi-Yu-Forever.jpeg";

// YouTube video ID for the official "Fi Yu Forever" music video
const VIDEO_ID = "bXUj-hX-YWc";

// No dedicated Spotify/Apple Music single link is available yet — falls back to a
// search deep-link (same pattern used for other not-yet-linked tracks in music.tsx)
// and the artist page. Swap in the real links as soon as they're live.
const SPOTIFY_SEARCH_URL = "https://open.spotify.com/search/Sean%20Austin%20Fi%20Yu%20Forever";
const APPLE_MUSIC_ARTIST_URL = "https://music.apple.com/us/artist/sean-austin/1496526691";

export default function LatestReleasePage() {
  return (
    <>
      <SEO
        title="Fi Yu Forever — Latest Release"
        description={`Sean Austin's latest single "Fi Yu Forever," produced by Troyton Music — an infectious reggae groove and an enduring declaration of love.`}
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
              Fi Yu Forever
            </h1>
            <p className="mt-3 text-muted-foreground">
              2026 · Single · Produced by Troyton Music
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            {/* Cover art */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 aspect-square">
              <img
                src={COVER_ART_URL}
                alt="Sean Austin - Fi Yu Forever cover art"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Built around an infectious reggae groove and an enduring declaration of love,
                "Fi Yu Forever" showcases the melodic songwriting, distinctive vocal delivery, and
                emotional authenticity that have become central to Sean Austin's evolving sound. It
                marks an important new chapter in his career and sets the stage for his forthcoming
                12-track project, <em>The Essentials</em>.
              </p>

              {/* Streaming links */}
              <div className="flex flex-wrap gap-2 mb-6">
                <a href={SPOTIFY_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-[#1db954] hover:bg-[#1db954]/85 text-black">
                    <FaSpotify className="w-4 h-4" />
                    Stream on Spotify
                  </Button>
                </a>
                <a href={APPLE_MUSIC_ARTIST_URL} target="_blank" rel="noopener noreferrer">
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

          {/* Official video */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-4 text-center">
              Official Video
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Sean Austin - Fi Yu Forever (Official Video)"
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
