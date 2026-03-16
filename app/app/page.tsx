import Link from 'next/link';
import { User, ShieldCheck } from 'lucide-react';

export default function AppSelectionPage() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-text-main mb-2">Bienvenue sur Racoonect</h1>
          <p className="text-text-secondary text-lg">Choisissez votre espace pour continuer</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10">
          <Link
            href="/farmer/dashboard"
            className="group flex flex-col items-center p-8 bg-white rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-sm hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-main">Je suis agriculteur</h2>
            <p className="text-text-secondary mt-2">Suivez votre compost et votre biogaz en temps réel</p>
          </Link>

          <Link
            href="/admin/dashboard"
            className="group flex flex-col items-center p-8 bg-white rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-sm hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-background-dark/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-10 h-10 text-background-dark" />
            </div>
            <h2 className="text-2xl font-bold text-text-main">Je suis l'équipe RACOONS</h2>
            <p className="text-text-secondary mt-2">Gérez les agriculteurs et consultez les rapports d'impact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
