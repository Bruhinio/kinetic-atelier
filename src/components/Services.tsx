import React from 'react';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Services() {
  return (
    <section id="services" className="p-12 pb-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-4 uppercase">
          Surgical Tiers
        </h3>
        <h2 className="text-6xl font-display italic font-black tracking-tighter mb-8">
          EXECUTION <br />
          <span className="text-gradient">PACKAGES</span>
        </h2>
        <div className="h-px w-24 bg-brand-cyan mx-auto mb-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICE_PACKAGES.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative p-8 border transition-all duration-500 flex flex-col group h-full",
              pkg.recommended 
                ? "bg-brand-gray-900 border-brand-cyan/30 cyan-glow shadow-2xl scale-105 z-10" 
                : "bg-brand-black border-white/5 hover:border-white/20"
            )}
          >
            {pkg.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-brand-cyan text-brand-black text-[10px] font-display font-black tracking-[0.3em] px-6 py-2 italic uppercase">
                  ATELIER CHOICE
                </span>
              </div>
            )}

            <div className="mb-12">
              <h4 className="text-2xl font-display italic font-black tracking-tight mb-4 group-hover:text-brand-cyan transition-colors">
                {pkg.name}
              </h4>
              <p className="text-brand-gray-400 text-sm font-light h-10 italic">
                {pkg.description}
              </p>
            </div>

            <div className="mb-12">
              <span className="text-5xl font-display font-black italic tracking-tighter">
                {pkg.price}
              </span>
              {pkg.price !== "CUSTOM" && (
                <span className="text-brand-gray-400 font-display text-xs tracking-widest ml-2 italic">
                  STARTING AT
                </span>
              )}
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {pkg.features.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-xs font-display tracking-widest text-brand-gray-400 group-hover:text-white transition-colors">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={cn(
              "w-full py-4 font-display font-bold italic text-sm tracking-widest flex items-center justify-center gap-3 transition-colors",
              pkg.recommended
                ? "bg-brand-cyan text-brand-black hover:bg-white"
                : "bg-white text-brand-black hover:bg-brand-cyan"
            )}>
              SELECT EXECUTION
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* DTF Section Callout */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-brand-gray-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center">
               <span className="text-brand-black font-black italic text-xs">DTF</span>
             </div>
             <span className="text-brand-cyan font-display tracking-widest text-xs uppercase">Precision Transfers</span>
          </div>
          <h3 className="text-3xl font-display italic font-black mb-4">MOLECULAR ADHESION DTF</h3>
          <p className="text-brand-gray-400 font-light italic text-sm leading-relaxed">
            Our Direct-to-Film (DTF) technology allows for ultra-precise logos and typography with zero peeling and industrial durability. Perfect for branding and racing liveries.
          </p>
        </div>
        <button className="px-12 py-5 border-2 border-brand-cyan text-brand-cyan font-display font-black italic tracking-widest hover:bg-brand-cyan hover:text-brand-black transition-all">
          EXPLORE DTF LAB
        </button>
      </motion.div>
    </section>
  );
}
