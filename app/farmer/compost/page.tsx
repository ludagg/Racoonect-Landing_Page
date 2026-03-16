"use client";

import { agriculteurs, tempHistoryRachid } from '@/data/mock';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Thermometer, Droplets, Lightbulb, History, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FarmerCompost() {
  const rachid = agriculteurs.find(f => f.id === '1');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 py-4">
        <Link href="/farmer/dashboard" className="p-2 bg-white rounded-full shadow-sm text-text-main">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-2xl font-bold">Suivi du Compost</h2>
      </div>

      {/* Graphique Température */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Thermometer className="w-6 h-6 text-red-500" />
          <h3 className="font-bold">Évolution Température</h3>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tempHistoryRachid}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="day" hide />
              <YAxis hide domain={[20, 70]} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelFormatter={(label) => `Jour ${label}`}
              />
              <Area type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-xs text-gray-400 font-medium">Historique des 30 derniers jours</p>
      </div>

      {/* Graphique Humidité */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Droplets className="w-6 h-6 text-blue-500" />
          <h3 className="font-bold">Évolution Humidité</h3>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tempHistoryRachid}>
              <defs>
                <linearGradient id="colorHum" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="day" hide />
              <YAxis hide domain={[20, 80]} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelFormatter={(label) => `Jour ${label}`}
              />
              <Area type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorHum)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-xs text-gray-400 font-medium">Objectif cible : 50% - 60%</p>
      </div>

      {/* Conseil IA / Équipe */}
      <div className="bg-primary-light rounded-3xl p-6 border border-primary/10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-primary">Conseil du Jour</h3>
        </div>
        <p className="text-primary/80 font-medium leading-relaxed">
          Le plateau de température est maintenu. C'est le moment idéal pour arroser légèrement afin de ne pas descendre sous les 40% d'humidité.
        </p>
      </div>

      {/* Historique simple */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <History className="w-6 h-6 text-gray-400" />
          <h3 className="font-bold">Composts Précédents</h3>
        </div>

        <div className="space-y-4">
          {[
            { date: 'Avril 2024', yield: '1.2 tonnes', quality: 'Excellente' },
            { date: 'Mars 2024', yield: '0.9 tonnes', quality: 'Bonne' },
          ].map((h, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-background-light rounded-2xl">
              <div>
                <p className="font-bold text-sm">{h.date}</p>
                <p className="text-xs text-gray-400">{h.quality}</p>
              </div>
              <p className="font-bold text-primary">{h.yield}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
