'use client';

import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import { motion } from 'motion/react';

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary border border-primary/30"
          >
            <BadgeCheck className="h-4 w-4" />
            Projet Rab&apos;hack 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl mb-6"
          >
            Transformez vos déchets <br />en <span className="text-primary">or vert</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg font-medium text-gray-200 mb-8 max-w-lg leading-relaxed"
          >
            Racoonect valorise la biomasse pour une agriculture durable. Produisez votre propre compost et biogaz, réduisez vos coûts et régénérez vos sols.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <WaitlistForm variant="white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
