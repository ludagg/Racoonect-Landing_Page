"use client";

import { agriculteurs, globalStats } from '@/data/mock';
import { Users, Leaf, Wind, Wallet, Search, Filter, ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: 'Agriculteurs suivis', value: globalStats.totalFarmers, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Compost produit', value: `${globalStats.totalCompost}T`, icon: Leaf, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'CO2 évité', value: `${globalStats.co2Avoided}t`, icon: Wind, color: 'text-primary', bg: 'bg-primary-light' },
    { label: 'Économies générées', value: `${globalStats.totalSavings} DH`, icon: Wallet, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-background-dark tracking-tighter">Tableau de bord</h2>
        <p className="text-text-secondary font-medium">Suivi global de l'impact Racoonect</p>
      </div>

      {/* Global Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col gap-4 group hover:shadow-xl transition-all hover:scale-105">
            <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-background-dark mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Farmer List Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-2xl font-black text-background-dark tracking-tighter">Liste des agriculteurs</h3>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-white border-2 border-transparent focus:border-primary outline-none rounded-2xl py-3 pl-12 pr-6 text-sm font-bold shadow-sm transition-all w-full md:w-64"
              />
            </div>
            <button className="bg-white p-3 rounded-2xl border-2 border-transparent hover:border-primary transition-all shadow-sm">
              <Filter className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agriculteurs.map((farmer) => (
            <div key={farmer.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col group">
              <div className="p-8 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-black text-background-dark tracking-tight">{farmer.name}</h4>
                    <div className="flex items-center gap-2 text-text-secondary text-sm font-bold">
                      <MapPin className="w-4 h-4" />
                      {farmer.location}
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full shadow-sm ${
                    farmer.status === 'green' ? 'bg-primary ring-4 ring-primary-light' :
                    farmer.status === 'orange' ? 'bg-orange-400 ring-4 ring-orange-100' :
                    'bg-red-400 ring-4 ring-red-100'
                  }`} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-light p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Compost</p>
                    <p className="text-lg font-black text-background-dark">{farmer.compostDay}/{farmer.compostTotalDays}j</p>
                  </div>
                  <div className="bg-background-light p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Biogaz</p>
                    <p className="text-lg font-black text-background-dark">{farmer.biogaz}m³</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm font-bold text-text-secondary border-t border-gray-50 pt-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  Prochaine visite : {farmer.nextVisit}
                </div>

                <Link
                  href={`/admin/agriculteurs/${farmer.id}`}
                  className="w-full bg-background-dark text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-primary hover:text-background-dark transition-all group-hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
                >
                  Voir la fiche
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
