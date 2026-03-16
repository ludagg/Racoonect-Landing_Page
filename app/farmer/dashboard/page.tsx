"use client";

import { agriculteurs, conseilsRachid } from '@/data/mock';
import { Thermometer, Droplets, ArrowRight, Flame, Wallet, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function FarmerDashboard() {
  const rachid = agriculteurs.find(f => f.id === '1');
  const progress = (rachid!.compostDay / rachid!.compostTotalDays) * 100;
  const daysLeft = rachid!.compostTotalDays - rachid!.compostDay;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 py-4">
        <h2 className="text-3xl font-bold text-text-main">Bonjour Rachid 👋</h2>
        <p className="text-text-secondary">Voici le statut de vos installations</p>
      </div>

      {/* Alerte si besoin */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
        <div className="flex flex-col">
          <p className="text-orange-800 font-bold">Action requise</p>
          <p className="text-orange-700 text-sm">Ton tas a besoin de brassage aujourd'hui</p>
        </div>
      </div>

      {/* Compost Status Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Votre Compost</h3>
          <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-bold">
            {rachid!.compostDay}/{rachid!.compostTotalDays} jours
          </span>
        </div>

        <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider">
          <span>Démarrage</span>
          <span className="text-primary">Fermentation</span>
          <span>Maturation</span>
          <span>Prêt ✅</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background-light p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Thermometer className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Température</p>
              <p className="text-xl font-bold">{rachid!.temp}°C</p>
            </div>
          </div>
          <div className="bg-background-light p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Droplets className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Humidité</p>
              <p className="text-xl font-bold">{rachid!.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="text-center py-2 bg-primary-light text-primary font-bold rounded-2xl">
          Plus que {daysLeft} jours !
        </div>
      </div>

      {/* Biogaz Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Production Biogaz</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-4 mt-2">
          <div>
            <p className="text-xs text-gray-500">Ce mois-ci</p>
            <p className="text-2xl font-bold text-primary">{rachid!.biogaz} m³</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Économies</p>
            <p className="text-2xl font-bold text-primary">{rachid!.economies} DH</p>
          </div>
        </div>
      </div>

      {/* Alert Card/Link */}
      <Link href="/farmer/conseils" className="bg-background-dark text-white rounded-3xl p-6 flex justify-between items-center shadow-lg active:scale-95 transition-transform">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-bold">Nouveau conseil de l'équipe</p>
            <p className="text-xs text-white/60">Il y a 2 heures</p>
          </div>
        </div>
        <ArrowRight className="w-6 h-6" />
      </Link>
    </div>
  );
}

function Bell(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
