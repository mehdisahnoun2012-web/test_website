/*
# Create appointments table

1. New Tables
  - `appointments`
    - `id` (uuid, primary key)
    - `name` (text, not null) - customer full name
    - `phone` (text, not null) - callback phone number
    - `email` (text) - optional email
    - `service` (text, not null) - requested service type
    - `preferred_date` (date) - preferred appointment date
    - `message` (text) - additional details
    - `created_at` (timestamptz, default now())
2. Security
  - Enable RLS on `appointments`.
  - This is a public lead-capture form with no sign-in, so allow anon + authenticated to INSERT requests.
  - No public SELECT/UPDATE/DELETE: visitors submit requests but cannot read or modify others' submissions.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
