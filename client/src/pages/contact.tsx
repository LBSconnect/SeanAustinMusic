import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSearch } from "wouter";
import SEO from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Send, Calendar, MapPin, Users } from "lucide-react";
import Container from "@/components/container";

const DUB_PLATE_INQUIRY = "Dub Plate/Audio Drop";

export default function ContactPage() {
  const { toast } = useToast();
  const search = useSearch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Booking Inquiry",
    message: "",
  });
  const [dubPlateData, setDubPlateData] = useState({
    djName: "",
    stationName: "",
    location: "",
    specialMessage: "",
  });
  const isDubPlate = formData.subject === DUB_PLATE_INQUIRY;

  useEffect(() => {
    const params = new URLSearchParams(search);
    const dubPlateStatus = params.get("dub_plate");
    if (dubPlateStatus !== "success" && dubPlateStatus !== "canceled") return;
    // Deferred a tick: on first mount, <Toaster/> (rendered as a later sibling
    // in App.tsx) hasn't subscribed to the toast store yet, so a toast fired
    // synchronously here would be silently dropped.
    const timeoutId = setTimeout(() => {
      if (dubPlateStatus === "success") {
        toast({
          title: "Payment Received!",
          description: "Check your email for confirmation — Sean will be in touch soon.",
        });
      } else {
        toast({
          title: "Payment Canceled",
          description: "No charge was made. Feel free to submit your request again.",
        });
      }
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [search, toast]);

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

  const dubPlateMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/dub-plate/checkout", {
        name: formData.name,
        email: formData.email,
        ...dubPlateData,
        source: "contact",
      });
      return res.json() as Promise<{ url: string }>;
    },
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to start checkout. Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDubPlate) {
      dubPlateMutation.mutate();
    } else {
      mutation.mutate(formData);
    }
  };

  return (
    <>
      <SEO
        title="Booking & Contact"
        description="Book Sean Austin for your event. Submit booking inquiries for concerts, festivals, private events, and corporate shows."
        path="/contact"
      />
      <div className="min-h-screen pt-20 pb-12">
        <Container>
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Booking & Contact
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              For booking inquiries, please fill out the form below with as much detail as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/30 text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary">Events</h3>
                <p className="text-sm text-muted-foreground">Festivals, Concerts, Club Shows</p>
              </CardContent>
            </Card>
            <Card className="bg-card/30 text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary">Private Events</h3>
                <p className="text-sm text-muted-foreground">Corporate, Weddings, Private Parties</p>
              </CardContent>
            </Card>
            <Card className="bg-card/30 text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary">Worldwide</h3>
                <p className="text-sm text-muted-foreground">Available for International Bookings</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Booking Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Inquiry Type</Label>
                  <select
                    id="subject"
                    className="w-full h-11 px-3 rounded-md border border-input bg-background text-base"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Booking Inquiry">Booking Inquiry</option>
                    <option value="Festival Booking">Festival Booking</option>
                    <option value="Private Event">Private Event</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value={DUB_PLATE_INQUIRY}>Dub Plate/Audio Drop</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {isDubPlate ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      A custom Dub Plate/Audio Drop is <strong className="text-foreground">$150</strong>, paid securely via Stripe. Please provide the following details:
                    </p>
                    <div className="space-y-2">
                      <Label htmlFor="dj-name">DJ Name(s) *</Label>
                      <Input
                        id="dj-name"
                        placeholder="e.g. DJ Selecta"
                        value={dubPlateData.djName}
                        onChange={(e) => setDubPlateData({ ...dubPlateData, djName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="station-name">Radio Station or Sound System Name *</Label>
                      <Input
                        id="station-name"
                        placeholder="e.g. Irie FM Sound"
                        value={dubPlateData.stationName}
                        onChange={(e) => setDubPlateData({ ...dubPlateData, stationName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dub-location">Location (City, Country) *</Label>
                      <Input
                        id="dub-location"
                        placeholder="e.g. Houston, USA"
                        value={dubPlateData.location}
                        onChange={(e) => setDubPlateData({ ...dubPlateData, location: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dub-special-message">Special Message</Label>
                      <Textarea
                        id="dub-special-message"
                        rows={4}
                        placeholder="Any specific shoutouts or wording you'd like included"
                        value={dubPlateData.specialMessage}
                        onChange={(e) => setDubPlateData({ ...dubPlateData, specialMessage: e.target.value })}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="message">Event Details *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please include:
• Event date and time
• Venue name and location
• Type of event
• Expected attendance
• Budget range (if applicable)
• Any additional requirements"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={mutation.isPending || dubPlateMutation.isPending}
                >
                  {isDubPlate ? (
                    dubPlateMutation.isPending ? (
                      "Redirecting to payment..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Continue to Payment — $150
                      </>
                    )
                  ) : mutation.isPending ? (
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

          <div className="mt-8 text-center text-muted-foreground">
            <p className="text-sm flex items-center justify-center gap-2">
              For urgent inquiries, please email directly
              <a href="mailto:iamseanaustin@icloud.com" className="text-primary hover:text-primary/80 inline-flex items-center">
                <Mail className="w-5 h-5" />
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
