'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

async function getUserOrganization() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Unauthorized');

  // Find user's organization
  const { data: membership, error: membershipError } = await supabase
    .from('organization_members')
    .select('organization_id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (membership?.organization_id) {
    return membership.organization_id;
  }

  // If no org exists (new signup), create a default one
  const { data: org, error: orgError } = await supabase
    .from('organizations')
    .insert({
      name: 'My Organization',
      slug: `org-${user.id.substring(0, 8)}`,
    })
    .select('id')
    .single();

  if (orgError) throw orgError;

  // Add user to the new org
  await supabase
    .from('organization_members')
    .insert({
      organization_id: org.id,
      user_id: user.id,
      status: 'active'
    });

  return org.id;
}

export async function getJobs() {
  const supabase = await createClient();
  
  try {
    const orgId = await getUserOrganization();

    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('organization_id', orgId)
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    // Return empty array if not logged in or no org, so page doesn't crash on build
    return [];
  }
}

export async function createJob(formData: FormData) {
  const supabase = await createClient();
  const orgId = await getUserOrganization();

  const data = {
    organization_id: orgId,
    title: formData.get('title') as string,
    department: formData.get('department') as string,
    location: formData.get('location') as string,
    employment_type: formData.get('employment_type') as string,
    experience_required: formData.get('experience_required') as string,
    salary_range: formData.get('salary_range') as string,
    description: formData.get('description') as string,
    status: 'Open'
  };

  const { error } = await supabase
    .from('jobs')
    .insert(data);

  if (error) throw new Error(error.message);

  revalidatePath('/jobs');
  return { success: true };
}
