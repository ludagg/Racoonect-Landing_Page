import { ArrowRight, Recycle, CloudOff, Euro, TrendingUp } from 'lucide-react';

export default function ImpactDashboard() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background-dark text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-2">Impact Mesurable</h2>
            <p className="text-gray-400">Suivez vos indicateurs clés de performance environnementale et économique.</p>
          </div>
          <button className="text-primary hover:text-primary-light font-medium flex items-center gap-1 transition-colors cursor-pointer">
            Voir le rapport complet <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">Déchets valorisés</p>
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">1,200 <span className="text-xl font-normal text-gray-500">Tonnes</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+15% ce mois</span>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">CO2 Évité</p>
              <CloudOff className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">450 <span className="text-xl font-normal text-gray-500">Tonnes</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+8% vs année N-1</span>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">Économies réalisées</p>
              <Euro className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">15k <span className="text-xl font-normal text-gray-500">€</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+12% ROI estimé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
