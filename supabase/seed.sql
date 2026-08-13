-- Seed data for HRMATE PRO

-- Create a dummy organization
INSERT INTO organizations (id, name, slug)
VALUES ('00000000-0000-0000-0000-000000000001', 'Acme Corp', 'acme-corp')
ON CONFLICT DO NOTHING;

-- Insert a generic role
INSERT INTO roles (id, organization_id, name, description)
VALUES ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Admin', 'Administrator role')
ON CONFLICT DO NOTHING;

-- Create some dummy candidates
INSERT INTO candidates (id, organization_id, first_name, last_name, email, phone, location, status)
VALUES 
('00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'Alice', 'Smith', 'alice@example.com', '555-0101', 'New York, NY', 'New'),
('00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'Bob', 'Jones', 'bob@example.com', '555-0102', 'San Francisco, CA', 'Screening')
ON CONFLICT DO NOTHING;

-- Create some dummy jobs
INSERT INTO jobs (id, organization_id, title, department, location, employment_type, status)
VALUES
('00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000001', 'Senior Frontend Engineer', 'Engineering', 'Remote', 'Full-time', 'Open'),
('00000000-0000-0000-0000-000000000021', '00000000-0000-0000-0000-000000000001', 'Product Manager', 'Product', 'New York, NY', 'Full-time', 'Open')
ON CONFLICT DO NOTHING;
