-- 00011_rls_policies.sql

-- Helper function to check if a user is an active member of an organization
CREATE OR REPLACE FUNCTION is_org_member(org_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1
        FROM organization_members
        WHERE organization_id = org_id
          AND user_id = auth.uid()
          AND status = 'active'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Candidates
CREATE POLICY "Users can view their organization candidates" ON candidates FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert candidates in their organization" ON candidates FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update candidates in their organization" ON candidates FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete candidates in their organization" ON candidates FOR DELETE USING (is_org_member(organization_id));

-- Jobs
CREATE POLICY "Users can view their organization jobs" ON jobs FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert jobs in their organization" ON jobs FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update jobs in their organization" ON jobs FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete jobs in their organization" ON jobs FOR DELETE USING (is_org_member(organization_id));

-- Applications
CREATE POLICY "Users can view their organization applications" ON applications FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert applications in their organization" ON applications FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update applications in their organization" ON applications FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete applications in their organization" ON applications FOR DELETE USING (is_org_member(organization_id));

-- Interviews
CREATE POLICY "Users can view their organization interviews" ON interviews FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert interviews in their organization" ON interviews FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update interviews in their organization" ON interviews FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete interviews in their organization" ON interviews FOR DELETE USING (is_org_member(organization_id));

-- Tasks
CREATE POLICY "Users can view their organization tasks" ON tasks FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert tasks in their organization" ON tasks FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update tasks in their organization" ON tasks FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete tasks in their organization" ON tasks FOR DELETE USING (is_org_member(organization_id));

-- Communications
CREATE POLICY "Users can view their organization communications" ON communications FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert communications in their organization" ON communications FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update communications in their organization" ON communications FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete communications in their organization" ON communications FOR DELETE USING (is_org_member(organization_id));

-- Storage files
CREATE POLICY "Users can view their organization storage files" ON storage_files FOR SELECT USING (is_org_member(organization_id));
CREATE POLICY "Users can insert storage files in their organization" ON storage_files FOR INSERT WITH CHECK (is_org_member(organization_id));
CREATE POLICY "Users can update storage files in their organization" ON storage_files FOR UPDATE USING (is_org_member(organization_id));
CREATE POLICY "Users can delete storage files in their organization" ON storage_files FOR DELETE USING (is_org_member(organization_id));

-- Organizations
CREATE POLICY "Users can view organizations they are members of" ON organizations FOR SELECT USING (is_org_member(id));

-- Profiles (assuming 'profiles' table exists, users can read all profiles in orgs they belong to, update own)
CREATE POLICY "Users can view profiles in their organizations" ON profiles FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM organization_members om
        WHERE om.user_id = profiles.id AND is_org_member(om.organization_id)
    )
);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Integrations
CREATE POLICY "Users can manage integrations in their organization" ON integrations FOR ALL USING (is_org_member(organization_id));
-- Settings
CREATE POLICY "Users can manage settings in their organization" ON settings FOR ALL USING (is_org_member(organization_id));
-- AI Requests
CREATE POLICY "Users can manage AI requests in their organization" ON ai_requests FOR ALL USING (is_org_member(organization_id));
-- Reports
CREATE POLICY "Users can manage reports in their organization" ON reports FOR ALL USING (is_org_member(organization_id));

-- AI Results
CREATE POLICY "Users can manage AI results" ON ai_results FOR ALL USING (
    EXISTS (
        SELECT 1 FROM ai_requests
        WHERE ai_requests.id = ai_results.request_id AND is_org_member(ai_requests.organization_id)
    )
);
