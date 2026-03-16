"use client";

import { use } from 'react';
import { agriculteurs, biogazHistoryRachid } from '@/data/mock';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowLeft, MapPin, Calendar, Clock, Edit2, Plus, Camera, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FarmerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const farmer = agriculteurs.find(f => f.id === id);

  if (!farmer) return <div>Agriculteur non trouvé</div>;

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-6">
        <Link href="/admin/dashboard" className="p-4 bg-white rounded-2xl shadow-sm text-background-dark hover:scale-110 transition-transform">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h2 className="text-4xl font-black text-background-dark tracking-tighter">{farmer.name}</h2>
          <div className="flex items-center gap-4 text-text-secondary font-bold mt-1 uppercase tracking-widest text-xs">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {farmer.location}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {farmer.age} ans</span>
            <span className="flex items-center gap-2 text-primary font-black shadow-sm bg-primary-light px-2 py-1 rounded-full">{farmer.surface}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Stats & History */}
        <div className="lg:col-span-2 space-y-12">
          {/* Compost History Graph */}
          <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex flex-col gap-8 group">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black tracking-tighter">Historique Compost</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary" /> <span className="text-xs font-bold text-gray-400">Température</span></div>
              </div>
            </div>

            <div className="h-80 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={biogazHistoryRachid}>
                  <defs>
                    <linearGradient id="colorTempAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#13ec13" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#13ec13" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 'black', fill: '#0d1b0d' }} />
                  <YAxis hide domain={[0, 20]} />
                  <Tooltip
                    cursor={{ stroke: '#13ec13', strokeWidth: 2, strokeDasharray: '5 5' }}
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '20px' }}
                  />
                  <Area type="monotone" dataKey="volume" stroke="#13ec13" strokeWidth={6} fillOpacity={1} fill="url(#colorTempAdmin)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Visits History Table */}
          <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black tracking-tighter">Historique des visites</h3>
              <button className="bg-primary text-background-dark p-3 rounded-2xl shadow-lg shadow-primary/20 hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm px-6">
                <Plus className="w-5 h-5" />
                Planifier
              </button>
            </div>

            <div className="space-y-4">
              {[
                { date: '15 Mai 2024', observer: 'Ikram', obs: 'Tas bien aéré, montée thermique parfaite.', photos: 2 },
                { date: '28 Avr 2024', observer: 'Ikram', obs: 'Besoin d\'arrosage, humidité tombée à 40%.', photos: 1 },
                { date: '10 Avr 2024', observer: 'Ikram', obs: 'Installation capteur #4521 effectuée.', photos: 3 },
              ].map((visit, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-background-light rounded-[32px] gap-6 group hover:bg-white hover:shadow-xl hover:scale-105 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-white rounded-3xl flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] font-black text-gray-300 uppercase">{visit.date.split(' ')[1]}</span>
                      <span className="text-2xl font-black text-background-dark leading-none mt-1">{visit.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <p className="font-black text-background-dark uppercase text-xs tracking-widest">{visit.observer}</p>
                      <p className="text-text-secondary mt-1 font-medium leading-relaxed">{visit.obs}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-end md:self-center">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-xs font-black shadow-sm">
                      <Camera className="w-4 h-4 text-primary" />
                      {visit.photos} photos
                    </div>
                    <button className="p-3 bg-white rounded-xl shadow-sm hover:text-primary transition-colors">
                      <FileText className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Fast Actions */}
        <div className="space-y-8">
          <div className="bg-background-dark text-white rounded-[48px] p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tighter">Profil Terrain</h3>
              <p className="text-white/40 text-xs font-black uppercase tracking-widest">Informations techniques</p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Surface totale', value: farmer.surface },
                { label: 'Cultures principales', value: farmer.cultures },
                { label: 'Capteur ID', value: '#4521-X' },
                { label: 'Installation', value: '10/04/2024' },
              ].map((info, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-sm text-white/40 font-bold">{info.label}</span>
                  <span className="text-sm font-black text-primary">{info.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-white text-background-dark py-5 rounded-3xl font-black text-center flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-black/20">
              <Edit2 className="w-5 h-5" />
              Modifier les infos
            </button>
          </div>

          <div className="bg-primary-light rounded-[48px] p-10 flex flex-col gap-6">
             <h4 className="text-xl font-black text-primary tracking-tighter leading-none">Status actuel</h4>
             <div className="flex items-center gap-4 bg-white p-6 rounded-[32px] shadow-sm">
                <div className="w-16 h-16 rounded-3xl bg-primary-light flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Compostage</p>
                  <p className="text-xl font-black text-background-dark">Fermentation Active</p>
                </div>
             </div>
             <div className="flex items-center gap-4 bg-white p-6 rounded-[32px] shadow-sm">
                <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Production Biogaz</p>
                  <p className="text-xl font-black text-background-dark">Optimale (1.2m³/j)</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Leaf(props: any) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.36 12 14.1 14 12c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    </svg>
  );
}

function Flame(props: any) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
