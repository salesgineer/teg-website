-- Service request callbacks table
-- Stores quick callback requests with urgency flagging

CREATE TABLE service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('pre-purchase', 'car-search', 'mobile-service')),
  preferred_time TEXT NOT NULL CHECK (preferred_time IN ('morning', 'afternoon', 'evening')),
  is_urgent BOOLEAN DEFAULT FALSE,
  locale TEXT NOT NULL CHECK (locale IN ('lv', 'en', 'ru')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_service_requests_created_at ON service_requests(created_at DESC);
CREATE INDEX idx_service_requests_urgent ON service_requests(is_urgent) WHERE is_urgent = true;
CREATE INDEX idx_service_requests_status ON service_requests(status);

-- Enable Row Level Security
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT for service requests
CREATE POLICY "Allow public insert" ON service_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Future: Add SELECT/UPDATE policies for admin dashboard (Phase 2)
-- CREATE POLICY "Allow admin select" ON service_requests
--   FOR SELECT
--   TO authenticated
--   USING (auth.role() = 'admin');

-- Auto-update updated_at timestamp
CREATE TRIGGER update_service_requests_updated_at
  BEFORE UPDATE ON service_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
