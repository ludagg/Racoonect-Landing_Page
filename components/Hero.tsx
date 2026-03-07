import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative px-4 pt-8 pb-16 lg:px-20 lg:pt-12">
      <div className="mx-auto max-w-7xl rounded-2xl overflow-hidden relative min-h-[560px] flex flex-col justify-end p-8 lg:p-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAM_nniT73e2wAsWAgGm1LDPBt5AszHypPXgawhegRYNfAr6309rcqdvEZojj-5hfN-HTY3D5IViPBQONYQf21gZgkpbUY9KTSj12e50qrc06bdtQZO44R9_uJBNmynxKeUG8oMAoDwrpS159K4ZpVnGQLOtK9tP462Y97vpD7TYNQbqTzPjvBiNw_6BMd7fMaBgP18dmD8pE9thbJK5V2tIZR4NGpq4y5D02PeyFguZxXNwziOUMwUEd2s_dw_woEdqBgED-rmmM"
            alt="Fertile soil close up in hands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary border border-primary/30">
            <BadgeCheck className="h-4 w-4" />
            AgriTech Innovation 2024
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl mb-6">
            Transformez vos déchets <br />en <span className="text-primary">or vert</span>.
          </h1>
          <p className="text-lg font-medium text-gray-200 mb-8 max-w-lg leading-relaxed">
            RACOONS valorise la biomasse pour une agriculture durable. Produisez votre propre compost et biogaz, réduisez vos coûts et régénérez vos sols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-background-dark transition-all hover:bg-primary-dark shadow-[0_0_20px_rgba(19,236,19,0.3)] cursor-pointer">
              Découvrir la solution
            </button>
            <button className="flex h-12 items-center justify-center rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              Voir la démo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
