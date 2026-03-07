'use server'
import { supabase } from '@/lib/supabase';

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  if (!email) return { error: 'Email requis' };

  return { success: true, email };
}

export async function completeOnboarding(formData: FormData) {
  const email = formData.get('email') as string;
  const full_name = formData.get('full_name') as string;
  const farm_type = formData.get('farm_type') as string;
  const location = formData.get('location') as string;
  const main_interest = formData.get('main_interest') as string;

  if (!email) return { error: 'Email requis' };

  // Fallback if supabase is not configured properly
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || (!process.env.SUPABASE_SECRET_KEY && !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) {
     console.warn('Supabase credentials missing. Mocking waitlist join for:', email);
     // Simulate network delay
     await new Promise(resolve => setTimeout(resolve, 800));
     return { success: true };
  }

  try {
    const { error } = await supabase
      .from('waitlist')
      .upsert([
        {
          email,
          full_name,
          farm_type,
          location,
          main_interest
        }
      ], { onConflict: 'email' });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || 'Une erreur est survenue' };
  }
}
