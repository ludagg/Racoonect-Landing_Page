import Link from 'next/link';
import { User, ShieldCheck, ChevronLeft, Leaf } from 'lucide-react';

export default function AppSelectionPage() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-main/50 hover:text-primary transition-colors mb-12"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <div className="mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-background-dark mx-auto mb-6">
            <Leaf className="h-7 w-7" />
          </div>
          <h1 className="text-4xl font-black text-text-main mb-4 tracking-tight lg:text-5xl">Espace Plateforme</h1>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Sélectionnez votre profil pour accéder à vos outils personnalisés et suivre votre impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link
            href="/farmer/dashboard"
            className="group flex flex-col items-center p-10 bg-white rounded-[2rem] border-2 border-transparent hover:border-primary transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-main mb-3">Espace Agriculteur</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Gérez votre production de compost, suivez vos capteurs de biogaz et accédez à vos conseils personnalisés.
            </p>
            <div className="mt-6 font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Accéder <ChevronLeft className="w-4 h-4 rotate-180" />
            </div>
          </Link>

          <Link
            href="/admin/dashboard"
            className="group flex flex-col items-center p-10 bg-white rounded-[2rem] border-2 border-transparent hover:border-background-dark transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="w-24 h-24 bg-background-dark/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-12 h-12 text-background-dark" />
            </div>
            <h2 className="text-2xl font-bold text-text-main mb-3">Espace Équipe</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Supervisez le réseau d&apos;agriculteurs, analysez les rapports d&apos;impact globaux et gérez les interventions.
            </p>
            <div className="mt-6 font-bold text-background-dark flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Accéder <ChevronLeft className="w-4 h-4 rotate-180" />
            </div>
          </Link>
        </div>

        <p className="mt-16 text-sm text-text-main/30">
          Besoin d&apos;aide ? Contactez l&apos;assistance Racoonect.
        </p>
      </div>
    </div>
  );
}
