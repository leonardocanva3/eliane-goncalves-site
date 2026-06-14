import { PatientDashboard } from "@/components/patient/PatientDashboard";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Dashboard do Paciente",
  path: "/paciente",
});

export default function PatientDashboardPage() {
  return (
    <main className="bg-[linear-gradient(135deg,rgba(246,245,242,0.96),rgba(255,255,255,0.72))] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <PatientDashboard />
    </main>
  );
}
