import { Helmet } from "react-helmet-async";
import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const tourDates = [
  {
    id: "6",
    date: "Apr 11, 2026",
    isoDate: "2026-04-11",
    venue: "The House of Blues Foundation Room",
    city: "Houston",
    state: "TX",
    country: "US",
    countryLabel: "USA",
    isSoldOut: true,
  },
  {
    id: "4",
    date: "May 2, 2026",
    isoDate: "2026-05-02",
    venue: "Rototom Sunsplash",
    city: "Benicassim",
    state: "",
    country: "ES",
    countryLabel: "Spain",
    isSoldOut: true,
  },
  {
    id: "5",
    date: "May 20, 2026",
    isoDate: "2026-05-20",
    venue: "The Shrine Auditorium",
    city: "Lagos",
    state: "",
    country: "NG",
    countryLabel: "Nigeria",
    isSoldOut: true,
  },
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Sean Austin Live Tour Dates 2026",
  "itemListElement": tourDates.map((show, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "MusicEvent",
      "name": `Sean Austin Live at ${show.venue}`,
      "performer": {
        "@type": "MusicGroup",
        "name": "Sean Austin",
        "url": "https://www.seanaustinmusic.com",
      },
      "startDate": show.isoDate,
      "eventStatus": "https://schema.org/EventSoldOut",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "MusicVenue",
        "name": show.venue,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": show.city,
          ...(show.state ? { "addressRegion": show.state } : {}),
          "addressCountry": show.country,
        },
      },
      "image": "https://www.seanaustinmusic.com/attached_assets/Sean-Austin-reggae-artist-Houston-9.jpeg",
      "url": "https://www.seanaustinmusic.com/tour",
      "description": `Sean Austin performs live reggae at ${show.venue} in ${show.city}${show.state ? `, ${show.state}` : ""}, ${show.countryLabel}. Authentic Caribbean roots reggae and dancehall.`,
      "organizer": {
        "@type": "Organization",
        "name": "Sean Austin Music",
        "url": "https://www.seanaustinmusic.com",
      },
    },
  })),
};

export default function TourPage() {
  return (
    <>
      <SEO
        title="Sean Austin Live Tour Dates 2026 | Reggae Concerts Houston TX"
        description="See Sean Austin live — Houston Texas reggae artist performing at venues worldwide. Upcoming tour dates 2026 including Houston TX, Spain, and Nigeria. Book Sean Austin for your event."
        path="/tour"
        noSuffix
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(eventSchema)}
        </script>
      </Helmet>

      <div className="relative min-h-screen py-20 px-6">
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

        <div className="relative z-10 max-w-4xl mx-auto">
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
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{show.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {show.venue} — {show.city}{show.state ? `, ${show.state}` : ""}, {show.countryLabel}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" disabled className="opacity-60">
                    Sold Out
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More dates coming soon! Sign up for the fan club to be the first to know.
            </p>
            <p className="text-sm text-muted-foreground">
              Want to book Sean Austin for your Houston venue or event?{" "}
              <a href="/reggae-artist-houston-texas" className="text-primary hover:text-primary/80 font-medium">
                Submit a booking request →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
