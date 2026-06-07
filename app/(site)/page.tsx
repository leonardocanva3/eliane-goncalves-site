import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { HomeEbookSection } from "@/components/sections/HomeEbookSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomePatientAreaSection } from "@/components/sections/HomePatientAreaSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import {
  onlineServicesContent,
} from "@/content/site/online-services";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutPreview />
      <HomeEbookSection />
      <EditorialSection
        eyebrow={onlineServicesContent.title}
        title={onlineServicesContent.subtitle}
        description={onlineServicesContent.description}
        tone="navy"
      />
      <ReviewsSection />
      <HomePatientAreaSection />
      <CtaSection />
    </>
  );
}
