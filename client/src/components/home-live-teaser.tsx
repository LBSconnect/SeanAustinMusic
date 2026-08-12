import { ArrowRight, Radio } from "lucide-react";

// Minimal status strip, not a calendar — the full schedule lives on /tour.
// No specific date is invented or hard-coded here; when there is nothing
// confirmed to point at, this stays deliberately generic.
export default function HomeLiveTeaser() {
  return (
    <section className="bg-black border-t border-white/10" data-testid="section-home-live-teaser">
      {/* Renders as the clickable element itself, so it needs to carry the
          shared container's width/padding directly rather than wrapping a
          <Container> (a <div>) around it. Keep these values in sync with
          client/src/components/container.tsx. */}
      <a
        href="/tour"
        className="group block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 flex items-center justify-between gap-4"
        data-testid="link-view-live-info"
      >
        <div className="flex items-center gap-4 min-w-0">
          <Radio className="w-5 h-5 text-white/40 flex-shrink-0" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Live &amp; Bookings
            </p>
            <p className="text-white text-lg sm:text-xl font-display mt-0.5 truncate">
              Catch Sean on stage or book him for your event
            </p>
          </div>
        </div>
        <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-white/60 group-hover:text-white transition-colors">
          View Live Info
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 motion-safe:transition-transform" />
        </span>
      </a>
    </section>
  );
}
