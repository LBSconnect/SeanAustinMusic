import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Music, Video, Quote, Mail, ExternalLink } from "lucide-react";
import type { PressQuote } from "@shared/schema";

// Press photo for download
const PRESS_PHOTO_URL = "/attached_assets/Sean-Austin-reggae-artist-Houston-16.jpeg";

// YouTube video ID for "Daddy You A Leader" music video
const FEATURED_VIDEO_ID = "ffzcrhIHzLE";

export default function EPKPage() {
  const { data: pressQuotes } = useQuery<PressQuote[]>({
    queryKey: ["/api/press-quotes"],
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PRESS_PHOTO_URL;
    link.download = "Sean_Austin_Press_Photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Electronic Press Kit - Sean Austin"
        description="Sean Austin's Electronic Press Kit. Bio, press photos, music, videos, and booking information."
      />
      <div className="min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Electronic Press Kit
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need for press coverage and booking inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bio Section */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle>Artist Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-primary">Sean Austin</strong> is a Jamaican-born international reggae recording artist,
                    singer, and songwriter whose soulful voice and dynamic performances have captivated audiences worldwide.
                    With a distinctive blend of reggae, dancehall, and contemporary pop influences, Sean brings a fresh yet
                    authentic sound that resonates across generations.
                  </p>
                  <p>
                    His breakout hit <em>"Confessions"</em>, produced by Grammy-nominated producer Troyton Hinds,
                    showcased his smooth vocal delivery and ability to seamlessly fuse reggae with catchy melodies, earning
                    him recognition throughout the Caribbean and North America. Fans praise his music as "long overdue and
                    needed in dancehall."
                  </p>
                  <p>
                    From intimate venues to international festival stages, Sean Austin delivers electrifying live performances
                    that leave lasting impressions. His catalog includes acclaimed releases such as "Same Girl" and the album
                    "Purple Hearts," cementing his status as a rising force in the global reggae movement.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Press Coverage</p>
                  <ul className="space-y-2">
                    {[
                      {
                        title: "Sean Austin is ready to scale new heights",
                        source: "Jamaica Star",
                        date: "April 2026",
                        url: "https://jamaica-star.com/article/entertainment/20260420/sean-austin-ready-scale-new-heights",
                      },
                      {
                        title: "Sean Austin eyes charts with 'Confession'",
                        source: "Jamaica Star",
                        date: "May 2021",
                        url: "https://jamaica-star.com/article/entertainment/20210511/sean-austin-eyes-charts-%E2%80%98confession%E2%80%99",
                      },
                      {
                        title: "Sean Austin promises purposeful music",
                        source: "Jamaica Star",
                        date: "April 2021",
                        url: "https://jamaica-star.com/article/entertainment/20210419/sean-austin-promises-purposeful-music",
                      },
                    ].map((article) => (
                      <li key={article.url}>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                          <span>
                            <span className="font-medium text-foreground group-hover:text-primary">{article.title}</span>
                            <span className="text-muted-foreground/70"> — {article.source}, {article.date}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Press Photos */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle>Press Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    src={PRESS_PHOTO_URL}
                    alt="Sean Austin Press Photo"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                  {/* Blend edges into page background */}
                  <div className="absolute inset-0 rounded-lg"
                    style={{
                      background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)"
                    }}
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  High-resolution press photos available for download.
                </p>
                <Button variant="outline" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Press Photo
                </Button>
              </CardContent>
            </Card>

            {/* Music */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  Featured Music
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/artist/0ZTUFRHKN1R7Se9eq5QTAT?utm_source=generator&theme=0"
                  width="100%"
                  height="200"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                />
              </CardContent>
            </Card>

            {/* Videos */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Featured Video - "Daddy You A Leader"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                    title="Sean Austin - Daddy You A Leader (Official Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Press Quotes */}
            {pressQuotes && pressQuotes.length > 0 && (
              <Card className="bg-card/50 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Press Quotes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pressQuotes.map((quote) => (
                      <blockquote key={quote.id} className="border-l-2 border-primary pl-4">
                        <p className="text-muted-foreground italic">"{quote.quote}"</p>
                        <cite className="block mt-2 text-sm text-primary not-italic">
                          — {quote.source}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Booking Contact */}
            <Card className="bg-card/50 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Booking & Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For booking inquiries and press requests, please contact:
                </p>
                <a href="/contact">
                  <Button>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
