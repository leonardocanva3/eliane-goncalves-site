import { ServicePreparedPage } from "@/components/service/ServicePreparedPage";
import { coachingPsicologicoContent } from "@/content/services/coaching-psicologico";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: coachingPsicologicoContent.title,
  description: coachingPsicologicoContent.summary,
  path: "/coaching-psicologico",
});

export default function CoachingPsicologicoPage() {
  return <ServicePreparedPage service={coachingPsicologicoContent} />;
}
