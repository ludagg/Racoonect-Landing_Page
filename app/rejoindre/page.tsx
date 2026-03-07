'use client';

import { useState, use } from 'react';
import { useSearchParams } from 'next/navigation';
import { completeRegistration } from '@/app/actions/waitlist';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RejoindrePage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const res = await completeRegistration(formData);
    if (res.error) {
      setStatus('error');
      setMessage(res.error);
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-screen flex-col bg-background-light">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-text-main mb-4">Inscription Réussie !</h1>
            <p className="text-gray-600 mb-8">
              Merci de nous avoir rejoint. Nous avons bien reçu vos informations et nous vous contacterons bientôt pour vous donner accès à Racoonect.
            </p>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-background-dark hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-primary p-6 text-background-dark">
            <Link href="/" className="inline-flex items-center text-sm font-medium mb-4 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" /> Retour
            </Link>
            <h1 className="text-2xl font-bold">Dites-nous en plus</h1>
            <p className="text-background-dark/80 text-sm">Aidez-nous à personnaliser votre expérience Racoonect.</p>
          </div>

          <form action={handleSubmit} className="p-8 space-y-6">
            <input type="hidden" name="email" value={email} />

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-text-main">Email</label>
              <input
                type="email"
                disabled
                value={email}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="full_name" className="text-sm font-semibold text-text-main">Nom Complet</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                placeholder="Ex: Jean Dupont"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="farm_type" className="text-sm font-semibold text-text-main">Type d&apos;activité</label>
                <select
                  id="farm_type"
                  name="farm_type"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Agriculteur">Agriculteur</option>
                  <option value="Éleveur">Éleveur</option>
                  <option value="Maraîcher">Maraîcher</option>
                  <option value="Coopérative">Coopérative</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="location" className="text-sm font-semibold text-text-main">Localisation</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="Ville, Région"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="main_interest" className="text-sm font-semibold text-text-main">Quel est votre intérêt principal ?</label>
              <select
                id="main_interest"
                name="main_interest"
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Sélectionnez...</option>
                <option value="Valorisation de biomasse">Valorisation de biomasse</option>
                <option value="Fertilisants naturels">Fertilisants naturels</option>
                <option value="Monitoring de sols">Monitoring de sols</option>
                <option value="Optimisation de rendement">Optimisation de rendement</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                <AlertCircle className="h-5 w-5 shrink-0" />
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-background-dark hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Envoi en cours...
                </>
              ) : (
                "Finaliser l'inscription"
              )}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
