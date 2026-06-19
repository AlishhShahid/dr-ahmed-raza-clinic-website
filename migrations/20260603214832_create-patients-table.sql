-- Create patients table for Dr. Ahmed Raza Clinic Dashboard
CREATE TABLE IF NOT EXISTS public.patients (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  age           INTEGER,
  gender        TEXT CHECK (gender IN ('Male', 'Female', 'Other')),
  phone         TEXT,
  diagnosis     TEXT,
  prescription  TEXT,
  visit_date    DATE NOT NULL DEFAULT CURRENT_DATE,
  follow_up     DATE,
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

-- Only authenticated users (the doctor) can read all patients
CREATE POLICY "Authenticated users can read patients"
  ON public.patients
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can insert patients
CREATE POLICY "Authenticated users can insert patients"
  ON public.patients
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update patients
CREATE POLICY "Authenticated users can update patients"
  ON public.patients
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete patients
CREATE POLICY "Authenticated users can delete patients"
  ON public.patients
  FOR DELETE
  TO authenticated
  USING (true);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER patients_updated_at
  BEFORE UPDATE ON public.patients
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
