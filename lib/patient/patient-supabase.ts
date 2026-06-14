export const patientSupabaseConfig = {
  storageBuckets: {
    patientMaterials: "patient-materials",
  },
  tables: {
    profiles: "profiles",
    patients: "patients",
    sessions: "patient_sessions",
    instructions: "patient_instructions",
    materials: "patient_materials",
  },
} as const;

// Supabase client creation will be wired in a later phase after environment
// variables, Auth redirects, Storage policies, and RLS rules are approved.
export function getPatientSupabaseStatus() {
  return {
    authEnabled: false,
    storageEnabled: false,
    rlsEnabled: false,
  };
}
