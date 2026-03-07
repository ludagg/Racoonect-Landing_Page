'use client';

import WaitlistForm from './WaitlistForm';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="waitlist" className="py-20 px-6 lg:px-20 bg-primary-light/30 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-text-main lg:text-4xl mb-6">Prêt à valoriser vos ressources ?</h2>
        <p className="text-lg text-text-main/70 mb-10 max-w-2xl mx-auto">
          Rejoignez plus de 500 exploitations agricoles qui font confiance à Racoonect pour leur transition écologique et économique. Inscrivez-vous sur notre liste d'attente.
        </p>
        <div className="flex justify-center">
          <WaitlistForm variant="primary" />
        </div>
      </motion.div>
    </section>
  );
}
