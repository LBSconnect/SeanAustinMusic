import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Music, Video as VideoIcon, ArrowRight } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa6";
import Container from "@/components/container";

const COVER_ART_URL = "/attached_assets/Sean-Austin-One-More-Chance.jpg";

// Official music video, per Sean. Update the ID and title together when
// replacing the featured video.
const FEATURED_VIDEO_ID = "DwrDlEikKsM";
const FEATURED_VIDEO_TITLE = "Gimmie One More Chance";

const SPOTIFY_TRACK_URL = "https://open.spotify.com/track/0xwkQyxF4OdCzMV4iStPWo";
const APPLE_MUSIC_URL = "https://music.apple.com/us/album/one-more-chance/6807165166?i=6807165168";

const RIDDIMS_WORLD_URL = "https://riddimsworld.com/singles/sean-austin-one-more-chance/";

export default function LatestReleasePage() {
  return (
    <>
      <SEO
        title="Gimmie One More Chance — Official Video & Listening Notes"
        description="Watch Sean Austin’s Gimmie One More Chance from The Essentials, produced by The XO. Then hear Fi Yu Forever, produced by Troyton Music, as a first-dance dedication."
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
              {FEATURED_VIDEO_TITLE}
            </h1>
            <p className="mt-3 text-muted-foreground">
              From <em>The Essentials</em> · Produced by The XO
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
                There are two people in a request for a second chance. One has had time to rehearse the apology; the other is hearing it for the first time. Listen to Sean Austin’s Jamaican reggae song from each side. The words can be sincere and the answer can still be no.
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
                <Button asChild className="gap-2">
                  <a href={`https://youtu.be/${FEATURED_VIDEO_ID}`}>
                    <FaYoutube aria-hidden="true" /> Watch the official video
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href={SPOTIFY_TRACK_URL}><FaSpotify aria-hidden="true" /> Spotify</a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href={APPLE_MUSIC_URL}><FaApple aria-hidden="true" /> Apple Music</a>
                </Button>
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

          {/* Featured official video; separate from the latest-release details above. */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-4 text-center">
              Featured Video: {FEATURED_VIDEO_TITLE}
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                title={`Sean Austin - ${FEATURED_VIDEO_TITLE} (Official Video)`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>
          <section aria-labelledby="second-listen" className="max-w-2xl mx-auto mt-12 space-y-5">
            <h2 id="second-listen" className="font-display text-3xl font-bold text-white">The apology &amp; the promise</h2>
            <p className="text-muted-foreground leading-relaxed">
              What happens the morning after someone says they’re sorry? A call comes when it was promised. A hard question gets a straight answer. Or the day goes exactly as it always did. Try <em>Gimmie One More Chance</em> again with that morning in mind. What would make the request sound different to the person hearing it?
            </p>
            <h3 className="font-display text-xl font-bold text-white">A first dance with Fi Yu Forever</h3>
            <p className="text-muted-foreground leading-relaxed">
              For a different kind of love song, put on <em>Fi Yu Forever</em>, produced by Troyton Music. Picture the floor after the first dance, once the guests have gone home and the good shoes are off. Which small promise would the two of you still want to keep? That’s something to listen for together before you choose a wedding song.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <a href="https://youtu.be/bXUj-hX-YWc"><FaYoutube aria-hidden="true" /> Watch Fi Yu Forever</a>
            </Button>
            <details lang="es" className="border-y border-white/10 py-4 text-muted-foreground">
              <summary className="cursor-pointer font-semibold text-white">En español: dos canciones para escuchar en pareja</summary>
              <p className="mt-3 leading-relaxed">
                En <em>Gimmie One More Chance</em>, escucha primero a quien pide otra oportunidad. Al volver a oírla, ponte del lado de quien tiene que decidir: ¿qué tendría que cambiar para volver a confiar? <em>Fi Yu Forever</em> plantea otra pregunta. Si la eligieran para su primer baile, ¿qué promesa querrían seguir cumpliendo cuando termine la fiesta?
              </p>
            </details>
            <a className="inline-block text-primary underline" href="https://www.youtube.com/@SeanAustinReggae">Hear more from Sean Austin on YouTube</a>
          </section>
        </Container>
      </div>
    </>
  );
}
