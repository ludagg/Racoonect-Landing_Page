"use client";

import { agriculteurs, biogazHistoryRachid } from '@/data/mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Flame, Wallet, Soup, ArrowLeft, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function FarmerBiogaz() {
  const rachid = agriculteurs.find(f => f.id === '1');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 py-4">
        <Link href="/farmer/dashboard" className="p-2 bg-white rounded-full shadow-sm text-text-main">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-2xl font-bold">Suivi du Biogaz</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase">Volume Produit</p>
          <p className="text-3xl font-bold text-primary">{rachid!.biogaz} m³</p>
          <p className="text-xs text-gray-400">Ce mois-ci</p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase">Économies</p>
          <p className="text-3xl font-bold text-primary">{rachid!.economies} DH</p>
          <p className="text-xs text-gray-400">Équivalent gaz</p>
        </div>
      </div>

      {/* Equivalent Card */}
      <div className="bg-background-dark text-white rounded-3xl p-6 shadow-xl flex items-center gap-6">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
          <Soup className="w-10 h-10 text-white" />
        </div>
        <div>
          <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Cuisine Gratuite</p>
          <p className="text-3xl font-bold">6 Jours</p>
          <p className="text-white/40 text-xs">de repas complets pour la famille</p>
        </div>
      </div>

      {/* Graphique Historique */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Historique 6 mois</h3>
          <span className="text-xs text-gray-400 font-bold uppercase">Volume (m³)</span>
        </div>

        <div className="h-64 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={biogazHistoryRachid}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip
                cursor={{ fill: '#f6f8f6' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="volume" fill="#13ec13" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact CO2 */}
      <div className="bg-primary-light rounded-3xl p-6 border border-primary/10 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-primary">Impact Écologique</h3>
          <p className="text-primary/70 font-medium">
            Vous avez évité l'émission de <span className="font-bold">0.8 tonnes de CO2</span> ce mois-ci.
          </p>
        </div>
      </div>
    </div>
  );
}
