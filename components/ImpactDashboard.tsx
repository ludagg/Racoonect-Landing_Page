'use client';

import { ArrowRight, Recycle, CloudOff, Euro, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ImpactDashboard() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background-dark text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-2">Impact Mesurable</h2>
            <p className="text-gray-400">Suivez vos indicateurs clés de performance environnementale et économique.</p>
          </div>
          <button className="text-primary hover:text-primary-light font-medium flex items-center gap-1 transition-colors cursor-pointer group">
            Voir le rapport complet <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={item} className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">Déchets valorisés</p>
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">1,200 <span className="text-xl font-normal text-gray-500">Tonnes</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+15% ce mois</span>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">CO2 Évité</p>
              <CloudOff className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">450 <span className="text-xl font-normal text-gray-500">Tonnes</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+8% vs année N-1</span>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-medium">Économies réalisées</p>
              <Euro className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl font-bold tracking-tight mb-2">15k <span className="text-xl font-normal text-gray-500">€</span></p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>+12% ROI estimé</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
