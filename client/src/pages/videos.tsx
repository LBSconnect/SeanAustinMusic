import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import videoBg from "@assets/Sean-Austin-reggae-artist-Houston-1.jpg";
import SEO from "@/components/seo";
import { Card } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

// YouTube Channel
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@SeanAustinReggae";

// Video categories
const categories = ["All", "Music Videos", "Live Performances", "Shorts", "Interviews"];

// Video data from Sean Austin's YouTube channel
const videos = [
  {
    id: "swz5sJINEn0",
    title: "Ready Mi Ready",
    subtitle: "feat. Troyton | Official Music Video",
    category: "Music Videos",
    date: "2026",
    featured: true,
  },
  {
    id: "Ds9vadF5EK4",
    title: "Same Street",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "UJjSybBxtZs",
    title: "Mamma You're My Sunshine",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "GvuL-CSqDkU",
    title: "The Same Girl",
    subtitle: "feat. Lion Heights | Official Music Video",
    category: "Music Videos",
    date: "2023",
    featured: false,
  },
  {
    id: "ViNfJ5HTJfM",
    title: "Confessions",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2023",
    featured: false,
  },
  {
    id: "fjte4utXa-w",
    title: "Smoke vs Fire",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "NG84wpFztB0",
    title: "Lemonade",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "rdHkejzglRs",
    title: "My Reality",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "o6sy7x1TZN0",
    title: "Cause & Effect",
    subtitle: "feat. Izaris Capetillo",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "UfZtWAvtLUE",
    title: "I'm Not Ready",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2023",
    featured: false,
  },
  {
    id: "ylpHrCKskgs",
    title: "Dream",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2023",
    featured: false,
  },
  {
    id: "gIzrA5xIr5s",
    title: "I Love You Mamma",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2023",
    featured: false,
  },
  {
    id: "g83vcZgiRQ8",
    title: "Don't Do Me Like 2020",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2020",
    featured: false,
  },
  {
    id: "IY9wgAdXaPw",
    title: "Bring It Back",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  {
    id: "_bHwEJ4S5-w",
    title: "Sunflower",
    subtitle: "Official Music Video",
    category: "Music Videos",
    date: "2024",
    featured: false,
  },
  // Shorts
  {
    id: "zYgUfRP7BSM",
    title: "AFRONOMIXX",
    subtitle: "New Album Preview",
    category: "Shorts",
    date: "2024",
    featured: false,
  },
  // Live Performances
  {
    id: "JK8lARL3SlU",
    title: "Live at Foundation Room",
    subtitle: "Houston Performance",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "R6_pYRCGcFo",
    title: "Opening for Kristine Alicia",
    subtitle: "Foundation Room, Houston",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "MWmk0Y0Aktc",
    title: "Live at Foundation Room",
    subtitle: "Houston Show",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "o8s6k_B6m8g",
    title: "House of Blues Houston",
    subtitle: "Live Performance",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "SElBvgtBc2U",
    title: "With Reggie Singer",
    subtitle: "House of Blues Houston",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "senrUVjHBb8",
    title: "House of Blues",
    subtitle: "Houston Live",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "RlYCrwYhGME",
    title: "House of Blues Set",
    subtitle: "Live Performance",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
  {
    id: "ZInUFvk4GuE",
    title: "House of Blues Houston",
    subtitle: "Live Performance",
    category: "Live Performances",
    date: "2024",
    featured: false,
  },
];

function VideoCard({ video, onClick }: { video: typeof videos[0]; onClick: () => void }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <Card
      className="group cursor-pointer bg-card/30 border-border/30 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play className="w-7 h-7 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Featured badge */}
        {video.featured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
            FEATURED
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded">
          {video.category}
        </div>

        {/* Video info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-bold text-white mb-1 line-clamp-1">
            {video.title}
          </h3>
          <p className="text-white/70 text-sm line-clamp-1">{video.subtitle}</p>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-3 flex items-center justify-between border-t border-border/20">
        <span className="text-xs text-muted-foreground">{video.date}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
          Watch Now <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </Card>
  );
}

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);

  const { data: syncedData } = useQuery<{ videos: typeof videos | null }>({
    queryKey: ["/api/content/videos"],
    staleTime: 60 * 60 * 1000,
  });

  const activeVideos = syncedData?.videos ?? videos;

  const filteredVideos = activeCategory === "All"
    ? activeVideos
    : activeVideos.filter(v => v.category === activeCategory);

  const featuredVideo = activeVideos.find(v => v.featured);

  return (
    <>
      <SEO
        title="Videos - Sean Austin"
        description="Watch Sean Austin's music videos, live performances, and exclusive interviews. Experience authentic reggae vibes."
      />

      <div className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Background with gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${videoBg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

          {/* Hero content */}
          <div className="relative z-10 text-center px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/30 mb-6">
              <FaYoutube className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-red-400">SEAN AUSTIN MEDIA</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Videos
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Music videos, live performances, and behind-the-scenes content
            </p>

            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
              Subscribe on YouTube
            </a>
          </div>
        </div>

        {/* Featured Video Section */}
        {featuredVideo && (
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded uppercase tracking-wider">
                New Release
              </span>
              <h2 className="font-display text-2xl font-bold text-white">{featuredVideo.title}</h2>
              <span className="text-muted-foreground text-sm">{featuredVideo.subtitle}</span>
            </div>
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 cursor-pointer border border-primary/30 group"
              onClick={() => setSelectedVideo(featuredVideo)}
            >
              <img
                src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                alt={featuredVideo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-9 h-9 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <VideoCard
                key={`${video.id}-${index}`}
                video={video}
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No videos in this category yet.</p>
            </div>
          )}

          {/* YouTube CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/30">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              Close <span className="text-xs bg-white/20 px-2 py-1 rounded">ESC</span>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
