"use client";

import { agriculteurs, biogazHistoryRachid, globalStats } from '@/data/mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell, PieChart, Pie } from 'recharts';
import { FileDown, Printer, Download, Filter, Calendar, BarChart3, Wind, Leaf, Wallet } from 'lucide-react';

export default function AdminRapports() {
  const COLORS = ['#13ec13', '#102210', '#4c9a4c', '#e7fce7', '#0ea80e'];

  return (
    <div className="space-y-12 print:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 print:hidden">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-background-dark tracking-tighter uppercase leading-none">Centre de rapports</h2>
          <p className="text-text-secondary font-medium tracking-wide">Analyse d'impact et exportations partenaires</p>
        </div>
        <div className="flex items-center gap-4">
           <button
             onClick={() => window.print()}
             className="bg-white border-4 border-background-dark text-background-dark py-5 px-10 rounded-3xl font-black shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
           >
             <Printer className="w-6 h-6" />
             Imprimer PDF
           </button>
           <button className="bg-background-dark text-white py-5 px-10 rounded-3xl font-black shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
             <Download className="w-6 h-6 text-primary" />
             Exporter CSV
           </button>
        </div>
      </div>

      {/* Hidden headers for print version only */}
      <div className="hidden print:flex flex-col gap-8 pb-12 border-b-4 border-primary">
         <div className="flex justify-between items-center">
            <h1 className="text-6xl font-black text-primary tracking-tighter">RACOONECT</h1>
            <div className="text-right">
               <p className="text-xl font-black text-background-dark tracking-tighter">RAPPORT D'IMPACT AGRI-BIO</p>
               <p className="text-sm font-bold text-gray-400">PÉRIODE : MAI 2024</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center text-primary shadow-sm">
            <Leaf className="w-8 h-8" />
          </div>
          <p className="text-xs font-black text-gray-300 uppercase tracking-widest leading-none">Compost Total</p>
          <p className="text-4xl font-black text-background-dark tracking-tighter">{globalStats.totalCompost} T</p>
          <p className="text-xs font-bold text-primary bg-primary-light px-2 py-1 rounded-full self-start">+12% vs mois dernier</p>
        </div>
        <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
            <Wind className="w-8 h-8" />
          </div>
          <p className="text-xs font-black text-gray-300 uppercase tracking-widest leading-none">CO2 Évité</p>
          <p className="text-4xl font-black text-background-dark tracking-tighter">{globalStats.co2Avoided} t</p>
          <p className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-full self-start">+8% impact positif</p>
        </div>
        <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-400 shadow-sm">
            <Wallet className="w-8 h-8" />
          </div>
          <p className="text-xs font-black text-gray-300 uppercase tracking-widest leading-none">Économies (DH)</p>
          <p className="text-4xl font-black text-background-dark tracking-tighter">{globalStats.totalSavings}</p>
          <p className="text-xs font-bold text-orange-400 bg-orange-50 px-2 py-1 rounded-full self-start">Optimisation engrais</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* Monthly Production */}
         <div className="bg-white rounded-[64px] p-12 shadow-sm border border-gray-100 flex flex-col gap-10 print:shadow-none print:border-none">
            <div className="flex justify-between items-center">
               <h3 className="text-3xl font-black tracking-tighter leading-none">Compostage mensuel</h3>
               <div className="w-12 h-12 bg-background-light rounded-2xl flex items-center justify-center text-gray-300"><BarChart3 className="w-6 h-6" /></div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={biogazHistoryRachid}>
                  <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 'black', fill: '#0d1b0d' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 'bold' }} />
                  <Tooltip
                    cursor={{ fill: '#f6f8f6' }}
                    contentStyle={{ borderRadius: '32px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', padding: '24px' }}
                  />
                  <Bar dataKey="volume" fill="#13ec13" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Cumulative CO2 */}
         <div className="bg-white rounded-[64px] p-12 shadow-sm border border-gray-100 flex flex-col gap-10 print:shadow-none print:border-none">
            <div className="flex justify-between items-center">
               <h3 className="text-3xl font-black tracking-tighter leading-none">Impact CO2 cumulé</h3>
               <div className="w-12 h-12 bg-background-light rounded-2xl flex items-center justify-center text-gray-300"><Wind className="w-6 h-6" /></div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={biogazHistoryRachid}>
                  <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 'black', fill: '#0d1b0d' }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ borderRadius: '32px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', padding: '24px' }}
                  />
                  <Line type="monotone" dataKey="volume" stroke="#13ec13" strokeWidth={8} dot={{ r: 10, fill: '#13ec13', strokeWidth: 4, stroke: '#fff' }} activeDot={{ r: 14 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Savings Distribution */}
         <div className="bg-background-dark text-white rounded-[64px] p-12 shadow-2xl flex flex-col gap-10 lg:col-span-2 print:shadow-none">
            <h3 className="text-3xl font-black text-primary tracking-tighter leading-none">Répartition des économies par agriculteur</h3>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agriculteurs} layout="vertical" margin={{ left: 40, right: 40 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#fff', fontWeight: 'black', fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ borderRadius: '24px', border: 'none', background: '#fff', color: '#000', padding: '20px' }}
                  />
                  <Bar dataKey="economies" radius={[0, 20, 20, 0]} barSize={40}>
                    {agriculteurs.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#13ec13' : '#4c9a4c'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* Footer for PDF only */}
      <div className="hidden print:flex justify-between items-center pt-12 border-t-2 border-gray-100">
         <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Généré automatiquement par Racoonect OS</p>
         <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Page 1 sur 1</p>
      </div>
    </div>
  );
}
