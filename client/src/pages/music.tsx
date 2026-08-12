import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const ARTIST_PHOTO = "/attached_assets/Sean-Austin-reggae-artist-Houston-11.jpeg";
const SPOTIFY_ARTIST_URL = "https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT";
// Real genres from the site's own structured data — no invented tags.
const GENRES = ["Reggae", "Dancehall"];

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

type Release = (typeof releases)[number];

function ShelfCard({ release }: { release: Release }) {
  return (
    <a
      href={release.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-36 sm:w-44"
      data-testid={`card-release-${release.id}`}
    >
      <div className="relative aspect-square rounded-md overflow-hidden bg-white/5 shadow-lg">
        <img
          src={release.cover}
          alt={`${release.title} cover art`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200" />
        <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
          <div className="w-10 h-10 rounded-full bg-[#1db954] flex items-center justify-center shadow-xl">
            <Play className="w-4 h-4 text-black ml-0.5" fill="black" />
          </div>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-semibold text-white line-clamp-1">{release.title}</h3>
      <p className="text-xs text-white/50 mt-0.5">
        {release.year} · {release.type}
      </p>
    </a>
  );
}

function Shelf({ title, items }: { title: string; items: Release[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {items.map((r) => (
          <ShelfCard key={r.id} release={r} />
        ))}
      </div>
    </section>
  );
}

export default function MusicPage() {
  const { data: syncedData } = useQuery<{ releases: Release[] | null }>({
    queryKey: ["/api/content/releases"],
    staleTime: 60 * 60 * 1000,
  });

  const activeReleases = syncedData?.releases ?? releases;
  // "Popular" mirrors a Spotify artist page's top-tracks list — the site's
  // most prominent releases, in catalog order. No play-count data exists to
  // rank these, so no fabricated numbers are shown alongside them.
  const popular = activeReleases.slice(0, 5);
  const singles = activeReleases.filter((r) => r.type === "Single");
  const albums = activeReleases.filter((r) => r.type === "Album");

  return (
    <>
      <SEO
        title="Sean Austin Music | Houston Reggae Songs and Performances"
        description="Listen to Sean Austin's music catalog. Houston reggae songs, albums, singles, and live performances on all platforms."
        noSuffix
      />

      <div className="min-h-screen bg-black">
        {/* Artist header — Spotify artist-page style: full-bleed photo,
            bottom gradient fade to black, name, genres, Play + Follow.
            A fixed aspect-ratio (rather than a vh-based height) keeps the
            portrait photo's object-cover crop window a constant percentage
            of its height at every viewport width — a vh-based height let
            wide viewports "zoom in" so far that the subject's head was cut
            off. No max-height here: it would fight the aspect ratio at wide
            widths the same way, so the width cap alone bounds the size. */}
        <div className="relative max-w-[1800px] mx-auto aspect-[2/1] min-h-[300px] overflow-hidden">
          <img
            src={ARTIST_PHOTO}
            alt="Sean Austin"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 pb-8 max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
              Artist
            </p>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none">
              Sean Austin
            </h1>
            <div className="flex items-center gap-2 mt-4">
              {GENRES.map((g) => (
                <span
                  key={g}
                  className="text-xs font-medium text-white/70 border border-white/20 rounded-full px-3 py-1"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-6 flex items-center gap-5">
          <a href={SPOTIFY_ARTIST_URL} target="_blank" rel="noopener noreferrer" aria-label="Play on Spotify">
            <div className="w-14 h-14 rounded-full bg-[#1db954] hover:bg-[#1ed760] hover:scale-105 transition-all flex items-center justify-center shadow-lg" data-testid="button-play">
              <Play className="w-6 h-6 text-black ml-0.5" fill="black" />
            </div>
          </a>
          <a href={SPOTIFY_ARTIST_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white px-6"
              data-testid="button-follow"
            >
              Follow
            </Button>
          </a>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-16">
          {/* Popular */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">Popular</h2>
            <div className="flex flex-col">
              {popular.map((release, i) => (
                <a
                  key={release.id}
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-2 py-2 rounded-md hover:bg-white/5 transition-colors"
                  data-testid={`row-popular-${release.id}`}
                >
                  <span className="w-5 text-sm text-white/50 text-right group-hover:hidden">
                    {i + 1}
                  </span>
                  <Play className="w-4 h-4 text-white hidden group-hover:block ml-0.5" fill="white" />
                  <img
                    src={release.cover}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-10 h-10 rounded object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-white truncate">{release.title}</p>
                    <p className="text-xs text-white/50 truncate">Sean Austin</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/0 group-hover:text-white/50 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </section>

          <Shelf title="Singles and EPs" items={singles} />
          <Shelf title="Albums" items={albums} />

          {/* About */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">About</h2>
            <div className="rounded-xl overflow-hidden bg-white/5 flex flex-col sm:flex-row">
              <img
                src={ARTIST_PHOTO}
                alt="Sean Austin"
                className="w-full sm:w-56 h-48 sm:h-auto object-cover"
                style={{ objectPosition: "center 20%" }}
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-white/80 leading-relaxed">
                  Sean Austin is an international reggae and dancehall artist bringing authentic
                  Caribbean vibes to the global stage — real music, real vibes, real life.
                </p>
                <a href="/social" className="inline-block mt-4">
                  <Button variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white" data-testid="link-full-story">
                    Full Story
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Live Spotify embed — real, up-to-date data straight from Spotify */}
          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
              Listen on Spotify
            </h2>
            <div className="max-w-md">
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
          </section>
        </div>
      </div>
    </>
  );
}
