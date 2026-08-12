import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import videoBg from "@assets/Sean-Austin-reggae-artist-Houston-1.jpg";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, ArrowLeft } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

// YouTube Channel
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@SeanAustinReggae";
const CHANNEL_AVATAR = "/favicon.png";

// Video categories
const categories = ["Music Videos", "Live Performances", "Shorts", "Karaoke", "Interviews"];

// Video data from Sean Austin's YouTube channel — all IDs verified via oEmbed
const videos = [
  // Music Videos
  {
    id: "bXUj-hX-YWc",
    title: "Fi Yu Forever",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2026",
    featured: true,
  },
  {
    id: "ffzcrhIHzLE",
    title: "Daddy You A Leader",
    subtitle: "Official Father's Day Anthem",
    category: "Music Videos",
    date: "2026",
    featured: false,
  },
  {
    id: "GvuL-CSqDkU",
    title: "The Same Girl",
    subtitle: "feat. Lion Heights | Official Music Video",
    category: "Music Videos",
    date: "2021",
    featured: false,
  },
  {
    id: "IlzEXnEYWYU",
    title: "Confessions",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2021",
    featured: false,
  },
  // Live Performances
  {
    id: "9xMB1LQJ1YY",
    title: "Live at Foundation Room",
    subtitle: "Houston, Texas",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  // Shorts
  {
    id: "JEdH1VKpDnA",
    title: "Ready Mi Ready",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "Ln8C1mW5znY",
    title: "Birthday Shellings",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "1YyW8xjrAhQ",
    title: "Same Street",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "rAgk6n34-w4",
    title: "Sunflower",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2024",
    featured: false,
  },
  {
    id: "Y1PINvYXffw",
    title: "New Drop for Mothers Everywhere",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "S3E6T9QcL0Y",
    title: "Ready Mi Ready: Behind the Scenes",
    subtitle: "BTS Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "VUVFVw7KjCY",
    title: "Ready Mi Ready: BTS",
    subtitle: "Behind the Scenes",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "iz3AC-4YhHA",
    title: "Ready Mi Ready: Behind the Scenes",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "nRBMsTgIqZw",
    title: "New Music for 2026",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "qEdwtVO0dk8",
    title: "Ready We Ready",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  {
    id: "NOd200imxuA",
    title: "Sean Austin LIVE on Germany Radio",
    subtitle: "Reggae International | @nightnurse_berlin",
    category: "Shorts",
    date: "2024",
    featured: false,
  },
  {
    id: "ltOk3SNxllI",
    title: "Fi Yu Forever",
    subtitle: "Official Short",
    category: "Shorts",
    date: "2026",
    featured: false,
  },
  // Karaoke
  {
    id: "mExYukRHtZ0",
    title: "Karaoke Session",
    subtitle: "Sean Austin Karaoke",
    category: "Karaoke",
    date: "2024",
    featured: false,
  },
  {
    id: "BDMY3QBUIuI",
    title: "Karaoke Session",
    subtitle: "Sean Austin Karaoke",
    category: "Karaoke",
    date: "2024",
    featured: false,
  },
  {
    id: "2ZJYMl44GtI",
    title: "Karaoke Session",
    subtitle: "Sean Austin Karaoke",
    category: "Karaoke",
    date: "2024",
    featured: false,
  },
  // Interviews
  {
    id: "MZkS176ok_I",
    title: "Sean Austin Interview",
    subtitle: "Press Interview",
    category: "Interviews",
    date: "2024",
    featured: false,
  },
  {
    id: "zGawXcpCS0c",
    title: "Sean Austin Interview",
    subtitle: "Press Interview",
    category: "Interviews",
    date: "2024",
    featured: false,
  },
];

type Video = (typeof videos)[number];

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <button className="group text-left" onClick={onClick} data-testid={`card-video-${video.id}`}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-card/50">
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          </div>
        </div>
        {video.featured && (
          <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide rounded">
            New Upload
          </span>
        )}
      </div>
      <div className="flex gap-2.5 mt-3">
        <img
          src={CHANNEL_AVATAR}
          alt=""
          aria-hidden="true"
          className="w-9 h-9 rounded-full flex-shrink-0 object-cover mt-0.5"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">Sean Austin</p>
          <p className="text-xs text-muted-foreground">
            {video.date} · {video.category}
          </p>
        </div>
      </div>
    </button>
  );
}

function ShortCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <button
      className="group text-left flex-shrink-0 w-36 sm:w-40"
      onClick={onClick}
      data-testid={`card-short-${video.id}`}
    >
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-card/50">
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          </div>
        </div>
        <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white line-clamp-2 leading-snug">
          {video.title}
        </p>
      </div>
    </button>
  );
}

