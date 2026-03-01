import AccessRoutingLayerSection from "@/components/sections/AccessRoutingLayerSection";
import { ConnectIdealClientsSection } from "@/components/sections/ConnectIdealClientsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LandingOverlapFooter } from "@/components/sections/LandingOverlapFooter";
import OldWayVsNewWaySection from "@/components/sections/OldWayVsNewWaySection";
import { SystemLevelProcessingSection } from "@/components/sections/SystemLevelProcessingSection";
import ThroughputCapacityStrip from "@/components/sections/ThroughputCapacityStrip";
import TwoSidedRoutingNetwork from "@/components/sections/TwoSidedRoutingNetwork";
import { homeContent } from "@/lib/content/home";

export default function Home() {
  return (
    <>
      <main className="relative z-10 min-h-screen">
        <div className="bg-black">
          <HeroSection {...homeContent.hero} />
          <ConnectIdealClientsSection {...homeContent.connectIdealClients} />
          <SystemLevelProcessingSection {...homeContent.systemLevelProcessing} />
          <ThroughputCapacityStrip {...homeContent.throughputStrip} />
          <TwoSidedRoutingNetwork {...homeContent.twoSidedNetwork} />
          <OldWayVsNewWaySection {...homeContent.oldVsNew} />
          <AccessRoutingLayerSection {...homeContent.accessRouting} />
        </div>
        <div className="h-[52vh] min-h-[320px]" aria-hidden />
      </main>
      <LandingOverlapFooter
        brand={homeContent.footer.brand}
        tagline={homeContent.footer.tagline}
        copyright={homeContent.footer.copyright}
      />
    </>
  );
}
