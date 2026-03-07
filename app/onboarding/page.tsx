'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { completeOnboarding } from '@/app/actions/waitlist';
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function OnboardingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const e = searchParams.get('email');
    if (e) {
      setEmail(e);
    }
  }, [searchParams]);

  async function action(formData: FormData) {
    setStatus('loading');
    const res = await completeOnboarding(formData);
    if (res.error) {
      setStatus('error');
      setMessage(res.error);
    } else {
      setStatus('success');
      setMessage('Votre profil a été enregistré avec succès !');
      // Redirect home after 3 seconds
      setTimeout(() => router.push('/'), 3000);
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl font-black text-text-main mb-4">Bienvenue parmi nous !</h2>
        <p className="text-lg text-text-main/60 mb-8 max-w-md">
          {message} Vous allez être redirigé vers l'accueil dans quelques instants.
        </p>
        <Link href="/" className="text-primary font-bold hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Retourner à l'accueil maintenant
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-main/60 hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Retour à l'accueil
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl font-black text-text-main mb-4">Finalisez votre inscription</h1>
        <p className="text-lg text-text-main/60">
          Aidez-nous à mieux comprendre vos besoins pour vous offrir la meilleure expérience possible.
        </p>
      </div>

      <form action={action} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <input type="hidden" name="email" value={email} />

        <div>
          <label htmlFor="full_name" className="block text-sm font-bold text-text-main mb-2">Nom complet</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            placeholder="Jean Dupont"
            className="w-full rounded-xl px-4 py-3 text-sm border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="farm_type" className="block text-sm font-bold text-text-main mb-2">Type d'exploitation</label>
            <select
              id="farm_type"
              name="farm_type"
              required
              className="w-full rounded-xl px-4 py-3 text-sm border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Sélectionnez...</option>
              <option value="Maraîchage">Maraîchage</option>
              <option value="Céréales">Céréales</option>
              <option value="Élevage">Élevage</option>
              <option value="Viticulture">Viticulture</option>
              <option value="Arboriculture">Arboriculture</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-bold text-text-main mb-2">Localisation (Ville/Région)</label>
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="Ex: Dakar, Sénégal"
              className="w-full rounded-xl px-4 py-3 text-sm border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="main_interest" className="block text-sm font-bold text-text-main mb-2">Votre intérêt principal</label>
          <select
            id="main_interest"
            name="main_interest"
            required
            className="w-full rounded-xl px-4 py-3 text-sm border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="">Sélectionnez...</option>
            <option value="Production de compost">Production de compost</option>
            <option value="Production de biogaz">Production de biogaz</option>
            <option value="Réduction des déchets">Réduction des déchets</option>
            <option value="Régénération des sols">Régénération des sols</option>
            <option value="Tous les aspects">Tous les aspects</option>
          </select>
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-500 font-medium bg-red-50 p-4 rounded-xl">
            <AlertCircle className="h-5 w-5" />
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full h-14 bg-primary text-background-dark font-black rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status === 'loading' ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            "Enregistrer mon profil"
          )}
        </button>
      </form>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-background-light">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-10 w-10 text-primary animate-spin" />
        </div>
      }>
        <OnboardingContent />
      </Suspense>
    </main>
  );
}
