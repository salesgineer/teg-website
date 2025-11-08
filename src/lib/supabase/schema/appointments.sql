-- Appointment bookings table
-- Stores service appointment requests with Google Calendar integration

CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('pre-purchase', 'car-search', 'mobile-service')),
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  vehicle_info TEXT,
  message TEXT,
  locale TEXT NOT NULL CHECK (locale IN ('lv', 'en', 'ru')),
  google_calendar_event_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_appointments_date ON appointments(preferred_date DESC);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_email ON appointments(email);
CREATE INDEX idx_appointments_calendar_event ON appointments(google_calendar_event_id) WHERE google_calendar_event_id IS NOT NULL;

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT for appointment bookings
CREATE POLICY "Allow public insert" ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Future: Add SELECT/UPDATE policies for admin dashboard + customer portal (Phase 2)
-- CREATE POLICY "Allow admin select" ON appointments
--   FOR SELECT
--   TO authenticated
--   USING (auth.role() = 'admin');
--
-- CREATE POLICY "Allow customer view own appointments" ON appointments
--   FOR SELECT
--   TO authenticated
--   USING (email = auth.jwt()->>'email');

-- Auto-update updated_at timestamp
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
