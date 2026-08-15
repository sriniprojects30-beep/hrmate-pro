'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

async function getUserOrganization() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Unauthorized');

  // Find user's organization
  const { data: membership } = await supabase
    .from('organization_members')
    .select('organization_id')
    .eq('user_id', user.id)
    .single();

  if (membership?.organization_id) {
    return membership.organization_id;
  }

  // If no org exists, they shouldn't be creating jobs, but fallback just in case
  throw new Error('No organization found');
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
