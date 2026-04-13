import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Send, Calendar, MapPin, Users, Music, ChevronDown } from "lucide-react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "@id": "https://www.seanaustinmusic.com/reggae-artist-houston-texas#business",
  "name": "Sean Austin — Reggae Artist Houston Texas",
  "description": "Sean Austin is a Reggae Artist based in Houston Texas, performing authentic Caribbean roots reggae, dancehall, and live music for concerts, festivals, corporate events, weddings, and private parties in Houston TX and worldwide.",
  "url": "https://www.seanaustinmusic.com/reggae-artist-houston-texas",
  "email": "iamseanaustin@icloud.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604",
    "longitude": "-95.3698",
  },
  "areaServed": [
    { "@type": "City", "name": "Houston" },
    { "@type": "State", "name": "Texas" },
    { "@type": "Country", "name": "United States" },
    "Worldwide",
  ],
  "image": "https://www.seanaustinmusic.com/attached_assets/Sean-Austin-reggae-artist-Houston-9.jpeg",
  "priceRange": "$$",
  "hasMap": "https://www.google.com/maps/place/Houston,+TX",
  "sameAs": [
    "https://www.seanaustinmusic.com/",
    "https://instagram.com/iamseanaustin",
    "https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Sean Austin the reggae artist in Houston Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sean Austin is a Jamaican-born reggae artist based in Houston, Texas. He performs authentic roots reggae, dancehall, and Caribbean music at Houston venues, festivals, and private events. He is known for hits like 'Confessions' (produced by Grammy-nominated Troyton Hinds), 'Same Girl', 'Purple Hearts', and 'AFRONOMIXX'.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Sean Austin perform live reggae music in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sean Austin performs live reggae music in Houston, Texas at venues like the House of Blues Foundation Room. He is available for Houston concerts, festivals, club shows, corporate events, weddings, and private parties. Submit a booking request at seanaustinmusic.com/reggae-artist-houston-texas.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I book Sean Austin for a Houston event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To book Sean Austin for your Houston, Texas event, fill out the booking request form at seanaustinmusic.com/reggae-artist-houston-texas or email iamseanaustin@icloud.com directly. Sean Austin is available for Houston concerts, corporate events, festivals, weddings, and private parties. Expect a response within 48 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "What type of music does Sean Austin play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sean Austin performs reggae, roots reggae, dancehall, and Caribbean music. His sound blends authentic Jamaican reggae with modern production, creating music that appeals to fans of Bob Marley, Sean Paul, Shaggy, and Vybz Kartel. Based in Houston, Texas, he brings Caribbean island energy to every performance.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Sean Austin available for private events and weddings in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Sean Austin is available for private events in Houston Texas including weddings, birthday parties, corporate events, anniversaries, and other celebrations. He also performs at Houston-area festivals, clubs, and concert venues. Contact him at seanaustinmusic.com/reggae-artist-houston-texas to check availability and pricing.",
      },
    },
  ],
};

const photos = [
  "/attached_assets/Sean-Austin-reggae-artist-Houston-9.jpeg",
  "/attached_assets/Sean-Austin-reggae-artist-Houston-8.jpeg",
  "/attached_assets/Sean-Austin-reggae-artist-Houston-11.jpeg",
  "/attached_assets/Sean-Austin-reggae-artist-Houston-13.jpeg",
  "/attached_assets/Sean-Austin-reggae-artist-Houston-14.jpeg",
  "/attached_assets/Sean-Austin-reggae-artist-Houston-4.jpg",
];

export default function ReggaeArtistHoustonPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Booking Inquiry",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "Thanks for your booking inquiry. Our team will respond within 48 hours.",
      });
      setFormData({ name: "", email: "", subject: "Booking Inquiry", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <>
      <SEO
        title="Reggae Artist Houston Texas | Sean Austin | Caribbean Music & Live Performances"
        description="Sean Austin is a Reggae Artist based in Houston Texas. Book Sean Austin for live performances, concerts, festivals, and private events. Caribbean music and authentic reggae in Houston, TX."
        path="/reggae-artist-houston-texas"
        noSuffix
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary leading-tight">
              Reggae Artist in Houston, Texas
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sean Austin is a Reggae Artist based in Houston Texas bringing authentic Caribbean music,
              roots reggae, and electrifying live performances to the Houston music scene and beyond.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://open.spotify.com/artist/0ZTUFRHKN1R7Se9eq5QTAT" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <Music className="w-4 h-4 mr-2" />
                  Stream Music
                </Button>
              </a>
              <a href="#booking">
                <Button size="lg" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Sean Austin
                </Button>
              </a>
            </div>
          </div>

          {/* Artist Bio */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
              About Sean Austin
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                <p>
                  <strong className="text-foreground">Sean Austin</strong> is a Jamaican-born reggae recording artist,
                  singer, and songwriter now based in <strong className="text-foreground">Houston, Texas</strong>.
                  His soulful voice and dynamic stage presence have captivated audiences across Houston and internationally,
                  making him one of the city's premier reggae acts for live events, festivals, and private performances.
                </p>
                <p>
                  With a distinctive blend of roots reggae, dancehall, and contemporary Caribbean sounds, Sean brings
                  an authentic island energy that sets Houston dance floors and concert venues alive. His music resonates
                  across generations from longtime reggae fans to new listeners discovering the genre for the first time.
                </p>
                <p>
                  His breakout hit <em>"Confessions"</em>, produced by Grammy-nominated producer Troyton Hinds,
                  showcased his smooth vocal delivery and ability to fuse classic reggae with infectious melodies, earning
                  him recognition throughout the Caribbean and North America. Fans describe his music as
                  "long overdue and needed in dancehall."
                </p>
                <p>
                  From intimate Houston venues to international festival stages, Sean Austin delivers performances
                  that leave lasting impressions. His catalog includes acclaimed releases such as <em>"Same Girl"</em>,
                  the album <em>"Purple Hearts"</em>, <em>"AFRONOMIXX"</em>, and his latest single
                  <em>"Ready Mi Ready"</em> (feat. Troyton) cementing his status as a rising force in
                  the global reggae movement rooted right here in Houston, Texas.
                </p>
                <div className="pt-2 space-y-1 text-sm">
                  <p><span className="text-primary font-semibold">Genre:</span> Reggae, Roots Reggae, Dancehall, Caribbean Music</p>
                  <p><span className="text-primary font-semibold">Based in:</span> Houston, Texas</p>
                  <p><span className="text-primary font-semibold">Originally from:</span> Jamaica</p>
                  <p><span className="text-primary font-semibold">Available for:</span> Concerts, Festivals, Private Events, Corporate Shows, Weddings</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/attached_assets/Sean-Austin-reggae-artist-Houston-9.jpeg"
                  alt="Sean Austin — Reggae Artist based in Houston Texas"
                  className="w-full h-auto object-cover rounded-xl"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
              Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {photos.map((src, i) => (
                <div key={src} className="aspect-square overflow-hidden rounded-lg bg-card/30">
                  <img
                    src={src}
                    alt={`Sean Austin reggae artist Houston Texas photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-4 text-center">
              Book Sean Austin in Houston
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bring live reggae to your Houston event. Sean Austin is available for concerts,
              festivals, private events, corporate shows, and more locally in Houston and worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <Card className="bg-card/30 text-center">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary">Events & Concerts</h3>
                  <p className="text-sm text-muted-foreground mt-1">Festivals, Club Shows, Concerts</p>
                </CardContent>
              </Card>
              <Card className="bg-card/30 text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary">Private Events</h3>
                  <p className="text-sm text-muted-foreground mt-1">Corporate, Weddings, Private Parties</p>
                </CardContent>
              </Card>
              <Card className="bg-card/30 text-center">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary">Houston & Worldwide</h3>
                  <p className="text-sm text-muted-foreground mt-1">Local Houston bookings & international tours</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Booking Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="booking-name">Contact Name *</Label>
                      <Input
                        id="booking-name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="booking-email">Email Address *</Label>
                      <Input
                        id="booking-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-subject">Inquiry Type</Label>
                    <select
                      id="booking-subject"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Booking Inquiry">Booking Inquiry</option>
                      <option value="Festival Booking">Festival Booking</option>
                      <option value="Private Event">Private Event</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Press/Media">Press / Media</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-message">Event Details *</Label>
                    <Textarea
                      id="booking-message"
                      rows={6}
                      placeholder={`Please include:
• Event date and time
• Venue name and location in Houston (or city/country)
• Type of event
• Expected attendance
• Budget range (if applicable)
• Any additional requirements`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={mutation.isPending}>
                    {mutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 text-center text-muted-foreground">
              <p className="text-sm flex items-center justify-center gap-2">
                For urgent inquiries, email directly:
                <a href="mailto:iamseanaustin@icloud.com" className="text-primary hover:text-primary/80 font-medium">
                  iamseanaustin@icloud.com
                </a>
              </p>
            </div>
          </section>

          {/* Stream section */}
          <section className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Stream Houston Reggae Music
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Listen to Sean Austin's full catalog — Houston's authentic Caribbean reggae and dancehall — on all major platforms.
            </p>
            <div className="max-w-md mx-auto">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/0ZTUFRHKN1R7Se9eq5QTAT?utm_source=generator&theme=0"
                width="100%"
                height="200"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Sean Austin — Houston Reggae Artist on Spotify"
              />
            </div>
          </section>

          {/* FAQ / Q&A for Featured Snippets & voice search */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "Who is Sean Austin the reggae artist in Houston Texas?",
                  a: "Sean Austin is a Jamaican-born reggae artist based in Houston, Texas. He performs authentic roots reggae, dancehall, and Caribbean music at Houston venues, festivals, and private events. Known for hits like \"Confessions\", \"Same Girl\", \"Purple Hearts\", and the album \"AFRONOMIXX\".",
                },
                {
                  q: "Does Sean Austin perform live reggae music in Houston?",
                  a: "Yes. Sean Austin performs live reggae in Houston, Texas at venues like the House of Blues Foundation Room and other premier Houston stages. He is available for Houston concerts, clubs, festivals, corporate events, weddings, and private parties.",
                },
                {
                  q: "How do I book Sean Austin for a Houston event?",
                  a: "Fill out the booking form above or email iamseanaustin@icloud.com directly. Sean Austin is available for Houston concerts, corporate events, festivals, weddings, and private parties — with a response within 48 hours.",
                },
                {
                  q: "What type of music does Sean Austin play?",
                  a: "Sean Austin performs reggae, roots reggae, dancehall, and Caribbean music — blending authentic Jamaican reggae with modern production. Fans of Bob Marley, Sean Paul, Shaggy, and Vybz Kartel will love his sound.",
                },
                {
                  q: "Is Sean Austin available for private events and weddings in Houston?",
                  a: "Yes! Sean Austin is available for Houston private events including weddings, birthday parties, corporate functions, and anniversary celebrations. He also performs at Houston-area festivals and concert venues.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-card/50 rounded-xl px-6 py-4 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 font-semibold text-foreground list-none">
                    {q}
                    <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
