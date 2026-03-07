'use server'
import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  if (!email) return { error: 'Email requis' };

  // Instead of inserting here, we'll redirect to the full registration page
  // We use a server action to potentially do some light validation or logging if needed
  // but for now, let's just redirect.
  redirect(`/rejoindre?email=${encodeURIComponent(email)}`);
}

export async function completeRegistration(formData: FormData) {
  const email = formData.get('email') as string;
  const full_name = formData.get('full_name') as string;
  const farm_type = formData.get('farm_type') as string;
  const location = formData.get('location') as string;
  const main_interest = formData.get('main_interest') as string;

  if (!email) return { error: 'Email requis' };

  try {
    const { error } = await supabase
      .from('waitlist')
      .upsert({
        email,
        full_name,
        farm_type,
        location,
        main_interest,
      }, { onConflict: 'email' });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || 'Une erreur est survenue' };
  }
}
