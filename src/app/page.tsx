import AccessRoutingLayerSection from "@/components/sections/AccessRoutingLayerSection";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import InfrastructureBadgeStrip from "@/components/sections/InfrastructureBadgeStrip";
import OldWayVsNewWaySection from "@/components/sections/OldWayVsNewWaySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import ThroughputCapacityStrip from "@/components/sections/ThroughputCapacityStrip";
import TwoSidedRoutingNetwork from "@/components/sections/TwoSidedRoutingNetwork";
import { homeContent } from "@/lib/content/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection {...homeContent.hero} />
      <InfrastructureBadgeStrip {...homeContent.infrastructureBadge} />
      <ThroughputCapacityStrip {...homeContent.throughputStrip} />
      <TwoSidedRoutingNetwork {...homeContent.twoSidedNetwork} />
      <OldWayVsNewWaySection {...homeContent.oldVsNew} />
      <AccessRoutingLayerSection {...homeContent.accessRouting} />
      <TestimonialSection
        eyebrow={homeContent.testimonial.eyebrow}
        title={homeContent.testimonial.title}
        subtitle={homeContent.testimonial.subtitle}
        quote={homeContent.testimonial.quote}
        author={homeContent.testimonial.author}
        role={homeContent.testimonial.role}
      />
      <FooterCtaSection title={homeContent.footer.title} cta={homeContent.footer.cta} />
    </main>
  );
}
