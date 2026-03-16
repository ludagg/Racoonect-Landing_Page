"use client";

import { conseilsRachid } from '@/data/mock';
import { ArrowLeft, MessageCircle, MoreVertical } from 'lucide-react';
import Link from 'next/link';

export default function FarmerConseils() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 py-4">
        <Link href="/farmer/dashboard" className="p-2 bg-white rounded-full shadow-sm text-text-main">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-2xl font-bold">Vos Conseils</h2>
      </div>

      <div className="flex flex-col gap-4">
        {conseilsRachid.map((conseil) => (
          <div key={conseil.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 active:scale-95 transition-transform cursor-pointer">
            <div className="w-14 h-14 bg-background-light rounded-2xl flex items-center justify-center text-3xl shrink-0">
              {conseil.icon}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400 font-bold uppercase">{conseil.date}</p>
                <MoreVertical className="w-4 h-4 text-gray-300" />
              </div>
              <p className="font-bold text-text-main leading-tight">{conseil.text}</p>
              <button className="mt-3 bg-primary-light text-primary py-2 px-4 rounded-xl text-sm font-bold self-start active:bg-primary active:text-white transition-colors">
                {conseil.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-background-dark text-white rounded-3xl shadow-xl flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-primary" />
          <h3 className="font-bold">Besoin d'aide ?</h3>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Ikram est disponible pour répondre à vos questions par téléphone ou message direct.
        </p>
        <button className="w-full bg-primary text-background-dark py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
          Appeler Ikram 📞
        </button>
      </div>
    </div>
  );
}
