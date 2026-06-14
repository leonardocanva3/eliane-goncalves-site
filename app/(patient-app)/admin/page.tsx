import { AdminDashboard } from "@/components/patient/AdminDashboard";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Painel da Psicóloga",
  path: "/admin",
});

export default function PatientAdminPage() {
  return (
    <main className="bg-[linear-gradient(135deg,rgba(246,245,242,0.96),rgba(255,255,255,0.72))] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <AdminDashboard />
    </main>
  );
}
