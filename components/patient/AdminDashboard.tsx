import { PatientCard } from "@/components/patient/PatientCard";
import { PatientModuleCard } from "@/components/patient/PatientModuleCard";
import { PatientSidebar } from "@/components/patient/PatientSidebar";
import { PatientTopbar } from "@/components/patient/PatientTopbar";
import {
  demoInstructions,
  demoMaterials,
  demoPatients,
  demoSessions,
} from "@/lib/patient/patient-demo-data";

const adminModules = [
  {
    emoji: "➕",
    title: "Novo paciente",
    description: "Atalho visual reservado para cadastro futuro de pacientes.",
    meta: "demo",
  },
  {
    emoji: "📅",
    title: "Próxima consulta",
    description: demoSessions[0]?.notes ?? "Sessões serão exibidas aqui.",
    meta: "agenda",
  },
  {
    emoji: "💬",
    title: "Orientações",
    description: `${demoInstructions.length} orientação demo preparada.`,
    meta: "conteúdo",
  },
  {
    emoji: "📚",
    title: "PDFs",
    description: "Materiais em PDF serão enviados via Supabase Storage.",
    meta: "storage",
  },
  {
    emoji: "🎥",
    title: "YouTube",
    description: "Links recomendados poderão ser organizados por paciente.",
    meta: "mídia",
  },
  {
    emoji: "🎧",
    title: "Spotify",
    description: "Playlists e áudios de apoio ficarão em um módulo próprio.",
    meta: "áudio",
  },
  {
    emoji: "📎",
    title: "Extras",
    description: `${demoMaterials.length} materiais demo disponíveis.`,
    meta: "arquivos",
  },
  {
    emoji: "🔐",
    title: "Acessos",
    description: "Base preparada para Supabase Auth e perfis por papel.",
    meta: "auth",
  },
];

export function AdminDashboard() {
  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
      <PatientSidebar />
      <main className="grid gap-6">
        <PatientTopbar
          eyebrow="👩‍⚕️ Painel da Psicóloga"
          title="Gestão acolhedora dos pacientes"
          description="Painel visual demo para a Dra. Eliane acompanhar pacientes, consultas, orientações e materiais antes da camada real de CRUD."
        />

        <div className="grid gap-5 xl:grid-cols-[1fr_1.2fr]">
          <PatientCard emoji="👥" title="Pacientes">
            <div className="grid gap-3">
              {demoPatients.map((patient) => (
                <div
                  className="flex flex-col gap-2 rounded-[20px] border border-[var(--color-line)] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  key={patient.id}
                >
                  <div>
                    <p className="font-semibold text-[var(--color-navy)]">
                      {patient.name}
                    </p>
                    <p className="text-sm">{patient.email}</p>
                  </div>
                  <span className="w-fit rounded-full bg-[var(--color-brand-blue-pale)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-navy)]">
                    {patient.active ? "ativo" : "pausado"}
                  </span>
                </div>
              ))}
            </div>
          </PatientCard>

          <section className="grid gap-5 sm:grid-cols-2">
            {adminModules.map((module) => (
              <PatientModuleCard
                description={module.description}
                emoji={module.emoji}
                key={module.title}
                meta={module.meta}
                title={module.title}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
