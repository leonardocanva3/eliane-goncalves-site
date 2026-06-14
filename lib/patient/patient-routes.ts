export const patientRoutes = {
  login: "/entrar",
  patient: "/paciente",
  admin: "/admin",
} as const;

export const patientNavigation = [
  { href: patientRoutes.patient, label: "Paciente", emoji: "🌿" },
  { href: patientRoutes.admin, label: "Psicóloga", emoji: "👩‍⚕️" },
  { href: patientRoutes.login, label: "Entrar", emoji: "🔐" },
] as const;
