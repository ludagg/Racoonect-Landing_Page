'use client';

import { X, Check } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollingColumn from './ScrollingColumn';

const IMAGES_COL_1 = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCUYo0McbmOpxesjF2ouVhz2SvQX_CrglkB-kvLMgw-OfllmJ9Eo5KqiMwLSTPMTx4ukN68ALddIRoLGCF9239IRSVNUdJuc5MzK1d-XGQM8qRiYj4q9PbtGPAgnESWq6X3xArZMfKpHXpQnksdFGvJAjm9Pnh2_s8ZXXMgVytZFSbqiRQKJWSnUG6FWm2TkMzZIaLTYrArG1ggW2zkoycULLWDe5sy7FSWRpowIYl8H_MUy8NxgnfW8pUulv0dM1LPmIpbPCdahU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsD8W_Ru_SqpIjcGd8J0nMVCTXk_eVVG9XFw34NdMzwmpQQjlFnh5Coq2g7vxCi6A9Fi8Vc4JyAcTEN5sdbQOalwYaFyfj2o7SH_vy2BXgSopSloQkiwXVsOE9KhCHoKVgyob0M0YwuchuNEumaO31WmTeygT91RU8wCWfBY5P_cE3TBALBNLyKmaOfuvcq-lFG0VxWNK7ngcnGONK6IG2kBt3FM3KtO7YvAZN0cr-TA-6Gpe7fDy_z5qklCicW-UzrAHWUZWU5UQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXKlQdE9NBpUa8JmRtYP_Bn-G0ho6YYZGprfOJXU0qMFwP0E8WoK8oM9HKXakn11YgbsC31QPguD4hqJE525Jwi9fTrz-kXaTHOVKRMLMwC0M49voyz-9dW-mM51Ug7-SwqVQpurimUpPdw-67iP7nMeq8zUsIF5mS219Rt6ihFtO19_LGkWKdKVSxJkCVpgTz5sPjQ-uv-0YXdYB7uD8vyFppQ4HXYbEIznhj2D5i-y7ZE3JShtFv8Hy49F7skE83n5RtUHc7D8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBAM_nniT73e2wAsWAgGm1LDPBt5AszHypPXgawhegRYNfAr6309rcqdvEZojj-5hfN-HTY3D5IViPBQONYQf21gZgkpbUY9KTSj12e50qrc06bdtQZO44R9_uJBNmynxKeUG8oMAoDwrpS159K4ZpVnGQLOtK9tP462Y97vpD7TYNQbqTzPjvBiNw_6BMd7fMaBgP18dmD8pE9thbJK5V2tIZR4NGpq4y5D02PeyFguZxXNwziOUMwUEd2s_dw_woEdqBgED-rmmM"
];

const IMAGES_COL_2 = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjSyBvXDnsridqr_vZ7c6rCxIr0hFhw9vjZ5JRgt3hoUQ5pdYUG9MGgiJyCskVUE1FXlERYf3eJi-HcmvTnyXkt3RCOiPz6sPOW_gxAXCz01ZzaiIKpBzZQibn4IhHGtKj-oBDQOweeouM2CXNxHuYOjCcRjPzgbqAHUb8DlUlYYNo-U_GpAKontfjx7e5jwCg8lbieYnbSSU9F9JtJfMTZ7OK6JtnkmZyBBfywFoGvIeazaGj2m_s-rBPpVqx8kxYPb9nCl0sxA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DFH3cO0wI_QQMDXewbX8__mjx5Uzhf9anEZhFz6HsIkfQGU0ywEITATjZRELWHlZwSp-vUdRSgB1hK_lvUx7kWwTS5rffMjD3jc4-T1EafU8YJnWfXfJJS2vz2GX3l2aI2lm1P86tcl_qLmTbHqdcTlEZCICK2e7manXL_XXWgXMTGgA-TzMMIaKdrGHPMIPii7rTYFoMwjSKHw6_wNn7yupupkkozeZZvRpzzbb5o8DMTJHBnZE4rmTOKgFNldQ_1caFJqbNuE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIpZ3jl3CobJ24mRU7SeUYHPOoPo3qunWC8-TUNp-kX5BIcqPT9_JwwEFmQ4qdPdqE54FDR3Lpb1SPHbgXbP-zAcnBrY-0iO3PyPXJ4gfZ4jolCVvka81daYovyfd15qBIpptQi7egj_tVP5Ov6FGSd9konC-kSVTLAKQRrzd-Zjcjw1fu0T-vv3mPEL0jwh-ycPCaFf_4RGIaCQzPjK5xxt15QtVBNZM_ChwKbdP899V5W-orQIM_pksKOytbCVngkU66xe9We1s",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCUYo0McbmOpxesjF2ouVhz2SvQX_CrglkB-kvLMgw-OfllmJ9Eo5KqiMwLSTPMTx4ukN68ALddIRoLGCF9239IRSVNUdJuc5MzK1d-XGQM8qRiYj4q9PbtGPAgnESWq6X3xArZMfKpHXpQnksdFGvJAjm9Pnh2_s8ZXXMgVytZFSbqiRQKJWSnUG6FWm2TkMzZIaLTYrArG1ggW2zkoycULLWDe5sy7FSWRpowIYl8H_MUy8NxgnfW8pUulv0dM1LPmIpbPCdahU"
];

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
              <div className="mt-12">
                <ScrollingColumn images={IMAGES_COL_1} duration={35} />
              </div>
              <div>
                <ScrollingColumn images={IMAGES_COL_2} reverse duration={45} />
              </div>
            </div>

            {/* Decorative Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
