import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ExternalLink } from "lucide-react";

// Releases sourced from Spotify and Apple Music only
const releases = [
  {
    id: "birthday-shellings",
    title: "Birthday Shellings",
    url: "https://open.spotify.com/album/1W25sy1K1yiUp6lVPjzJJK",
    cover: "https://cdn-images.dzcdn.net/images/cover/0c6316daeee1ee7332417840d555b598/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "island-breeze",
    title: "Island Breeze (feat. Dameon Gayle)",
    url: "https://music.apple.com/us/album/island-breeze-single/1891567464",
    cover: "https://cdn-images.dzcdn.net/images/cover/6281c828592241ac7ff25cbf3b3654e6/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "ready-mi-ready",
    title: "Ready Mi Ready (feat. Troyton)",
    url: "https://open.spotify.com/album/5BEF6vPHCnjdvDNWw0PspF",
    cover: "https://cdn-images.dzcdn.net/images/cover/395769ecc8973b2f237795c4bbcf7e2d/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "same-street",
    title: "Same Street",
    url: "https://open.spotify.com/album/45Zj6j4EsWRnNuPXCBjzo3",
    cover: "https://cdn-images.dzcdn.net/images/cover/9faa0906d476cf5c2ebdc6f670e5c23a/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "mamma-youre-my-sunshine",
    title: "Mamma You're My Sunshine",
    url: "https://open.spotify.com/album/3PHU0VjHSkatJDcipQpJOi",
    cover: "https://cdn-images.dzcdn.net/images/cover/b7c58ef3dc330ebd98ea59a8e8f00b2b/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "afronomixx",
    title: "AFRONOMIXX",
    url: "https://open.spotify.com/album/7jvc3J4O8FBlokmrWXGwdg",
    cover: "https://cdn-images.dzcdn.net/images/cover/99e8b78043b6986836dd420763dc925d/500x500-000000-80-0-0.jpg",
    year: "2023",
    type: "Album",
  },
  {
    id: "nice-thing",
    title: "Nice Thing (feat. Dela Dee)",
    url: "https://open.spotify.com/album/3d274ImVTM6voehn2N5akE",
    cover: "https://cdn-images.dzcdn.net/images/cover/8067862a1a6bd5d99ec218f4b69b7820/500x500-000000-80-0-0.jpg",
    year: "2023",
    type: "Single",
  },
  {
    id: "purple-hearts",
    title: "Purple Hearts",
    url: "https://open.spotify.com/album/1Z67dCz0fc2VZlOqnGQqJD",
    cover: "https://cdn-images.dzcdn.net/images/cover/981233c3b723cd49f3a3d7a7663747df/500x500-000000-80-0-0.jpg",
    year: "2021",
    type: "Album",
  },
  {
    id: "lemonade",
    title: "Lemonade",
    url: "https://open.spotify.com/album/3TTf1IgFAFNkYCxTH0u8WX",
    cover: "https://i.scdn.co/image/ab67616d0000b2739cab6b387fc15cff42a8b5fd",
    year: "2021",
    type: "Single",
  },
  {
    id: "smoke-vs-fire",
    title: "Smoke vs Fire",
    url: "https://open.spotify.com/album/57arD0PlmzuEGThKqA4GqF",
    cover: "https://i.scdn.co/image/ab67616d0000b273f930235fe525c01eda8fec2a",
    year: "2021",
    type: "EP",
  },
  {
    id: "2020-pt-2-reloaded",
    title: "2020, Pt. 2: Reloaded",
    url: "https://open.spotify.com/album/3yPtBeXuOxbzC6uCVnmnLp",
    cover: "https://cdn-images.dzcdn.net/images/cover/5deadff32d059d5d74a5ce20ef4628ea/500x500-000000-80-0-0.jpg",
    year: "2020",
    type: "Album",
  },
  {
    id: "2020-pt-1",
    title: "2020, Pt. 1",
    url: "https://open.spotify.com/album/6LmilslOHuK3Vq4h2quiJv",
    cover: "https://cdn-images.dzcdn.net/images/cover/878dff154da09ed174fe9c0a5b151d22/500x500-000000-80-0-0.jpg",
    year: "2020",
    type: "Album",
  },
];

export default function MusicPage() {
  const { data: syncedData } = useQuery<{ releases: typeof releases | null }>({
    queryKey: ["/api/content/releases"],
    staleTime: 60 * 60 * 1000,
  });

  const activeReleases = syncedData?.releases ?? releases;

  return (
    <>
      <SEO
        title="Sean Austin Music | Houston Reggae Songs and Performances"
        description="Listen to Sean Austin's music catalog. Houston reggae songs, albums, singles, and live performances on all platforms."
        noSuffix
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Music
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Stream my latest releases on your favorite platform.
            </p>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {activeReleases.map((release) => (
              <a
                key={release.id}
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-card/50 hover:bg-card/70 transition-all hover:scale-105 h-full overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={release.cover}
                      alt={`${release.title} album cover`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-display text-sm font-semibold text-primary">
                      {release.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {release.year} • {release.type}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Stream Now
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Spotify Artist Embed */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">
              Full Discography on Spotify
            </h2>
            <div className="max-w-md mx-auto">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/0ZTUFRHKN1R7Se9eq5QTAT?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Artist Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
