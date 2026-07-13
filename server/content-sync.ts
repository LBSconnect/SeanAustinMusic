export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  featured: boolean;
}

export interface ReleaseItem {
  id: string;
  title: string;
  url: string;
  cover: string;
  year: string;
  type: string;
}

interface ContentCache {
  videos: VideoItem[] | null;
  releases: ReleaseItem[] | null;
  lastSynced: Date | null;
}

const cache: ContentCache = {
  videos: null,
  releases: null,
  lastSynced: null,
};

const SPOTIFY_ARTIST_ID = "0ZTUFRHKN1R7Se9eq5QTAT";
const YOUTUBE_CHANNEL_HANDLE = "SeanAustinMusic";

async function getSpotifyToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { access_token: string };
    return data.access_token;
  } catch {
    return null;
  }
}

async function fetchSpotifyReleases(): Promise<ReleaseItem[] | null> {
  const token = await getSpotifyToken();
  if (!token) return null;

  try {
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${SPOTIFY_ARTIST_ID}/albums?include_groups=album,single&market=US&limit=50`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) return null;

    const data = (await res.json()) as { items: any[] };
    return data.items.map((item: any) => ({
      id: item.id,
      title: item.name,
      url: item.external_urls.spotify,
      cover: item.images[0]?.url || "",
      year: (item.release_date as string)?.slice(0, 4) || "",
      type:
        item.album_type === "album"
          ? "Album"
          : item.album_type === "single"
          ? "Single"
          : "EP",
    }));
  } catch {
    return null;
  }
}

async function getYouTubeChannelId(): Promise<string | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${YOUTUBE_CHANNEL_HANDLE}&key=${apiKey}`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { items?: { id: string }[] };
    return data.items?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

function classifyVideo(title: string): { category: string; subtitle: string } {
  const lower = title.toLowerCase();

  // Karaoke — check before Music Videos
  if (lower.includes("karaoke") || lower.includes("instrumental") || lower.includes("sing along")) {
    return { category: "Karaoke", subtitle: "Karaoke Version" };
  }

  // Shorts — check before Music Videos; YouTube marks these with #shorts or short duration
  if (
    lower.includes("#shorts") ||
    lower.includes("#short") ||
    lower.endsWith(" shorts") ||
    lower.includes("preview") ||
    lower.includes("snippet") ||
    lower.includes("clip")
  ) {
    return { category: "Shorts", subtitle: "Short" };
  }

  // Live Performances
  if (
    lower.includes("live at") ||
    lower.includes("live performance") ||
    lower.includes("house of blues") ||
    lower.includes("foundation room") ||
    lower.includes("opening for") ||
    lower.includes("concert")
  ) {
    return { category: "Live Performances", subtitle: "Live Performance" };
  }

  // Interviews
  if (lower.includes("interview") || lower.includes("chat with") || lower.includes("speaks on")) {
    return { category: "Interviews", subtitle: "Interview" };
  }

  return { category: "Music Videos", subtitle: "Official Music Video" };
}

async function fetchYouTubeVideos(): Promise<VideoItem[] | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  try {
    const channelId = await getYouTubeChannelId();
    if (!channelId) return null;

    // Resolve uploads playlist ID
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    if (!channelRes.ok) return null;
    const channelData = (await channelRes.json()) as {
      items?: { contentDetails: { relatedPlaylists: { uploads: string } } }[];
    };
    const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsId) return null;

    // Fetch up to 50 most recent uploads
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&key=${apiKey}`
    );
    if (!playlistRes.ok) return null;
    const playlistData = (await playlistRes.json()) as { items?: any[] };
    const items = playlistData.items ?? [];

    // Fetch video durations so we can classify Shorts (≤60s) accurately
    const videoIds = items.map((item: any) => item.snippet.resourceId.videoId as string).join(",");
    let durationMap: Record<string, number> = {};
    if (videoIds) {
      try {
        const detailRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`
        );
        if (detailRes.ok) {
          const detailData = (await detailRes.json()) as { items?: { id: string; contentDetails: { duration: string } }[] };
          for (const v of detailData.items ?? []) {
            // Parse ISO 8601 duration (e.g. PT1M30S) to seconds
            const m = v.contentDetails.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
            if (m) {
              durationMap[v.id] = (parseInt(m[1] || "0") * 3600) + (parseInt(m[2] || "0") * 60) + parseInt(m[3] || "0");
            }
          }
        }
      } catch {
        // Duration fetch failed; fall back to title-only classification
      }
    }

    let featuredSet = false;
    return items.map((item: any) => {
      const title = item.snippet.title as string;
      const year = (item.snippet.publishedAt as string)?.slice(0, 4) ?? "";
      const videoId = item.snippet.resourceId.videoId as string;
      let { category, subtitle } = classifyVideo(title);

      // Override to Shorts if duration ≤ 60 seconds
      const duration = durationMap[videoId];
      if (duration !== undefined && duration <= 60 && category !== "Karaoke") {
        category = "Shorts";
        subtitle = "Short";
      }

      // Only full Music Videos are featured
      const isFeatured = !featuredSet && category === "Music Videos";
      if (isFeatured) featuredSet = true;

      return {
        id: videoId,
        title,
        subtitle,
        category,
        date: year,
        featured: isFeatured,
      };
    });
  } catch {
    return null;
  }
}

export async function syncContent(): Promise<void> {
  console.log("[content-sync] Starting content sync…");

  const [videos, releases] = await Promise.all([
    fetchYouTubeVideos(),
    fetchSpotifyReleases(),
  ]);

  if (videos !== null) {
    cache.videos = videos;
    console.log(`[content-sync] Fetched ${videos.length} YouTube videos`);
  } else {
    console.log("[content-sync] YouTube sync skipped (no API key or fetch error)");
  }

  if (releases !== null) {
    cache.releases = releases;
    console.log(`[content-sync] Fetched ${releases.length} Spotify releases`);
  } else {
    console.log("[content-sync] Spotify sync skipped (no API key or fetch error)");
  }

  cache.lastSynced = new Date();
}

export function getContentCache(): ContentCache {
  return cache;
}

export function startContentScheduler(): void {
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

  // Initial sync on startup (non-blocking)
  syncContent().catch((err) => console.error("[content-sync] Startup sync error:", err));

  // Weekly repeat
  setInterval(() => {
    syncContent().catch((err) => console.error("[content-sync] Scheduled sync error:", err));
  }, SEVEN_DAYS_MS);

  console.log("[content-sync] Weekly scheduler started (next run in 7 days)");
}
