import { ServicePreparedPage } from "@/components/service/ServicePreparedPage";
import { psicologiaInfantilContent } from "@/content/services/psicologia-infantil";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: psicologiaInfantilContent.title,
  description: psicologiaInfantilContent.summary,
  path: "/psicologia-infantil",
});

export default function PsicologiaInfantilPage() {
  return <ServicePreparedPage service={psicologiaInfantilContent} />;
}