function UpNextRow({ video, onClick }: { video: Video; onClick: () => void }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <button
      className="group flex gap-2.5 text-left w-full"
      onClick={onClick}
      data-testid={`row-upnext-${video.id}`}
    >
      <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-card/50">
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 py-0.5">
        <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">Sean Austin</p>
        <p className="text-xs text-muted-foreground">
          {video.date} · {video.category}
        </p>
      </div>
    </button>
  );
}

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("Music Videos");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const { data: syncedData } = useQuery<{ videos: Video[] | null }>({
    queryKey: ["/api/content/videos"],
    staleTime: 60 * 60 * 1000,
  });

  // Hardcoded entries are the source of truth for category (manually verified).
  // API data may add new videos not yet in the hardcoded list, but never overrides
  // the category of a known video — preventing Shorts from leaking into Music Videos
  // when the YouTube duration API call fails.
  const knownIds = new Set(videos.map((v) => v.id));
  const apiOnlyVideos = (syncedData?.videos ?? []).filter(
    (v) => !knownIds.has(v.id)
  );
  const activeVideos = [...videos, ...apiOnlyVideos];

  const filteredVideos = activeVideos.filter((v) => v.category === activeCategory);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // "Up next": rest of the current category first, then everything else
  const upNext = selectedVideo
    ? [
        ...activeVideos.filter((v) => v.id !== selectedVideo.id && v.category === selectedVideo.category),
        ...activeVideos.filter((v) => v.id !== selectedVideo.id && v.category !== selectedVideo.category),
      ]
    : [];

  return (
    <>
      <SEO
        title="Videos"
        description="Watch Sean Austin's music videos, live performances, and exclusive interviews. Experience authentic reggae vibes."
      />

      <div className="min-h-screen">
        {selectedVideo ? (
          /* ── Watch page ─────────────────────────────────────────── */
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 pt-24 pb-6">
            <button
              onClick={() => setSelectedVideo(null)}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              data-testid="button-back-to-videos"
            >
              <ArrowLeft className="w-4 h-4" />
              All Videos
            </button>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Player + info */}
              <div className="lg:flex-1 lg:max-w-[65%] min-w-0">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/40 bg-card">
                  <iframe
                    key={selectedVideo.id}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <h1 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-4">
                  {selectedVideo.title}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedVideo.date} · {selectedVideo.category}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-3 mt-4 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <img
                      src={CHANNEL_AVATAR}
                      alt="Sean Austin"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground leading-tight">Sean Austin</p>
                      <p className="text-xs text-muted-foreground">@SeanAustinReggae</p>
                    </div>
                  </div>
                  <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white" data-testid="button-subscribe">
                      <FaYoutube className="w-4 h-4" />
                      Subscribe
                    </Button>
                  </a>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-card/50 text-sm text-muted-foreground">
                  {selectedVideo.subtitle}
                </div>
              </div>

              {/* Up next */}
              <div className="lg:w-[35%] min-w-0">
                <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Up Next
                </h2>
                <div className="flex flex-col gap-3">
                  {upNext.map((v, i) => (
                    <UpNextRow key={`${v.id}-${i}`} video={v} onClick={() => openVideo(v)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── Channel / browse page ──────────────────────────────── */
          <div className="max-w-[1800px] mx-auto">
            {/* Banner */}
            <div className="relative h-32 sm:h-44 md:h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${videoBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-black/20" />
            </div>

            {/* Channel info row — only the avatar overlaps the banner, not the text */}
            <div className="px-4 sm:px-6 pt-0">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <img
                  src={CHANNEL_AVATAR}
                  alt="Sean Austin"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-background shadow-xl -mt-10 sm:-mt-14 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-1 pt-2 sm:pt-0">
                  <div>
                    <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                      Sean Austin
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                      @SeanAustinReggae · {activeVideos.length} videos
                    </p>
                    <p className="text-sm text-muted-foreground max-w-xl mt-1">
                      Music videos, live performances, and behind-the-scenes content
                    </p>
                  </div>
                  <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white" data-testid="button-subscribe-header">
                      <FaYoutube className="w-4 h-4" />
                      Subscribe
                    </Button>
                  </a>
                </div>
              </div>

              {/* Category filter chips */}
              <div className="flex items-center gap-2 overflow-x-auto mt-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category
                        ? "bg-foreground text-background"
                        : "bg-card text-foreground hover:bg-card/70"
                    }`}
                    data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-6">
              {activeCategory === "Shorts" ? (
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-background ml-0.5" fill="currentColor" />
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground">Shorts</h2>
                </div>
              ) : null}

              {activeCategory === "Shorts" ? (
                <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {filteredVideos.map((video, index) => (
                    <ShortCard
                      key={`${video.id}-${index}`}
                      video={video}
                      onClick={() => openVideo(video)}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                  {filteredVideos.map((video, index) => (
                    <VideoCard
                      key={`${video.id}-${index}`}
                      video={video}
                      onClick={() => openVideo(video)}
                    />
                  ))}
                </div>
              )}

              {filteredVideos.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No videos in this category yet.</p>
                </div>
              )}

              {/* YouTube CTA */}
              <div className="mt-12 text-center">
                <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/30">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-3">
                    <FaYoutube className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    Want more content?
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Subscribe to stay updated with new releases, exclusive behind-the-scenes, and live performances.
                  </p>
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
                  >
                    Visit YouTube Channel <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
