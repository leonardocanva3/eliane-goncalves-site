-- LM Health Framework - Patient Area initial schema.
-- This migration is the first reusable base for psychologists,
-- physiotherapists, nutritionists, speech therapists, clinics, and other
-- health professionals. Dra. Eliane Goncalves is the pilot project.
--
-- owner_id represents the professional/admin responsible for the patient area.
-- patient_id represents the patient who receives sessions, instructions, and
-- materials.
--
-- RLS is intentionally not enabled in this phase. In a future phase, Row Level
-- Security policies will ensure each patient can view only their own materials,
-- sessions, and instructions, while each professional/admin can manage only
-- their own workspace.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  email text,
  full_name text,
  role text not null check (role in ('admin', 'patient')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is
  'LM Health Framework profiles for admins/professionals and patients. RLS will be added in a future phase.';
comment on column public.profiles.owner_id is
  'Professional/admin that owns this profile context when applicable.';

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  profile_id uuid references public.profiles(id) on delete set null,
  name text not null,
  email text,
  phone text,
  active boolean not null default true,
  next_session_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.patients is
  'Patients attached to a professional/admin owner in the LM Health Framework.';
comment on column public.patients.owner_id is
  'Professional/admin responsible for this patient.';

create table if not exists public.patient_sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  patient_id uuid references public.patients(id) on delete cascade,
  session_at timestamptz,
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.patient_sessions is
  'Patient sessions. Future RLS will restrict patient access to their own records.';
comment on column public.patient_sessions.patient_id is
  'Patient represented by this appointment/session record.';

create table if not exists public.patient_instructions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  patient_id uuid references public.patients(id) on delete cascade,
  title text not null,
  content text,
  emoji text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.patient_instructions is
  'Instructions shared by the professional/admin with a patient. Future RLS will isolate records per patient.';

create table if not exists public.patient_materials (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  patient_id uuid references public.patients(id) on delete cascade,
  title text not null,
  description text,
  content text,
  material_type text not null check (
    material_type in (
      'pdf',
      'youtube',
      'spotify',
      'image',
      'spreadsheet',
      'document',
      'other'
    )
  ),
  url text,
  file_path text,
  emoji text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.patient_materials is
  'Patient materials for PDFs, videos, Spotify, images, documents, spreadsheets, and other files. Future RLS will allow each patient to see only their own materials.';
comment on column public.patient_materials.owner_id is
  'Professional/admin who owns and manages this material.';
comment on column public.patient_materials.patient_id is
  'Patient who should receive this material.';
comment on column public.patient_materials.file_path is
  'Future Supabase Storage path for private patient files.';
