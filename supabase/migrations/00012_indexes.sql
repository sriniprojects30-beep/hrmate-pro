-- 00012_indexes.sql

CREATE INDEX idx_candidates_org_id ON candidates(organization_id);
CREATE INDEX idx_jobs_org_id ON jobs(organization_id);
CREATE INDEX idx_applications_org_id ON applications(organization_id);
CREATE INDEX idx_applications_candidate_id ON applications(candidate_id);
CREATE INDEX idx_interviews_app_id ON interviews(application_id);
CREATE INDEX idx_org_members_user_id ON organization_members(user_id);
CREATE INDEX idx_audit_logs_org_id ON audit_logs(organization_id);
