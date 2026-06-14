import type { ProfileRole } from "@/types/patient";

export type DemoPatientUser = {
  id: string;
  email: string;
  role: ProfileRole;
};

// Authentication is intentionally not enabled in Phase 1.
// Future LM Health Framework projects will connect this adapter to Supabase Auth
// and reuse the same role model across psychologists, clinics, and other health teams.
export async function getDemoPatientUser(): Promise<DemoPatientUser | null> {
  return null;
}

export function isPatientAreaAuthEnabled() {
  return false;
}
