import { ServicePreparedPage } from "@/components/service/ServicePreparedPage";
import { psicoterapiaOnlineContent } from "@/content/services/psicoterapia-online";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: psicoterapiaOnlineContent.title,
  description: psicoterapiaOnlineContent.summary,
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return <ServicePreparedPage service={psicoterapiaOnlineContent} />;
}
