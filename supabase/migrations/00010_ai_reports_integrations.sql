-- 00010_ai_reports_integrations.sql

-- integrations
CREATE TABLE integrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    provider TEXT NOT NULL,
    config JSONB,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trigger_update_modified_column_integrations
BEFORE UPDATE ON integrations
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- settings
CREATE TABLE settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    key TEXT NOT NULL,
    value JSONB,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trigger_update_modified_column_settings
BEFORE UPDATE ON settings
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- ai_requests
CREATE TABLE ai_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    input_data JSONB,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE ai_requests ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trigger_update_modified_column_ai_requests
BEFORE UPDATE ON ai_requests
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- ai_results
CREATE TABLE ai_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID NOT NULL REFERENCES ai_requests(id) ON DELETE CASCADE,
    output_data JSONB,
    model TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE ai_results ENABLE ROW LEVEL SECURITY;

-- reports
CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    name TEXT NOT NULL,
    filters JSONB,
    created_by UUID,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trigger_update_modified_column_reports
BEFORE UPDATE ON reports
FOR EACH ROW EXECUTE FUNCTION update_modified_column();
