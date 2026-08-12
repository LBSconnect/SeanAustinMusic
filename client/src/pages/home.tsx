import Hero from "@/components/hero";
import HomeFeaturedRelease from "@/components/home-featured-release";
import HomeBrandBridge from "@/components/home-brand-bridge";
import HomeLiveTeaser from "@/components/home-live-teaser";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Reggae Artist in Houston Texas | Sean Austin"
        description="Sean Austin is a Reggae Artist based in Houston Texas. Stream music, watch videos, and get tour dates."
        noSuffix
      />
      <Hero />
      <HomeFeaturedRelease />
      <HomeBrandBridge />
      <HomeLiveTeaser />
    </>
  );
}
