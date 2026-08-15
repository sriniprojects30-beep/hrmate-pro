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

export async function getCandidates() {
  const supabase = await createClient();
  const orgId = await getUserOrganization();

  const { data, error } = await supabase
    .from('candidates')
    .select('*')
    .eq('organization_id', orgId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

export async function createCandidate(formData: FormData) {
  const supabase = await createClient();
  const orgId = await getUserOrganization();

  const data = {
    organization_id: orgId,
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    location: formData.get('location') as string,
    current_company: formData.get('current_company') as string,
    current_position: formData.get('current_position') as string,
    experience_years: Number(formData.get('experience_years') || 0),
    status: 'New'
  };

  const { error } = await supabase
    .from('candidates')
    .insert(data);

  if (error) throw new Error(error.message);

  revalidatePath('/candidates');
  return { success: true };
}
