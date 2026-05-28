import Image from "next/image";
import { PLATFORM_BADGE_LAYOUT } from "@/lib/platform-icons";
import { INTERIOR_PHOTOS } from "@/lib/constants";
import { Button } from "./ui/button";
import { PlatformBadge } from "./ui/platform-badge";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function MultiPlatformSection() {
  return (
    <Section bg="cream" padding="lg" className="!pb-16">
      <div className="overflow-hidden rounded-2xl bg-sand">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[520px]">
            {/* TODO: replace with real Prago property photo */}
            <Image
              src={INTERIOR_PHOTOS[1]}
              alt="Albanian rental interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0">
              {PLATFORM_BADGE_LAYOUT.map((badge, i) => (
                <div key={`${badge.key}-${i}`} className={`absolute ${badge.className}`}>
                  <PlatformBadge name={badge.key} size="lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
            <SerifHeading size="h2" className="text-charcoal">
              Listed everywhere guests look.
            </SerifHeading>
            <p className="mt-5 font-sans leading-relaxed text-stone">
              Airbnb. Booking.com. Vrbo. Expedia. We put your property in front of every traveler that matters,
              so you stop fighting for visibility and start collecting bookings.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-stone">
              One calendar. One team. One dashboard. Zero double bookings.
            </p>
            <Button href="#estimate" variant="charcoal" className="mt-8 w-full sm:w-fit">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
