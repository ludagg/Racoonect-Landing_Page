'use client';

import Image from 'next/image';
import { X, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProblemSolution() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background-light overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
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
              Le modèle linéaire &quot;extraire, produire, jeter&quot; épuise nos sols. Racoonect vous accompagne vers un modèle régénératif.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                { icon: X, text: "Coûts élevés des intrants chimiques", isNegative: true },
                { icon: Check, text: "Autonomie en fertilisants naturels", isNegative: false },
                { icon: Check, text: "Revenus complémentaires via le biogaz", isNegative: false }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full ${item.isNegative ? 'bg-red-100 text-red-600' : 'bg-primary/20 text-primary-dark'}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-text-main font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 relative w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="space-y-4 mt-12"
              >
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCUYo0McbmOpxesjF2ouVhz2SvQX_CrglkB-kvLMgw-OfllmJ9Eo5KqiMwLSTPMTx4ukN68ALddIRoLGCF9239IRSVNUdJuc5MzK1d-XGQM8qRiYj4q9PbtGPAgnESWq6X3xArZMfKpHXpQnksdFGvJAjm9Pnh2_s8ZXXMgVytZFSbqiRQKJWSnUG6FWm2TkMzZIaLTYrArG1ggW2zkoycULLWDe5sy7FSWRpowIYl8H_MUy8NxgnfW8pUulv0dM1LPmIpbPCdahU"
                    alt="Wheat field sunset"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">Sols vivants</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="space-y-4"
              >
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjSyBvXDnsridqr_vZ7c6rCxIr0hFhw9vjZ5JRgt3hoUQ5pdYUG9MGgiJyCskVUE1FXlERYf3eJi-HcmvTnyXkt3RCOiPz6sPOW_gxAXCz01ZzaiIKpBzZQibn4IhHGtKj-oBDQOweeouM2CXNxHuYOjCcRjPzgbqAHUb8DlUlYYNo-U_GpAKontfjx7e5jwCg8lbieYnbSSU9F9JtJfMTZ7OK6JtnkmZyBBfywFoGvIeazaGj2m_s-rBPpVqx8kxYPb9nCl0sxA"
                    alt="Sprout growing in soil"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">Croissance saine</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Decorative Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/10"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-primary/20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
