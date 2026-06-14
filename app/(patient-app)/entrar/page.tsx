import { LoginForm } from "@/components/patient/LoginForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Entrar na Área do Paciente",
  path: "/entrar",
});

export default function PatientLoginPage() {
  return (
    <main className="bg-[linear-gradient(135deg,rgba(246,245,242,0.96),rgba(245,239,228,0.58))] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <LoginForm />
    </main>
  );
}
