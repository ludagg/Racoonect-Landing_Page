"use client";

import { agriculteurs } from '@/data/mock';
import { Calendar, MapPin, Clock, Plus, Filter, Search, CheckCircle2, AlertCircle, Camera } from 'lucide-react';
import { useState } from 'react';

export default function AdminVisites() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-background-dark tracking-tighter uppercase">Planification terrain</h2>
          <p className="text-text-secondary font-medium tracking-wide">Gérez les visites et collectez les observations</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-background-dark py-5 px-10 rounded-3xl font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
        >
          <Plus className="w-6 h-6" />
          Nouvelle visite
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-[48px] p-10 shadow-2xl border-4 border-primary/20 animate-in fade-in slide-in-from-top-4 duration-500">
          <h3 className="text-2xl font-black tracking-tighter mb-8 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary-light rounded-2xl flex items-center justify-center text-primary"><Plus className="w-6 h-6" /></div>
            Formulaire de visite rapide
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Agriculteur</label>
              <select className="w-full bg-background-light border-2 border-transparent focus:border-primary outline-none p-5 rounded-3xl font-bold shadow-sm transition-all appearance-none">
                {agriculteurs.map(f => <option key={f.id}>{f.name}</option>)}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Date de visite</label>
              <input type="date" className="w-full bg-background-light border-2 border-transparent focus:border-primary outline-none p-5 rounded-3xl font-bold shadow-sm transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Temp. Obs (°C)</label>
                  <input type="number" placeholder="62" className="w-full bg-background-light border-2 border-transparent focus:border-primary outline-none p-5 rounded-3xl font-bold shadow-sm transition-all" />
               </div>
               <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Humidité (%)</label>
                  <input type="number" placeholder="55" className="w-full bg-background-light border-2 border-transparent focus:border-primary outline-none p-5 rounded-3xl font-bold shadow-sm transition-all" />
               </div>
            </div>
            <div className="space-y-4">
               <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Photos terrain</label>
               <div className="w-full h-20 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center gap-3 text-gray-400 font-bold hover:border-primary hover:text-primary cursor-pointer transition-all">
                  <Camera className="w-6 h-6" />
                  Ajouter des photos
               </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Observations & Recommandations</label>
              <textarea placeholder="Décrivez l'état du tas et les conseils donnés..." className="w-full bg-background-light border-2 border-transparent focus:border-primary outline-none p-6 rounded-[32px] font-bold shadow-sm transition-all h-32" />
            </div>
            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
               <button type="button" onClick={() => setShowForm(false)} className="px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest text-gray-400 hover:text-red-500 transition-colors">Annuler</button>
               <button type="button" className="bg-background-dark text-white px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-primary hover:text-background-dark transition-all">Enregistrer la visite</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Planned Visits */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black tracking-tighter uppercase">Visites prévues</h3>
            <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-black">4</span>
          </div>

          <div className="space-y-6">
            {agriculteurs.slice(0, 4).map((f, i) => (
              <div key={f.id} className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex items-center gap-8 group hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 bg-background-light rounded-[32px] flex flex-col items-center justify-center shadow-sm">
                   <span className="text-[10px] font-black text-gray-300 uppercase leading-none">{f.nextVisit.split('-')[1]}</span>
                   <span className="text-3xl font-black text-background-dark leading-none mt-1">{f.nextVisit.split('-')[2]}</span>
                </div>
                <div className="flex-1">
                   <h4 className="text-xl font-black text-background-dark tracking-tight">{f.name}</h4>
                   <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-2 text-text-secondary text-xs font-bold">
                        <MapPin className="w-4 h-4" />
                        {f.location}
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary text-xs font-bold">
                        <Clock className="w-4 h-4" />
                        Matinée
                      </div>
                   </div>
                </div>
                <button className="p-4 bg-primary-light text-primary rounded-2xl hover:bg-primary hover:text-background-dark transition-all">
                   <CheckCircle2 className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity / Alert */}
        <div className="space-y-8">
           <h3 className="text-2xl font-black tracking-tighter uppercase">Dernières observations</h3>
           <div className="space-y-6">
              {[
                { name: 'Mohamed Khalil', obs: 'Tas prêt à être récolté.', type: 'success', time: 'Hier' },
                { name: 'Khadija Alami', obs: 'Mauvaise odeur signalée, besoin de brassage urgent.', type: 'alert', time: 'Il y a 2h' },
                { name: 'Youssef Mansouri', obs: 'Capteur déconnecté, à vérifier sur place.', type: 'alert', time: 'Il y a 5h' },
              ].map((obs, i) => (
                <div key={i} className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex items-start gap-6 border-l-8 border-l-transparent hover:border-l-primary transition-all group">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${obs.type === 'alert' ? 'bg-red-50 text-red-500' : 'bg-primary-light text-primary'}`}>
                      {obs.type === 'alert' ? <AlertCircle className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-black text-background-dark">{obs.name}</h4>
                        <span className="text-[10px] font-black text-gray-300 uppercase">{obs.time}</span>
                      </div>
                      <p className="text-sm text-text-secondary font-medium mt-1 leading-relaxed">{obs.obs}</p>
                   </div>
                </div>
              ))}
           </div>

           <div className="bg-background-dark text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Préparation Tournée</h4>
              <p className="text-white/60 text-sm font-medium mt-4 leading-relaxed">
                Optimisez votre trajet demain. Les 4 visites sont situées dans un rayon de 15km autour de Fès.
              </p>
              <button className="mt-8 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl transition-all border border-white/5">
                Ouvrir l'itinéraire 🗺️
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
