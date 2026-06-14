import { PatientCard } from "@/components/patient/PatientCard";
import { PatientEmptyState } from "@/components/patient/PatientEmptyState";
import { PatientModuleCard } from "@/components/patient/PatientModuleCard";
import { PatientSidebar } from "@/components/patient/PatientSidebar";
import { PatientTopbar } from "@/components/patient/PatientTopbar";
import {
  demoInstructions,
  demoMaterials,
  demoPatient,
  demoSessions,
} from "@/lib/patient/patient-demo-data";

export function PatientDashboard() {
  const nextSession = demoSessions[0];
  const instruction = demoInstructions[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
      <PatientSidebar />
      <main className="grid gap-6">
        <PatientTopbar
          eyebrow="🌿 Boas-vindas"
          title={`Olá, ${demoPatient.name}`}
          description="Este painel demo organiza orientações, consultas e materiais em um espaço calmo, humano e preparado para evoluir com Supabase."
        />

        <div className="grid gap-5 xl:grid-cols-2">
          <PatientCard emoji="📅" title="Próxima consulta">
            {nextSession ? (
              <p>
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "long",
                  timeStyle: "short",
                  timeZone: "America/Sao_Paulo",
                }).format(new Date(nextSession.sessionAt))}
              </p>
            ) : (
              <PatientEmptyState
                emoji="📅"
                title="Sem consulta agendada"
                description="Quando uma nova sessão for marcada, ela aparecerá aqui."
              />
            )}
          </PatientCard>

          <PatientCard emoji="💬" title="Orientações da psicóloga">
            <strong className="text-[var(--color-navy)]">{instruction.title}</strong>
            <p className="mt-2">{instruction.content}</p>
          </PatientCard>
        </div>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {demoMaterials.map((material) => (
            <PatientModuleCard
              description={material.description}
              emoji={material.emoji}
              key={material.id}
              meta={material.type}
              title={material.title}
            />
          ))}
          <PatientModuleCard
            description="Espaço preparado para planilhas, documentos e anexos adicionais."
            emoji="📎"
            meta="extra"
            title="Arquivos extras"
          />
        </section>
      </main>
    </div>
  );
}
