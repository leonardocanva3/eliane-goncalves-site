import { ServicePreparedPage } from "@/components/service/ServicePreparedPage";
import { analiseComportamentalContent } from "@/content/services/analise-comportamental";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: analiseComportamentalContent.title,
  description: analiseComportamentalContent.summary,
  path: "/analise-comportamental",
});

export default function AnaliseComportamentalPage() {
  return <ServicePreparedPage service={analiseComportamentalContent} />;
}
