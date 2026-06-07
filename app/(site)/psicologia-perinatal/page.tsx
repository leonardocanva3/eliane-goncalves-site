import { ServicePreparedPage } from "@/components/service/ServicePreparedPage";
import { psicologiaPerinatalContent } from "@/content/services/psicologia-perinatal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: psicologiaPerinatalContent.title,
  description: psicologiaPerinatalContent.summary,
  path: "/psicologia-perinatal",
});

export default function PsicologiaPerinatalPage() {
  return <ServicePreparedPage service={psicologiaPerinatalContent} />;
}
