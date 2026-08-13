import { Helmet } from "react-helmet-async";
import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Radio } from "lucide-react";
import Container from "@/components/container";

const tourDates = [
  {
    id: "1",
    date: "Tuesday, May 19, 2026",
    isoDate: "2026-05-19",
    time: "5:00 PM – 6:00 PM",
    venue: "Suncity 104.9 FM",
    subtitle: "Live Interview",
    type: "interview",
  },
  {
    id: "2",
    date: "Wednesday, May 20, 2026",
    isoDate: "2026-05-20",
    time: "8:00 PM – 9:00 PM",
    venue: "Irie FM",
    subtitle: "EBuzz Interview",
    type: "interview",
  },
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Sean Austin Upcoming Events 2026",
  "itemListElement": tourDates.map((show, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Event",
      "name": `Sean Austin: ${show.subtitle} on ${show.venue}`,
      "performer": {
        "@type": "MusicGroup",
        "name": "Sean Austin",
        "url": "https://www.seanaustinmusic.com",
      },
      "startDate": show.isoDate,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "url": "https://www.seanaustinmusic.com/tour",
      "description": `Sean Austin joins ${show.venue} for a ${show.subtitle} on ${show.date}, ${show.time}.`,
    },
  })),
};

export default function TourPage() {
  return (
    <>
      <SEO
        title="Sean Austin Live Tour Dates 2026 | Reggae Concerts Houston TX"
        description="See Sean Austin live, Houston Texas reggae artist performing at venues worldwide. Upcoming tour dates 2026 including Houston TX, Spain, and Nigeria. Book Sean Austin for your event."
        path="/tour"
        noSuffix
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(eventSchema)}
        </script>
      </Helmet>

      <div className="relative min-h-screen py-20">
        {/* Background photo */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/attached_assets/Sean-Austin-reggae-artist-Houston-16.jpeg"
            alt=""
            className="w-full h-full object-cover object-top lg:object-center"
            style={{ opacity: 0.35 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/90" />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Tour Dates 2026
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Sean Austin Reggae Artist based in Houston, Texas performing live worldwide.
              Catch a show near you.
            </p>
          </div>

          <div className="space-y-4">
            {tourDates.map((show) => (
              <Card key={show.id} className="bg-card/50 hover:bg-card/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Radio className="w-4 h-4" />
                    <span className="font-display text-lg font-bold">{show.venue}</span>
                    <span className="text-sm text-muted-foreground font-normal">({show.subtitle})</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{show.date}</span>
                    </div>
                    <span className="hidden sm:inline text-border">·</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{show.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More dates coming soon! Follow along on social to be the first to know.
            </p>
            <p className="text-sm text-muted-foreground">
              Want to book Sean Austin for your Houston venue or event?{" "}
              <a href="/reggae-artist-houston-texas" className="text-primary hover:text-primary/80 font-medium">
                Submit a booking request →
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
