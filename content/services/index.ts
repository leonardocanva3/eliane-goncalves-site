import { analiseComportamentalContent } from "@/content/services/analise-comportamental";
import { coachingPsicologicoContent } from "@/content/services/coaching-psicologico";
import { psicologiaInfantilContent } from "@/content/services/psicologia-infantil";
import { psicologiaPerinatalContent } from "@/content/services/psicologia-perinatal";
import { psicoterapiaOnlineContent } from "@/content/services/psicoterapia-online";

export const servicesContent = [
  psicoterapiaOnlineContent,
  psicologiaInfantilContent,
  psicologiaPerinatalContent,
  coachingPsicologicoContent,
  analiseComportamentalContent,
];

export function getServiceContent(slug: string) {
  return servicesContent.find((service) => service.slug === slug);
}
