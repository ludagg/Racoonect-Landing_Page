'use server'
import { supabase } from '@/lib/supabase';

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
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
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') return { error: 'Cet email est déjà inscrit.' };
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || 'Une erreur est survenue' };
  }
}
