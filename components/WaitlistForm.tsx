'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { joinWaitlist } from '@/app/actions/waitlist';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function WaitlistForm({ variant = 'primary' }: { variant?: 'primary' | 'white' }) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function action(formData: FormData) {
    setStatus('loading');
    const res = await joinWaitlist(formData);
    if (res.error) {
      setStatus('error');
      setMessage(res.error);
    } else if (res.success && res.email) {
      setStatus('success');
      router.push(`/onboarding?email=${encodeURIComponent(res.email)}`);
    } else {
       setStatus('error');
       setMessage('Une erreur est survenue.');
    }
  }

  return (
    <form action={action} className="flex flex-col gap-2 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre adresse email"
          className={`flex-1 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary transition-all ${
            variant === 'white'
              ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20'
              : 'bg-white border border-gray-200 text-text-main focus:border-primary'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`flex h-12 items-center justify-center rounded-lg px-6 text-sm font-bold transition-all shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
            variant === 'white'
              ? 'bg-primary text-background-dark hover:bg-primary-dark shadow-primary/20'
              : 'bg-primary text-background-dark hover:bg-primary-dark shadow-primary/20'
          }`}
        >
          {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : "Rejoindre la liste"}
        </button>
      </div>
      {status === 'error' && (
        <div className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
          <AlertCircle className="h-4 w-4" />
          {message}
        </div>
      )}
    </form>
  );
}
