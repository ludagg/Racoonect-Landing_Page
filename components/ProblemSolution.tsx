import Image from 'next/image';
import { X, Check } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background-light">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-main lg:text-5xl">
              L&apos;agriculture de demain est <span className="text-primary relative inline-block">
                circulaire
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>
            </h2>
            <p className="text-lg text-text-main/80 leading-relaxed">
              Passez d&apos;une gestion coûteuse des déchets à une production de ressources précieuses.
              Le modèle linéaire &quot;extraire, produire, jeter&quot; épuise nos sols. RACOONS vous accompagne vers un modèle régénératif.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <X className="h-4 w-4" />
                </div>
                <span className="text-text-main font-medium">Coûts élevés des intrants chimiques</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-text-main font-medium">Autonomie en fertilisants naturels</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-text-main font-medium">Revenus complémentaires via le biogaz</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCUYo0McbmOpxesjF2ouVhz2SvQX_CrglkB-kvLMgw-OfllmJ9Eo5KqiMwLSTPMTx4ukN68ALddIRoLGCF9239IRSVNUdJuc5MzK1d-XGQM8qRiYj4q9PbtGPAgnESWq6X3xArZMfKpHXpQnksdFGvJAjm9Pnh2_s8ZXXMgVytZFSbqiRQKJWSnUG6FWm2TkMzZIaLTYrArG1ggW2zkoycULLWDe5sy7FSWRpowIYl8H_MUy8NxgnfW8pUulv0dM1LPmIpbPCdahU"
                    alt="Wheat field sunset"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">Sols vivants</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjSyBvXDnsridqr_vZ7c6rCxIr0hFhw9vjZ5JRgt3hoUQ5pdYUG9MGgiJyCskVUE1FXlERYf3eJi-HcmvTnyXkt3RCOiPz6sPOW_gxAXCz01ZzaiIKpBzZQibn4IhHGtKj-oBDQOweeouM2CXNxHuYOjCcRjPzgbqAHUb8DlUlYYNo-U_GpAKontfjx7e5jwCg8lbieYnbSSU9F9JtJfMTZ7OK6JtnkmZyBBfywFoGvIeazaGj2m_s-rBPpVqx8kxYPb9nCl0sxA"
                    alt="Sprout growing in soil"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">Croissance saine</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/10"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
