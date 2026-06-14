export type ProfileRole = "admin" | "patient";

export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  nextSessionAt: string;
  createdAt: string;
};

export type PatientInstruction = {
  id: string;
  patientId: string;
  title: string;
  content: string;
  emoji: string;
  createdAt: string;
};

export type PatientMaterialType =
  | "pdf"
  | "youtube"
  | "spotify"
  | "image"
  | "spreadsheet"
  | "document"
  | "other";

export type PatientMaterial = {
  id: string;
  patientId: string;
  type: PatientMaterialType;
  title: string;
  description: string;
  url: string;
  filePath: string;
  emoji: string;
  createdAt: string;
};

export type PatientSession = {
  id: string;
  patientId: string;
  sessionAt: string;
  notes: string;
  createdAt: string;
};
