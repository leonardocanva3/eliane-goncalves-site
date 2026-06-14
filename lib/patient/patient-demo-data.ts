import type {
  Patient,
  PatientInstruction,
  PatientMaterial,
  PatientSession,
} from "@/types/patient";

export const demoPatient: Patient = {
  id: "patient-demo-eliane-001",
  name: "Marina Souza",
  email: "marina.demo@email.com",
  phone: "(41) 90000-0000",
  active: true,
  nextSessionAt: "2026-06-18T15:00:00-03:00",
  createdAt: "2026-06-01T09:00:00-03:00",
};

export const demoPatients: Patient[] = [
  demoPatient,
  {
    id: "patient-demo-eliane-002",
    name: "Camila Rocha",
    email: "camila.demo@email.com",
    phone: "(41) 91111-1111",
    active: true,
    nextSessionAt: "2026-06-19T10:30:00-03:00",
    createdAt: "2026-06-03T11:00:00-03:00",
  },
  {
    id: "patient-demo-eliane-003",
    name: "Renata Alves",
    email: "renata.demo@email.com",
    phone: "(41) 92222-2222",
    active: false,
    nextSessionAt: "2026-06-25T08:30:00-03:00",
    createdAt: "2026-06-06T14:00:00-03:00",
  },
];

export const demoSessions: PatientSession[] = [
  {
    id: "session-demo-001",
    patientId: demoPatient.id,
    sessionAt: demoPatient.nextSessionAt,
    notes: "Consulta online de acompanhamento.",
    createdAt: "2026-06-01T09:00:00-03:00",
  },
];

export const demoInstructions: PatientInstruction[] = [
  {
    id: "instruction-demo-001",
    patientId: demoPatient.id,
    title: "Pausa gentil entre atividades",
    content:
      "Reserve alguns minutos para respirar, perceber o corpo e registrar uma emoção predominante do dia.",
    emoji: "💬",
    createdAt: "2026-06-07T10:00:00-03:00",
  },
];

export const demoMaterials: PatientMaterial[] = [
  {
    id: "material-demo-pdf",
    patientId: demoPatient.id,
    type: "pdf",
    title: "PDF de acolhimento",
    description: "Material inicial para acompanhar as primeiras reflexões.",
    url: "#",
    filePath: "patients/demo/pdf-acolhimento.pdf",
    emoji: "📚",
    createdAt: "2026-06-07T10:15:00-03:00",
  },
  {
    id: "material-demo-youtube",
    patientId: demoPatient.id,
    type: "youtube",
    title: "Vídeo recomendado",
    description: "Conteúdo breve para psicoeducação entre sessões.",
    url: "#",
    filePath: "",
    emoji: "🎥",
    createdAt: "2026-06-07T10:20:00-03:00",
  },
  {
    id: "material-demo-spotify",
    patientId: demoPatient.id,
    type: "spotify",
    title: "Playlist de presença",
    description: "Áudios e músicas para momentos de autorregulação.",
    url: "#",
    filePath: "",
    emoji: "🎧",
    createdAt: "2026-06-07T10:25:00-03:00",
  },
  {
    id: "material-demo-image",
    patientId: demoPatient.id,
    type: "image",
    title: "Imagem de exercício",
    description: "Referência visual para prática guiada.",
    url: "#",
    filePath: "patients/demo/imagem-exercicio.jpg",
    emoji: "🖼️",
    createdAt: "2026-06-07T10:30:00-03:00",
  },
  {
    id: "material-demo-extra",
    patientId: demoPatient.id,
    type: "other",
    title: "Arquivo extra",
    description: "Espaço reservado para documentos complementares.",
    url: "#",
    filePath: "patients/demo/extra.zip",
    emoji: "📎",
    createdAt: "2026-06-07T10:35:00-03:00",
  },
];
