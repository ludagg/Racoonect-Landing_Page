'use client';

import Image from 'next/image';
import { Recycle, Zap, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

export default function Features() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-main lg:text-4xl mb-4">Fonctionnalités Clés</h2>
          <p className="text-text-main/60 max-w-2xl mx-auto">Une suite d&apos;outils conçue spécifiquement pour les besoins des exploitants agricoles modernes.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Feature 1 */}
          <motion.div variants={item} className="group flex flex-col rounded-2xl border border-gray-100 bg-background-light p-1 transition-all hover:shadow-xl hover:border-primary/30">
            <div className="h-48 w-full rounded-xl relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-DFH3cO0wI_QQMDXewbX8__mjx5Uzhf9anEZhFz6HsIkfQGU0ywEITATjZRELWHlZwSp-vUdRSgB1hK_lvUx7kWwTS5rffMjD3jc4-T1EafU8YJnWfXfJJS2vz2GX3l2aI2lm1P86tcl_qLmTbHqdcTlEZCICK2e7manXL_XXWgXMTGgA-TzMMIaKdrGHPMIPii7rTYFoMwjSKHw6_wNn7yupupkkozeZZvRpzzbb5o8DMTJHBnZE4rmTOKgFNldQ_1caFJqbNuE"
                alt="Compost pile monitoring"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-2 text-primary-dark">
                <Recycle className="h-6 w-6" />
                <h3 className="font-bold text-lg text-text-main">Suivi du Compost</h3>
              </div>
              <p className="text-sm text-text-main/70 leading-relaxed">
                Visualisez la maturation de votre compost en temps réel grâce à nos capteurs connectés.
              </p>
              <div className="mt-auto pt-4">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Maturation</span>
                  <span className="text-primary-dark">78%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={item} className="group flex flex-col rounded-2xl border border-gray-100 bg-background-light p-1 transition-all hover:shadow-xl hover:border-primary/30">
            <div className="h-48 w-full rounded-xl relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwXKlQdE9NBpUa8JmRtYP_Bn-G0ho6YYZGprfOJXU0qMFwP0E8WoK8oM9HKXakn11YgbsC31QPguD4hqJE525Jwi9fTrz-kXaTHOVKRMLMwC0M49voyz-9dW-mM51Ug7-SwqVQpurimUpPdw-67iP7nMeq8zUsIF5mS219Rt6ihFtO19_LGkWKdKVSxJkCVpgTz5sPjQ-uv-0YXdYB7uD8vyFppQ4HXYbEIznhj2D5i-y7ZE3JShtFv8Hy49F7skE83n5RtUHc7D8"
                alt="Biogas facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-2 text-primary-dark">
                <Zap className="h-6 w-6" />
                <h3 className="font-bold text-lg text-text-main">Production de Biogaz</h3>
              </div>
              <p className="text-sm text-text-main/70 leading-relaxed">
                Transformez vos résidus organiques en énergie propre pour chauffer vos serres.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold text-text-main">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Production active
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={item} className="group flex flex-col rounded-2xl border border-gray-100 bg-background-light p-1 transition-all hover:shadow-xl hover:border-primary/30">
            <div className="h-48 w-full rounded-xl relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsD8W_Ru_SqpIjcGd8J0nMVCTXk_eVVG9XFw34NdMzwmpQQjlFnh5Coq2g7vxCi6A9Fi8Vc4JyAcTEN5sdbQOalwYaFyfj2o7SH_vy2BXgSopSloQkiwXVsOE9KhCHoKVgyob0M0YwuchuNEumaO31WmTeygT91RU8wCWfBY5P_cE3TBALBNLyKmaOfuvcq-lFG0VxWNK7ngcnGONK6IG2kBt3FM3KtO7YvAZN0cr-TA-6Gpe7fDy_z5qklCicW-UzrAHWUZWU5UQ"
                alt="Farmer calculating savings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-2 text-primary-dark">
                <PiggyBank className="h-6 w-6" />
                <h3 className="font-bold text-lg text-text-main">Économies Réelles</h3>
              </div>
              <p className="text-sm text-text-main/70 leading-relaxed">
                Réduisez vos coûts d&apos;intrants chimiques et de gestion des déchets de manière significative.
              </p>
              <div className="mt-auto pt-4">
                <span className="text-xs bg-primary/20 text-primary-dark px-2 py-1 rounded font-bold">+15% de marge</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
