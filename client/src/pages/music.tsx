import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ExternalLink } from "lucide-react";

// Album releases with artwork (using Spotify cover art URLs)
const releases = [
  {
    id: "fi-yu-forever",
    title: "Fi Yu Forever",
    // No dedicated Spotify link is live yet — falls back to a search deep-link,
    // same pattern used below for "How Deep Is Your Love". Swap in the real
    // link once it's available.
    url: "https://open.spotify.com/search/Sean%20Austin%20Fi%20Yu%20Forever",
    cover: "/attached_assets/Sean-Austin-Fi-Yu-Forever.jpeg",
    year: "2026",
    type: "Single",
  },
  {
    id: "the-essentials",
    title: "The Essentials",
    url: "https://open.spotify.com/album/0ZkV4SpzAppY7ZbMDp2tl0",
    cover: "https://i.scdn.co/image/ab67616d0000b2736b4836f0b595e0b13f2318f3",
    year: "2026",
    type: "Album",
  },
  {
    id: "island-breeze",
    title: "Island Breeze (feat. Dameon Gayle)",
    url: "https://open.spotify.com/album/4YPqkhdYa0H94H9msaB9xx",
    cover: "https://cdn-images.dzcdn.net/images/cover/6281c828592241ac7ff25cbf3b3654e6/500x500-000000-80-0-0.jpg",
    year: "2026",
    type: "Single",
  },
  {
    id: "ready-mi-ready",
    title: "Ready Mi Ready (feat. Troyton)",
    url: "https://open.spotify.com/album/5BEF6vPHCnjdvDNWw0PspF",
    cover: "https://i.scdn.co/image/ab67616d0000b273057cb603c53ad9f6b8db58e0",
    year: "2026",
    type: "Single",
  },
  {
    id: "birthday-shellings",
    title: "Birthday Shellings",
    url: "https://open.spotify.com/album/1W25sy1K1yiUp6lVPjzJJK",
    cover: "https://i.scdn.co/image/ab67616d0000b273a3c67222bcac92b31d6bbc69",
    year: "2026",
    type: "Single",
  },
  {
    id: "daddy-you-a-leader",
    title: "Daddy You A Leader",
    url: "https://open.spotify.com/album/7HaBbBg2YpdZtJkvkLuTnb",
    cover: "https://i.scdn.co/image/ab67616d0000b273acc2d91b1f9f6ca7154d3e57",
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
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d19147a0c63ad3b641e14902",
    year: "2026",
    type: "Single",
  },
  {
    id: "afronomixx",
    title: "AFRONOMIXX",
    url: "https://open.spotify.com/album/7jvc3J4O8FBlokmrWXGwdg",
    cover: "https://i.scdn.co/image/ab67616d0000b273676f9071e296fc06e4430328",
    year: "2023",
    type: "Album",
  },
  {
    id: "nice-thing",
    title: "Nice Thing (feat. Dela Dee)",
    url: "https://open.spotify.com/album/3d274ImVTM6voehn2N5akE",
    cover: "https://i.scdn.co/image/ab67616d0000b27337fe80de3a5f9aece1b1247e",
    year: "2023",
    type: "Single",
  },
  {
    id: "how-deep-is-your-love",
    title: "How Deep Is Your Love",
    url: "https://open.spotify.com/search/Sean%20Austin%20How%20Deep%20Is%20Your%20Love",
    cover: "https://i.scdn.co/image/ab67616d0000b2732924938dd6190736743dfe7d",
    year: "2023",
    type: "Single",
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
    id: "purple-hearts",
    title: "Purple Hearts",
    url: "https://open.spotify.com/album/1Z67dCz0fc2VZlOqnGQqJD",
    cover: "https://i.scdn.co/image/ab67616d0000b273afa69c6a7435138b3ad328f0",
    year: "2021",
    type: "Album",
  },
  {
    id: "confessions",
    title: "Confessions",
    url: "https://www.youtube.com/watch?v=IlzEXnEYWYU",
    cover: "https://i.scdn.co/image/ab67616d0000b2736cb7bb182efd62cf4581d18c",
    year: "2021",
    type: "Single",
  },
  {
    id: "2020-pt-2-reloaded",
    title: "2020, Pt. 2: Reloaded",
    url: "https://open.spotify.com/album/3yPtBeXuOxbzC6uCVnmnLp",
    cover: "https://i.scdn.co/image/ab67616d0000b273bb43407853b3f3ebc3857b0d",
    year: "2020",
    type: "Album",
  },
  {
    id: "2020-pt-1",
    title: "2020, Pt. 1",
    url: "https://open.spotify.com/album/6LmilslOHuK3Vq4h2quiJv",
    cover: "https://i.scdn.co/image/ab67616d0000b2734b511a1471b3866dc0d98b61",
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
      <div className="min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Music
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Stream Sean Austin's latest releases on your favorite platform.
            </p>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
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
