import { patientRoutes } from "@/lib/patient/patient-routes";

// LM Health Framework seed configuration.
// This patient module is intentionally brandable and reusable for psychologists,
// physiotherapists, nutritionists, speech therapists, clinics, and other health
// professionals while Eliane Goncalves remains the pilot implementation.
export const patientConfig = {
  brandName: "Dra. Eliane Gonçalves",
  moduleName: "Área do Paciente",
  professionalLabel: "Psicóloga",
  welcomeLine: "Acesse sua área preparada com cuidado pela Dra. Eliane.",
  routes: patientRoutes,
  colors: {
    navy: "var(--color-navy)",
    gold: "var(--color-accent)",
    offWhite: "var(--color-mist)",
  },
} as const;
