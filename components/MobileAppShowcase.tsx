import { Smartphone, Touchpad, Bell, WifiOff, FileText, Recycle, Thermometer, Droplets, AlertTriangle, Home, BarChart, Settings } from 'lucide-react';
import Image from 'next/image';

export default function MobileAppShowcase() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background-light overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary-dark">
              <Smartphone className="h-4 w-4" />
              Disponible sur iOS & Android
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-text-main lg:text-5xl">
              Une application <br /> <span className="text-primary">ultra-simple</span>
            </h2>
            <p className="text-lg text-text-main/70">
              Gérez votre exploitation durable directement depuis votre poche. Suivi en temps réel, alertes météo et conseils agronomiques, conçus pour être utilisés sur le terrain, même avec des gants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm text-text-main">
                  <Touchpad className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Interface Intuitive</h4>
                  <p className="text-sm text-text-main/60">Pas de formation requise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm text-text-main">
                  <Bell className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Alertes Intelligentes</h4>
                  <p className="text-sm text-text-main/60">Notifié au bon moment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm text-text-main">
                  <WifiOff className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Mode Hors-Ligne</h4>
                  <p className="text-sm text-text-main/60">Fonctionne partout.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm text-text-main">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Exports PDF</h4>
                  <p className="text-sm text-text-main/60">Pour vos certifications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 relative">
            {/* Abstract blobs behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-[300px] h-[600px] bg-background-dark rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>
              {/* Screen Content */}
              <div className="w-full h-full bg-background-light flex flex-col relative overflow-hidden">
                {/* App Header */}
                <div className="p-6 pt-12 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Bonjour,</p>
                    <p className="font-bold text-lg text-text-main">Ferme du Val</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIpZ3jl3CobJ24mRU7SeUYHPOoPo3qunWC8-TUNp-kX5BIcqPT9_JwwEFmQ4qdPdqE54FDR3Lpb1SPHbgXbP-zAcnBrY-0iO3PyPXJ4gfZ4jolCVvka81daYovyfd15qBIpptQi7egj_tVP5Ov6FGSd9konC-kSVTLAKQRrzd-Zjcjw1fu0T-vv3mPEL0jwh-ycPCaFf_4RGIaCQzPjK5xxt15QtVBNZM_ChwKbdP899V5W-orQIM_pksKOytbCVngkU66xe9We1s"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* App Body */}
                <div className="px-6 space-y-4 overflow-y-auto pb-6">
                  {/* Status Card */}
                  <div className="bg-primary p-5 rounded-2xl text-background-dark shadow-lg shadow-primary/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-white/20 p-2 rounded-lg">
                         <Recycle className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold bg-background-dark/10 px-2 py-1 rounded">Actif</span>
                    </div>
                    <p className="text-sm opacity-80">Cycle de compostage</p>
                    <h3 className="text-2xl font-bold">J-4</h3>
                    <div className="mt-3 h-1.5 bg-background-dark/10 rounded-full overflow-hidden">
                      <div className="h-full bg-background-dark w-[80%] rounded-full"></div>
                    </div>
                  </div>
                  {/* Grid Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2">
                      <Thermometer className="h-6 w-6 text-primary-dark" />
                      <p className="font-bold text-text-main">58°C</p>
                      <p className="text-xs text-gray-400">Température</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2">
                      <Droplets className="h-6 w-6 text-blue-500" />
                      <p className="font-bold text-text-main">45%</p>
                      <p className="text-xs text-gray-400">Humidité</p>
                    </div>
                  </div>
                  {/* Alert Item */}
                  <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl flex gap-3 items-center">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    <div>
                      <p className="text-sm font-bold text-yellow-900">Brassage requis</p>
                      <p className="text-xs text-yellow-700">Tas n°2 - Zone Sud</p>
                    </div>
                  </div>
                </div>
                {/* Bottom Nav */}
                <div className="mt-auto bg-white border-t border-gray-100 p-4 flex justify-around text-gray-400">
                  <Home className="h-6 w-6 text-primary" />
                  <BarChart className="h-6 w-6" />
                  <Settings className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
